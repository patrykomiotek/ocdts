import { Equal, Expect } from "./helpers/type-utils";

// TODO: fix types for onFocusChange

/**
 * How do we type onFocusChange?
 */
type FocusChangeType = (isFocus: boolean) => void;

const addListener = (onFocusChange: FocusChangeType) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});