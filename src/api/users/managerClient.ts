import { BaseApiMethod } from 'api/BaseApiMethod';
import type {
  ManagerClientConstructor,
  ManagerClient as ManagerClientInput,
} from './types';

/**
 * Ресурс позволяет управлять учетными записями клиентов менеджера.
 * Ресурс доступен только пользователям-менеджерам.
 */
export class ManagerClient extends BaseApiMethod {
  constructor({ client_id, client_username, api }: ManagerClientConstructor) {
    if (!client_id && !client_username)
      throw new Error('Provide client_id or client_username');
    super();
    this._api = api;
    this._endpoint = `/api/v3/manager/clients/${
      client_id ?? client_username
    }.json`;
  }

  /**
   * Запрос редактирует данные клиента, находящегося в ведении менеджера.
   * @param params Используется объект: ManagerClient
   */
  update(params: ManagerClientInput) {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
