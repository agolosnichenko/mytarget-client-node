import { BaseApiMethodConstructor } from 'types';

export type ManagerClientsCountConstructor = BaseApiMethodConstructor;

export type ManagerClientsCountOutput = {
  active: number;
  blocked: number;
  deleted: number;
};
