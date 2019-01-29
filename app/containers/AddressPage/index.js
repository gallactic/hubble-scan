import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getAddressRequest, getAddressTxRequest } from './actions';
import { selectAccount, selectAccountTx } from './selectors';
import reducer from './reducer';
import saga from './saga';
import AddressPage from './AddressPage';

const mapDispatchToProps = dispatch => ({
  getAccountDetail: accountId => dispatch(getAddressRequest(accountId)),
  getAccountTx: accountId => dispatch(getAddressTxRequest(accountId))
});

const mapStateToProps = createStructuredSelector({
  account: selectAccount(),
  accountTxns: selectAccountTx()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'addressDetail', reducer });
const withSaga = injectSaga({ key: 'addressDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AddressPage);
