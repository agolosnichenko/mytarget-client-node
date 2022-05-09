import { BaseApiMethod } from 'api/BaseApiMethod';
import type {
  ManagerClientsConstructor,
  ManagerClientsListInput,
  ManagerClientsListOutput,
} from './types';

/**
 * Ресурс для получения информации о клиентах менеджера.
 * Ресурс доступен только пользователям-менеджерам.
 */
export class ManagerClients extends BaseApiMethod {
  constructor({ api }: ManagerClientsConstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v3/manager/clients.json';
  }

  /**
   * Возвращает список всех клиентов, находящихся в ведении менеджера.
   * @param params Используется объект: ManagerClient
   */
  list(params?: ManagerClientsListInput): Promise<ManagerClientsListOutput> {
    return this._api.call({
      method: 'get',
      endpoint: this._endpoint,
      ...(params && {
        data: {
          ...params,
          _user__id__in: params?._user__id__in?.join(','),
          _user__username__in: params?._user__username__in?.join(','),
          _user__status__in: params?._user__status__in?.join(','),
          _status__in: params?._status__in?.join(','),
        },
      }),
    });
  }
}
