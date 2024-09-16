(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__115f71._.js", {

"[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/process/browser.js [client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var e = {
        229: function(e) {
            var t = e.exports = {};
            var r;
            var n;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        r = setTimeout;
                    } else {
                        r = defaultSetTimout;
                    }
                } catch (e) {
                    r = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        n = clearTimeout;
                    } else {
                        n = defaultClearTimeout;
                    }
                } catch (e) {
                    n = defaultClearTimeout;
                }
            })();
            function runTimeout(e) {
                if (r === setTimeout) {
                    return setTimeout(e, 0);
                }
                if ((r === defaultSetTimout || !r) && setTimeout) {
                    r = setTimeout;
                    return setTimeout(e, 0);
                }
                try {
                    return r(e, 0);
                } catch (t) {
                    try {
                        return r.call(null, e, 0);
                    } catch (t) {
                        return r.call(this, e, 0);
                    }
                }
            }
            function runClearTimeout(e) {
                if (n === clearTimeout) {
                    return clearTimeout(e);
                }
                if ((n === defaultClearTimeout || !n) && clearTimeout) {
                    n = clearTimeout;
                    return clearTimeout(e);
                }
                try {
                    return n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            }
            var i = [];
            var o = false;
            var u;
            var a = -1;
            function cleanUpNextTick() {
                if (!o || !u) {
                    return;
                }
                o = false;
                if (u.length) {
                    i = u.concat(i);
                } else {
                    a = -1;
                }
                if (i.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (o) {
                    return;
                }
                var e = runTimeout(cleanUpNextTick);
                o = true;
                var t = i.length;
                while(t){
                    u = i;
                    i = [];
                    while(++a < t){
                        if (u) {
                            u[a].run();
                        }
                    }
                    a = -1;
                    t = i.length;
                }
                u = null;
                o = false;
                runClearTimeout(e);
            }
            t.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for(var r = 1; r < arguments.length; r++){
                        t[r - 1] = arguments[r];
                    }
                }
                i.push(new Item(e, t));
                if (i.length === 1 && !o) {
                    runTimeout(drainQueue);
                }
            };
            function Item(e, t) {
                this.fun = e;
                this.array = t;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            t.title = "browser";
            t.browser = true;
            t.env = {};
            t.argv = [];
            t.version = "";
            t.versions = {};
            function noop() {}
            t.on = noop;
            t.addListener = noop;
            t.once = noop;
            t.off = noop;
            t.removeListener = noop;
            t.removeAllListeners = noop;
            t.emit = noop;
            t.prependListener = noop;
            t.prependOnceListener = noop;
            t.listeners = function(e) {
                return [];
            };
            t.binding = function(e) {
                throw new Error("process.binding is not supported");
            };
            t.cwd = function() {
                return "/";
            };
            t.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            };
            t.umask = function() {
                return 0;
            };
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var i = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r](i, i.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = __nccwpck_require__(229);
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
var _global_process, _global_process1;
module.exports = ((_global_process = global.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = global.process) == null ? void 0 : _global_process1.env) === "object" ? global.process : __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/process/browser.js [client] (ecmascript)"); //# sourceMappingURL=process.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js [client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // ATTENTION
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
        // It's OK to reference families, but use WeakMap/Set for types.
        var allFamiliesByID = new Map();
        var allFamiliesByType = new PossiblyWeakMap();
        var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
        // that have actually been edited here. This keeps checks fast.
        // $FlowIssue
        var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
        // It is an array of [Family, NextType] tuples.
        var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
        var helpersByRendererID = new Map();
        var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
        var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
        var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
        // It needs to be weak because we do this even for roots that failed to mount.
        // If there is no WeakMap, we won't attempt to do retrying.
        // $FlowIssue
        var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
        var isPerformingRefresh = false;
        function computeFullKey(signature) {
            if (signature.fullKey !== null) {
                return signature.fullKey;
            }
            var fullKey = signature.ownKey;
            var hooks;
            try {
                hooks = signature.getCustomHooks();
            } catch (err) {
                // This can happen in an edge case, e.g. if expression like Foo.useSomething
                // depends on Foo which is lazily initialized during rendering.
                // In that case just assume we'll have to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            for(var i = 0; i < hooks.length; i++){
                var hook = hooks[i];
                if (typeof hook !== 'function') {
                    // Something's wrong. Assume we need to remount.
                    signature.forceReset = true;
                    signature.fullKey = fullKey;
                    return fullKey;
                }
                var nestedHookSignature = allSignaturesByType.get(hook);
                if (nestedHookSignature === undefined) {
                    continue;
                }
                var nestedHookKey = computeFullKey(nestedHookSignature);
                if (nestedHookSignature.forceReset) {
                    signature.forceReset = true;
                }
                fullKey += '\n---\n' + nestedHookKey;
            }
            signature.fullKey = fullKey;
            return fullKey;
        }
        function haveEqualSignatures(prevType, nextType) {
            var prevSignature = allSignaturesByType.get(prevType);
            var nextSignature = allSignaturesByType.get(nextType);
            if (prevSignature === undefined && nextSignature === undefined) {
                return true;
            }
            if (prevSignature === undefined || nextSignature === undefined) {
                return false;
            }
            if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
                return false;
            }
            if (nextSignature.forceReset) {
                return false;
            }
            return true;
        }
        function isReactClass(type) {
            return type.prototype && type.prototype.isReactComponent;
        }
        function canPreserveStateBetween(prevType, nextType) {
            if (isReactClass(prevType) || isReactClass(nextType)) {
                return false;
            }
            if (haveEqualSignatures(prevType, nextType)) {
                return true;
            }
            return false;
        }
        function resolveFamily(type) {
            // Only check updated types to keep lookups fast.
            return updatedFamiliesByType.get(type);
        } // If we didn't care about IE11, we could use new Map/Set(iterable).
        function cloneMap(map) {
            var clone = new Map();
            map.forEach(function(value, key) {
                clone.set(key, value);
            });
            return clone;
        }
        function cloneSet(set) {
            var clone = new Set();
            set.forEach(function(value) {
                clone.add(value);
            });
            return clone;
        } // This is a safety mechanism to protect against rogue getters and Proxies.
        function getProperty(object, property) {
            try {
                return object[property];
            } catch (err) {
                // Intentionally ignore.
                return undefined;
            }
        }
        function performReactRefresh() {
            if (pendingUpdates.length === 0) {
                return null;
            }
            if (isPerformingRefresh) {
                return null;
            }
            isPerformingRefresh = true;
            try {
                var staleFamilies = new Set();
                var updatedFamilies = new Set();
                var updates = pendingUpdates;
                pendingUpdates = [];
                updates.forEach(function(_ref) {
                    var family = _ref[0], nextType = _ref[1];
                    // Now that we got a real edit, we can create associations
                    // that will be read by the React reconciler.
                    var prevType = family.current;
                    updatedFamiliesByType.set(prevType, family);
                    updatedFamiliesByType.set(nextType, family);
                    family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                    if (canPreserveStateBetween(prevType, nextType)) {
                        updatedFamilies.add(family);
                    } else {
                        staleFamilies.add(family);
                    }
                }); // TODO: rename these fields to something more meaningful.
                var update = {
                    updatedFamilies: updatedFamilies,
                    // Families that will re-render preserving state
                    staleFamilies: staleFamilies // Families that will be remounted
                };
                helpersByRendererID.forEach(function(helpers) {
                    // Even if there are no roots, set the handler on first update.
                    // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                    helpers.setRefreshHandler(resolveFamily);
                });
                var didError = false;
                var firstError = null; // We snapshot maps and sets that are mutated during commits.
                // If we don't do this, there is a risk they will be mutated while
                // we iterate over them. For example, trying to recover a failed root
                // may cause another root to be added to the failed list -- an infinite loop.
                var failedRootsSnapshot = cloneSet(failedRoots);
                var mountedRootsSnapshot = cloneSet(mountedRoots);
                var helpersByRootSnapshot = cloneMap(helpersByRoot);
                failedRootsSnapshot.forEach(function(root) {
                    var helpers = helpersByRootSnapshot.get(root);
                    if (helpers === undefined) {
                        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                    }
                    if (!failedRoots.has(root)) {}
                    if (rootElements === null) {
                        return;
                    }
                    if (!rootElements.has(root)) {
                        return;
                    }
                    var element = rootElements.get(root);
                    try {
                        helpers.scheduleRoot(root, element);
                    } catch (err) {
                        if (!didError) {
                            didError = true;
                            firstError = err;
                        } // Keep trying other roots.
                    }
                });
                mountedRootsSnapshot.forEach(function(root) {
                    var helpers = helpersByRootSnapshot.get(root);
                    if (helpers === undefined) {
                        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                    }
                    if (!mountedRoots.has(root)) {}
                    try {
                        helpers.scheduleRefresh(root, update);
                    } catch (err) {
                        if (!didError) {
                            didError = true;
                            firstError = err;
                        } // Keep trying other roots.
                    }
                });
                if (didError) {
                    throw firstError;
                }
                return update;
            } finally{
                isPerformingRefresh = false;
            }
        }
        function register(type, id) {
            {
                if (type === null) {
                    return;
                }
                if (typeof type !== 'function' && typeof type !== 'object') {
                    return;
                } // This can happen in an edge case, e.g. if we register
                // return value of a HOC but it returns a cached component.
                // Ignore anything but the first registration for each type.
                if (allFamiliesByType.has(type)) {
                    return;
                } // Create family or remember to update it.
                // None of this bookkeeping affects reconciliation
                // until the first performReactRefresh() call above.
                var family = allFamiliesByID.get(id);
                if (family === undefined) {
                    family = {
                        current: type
                    };
                    allFamiliesByID.set(id, family);
                } else {
                    pendingUpdates.push([
                        family,
                        type
                    ]);
                }
                allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
                if (typeof type === 'object' && type !== null) {
                    switch(getProperty(type, '$$typeof')){
                        case REACT_FORWARD_REF_TYPE:
                            register(type.render, id + '$render');
                            break;
                        case REACT_MEMO_TYPE:
                            register(type.type, id + '$type');
                            break;
                    }
                }
            }
        }
        function setSignature(type, key) {
            var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
            {
                if (!allSignaturesByType.has(type)) {
                    allSignaturesByType.set(type, {
                        forceReset: forceReset,
                        ownKey: key,
                        fullKey: null,
                        getCustomHooks: getCustomHooks || function() {
                            return [];
                        }
                    });
                } // Visit inner types because we might not have signed them.
                if (typeof type === 'object' && type !== null) {
                    switch(getProperty(type, '$$typeof')){
                        case REACT_FORWARD_REF_TYPE:
                            setSignature(type.render, key, forceReset, getCustomHooks);
                            break;
                        case REACT_MEMO_TYPE:
                            setSignature(type.type, key, forceReset, getCustomHooks);
                            break;
                    }
                }
            }
        } // This is lazily called during first render for a type.
        // It captures Hook list at that time so inline requires don't break comparisons.
        function collectCustomHooksForSignature(type) {
            {
                var signature = allSignaturesByType.get(type);
                if (signature !== undefined) {
                    computeFullKey(signature);
                }
            }
        }
        function getFamilyByID(id) {
            {
                return allFamiliesByID.get(id);
            }
        }
        function getFamilyByType(type) {
            {
                return allFamiliesByType.get(type);
            }
        }
        function findAffectedHostInstances(families) {
            {
                var affectedInstances = new Set();
                mountedRoots.forEach(function(root) {
                    var helpers = helpersByRoot.get(root);
                    if (helpers === undefined) {
                        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                    }
                    var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
                    instancesForRoot.forEach(function(inst) {
                        affectedInstances.add(inst);
                    });
                });
                return affectedInstances;
            }
        }
        function injectIntoGlobalHook(globalObject) {
            {
                // For React Native, the global hook will be set up by require('react-devtools-core').
                // That code will run before us. So we need to monkeypatch functions on existing hook.
                // For React Web, the global hook will be set up by the extension.
                // This will also run before us.
                var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (hook === undefined) {
                    // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
                    // Note that in this case it's important that renderer code runs *after* this method call.
                    // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
                    var nextID = 0;
                    globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                        renderers: new Map(),
                        supportsFiber: true,
                        inject: function(injected) {
                            return nextID++;
                        },
                        onScheduleFiberRoot: function(id, root, children) {},
                        onCommitFiberRoot: function(id, root,