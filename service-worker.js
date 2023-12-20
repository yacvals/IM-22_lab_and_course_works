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
    "revision": "60f86e1f13a24aa64cb26c80eb7d712e"
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
    "url": "assets/js/13.7ba2d7dd.js",
    "revision": "d9a38b3ce07757cc699f889092a1a6e4"
  },
  {
    "url": "assets/js/14.949b49ef.js",
    "revision": "f6b6965e956d6acd9b6395a83e6fd2f9"
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
    "url": "assets/js/19.882ca2a3.js",
    "revision": "4ca5a5474f3e7f740f892654831d4994"
  },
  {
    "url": "assets/js/2.b90c534b.js",
    "revision": "6e31e87f4cf7f1bd67fd94d5e1a5fc7d"
  },
  {
    "url": "assets/js/20.fda9bd0d.js",
    "revision": "3019ba83b7cb9491d920ed81b6da0427"
  },
  {
    "url": "assets/js/21.aba2dd5c.js",
    "revision": "3fa369b50b884a9303d7eb674bcb4ce4"
  },
  {
    "url": "assets/js/22.e1f518ce.js",
    "revision": "9ae420f0a3259d4473575e05e5bcd84c"
  },
  {
    "url": "assets/js/23.600bf155.js",
    "revision": "5988987cfd44370c891d3e153f42532e"
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
    "url": "assets/js/3.18d811fd.js",
    "revision": "745ec5845b9434d451bd38019db0644f"
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
    "url": "assets/js/app.09f4be83.js",
    "revision": "51fa00882995dcc051da8660393f890a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4973d11011574be4fbfdb1f9d52c3358"
  },
  {
    "url": "design/index.html",
    "revision": "217afc4f17dc53a4a61bdf2f9b89e18b"
  },
  {
    "url": "index.html",
    "revision": "100524cb80c18056579a13ba7e78e63d"
  },
  {
    "url": "intro/index.html",
    "revision": "22bffbf2d398f7ff03dfc8571c9d4b44"
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
    "revision": "8ed2ba54b556a2d4dc7f5fe5e07ea3e6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a2ea4b46f17474508dbd8d6f1f553039"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d8ed1c63dba38fd1d36574634d966039"
  },
  {
    "url": "software/index.html",
    "revision": "edcf78442850f76c4ef64ee553fb25f0"
  },
  {
    "url": "test/index.html",
    "revision": "1357f10b5f6e16d23fa1bc0f51d39f38"
  },
  {
    "url": "use cases/index.html",
    "revision": "4d265d9ac57ede50cfd02f80f7a0bac6"
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
