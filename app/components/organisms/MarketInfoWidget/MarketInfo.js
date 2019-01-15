import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MiddleTruncate from 'react-middle-truncate';
import Grid from '@material-ui/core/Grid';

const InfoView = ({ data }) => {
  return (
    <div>
      <Typography className="primary-text" component="p">
        {data.name}
      </Typography>
      <Typography
        className="secondary-text"
        gutterBottom
        variant="h6"
        component="h6"
      >
        {data.trunc ? (
          <MiddleTruncate className="secondary-text" text={data.value} />
        ) : (
          data.value
        )}
      </Typography>
    </div>
  );
};

const MarketInfo = ({ data, classes }) => {
  const leftTop = data[0];
  const leftBottom = data[1];
  const rightTop = data[2];
  const rightBottom = data[3];
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <InfoView data={leftTop} />
          <InfoView data={leftBottom} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InfoView data={rightTop} />
          <InfoView data={rightBottom} />
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
