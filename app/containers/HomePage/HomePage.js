/* eslint-disable react/prefer-stateless-function */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Announcement from '../../components/molecules/Announcement';
import BlockList from '../../components/organisms/BlockListWidget';
import MarketInfo from '../../components/organisms/MarketInfoWidget';
import PriceGraph from '../../components/organisms/PriceGraph';

import './style.scss';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getBlocks();
  }

  render() {
    const { classes, blocks } = this.props;
    console.log('ad', blocks);
    
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="HubbleScan application homepage" />
        </Helmet>
        <div className="home-page">
          <div className={classes.root}>
            <Announcement />
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <MarketInfo />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PriceGraph />
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <BlockList blocks={blocks} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <BlockList blocks={[]} />
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
      height: '100%'
    },
    media: {
      height: 140
    }
  };
};

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
