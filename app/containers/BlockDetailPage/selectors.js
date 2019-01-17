import { createSelector } from 'reselect';

const selectBlockDetail = (state) => state.get('blockdetail');

const selectBlock = () => createSelector(
  selectBlockDetail,
  (blockDetailState) => blockDetailState.get('block')
);

const selectBlockTx = () => createSelector(
  selectBlockDetail,
  (blockDetailState) => blockDetailState.get('blockTx')
);

export {
  selectBlockDetail,
  selectBlock,
  selectBlockTx
};
