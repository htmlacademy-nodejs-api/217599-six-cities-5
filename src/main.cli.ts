#!/usr/bin/env node
import {
  CLIApplication,
  HelpCommand,
  VersionCommand,
  ImportCommand,
  GenerateCommand,
} from './cli/index.js';

const bootstrap = () => {
  const cliApplication = new CLIApplication();

  cliApplication.registerCommands([
    new VersionCommand(),
    new HelpCommand(),
    new ImportCommand(),
    new GenerateCommand(),
  ]);
  cliApplication.processCommand(process.argv);
};

bootstrap();
