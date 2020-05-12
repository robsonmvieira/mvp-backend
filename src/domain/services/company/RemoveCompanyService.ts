import Company from "@domain/contexts/users/entities/Company";
import { injectable, inject } from "tsyringe";
import CompanyRepository from "@infra/repositories/CompanyRepository";
import IRemoveCompanyService from "@domain/contexts/users/contracts/company/IRemoveCompanyService";

@injectable()
export default class RemoveCompanyService implements IRemoveCompanyService {
  constructor(
    @inject('CompanyRepository') private companyRepository: CompanyRepository
  ) {}

  async exec (id: string): Promise<boolean> {
    const companyRemoved = await this.companyRepository.remove(id)
    if(companyRemoved){
      return true
    }
    return false
  }

}
