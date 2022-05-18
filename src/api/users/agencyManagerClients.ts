import { BaseApiMethod } from '../BaseApiMethod';
import {
  AgencyManagerClient,
  AgencyManagerClientsCreateOutput,
  AgencyManagerClientsListInput,
  AgencyManagerClientsConstructor,
} from './types';

/**
 * Ресурс позволяет получить информацию о клиентах менеджера и передать существующего клиента агентства менеджеру.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyManagerClients extends BaseApiMethod {
  constructor({
    manager_id,
    manager_username,
    api,
  }: AgencyManagerClientsConstructor) {
    if (!manager_id && !manager_username)
      throw new Error('Provide manager_id or manager_username');
    super();
    this._api = api;
    this._endpoint = `/api/v2/agency/managers/${
      manager_id ?? manager_username
    }/clients.json`;
  }

  /**
   * Запрос возвращает список всех клиентов, находящихся в ведении менеджера.
   * @param params С помощью следующих GET-параметров можно фильтровать данные
   * - limit - Количество возвращаемых в ответе клиентов. Значение по умолчанию: 20. Максимальное значение: 50.
   * - offset - Смещение точки отсчета относительно начала списка клиентов. Значение по умолчанию: 0.
   * - _user__id - Идентификатор клиента.
   * - _user__id__in - Список идентификаторов клиента через запятую.
   * - _user__username - Имя клиента.
   * - _user__username__in - Список имен клиентов через запятую. Имена задаются в формате "username1,username2,...,usernameN".
   * - _user__status, _user__status__ne - Статус клиента.
   * - _user__status__in - Список статусов через запятую.
   * - _status, _status__ne - Статус отношения между клиентом и менеджером.
   * - _status__in - Список статусов через запятую.
   * - _q - полнотекстовый поиск по user.username, user.additional_info.client_name, user.additional_info.client_info
   */
  list(params?: Partial<AgencyManagerClientsListInput>) {
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

  /**
   * Запрос добавляет существующего пользователя в список клиентов, находящихся в ведении менеджера.
   * Привязать существующего пользователя можно только если учетная запись пользователя отвечает следующим условиям:
   * - находится в статусе "active"
   * - привязана к тому же агентству что и менеджер
   * - Чтобы привязать клиента, нужно передать параметр "user.id" или "user.username".
   * @param params Используется объект: AgencyManagerClient
   */
  create(
    params: AgencyManagerClient,
  ): Promise<AgencyManagerClientsCreateOutput> {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }

  /**
   * Удаляет всех клиентов из ведения менеджера. Удаление не приводит к полному удалению учетной записи клиента или удалению клиента из ведома агентства.
   */
  delete() {
    return this._api.call({
      method: 'delete',
      endpoint: this._endpoint,
    });
  }
}
