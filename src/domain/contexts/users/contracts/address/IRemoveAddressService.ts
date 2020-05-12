export default interface IRemoveAddressService {
  exec(id: string): Promise<boolean>
}
