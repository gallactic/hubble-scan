/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './style.scss';

export default class BlocksPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { match } = this.props;
    const blockId = '126371878';
    return (
      <div className="blocks-page">
        <Helmet>
          <title>Account Page</title>
          <meta name="description" content="Blocks Page" />
        </Helmet>
        <p>Block List</p>
        <div>
          <Link to={`${match.url}/${blockId}`}>{blockId}</Link>
        </div>
      </div>
    );
  }
}
