import { BaseApiMethod } from '../BaseApiMethod';
import type {
  ManagerClientsCountConstructor,
  ManagerClientsCountOutput,
} from './types';

/**
 * Ресурс позволяет получить данные о количестве клиентов менеджера с определенным статусом.
 * Ресурс доступен только пользователям-менеджерам.
 */
export class ManagerClientsCount extends BaseApiMethod {
  constructor({ api }: ManagerClientsCountConstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v2/manager/clients/count.json';
  }

  /**
   * Запрос возвращает список возможных статусов и количество клиентов в каждом из них.
   */
  list(): Promise<ManagerClientsCountOutput> {
    return this._api.call({ method: 'get', endpoint: this._endpoint });
  }
}
