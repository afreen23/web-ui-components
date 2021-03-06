import { getResource } from '../../../../../utils';
import { ConfigMapModel, SecretModel, V2VVMwareModel } from '../../../../../models';
import { VCENTER_TEMPORARY_LABEL, VCENTER_TYPE_LABEL } from '../../../../../constants';
import { getVmwareField } from './selectors';
import { NAMESPACE_KEY } from '../../constants';
import {
  VMWARE_TO_KUBEVIRT_OS_CONFIG_MAP_NAME,
  VMWARE_TO_KUBEVIRT_OS_CONFIG_MAP_NAMESPACE,
} from '../../../../../config';
import { PROVIDER_VMWARE_V2V_NAME_KEY } from './constants';
import { getVmSettingValue } from '../../utils/vmSettingsTabUtils';

export const getVmWareProviderRequestedResources = state => {
  const v2vVmwareName = getVmwareField(state, PROVIDER_VMWARE_V2V_NAME_KEY);
  const namespace = getVmSettingValue(state, NAMESPACE_KEY);
  const resources = {
    vCenterSecrets: {
      resource: getResource(SecretModel, {
        namespace,
        matchExpressions: [
          {
            key: VCENTER_TYPE_LABEL,
            operator: 'Exists',
          },
          {
            key: VCENTER_TEMPORARY_LABEL,
            operator: 'DoesNotExist',
          },
        ],
      }),
    },
    vmwareToKubevirtOsConfigMap: {
      resource: getResource(ConfigMapModel, {
        name: VMWARE_TO_KUBEVIRT_OS_CONFIG_MAP_NAME,
        namespace: VMWARE_TO_KUBEVIRT_OS_CONFIG_MAP_NAMESPACE,
        isList: false,
      }),
    },
  };

  if (v2vVmwareName) {
    resources.v2vvmware = {
      resource: getResource(V2VVMwareModel, {
        name: v2vVmwareName,
        namespace,
        isList: false,
      }),
    };
  }

  return resources;
};
