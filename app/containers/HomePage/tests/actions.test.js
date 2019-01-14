import { GET_BLOCKS_REQUEST } from '../constants';

import { getBlocksRequest } from '../actions';

describe('Home Actions', () => {
  describe('getBlocksRequest', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: GET_BLOCKS_REQUEST,
        name: fixture
      };

      expect(getBlocksRequest(fixture)).toEqual(expectedResult);
    });
  });
});
