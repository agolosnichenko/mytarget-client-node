import dayjs = require('dayjs');
import { MyTargetClient } from '../../client';
import { formatArrayToString } from '../../utils';
import { LeadForm } from './leadForm';
import { LeadInfo } from './leadInfo';
import type {
  GeneralStatsV2Input,
  GeneralStatsV2Output,
  GeneralStatsV3Input,
  GeneralStatsV3Output,
  GoalsStatsInput,
  GoalsStatsOutput,
  LeadInfoConstructor,
  InappStatsInput,
  InappStatsOutput,
  OfflineConversionsStatsInput,
  OfflineConversionsStatsOutput,
  FastStatInput,
  FastStatOutput,
} from './types';

export default class Stats {
  constructor(private api: MyTargetClient) {}

  leadForm = new LeadForm({ api: this.api });
  leadInfo(params: LeadInfoConstructor) {
    return new LeadInfo({ ...params, api: this.api });
  }

  getGeneralStatsV2({
    entity,
    aggregate,
    filter,
  }: GeneralStatsV2Input): Promise<GeneralStatsV2Output> {
    return this.api.call({
      method: 'get',
      endpoint: `/api/v2/statistics/${entity}/${aggregate}.json`,
      data: {
        ...filter,
        ...(filter.date_from && {
          date_from: dayjs(filter?.date_from).format('YYYY-MM-DD'),
        }),
        ...(filter.date_to && {
          date_to: dayjs(filter?.date_to).format('YYYY-MM-DD'),
        }),
        id: formatArrayToString(filter.id),
        ...(filter.metrics && { metrics: formatArrayToString(filter.metrics) }),
      },
    });
  }

  getGeneralStatsV3(input: GeneralStatsV3Input): Promise<GeneralStatsV3Output> {
    return this.api.call({
      method: 'get',
      endpoint: `/api/v3/statistics/${input.entity}/day.json`,
      data: input.filter,
    });
  }

  getGoalsStats(input: GoalsStatsInput): Promise<GoalsStatsOutput> {
    return this.api.call({
      method: 'get',
      endpoint: `/api/v2/statistics/goals/${input.entity}/day.json`,
      data: input.filter,
    });
  }

  getInappStats(input: InappStatsInput): Promise<InappStatsOutput> {
    return this.api.call({
      method: 'get',
      endpoint: `/api/v2/statistics/inapp/${input.entity}/day.json`,
      data: input.filter,
    });
  }

  getOfflineConversions(
    input: OfflineConversionsStatsInput,
  ): Promise<OfflineConversionsStatsOutput> {
    return this.api.call({
      method: 'get',
      endpoint: '/api/v2/statistics/offline_conversions/campaigns/day.json',
      data: input.filter,
    });
  }

  getFastStat(input: FastStatInput): Promise<FastStatOutput> {
    return this.api.call({
      method: 'get',
      endpoint: `/api/v2/statistics/${input.method}/${input.entity}.json`,
      data: input.filter,
    });
  }
}
