// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"80cCk":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1SICI":[function(require,module,exports,__globalThis) {
// Import styles
var _mainScss = require("../styles/main.scss");
// Import Shoelace components
var _lightCss = require("@shoelace-style/shoelace/dist/themes/light.css");
var _cardJs = require("@shoelace-style/shoelace/dist/components/card/card.js");
var _buttonJs = require("@shoelace-style/shoelace/dist/components/button/button.js");
var _alertJs = require("@shoelace-style/shoelace/dist/components/alert/alert.js");
var _iconJs = require("@shoelace-style/shoelace/dist/components/icon/icon.js");
var _drawerJs = require("@shoelace-style/shoelace/dist/components/drawer/drawer.js");
var _dropdownJs = require("@shoelace-style/shoelace/dist/components/dropdown/dropdown.js");
var _menuJs = require("@shoelace-style/shoelace/dist/components/menu/menu.js");
var _menuItemJs = require("@shoelace-style/shoelace/dist/components/menu-item/menu-item.js");
var _dividerJs = require("@shoelace-style/shoelace/dist/components/divider/divider.js");
var _tooltipJs = require("@shoelace-style/shoelace/dist/components/tooltip/tooltip.js");
var _detailsJs = require("@shoelace-style/shoelace/dist/components/details/details.js");
var _dialogJs = require("@shoelace-style/shoelace/dist/components/dialog/dialog.js");
// Set the base path for Shoelace assets
var _basePath = require("@shoelace-style/shoelace/dist/utilities/base-path");
// Update the base path to use the CDN with the correct version
(0, _basePath.setBasePath)('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/dist/');
// Your custom JavaScript code can go here 
document.addEventListener('DOMContentLoaded', ()=>{
    const menuToggle = document.querySelector('.menu-toggle');
    const drawer = document.querySelector('.mobile-menu');
    menuToggle?.addEventListener('click', ()=>{
        drawer.show();
    });
    // Handle Associate Business submenu in both desktop and mobile
    const businessItems = document.querySelectorAll('sl-menu-item:has(.fa-network-wired)');
    const submenus = document.querySelectorAll('.submenu');
    // Initialize all submenus as hidden
    submenus.forEach((submenu)=>{
        submenu.style.display = 'none';
    });
    // Add click handlers to all business menu items
    businessItems.forEach((item, index)=>{
        item?.addEventListener('click', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            // Toggle only the submenu associated with this item
            const submenu = submenus[index];
            submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
        });
    });
    // Prevent all submenu items from closing their parent dropdowns
    submenus.forEach((submenu)=>{
        submenu?.addEventListener('click', (e)=>{
            e.stopPropagation();
        });
    });
    // Commission drawer functionality
    const commissionDrawer = document.querySelector('.commission-drawer');
    const dateButton = document.querySelector('.week-total .date');
    const downloadButton = commissionDrawer.querySelector('sl-button');
    dateButton?.addEventListener('click', ()=>{
        commissionDrawer.show();
    });
    downloadButton?.addEventListener('click', ()=>{
        window.open('src/images/CommissionStatement-example.pdf', '_blank');
    });
    // Calendar dialog functionality
    const calendarButton = document.querySelector('.commission-calendar');
    const calendarDialog = document.querySelector('.calendar-dialog');
    calendarButton?.addEventListener('click', ()=>{
        calendarDialog.show();
    });
});
// Initialize Bootstrap tooltips
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
// Initialize dropdowns
$(document).ready(function() {
    // Initialize all dropdowns
    $('[data-toggle="dropdown"]').dropdown();
    // Initialize all tooltips with specific options
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        html: true,
        container: 'body' // Attach tooltips to body to avoid positioning issues
    });
    // Handle submenu on hover for desktop
    if (window.innerWidth >= 992) $('.dropdown-submenu').hover(function() {
        $(this).find('.dropdown-menu').first().show();
    }, function() {
        $(this).find('.dropdown-menu').first().hide();
    });
    // Calendar modal trigger
    $('.commission-calendar').click(function() {
        $('#calendarModal').modal('show');
    });
    // Commission Statement PDF download
    $('.download-pdf').click(function() {
        window.open('src/images/CommissionStatement-example.pdf', '_blank');
    });
});

},{"../styles/main.scss":"bo7w8","@shoelace-style/shoelace/dist/themes/light.css":"hiALB","@shoelace-style/shoelace/dist/components/card/card.js":"c9XNO","@shoelace-style/shoelace/dist/components/button/button.js":"6uWTQ","@shoelace-style/shoelace/dist/components/alert/alert.js":"aCuuT","@shoelace-style/shoelace/dist/components/icon/icon.js":"kUfDQ","@shoelace-style/shoelace/dist/components/drawer/drawer.js":"gxcgP","@shoelace-style/shoelace/dist/components/dropdown/dropdown.js":"hbAhG","@shoelace-style/shoelace/dist/components/menu/menu.js":"dQ6sI","@shoelace-style/shoelace/dist/components/menu-item/menu-item.js":"4hH87","@shoelace-style/shoelace/dist/components/divider/divider.js":"3qRfo","@shoelace-style/shoelace/dist/components/tooltip/tooltip.js":"79blD","@shoelace-style/shoelace/dist/components/details/details.js":"01G2w","@shoelace-style/shoelace/dist/components/dialog/dialog.js":"ioGKp","@shoelace-style/shoelace/dist/utilities/base-path":"9F8u7"}],"bo7w8":[function() {},{}],"hiALB":[function() {},{}],"c9XNO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkJYMZWSP5Js.card_default));
var _chunkJYMZWSP5Js = require("../../chunks/chunk.JYMZWSP5.js");
var _chunkYUOHZV33Js = require("../../chunks/chunk.YUOHZV33.js");
var _chunkA5D6FTFYJs = require("../../chunks/chunk.A5D6FTFY.js");
var _chunkNYIIDP5NJs = require("../../chunks/chunk.NYIIDP5N.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.JYMZWSP5.js":"hSlmM","../../chunks/chunk.YUOHZV33.js":"1hnlS","../../chunks/chunk.A5D6FTFY.js":"3drv9","../../chunks/chunk.NYIIDP5N.js":"khHuM","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSlmM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "card_default", ()=>card_default);
var _chunkYUOHZV33Js = require("./chunk.YUOHZV33.js");
// src/components/card/card.ts
var card_default = (0, _chunkYUOHZV33Js.SlCard);
(0, _chunkYUOHZV33Js.SlCard).define("sl-card");

},{"./chunk.YUOHZV33.js":"1hnlS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hnlS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlCard", ()=>SlCard);
var _chunkA5D6FTFYJs = require("./chunk.A5D6FTFY.js");
var _chunkNYIIDP5NJs = require("./chunk.NYIIDP5N.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
// src/components/card/card.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var SlCard = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.hasSlotController = new (0, _chunkNYIIDP5NJs.HasSlotController)(this, "footer", "header", "image");
    }
    render() {
        return (0, _lit.html)`
      <div
        part="base"
        class=${(0, _classMapJs.classMap)({
            card: true,
            "card--has-footer": this.hasSlotController.test("footer"),
            "card--has-image": this.hasSlotController.test("image"),
            "card--has-header": this.hasSlotController.test("header")
        })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
    }
};
SlCard.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkA5D6FTFYJs.card_styles_default)
];

},{"./chunk.A5D6FTFY.js":"3drv9","./chunk.NYIIDP5N.js":"khHuM","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3drv9":[function(require,module,exports,__globalThis) {
// src/components/card/card.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "card_styles_default", ()=>card_styles_default);
var _lit = require("lit");
var card_styles_default = (0, _lit.css)`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zYfj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"cCqPg","lit-html":"3ewny","lit-element/lit-element.js":"g7f9T","lit-html/is-server.js":"lBrWK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCqPg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>b);
parcelHelpers.export(exports, "defaultConverter", ()=>u);
parcelHelpers.export(exports, "notEqual", ()=>f);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: i, defineProperty: e, getOwnPropertyDescriptor: r, getOwnPropertyNames: h, getOwnPropertySymbols: o, getPrototypeOf: n } = Object, a = globalThis, c = a.trustedTypes, l = c ? c.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t, s)=>t, u = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, f = (t, s)=>!i(t, s), y = {
    attribute: !0,
    type: String,
    converter: u,
    reflect: !1,
    hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap;
class b extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? y;
    }
    static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t = n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
            const t = this.properties, s = [
                ...h(t),
                ...o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, _cssTagJs.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, _cssTagJs.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? f)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
b.elementStyles = [], b.shadowRootOptions = {
    mode: "open"
}, b[d("elementProperties")] = new Map, b[d("finalized")] = new Map, p?.({
    ReactiveElement: b
}), (a.reactiveElementVersions ??= []).push("2.0.4");

},{"./css-tag.js":"7Vkt9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Vkt9":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>n);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = globalThis, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), o = new WeakMap;
class n {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new n("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new n(o, t, s);
}, S = (s, o)=>{
    if (e) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3ewny":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "mathml", ()=>w);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>E);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r.createTreeWalker(r, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = V(t, s);
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        C.currentNode = e;
        let h = C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = C.nextNode(), o++);
        }
        return C.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === E ? void 0 : t;
    }
}
class I extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== E);
    }
}
class L extends k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = S(this, t, i, 0) ?? E) === T) return;
        const s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const Z = {
    M: e,
    P: h,
    A: o,
    C: 1,
    L: V,
    R: M,
    D: u,
    V: S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
}, j = t.litHtmlPolyfillSupport;
j?.(N, R), (t.litHtmlVersions ??= []).push("3.2.1");
const B = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7f9T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>o);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class r extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
r._$litElement$ = !0, r["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: r
});
const i = globalThis.litElementPolyfillSupport;
i?.({
    LitElement: r
});
const o = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");

},{"@lit/reactive-element":"cCqPg","lit-html":"3ewny","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBrWK":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khHuM":[function(require,module,exports,__globalThis) {
// src/internal/slot.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HasSlotController", ()=>HasSlotController);
parcelHelpers.export(exports, "getTextContent", ()=>getTextContent);
var HasSlotController = class {
    constructor(host, ...slotNames){
        this.slotNames = [];
        this.handleSlotChange = (event)=>{
            const slot = event.target;
            if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) this.host.requestUpdate();
        };
        (this.host = host).addController(this);
        this.slotNames = slotNames;
    }
    hasDefaultSlot() {
        return [
            ...this.host.childNodes
        ].some((node)=>{
            if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") return true;
            if (node.nodeType === node.ELEMENT_NODE) {
                const el = node;
                const tagName = el.tagName.toLowerCase();
                if (tagName === "sl-visually-hidden") return false;
                if (!el.hasAttribute("slot")) return true;
            }
            return false;
        });
    }
    hasNamedSlot(name) {
        return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
        return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
        this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
        this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
};
function getTextContent(slot) {
    if (!slot) return "";
    const nodes = slot.assignedNodes({
        flatten: true
    });
    let text = "";
    [
        ...nodes
    ].forEach((node)=>{
        if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    });
    return text;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gWPkV":[function(require,module,exports,__globalThis) {
// src/styles/component.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component_styles_default", ()=>component_styles_default);
var _lit = require("lit");
var component_styles_default = (0, _lit.css)`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwDBt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShoelaceElement", ()=>ShoelaceElement);
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/internal/shoelace-element.ts
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var _hasRecordedInitialProperties;
var ShoelaceElement = class extends (0, _lit.LitElement) {
    constructor(){
        super();
        (0, _chunkKAW7D32OJs.__privateAdd)(this, _hasRecordedInitialProperties, false);
        // Store the constructor value of all `static properties = {}`
        this.initialReflectedProperties = /* @__PURE__ */ new Map();
        Object.entries(this.constructor.dependencies).forEach(([name, component])=>{
            this.constructor.define(name, component);
        });
    }
    emit(name, options) {
        const event = new CustomEvent(name, (0, _chunkKAW7D32OJs.__spreadValues)({
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: {}
        }, options));
        this.dispatchEvent(event);
        return event;
    }
    /* eslint-enable */ static define(name, elementConstructor = this, options = {}) {
        const currentlyRegisteredConstructor = customElements.get(name);
        if (!currentlyRegisteredConstructor) {
            try {
                customElements.define(name, elementConstructor, options);
            } catch (_err) {
                customElements.define(name, class extends elementConstructor {
                }, options);
            }
            return;
        }
        let newVersion = " (unknown version)";
        let existingVersion = newVersion;
        if ("version" in elementConstructor && elementConstructor.version) newVersion = " v" + elementConstructor.version;
        if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) existingVersion = " v" + currentlyRegisteredConstructor.version;
        if (newVersion && existingVersion && newVersion === existingVersion) return;
        console.warn(`Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (!(0, _chunkKAW7D32OJs.__privateGet)(this, _hasRecordedInitialProperties)) {
            this.constructor.elementProperties.forEach((obj, prop)=>{
                if (obj.reflect && this[prop] != null) this.initialReflectedProperties.set(prop, this[prop]);
            });
            (0, _chunkKAW7D32OJs.__privateSet)(this, _hasRecordedInitialProperties, true);
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        this.initialReflectedProperties.forEach((value, prop)=>{
            if (changedProperties.has(prop) && this[prop] == null) this[prop] = value;
        });
    }
};
_hasRecordedInitialProperties = new WeakMap();
/* eslint-disable */ // @ts-expect-error This is auto-injected at build time.
ShoelaceElement.version = "2.20.0";
ShoelaceElement.dependencies = {};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], ShoelaceElement.prototype, "dir", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], ShoelaceElement.prototype, "lang", 2);

},{"./chunk.KAW7D32O.js":"aRkYM","lit":"2zYfj","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRkYM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__spreadValues", ()=>__spreadValues);
parcelHelpers.export(exports, "__spreadProps", ()=>__spreadProps);
parcelHelpers.export(exports, "__decorateClass", ()=>__decorateClass);
parcelHelpers.export(exports, "__privateGet", ()=>__privateGet);
parcelHelpers.export(exports, "__privateAdd", ()=>__privateAdd);
parcelHelpers.export(exports, "__privateSet", ()=>__privateSet);
parcelHelpers.export(exports, "__yieldStar", ()=>__yieldStar);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol)=>(symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(b))if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __decorateClass = (decorators, target, key, kind)=>{
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for(var i = decorators.length - 1, decorator; i >= 0; i--)if (decorator = decorators[i]) result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
};
var __yieldStar = (value)=>{
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
        obj = value[__knownSymbol("iterator")]();
        method = (k)=>it[k] = (x)=>obj[k](x);
    } else {
        obj = obj.call(value);
        method = (k)=>it[k] = (v)=>{
                if (isAwait) {
                    isAwait = false;
                    if (k === "throw") throw v;
                    return v;
                }
                isAwait = true;
                return {
                    done: false,
                    value: new __await(new Promise((resolve)=>{
                        var x = obj[k](v);
                        if (!(x instanceof Object)) __typeError("Object expected");
                        resolve(x);
                    }), 1)
                };
            };
    }
    return it[__knownSymbol("iterator")] = ()=>it, method("next"), "throw" in obj ? method("throw") : it.throw = (x)=>{
        throw x;
    }, "return" in obj && method("return"), it;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wM0N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"4RG0h","@lit/reactive-element/decorators/property.js":"1XAP1","@lit/reactive-element/decorators/state.js":"halke","@lit/reactive-element/decorators/event-options.js":"j73pL","@lit/reactive-element/decorators/query.js":"3vtii","@lit/reactive-element/decorators/query-all.js":"9EF6I","@lit/reactive-element/decorators/query-async.js":"1ZFWV","@lit/reactive-element/decorators/query-assigned-elements.js":"jmIlp","@lit/reactive-element/decorators/query-assigned-nodes.js":"eQJVB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RG0h":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>t);
