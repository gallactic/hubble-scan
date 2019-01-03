import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const MarketInfo = ({ classes }) => {
  return (
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
  );
};

MarketInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = () => {
  return {
    card: {
      padding: 20
    }
  };
};
export default withStyles(styles)(MarketInfo);
