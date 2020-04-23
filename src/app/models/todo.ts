export interface Todo {
  id?: number;
  name: string;
  description: string;
  status: 'new' | 'inProgress' | 'done';
  userID: number;
  categoryID: number;
  created_at?: string;
  updated_at?: string;
}