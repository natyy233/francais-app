/* 法语入门每日一课 - Service Worker
 * 功能：
 *  1. 离线缓存应用外壳（app shell）
 *  2. 每日定时推送"今日课程"提醒（需要用户授权通知）
 */
const CACHE_NAME = 'francais-app-v3';
const APP_SHELL = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

/* 安装：预缓存应用外壳 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

/* 激活：清理旧缓存 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* 网络优先，失败回退到缓存 */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

/* 推送通知 */
self.addEventListener('push', (event) => {
  let data = { title: '法语入门每日一课', body: '今日新课程已准备好，快来学习打卡吧！' };
  if (event.data) {
    try { data = event.data.json(); } catch (e) {}
  }
  event.waitUntil(
    self.registration.showNotification(data.title || '法语入门每日一课', {
      body: data.body,
      icon: './icon-192.png',
      badge: './icon-192.png',
      data: { url: './index.html' }
    })
  );
});

/* 点击通知：打开应用 */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './index.html';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if ('focus' in client) { client.focus(); return; }
      }
      if (self.clients.openWindow) self.clients.openWindow(url);
    })
  );
});