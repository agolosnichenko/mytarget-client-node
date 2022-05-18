import { BaseApiMethod } from '../BaseApiMethod';
import {
  LeadInfoConstructor,
  LeadInfoListInput,
  LeadInfoListOutput,
} from './types';
import { formatArrayToString, formatDate } from '../../utils';

export class LeadInfo extends BaseApiMethod {
  constructor({ form_id, api }: LeadInfoConstructor) {
    if (!form_id) throw Error('Provide form_id');
    super();
    this._api = api;
    this._endpoint = `/api/v2/ok/lead_ads/${form_id}.json`;
  }

  list(params?: Partial<LeadInfoListInput>): Promise<LeadInfoListOutput> {
    return this._api.call({
      method: 'get',
      endpoint: this._endpoint,
      ...(params && {
        data: {
          ...params,
          _created_time__lt: formatDate(params?._created_time__lt),
          _created_time__gt: formatDate(params?._created_time__gt),
          _created_time__lte: formatDate(params?._created_time__lte),
          _created_time__gte: formatDate(params?._created_time__gte),
          _campaign_id: params?._campaign_id
            ? `id_${params._campaign_id}`
            : null,
          _banner_id: params?._banner_id ? `id_${params._banner_id}` : null,
          _campaign_id__in: formatArrayToString(params._campaign_id__in, 'id_'),
          _banner_id__in: formatArrayToString(params._banner_id__in, 'id_'),
        },
      }),
    });
  }
}
