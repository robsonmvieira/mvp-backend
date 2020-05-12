export default interface IRemoveUserServices {
  exec(id: string): Promise<boolean>
}
