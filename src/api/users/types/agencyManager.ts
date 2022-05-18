import { BaseApiMethodConstructor } from '../../../types';

export type AgencyManagerConstructor = BaseApiMethodConstructor & {
  manager_id?: string;
  manager_username?: string;
};
