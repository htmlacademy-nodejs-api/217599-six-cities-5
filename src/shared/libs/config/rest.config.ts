import { config, DotenvParseOutput } from 'dotenv';
import { Config } from './config.interface.js';
import { Logger } from '../logger/index.js';

export class RestConfig implements Config {
  private readonly config: NodeJS.ProcessEnv;

  constructor(private readonly logger: Logger) {
    const dotenvConfig = config();

    if (dotenvConfig.error) {
      throw new Error("Can't read .env file. Perhaps the file does not exists.");
    }

    this.config = <DotenvParseOutput>dotenvConfig.parsed;
    this.logger.info('.env file found and successfully parsed!');
  }

  get(key: string): string | undefined {
    return this.config[key];
  }
}