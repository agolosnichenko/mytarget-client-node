import { BaseApiMethod } from '../BaseApiMethod';
import type {
  AgencyClientsCountConstructor,
  AgencyClientsCount as AgencyClientsCountOutput,
} from './types';

/**
 * Ресурс позволяет получить данные о количестве клиентов агентства с определенным статусом.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyClientsCount extends BaseApiMethod {
  constructor({ api }: AgencyClientsCountConstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v2/agency/clients/count.json';
  }

  /**
   * Запрос возвращает список возможных статусов и количество клиентов в каждом из них.
   */
  get(): Promise<AgencyClientsCountOutput> {
    return this._api.call({
      method: 'get',
      endpoint: this._endpoint,
    });
  }
}
