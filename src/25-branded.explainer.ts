import { Brand } from "./helpers/Brand";

// type Password = string;
// type Email = string;

type Password = Brand<string, "Password">;
type Email = Brand<string, "Email">;

type UserObject = Brand<
  {
    id: string;
    name: string;
  },
  "User"
>;

const user: UserObject = {
  id: "5",
  name: "ahjdassdh",
} as UserObject;

const password = "1231423" as Password;

const verifyPassword = (password: Password) => {};

const email = "sth@example.com" as Email;

let passwordSlot: Password;

passwordSlot = "awdjhawdjhbawd" as Password;
