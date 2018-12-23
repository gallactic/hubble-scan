import React from 'react';
import { shallow } from 'enzyme';

import TransactionsPage from '../index';

describe('<TransactionsPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<TransactionsPage />);
    expect(renderedComponent.contains(<p>Tx list</p>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<TransactionsPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
