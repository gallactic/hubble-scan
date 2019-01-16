import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getBlockRequest } from './actions';
import { selectBlock } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BlockDetailPage from './BlockDetailPage';

const mapDispatchToProps = (dispatch) => ({
  getBlocks: (blockId) => dispatch(getBlockRequest(blockId))
});

const mapStateToProps = createStructuredSelector({
  block: selectBlock()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'blockdetail', reducer });
const withSaga = injectSaga({ key: 'blockdetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(BlockDetailPage);
