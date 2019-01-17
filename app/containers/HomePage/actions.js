/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_BLOCKS_REQUEST,
  GET_BLOCKS_SUCCESS,
  GET_INFO_REQUEST,
  GET_INFO_SUCCESS,
  GET_BLOCK_INFO_SUCCESS
} from './constants';

export function getBlocksRequest() {
  return {
    type: GET_BLOCKS_REQUEST
  };
}

export function getBlocksSuccess(blocks) {
  return {
    type: GET_BLOCKS_SUCCESS,
    data: blocks
  };
}

export function getInfoRequest() {
  return {
    type: GET_INFO_REQUEST
  };
}

export function getInfoSuccess(data) {
  return {
    type: GET_INFO_SUCCESS,
    data
  };
}

export function getBlockInfoSuccess(data) {
  return {
    type: GET_BLOCK_INFO_SUCCESS,
    data
  };
}
