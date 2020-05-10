import Company from "@domain/contexts/users/entities/Company";

export default interface ICreateCompanyService {
  create(company: Company):Promise<Company>
}
