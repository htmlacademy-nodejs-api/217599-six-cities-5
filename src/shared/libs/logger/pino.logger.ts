import { Logger as PinoInstance, pino, transport } from 'pino';
import { injectable } from 'inversify';
import { Logger } from './logger.interface.js';
import { getAbsolutePath } from '../../helpers/index.js';

@injectable()
export class PinoLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    const destination = getAbsolutePath('logs/rest.log');
    const multiTransport = transport({
      targets: [
        {
          target: 'pino/file',
          options: { destination },
          level: 'debug',
        },
        {
          target: 'pino/file',
          options: {},
          level: 'info',
        },
      ],
    });

    this.logger = pino({}, multiTransport);
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
