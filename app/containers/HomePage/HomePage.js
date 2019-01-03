/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import './style.scss';

class HomePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    const { classes } = this.props;
    const data = [
      { name: '12/20/2018', uv: 4000, pv: 2400, amt: 2400 },
      { name: '12/21/2018', uv: 3000, pv: 1398, amt: 2210 },
      { name: '12/22/2018', uv: 2000, pv: 9800, amt: 2290 },
      { name: '12/23/2018', uv: 2780, pv: 3908, amt: 2000 },
      { name: '12/24/2018', uv: 1890, pv: 4800, amt: 2181 },
      { name: '12/25/2018', uv: 2390, pv: 3800, amt: 2500 },
      { name: '12/26/2018', uv: 3490, pv: 4300, amt: 2100 }
    ];
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="HubbleScan application homepage" />
        </Helmet>
        <div className="home-page">
          <div className={classes.root}>
            <div className={classes.announcement}>
              <strong>Service Announcement: </strong>Constantinople hard fork at
              block #7080000, estimated around the 15-16th of Jan 2019
            </div>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Typography className="primary-text" component="p">
                        Last Block
                      </Typography>
                      <Typography
                        className="secondary-text"
                        gutterBottom
                        variant="h5"
                        component="h5"
                      >
                        6996392
                      </Typography>
                      <Typography className="primary-text" component="p">
                        Transactions
                      </Typography>
                      <Typography
                        className="secondary-text"
                        gutterBottom
                        variant="h5"
                        component="h5"
                      >
                        369.31 M (4.3 TPS)
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography className="primary-text" component="p">
                        Price
                      </Typography>
                      <Typography
                        className="secondary-text"
                        gutterBottom
                        variant="h5"
                        component="h5"
                      >
                        $144.88 USD
                      </Typography>
                      <Typography className="primary-text" component="p">
                        Market Cap
                      </Typography>
                      <Typography
                        className="secondary-text"
                        gutterBottom
                        variant="h5"
                        component="h5"
                      >
                        $15,088,674 USD
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className={classes.graphCard}>
                  <ResponsiveContainer height="100%" width="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="5 5" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 10 }}
                        padding={{ left: 30, right: 30 }}
                      />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </article>
    );
  }
}

const styles = theme => {
  const padding = theme.spacing.unit * 2;
  return {
    root: {
      flexGrow: 1,
      padding
    },
    announcement: {
      paddingBottom: padding,
      fontSize: 14
    },
    paper: {
      height: 140
    },
    control: {
      padding
    },
    card: {
      padding: 20
    },
    graphCard: {
      paddingTop: 10,
      width: '100%',
      height: '100%',
    },
    media: {
      height: 140
    }
  };
};

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
