import { GeneralStatsOutputMetrics } from './general-stats-v2';

type GeneralStatsV3InputMetrics =
  | 'all'
  | 'base'
  | 'events'
  | 'video'
  | 'carousel'
  | 'uniques'
  | 'tps'
  | 'moat'
  | 'playable'
  | 'romi';

type GeneralStatsV3EntityStatus = 'all' | 'active' | 'blocked' | 'deleted';

export type GeneralStatsV3Input = {
  entity: 'banners' | 'campaigns' | 'users';
  filter: {
    date_from: Date;
    date_to?: Date;
    id?: number[];
    id_ne?: number[];
    fields?: GeneralStatsV3InputMetrics[];
    attribution?: 'conversion' | 'impression';
    banner_status?: GeneralStatsV3EntityStatus[];
    banner_status_ne?: GeneralStatsV3EntityStatus[];
    campaign_status?: GeneralStatsV3EntityStatus[];
    campaign_status_ne?: GeneralStatsV3EntityStatus[];
    campaign_id?: number[];
    campaign_id_ne?: number[];
    package_id?: number[];
    package_id_ne?: number[];
    sort_by?: string;
    d?: 'asc' | 'desc';
    limit?: number;
    offset?: number;
  };
};

export type GeneralStatsV3Output = {
  items: [{ id: number; user_id: number; total: GeneralStatsOutputMetrics }];
  total: GeneralStatsOutputMetrics;
  limit: number;
  offset: number;
  count: number;
};
