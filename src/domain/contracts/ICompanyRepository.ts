import Company from "@domain/contexts/users/entities/Company";

export default interface ICompanyRepository {
  create(company: Company): Promise<Company>
  index():Promise<Company[]>
  show(id: string): Promise<Company | undefined>
  update(id: string, company: Company): Promise<Company | undefined>
  remove(id: string): Promise<boolean>
}
