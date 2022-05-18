export type FastStatInput = {
  method: 'faststat' | 'uniquestat';
  entity: 'banners' | 'campaigns' | 'users';
  filter: {
    id: number[];
  };
};

type FastStatOutputMetrics = {
  clicks: number[];
  shows: number[];
  uniques?: number[];
  deltas?: number[];
};

export type FastStatOutput = {
  [key in 'campaigns' | 'banners' | 'advertisers']: {
    [key: number]: {
      timestamp: number;
      minutely: FastStatOutputMetrics;
      total: FastStatOutputMetrics;
    };
  };
} & {
  last_seen_msg_time: {
    timestamp: number;
    string: string;
    ago: number;
  };
};
