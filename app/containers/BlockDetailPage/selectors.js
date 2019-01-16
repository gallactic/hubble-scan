import { createSelector } from 'reselect';

const selectBlockDetail = (state) => state.get('blockdetail');

const selectBlock = () => createSelector(
  selectBlockDetail,
  (blockDetailState) => blockDetailState.get('block')
);

export {
  selectBlockDetail,
  selectBlock,
};
