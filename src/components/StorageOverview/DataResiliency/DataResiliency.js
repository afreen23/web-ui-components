import React from 'react';
import PropTypes from 'prop-types';
import { Icon, UtilizationBar } from 'patternfly-react';

import {
  DashboardCard,
  DashboardCardBody,
  DashboardCardHeader,
  DashboardCardTitle,
} from '../../Dashboard/DashboardCard';
import { StorageOverviewContext } from '../StorageOverviewContext';
import { InlineLoading } from '../../Loading';

const DataResiliencyStatusBody = () => (
  <React.Fragment>
    <div className="kubevirt-data-resiliency__title">Your Data Is Resilient</div>
    <div className="kubevirt-data-resiliency__icon--ok">
      <Icon type="fa" name="check-circle" size="3x" />
    </div>
  </React.Fragment>
);

const DataResiliencyBuildBody = ({ progressPercentage }) => (
  <React.Fragment>
    <div className="kubevirt-data-resiliency__title">Rebuilding data resiliency</div>
    <UtilizationBar
      now={progressPercentage}
      description="Rebuilding in Progress"
      descriptionPlacementTop
      className="kubevirt-data-resiliency__utilization-bar"
      label={`${progressPercentage}%`}
    />
  </React.Fragment>
);

export const DataResiliency = ({ responseData, componentLoaded }) => {
  const isResilient = {};
  //extraction
  const result = responseData.data.result;
  const progressPercentage = Number(result[0].value[1]);//negative values ??
  //validation
  const isValid = isNaN(progressPercentage) ? false : true;
  if (isValid) {
    //TODO: rounding off
    return (
      <DashboardCard>
        <DashboardCardHeader>
          <DashboardCardTitle>Data Resiliency</DashboardCardTitle>
        </DashboardCardHeader>
        <DashboardCardBody
          className="kubevirt-data-resiliency__dashboard-body"
          isLoading={!componentLoaded}
          LoadingComponent={InlineLoading}
        >
          {progressPercentage === 100 ? (
            <DataResiliencyStatusBody />
          ) : (
            <DataResiliencyBuildBody progressPercentage={progressPercentage} />
          )}
        </DashboardCardBody>
      </DashboardCard>
    );
  } else {
    //TODO: error message ::something went wrong
  }
};

// }

DataResiliency.defaultProps = {
  responseData: {},
};

DataResiliency.propTypes = {
  responseData: PropTypes.object.isRequired,
  componentLoaded: PropTypes.bool,
};

DataResiliencyBuildBody.propTypes = {
  progressPercentage: PropTypes.number.isRequired,
};

export const DataResiliencyConnected = () => (
  <StorageOverviewContext.Consumer>{props => <DataResiliency {...props} />}</StorageOverviewContext.Consumer>
);
