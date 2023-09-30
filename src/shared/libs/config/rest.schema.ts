import convict from 'convict';
import validators from 'convict-format-with-validator';

const DEFAULT_DB_HOST = '127.0.0.1';
const DEFAULT_PORT = 4000;

export type RestSchema = {
  PORT: number;
  SALT: string;
  DB_HOST: string;
};

convict.addFormats(validators);

export const configRestSchema = convict<RestSchema>({
  PORT: {
    doc: 'Port for incoming connections',
    format: 'port',
    env: 'PORT',
    default: DEFAULT_PORT,
  },
  SALT: {
    doc: 'Salt for password hash',
    format: 'string',
    env: 'SALT',
    default: null,
  },
  DB_HOST: {
    doc: 'IP address of the database server (MongoDB)',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: DEFAULT_DB_HOST,
  },
});
