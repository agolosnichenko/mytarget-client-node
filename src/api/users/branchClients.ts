import { BaseApiMethod } from 'api/BaseApiMethod';
import type {
  BranchClient,
  BranchClientsCreateOutput,
  BranchClientsListInput,
  BranchClientsListOutput,
  BranchClientsConstructor,
} from './types';

/**
 * Ресурс позволяет получить информацию о существующих клиентах представительства и создать новых.
 * Ресурс доступен только пользователям-представительства.
 */
export class BranchClients extends BaseApiMethod {
  constructor({ api }: BranchClientsConstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v2/branch/clients.json';
  }

  /**
   * Возвращает список всех клиентов, находящихся в ведении представительства.
   * @param params Используется объект: BranchClient
   */
  list(
    params?: Partial<BranchClientsListInput>,
  ): Promise<BranchClientsListOutput> {
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
   * Запрос создает нового клиента в списке клиентов, находящихся в ведении представительства.
   * @param params BranchClient
   */
  create(params: BranchClient): Promise<BranchClientsCreateOutput> {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
