import { BaseApiMethodConstructor } from '../../../types';
import { AgencyManager } from '.';

export type AgencyManagersConstructor = BaseApiMethodConstructor;

export interface AgencyManagersListInput {
  /**
   * Количество возвращаемых в ответе клиентов. Значение по умолчанию: 20. Максимальное значение: 50
   */
  limit: number;
  /**
   * Смещение точки отсчета относительно начала списка клиентов. Значение по умолчанию: 0
   */
  offset: number;
  /**
   * Идентификатор менеджера
   */
  _manager__id: AgencyManager['user']['id'];
  /**
   * Список идентификаторов менеджера
   */
  _manager__id__in: Array<AgencyManager['user']['id']>;
  /**
   * Имя менеджера
   */
  _manager__username: AgencyManager['user']['username'];
  /**
   * Список имен клиентов
   */
  _manager__username__in: Array<AgencyManager['user']['username']>;
}

export interface AgencyManagersListOutput {
  count: number;
  items: AgencyManager[];
  limit: number;
  offset: number;
}

export interface AgencyManagersCreateOutput {
  user: AgencyManager;
}
