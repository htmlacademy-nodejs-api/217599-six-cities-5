#!/usr/bin/env node
import { CLIApplication, HelpCommand, VersionCommand } from './cli/index.js';

const bootstrap = () => {
  const cliApplication = new CLIApplication();

  cliApplication.registerCommands([new VersionCommand(), new HelpCommand()]);
  cliApplication.processCommand(process.argv);
};

bootstrap();
