export default interface IHasherAdapter {
  compare(planText: string, hashedPass: string): Promise<boolean>
  encrypt(password: string): Promise<string>
}
