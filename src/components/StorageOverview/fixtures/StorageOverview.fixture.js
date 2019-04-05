import React from 'react';

import { StorageOverview as StorageOverviewComponent } from '../StorageOverview';
import { cephCluster } from '../Details/fixtures/Details.fixture';
import { ocsHealthData } from '../OCSHealth/fixtures/Health.fixture';

import { StorageOverviewContext } from '../StorageOverviewContext';

import { localhostNode } from '../../../tests/mocks/node';
import { cloudInitTestPod } from '../../../tests/mocks/pod/cloudInitTestPod.mock';
import { persistentVolumeClaims } from '../../../tests/mocks/persistentVolumeClaim';
import { persistentVolumes } from '../../../tests/mocks/persistentVolume';
import { cloudInitTestVm } from '../../../tests/mocks/vm/cloudInitTestVm.mock';
import { cloudInitTestVmi } from '../../../tests/mocks/vmi/cloudInitTestVmi.mock';
import { fullVm } from '../../../tests/mocks/vm/vm.mock';

import { dataResiliencyData } from '../DataResiliency/fixtures/DataResiliency.fixture';

export const nodes = [localhostNode];
export const pvcs = persistentVolumeClaims;
export const pods = [cloudInitTestPod];
export const vms = [fullVm, cloudInitTestVm];
export const vmis = [cloudInitTestVmi];
export const migrations = [];
export const pvs = persistentVolumes;

const StorageOverview = props => (
  <StorageOverviewContext.Provider value={props}>
    <StorageOverviewComponent />
  </StorageOverviewContext.Provider>
);

export default [
  {
    component: StorageOverview,
    props: {
      cephCluster,
      ocsHealthData,
      nodes,
      pvcs,
      pvs,
      pods,
      vms,
      vmis,
      migrations,
      ...dataResiliencyData,
    },
  },
];
