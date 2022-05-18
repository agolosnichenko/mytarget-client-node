import { BaseApiMethod } from '../BaseApiMethod';
import { AgencyManagerClient as AgencyManagerClientInput } from './types';
import { AgencyManagerClientMassActionConstructor } from './types/agencyManagerClientMassAction';

/**
 * Ресурс позволяет массово привязать существующих клиентов агентства к менеджеру.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyManagerClientMassAction extends BaseApiMethod {
  constructor({
    manager_id,
    manager_username,
    api,
  }: AgencyManagerClientMassActionConstructor) {
    if (!manager_id && !manager_username)
      throw new Error('Provide manager_id or manager_username');
    super();
    this._api = api;
    this._endpoint = `/api/v2/agency/managers/${
      manager_id ?? manager_username
    }/clients/mass_action.json`;
  }

  /**
   * Запрос добавляет существующих пользователей в список клиентов, находящихся в ведении менеджера.
   * Привязать существующих пользователей можно только если учетная запись пользователя отвечает следующим условиям:
   * - находится в статусе "active"
   * - привязана к тому же агентству что и менеджер
   * - Чтобы привязать клиентов, нужно передать параметр "user.id" или "user.username".
   * - За один запрос можно привязать максимум 50 пользователей.
   * @param params Используется объект: AgencyManagerClient
   */
  update(params: AgencyManagerClientInput[]) {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
