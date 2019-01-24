/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_BLOCK_DETAIL_REQUEST, GET_BLOCK_TX_REQUEST } from './constants';
import {
  getBlockSuccess,
  getBlockError,
  getBlockTxSuccess,
  getBlockTxError
} from './actions';

export function* getBlockDetail({ data }) {
  if (data) {
    const requestURL = `Block/${data}`;
    try {
      const result = yield call(request, requestURL);
      console.log('Block', result);
      if (result && result.Block) {
        const { header } = result.Block;
        const {
          num_txs,
          time,
          last_block_id,
          validators_hash,
          consensus_hash,
          block_hash
        } = header;
        const blockInfo = {
          rawData: result,
          blockHash: block_hash,
          time,
          numTxs: num_txs ? num_txs : 0,
          lastBlockHash: last_block_id.hash,
          validatorHash: validators_hash,
          consensusHash: consensus_hash
        };
        console.log(blockInfo);
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

export function* getBlockTxDetail({ data }) {
  if (data) {
    const requestURL = `BlockTxs/${data}`;
    try {
      const result = yield call(request, requestURL);
      if (result && result.Txs) {
        const txList = result.Txs.map(txData => {
          const { Hash, Envelope } = txData;
          const { tx, type } = JSON.parse(Envelope);
          const { senders, receivers } = tx;
          const txInfo = {
            hash: Hash,
            type,
            senders,
            receivers
          };
          return txInfo;
        });
        yield put(getBlockTxSuccess(txList));
      } else {
        yield put(getBlockTxError());
      }
    } catch (err) {
      yield put(getBlockTxError());
    }
  } else {
    yield put(getBlockTxError());
  }
}

export default function* githubData() {
  yield takeLatest(GET_BLOCK_DETAIL_REQUEST, getBlockDetail);
  yield takeLatest(GET_BLOCK_TX_REQUEST, getBlockTxDetail);
}
