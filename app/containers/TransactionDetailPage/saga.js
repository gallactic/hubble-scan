/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { GET_TX_DETAIL_REQUEST } from './constants';
import { getTxSuccess, getTxError } from './actions';

export function* getTxDetail({ data }) {
  if (data) {
    const requestURL = `Tx/${data}`;
    try {
      const result = yield call(request, requestURL);
      if (result && result.Tx) {
        result.Tx.Envelope = JSON.parse(result.Tx.Envelope);
        const { Height, Hash, Envelope } = result.Tx;
        const { chainId, type, tx, signatories } = Envelope;
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue.amount;
        const txInfo = {
          rawData: result,
          blockId: Height,
          txHash: Hash,
          chainId,
          type,
          tx,
          totalSent: tx.senders.reduce(reducer, 0),
          totalReceived: tx.receivers.reduce(reducer, 0),
          signatories
        };
        yield put(getTxSuccess(txInfo));
      } else {
        yield put(getTxError());
      }
    } catch (err) {
      console.log(err);
      yield put(getTxError());
    }
  } else {
    yield put(getTxError());
  }
}

export default function* githubData() {
  yield takeLatest(GET_TX_DETAIL_REQUEST, getTxDetail);
}
