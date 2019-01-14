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

const BlockList = ({ classes, blocks, match }) => {
  console.log('BlockList blocks', blocks);

  const blockList = blocks.map((item) => {
    const block = item.header;
    return {
      blockNumber: block.height,
      txSize: block.num_txs,
      size: '811 bytes',
      time: moment(block.time).fromNow(),
      validator: {
        name: 'Walter Karshat',
        address: block.validators_hash
      }
    };
  });

  return (
    <List className={classes.root}>
      {blockList.map((block) => (
        <Card key={block.blockNumber} style={{ marginBottom: 10 }}>
          <ListItem>
            <div />
            <ListItemText
              primary={
                <Link to={`blocks/${block.blockNumber}`}>
                  {block.blockNumber}
                </Link>
              }
              secondary={
                <React.Fragment>
                  {`${block.txSize} transactions ${block.time}`}
                  <br />
                  {'Validator '}
                  <MiddleTruncate text={block.validator.address} />
                  <br />
                  {/* {`Reward ${block.reward} GTX`} */}
                </React.Fragment>
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

BlockList.propTypes = {
  classes: PropTypes.object.isRequired,
  blocks: PropTypes.array,
  match: PropTypes.string
};
BlockList.defaultProps = {
  blocks: []
};

export default withStyles(styles)(BlockList);
