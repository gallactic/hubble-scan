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

class BlockDetailPage extends React.Component {
  state = {
    rawData: false
  };

  componentDidMount() {
    const { match } = this.props;
    const blockId = match.params.id;
    this.props.getBlocks(blockId);
    this.props.getBlockTx(blockId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const { match } = this.props;
      const blockId = match.params.id;
      this.props.getBlocks(blockId);
      this.props.getBlockTx(blockId);
    }
  }

  handleHiddenChange = (event, rawData) => {
    this.setState({ rawData });
  };

  renderBlock = data => (
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

  // TODO remove dummy tx hash
  renderTx = data => (
    <TableRow key={data.name}>
      <TableCell component="th" scope="row">
        <Link to={`/txs/${data.hash}`}>{data.hash}</Link>
      </TableCell>
      <TableCell>{data.senders.length}</TableCell>
      <TableCell>{data.receivers.length}</TableCell>
      <TableCell>{data.type}</TableCell>
    </TableRow>
  );

  renderTableBody = () => {
    const { match, block, classes } = this.props;
    const { rawData } = this.state;
    if (rawData) {
      return (
        <TableRow>
          <TableCell colSpan={2}>
            <ReactJson
              style={{ padding: 10, width: 700 }}
              src={block.rawData}
              displayDataTypes={false}
            />
          </TableCell>
        </TableRow>
      );
    }
    const blockId = match.params.id;
    const previousBlockId = blockId - 1;
    const info = [
      {
        name: 'Block Hash',
        value: block.blockHash
      },
      {
        name: 'Timestamp',
        value: block.time
      },
      {
        name: 'Number of Transactions',
        value: block.numTxs
      },
      {
        name: 'Previous Block Hash',
        value: block.lastBlockHash,
        redirectTo: previousBlockId
      },
      {
        name: 'Validator Hash',
        value: block.validatorHash
      },
      {
        name: 'Consensus Hash',
        value: block.consensusHash
      }
    ];
    return info.map(this.renderBlock);
  };

  render() {
    const { match, block, classes, blockTx } = this.props;
    if (!block) {
      return null;
    }
    const blockId = match.params.id;
    const { rawData } = this.state;

    return (
      <div className="block-detail-page">
        <Helmet>
          <title>BlockDetail Page</title>
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
                        <h2>{`Block Information #${blockId}`}</h2>
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
                      <TableCell>
                        <h2>Transactions</h2>
                      </TableCell>
                      <TableCell />
                      <TableCell />
                      <TableCell />
                    </TableRow>
                    <TableRow>
                      <TableCell>Transaction Hash</TableCell>
                      <TableCell>Senders</TableCell>
                      <TableCell>Receivers</TableCell>
                      <TableCell>Type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {blockTx ? (
                      blockTx.map(this.renderTx)
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} align="center">
                          <h3>0 Transactions</h3>
                        </TableCell>
                      </TableRow>
                    )}
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

BlockDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.string.isRequired,
  block: PropTypes.object,
  blockTx: PropTypes.array,
  getBlocks: PropTypes.func.isRequired,
  getBlockTx: PropTypes.func.isRequired
};

export default withStyles(styles)(BlockDetailPage);
