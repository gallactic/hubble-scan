import {
  GET_BLOCK_LIST_REQUEST,
  GET_BLOCK_LIST_SUCCESS,
  SET_LAST_BLOCK
} from './constants';

export function getBlocksRequest(request) {
  return {
    type: GET_BLOCK_LIST_REQUEST,
    data: request
  };
}

export function getBlocksSuccess(blocks) {
  return {
    type: GET_BLOCK_LIST_SUCCESS,
    data: blocks
  };
}

export function setLastBlock(lastBlock) {
  return {
    type: SET_LAST_BLOCK,
    data: lastBlock
  };
}