const t = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XAP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>n);
parcelHelpers.export(exports, "standardProperty", ()=>r);
var _reactiveElementJs = require("../reactive-element.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = {
    attribute: !0,
    type: String,
    converter: (0, _reactiveElementJs.defaultConverter),
    reflect: !1,
    hasChanged: (0, _reactiveElementJs.notEqual)
}, r = (t = o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.P(o, void 0, t), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function n(t) {
    return (e, o)=>"object" == typeof o ? r(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? {
                ...t,
                wrapped: !0
            } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}

},{"../reactive-element.js":"cCqPg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"halke":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>r);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function r(r) {
    return (0, _propertyJs.property)({
        ...r,
        state: !0,
        attribute: !1
    });
}

},{"./property.js":"1XAP1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j73pL":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>t);
function t(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vtii":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, _baseJs.desc)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, _baseJs.desc)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}

},{"./base.js":"1VOOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VOOo":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "desc", ()=>e);
const e = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9EF6I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>r);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let e;
function r(r) {
    return (n, o)=>(0, _baseJs.desc)(n, o, {
            get () {
                return (this.renderRoot ?? (e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}

},{"./base.js":"1VOOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZFWV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>r);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function r(r) {
    return (n, e)=>(0, _baseJs.desc)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}

},{"./base.js":"1VOOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jmIlp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>o);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, _baseJs.desc)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}

},{"./base.js":"1VOOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQJVB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>n);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function n(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, _baseJs.desc)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}

},{"./base.js":"1VOOo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0SlA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classMapJs = require("lit-html/directives/class-map.js");
parcelHelpers.exportAll(_classMapJs, exports);

},{"lit-html/directives/class-map.js":"8D5uQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8D5uQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classMap", ()=>e);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(t){
        if (super(t), t.type !== (0, _directiveJs.PartType).ATTRIBUTE || "class" !== t.name || t.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((s)=>t[s]).join(" ") + " ";
    }
    update(s, [i]) {
        if (void 0 === this.st) {
            this.st = new Set, void 0 !== s.strings && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((t)=>"" !== t)));
            for(const t in i)i[t] && !this.nt?.has(t) && this.st.add(t);
            return this.render(i);
        }
        const r = s.element.classList;
        for (const t of this.st)t in i || (r.remove(t), this.st.delete(t));
        for(const t in i){
            const s = !!i[t];
            s === this.st.has(t) || this.nt?.has(t) || (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
        }
        return 0, _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"3ewny","../directive.js":"34xmO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34xmO":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uWTQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkUG6RICORJs.button_default));
var _chunkUG6RICORJs = require("../../chunks/chunk.UG6RICOR.js");
var _chunkKEXJVXAUJs = require("../../chunks/chunk.KEXJVXAU.js");
var _chunkMK453YANJs = require("../../chunks/chunk.MK453YAN.js");
var _chunk7DUCI5S4Js = require("../../chunks/chunk.7DUCI5S4.js");
var _chunk3RPBFEDEJs = require("../../chunks/chunk.3RPBFEDE.js");
var _chunkMAQXLKQ7Js = require("../../chunks/chunk.MAQXLKQ7.js");
var _chunkNYIIDP5NJs = require("../../chunks/chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunk4GJTAPTWJs = require("../../chunks/chunk.4GJTAPTW.js");
var _chunkZL53POKZJs = require("../../chunks/chunk.ZL53POKZ.js");
var _chunkP7ZG6EMRJs = require("../../chunks/chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("../../chunks/chunk.3TFKS637.js");
var _chunkQLXRCYS4Js = require("../../chunks/chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunk3Y6SB6QSJs = require("../../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.UG6RICOR.js":"kSdLF","../../chunks/chunk.KEXJVXAU.js":"aWD0t","../../chunks/chunk.MK453YAN.js":"hDVQj","../../chunks/chunk.7DUCI5S4.js":"jFVVI","../../chunks/chunk.3RPBFEDE.js":"3YV8b","../../chunks/chunk.MAQXLKQ7.js":"4ZJTA","../../chunks/chunk.NYIIDP5N.js":"khHuM","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.4GJTAPTW.js":"gLOYh","../../chunks/chunk.ZL53POKZ.js":"4tGlu","../../chunks/chunk.P7ZG6EMR.js":"f9Afu","../../chunks/chunk.3TFKS637.js":"JiKmP","../../chunks/chunk.QLXRCYS4.js":"8hhmC","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.3Y6SB6QS.js":"b3ki7","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSdLF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "button_default", ()=>button_default);
var _chunkKEXJVXAUJs = require("./chunk.KEXJVXAU.js");
// src/components/button/button.ts
var button_default = (0, _chunkKEXJVXAUJs.SlButton);
(0, _chunkKEXJVXAUJs.SlButton).define("sl-button");

},{"./chunk.KEXJVXAU.js":"aWD0t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWD0t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlButton", ()=>SlButton);
var _chunkMK453YANJs = require("./chunk.MK453YAN.js");
var _chunk3RPBFEDEJs = require("./chunk.3RPBFEDE.js");
var _chunkMAQXLKQ7Js = require("./chunk.MAQXLKQ7.js");
var _chunkNYIIDP5NJs = require("./chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunk4GJTAPTWJs = require("./chunk.4GJTAPTW.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/button/button.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _staticHtmlJs = require("lit/static-html.js");
var _ifDefinedJs = require("lit/directives/if-defined.js");
var _decoratorsJs = require("lit/decorators.js");
var SlButton = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.formControlController = new (0, _chunk3RPBFEDEJs.FormControlController)(this, {
            assumeInteractionOn: [
                "click"
            ]
        });
        this.hasSlotController = new (0, _chunkNYIIDP5NJs.HasSlotController)(this, "[default]", "prefix", "suffix");
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.hasFocus = false;
        this.invalid = false;
        this.title = "";
        this.variant = "default";
        this.size = "medium";
        this.caret = false;
        this.disabled = false;
        this.loading = false;
        this.outline = false;
        this.pill = false;
        this.circle = false;
        this.type = "button";
        this.name = "";
        this.value = "";
        this.href = "";
        this.rel = "noreferrer noopener";
    }
    /** Gets the validity state object */ get validity() {
        if (this.isButton()) return this.button.validity;
        return 0, _chunk3RPBFEDEJs.validValidityState;
    }
    /** Gets the validation message */ get validationMessage() {
        if (this.isButton()) return this.button.validationMessage;
        return "";
    }
    firstUpdated() {
        if (this.isButton()) this.formControlController.updateValidity();
    }
    handleBlur() {
        this.hasFocus = false;
        this.emit("sl-blur");
    }
    handleFocus() {
        this.hasFocus = true;
        this.emit("sl-focus");
    }
    handleClick() {
        if (this.type === "submit") this.formControlController.submit(this);
        if (this.type === "reset") this.formControlController.reset(this);
    }
    handleInvalid(event) {
        this.formControlController.setValidity(false);
        this.formControlController.emitInvalidEvent(event);
    }
    isButton() {
        return this.href ? false : true;
    }
    isLink() {
        return this.href ? true : false;
    }
    handleDisabledChange() {
        if (this.isButton()) this.formControlController.setValidity(this.disabled);
    }
    /** Simulates a click on the button. */ click() {
        this.button.click();
    }
    /** Sets focus on the button. */ focus(options) {
        this.button.focus(options);
    }
    /** Removes focus from the button. */ blur() {
        this.button.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */ checkValidity() {
        if (this.isButton()) return this.button.checkValidity();
        return true;
    }
    /** Gets the associated form, if one exists. */ getForm() {
        return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */ reportValidity() {
        if (this.isButton()) return this.button.reportValidity();
        return true;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */ setCustomValidity(message) {
        if (this.isButton()) {
            this.button.setCustomValidity(message);
            this.formControlController.updateValidity();
        }
    }
    render() {
        const isLink = this.isLink();
        const tag = isLink ? (0, _staticHtmlJs.literal)`a` : (0, _staticHtmlJs.literal)`button`;
        return (0, _staticHtmlJs.html)`
      <${tag}
        part="base"
        class=${(0, _classMapJs.classMap)({
            button: true,
            "button--default": this.variant === "default",
            "button--primary": this.variant === "primary",
            "button--success": this.variant === "success",
            "button--neutral": this.variant === "neutral",
            "button--warning": this.variant === "warning",
            "button--danger": this.variant === "danger",
            "button--text": this.variant === "text",
            "button--small": this.size === "small",
            "button--medium": this.size === "medium",
            "button--large": this.size === "large",
            "button--caret": this.caret,
            "button--circle": this.circle,
            "button--disabled": this.disabled,
            "button--focused": this.hasFocus,
            "button--loading": this.loading,
            "button--standard": !this.outline,
            "button--outline": this.outline,
            "button--pill": this.pill,
            "button--rtl": this.localize.dir() === "rtl",
            "button--has-label": this.hasSlotController.test("[default]"),
            "button--has-prefix": this.hasSlotController.test("prefix"),
            "button--has-suffix": this.hasSlotController.test("suffix")
        })}
        ?disabled=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : this.disabled)}
        type=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : this.name)}
        value=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : this.value)}
        href=${(0, _ifDefinedJs.ifDefined)(isLink && !this.disabled ? this.href : void 0)}
        target=${(0, _ifDefinedJs.ifDefined)(isLink ? this.target : void 0)}
        download=${(0, _ifDefinedJs.ifDefined)(isLink ? this.download : void 0)}
        rel=${(0, _ifDefinedJs.ifDefined)(isLink ? this.rel : void 0)}
        role=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? (0, _staticHtmlJs.html)` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? (0, _staticHtmlJs.html)`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${tag}>
    `;
    }
};
SlButton.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkMAQXLKQ7Js.button_styles_default)
];
SlButton.dependencies = {
    "sl-icon": (0, _chunk4GJTAPTWJs.SlIcon),
    "sl-spinner": (0, _chunkMK453YANJs.SlSpinner)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".button")
], SlButton.prototype, "button", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.state)()
], SlButton.prototype, "hasFocus", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.state)()
], SlButton.prototype, "invalid", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "title", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlButton.prototype, "variant", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlButton.prototype, "size", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "caret", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "disabled", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "loading", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "outline", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "pill", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "circle", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "type", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "name", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "value", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "href", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "target", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "rel", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "download", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlButton.prototype, "form", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "formaction"
    })
], SlButton.prototype, "formAction", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "formenctype"
    })
], SlButton.prototype, "formEnctype", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "formmethod"
    })
], SlButton.prototype, "formMethod", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "formnovalidate",
        type: Boolean
    })
], SlButton.prototype, "formNoValidate", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "formtarget"
    })
], SlButton.prototype, "formTarget", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("disabled", {
        waitUntilFirstUpdate: true
    })
], SlButton.prototype, "handleDisabledChange", 1);

},{"./chunk.MK453YAN.js":"hDVQj","./chunk.3RPBFEDE.js":"3YV8b","./chunk.MAQXLKQ7.js":"4ZJTA","./chunk.NYIIDP5N.js":"khHuM","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.4GJTAPTW.js":"gLOYh","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit/static-html.js":"9dffK","lit/directives/if-defined.js":"7ly7x","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDVQj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlSpinner", ()=>SlSpinner);
var _chunk7DUCI5S4Js = require("./chunk.7DUCI5S4.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
// src/components/spinner/spinner.component.ts
var _lit = require("lit");
var SlSpinner = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
    }
    render() {
        return (0, _lit.html)`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
};
SlSpinner.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunk7DUCI5S4Js.spinner_styles_default)
];

},{"./chunk.7DUCI5S4.js":"jFVVI","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jFVVI":[function(require,module,exports,__globalThis) {
// src/components/spinner/spinner.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spinner_styles_default", ()=>spinner_styles_default);
var _lit = require("lit");
var spinner_styles_default = (0, _lit.css)`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Qgqy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalizeController", ()=>LocalizeController);
parcelHelpers.export(exports, "registerTranslation", ()=>(0, _localize.registerTranslation));
var _chunk7BTDLTNIJs = require("./chunk.7BTDLTNI.js");
// src/utilities/localize.ts
var _localize = require("@shoelace-style/localize");
var LocalizeController = class extends (0, _localize.LocalizeController) {
};
(0, _localize.registerTranslation)((0, _chunk7BTDLTNIJs.en_default));

},{"./chunk.7BTDLTNI.js":"azlyc","@shoelace-style/localize":"ajeeZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azlyc":[function(require,module,exports,__globalThis) {
// src/translations/en.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en_default", ()=>en_default);
var _localize = require("@shoelace-style/localize");
var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count)=>`Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num)=>{
        if (num === 0) return "No options selected";
        if (num === 1) return "1 option selected";
        return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide)=>`Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
};
(0, _localize.registerTranslation)(translation);
var en_default = translation;

},{"@shoelace-style/localize":"ajeeZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajeeZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerTranslation", ()=>registerTranslation);
parcelHelpers.export(exports, "update", ()=>update);
parcelHelpers.export(exports, "LocalizeController", ()=>LocalizeController);
const connectedElements = new Set();
const translations = new Map();
let fallback;
let documentDirection = 'ltr';
let documentLanguage = 'en';
const isClient = typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined";
if (isClient) {
    const documentElementObserver = new MutationObserver(update);
    documentDirection = document.documentElement.dir || 'ltr';
    documentLanguage = document.documentElement.lang || navigator.language;
    documentElementObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
            'dir',
            'lang'
        ]
    });
}
function registerTranslation(...translation) {
    translation.map((t)=>{
        const code = t.$code.toLowerCase();
        if (translations.has(code)) translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
        else translations.set(code, t);
        if (!fallback) fallback = t;
    });
    update();
}
function update() {
    if (isClient) {
        documentDirection = document.documentElement.dir || 'ltr';
        documentLanguage = document.documentElement.lang || navigator.language;
    }
    [
        ...connectedElements.keys()
    ].map((el)=>{
        if (typeof el.requestUpdate === 'function') el.requestUpdate();
    });
}
class LocalizeController {
    constructor(host){
        this.host = host;
        this.host.addController(this);
    }
    hostConnected() {
        connectedElements.add(this.host);
    }
    hostDisconnected() {
        connectedElements.delete(this.host);
    }
    dir() {
        return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
        return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
        var _a, _b;
        const locale = new Intl.Locale(lang.replace(/_/g, '-'));
        const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
        const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
        const primary = translations.get(`${language}-${region}`);
        const secondary = translations.get(language);
        return {
            locale,
            language,
            region,
            primary,
            secondary
        };
    }
    exists(key, options) {
        var _a;
        const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
        options = Object.assign({
            includeFallback: false
        }, options);
        if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) return true;
        return false;
    }
    term(key, ...args) {
        const { primary, secondary } = this.getTranslationData(this.lang());
        let term;
        if (primary && primary[key]) term = primary[key];
        else if (secondary && secondary[key]) term = secondary[key];
        else if (fallback && fallback[key]) term = fallback[key];
        else {
            console.error(`No translation found for: ${String(key)}`);
            return String(key);
        }
        if (typeof term === 'function') return term(...args);
        return term;
    }
    date(dateToFormat, options) {
        dateToFormat = new Date(dateToFormat);
        return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
        numberToFormat = Number(numberToFormat);
        return isNaN(numberToFormat) ? '' : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
        return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YV8b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formCollections", ()=>formCollections);
parcelHelpers.export(exports, "FormControlController", ()=>FormControlController);
parcelHelpers.export(exports, "validValidityState", ()=>validValidityState);
parcelHelpers.export(exports, "valueMissingValidityState", ()=>valueMissingValidityState);
parcelHelpers.export(exports, "customErrorValidityState", ()=>customErrorValidityState);
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/internal/form.ts
var formCollections = /* @__PURE__ */ new WeakMap();
var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
var userInteractedControls = /* @__PURE__ */ new WeakSet();
var interactions = /* @__PURE__ */ new WeakMap();
var FormControlController = class {
    constructor(host, options){
        this.handleFormData = (event)=>{
            const disabled = this.options.disabled(this.host);
            const name = this.options.name(this.host);
            const value = this.options.value(this.host);
            const isButton = this.host.tagName.toLowerCase() === "sl-button";
            if (this.host.isConnected && !disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
                if (Array.isArray(value)) value.forEach((val)=>{
                    event.formData.append(name, val.toString());
                });
                else event.formData.append(name, value.toString());
            }
        };
        this.handleFormSubmit = (event)=>{
            var _a;
            const disabled = this.options.disabled(this.host);
            const reportValidity = this.options.reportValidity;
            if (this.form && !this.form.noValidate) (_a = formCollections.get(this.form)) == null || _a.forEach((control)=>{
                this.setUserInteracted(control, true);
            });
            if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        };
        this.handleFormReset = ()=>{
            this.options.setValue(this.host, this.options.defaultValue(this.host));
            this.setUserInteracted(this.host, false);
            interactions.set(this.host, []);
        };
        this.handleInteraction = (event)=>{
            const emittedEvents = interactions.get(this.host);
            if (!emittedEvents.includes(event.type)) emittedEvents.push(event.type);
            if (emittedEvents.length === this.options.assumeInteractionOn.length) this.setUserInteracted(this.host, true);
        };
        this.checkFormValidity = ()=>{
            if (this.form && !this.form.noValidate) {
                const elements = this.form.querySelectorAll("*");
                for (const element of elements)if (typeof element.checkValidity === "function") {
                    if (!element.checkValidity()) return false;
                }
            }
            return true;
        };
        this.reportFormValidity = ()=>{
            if (this.form && !this.form.noValidate) {
                const elements = this.form.querySelectorAll("*");
                for (const element of elements)if (typeof element.reportValidity === "function") {
                    if (!element.reportValidity()) return false;
                }
            }
            return true;
        };
        (this.host = host).addController(this);
        this.options = (0, _chunkKAW7D32OJs.__spreadValues)({
            form: (input)=>{
                const formId = input.form;
                if (formId) {
                    const root = input.getRootNode();
                    const form = root.querySelector(`#${formId}`);
                    if (form) return form;
                }
                return input.closest("form");
            },
            name: (input)=>input.name,
            value: (input)=>input.value,
            defaultValue: (input)=>input.defaultValue,
            disabled: (input)=>{
                var _a;
                return (_a = input.disabled) != null ? _a : false;
            },
            reportValidity: (input)=>typeof input.reportValidity === "function" ? input.reportValidity() : true,
            checkValidity: (input)=>typeof input.checkValidity === "function" ? input.checkValidity() : true,
            setValue: (input, value)=>input.value = value,
            assumeInteractionOn: [
                "sl-input"
            ]
        }, options);
    }
    hostConnected() {
        const form = this.options.form(this.host);
        if (form) this.attachForm(form);
        interactions.set(this.host, []);
        this.options.assumeInteractionOn.forEach((event)=>{
            this.host.addEventListener(event, this.handleInteraction);
        });
    }
    hostDisconnected() {
        this.detachForm();
        interactions.delete(this.host);
        this.options.assumeInteractionOn.forEach((event)=>{
            this.host.removeEventListener(event, this.handleInteraction);
        });
    }
    hostUpdated() {
        const form = this.options.form(this.host);
        if (!form) this.detachForm();
        if (form && this.form !== form) {
            this.detachForm();
            this.attachForm(form);
        }
        if (this.host.hasUpdated) this.setValidity(this.host.validity.valid);
    }
    attachForm(form) {
        if (form) {
            this.form = form;
            if (formCollections.has(this.form)) formCollections.get(this.form).add(this.host);
            else formCollections.set(this.form, /* @__PURE__ */ new Set([
                this.host
            ]));
            this.form.addEventListener("formdata", this.handleFormData);
            this.form.addEventListener("submit", this.handleFormSubmit);
            this.form.addEventListener("reset", this.handleFormReset);
            if (!reportValidityOverloads.has(this.form)) {
                reportValidityOverloads.set(this.form, this.form.reportValidity);
                this.form.reportValidity = ()=>this.reportFormValidity();
            }
            if (!checkValidityOverloads.has(this.form)) {
                checkValidityOverloads.set(this.form, this.form.checkValidity);
                this.form.checkValidity = ()=>this.checkFormValidity();
            }
        } else this.form = void 0;
    }
    detachForm() {
        if (!this.form) return;
        const formCollection = formCollections.get(this.form);
        if (!formCollection) return;
        formCollection.delete(this.host);
        if (formCollection.size <= 0) {
            this.form.removeEventListener("formdata", this.handleFormData);
            this.form.removeEventListener("submit", this.handleFormSubmit);
            this.form.removeEventListener("reset", this.handleFormReset);
            if (reportValidityOverloads.has(this.form)) {
                this.form.reportValidity = reportValidityOverloads.get(this.form);
                reportValidityOverloads.delete(this.form);
            }
            if (checkValidityOverloads.has(this.form)) {
                this.form.checkValidity = checkValidityOverloads.get(this.form);
                checkValidityOverloads.delete(this.form);
            }
            this.form = void 0;
        }
    }
    setUserInteracted(el, hasInteracted) {
        if (hasInteracted) userInteractedControls.add(el);
        else userInteractedControls.delete(el);
        el.requestUpdate();
    }
    doAction(type, submitter) {
        if (this.form) {
            const button = document.createElement("button");
            button.type = type;
            button.style.position = "absolute";
            button.style.width = "0";
            button.style.height = "0";
            button.style.clipPath = "inset(50%)";
            button.style.overflow = "hidden";
            button.style.whiteSpace = "nowrap";
            if (submitter) {
                button.name = submitter.name;
                button.value = submitter.value;
                [
                    "formaction",
                    "formenctype",
                    "formmethod",
                    "formnovalidate",
                    "formtarget"
                ].forEach((attr)=>{
                    if (submitter.hasAttribute(attr)) button.setAttribute(attr, submitter.getAttribute(attr));
                });
            }
            this.form.append(button);
            button.click();
            button.remove();
        }
    }
    /** Returns the associated `<form>` element, if one exists. */ getForm() {
        var _a;
        return (_a = this.form) != null ? _a : null;
    }
    /** Resets the form, restoring all the control to their default value */ reset(submitter) {
        this.doAction("reset", submitter);
    }
    /** Submits the form, triggering validation and form data injection. */ submit(submitter) {
        this.doAction("submit", submitter);
    }
    /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */ setValidity(isValid) {
        const host = this.host;
        const hasInteracted = Boolean(userInteractedControls.has(host));
        const required = Boolean(host.required);
        host.toggleAttribute("data-required", required);
        host.toggleAttribute("data-optional", !required);
        host.toggleAttribute("data-invalid", !isValid);
        host.toggleAttribute("data-valid", isValid);
        host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
        host.toggleAttribute("data-user-valid", isValid && hasInteracted);
    }
    /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */ updateValidity() {
        const host = this.host;
        this.setValidity(host.validity.valid);
    }
    /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */ emitInvalidEvent(originalInvalidEvent) {
        const slInvalidEvent = new CustomEvent("sl-invalid", {
            bubbles: false,
            composed: false,
            cancelable: true,
            detail: {}
        });
        if (!originalInvalidEvent) slInvalidEvent.preventDefault();
        if (!this.host.dispatchEvent(slInvalidEvent)) originalInvalidEvent == null || originalInvalidEvent.preventDefault();
    }
};
var validValidityState = Object.freeze({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
});
var valueMissingValidityState = Object.freeze((0, _chunkKAW7D32OJs.__spreadProps)((0, _chunkKAW7D32OJs.__spreadValues)({}, validValidityState), {
    valid: false,
    valueMissing: true
}));
var customErrorValidityState = Object.freeze((0, _chunkKAW7D32OJs.__spreadProps)((0, _chunkKAW7D32OJs.__spreadValues)({}, validValidityState), {
    valid: false,
    customError: true
}));

},{"./chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ZJTA":[function(require,module,exports,__globalThis) {
// src/components/button/button.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "button_styles_default", ()=>button_styles_default);
var _lit = require("lit");
var button_styles_default = (0, _lit.css)`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLOYh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlIcon", ()=>SlIcon);
var _chunkZL53POKZJs = require("./chunk.ZL53POKZ.js");
var _chunkQLXRCYS4Js = require("./chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/icon/icon.component.ts
var _lit = require("lit");
var _directiveHelpersJs = require("lit/directive-helpers.js");
var _decoratorsJs = require("lit/decorators.js");
var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var SlIcon = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.initialRender = false;
        this.svg = null;
        this.label = "";
        this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */ async resolveIcon(url, library) {
        var _a;
        let fileData;
        if (library == null ? void 0 : library.spriteSheet) {
            this.svg = (0, _lit.html)`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
            return this.svg;
        }
        try {
            fileData = await fetch(url, {
                mode: "cors"
            });
            if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
        } catch (e) {
            return RETRYABLE_ERROR;
        }
        try {
            const div = document.createElement("div");
            div.innerHTML = await fileData.text();
            const svg = div.firstElementChild;
            if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg") return CACHEABLE_ERROR;
            if (!parser) parser = new DOMParser();
            const doc = parser.parseFromString(svg.outerHTML, "text/html");
            const svgEl = doc.body.querySelector("svg");
            if (!svgEl) return CACHEABLE_ERROR;
            svgEl.part.add("svg");
            return document.adoptNode(svgEl);
        } catch (e) {
            return CACHEABLE_ERROR;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        (0, _chunkZL53POKZJs.watchIcon)(this);
    }
    firstUpdated() {
        this.initialRender = true;
        this.setIcon();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        (0, _chunkZL53POKZJs.unwatchIcon)(this);
    }
    getIconSource() {
        const library = (0, _chunkZL53POKZJs.getIconLibrary)(this.library);
        if (this.name && library) return {
            url: library.resolver(this.name),
            fromLibrary: true
        };
        return {
            url: this.src,
            fromLibrary: false
        };
    }
    handleLabelChange() {
        const hasLabel = typeof this.label === "string" && this.label.length > 0;
        if (hasLabel) {
            this.setAttribute("role", "img");
            this.setAttribute("aria-label", this.label);
            this.removeAttribute("aria-hidden");
        } else {
            this.removeAttribute("role");
            this.removeAttribute("aria-label");
            this.setAttribute("aria-hidden", "true");
        }
    }
    async setIcon() {
        var _a;
        const { url, fromLibrary } = this.getIconSource();
        const library = fromLibrary ? (0, _chunkZL53POKZJs.getIconLibrary)(this.library) : void 0;
        if (!url) {
            this.svg = null;
            return;
        }
        let iconResolver = iconCache.get(url);
        if (!iconResolver) {
            iconResolver = this.resolveIcon(url, library);
            iconCache.set(url, iconResolver);
        }
        if (!this.initialRender) return;
        const svg = await iconResolver;
        if (svg === RETRYABLE_ERROR) iconCache.delete(url);
        if (url !== this.getIconSource().url) return;
        if ((0, _directiveHelpersJs.isTemplateResult)(svg)) {
            this.svg = svg;
            if (library) {
                await this.updateComplete;
                const shadowSVG = this.shadowRoot.querySelector("[part='svg']");
                if (typeof library.mutator === "function" && shadowSVG) library.mutator(shadowSVG);
            }
            return;
        }
        switch(svg){
            case RETRYABLE_ERROR:
            case CACHEABLE_ERROR:
                this.svg = null;
                this.emit("sl-error");
                break;
            default:
                this.svg = svg.cloneNode(true);
                (_a = library == null ? void 0 : library.mutator) == null || _a.call(library, this.svg);
                this.emit("sl-load");
        }
    }
    render() {
        return this.svg;
    }
};
SlIcon.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkQLXRCYS4Js.icon_styles_default)
];
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.state)()
], SlIcon.prototype, "svg", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlIcon.prototype, "name", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIcon.prototype, "src", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIcon.prototype, "label", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlIcon.prototype, "library", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("label")
], SlIcon.prototype, "handleLabelChange", 1);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)([
        "name",
        "src",
        "library"
    ])
], SlIcon.prototype, "setIcon", 1);

},{"./chunk.ZL53POKZ.js":"4tGlu","./chunk.QLXRCYS4.js":"8hhmC","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit":"2zYfj","lit/directive-helpers.js":"dDkjy","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tGlu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watchIcon", ()=>watchIcon);
parcelHelpers.export(exports, "unwatchIcon", ()=>unwatchIcon);
parcelHelpers.export(exports, "getIconLibrary", ()=>getIconLibrary);
parcelHelpers.export(exports, "registerIconLibrary", ()=>registerIconLibrary);
parcelHelpers.export(exports, "unregisterIconLibrary", ()=>unregisterIconLibrary);
var _chunkP7ZG6EMRJs = require("./chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("./chunk.3TFKS637.js");
// src/components/icon/library.ts
var registry = [
    (0, _chunkP7ZG6EMRJs.library_default_default),
    (0, _chunk3TFKS637Js.library_system_default)
];
var watchedIcons = [];
function watchIcon(icon) {
    watchedIcons.push(icon);
}
function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el)=>el !== icon);
}
function getIconLibrary(name) {
    return registry.find((lib)=>lib.name === name);
}
function registerIconLibrary(name, options) {
    unregisterIconLibrary(name);
    registry.push({
        name,
        resolver: options.resolver,
        mutator: options.mutator,
        spriteSheet: options.spriteSheet
    });
    watchedIcons.forEach((icon)=>{
        if (icon.library === name) icon.setIcon();
    });
}
function unregisterIconLibrary(name) {
    registry = registry.filter((lib)=>lib.name !== name);
}

},{"./chunk.P7ZG6EMR.js":"f9Afu","./chunk.3TFKS637.js":"JiKmP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9Afu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "library_default_default", ()=>library_default_default);
var _chunk3Y6SB6QSJs = require("./chunk.3Y6SB6QS.js");
// src/components/icon/library.default.ts
var library = {
    name: "default",
    resolver: (name)=>(0, _chunk3Y6SB6QSJs.getBasePath)(`assets/icons/${name}.svg`)
};
var library_default_default = library;

},{"./chunk.3Y6SB6QS.js":"b3ki7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3ki7":[function(require,module,exports,__globalThis) {
// src/utilities/base-path.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setBasePath", ()=>setBasePath);
parcelHelpers.export(exports, "getBasePath", ()=>getBasePath);
var basePath = "";
function setBasePath(path) {
    basePath = path;
}
function getBasePath(subpath = "") {
    if (!basePath) {
        const scripts = [
            ...document.getElementsByTagName("script")
        ];
        const configScript = scripts.find((script)=>script.hasAttribute("data-shoelace"));
        if (configScript) setBasePath(configScript.getAttribute("data-shoelace"));
        else {
            const fallbackScript = scripts.find((s)=>{
                return /shoelace(\.min)?\.js($|\?)/.test(s.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src);
            });
            let path = "";
            if (fallbackScript) path = fallbackScript.getAttribute("src");
            setBasePath(path.split("/").slice(0, -1).join("/"));
        }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JiKmP":[function(require,module,exports,__globalThis) {
// src/components/icon/library.system.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "library_system_default", ()=>library_system_default);
var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
};
var systemLibrary = {
    name: "system",
    resolver: (name)=>{
        if (name in icons) return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
        return "";
    }
};
var library_system_default = systemLibrary;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hhmC":[function(require,module,exports,__globalThis) {
// src/components/icon/icon.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "icon_styles_default", ()=>icon_styles_default);
var _lit = require("lit");
var icon_styles_default = (0, _lit.css)`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QiFc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watch", ()=>watch);
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/internal/watch.ts
function watch(propertyName, options) {
    const resolvedOptions = (0, _chunkKAW7D32OJs.__spreadValues)({
        waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName)=>{
        const { update } = proto;
        const watchedProperties = Array.isArray(propertyName) ? propertyName : [
            propertyName
        ];
        proto.update = function(changedProps) {
            watchedProperties.forEach((property)=>{
                const key = property;
                if (changedProps.has(key)) {
                    const oldValue = changedProps.get(key);
                    const newValue = this[key];
                    if (oldValue !== newValue) {
                        if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) this[decoratedFnName](oldValue, newValue);
                    }
                }
            });
            update.call(this, changedProps);
        };
    };
}

},{"./chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDkjy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _directiveHelpersJs = require("lit-html/directive-helpers.js");
parcelHelpers.exportAll(_directiveHelpersJs, exports);

},{"lit-html/directive-helpers.js":"e7IuY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7IuY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TemplateResultType", ()=>n);
parcelHelpers.export(exports, "clearPart", ()=>h);
parcelHelpers.export(exports, "getCommittedValue", ()=>p);
parcelHelpers.export(exports, "getDirectiveClass", ()=>d);
parcelHelpers.export(exports, "insertPart", ()=>r);
parcelHelpers.export(exports, "isCompiledTemplateResult", ()=>l);
parcelHelpers.export(exports, "isDirectiveResult", ()=>c);
parcelHelpers.export(exports, "isPrimitive", ()=>i);
parcelHelpers.export(exports, "isSingleExpression", ()=>f);
parcelHelpers.export(exports, "isTemplateResult", ()=>e);
parcelHelpers.export(exports, "removePart", ()=>M);
parcelHelpers.export(exports, "setChildPartValue", ()=>v);
parcelHelpers.export(exports, "setCommittedValue", ()=>m);
var _litHtmlJs = require("./lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: t } = (0, _litHtmlJs._$LH), i = (o)=>null === o || "object" != typeof o && "function" != typeof o, n = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, e = (o, t)=>void 0 === t ? void 0 !== o?._$litType$ : o?._$litType$ === t, l = (o)=>null != o?._$litType$?.h, c = (o)=>void 0 !== o?._$litDirective$, d = (o)=>o?._$litDirective$, f = (o)=>void 0 === o.strings, s = ()=>document.createComment(""), r = (o, i, n)=>{
    const e = o._$AA.parentNode, l = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = e.insertBefore(s(), l), c = e.insertBefore(s(), l);
        n = new t(i, c, o, o.options);
    } else {
        const t = n._$AB.nextSibling, i = n._$AM, c = i !== o;
        if (c) {
            let t;
            n._$AQ?.(o), n._$AM = o, void 0 !== n._$AP && (t = o._$AU) !== i._$AU && n._$AP(t);
        }
        if (t !== l || c) {
            let o = n._$AA;
            for(; o !== t;){
                const t = o.nextSibling;
                e.insertBefore(o, l), o = t;
            }
        }
    }
    return n;
}, v = (o, t, i = o)=>(o._$AI(t, i), o), u = {}, m = (o, t = u)=>o._$AH = t, p = (o)=>o._$AH, M = (o)=>{
    o._$AP?.(!1, !0);
    let t = o._$AA;
    const i = o._$AB.nextSibling;
    for(; t !== i;){
        const o = t.nextSibling;
        t.remove(), t = o;
    }
}, h = (o)=>{
    o._$AR();
};

},{"./lit-html.js":"3ewny","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dffK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _staticJs = require("lit-html/static.js");
parcelHelpers.exportAll(_staticJs, exports);

},{"lit-html/static.js":"bpP2q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpP2q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>u);
parcelHelpers.export(exports, "literal", ()=>i);
parcelHelpers.export(exports, "mathml", ()=>$);
parcelHelpers.export(exports, "svg", ()=>c);
parcelHelpers.export(exports, "unsafeStatic", ()=>s);
parcelHelpers.export(exports, "withStatic", ()=>n);
var _litHtmlJs = require("./lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const a = Symbol.for(""), o = (t)=>{
    if (t?.r === a) return t?._$litStatic$;
}, s = (t)=>({
        _$litStatic$: t,
        r: a
    }), i = (t, ...r)=>({
        _$litStatic$: r.reduce((r, e, a)=>r + ((t)=>{
                if (void 0 !== t._$litStatic$) return t._$litStatic$;
                throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`);
            })(e) + t[a + 1], t[0]),
        r: a
    }), l = new Map, n = (t)=>(r, ...e)=>{
        const a = e.length;
        let s, i;
        const n = [], u = [];
        let c, $ = 0, f = !1;
        for(; $ < a;){
            for(c = r[$]; $ < a && void 0 !== (i = e[$], s = o(i));)c += s + r[++$], f = !0;
            $ !== a && u.push(i), n.push(c), $++;
        }
        if ($ === a && n.push(r[a]), f) {
            const t = n.join("$$lit$$");
            void 0 === (r = l.get(t)) && (n.raw = n, l.set(t, r = n)), e = u;
        }
        return t(r, ...e);
    }, u = n((0, _litHtmlJs.html)), c = n((0, _litHtmlJs.svg)), $ = n((0, _litHtmlJs.mathml));

},{"./lit-html.js":"3ewny","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ly7x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ifDefinedJs = require("lit-html/directives/if-defined.js");
parcelHelpers.exportAll(_ifDefinedJs, exports);

},{"lit-html/directives/if-defined.js":"bsexy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsexy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ifDefined", ()=>o);
var _litHtmlJs = require("../lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = (o)=>o ?? (0, _litHtmlJs.nothing);

},{"../lit-html.js":"3ewny","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCuuT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunk3LKW2IFAJs.alert_default));
var _chunk3LKW2IFAJs = require("../../chunks/chunk.3LKW2IFA.js");
var _chunkXB76PK4IJs = require("../../chunks/chunk.XB76PK4I.js");
var _chunkHLJ2JR6PJs = require("../../chunks/chunk.HLJ2JR6P.js");
var _chunk6I2T3DLIJs = require("../../chunks/chunk.6I2T3DLI.js");
var _chunkK7JGTRV7Js = require("../../chunks/chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("../../chunks/chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("../../chunks/chunk.AJ3ENQ5C.js");
var _chunkNYIIDP5NJs = require("../../chunks/chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunk62HVOPEBJs = require("../../chunks/chunk.62HVOPEB.js");
var _chunk4GJTAPTWJs = require("../../chunks/chunk.4GJTAPTW.js");
var _chunkZL53POKZJs = require("../../chunks/chunk.ZL53POKZ.js");
var _chunkP7ZG6EMRJs = require("../../chunks/chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("../../chunks/chunk.3TFKS637.js");
var _chunkQLXRCYS4Js = require("../../chunks/chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunk3Y6SB6QSJs = require("../../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.3LKW2IFA.js":"60jS3","../../chunks/chunk.XB76PK4I.js":"cnJ4q","../../chunks/chunk.HLJ2JR6P.js":"6u802","../../chunks/chunk.6I2T3DLI.js":"gPZgL","../../chunks/chunk.K7JGTRV7.js":"eIRq8","../../chunks/chunk.B4BZKR24.js":"6I1PD","../../chunks/chunk.AJ3ENQ5C.js":"8BkBn","../../chunks/chunk.NYIIDP5N.js":"khHuM","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.62HVOPEB.js":"lxcI7","../../chunks/chunk.4GJTAPTW.js":"gLOYh","../../chunks/chunk.ZL53POKZ.js":"4tGlu","../../chunks/chunk.P7ZG6EMR.js":"f9Afu","../../chunks/chunk.3TFKS637.js":"JiKmP","../../chunks/chunk.QLXRCYS4.js":"8hhmC","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.3Y6SB6QS.js":"b3ki7","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60jS3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alert_default", ()=>alert_default);
var _chunkXB76PK4IJs = require("./chunk.XB76PK4I.js");
// src/components/alert/alert.ts
var alert_default = (0, _chunkXB76PK4IJs.SlAlert);
(0, _chunkXB76PK4IJs.SlAlert).define("sl-alert");

},{"./chunk.XB76PK4I.js":"cnJ4q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnJ4q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlAlert", ()=>SlAlert);
var _chunkHLJ2JR6PJs = require("./chunk.HLJ2JR6P.js");
var _chunkK7JGTRV7Js = require("./chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("./chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("./chunk.AJ3ENQ5C.js");
var _chunkNYIIDP5NJs = require("./chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunk62HVOPEBJs = require("./chunk.62HVOPEB.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/alert/alert.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var _SlAlert = class _SlAlert extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.hasSlotController = new (0, _chunkNYIIDP5NJs.HasSlotController)(this, "icon", "suffix");
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.open = false;
        this.closable = false;
        this.variant = "primary";
        this.duration = Infinity;
        this.remainingTime = this.duration;
    }
    static get toastStack() {
        if (!this.currentToastStack) this.currentToastStack = Object.assign(document.createElement("div"), {
            className: "sl-toast-stack"
        });
        return this.currentToastStack;
    }
    firstUpdated() {
        this.base.hidden = !this.open;
    }
    restartAutoHide() {
        this.handleCountdownChange();
        clearTimeout(this.autoHideTimeout);
        clearInterval(this.remainingTimeInterval);
        if (this.open && this.duration < Infinity) {
            this.autoHideTimeout = window.setTimeout(()=>this.hide(), this.duration);
            this.remainingTime = this.duration;
            this.remainingTimeInterval = window.setInterval(()=>{
                this.remainingTime -= 100;
            }, 100);
        }
    }
    pauseAutoHide() {
        var _a;
        (_a = this.countdownAnimation) == null || _a.pause();
        clearTimeout(this.autoHideTimeout);
        clearInterval(this.remainingTimeInterval);
    }
    resumeAutoHide() {
        var _a;
        if (this.duration < Infinity) {
            this.autoHideTimeout = window.setTimeout(()=>this.hide(), this.remainingTime);
            this.remainingTimeInterval = window.setInterval(()=>{
                this.remainingTime -= 100;
            }, 100);
            (_a = this.countdownAnimation) == null || _a.play();
        }
    }
    handleCountdownChange() {
        if (this.open && this.duration < Infinity && this.countdown) {
            const { countdownElement } = this;
            const start = "100%";
            const end = "0";
            this.countdownAnimation = countdownElement.animate([
                {
                    width: start
                },
                {
                    width: end
                }
            ], {
                duration: this.duration,
                easing: "linear"
            });
        }
    }
    handleCloseClick() {
        this.hide();
    }
    async handleOpenChange() {
        if (this.open) {
            this.emit("sl-show");
            if (this.duration < Infinity) this.restartAutoHide();
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.base);
            this.base.hidden = false;
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "alert.show", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.base, keyframes, options);
            this.emit("sl-after-show");
        } else {
            this.emit("sl-hide");
            clearTimeout(this.autoHideTimeout);
            clearInterval(this.remainingTimeInterval);
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.base);
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "alert.hide", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.base, keyframes, options);
            this.base.hidden = true;
            this.emit("sl-after-hide");
        }
    }
    handleDurationChange() {
        this.restartAutoHide();
    }
    /** Shows the alert. */ async show() {
        if (this.open) return void 0;
        this.open = true;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-show");
    }
    /** Hides the alert */ async hide() {
        if (!this.open) return void 0;
        this.open = false;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-hide");
    }
    /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */ async toast() {
        return new Promise((resolve)=>{
            this.handleCountdownChange();
            if (_SlAlert.toastStack.parentElement === null) document.body.append(_SlAlert.toastStack);
            _SlAlert.toastStack.appendChild(this);
            requestAnimationFrame(()=>{
                this.clientWidth;
                this.show();
            });
            this.addEventListener("sl-after-hide", ()=>{
                _SlAlert.toastStack.removeChild(this);
                resolve();
                if (_SlAlert.toastStack.querySelector("sl-alert") === null) _SlAlert.toastStack.remove();
            }, {
                once: true
            });
        });
    }
    render() {
        return (0, _lit.html)`
      <div
        part="base"
        class=${(0, _classMapJs.classMap)({
            alert: true,
            "alert--open": this.open,
            "alert--closable": this.closable,
            "alert--has-countdown": !!this.countdown,
            "alert--has-icon": this.hasSlotController.test("icon"),
            "alert--primary": this.variant === "primary",
            "alert--success": this.variant === "success",
            "alert--neutral": this.variant === "neutral",
            "alert--warning": this.variant === "warning",
            "alert--danger": this.variant === "danger"
        })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? (0, _lit.html)`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown ? (0, _lit.html)`
              <div
                class=${(0, _classMapJs.classMap)({
            alert__countdown: true,
            "alert__countdown--ltr": this.countdown === "ltr"
        })}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            ` : ""}
      </div>
    `;
    }
};
_SlAlert.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunk62HVOPEBJs.alert_styles_default)
];
_SlAlert.dependencies = {
    "sl-icon-button": (0, _chunkHLJ2JR6PJs.SlIconButton)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)('[part~="base"]')
], _SlAlert.prototype, "base", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".alert__countdown-elapsed")
], _SlAlert.prototype, "countdownElement", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], _SlAlert.prototype, "open", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], _SlAlert.prototype, "closable", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], _SlAlert.prototype, "variant", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Number
    })
], _SlAlert.prototype, "duration", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: String,
        reflect: true
    })
], _SlAlert.prototype, "countdown", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.state)()
], _SlAlert.prototype, "remainingTime", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("open", {
        waitUntilFirstUpdate: true
    })
], _SlAlert.prototype, "handleOpenChange", 1);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("duration")
], _SlAlert.prototype, "handleDurationChange", 1);
var SlAlert = _SlAlert;
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("alert.show", {
    keyframes: [
        {
            opacity: 0,
            scale: 0.8
        },
        {
            opacity: 1,
            scale: 1
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("alert.hide", {
    keyframes: [
        {
            opacity: 1,
            scale: 1
        },
        {
            opacity: 0,
            scale: 0.8
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});

},{"./chunk.HLJ2JR6P.js":"6u802","./chunk.K7JGTRV7.js":"eIRq8","./chunk.B4BZKR24.js":"6I1PD","./chunk.AJ3ENQ5C.js":"8BkBn","./chunk.NYIIDP5N.js":"khHuM","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.62HVOPEB.js":"lxcI7","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6u802":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlIconButton", ()=>SlIconButton);
var _chunk6I2T3DLIJs = require("./chunk.6I2T3DLI.js");
var _chunk4GJTAPTWJs = require("./chunk.4GJTAPTW.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/icon-button/icon-button.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _staticHtmlJs = require("lit/static-html.js");
var _ifDefinedJs = require("lit/directives/if-defined.js");
var _decoratorsJs = require("lit/decorators.js");
var SlIconButton = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.hasFocus = false;
        this.label = "";
        this.disabled = false;
    }
    handleBlur() {
        this.hasFocus = false;
        this.emit("sl-blur");
    }
    handleFocus() {
        this.hasFocus = true;
        this.emit("sl-focus");
    }
    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /** Simulates a click on the icon button. */ click() {
        this.button.click();
    }
    /** Sets focus on the icon button. */ focus(options) {
        this.button.focus(options);
    }
    /** Removes focus from the icon button. */ blur() {
        this.button.blur();
    }
    render() {
        const isLink = this.href ? true : false;
        const tag = isLink ? (0, _staticHtmlJs.literal)`a` : (0, _staticHtmlJs.literal)`button`;
        return (0, _staticHtmlJs.html)`
      <${tag}
        part="base"
        class=${(0, _classMapJs.classMap)({
            "icon-button": true,
            "icon-button--disabled": !isLink && this.disabled,
            "icon-button--focused": this.hasFocus
        })}
        ?disabled=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : this.disabled)}
        type=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : "button")}
        href=${(0, _ifDefinedJs.ifDefined)(isLink ? this.href : void 0)}
        target=${(0, _ifDefinedJs.ifDefined)(isLink ? this.target : void 0)}
        download=${(0, _ifDefinedJs.ifDefined)(isLink ? this.download : void 0)}
        rel=${(0, _ifDefinedJs.ifDefined)(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${(0, _ifDefinedJs.ifDefined)(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${(0, _ifDefinedJs.ifDefined)(this.name)}
          library=${(0, _ifDefinedJs.ifDefined)(this.library)}
          src=${(0, _ifDefinedJs.ifDefined)(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
    }
};
SlIconButton.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunk6I2T3DLIJs.icon_button_styles_default)
];
SlIconButton.dependencies = {
    "sl-icon": (0, _chunk4GJTAPTWJs.SlIcon)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".icon-button")
], SlIconButton.prototype, "button", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.state)()
], SlIconButton.prototype, "hasFocus", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIconButton.prototype, "name", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIconButton.prototype, "library", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIconButton.prototype, "src", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIconButton.prototype, "href", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIconButton.prototype, "target", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIconButton.prototype, "download", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlIconButton.prototype, "label", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlIconButton.prototype, "disabled", 2);

},{"./chunk.6I2T3DLI.js":"gPZgL","./chunk.4GJTAPTW.js":"gLOYh","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit/static-html.js":"9dffK","lit/directives/if-defined.js":"7ly7x","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPZgL":[function(require,module,exports,__globalThis) {
// src/components/icon-button/icon-button.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "icon_button_styles_default", ()=>icon_button_styles_default);
var _lit = require("lit");
var icon_button_styles_default = (0, _lit.css)`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIRq8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDefaultAnimation", ()=>setDefaultAnimation);
parcelHelpers.export(exports, "setAnimation", ()=>setAnimation);
parcelHelpers.export(exports, "getAnimation", ()=>getAnimation);
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/utilities/animation-registry.ts
var defaultAnimationRegistry = /* @__PURE__ */ new Map();
var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
function ensureAnimation(animation) {
    return animation != null ? animation : {
        keyframes: [],
        options: {
            duration: 0
        }
    };
}
function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
    };
    return animation;
}
function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
}
function setAnimation(el, animationName, animation) {
    customAnimationRegistry.set(el, (0, _chunkKAW7D32OJs.__spreadProps)((0, _chunkKAW7D32OJs.__spreadValues)({}, customAnimationRegistry.get(el)), {
        [animationName]: ensureAnimation(animation)
    }));
}
function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) return getLogicalAnimation(customAnimation[animationName], options.dir);
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) return getLogicalAnimation(defaultAnimation, options.dir);
    return {
        keyframes: [],
        options: {
            duration: 0
        }
    };
}

},{"./chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I1PD":[function(require,module,exports,__globalThis) {
// src/internal/event.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "waitForEvent", ()=>waitForEvent);
function waitForEvent(el, eventName) {
    return new Promise((resolve)=>{
        function done(event) {
            if (event.target === el) {
                el.removeEventListener(eventName, done);
                resolve();
            }
        }
        el.addEventListener(eventName, done);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8BkBn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateTo", ()=>animateTo);
parcelHelpers.export(exports, "parseDuration", ()=>parseDuration);
parcelHelpers.export(exports, "prefersReducedMotion", ()=>prefersReducedMotion);
parcelHelpers.export(exports, "stopAnimations", ()=>stopAnimations);
parcelHelpers.export(exports, "shimKeyframesHeightAuto", ()=>shimKeyframesHeightAuto);
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/internal/animate.ts
function animateTo(el, keyframes, options) {
    return new Promise((resolve)=>{
        if ((options == null ? void 0 : options.duration) === Infinity) throw new Error("Promise-based animations must be finite.");
        const animation = el.animate(keyframes, (0, _chunkKAW7D32OJs.__spreadProps)((0, _chunkKAW7D32OJs.__spreadValues)({}, options), {
            duration: prefersReducedMotion() ? 0 : options.duration
        }));
        animation.addEventListener("cancel", resolve, {
            once: true
        });
        animation.addEventListener("finish", resolve, {
            once: true
        });
    });
}
function parseDuration(delay) {
    delay = delay.toString().toLowerCase();
    if (delay.indexOf("ms") > -1) return parseFloat(delay);
    if (delay.indexOf("s") > -1) return parseFloat(delay) * 1e3;
    return parseFloat(delay);
}
function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
}
function stopAnimations(el) {
    return Promise.all(el.getAnimations().map((animation)=>{
        return new Promise((resolve)=>{
            animation.cancel();
            requestAnimationFrame(resolve);
        });
    }));
}
function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
    return keyframes.map((keyframe)=>(0, _chunkKAW7D32OJs.__spreadProps)((0, _chunkKAW7D32OJs.__spreadValues)({}, keyframe), {
            height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
        }));
}

},{"./chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxcI7":[function(require,module,exports,__globalThis) {
// src/components/alert/alert.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alert_styles_default", ()=>alert_styles_default);
var _lit = require("lit");
var alert_styles_default = (0, _lit.css)`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUfDQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkJ2YOIYDSJs.icon_default));
var _chunkJ2YOIYDSJs = require("../../chunks/chunk.J2YOIYDS.js");
var _chunk4GJTAPTWJs = require("../../chunks/chunk.4GJTAPTW.js");
var _chunkZL53POKZJs = require("../../chunks/chunk.ZL53POKZ.js");
var _chunkP7ZG6EMRJs = require("../../chunks/chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("../../chunks/chunk.3TFKS637.js");
var _chunkQLXRCYS4Js = require("../../chunks/chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunk3Y6SB6QSJs = require("../../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.J2YOIYDS.js":"ekgyK","../../chunks/chunk.4GJTAPTW.js":"gLOYh","../../chunks/chunk.ZL53POKZ.js":"4tGlu","../../chunks/chunk.P7ZG6EMR.js":"f9Afu","../../chunks/chunk.3TFKS637.js":"JiKmP","../../chunks/chunk.QLXRCYS4.js":"8hhmC","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.3Y6SB6QS.js":"b3ki7","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ekgyK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "icon_default", ()=>icon_default);
var _chunk4GJTAPTWJs = require("./chunk.4GJTAPTW.js");
// src/components/icon/icon.ts
var icon_default = (0, _chunk4GJTAPTWJs.SlIcon);
(0, _chunk4GJTAPTWJs.SlIcon).define("sl-icon");

},{"./chunk.4GJTAPTW.js":"gLOYh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxcgP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkQLWX3VDKJs.drawer_default));
var _chunkQLWX3VDKJs = require("../../chunks/chunk.QLWX3VDK.js");
var _chunkOB2RFF5TJs = require("../../chunks/chunk.OB2RFF5T.js");
var _chunkBRQKZQRBJs = require("../../chunks/chunk.BRQKZQRB.js");
var _chunkP22EBAVTJs = require("../../chunks/chunk.P22EBAVT.js");
var _chunkRWUUFNULJs = require("../../chunks/chunk.RWUUFNUL.js");
var _chunkOSU5LOVZJs = require("../../chunks/chunk.OSU5LOVZ.js");
var _chunkHLJ2JR6PJs = require("../../chunks/chunk.HLJ2JR6P.js");
var _chunk6I2T3DLIJs = require("../../chunks/chunk.6I2T3DLI.js");
var _chunkK7JGTRV7Js = require("../../chunks/chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("../../chunks/chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("../../chunks/chunk.AJ3ENQ5C.js");
var _chunkNYIIDP5NJs = require("../../chunks/chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunk4GJTAPTWJs = require("../../chunks/chunk.4GJTAPTW.js");
var _chunkZL53POKZJs = require("../../chunks/chunk.ZL53POKZ.js");
var _chunkP7ZG6EMRJs = require("../../chunks/chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("../../chunks/chunk.3TFKS637.js");
var _chunkQLXRCYS4Js = require("../../chunks/chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunk3Y6SB6QSJs = require("../../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.QLWX3VDK.js":"lEm0W","../../chunks/chunk.OB2RFF5T.js":"l57Bz","../../chunks/chunk.BRQKZQRB.js":"k8ctJ","../../chunks/chunk.P22EBAVT.js":"7EJZ0","../../chunks/chunk.RWUUFNUL.js":"6M29a","../../chunks/chunk.OSU5LOVZ.js":"80fCI","../../chunks/chunk.HLJ2JR6P.js":"6u802","../../chunks/chunk.6I2T3DLI.js":"gPZgL","../../chunks/chunk.K7JGTRV7.js":"eIRq8","../../chunks/chunk.B4BZKR24.js":"6I1PD","../../chunks/chunk.AJ3ENQ5C.js":"8BkBn","../../chunks/chunk.NYIIDP5N.js":"khHuM","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.4GJTAPTW.js":"gLOYh","../../chunks/chunk.ZL53POKZ.js":"4tGlu","../../chunks/chunk.P7ZG6EMR.js":"f9Afu","../../chunks/chunk.3TFKS637.js":"JiKmP","../../chunks/chunk.QLXRCYS4.js":"8hhmC","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.3Y6SB6QS.js":"b3ki7","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEm0W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawer_default", ()=>drawer_default);
var _chunkOB2RFF5TJs = require("./chunk.OB2RFF5T.js");
// src/components/drawer/drawer.ts
var drawer_default = (0, _chunkOB2RFF5TJs.SlDrawer);
(0, _chunkOB2RFF5TJs.SlDrawer).define("sl-drawer");

},{"./chunk.OB2RFF5T.js":"l57Bz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l57Bz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlDrawer", ()=>SlDrawer);
var _chunkBRQKZQRBJs = require("./chunk.BRQKZQRB.js");
var _chunkP22EBAVTJs = require("./chunk.P22EBAVT.js");
var _chunkRWUUFNULJs = require("./chunk.RWUUFNUL.js");
var _chunkHLJ2JR6PJs = require("./chunk.HLJ2JR6P.js");
var _chunkK7JGTRV7Js = require("./chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("./chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("./chunk.AJ3ENQ5C.js");
var _chunkNYIIDP5NJs = require("./chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/drawer/drawer.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _ifDefinedJs = require("lit/directives/if-defined.js");
var _decoratorsJs = require("lit/decorators.js");
// src/internal/string.ts
function uppercaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// src/components/drawer/drawer.component.ts
var SlDrawer = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.hasSlotController = new (0, _chunkNYIIDP5NJs.HasSlotController)(this, "footer");
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.modal = new (0, _chunkP22EBAVTJs.Modal)(this);
        this.open = false;
        this.label = "";
        this.placement = "end";
        this.contained = false;
        this.noHeader = false;
        this.handleDocumentKeyDown = (event)=>{
            if (this.contained) return;
            if (event.key === "Escape" && this.modal.isActive() && this.open) {
                event.stopImmediatePropagation();
                this.requestClose("keyboard");
            }
        };
    }
    firstUpdated() {
        this.drawer.hidden = !this.open;
        if (this.open) {
            this.addOpenListeners();
            if (!this.contained) {
                this.modal.activate();
                (0, _chunkRWUUFNULJs.lockBodyScrolling)(this);
            }
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        (0, _chunkRWUUFNULJs.unlockBodyScrolling)(this);
        this.removeOpenListeners();
    }
    requestClose(source) {
        const slRequestClose = this.emit("sl-request-close", {
            cancelable: true,
            detail: {
                source
            }
        });
        if (slRequestClose.defaultPrevented) {
            const animation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "drawer.denyClose", {
                dir: this.localize.dir()
            });
            (0, _chunkAJ3ENQ5CJs.animateTo)(this.panel, animation.keyframes, animation.options);
            return;
        }
        this.hide();
    }
    addOpenListeners() {
        var _a;
        if ("CloseWatcher" in window) {
            (_a = this.closeWatcher) == null || _a.destroy();
            if (!this.contained) {
                this.closeWatcher = new CloseWatcher();
                this.closeWatcher.onclose = ()=>this.requestClose("keyboard");
            }
        } else document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
        var _a;
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
        (_a = this.closeWatcher) == null || _a.destroy();
    }
    async handleOpenChange() {
        if (this.open) {
            this.emit("sl-show");
            this.addOpenListeners();
            this.originalTrigger = document.activeElement;
            if (!this.contained) {
                this.modal.activate();
                (0, _chunkRWUUFNULJs.lockBodyScrolling)(this);
            }
            const autoFocusTarget = this.querySelector("[autofocus]");
            if (autoFocusTarget) autoFocusTarget.removeAttribute("autofocus");
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.drawer),
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.overlay)
            ]);
            this.drawer.hidden = false;
            requestAnimationFrame(()=>{
                const slInitialFocus = this.emit("sl-initial-focus", {
                    cancelable: true
                });
                if (!slInitialFocus.defaultPrevented) {
                    if (autoFocusTarget) autoFocusTarget.focus({
                        preventScroll: true
                    });
                    else this.panel.focus({
                        preventScroll: true
                    });
                }
                if (autoFocusTarget) autoFocusTarget.setAttribute("autofocus", "");
            });
            const panelAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
                dir: this.localize.dir()
            });
            const overlayAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "drawer.overlay.show", {
                dir: this.localize.dir()
            });
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.panel, panelAnimation.keyframes, panelAnimation.options),
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
            ]);
            this.emit("sl-after-show");
        } else {
            this.emit("sl-hide");
            this.removeOpenListeners();
            if (!this.contained) {
                this.modal.deactivate();
                (0, _chunkRWUUFNULJs.unlockBodyScrolling)(this);
            }
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.drawer),
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.overlay)
            ]);
            const panelAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
                dir: this.localize.dir()
            });
            const overlayAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "drawer.overlay.hide", {
                dir: this.localize.dir()
            });
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(()=>{
                    this.overlay.hidden = true;
                }),
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.panel, panelAnimation.keyframes, panelAnimation.options).then(()=>{
                    this.panel.hidden = true;
                })
            ]);
            this.drawer.hidden = true;
            this.overlay.hidden = false;
            this.panel.hidden = false;
            const trigger = this.originalTrigger;
            if (typeof (trigger == null ? void 0 : trigger.focus) === "function") setTimeout(()=>trigger.focus());
            this.emit("sl-after-hide");
        }
    }
    handleNoModalChange() {
        if (this.open && !this.contained) {
            this.modal.activate();
            (0, _chunkRWUUFNULJs.lockBodyScrolling)(this);
        }
        if (this.open && this.contained) {
            this.modal.deactivate();
            (0, _chunkRWUUFNULJs.unlockBodyScrolling)(this);
        }
    }
    /** Shows the drawer. */ async show() {
        if (this.open) return void 0;
        this.open = true;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-show");
    }
    /** Hides the drawer */ async hide() {
        if (!this.open) return void 0;
        this.open = false;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-hide");
    }
    render() {
        return (0, _lit.html)`
      <div
        part="base"
        class=${(0, _classMapJs.classMap)({
            drawer: true,
            "drawer--open": this.open,
            "drawer--top": this.placement === "top",
            "drawer--end": this.placement === "end",
            "drawer--bottom": this.placement === "bottom",
            "drawer--start": this.placement === "start",
            "drawer--contained": this.contained,
            "drawer--fixed": !this.contained,
            "drawer--rtl": this.localize.dir() === "rtl",
            "drawer--has-footer": this.hasSlotController.test("footer")
        })}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${(0, _ifDefinedJs.ifDefined)(this.noHeader ? this.label : void 0)}
          aria-labelledby=${(0, _ifDefinedJs.ifDefined)(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? (0, _lit.html)`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
};
SlDrawer.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkBRQKZQRBJs.drawer_styles_default)
];
SlDrawer.dependencies = {
    "sl-icon-button": (0, _chunkHLJ2JR6PJs.SlIconButton)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".drawer")
], SlDrawer.prototype, "drawer", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".drawer__panel")
], SlDrawer.prototype, "panel", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".drawer__overlay")
], SlDrawer.prototype, "overlay", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDrawer.prototype, "open", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlDrawer.prototype, "label", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlDrawer.prototype, "placement", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDrawer.prototype, "contained", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "no-header",
        type: Boolean,
        reflect: true
    })
], SlDrawer.prototype, "noHeader", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("open", {
        waitUntilFirstUpdate: true
    })
], SlDrawer.prototype, "handleOpenChange", 1);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("contained", {
        waitUntilFirstUpdate: true
    })
], SlDrawer.prototype, "handleNoModalChange", 1);
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.showTop", {
    keyframes: [
        {
            opacity: 0,
            translate: "0 -100%"
        },
        {
            opacity: 1,
            translate: "0 0"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.hideTop", {
    keyframes: [
        {
            opacity: 1,
            translate: "0 0"
        },
        {
            opacity: 0,
            translate: "0 -100%"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.showEnd", {
    keyframes: [
        {
            opacity: 0,
            translate: "100%"
        },
        {
            opacity: 1,
            translate: "0"
        }
    ],
    rtlKeyframes: [
        {
            opacity: 0,
            translate: "-100%"
        },
        {
            opacity: 1,
            translate: "0"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.hideEnd", {
    keyframes: [
        {
            opacity: 1,
            translate: "0"
        },
        {
            opacity: 0,
            translate: "100%"
        }
    ],
    rtlKeyframes: [
        {
            opacity: 1,
            translate: "0"
        },
        {
            opacity: 0,
            translate: "-100%"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.showBottom", {
    keyframes: [
        {
            opacity: 0,
            translate: "0 100%"
        },
        {
            opacity: 1,
            translate: "0 0"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.hideBottom", {
    keyframes: [
        {
            opacity: 1,
            translate: "0 0"
        },
        {
            opacity: 0,
            translate: "0 100%"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.showStart", {
    keyframes: [
        {
            opacity: 0,
            translate: "-100%"
        },
        {
            opacity: 1,
            translate: "0"
        }
    ],
    rtlKeyframes: [
        {
            opacity: 0,
            translate: "100%"
        },
        {
            opacity: 1,
            translate: "0"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.hideStart", {
    keyframes: [
        {
            opacity: 1,
            translate: "0"
        },
        {
            opacity: 0,
            translate: "-100%"
        }
    ],
    rtlKeyframes: [
        {
            opacity: 1,
            translate: "0"
        },
        {
            opacity: 0,
            translate: "100%"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.denyClose", {
    keyframes: [
        {
            scale: 1
        },
        {
            scale: 1.01
        },
        {
            scale: 1
        }
    ],
    options: {
        duration: 250
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.overlay.show", {
    keyframes: [
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ],
    options: {
        duration: 250
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("drawer.overlay.hide", {
    keyframes: [
        {
            opacity: 1
        },
        {
            opacity: 0
        }
    ],
    options: {
        duration: 250
    }
});

},{"./chunk.BRQKZQRB.js":"k8ctJ","./chunk.P22EBAVT.js":"7EJZ0","./chunk.RWUUFNUL.js":"6M29a","./chunk.HLJ2JR6P.js":"6u802","./chunk.K7JGTRV7.js":"eIRq8","./chunk.B4BZKR24.js":"6I1PD","./chunk.AJ3ENQ5C.js":"8BkBn","./chunk.NYIIDP5N.js":"khHuM","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","lit/directives/if-defined.js":"7ly7x","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8ctJ":[function(require,module,exports,__globalThis) {
// src/components/drawer/drawer.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawer_styles_default", ()=>drawer_styles_default);
var _lit = require("lit");
var drawer_styles_default = (0, _lit.css)`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EJZ0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _chunkOSU5LOVZJs = require("./chunk.OSU5LOVZ.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/internal/active-elements.ts
function* activeElements(activeElement = document.activeElement) {
    if (activeElement === null || activeElement === void 0) return;
    yield activeElement;
    if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") yield* (0, _chunkKAW7D32OJs.__yieldStar)(activeElements(activeElement.shadowRoot.activeElement));
}
function getDeepestActiveElement() {
    return [
        ...activeElements()
    ].pop();
}
// src/internal/modal.ts
var activeModals = [];
var Modal = class {
    constructor(element){
        this.tabDirection = "forward";
        this.handleFocusIn = ()=>{
            if (!this.isActive()) return;
            this.checkFocus();
        };
        this.handleKeyDown = (event)=>{
            var _a;
            if (event.key !== "Tab" || this.isExternalActivated) return;
            if (!this.isActive()) return;
            const currentActiveElement = getDeepestActiveElement();
            this.previousFocus = currentActiveElement;
            if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) return;
            if (event.shiftKey) this.tabDirection = "backward";
            else this.tabDirection = "forward";
            const tabbableElements = (0, _chunkOSU5LOVZJs.getTabbableElements)(this.element);
            let currentFocusIndex = tabbableElements.findIndex((el)=>el === currentActiveElement);
            this.previousFocus = this.currentFocus;
            const addition = this.tabDirection === "forward" ? 1 : -1;
            while(true){
                if (currentFocusIndex + addition >= tabbableElements.length) currentFocusIndex = 0;
                else if (currentFocusIndex + addition < 0) currentFocusIndex = tabbableElements.length - 1;
                else currentFocusIndex += addition;
                this.previousFocus = this.currentFocus;
                const nextFocus = /** @type {HTMLElement} */ tabbableElements[currentFocusIndex];
                if (this.tabDirection === "backward") {
                    if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) return;
                }
                if (nextFocus && this.possiblyHasTabbableChildren(nextFocus)) return;
                event.preventDefault();
                this.currentFocus = nextFocus;
                (_a = this.currentFocus) == null || _a.focus({
                    preventScroll: false
                });
                const allActiveElements = [
                    ...activeElements()
                ];
                if (allActiveElements.includes(this.currentFocus) || !allActiveElements.includes(this.previousFocus)) break;
            }
            setTimeout(()=>this.checkFocus());
        };
        this.handleKeyUp = ()=>{
            this.tabDirection = "forward";
        };
        this.element = element;
        this.elementsWithTabbableControls = [
            "iframe"
        ];
    }
    /** Activates focus trapping. */ activate() {
        activeModals.push(this.element);
        document.addEventListener("focusin", this.handleFocusIn);
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    }
    /** Deactivates focus trapping. */ deactivate() {
        activeModals = activeModals.filter((modal)=>modal !== this.element);
        this.currentFocus = null;
        document.removeEventListener("focusin", this.handleFocusIn);
        document.removeEventListener("keydown", this.handleKeyDown);
        document.removeEventListener("keyup", this.handleKeyUp);
    }
    /** Determines if this modal element is currently active or not. */ isActive() {
        return activeModals[activeModals.length - 1] === this.element;
    }
    /** Activates external modal behavior and temporarily disables focus trapping. */ activateExternal() {
        this.isExternalActivated = true;
    }
    /** Deactivates external modal behavior and re-enables focus trapping. */ deactivateExternal() {
        this.isExternalActivated = false;
    }
    checkFocus() {
        if (this.isActive() && !this.isExternalActivated) {
            const tabbableElements = (0, _chunkOSU5LOVZJs.getTabbableElements)(this.element);
            if (!this.element.matches(":focus-within")) {
                const start = tabbableElements[0];
                const end = tabbableElements[tabbableElements.length - 1];
                const target = this.tabDirection === "forward" ? start : end;
                if (typeof (target == null ? void 0 : target.focus) === "function") {
                    this.currentFocus = target;
                    target.focus({
                        preventScroll: false
                    });
                }
            }
        }
    }
    possiblyHasTabbableChildren(element) {
        return this.elementsWithTabbableControls.includes(element.tagName.toLowerCase()) || element.hasAttribute("controls");
    }
};

},{"./chunk.OSU5LOVZ.js":"80fCI","./chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80fCI":[function(require,module,exports,__globalThis) {
// src/internal/tabbable.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTabbableBoundary", ()=>getTabbableBoundary);
parcelHelpers.export(exports, "getTabbableElements", ()=>getTabbableElements);
var computedStyleMap = /* @__PURE__ */ new WeakMap();
function getCachedComputedStyle(el) {
    let computedStyle = computedStyleMap.get(el);
    if (!computedStyle) {
        computedStyle = window.getComputedStyle(el, null);
        computedStyleMap.set(el, computedStyle);
    }
    return computedStyle;
}
function isVisible(el) {
    if (typeof el.checkVisibility === "function") return el.checkVisibility({
        checkOpacity: false,
        checkVisibilityCSS: true
    });
    const computedStyle = getCachedComputedStyle(el);
    return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
}
function isOverflowingAndTabbable(el) {
    const computedStyle = getCachedComputedStyle(el);
    const { overflowY, overflowX } = computedStyle;
    if (overflowY === "scroll" || overflowX === "scroll") return true;
    if (overflowY !== "auto" || overflowX !== "auto") return false;
    const isOverflowingY = el.scrollHeight > el.clientHeight;
    if (isOverflowingY && overflowY === "auto") return true;
    const isOverflowingX = el.scrollWidth > el.clientWidth;
    if (isOverflowingX && overflowX === "auto") return true;
    return false;
}
function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    const tabindex = Number(el.getAttribute("tabindex"));
    const hasTabindex = el.hasAttribute("tabindex");
    if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) return false;
    if (el.hasAttribute("disabled")) return false;
    if (el.closest("[inert]")) return false;
    if (tag === "input" && el.getAttribute("type") === "radio") {
        const rootNode = el.getRootNode();
        const findRadios = `input[type='radio'][name="${el.getAttribute("name")}"]`;
        const firstChecked = rootNode.querySelector(`${findRadios}:checked`);
        if (firstChecked) return firstChecked === el;
        const firstRadio = rootNode.querySelector(findRadios);
        return firstRadio === el;
    }
    if (!isVisible(el)) return false;
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) return true;
    if (el.hasAttribute("tabindex")) return true;
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") return true;
    const isNativelyTabbable = [
        "button",
        "input",
        "select",
        "textarea",
        "a",
        "audio",
        "video",
        "summary",
        "iframe"
    ].includes(tag);
    if (isNativelyTabbable) return true;
    return isOverflowingAndTabbable(el);
}
function getTabbableBoundary(root) {
    var _a, _b;
    const tabbableElements = getTabbableElements(root);
    const start = (_a = tabbableElements[0]) != null ? _a : null;
    const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
    return {
        start,
        end
    };
}
function getSlottedChildrenOutsideRootElement(slotElement, root) {
    var _a;
    return ((_a = slotElement.getRootNode({
        composed: true
    })) == null ? void 0 : _a.host) !== root;
}
function getTabbableElements(root) {
    const walkedEls = /* @__PURE__ */ new WeakMap();
    const tabbableElements = [];
    function walk(el) {
        if (el instanceof Element) {
            if (el.hasAttribute("inert") || el.closest("[inert]")) return;
            if (walkedEls.has(el)) return;
            walkedEls.set(el, true);
            if (!tabbableElements.includes(el) && isTabbable(el)) tabbableElements.push(el);
            if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root)) el.assignedElements({
                flatten: true
            }).forEach((assignedEl)=>{
                walk(assignedEl);
            });
            if (el.shadowRoot !== null && el.shadowRoot.mode === "open") walk(el.shadowRoot);
        }
        for (const e of el.children)walk(e);
    }
    walk(root);
    return tabbableElements.sort((a, b)=>{
        const aTabindex = Number(a.getAttribute("tabindex")) || 0;
        const bTabindex = Number(b.getAttribute("tabindex")) || 0;
        return bTabindex - aTabindex;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6M29a":[function(require,module,exports,__globalThis) {
// src/internal/offset.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lockBodyScrolling", ()=>lockBodyScrolling);
parcelHelpers.export(exports, "unlockBodyScrolling", ()=>unlockBodyScrolling);
parcelHelpers.export(exports, "scrollIntoView", ()=>scrollIntoView);
function getOffset(element, parent) {
    return {
        top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
        left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
}
// src/internal/scroll.ts
var locks = /* @__PURE__ */ new Set();
function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
}
function getExistingBodyPadding() {
    const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
    if (isNaN(padding) || !padding) return 0;
    return padding;
}
function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    if (!document.documentElement.classList.contains("sl-scroll-lock")) {
        const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
        let scrollbarGutterProperty = getComputedStyle(document.documentElement).scrollbarGutter;
        if (!scrollbarGutterProperty || scrollbarGutterProperty === "auto") scrollbarGutterProperty = "stable";
        if (scrollbarWidth < 2) scrollbarGutterProperty = "";
        document.documentElement.style.setProperty("--sl-scroll-lock-gutter", scrollbarGutterProperty);
        document.documentElement.classList.add("sl-scroll-lock");
        document.documentElement.style.setProperty("--sl-scroll-lock-size", `${scrollbarWidth}px`);
    }
}
function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
        document.documentElement.classList.remove("sl-scroll-lock");
        document.documentElement.style.removeProperty("--sl-scroll-lock-size");
    }
}
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset = getOffset(element, container);
    const offsetTop = offset.top + container.scrollTop;
    const offsetLeft = offset.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
        if (offsetLeft < minX) container.scrollTo({
            left: offsetLeft,
            behavior
        });
        else if (offsetLeft + element.clientWidth > maxX) container.scrollTo({
            left: offsetLeft - container.offsetWidth + element.clientWidth,
            behavior
        });
    }
    if (direction === "vertical" || direction === "both") {
        if (offsetTop < minY) container.scrollTo({
            top: offsetTop,
            behavior
        });
        else if (offsetTop + element.clientHeight > maxY) container.scrollTo({
            top: offsetTop - container.offsetHeight + element.clientHeight,
            behavior
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbAhG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkQ3GT5LXIJs.dropdown_default));
var _chunkQ3GT5LXIJs = require("../../chunks/chunk.Q3GT5LXI.js");
var _chunkGUCRZEMYJs = require("../../chunks/chunk.GUCRZEMY.js");
var _chunkLXP7GVU3Js = require("../../chunks/chunk.LXP7GVU3.js");
var _chunkOSU5LOVZJs = require("../../chunks/chunk.OSU5LOVZ.js");
var _chunkR37ISJMHJs = require("../../chunks/chunk.R37ISJMH.js");
var _chunk3KSWVBQ5Js = require("../../chunks/chunk.3KSWVBQ5.js");
var _chunkK7JGTRV7Js = require("../../chunks/chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("../../chunks/chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("../../chunks/chunk.AJ3ENQ5C.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.Q3GT5LXI.js":"2N2rA","../../chunks/chunk.GUCRZEMY.js":"dHhvR","../../chunks/chunk.LXP7GVU3.js":"cCoUo","../../chunks/chunk.OSU5LOVZ.js":"80fCI","../../chunks/chunk.R37ISJMH.js":"le5Da","../../chunks/chunk.3KSWVBQ5.js":"9UBaz","../../chunks/chunk.K7JGTRV7.js":"eIRq8","../../chunks/chunk.B4BZKR24.js":"6I1PD","../../chunks/chunk.AJ3ENQ5C.js":"8BkBn","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2N2rA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dropdown_default", ()=>dropdown_default);
var _chunkGUCRZEMYJs = require("./chunk.GUCRZEMY.js");
// src/components/dropdown/dropdown.ts
var dropdown_default = (0, _chunkGUCRZEMYJs.SlDropdown);
(0, _chunkGUCRZEMYJs.SlDropdown).define("sl-dropdown");

},{"./chunk.GUCRZEMY.js":"dHhvR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHhvR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlDropdown", ()=>SlDropdown);
var _chunkLXP7GVU3Js = require("./chunk.LXP7GVU3.js");
var _chunkOSU5LOVZJs = require("./chunk.OSU5LOVZ.js");
var _chunkR37ISJMHJs = require("./chunk.R37ISJMH.js");
var _chunkK7JGTRV7Js = require("./chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("./chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("./chunk.AJ3ENQ5C.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/dropdown/dropdown.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _ifDefinedJs = require("lit/directives/if-defined.js");
var _decoratorsJs = require("lit/decorators.js");
var SlDropdown = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.open = false;
        this.placement = "bottom-start";
        this.disabled = false;
        this.stayOpenOnSelect = false;
        this.distance = 0;
        this.skidding = 0;
        this.hoist = false;
        this.sync = void 0;
        this.handleKeyDown = (event)=>{
            if (this.open && event.key === "Escape") {
                event.stopPropagation();
                this.hide();
                this.focusOnTrigger();
            }
        };
        this.handleDocumentKeyDown = (event)=>{
            var _a;
            if (event.key === "Escape" && this.open && !this.closeWatcher) {
                event.stopPropagation();
                this.focusOnTrigger();
                this.hide();
                return;
            }
            if (event.key === "Tab") {
                if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
                    event.preventDefault();
                    this.hide();
                    this.focusOnTrigger();
                    return;
                }
                setTimeout(()=>{
                    var _a2, _b, _c;
                    const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
                    if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) this.hide();
                });
            }
        };
        this.handleDocumentMouseDown = (event)=>{
            const path = event.composedPath();
            if (this.containingElement && !path.includes(this.containingElement)) this.hide();
        };
        this.handlePanelSelect = (event)=>{
            const target = event.target;
            if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
                this.hide();
                this.focusOnTrigger();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.containingElement) this.containingElement = this;
    }
    firstUpdated() {
        this.panel.hidden = !this.open;
        if (this.open) {
            this.addOpenListeners();
            this.popup.active = true;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeOpenListeners();
        this.hide();
    }
    focusOnTrigger() {
        const trigger = this.trigger.assignedElements({
            flatten: true
        })[0];
        if (typeof (trigger == null ? void 0 : trigger.focus) === "function") trigger.focus();
    }
    getMenu() {
        return this.panel.assignedElements({
            flatten: true
        }).find((el)=>el.tagName.toLowerCase() === "sl-menu");
    }
    handleTriggerClick() {
        if (this.open) this.hide();
        else {
            this.show();
            this.focusOnTrigger();
        }
    }
    async handleTriggerKeyDown(event) {
        if ([
            " ",
            "Enter"
        ].includes(event.key)) {
            event.preventDefault();
            this.handleTriggerClick();
            return;
        }
        const menu = this.getMenu();
        if (menu) {
            const menuItems = menu.getAllItems();
            const firstMenuItem = menuItems[0];
            const lastMenuItem = menuItems[menuItems.length - 1];
            if ([
                "ArrowDown",
                "ArrowUp",
                "Home",
                "End"
            ].includes(event.key)) {
                event.preventDefault();
                if (!this.open) {
                    this.show();
                    await this.updateComplete;
                }
                if (menuItems.length > 0) this.updateComplete.then(()=>{
                    if (event.key === "ArrowDown" || event.key === "Home") {
                        menu.setCurrentItem(firstMenuItem);
                        firstMenuItem.focus();
                    }
                    if (event.key === "ArrowUp" || event.key === "End") {
                        menu.setCurrentItem(lastMenuItem);
                        lastMenuItem.focus();
                    }
                });
            }
        }
    }
    handleTriggerKeyUp(event) {
        if (event.key === " ") event.preventDefault();
    }
    handleTriggerSlotChange() {
        this.updateAccessibleTrigger();
    }
    //
    // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
    // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
    // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
    // a child of the slotted element, or an element in the slotted element's shadow root.
    //
    // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
    //
    // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
    //
    updateAccessibleTrigger() {
        const assignedElements = this.trigger.assignedElements({
            flatten: true
        });
        const accessibleTrigger = assignedElements.find((el)=>(0, _chunkOSU5LOVZJs.getTabbableBoundary)(el).start);
        let target;
        if (accessibleTrigger) {
            switch(accessibleTrigger.tagName.toLowerCase()){
                // Shoelace buttons have to update the internal button so it's announced correctly by screen readers
                case "sl-button":
                case "sl-icon-button":
                    target = accessibleTrigger.button;
                    break;
                default:
                    target = accessibleTrigger;
            }
            target.setAttribute("aria-haspopup", "true");
            target.setAttribute("aria-expanded", this.open ? "true" : "false");
        }
    }
    /** Shows the dropdown panel. */ async show() {
        if (this.open) return void 0;
        this.open = true;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-show");
    }
    /** Hides the dropdown panel */ async hide() {
        if (!this.open) return void 0;
        this.open = false;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-hide");
    }
    /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */ reposition() {
        this.popup.reposition();
    }
    addOpenListeners() {
        var _a;
        this.panel.addEventListener("sl-select", this.handlePanelSelect);
        if ("CloseWatcher" in window) {
            (_a = this.closeWatcher) == null || _a.destroy();
            this.closeWatcher = new CloseWatcher();
            this.closeWatcher.onclose = ()=>{
                this.hide();
                this.focusOnTrigger();
            };
        } else this.panel.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keydown", this.handleDocumentKeyDown);
        document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
        var _a;
        if (this.panel) {
            this.panel.removeEventListener("sl-select", this.handlePanelSelect);
            this.panel.removeEventListener("keydown", this.handleKeyDown);
        }
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
        document.removeEventListener("mousedown", this.handleDocumentMouseDown);
        (_a = this.closeWatcher) == null || _a.destroy();
    }
    async handleOpenChange() {
        if (this.disabled) {
            this.open = false;
            return;
        }
        this.updateAccessibleTrigger();
        if (this.open) {
            this.emit("sl-show");
            this.addOpenListeners();
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this);
            this.panel.hidden = false;
            this.popup.active = true;
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "dropdown.show", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.popup.popup, keyframes, options);
            this.emit("sl-after-show");
        } else {
            this.emit("sl-hide");
            this.removeOpenListeners();
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this);
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "dropdown.hide", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.popup.popup, keyframes, options);
            this.panel.hidden = true;
            this.popup.active = false;
            this.emit("sl-after-hide");
        }
    }
    render() {
        return (0, _lit.html)`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${(0, _ifDefinedJs.ifDefined)(this.sync ? this.sync : void 0)}
        class=${(0, _classMapJs.classMap)({
            dropdown: true,
            "dropdown--open": this.open
        })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
    }
};
SlDropdown.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkLXP7GVU3Js.dropdown_styles_default)
];
SlDropdown.dependencies = {
    "sl-popup": (0, _chunkR37ISJMHJs.SlPopup)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".dropdown")
], SlDropdown.prototype, "popup", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".dropdown__trigger")
], SlDropdown.prototype, "trigger", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".dropdown__panel")
], SlDropdown.prototype, "panel", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDropdown.prototype, "open", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlDropdown.prototype, "placement", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDropdown.prototype, "disabled", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "stay-open-on-select",
        type: Boolean,
        reflect: true
    })
], SlDropdown.prototype, "stayOpenOnSelect", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: false
    })
], SlDropdown.prototype, "containingElement", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Number
    })
], SlDropdown.prototype, "distance", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Number
    })
], SlDropdown.prototype, "skidding", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], SlDropdown.prototype, "hoist", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlDropdown.prototype, "sync", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("open", {
        waitUntilFirstUpdate: true
    })
], SlDropdown.prototype, "handleOpenChange", 1);
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("dropdown.show", {
    keyframes: [
        {
            opacity: 0,
            scale: 0.9
        },
        {
            opacity: 1,
            scale: 1
        }
    ],
    options: {
        duration: 100,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("dropdown.hide", {
    keyframes: [
        {
            opacity: 1,
            scale: 1
        },
        {
            opacity: 0,
            scale: 0.9
        }
    ],
    options: {
        duration: 100,
        easing: "ease"
    }
});

},{"./chunk.LXP7GVU3.js":"cCoUo","./chunk.OSU5LOVZ.js":"80fCI","./chunk.R37ISJMH.js":"le5Da","./chunk.K7JGTRV7.js":"eIRq8","./chunk.B4BZKR24.js":"6I1PD","./chunk.AJ3ENQ5C.js":"8BkBn","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","lit/directives/if-defined.js":"7ly7x","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCoUo":[function(require,module,exports,__globalThis) {
// src/components/dropdown/dropdown.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dropdown_styles_default", ()=>dropdown_styles_default);
var _lit = require("lit");
var dropdown_styles_default = (0, _lit.css)`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"le5Da":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlPopup", ()=>SlPopup);
var _chunk3KSWVBQ5Js = require("./chunk.3KSWVBQ5.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/popup/popup.component.ts
var _dom = require("@floating-ui/dom");
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _composedOffsetPosition = require("composed-offset-position");
var _decoratorsJs = require("lit/decorators.js");
function isVirtualElement(e) {
    return e !== null && typeof e === "object" && "getBoundingClientRect" in e && ("contextElement" in e ? e instanceof Element : true);
}
var SlPopup = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.active = false;
        this.placement = "top";
        this.strategy = "absolute";
        this.distance = 0;
        this.skidding = 0;
        this.arrow = false;
        this.arrowPlacement = "anchor";
        this.arrowPadding = 10;
        this.flip = false;
        this.flipFallbackPlacements = "";
        this.flipFallbackStrategy = "best-fit";
        this.flipPadding = 0;
        this.shift = false;
        this.shiftPadding = 0;
        this.autoSizePadding = 0;
        this.hoverBridge = false;
        this.updateHoverBridge = ()=>{
            if (this.hoverBridge && this.anchorEl) {
                const anchorRect = this.anchorEl.getBoundingClientRect();
                const popupRect = this.popup.getBoundingClientRect();
                const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
                let topLeftX = 0;
                let topLeftY = 0;
                let topRightX = 0;
                let topRightY = 0;
                let bottomLeftX = 0;
                let bottomLeftY = 0;
                let bottomRightX = 0;
                let bottomRightY = 0;
                if (isVertical) {
                    if (anchorRect.top < popupRect.top) {
                        topLeftX = anchorRect.left;
                        topLeftY = anchorRect.bottom;
                        topRightX = anchorRect.right;
                        topRightY = anchorRect.bottom;
                        bottomLeftX = popupRect.left;
                        bottomLeftY = popupRect.top;
                        bottomRightX = popupRect.right;
                        bottomRightY = popupRect.top;
                    } else {
                        topLeftX = popupRect.left;
                        topLeftY = popupRect.bottom;
                        topRightX = popupRect.right;
                        topRightY = popupRect.bottom;
                        bottomLeftX = anchorRect.left;
                        bottomLeftY = anchorRect.top;
                        bottomRightX = anchorRect.right;
                        bottomRightY = anchorRect.top;
                    }
                } else if (anchorRect.left < popupRect.left) {
                    topLeftX = anchorRect.right;
                    topLeftY = anchorRect.top;
                    topRightX = popupRect.left;
                    topRightY = popupRect.top;
                    bottomLeftX = anchorRect.right;
                    bottomLeftY = anchorRect.bottom;
                    bottomRightX = popupRect.left;
                    bottomRightY = popupRect.bottom;
                } else {
                    topLeftX = popupRect.right;
                    topLeftY = popupRect.top;
                    topRightX = anchorRect.left;
                    topRightY = anchorRect.top;
                    bottomLeftX = popupRect.right;
                    bottomLeftY = popupRect.bottom;
                    bottomRightX = anchorRect.left;
                    bottomRightY = anchorRect.bottom;
                }
                this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
                this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
                this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
                this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
                this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
                this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
                this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
                this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
            }
        };
    }
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.start();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.stop();
    }
    async updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("active")) {
            if (this.active) this.start();
            else this.stop();
        }
        if (changedProps.has("anchor")) this.handleAnchorChange();
        if (this.active) {
            await this.updateComplete;
            this.reposition();
        }
    }
    async handleAnchorChange() {
        await this.stop();
        if (this.anchor && typeof this.anchor === "string") {
            const root = this.getRootNode();
            this.anchorEl = root.getElementById(this.anchor);
        } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) this.anchorEl = this.anchor;
        else this.anchorEl = this.querySelector('[slot="anchor"]');
        if (this.anchorEl instanceof HTMLSlotElement) this.anchorEl = this.anchorEl.assignedElements({
            flatten: true
        })[0];
        if (this.anchorEl && this.active) this.start();
    }
    start() {
        if (!this.anchorEl || !this.active) return;
        this.cleanup = (0, _dom.autoUpdate)(this.anchorEl, this.popup, ()=>{
            this.reposition();
        });
    }
    async stop() {
        return new Promise((resolve)=>{
            if (this.cleanup) {
                this.cleanup();
                this.cleanup = void 0;
                this.removeAttribute("data-current-placement");
                this.style.removeProperty("--auto-size-available-width");
                this.style.removeProperty("--auto-size-available-height");
                requestAnimationFrame(()=>resolve());
            } else resolve();
        });
    }
    /** Forces the popup to recalculate and reposition itself. */ reposition() {
        if (!this.active || !this.anchorEl) return;
        const middleware = [
            // The offset middleware goes first
            (0, _dom.offset)({
                mainAxis: this.distance,
                crossAxis: this.skidding
            })
        ];
        if (this.sync) middleware.push((0, _dom.size)({
            apply: ({ rects })=>{
                const syncWidth = this.sync === "width" || this.sync === "both";
                const syncHeight = this.sync === "height" || this.sync === "both";
                this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
                this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
        }));
        else {
            this.popup.style.width = "";
            this.popup.style.height = "";
        }
        if (this.flip) middleware.push((0, _dom.flip)({
            boundary: this.flipBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
        }));
        if (this.shift) middleware.push((0, _dom.shift)({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding
        }));
        if (this.autoSize) middleware.push((0, _dom.size)({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight })=>{
                if (this.autoSize === "vertical" || this.autoSize === "both") this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
                else this.style.removeProperty("--auto-size-available-height");
                if (this.autoSize === "horizontal" || this.autoSize === "both") this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
                else this.style.removeProperty("--auto-size-available-width");
            }
        }));
        else {
            this.style.removeProperty("--auto-size-available-width");
            this.style.removeProperty("--auto-size-available-height");
        }
        if (this.arrow) middleware.push((0, _dom.arrow)({
            element: this.arrowEl,
            padding: this.arrowPadding
        }));
        const getOffsetParent = this.strategy === "absolute" ? (element)=>(0, _dom.platform).getOffsetParent(element, (0, _composedOffsetPosition.offsetParent)) : (0, _dom.platform).getOffsetParent;
        (0, _dom.computePosition)(this.anchorEl, this.popup, {
            placement: this.placement,
            middleware,
            strategy: this.strategy,
            platform: (0, _chunkKAW7D32OJs.__spreadProps)((0, _chunkKAW7D32OJs.__spreadValues)({}, (0, _dom.platform)), {
                getOffsetParent
            })
        }).then(({ x, y, middlewareData, placement })=>{
            const isRtl = this.localize.dir() === "rtl";
            const staticSide = {
                top: "bottom",
                right: "left",
                bottom: "top",
                left: "right"
            }[placement.split("-")[0]];
            this.setAttribute("data-current-placement", placement);
            Object.assign(this.popup.style, {
                left: `${x}px`,
                top: `${y}px`
            });
            if (this.arrow) {
                const arrowX = middlewareData.arrow.x;
                const arrowY = middlewareData.arrow.y;
                let top = "";
                let right = "";
                let bottom = "";
                let left = "";
                if (this.arrowPlacement === "start") {
                    const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
                    top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
                    right = isRtl ? value : "";
                    left = isRtl ? "" : value;
                } else if (this.arrowPlacement === "end") {
                    const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
                    right = isRtl ? "" : value;
                    left = isRtl ? value : "";
                    bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
                } else if (this.arrowPlacement === "center") {
                    left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
                    top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
                } else {
                    left = typeof arrowX === "number" ? `${arrowX}px` : "";
                    top = typeof arrowY === "number" ? `${arrowY}px` : "";
                }
                Object.assign(this.arrowEl.style, {
                    top,
                    right,
                    bottom,
                    left,
                    [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
                });
            }
        });
        requestAnimationFrame(()=>this.updateHoverBridge());
        this.emit("sl-reposition");
    }
    render() {
        return (0, _lit.html)`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${(0, _classMapJs.classMap)({
            "popup-hover-bridge": true,
            "popup-hover-bridge--visible": this.hoverBridge && this.active
        })}
      ></span>

      <div
        part="popup"
        class=${(0, _classMapJs.classMap)({
            popup: true,
            "popup--active": this.active,
            "popup--fixed": this.strategy === "fixed",
            "popup--has-arrow": this.arrow
        })}
      >
        <slot></slot>
        ${this.arrow ? (0, _lit.html)`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
    }
};
SlPopup.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunk3KSWVBQ5Js.popup_styles_default)
];
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".popup")
], SlPopup.prototype, "popup", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlPopup.prototype, "anchor", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlPopup.prototype, "active", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlPopup.prototype, "placement", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlPopup.prototype, "strategy", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Number
    })
], SlPopup.prototype, "distance", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Number
    })
], SlPopup.prototype, "skidding", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], SlPopup.prototype, "arrow", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "arrow-placement"
    })
], SlPopup.prototype, "arrowPlacement", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "arrow-padding",
        type: Number
    })
], SlPopup.prototype, "arrowPadding", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], SlPopup.prototype, "flip", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "flip-fallback-placements",
        converter: {
            fromAttribute: (value)=>{
                return value.split(" ").map((p)=>p.trim()).filter((p)=>p !== "");
            },
            toAttribute: (value)=>{
                return value.join(" ");
            }
        }
    })
], SlPopup.prototype, "flipFallbackPlacements", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "flip-fallback-strategy"
    })
], SlPopup.prototype, "flipFallbackStrategy", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Object
    })
], SlPopup.prototype, "flipBoundary", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "flip-padding",
        type: Number
    })
], SlPopup.prototype, "flipPadding", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], SlPopup.prototype, "shift", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Object
    })
], SlPopup.prototype, "shiftBoundary", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "shift-padding",
        type: Number
    })
], SlPopup.prototype, "shiftPadding", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "auto-size"
    })
], SlPopup.prototype, "autoSize", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlPopup.prototype, "sync", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Object
    })
], SlPopup.prototype, "autoSizeBoundary", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "auto-size-padding",
        type: Number
    })
], SlPopup.prototype, "autoSizePadding", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "hover-bridge",
        type: Boolean
    })
], SlPopup.prototype, "hoverBridge", 2);

},{"./chunk.3KSWVBQ5.js":"9UBaz","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","@floating-ui/dom":"17xk8","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","composed-offset-position":"F960q","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UBaz":[function(require,module,exports,__globalThis) {
// src/components/popup/popup.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popup_styles_default", ()=>popup_styles_default);
var _lit = require("lit");
var popup_styles_default = (0, _lit.css)`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17xk8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOverflowAncestors", ()=>(0, _dom.getOverflowAncestors));
parcelHelpers.export(exports, "arrow", ()=>arrow);
parcelHelpers.export(exports, "autoPlacement", ()=>autoPlacement);
parcelHelpers.export(exports, "autoUpdate", ()=>autoUpdate);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "detectOverflow", ()=>detectOverflow);
parcelHelpers.export(exports, "flip", ()=>flip);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "inline", ()=>inline);
parcelHelpers.export(exports, "limitShift", ()=>limitShift);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "platform", ()=>platform);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "size", ()=>size);
var _core = require("@floating-ui/core");
var _utils = require("@floating-ui/utils");
var _dom = require("@floating-ui/utils/dom");
function getCssDimensions(element) {
    const css = (0, _dom.getComputedStyle)(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, _dom.isHTMLElement)(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, _utils.round)(width) !== offsetWidth || (0, _utils.round)(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, _dom.isElement)(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, _dom.isHTMLElement)(domElement)) return (0, _utils.createCoords)(1);
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, _utils.round)(rect.width) : rect.width) / width;
    let y = ($ ? (0, _utils.round)(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) x = 1;
    if (!y || !Number.isFinite(y)) y = 1;
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, _utils.createCoords)(0);
function getVisualOffsets(element) {
    const win = (0, _dom.getWindow)(element);
    if (!(0, _dom.isWebKit)() || !win.visualViewport) return noOffsets;
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) isFixed = false;
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, _dom.getWindow)(element)) return false;
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, _utils.createCoords)(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, _dom.isElement)(offsetParent)) scale = getScale(offsetParent);
        } else scale = getScale(element);
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, _utils.createCoords)(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, _dom.getWindow)(domElement);
        const offsetWin = offsetParent && (0, _dom.isElement)(offsetParent) ? (0, _dom.getWindow)(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, _dom.getFrameElement)(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, _dom.getComputedStyle)(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, _dom.getWindow)(currentIFrame);
            currentIFrame = (0, _dom.getFrameElement)(currentWin);
        }
    }
    return (0, _core.rectToClientRect)({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, _dom.getNodeScroll)(element).scrollLeft;
    if (!rect) return getBoundingClientRect((0, _dom.getDocumentElement)(element)).left + leftScroll;
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) ignoreScrollbarX = false;
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect));
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, _dom.getDocumentElement)(offsetParent);
    const topLayer = elements ? (0, _dom.isTopLayer)(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) return rect;
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, _utils.createCoords)(1);
    const offsets = (0, _utils.createCoords)(0);
    const isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) scroll = (0, _dom.getNodeScroll)(offsetParent);
        if ((0, _dom.isHTMLElement)(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : (0, _utils.createCoords)(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, _dom.getDocumentElement)(element);
    const scroll = (0, _dom.getNodeScroll)(element);
    const body = element.ownerDocument.body;
    const width = (0, _utils.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, _utils.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, _dom.getComputedStyle)(body).direction === 'rtl') x += (0, _utils.max)(html.clientWidth, body.clientWidth) - width;
    return {
        width,
        height,
        x,
        y
    };
}
function getViewportRect(element, strategy) {
    const win = (0, _dom.getWindow)(element);
    const html = (0, _dom.getDocumentElement)(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, _dom.isWebKit)();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, _dom.isHTMLElement)(element) ? getScale(element) : (0, _utils.createCoords)(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') rect = getViewportRect(element, strategy);
    else if (clippingAncestor === 'document') rect = getDocumentRect((0, _dom.getDocumentElement)(element));
    else if ((0, _dom.isElement)(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, _core.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, _dom.getParentNode)(element);
    if (parentNode === stopNode || !(0, _dom.isElement)(parentNode) || (0, _dom.isLastTraversableNode)(parentNode)) return false;
    return (0, _dom.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) return cachedResult;
    let result = (0, _dom.getOverflowAncestors)(element, [], false).filter((el)=>(0, _dom.isElement)(el) && (0, _dom.getNodeName)(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, _dom.getComputedStyle)(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, _dom.getParentNode)(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, _dom.isElement)(currentNode) && !(0, _dom.isLastTraversableNode)(currentNode)){
        const computedStyle = (0, _dom.getComputedStyle)(currentNode);
        const currentNodeIsContaining = (0, _dom.isContainingBlock)(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') currentContainingBlockComputedStyle = null;
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && [
            'absolute',
            'fixed'
        ].includes(currentContainingBlockComputedStyle.position) || (0, _dom.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) // Drop non-containing blocks.
        result = result.filter((ancestor)=>ancestor !== currentNode);
        else // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
        currentNode = (0, _dom.getParentNode)(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, _dom.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, _utils.max)(rect.top, accRect.top);
        accRect.right = (0, _utils.min)(rect.right, accRect.right);
        accRect.bottom = (0, _utils.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _utils.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
    const documentElement = (0, _dom.getDocumentElement)(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, _utils.createCoords)(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) scroll = (0, _dom.getNodeScroll)(offsetParent);
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
        // Firefox with layout.scrollbar.side = 3 in about:config to test this.
        offsets.x = getWindowScrollBarX(documentElement);
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, _utils.createCoords)(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, _dom.getComputedStyle)(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, _dom.isHTMLElement)(element) || (0, _dom.getComputedStyle)(element).position === 'fixed') return null;
    if (polyfill) return polyfill(element);
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, _dom.getDocumentElement)(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, _dom.getWindow)(element);
    if ((0, _dom.isTopLayer)(element)) return win;
    if (!(0, _dom.isHTMLElement)(element)) {
        let svgOffsetParent = (0, _dom.getParentNode)(element);
        while(svgOffsetParent && !(0, _dom.isLastTraversableNode)(svgOffsetParent)){
            if ((0, _dom.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
            svgOffsetParent = (0, _dom.getParentNode)(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, _dom.isTableElement)(offsetParent) && isStaticPositioned(offsetParent))offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    if (offsetParent && (0, _dom.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0, _dom.isContainingBlock)(offsetParent)) return win;
    return offsetParent || (0, _dom.getContainingBlock)(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, _dom.getComputedStyle)(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: (0, _dom.getDocumentElement),
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: (0, _dom.isElement),
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, _dom.getDocumentElement)(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) skip = false;
        if (threshold === void 0) threshold = 1;
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) onMove();
        if (!width || !height) return;
        const insetTop = (0, _utils.floor)(top);
        const insetRight = (0, _utils.floor)(root.clientWidth - (left + width));
        const insetBottom = (0, _utils.floor)(root.clientHeight - (top + height));
        const insetLeft = (0, _utils.floor)(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, _utils.max)(0, (0, _utils.min)(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) return refresh();
                if (!ratio) // If the reference is clipped, the ratio is 0. Throttle the refresh
                // to prevent an infinite loop of updates.
                timeoutId = setTimeout(()=>{
                    refresh(false, 1e-7);
                }, 1000);
                else refresh(false, ratio);
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) // It's possible that even though the ratio is reported as 1, the
            // element is not actually fully within the IntersectionObserver's root
            // area anymore. This can happen under performance constraints. This may
            // be a bug in the browser's IntersectionObserver implementation. To
            // work around this, we compare the element's bounding rect now with
            // what it was at the time we created the IntersectionObserver. If they
            // are not equal then the element moved, so we refresh.
            refresh();
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) options = {};
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, _dom.getOverflowAncestors)(referenceEl) : [],
        ...(0, _dom.getOverflowAncestors)(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) frameLoop();
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) cancelAnimationFrame(frameId);
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = (0, _core.detectOverflow);
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (0, _core.offset);
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (0, _core.autoPlacement);
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (0, _core.shift);
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (0, _core.flip);
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (0, _core.size);
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (0, _core.hide);
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (0, _core.arrow);
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (0, _core.inline);
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (0, _core.limitShift);
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, _core.computePosition)(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};

},{"@floating-ui/core":"emYbc","@floating-ui/utils":"hjXqt","@floating-ui/utils/dom":"4tx7z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emYbc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rectToClientRect", ()=>(0, _utils.rectToClientRect));
parcelHelpers.export(exports, "arrow", ()=>arrow);
parcelHelpers.export(exports, "autoPlacement", ()=>autoPlacement);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "detectOverflow", ()=>detectOverflow);
parcelHelpers.export(exports, "flip", ()=>flip);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "inline", ()=>inline);
parcelHelpers.export(exports, "limitShift", ()=>limitShift);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "size", ()=>size);
var _utils = require("@floating-ui/utils");
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, _utils.getSideAxis)(placement);
    const alignmentAxis = (0, _utils.getAlignmentAxis)(placement);
    const alignLength = (0, _utils.getAxisLength)(alignmentAxis);
    const side = (0, _utils.getSide)(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, _utils.getAlignment)(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) statefulPlacement = reset.placement;
                if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
                    reference,
                    floating,
                    strategy
                }) : reset.rects;
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) options = {};
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, _utils.evaluate)(options, state);
    const paddingObject = (0, _utils.getPaddingObject)(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, _utils.rectToClientRect)(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, _utils.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, _utils.evaluate)(options, state) || {};
            if (element == null) return {};
            const paddingObject = (0, _utils.getPaddingObject)(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, _utils.getAlignmentAxis)(placement);
            const length = (0, _utils.getAxisLength)(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, _utils.min)(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, _utils.min)(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, _utils.clamp)(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, _utils.getAlignment)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, _utils.getAlignment)(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, _utils.getAlignment)(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, _utils.getSide)(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) return (0, _utils.getAlignment)(placement) === alignment || (autoAlignment ? (0, _utils.getOppositeAlignmentPlacement)(placement) !== placement : false);
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = (0, _utils.placements), autoAlignment = true, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === (0, _utils.placements) ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) return {};
            const alignmentSides = (0, _utils.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) return {
                reset: {
                    placement: placements$1[0]
                }
            };
            const currentOverflows = [
                overflow[(0, _utils.getSide)(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: nextPlacement
                }
            };
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, _utils.getAlignment)(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, _utils.getAlignment)(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: resetPlacement
                }
            };
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            const side = (0, _utils.getSide)(placement);
            const initialSideAxis = (0, _utils.getSideAxis)(initialPlacement);
            const isBasePlacement = (0, _utils.getSide)(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, _utils.getOppositePlacement)(initialPlacement)
            ] : (0, _utils.getExpandedPlacements)(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...(0, _utils.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) overflows.push(overflow[side]);
            if (checkCrossAxis) {
                const sides = (0, _utils.getAlignmentSides)(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) // Try next placement and re-run the lifecycle.
                return {
                    data: {
                        index: nextIndex,
                        overflows: overflowsData
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) switch(fallbackStrategy){
                    case 'bestFit':
                        {
                            var _overflowsData$filter2;
                            const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                if (hasFallbackAxisSideDirection) {
                                    const currentSideAxis = (0, _utils.getSideAxis)(d.placement);
                                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                    // reading directions favoring greater width.
                                    currentSideAxis === 'y';
                                }
                                return true;
                            }).map((d)=>[
                                    d.placement,
                                    d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                            if (placement) resetPlacement = placement;
                            break;
                        }
                    case 'initialPlacement':
                        resetPlacement = initialPlacement;
                        break;
                }
                if (placement !== resetPlacement) return {
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return (0, _utils.sides).some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, _utils.min)(...rects.map((rect)=>rect.left));
    const minY = (0, _utils.min)(...rects.map((rect)=>rect.top));
    const maxX = (0, _utils.max)(...rects.map((rect)=>rect.right));
    const maxY = (0, _utils.max)(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) groups.push([
            rect
        ]);
        else groups[groups.length - 1].push(rect);
        prevRect = rect;
    }
    return groups.map((rect)=>(0, _utils.rectToClientRect)(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, _utils.evaluate)(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, _utils.rectToClientRect)(getBoundingRect(nativeClientRects));
            const paddingObject = (0, _utils.getPaddingObject)(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) // Find the first rect in which the point is fully inside.
                return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, _utils.getSideAxis)(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, _utils.getSide)(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, _utils.getSide)(placement) === 'left';
                    const maxRight = (0, _utils.max)(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, _utils.min)(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) return {
                reset: {
                    rects: resetRects
                }
            };
            return {};
        }
    };
};
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, _utils.getSide)(placement);
    const alignment = (0, _utils.getAlignment)(placement);
    const isVertical = (0, _utils.getSideAxis)(placement) === 'y';
    const mainAxisMulti = [
        'left',
        'top'
    ].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, _utils.evaluate)(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) options = 0;
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, _utils.getSideAxis)((0, _utils.getSide)(placement));
            const mainAxis = (0, _utils.getOppositeAxis)(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, _utils.clamp)(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, _utils.clamp)(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) options = {};
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, _utils.evaluate)(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, _utils.getSideAxis)(placement);
            const mainAxis = (0, _utils.getOppositeAxis)(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, _utils.evaluate)(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
                else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = [
                    'top',
                    'left'
                ].includes((0, _utils.getSide)(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
                else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, _utils.getSide)(placement);
            const alignment = (0, _utils.getAlignment)(placement);
            const isYAxis = (0, _utils.getSideAxis)(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, _utils.min)(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, _utils.min)(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) availableWidth = maximumClippingWidth;
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) availableHeight = maximumClippingHeight;
            if (noShift && !alignment) {
                const xMin = (0, _utils.max)(overflow.left, 0);
                const xMax = (0, _utils.max)(overflow.right, 0);
                const yMin = (0, _utils.max)(overflow.top, 0);
                const yMax = (0, _utils.max)(overflow.bottom, 0);
                if (isYAxis) availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, _utils.max)(overflow.left, overflow.right));
                else availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, _utils.max)(overflow.top, overflow.bottom));
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) return {
                reset: {
                    rects: true
                }
            };
            return {};
        }
    };
};

},{"@floating-ui/utils":"hjXqt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjXqt":[function(require,module,exports,__globalThis) {
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alignments", ()=>alignments);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "createCoords", ()=>createCoords);
parcelHelpers.export(exports, "evaluate", ()=>evaluate);
parcelHelpers.export(exports, "expandPaddingObject", ()=>expandPaddingObject);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "getAlignment", ()=>getAlignment);
parcelHelpers.export(exports, "getAlignmentAxis", ()=>getAlignmentAxis);
parcelHelpers.export(exports, "getAlignmentSides", ()=>getAlignmentSides);
parcelHelpers.export(exports, "getAxisLength", ()=>getAxisLength);
parcelHelpers.export(exports, "getExpandedPlacements", ()=>getExpandedPlacements);
parcelHelpers.export(exports, "getOppositeAlignmentPlacement", ()=>getOppositeAlignmentPlacement);
parcelHelpers.export(exports, "getOppositeAxis", ()=>getOppositeAxis);
parcelHelpers.export(exports, "getOppositeAxisPlacements", ()=>getOppositeAxisPlacements);
parcelHelpers.export(exports, "getOppositePlacement", ()=>getOppositePlacement);
parcelHelpers.export(exports, "getPaddingObject", ()=>getPaddingObject);
parcelHelpers.export(exports, "getSide", ()=>getSide);
parcelHelpers.export(exports, "getSideAxis", ()=>getSideAxis);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "rectToClientRect", ()=>rectToClientRect);
parcelHelpers.export(exports, "round", ()=>round);
parcelHelpers.export(exports, "sides", ()=>sides);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
    return [
        'top',
        'bottom'
    ].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) rtl = false;
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
    const lr = [
        'left',
        'right'
    ];
    const rl = [
        'right',
        'left'
    ];
    const tb = [
        'top',
        'bottom'
    ];
    const bt = [
        'bottom',
        'top'
    ];
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rl : lr;
            return isStart ? lr : rl;
        case 'left':
        case 'right':
            return isStart ? tb : bt;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tx7z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
