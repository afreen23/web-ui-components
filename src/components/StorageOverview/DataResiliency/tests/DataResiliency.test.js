import React from 'react';
import { render } from 'enzyme';

import { DataResiliency } from '../DataResiliency';
import { default as DataResiliencyFixtures } from '../fixtures/DataResiliency.fixture';

const testDataResiliencyOverview = () => <DataResiliency {...DataResiliencyFixtures[0].props} />;

describe('<DataResiliency />', () => {
  it('renders correctly', () => {
    const component = render(testDataResiliencyOverview());
    expect(component).toMatchSnapshot();
  });
});
