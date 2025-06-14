// packages/types/index.ts
export interface Shop {
  id: string;
  name: string;
  address: string | null;
  latitude: number;
  longitude: number;
  description: string | null;
  created_at: string; // time.Timeはstringとして受け取るのが一般的
  updated_at: string;
}