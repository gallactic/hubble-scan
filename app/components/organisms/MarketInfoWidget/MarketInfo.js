import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const MarketInfo = ({ data, classes }) => {
  const leftTop = data[0];
  const leftBottom = data[1];
  const rightTop = data[2];
  const rightBottom = data[3];
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography className="primary-text" component="p">
            {leftTop.name}
          </Typography>
          <Typography
            className="secondary-text"
            gutterBottom
            variant="h6"
            component="h6"
          >
            {leftTop.value}
          </Typography>
          <Typography className="primary-text" component="p">
            {leftBottom.name}
          </Typography>
          <Typography
            className="secondary-text"
            gutterBottom
            variant="h6"
            component="h6"
          >
            {leftBottom.value}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className="primary-text" component="p">
            {rightTop.name}
          </Typography>
          <Typography
            className="secondary-text"
            gutterBottom
            variant="h6"
            component="h6"
          >
            {rightTop.value}
          </Typography>
          <Typography className="primary-text" component="p">
            {rightBottom.name}
          </Typography>
          <Typography
            className="secondary-text"
            gutterBottom
            variant="h6"
            component="h6"
          >
            {rightBottom.value}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

MarketInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

const styles = () => {
  return {
    card: {
      padding: 20
    }
  };
};
export default withStyles(styles)(MarketInfo);
