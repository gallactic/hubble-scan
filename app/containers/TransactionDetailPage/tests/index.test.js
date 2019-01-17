import React from 'react';
import { shallow } from 'enzyme';

import TransactionDetailPage from '../index';

describe('<TransactionDetailPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<TransactionDetailPage />);
    expect(renderedComponent.contains(<h1>Transaction Detail Page</h1>)).toBe(
      true
    );
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<TransactionDetailPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
