import { BaseApiMethod } from '../BaseApiMethod';
import type {
  AgencyManagerConstructor,
  AgencyManager as AgencyManagerInput,
} from './types';

/**
 * Ресурс позволяет управлять учетными записями менеджеров агентства.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyManager extends BaseApiMethod {
  constructor({ manager_id, manager_username, api }: AgencyManagerConstructor) {
    if (!manager_id && !manager_username)
      throw new Error('Provide manager_id or manager_username');
    super();
    this._api = api;
    this._endpoint = `/api/v2/agency/managers/${
      manager_id ?? manager_username
    }.json`;
  }

  /**
   * Запрос редактирует данные менеджера, находящегося в ведении агентства.
   * @param params Используется объект: AgencyManager
   */
  update(params: AgencyManagerInput) {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }

  /**
   * Запрос удаляет учетную запись менеджера из ведения агентства. Операция не приводит к удалению учетной записи из системы myTarget.
   */
  delete() {
    return this._api.call({
      method: 'delete',
      endpoint: this._endpoint,
    });
  }
}
