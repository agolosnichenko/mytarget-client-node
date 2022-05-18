export * from './agencyClient';
export * from './agencyClients';
export * from './agencyClientsCount';
export * from './agencyManager';
export * from './agencyManagerClient';
export * from './agencyManagerClientMassAction';
export * from './agencyManagerClients';
export * from './agencyManagers';
export * from './branchClient';
export * from './branchClients';
export * from './branchClientsCount';
export * from './managerClient';
export * from './managerClients';
export * from './managerClientsCount';
export * from './reservedAmounts';
export * from './user';

/**
 * Объект, хранящий дополнительную информацию о клиенте представительства.
 */
export type AdditionalBranchClientInfo = {
  /**
   * Адрес.
   */
  readonly address: string;
  /**
   * Заметки представительства о клиенте.
   */
  client_info: string;
  /**
   * Имя клиента представительства.
   */
  client_name: string;
  /**
   * Адрес электронной почты.
   */
  readonly email: string;
  /**
   * Имя и фамилия.
   */
  name: string;
  /**
   * Номер телефона.
   */
  readonly phone: string;
};

/**
 * Объект, хранящий дополнительную информацию о клиенте агентства.
 */
export type AdditionalClientInfo = {
  /**
   * Адрес.
   */
  readonly address: string;
  /**
   * Заметки агентства о клиенте.
   */
  client_info: string;
  /**
   * Имя клиента агентства.
   */
  client_name: string;
  /**
   * Имя и фамилия.
   */
  readonly name: string;
  /**
   * Номер телефона.
   */
  readonly phone: string;
};

/**
 * Объект, хранящий дополнительную информацию о менеджере агентства.
 */
export type AdditionalManagerInfo = {
  /**
   * Имя менеджера агентства.
   */
  client_name: string;
};

/**
 * Объект, хранящий дополнительную информацию о пользователе.
 */
export type AdditionalUserInfo = {
  /**
   * Адрес
   */
  readonly address: string;
  /**
   * Заметки агентства о клиенте.
   */
  readonly client_info: string;
  /**
   * Название клиента агентства.
   */
  readonly client_name: string;
  /**
   * Имя и фамилия.
   */
  name: string;
  /**
   * Номер телефона.
   */
  phone: string;
};

/**
 * Объект, хранящий различную информацию об агенстве.
 */
export type Agency = {
  /**
   * Комиссия представительства.
   */
  readonly buyer_commission: number;
  /**
   * Признак, что агентство является представительством.
   */
  readonly is_buyer: boolean;
  /**
   * Комиссия.
   */
  readonly overriding_commission: number;
};

/**
 * Объект, предоставляющий информацию о клиенте агентства.
 */
export type AgencyClient = {
  /**
   * Тип доступа агентства к учетной записи клиента.
   * - full_access - Полный доступ.
   * - readonly - Только чтение.
   * - fin_readonly - Без доступа к счету.
   * - ads_readonly - Только доступ к счету.
   */
  access_type: 'full_access' | 'readonly' | 'fin_readonly' | 'ads_readonly';
  /**
   * Статус отношения между клиентом и агенством.
   * - active - Активный.
   * - deleted - Удаленный.
   * - blocked - Заблокированный.
   */
  readonly status: 'active' | 'deleted' | 'blocked';
  /**
   * Клиент
   */
  user: UserClient;
};

/**
 * Объект, предоставляющий информацию о количестве клиентов агентства с разными статусами.
 */
export type AgencyClientsCount = {
  /**
   * Количество активных клиентов.
   */
  readonly active: number;
  /**
   * Количество заблокированных клиентов.
   */
  readonly blocked: number;
  /**
   * Количество удаленных клиентов.
   */
  readonly deleted: number;
};

/**
 * Объект, предоставляющий информацию о менеджере агентства.
 */
export type AgencyManager = {
  user: UserManager;
};

/**
 * Объект, предоставляющий информацию о клиенте менеджера.
 */
export type AgencyManagerClient = {
  /**
   * Тип доступа менеджера к учетной записи клиента.
   * - full_access - Полный доступ.
   * - readonly - Только чтение.
   * - fin_readonly - Без доступа к счету.
   * - ads_readonly - Только доступ к счету.
   */
  access_type: 'full_access' | 'readonly' | 'fin_readonly' | 'ads_readonly';
  /**
   * Статус отношения между клиентом и менеджером.
   * - active - Активный.
   * - deleted - Удаленный.
   * - blocked - Заблокированный.
   */
  readonly status: 'active' | 'deleted' | 'blocked';
  /**
   * Клиент. Возвращается в GET запросе.
   */
  user: UserManagerClient;
};

