import {
  ClearAccessTokensInput,
  ClientError,
  Credentials,
  GetAccessTokenInput,
} from './types';
import * as qs from 'qs';
import axios from 'axios';

const HOST = 'https://target.my.com';
const AXIOS_HEADERS = {
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
};

export class MyTargetClient {
  constructor(public credentials: Credentials) {}

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
}
