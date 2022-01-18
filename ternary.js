const password = "supersecretpassword";
const input = "supersecretpassword";
const isAccountLocked = false;

const passwordCorrect = password === input;

const accountLocked = !passwordCorrect || isAccountLocked;

// just locking someone out of their account isn't very nice ...
// We want to display some feedback:

// If the password is correct AND the account is not locked -> 'Welcome'
// If the account was locked or the password is wrong -> 'Your login attempt failed, contact system administrator'

const accountAccess =
  passwordCorrect && !accountLocked
    ? "Welcome"
    : "Your login attempt is failed";

console.log(accountAccess);
