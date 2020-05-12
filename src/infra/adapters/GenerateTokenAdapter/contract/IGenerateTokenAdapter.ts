export default interface IGenerateTokenAdapter {
  sign({}, key: string ,exspireIn: string): Promise<string>
  decode(payload: string): Promise<boolean>
}
