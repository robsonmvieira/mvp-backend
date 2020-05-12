import { compare, hash } from 'bcryptjs'
import IHasherAdapter from "../contract/IHasherAdapter";

export default class HasherAdapter implements IHasherAdapter {
  async compare(planText: string, hashedPass: string): Promise<boolean> {
    const passMatch = await compare(planText, hashedPass)
    return passMatch
  }
  async encrypt(password: string): Promise<string> {
    const hashed = await hash(password, 8)
    return hashed
  }

}
