import Company from "@domain/contexts/users/entities/Company";
import { injectable, inject } from "tsyringe";
import CompanyRepository from "@infra/repositories/CompanyRepository";
import ICreateCompanyService from "@domain/contexts/users/contracts/company/ICreateCompanyService";

@injectable()
export default class CreateCompanyService implements ICreateCompanyService {
  constructor(
    @inject('CompanyRepository') private companyRepository: CompanyRepository

  ) {
  }
  async create(company: Company): Promise<Company> {
    return this.companyRepository.create(company)
  }

}
