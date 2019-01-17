import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/atoms/List';
import ListItem from 'components/atoms/ListItem';
import LoadingIndicator from 'components/atoms/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';

const ReposList = ({ loading, error, repos }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (repos !== false) {
    return <List items={repos} component={RepoListItem} />;
  }

  return null;
};

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any
};

export default ReposList;
