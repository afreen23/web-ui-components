import React from 'react';

import { ObjectStorageOverview as ObjectStorageOverviewComponent } from '../ObjectStorageOverview';
import { cephCluster } from '../Details/fixtures/Details.fixture';
// import { ocsHealthResponse } from '../OCSHealth/fixtures/Health.fixture';
// import { EventStreamComponent } from '../Events/fixtures/Events.fixture';
// import { capacityStats } from '../Capacity/fixtures/Capacity.fixture';
// import { utilizationStats } from '../Utilization/fixtures/Utilization.fixture';
// import { dataResiliencyData } from '../DataResiliency/fixtures/DataResiliency.fixture';

 import { ObjectStorageOverviewContext } from '../ObjectStorageOverviewContext';

// import { localhostNode } from '../../../tests/mocks/node';
// import { persistentVolumeClaims } from '../../../tests/mocks/persistentVolumeClaim';
// import { persistentVolumes } from '../../../tests/mocks/persistentVolume';
// import { osdDisksCount } from '../../../tests/mocks/disks';
// import { cephDiskInaccessibleAlert, cephDataRecoveryAlert } from '../Alerts/fixtures/Alerts.fixture';

// import { topConsumers } from '../TopConsumers/fixtures/TopConsumers.fixture';

// export const nodes = [localhostNode];
// export const pvcs = persistentVolumeClaims;
// export const pvs = persistentVolumes;

const ObjectStorageOverview = props => (
  <ObjectStorageOverviewContext.Provider value={props}>
    <ObjectStorageOverviewComponent />
  </ObjectStorageOverviewContext.Provider>
);

export default [
  {
    component: ObjectStorageOverview,
    props: {
      cephCluster,
      // ocsHealthResponse,
      // ...capacityStats,
      // nodes,
      // pvcs,
      // pvs,
      // ...osdDisksCount,
      // EventStreamComponent,
      // ...utilizationStats,
      // ...dataResiliencyData[0],
      // alertsResponse: [cephDiskInaccessibleAlert, cephDataRecoveryAlert],
      // ...topConsumers,
    },
  },
  // {
  //   component: ObjectStorageOverview,
  //   name: 'Loading overview',
  //   props: {
  //     EventStreamComponent,
  //   },
  // },
];
