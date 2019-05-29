import React from 'react';

import { StorageObjectOverview as StorageObjectOverviewComponent } from '../StorageObjectOverview';
import { cephCluster } from '../Details/fixtures/Details.fixture';
import { ocsHealthResponse } from '../OCSHealth/fixtures/Health.fixture';
import { EventStreamComponent } from '../Events/fixtures/Events.fixture';
import { capacityStats } from '../Capacity/fixtures/Capacity.fixture';
import { utilizationStats } from '../Utilization/fixtures/Utilization.fixture';
import { dataResiliencyData } from '../DataResiliency/fixtures/DataResiliency.fixture';

import { StorageObjectOverviewContext } from '../StorageObjectOverviewContext';

import { localhostNode } from '../../../tests/mocks/node';
import { persistentVolumeClaims } from '../../../tests/mocks/persistentVolumeClaim';
import { persistentVolumes } from '../../../tests/mocks/persistentVolume';
import { osdDisksCount } from '../../../tests/mocks/disks';
import { cephDiskInaccessibleAlert, cephDataRecoveryAlert } from '../Alerts/fixtures/Alerts.fixture';

import { topConsumers } from '../TopConsumers/fixtures/TopConsumers.fixture';

export const nodes = [localhostNode];
export const pvcs = persistentVolumeClaims;
export const pvs = persistentVolumes;

const StorageObjectOverview = props => (
  <StorageObjectOverviewContext.Provider value={props}>
    <StorageObjectOverviewComponent />
  </StorageObjectOverviewContext.Provider>
);

export default [
  {
    component: StorageObjectOverview,
    props: {
      cephCluster,
      ocsHealthResponse,
      ...capacityStats,
      nodes,
      pvcs,
      pvs,
      ...osdDisksCount,
      EventStreamComponent,
      ...utilizationStats,
      ...dataResiliencyData[0],
      alertsResponse: [cephDiskInaccessibleAlert, cephDataRecoveryAlert],
      ...topConsumers,
    },
  },
  {
    component: StorageObjectOverview,
    name: 'Loading overview',
    props: {},
  },
];
