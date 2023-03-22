import ILogger from "./interfaces/Logger";

export default class ConsoleLogger implements ILogger {
  log(param: string): void {
    console.log('Logger 1:',param);
  }
}