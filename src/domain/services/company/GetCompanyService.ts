import Company from "@domain/contexts/users/entities/Company";
import { injectable, inject } from "tsyringe";
import CompanyRepository from "@infra/repositories/CompanyRepository";
import IGetCompanyService from "@domain/contexts/users/contracts/company/IGetCompanyService";

@injectable()
export default class GetCompanyService implements IGetCompanyService {
  constructor(
    @inject('CompanyRepository') private companyRepository: CompanyRepository
  ) {}

  async exec (id: string): Promise<Company| undefined> {
    const companyExists = await this.companyRepository.show(id)

    if(companyExists){
      return companyExists
    }
    return undefined
  }

}
