import { Command } from './command.interface.js';
import { CommandName } from './command.types.js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

type PackageJSONConfig = {
  version: string;
};

export const isPackageJSONConfig = (value: unknown): value is PackageJSONConfig =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  Object.hasOwn(value, 'version');

export class VersionCommand implements Command {
  constructor(private readonly filePath = './package.json') {}

  private getVersion() {
    const content: string = readFileSync(resolve(this.filePath), 'utf-8');
    const parsedContent = JSON.parse(content);

    if (!isPackageJSONConfig(parsedContent)) {
      throw new Error('Failed to parse json content.');
    }

    return parsedContent.version;
  }

  public getName(): string {
    return CommandName.VERSION;
  }

  public execute() {
    try {
      const version = this.getVersion();

      console.info(version);
    } catch (error: unknown) {
      console.error(`Failed to read version from ${this.filePath}`);

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
