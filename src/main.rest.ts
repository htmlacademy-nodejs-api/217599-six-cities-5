import { PinoLogger } from './shared/libs/logger/index.js';
import { RestApplication } from './rest/index.js';

const bootstrap = () => {
  const logger = new PinoLogger();
  const restApp = new RestApplication(logger);

  restApp.init();
};

bootstrap();
