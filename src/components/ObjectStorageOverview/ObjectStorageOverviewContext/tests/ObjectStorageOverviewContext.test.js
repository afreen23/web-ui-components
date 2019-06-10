import React from 'react';
import { render } from 'enzyme';

import { ObjectStorageOverviewContext } from '../ObjectStorageOverviewContext';

describe('ObjectStorageOverviewContext', () => {
  it('is defined', () => {
    expect(!!ObjectStorageOverviewContext).toBe(true);
  });
  it('dummy test to workaround linter', () => {
    expect(render(<div />)).toMatchSnapshot();
  });
});
