import {
  GET_TX_DETAIL_ERROR,
  GET_TX_DETAIL_SUCCESS,
  GET_TX_DETAIL_REQUEST
} from './constants';

export function getTxRequest(txId) {
  return {
    type: GET_TX_DETAIL_REQUEST,
    data: txId
  };
}

export function getTxSuccess(tx) {
  return {
    type: GET_TX_DETAIL_SUCCESS,
    data: tx
  };
}

export function getTxError(tx) {
  return {
    type: GET_TX_DETAIL_ERROR,
    data: tx
  };
}
