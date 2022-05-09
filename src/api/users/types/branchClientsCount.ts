import { BaseApiMethodConstructor } from 'types';

export type BranchClientsCountCounstructor = BaseApiMethodConstructor;

export type BranchClientsCountListOutput = {
  active: number;
  blocked: number;
  deleted: number;
};
