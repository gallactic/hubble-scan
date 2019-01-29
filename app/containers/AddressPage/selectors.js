import { createSelector } from 'reselect';

const selectAccountDetail = (state) => state.get('addressDetail');

const selectAccount = () => createSelector(
  selectAccountDetail,
  (blockDetailState) => blockDetailState.get('account')
);

const selectAccountTx = () => createSelector(
  selectAccountDetail,
  (blockDetailState) => blockDetailState.get('txns')
);

export {
  selectAccountDetail,
  selectAccount,
  selectAccountTx
};
