import { Logger } from '../shared/libs/logger/index.js';

export class RestApplication {
  constructor(private readonly logger: Logger) {}

  init(): void {
    this.logger.info('Application initialization');
  }
}
