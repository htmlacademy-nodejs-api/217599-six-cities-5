export interface Logger {
  info(msg: string, ...params: unknown[]): void;
  warn(msg: string, ...params: unknown[]): void;
  error(msg: string, err: Error, ...params: unknown[]): void;
  debug(msg: string, ...params: unknown[]): void;
}
