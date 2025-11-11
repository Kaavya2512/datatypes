export default class Validate {
  PLATFORM = "JODI";
  validateEmail(input: string): boolean {
    //default export
    const emailRegExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(input);
  }

  isPasswordStrong(input: string): boolean {
    //named export
    const strongPasswordRegex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    return strongPasswordRegex.test(input);
  }
  isValidPhonenumber(input: string): boolean {
    return true;
  }
}
export class Employee{

}
// console.log(validateEmail("sudhavalli.parthasarathy@matrimony.com"))
// console.log(validateEmail("sudha@"))

// console.log(isPasswordStrong("123"))
// console.log(isPasswordStrong("XTR765@*q"))
