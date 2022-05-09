import { BaseApiMethod } from 'api/BaseApiMethod';
import type {
  ReservedAmountsConstructor,
  ReservedAmounts as ReservedAmountsOutput,
} from './types';

/**
 * Ресурс для получения информации о средствах клиентов агентства.
 */
export class ReservedAmounts extends BaseApiMethod {
  constructor({ ids, api }: ReservedAmountsConstructor) {
    super();
    this._api = api;
    this._endpoint = `/api/v2/reserved_amounts/${ids.join(';')}.json`;
  }

  /**
   * Возвращает список информации о средствах клиента агентства.
   */
  list(): Promise<ReservedAmountsOutput> {
    return this._api.call({ method: 'get', endpoint: this._endpoint });
  }
}
