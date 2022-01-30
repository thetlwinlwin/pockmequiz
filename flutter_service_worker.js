'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "222ba8fd317be25132aa6694d85b8f44",
".git/config": "50097ab22796adbd5a2f68fb573ecad0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "58698eed2b30eb5e8579ffd43a11b9e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b48b5dd236a0b7504ee1239914d6bfc0",
".git/logs/refs/heads/main": "32285d61179712e02380e59c6f34382f",
".git/logs/refs/remotes/origin/main": "96c60a5a7238b8af05f624168f32e8ad",
".git/objects/02/a2d52bbe866fd9078290dc0d8a3bb1a2fd70d4": "e0f638f49f2bd08a7312c16b2c515b9b",
".git/objects/0e/4daa2e99216f9e4aac32f00049fa7aa21f3f8e": "c11aa83b1dbaad9b8d2871a392883106",
".git/objects/1e/760ccfa706c358f8d345ed06cb493e5be7d665": "a0f56e979ac4c258652fe5687c717fcd",
".git/objects/24/62ca00385e196f0543f229f030352851e6b59a": "f4f8b0fb3d47bfaa7fc0270b6e434923",
".git/objects/27/2073cfb58d49466de70729b2eaec9e3ff204c6": "a3409ceeb7f9e58cbdea73a1ff4a5828",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/811989a63b144f05fe14281f58b7d01176363f": "815c2923b580d69fcc4327017d15efc7",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/149bb4686db96c7fad2e0eb5a31369e318f663": "48da07a71277090d7e595ecf4879d49f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/56/582632bf694729df99b3a6330508b9778e2542": "f8154b6520067e92b8658d37649144c7",
".git/objects/5c/48e798e7d8fe06b94b610c025eed6ca4adac27": "75d2b12bd3cd35f218d5ce4392c46d65",
".git/objects/5c/c7235a04b986b6d93b2e136901a0b9aa6cc521": "0e66350f08a94100359f7d9c17e2d28a",
".git/objects/5e/3fcf5c83a94d5fec025a4e5e2ff7b75296cca0": "2b869a4f8242ae5bac64dc047e83354b",
".git/objects/69/e32c2e7bf4067384ae735715f6a097cecc079c": "144fc2c95de1bff0ce496926bae8350a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/b9e15ce84fcec7597273494d0a89ca7577123f": "156248f8f87a6c83e8b50be309ae8d70",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/153e3a51791d642a4de16111d13ca347d2d5fd": "00cd068c67f6e3b1526d5f9f54f2723c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b0e22d43af0380cd2c57c9cdd7141c91c293e5": "3ac7b5860e375e4c3eb33437d1e7e247",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/96/0602588bd9a94b3891bf4346f22b27f5c837be": "0a89ed615149e26dcfd775cd28b99f8c",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/b17ba3f1b96f1dbfa402f76b9ab925b9f29f20": "013299028acb85f6cd79ac0c6034fbd8",
".git/objects/c5/0babbe0faf8f3769418f02c34e1fb3e9354df2": "d68d783f2adf127849ba3f177a5ecc5a",
".git/objects/c7/b6d52f747d292f7fdc7925a773c81b5777533f": "530c42d806c4da34488d3fa016498a93",
".git/objects/cf/cf6b333b93108513a590b5462fa210dedff1d5": "6031e9b156f0113ce9d4d3e4a788e520",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/2fe7aefedea228921e906443d25119dfb968c6": "061850d34dfb5e2fa26e3f331cb9e384",
".git/objects/db/4a3a041491a65aacdd2f02c35a84f34874f894": "a4ce75a0bd5a9087fba8bcd1ee1f730b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/fa7b9b7161c8aec8833216609d3e4da95e5210": "1ab317e591d5fb351efa8946ed6b8493",
".git/objects/eb/2ed545ac47ffb8c344ec277bf22b1968e94892": "9ad95c4ffc3daecaadb007495314d4e6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "ebe4f2d9b2c908bbe45499fc20e2e0d4",
".git/refs/remotes/origin/main": "ebe4f2d9b2c908bbe45499fc20e2e0d4",
"assets/AssetManifest.json": "65771ad6df7d97deac99a06ea9334119",
"assets/assets/pock.json": "2571a27e0f838835363047943311f54b",
"assets/assets/pock.mp4": "1cb924eecc6f695aad2caea78d590d87",
"assets/assets/pock.png": "d386d138fee6f35fb7b8e19eaf4cddc6",
"assets/assets/result_pics/pock_0.jpg": "5d6007ede70dbe4e2ea10a68be4c5b97",
"assets/assets/result_pics/pock_1.jpg": "22904c906f2517f26bd667c75cf823a8",
"assets/assets/result_pics/pock_2.jpg": "c0a5d3d3388db968428e915b98141a22",
"assets/assets/result_pics/pock_3.jpg": "f4807ab888bc72a214d541d3532611ed",
"assets/assets/result_pics/pock_4.jpg": "b3bc446886fc434912c555e7de1f3ff8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a77c513a6ed755f400dfb5c5168a79ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88a0318b748d116fe925ec2520f6edfe",
"/": "88a0318b748d116fe925ec2520f6edfe",
"main.dart.js": "2fd78bdcadd2fdefa9f2922eb2cf87db",
"manifest.json": "bcad8f362a63503748ac1627c9c7520d",
"version.json": "7a2e06171e2b2553768a75e1b194f7d0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
