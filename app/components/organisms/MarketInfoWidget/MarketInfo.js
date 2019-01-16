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
          <div className="secondary-text">{data.value}</div>
        )}
      </Typography>
    </div>
  );
};

const GridContent = ({ data }) => {
  const viewMap = [];
  for (let i = 0; i < data.length; i += 2) {
    const first = data[i];
    const second = data[i + 1];
    viewMap.push(
      <Grid item xs={12} sm={6}>
        <InfoView data={first} />
        {second ? <InfoView data={second} /> : <div />}
      </Grid>
    );
  }
  return viewMap;
};

const MarketInfo = ({ data, classes }) => {
  return (
    <Card className={classes.card}>
      <Grid container>
        <GridContent data={data} />
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
