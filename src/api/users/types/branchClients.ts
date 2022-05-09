import { BaseApiMethodConstructor } from 'types';
import { BranchClient } from '.';

export type BranchClientsConstructor = BaseApiMethodConstructor;

export interface BranchClientsListInput {
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
  _user__id: BranchClient['user']['id'];
  /**
   * Список идентификаторов клиента
   */
  _user__id__in: Array<BranchClient['user']['id']>;
  /**
   * Имя клиента
   */
  _user__username: BranchClient['user']['username'];
  /**
   * Список имен клиентов
   */
  _user__username__in: Array<BranchClient['user']['username']>;
  /**
   * Статус клиента
   */
  _user__status: BranchClient['user']['status'];
  /**
   * Статус клиента
   */
  _user__status__ne: BranchClient['user']['status'];
  /**
   * Список статусов клиента
   */
  _user__status__in: Array<BranchClient['user']['status']>;
  /**
   * Статус отношения между клиентом и агенством.
   */
  _status: BranchClient['status'];
  /**
   * Статус отношения между клиентом и агенством.
   */
  _status__ne: BranchClient['status'];
  /**
   * Список статусов отношений между клиентом и агенством.
   */
  _status__in: Array<BranchClient['status']>;
  /**
   * полнотекстовый поиск по user.username, user.additional_info.client_name, user.additional_info.client_info
   */
  _q: string;
}

export interface BranchClientsListOutput {
  count: number;
  items: BranchClient[];
  limit: number;
  offset: number;
}

export interface BranchClientsCreateOutput {
  user: BranchClient;
}
