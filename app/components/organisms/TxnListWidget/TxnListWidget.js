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

const TxnListWidget = ({ classes, match, txns }) => {
  return (
    <Card raised>
      <CardActions>
        <Typography gutterBottom variant="h5" component="h2">
          Recent Transactions
        </Typography>
        {txns && txns.length > 0 && (
          <Link to={'blocks'} className="tab-text">
            <Button size="small" color="primary">
              View all
            </Button>
          </Link>
        )}
      </CardActions>
      <CardContent>
        {txns && txns.length > 0 && <BlockList blocks={txns} />}
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

TxnListWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TxnListWidget);
