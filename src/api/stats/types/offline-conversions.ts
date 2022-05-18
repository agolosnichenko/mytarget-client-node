export type OfflineConversionsStatsInput = {
  filter: {
    date_from: Date;
    date_to: Date;
    id: number[];
  };
};

export type OfflineConversionsStatsOutput = {
  rate: number;
  cost: number;
  offline: number;
};
