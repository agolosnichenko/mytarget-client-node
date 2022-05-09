import { BaseApiMethod } from 'api/BaseApiMethod';
import type {
  AgencyClientConstructor,
  AgencyClient as AgencyClientInput,
} from './types';

/**
 * Ресурс позволяет управлять учетными записями клиентов агентства.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyClient extends BaseApiMethod {
  constructor({ id, api }: AgencyClientConstructor) {
    super();
    this._api = api;
    this._endpoint = `/api/v2/agency/clients/${id}.json`;
  }

  /**
   * Запрос редактирует данные и права доступа клиента агентства.
   * @param params {AgencyClientInput} Используется объект: AgencyClient
   */
  update(params: AgencyClientInput) {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
