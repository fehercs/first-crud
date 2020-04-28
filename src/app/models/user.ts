export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  groupID?: number;
  password?: string;
  role?: 'user' | 'admin';
  created_at?: string;
  updated_at?: string;
}