const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  'https://zhuanqian.assiw.xyz/zhuanqian/index.html',
  'https://ziyuan.assiw.xyz',
  'https://zhuanqian.assiw.xyz/lxwm.html',
  'https://tcmenu.cc/'
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
        });
      }).catch((error) => {
        // 捕获任何错误并返回默认响应
        console.error('Fetch failed; returning offline page instead.', error);
        // 如果有离线页面，返回离线页面的缓存（可以添加一个离线.html到缓存）

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
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
