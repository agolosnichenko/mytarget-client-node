import { BaseApiMethodConstructor } from 'types';
import { AgencyManagerClient, UserManagerClient } from '.';

export type AgencyManagerClientsConstructor = BaseApiMethodConstructor & {
  manager_id?: number;
  manager_username?: string;
};

export interface AgencyManagerClientsListInput {
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
  _user__id: AgencyManagerClient['user']['id'];
  /**
   * Список идентификаторов клиента
   */
  _user__id__in: Array<AgencyManagerClient['user']['id']>;
  /**
   * Имя клиента
   */
  _user__username: AgencyManagerClient['user']['username'];
  /**
   * Список имен клиентов
   */
  _user__username__in: Array<AgencyManagerClient['user']['username']>;
  /**
   * Статус клиента
   */
  _user__status: AgencyManagerClient['user']['status'];
  /**
   * Статус клиента
   */
  _user__status__ne: AgencyManagerClient['user']['status'];
  /**
   * Список статусов клиента
   */
  _user__status__in: Array<AgencyManagerClient['user']['status']>;
  /**
   * Статус отношения между клиентом и агенством.
   */
  _status: AgencyManagerClient['status'];
  /**
   * Статус отношения между клиентом и агенством.
   */
  _status__ne: AgencyManagerClient['status'];
  /**
   * Список статусов отношений между клиентом и агенством.
   */
  _status__in: Array<AgencyManagerClient['status']>;
  /**
   * полнотекстовый поиск по user.username, user.additional_info.client_name, user.additional_info.client_info
   */
  _q: string;
}

export interface AgencyManagerClientsListOutput {
  count: number;
  items: AgencyManagerClient[];
  limit: number;
  offset: number;
}

export interface AgencyManagerClientsCreateOutput {
  user: UserManagerClient;
}
