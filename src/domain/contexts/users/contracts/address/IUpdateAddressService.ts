export default interface IUpdateAddressService {
  exec(id: string): Promise<boolean | undefined>
}
