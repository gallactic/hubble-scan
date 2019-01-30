import { createSelector } from 'reselect';

const selectTxnDetail = state => state.get('txDetail');

const selectTx = () =>
  createSelector(
    selectTxnDetail,
    blockDetailState => blockDetailState.get('txn')
  );

export { selectTxnDetail, selectTx };
