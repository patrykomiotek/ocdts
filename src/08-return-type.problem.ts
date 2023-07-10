import { expect, it } from "vitest";

// TODO: fix typings for function return value
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => {
  return {
    id: 12,
    firstName: 'a',
    lastName: 'c',
    role: 'admin',
    posts: [{ id: 2, title: 'aaa' }],
  };
  // return {
  //   id: 12,
  // } as User;
};

type OperationsResultFunction = typeof makeUser;
type OperationsResult = ReturnType<typeof makeUser>;

it("Should return a valid user", () => {
  const user = makeUser();

  expect(user.id).toBeTypeOf("number");
  expect(user.firstName).toBeTypeOf("string");
  expect(user.lastName).toBeTypeOf("string");
  expect(user.role).to.be.oneOf(["super-admin", "admin", "user"]);

  expect(user.posts[0].id).toBeTypeOf("number");
  expect(user.posts[0].title).toBeTypeOf("string");
});
