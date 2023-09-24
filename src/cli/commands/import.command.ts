import chalk from 'chalk';

import { Command } from './command.interface.js';
import { CommandName } from './command.types.js';
import { TSVFileReader } from '../../shared/libs/file-reader/index.js';
import { createAdvert } from '../../shared/helpers/index.js';

export class ImportCommand implements Command {
  public getName(): string {
    return CommandName.IMPORT;
  }

  private onImportedLine(line: string): void {
    const offer = createAdvert(line);

    console.log(offer);
  }

  private onCompleteImport(count: number): void {
    console.info(chalk.blue(`${count} rows imported.`));
  }

  public execute(...params: string[]): void {
    const [filename] = params;
    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try {
      fileReader.read();
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Can't import data from file: ${filename}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
