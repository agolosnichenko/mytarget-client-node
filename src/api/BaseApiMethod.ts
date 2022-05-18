import type { MyTargetClient } from '../client';

/**
 * Базовый класс для методов API
 */
export class BaseApiMethod {
  /**
   * Клиент API
   */
  _api!: MyTargetClient;
  /**
   * Эндпоинт для отправки запросов к API
   */
  _endpoint!: string;
}
