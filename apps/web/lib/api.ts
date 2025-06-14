import type { Shop } from '@yorimichi/types'; // 先ほど作成した共有の型をインポート

// GoのAPIサーバーのURL。後で本番環境用に変更しやすくするため、定数にしておく。
const API_BASE_URL = 'http://localhost:8080';

/**
 * お店の一覧を取得する関数
 */
export const fetchShops = async (): Promise<Shop[]> => {
  // fetch APIを使って、バックエンドのエンドポイントにGETリクエストを送信
  const res = await fetch(`${API_BASE_URL}/api/v1/shops`);

  // レスポンスが正常でない場合（サーバーエラーなど）は、エラーを投げる
  if (!res.ok) {
    throw new Error('お店の情報の取得に失敗しました。');
  }

  // レスポンスのJSONボディをパースして返す
  const data: Shop[] = await res.json();
  return data;
};