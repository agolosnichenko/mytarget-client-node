import { BaseApiMethodConstructor } from '../../../types';
import { AgencyClient, UserClient } from '.';

export type AgencyClientsConstructor = BaseApiMethodConstructor;

export interface AgencyClientsListInput {
  /**
   * Количество возвращаемых в ответе клиентов. Значение по умолчанию: 20. Максимальное значение: 50
   */
  limit: number;
  /**
   * Смещение точки отсчета относительно начала списка клиентов. Значение по умолчанию: 0
   */
  offset: number;
  /**
   * Идентификатор клиента
   */
  _user__id: AgencyClient['user']['id'];
  /**
   * Список идентификаторов клиента
   */
  _user__id__in: Array<AgencyClient['user']['id']>;
  /**
   * Имя клиента
   */
  _user__username: AgencyClient['user']['username'];
  /**
   * Список имен клиентов
   */
  _user__username__in: Array<AgencyClient['user']['username']>;
  /**
   * Статус клиента
   */
  _user__status: AgencyClient['user']['status'];
  /**
   * Список статусов клиента
   */
  _user__status__ne: AgencyClient['user']['status'];
  /**
   * Список статусов клиента
   */
  _user__status__in: Array<AgencyClient['user']['status']>;
  /**
   * Статус отношения между клиентом и агенством.
   */
  _status: AgencyClient['status'];
  /**
   * Список статусов отношений между клиентом и агенством.
   */
  _status__ne: AgencyClient['status'];
  /**
   * Список статусов отношений между клиентом и агенством.
   */
  _status__in: Array<AgencyClient['status']>;
  /**
   * полнотекстовый поиск по user.username, user.additional_info.client_name, user.additional_info.client_info
   */
  _q: string;
}

export interface AgencyClientsListOutput {
  count: number;
  items: AgencyClient[];
  limit: number;
  offset: number;
}

export interface AgencyClientsCreateOutput {
  user: UserClient;
}
