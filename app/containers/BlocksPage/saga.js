import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_BLOCK_LIST_REQUEST } from './constants';
import { getBlocksSuccess, setLastBlock } from './actions';

import request from 'utils/request';

export function* getBlocks({ data }) {
  let startBlock = 1;
  let endBlock = 10;
  const { lastBlock, rowsPerPage } = data;
  if (lastBlock && lastBlock !== 0) {
    endBlock = lastBlock;
    startBlock = endBlock - rowsPerPage;
    if (startBlock < 1) {
      startBlock = 1;
    }
    console.log('endBlock ', endBlock);
    console.log('startBlock', startBlock);
  } else {
    const statusInfo = yield call(request, 'Status');
    if (statusInfo) {
      endBlock = statusInfo.LatestBlockHeight;
      startBlock = endBlock - rowsPerPage;
      yield put(setLastBlock(endBlock));
    }
  }
  const requestURL = `Blocks/${startBlock}/${endBlock}`;
  try {
    const result = yield call(request, requestURL);
    if (result) {
      yield put(getBlocksSuccess(result.Blocks));
    } else {
      yield put(getBlocksSuccess([]));
    }
  } catch (err) {
    yield put(getBlocksSuccess([]));
  }
}

export default function* githubData() {
  yield takeLatest(GET_BLOCK_LIST_REQUEST, getBlocks);
}
