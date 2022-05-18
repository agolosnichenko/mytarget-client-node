import { BaseApiMethod } from '../BaseApiMethod';
import type {
  LeadFormConstructor,
  LeadFormListInput,
  LeadFormListOutput,
} from './types';

/**
 * Ресурс, предоставляющий информацию по кампаниями и баннерами, которые привели к успешному созданию хотя бы одной лид-заявки.
 */
export class LeadForm extends BaseApiMethod {
  constructor({ api }: LeadFormConstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v2/ok/lead_ads/forms.json';
  }

  /**
   * Список кампаний и баннеров, которые привели к успешному созданию хотя бы одной лид-заявки
   * @param params С помощью следующих GET-параметров можно фильтровать данные:
   * - limit - Количество возвращаемых в ответе форм LeadAds. Значение по умолчанию: 20. Максимальное значение: 50.
   * - offset - Смещение точки отсчета относительно начала списка форм LeadAds. Значение по умолчанию: 0.
   * - _campaign_id__in - Список идентификаторов кампаний, для которых нужно получить формы LeadAds. Идентификаторы задаются в формате "id_1,id_2,...,id_N".
   * - _campaign_id - Идентификатор кампании, для которой нужно получить формы LeadAds. Идентификатор задается в формате "id_1".
   * - _banner_id__in - Список идентификаторов баннеров, для которых нужно получить формы LeadAds. Идентификаторы задаются в формате "id_1,id_2,...,id_N".
   * - _banner_id - Идентификатор баннера, для которого нужно получить формы LeadAds. Идентификатор задается в формате "id_1".
   */
  list(params?: Partial<LeadFormListInput>): Promise<LeadFormListOutput> {
    return this._api.call({
      method: 'get',
      endpoint: this._endpoint,
      ...(params && {
        data: {
          ...params,
          _campaign_id__in: params?._campaign_id__in
            ?.map((id) => `id_${id}`)
            ?.join(','),
          _banner_id__in: params?._banner_id__in
            ?.map((id) => `id_${id}`)
            ?.join(','),
          _campaign_id: params?._campaign_id
            ? `id_${params._campaign_id}`
            : null,
          _banner_id: params?._banner_id ? `id_${params._banner_id}` : null,
        },
      }),
    });
  }
}
