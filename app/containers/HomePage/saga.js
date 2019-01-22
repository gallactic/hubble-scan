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
  const statusInfo = yield call(request, 'http://157.230.32.23:50502/Status');
  const result = {};
  let startBlock = 1;
  let txBlock = 1;
  let endBlock = 5;
  if (statusInfo) {
    result.latestBlockHash = statusInfo.LatestBlockHash;
    result.latestBlockNumber = statusInfo.LatestBlockHeight;
    result.latestBlockTime = statusInfo.LatestBlockTime;
    endBlock = statusInfo.LatestBlockHeight;
    startBlock = endBlock - 5;
    txBlock = endBlock - 40000;
  }
  yield put(getBlockInfoSuccess(result));
  const requestURL = `http://157.230.32.23:50502/Blocks/${startBlock}/${endBlock}`;
  try {
    // Call our request helper (see 'utils/request')
    const blocks = yield call(request, requestURL);
    if (blocks) {
      yield put(getBlocksSuccess(blocks.BlockMeta));
    } else {
      yield put(getBlocksSuccess([]));
    }
  } catch (err) {
    console.log(err);
    yield put(getBlocksSuccess([]));
  }
  const txRequestURL = `http://157.230.32.23:50502/Blocks/${txBlock}/${endBlock}`;
  try {
    // Call our request helper (see 'utils/request')
    const blocks = yield call(request, txRequestURL);
    if (blocks) {
      const blockTx = blocks.BlockMeta.filter(
        block => block.header.num_txs > 0
      );
      console.log('Blocks length ', blocks.BlockMeta.length, blockTx.length);
      yield put(getTxnsSuccess(blockTx));
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
    const genesisInfo = yield call(
      request,
      'http://157.230.32.23:50502/Genesis'
    );
    const result = {};
    if (genesisInfo && genesisInfo.Genesis) {
      result.genesisTime = genesisInfo.Genesis.genesisTime;
      result.accounts = genesisInfo.Genesis.accounts;
      result.validators = genesisInfo.Genesis.validators;
    }
    const chainInfo = yield call(request, 'http://157.230.32.23:50502/ChainID');
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
