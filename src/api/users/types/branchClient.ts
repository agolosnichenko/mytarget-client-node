import { BaseApiMethodConstructor } from 'types';

export type BranchClientConstructor = BaseApiMethodConstructor & {
  id?: number;
  username?: string;
};