parcelHelpers.export(exports, "getContainingBlock", ()=>getContainingBlock);
parcelHelpers.export(exports, "getDocumentElement", ()=>getDocumentElement);
parcelHelpers.export(exports, "getFrameElement", ()=>getFrameElement);
parcelHelpers.export(exports, "getNearestOverflowAncestor", ()=>getNearestOverflowAncestor);
parcelHelpers.export(exports, "getNodeName", ()=>getNodeName);
parcelHelpers.export(exports, "getNodeScroll", ()=>getNodeScroll);
parcelHelpers.export(exports, "getOverflowAncestors", ()=>getOverflowAncestors);
parcelHelpers.export(exports, "getParentNode", ()=>getParentNode);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "isContainingBlock", ()=>isContainingBlock);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isLastTraversableNode", ()=>isLastTraversableNode);
parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "isOverflowElement", ()=>isOverflowElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
parcelHelpers.export(exports, "isTableElement", ()=>isTableElement);
parcelHelpers.export(exports, "isTopLayer", ()=>isTopLayer);
parcelHelpers.export(exports, "isWebKit", ()=>isWebKit);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) return (node.nodeName || '').toLowerCase();
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) return false;
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) return false;
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) return false;
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') return false;
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && ![
        'inline',
        'contents'
    ].includes(display);
}
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].includes(getNodeName(element));
}
function isTopLayer(element) {
    return [
        ':popover-open',
        ':modal'
    ].some((selector)=>{
        try {
            return element.matches(selector);
        } catch (e) {
            return false;
        }
    });
}
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return [
        'transform',
        'translate',
        'scale',
        'rotate',
        'perspective'
    ].some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || [
        'transform',
        'translate',
        'scale',
        'rotate',
        'perspective',
        'filter'
    ].some((value)=>(css.willChange || '').includes(value)) || [
        'paint',
        'layout',
        'strict',
        'content'
    ].some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) return currentNode;
        else if (isTopLayer(currentNode)) return null;
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
    return [
        'html',
        'body',
        '#document'
    ].includes(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') return node;
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) list = [];
    if (traverseIframes === void 0) traverseIframes = true;
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"F960q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "offsetLeft", ()=>offsetLeft);
parcelHelpers.export(exports, "offsetParent", ()=>offsetParent);
parcelHelpers.export(exports, "offsetTop", ()=>offsetTop);
var _dom = require("@floating-ui/utils/dom");
function offsetParent(element) {
    return offsetParentPolyfill(element);
}
function offsetTop(element) {
    return offsetTopLeftPolyfill(element, 'offsetTop');
}
function offsetLeft(element) {
    return offsetTopLeftPolyfill(element, 'offsetLeft');
}
function flatTreeParent(element) {
    if (element.assignedSlot) return element.assignedSlot;
    if (element.parentNode instanceof ShadowRoot) return element.parentNode.host;
    return element.parentNode;
}
function ancestorTreeScopes(element) {
    const scopes = new Set();
    let currentScope = element.getRootNode();
    while(currentScope){
        scopes.add(currentScope);
        currentScope = currentScope.parentNode ? currentScope.parentNode.getRootNode() : null;
    }
    return scopes;
}
function offsetParentPolyfill(element) {
    // Do an initial walk to check for display:none ancestors.
    for(let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)){
        if (!(ancestor instanceof Element)) continue;
        if (getComputedStyle(ancestor).display === 'none') return null;
    }
    for(let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)){
        if (!(ancestor instanceof Element)) continue;
        const style = getComputedStyle(ancestor);
        // Display:contents nodes aren't in the layout tree, so they should be skipped.
        if (style.display === 'contents') continue;
        if (style.position !== 'static' || (0, _dom.isContainingBlock)(style)) return ancestor;
        if (ancestor.tagName === 'BODY') return ancestor;
    }
    return null;
}
function offsetTopLeftPolyfill(element, offsetTopOrLeft) {
    let value = element[offsetTopOrLeft];
    let nextOffsetParent = offsetParentPolyfill(element);
    const scopes = ancestorTreeScopes(element);
    while(nextOffsetParent && !scopes.has(nextOffsetParent.getRootNode())){
        value -= nextOffsetParent[offsetTopOrLeft];
        nextOffsetParent = offsetParentPolyfill(nextOffsetParent);
    }
    return value;
}

},{"@floating-ui/utils/dom":"4tx7z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQ6sI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkJGMXX6EBJs.menu_default));
var _chunkJGMXX6EBJs = require("../../chunks/chunk.JGMXX6EB.js");
var _chunkGIGQL3HGJs = require("../../chunks/chunk.GIGQL3HG.js");
var _chunkVVA35HTYJs = require("../../chunks/chunk.VVA35HTY.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.JGMXX6EB.js":"jeKhl","../../chunks/chunk.GIGQL3HG.js":"3rgV0","../../chunks/chunk.VVA35HTY.js":"bwyN8","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jeKhl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menu_default", ()=>menu_default);
var _chunkGIGQL3HGJs = require("./chunk.GIGQL3HG.js");
// src/components/menu/menu.ts
var menu_default = (0, _chunkGIGQL3HGJs.SlMenu);
(0, _chunkGIGQL3HGJs.SlMenu).define("sl-menu");

},{"./chunk.GIGQL3HG.js":"3rgV0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3rgV0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlMenu", ()=>SlMenu);
var _chunkVVA35HTYJs = require("./chunk.VVA35HTY.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/menu/menu.component.ts
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var SlMenu = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "menu");
    }
    handleClick(event) {
        const menuItemTypes = [
            "menuitem",
            "menuitemcheckbox"
        ];
        const composedPath = event.composedPath();
        const target = composedPath.find((el)=>{
            var _a;
            return menuItemTypes.includes(((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) || "");
        });
        if (!target) return;
        const closestMenu = composedPath.find((el)=>{
            var _a;
            return ((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) === "menu";
        });
        const clickHasSubmenu = closestMenu !== this;
        if (clickHasSubmenu) return;
        const item = target;
        if (item.type === "checkbox") item.checked = !item.checked;
        this.emit("sl-select", {
            detail: {
                item
            }
        });
    }
    handleKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
            const item = this.getCurrentItem();
            event.preventDefault();
            event.stopPropagation();
            item == null || item.click();
        } else if ([
            "ArrowDown",
            "ArrowUp",
            "Home",
            "End"
        ].includes(event.key)) {
            const items = this.getAllItems();
            const activeItem = this.getCurrentItem();
            let index = activeItem ? items.indexOf(activeItem) : 0;
            if (items.length > 0) {
                event.preventDefault();
                event.stopPropagation();
                if (event.key === "ArrowDown") index++;
                else if (event.key === "ArrowUp") index--;
                else if (event.key === "Home") index = 0;
                else if (event.key === "End") index = items.length - 1;
                if (index < 0) index = items.length - 1;
                if (index > items.length - 1) index = 0;
                this.setCurrentItem(items[index]);
                items[index].focus();
            }
        }
    }
    handleMouseDown(event) {
        const target = event.target;
        if (this.isMenuItem(target)) this.setCurrentItem(target);
    }
    handleSlotChange() {
        const items = this.getAllItems();
        if (items.length > 0) this.setCurrentItem(items[0]);
    }
    isMenuItem(item) {
        var _a;
        return item.tagName.toLowerCase() === "sl-menu-item" || [
            "menuitem",
            "menuitemcheckbox",
            "menuitemradio"
        ].includes((_a = item.getAttribute("role")) != null ? _a : "");
    }
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */ getAllItems() {
        return [
            ...this.defaultSlot.assignedElements({
                flatten: true
            })
        ].filter((el)=>{
            if (el.inert || !this.isMenuItem(el)) return false;
            return true;
        });
    }
    /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */ getCurrentItem() {
        return this.getAllItems().find((i)=>i.getAttribute("tabindex") === "0");
    }
    /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */ setCurrentItem(item) {
        const items = this.getAllItems();
        items.forEach((i)=>{
            i.setAttribute("tabindex", i === item ? "0" : "-1");
        });
    }
    render() {
        return (0, _lit.html)`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
};
SlMenu.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkVVA35HTYJs.menu_styles_default)
];
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)("slot")
], SlMenu.prototype, "defaultSlot", 2);

},{"./chunk.VVA35HTY.js":"bwyN8","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit":"2zYfj","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bwyN8":[function(require,module,exports,__globalThis) {
// src/components/menu/menu.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menu_styles_default", ()=>menu_styles_default);
var _lit = require("lit");
var menu_styles_default = (0, _lit.css)`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4hH87":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkQEDIRWQSJs.menu_item_default));
var _chunkQEDIRWQSJs = require("../../chunks/chunk.QEDIRWQS.js");
var _chunkJGDQQFMAJs = require("../../chunks/chunk.JGDQQFMA.js");
var _chunkKZJNDGFOJs = require("../../chunks/chunk.KZJNDGFO.js");
var _chunkZLIGP6HZJs = require("../../chunks/chunk.ZLIGP6HZ.js");
var _chunkR37ISJMHJs = require("../../chunks/chunk.R37ISJMH.js");
var _chunk3KSWVBQ5Js = require("../../chunks/chunk.3KSWVBQ5.js");
var _chunkMK453YANJs = require("../../chunks/chunk.MK453YAN.js");
var _chunk7DUCI5S4Js = require("../../chunks/chunk.7DUCI5S4.js");
var _chunkNYIIDP5NJs = require("../../chunks/chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunk4GJTAPTWJs = require("../../chunks/chunk.4GJTAPTW.js");
var _chunkZL53POKZJs = require("../../chunks/chunk.ZL53POKZ.js");
var _chunkP7ZG6EMRJs = require("../../chunks/chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("../../chunks/chunk.3TFKS637.js");
var _chunkQLXRCYS4Js = require("../../chunks/chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunk3Y6SB6QSJs = require("../../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.QEDIRWQS.js":"9F3Ld","../../chunks/chunk.JGDQQFMA.js":"abqv8","../../chunks/chunk.KZJNDGFO.js":"jXCS7","../../chunks/chunk.ZLIGP6HZ.js":"6BtBy","../../chunks/chunk.R37ISJMH.js":"le5Da","../../chunks/chunk.3KSWVBQ5.js":"9UBaz","../../chunks/chunk.MK453YAN.js":"hDVQj","../../chunks/chunk.7DUCI5S4.js":"jFVVI","../../chunks/chunk.NYIIDP5N.js":"khHuM","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.4GJTAPTW.js":"gLOYh","../../chunks/chunk.ZL53POKZ.js":"4tGlu","../../chunks/chunk.P7ZG6EMR.js":"f9Afu","../../chunks/chunk.3TFKS637.js":"JiKmP","../../chunks/chunk.QLXRCYS4.js":"8hhmC","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.3Y6SB6QS.js":"b3ki7","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9F3Ld":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menu_item_default", ()=>menu_item_default);
var _chunkJGDQQFMAJs = require("./chunk.JGDQQFMA.js");
// src/components/menu-item/menu-item.ts
var menu_item_default = (0, _chunkJGDQQFMAJs.SlMenuItem);
(0, _chunkJGDQQFMAJs.SlMenuItem).define("sl-menu-item");

},{"./chunk.JGDQQFMA.js":"abqv8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abqv8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlMenuItem", ()=>SlMenuItem);
var _chunkKZJNDGFOJs = require("./chunk.KZJNDGFO.js");
var _chunkZLIGP6HZJs = require("./chunk.ZLIGP6HZ.js");
var _chunkR37ISJMHJs = require("./chunk.R37ISJMH.js");
var _chunkMK453YANJs = require("./chunk.MK453YAN.js");
var _chunkNYIIDP5NJs = require("./chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunk4GJTAPTWJs = require("./chunk.4GJTAPTW.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/menu-item/menu-item.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var SlMenuItem = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.type = "normal";
        this.checked = false;
        this.value = "";
        this.loading = false;
        this.disabled = false;
        this.hasSlotController = new (0, _chunkNYIIDP5NJs.HasSlotController)(this, "submenu");
        this.submenuController = new (0, _chunkZLIGP6HZJs.SubmenuController)(this, this.hasSlotController);
        this.handleHostClick = (event)=>{
            if (this.disabled) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        };
        this.handleMouseOver = (event)=>{
            this.focus();
            event.stopPropagation();
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this.handleHostClick);
        this.addEventListener("mouseover", this.handleMouseOver);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleHostClick);
        this.removeEventListener("mouseover", this.handleMouseOver);
    }
    handleDefaultSlotChange() {
        const textLabel = this.getTextLabel();
        if (typeof this.cachedTextLabel === "undefined") {
            this.cachedTextLabel = textLabel;
            return;
        }
        if (textLabel !== this.cachedTextLabel) {
            this.cachedTextLabel = textLabel;
            this.emit("slotchange", {
                bubbles: true,
                composed: false,
                cancelable: false
            });
        }
    }
    handleCheckedChange() {
        if (this.checked && this.type !== "checkbox") {
            this.checked = false;
            console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
            return;
        }
        if (this.type === "checkbox") this.setAttribute("aria-checked", this.checked ? "true" : "false");
        else this.removeAttribute("aria-checked");
    }
    handleDisabledChange() {
        this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleTypeChange() {
        if (this.type === "checkbox") {
            this.setAttribute("role", "menuitemcheckbox");
            this.setAttribute("aria-checked", this.checked ? "true" : "false");
        } else {
            this.setAttribute("role", "menuitem");
            this.removeAttribute("aria-checked");
        }
    }
    /** Returns a text label based on the contents of the menu item's default slot. */ getTextLabel() {
        return (0, _chunkNYIIDP5NJs.getTextContent)(this.defaultSlot);
    }
    isSubmenu() {
        return this.hasSlotController.test("submenu");
    }
    render() {
        const isRtl = this.localize.dir() === "rtl";
        const isSubmenuExpanded = this.submenuController.isExpanded();
        return (0, _lit.html)`
      <div
        id="anchor"
        part="base"
        class=${(0, _classMapJs.classMap)({
            "menu-item": true,
            "menu-item--rtl": isRtl,
            "menu-item--checked": this.checked,
            "menu-item--disabled": this.disabled,
            "menu-item--loading": this.loading,
            "menu-item--has-submenu": this.isSubmenu(),
            "menu-item--submenu-expanded": isSubmenuExpanded
        })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? (0, _lit.html)` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
    }
};
SlMenuItem.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkKZJNDGFOJs.menu_item_styles_default)
];
SlMenuItem.dependencies = {
    "sl-icon": (0, _chunk4GJTAPTWJs.SlIcon),
    "sl-popup": (0, _chunkR37ISJMHJs.SlPopup),
    "sl-spinner": (0, _chunkMK453YANJs.SlSpinner)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)("slot:not([name])")
], SlMenuItem.prototype, "defaultSlot", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".menu-item")
], SlMenuItem.prototype, "menuItem", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlMenuItem.prototype, "type", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlMenuItem.prototype, "checked", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlMenuItem.prototype, "value", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlMenuItem.prototype, "loading", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlMenuItem.prototype, "disabled", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("checked")
], SlMenuItem.prototype, "handleCheckedChange", 1);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("disabled")
], SlMenuItem.prototype, "handleDisabledChange", 1);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("type")
], SlMenuItem.prototype, "handleTypeChange", 1);

},{"./chunk.KZJNDGFO.js":"jXCS7","./chunk.ZLIGP6HZ.js":"6BtBy","./chunk.R37ISJMH.js":"le5Da","./chunk.MK453YAN.js":"hDVQj","./chunk.NYIIDP5N.js":"khHuM","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.4GJTAPTW.js":"gLOYh","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXCS7":[function(require,module,exports,__globalThis) {
// src/components/menu-item/menu-item.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menu_item_styles_default", ()=>menu_item_styles_default);
var _lit = require("lit");
var menu_item_styles_default = (0, _lit.css)`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6BtBy":[function(require,module,exports,__globalThis) {
// src/components/menu-item/submenu-controller.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubmenuController", ()=>SubmenuController);
var _refJs = require("lit/directives/ref.js");
var _lit = require("lit");
var SubmenuController = class {
    constructor(host, hasSlotController){
        this.popupRef = (0, _refJs.createRef)();
        this.enableSubmenuTimer = -1;
        this.isConnected = false;
        this.isPopupConnected = false;
        this.skidding = 0;
        this.submenuOpenDelay = 100;
        // Set the safe triangle cursor position
        this.handleMouseMove = (event)=>{
            this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
            this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
        };
        this.handleMouseOver = ()=>{
            if (this.hasSlotController.test("submenu")) this.enableSubmenu();
        };
        // Focus on the first menu-item of a submenu.
        this.handleKeyDown = (event)=>{
            switch(event.key){
                case "Escape":
                case "Tab":
                    this.disableSubmenu();
                    break;
                case "ArrowLeft":
                    if (event.target !== this.host) {
                        event.preventDefault();
                        event.stopPropagation();
                        this.host.focus();
                        this.disableSubmenu();
                    }
                    break;
                case "ArrowRight":
                case "Enter":
                case " ":
                    this.handleSubmenuEntry(event);
                    break;
                default:
                    break;
            }
        };
        this.handleClick = (event)=>{
            var _a;
            if (event.target === this.host) {
                event.preventDefault();
                event.stopPropagation();
            } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a = event.target.role) == null ? void 0 : _a.startsWith("menuitem")))) this.disableSubmenu();
        };
        // Close this submenu on focus outside of the parent or any descendants.
        this.handleFocusOut = (event)=>{
            if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) return;
            this.disableSubmenu();
        };
        // Prevent the parent menu-item from getting focus on mouse movement on the submenu
        this.handlePopupMouseover = (event)=>{
            event.stopPropagation();
        };
        // Set the safe triangle values for the submenu when the position changes
        this.handlePopupReposition = ()=>{
            const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
            const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({
                flatten: true
            }).filter((el)=>el.localName === "sl-menu")[0];
            const isRtl = getComputedStyle(this.host).direction === "rtl";
            if (!menu) return;
            const { left, top, width, height } = menu.getBoundingClientRect();
            this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
            this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
            this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
            this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
        };
        (this.host = host).addController(this);
        this.hasSlotController = hasSlotController;
    }
    hostConnected() {
        if (this.hasSlotController.test("submenu") && !this.host.disabled) this.addListeners();
    }
    hostDisconnected() {
        this.removeListeners();
    }
    hostUpdated() {
        if (this.hasSlotController.test("submenu") && !this.host.disabled) {
            this.addListeners();
            this.updateSkidding();
        } else this.removeListeners();
    }
    addListeners() {
        if (!this.isConnected) {
            this.host.addEventListener("mousemove", this.handleMouseMove);
            this.host.addEventListener("mouseover", this.handleMouseOver);
            this.host.addEventListener("keydown", this.handleKeyDown);
            this.host.addEventListener("click", this.handleClick);
            this.host.addEventListener("focusout", this.handleFocusOut);
            this.isConnected = true;
        }
        if (!this.isPopupConnected) {
            if (this.popupRef.value) {
                this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
                this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
                this.isPopupConnected = true;
            }
        }
    }
    removeListeners() {
        if (this.isConnected) {
            this.host.removeEventListener("mousemove", this.handleMouseMove);
            this.host.removeEventListener("mouseover", this.handleMouseOver);
            this.host.removeEventListener("keydown", this.handleKeyDown);
            this.host.removeEventListener("click", this.handleClick);
            this.host.removeEventListener("focusout", this.handleFocusOut);
            this.isConnected = false;
        }
        if (this.isPopupConnected) {
            if (this.popupRef.value) {
                this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
                this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
                this.isPopupConnected = false;
            }
        }
    }
    handleSubmenuEntry(event) {
        const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
        if (!submenuSlot) {
            console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
            return;
        }
        let menuItems = null;
        for (const elt of submenuSlot.assignedElements()){
            menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
            if (menuItems.length !== 0) break;
        }
        if (!menuItems || menuItems.length === 0) return;
        menuItems[0].setAttribute("tabindex", "0");
        for(let i = 1; i !== menuItems.length; ++i)menuItems[i].setAttribute("tabindex", "-1");
        if (this.popupRef.value) {
            event.preventDefault();
            event.stopPropagation();
            if (this.popupRef.value.active) {
                if (menuItems[0] instanceof HTMLElement) menuItems[0].focus();
            } else {
                this.enableSubmenu(false);
                this.host.updateComplete.then(()=>{
                    if (menuItems[0] instanceof HTMLElement) menuItems[0].focus();
                });
                this.host.requestUpdate();
            }
        }
    }
    setSubmenuState(state) {
        if (this.popupRef.value) {
            if (this.popupRef.value.active !== state) {
                this.popupRef.value.active = state;
                this.host.requestUpdate();
            }
        }
    }
    // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
    // newly opened menu.
    enableSubmenu(delay = true) {
        if (delay) {
            window.clearTimeout(this.enableSubmenuTimer);
            this.enableSubmenuTimer = window.setTimeout(()=>{
                this.setSubmenuState(true);
            }, this.submenuOpenDelay);
        } else this.setSubmenuState(true);
    }
    disableSubmenu() {
        window.clearTimeout(this.enableSubmenuTimer);
        this.setSubmenuState(false);
    }
    // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
    updateSkidding() {
        var _a;
        if (!((_a = this.host.parentElement) == null ? void 0 : _a.computedStyleMap)) return;
        const styleMap = this.host.parentElement.computedStyleMap();
        const attrs = [
            "padding-top",
            "border-top-width",
            "margin-top"
        ];
        const skidding = attrs.reduce((accumulator, attr)=>{
            var _a2;
            const styleValue = (_a2 = styleMap.get(attr)) != null ? _a2 : new CSSUnitValue(0, "px");
            const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
            const pxValue = unitValue.to("px");
            return accumulator - pxValue.value;
        }, 0);
        this.skidding = skidding;
    }
    isExpanded() {
        return this.popupRef.value ? this.popupRef.value.active : false;
    }
    renderSubmenu() {
        const isRtl = getComputedStyle(this.host).direction === "rtl";
        if (!this.isConnected) return (0, _lit.html)` <slot name="submenu" hidden></slot> `;
        return (0, _lit.html)`
      <sl-popup
        ${(0, _refJs.ref)(this.popupRef)}
        placement=${isRtl ? "left-start" : "right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `;
    }
};

},{"lit/directives/ref.js":"hhdUx","lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhdUx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _refJs = require("lit-html/directives/ref.js");
parcelHelpers.exportAll(_refJs, exports);

},{"lit-html/directives/ref.js":"hCD3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hCD3y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRef", ()=>e);
parcelHelpers.export(exports, "ref", ()=>n);
var _litHtmlJs = require("../lit-html.js");
var _asyncDirectiveJs = require("../async-directive.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = ()=>new h;
class h {
}
const o = new WeakMap, n = (0, _directiveJs.directive)(class extends (0, _asyncDirectiveJs.AsyncDirective) {
    render(i) {
        return 0, _litHtmlJs.nothing;
    }
    update(i, [s]) {
        const e = s !== this.Y;
        return e && void 0 !== this.Y && this.rt(void 0), (e || this.lt !== this.ct) && (this.Y = s, this.ht = i.options?.host, this.rt(this.ct = i.element)), _litHtmlJs.nothing;
    }
    rt(t) {
        if (this.isConnected || (t = void 0), "function" == typeof this.Y) {
            const i = this.ht ?? globalThis;
            let s = o.get(i);
            void 0 === s && (s = new WeakMap, o.set(i, s)), void 0 !== s.get(this.Y) && this.Y.call(this.ht, void 0), s.set(this.Y, t), void 0 !== t && this.Y.call(this.ht, t);
        } else this.Y.value = t;
    }
    get lt() {
        return "function" == typeof this.Y ? o.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
    }
    disconnected() {
        this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
        this.rt(this.ct);
    }
});

},{"../lit-html.js":"3ewny","../async-directive.js":"crHkM","../directive.js":"34xmO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crHkM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "directive", ()=>(0, _directiveJs.directive));
parcelHelpers.export(exports, "AsyncDirective", ()=>f);
parcelHelpers.export(exports, "Directive", ()=>(0, _directiveJs.Directive));
parcelHelpers.export(exports, "PartType", ()=>(0, _directiveJs.PartType));
var _directiveHelpersJs = require("./directive-helpers.js");
var _directiveJs = require("./directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const s = (i, t)=>{
    const e = i._$AN;
    if (void 0 === e) return !1;
    for (const i of e)i._$AO?.(t, !1), s(i, t);
    return !0;
}, o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === e?.size);
}, r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), c(t);
    }
};
function h(i) {
    void 0 !== this._$AN ? (o(this), this._$AM = i, r(this)) : this._$AM = i;
}
function n(i, t = !1, e = 0) {
    const r = this._$AH, h = this._$AN;
    if (void 0 !== h && 0 !== h.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)s(r[i], !1), o(r[i]);
            else null != r && (s(r, !1), o(r));
        } else s(this, i);
    }
}
const c = (i)=>{
    i.type == (0, _directiveJs.PartType).CHILD && (i._$AP ??= n, i._$AQ ??= h);
};
class f extends (0, _directiveJs.Directive) {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i, t, e) {
        super._$AT(i, t, e), r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        i !== this.isConnected && (this.isConnected = i, i ? this.reconnected?.() : this.disconnected?.()), t && (s(this, i), o(this));
    }
    setValue(t) {
        if ((0, _directiveHelpersJs.isSingleExpression)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}

},{"./directive-helpers.js":"e7IuY","./directive.js":"34xmO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3qRfo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkTS4FQXY2Js.divider_default));
var _chunkTS4FQXY2Js = require("../../chunks/chunk.TS4FQXY2.js");
var _chunk6EQLH47DJs = require("../../chunks/chunk.6EQLH47D.js");
var _chunkSUSCR7CIJs = require("../../chunks/chunk.SUSCR7CI.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.TS4FQXY2.js":"fVXHK","../../chunks/chunk.6EQLH47D.js":"1psaR","../../chunks/chunk.SUSCR7CI.js":"hFAcP","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVXHK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "divider_default", ()=>divider_default);
var _chunk6EQLH47DJs = require("./chunk.6EQLH47D.js");
// src/components/divider/divider.ts
var divider_default = (0, _chunk6EQLH47DJs.SlDivider);
(0, _chunk6EQLH47DJs.SlDivider).define("sl-divider");

},{"./chunk.6EQLH47D.js":"1psaR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1psaR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlDivider", ()=>SlDivider);
var _chunkSUSCR7CIJs = require("./chunk.SUSCR7CI.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/divider/divider.component.ts
var _decoratorsJs = require("lit/decorators.js");
var SlDivider = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.vertical = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("role", "separator");
    }
    handleVerticalChange() {
        this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
    }
};
SlDivider.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkSUSCR7CIJs.divider_styles_default)
];
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDivider.prototype, "vertical", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("vertical")
], SlDivider.prototype, "handleVerticalChange", 1);

},{"./chunk.SUSCR7CI.js":"hFAcP","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFAcP":[function(require,module,exports,__globalThis) {
// src/components/divider/divider.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "divider_styles_default", ()=>divider_styles_default);
var _lit = require("lit");
var divider_styles_default = (0, _lit.css)`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79blD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkPDPSCJZ5Js.tooltip_default));
var _chunkPDPSCJZ5Js = require("../../chunks/chunk.PDPSCJZ5.js");
var _chunkA6P554POJs = require("../../chunks/chunk.A6P554PO.js");
var _chunkFW7UWQXBJs = require("../../chunks/chunk.FW7UWQXB.js");
var _chunkR37ISJMHJs = require("../../chunks/chunk.R37ISJMH.js");
var _chunk3KSWVBQ5Js = require("../../chunks/chunk.3KSWVBQ5.js");
var _chunkK7JGTRV7Js = require("../../chunks/chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("../../chunks/chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("../../chunks/chunk.AJ3ENQ5C.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.PDPSCJZ5.js":"sEMRl","../../chunks/chunk.A6P554PO.js":"iDKCs","../../chunks/chunk.FW7UWQXB.js":"kNcKk","../../chunks/chunk.R37ISJMH.js":"le5Da","../../chunks/chunk.3KSWVBQ5.js":"9UBaz","../../chunks/chunk.K7JGTRV7.js":"eIRq8","../../chunks/chunk.B4BZKR24.js":"6I1PD","../../chunks/chunk.AJ3ENQ5C.js":"8BkBn","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sEMRl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tooltip_default", ()=>tooltip_default);
var _chunkA6P554POJs = require("./chunk.A6P554PO.js");
// src/components/tooltip/tooltip.ts
var tooltip_default = (0, _chunkA6P554POJs.SlTooltip);
(0, _chunkA6P554POJs.SlTooltip).define("sl-tooltip");

},{"./chunk.A6P554PO.js":"iDKCs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iDKCs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlTooltip", ()=>SlTooltip);
var _chunkFW7UWQXBJs = require("./chunk.FW7UWQXB.js");
var _chunkR37ISJMHJs = require("./chunk.R37ISJMH.js");
var _chunkK7JGTRV7Js = require("./chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("./chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("./chunk.AJ3ENQ5C.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/tooltip/tooltip.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var SlTooltip = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super();
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.content = "";
        this.placement = "top";
        this.disabled = false;
        this.distance = 8;
        this.open = false;
        this.skidding = 0;
        this.trigger = "hover focus";
        this.hoist = false;
        this.handleBlur = ()=>{
            if (this.hasTrigger("focus")) this.hide();
        };
        this.handleClick = ()=>{
            if (this.hasTrigger("click")) {
                if (this.open) this.hide();
                else this.show();
            }
        };
        this.handleFocus = ()=>{
            if (this.hasTrigger("focus")) this.show();
        };
        this.handleDocumentKeyDown = (event)=>{
            if (event.key === "Escape") {
                event.stopPropagation();
                this.hide();
            }
        };
        this.handleMouseOver = ()=>{
            if (this.hasTrigger("hover")) {
                const delay = (0, _chunkAJ3ENQ5CJs.parseDuration)(getComputedStyle(this).getPropertyValue("--show-delay"));
                clearTimeout(this.hoverTimeout);
                this.hoverTimeout = window.setTimeout(()=>this.show(), delay);
            }
        };
        this.handleMouseOut = ()=>{
            if (this.hasTrigger("hover")) {
                const delay = (0, _chunkAJ3ENQ5CJs.parseDuration)(getComputedStyle(this).getPropertyValue("--hide-delay"));
                clearTimeout(this.hoverTimeout);
                this.hoverTimeout = window.setTimeout(()=>this.hide(), delay);
            }
        };
        this.addEventListener("blur", this.handleBlur, true);
        this.addEventListener("focus", this.handleFocus, true);
        this.addEventListener("click", this.handleClick);
        this.addEventListener("mouseover", this.handleMouseOver);
        this.addEventListener("mouseout", this.handleMouseOut);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.closeWatcher) == null || _a.destroy();
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    firstUpdated() {
        this.body.hidden = !this.open;
        if (this.open) {
            this.popup.active = true;
            this.popup.reposition();
        }
    }
    hasTrigger(triggerType) {
        const triggers = this.trigger.split(" ");
        return triggers.includes(triggerType);
    }
    async handleOpenChange() {
        var _a, _b;
        if (this.open) {
            if (this.disabled) return;
            this.emit("sl-show");
            if ("CloseWatcher" in window) {
                (_a = this.closeWatcher) == null || _a.destroy();
                this.closeWatcher = new CloseWatcher();
                this.closeWatcher.onclose = ()=>{
                    this.hide();
                };
            } else document.addEventListener("keydown", this.handleDocumentKeyDown);
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.body);
            this.body.hidden = false;
            this.popup.active = true;
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "tooltip.show", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.popup.popup, keyframes, options);
            this.popup.reposition();
            this.emit("sl-after-show");
        } else {
            this.emit("sl-hide");
            (_b = this.closeWatcher) == null || _b.destroy();
            document.removeEventListener("keydown", this.handleDocumentKeyDown);
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.body);
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "tooltip.hide", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.popup.popup, keyframes, options);
            this.popup.active = false;
            this.body.hidden = true;
            this.emit("sl-after-hide");
        }
    }
    async handleOptionsChange() {
        if (this.hasUpdated) {
            await this.updateComplete;
            this.popup.reposition();
        }
    }
    handleDisabledChange() {
        if (this.disabled && this.open) this.hide();
    }
    /** Shows the tooltip. */ async show() {
        if (this.open) return void 0;
        this.open = true;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-show");
    }
    /** Hides the tooltip */ async hide() {
        if (!this.open) return void 0;
        this.open = false;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-hide");
    }
    //
    // NOTE: Tooltip is a bit unique in that we're using aria-live instead of aria-labelledby to trick screen readers into
    // announcing the content. It works really well, but it violates an accessibility rule. We're also adding the
    // aria-describedby attribute to a slot, which is required by <sl-popup> to correctly locate the first assigned
    // element, otherwise positioning is incorrect.
    //
    render() {
        return (0, _lit.html)`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${(0, _classMapJs.classMap)({
            tooltip: true,
            "tooltip--open": this.open
        })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;
    }
};
SlTooltip.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkFW7UWQXBJs.tooltip_styles_default)
];
SlTooltip.dependencies = {
    "sl-popup": (0, _chunkR37ISJMHJs.SlPopup)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)("slot:not([name])")
], SlTooltip.prototype, "defaultSlot", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".tooltip__body")
], SlTooltip.prototype, "body", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)("sl-popup")
], SlTooltip.prototype, "popup", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlTooltip.prototype, "content", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlTooltip.prototype, "placement", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlTooltip.prototype, "disabled", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Number
    })
], SlTooltip.prototype, "distance", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlTooltip.prototype, "open", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Number
    })
], SlTooltip.prototype, "skidding", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlTooltip.prototype, "trigger", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean
    })
], SlTooltip.prototype, "hoist", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("open", {
        waitUntilFirstUpdate: true
    })
], SlTooltip.prototype, "handleOpenChange", 1);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)([
        "content",
        "distance",
        "hoist",
        "placement",
        "skidding"
    ])
], SlTooltip.prototype, "handleOptionsChange", 1);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("disabled")
], SlTooltip.prototype, "handleDisabledChange", 1);
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("tooltip.show", {
    keyframes: [
        {
            opacity: 0,
            scale: 0.8
        },
        {
            opacity: 1,
            scale: 1
        }
    ],
    options: {
        duration: 150,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("tooltip.hide", {
    keyframes: [
        {
            opacity: 1,
            scale: 1
        },
        {
            opacity: 0,
            scale: 0.8
        }
    ],
    options: {
        duration: 150,
        easing: "ease"
    }
});

},{"./chunk.FW7UWQXB.js":"kNcKk","./chunk.R37ISJMH.js":"le5Da","./chunk.K7JGTRV7.js":"eIRq8","./chunk.B4BZKR24.js":"6I1PD","./chunk.AJ3ENQ5C.js":"8BkBn","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNcKk":[function(require,module,exports,__globalThis) {
// src/components/tooltip/tooltip.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tooltip_styles_default", ()=>tooltip_styles_default);
var _lit = require("lit");
var tooltip_styles_default = (0, _lit.css)`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01G2w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkCVHNT5ZPJs.details_default));
var _chunkCVHNT5ZPJs = require("../../chunks/chunk.CVHNT5ZP.js");
var _chunk2OJZ4GYUJs = require("../../chunks/chunk.2OJZ4GYU.js");
var _chunkJ7PLVEQMJs = require("../../chunks/chunk.J7PLVEQM.js");
var _chunkK7JGTRV7Js = require("../../chunks/chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("../../chunks/chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("../../chunks/chunk.AJ3ENQ5C.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunk4GJTAPTWJs = require("../../chunks/chunk.4GJTAPTW.js");
var _chunkZL53POKZJs = require("../../chunks/chunk.ZL53POKZ.js");
var _chunkP7ZG6EMRJs = require("../../chunks/chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("../../chunks/chunk.3TFKS637.js");
var _chunkQLXRCYS4Js = require("../../chunks/chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunk3Y6SB6QSJs = require("../../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.CVHNT5ZP.js":"d4imh","../../chunks/chunk.2OJZ4GYU.js":"1Db5P","../../chunks/chunk.J7PLVEQM.js":"3PWTj","../../chunks/chunk.K7JGTRV7.js":"eIRq8","../../chunks/chunk.B4BZKR24.js":"6I1PD","../../chunks/chunk.AJ3ENQ5C.js":"8BkBn","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.4GJTAPTW.js":"gLOYh","../../chunks/chunk.ZL53POKZ.js":"4tGlu","../../chunks/chunk.P7ZG6EMR.js":"f9Afu","../../chunks/chunk.3TFKS637.js":"JiKmP","../../chunks/chunk.QLXRCYS4.js":"8hhmC","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.3Y6SB6QS.js":"b3ki7","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4imh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "details_default", ()=>details_default);
var _chunk2OJZ4GYUJs = require("./chunk.2OJZ4GYU.js");
// src/components/details/details.ts
var details_default = (0, _chunk2OJZ4GYUJs.SlDetails);
(0, _chunk2OJZ4GYUJs.SlDetails).define("sl-details");

},{"./chunk.2OJZ4GYU.js":"1Db5P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Db5P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlDetails", ()=>SlDetails);
var _chunkJ7PLVEQMJs = require("./chunk.J7PLVEQM.js");
var _chunkK7JGTRV7Js = require("./chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("./chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("./chunk.AJ3ENQ5C.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunk4GJTAPTWJs = require("./chunk.4GJTAPTW.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/details/details.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var SlDetails = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.open = false;
        this.disabled = false;
    }
    firstUpdated() {
        this.body.style.height = this.open ? "auto" : "0";
        if (this.open) this.details.open = true;
        this.detailsObserver = new MutationObserver((changes)=>{
            for (const change of changes)if (change.type === "attributes" && change.attributeName === "open") {
                if (this.details.open) this.show();
                else this.hide();
            }
        });
        this.detailsObserver.observe(this.details, {
            attributes: true
        });
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.detailsObserver) == null || _a.disconnect();
    }
    handleSummaryClick(event) {
        event.preventDefault();
        if (!this.disabled) {
            if (this.open) this.hide();
            else this.show();
            this.header.focus();
        }
    }
    handleSummaryKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            if (this.open) this.hide();
            else this.show();
        }
        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            event.preventDefault();
            this.hide();
        }
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            event.preventDefault();
            this.show();
        }
    }
    async handleOpenChange() {
        if (this.open) {
            this.details.open = true;
            const slShow = this.emit("sl-show", {
                cancelable: true
            });
            if (slShow.defaultPrevented) {
                this.open = false;
                this.details.open = false;
                return;
            }
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.body);
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "details.show", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.body, (0, _chunkAJ3ENQ5CJs.shimKeyframesHeightAuto)(keyframes, this.body.scrollHeight), options);
            this.body.style.height = "auto";
            this.emit("sl-after-show");
        } else {
            const slHide = this.emit("sl-hide", {
                cancelable: true
            });
            if (slHide.defaultPrevented) {
                this.details.open = true;
                this.open = true;
                return;
            }
            await (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.body);
            const { keyframes, options } = (0, _chunkK7JGTRV7Js.getAnimation)(this, "details.hide", {
                dir: this.localize.dir()
            });
            await (0, _chunkAJ3ENQ5CJs.animateTo)(this.body, (0, _chunkAJ3ENQ5CJs.shimKeyframesHeightAuto)(keyframes, this.body.scrollHeight), options);
            this.body.style.height = "auto";
            this.details.open = false;
            this.emit("sl-after-hide");
        }
    }
    /** Shows the details. */ async show() {
        if (this.open || this.disabled) return void 0;
        this.open = true;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-show");
    }
    /** Hides the details */ async hide() {
        if (!this.open || this.disabled) return void 0;
        this.open = false;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-hide");
    }
    render() {
        const isRtl = this.localize.dir() === "rtl";
        return (0, _lit.html)`
      <details
        part="base"
        class=${(0, _classMapJs.classMap)({
            details: true,
            "details--open": this.open,
            "details--disabled": this.disabled,
            "details--rtl": isRtl
        })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
    }
};
SlDetails.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkJ7PLVEQMJs.details_styles_default)
];
SlDetails.dependencies = {
    "sl-icon": (0, _chunk4GJTAPTWJs.SlIcon)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".details")
], SlDetails.prototype, "details", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".details__header")
], SlDetails.prototype, "header", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".details__body")
], SlDetails.prototype, "body", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".details__expand-icon-slot")
], SlDetails.prototype, "expandIconSlot", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDetails.prototype, "open", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)()
], SlDetails.prototype, "summary", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDetails.prototype, "disabled", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("open", {
        waitUntilFirstUpdate: true
    })
], SlDetails.prototype, "handleOpenChange", 1);
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("details.show", {
    keyframes: [
        {
            height: "0",
            opacity: "0"
        },
        {
            height: "auto",
            opacity: "1"
        }
    ],
    options: {
        duration: 250,
        easing: "linear"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("details.hide", {
    keyframes: [
        {
            height: "auto",
            opacity: "1"
        },
        {
            height: "0",
            opacity: "0"
        }
    ],
    options: {
        duration: 250,
        easing: "linear"
    }
});

},{"./chunk.J7PLVEQM.js":"3PWTj","./chunk.K7JGTRV7.js":"eIRq8","./chunk.B4BZKR24.js":"6I1PD","./chunk.AJ3ENQ5C.js":"8BkBn","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.4GJTAPTW.js":"gLOYh","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PWTj":[function(require,module,exports,__globalThis) {
// src/components/details/details.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "details_styles_default", ()=>details_styles_default);
var _lit = require("lit");
var details_styles_default = (0, _lit.css)`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioGKp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _chunkQBZCPJN3Js.dialog_default));
var _chunkQBZCPJN3Js = require("../../chunks/chunk.QBZCPJN3.js");
var _chunkHFKQKKMRJs = require("../../chunks/chunk.HFKQKKMR.js");
var _chunkP22EBAVTJs = require("../../chunks/chunk.P22EBAVT.js");
var _chunkRWUUFNULJs = require("../../chunks/chunk.RWUUFNUL.js");
var _chunkG5RKA5HFJs = require("../../chunks/chunk.G5RKA5HF.js");
var _chunkOSU5LOVZJs = require("../../chunks/chunk.OSU5LOVZ.js");
var _chunkHLJ2JR6PJs = require("../../chunks/chunk.HLJ2JR6P.js");
var _chunk6I2T3DLIJs = require("../../chunks/chunk.6I2T3DLI.js");
var _chunkK7JGTRV7Js = require("../../chunks/chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("../../chunks/chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("../../chunks/chunk.AJ3ENQ5C.js");
var _chunkNYIIDP5NJs = require("../../chunks/chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("../../chunks/chunk.6CTB5ZDJ.js");
var _chunk7BTDLTNIJs = require("../../chunks/chunk.7BTDLTNI.js");
var _chunk4GJTAPTWJs = require("../../chunks/chunk.4GJTAPTW.js");
var _chunkZL53POKZJs = require("../../chunks/chunk.ZL53POKZ.js");
var _chunkP7ZG6EMRJs = require("../../chunks/chunk.P7ZG6EMR.js");
var _chunk3TFKS637Js = require("../../chunks/chunk.3TFKS637.js");
var _chunkQLXRCYS4Js = require("../../chunks/chunk.QLXRCYS4.js");
var _chunkGMYPQTFKJs = require("../../chunks/chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("../../chunks/chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("../../chunks/chunk.PFOQ5QRR.js");
var _chunk3Y6SB6QSJs = require("../../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../../chunks/chunk.KAW7D32O.js");

},{"../../chunks/chunk.QBZCPJN3.js":"2aFqo","../../chunks/chunk.HFKQKKMR.js":"hXkYT","../../chunks/chunk.P22EBAVT.js":"7EJZ0","../../chunks/chunk.RWUUFNUL.js":"6M29a","../../chunks/chunk.G5RKA5HF.js":"3X6w8","../../chunks/chunk.OSU5LOVZ.js":"80fCI","../../chunks/chunk.HLJ2JR6P.js":"6u802","../../chunks/chunk.6I2T3DLI.js":"gPZgL","../../chunks/chunk.K7JGTRV7.js":"eIRq8","../../chunks/chunk.B4BZKR24.js":"6I1PD","../../chunks/chunk.AJ3ENQ5C.js":"8BkBn","../../chunks/chunk.NYIIDP5N.js":"khHuM","../../chunks/chunk.6CTB5ZDJ.js":"8Qgqy","../../chunks/chunk.7BTDLTNI.js":"azlyc","../../chunks/chunk.4GJTAPTW.js":"gLOYh","../../chunks/chunk.ZL53POKZ.js":"4tGlu","../../chunks/chunk.P7ZG6EMR.js":"f9Afu","../../chunks/chunk.3TFKS637.js":"JiKmP","../../chunks/chunk.QLXRCYS4.js":"8hhmC","../../chunks/chunk.GMYPQTFK.js":"8QiFc","../../chunks/chunk.TUVJKY7S.js":"gWPkV","../../chunks/chunk.PFOQ5QRR.js":"kwDBt","../../chunks/chunk.3Y6SB6QS.js":"b3ki7","../../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2aFqo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dialog_default", ()=>dialog_default);
var _chunkHFKQKKMRJs = require("./chunk.HFKQKKMR.js");
// src/components/dialog/dialog.ts
var dialog_default = (0, _chunkHFKQKKMRJs.SlDialog);
(0, _chunkHFKQKKMRJs.SlDialog).define("sl-dialog");

},{"./chunk.HFKQKKMR.js":"hXkYT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXkYT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SlDialog", ()=>SlDialog);
var _chunkP22EBAVTJs = require("./chunk.P22EBAVT.js");
var _chunkRWUUFNULJs = require("./chunk.RWUUFNUL.js");
var _chunkG5RKA5HFJs = require("./chunk.G5RKA5HF.js");
var _chunkHLJ2JR6PJs = require("./chunk.HLJ2JR6P.js");
var _chunkK7JGTRV7Js = require("./chunk.K7JGTRV7.js");
var _chunkB4BZKR24Js = require("./chunk.B4BZKR24.js");
var _chunkAJ3ENQ5CJs = require("./chunk.AJ3ENQ5C.js");
var _chunkNYIIDP5NJs = require("./chunk.NYIIDP5N.js");
var _chunk6CTB5ZDJJs = require("./chunk.6CTB5ZDJ.js");
var _chunkGMYPQTFKJs = require("./chunk.GMYPQTFK.js");
var _chunkTUVJKY7SJs = require("./chunk.TUVJKY7S.js");
var _chunkPFOQ5QRRJs = require("./chunk.PFOQ5QRR.js");
var _chunkKAW7D32OJs = require("./chunk.KAW7D32O.js");
// src/components/dialog/dialog.component.ts
var _classMapJs = require("lit/directives/class-map.js");
var _lit = require("lit");
var _ifDefinedJs = require("lit/directives/if-defined.js");
var _decoratorsJs = require("lit/decorators.js");
var SlDialog = class extends (0, _chunkPFOQ5QRRJs.ShoelaceElement) {
    constructor(){
        super(...arguments);
        this.hasSlotController = new (0, _chunkNYIIDP5NJs.HasSlotController)(this, "footer");
        this.localize = new (0, _chunk6CTB5ZDJJs.LocalizeController)(this);
        this.modal = new (0, _chunkP22EBAVTJs.Modal)(this);
        this.open = false;
        this.label = "";
        this.noHeader = false;
        this.handleDocumentKeyDown = (event)=>{
            if (event.key === "Escape" && this.modal.isActive() && this.open) {
                event.stopPropagation();
                this.requestClose("keyboard");
            }
        };
    }
    firstUpdated() {
        this.dialog.hidden = !this.open;
        if (this.open) {
            this.addOpenListeners();
            this.modal.activate();
            (0, _chunkRWUUFNULJs.lockBodyScrolling)(this);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.modal.deactivate();
        (0, _chunkRWUUFNULJs.unlockBodyScrolling)(this);
        this.removeOpenListeners();
    }
    requestClose(source) {
        const slRequestClose = this.emit("sl-request-close", {
            cancelable: true,
            detail: {
                source
            }
        });
        if (slRequestClose.defaultPrevented) {
            const animation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "dialog.denyClose", {
                dir: this.localize.dir()
            });
            (0, _chunkAJ3ENQ5CJs.animateTo)(this.panel, animation.keyframes, animation.options);
            return;
        }
        this.hide();
    }
    addOpenListeners() {
        var _a;
        if ("CloseWatcher" in window) {
            (_a = this.closeWatcher) == null || _a.destroy();
            this.closeWatcher = new CloseWatcher();
            this.closeWatcher.onclose = ()=>this.requestClose("keyboard");
        } else document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
        var _a;
        (_a = this.closeWatcher) == null || _a.destroy();
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    async handleOpenChange() {
        if (this.open) {
            this.emit("sl-show");
            this.addOpenListeners();
            this.originalTrigger = document.activeElement;
            this.modal.activate();
            (0, _chunkRWUUFNULJs.lockBodyScrolling)(this);
            const autoFocusTarget = this.querySelector("[autofocus]");
            if (autoFocusTarget) autoFocusTarget.removeAttribute("autofocus");
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.dialog),
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.overlay)
            ]);
            this.dialog.hidden = false;
            requestAnimationFrame(()=>{
                const slInitialFocus = this.emit("sl-initial-focus", {
                    cancelable: true
                });
                if (!slInitialFocus.defaultPrevented) {
                    if (autoFocusTarget) autoFocusTarget.focus({
                        preventScroll: true
                    });
                    else this.panel.focus({
                        preventScroll: true
                    });
                }
                if (autoFocusTarget) autoFocusTarget.setAttribute("autofocus", "");
            });
            const panelAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "dialog.show", {
                dir: this.localize.dir()
            });
            const overlayAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "dialog.overlay.show", {
                dir: this.localize.dir()
            });
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.panel, panelAnimation.keyframes, panelAnimation.options),
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
            ]);
            this.emit("sl-after-show");
        } else {
            this.emit("sl-hide");
            this.removeOpenListeners();
            this.modal.deactivate();
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.dialog),
                (0, _chunkAJ3ENQ5CJs.stopAnimations)(this.overlay)
            ]);
            const panelAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "dialog.hide", {
                dir: this.localize.dir()
            });
            const overlayAnimation = (0, _chunkK7JGTRV7Js.getAnimation)(this, "dialog.overlay.hide", {
                dir: this.localize.dir()
            });
            await Promise.all([
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(()=>{
                    this.overlay.hidden = true;
                }),
                (0, _chunkAJ3ENQ5CJs.animateTo)(this.panel, panelAnimation.keyframes, panelAnimation.options).then(()=>{
                    this.panel.hidden = true;
                })
            ]);
            this.dialog.hidden = true;
            this.overlay.hidden = false;
            this.panel.hidden = false;
            (0, _chunkRWUUFNULJs.unlockBodyScrolling)(this);
            const trigger = this.originalTrigger;
            if (typeof (trigger == null ? void 0 : trigger.focus) === "function") setTimeout(()=>trigger.focus());
            this.emit("sl-after-hide");
        }
    }
    /** Shows the dialog. */ async show() {
        if (this.open) return void 0;
        this.open = true;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-show");
    }
    /** Hides the dialog */ async hide() {
        if (!this.open) return void 0;
        this.open = false;
        return (0, _chunkB4BZKR24Js.waitForEvent)(this, "sl-after-hide");
    }
    render() {
        return (0, _lit.html)`
      <div
        part="base"
        class=${(0, _classMapJs.classMap)({
            dialog: true,
            "dialog--open": this.open,
            "dialog--has-footer": this.hasSlotController.test("footer")
        })}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${(0, _ifDefinedJs.ifDefined)(this.noHeader ? this.label : void 0)}
          aria-labelledby=${(0, _ifDefinedJs.ifDefined)(!this.noHeader ? "title" : void 0)}
          tabindex="-1"
        >
          ${!this.noHeader ? (0, _lit.html)`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
};
SlDialog.styles = [
    (0, _chunkTUVJKY7SJs.component_styles_default),
    (0, _chunkG5RKA5HFJs.dialog_styles_default)
];
SlDialog.dependencies = {
    "sl-icon-button": (0, _chunkHLJ2JR6PJs.SlIconButton)
};
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".dialog")
], SlDialog.prototype, "dialog", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".dialog__panel")
], SlDialog.prototype, "panel", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.query)(".dialog__overlay")
], SlDialog.prototype, "overlay", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        type: Boolean,
        reflect: true
    })
], SlDialog.prototype, "open", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        reflect: true
    })
], SlDialog.prototype, "label", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _decoratorsJs.property)({
        attribute: "no-header",
        type: Boolean,
        reflect: true
    })
], SlDialog.prototype, "noHeader", 2);
(0, _chunkKAW7D32OJs.__decorateClass)([
    (0, _chunkGMYPQTFKJs.watch)("open", {
        waitUntilFirstUpdate: true
    })
], SlDialog.prototype, "handleOpenChange", 1);
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("dialog.show", {
    keyframes: [
        {
            opacity: 0,
            scale: 0.8
        },
        {
            opacity: 1,
            scale: 1
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("dialog.hide", {
    keyframes: [
        {
            opacity: 1,
            scale: 1
        },
        {
            opacity: 0,
            scale: 0.8
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("dialog.denyClose", {
    keyframes: [
        {
            scale: 1
        },
        {
            scale: 1.02
        },
        {
            scale: 1
        }
    ],
    options: {
        duration: 250
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("dialog.overlay.show", {
    keyframes: [
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ],
    options: {
        duration: 250
    }
});
(0, _chunkK7JGTRV7Js.setDefaultAnimation)("dialog.overlay.hide", {
    keyframes: [
        {
            opacity: 1
        },
        {
            opacity: 0
        }
    ],
    options: {
        duration: 250
    }
});

},{"./chunk.P22EBAVT.js":"7EJZ0","./chunk.RWUUFNUL.js":"6M29a","./chunk.G5RKA5HF.js":"3X6w8","./chunk.HLJ2JR6P.js":"6u802","./chunk.K7JGTRV7.js":"eIRq8","./chunk.B4BZKR24.js":"6I1PD","./chunk.AJ3ENQ5C.js":"8BkBn","./chunk.NYIIDP5N.js":"khHuM","./chunk.6CTB5ZDJ.js":"8Qgqy","./chunk.GMYPQTFK.js":"8QiFc","./chunk.TUVJKY7S.js":"gWPkV","./chunk.PFOQ5QRR.js":"kwDBt","./chunk.KAW7D32O.js":"aRkYM","lit/directives/class-map.js":"h0SlA","lit":"2zYfj","lit/directives/if-defined.js":"7ly7x","lit/decorators.js":"1wM0N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3X6w8":[function(require,module,exports,__globalThis) {
// src/components/dialog/dialog.styles.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dialog_styles_default", ()=>dialog_styles_default);
var _lit = require("lit");
var dialog_styles_default = (0, _lit.css)`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

},{"lit":"2zYfj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9F8u7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBasePath", ()=>(0, _chunk3Y6SB6QSJs.getBasePath));
parcelHelpers.export(exports, "setBasePath", ()=>(0, _chunk3Y6SB6QSJs.setBasePath));
var _chunk3Y6SB6QSJs = require("../chunks/chunk.3Y6SB6QS.js");
var _chunkKAW7D32OJs = require("../chunks/chunk.KAW7D32O.js");

},{"../chunks/chunk.3Y6SB6QS.js":"b3ki7","../chunks/chunk.KAW7D32O.js":"aRkYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["80cCk","1SICI"], "1SICI", "parcelRequire94c2")

//# sourceMappingURL=index.18dbc454.js.map
