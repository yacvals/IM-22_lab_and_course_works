/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "128fd81446e836bbbcd9a337e38a6bc5"
  },
  {
    "url": "assets/css/0.styles.fb77016b.css",
    "revision": "4934813b78b14fe01dfe8a98d088f88d"
  },
  {
    "url": "assets/img/Diagram.8cd51fc3.png",
    "revision": "8cd51fc3449f1cfdb8c5adc10e86f5a4"
  },
  {
    "url": "assets/img/relational-schema.a1d70381.png",
    "revision": "a1d70381c4dad1d0e644bd6842d8da14"
  },
  {
    "url": "assets/img/Requests_delete_response.0f1b3855.png",
    "revision": "0f1b3855f7f00c20d5ff24d7f6b070e3"
  },
  {
    "url": "assets/img/Requests_delete.a9b9246b.png",
    "revision": "a9b9246b1bda07141c1177fb43c62033"
  },
  {
    "url": "assets/img/Requests_get_all.554a1b8b.png",
    "revision": "554a1b8b448fd1834d4121ce850abe7c"
  },
  {
    "url": "assets/img/Requests_get_response.79319184.png",
    "revision": "79319184648de9b512a8995472075a24"
  },
  {
    "url": "assets/img/Requests_get.9d71aa92.png",
    "revision": "9d71aa92d52bc49adadb5a69972bd519"
  },
  {
    "url": "assets/img/Requests_post_response.5335641a.png",
    "revision": "5335641a0bce4955bc29ddadb999a90b"
  },
  {
    "url": "assets/img/Requests_post.c7c77aa5.png",
    "revision": "c7c77aa5c408dc66ddbe80e3ba72e745"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Users_delete_response.38880569.png",
    "revision": "38880569d5b33296d5d10a7dc3ae5d10"
  },
  {
    "url": "assets/img/Users_delete.90e146e9.png",
    "revision": "90e146e93621ecc0787cbce9130e9a7a"
  },
  {
    "url": "assets/img/Users_get_all.3364d51c.png",
    "revision": "3364d51cb5c496999cd232c89e9cb4e6"
  },
  {
    "url": "assets/img/Users_get_response.7070f897.png",
    "revision": "7070f897f826f342cf7a3e2f161fd9b7"
  },
  {
    "url": "assets/img/Users_get.c9523190.png",
    "revision": "c9523190792d0135735ee0cef71628b1"
  },
  {
    "url": "assets/img/Users_post_response.b62c245d.png",
    "revision": "b62c245d990931742133dee6be53a11d"
  },
  {
    "url": "assets/img/Users_post.43042a7b.png",
    "revision": "43042a7bf924f335756620132dfcf59e"
  },
  {
    "url": "assets/img/Users_put_response.61d2912a.png",
    "revision": "61d2912a3e4277c5eb324f4ab2e0c70c"
  },
  {
    "url": "assets/img/Users_put.bbc35d67.png",
    "revision": "bbc35d671e1defcf011e6d90b87fe56d"
  },
  {
    "url": "assets/js/10.c8fc8c3d.js",
    "revision": "595fafbd99729524b5ee286fcca26d3b"
  },
  {
    "url": "assets/js/11.1578bdc6.js",
    "revision": "0c7860de2c6c317829485623bc2b1d4c"
  },
  {
    "url": "assets/js/12.d0832235.js",
    "revision": "239e4de6ced7a31e75b550cf25127de6"
  },
  {
    "url": "assets/js/13.2f61692c.js",
    "revision": "2ed3bdc602c9ee2b5f91a38d739cf18c"
  },
  {
    "url": "assets/js/14.760389d2.js",
    "revision": "8a0a5f6c4f6cab26e755c387c55760b5"
  },
  {
    "url": "assets/js/15.69169465.js",
    "revision": "5c45499261f29974cb438f309653b722"
  },
  {
    "url": "assets/js/16.52df4b47.js",
    "revision": "b6d577ef0807d6dee5381a580747a6c3"
  },
  {
    "url": "assets/js/17.b6ae775e.js",
    "revision": "6d8a25c0d0f548ad53bb34f725559e5f"
  },
  {
    "url": "assets/js/18.4e32d62d.js",
    "revision": "129354e565fdb6479ac8c639393f199e"
  },
  {
    "url": "assets/js/19.0c99f653.js",
    "revision": "a0624671a1b72d01e8f7d6cd9c009077"
  },
  {
    "url": "assets/js/2.b90c534b.js",
    "revision": "6e31e87f4cf7f1bd67fd94d5e1a5fc7d"
  },
  {
    "url": "assets/js/20.8032e682.js",
    "revision": "730734d50bfc7bdbd69bee9aa4034590"
  },
  {
    "url": "assets/js/21.16fa302f.js",
    "revision": "f7e9490feb3c9cb11e1e50fe3133877e"
  },
  {
    "url": "assets/js/22.53d30762.js",
    "revision": "ca5d742112ddd7c496d5aa27d8312990"
  },
  {
    "url": "assets/js/23.bfa3daa6.js",
    "revision": "814b4f5f51eb0d4496e8b9e431466981"
  },
  {
    "url": "assets/js/24.e11fafe3.js",
    "revision": "399d9e381e7d0961e6167837606273e6"
  },
  {
    "url": "assets/js/26.41b6aec7.js",
    "revision": "3aef0aff4a34db0cfe21fb13287a21f8"
  },
  {
    "url": "assets/js/3.33be0fef.js",
    "revision": "d63609211aea444f03bf6866c8559c79"
  },
  {
    "url": "assets/js/4.8d2e1845.js",
    "revision": "b5de18d5642fe05d16ea35d2a8f0f25c"
  },
  {
    "url": "assets/js/5.90c49cf2.js",
    "revision": "568b81df264a3827395580e3fed22884"
  },
  {
    "url": "assets/js/6.02e50f58.js",
    "revision": "50c1e7cf2ea71abff20379c5e5aba67e"
  },
  {
    "url": "assets/js/7.ab130570.js",
    "revision": "19fcbf0f1d0dfbdcde96e0cc0e3d866b"
  },
  {
    "url": "assets/js/8.09afab8e.js",
    "revision": "10838f501bf31cf58b98e2751519f1f8"
  },
  {
    "url": "assets/js/9.f9e1ddde.js",
    "revision": "52a81030d67c1b6a7ee2b1af35eed3d8"
  },
  {
    "url": "assets/js/app.b9d20c9d.js",
    "revision": "b41b4f8aff01e7b240344ddaed4de1ab"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c790270a38e795e156cbf9a3527f3400"
  },
  {
    "url": "design/index.html",
    "revision": "6064a66325871d49a57ba72f93ffb4f4"
  },
  {
    "url": "index.html",
    "revision": "a4ff5ac3e4b307a24350f7b2b72c3ad2"
  },
  {
    "url": "intro/index.html",
    "revision": "fc472d1b88a9b905e89594cf92fb0790"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "40c80600ba1ccaee0ea19ee898352ed9"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "184fdf03a4c4134c35acfe80cee63a98"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "33f02e5a62980645d56f3899e9ac5a34"
  },
  {
    "url": "software/index.html",
    "revision": "a99ed1e6c4824b0b0629c3d0580c7ad0"
  },
  {
    "url": "test/index.html",
    "revision": "c289709844b5b786597b541fb3378013"
  },
  {
    "url": "use cases/index.html",
    "revision": "711e7527674ac015e9d49483e9023d96"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
