import React from 'react';
import { render } from 'enzyme';

import { StorageObjectOverviewContext } from '../StorageObjectOverviewContext';

describe('StorageObjectOverviewContext', () => {
  it('is defined', () => {
    expect(!!StorageOverviewContext).toBe(true);
  });
  it('dummy test to workaround linter', () => {
    expect(render(<div />)).toMatchSnapshot();
  });
});
