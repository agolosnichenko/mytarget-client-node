import { MyTargetClient } from '../client';

type MyTargetClientOptions = {
  /**
   *  Client Id для доступа к API
   */
  client_id: string;
  /**
   *  Client Secret для доступа к API
   */
  client_secret: string;
  /**
   *  Тип запроса токена (https://target.my.com/help/advertisers/api_authorization/ru)
   */
  grant_type: 'client_credentials' | 'agency_client_credentials';
  /**
   *  Название клиента агентства/менеджера
   */
  agency_client_name?: string;
  /**
   *  ID клиента агентства/менеджера
   */
  agency_client_id?: number;
};

export type Credentials = {
  /**\
   * Токен доступа к API
   */
  access_token: string;
  /**
   * Тип токена
   */
  token_type: string;
  /**
   * Права доступа
   */
  scope: Array<string>;
  /**
   * Срок жизни токена
   */
  expires_in: number;
  /**
   * Токен для обновления
   */
  refresh_token: string;
};

export type ClientError = {
  /**
   * Код ошибки
   */
  code: string;
  /**
   * Текст ошибки
   */
  message: string;
};

export type GetAccessTokenInput = MyTargetClientOptions & {
  /**
   * Вечный токен (без ограничения по сроку жизни)
   */
  permanent?: boolean;
};

export type ClearAccessTokensInput = Pick<
  MyTargetClientOptions,
  'client_id' | 'client_secret'
> &
  Partial<{ user_id: number; username: string }>;

export type RefreshTokenInput = Pick<
  MyTargetClientOptions,
  'client_id' | 'client_secret'
> &
  Pick<Credentials, 'refresh_token'> & { grant_type: 'refresh_token' };

export interface IApiCallInput {
  method: 'get' | 'post' | 'delete';
  endpoint: string;
  data?: any;
}

export interface BaseApiMethodConstructor {
  api: MyTargetClient;
}
