import React from 'react';
import { shallow } from 'enzyme';

import BlockDetailPage from '../index';

describe('<BlockDetailPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<BlockDetailPage />);
    expect(renderedComponent.contains(<h1>BlockDetail Page</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<BlockDetailPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
