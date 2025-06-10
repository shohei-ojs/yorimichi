// apps/web/app/page.tsx
'use client'; // ブラウザで動作するコンポーネントであることを示す

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState('Checking...');

  useEffect(() => {
    // GoのAPIサーバーのエンドポイントを呼び出す
    fetch('http://localhost:8080/api/health')
      .then((res) => res.json())
      .then((data) => {
        setApiStatus(data.status);
      })
      .catch((err) => {
        console.error(err);
        setApiStatus('Error');
      })
  }, []); // コンポーネントがマウントされたときにAPIを呼び出す

  return (
    <main className="flex min-h-screen flex-col items-center justify-cennter p-24">
      <h1 className="text-4xl font-bold mb-4">Yorimichi</h1>
      <p>
        Backend API Status: <span className="font-mono bg-gray-200 p-1 rounded">{apiStatus}</span>
      </p>
    </main>
  )
}