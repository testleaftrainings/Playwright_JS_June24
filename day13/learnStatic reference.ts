import { faker } from "@faker-js/faker";

export class GenerateData{

  static getFirstname():string{
    faker.person.fullName();
    return faker.person.firstName('female')

  }
  
  static getCvvNumber():string{
    return faker.finance.creditCardCVV();
  }

  static getPhno():number{
    return faker.number.int({max:10})
  }



}