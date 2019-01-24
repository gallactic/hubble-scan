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
import TablePagination from '@material-ui/core/TablePagination';
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
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 10,
      page: 1,
      lastPage: this.calculateLastPage(10, props.lastBlock)
    };
  }

  componentDidMount() {
    this.fetchBlocks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lastBlock !== this.props.lastBlock) {
      const { rowsPerPage } = this.state;
      const lastPage = this.calculateLastPage(
        rowsPerPage,
        this.props.lastBlock
      );
      this.setState({ rowsPerPage, lastPage });
    }
  }

  calculateLastPage = (rowsPerPage, lastBlock) => {
    console.log('calc last page', rowsPerPage, lastBlock);
    return Math.ceil(lastBlock / rowsPerPage);
  };

  handleChangeRowsPerPage = event => {
    const rowsPerPage = event.target.value;
    const { lastBlock } = this.props;
    const lastPage = this.calculateLastPage(rowsPerPage, lastBlock);
    this.setState({ rowsPerPage, lastPage, page: 1 }, this.fetchBlocks);
  };

  handleChangePage = (event, page) => {
    this.setState({ page }, this.fetchBlocks);
  };

  fetchBlocks = () => {
    const { lastBlock } = this.props;
    const { rowsPerPage, page } = this.state;
    if (lastBlock) {
      const pageValue = rowsPerPage * page;
      const endBlock = lastBlock - pageValue;
      this.props.getBlockList(endBlock, rowsPerPage);
    } else {
      this.props.getBlockList(lastBlock, rowsPerPage);
    }
  };

  renderBlock = data => {
    const row = data.header;
    return (
      <TableRow key={row.height}>
        <TableCell component="th" scope="row">
          <Link to={`blocks/${row.height}`}>{row.height}</Link>
        </TableCell>
        <TableCell>{row.time}</TableCell>
        <TableCell>{row.validators_hash}</TableCell>
        <TableCell>{row.num_txs ? row.num_txs : 0}</TableCell>
      </TableRow>
    );
  };

  render() {
    const { classes, blocks, lastBlock } = this.props;
    const { rowsPerPage, page, lastPage } = this.state;
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
            <TablePagination
              rowsPerPageOptions={[10, 20, 50, 100]}
              component="div"
              count={lastPage}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page'
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page'
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    );
  }
}

BlocksPage.propTypes = {
  classes: PropTypes.object.isRequired,
  blocks: PropTypes.array.isRequired,
  lastBlock: PropTypes.number,
  getBlockList: PropTypes.func.isRequired
};

export default withStyles(styles)(BlocksPage);
