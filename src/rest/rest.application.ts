import { Logger } from '../shared/libs/logger/index.js';
import { Config } from '../shared/libs/config/config.interface.js';

export class RestApplication {
  constructor(
    private readonly logger: Logger,
    private readonly config: Config,
  ) {}

  init(): void {
    this.logger.info('Application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
