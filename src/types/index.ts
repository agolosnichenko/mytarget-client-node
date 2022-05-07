import { MyTargetClientOptions } from '../../../mytarget-connector/src/interfaces/mytargetModuleOptions';

export type Credentials = {
  access_token: string;
  token_type: string;
  scope: Array<string>;
  expires_in: number;
  refresh_token: string;
};

export type ClientError = {
  code: string;
  message: string;
};

export type GetAccessTokenInput = MyTargetClientOptions & {
  permanent?: boolean;
};

export type ClearAccessTokensInput = Pick<
  MyTargetClientOptions,
  'client_id' | 'client_secret'
> &
  Partial<{ user_id: number; username: string }>;
