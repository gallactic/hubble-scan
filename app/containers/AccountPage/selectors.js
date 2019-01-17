import { createSelector } from 'reselect';

const selectAccount = (state) => state.get('account');

const selectValidators = () => createSelector(
  selectAccount,
  (accountState) => accountState.get('validators')
);

export {
  selectAccount,
  selectValidators,
};
