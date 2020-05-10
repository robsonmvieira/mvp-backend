import Company from '@domain/contexts/users/entities/Company';
import { Repository, getRepository } from "typeorm";

import ICompanyRepository from "@domain/contracts/ICompanyRepository";

export default class CompanyRepository implements ICompanyRepository {
  private readonly orm: Repository<Company>
  constructor() {
    this.orm = getRepository(Company)
  }
  async create(company: Company): Promise<Company> {
    const newCompany = await this.orm.save(company)
    return newCompany
  }

  async index(): Promise<Company[]> {
    const companies = await this.orm.find()
    return companies
  }
  async show(id: string): Promise<Company | undefined> {
    const companyExists = await this.orm.findOne(id)
    return companyExists
  }
  async update(id: string, company: Company): Promise<Company | undefined> {
    const companyExists = await this.orm.findOne(id)
    if(companyExists) {
      await this.orm.update(id, company)
      return companyExists
    }
    return undefined
  }
  async remove(id: string): Promise<boolean> {
    const companyExists = await this.orm.findOne(id)
    if(companyExists) {
      await this.orm.remove(companyExists)
      return true
    }
    return false
  }
}