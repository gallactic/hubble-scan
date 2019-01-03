import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const BlockList = ({ loading, error, repos }) => {
  return (
    <Card>
      <CardActions>
        <Typography gutterBottom variant="h5" component="h2">
          Blocks
        </Typography>
        <Button size="small" color="primary">
          View all
        </Button>
      </CardActions>
      <CardContent>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

BlockList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any
};

export default BlockList;
