/*
 * BlockDetail
 *
 * Block details
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ReactJson from 'react-json-view';

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

class TransactionDetailPage extends React.Component {
  state = {
    rawData: false
  };

  componentDidMount() {
    const { match } = this.props;
    const txId = match.params.id;
    this.props.getTxnInformation(txId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const { match } = this.props;
      const txId = match.params.id;
      this.props.getTxnInformation(txId);
    }
  }

  handleHiddenChange = (event, rawData) => {
    this.setState({ rawData });
  };

  buildMap = data => {
    let id = 0;
    return data.map(item => {
      id += 1;
      return { id, ...item };
    });
  };

  renderInformation = data => (
    <TableRow key={data.name}>
      <TableCell component="th" scope="row">
        {data.name}
      </TableCell>
      <TableCell>
        {data.redirectTo ? (
          <Link to={`${data.redirectTo}`}>{data.value}</Link>
        ) : (
          data.value
        )}
      </TableCell>
    </TableRow>
  );

  renderTx = data => (
    <TableRow key={data.id}>
      <TableCell>{data.id}</TableCell>
      <TableCell component="th" scope="row">
        <Link to={`/txs/${data.address}`}>{data.address}</Link>
      </TableCell>
      <TableCell>{data.sequence}</TableCell>
      <TableCell>{data.amount}</TableCell>
    </TableRow>
  );

  renderTableBody = () => {
    const { match, txn, classes } = this.props;
    const { rawData } = this.state;
    if (rawData) {
      return (
        <TableRow>
          <TableCell colSpan={2}>
            <ReactJson
              style={{ padding: 10, width: 700 }}
              src={txn.rawData}
              displayDataTypes={false}
            />
          </TableCell>
        </TableRow>
      );
    }
    const info = [
      {
        name: 'Block ID',
        value: txn.blockId
      },
      {
        name: 'Transaction Hash',
        value: txn.txHash
      },
      {
        name: 'Chain ID',
        value: txn.chainId
      },
      {
        name: 'Type',
        value: txn.type
      },
      {
        name: 'Total Sent',
        value: txn.totalSent
      },
      {
        name: 'Total Received',
        value: txn.totalReceived
      }
    ];
    return info.map(this.renderInformation);
  };

  renderEmpty = text => {
    return (
      <TableRow>
        <TableCell colSpan={6} align="center">
          <h3>{text}</h3>
        </TableCell>
      </TableRow>
    );
  };

  render() {
    const { txn, classes } = this.props;
    if (!txn) {
      return <div />;
    }
    const { rawData } = this.state;
    const senderMap = this.buildMap(txn.tx.senders);
    const receiverMap = this.buildMap(txn.tx.receivers);
    return (
      <div className="block-detail-page">
        <Helmet>
          <title>Transaction Page</title>
          <meta name="description" content="BlockDetail Page" />
        </Helmet>
        <div>
          <Grid container spacing={24} justify="center">
            <Grid item xs={12} sm={10}>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h2>{'Transaction Information'}</h2>
                      </TableCell>
                      <TableCell align="right">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={rawData}
                              onChange={this.handleHiddenChange}
                              value="rawData"
                              color="primary"
                            />
                          }
                          labelPlacement="start"
                          label="Raw Data"
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{this.renderTableBody()}</TableBody>
                </Table>
              </Paper>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={4}>
                        <h2>Senders</h2>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Index</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Sequence</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {senderMap.length > 0
                      ? senderMap.map(this.renderTx)
                      : this.renderEmpty('No Senders')}
                  </TableBody>
                </Table>
              </Paper>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={4}>
                        <h2>Receivers</h2>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Index</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Sequence</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {receiverMap.length > 0
                      ? receiverMap.map(this.renderTx)
                      : this.renderEmpty('No Receivers')}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

TransactionDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.string.isRequired,
  block: PropTypes.object,
  blockTx: PropTypes.array,
  getTxnInformation: PropTypes.func.isRequired
};

export default withStyles(styles)(TransactionDetailPage);
