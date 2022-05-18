import { BaseApiMethod } from '../BaseApiMethod';
import type {
  BranchClientConstructor,
  BranchClient as BranchClientInput,
} from './types';

/**
 * Ресурс позволяет управлять учетными записями клиентов представительства.
 * Ресурс доступен только пользователям-представительствам.
 */
export class BranchClient extends BaseApiMethod {
  constructor({ id, username, api }: BranchClientConstructor) {
    if (!id && !username) throw new Error('Provide id or username');
    super();
    this._api = api;
    this._endpoint = `/api/v2/branch/clients/${id ?? username}.json`;
  }

  /**
   * Запрос редактирует данные клиента, находящегося в ведении представительства.
   * @param params Используется объект: BranchClient
   */
  update(params?: Partial<BranchClientInput>) {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
