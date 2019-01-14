/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_BLOCKS_REQUEST } from './constants';
import { getBlocksSuccess } from './actions';

import request from 'utils/request';

export function* getBlocks() {
  const requestURL = `http://157.230.32.23:50502/Blocks/3901/3905`;

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
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_BLOCKS_REQUEST, getBlocks);
}
