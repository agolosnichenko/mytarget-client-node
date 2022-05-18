import { GoalsStatsConversionType, GoalsStatsInput } from './goals-stats';

type InappConversionType = GoalsStatsConversionType;

export type InappStatsInput = GoalsStatsInput;

type InappStatsOutputMetrics = {
  conversion_type: InappConversionType;
  cpa: string;
  cr: number;
  count: number;
  event: string;
  app: number;
  tracker: number;
  value: number;
  romi: number;
  adv_cost_share: number;
};

export type InappStatsOutput = {
  items: [
    {
      id: number;
      rows: [{ date: string; inapps: InappStatsOutputMetrics[] }];
      total: { inapps: InappStatsOutputMetrics[] };
    },
  ];
  total: { inapps: InappStatsOutputMetrics[] };
};
