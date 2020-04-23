export interface Category {
  id?: number;
  name: string;
  status: 'important' | 'freetime' | 'family';
  created_at?: string;
  updated_at?: string; 
}