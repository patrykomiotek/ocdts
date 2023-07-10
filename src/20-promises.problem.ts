import { Equal, Expect } from "../helpers/type-utils";

// TODO: fix typings for ReturnValue
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  } as User);
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
