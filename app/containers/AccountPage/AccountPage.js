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
class AccountPage extends React.Component {
  componentDidMount() {
    this.props.getValidators();
  }

  renderValidator = data => {
    const row = data;
    const { match } = this.props;
    return (
      <TableRow key={data.id}>
        <TableCell component="th" scope="row">
          {data.id}
        </TableCell>
        <TableCell>
          <Link to={`${match.url}/${row.address}`}>{row.address}</Link>
        </TableCell>
        <TableCell>{row.pub_key}</TableCell>
        <TableCell>{row.stack ? row.stack : 0}</TableCell>
        <TableCell>{row.power}</TableCell>
      </TableRow>
    );
  };

  render() {
    const { match, classes, validators } = this.props;
    let id = 0;
    const validatorMap = validators.map(data => {
      id += 1;
      return { id, ...data };
    });
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
                  <TableCell>#</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Public Key</TableCell>
                  <TableCell>Stake</TableCell>
                  <TableCell>Power</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{validatorMap.map(this.renderValidator)}</TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

AccountPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AccountPage);
