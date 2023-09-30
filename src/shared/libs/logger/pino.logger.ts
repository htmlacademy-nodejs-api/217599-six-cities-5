import { Logger as PinoInstance, pino } from 'pino';
import { Logger } from './logger.interface.js';

export class PinoLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    this.logger = pino();
  }

  debug(msg: string, ...params: unknown[]): void {
    this.logger.debug(msg, ...params);
  }

  error(msg: string, err: Error, ...params: unknown[]): void {
    this.logger.error(err, msg, ...params);
  }

  info(msg: string, ...params: unknown[]): void {
    this.logger.info(msg, ...params);
  }

  warn(msg: string, ...params: unknown[]): void {
    this.logger.warn(msg, ...params);
  }
}
