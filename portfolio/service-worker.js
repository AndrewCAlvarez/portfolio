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

var precacheConfig = [["index.js","28dbc3dd19a943b352a5632919340163"],["manifest.json","050bf696de1c35dd5660d583c33c5415"],["node_modules/accepts/HISTORY.md","a5ab659ea52c189a52686b7b2d0aaa2e"],["node_modules/accepts/README.md","9e6a0252de997173ebb7a3ff44a785b8"],["node_modules/accepts/index.js","4fe4d2c90a2fd19d6e97443a7d24f815"],["node_modules/accepts/package.json","e6b1f36c7fc3d4a53c34db28ed1fc745"],["node_modules/array-flatten/README.md","328fdaf1ee65869341567f4fb6716e02"],["node_modules/array-flatten/array-flatten.js","4b17fa06c54846b686b8b799e9dd253a"],["node_modules/array-flatten/package.json","cb1aa7f817100a03395dd0163bf6ebe9"],["node_modules/body-parser/HISTORY.md","fdc24998caf881fb588b5dd9c564fc33"],["node_modules/body-parser/README.md","0b6a422b2b1b220d6f54adea76b538d5"],["node_modules/body-parser/index.js","7b203b1ba7da7e9e3824e8c0c1708ea8"],["node_modules/body-parser/lib/read.js","046366a27279a7d65e7ae694823e76bc"],["node_modules/body-parser/lib/types/json.js","ef0d64e8db843813870c15cd5eb1efb3"],["node_modules/body-parser/lib/types/raw.js","acb38e4fe575afaf8d1a257e47c6e362"],["node_modules/body-parser/lib/types/text.js","beb4ada09306f8d6435566d9e88076d3"],["node_modules/body-parser/lib/types/urlencoded.js","906a833480ce8841bfa5aeb95b5c085f"],["node_modules/body-parser/package.json","d733814bad2ae132f08ab3d55c77b6a8"],["node_modules/bytes/History.md","cdb58f28139f5c1c229d1bce042250da"],["node_modules/bytes/Readme.md","80be7bb75739cf008ed7400efd5b0b0d"],["node_modules/bytes/index.js","a317b58c1896b9b1d2124bfb8886484d"],["node_modules/bytes/package.json","bb3cba8a8a870732b7eee0d2e4e29955"],["node_modules/content-disposition/HISTORY.md","2fa841b0727d6434c26332a4ea07838b"],["node_modules/content-disposition/README.md","64d104d47f8de5e7776a6098f29db130"],["node_modules/content-disposition/index.js","30daea1ccaec65c195c624437fd7ea20"],["node_modules/content-disposition/package.json","7dd4be647ccfcb92d9943e73b26afced"],["node_modules/content-type/HISTORY.md","bf5a18f36e5be9cfb5614c0a154d6de9"],["node_modules/content-type/README.md","7dd3c3a8fa71a08b63a4cc4c26b67fc4"],["node_modules/content-type/index.js","44890ac38a6cffb3d6efb5652bfce578"],["node_modules/content-type/package.json","138f1013d1de872220bf2a2f2f052660"],["node_modules/cookie-signature/History.md","dc394515ce0ad9e572acab06c54847ca"],["node_modules/cookie-signature/Readme.md","57ae8b42de3dd0c1f22d5f4cf191e15a"],["node_modules/cookie-signature/index.js","a9634aa95d321b9a6d90bec5d3d23937"],["node_modules/cookie-signature/package.json","076c53814237236a9d1aa999f33ee501"],["node_modules/cookie/HISTORY.md","91a6932f361ba4272eb4c69bade2094a"],["node_modules/cookie/README.md","116384f13856d5718b1d4313494dfda9"],["node_modules/cookie/index.js","7c823649d28959ab6a327bb7a75251a6"],["node_modules/cookie/package.json","995f6fbcc9e40fa3f539a51194665ac6"],["node_modules/debug/CHANGELOG.md","504a70c7eb9eba0c4b26965cf4d252c6"],["node_modules/debug/README.md","03694893d682191b3c893701ba6f4a55"],["node_modules/debug/component.json","510af4d67a35446e6dccea1429399c3a"],["node_modules/debug/karma.conf.js","06f3babbdc43c6c4dd1493b6c1af32e2"],["node_modules/debug/node.js","79f3814f32362c1c6f9dbb8a1e3b01bf"],["node_modules/debug/package.json","71a7656944ffe50cc27ebe02491ae49b"],["node_modules/debug/src/browser.js","62cfee6d6dd5ffec5d3ed35073791aec"],["node_modules/debug/src/debug.js","74bdccf347345d27fe8a4ac3add99c60"],["node_modules/debug/src/index.js","dd13897ea2eed92695bb7e4e744a9148"],["node_modules/debug/src/inspector-log.js","b22697b673c7c3586f22ae0206258fde"],["node_modules/debug/src/node.js","25807a97fbb1fcc42a013abc7d7768c4"],["node_modules/depd/History.md","bbe1469d587d6d7e5e5deb717e9aa31a"],["node_modules/depd/Readme.md","7bdff4ed8d628fd33365a6314fa7a7d8"],["node_modules/depd/index.js","fc83ac89ac144234a74ca42769f0c4c6"],["node_modules/depd/lib/browser/index.js","5b958f39df1df069739ccd3765bad0de"],["node_modules/depd/lib/compat/callsite-tostring.js","6b7b6b5b14ad2be86acce3d6bb4a64e6"],["node_modules/depd/lib/compat/event-listener-count.js","12b1ddab08bda110a232d7e724fe162c"],["node_modules/depd/lib/compat/index.js","863b7f4fae75ce11af3ce68aa7a4e962"],["node_modules/depd/package.json","b6682ec09424cb14ad83a252a6748f35"],["node_modules/destroy/README.md","1781169baa24e5f44c7ad740f3d71df9"],["node_modules/destroy/index.js","f16c90b1ea929c508f3be515a6a141f4"],["node_modules/destroy/package.json","ea66becf61cc69aece23e86ea3caf921"],["node_modules/ee-first/README.md","8591e9d47fb8574f4a99ac3de242b3cc"],["node_modules/ee-first/index.js","e7a3f46d4b903c9f8a025cb753b1a538"],["node_modules/ee-first/package.json","3ed21090e07ef5dd57729a77c4291cb9"],["node_modules/encodeurl/HISTORY.md","6af548dfa20004d203a20ca28f0ded82"],["node_modules/encodeurl/README.md","927f12b955e3abfe907852d1ab957002"],["node_modules/encodeurl/index.js","b90cf71779f72e14be703a4e494e968c"],["node_modules/encodeurl/package.json","453a9bb10c91e0ec44f305b14e30ce82"],["node_modules/escape-html/Readme.md","79c73d9ec4ca382fa642702f356b4046"],["node_modules/escape-html/index.js","0c95e46d0f08bd96b93cfbea66888afc"],["node_modules/escape-html/package.json","e9c758769fec9883d5ce3d30b8ee1047"],["node_modules/etag/HISTORY.md","959d386c253288fd5dd2dc4765efa273"],["node_modules/etag/README.md","89c2c0f9f52f551591bfc484e9e4a5bb"],["node_modules/etag/index.js","8eaca1927e67861a7682b7b2c0906ef1"],["node_modules/etag/package.json","fec91cc11e50ee734c65c2d703db3884"],["node_modules/express/History.md","7096ebc3aca3b6bb3b8a2f6766915631"],["node_modules/express/Readme.md","5012106533bf4472fcbaf4dc77912023"],["node_modules/express/index.js","866e37a4d9fb8799d5415d32ac413465"],["node_modules/express/lib/application.js","569b549e619807c5cd58ab89d7e81109"],["node_modules/express/lib/express.js","d467bc485eddf6d38278bc6b1dc16389"],["node_modules/express/lib/middleware/init.js","3711ae7ea348d39a41c5139a63e89c12"],["node_modules/express/lib/middleware/query.js","a6e9a6c92c5bfdd9d7b08b267a3b1d44"],["node_modules/express/lib/request.js","4f3a3b078531e551c6784f08a7ea02e4"],["node_modules/express/lib/response.js","b5a9b48bef9b072a350d0b8737d54bbf"],["node_modules/express/lib/router/index.js","c11694deadcecb691f6860a530cc7472"],["node_modules/express/lib/router/layer.js","c6e16965ef05cc02cfee78022496abab"],["node_modules/express/lib/router/route.js","be5fcf9a22c2524e813c9a79effb4610"],["node_modules/express/lib/utils.js","23899065325f9a3b0501bccc5231be8d"],["node_modules/express/lib/view.js","91c7455190f39cc30d0c5d4627d701fd"],["node_modules/express/package.json","bf6c1ca718319e619a9ebd41d5cbef6d"],["node_modules/finalhandler/HISTORY.md","307cefb319b745bc613eefb9efa80e5b"],["node_modules/finalhandler/README.md","8358f10f677962dbb488edd7d1019aa7"],["node_modules/finalhandler/index.js","a3444524d4b81aeec8b0be8b54cefd24"],["node_modules/finalhandler/package.json","65618bd839fed72de71aea141e19e568"],["node_modules/forwarded/HISTORY.md","ba854f852a81318ea0356f4286e20dab"],["node_modules/forwarded/README.md","5e737f1f3045f9875119cf34bf28fb03"],["node_modules/forwarded/index.js","485e8b30d7f9b0394b2ac54ed51ddb06"],["node_modules/forwarded/package.json","e7df15eb8d27abec5607f111411a9df1"],["node_modules/fresh/HISTORY.md","47e08786429a2f1a69b5d251e51a9d16"],["node_modules/fresh/README.md","2409eba75b77a1b1258045cd372b4b6e"],["node_modules/fresh/index.js","57dbafb6c310ce7063690f5688acedd5"],["node_modules/fresh/package.json","193849cf18966de2814f4f6e85740069"],["node_modules/http-errors/HISTORY.md","54bff0d52f53f60163559b7b466172b5"],["node_modules/http-errors/README.md","ca084980372754c3b5251fd2172af981"],["node_modules/http-errors/index.js","1eb9f6e0a67d3a37f02d9f98cf9163cc"],["node_modules/http-errors/package.json","18637d36709871c643fdd58b14332bf3"],["node_modules/iconv-lite/Changelog.md","11f7c1fc239799ded47d06c8abd91b9b"],["node_modules/iconv-lite/README.md","011c8d9193893a9aa6ab12469e808399"],["node_modules/iconv-lite/encodings/dbcs-codec.js","6decbcdfe2ba5ed5c3a75466ce94cdfc"],["node_modules/iconv-lite/encodings/dbcs-data.js","e56d3d57df85dc818087254a8a16a699"],["node_modules/iconv-lite/encodings/index.js","7a13671a7fbc74c463377b3cda863503"],["node_modules/iconv-lite/encodings/internal.js","701b0858fb6fa82101365d81d7406f04"],["node_modules/iconv-lite/encodings/sbcs-codec.js","6f257833a4d930eaa9af9225faef16b8"],["node_modules/iconv-lite/encodings/sbcs-data-generated.js","78c27d9268d36644ac77b82b956f5b1f"],["node_modules/iconv-lite/encodings/sbcs-data.js","336be4eda323a03b88d06985f15c3524"],["node_modules/iconv-lite/encodings/tables/big5-added.json","f29eda07f68f9e3f234638d42956f9ab"],["node_modules/iconv-lite/encodings/tables/cp936.json","9eae47acf0b20461508fdc4506bd905e"],["node_modules/iconv-lite/encodings/tables/cp949.json","d99876b274d44fc737c8495ba36b3784"],["node_modules/iconv-lite/encodings/tables/cp950.json","15d09686ce9e9ba80b3014d3161e2e7e"],["node_modules/iconv-lite/encodings/tables/eucjp.json","98d5cf16fc6b791a0b2c829339766d16"],["node_modules/iconv-lite/encodings/tables/gb18030-ranges.json","4fbec8c88acbb1ef60a5aebf9e8e719b"],["node_modules/iconv-lite/encodings/tables/gbk-added.json","ef78bd5dab20daf8c2bb6c34e5b66bff"],["node_modules/iconv-lite/encodings/tables/shiftjis.json","6d542ffdf3409fd2e8bd01247777b6f7"],["node_modules/iconv-lite/encodings/utf16.js","7ad12158af65189b85796de64923f031"],["node_modules/iconv-lite/encodings/utf7.js","cf6746c76930fe21a716ef03d700b208"],["node_modules/iconv-lite/lib/bom-handling.js","7b3d4519f05bf0cc8d70a4d950c72c55"],["node_modules/iconv-lite/lib/extend-node.js","24ac97737522b61c26b830d350cfcaea"],["node_modules/iconv-lite/lib/index.d.ts","083c701ad23d900ab019a2e094158898"],["node_modules/iconv-lite/lib/index.js","c1da5b53fa60006bc973dc785bed2ca6"],["node_modules/iconv-lite/lib/streams.js","8628e41438801c5bfdabf3be9b1ff548"],["node_modules/iconv-lite/package.json","a8b97f25878ddc5419a9afe173037035"],["node_modules/inherits/README.md","de7eab94959b05c9765cad499ab092db"],["node_modules/inherits/inherits.js","09b210610125b162700734fb93dc892c"],["node_modules/inherits/inherits_browser.js","7c26fc24b695f2afbc284bbd5f64d6a4"],["node_modules/inherits/package.json","74b2e77f5c27cdb14784f7f2512a1918"],["node_modules/ipaddr.js/README.md","6782f9a6accf829084c303895a2c26a9"],["node_modules/ipaddr.js/ipaddr.min.js","25cbb7a40252e3e2004437b72e1eaee5"],["node_modules/ipaddr.js/lib/ipaddr.js","faea7806284886c6c63a41c247008fbd"],["node_modules/ipaddr.js/lib/ipaddr.js.d.ts","69fe76ecec2eb98cd45f17ec7dc7393b"],["node_modules/ipaddr.js/package.json","17bc176c8d78f76c5e70cad7ba16a598"],["node_modules/media-typer/HISTORY.md","370be51f8776b7e79b16228f7dc6762a"],["node_modules/media-typer/README.md","6e254e8ccc8ce7eaf9cdd8e5852d7bdf"],["node_modules/media-typer/index.js","ef1845377cbbf76edd411a370738ed2b"],["node_modules/media-typer/package.json","127ce4abeb265c6eef7b45540241ca91"],["node_modules/merge-descriptors/HISTORY.md","ed8bad35fde048c49302f3138bc4ec7b"],["node_modules/merge-descriptors/README.md","92a3bcc5f7e8a33de24b60bd6ca5c33f"],["node_modules/merge-descriptors/index.js","b4d3859e603602c87a45682862055af0"],["node_modules/merge-descriptors/package.json","570e06d8ce0167e07a32ba70fdd56795"],["node_modules/methods/HISTORY.md","0355fb5e6662ffcdf19e5f736882f34d"],["node_modules/methods/README.md","882a4df2d7dc4b518fd3bb8c85e1c652"],["node_modules/methods/index.js","17d4a4ba378c1fd10dcfd061439f7ea0"],["node_modules/methods/package.json","8a9cbead0f83bf845207ad21534dfdfa"],["node_modules/mime-db/HISTORY.md","4bbaacbd40e0d378fc36ab72a8ba2cb1"],["node_modules/mime-db/README.md","494ba40453ea80540d9aa16843e3129a"],["node_modules/mime-db/db.json","d419d80c8488a8a5ec0b8874f09616a0"],["node_modules/mime-db/index.js","a3e41e93954b3742ed84d3050d6038cf"],["node_modules/mime-db/package.json","88f6ef95eafb68bf2feaa7977de7e713"],["node_modules/mime-types/HISTORY.md","b83f2792634c2ba332a7d8cd7cbe2617"],["node_modules/mime-types/README.md","e146eb2a68b2f5c203928896269f995c"],["node_modules/mime-types/index.js","bf015bb6811afc5c98e3e5f7072fdc79"],["node_modules/mime-types/package.json","278dde2a538d8bef24acc8cc0add4627"],["node_modules/mime/CHANGELOG.md","90baac6a6f8d7e4a7dc0b15bb7a6ce65"],["node_modules/mime/README.md","72cfb57e293629e482629af74f4a92fd"],["node_modules/mime/cli.js","d028184965062ef86cdcfe246753ef27"],["node_modules/mime/mime.js","2930e6caad95dfad928d76fc1eb2e003"],["node_modules/mime/package.json","624ef11f91e60b224942ff81b13d10c6"],["node_modules/mime/src/build.js","daf164e6d251c818b190db781f845776"],["node_modules/mime/src/test.js","e79c602593f0f279e1cb2d8d4a3ce3bf"],["node_modules/mime/types.json","4ac089e4f393ed139cb2ee55726c66a5"],["node_modules/ms/index.js","ae157c9a8e70902576c2d8a06dbcde32"],["node_modules/ms/license.md","fd56fd5f1860961dfa92d313167c37a6"],["node_modules/ms/package.json","cbd55880a650b56c3d5acddbbdbee9bc"],["node_modules/ms/readme.md","90e631c6afccde3ed414d3d230734864"],["node_modules/negotiator/HISTORY.md","9286f41017a183d586addf8609bcb2bd"],["node_modules/negotiator/README.md","2b89b1a3e31c185b5cea428ebd5569d9"],["node_modules/negotiator/index.js","9ed619fb70c6bc360f3908dd90a79046"],["node_modules/negotiator/lib/charset.js","7977a65b1542fa8ce9650e58607f4b07"],["node_modules/negotiator/lib/encoding.js","e03dd226452c58ce083ab4468851f0b1"],["node_modules/negotiator/lib/language.js","4538455326d31cc086bb901f7e3b83fc"],["node_modules/negotiator/lib/mediaType.js","0fdaa0ed7cab2ce5fcbd7b361a85892c"],["node_modules/negotiator/package.json","f532dffa79bfce9737c04201d64b5160"],["node_modules/nodemailer/CHANGELOG.md","a854d72335eb04ade69d1a276bab1232"],["node_modules/nodemailer/CODE_OF_CONDUCT.md","63849c62fb834ca077fe8fd665f17500"],["node_modules/nodemailer/CONTRIBUTING.md","594fb8cf7819de5222b036ee7f68cfc5"],["node_modules/nodemailer/README.md","5c13aaf4093094ab124325771e4b7587"],["node_modules/nodemailer/lib/addressparser/index.js","5ae8eea5176cf6f7ceaa9944802df58d"],["node_modules/nodemailer/lib/base64/index.js","42cebd90231d32ecdf29a46fbf8140d9"],["node_modules/nodemailer/lib/dkim/index.js","523b8a520ac95c08c00d4469f0e89709"],["node_modules/nodemailer/lib/dkim/message-parser.js","65a65a61cca55709b324d7d381374f8c"],["node_modules/nodemailer/lib/dkim/relaxed-body.js","2001a28d989fd29193d5f08592622eb8"],["node_modules/nodemailer/lib/dkim/sign.js","8479d4512d09565c5ea672a348fb6998"],["node_modules/nodemailer/lib/fetch/cookies.js","4ad5366264bb16565bbe8e10cc957b6a"],["node_modules/nodemailer/lib/fetch/index.js","4f7309d228a10e0c2c9ee97ed9aac659"],["node_modules/nodemailer/lib/json-transport/index.js","940d1fbcad4a5f768111e0a719bdc23d"],["node_modules/nodemailer/lib/mail-composer/index.js","bd3ddaf37e9adde42a0584782c79e05b"],["node_modules/nodemailer/lib/mailer/index.js","8fbd5ae691da3d985a6862f26291b215"],["node_modules/nodemailer/lib/mailer/mail-message.js","77d515be2eb740e19cf8bc8e20f9df5b"],["node_modules/nodemailer/lib/mime-funcs/index.js","40993338257090b9f2a26cdc69afcd1f"],["node_modules/nodemailer/lib/mime-funcs/mime-types.js","a77dba1df3da8527489cdfd24cb35ef6"],["node_modules/nodemailer/lib/mime-node/index.js","ff58c09c50670980412492e64c22243d"],["node_modules/nodemailer/lib/mime-node/last-newline.js","d6ee6bb0cc470fee8b9a548135bd6f99"],["node_modules/nodemailer/lib/mime-node/le-unix.js","63ac1f5c124e798f6e3d7d85d1fcccc4"],["node_modules/nodemailer/lib/mime-node/le-windows.js","b867e5be8f22ce234ed30cc540aae09f"],["node_modules/nodemailer/lib/nodemailer.js","d9c84db463dde4fd38ba6d7cf19b0121"],["node_modules/nodemailer/lib/qp/index.js","b5a48866c2387417516f93ab00e09583"],["node_modules/nodemailer/lib/sendmail-transport/index.js","d3712df52099a85427cdc71ac6998bfd"],["node_modules/nodemailer/lib/ses-transport/index.js","f6e90ebd16d5258438da347a56ac99de"],["node_modules/nodemailer/lib/shared/index.js","43aedd42927e9f314929829c29e10e50"],["node_modules/nodemailer/lib/smtp-connection/data-stream.js","66418cfa5a3429dfb282dd7ce9fb8cd7"],["node_modules/nodemailer/lib/smtp-connection/http-proxy-client.js","b0b97e1f15a5b4bb43b8c01a910eedb4"],["node_modules/nodemailer/lib/smtp-connection/index.js","edf5d666d00cb397f7a1807923a743c0"],["node_modules/nodemailer/lib/smtp-pool/index.js","b2d4612b604e274edc6a36c3d3df6271"],["node_modules/nodemailer/lib/smtp-pool/pool-resource.js","7b08853781352a8a22041f915e21cc55"],["node_modules/nodemailer/lib/smtp-transport/index.js","c900ddbad957e7befe6b54448d73dc9b"],["node_modules/nodemailer/lib/stream-transport/index.js","995046cc617d69d9d67e3506bd8cd472"],["node_modules/nodemailer/lib/well-known/index.js","d674f634704423264d4ab126324f7ae5"],["node_modules/nodemailer/lib/well-known/services.json","1733505a4854a8ceaac6aa01cdf4b919"],["node_modules/nodemailer/lib/xoauth2/index.js","bb75ccb676df74ecf53d194adde703a8"],["node_modules/nodemailer/package.json","5c9337542461e6783c276bf6294aa4ac"],["node_modules/nodemailer/postinstall.js","7f021a16fc25cf21efe3ad36fec069a3"],["node_modules/on-finished/HISTORY.md","58ca467c6ca386064f1d5832c9c03b95"],["node_modules/on-finished/README.md","a3c532cc93a36f95dc4f19a0ecce50df"],["node_modules/on-finished/index.js","befdf51b0f78ec7b5e61fe648aa9df75"],["node_modules/on-finished/package.json","d08696acafdda765ba2fe878b287912a"],["node_modules/parseurl/HISTORY.md","0f7f38fa8d79e3bf70557ef4a655d412"],["node_modules/parseurl/README.md","59555697a7f93937af7f76fe5326fa0d"],["node_modules/parseurl/index.js","3750351b6b1aa7f3e65d5499ea45006e"],["node_modules/parseurl/package.json","5b1493bd775444f0994d0b1063db1900"],["node_modules/path-to-regexp/History.md","9f6ae1a279c6994a01a2ec44294cb607"],["node_modules/path-to-regexp/Readme.md","ec68cdeaf09933d8bf7a962c261aed81"],["node_modules/path-to-regexp/index.js","cb184302e8d26369e9c0392fa4c8d0cb"],["node_modules/path-to-regexp/package.json","19e58964462995e183c1cd8147a9b8a1"],["node_modules/proxy-addr/HISTORY.md","31445ae0eb7987b5487ca79f48114def"],["node_modules/proxy-addr/README.md","4bc9aa46f3afb34d0ab0c82cf244a21b"],["node_modules/proxy-addr/index.js","0ec33ea2ccb3a107c666a0b311f0e28e"],["node_modules/proxy-addr/package.json","9b004d1140b24f5ae3f21fcdba8951fc"],["node_modules/qs/CHANGELOG.md","cccf4ef4f2c9ef63008645c88cb73f82"],["node_modules/qs/README.md","0b7348e09324003311fba7c55e710f3c"],["node_modules/qs/dist/qs.js","61970fed53534892319f5d11d9ea3281"],["node_modules/qs/lib/formats.js","547b7a8b6b81236db977dcd1a548c9e8"],["node_modules/qs/lib/index.js","1459a9952f6b500d24818bb6e3e37368"],["node_modules/qs/lib/parse.js","e8d7396234ffb4c2772844eb86e52ce5"],["node_modules/qs/lib/stringify.js","98adbcd903baa8d38e70aa4f7384fc9f"],["node_modules/qs/lib/utils.js","9231894a95b9eb149920c7711a1ba6ba"],["node_modules/qs/package.json","8cdc396d5a17cd69a677dce0fe432492"],["node_modules/qs/test/index.js","16c8338cc83b85a875270f50ac1e4ed6"],["node_modules/qs/test/parse.js","fe15b5909c82c908b1b92d89d9695aae"],["node_modules/qs/test/stringify.js","7270ccf1e92b2ecd35b92d526e12526b"],["node_modules/qs/test/utils.js","6a378244218f385cdd20d6dc3b49b567"],["node_modules/range-parser/HISTORY.md","6fdb98eb13b0d3dd31f0ff795be6a52b"],["node_modules/range-parser/README.md","f4b241a4d3c3eac1d542759d73164083"],["node_modules/range-parser/index.js","e72576333d27d1c9b3901c4b9e597f27"],["node_modules/range-parser/package.json","89b7cc42d2831a8061361ca29545f837"],["node_modules/raw-body/HISTORY.md","941e8b9351551d9635b1f58eed0ea138"],["node_modules/raw-body/README.md","f0bbd92a99e34ac64ba86f1853eec8e0"],["node_modules/raw-body/index.d.ts","ee9c2c994cbbc6d6e96d6460488ae4f1"],["node_modules/raw-body/index.js","baf003bb8c6c6fc1cffe0d4afe787e21"],["node_modules/raw-body/package.json","4ff24de48d62683b79d442e1672cec63"],["node_modules/safe-buffer/README.md","570381ffb15269fa623a0b75e67eb63a"],["node_modules/safe-buffer/index.d.ts","372fa012d04e945ab97c27e000f8df78"],["node_modules/safe-buffer/index.js","b1622ff2944ba3f13a1cf6fbcf0f9e3f"],["node_modules/safe-buffer/package.json","bd7ef6f38f0ba20882d2601bd3ecaf11"],["node_modules/safer-buffer/Porting-Buffer.md","fcaa030e67b1d41e34571b602a343f72"],["node_modules/safer-buffer/Readme.md","b65f4b9724ff4c546ee7d4820e3c91dc"],["node_modules/safer-buffer/dangerous.js","7557e84f2db56a79916613053f9297d6"],["node_modules/safer-buffer/package.json","274d956f400350c9f6cf96d22cdda227"],["node_modules/safer-buffer/safer.js","b548fa7365e81d472250949a6b4ccc69"],["node_modules/safer-buffer/tests.js","373f9327325c35bb109038dc3b8e5a14"],["node_modules/send/HISTORY.md","4f5680a2dbc10cfc2dd07af3169bf474"],["node_modules/send/README.md","5793eb6b10ef0df065e01c8a0e5c35ba"],["node_modules/send/index.js","edf8ff5c77445e2bd6e21cfa4bf6deab"],["node_modules/send/node_modules/ms/index.js","52620b13382ca384cbe89011c4b16460"],["node_modules/send/node_modules/ms/license.md","fd56fd5f1860961dfa92d313167c37a6"],["node_modules/send/node_modules/ms/package.json","83b5d192dde33fb41adda4ce8b9eb521"],["node_modules/send/node_modules/ms/readme.md","b68b70253368a0c383cd67171269fb00"],["node_modules/send/package.json","3645cd9d22c03f5bc9b3dddfe795b348"],["node_modules/serve-static/HISTORY.md","42a409931684070e79db555331ce7178"],["node_modules/serve-static/README.md","82cd51b8e01130ac88fe4cd9c9ea972d"],["node_modules/serve-static/index.js","3707f8d6ee2c6d88ffab23c0c4f1509b"],["node_modules/serve-static/package.json","d9c0bf270eb80f5b87045c69b8d6c79b"],["node_modules/setprototypeof/README.md","5fffc64ea56408057a5ccd7f84f8b050"],["node_modules/setprototypeof/index.d.ts","9b4107177bcdb4f9438d31bf446f629f"],["node_modules/setprototypeof/index.js","dd15d377665805ff7251e0a0f52fb837"],["node_modules/setprototypeof/package.json","1541c2199513a8830073d21fe710bb0b"],["node_modules/setprototypeof/test/index.js","057b874f30e15981324966ff9294dbe5"],["node_modules/statuses/HISTORY.md","59a03d6bdd1d4de4888fae4450f8bd61"],["node_modules/statuses/README.md","b24bdc13faa92fbcf1fe2cf6a63d098a"],["node_modules/statuses/codes.json","24a60aa6f42d759204b75dc8ecc0ecf4"],["node_modules/statuses/index.js","93ef82ab57885976022f1b594741dc19"],["node_modules/statuses/package.json","ce09e65d18aa8425eac89e41fde1837a"],["node_modules/toidentifier/README.md","fd789409142ed442ccec71e57b173376"],["node_modules/toidentifier/index.js","279de9b706fd68a63d92cb4bc364c772"],["node_modules/toidentifier/package.json","2ecc7acf5b134a92fbc0b0999a02f84d"],["node_modules/type-is/HISTORY.md","6025a974d281159ed5421301b58fd126"],["node_modules/type-is/README.md","2683527a9b2faadd364a0eab9cc00935"],["node_modules/type-is/index.js","f9aa3afdc332adae59aa21d31090582d"],["node_modules/type-is/package.json","ffa244d8a6f745a081a0cdde026879c9"],["node_modules/unpipe/HISTORY.md","3e523df8ac60d8c162c57521955bda8c"],["node_modules/unpipe/README.md","b242ac151ac9750bf7ca20fe02dcf7b0"],["node_modules/unpipe/index.js","377f0c4bddbbd7e73b32a53e687df342"],["node_modules/unpipe/package.json","f8318a554ed98c6a030942e9c14aaac8"],["node_modules/utils-merge/README.md","9e6a49a7623199d699f595777116296f"],["node_modules/utils-merge/index.js","20d03f8bf4486091c44f17a97cbb6c24"],["node_modules/utils-merge/package.json","0230ade39b9c19f5fcc29ed02dff4afe"],["node_modules/vary/HISTORY.md","01fb6033779e4f75d95e327672ebd572"],["node_modules/vary/README.md","d7add56e89e476e09f62ad4a926f1f7a"],["node_modules/vary/index.js","8217c2d942ee5bf6866c92662515d975"],["node_modules/vary/package.json","3577fc17c1b964af7cfe2c17c73f84f3"],["package-lock.json","6e3b3ca01f3f682d7ea4cb0020909b2f"],["package.json","8d028ae8e5f13b42bc8387de7cd7679a"],["public/RenderPage.js","3c4abea9438e5d23680d8dc5779d2937"],["public/images/aboutMenu.jpeg","c275557736d0d090301a7a445d3879fc"],["public/images/cateringScreenshot.png","55aecfb5d704fd5148545b18e724d27e"],["public/images/contactMenu.jpeg","0748c640b87febcd1f40a793672c1312"],["public/images/festivalScreenshot.png","eeefcff44e928f8087bb3eb18a6ff6f5"],["public/images/githubMenu.png","e8676d56fa760297708cf3e1acfc077e"],["public/images/profilePic.jpeg","322e312748c9ac7638d4900de7b7070c"],["public/images/projectsMenu.jpeg","5e757e4f3f50787ed6bac6476b2516ae"],["public/images/toolsMenu.jpeg","27bf2d27a483a473d5e5445c7e629ae1"],["public/index.html","d26277e0267949333c4ba3eb3e0d25df"],["public/projects.html","2c384903b2ab47ac1b4faade1dbd3b2f"],["public/projects/algorithms/index.html","78fe94e6d7299d68fc65aafaefdf7393"],["public/projects/algorithms/script.js","296608d73ada1cb08de8ca179e4cd915"],["public/projects/algorithms/style.css","88f2cc4bdf3a810790c4102d67374c1d"],["public/projects/algorithms/style.css.map","8591abdf9164b555904d2298f57fd4cc"],["public/projects/algorithms/style.scss","483083ea53b294191380a4091fd4ce0e"],["public/projects/catering_template/index.html","1a61e4c5f8557b1c753aaef1530e8fc2"],["public/projects/catering_template/style.css","4f1361c2c0e479edac49edded0e3d9e4"],["public/projects/catering_template/style.css.map","598b6ba0499b12fe685e388653303c03"],["public/projects/catering_template/style.scss","066a6dbdd7a6f4cdbb2b4dfb246e608b"],["public/projects/festival_template/images/Ellipse.png","a5a08aefe58d4c50bcd5d4d19aa95e2d"],["public/projects/festival_template/images/audience.jpg","d440fc89fb1ddf734069eddd7326ebda"],["public/projects/festival_template/images/festival_logo.png","3b3ce05ced18abb8eb2fcdf183566935"],["public/projects/festival_template/images/festival_logo.svg","8cebe3c085339a49713dd54e1749a4d9"],["public/projects/festival_template/images/hat_girl.jpg","f1180f6d75a65a6130cd80175f88bb31"],["public/projects/festival_template/images/logo.png","a5a08aefe58d4c50bcd5d4d19aa95e2d"],["public/projects/festival_template/index.html","e56e439cbc4f3c1df7da512c4c95eef3"],["public/projects/festival_template/scripts/script.js","5a581717a384e9c76d64e91ed9c2fe69"],["public/projects/festival_template/styles/style.css","bce98a171703306480fb7798a9b825ed"],["public/projects/festival_template/styles/style.css.map","8bcff5ee402c4953a9cfab8cf31a353c"],["public/projects/festival_template/styles/style.scss","a4b928d38b23eeceed3e0bf4a141390c"],["public/projects/store_template/app.js","d48f293834f979477c0208f334b7424c"],["public/projects/store_template/images/blueJeansRedFlower.jpg","df0e15a6532c22768d7d699a76cc8a1a"],["public/projects/store_template/index.html","b0fecb26c01c654f74584be316ee548e"],["public/projects/store_template/style.css","6a6d3d2f255269ef0d7a8fb3d63b3a66"],["public/projects/store_template/style.css.map","bfcf869fc572c4a6deb3f6a72ccc6c06"],["public/projects/store_template/style.scss","a22dae59b693e421d26034e12c59a81b"],["public/styles/_about.scss","eb150f37108aa56dff10a996c6255781"],["public/styles/_animations.scss","6dbe400ae5f8e876c18971ab8b1b9c7e"],["public/styles/_base.scss","7f3ca30b89fd0999f905a66fa4948bac"],["public/styles/_contact.scss","3736f23b3d335c3487e9c3ba28e4e0a4"],["public/styles/_footer.scss","c95e0e46185cdd3e7229188d71de5654"],["public/styles/_header.scss","f69ed1aaf4ff30a8fc5b83266a078a5a"],["public/styles/_home.scss","3c1690fe293c3933ab68be23152fe437"],["public/styles/_mediaqueries.scss","e7e6ebe723abeaa151be46f1e25c91f5"],["public/styles/_projects.scss","68e45c6561f3f6d73395228c9f14e7bb"],["public/styles/_sectionOpacity.scss","a20804b26755057d10a7939aa29afa59"],["public/styles/_tools.scss","f9659e65b963bf16d6d692d314e23434"],["public/styles/main.css","f6f530f02280b6e2e3bd0a49e7623ac4"],["public/styles/main.css.map","4ab690664b3ac3d5b2860477538f5537"],["public/styles/main.scss","2334d8ade9124d6ca04d9b8c375bdb59"],["serviceWorkers.js","cbea7ea97c28376dea5e0e8338dc325f"]];
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







