import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MiddleTruncate from 'react-middle-truncate';
import moment from 'moment';

import './style.scss';

const TxnList = ({ classes, txns, match }) => {
  return (
    <List className={classes.root}>
      {txns.map(block => (
        <Card key={block.txHash} style={{ marginBottom: 10 }}>
          <ListItem>
            <ListItemText
              primary={<Link to={`txs/${block.txHash}`}>{block.txHash}</Link>}
              secondary={
                <div>
                  <b>{block.type}</b>
                  {` Transaction in block ${block.blockId}`}
                  <br />
                  {`${block.senders} Sender ${
                    block.receivers
                  } Receiver ${moment(block.time).fromNow()}`}
                </div>
              }
            />
          </ListItem>
        </Card>
      ))}
    </List>
  );
};

const styles = theme => ({
  root: {
    // width: '100%',
    // backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
});

TxnList.propTypes = {
  classes: PropTypes.object.isRequired,
  txns: PropTypes.array,
  match: PropTypes.string
};
TxnList.defaultProps = {
  txns: []
};

export default withStyles(styles)(TxnList);
