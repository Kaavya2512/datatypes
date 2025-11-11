function displayUserDetails(fname: string, lastname?: string) {
  //? on a parameter - an optional param
  if (lastname) console.log("User name is ", fname + lastname);
  else console.log("User name",fname);
}
displayUserDetails("sudha");
displayUserDetails("sudha","valli")
