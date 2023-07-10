// TODO: fix types for roles

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  SUPER_ADMIN = 'super-admin',
}

export type Role = 'admin' | 'user' | 'super-admin';

// const myUserRole: UserRole = 'admin';
const myUserRole: UserRole = UserRole.ADMIN;

console.log(JSON.stringify({role: myUserRole}));

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: Role; // literals, unions
  // role: 'admin' | 'user' | 'super-admin'; // literals, unions
}

export const defaultUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  role: 'user',
};
