export default interface IRemoveProductService {
  exec(id: string): Promise<boolean>
}
