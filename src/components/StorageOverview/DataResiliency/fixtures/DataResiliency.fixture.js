import { DataResiliency } from '../DataResiliency';

export const dataResiliencyData = {
  componentLoaded: true,
  progressPercentage: 100,
};

export default [
  {
    component: DataResiliency,
    props: { ...dataResiliencyData },
  },
];
