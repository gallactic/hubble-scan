import {
  GET_ADDRESS_DETAIL_ERROR,
  GET_ADDRESS_DETAIL_SUCCESS,
  GET_ADDRESS_DETAIL_REQUEST,
  GET_ADDRESS_TX_ERROR,
  GET_ADDRESS_TX_REQUEST,
  GET_ADDRESS_TX_SUCCESS
} from './constants';

export function getAddressRequest(addressId) {
  return {
    type: GET_ADDRESS_DETAIL_REQUEST,
    data: addressId
  };
}

export function getAddressSuccess(addressInfo) {
  return {
    type: GET_ADDRESS_DETAIL_SUCCESS,
    data: addressInfo
  };
}

export function getAddressError(error) {
  return {
    type: GET_ADDRESS_DETAIL_ERROR,
    data: error
  };
}

export function getAddressTxRequest(addressId) {
  return {
    type: GET_ADDRESS_TX_REQUEST,
    data: addressId
  };
}

export function getAddressTxSuccess(txns) {
  return {
    type: GET_ADDRESS_TX_SUCCESS,
    data: txns
  };
}

export function getAddressTxError(err) {
  return {
    type: GET_ADDRESS_TX_ERROR,
    data: err
  };
}