/**
 * Объект, предоставляющий информацию о клиенте представительства.
 */
export type BranchClient = {
  /**
   * Тип доступа представительства к учетной записи клиента.
   * - full_access - Полный доступ.
   */
  readonly access_type: 'full_access';
  /**
   * Статус отношения между клиентом и представительством.
   * - active - Активный.
   * - blocked - Заблокированный.
   */
  status: 'active' | 'blocked';
  /**
   * Объект, хранящий дополнительную информацию о клиенте представительства.
   */
  user: BranchUserClient;
};

/**
 * Объект, предоставляющий информацию о количестве клиентов представителя с разными статусами.
 */
export type BranchClientsCount = {
  /**
   * Количество активных клиентов.
   */
  readonly active: number;
  /**
   * Количество заблокированных клиентов.
   */
  readonly blocked: number;
  /**
   * Количество удаленных клиентов.
   */
  readonly deleted: number;
};

/**
 * Объект, хранящий информацию о финансовом счете клиента представительства.
 */
export type BranchUserAccount = {
  /**
   * Живой баланс.
   */
  readonly a_balance: number;
  /**
   * Баланс
   */
  readonly balance: number;
  /**
   * Средства замороженные на оплату CPI.
   */
  readonly currency_balance_hold: number;
  /**
   * Тип
   * - juridical - Юридическое лицо.
   * - physical - Физическое лицо.
   */
  type: 'juridical' | 'physical';
};

/**
 * Объект, хранящий информацию о клиенте представительства и ссылки на связанные объекты.
 */
export type BranchUserClient = {
  /**
   * Информация о финансовом счете клиента.
   */
  account: BranchUserAccount;
  /**
   * Список дополнительных email адресов пользователя.
   */
  additional_emails: Array<string>;
  /**
   * Объект, хранящий дополнительную информацию о клиенте.
   */
  additional_info: AdditionalBranchClientInfo;
  /**
   * Идентификатор клиента.
   */
  readonly id: number;
  /**
   * Статус клиента.
   */
  readonly status: 'active' | 'deleted' | 'blocked';
  /**
   * Имя клиента внутри сервиса.
   */
  readonly username: string;
};

/**
 * Объект, хранящий списки подписанных на получение уведомлений адресов пользователя.
 */
export type MailingType = {
  /**
   * Список адресов, подписанных на рассылку. Если список пустой, значит данная рассылка доступна, но ни один из пользовательских адресов на нее не подписан.
   */
  email: Array<string>;
};

/**
 * Объект, предоставляющий информацию о клиенте менеджера.
 */
export type ManagerClient = {
  /**
   * Тип доступа менеджера к аккаунту клиента.
   * - full_access - Полный доступ.
   * - readonly - Только чтение.
   * - fin_readonly - Без доступа к счету.
   * - ads_readonly - Только доступ к счету.
   */
  readonly access_type:
    | 'full_access'
    | 'readonly'
    | 'fin_readonly'
    | 'ads_readonly';
  /**
   * Объект с информацией о пользователе агенства клиента
   */
  readonly agency: UserAgency;
  /**
   * Статус отношения между клиентом и менеджером.
   * - active - Активный.
   * - deleted - Удаленный.
   * - blocked - Заблокированный.
   */
  readonly status: 'active' | 'deleted' | 'blocked';
  /**
   * Объект с информацией о клиенте менеджера.
   */
  user: UserClient;
};

/**
 * Объект, предоставляющий информацию о клиенте менеджера.
 */
export type ManagerClientInfo = {
  /**
   * Тип доступа менеджера к аккаунту клиента.
   * - full_access - Полный доступ.
   * - readonly - Только чтение.
   * - fin_readonly - Без доступа к счету.
   * - ads_readonly - Только доступ к счету.
   */
  readonly access_type:
    | 'full_access'
    | 'readonly'
    | 'fin_readonly'
    | 'ads_readonly';
  /**
   * Идентификатор клиента.
   */
  readonly id: number;
};

/**
 * Объект, предоставляющий информацию о количестве клиентов менеджера с разными статусами.
 */
export type ManagerClientsCount = {
  /**
   * Количество активных клиентов.
   */
  readonly active: number;
  /**
   * Количество заблокированных клиентов.
   */
  readonly blocked: number;
  /**
   * Количество удаленных клиентов.
   */
  readonly deleted: number;
};

