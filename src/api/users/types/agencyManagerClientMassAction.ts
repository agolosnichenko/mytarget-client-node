import { BaseApiMethodConstructor } from 'types';

export type AgencyManagerClientMassActionConstructor =
  BaseApiMethodConstructor & {
    manager_id?: number;
    manager_username?: string;
  };
