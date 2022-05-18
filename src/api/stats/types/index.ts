export * from './leadForm';
export * from './leadInfo';
export * from './general-stats-v2';
export * from './general-stats-v3';
export * from './goals-stats';
export * from './inapp-stats';
export * from './offline-conversions';
export * from './faststat';

/**
 * Объект, предоставляющий информацию о взаимосвязи форм LeadAds, баннеров и кампаний.
 */
export type LeadForm = {
  /**
   * Массив идентификаторов баннеров.
   */
  readonly banner_ids: number[];
  /**
   * Массив идентификаторов рекламных кампаний.
   */
  readonly campaign_ids: number[];
  /**
   * Идентификатор формы LeadAds.
   */
  readonly form_id: number;
};

/**
 * Объект, предоставляющий информацию о лидах пользователя.
 */
export type LeadInfo = {
  /**
   * Идентификатор баннера.
   */
  readonly banner_id: number;
  /**
   * Идентификатор кампании.
   */
  readonly campaign_id: number;
  /**
   * Дата и время заполнения лида.
   */
  readonly created_time: Date;
  /**
   * Идентификатор формы LeadAds.
   */
  readonly form_id: number;
  /**
   * Название формы LeadAds.
   */
  readonly form_name: string;
  /**
   * Идентификатор лида.
   */
  readonly id: number;
  /**
   * Дата рождения пользователя.
   */
  readonly user_birthday: Date;
  /**
   * Почтовый адрес пользователя.
   */
  readonly user_email: string;
  /**
   * Имя пользователя.
   */
  readonly user_fullname: string;
  /**
   * Местоположение пользователя.
   */
  readonly user_geo: string;
  /**
   * Телефон пользователя.
   */
  readonly user_phone: string;
  /**
   * Ответы пользователя на вопросы формы LeadAds в рекламном объявлении. Представляет из себя массив вида: [["вопрос", "ответ"], [...], ...].
   */
  readonly user_questions: Array<[string, string]>;
  /**
   * Пол пользователя.
   * - male - мужской
   * - unknown - неизвестно
   * - female - женский
   */
  readonly user_sex: 'male' | 'female' | 'unknown';
};
