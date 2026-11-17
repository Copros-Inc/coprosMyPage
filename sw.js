// sw.js
self.addEventListener('install', (event) => {
  // インストール時に待機せず即座にアクティブ化
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // 制御を開始
  event.waitUntil(self.clients.claim());
});

// iOSでPWAとして認識されるためにfetchイベントの登録が必要
self.addEventListener('fetch', (event) => {
  // 省エネのため、ここでは何もしない（ネットワークにそのまま通す）
  return;
});
