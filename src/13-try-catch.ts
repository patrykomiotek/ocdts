import { expect, it } from "vitest";

// TODO: fix typings for catch statement

class HttpError extends Error {
  public status = 200;

  constructor(status: number) {
    super();
    this.status = status;
  }
}

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
      // throw undefined;
    } else {
      throw new HttpError()
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
    if (e instanceof HttpError) {
      return e.status;
    }

    // return (e as Error).message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
