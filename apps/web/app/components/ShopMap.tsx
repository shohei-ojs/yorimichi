'use client';

import { Map, Marker } from 'react-map-gl';
import type { Shop } from '@yorimichi/types';

// このコンポーネントが受け取るデータ（props）の型を定義
interface ShopMapProps {
  shops: Shop[];
}

export default function ShopMap({ shops }: ShopMapProps) {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: 132.766, // 松山市の中心経度
        latitude: 33.839,   // 松山市の中心緯度
        zoom: 14,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v12" // 標準的な地図スタイル
    >
      {/* データベースから取得したお店の数だけ、Markerコンポーネントを繰り返し表示 */}
      {shops.map(shop => (
        <Marker
          key={shop.id}
          longitude={shop.longitude}
          latitude={shop.latitude}
          anchor="bottom"
        >
          {/* 一時的にホバーアニメーションと絵文字 */}
          <div className="text-2xl cursor-pointer transform hover:scale-125 transition-transform duration-150">🍺</div>
        </Marker>
      ))}
    </Map>
  );
}