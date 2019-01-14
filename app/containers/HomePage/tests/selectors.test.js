import { fromJS } from 'immutable';

import {
  selectHome,
  selectBlocks,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('selectBlocks', () => {
  const usernameSelector = selectBlocks();
  it('should select the username', () => {
    const username = 'flexdinesh';
    const mockedState = fromJS({
      home: {
        username,
      },
    });
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});
