/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_BLOCKS_REQUEST, GET_INFO_REQUEST } from './constants';
import {
  getBlocksSuccess,
  getInfoSuccess,
  getBlockInfoSuccess,
  getTxnsSuccess
} from './actions';

import request from 'utils/request';

export function* getBlocks() {
  const statusInfo = yield call(request, 'Status');
  const result = {};
  let startBlock = 1;
  let endBlock = 5;
  if (statusInfo) {
    result.latestBlockHash = statusInfo.LatestBlockHash;
    result.latestBlockNumber = statusInfo.LatestBlockHeight;
    result.latestBlockTime = statusInfo.LatestBlockTime;
    endBlock = statusInfo.LatestBlockHeight;
    startBlock = endBlock - 5;
  }
  yield put(getBlockInfoSuccess(result));
  const requestURL = `Blocks/${startBlock}/${endBlock}`;
  try {
    // Call our request helper (see 'utils/request')
    const blocks = yield call(request, requestURL);
    if (blocks) {
      yield put(getBlocksSuccess(blocks.Blocks));
    } else {
      yield put(getBlocksSuccess([]));
    }
  } catch (err) {
    console.log(err);
    yield put(getBlocksSuccess([]));
  }
  try {
    // Call our request helper (see 'utils/request')
    const txBlock = endBlock < 1000 ? 1 : endBlock - 1000;
    const txRequestURL = `Blocks/${txBlock}/${endBlock}`;
    const blocks = yield call(request, txRequestURL);
    if (blocks) {
      const blockTx = blocks.Blocks.filter(block => block.header.num_txs > 0);
      const txResult = [];
      blockTx.forEach(block => {
        block.Txs.forEach(txElement => {
          if (txResult.length > 5) {
            return;
          }
          txElement.Envelope = JSON.parse(txElement.Envelope);
          const txn = {
            blockId: block.header.height,
            time: block.header.time,
            txHash: txElement.Hash,
            type: txElement.Envelope.type,
            senders: txElement.Envelope.tx.senders.length,
            receivers: txElement.Envelope.tx.senders.length
          };
          txResult.push(txn);
        });
      });
      yield put(getTxnsSuccess(txResult));
    } else {
      yield put(getTxnsSuccess([]));
    }
  } catch (err) {
    console.log(err);
    yield put(getTxnsSuccess([]));
  }
}

/**
 * result = {
        chainName: genesisInfo.chainName,
        chainId: '',
        genesisTime: genesisInfo.genesisTime,
        genesisHash: '',
        latestBlockNumber: '',
        latestBlockTime: '',
        accounts: genesisInfo.accounts.length,
        validators: genesisInfo.validators.length
      };
 */
export function* getInfo() {
  try {
    const genesisInfo = yield call(request, 'Genesis');
    const result = {};
    if (genesisInfo && genesisInfo.Genesis) {
      result.genesisTime = genesisInfo.Genesis.genesisTime;
      result.accounts = genesisInfo.Genesis.accounts;
      result.validators = genesisInfo.Genesis.validators;
    }
    const chainInfo = yield call(request, 'ChainID');
    if (chainInfo) {
      result.chainName = chainInfo.ChainName;
      result.chainId = chainInfo.ChainId;
      result.genesisHash = chainInfo.GenesisHash;
    }
    yield put(getInfoSuccess(result));
  } catch (err) {
    yield put(getInfoSuccess({}));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(GET_BLOCKS_REQUEST, getBlocks);
  yield takeLatest(GET_INFO_REQUEST, getInfo);
}
