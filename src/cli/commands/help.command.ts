import { Command } from './command.interface.js';
import { CommandName } from './command.types.js';

export class HelpCommand implements Command {
  public getName(): string {
    return CommandName.HELP;
  }

  public execute(): void {
    console.info(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            cli.js --<command> [--arguments]
        Команды:
            --version:                   # выводит номер версии
            --help:                      # печатает этот текст
            --import <path>:             # импортирует данные из TSV
            --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
    `);
  }
}
