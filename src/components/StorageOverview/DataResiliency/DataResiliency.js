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
      label={`${progressPercentage}%`}
    />
  </React.Fragment>
);

export const DataResiliency = ({ componentLoaded, progressPercentage }) => (
  <DashboardCard className="kubevirt-data-resiliency__dashboard__body">
    <DashboardCardHeader>
      <DashboardCardTitle>Data Resiliency</DashboardCardTitle>
    </DashboardCardHeader>
    <DashboardCardBody
      className="kubevirt-data-resiliency__body"
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

DataResiliency.defaultProps = {
  componentLoaded: true,
};

DataResiliency.propTypes = {
  componentLoaded: PropTypes.bool,
  progressPercentage: PropTypes.number.isRequired,
};

DataResiliencyBuildBody.propTypes = {
  progressPercentage: PropTypes.number.isRequired,
};

export const DataResiliencyConnected = () => (
  <StorageOverviewContext.Consumer>{props => <DataResiliency {...props} />}</StorageOverviewContext.Consumer>
);
