//import validateEmail, { isPasswordStrong, PLATFORM } from "./Validation"; //named import

import  Validate  from "./Validation";

//PLATFORM
let validateobj = new Validate();
if (validateobj.validateEmail("sudha@matrimony.com")) {
  console.log("you can enroll into elite matrimony now and search for matches");
} else {
  console.log("enter a proper mail id to find the right match");
}

if (validateobj.isPasswordStrong("98982*^")) {
  console.log(
    "you have signed up successfully. Now you can register to find matches on Bharath Matrimony"
  );
} else
  console.log(
    "Enter a strong password to secure your account and finish the signup process"
  );
