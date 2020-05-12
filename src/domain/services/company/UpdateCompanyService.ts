import Company from "@domain/contexts/users/entities/Company";
import { injectable, inject } from "tsyringe";
import CompanyRepository from "@infra/repositories/CompanyRepository";
import IUpdateCompanyService from "@domain/contexts/users/contracts/company/IUpdateCompanyservice";

@injectable()
export default class UpdateCompanyService implements IUpdateCompanyService {
  constructor(
    @inject('CompanyRepository') private companyRepository: CompanyRepository
  ) {}

  async exec (id: string, company: Company): Promise<boolean| undefined> {
    const userUpdated = await this.companyRepository.update(id, company)

    if(userUpdated){
      return true
    }
    return undefined
  }

}
