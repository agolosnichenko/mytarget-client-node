import { BaseApiMethodConstructor } from '../../../types';
import { LeadForm } from '.';

export type LeadFormConstructor = BaseApiMethodConstructor;

export type LeadFormListInput = {
  /**
   * Количество возвращаемых в ответе форм LeadAds. Значение по умолчанию: 20. Максимальное значение: 50.
   */
  limit: number;
  /**
   * Смещение точки отсчета относительно начала списка форм LeadAds. Значение по умолчанию: 0.
   */
  offset: number;
  /**
   * Список идентификаторов кампаний, для которых нужно получить формы LeadAds.
   */
  _campaign_id__in: number[];
  /**
   * Идентификатор кампании, для которой нужно получить формы LeadAds.
   */
  _campaign_id: number;
  /**
   * Список идентификаторов баннеров, для которых нужно получить формы LeadAds.
   */
  _banner_id__in: number[];
  /**
   * Идентификатор баннера, для которого нужно получить формы LeadAds
   */
  _banner_id: number;
};

export type LeadFormListOutput = {
  count: number;
  items: LeadForm[];
  offset: number;
};
