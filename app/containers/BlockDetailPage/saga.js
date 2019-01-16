/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_BLOCK_DETAIL_REQUEST } from './constants';
import { getBlockSuccess, getBlockError } from './actions';

export function* getBlockDetail({ data }) {
  if (data) {
    const requestURL = `http://157.230.32.23:50502/Block/${data}`;
    try {
      const result = yield call(request, requestURL);
      if (result && result.BlockMeta) {
        yield put(getBlockSuccess(result.BlockMeta));
      } else {
        yield put(getBlockError());
      }
    } catch (err) {
      yield put(getBlockError());
    }
  } else {
    yield put(getBlockError());
  }
}

export default function* githubData() {
  yield takeLatest(GET_BLOCK_DETAIL_REQUEST, getBlockDetail);
}
