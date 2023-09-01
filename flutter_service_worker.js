'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8ddf92fb3bf7ee1bee8a846bb715c258",
".git/config": "210181c575980ae5284be89d80b99237",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3c0387496feaefba57af084f3dec057e",
".git/HEAD": "ab788c8ebb640f1f9995ac1f8194783b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "a79485cbf2010fc5db041e383517ec29",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d783d73115f5114d5154e4e11b58fcb",
".git/logs/refs/heads/release1": "3d783d73115f5114d5154e4e11b58fcb",
".git/logs/refs/remotes/origin/main": "e15dec4dc5640ac45bfe953c44131272",
".git/logs/refs/remotes/origin/release1": "34f5d236530dfd8908fb1aefdfaa9d5b",
".git/objects/03/a2ddbfb36a3311519ce2cbde533ae362e804cb": "65cd48d5661ce0c9de09ab7e8d5fd249",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/25429b0e0fa7ce2a8926e373eaebee60bf3198": "8d302a5161542255aab71109d1df7634",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/30fb0646efbb883db75db9d985fb06af304adb": "62cce1a0f19db2714f57e025b532221f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/6e0c8c76d7168c89ba7cf2009d74fe61b31b54": "e56aae8eb7856b9661fc983e1f3a80ae",
".git/objects/23/c53c8dfad4b483a08880f7d4d4ffc288f106d3": "75f7225389cf0d1992a37a27bbf62375",
".git/objects/2b/9fe7bbadd415ca1b711d4231d798442f804319": "5cce6da968e2038f9ee3c8dbae7090bc",
".git/objects/2d/5f7969c1506afa7c8f8169ba45f61695dc935a": "6501bf6fbb667c0b9db3f12efd66848e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/40/24183914fe85cbb92bcdc78d857bb34ab9b29a": "4f2c92833bdfc198c1f242d656fae3f0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/56/45e915d6c0cd60435a8b617062c4b4d09e7df9": "b5dc80f27b112a89580e499be90b528c",
".git/objects/57/1dfe14851a21d473a0e6022b4f71d2c9b8e0c1": "d44903b2a1fbb00be3ef1457c4caa6a4",
".git/objects/58/34d64bb64f000c4dc031004f7e16cdc57fbd4f": "74a8b877e9e10a6211b194b793885b21",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/715971ad3e9871969ed217ef309ed1105e7870": "a2f5750c5264696b603ace364464fe42",
".git/objects/6b/c9a6aa73dca0360ae23d36a266f3916dc97617": "1c0f99a7d7ef1f0abb890a72b1c12759",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/63d8e43ab967a3c4465eb03d231a888f4b9ecd": "e87362bce3fd94c6c64a479e909f566e",
".git/objects/76/d1e34b6ccf951b166db53cd59d8183cded7586": "cae1607f586c1c9d031ab42572e610d0",
".git/objects/78/d4dd24c96b0f10624952aac472896d00f1eec4": "f9c363d6bff3e21695fe59cbafccf978",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/336ed7ed81bcb503aea2fdc4ad9c096e677ab2": "227cfa931d0cdc051decf56f53a50b84",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a1/e3782569750b884de53c43cd3fa64945a75249": "f99c613bef455c9b9052726f2217d5e3",
".git/objects/a4/29f626d89d180a6cd6ff8fb036c351645a70b0": "73cefefc91cb995804d1a2236dc258e3",
".git/objects/ab/d90d89be6dadfd9a83ccb9758c23b743bb46dd": "7b037f742af5c79f7315389ecbf81c30",
".git/objects/ac/f429f71f8c7eb740e543be45ef89eabc667461": "a135cc4a3c7e860e66e6430c28e45269",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/0f101e0ecca3b60e61e159e83a03e3269ef6fb": "7a40831fe5799752ce8b55bfb359a114",
".git/objects/b1/b10e2a458a226719f45c2c3b6e75e3b18ce481": "1496ea649c80eca668692fc60032322f",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/04f6ea061de700c8ae08e92281ac1d3a9fb72c": "c5c5594a79f5d11a80f2e3c899b24f5e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/8757ee8aedb9dc187595908f1697528b536560": "3674feafec323808fd92ff824ab76eea",
".git/objects/be/5baba5539dc0ee38488ac5d86ccb4b213ea339": "2dd3ee0113669270db24d5c6138ac049",
".git/objects/d2/fdcad206a6d3bb9a4bd04fbc5d7686cc6a03bb": "ac558a6b98abf26ee55ddd2c50a9099b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/e5/2302d92cf2f595d98b482c6bdc4b43c61c05a9": "0c2f373f6b4f2de1697d446a126aa6d0",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f4/e6ed9ed6751492f92a5a4a68a7cf078946c9fb": "5915f45a26dab802d426f3c0d39f822f",
".git/objects/f6/a42aa40a4777268f63141f038c63dd83e0a7e6": "bfecc5b98a230356e7b19786b0bdd29c",
".git/objects/f7/04e1a09c3d2620bae9de3d3036150919697b36": "a64f65b6fc6acbd3ab158862292538a1",
".git/refs/heads/release1": "7f4f1776ac27b9ce707e8d461c19e9d4",
".git/refs/remotes/origin/main": "7f4f1776ac27b9ce707e8d461c19e9d4",
".git/refs/remotes/origin/release1": "7f4f1776ac27b9ce707e8d461c19e9d4",
"assets/AssetManifest.json": "2050ba038929092b163dd77260056ab6",
"assets/AssetManifest.smcbin": "650b1f89d9b40c66c8b9124d311a93ae",
"assets/assets/account.png": "7971997e68f70e6ee0b1df2245f9c2a3",
"assets/assets/add.png": "623d3aa396fffb7969a3ef774cdd18aa",
"assets/assets/bot.png": "fd04053898305e2869edac69613bbd8f",
"assets/assets/chat%25201.png": "b4dd05674d3d0043e5c07589616e37d6",
"assets/assets/chat.png": "7bc47cc9d199e221f5ea05c83ce1bad7",
"assets/assets/comment.png": "249a58964c5a76a88fabe1f3fc78e70e",
"assets/assets/delete%25201.png": "405f69800f0835776be71c86618182e0",
"assets/assets/delete.png": "4cd3280d95085dbac686410a83208339",
"assets/assets/exclamation-mark.png": "3c33c8e321c15c6c5ae6f3de35b1bc33",
"assets/assets/icon.png": "fd04053898305e2869edac69613bbd8f",
"assets/assets/mail.png": "2d9a27e7bc90722e955d94bc47a5c9ea",
"assets/assets/password-code.png": "dff02839cac3efcd26b2bfa1718e8eb6",
"assets/assets/power-off.png": "990df04120b9ea646dae4feb4cb792eb",
"assets/assets/Reset%2520password.png": "ab02e7203c5e6fc078f6152e455dc10c",
"assets/assets/reset-password.png": "7ad7c5782279e8d701bcfc5f8e2fc013",
"assets/assets/robot.png": "fcbc532396a23f2251cd58aa91c2d25e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8f6516645efb3334bd4bb2ccbcc453ff",
"assets/NOTICES": "addb66516209713a7a54a553c7ca5e68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon%20-%20Copy.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "fd04053898305e2869edac69613bbd8f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "fd04053898305e2869edac69613bbd8f",
"icons/Icon-512.png": "fd04053898305e2869edac69613bbd8f",
"icons/Icon-maskable-192.png": "fd04053898305e2869edac69613bbd8f",
"icons/Icon-maskable-512.png": "fd04053898305e2869edac69613bbd8f",
"index.html": "6a88cdcc075dc30e5dac2e4b68f82e6b",
"/": "6a88cdcc075dc30e5dac2e4b68f82e6b",
"main.dart.js": "3c22159281b4c6a188e04255c6569bff",
"manifest.json": "1a4b38dbd6da3ec73e53adc3420fa456",
"version.json": "3cbf2082a67e6394a6e67637f7ce8bbb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
