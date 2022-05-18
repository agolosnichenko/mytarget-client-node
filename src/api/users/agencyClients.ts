import { BaseApiMethod } from '../BaseApiMethod';
import { AxiosPromise } from 'axios';
import type {
  AgencyClient,
  AgencyClientsConstructor,
  AgencyClientsCreateOutput,
  AgencyClientsListInput,
  AgencyClientsListOutput,
} from './types';

/**
 * Ресурс позволяет получить информацию о существующих клиентах агентства и создать новых.
 * Ресурс доступен только пользователям-агентствам.
 */
export class AgencyClients extends BaseApiMethod {
  constructor({ api }: AgencyClientsConstructor) {
    super();
    this._endpoint = '/api/v2/agency/clients.json';
    this._api = api;
  }

  /**
   * Запрос возвращает список всех клиентов, находящихся в ведении агентства.
   * @param params Используется объект: AgencyClient
   */
  list(
    params?: Partial<AgencyClientsListInput>,
  ): Promise<AgencyClientsListOutput> {
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
   * Запрос создает нового клиента или добавляет существующего в список клиентов, находящихся в ведении агентства.
   * Привязать существующего клиента можно только если учетная запись отвечает следующим условиям:
   * - находится в статусе "active";
   * - является прямым рекламодателем;
   * - не привязана к какому-либо агентству или представительству;
   * - использует валюту агентства (User.currency).
   * @param params AgencyClient
   */
  create(params: AgencyClient): Promise<AgencyClientsCreateOutput> {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
