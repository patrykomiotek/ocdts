import { expect, it } from "vitest";

// TODO: fix typings for defaultUser

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
  id: 12,
  firstName: 'John',
  lastName: 'Doe',
  isAdmin: true,
};
// const defaultUser: any = {};

// const defaultUser = {} as User;

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});