/**
 * Объект, описывающий пользователя в других объектах.
 */
export type NestedUser = {
  /**
   * Объект, хранящий дополнительную информацию о пользователе.
   */
  readonly additional_info: AdditionalUserInfo;
  /**
   * Информация об агентском аккаунте пользователя.
   */
  readonly agency: Agency;
  /**
   * Имя пользователя родительского агентства, если таковое есть.
   */
  readonly agency_username: string;
  /**
   * Список доступных рассылок.
   */
  readonly available_mailings: string[];
  /**
   * Имя пользователя родительского представительства, если таковое есть.
   */
  readonly branch_username: string;
  /**
   * Адрес электронной почты.
   */
  readonly email: string;
  /**
   * Имя.
   */
  readonly firstname: string;
  /**
   * Идентификатор пользователя.
   */
  readonly id: number;
  /**
   * Язык пользователя.
   * - ru - русский
   * - en - английский
   */
  readonly language: 'ru' | 'en';
  /**
   * Фамилия
   */
  readonly lastname: string;
  /**
   * Список рассылок, на которые подписан пользователь.
   */
  readonly mailings: string[];
  /**
   * Информация о партнерском аккаунте пользователя.
   */
  readonly partner: Partner;
  /**
   * Статус
   * - active - активный
   * - deleted - удаленный
   * - blocked - заблокированный
   */
  status: 'active' | 'deleted' | 'blocked';
  /**
   * Типы пользователя.
   */
  readonly types: string[];
  /**
   * Имя пользователя внутри сервиса.
   */
  readonly username: string;
};

/**
 * Объект, хранящий информацию о партнерском аккаунте.
 */
export type Partner = {
  /**
   * Статус подтвержден.
   */
  readonly is_approved: boolean;
};

/**
 * Объект, предоставляющий информацию о средствах клиента агентства
 */
export type ReservedAmount = {
  /**
   * Баланс
   */
  readonly balance: number;
  /**
   * Количество кредитных денег на аккаунте
   */
  readonly credit: number;
  /**
   * Бонусные деньги от активации купонов
   */
  readonly g_balance: number;
  /**
   * Средства, замороженные на оплату CPI
   */
  readonly hold: number;
  /**
   * Кредитный лимит
   */
  readonly hold_overdraft_limit: number;
  /**
   * ID пользователя
   */
  readonly user_id: number;
};

/**
 * Объект, предоставляющий информацию о средствах клиентов агентства
 */
export type ReservedAmounts = {
  /**
   * Список средств клиентов
   */
  readonly reserved_amounts: ReservedAmount;
};

/**
 * Объект, хранящий информацию о пользователе и ссылки на связанные объекты.
 */
export type User = {
  /**
   * Информация о финансовом аккаунте пользователя.
   */
  readonly account: any;
  /**
   * Число активных баннеров.
   */
  readonly active_banners: number;
  /**
   * Список дополнительных email адресов пользователя.
   */
  additional_emails: string[];
  /**
   * Объект, хранящий дополнительную информацию о пользователе.
   */
  additional_info: AdditionalUserInfo;
  /**
   * Информация об агентском аккаунте пользователя.
   */
  readonly agency: Agency;
  /**
   * Имя пользователя родительского агентства, если таковое есть.
   */
  readonly agency_username: string;
  /**
   * Имя пользователя родительского представительства, если таковое есть.
   */
  readonly branch_username: string;
  /**
   * Валюта пользователя.
   */
  readonly currency: string;
  /**
   * Адрес электронной почты.
   */
  readonly email: string;
  /**
   * Объект, хранящий настройки адресов для уведомлений.
   */
  email_settings: UserEmailSettings;
  /**
   * Имя.
   */
  readonly firstname: string;
  /**
   * Идентификатор пользователя.
   */
  readonly id: number;
  /**
   * Справочная валюта пользователя.
   */
  info_currency: string;
  /**
   * Язык пользователя.
   * - ru - русский
   * - en - английский
   */
  language: 'ru' | 'en';
  /**
   * Фамилия
   */
  readonly lastname: string;
  /**
   * Объект, хранящий список подписанных адресов пользователя для каждой доступной рассылки.
   */
  mailings: { [key: string]: MailingType };
  /**
   * Максимальное число активных баннеров.
   */
  readonly max_active_banners: number;
  /**
   * Список прав пользователя в виде словаря 'право' -> 'наличие у пользователя'. Например: {'can_create_ads': true}.
   */
  readonly permissions: { [key: string]: boolean };
  /**
   * Объект, содержащий информацию о регионах доступных/обязательных для установки при создании рекламных объявлений.
   */
  readonly regions: UserRegions;
  /**
   * Статус
   * - active - активный
   * - deleted - удаленный
   * - blocked - заблокированный
   */
  status: 'active' | 'deleted' | 'blocked';
  /**
   * Типы пользователя.
   */
  readonly types: string[];
  /**
   * Имя пользователя внутри сервиса.
   */
  readonly username: string;
};

