/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BlockList from '../../components/organisms/BlockList';
import './style.scss';

class BlocksPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { match, classes } = this.props;
    const blockId = '126371878';
    return (
      <div className="blocks-page">
        <Helmet>
          <title>Account Page</title>
          <meta name="description" content="Blocks Page" />
        </Helmet>
        <BlockList />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

export default withStyles(styles)(BlocksPage);
