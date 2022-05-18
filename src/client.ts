import type {
  ClearAccessTokensInput,
  ClientError,
  Credentials,
  GetAccessTokenInput,
  IApiCallInput,
  RefreshTokenInput,
} from './types';
import * as qs from 'qs';
import axios from 'axios';
import Stats from './api/stats';
import Users from './api/users';

const HOST = 'https://target.my.com';
const AXIOS_HEADERS = {
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
};

export class MyTargetClient {
  readonly credentials: Credentials;
  users: Users = new Users(this);
  stats: Stats = new Stats(this);

  constructor(credentials: Credentials) {
    if (!credentials) throw new Error('Credentials required');
    this.credentials = credentials;
  }

  public static async getAccessToken(options: GetAccessTokenInput) {
    const result = await axios.post<Credentials & Partial<ClientError>>(
      `${HOST}/api/v2/oauth2/token.json`,
      qs.stringify(options),
      AXIOS_HEADERS,
    );
    if (result.status === 200) {
      return result.data;
    } else {
      throw new Error(result.data.message);
    }
  }

  public static async refreshAccessToken(options: RefreshTokenInput) {
    const result = await axios.post<Credentials & Partial<ClientError>>(
      `${HOST}/api/v2/oauth2/token.json`,
      qs.stringify(options),
      AXIOS_HEADERS,
    );
    if (result.status === 200) {
      return result.data;
    } else {
      throw new Error(result.data.message);
    }
  }

  public static async clearAccessTokens(options: ClearAccessTokensInput) {
    const result = await axios.post(
      `${HOST}/api/v2/oauth2/token/delete.json`,
      qs.stringify(options),
      AXIOS_HEADERS,
    );
    if (result.status === 200) {
      return result.data;
    } else {
      throw new Error(result.data.message);
    }
  }

  async call({ method, endpoint, data }: IApiCallInput): Promise<any> {
    const result = await axios({
      method,
      url: `${HOST}${endpoint}`,
      ...(method === 'get' ? { params: data } : { data }),
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${this.credentials.access_token}`,
      },
    });
    if (result.status === 200 || result.status === 204) {
      return result.data;
    } else {
      throw new Error(result.data.error);
    }
  }
}
