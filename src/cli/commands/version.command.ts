import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import chalk from 'chalk';

import { Command } from './command.interface.js';
import { CommandName } from './command.types.js';

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

  getName(): string {
    return CommandName.VERSION;
  }

  execute() {
    try {
      const version = this.getVersion();

      console.info(chalk.green(version));
    } catch (error: unknown) {
      console.error(`Failed to read version from ${this.filePath}`);

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  private getVersion() {
    const content: string = readFileSync(resolve(this.filePath), 'utf-8');
    const parsedContent = JSON.parse(content);

    if (!isPackageJSONConfig(parsedContent)) {
      throw new Error('Failed to parse json content.');
    }

    return parsedContent.version;
  }
}
