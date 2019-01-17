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
        const { header, block_id } = result.BlockMeta;
        const {
          num_txs,
          time,
          last_block_id,
          validators_hash,
          consensus_hash
        } = header;
        const blockInfo = {
          blockHash: block_id.hash,
          time,
          numTxs: num_txs,
          lastBlockHash: last_block_id.hash,
          validatorHash: validators_hash,
          consensusHash: consensus_hash
        };
        yield put(getBlockSuccess(blockInfo));
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