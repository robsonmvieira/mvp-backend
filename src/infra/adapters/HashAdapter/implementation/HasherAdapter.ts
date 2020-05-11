import { compare, hash } from 'bcryptjs'
import IHasherAdapter from "../contract/IHasherAdapter";

export default class HasherAdapter implements IHasherAdapter {
  compare(planText: string, hashedPass: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  encrypt(password: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

}
