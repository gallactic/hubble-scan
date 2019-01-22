import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_BLOCK_LIST_REQUEST } from './constants';
import { getBlocksSuccess } from './actions';

import request from 'utils/request';

export function* getBlocks() {
  const statusInfo = yield call(request, 'http://157.230.32.23:50502/Status');
  let startBlock = 1;
  let endBlock = 10;
  if (statusInfo) {
    endBlock = statusInfo.LatestBlockHeight;
    startBlock = endBlock - 10;
  }
  const requestURL = `http://157.230.32.23:50502/Blocks/${startBlock}/${endBlock}`;
  try {
    const result = yield call(request, requestURL);
    if (result) {
      yield put(getBlocksSuccess(result.BlockMeta));
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
