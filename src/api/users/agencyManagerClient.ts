import { BaseApiMethod } from '../BaseApiMethod';
import type {
  AgencyManagerClientConstructor,
  AgencyManagerClient as AgencyManagerClientInput,
} from './types';

/**
 * Ресурс позволяет управлять учетными записями клиентов, находящихся в ведении менеджера агентства.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyManagerClient extends BaseApiMethod {
  constructor({
    manager_id,
    manager_username,
    client_id,
    client_username,
    api,
  }: AgencyManagerClientConstructor) {
    if (!manager_id && !manager_username)
      throw new Error('Provide manager_id or manager_username');
    if (!client_id && !client_username)
      throw new Error('Provide client_id or client_username');
    super();
    this._endpoint = `/api/v2/agency/managers/${
      manager_id ?? manager_username
    }/clients/${client_id ?? client_username}.json`;
    this._api = api;
  }

  /**
   * Запрос редактирует данные и права доступ клиента, находящегося в ведении менеджера.
   * @param params Используется объект: AgencyManagerClient
   */
  update(params: AgencyManagerClientInput) {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }

  /**
   * Запрос выводит клиента (удаляет) из ведения менеджера. Операция не приводит к полному удалению учетной записи клиента или выведению клиента из ведома агентства.s
   */
  delete() {
    return this._api.call({
      method: 'delete',
      endpoint: this._endpoint,
    });
  }
}
