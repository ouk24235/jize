const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  './src/views/zhuanqian/offline.html',
  './src/views/lxwm/lxwm.html',
  // 预加载背景库中的所有图片文件
  './src/views/zhuanqian/背景库/image1.jpg',
  './src/views/zhuanqian/背景库/image2.jpg',
  './src/views/zhuanqian/背景库/image3.jpg',
  // 添加更多图片路径...
];

// 在安装 Service Worker 时进行缓存
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      }).catch((error) => {
        console.error('Failed to open cache:', error);
      })
  );
});

// 更新缓存
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
