export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    if (resolve) {
      resolve({
        firstName,
        lastName,
      });
    }
  });
}
