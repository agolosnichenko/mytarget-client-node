type GeneralStatsV2InputMetrics =
  | 'all'
  | 'base'
  | 'events'
  | 'video'
  | 'uniques'
  | 'tps'
  | 'playable'
  | 'romi';

export type GeneralStatsV2Input = {
  entity: 'banners' | 'campaigns' | 'users';
  aggregate: 'day' | 'summary';
  filter: {
    date_from?: Date;
    date_to?: Date;
    id: number[];
    metrics?: GeneralStatsV2InputMetrics[];
    attribution: 'default' | 'impression';
  };
};

type GeneralStatsV2OutputBase = {
  show: number;
  clicks: number;
  goals: number;
  spent: string;
  a_amount: string;
  n_amount: string;
  cpm: string;
  cpc: string;
  cpa: string;
  ctr: number;
  cr: number;
};

type GeneralStatsV2OutputEvents = {
  opening_app: number;
  opening_post: number;
  moving_into_group: number;
  clicks_on_external_url: number;
  launching_video: number;
  comments: number;
  joinings: number;
  likes: number;
  shares: number;
  votings: number;
  sending_form: number;
};

type GeneralStatsV2OutputUniques = {
  reach: number;
  total: number;
  increment: number;
  frequency: number;
};

type GeneralStatsV2OutputVideo = {
  started: number;
  paused: number;
  resumed_after_pause: number;
  fullscreen_on: number;
  fullscreen_off: number;
  sound_turned_off: number;
  sound_turned_on: number;
  viewed_10_seconds: number;
  viewed_25_percent: number;
  viewed_50_percent: number;
  viewed_75_percent: number;
  viewed_100_percent: number;
  viewed_10_seconds_rate: number;
  viewed_25_percent_rate: number;
  viewed_50_percent_rate: number;
  viewed_75_percent_rate: number;
  viewed_100_percent_rate: number;
  depth_of_view: number;
  measurement_rate: number;
  vr: number;
  viewed_10_seconds_cost: string;
  viewed_25_percent_cost: string;
  viewed_50_percent_cost: string;
  viewed_75_percent_cost: string;
  viewed_100_percent_cost: string;
};

type GeneralStatsV2OutputCarousel = {
  slide_1_clicks: number;
  slide_1_shows: number;
  slide_2_clicks: number;
  slide_2_shows: number;
  slide_3_clicks: number;
  slide_3_shows: number;
  slide_4_clicks: number;
  slide_4_shows: number;
  slide_5_clicks: number;
  slide_5_shows: number;
  slide_6_clicks: number;
  slide_6_shows: number;
  slide_1_ctr: number;
  slide_2_ctr: number;
  slide_3_ctr: number;
  slide_4_ctr: number;
  slide_5_ctr: number;
  slide_6_ctr: number;
};

type GeneralStatsV2OutputPlayable = {
  playable_game_open: number;
  playable_game_close: number;
  playable_call_to_action: number;
};

type GeneralStatsV2OutputTPS = {
  tps: string;
  tpd: string;
};

type GeneralStatsV2OutputMOAT = {
  impressions: number;
  in_view: number;
  never_focused: number;
  never_visible: number;
  never_50_perc_visible: number;
  never_1_sec_visible: number;
  human_impressions: number;
  impressions_analyzed: number;
  in_view_percent: number;
  human_and_viewable_perc: number;
  never_focused_percent: number;
  never_visible_percent: number;
  never_50_perc_visible_percent: number;
  never_1_sec_visible_percent: number;
  in_view_diff_percent: number;
  active_in_view_time: number;
  attention_quality: number;
};

type GeneralStatsV2OutputROMI = {
  value: string;
  romi: number;
  adv_cost_share: number;
};

type GeneralStatsV2OutputCustomEvent = {
  [key: string]: {
    alias: string;
    count: number;
  };
};

export type GeneralStatsOutputMetrics = Partial<{
  base: GeneralStatsV2OutputBase;
  events: GeneralStatsV2OutputEvents;
  uniques: GeneralStatsV2OutputUniques;
  video: GeneralStatsV2OutputVideo;
  carousel: GeneralStatsV2OutputCarousel;
  playable: GeneralStatsV2OutputPlayable;
  tps: GeneralStatsV2OutputTPS;
  moat: GeneralStatsV2OutputMOAT;
  romi: GeneralStatsV2OutputROMI;
  custom_event: GeneralStatsV2OutputCustomEvent;
}>;

export type GeneralStatsV2Output = {
  items: [
    {
      id: number;
      rows: [GeneralStatsOutputMetrics & { date: string }];
      total: GeneralStatsOutputMetrics;
    },
  ];
  total: GeneralStatsOutputMetrics;
};
