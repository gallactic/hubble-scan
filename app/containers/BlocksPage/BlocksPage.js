/* eslint-disable arrow-parens */
/*
 * AccountPage
 *
 * List of all accounts
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.scss';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});
class BlocksPage extends React.Component {
  componentDidMount() {
    this.props.getBlockList();
  }

  renderBlock = data => {
    const row = data.header;
    const { match } = this.props;
    return (
      <TableRow key={row.height}>
        <TableCell component="th" scope="row">
          <Link to={`blocks/${row.height}`}>{row.height}</Link>
        </TableCell>
        <TableCell>{row.time}</TableCell>
        <TableCell>{row.validators_hash}</TableCell>
        <TableCell>{row.num_txs}</TableCell>
      </TableRow>
    );
  };

  render() {
    const { match, classes, blocks } = this.props;
    let id = 0;
    return (
      <div className="account-page">
        <Helmet>
          <title>Account Page</title>
          <meta name="description" content="Account Page" />
        </Helmet>
        {/* <h1>Account lists</h1>
        <div>
          <Link to={`${match.url}/${tx}`}>{tx}</Link>
        </div> */}
        <div>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Block Number</TableCell>
                  <TableCell>Timestamp</TableCell>
                  <TableCell>Validators Hash</TableCell>
                  <TableCell>Num Txs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{blocks.map(this.renderBlock)}</TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

BlocksPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlocksPage);
