import { BaseApiMethod } from '../BaseApiMethod';
import type {
  BranchClientsCountCounstructor,
  BranchClientsCountListOutput,
} from './types';

/**
 * Ресурс позволяет получить данные о количестве клиентов представительства с определенным статусом.
 * Ресурс доступен только пользователям-представителям.
 */
export class BranchClientsCount extends BaseApiMethod {
  constructor({ api }: BranchClientsCountCounstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v2/branch/clients/count.json';
  }

  /**
   * Запрос возвращает список возможных статусов и количество клиентов в каждом из них.
   */
  list(): Promise<BranchClientsCountListOutput> {
    return this._api.call({ method: 'get', endpoint: this._endpoint });
  }
}
