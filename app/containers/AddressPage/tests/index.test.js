import React from 'react';
import { shallow } from 'enzyme';

import AddressPage from '../index';

describe('<AddressPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<AddressPage />);
    expect(renderedComponent.contains(<h1>Address Page</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<AddressPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
