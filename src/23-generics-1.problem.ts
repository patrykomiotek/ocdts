import { Equal, Expect } from "../helpers/type-utils";

const returnWhatIPassIn = <T extends string | number>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1);
const john = returnWhatIPassIn("john");
const yes = returnWhatIPassIn(true);

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof john, "john">>];
