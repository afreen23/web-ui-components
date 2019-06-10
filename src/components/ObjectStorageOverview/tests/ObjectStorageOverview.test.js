import React from 'react';
import { shallow } from 'enzyme';

import { ObjectStorageOverview } from '..';

describe('<ObjectStorageOverview />', () => {
  it('shallow-renders correctly', () => {
    const component = shallow(<ObjectStorageOverview />);
    expect(component).toMatchSnapshot();
  });
});
