import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadRepos } from '../App/actions';
import { getValidatorRequest } from './actions';
import { selectValidators } from './selectors';
import reducer from './reducer';
import saga from './saga';
import AccountPage from './AccountPage';

const mapDispatchToProps = (dispatch) => ({
  getValidators: () => dispatch(getValidatorRequest())
});

const mapStateToProps = createStructuredSelector({
  validators: selectValidators()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'account', reducer });
const withSaga = injectSaga({ key: 'account', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AccountPage);
export { mapDispatchToProps };
