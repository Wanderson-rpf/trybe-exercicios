import ILogger from "./Logger";

export default interface IDatabase {
  logger: ILogger;
  save(key: string, value: string): void;
};