/**
 * Объект, хранящий информацию о финансовом аккаунте клиента
 */
export type UserAccount = {
  /**
   * Живой баланс
   */
  readonly a_balance: number;
  /**
   * Баланс
   */
  readonly balance: number;
  /**
   * Средства, замороженные на оплату CPI
   */
  readonly currency_balance_hold: number;
  /**
   * Идентификатор аккаунта
   */
  readonly id: number;
  /**
   * Тип
   */
  readonly type: string;
};

/**
 * Объект, хранящий информацию о пользователе агентства клиента.
 */
export type UserAgency = {
  /**
   * Идентификатор пользователя агенства.
   */
  readonly id: number;
  /**
   * Имя пользователя агенства.
   */
  readonly username: string;
};

/**
 * Объект, хранящий информацию о клиенте и ссылки на связанные объекты.
 */
export type UserClient = {
  /**
   * Информация о финансовом счете клиента.
   */
  readonly account: UserAccount;
  /**
   * Список дополнительных email адресов пользователя.
   */
  additional_emails: Array<string>;
  /**
   * Объект, хранящий дополнительную информацию о клиенте.
   */
  additional_info: AdditionalClientInfo;
  /**
   * Идентификатор клиента.
   */
  id: number;
  /**
   * Статус клиента.
   * - active - Активный.
   * - deleted - Удаленный.
   * - blocked - Заблокированный.
   */
  readonly status: 'active' | 'deleted' | 'blocked';
  /**
   * Имя клиента внутри сервиса.
   */
  readonly username: string;
  /**
   * Имя клиента агентства.
   */
  readonly client_username: string;
};

/**
 * Объект, хранящий настройки адресов для уведомлений пользователя.
 */
export type UserEmailSettings = {
  /**
   * Тип
   * - USER - Основной адрес пользователя
   * - PARENT - Адрес агентства/представительства
   * - ADDITIONAL - Дополнительный адрес пользователя
   */
  type: 'USER' | 'PARENT' | 'ADDITIONAL';
  /**
   * Email
   */
  email: string;
};

/**
 * Объект, хранящий информацию о менеджере агентства и ссылки на связанные объекты.
 */
export type UserManager = {
  /**
   * Объект, хранящий дополнительную информацию о менеджере.
   */
  additional_info: AdditionalManagerInfo;
  /**
   * Список клиентов менеджера.
   */
  readonly clients: ManagerClientInfo[];
  /**
   * Идентификатор менеджера.
   */
  id: number;
  /**
   * Имя менеджера внутри сервиса.
   */
  username: string;
};

/**
 * Объект, предоставляющий информацию о клиенте менеджера.
 */
export type UserManagerClient = {
  /**
   * Информация о финансовом аккаунте клиента.
   */
  readonly account: UserAccount;
  /**
   * Объект, хранящий дополнительную информацию о клиенте.
   */
  readonly additional_info: AdditionalClientInfo;
  /**
   * Идентификатор клиента.
   */
  id: number;
  /**
   * Статус клиента.
   * - active - Активный.
   * - deleted - Удаленный.
   * - blocked - Заблокированный.
   */
  readonly status: 'active' | 'blocked' | 'deleted';
  /**
   * Имя клиента внутри сервиса.
   */
  username: string;
};

/**
 * Объект, содержащий информацию о регионах доступных/обязательных для установки при создании рекламных объявлений.
 */
export type UserRegions = {
  /**
   * Список идентификаторов регионов, для которых пользователю разрешено создавать рекламные объявления.
   */
  readonly allowed: number[];
  /**
   * Список идентификаторов регионов, который пользователь должен передавать при создании рекламных объявлений.
   */
  readonly required: number[];
  /**
   * Список идентификаторов регионов, один из которых пользователь должен передавать при создании рекламных объявлений.
   */
  readonly required_one_of: number[];
};
