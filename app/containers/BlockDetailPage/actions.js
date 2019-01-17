import {
  GET_BLOCK_DETAIL_ERROR,
  GET_BLOCK_DETAIL_SUCCESS,
  GET_BLOCK_DETAIL_REQUEST,
  GET_BLOCK_TX_REQUEST,
  GET_BLOCK_TX_SUCCESS,
  GET_BLOCK_TX_ERROR
} from './constants';

export function getBlockRequest(blockId) {
  return {
    type: GET_BLOCK_DETAIL_REQUEST,
    data: blockId
  };
}

export function getBlockSuccess(block) {
  return {
    type: GET_BLOCK_DETAIL_SUCCESS,
    data: block
  };
}

export function getBlockError(block) {
  return {
    type: GET_BLOCK_DETAIL_ERROR,
    data: block
  };
}

export function getBlockTxRequest(blockId) {
  return {
    type: GET_BLOCK_TX_REQUEST,
    data: blockId
  };
}

export function getBlockTxSuccess(block) {
  return {
    type: GET_BLOCK_TX_SUCCESS,
    data: block
  };
}

export function getBlockTxError(err) {
  return {
    type: GET_BLOCK_TX_ERROR,
    data: err
  };
}
