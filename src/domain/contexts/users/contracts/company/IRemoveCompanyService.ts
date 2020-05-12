export default interface IRemoveCompanyService {
  exec(id: string):Promise<boolean>
}
