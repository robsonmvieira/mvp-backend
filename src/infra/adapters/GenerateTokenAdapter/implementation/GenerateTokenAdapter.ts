import IGenerateTokenAdapter from "../contract/IGenerateTokenAdapter";

export default class GenerateTokenAdapter implements IGenerateTokenAdapter{
  sign({ }: {}, key: string, exspireIn: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  decode(payload: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}
