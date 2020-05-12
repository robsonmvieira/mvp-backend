import Company from "@domain/contexts/users/entities/Company";

export default interface IGetCompanyService {
  exec(id: string):Promise<Company | undefined>
}
