import React from 'react';
import { shallow } from 'enzyme';

import BlocksPage from '../index';

describe('<BlocksPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<BlocksPage />);
    expect(renderedComponent.contains(<p>Block List</p>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<BlocksPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
