import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import './style.scss';

const BlockListWidget = ({ classes, match }) => {
  const blockList = [
    {
      blockNumber: 6443918,
      txSize: 2,
      size: '811 bytes',
      time: '2 minutes ago',
      validator: {
        name: 'Walter Karshat',
        address: '0x0cd62a4E72E4D2F489773ffaEBF687952FC65bc3'
      },
      reward: 2.000021
    },
    {
      blockNumber: 6443919,
      txSize: 2,
      size: '811 bytes',
      time: '2 minutes ago',
      validator: {
        name: 'Walter Karshat',
        address: '0x0cd62a4E72E4D2F489773ffaEBF687952FC65bc3'
      },
      reward: 2.000021
    },
    {
      blockNumber: 6445297,
      txSize: 2,
      size: '811 bytes',
      time: '2 minutes ago',
      validator: {
        name: 'Walter Karshat',
        address: '0x0cd62a4E72E4D2F489773ffaEBF687952FC65bc3'
      },
      reward: 2.000021
    },
    {
      blockNumber: 6443920,
      txSize: 2,
      size: '811 bytes',
      time: '2 minutes ago',
      validator: {
        name: 'Walter Karshat',
        address: '0x0cd62a4E72E4D2F489773ffaEBF687952FC65bc3'
      },
      reward: 2.000021
    },
    {
      blockNumber: 6443921,
      txSize: 2,
      size: '811 bytes',
      time: '2 minutes ago',
      validator: {
        name: 'Walter Karshat',
        address: '0x0cd62a4E72E4D2F489773ffaEBF687952FC65bc3'
      },
      reward: 2.000021
    },
    {
      blockNumber: 6443922,
      txSize: 2,
      size: '811 bytes',
      time: '2 minutes ago',
      validator: {
        name: 'Walter Karshat',
        address: '0x0cd62a4E72E4D2F489773ffaEBF687952FC65bc3'
      },
      reward: 2.000021
    },
    {
      blockNumber: 6444568,
      txSize: 0,
      size: '588 bytes',
      time: 'an hour ago',
      validator: {
        name: 'Adam Kagy',
        address: '0x7bd556b838a9e330a815a53ef39e04ff2fdf2392'
      },
      reward: 2
    }
  ];
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
                  {`${block.txSize} transactions ${block.size} ${block.time}`}
                  <br />
                  {'Validator '}
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {`${block.validator.name} (${block.validator.address})`}
                  </Typography>
                  <br />
                  {`Reward ${block.reward} GTX`}
                </React.Fragment>
              }
            />
          </ListItem>
        </Card>
      ))}
    </List>
  );
};

const styles = (theme) => ({
  root: {
    // width: '100%',
    // backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
});

BlockListWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlockListWidget);
