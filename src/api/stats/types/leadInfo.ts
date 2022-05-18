import { BaseApiMethodConstructor } from '../../../types';
import { LeadInfo } from '.';

export type LeadInfoConstructor = BaseApiMethodConstructor & {
  form_id: number;
};

export type LeadInfoListInput = {
  /**
   * Количество возвращаемых в ответе лидов. Значение по умолчанию: 20. Максимальное значение: 50.
   */
  limit: number;
  /**
   * Смещение точки отсчета относительно начала списка лидов. Значение по умолчанию: 0.
   */
  offset: number;
  /**
   * Лиды, созданные до указанной даты.
   */
  _created_time__lt: Date;
  /**
   * Лиды, созданные после указанной даты.
   */
  _created_time__gt: Date;
  /**
   * Лиды, созданные в указанную дату или до нее.
   */
  _created_time__lte: Date;
  /**
   * Лиды, созданные в указанную дату или после нее.
   */
  _created_time__gte: Date;
  /**
   * Список идентификаторов кампаний, для которых нужно получить лиды.
   */
  _campaign_id__in: number[];
  /**
   * Идентификатор кампании, для которой нужно получить лиды.
   */
  _campaign_id: number;
  /**
   * Список идентификаторов баннеров, для которых нужно получить лиды.
   */
  _banner_id__in: number[];
  /**
   * Идентификатор баннера, для которого нужно получить лиды.
   */
  _banner_id: number;
};

export type LeadInfoListOutput = {
  count: number;
  items: LeadInfo[];
  limit: number;
  offset: number;
};
