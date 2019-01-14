import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BlockList from '../BlockList';

import './style.scss';

const BlockListWidget = ({ classes, match }) => {
  return (
    <Card raised>
      <CardActions>
        <Typography gutterBottom variant="h5" component="h2">
          Blocks
        </Typography>
        <Link to={'blocks'} className="tab-text">
          <Button size="small" color="primary">
            View all
          </Button>
        </Link>
      </CardActions>
      <CardContent>
        <BlockList />
      </CardContent>
    </Card>
  );
};

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
});

BlockListWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlockListWidget);
