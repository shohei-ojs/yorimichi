'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchShops } from '@/lib/api'; // STEP 2で作成した関数をインポート

export default function Home() {
  // useQueryフックでデータを取得
  const { data: shops, isLoading, isError, error } = useQuery({
    queryKey: ['shops'], // このデータに付けるキャッシュの「キー（名前）」
    queryFn: fetchShops,  // 実際にデータを取得しに行く関数
  });

  // 1. ローディング中の表示
  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <p>お店の情報を読み込んでいます...</p>
      </main>
    );
  }

  // 2. エラー発生時の表示
  if (isError) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <p>エラーが発生しました: {error.message}</p>
      </main>
    );
  }

  // 3. データ取得成功時の表示
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Yorimichi - お店一覧</h1>
      <div className="w-full max-w-2xl">
        <ul className="space-y-4">
          {shops?.map((shop) => (
            <li key={shop.id} className="p-4 border rounded-lg shadow">
              <h2 className="text-xl font-bold">{shop.name}</h2>
              <p className="text-gray-600">{shop.address}</p>
              <p className="mt-2 text-gray-800">{shop.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}