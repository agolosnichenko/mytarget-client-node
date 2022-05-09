import { BaseApiMethodConstructor } from 'types';

export type AgencyManagerClientConstructor = BaseApiMethodConstructor & {
  manager_id?: number;
  manager_username?: string;
  client_id?: number;
  client_username?: string;
};
