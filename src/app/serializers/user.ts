import { User } from "../models/user";

export interface UserSerializer {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
}

export const show = (user: User): UserSerializer => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: `${user.firstName} ${user.lastName}`
  }
};

export const index = (users: Array<User>): Array<UserSerializer> => {
  return users.map((user: User) => show(user));
}