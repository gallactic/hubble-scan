/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Address from 'containers/AddressPage/Loadable';
import Accounts from 'containers/AccountPage/Loadable';
import BlockDetail from 'containers/BlockDetailPage/Loadable';
import Blocks from 'containers/BlocksPage/Loadable';
import TransactionDetails from 'containers/TransactionDetailPage/Loadable';
import Transactions from 'containers/TransactionsPage/Loadable';

import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

import './style.scss';

const routes = ['/', '/blocks', '/txs', '/accounts'];

const AccountRoute = ({ match }) => (
  <div>
    <Route path={`${match.path}/:id`} component={Address} />
    <Route exact path={match.path} component={Accounts} />
  </div>
);

const BlocksRoute = ({ match }) => (
  <div>
    <Route path={`${match.path}/:id`} component={BlockDetail} />
    <Route exact path={match.path} component={Blocks} />
  </div>
);

const TxRoute = ({ match }) => (
  <div>
    <Route path={`${match.path}/:id`} component={TransactionDetails} />
    <Route exact path={match.path} component={Transactions} />
  </div>
);

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="HubbleScan" defaultTitle="HubbleScan">
      <meta name="description" content="The Gallactic Block Explorer" />
    </Helmet>
    <Header routes={routes} />
    <div className="app-page">
      <Grid container justify="center">
        <Grid item xs={10}>
          <Switch>
            <Route exact path={routes[0]} component={HomePage} />
            <Route path={routes[1]} component={BlocksRoute} />
            <Route path={routes[2]} component={TxRoute} />
            <Route path={routes[3]} component={AccountRoute} />
            <Route component={NotFoundPage} />
          </Switch>
        </Grid>
      </Grid>
    </div>
    <Footer />
  </div>
);

export default App;
