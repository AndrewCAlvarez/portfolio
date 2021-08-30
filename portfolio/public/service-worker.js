/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["images/aboutMenu.jpeg","c275557736d0d090301a7a445d3879fc"],["images/bubbleSort.png","4fb46d405d1a53cc9e6248cc28c7b80f"],["images/cateringScreenshot.png","55aecfb5d704fd5148545b18e724d27e"],["images/contactMenu.jpeg","0748c640b87febcd1f40a793672c1312"],["images/festivalScreenshot.png","eeefcff44e928f8087bb3eb18a6ff6f5"],["images/githubMenu.png","e8676d56fa760297708cf3e1acfc077e"],["images/profilePic.jpeg","322e312748c9ac7638d4900de7b7070c"],["images/profilePicCropped.jpg","4d50760f1dcf4b192ec63e62324ab6fd"],["images/projectsMenu.jpeg","5e757e4f3f50787ed6bac6476b2516ae"],["images/toolsMenu.jpeg","27bf2d27a483a473d5e5445c7e629ae1"],["index.html","542bdc39ef374f6b87458f74912c4d77"],["javascript/bubbleAnim.js","f3e2654b029efa813de614bfc6c2e0eb"],["javascript/rainbowAnimation.js","7037d7838d8c237677b842e9b45bb6b6"],["javascript/scrolling.js","1a7e3431b597d1896b4d0d412c975056"],["projects.html","f9c49c4bad938cfaad3e618871ca6447"],["projects/algorithms/index.html","bba1821659b4b85664533c50dc8d4994"],["projects/algorithms/script.js","296608d73ada1cb08de8ca179e4cd915"],["projects/algorithms/style.css","88f2cc4bdf3a810790c4102d67374c1d"],["projects/algorithms/style.css.map","8591abdf9164b555904d2298f57fd4cc"],["projects/algorithms/style.scss","483083ea53b294191380a4091fd4ce0e"],["projects/catering_template/index.html","1a61e4c5f8557b1c753aaef1530e8fc2"],["projects/catering_template/style.css","4f1361c2c0e479edac49edded0e3d9e4"],["projects/catering_template/style.css.map","598b6ba0499b12fe685e388653303c03"],["projects/catering_template/style.scss","066a6dbdd7a6f4cdbb2b4dfb246e608b"],["projects/festival_template/images/Ellipse.png","a5a08aefe58d4c50bcd5d4d19aa95e2d"],["projects/festival_template/images/audience.jpg","d440fc89fb1ddf734069eddd7326ebda"],["projects/festival_template/images/festival_logo.png","3b3ce05ced18abb8eb2fcdf183566935"],["projects/festival_template/images/festival_logo.svg","8cebe3c085339a49713dd54e1749a4d9"],["projects/festival_template/images/hat_girl.jpg","f1180f6d75a65a6130cd80175f88bb31"],["projects/festival_template/images/logo.png","a5a08aefe58d4c50bcd5d4d19aa95e2d"],["projects/festival_template/index.html","5c79377b4254a4605cd6ce41af24f755"],["projects/festival_template/scripts/script.js","5a581717a384e9c76d64e91ed9c2fe69"],["projects/festival_template/styles/style.css","9302d163ccb910d43d7843421485f8b0"],["projects/festival_template/styles/style.css.map","ae3c99842d27b4cbee970012db7eb585"],["projects/festival_template/styles/style.scss","d7c2b333c2ef3c1f941d15df0ef50a40"],["styles/_about.scss","4471855f77c7f4720d75bfb3d94f2543"],["styles/_animations.scss","56f63c5137192d86fced92c4d87e37dc"],["styles/_base.scss","ffb09c1a6709508bb9a1ac1af451f344"],["styles/_contact.scss","7a9ecc456e209e9f6a028b6d3b693e61"],["styles/_footer.scss","57578f0c09a3680d768fccad0c24ebbe"],["styles/_header.scss","8314496cb971dfbb4227f9e299e9ac63"],["styles/_home.scss","72861fa68a6625f5dd8afa1170056b74"],["styles/_mediaqueries.scss","146952077c02d22b0a8f3aced5e61c68"],["styles/_projects.scss","68e45c6561f3f6d73395228c9f14e7bb"],["styles/_tools.scss","d905c6365f01175da63b392a79cae128"],["styles/main.css","6d3909b8fa9ac98cbbdb503c8bfb9ae8"],["styles/main.css.map","9053d0dabb51dc4b0f5ba03e2530005f"],["styles/main.scss","0fd94aef04c929a5bcfad875cdfb8f2c"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







