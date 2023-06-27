(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"e1b5a7d5fe55f53aa605693b6690b663","url":"__docusaurus/debug.html"},{"revision":"b74d2ee233db2b8ac6a597ef535f761b","url":"__docusaurus/debug/config.html"},{"revision":"11f1a20fb5273d48e01ec2c3b8301b2e","url":"__docusaurus/debug/content.html"},{"revision":"d0f45bb1602325b0ca00870289fb17c9","url":"__docusaurus/debug/globalData.html"},{"revision":"7b161e09688699033cf7af9975443468","url":"__docusaurus/debug/metadata.html"},{"revision":"5b92cfbe64fef237605c691fd2825ef2","url":"__docusaurus/debug/registry.html"},{"revision":"603549c01b913ba9d893859aabf0d67a","url":"__docusaurus/debug/routes.html"},{"revision":"637f90c91beeda1151ebcdeb446cf634","url":"404.html"},{"revision":"3fef5f1322c1dd93f29f504362c6ca68","url":"assets/css/styles.f80c0505.css"},{"revision":"9191671ae4d6983065d80eddb450a1a8","url":"assets/js/079d3d6f.276cb1c8.js"},{"revision":"4d414830a6291d10377aad4c1929353c","url":"assets/js/11414a6c.46975a6a.js"},{"revision":"cb6200a657af2e9fcc7d300b77acdef0","url":"assets/js/131.3892a3f6.js"},{"revision":"1434b276abf68f0aab426e1a260e3ddb","url":"assets/js/17896441.b6574f66.js"},{"revision":"a22bd6d9f3f45cd3df12adf2d412a849","url":"assets/js/17d7c693.26f5af01.js"},{"revision":"e543543fa24d29c46a662d51cce6eab7","url":"assets/js/1830ac95.22583380.js"},{"revision":"09f1517b11475aec3ab53b7a6a7335f9","url":"assets/js/1a4e3797.9b06412a.js"},{"revision":"a35684bce72ece82f4985abec0a98887","url":"assets/js/1df93b7f.9c7881b5.js"},{"revision":"62711a70a60276391181085578b877ea","url":"assets/js/22fb323b.ac50b5b2.js"},{"revision":"24328f1ba9d1d36e2087d46a14bf52f5","url":"assets/js/239e4530.a8686870.js"},{"revision":"d435f071496041f24baa9432c0679b3c","url":"assets/js/23abe487.c5a89310.js"},{"revision":"1038d05ab8444b2975f3474270611c8d","url":"assets/js/245.8e8e5517.js"},{"revision":"a49d5e0b7069fb87d6f02e96e4aea8bd","url":"assets/js/246f2c6f.51be2e7f.js"},{"revision":"dbef08f12ffe2b5b9c2be236297f6356","url":"assets/js/3419256c.e73ab5b0.js"},{"revision":"2202baaff2708258990f78495dd5b09d","url":"assets/js/3bf32a50.845632d0.js"},{"revision":"5e7443fc7c600fce343593f485ad3ea3","url":"assets/js/415.3ad770d6.js"},{"revision":"e65dac015442222b90a5c7f0401c7dc0","url":"assets/js/5e95c892.7ca4372c.js"},{"revision":"ee47a8c858358829bc2f643364cecad9","url":"assets/js/63347231.d3ad5c5b.js"},{"revision":"d62fafd1b1f9472e57b032523524fb62","url":"assets/js/6794d4cd.46fdfc00.js"},{"revision":"8aa9aeb859ec7781870141e7c9ba1c9f","url":"assets/js/68e633d4.6e1e780f.js"},{"revision":"104d8c01349241a6e6a38455b953477b","url":"assets/js/6ae6d7e2.ea17a36e.js"},{"revision":"072311ebf2f5d0c61e133d0555e048b6","url":"assets/js/724.ad86842d.js"},{"revision":"b63f7df451b67b07804f5e0166fdf8c5","url":"assets/js/735.7f8e86f7.js"},{"revision":"bc4f426a7450811e75a4991f2b4bab98","url":"assets/js/7b15584e.610667c2.js"},{"revision":"2a9046a20fcd8a5aced899aadcfc0d46","url":"assets/js/815d91bf.6aae15ba.js"},{"revision":"ce1dfc7bef07a7e4e3c894652d02c7b2","url":"assets/js/890.71178387.js"},{"revision":"fdc623c585635537ad9b622690e8c607","url":"assets/js/891.a26597e4.js"},{"revision":"ad1ec1704b52aa5e683603cbcc2132fd","url":"assets/js/894.662af41b.js"},{"revision":"0302bcc0594a5ca60fae94d1a4988cf6","url":"assets/js/9426fbec.89e0099f.js"},{"revision":"ce038856882a15c00272489ff3a2383d","url":"assets/js/945.e8a8f394.js"},{"revision":"d36c9556ea6d3f29cda323d6d9dc0528","url":"assets/js/946bd85a.b0055cff.js"},{"revision":"26d7776bf9acc339324c10e13af89ea7","url":"assets/js/9855fc61.e9f5fc20.js"},{"revision":"ee5baaba9d48381f2ec74f525802c68a","url":"assets/js/997e0a32.04093500.js"},{"revision":"0cd04b168b173759bc9982c337a8824b","url":"assets/js/9a28e545.bdf10844.js"},{"revision":"12de394dc8b8440d884d53e5fd79e26c","url":"assets/js/9c2ba9b4.5d42585c.js"},{"revision":"65ae80afd8360814f0d4088b1183330c","url":"assets/js/a3cdfa84.f0d21b81.js"},{"revision":"dde90885aaf8d95ce7309df5df9cceba","url":"assets/js/a79e43b0.f60bc770.js"},{"revision":"e33ff427227d9cf5cc60d91ceae53068","url":"assets/js/a7bd4aaa.1cce7579.js"},{"revision":"c7b21cdb1438a09a4b05543af5fc7aae","url":"assets/js/a94703ab.ed4f6a92.js"},{"revision":"d31e4e721f27ddf06dd03d131f2f3f2a","url":"assets/js/ac2e3cfc.8536ded9.js"},{"revision":"e21288421f25aa6e1c9cdc6972a5bd6e","url":"assets/js/b21f6e35.3d7b43dd.js"},{"revision":"2915f518b830c1a8c7f8b4c6de757aef","url":"assets/js/ba8b3534.8b8cf511.js"},{"revision":"e82637473f8b859f4200619fb6c59309","url":"assets/js/cceebf66.c78ee17b.js"},{"revision":"16d6490f9131d4e921faee911974b611","url":"assets/js/d0b01873.3b434cb2.js"},{"revision":"049692a38b56d6a32b5fee8ac32cec90","url":"assets/js/da4d365c.0f942374.js"},{"revision":"cc90a1c6b8fd36a4fafd43118ce09c9d","url":"assets/js/e2237753.2ec4d0b8.js"},{"revision":"4944a2425a26aada170223c99f64df77","url":"assets/js/ede3a018.95213509.js"},{"revision":"4341b184ee11cf5c168d1fdd454542a0","url":"assets/js/main.d66098ab.js"},{"revision":"f2c893bc7752ae03ec27acfde1190431","url":"assets/js/runtime~main.8b94c698.js"},{"revision":"37c3ad9e8d4d559dca21dafd1887d518","url":"index.html"},{"revision":"c2f896b2500d059a3383637cf5c49159","url":"manifest.json"},{"revision":"3abd069b73999758ba4ec1cc9217bef3","url":"nameshift.html"},{"revision":"a1f2d57a9bac07fe58446e272c5be4e3","url":"nameshift/admin.html"},{"revision":"f91daa686052f0568e9a34b771cb4a85","url":"nameshift/admin/configuration.html"},{"revision":"2e5d79f3d4ba85c9ab85c05dde177ea2","url":"nameshift/admin/configuration/commands-and-permissions.html"},{"revision":"bedf879b775691d2a3f0c5a18e2204ae","url":"nameshift/admin/configuration/config.html"},{"revision":"74405374ec3ec1011c719e258017b952","url":"nameshift/admin/configuration/localization.html"},{"revision":"8cc29440b59a30a7e779e5b02a9ae51b","url":"nameshift/admin/getting-started.html"},{"revision":"fc382e09920d52e017ea75118d9f4e64","url":"nameshift/usage.html"},{"revision":"a1eb6fe5de9cf80929197c25f1d75bb1","url":"nameshift/usage/tips-and-tricks.html"},{"revision":"080bc5533007382223437c3db70edfef","url":"rollbound.html"},{"revision":"4f3f286232f3749c1098460ea6ac1f44","url":"rollbound/admin.html"},{"revision":"e04b7f11c6e3a6ac04c25b0b5ef900fd","url":"rollbound/admin/configuration.html"},{"revision":"6577c2673c9a5f138bcc604b407ae583","url":"rollbound/admin/configuration/commands-and-permissions.html"},{"revision":"41e699b5520e0b26a0b0f0f07e1a9c9f","url":"rollbound/admin/configuration/config.html"},{"revision":"5ae381c83ba7a3fb3f4d1f533760bc3f","url":"rollbound/admin/configuration/localization.html"},{"revision":"1971c50259d443c9a1ba457cc78c6017","url":"rollbound/admin/getting-started.html"},{"revision":"743bd0eed0053f9f561de18eaaccb41b","url":"rollbound/usage.html"},{"revision":"f7ecd00ed27b63862b9deb05630caecd","url":"rollbound/usage/rolling-dice.html"},{"revision":"e9268be46e14564d231e28e11ebb4ed2","url":"search.html"},{"revision":"b3b45c48bd2d9948a5eca27bcdb3925a","url":"favicon.ico"},{"revision":"2848fbd92ae59d66d0657c2d0c707bed","url":"img/lumina-collection-long-42.png"},{"revision":"514e9c40556455aa83173f38a1470c15","url":"img/lumina-collection-long.png"},{"revision":"f405a913dc07bc9866c446fecc0a293b","url":"img/lumina-collection.png"},{"revision":"62dbb62edfb73578956170bab16e1102","url":"assets/fonts/jetbrains-mono-all-400-normal-2346733ac7062d6402c0c859ccbf227e.woff"},{"revision":"73e0466a4982d9cc878c4880554d7cbf","url":"assets/fonts/jetbrains-mono-latin-400-normal-d0b41bd1d599bc0a52b733fd39c8cc06.woff2"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();