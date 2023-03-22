import ConsoleLogger from "./ConsoleLogger";
import IDatabase from "./interfaces/DataBase";
import ILogger from "./interfaces/Logger";

export default class ExampleDatabase implements IDatabase {
  constructor(public logger: ILogger = new ConsoleLogger()) {}
  save(key: string, value: string): void {
    this.logger.log(`Save value ${value} in key ${key}`)
  }
};