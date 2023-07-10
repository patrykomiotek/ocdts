"use strict";
// TODO: fix types for roles
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUser = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["SUPER_ADMIN"] = "super-admin";
})(UserRole || (UserRole = {}));
// const myUserRole: UserRole = 'admin';
var myUserRole = UserRole.ADMIN;
console.log(JSON.stringify({ role: myUserRole }));
exports.defaultUser = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    role: 'user',
};
