import React from 'react';
import { shallow } from 'enzyme';

import AccountPage from '../index';

describe('<AccountPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<AccountPage />);
    expect(renderedComponent.contains(<h1>Account lists</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<AccountPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
