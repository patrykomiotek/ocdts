import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */
// TODO: make it more reusable}

interface User extends Base {
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  title: string;
  body: string;
}

interface Comment extends Base {
  comment: string;
}

interface Base {
  id: string;
}

type BaseSecond = {
  id: boolean;
  content: string;
}

type CommentSecond = Base & { comment: string; }

const getComment = (id: Base['id']): Comment => {
  return {
    id: 5,
    comment: 'lorem'
  }
}

type tests = [
  Expect<Equal<User, { id: number; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: number; title: string; body: string }>>,
  Expect<Equal<Comment, { id: number; comment: string }>>,
];
