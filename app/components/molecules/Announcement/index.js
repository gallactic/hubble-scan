import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const styles = () => ({
  announcement: {
    paddingBottom: 10,
    fontSize: 14
  }
});

const Announcement = (props) => {
  const { classes } = props;
  return (
    <div className={classes.announcement}>
      <strong>Service Announcement: </strong>Constantinople hard fork at block
      #7080000, estimated around the 15-16th of Jan 2019
    </div>
  );
};

Announcement.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Announcement);
