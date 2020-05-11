import Company from "@domain/contexts/users/entities/Company";

export default interface IGetCompaniesService {
  getCompanies():Promise<Company[]>
}
