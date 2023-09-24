import got from 'got';
import chalk from 'chalk';
import { appendFile } from 'node:fs/promises';

import { Command } from './command.interface.js';
import { CommandName } from './command.types.js';
import { MockServerData } from '../../shared/types/index.js';
import { TSVAdvertGenerator } from '../../shared/libs/advert-generator/tsv-advert-generator.js';
import { Symbols } from '../../shared/constants.js';

export class GenerateCommand implements Command {
  private initialData: MockServerData;

  private async loadMockData(url: string): Promise<void> {
    try {
      this.initialData = await got.get(url).json();
    } catch {
      throw new Error(`Can't load data from ${url}`);
    }
  }

  private async write(filePath: string, advertCount: number): Promise<void> {
    const tsvAdvertGenerator = new TSVAdvertGenerator(this.initialData);

    for (let i = 0; i < advertCount; i++) {
      await appendFile(filePath, `${tsvAdvertGenerator.generate()}${Symbols.NEW_LINE}`, 'utf-8');
    }
  }

  public getName(): string {
    return CommandName.GENERATE;
  }

  async execute(...params: string[]): Promise<void> {
    const [count, filepath, url] = params;
    const advertCount = Number.parseInt(count, 10);

    try {
      await this.loadMockData(url);
      await this.write(filepath, advertCount);

      console.info(chalk.green(`File ${filepath} was created!`));
    } catch {
      console.error(chalk.red("Can't generate data"));
    }
  }
}
