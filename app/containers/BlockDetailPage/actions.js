import {
  GET_BLOCK_DETAIL_ERROR,
  GET_BLOCK_DETAIL_SUCCESS,
  GET_BLOCK_DETAIL_REQUEST
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
