/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import {
  GET_ADDRESS_DETAIL_REQUEST,
  GET_ADDRESS_TX_REQUEST
} from './constants';
import { getAddressSuccess, getAddressError } from './actions';

export function* getAddressDetail({ data }) {
  if (data) {
    const requestURL = `Account/${data}`;
    try {
      const result = yield call(request, requestURL);
      if (result && result.Account) {
        const {
          address,
          sequence,
          balance,
          code,
          permissions
        } = result.Account;
        const addressInfo = {
          rawData: result,
          address,
          sequence,
          balance,
          code,
          permissions
        };
        yield put(getAddressSuccess(addressInfo));
      } else {
        yield put(getAddressError());
      }
    } catch (err) {
      yield put(getAddressError());
    }
  } else {
    yield put(getAddressError());
  }
}

// export function* getAddressTxDetail({ data }) {
//   if (data) {
//     const requestURL = `BlockTxs/${data}`;
//     try {
//       const result = yield call(request, requestURL);
//       if (result && result.Txs) {
//         const txList = result.Txs.map(txData => {
//           const { Hash, Envelope } = txData;
//           const { tx, type } = JSON.parse(Envelope);
//           const { senders, receivers } = tx;
//           const txInfo = {
//             hash: Hash,
//             type,
//             senders,
//             receivers
//           };
//           return txInfo;
//         });
//         yield put(getBlockTxSuccess(txList));
//       } else {
//         yield put(getBlockTxError());
//       }
//     } catch (err) {
//       yield put(getBlockTxError());
//     }
//   } else {
//     yield put(getBlockTxError());
//   }
// }

export default function* githubData() {
  yield takeLatest(GET_ADDRESS_DETAIL_REQUEST, getAddressDetail);
  // yield takeLatest(GET_ADDRESS_TX_REQUEST, getAddressTxDetail);
}
