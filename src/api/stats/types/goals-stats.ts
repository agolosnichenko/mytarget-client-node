export type GoalsStatsConversionType = 'total' | 'postview' | 'postclick';

export type GoalsStatsInput = {
  entity: 'banners' | 'campaigns' | 'users';
  filter: {
    date_from: Date;
    date_to: Date;
    id: number[];
    attribution?: 'impression';
    conversion_type: GoalsStatsConversionType;
  };
};

type GoalsStatsOutputMetrics = {
  conversion_type: GoalsStatsConversionType;
  source: 'topmail' | 'mobile';
  goal: 'install' | string;
  counter_id: number;
  count: number;
  cr: number;
  cpa: string;
  value: string;
  romi: number;
  adv_cost_share: number;
};

export type GoalsStatsOutput = {
  items: [
    {
      id: number;
      rows: [{ date: string; goals: GoalsStatsOutputMetrics[] }];
      total: GoalsStatsOutputMetrics[];
    },
  ];
  total: GoalsStatsOutputMetrics[];
};
