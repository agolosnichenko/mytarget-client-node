import { BaseApiMethod } from 'api/BaseApiMethod';
import type {
  AgencyManager,
  AgencyClientsCreateOutput,
  AgencyManagersListInput,
  AgencyManagersListOutput,
  AgencyManagersConstructor,
} from './types';

/**
 * Ресурс позволяет получить информацию о менеджерах агентства и создать нового менеджера.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyManagers extends BaseApiMethod {
  constructor({ api }: AgencyManagersConstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v2/agency/managers.json';
  }

  /**
   * Запрос возвращает список всех менеджеров, находящихся в ведении агентства.
   * @param params С помощью следующих GET-параметров можно фильтровать данные:
   * - limit - Количество возвращаемых в ответе менеджеров. Значение по умолчанию: 20. Максимальное значение: 50.
   * - offset - Смещение точки отсчета относительно начала списка. Значение по умолчанию: 0.
   * - _manager__username - Имя менеджера.
   * - _manager__username__in - Список имен менеджеров через запятую. Имена задаются в формате "username1,username2,...,usernameN".
   * - _manager__id - Идентификатор менеджера.
   * - _manager__id__in - Список идентификаторов менеджера через запятую.
   */
  list(params?: AgencyManagersListInput): Promise<AgencyManagersListOutput> {
    return this._api.call({
      method: 'get',
      endpoint: this._endpoint,
      ...(params && {
        data: {
          ...params,
          _user__username__in: params?._manager__id__in?.join(','),
          _user__status__in: params?._manager__username__in?.join(','),
        },
      }),
    });
  }

  /**
   * Запрос добавляет существующего пользователя в список менеджеров, находящихся в ведении агентства.
   * Привязать существующего пользователя можно только если учетная запись отвечает следующим условиям:
   * - находится в статусе "active";
   * - не имеет каких-либо кампаний;
   * - не является менеджером/агентством/представительством. Чтобы привязать менеджера, нужно передать параметр "user.id" или "user.username".
   * @param params Используется объект: AgencyManager
   */
  create(params: AgencyManager): Promise<AgencyClientsCreateOutput> {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
