export const checkValidData = (email, password) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!isEmailValid) return "Email isn't valid";
  if (!isPasswordValid) return "Password isn't valid";
  return null;
};
