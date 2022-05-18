import { BaseApiMethodConstructor } from '../../../types';


export type ManagerClientConstructor = BaseApiMethodConstructor & {
  client_id?: number;
  client_username?: string;
};
