const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  'https://zhuanqian.assiw.xyz/zhuanqian/index.html',
  'https://ziyuan.assiw.xyz',
  'https://zhuanqian.assiw.xyz/lxwm.html',
  'https://tcmenu.cc/',
  // 添加预加载背景库中的所有jpg文件
  ...Array.from({ length: 41 }, (_, i) => `./src/views/zhuanqian/背景库/${i + 1}.jpg`)
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

// 拦截请求并返回缓存
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果缓存中有匹配的资源，则返回它
        if (response) {
          return response;
        }

        // 如果缓存中没有，发起网络请求并将其缓存
        return fetch(event.request).then((networkResponse) => {
          // 检查请求是否成功，且资源属于同源请求
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // 将新的响应缓存
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }).catch((error) => {
          console.error('Fetch failed; returning offline page instead.', error);
          // 返回离线页面的缓存（可以添加一个离线.html到缓存）
          return caches.match('\src\views\zhuanqian\offline.html'); // 假设有一个离线页面
        });
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
