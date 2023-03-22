import ILogger from "./interfaces/Logger";

export default class ConsoleLogger2 implements ILogger {
  log(param: string): void {
    console.log('Logger 2:', param);
  }
}