import { BaseApiMethod } from 'api/BaseApiMethod';
import type {
  UserConstructor,
  User as UserOutput,
  User as UserInput,
} from './types';

/**
 * Ресурс, позволяющий собрать основную информацию о пользователе.
 */
export class User extends BaseApiMethod {
  constructor({ api }: UserConstructor) {
    super();
    this._api = api;
    this._endpoint = '/api/v3/user.json';
  }

  /**
   * Получение информации о пользователе
   */
  get(): Promise<UserOutput> {
    return this._api.call({ method: 'get', endpoint: this._endpoint });
  }

  /**
   * Обновление информации о пользователе
   * @param params Используется объект: User
   */
  update(params: UserInput) {
    return this._api.call({
      method: 'post',
      endpoint: this._endpoint,
      data: params,
    });
  }
}
