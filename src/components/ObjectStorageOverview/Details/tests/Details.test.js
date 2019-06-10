import React from 'react';
import { render, shallow } from 'enzyme';

import { StorageDetails, StorageDetailsConnected } from '../Details';
import { default as StorageDetailsFixtures } from '../fixtures/Details.fixture';
import { default as ObjectStorageOverviewFixtures } from '../../fixtures/ObjectStorageOverview.fixture';
import { ObjectStorageOverviewContext } from '../../ObjectStorageOverviewContext';

// eslint-disable-next-line react/prop-types
const testDetailsOverview = ({ props }) => <StorageDetails {...props} />;

describe('<StorageDetails />', () => {
  StorageDetailsFixtures.forEach(fixture => {
    it(`renders ${fixture.name} correctly`, () => {
      const component = shallow(testDetailsOverview(fixture));
      expect(component).toMatchSnapshot();
    });
  });
  it('renders correctly with Provider', () => {
    const component = render(
      <ObjectStorageOverviewContext.Provider value={ObjectStorageOverviewFixtures[0].props}>
        <StorageDetailsConnected />
      </ObjectStorageOverviewContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
