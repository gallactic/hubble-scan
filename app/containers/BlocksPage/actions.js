import {
  GET_BLOCK_LIST_REQUEST,
  GET_BLOCK_LIST_SUCCESS,
} from './constants';

export function getBlocksRequest() {
  return {
    type: GET_BLOCK_LIST_REQUEST
  };
}

export function getBlocksSuccess(blocks) {
  return {
    type: GET_BLOCK_LIST_SUCCESS,
    data: blocks
  };
}
