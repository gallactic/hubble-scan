/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_BLOCK_LIST_REQUEST } from './constants';
import { getBlocksSuccess } from './actions';

import request from 'utils/request';

export function* getBlocks() {
  const requestURL = 'http://157.230.32.23:50502/Blocks/123/133';
  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    if (result) {
      yield put(getBlocksSuccess(result.BlockMeta));
    } else {
      yield put(getBlocksSuccess([]));
    }
  } catch (err) {
    console.log(err);
    yield put(getBlocksSuccess([]));
  }
}

export default function* githubData() {
  yield takeLatest(GET_BLOCK_LIST_REQUEST, getBlocks);
}
