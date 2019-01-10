import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './style.scss';

const BlockList = ({ classes }) => {
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
    <Card raised>
      <CardActions>
        <Typography gutterBottom variant="h5" component="h2">
          Blocks
        </Typography>
        <Button size="small" color="primary">
          View all
        </Button>
      </CardActions>
      <CardContent>
        <List className={classes.root}>
          {blockList.map((block) => (
            <Card key={block.blockNumber} style={{ marginBottom: 10 }}>
              <ListItem>
                <div />
                <ListItemText
                  primary={block.blockNumber}
                  secondary={
                    <React.Fragment>
                      {`${block.txSize} transactions ${block.size} ${
                        block.time
                      }`}
                      <br />
                      {'Validator '}
                      <Typography
                        component="span"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`${
                          block.validator.name
                        } (${block.validator.address})`}
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
      </CardContent>
    </Card>
  );
};

const styles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
});

BlockList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlockList);
