import Company from "@domain/contexts/users/entities/Company";

export default interface IUpdateCompanyService {
  exec(id: string,company: Company):Promise<Company>
}
