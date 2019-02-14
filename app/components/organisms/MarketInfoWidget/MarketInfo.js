import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MiddleTruncate from 'react-middle-truncate';
import Grid from '@material-ui/core/Grid';
import CopyIcon from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const InfoView = ({ data }) => (
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
        <div className="rows-view address">
          <MiddleTruncate className="secondary-text child" text={data.value} />
          <CopyToClipboard
            onCopy={(text, result) => {
              if (result) {
                alert('copied successfully');
              }
            }}
            text={data.value}
          >
            <CopyIcon />
          </CopyToClipboard>
        </div>
      ) : (
        <div className="secondary-text">{data.value}</div>
      )}
    </Typography>
  </div>
);

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

const MarketInfo = ({ data, classes }) => (
  <Card className={classes.card}>
    <Grid container>
      <GridContent data={data} />
    </Grid>
  </Card>
);

MarketInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

const styles = () => ({
  card: {
    padding: 20
  }
});
export default withStyles(styles)(MarketInfo);
