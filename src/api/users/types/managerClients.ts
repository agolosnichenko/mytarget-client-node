import { BaseApiMethodConstructor } from 'types';
import { ManagerClient } from '.';

export type ManagerClientsConstructor = BaseApiMethodConstructor;

export type ManagerClientsListInput = {
  /**
   * количество элементов в одном запросе, не больше 50. Значение по-умолчанию: 20
   */
  limit: number;
  /**
   * Количество пропущенных элементов в пагинации. Значение по-умолчанию: 0
   */
  offset: number;
  /**
   * Идентификатор клиента
   */
  _user__id: ManagerClient['user']['id'];
  /**
   * Список идентификаторов клиента
   */
  _user__id__in: Array<ManagerClient['user']['id']>;
  /**
   * Имя пользователя
   */
  _user__username: ManagerClient['user']['username'];
  /**
   * Список имен пользователей
   */
  _user__username__in: Array<ManagerClient['user']['username']>;
  /**
   * Статус клиента
   */
  _user__status: ManagerClient['user']['status'];
  /**
   * Статус клиента
   */
  _user__status__ne: ManagerClient['user']['status'];
  /**
   * Список статусов клиента
   */
  _user__status__in: Array<ManagerClient['user']['status']>;
  /**
   * Статус отношения между клиентом и агенством.
   */
  _status: ManagerClient['status'];
  /**
   * Статус отношения между клиентом и агенством.
   */
  _status__ne: ManagerClient['status'];
  /**
   * Список статусов отношений между клиентом и агенством.
   */
  _status__in: Array<ManagerClient['status']>;
};

export type ManagerClientsListOutput = {
  count: number;
  items: ManagerClient[];
  limit: number;
  offser: number;
};
