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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

import './style.scss';

const TxItem = ({ data }) => (
  <TableRow key={data.name}>
    <TableCell component="th" scope="row">
      <Link to={`/txs/${data.hash}`}>{data.hash}</Link>
    </TableCell>
    <TableCell>{data.senders.length}</TableCell>
    <TableCell>{data.receivers.length}</TableCell>
    <TableCell>{data.type}</TableCell>
  </TableRow>
);

TxItem.propTypes = {
  data: PropTypes.object.isRequired
};

const TxnListTable = ({ classes, txns, displayHeader }) => {
  return (
    <Table className={classes.table}>
      <TableHead>
        {displayHeader && (
          <TableRow>
            <TableCell colSpan={4}>
              <h2>Transactions</h2>
            </TableCell>
          </TableRow>
        )}
        <TableRow>
          <TableCell>Transaction Hash</TableCell>
          <TableCell>Senders</TableCell>
          <TableCell>Receivers</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {txns ? (
          txns.map(data => <TxItem data={data} key={data.name} />)
        ) : (
          <TableRow>
            <TableCell colSpan={6} align="center">
              <h3>0 Transactions</h3>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

const styles = theme => ({
  root: {
    // width: '100%',
    // backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  table: {
    minWidth: 700
  }
});

TxnListTable.propTypes = {
  classes: PropTypes.object.isRequired,
  txns: PropTypes.array,
  displayHeader: PropTypes.bool
};
TxnListTable.defaultProps = {
  txns: [],
  displayHeader: true
};

export default withStyles(styles)(TxnListTable);
