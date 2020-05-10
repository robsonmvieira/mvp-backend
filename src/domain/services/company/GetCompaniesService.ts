import IGetCompaniesService from "@domain/contexts/users/contracts/company/services/IGetCompaniesService";
import Company from "@domain/contexts/users/entities/Company";
import { injectable, inject } from "tsyringe";
import CompanyRepository from "@infra/repositories/CompanyRepository";

@injectable()
export default class GetCompaniesService implements IGetCompaniesService {
  constructor(
    @inject('CompanyRepository') private companyRepository: CompanyRepository

  ) {
  }
  async getCompanies(): Promise<Company[]> {
    const companies = this.companyRepository.index()
    return companies
  }

}
