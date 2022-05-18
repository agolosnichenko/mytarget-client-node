import { MyTargetClient } from '../../client';
import { AgencyClient } from './agencyClient';
import { AgencyClients } from './agencyClients';
import { AgencyClientsCount } from './agencyClientsCount';
import { AgencyManager } from './agencyManager';
import { AgencyManagerClient } from './agencyManagerClient';
import { AgencyManagerClientMassAction } from './agencyManagerClientMassAction';
import { AgencyManagerClients } from './agencyManagerClients';
import { AgencyManagers } from './agencyManagers';
import { BranchClient } from './branchClient';
import { BranchClients } from './branchClients';
import { BranchClientsCount } from './branchClientsCount';
import { ManagerClient } from './managerClient';
import { ManagerClients } from './managerClients';
import { ManagerClientsCount } from './managerClientsCount';
import { ReservedAmounts } from './reservedAmounts';
import { User } from './user';
import type {
  AgencyManagerClientsConstructor,
  AgencyClientConstructor,
  AgencyManagerConstructor,
  AgencyManagerClientConstructor,
  AgencyManagerClientMassActionConstructor,
  BranchClientConstructor,
  ManagerClientConstructor,
  ReservedAmountsConstructor,
} from './types';

export default class Users {
  constructor(private api: MyTargetClient) {}
  agencyClient(params: Omit<AgencyClientConstructor, 'api'>): AgencyClient {
    return new AgencyClient({ ...params, api: this.api });
  }
  agencyClients: AgencyClients = new AgencyClients({ api: this.api });
  agencyClientsCount = new AgencyClientsCount({ api: this.api });
  agencyManager(params: Omit<AgencyManagerConstructor, 'api'>) {
    return new AgencyManager({ ...params, api: this.api });
  }
  agencyManagerClient(params: Omit<AgencyManagerClientConstructor, 'api'>) {
    return new AgencyManagerClient({ ...params, api: this.api });
  }
  agencyManagerClientMassAction(
    params: Omit<AgencyManagerClientMassActionConstructor, 'api'>,
  ) {
    return new AgencyManagerClientMassAction({ ...params, api: this.api });
  }
  agencyManagerClients(params: Omit<AgencyManagerClientsConstructor, 'api'>) {
    return new AgencyManagerClients({ ...params, api: this.api });
  }
  agencyManagers = new AgencyManagers({ api: this.api });
  branchClient(params: BranchClientConstructor) {
    return new BranchClient({ ...params, api: this.api });
  }
  branchClients = new BranchClients({ api: this.api });
  branchClientsCount = new BranchClientsCount({ api: this.api });
  managerClient(params: Omit<ManagerClientConstructor, 'api'>) {
    return new ManagerClient({ ...params, api: this.api });
  }
  managerClients = new ManagerClients({ api: this.api });
  managerClientsCount = new ManagerClientsCount({ api: this.api });
  reservedAmounts(params: Omit<ReservedAmountsConstructor, 'api'>) {
    return new ReservedAmounts({ ...params, api: this.api });
  }
  user = new User({ api: this.api });
}
