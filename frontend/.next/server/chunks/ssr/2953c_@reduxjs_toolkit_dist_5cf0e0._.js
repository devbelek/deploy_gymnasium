module.exports = {

"[project]/node_modules/.pnpm/@reduxjs+toolkit@2.2.7_react-redux@9.1.2_@types+react@18.3.3_react@18.3.1_redux@5.0.1__react@18.3.1/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// src/index.ts
__turbopack_esm__({
    "ReducerType": ()=>ReducerType,
    "SHOULD_AUTOBATCH": ()=>SHOULD_AUTOBATCH,
    "TaskAbortError": ()=>TaskAbortError,
    "Tuple": ()=>Tuple,
    "addListener": ()=>addListener,
    "asyncThunkCreator": ()=>asyncThunkCreator,
    "autoBatchEnhancer": ()=>autoBatchEnhancer,
    "buildCreateSlice": ()=>buildCreateSlice,
    "clearAllListeners": ()=>clearAllListeners,
    "combineSlices": ()=>combineSlices,
    "configureStore": ()=>configureStore,
    "createAction": ()=>createAction,
    "createActionCreatorInvariantMiddleware": ()=>createActionCreatorInvariantMiddleware,
    "createAsyncThunk": ()=>createAsyncThunk,
    "createDraftSafeSelector": ()=>createDraftSafeSelector,
    "createDraftSafeSelectorCreator": ()=>createDraftSafeSelectorCreator,
    "createDynamicMiddleware": ()=>createDynamicMiddleware,
    "createEntityAdapter": ()=>createEntityAdapter,
    "createImmutableStateInvariantMiddleware": ()=>createImmutableStateInvariantMiddleware,
    "createListenerMiddleware": ()=>createListenerMiddleware,
    "createReducer": ()=>createReducer,
    "createSerializableStateInvariantMiddleware": ()=>createSerializableStateInvariantMiddleware,
    "createSlice": ()=>createSlice,
    "findNonSerializableValue": ()=>findNonSerializableValue,
    "formatProdErrorMessage": ()=>formatProdErrorMessage,
    "isActionCreator": ()=>isActionCreator,
    "isAllOf": ()=>isAllOf,
    "isAnyOf": ()=>isAnyOf,
    "isAsyncThunkAction": ()=>isAsyncThunkAction,
    "isFluxStandardAction": ()=>isFSA,
    "isFulfilled": ()=>isFulfilled,
    "isImmutableDefault": ()=>isImmutableDefault,
    "isPending": ()=>isPending,
    "isPlain": ()=>isPlain,
    "isRejected": ()=>isRejected,
    "isRejectedWithValue": ()=>isRejectedWithValue,
    "miniSerializeError": ()=>miniSerializeError,
    "nanoid": ()=>nanoid,
    "prepareAutoBatched": ()=>prepareAutoBatched,
    "removeListener": ()=>removeListener,
    "unwrapResult": ()=>unwrapResult
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/reselect@5.1.1/node_modules/reselect/dist/reselect.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/immer@10.1.1/node_modules/immer/dist/immer.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/redux@5.0.1/node_modules/redux/dist/redux.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$2d$thunk$40$3$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/redux-thunk@3.1.0_redux@5.0.1/node_modules/redux-thunk/dist/redux-thunk.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
var createDraftSafeSelectorCreator = (...args)=>{
    const createSelector2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSelectorCreator"])(...args);
    const createDraftSafeSelector2 = Object.assign((...args2)=>{
        const selector = createSelector2(...args2);
        const wrappedSelector = (value, ...rest)=>selector((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["current"])(value) : value, ...rest);
        Object.assign(wrappedSelector, selector);
        return wrappedSelector;
    }, {
        withTypes: ()=>createDraftSafeSelector2
    });
    return createDraftSafeSelector2;
};
var createDraftSafeSelector = /* @__PURE__ */ createDraftSafeSelectorCreator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weakMapMemoize"]);
;
;
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"].apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
    return function(noop3) {
        return noop3;
    };
};
;
;
// src/tsHelpers.ts
var hasMatchFunction = (v)=>{
    return v && typeof v.match === "function";
};
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator(...args) {
        if (prepareAction) {
            let prepared = prepareAction(...args);
            if (!prepared) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "prepareAction did not return an object");
            }
            return {
                type,
                payload: prepared.payload,
                ..."meta" in prepared && {
                    meta: prepared.meta
                },
                ..."error" in prepared && {
                    error: prepared.error
                }
            };
        }
        return {
            type,
            payload: args[0]
        };
    }
    actionCreator.toString = ()=>`${type}`;
    actionCreator.type = type;
    actionCreator.match = (action)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action) && action.type === type;
    return actionCreator;
}
function isActionCreator(action) {
    return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
    hasMatchFunction(action);
}
function isFSA(action) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return [
        "type",
        "payload",
        "error",
        "meta"
    ].indexOf(key) > -1;
}
// src/actionCreatorInvariantMiddleware.ts
function getMessage(type) {
    const splitType = type ? `${type}`.split("/") : [];
    const actionName = splitType[splitType.length - 1] || "actionCreator";
    return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
}
function createActionCreatorInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const { isActionCreator: isActionCreator2 = isActionCreator } = options;
    return ()=>(next)=>(action)=>{
                if (isActionCreator2(action)) {
                    console.warn(getMessage(action.type));
                }
                return next(action);
            };
}
;
function getTimeMeasureUtils(maxDelay, fnName) {
    let elapsed = 0;
    return {
        measureTime (fn) {
            const started = Date.now();
            try {
                return fn();
            } finally{
                const finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded () {
            if (elapsed > maxDelay) {
                console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
            }
        }
    };
}
function find(iterable, comparator) {
    for (const entry of iterable){
        if (comparator(entry)) {
            return entry;
        }
    }
    return void 0;
}
var Tuple = class _Tuple extends Array {
    constructor(...items){
        super(...items);
        Object.setPrototypeOf(this, _Tuple.prototype);
    }
    static get [Symbol.species]() {
        return _Tuple;
    }
    concat(...arr) {
        return super.concat.apply(this, arr);
    }
    prepend(...arr) {
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new _Tuple(...arr[0].concat(this));
        }
        return new _Tuple(...arr.concat(this));
    }
};
function freezeDraftable(val) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraftable"])(val) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produce"])(val, ()=>{}) : val;
}
function emplace(map, key, handler) {
    if (map.has(key)) {
        let value = map.get(key);
        if (handler.update) {
            value = handler.update(value, key, map);
            map.set(key, value);
        }
        return value;
    }
    if (!handler.insert) throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "No insert provided for key not already in map");
    const inserted = handler.insert(key, map);
    map.set(key, inserted);
    return inserted;
}
// src/immutableStateInvariantMiddleware.ts
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
    const tracked = {
        value: obj
    };
    if (!isImmutable(obj) && !checkedObjects.has(obj)) {
        checkedObjects.add(obj);
        tracked.children = {};
        for(const key in obj){
            const childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
    const prevObj = trackedProperty ? trackedProperty.value : void 0;
    const sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return {
            wasMutated: true,
            path
        };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return {
            wasMutated: false
        };
    }
    const keysToDetect = {};
    for(let key in trackedProperty.children){
        keysToDetect[key] = true;
    }
    for(let key in obj){
        keysToDetect[key] = true;
    }
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for(let key in keysToDetect){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return result;
        }
    }
    return {
        wasMutated: false
    };
}
function createImmutableStateInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        let stringify2 = function(obj, serializer, indent, decycler) {
            return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
        }, getSerialize2 = function(serializer, decycler) {
            let stack = [], keys = [];
            if (!decycler) decycler = function(_, value) {
                if (stack[0] === value) return "[Circular ~]";
                return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
            };
            return function(key, value) {
                if (stack.length > 0) {
                    var thisPos = stack.indexOf(this);
                    ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
                    ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
                    if (~stack.indexOf(value)) value = decycler.call(this, key, value);
                } else stack.push(value);
                return serializer == null ? value : serializer.call(this, key, value);
            };
        };
        var stringify = stringify2, getSerialize = getSerialize2;
        let { isImmutable = isImmutableDefault, ignoredPaths, warnAfter = 32 } = options;
        const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
        return ({ getState })=>{
            let state = getState();
            let tracker = track(state);
            let result;
            return (next)=>(action)=>{
                    const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
                        }
                    });
                    const dispatchedAction = next(action);
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify2(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
                        }
                    });
                    measureUtils.warnIfExceeded();
                    return dispatchedAction;
                };
        };
    }
}
;
function isPlain(val) {
    const type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
    let foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache?.has(value)) return false;
    const entries = getEntries != null ? getEntries(value) : Object.entries(value);
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for (const [key, nestedValue] of entries){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        if (!isSerializable(nestedValue)) {
            return {
                keyPath: nestedPath,
                value: nestedValue
            };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return foundNestedSerializable;
            }
        }
    }
    if (cache && isNestedFrozen(value)) cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value)) return false;
    for (const nestedValue of Object.values(value)){
        if (typeof nestedValue !== "object" || nestedValue === null) continue;
        if (!isNestedFrozen(nestedValue)) return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        const { isSerializable = isPlain, getEntries, ignoredActions = [], ignoredActionPaths = [
            "meta.arg",
            "meta.baseQueryMeta"
        ], ignoredPaths = [], warnAfter = 32, ignoreState = false, ignoreActions = false, disableCache = false } = options;
        const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
        return (storeAPI)=>(next)=>(action)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                        return next(action);
                    }
                    const result = next(action);
                    const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
                    if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
                        measureUtils.measureTime(()=>{
                            const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                            if (foundActionNonSerializableValue) {
                                const { keyPath, value } = foundActionNonSerializableValue;
                                console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                            }
                        });
                    }
                    if (!ignoreState) {
                        measureUtils.measureTime(()=>{
                            const state = storeAPI.getState();
                            const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                            if (foundStateNonSerializableValue) {
                                const { keyPath, value } = foundStateNonSerializableValue;
                                console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
                            }
                        });
                        measureUtils.warnIfExceeded();
                    }
                    return result;
                };
    }
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
var buildGetDefaultMiddleware = ()=>function getDefaultMiddleware(options) {
        const { thunk = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true } = options ?? {};
        let middlewareArray = new Tuple();
        if (thunk) {
            if (isBoolean(thunk)) {
                middlewareArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$2d$thunk$40$3$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["thunk"]);
            } else {
                middlewareArray.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$2d$thunk$40$3$2e$1$2e$0_redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withExtraArgument"])(thunk.extraArgument));
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (immutableCheck) {
                let immutableOptions = {};
                if (!isBoolean(immutableCheck)) {
                    immutableOptions = immutableCheck;
                }
                middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
            }
            if (serializableCheck) {
                let serializableOptions = {};
                if (!isBoolean(serializableCheck)) {
                    serializableOptions = serializableCheck;
                }
                middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
            }
            if (actionCreatorCheck) {
                let actionCreatorOptions = {};
                if (!isBoolean(actionCreatorCheck)) {
                    actionCreatorOptions = actionCreatorCheck;
                }
                middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
            }
        }
        return middlewareArray;
    };
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = ()=>(payload)=>({
            payload,
            meta: {
                [SHOULD_AUTOBATCH]: true
            }
        });
var createQueueWithTimer = (timeout)=>{
    return (notify)=>{
        setTimeout(notify, timeout);
    };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = (options = {
    type: "raf"
})=>(next)=>(...args)=>{
            const store = next(...args);
            let notifying = true;
            let shouldNotifyAtEndOfTick = false;
            let notificationQueued = false;
            const listeners = /* @__PURE__ */ new Set();
            const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
            const notifyListeners = ()=>{
                notificationQueued = false;
                if (shouldNotifyAtEndOfTick) {
                    shouldNotifyAtEndOfTick = false;
                    listeners.forEach((l)=>l());
                }
            };
            return Object.assign({}, store, {
                // Override the base `store.subscribe` method to keep original listeners
                // from running if we're delaying notifications
                subscribe (listener2) {
                    const wrappedListener = ()=>notifying && listener2();
                    const unsubscribe = store.subscribe(wrappedListener);
                    listeners.add(listener2);
                    return ()=>{
                        unsubscribe();
                        listeners.delete(listener2);
                    };
                },
                // Override the base `store.dispatch` method so that we can check actions
                // for the `shouldAutoBatch` flag and determine if batching is active
                dispatch (action) {
                    try {
                        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
                        shouldNotifyAtEndOfTick = !notifying;
                        if (shouldNotifyAtEndOfTick) {
                            if (!notificationQueued) {
                                notificationQueued = true;
                                queueCallback(notifyListeners);
                            }
                        }
                        return store.dispatch(action);
                    } finally{
                        notifying = true;
                    }
                }
            });
        };
// src/getDefaultEnhancers.ts
var buildGetDefaultEnhancers = (middlewareEnhancer)=>function getDefaultEnhancers(options) {
        const { autoBatch = true } = options ?? {};
        let enhancerArray = new Tuple(middlewareEnhancer);
        if (autoBatch) {
            enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
        }
        return enhancerArray;
    };
// src/configureStore.ts
function configureStore(options) {
    const getDefaultMiddleware = buildGetDefaultMiddleware();
    const { reducer = void 0, middleware, devTools = true, preloadedState = void 0, enhancers = void 0 } = options || {};
    let rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(reducer)) {
        rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineReducers"])(reducer);
    } else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && middleware && typeof middleware !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`middleware` field must be a callback");
    }
    let finalMiddleware;
    if (typeof middleware === "function") {
        finalMiddleware = middleware(getDefaultMiddleware);
        if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(finalMiddleware)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "when using a middleware builder function, an array of middleware must be returned");
        }
    } else {
        finalMiddleware = getDefaultMiddleware();
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "each middleware provided to configureStore must be a function");
    }
    let finalCompose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"];
    if (devTools) {
        finalCompose = composeWithDevTools({
            // Enable capture of stack traces for dispatched Redux actions
            trace: ("TURBOPACK compile-time value", "development") !== "production",
            ...typeof devTools === "object" && devTools
        });
    }
    const middlewareEnhancer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyMiddleware"])(...finalMiddleware);
    const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
    if (("TURBOPACK compile-time value", "development") !== "production" && enhancers && typeof enhancers !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`enhancers` field must be a callback");
    }
    let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
    if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(storeEnhancers)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`enhancers` callback must return an array");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && storeEnhancers.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "each enhancer provided to configureStore must be a function");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) {
        console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
    }
    const composedEnhancer = finalCompose(...storeEnhancers);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}
;
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    const actionsMap = {};
    const actionMatchers = [];
    let defaultCaseReducer;
    const builder = {
        addCase (typeOrActionCreator, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (actionMatchers.length > 0) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (!type) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`builder.addCase` cannot be called with an empty action type");
            }
            if (type in actionsMap) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher (matcher, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({
                matcher,
                reducer
            });
            return builder;
        },
        addDefaultCase (reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [
        actionsMap,
        actionMatchers,
        defaultCaseReducer
    ];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof mapOrBuilderCallback === "object") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
        }
    }
    let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
    let getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = ()=>freezeDraftable(initialState());
    } else {
        const frozenInitialState = freezeDraftable(initialState);
        getInitialState = ()=>frozenInitialState;
    }
    function reducer(state = getInitialState(), action) {
        let caseReducers = [
            actionsMap[action.type],
            ...finalActionMatchers.filter(({ matcher })=>matcher(action)).map(({ reducer: reducer2 })=>reducer2)
        ];
        if (caseReducers.filter((cr)=>!!cr).length === 0) {
            caseReducers = [
                finalDefaultCaseReducer
            ];
        }
        return caseReducers.reduce((previousState, caseReducer)=>{
            if (caseReducer) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"])(previousState)) {
                    const draft = previousState;
                    const result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraftable"])(previousState)) {
                    const result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                } else {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produce"])(previousState, (draft)=>{
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/matchers.ts
var matches = (matcher, action)=>{
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    } else {
        return matcher(action);
    }
};
function isAnyOf(...matchers) {
    return (action)=>{
        return matchers.some((matcher)=>matches(matcher, action));
    };
}
function isAllOf(...matchers) {
    return (action)=>{
        return matchers.every((matcher)=>matches(matcher, action));
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta) return false;
    const hasValidRequestId = typeof action.meta.requestId === "string";
    const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.pending));
}
function isRejected(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.rejected));
}
function isRejectedWithValue(...asyncThunks) {
    const hasFlag = (action)=>{
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return isAllOf(isRejected(...asyncThunks), hasFlag);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "fulfilled"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.fulfilled));
}
function isAsyncThunkAction(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending",
                "fulfilled",
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.flatMap((asyncThunk)=>[
            asyncThunk.pending,
            asyncThunk.rejected,
            asyncThunk.fulfilled
        ]));
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21)=>{
    let id = "";
    let i = size;
    while(i--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = class {
    constructor(payload, meta){
        this.payload = payload;
        this.meta = meta;
    }
    /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ _type;
};
var FulfillWithMeta = class {
    constructor(payload, meta){
        this.payload = payload;
        this.meta = meta;
    }
    /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ _type;
};
var miniSerializeError = (value)=>{
    if (typeof value === "object" && value !== null) {
        const simpleError = {};
        for (const property of commonProperties){
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return {
        message: String(value)
    };
};
var createAsyncThunk = /* @__PURE__ */ (()=>{
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta)=>({
                payload,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "fulfilled"
                }
            }));
        const pending = createAction(typePrefix + "/pending", (requestId, arg, meta)=>({
                payload: void 0,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "pending"
                }
            }));
        const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta)=>({
                payload,
                error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    rejectedWithValue: !!payload,
                    requestStatus: "rejected",
                    aborted: error?.name === "AbortError",
                    condition: error?.name === "ConditionError"
                }
            }));
        function actionCreator(arg) {
            return (dispatch, getState, extra)=>{
                const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
                const abortController = new AbortController();
                let abortHandler;
                let abortReason;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                const promise = async function() {
                    let finalAction;
                    try {
                        let conditionResult = options?.condition?.(arg, {
                            getState,
                            extra
                        });
                        if (isThenable(conditionResult)) {
                            conditionResult = await conditionResult;
                        }
                        if (conditionResult === false || abortController.signal.aborted) {
                            throw {
                                name: "ConditionError",
                                message: "Aborted due to condition callback returning false."
                            };
                        }
                        const abortedPromise = new Promise((_, reject)=>{
                            abortHandler = ()=>{
                                reject({
                                    name: "AbortError",
                                    message: abortReason || "Aborted"
                                });
                            };
                            abortController.signal.addEventListener("abort", abortHandler);
                        });
                        dispatch(pending(requestId, arg, options?.getPendingMeta?.({
                            requestId,
                            arg
                        }, {
                            getState,
                            extra
                        })));
                        finalAction = await Promise.race([
                            abortedPromise,
                            Promise.resolve(payloadCreator(arg, {
                                dispatch,
                                getState,
                                extra,
                                requestId,
                                signal: abortController.signal,
                                abort,
                                rejectWithValue: (value, meta)=>{
                                    return new RejectWithValue(value, meta);
                                },
                                fulfillWithValue: (value, meta)=>{
                                    return new FulfillWithMeta(value, meta);
                                }
                            })).then((result)=>{
                                if (result instanceof RejectWithValue) {
                                    throw result;
                                }
                                if (result instanceof FulfillWithMeta) {
                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                }
                                return fulfilled(result, requestId, arg);
                            })
                        ]);
                    } catch (err) {
                        finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
                    } finally{
                        if (abortHandler) {
                            abortController.signal.removeEventListener("abort", abortHandler);
                        }
                    }
                    const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                    if (!skipDispatch) {
                        dispatch(finalAction);
                    }
                    return finalAction;
                }();
                return Object.assign(promise, {
                    abort,
                    requestId,
                    arg,
                    unwrap () {
                        return promise.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending,
            rejected,
            fulfilled,
            settled: isAnyOf(rejected, fulfilled),
            typePrefix
        });
    }
    createAsyncThunk2.withTypes = ()=>createAsyncThunk2;
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/createSlice.ts
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
    [asyncThunkSymbol]: createAsyncThunk
};
var ReducerType = /* @__PURE__ */ ((ReducerType2)=>{
    ReducerType2["reducer"] = "reducer";
    ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
    ReducerType2["asyncThunk"] = "asyncThunk";
    return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
    return `${slice}/${actionKey}`;
}
function buildCreateSlice({ creators } = {}) {
    const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
    return function createSlice2(options) {
        const { name, reducerPath = name } = options;
        if (!name) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`name` is a required option for createSlice");
        }
        if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
            if (options.initialState === void 0) {
                console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
            }
        }
        const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
        const reducerNames = Object.keys(reducers);
        const context = {
            sliceCaseReducersByName: {},
            sliceCaseReducersByType: {},
            actionCreators: {},
            sliceMatchers: []
        };
        const contextMethods = {
            addCase (typeOrActionCreator, reducer2) {
                const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
                if (!type) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`context.addCase` cannot be called with an empty action type");
                }
                if (type in context.sliceCaseReducersByType) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
                }
                context.sliceCaseReducersByType[type] = reducer2;
                return contextMethods;
            },
            addMatcher (matcher, reducer2) {
                context.sliceMatchers.push({
                    matcher,
                    reducer: reducer2
                });
                return contextMethods;
            },
            exposeAction (name2, actionCreator) {
                context.actionCreators[name2] = actionCreator;
                return contextMethods;
            },
            exposeCaseReducer (name2, reducer2) {
                context.sliceCaseReducersByName[name2] = reducer2;
                return contextMethods;
            }
        };
        reducerNames.forEach((reducerName)=>{
            const reducerDefinition = reducers[reducerName];
            const reducerDetails = {
                reducerName,
                type: getType(name, reducerName),
                createNotation: typeof options.reducers === "function"
            };
            if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
                handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
            } else {
                handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
            }
        });
        function buildReducer() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (typeof options.extraReducers === "object") {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
            const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [
                options.extraReducers
            ];
            const finalCaseReducers = {
                ...extraReducers,
                ...context.sliceCaseReducersByType
            };
            return createReducer(options.initialState, (builder)=>{
                for(let key in finalCaseReducers){
                    builder.addCase(key, finalCaseReducers[key]);
                }
                for (let sM of context.sliceMatchers){
                    builder.addMatcher(sM.matcher, sM.reducer);
                }
                for (let m of actionMatchers){
                    builder.addMatcher(m.matcher, m.reducer);
                }
                if (defaultCaseReducer) {
                    builder.addDefaultCase(defaultCaseReducer);
                }
            });
        }
        const selectSelf = (state)=>state;
        const injectedSelectorCache = /* @__PURE__ */ new Map();
        let _reducer;
        function reducer(state, action) {
            if (!_reducer) _reducer = buildReducer();
            return _reducer(state, action);
        }
        function getInitialState() {
            if (!_reducer) _reducer = buildReducer();
            return _reducer.getInitialState();
        }
        function makeSelectorProps(reducerPath2, injected = false) {
            function selectSlice(state) {
                let sliceState = state[reducerPath2];
                if (typeof sliceState === "undefined") {
                    if (injected) {
                        sliceState = getInitialState();
                    } else if ("TURBOPACK compile-time truthy", 1) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "selectSlice returned undefined for an uninjected slice reducer");
                    }
                }
                return sliceState;
            }
            function getSelectors(selectState = selectSelf) {
                const selectorCache = emplace(injectedSelectorCache, injected, {
                    insert: ()=>/* @__PURE__ */ new WeakMap()
                });
                return emplace(selectorCache, selectState, {
                    insert: ()=>{
                        const map = {};
                        for (const [name2, selector] of Object.entries(options.selectors ?? {})){
                            map[name2] = wrapSelector(selector, selectState, getInitialState, injected);
                        }
                        return map;
                    }
                });
            }
            return {
                reducerPath: reducerPath2,
                getSelectors,
                get selectors () {
                    return getSelectors(selectSlice);
                },
                selectSlice
            };
        }
        const slice = {
            name,
            reducer,
            actions: context.actionCreators,
            caseReducers: context.sliceCaseReducersByName,
            getInitialState,
            ...makeSelectorProps(reducerPath),
            injectInto (injectable, { reducerPath: pathOpt, ...config } = {}) {
                const newReducerPath = pathOpt ?? reducerPath;
                injectable.inject({
                    reducerPath: newReducerPath,
                    reducer
                }, config);
                return {
                    ...slice,
                    ...makeSelectorProps(newReducerPath, true)
                };
            }
        };
        return slice;
    };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
    function wrapper(rootState, ...args) {
        let sliceState = selectState(rootState);
        if (typeof sliceState === "undefined") {
            if (injected) {
                sliceState = getInitialState();
            } else if ("TURBOPACK compile-time truthy", 1) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "selectState returned undefined for an uninjected slice reducer");
            }
        }
        return selector(sliceState, ...args);
    }
    wrapper.unwrapped = selector;
    return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
    function asyncThunk(payloadCreator, config) {
        return {
            _reducerDefinitionType: "asyncThunk" /* asyncThunk */ ,
            payloadCreator,
            ...config
        };
    }
    asyncThunk.withTypes = ()=>asyncThunk;
    return {
        reducer (caseReducer) {
            return Object.assign({
                // hack so the wrapping function has the same name as the original
                // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
                [caseReducer.name] (...args) {
                    return caseReducer(...args);
                }
            }[caseReducer.name], {
                _reducerDefinitionType: "reducer" /* reducer */ 
            });
        },
        preparedReducer (prepare, reducer) {
            return {
                _reducerDefinitionType: "reducerWithPrepare" /* reducerWithPrepare */ ,
                prepare,
                reducer
            };
        },
        asyncThunk
    };
}
function handleNormalReducerDefinition({ type, reducerName, createNotation }, maybeReducerWithPrepare, context) {
    let caseReducer;
    let prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
        if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
        }
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
        caseReducer = maybeReducerWithPrepare;
    }
    context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "asyncThunk" /* asyncThunk */ ;
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "reducerWithPrepare" /* reducerWithPrepare */ ;
}
function handleThunkCaseReducerDefinition({ type, reducerName }, reducerDefinition, context, cAT) {
    if (!cAT) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
    }
    const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
    const thunk = cAT(type, payloadCreator, options);
    context.exposeAction(reducerName, thunk);
    if (fulfilled) {
        context.addCase(thunk.fulfilled, fulfilled);
    }
    if (pending) {
        context.addCase(thunk.pending, pending);
    }
    if (rejected) {
        context.addCase(thunk.rejected, rejected);
    }
    if (settled) {
        context.addMatcher(thunk.settled, settled);
    }
    context.exposeCaseReducer(reducerName, {
        fulfilled: fulfilled || noop,
        pending: pending || noop,
        rejected: rejected || noop,
        settled: settled || noop
    });
}
function noop() {}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory(stateAdapter) {
    function getInitialState(additionalState = {}, entities) {
        const state = Object.assign(getInitialEntityState(), additionalState);
        return entities ? stateAdapter.setAll(state, entities) : state;
    }
    return {
        getInitialState
    };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState, options = {}) {
        const { createSelector: createSelector2 = createDraftSafeSelector } = options;
        const selectIds = (state)=>state.ids;
        const selectEntities = (state)=>state.entities;
        const selectAll = createSelector2(selectIds, selectEntities, (ids, entities)=>ids.map((id)=>entities[id]));
        const selectId = (_, id)=>id;
        const selectById = (entities, id)=>entities[id];
        const selectTotal = createSelector2(selectIds, (ids)=>ids.length);
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
                selectById: createSelector2(selectEntities, selectId, selectById)
            };
        }
        const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
        return {
            selectIds: createSelector2(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createSelector2(selectState, selectAll),
            selectTotal: createSelector2(selectState, selectTotal),
            selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return {
        getSelectors
    };
}
;
var isDraftTyped = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"];
function createSingleArgumentStateOperator(mutator) {
    const operator = createStateOperator((_, state)=>mutator(state));
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        const runMutator = (draft)=>{
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            } else {
                mutator(arg, draft);
            }
        };
        if (isDraftTyped(state)) {
            runMutator(state);
            return state;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produce"])(state, runMutator);
    };
}
;
function selectIdValue(entity, selectId) {
    const key = selectId(entity);
    if (("TURBOPACK compile-time value", "development") !== "production" && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function getCurrent(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["current"])(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    const existingIdsArray = getCurrent(state.ids);
    const existingIds = new Set(existingIdsArray);
    const added = [];
    const updated = [];
    for (const entity of newEntities){
        const id = selectIdValue(entity, selectId);
        if (existingIds.has(id)) {
            updated.push({
                id,
                changes: entity
            });
        } else {
            added.push(entity);
        }
    }
    return [
        added,
        updated,
        existingIdsArray
    ];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        ;
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([
            key
        ], state);
    }
    function removeManyMutably(keys, state) {
        let didMutate = false;
        keys.forEach((key)=>{
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter((id)=>id in state.entities);
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        const original3 = state.entities[update.id];
        if (original3 === void 0) {
            return false;
        }
        const updated = Object.assign({}, original3, update.changes);
        const newKey = selectIdValue(updated, selectId);
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        ;
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        const newKeys = {};
        const updatesPerEntity = {};
        updates.forEach((update)=>{
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    // Spreads ignore falsy values, so this works even if there isn't
                    // an existing update already at this key
                    changes: {
                        ...updatesPerEntity[update.id]?.changes,
                        ...update.changes
                    }
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            const didMutateIds = updates.filter((update)=>takeNewKey(newKeys, update, state)).length > 0;
            if (didMutateIds) {
                state.ids = Object.values(state.entities).map((e)=>selectIdValue(e, selectId));
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function findInsertIndex(sortedItems, item, comparisonFunction) {
    let lowIndex = 0;
    let highIndex = sortedItems.length;
    while(lowIndex < highIndex){
        let middleIndex = lowIndex + highIndex >>> 1;
        const currentItem = sortedItems[middleIndex];
        const res = comparisonFunction(item, currentItem);
        if (res >= 0) {
            lowIndex = middleIndex + 1;
        } else {
            highIndex = middleIndex;
        }
    }
    return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
    const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
    sortedItems.splice(insertAtIndex, 0, item);
    return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    function addOneMutably(entity, state) {
        return addManyMutably([
            entity
        ], state);
    }
    function addManyMutably(newEntities, state, existingIds) {
        newEntities = ensureEntitiesArray(newEntities);
        const existingKeys = new Set(existingIds ?? getCurrent(state.ids));
        const models = newEntities.filter((model)=>!existingKeys.has(selectIdValue(model, selectId)));
        if (models.length !== 0) {
            mergeFunction(state, models);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([
            entity
        ], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            for (const item of newEntities){
                delete state.entities[selectId(item)];
            }
            mergeFunction(state, newEntities);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state, []);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        let appliedUpdates = false;
        let replacedIds = false;
        for (let update of updates){
            const entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            const newId = selectId(entity);
            if (update.id !== newId) {
                replacedIds = true;
                delete state.entities[update.id];
                const oldIndex = state.ids.indexOf(update.id);
                state.ids[oldIndex] = newId;
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            mergeFunction(state, [], appliedUpdates, replacedIds);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
        if (updated.length) {
            updateManyMutably(updated, state);
        }
        if (added.length) {
            addManyMutably(added, state, existingIdsArray);
        }
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    const mergeFunction = (state, addedItems, appliedUpdates, replacedIds)=>{
        const currentEntities = getCurrent(state.entities);
        const currentIds = getCurrent(state.ids);
        const stateEntities = state.entities;
        let ids = currentIds;
        if (replacedIds) {
            ids = new Set(currentIds);
        }
        let sortedEntities = [];
        for (const id of ids){
            const entity = currentEntities[id];
            if (entity) {
                sortedEntities.push(entity);
            }
        }
        const wasPreviouslyEmpty = sortedEntities.length === 0;
        for (const item of addedItems){
            stateEntities[selectId(item)] = item;
            if (!wasPreviouslyEmpty) {
                insert(sortedEntities, item, comparer);
            }
        }
        if (wasPreviouslyEmpty) {
            sortedEntities = addedItems.slice().sort(comparer);
        } else if (appliedUpdates) {
            sortedEntities.sort(comparer);
        }
        const newSortedIds = sortedEntities.map(selectId);
        if (!areArraysEqual(currentIds, newSortedIds)) {
            state.ids = newSortedIds;
        }
    };
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options = {}) {
    const { selectId, sortComparer } = {
        sortComparer: false,
        selectId: (instance)=>instance.id,
        ...options
    };
    const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    const stateFactory = createInitialStateFactory(stateAdapter);
    const selectorsFactory = createSelectorsFactory();
    return {
        selectId,
        sortComparer,
        ...stateFactory,
        ...selectorsFactory,
        ...stateAdapter
    };
}
;
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
    constructor(code){
        this.code = code;
        this.message = `${task} ${cancelled} (reason: ${code})`;
    }
    name = "TaskAbortError";
    message;
};
// src/listenerMiddleware/utils.ts
var assertFunction = (func, expected)=>{
    if (typeof func !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `${expected} is not a function`);
    }
};
var noop2 = ()=>{};
var catchRejection = (promise, onError = noop2)=>{
    promise.catch(onError);
    return promise;
};
var addAbortSignalListener = (abortSignal, callback)=>{
    abortSignal.addEventListener("abort", callback, {
        once: true
    });
    return ()=>abortSignal.removeEventListener("abort", callback);
};
var abortControllerWithReason = (abortController, reason)=>{
    const signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/task.ts
var validateActive = (signal)=>{
    if (signal.aborted) {
        const { reason } = signal;
        throw new TaskAbortError(reason);
    }
};
function raceWithSignal(signal, promise) {
    let cleanup = noop2;
    return new Promise((resolve, reject)=>{
        const notifyRejection = ()=>reject(new TaskAbortError(signal.reason));
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise.finally(()=>cleanup()).then(resolve, reject);
    }).finally(()=>{
        cleanup = noop2;
    });
}
var runTask = async (task2, cleanUp)=>{
    try {
        await Promise.resolve();
        const value = await task2();
        return {
            status: "ok",
            value
        };
    } catch (error) {
        return {
            status: error instanceof TaskAbortError ? "cancelled" : "rejected",
            error
        };
    } finally{
        cleanUp?.();
    }
};
var createPause = (signal)=>{
    return (promise)=>{
        return catchRejection(raceWithSignal(signal, promise).then((output)=>{
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = (signal)=>{
    const pause = createPause(signal);
    return (timeoutMs)=>{
        return pause(new Promise((resolve)=>setTimeout(resolve, timeoutMs)));
    };
};
// src/listenerMiddleware/index.ts
var { assign } = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises)=>{
    const linkControllers = (controller)=>addAbortSignalListener(parentAbortSignal, ()=>abortControllerWithReason(controller, parentAbortSignal.reason));
    return (taskExecutor, opts)=>{
        assertFunction(taskExecutor, "taskExecutor");
        const childAbortController = new AbortController();
        linkControllers(childAbortController);
        const result = runTask(async ()=>{
            validateActive(parentAbortSignal);
            validateActive(childAbortController.signal);
            const result2 = await taskExecutor({
                pause: createPause(childAbortController.signal),
                delay: createDelay(childAbortController.signal),
                signal: childAbortController.signal
            });
            validateActive(childAbortController.signal);
            return result2;
        }, ()=>abortControllerWithReason(childAbortController, taskCompleted));
        if (opts?.autoJoin) {
            parentBlockingPromises.push(result.catch(noop2));
        }
        return {
            result: createPause(parentAbortSignal)(result),
            cancel () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = (startListening, signal)=>{
    const take = async (predicate, timeout)=>{
        validateActive(signal);
        let unsubscribe = ()=>{};
        const tuplePromise = new Promise((resolve, reject)=>{
            let stopListening = startListening({
                predicate,
                effect: (action, listenerApi)=>{
                    listenerApi.unsubscribe();
                    resolve([
                        action,
                        listenerApi.getState(),
                        listenerApi.getOriginalState()
                    ]);
                }
            });
            unsubscribe = ()=>{
                stopListening();
                reject();
            };
        });
        const promises = [
            tuplePromise
        ];
        if (timeout != null) {
            promises.push(new Promise((resolve)=>setTimeout(resolve, timeout, null)));
        }
        try {
            const output = await raceWithSignal(signal, Promise.race(promises));
            validateActive(signal);
            return output;
        } finally{
            unsubscribe();
        }
    };
    return (predicate, timeout)=>catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options)=>{
    let { type, actionCreator, matcher, predicate, effect } = options;
    if (type) {
        predicate = createAction(type).match;
    } else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    } else if (matcher) {
        predicate = matcher;
    } else if (predicate) {} else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return {
        predicate,
        type,
        effect
    };
};
var createListenerEntry = /* @__PURE__ */ assign((options)=>{
    const { type, predicate, effect } = getListenerEntryPropsFrom(options);
    const id = nanoid();
    const entry = {
        id,
        effect,
        type,
        predicate,
        pending: /* @__PURE__ */ new Set(),
        unsubscribe: ()=>{
            throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Unsubscribe not initialized");
        }
    };
    return entry;
}, {
    withTypes: ()=>createListenerEntry
});
var cancelActiveListeners = (entry)=>{
    entry.pending.forEach((controller)=>{
        abortControllerWithReason(controller, listenerCancelled);
    });
};
var createClearListenerMiddleware = (listenerMap)=>{
    return ()=>{
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo)=>{
    try {
        errorHandler(errorToNotify, errorInfo);
    } catch (errorHandlerError) {
        setTimeout(()=>{
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), {
    withTypes: ()=>addListener
});
var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), {
    withTypes: ()=>removeListener
});
var defaultErrorHandler = (...args)=>{
    console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {})=>{
    const listenerMap = /* @__PURE__ */ new Map();
    const { extra, onError = defaultErrorHandler } = middlewareOptions;
    assertFunction(onError, "onError");
    const insertEntry = (entry)=>{
        entry.unsubscribe = ()=>listenerMap.delete(entry.id);
        listenerMap.set(entry.id, entry);
        return (cancelOptions)=>{
            entry.unsubscribe();
            if (cancelOptions?.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    const startListening = (options)=>{
        let entry = find(Array.from(listenerMap.values()), (existingEntry)=>existingEntry.effect === options.effect);
        if (!entry) {
            entry = createListenerEntry(options);
        }
        return insertEntry(entry);
    };
    assign(startListening, {
        withTypes: ()=>startListening
    });
    const stopListening = (options)=>{
        const { type, effect, predicate } = getListenerEntryPropsFrom(options);
        const entry = find(Array.from(listenerMap.values()), (entry2)=>{
            const matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
            return matchPredicateOrType && entry2.effect === effect;
        });
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    assign(stopListening, {
        withTypes: ()=>stopListening
    });
    const notifyListener = async (entry, action, api, getOriginalState)=>{
        const internalTaskController = new AbortController();
        const take = createTakePattern(startListening, internalTaskController.signal);
        const autoJoinPromises = [];
        try {
            entry.pending.add(internalTaskController);
            await Promise.resolve(entry.effect(action, // Use assign() rather than ... to avoid extra helper functions added to bundle
            assign({}, api, {
                getOriginalState,
                condition: (predicate, timeout)=>take(predicate, timeout).then(Boolean),
                take,
                delay: createDelay(internalTaskController.signal),
                pause: createPause(internalTaskController.signal),
                extra,
                signal: internalTaskController.signal,
                fork: createFork(internalTaskController.signal, autoJoinPromises),
                unsubscribe: entry.unsubscribe,
                subscribe: ()=>{
                    listenerMap.set(entry.id, entry);
                },
                cancelActiveListeners: ()=>{
                    entry.pending.forEach((controller, _, set)=>{
                        if (controller !== internalTaskController) {
                            abortControllerWithReason(controller, listenerCancelled);
                            set.delete(controller);
                        }
                    });
                },
                cancel: ()=>{
                    abortControllerWithReason(internalTaskController, listenerCancelled);
                    entry.pending.delete(internalTaskController);
                },
                throwIfCancelled: ()=>{
                    validateActive(internalTaskController.signal);
                }
            })));
        } catch (listenerError) {
            if (!(listenerError instanceof TaskAbortError)) {
                safelyNotifyError(onError, listenerError, {
                    raisedBy: "effect"
                });
            }
        } finally{
            await Promise.all(autoJoinPromises);
            abortControllerWithReason(internalTaskController, listenerCompleted);
            entry.pending.delete(internalTaskController);
        }
    };
    const clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    const middleware = (api)=>(next)=>(action)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                    return next(action);
                }
                if (addListener.match(action)) {
                    return startListening(action.payload);
                }
                if (clearAllListeners.match(action)) {
                    clearListenerMiddleware();
                    return;
                }
                if (removeListener.match(action)) {
                    return stopListening(action.payload);
                }
                let originalState = api.getState();
                const getOriginalState = ()=>{
                    if (originalState === INTERNAL_NIL_TOKEN) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `${alm}: getOriginalState can only be called synchronously`);
                    }
                    return originalState;
                };
                let result;
                try {
                    result = next(action);
                    if (listenerMap.size > 0) {
                        const currentState = api.getState();
                        const listenerEntries = Array.from(listenerMap.values());
                        for (const entry of listenerEntries){
                            let runListener = false;
                            try {
                                runListener = entry.predicate(action, currentState, originalState);
                            } catch (predicateError) {
                                runListener = false;
                                safelyNotifyError(onError, predicateError, {
                                    raisedBy: "predicate"
                                });
                            }
                            if (!runListener) {
                                continue;
                            }
                            notifyListener(entry, action, api, getOriginalState);
                        }
                    }
                } finally{
                    originalState = INTERNAL_NIL_TOKEN;
                }
                return result;
            };
    return {
        middleware,
        startListening,
        stopListening,
        clearListeners: clearListenerMiddleware
    };
};
;
var createMiddlewareEntry = (middleware)=>({
        id: nanoid(),
        middleware,
        applied: /* @__PURE__ */ new Map()
    });
var matchInstance = (instanceId)=>(action)=>action?.meta?.instanceId === instanceId;
var createDynamicMiddleware = ()=>{
    const instanceId = nanoid();
    const middlewareMap = /* @__PURE__ */ new Map();
    const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", (...middlewares)=>({
            payload: middlewares,
            meta: {
                instanceId
            }
        })), {
        withTypes: ()=>withMiddleware
    });
    const addMiddleware = Object.assign(function addMiddleware2(...middlewares) {
        middlewares.forEach((middleware2)=>{
            let entry = find(Array.from(middlewareMap.values()), (entry2)=>entry2.middleware === middleware2);
            if (!entry) {
                entry = createMiddlewareEntry(middleware2);
            }
            middlewareMap.set(entry.id, entry);
        });
    }, {
        withTypes: ()=>addMiddleware
    });
    const getFinalMiddleware = (api)=>{
        const appliedMiddleware = Array.from(middlewareMap.values()).map((entry)=>emplace(entry.applied, api, {
                insert: ()=>entry.middleware(api)
            }));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"])(...appliedMiddleware);
    };
    const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
    const middleware = (api)=>(next)=>(action)=>{
                if (isWithMiddleware(action)) {
                    addMiddleware(...action.payload);
                    return api.dispatch;
                }
                return getFinalMiddleware(api)(next)(action);
            };
    return {
        middleware,
        addMiddleware,
        withMiddleware,
        instanceId
    };
};
;
var isSliceLike = (maybeSliceLike)=>"reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices)=>slices.flatMap((sliceOrMap)=>isSliceLike(sliceOrMap) ? [
            [
                sliceOrMap.reducerPath,
                sliceOrMap.reducer
            ]
        ] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value)=>!!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap)=>emplace(stateProxyMap, state, {
        insert: ()=>new Proxy(state, {
                get: (target, prop, receiver)=>{
                    if (prop === ORIGINAL_STATE) return target;
                    const result = Reflect.get(target, prop, receiver);
                    if (typeof result === "undefined") {
                        const reducer = reducerMap[prop.toString()];
                        if (reducer) {
                            const reducerResult = reducer(void 0, {
                                type: nanoid()
                            });
                            if (typeof reducerResult === "undefined") {
                                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `The slice reducer for key "${prop.toString()}" returned undefined when called for selector(). If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
                            }
                            return reducerResult;
                        }
                    }
                    return result;
                }
            })
    });
var original = (state)=>{
    if (!isStateProxy(state)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "original must be used on state Proxy");
    }
    return state[ORIGINAL_STATE];
};
var noopReducer = (state = {})=>state;
function combineSlices(...slices) {
    const reducerMap = Object.fromEntries(getReducers(slices));
    const getReducer = ()=>Object.keys(reducerMap).length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineReducers"])(reducerMap) : noopReducer;
    let reducer = getReducer();
    function combinedReducer(state, action) {
        return reducer(state, action);
    }
    combinedReducer.withLazyLoadedSlices = ()=>combinedReducer;
    const inject = (slice, config = {})=>{
        const { reducerPath, reducer: reducerToInject } = slice;
        const currentReducer = reducerMap[reducerPath];
        if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) {
            if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                console.error(`called \`inject\` to override already-existing reducer ${reducerPath} without specifying \`overrideExisting: true\``);
            }
            return combinedReducer;
        }
        reducerMap[reducerPath] = reducerToInject;
        reducer = getReducer();
        return combinedReducer;
    };
    const selector = Object.assign(function makeSelector(selectorFn, selectState) {
        return function selector2(state, ...args) {
            return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap), ...args);
        };
    }, {
        original
    });
    return Object.assign(combinedReducer, {
        inject,
        selector
    });
}
// src/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
    return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
;
 //# sourceMappingURL=redux-toolkit.modern.mjs.map

})()),
"[project]/node_modules/.pnpm/@reduxjs+toolkit@2.2.7_react-redux@9.1.2_@types+react@18.3.3_react@18.3.1_redux@5.0.1__react@18.3.1/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// src/query/core/apiState.ts
__turbopack_esm__({
    "QueryStatus": ()=>QueryStatus,
    "_NEVER": ()=>_NEVER,
    "buildCreateApi": ()=>buildCreateApi,
    "copyWithStructuralSharing": ()=>copyWithStructuralSharing,
    "coreModule": ()=>coreModule,
    "coreModuleName": ()=>coreModuleName,
    "createApi": ()=>createApi,
    "defaultSerializeQueryArgs": ()=>defaultSerializeQueryArgs,
    "fakeBaseQuery": ()=>fakeBaseQuery,
    "fetchBaseQuery": ()=>fetchBaseQuery,
    "retry": ()=>retry,
    "setupListeners": ()=>setupListeners,
    "skipToken": ()=>skipToken
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.2.7_react-redux@9.1.2_@types+react@18.3.3_react@18.3.1_redux@5.0.1__react@18.3.1/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/reselect@5.1.1/node_modules/reselect/dist/reselect.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/redux@5.0.1/node_modules/redux/dist/redux.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/immer@10.1.1/node_modules/immer/dist/immer.mjs [app-rsc] (ecmascript) <export produce as createNextState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/immer@10.1.1/node_modules/immer/dist/immer.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var QueryStatus = /* @__PURE__ */ ((QueryStatus2)=>{
    QueryStatus2["uninitialized"] = "uninitialized";
    QueryStatus2["pending"] = "pending";
    QueryStatus2["fulfilled"] = "fulfilled";
    QueryStatus2["rejected"] = "rejected";
    return QueryStatus2;
})(QueryStatus || {});
function getRequestStatusFlags(status) {
    return {
        status,
        isUninitialized: status === "uninitialized" /* uninitialized */ ,
        isLoading: status === "pending" /* pending */ ,
        isSuccess: status === "fulfilled" /* fulfilled */ ,
        isError: status === "rejected" /* rejected */ 
    };
}
;
// src/query/utils/copyWithStructuralSharing.ts
var isPlainObject2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"];
function copyWithStructuralSharing(oldObj, newObj) {
    if (oldObj === newObj || !(isPlainObject2(oldObj) && isPlainObject2(newObj) || Array.isArray(oldObj) && Array.isArray(newObj))) {
        return newObj;
    }
    const newKeys = Object.keys(newObj);
    const oldKeys = Object.keys(oldObj);
    let isSameObject = newKeys.length === oldKeys.length;
    const mergeObj = Array.isArray(newObj) ? [] : {};
    for (const key of newKeys){
        mergeObj[key] = copyWithStructuralSharing(oldObj[key], newObj[key]);
        if (isSameObject) isSameObject = oldObj[key] === mergeObj[key];
    }
    return isSameObject ? oldObj : mergeObj;
}
// src/query/utils/countObjectKeys.ts
function countObjectKeys(obj) {
    let count = 0;
    for(const _key in obj){
        count++;
    }
    return count;
}
// src/query/utils/flatten.ts
var flatten = (arr)=>[].concat(...arr);
// src/query/utils/isAbsoluteUrl.ts
function isAbsoluteUrl(url) {
    return new RegExp(`(^|:)//`).test(url);
}
// src/query/utils/isDocumentVisible.ts
function isDocumentVisible() {
    if (typeof document === "undefined") {
        return true;
    }
    return document.visibilityState !== "hidden";
}
// src/query/utils/isNotNullish.ts
function isNotNullish(v) {
    return v != null;
}
// src/query/utils/isOnline.ts
function isOnline() {
    return typeof navigator === "undefined" ? true : navigator.onLine === void 0 ? true : navigator.onLine;
}
// src/query/utils/joinUrls.ts
var withoutTrailingSlash = (url)=>url.replace(/\/$/, "");
var withoutLeadingSlash = (url)=>url.replace(/^\//, "");
function joinUrls(base, url) {
    if (!base) {
        return url;
    }
    if (!url) {
        return base;
    }
    if (isAbsoluteUrl(url)) {
        return url;
    }
    const delimiter = base.endsWith("/") || !url.startsWith("?") ? "/" : "";
    base = withoutTrailingSlash(base);
    url = withoutLeadingSlash(url);
    return `${base}${delimiter}${url}`;
}
// src/query/fetchBaseQuery.ts
var defaultFetchFn = (...args)=>fetch(...args);
var defaultValidateStatus = (response)=>response.status >= 200 && response.status <= 299;
var defaultIsJsonContentType = (headers)=>/*applicat*/ /ion\/(vnd\.api\+)?json/.test(headers.get("content-type") || "");
function stripUndefined(obj) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(obj)) {
        return obj;
    }
    const copy = {
        ...obj
    };
    for (const [k, v] of Object.entries(copy)){
        if (v === void 0) delete copy[k];
    }
    return copy;
}
function fetchBaseQuery({ baseUrl, prepareHeaders = (x)=>x, fetchFn = defaultFetchFn, paramsSerializer, isJsonContentType = defaultIsJsonContentType, jsonContentType = "application/json", jsonReplacer, timeout: defaultTimeout, responseHandler: globalResponseHandler, validateStatus: globalValidateStatus, ...baseFetchOptions } = {}) {
    if (typeof fetch === "undefined" && fetchFn === defaultFetchFn) {
        console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.");
    }
    return async (arg, api)=>{
        const { signal, getState, extra, endpoint, forced, type } = api;
        let meta;
        let { url, headers = new Headers(baseFetchOptions.headers), params = void 0, responseHandler = globalResponseHandler ?? "json", validateStatus = globalValidateStatus ?? defaultValidateStatus, timeout = defaultTimeout, ...rest } = typeof arg == "string" ? {
            url: arg
        } : arg;
        let config = {
            ...baseFetchOptions,
            signal,
            ...rest
        };
        headers = new Headers(stripUndefined(headers));
        config.headers = await prepareHeaders(headers, {
            getState,
            extra,
            endpoint,
            forced,
            type
        }) || headers;
        const isJsonifiable = (body)=>typeof body === "object" && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(body) || Array.isArray(body) || typeof body.toJSON === "function");
        if (!config.headers.has("content-type") && isJsonifiable(config.body)) {
            config.headers.set("content-type", jsonContentType);
        }
        if (isJsonifiable(config.body) && isJsonContentType(config.headers)) {
            config.body = JSON.stringify(config.body, jsonReplacer);
        }
        if (params) {
            const divider = ~url.indexOf("?") ? "&" : "?";
            const query = paramsSerializer ? paramsSerializer(params) : new URLSearchParams(stripUndefined(params));
            url += divider + query;
        }
        url = joinUrls(baseUrl, url);
        const request = new Request(url, config);
        const requestClone = new Request(url, config);
        meta = {
            request: requestClone
        };
        let response, timedOut = false, timeoutId = timeout && setTimeout(()=>{
            timedOut = true;
            api.abort();
        }, timeout);
        try {
            response = await fetchFn(request);
        } catch (e) {
            return {
                error: {
                    status: timedOut ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                    error: String(e)
                },
                meta
            };
        } finally{
            if (timeoutId) clearTimeout(timeoutId);
        }
        const responseClone = response.clone();
        meta.response = responseClone;
        let resultData;
        let responseText = "";
        try {
            let handleResponseError;
            await Promise.all([
                handleResponse(response, responseHandler).then((r)=>resultData = r, (e)=>handleResponseError = e),
                // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
                // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
                responseClone.text().then((r)=>responseText = r, ()=>{})
            ]);
            if (handleResponseError) throw handleResponseError;
        } catch (e) {
            return {
                error: {
                    status: "PARSING_ERROR",
                    originalStatus: response.status,
                    data: responseText,
                    error: String(e)
                },
                meta
            };
        }
        return validateStatus(response, resultData) ? {
            data: resultData,
            meta
        } : {
            error: {
                status: response.status,
                data: resultData
            },
            meta
        };
    };
    async function handleResponse(response, responseHandler) {
        if (typeof responseHandler === "function") {
            return responseHandler(response);
        }
        if (responseHandler === "content-type") {
            responseHandler = isJsonContentType(response.headers) ? "json" : "text";
        }
        if (responseHandler === "json") {
            const text = await response.text();
            return text.length ? JSON.parse(text) : null;
        }
        return response.text();
    }
}
// src/query/HandledError.ts
var HandledError = class {
    constructor(value, meta = void 0){
        this.value = value;
        this.meta = meta;
    }
};
// src/query/retry.ts
async function defaultBackoff(attempt = 0, maxRetries = 5) {
    const attempts = Math.min(attempt, maxRetries);
    const timeout = ~~((Math.random() + 0.4) * (300 << attempts));
    await new Promise((resolve)=>setTimeout((res)=>resolve(res), timeout));
}
function fail(e) {
    throw Object.assign(new HandledError({
        error: e
    }), {
        throwImmediately: true
    });
}
var EMPTY_OPTIONS = {};
var retryWithBackoff = (baseQuery, defaultOptions)=>async (args, api, extraOptions)=>{
        const possibleMaxRetries = [
            5,
            (defaultOptions || EMPTY_OPTIONS).maxRetries,
            (extraOptions || EMPTY_OPTIONS).maxRetries
        ].filter((x)=>x !== void 0);
        const [maxRetries] = possibleMaxRetries.slice(-1);
        const defaultRetryCondition = (_, __, { attempt })=>attempt <= maxRetries;
        const options = {
            maxRetries,
            backoff: defaultBackoff,
            retryCondition: defaultRetryCondition,
            ...defaultOptions,
            ...extraOptions
        };
        let retry2 = 0;
        while(true){
            try {
                const result = await baseQuery(args, api, extraOptions);
                if (result.error) {
                    throw new HandledError(result);
                }
                return result;
            } catch (e) {
                retry2++;
                if (e.throwImmediately) {
                    if (e instanceof HandledError) {
                        return e.value;
                    }
                    throw e;
                }
                if (e instanceof HandledError && !options.retryCondition(e.value.error, args, {
                    attempt: retry2,
                    baseQueryApi: api,
                    extraOptions
                })) {
                    return e.value;
                }
                await options.backoff(retry2, options.maxRetries);
            }
        }
    };
var retry = /* @__PURE__ */ Object.assign(retryWithBackoff, {
    fail
});
// src/query/core/setupListeners.ts
var onFocus = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])("__rtkq/focused");
var onFocusLost = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])("__rtkq/unfocused");
var onOnline = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])("__rtkq/online");
var onOffline = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])("__rtkq/offline");
var initialized = false;
function setupListeners(dispatch, customHandler) {
    function defaultHandler() {
        const handleFocus = ()=>dispatch(onFocus());
        const handleFocusLost = ()=>dispatch(onFocusLost());
        const handleOnline = ()=>dispatch(onOnline());
        const handleOffline = ()=>dispatch(onOffline());
        const handleVisibilityChange = ()=>{
            if (window.document.visibilityState === "visible") {
                handleFocus();
            } else {
                handleFocusLost();
            }
        };
        if (!initialized) {
            if (typeof window !== "undefined" && window.addEventListener) {
                window.addEventListener("visibilitychange", handleVisibilityChange, false);
                window.addEventListener("focus", handleFocus, false);
                window.addEventListener("online", handleOnline, false);
                window.addEventListener("offline", handleOffline, false);
                initialized = true;
            }
        }
        const unsubscribe = ()=>{
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            initialized = false;
        };
        return unsubscribe;
    }
    return customHandler ? customHandler(dispatch, {
        onFocus,
        onFocusLost,
        onOffline,
        onOnline
    }) : defaultHandler();
}
// src/query/endpointDefinitions.ts
function isQueryDefinition(e) {
    return e.type === "query" /* query */ ;
}
function isMutationDefinition(e) {
    return e.type === "mutation" /* mutation */ ;
}
function calculateProvidedBy(description, result, error, queryArg, meta, assertTagTypes) {
    if (isFunction(description)) {
        return description(result, error, queryArg, meta).map(expandTagDescription).map(assertTagTypes);
    }
    if (Array.isArray(description)) {
        return description.map(expandTagDescription).map(assertTagTypes);
    }
    return [];
}
function isFunction(t) {
    return typeof t === "function";
}
function expandTagDescription(description) {
    return typeof description === "string" ? {
        type: description
    } : description;
}
;
;
// src/tsHelpers.ts
function asSafePromise(promise, fallback) {
    return promise.catch(fallback);
}
// src/query/core/buildInitiate.ts
var forceQueryFnSymbol = Symbol("forceQueryFn");
var isUpsertQuery = (arg)=>typeof arg[forceQueryFnSymbol] === "function";
function buildInitiate({ serializeQueryArgs, queryThunk, mutationThunk, api, context }) {
    const runningQueries = /* @__PURE__ */ new Map();
    const runningMutations = /* @__PURE__ */ new Map();
    const { unsubscribeQueryResult, removeMutationResult, updateSubscriptionOptions } = api.internalActions;
    return {
        buildInitiateQuery,
        buildInitiateMutation,
        getRunningQueryThunk,
        getRunningMutationThunk,
        getRunningQueriesThunk,
        getRunningMutationsThunk
    };
    function getRunningQueryThunk(endpointName, queryArgs) {
        return (dispatch)=>{
            const endpointDefinition = context.endpointDefinitions[endpointName];
            const queryCacheKey = serializeQueryArgs({
                queryArgs,
                endpointDefinition,
                endpointName
            });
            return runningQueries.get(dispatch)?.[queryCacheKey];
        };
    }
    function getRunningMutationThunk(_endpointName, fixedCacheKeyOrRequestId) {
        return (dispatch)=>{
            return runningMutations.get(dispatch)?.[fixedCacheKeyOrRequestId];
        };
    }
    function getRunningQueriesThunk() {
        return (dispatch)=>Object.values(runningQueries.get(dispatch) || {}).filter(isNotNullish);
    }
    function getRunningMutationsThunk() {
        return (dispatch)=>Object.values(runningMutations.get(dispatch) || {}).filter(isNotNullish);
    }
    function middlewareWarning(dispatch) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (middlewareWarning.triggered) return;
            const returnedValue = dispatch(api.internalActions.internal_getRTKQSubscriptions());
            middlewareWarning.triggered = true;
            if (typeof returnedValue !== "object" || typeof returnedValue?.type === "string") {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Warning: Middleware for RTK-Query API at reducerPath "${api.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
            }
        }
    }
    function buildInitiateQuery(endpointName, endpointDefinition) {
        const queryAction = (arg, { subscribe = true, forceRefetch, subscriptionOptions, [forceQueryFnSymbol]: forceQueryFn, ...rest } = {})=>(dispatch, getState)=>{
                const queryCacheKey = serializeQueryArgs({
                    queryArgs: arg,
                    endpointDefinition,
                    endpointName
                });
                const thunk = queryThunk({
                    ...rest,
                    type: "query",
                    subscribe,
                    forceRefetch,
                    subscriptionOptions,
                    endpointName,
                    originalArgs: arg,
                    queryCacheKey,
                    [forceQueryFnSymbol]: forceQueryFn
                });
                const selector = api.endpoints[endpointName].select(arg);
                const thunkResult = dispatch(thunk);
                const stateAfter = selector(getState());
                middlewareWarning(dispatch);
                const { requestId, abort } = thunkResult;
                const skippedSynchronously = stateAfter.requestId !== requestId;
                const runningQuery = runningQueries.get(dispatch)?.[queryCacheKey];
                const selectFromState = ()=>selector(getState());
                const statePromise = Object.assign(forceQueryFn ? // a query has been forced (upsertQueryData)
                // -> we want to resolve it once data has been written with the data that will be written
                thunkResult.then(selectFromState) : skippedSynchronously && !runningQuery ? // a query has been skipped due to a condition and we do not have any currently running query
                // -> we want to resolve it immediately with the current data
                Promise.resolve(stateAfter) : // query just started or one is already in flight
                // -> wait for the running query, then resolve with data from after that
                Promise.all([
                    runningQuery,
                    thunkResult
                ]).then(selectFromState), {
                    arg,
                    requestId,
                    subscriptionOptions,
                    queryCacheKey,
                    abort,
                    async unwrap () {
                        const result = await statePromise;
                        if (result.isError) {
                            throw result.error;
                        }
                        return result.data;
                    },
                    refetch: ()=>dispatch(queryAction(arg, {
                            subscribe: false,
                            forceRefetch: true
                        })),
                    unsubscribe () {
                        if (subscribe) dispatch(unsubscribeQueryResult({
                            queryCacheKey,
                            requestId
                        }));
                    },
                    updateSubscriptionOptions (options) {
                        statePromise.subscriptionOptions = options;
                        dispatch(updateSubscriptionOptions({
                            endpointName,
                            requestId,
                            queryCacheKey,
                            options
                        }));
                    }
                });
                if (!runningQuery && !skippedSynchronously && !forceQueryFn) {
                    const running = runningQueries.get(dispatch) || {};
                    running[queryCacheKey] = statePromise;
                    runningQueries.set(dispatch, running);
                    statePromise.then(()=>{
                        delete running[queryCacheKey];
                        if (!countObjectKeys(running)) {
                            runningQueries.delete(dispatch);
                        }
                    });
                }
                return statePromise;
            };
        return queryAction;
    }
    function buildInitiateMutation(endpointName) {
        return (arg, { track = true, fixedCacheKey } = {})=>(dispatch, getState)=>{
                const thunk = mutationThunk({
                    type: "mutation",
                    endpointName,
                    originalArgs: arg,
                    track,
                    fixedCacheKey
                });
                const thunkResult = dispatch(thunk);
                middlewareWarning(dispatch);
                const { requestId, abort, unwrap } = thunkResult;
                const returnValuePromise = asSafePromise(thunkResult.unwrap().then((data)=>({
                        data
                    })), (error)=>({
                        error
                    }));
                const reset = ()=>{
                    dispatch(removeMutationResult({
                        requestId,
                        fixedCacheKey
                    }));
                };
                const ret = Object.assign(returnValuePromise, {
                    arg: thunkResult.arg,
                    requestId,
                    abort,
                    unwrap,
                    reset
                });
                const running = runningMutations.get(dispatch) || {};
                runningMutations.set(dispatch, running);
                running[requestId] = ret;
                ret.then(()=>{
                    delete running[requestId];
                    if (!countObjectKeys(running)) {
                        runningMutations.delete(dispatch);
                    }
                });
                if (fixedCacheKey) {
                    running[fixedCacheKey] = ret;
                    ret.then(()=>{
                        if (running[fixedCacheKey] === ret) {
                            delete running[fixedCacheKey];
                            if (!countObjectKeys(running)) {
                                runningMutations.delete(dispatch);
                            }
                        }
                    });
                }
                return ret;
            };
    }
}
// src/query/core/buildThunks.ts
function defaultTransformResponse(baseQueryReturnValue) {
    return baseQueryReturnValue;
}
function buildThunks({ reducerPath, baseQuery, context: { endpointDefinitions }, serializeQueryArgs, api, assertTagType }) {
    const patchQueryData = (endpointName, args, patches, updateProvided)=>(dispatch, getState)=>{
            const endpointDefinition = endpointDefinitions[endpointName];
            const queryCacheKey = serializeQueryArgs({
                queryArgs: args,
                endpointDefinition,
                endpointName
            });
            dispatch(api.internalActions.queryResultPatched({
                queryCacheKey,
                patches
            }));
            if (!updateProvided) {
                return;
            }
            const newValue = api.endpoints[endpointName].select(args)(// Work around TS 4.1 mismatch
            getState());
            const providedTags = calculateProvidedBy(endpointDefinition.providesTags, newValue.data, void 0, args, {}, assertTagType);
            dispatch(api.internalActions.updateProvidedBy({
                queryCacheKey,
                providedTags
            }));
        };
    const updateQueryData = (endpointName, args, updateRecipe, updateProvided = true)=>(dispatch, getState)=>{
            const endpointDefinition = api.endpoints[endpointName];
            const currentState = endpointDefinition.select(args)(// Work around TS 4.1 mismatch
            getState());
            const ret = {
                patches: [],
                inversePatches: [],
                undo: ()=>dispatch(api.util.patchQueryData(endpointName, args, ret.inversePatches, updateProvided))
            };
            if (currentState.status === "uninitialized" /* uninitialized */ ) {
                return ret;
            }
            let newValue;
            if ("data" in currentState) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraftable"])(currentState.data)) {
                    const [value, patches, inversePatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produceWithPatches"])(currentState.data, updateRecipe);
                    ret.patches.push(...patches);
                    ret.inversePatches.push(...inversePatches);
                    newValue = value;
                } else {
                    newValue = updateRecipe(currentState.data);
                    ret.patches.push({
                        op: "replace",
                        path: [],
                        value: newValue
                    });
                    ret.inversePatches.push({
                        op: "replace",
                        path: [],
                        value: currentState.data
                    });
                }
            }
            if (ret.patches.length === 0) {
                return ret;
            }
            dispatch(api.util.patchQueryData(endpointName, args, ret.patches, updateProvided));
            return ret;
        };
    const upsertQueryData = (endpointName, args, value)=>(dispatch)=>{
            return dispatch(api.endpoints[endpointName].initiate(args, {
                subscribe: false,
                forceRefetch: true,
                [forceQueryFnSymbol]: ()=>({
                        data: value
                    })
            }));
        };
    const executeEndpoint = async (arg, { signal, abort, rejectWithValue, fulfillWithValue, dispatch, getState, extra })=>{
        const endpointDefinition = endpointDefinitions[arg.endpointName];
        try {
            let transformResponse = defaultTransformResponse;
            let result;
            const baseQueryApi = {
                signal,
                abort,
                dispatch,
                getState,
                extra,
                endpoint: arg.endpointName,
                type: arg.type,
                forced: arg.type === "query" ? isForcedQuery(arg, getState()) : void 0
            };
            const forceQueryFn = arg.type === "query" ? arg[forceQueryFnSymbol] : void 0;
            if (forceQueryFn) {
                result = forceQueryFn();
            } else if (endpointDefinition.query) {
                result = await baseQuery(endpointDefinition.query(arg.originalArgs), baseQueryApi, endpointDefinition.extraOptions);
                if (endpointDefinition.transformResponse) {
                    transformResponse = endpointDefinition.transformResponse;
                }
            } else {
                result = await endpointDefinition.queryFn(arg.originalArgs, baseQueryApi, endpointDefinition.extraOptions, (arg2)=>baseQuery(arg2, baseQueryApi, endpointDefinition.extraOptions));
            }
            if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                const what = endpointDefinition.query ? "`baseQuery`" : "`queryFn`";
                let err;
                if (!result) {
                    err = `${what} did not return anything.`;
                } else if (typeof result !== "object") {
                    err = `${what} did not return an object.`;
                } else if (result.error && result.data) {
                    err = `${what} returned an object containing both \`error\` and \`result\`.`;
                } else if (result.error === void 0 && result.data === void 0) {
                    err = `${what} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
                } else {
                    for (const key of Object.keys(result)){
                        if (key !== "error" && key !== "data" && key !== "meta") {
                            err = `The object returned by ${what} has the unknown property ${key}.`;
                            break;
                        }
                    }
                }
                if (err) {
                    console.error(`Error encountered handling the endpoint ${arg.endpointName}.
              ${err}
              It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
              Object returned was:`, result);
                }
            }
            if (result.error) throw new HandledError(result.error, result.meta);
            return fulfillWithValue(await transformResponse(result.data, result.meta, arg.originalArgs), {
                fulfilledTimeStamp: Date.now(),
                baseQueryMeta: result.meta,
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SHOULD_AUTOBATCH"]]: true
            });
        } catch (error) {
            let catchedError = error;
            if (catchedError instanceof HandledError) {
                let transformErrorResponse = defaultTransformResponse;
                if (endpointDefinition.query && endpointDefinition.transformErrorResponse) {
                    transformErrorResponse = endpointDefinition.transformErrorResponse;
                }
                try {
                    return rejectWithValue(await transformErrorResponse(catchedError.value, catchedError.meta, arg.originalArgs), {
                        baseQueryMeta: catchedError.meta,
                        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SHOULD_AUTOBATCH"]]: true
                    });
                } catch (e) {
                    catchedError = e;
                }
            }
            if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") !== "production") {
                console.error(`An unhandled error occurred processing a request for the endpoint "${arg.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, catchedError);
            } else {
                console.error(catchedError);
            }
            throw catchedError;
        }
    };
    function isForcedQuery(arg, state) {
        const requestState = state[reducerPath]?.queries?.[arg.queryCacheKey];
        const baseFetchOnMountOrArgChange = state[reducerPath]?.config.refetchOnMountOrArgChange;
        const fulfilledVal = requestState?.fulfilledTimeStamp;
        const refetchVal = arg.forceRefetch ?? (arg.subscribe && baseFetchOnMountOrArgChange);
        if (refetchVal) {
            return refetchVal === true || (Number(/* @__PURE__ */ new Date()) - Number(fulfilledVal)) / 1e3 >= refetchVal;
        }
        return false;
    }
    const queryThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${reducerPath}/executeQuery`, executeEndpoint, {
        getPendingMeta () {
            return {
                startedTimeStamp: Date.now(),
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SHOULD_AUTOBATCH"]]: true
            };
        },
        condition (queryThunkArgs, { getState }) {
            const state = getState();
            const requestState = state[reducerPath]?.queries?.[queryThunkArgs.queryCacheKey];
            const fulfilledVal = requestState?.fulfilledTimeStamp;
            const currentArg = queryThunkArgs.originalArgs;
            const previousArg = requestState?.originalArgs;
            const endpointDefinition = endpointDefinitions[queryThunkArgs.endpointName];
            if (isUpsertQuery(queryThunkArgs)) {
                return true;
            }
            if (requestState?.status === "pending") {
                return false;
            }
            if (isForcedQuery(queryThunkArgs, state)) {
                return true;
            }
            if (isQueryDefinition(endpointDefinition) && endpointDefinition?.forceRefetch?.({
                currentArg,
                previousArg,
                endpointState: requestState,
                state
            })) {
                return true;
            }
            if (fulfilledVal) {
                return false;
            }
            return true;
        },
        dispatchConditionRejection: true
    });
    const mutationThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])(`${reducerPath}/executeMutation`, executeEndpoint, {
        getPendingMeta () {
            return {
                startedTimeStamp: Date.now(),
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SHOULD_AUTOBATCH"]]: true
            };
        }
    });
    const hasTheForce = (options)=>"force" in options;
    const hasMaxAge = (options)=>"ifOlderThan" in options;
    const prefetch = (endpointName, arg, options)=>(dispatch, getState)=>{
            const force = hasTheForce(options) && options.force;
            const maxAge = hasMaxAge(options) && options.ifOlderThan;
            const queryAction = (force2 = true)=>{
                const options2 = {
                    forceRefetch: force2,
                    isPrefetch: true
                };
                return api.endpoints[endpointName].initiate(arg, options2);
            };
            const latestStateValue = api.endpoints[endpointName].select(arg)(getState());
            if (force) {
                dispatch(queryAction());
            } else if (maxAge) {
                const lastFulfilledTs = latestStateValue?.fulfilledTimeStamp;
                if (!lastFulfilledTs) {
                    dispatch(queryAction());
                    return;
                }
                const shouldRetrigger = (Number(/* @__PURE__ */ new Date()) - Number(new Date(lastFulfilledTs))) / 1e3 >= maxAge;
                if (shouldRetrigger) {
                    dispatch(queryAction());
                }
            } else {
                dispatch(queryAction(false));
            }
        };
    function matchesEndpoint(endpointName) {
        return (action)=>action?.meta?.arg?.endpointName === endpointName;
    }
    function buildMatchThunkActions(thunk, endpointName) {
        return {
            matchPending: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAllOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isPending"])(thunk), matchesEndpoint(endpointName)),
            matchFulfilled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAllOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(thunk), matchesEndpoint(endpointName)),
            matchRejected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAllOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejected"])(thunk), matchesEndpoint(endpointName))
        };
    }
    return {
        queryThunk,
        mutationThunk,
        prefetch,
        updateQueryData,
        upsertQueryData,
        patchQueryData,
        buildMatchThunkActions
    };
}
function calculateProvidedByThunk(action, type, endpointDefinitions, assertTagType) {
    return calculateProvidedBy(endpointDefinitions[action.meta.arg.endpointName][type], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(action) ? action.payload : void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejectedWithValue"])(action) ? action.payload : void 0, action.meta.arg.originalArgs, "baseQueryMeta" in action.meta ? action.meta.baseQueryMeta : void 0, assertTagType);
}
;
;
function updateQuerySubstateIfExists(state, queryCacheKey, update) {
    const substate = state[queryCacheKey];
    if (substate) {
        update(substate);
    }
}
function getMutationCacheKey(id) {
    return ("arg" in id ? id.arg.fixedCacheKey : id.fixedCacheKey) ?? id.requestId;
}
function updateMutationSubstateIfExists(state, id, update) {
    const substate = state[getMutationCacheKey(id)];
    if (substate) {
        update(substate);
    }
}
var initialState = {};
function buildSlice({ reducerPath, queryThunk, mutationThunk, context: { endpointDefinitions: definitions, apiUid, extractRehydrationInfo, hasRehydrationInfo }, assertTagType, config }) {
    const resetApiState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${reducerPath}/resetApiState`);
    const querySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/queries`,
        initialState,
        reducers: {
            removeQueryResult: {
                reducer (draft, { payload: { queryCacheKey } }) {
                    delete draft[queryCacheKey];
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            },
            queryResultPatched: {
                reducer (draft, { payload: { queryCacheKey, patches } }) {
                    updateQuerySubstateIfExists(draft, queryCacheKey, (substate)=>{
                        substate.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyPatches"])(substate.data, patches.concat());
                    });
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        },
        extraReducers (builder) {
            builder.addCase(queryThunk.pending, (draft, { meta, meta: { arg } })=>{
                const upserting = isUpsertQuery(arg);
                draft[arg.queryCacheKey] ??= {
                    status: "uninitialized" /* uninitialized */ ,
                    endpointName: arg.endpointName
                };
                updateQuerySubstateIfExists(draft, arg.queryCacheKey, (substate)=>{
                    substate.status = "pending" /* pending */ ;
                    substate.requestId = upserting && substate.requestId ? // for `upsertQuery` **updates**, keep the current `requestId`
                    substate.requestId : // for normal queries or `upsertQuery` **inserts** always update the `requestId`
                    meta.requestId;
                    if (arg.originalArgs !== void 0) {
                        substate.originalArgs = arg.originalArgs;
                    }
                    substate.startedTimeStamp = meta.startedTimeStamp;
                });
            }).addCase(queryThunk.fulfilled, (draft, { meta, payload })=>{
                updateQuerySubstateIfExists(draft, meta.arg.queryCacheKey, (substate)=>{
                    if (substate.requestId !== meta.requestId && !isUpsertQuery(meta.arg)) return;
                    const { merge } = definitions[meta.arg.endpointName];
                    substate.status = "fulfilled" /* fulfilled */ ;
                    if (merge) {
                        if (substate.data !== void 0) {
                            const { fulfilledTimeStamp, arg, baseQueryMeta, requestId } = meta;
                            let newData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__["createNextState"])(substate.data, (draftSubstateData)=>{
                                return merge(draftSubstateData, payload, {
                                    arg: arg.originalArgs,
                                    baseQueryMeta,
                                    fulfilledTimeStamp,
                                    requestId
                                });
                            });
                            substate.data = newData;
                        } else {
                            substate.data = payload;
                        }
                    } else {
                        substate.data = definitions[meta.arg.endpointName].structuralSharing ?? true ? copyWithStructuralSharing((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"])(substate.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["original"])(substate.data) : substate.data, payload) : payload;
                    }
                    delete substate.error;
                    substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
                });
            }).addCase(queryThunk.rejected, (draft, { meta: { condition, arg, requestId }, error, payload })=>{
                updateQuerySubstateIfExists(draft, arg.queryCacheKey, (substate)=>{
                    if (condition) {} else {
                        if (substate.requestId !== requestId) return;
                        substate.status = "rejected" /* rejected */ ;
                        substate.error = payload ?? error;
                    }
                });
            }).addMatcher(hasRehydrationInfo, (draft, action)=>{
                const { queries } = extractRehydrationInfo(action);
                for (const [key, entry] of Object.entries(queries)){
                    if (// do not rehydrate entries that were currently in flight.
                    entry?.status === "fulfilled" /* fulfilled */  || entry?.status === "rejected" /* rejected */ ) {
                        draft[key] = entry;
                    }
                }
            });
        }
    });
    const mutationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/mutations`,
        initialState,
        reducers: {
            removeMutationResult: {
                reducer (draft, { payload }) {
                    const cacheKey = getMutationCacheKey(payload);
                    if (cacheKey in draft) {
                        delete draft[cacheKey];
                    }
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        },
        extraReducers (builder) {
            builder.addCase(mutationThunk.pending, (draft, { meta, meta: { requestId, arg, startedTimeStamp } })=>{
                if (!arg.track) return;
                draft[getMutationCacheKey(meta)] = {
                    requestId,
                    status: "pending" /* pending */ ,
                    endpointName: arg.endpointName,
                    startedTimeStamp
                };
            }).addCase(mutationThunk.fulfilled, (draft, { payload, meta })=>{
                if (!meta.arg.track) return;
                updateMutationSubstateIfExists(draft, meta, (substate)=>{
                    if (substate.requestId !== meta.requestId) return;
                    substate.status = "fulfilled" /* fulfilled */ ;
                    substate.data = payload;
                    substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
                });
            }).addCase(mutationThunk.rejected, (draft, { payload, error, meta })=>{
                if (!meta.arg.track) return;
                updateMutationSubstateIfExists(draft, meta, (substate)=>{
                    if (substate.requestId !== meta.requestId) return;
                    substate.status = "rejected" /* rejected */ ;
                    substate.error = payload ?? error;
                });
            }).addMatcher(hasRehydrationInfo, (draft, action)=>{
                const { mutations } = extractRehydrationInfo(action);
                for (const [key, entry] of Object.entries(mutations)){
                    if (// do not rehydrate entries that were currently in flight.
                    (entry?.status === "fulfilled" /* fulfilled */  || entry?.status === "rejected" /* rejected */ ) && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
                    key !== entry?.requestId) {
                        draft[key] = entry;
                    }
                }
            });
        }
    });
    const invalidationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/invalidation`,
        initialState,
        reducers: {
            updateProvidedBy: {
                reducer (draft, action) {
                    const { queryCacheKey, providedTags } = action.payload;
                    for (const tagTypeSubscriptions of Object.values(draft)){
                        for (const idSubscriptions of Object.values(tagTypeSubscriptions)){
                            const foundAt = idSubscriptions.indexOf(queryCacheKey);
                            if (foundAt !== -1) {
                                idSubscriptions.splice(foundAt, 1);
                            }
                        }
                    }
                    for (const { type, id } of providedTags){
                        const subscribedQueries = (draft[type] ??= {})[id || "__internal_without_id"] ??= [];
                        const alreadySubscribed = subscribedQueries.includes(queryCacheKey);
                        if (!alreadySubscribed) {
                            subscribedQueries.push(queryCacheKey);
                        }
                    }
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        },
        extraReducers (builder) {
            builder.addCase(querySlice.actions.removeQueryResult, (draft, { payload: { queryCacheKey } })=>{
                for (const tagTypeSubscriptions of Object.values(draft)){
                    for (const idSubscriptions of Object.values(tagTypeSubscriptions)){
                        const foundAt = idSubscriptions.indexOf(queryCacheKey);
                        if (foundAt !== -1) {
                            idSubscriptions.splice(foundAt, 1);
                        }
                    }
                }
            }).addMatcher(hasRehydrationInfo, (draft, action)=>{
                const { provided } = extractRehydrationInfo(action);
                for (const [type, incomingTags] of Object.entries(provided)){
                    for (const [id, cacheKeys] of Object.entries(incomingTags)){
                        const subscribedQueries = (draft[type] ??= {})[id || "__internal_without_id"] ??= [];
                        for (const queryCacheKey of cacheKeys){
                            const alreadySubscribed = subscribedQueries.includes(queryCacheKey);
                            if (!alreadySubscribed) {
                                subscribedQueries.push(queryCacheKey);
                            }
                        }
                    }
                }
            }).addMatcher((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(queryThunk), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejectedWithValue"])(queryThunk)), (draft, action)=>{
                const providedTags = calculateProvidedByThunk(action, "providesTags", definitions, assertTagType);
                const { queryCacheKey } = action.meta.arg;
                invalidationSlice.caseReducers.updateProvidedBy(draft, invalidationSlice.actions.updateProvidedBy({
                    queryCacheKey,
                    providedTags
                }));
            });
        }
    });
    const subscriptionSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/subscriptions`,
        initialState,
        reducers: {
            updateSubscriptionOptions (d, a) {},
            unsubscribeQueryResult (d, a) {},
            internal_getRTKQSubscriptions () {}
        }
    });
    const internalSubscriptionsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/internalSubscriptions`,
        initialState,
        reducers: {
            subscriptionsUpdated: {
                reducer (state, action) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyPatches"])(state, action.payload);
                },
                prepare: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareAutoBatched"])()
            }
        }
    });
    const configSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
        name: `${reducerPath}/config`,
        initialState: {
            online: isOnline(),
            focused: isDocumentVisible(),
            middlewareRegistered: false,
            ...config
        },
        reducers: {
            middlewareRegistered (state, { payload }) {
                state.middlewareRegistered = state.middlewareRegistered === "conflict" || apiUid !== payload ? "conflict" : true;
            }
        },
        extraReducers: (builder)=>{
            builder.addCase(onOnline, (state)=>{
                state.online = true;
            }).addCase(onOffline, (state)=>{
                state.online = false;
            }).addCase(onFocus, (state)=>{
                state.focused = true;
            }).addCase(onFocusLost, (state)=>{
                state.focused = false;
            }).addMatcher(hasRehydrationInfo, (draft)=>({
                    ...draft
                }));
        }
    });
    const combinedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineReducers"])({
        queries: querySlice.reducer,
        mutations: mutationSlice.reducer,
        provided: invalidationSlice.reducer,
        subscriptions: internalSubscriptionsSlice.reducer,
        config: configSlice.reducer
    });
    const reducer = (state, action)=>combinedReducer(resetApiState.match(action) ? void 0 : state, action);
    const actions = {
        ...configSlice.actions,
        ...querySlice.actions,
        ...subscriptionSlice.actions,
        ...internalSubscriptionsSlice.actions,
        ...mutationSlice.actions,
        ...invalidationSlice.actions,
        resetApiState
    };
    return {
        reducer,
        actions
    };
}
// src/query/core/buildSelectors.ts
var skipToken = /* @__PURE__ */ Symbol.for("RTKQ/skipToken");
var initialSubState = {
    status: "uninitialized" /* uninitialized */ 
};
var defaultQuerySubState = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__["createNextState"])(initialSubState, ()=>{});
var defaultMutationSubState = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__produce__as__createNextState$3e$__["createNextState"])(initialSubState, ()=>{});
function buildSelectors({ serializeQueryArgs, reducerPath, createSelector: createSelector2 }) {
    const selectSkippedQuery = (state)=>defaultQuerySubState;
    const selectSkippedMutation = (state)=>defaultMutationSubState;
    return {
        buildQuerySelector,
        buildMutationSelector,
        selectInvalidatedBy,
        selectCachedArgsForQuery
    };
    function withRequestFlags(substate) {
        return {
            ...substate,
            ...getRequestStatusFlags(substate.status)
        };
    }
    function selectInternalState(rootState) {
        const state = rootState[reducerPath];
        if ("TURBOPACK compile-time truthy", 1) {
            if (!state) {
                if (selectInternalState.triggered) return state;
                selectInternalState.triggered = true;
                console.error(`Error: No data found at \`state.${reducerPath}\`. Did you forget to add the reducer to the store?`);
            }
        }
        return state;
    }
    function buildQuerySelector(endpointName, endpointDefinition) {
        return (queryArgs)=>{
            const serializedArgs = serializeQueryArgs({
                queryArgs,
                endpointDefinition,
                endpointName
            });
            const selectQuerySubstate = (state)=>selectInternalState(state)?.queries?.[serializedArgs] ?? defaultQuerySubState;
            const finalSelectQuerySubState = queryArgs === skipToken ? selectSkippedQuery : selectQuerySubstate;
            return createSelector2(finalSelectQuerySubState, withRequestFlags);
        };
    }
    function buildMutationSelector() {
        return (id)=>{
            let mutationId;
            if (typeof id === "object") {
                mutationId = getMutationCacheKey(id) ?? skipToken;
            } else {
                mutationId = id;
            }
            const selectMutationSubstate = (state)=>selectInternalState(state)?.mutations?.[mutationId] ?? defaultMutationSubState;
            const finalSelectMutationSubstate = mutationId === skipToken ? selectSkippedMutation : selectMutationSubstate;
            return createSelector2(finalSelectMutationSubstate, withRequestFlags);
        };
    }
    function selectInvalidatedBy(state, tags) {
        const apiState = state[reducerPath];
        const toInvalidate = /* @__PURE__ */ new Set();
        for (const tag of tags.map(expandTagDescription)){
            const provided = apiState.provided[tag.type];
            if (!provided) {
                continue;
            }
            let invalidateSubscriptions = (tag.id !== void 0 ? // id given: invalidate all queries that provide this type & id
            provided[tag.id] : // no id: invalidate all queries that provide this type
            flatten(Object.values(provided))) ?? [];
            for (const invalidate of invalidateSubscriptions){
                toInvalidate.add(invalidate);
            }
        }
        return flatten(Array.from(toInvalidate.values()).map((queryCacheKey)=>{
            const querySubState = apiState.queries[queryCacheKey];
            return querySubState ? [
                {
                    queryCacheKey,
                    endpointName: querySubState.endpointName,
                    originalArgs: querySubState.originalArgs
                }
            ] : [];
        }));
    }
    function selectCachedArgsForQuery(state, queryName) {
        return Object.values(state[reducerPath].queries).filter((entry)=>entry?.endpointName === queryName && entry.status !== "uninitialized" /* uninitialized */ ).map((entry)=>entry.originalArgs);
    }
}
;
// src/query/defaultSerializeQueryArgs.ts
var cache = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var defaultSerializeQueryArgs = ({ endpointName, queryArgs })=>{
    let serialized = "";
    const cached = cache?.get(queryArgs);
    if (typeof cached === "string") {
        serialized = cached;
    } else {
        const stringified = JSON.stringify(queryArgs, (key, value)=>{
            value = typeof value === "bigint" ? {
                $bigint: value.toString()
            } : value;
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(value) ? Object.keys(value).sort().reduce((acc, key2)=>{
                acc[key2] = value[key2];
                return acc;
            }, {}) : value;
            return value;
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(queryArgs)) {
            cache?.set(queryArgs, stringified);
        }
        serialized = stringified;
    }
    return `${endpointName}(${serialized})`;
};
;
function buildCreateApi(...modules) {
    return function baseCreateApi(options) {
        const extractRehydrationInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weakMapMemoize"])((action)=>options.extractRehydrationInfo?.(action, {
                reducerPath: options.reducerPath ?? "api"
            }));
        const optionsWithDefaults = {
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: false,
            refetchOnFocus: false,
            refetchOnReconnect: false,
            invalidationBehavior: "delayed",
            ...options,
            extractRehydrationInfo,
            serializeQueryArgs (queryArgsApi) {
                let finalSerializeQueryArgs = defaultSerializeQueryArgs;
                if ("serializeQueryArgs" in queryArgsApi.endpointDefinition) {
                    const endpointSQA = queryArgsApi.endpointDefinition.serializeQueryArgs;
                    finalSerializeQueryArgs = (queryArgsApi2)=>{
                        const initialResult = endpointSQA(queryArgsApi2);
                        if (typeof initialResult === "string") {
                            return initialResult;
                        } else {
                            return defaultSerializeQueryArgs({
                                ...queryArgsApi2,
                                queryArgs: initialResult
                            });
                        }
                    };
                } else if (options.serializeQueryArgs) {
                    finalSerializeQueryArgs = options.serializeQueryArgs;
                }
                return finalSerializeQueryArgs(queryArgsApi);
            },
            tagTypes: [
                ...options.tagTypes || []
            ]
        };
        const context = {
            endpointDefinitions: {},
            batch (fn) {
                fn();
            },
            apiUid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
            extractRehydrationInfo,
            hasRehydrationInfo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weakMapMemoize"])((action)=>extractRehydrationInfo(action) != null)
        };
        const api = {
            injectEndpoints,
            enhanceEndpoints ({ addTagTypes, endpoints }) {
                if (addTagTypes) {
                    for (const eT of addTagTypes){
                        if (!optionsWithDefaults.tagTypes.includes(eT)) {
                            ;
                            optionsWithDefaults.tagTypes.push(eT);
                        }
                    }
                }
                if (endpoints) {
                    for (const [endpointName, partialDefinition] of Object.entries(endpoints)){
                        if (typeof partialDefinition === "function") {
                            partialDefinition(context.endpointDefinitions[endpointName]);
                        } else {
                            Object.assign(context.endpointDefinitions[endpointName] || {}, partialDefinition);
                        }
                    }
                }
                return api;
            }
        };
        const initializedModules = modules.map((m)=>m.init(api, optionsWithDefaults, context));
        function injectEndpoints(inject) {
            const evaluatedEndpoints = inject.endpoints({
                query: (x)=>({
                        ...x,
                        type: "query" /* query */ 
                    }),
                mutation: (x)=>({
                        ...x,
                        type: "mutation" /* mutation */ 
                    })
            });
            for (const [endpointName, definition] of Object.entries(evaluatedEndpoints)){
                if (inject.overrideExisting !== true && endpointName in context.endpointDefinitions) {
                    if (inject.overrideExisting === "throw") {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `called \`injectEndpoints\` to override already-existing endpointName ${endpointName} without specifying \`overrideExisting: true\``);
                    } else if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                        console.error(`called \`injectEndpoints\` to override already-existing endpointName ${endpointName} without specifying \`overrideExisting: true\``);
                    }
                    continue;
                }
                context.endpointDefinitions[endpointName] = definition;
                for (const m of initializedModules){
                    m.injectEndpoint(endpointName, definition);
                }
            }
            return api;
        }
        return api.injectEndpoints({
            endpoints: options.endpoints
        });
    };
}
;
var _NEVER = /* @__PURE__ */ Symbol();
function fakeBaseQuery() {
    return function() {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.");
    };
}
;
// src/query/tsHelpers.ts
function assertCast(v) {}
function safeAssign(target, ...args) {
    return Object.assign(target, ...args);
}
;
var buildBatchedActionsHandler = ({ api, queryThunk, internalState })=>{
    const subscriptionsPrefix = `${api.reducerPath}/subscriptions`;
    let previousSubscriptions = null;
    let updateSyncTimer = null;
    const { updateSubscriptionOptions, unsubscribeQueryResult } = api.internalActions;
    const actuallyMutateSubscriptions = (mutableState, action)=>{
        if (updateSubscriptionOptions.match(action)) {
            const { queryCacheKey, requestId, options } = action.payload;
            if (mutableState?.[queryCacheKey]?.[requestId]) {
                mutableState[queryCacheKey][requestId] = options;
            }
            return true;
        }
        if (unsubscribeQueryResult.match(action)) {
            const { queryCacheKey, requestId } = action.payload;
            if (mutableState[queryCacheKey]) {
                delete mutableState[queryCacheKey][requestId];
            }
            return true;
        }
        if (api.internalActions.removeQueryResult.match(action)) {
            delete mutableState[action.payload.queryCacheKey];
            return true;
        }
        if (queryThunk.pending.match(action)) {
            const { meta: { arg, requestId } } = action;
            const substate = mutableState[arg.queryCacheKey] ??= {};
            substate[`${requestId}_running`] = {};
            if (arg.subscribe) {
                substate[requestId] = arg.subscriptionOptions ?? substate[requestId] ?? {};
            }
            return true;
        }
        let mutated = false;
        if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action)) {
            const state = mutableState[action.meta.arg.queryCacheKey] || {};
            const key = `${action.meta.requestId}_running`;
            mutated ||= !!state[key];
            delete state[key];
        }
        if (queryThunk.rejected.match(action)) {
            const { meta: { condition, arg, requestId } } = action;
            if (condition && arg.subscribe) {
                const substate = mutableState[arg.queryCacheKey] ??= {};
                substate[requestId] = arg.subscriptionOptions ?? substate[requestId] ?? {};
                mutated = true;
            }
        }
        return mutated;
    };
    const getSubscriptions = ()=>internalState.currentSubscriptions;
    const getSubscriptionCount = (queryCacheKey)=>{
        const subscriptions = getSubscriptions();
        const subscriptionsForQueryArg = subscriptions[queryCacheKey] ?? {};
        return countObjectKeys(subscriptionsForQueryArg);
    };
    const isRequestSubscribed = (queryCacheKey, requestId)=>{
        const subscriptions = getSubscriptions();
        return !!subscriptions?.[queryCacheKey]?.[requestId];
    };
    const subscriptionSelectors = {
        getSubscriptions,
        getSubscriptionCount,
        isRequestSubscribed
    };
    return (action, mwApi)=>{
        if (!previousSubscriptions) {
            previousSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
        }
        if (api.util.resetApiState.match(action)) {
            previousSubscriptions = internalState.currentSubscriptions = {};
            updateSyncTimer = null;
            return [
                true,
                false
            ];
        }
        if (api.internalActions.internal_getRTKQSubscriptions.match(action)) {
            return [
                false,
                subscriptionSelectors
            ];
        }
        const didMutate = actuallyMutateSubscriptions(internalState.currentSubscriptions, action);
        let actionShouldContinue = true;
        if (didMutate) {
            if (!updateSyncTimer) {
                updateSyncTimer = setTimeout(()=>{
                    const newSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
                    const [, patches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produceWithPatches"])(previousSubscriptions, ()=>newSubscriptions);
                    mwApi.next(api.internalActions.subscriptionsUpdated(patches));
                    previousSubscriptions = newSubscriptions;
                    updateSyncTimer = null;
                }, 500);
            }
            const isSubscriptionSliceAction = typeof action.type == "string" && !!action.type.startsWith(subscriptionsPrefix);
            const isAdditionalSubscriptionAction = queryThunk.rejected.match(action) && action.meta.condition && !!action.meta.arg.subscribe;
            actionShouldContinue = !isSubscriptionSliceAction && !isAdditionalSubscriptionAction;
        }
        return [
            actionShouldContinue,
            false
        ];
    };
};
// src/query/core/buildMiddleware/cacheCollection.ts
function isObjectEmpty(obj) {
    for(const k in obj){
        return false;
    }
    return true;
}
var THIRTY_TWO_BIT_MAX_TIMER_SECONDS = 2147483647 / 1e3 - 1;
var buildCacheCollectionHandler = ({ reducerPath, api, queryThunk, context, internalState })=>{
    const { removeQueryResult, unsubscribeQueryResult } = api.internalActions;
    const canTriggerUnsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])(unsubscribeQueryResult.match, queryThunk.fulfilled, queryThunk.rejected);
    function anySubscriptionsRemainingForKey(queryCacheKey) {
        const subscriptions = internalState.currentSubscriptions[queryCacheKey];
        return !!subscriptions && !isObjectEmpty(subscriptions);
    }
    const currentRemovalTimeouts = {};
    const handler = (action, mwApi, internalState2)=>{
        if (canTriggerUnsubscribe(action)) {
            const state = mwApi.getState()[reducerPath];
            const { queryCacheKey } = unsubscribeQueryResult.match(action) ? action.payload : action.meta.arg;
            handleUnsubscribe(queryCacheKey, state.queries[queryCacheKey]?.endpointName, mwApi, state.config);
        }
        if (api.util.resetApiState.match(action)) {
            for (const [key, timeout] of Object.entries(currentRemovalTimeouts)){
                if (timeout) clearTimeout(timeout);
                delete currentRemovalTimeouts[key];
            }
        }
        if (context.hasRehydrationInfo(action)) {
            const state = mwApi.getState()[reducerPath];
            const { queries } = context.extractRehydrationInfo(action);
            for (const [queryCacheKey, queryState] of Object.entries(queries)){
                handleUnsubscribe(queryCacheKey, queryState?.endpointName, mwApi, state.config);
            }
        }
    };
    function handleUnsubscribe(queryCacheKey, endpointName, api2, config) {
        const endpointDefinition = context.endpointDefinitions[endpointName];
        const keepUnusedDataFor = endpointDefinition?.keepUnusedDataFor ?? config.keepUnusedDataFor;
        if (keepUnusedDataFor === Infinity) {
            return;
        }
        const finalKeepUnusedDataFor = Math.max(0, Math.min(keepUnusedDataFor, THIRTY_TWO_BIT_MAX_TIMER_SECONDS));
        if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
            const currentTimeout = currentRemovalTimeouts[queryCacheKey];
            if (currentTimeout) {
                clearTimeout(currentTimeout);
            }
            currentRemovalTimeouts[queryCacheKey] = setTimeout(()=>{
                if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
                    api2.dispatch(removeQueryResult({
                        queryCacheKey
                    }));
                }
                delete currentRemovalTimeouts[queryCacheKey];
            }, finalKeepUnusedDataFor * 1e3);
        }
    }
    return handler;
};
// src/query/core/buildMiddleware/cacheLifecycle.ts
var neverResolvedError = new Error("Promise never resolved before cacheEntryRemoved.");
var buildCacheLifecycleHandler = ({ api, reducerPath, context, queryThunk, mutationThunk, internalState })=>{
    const isQueryThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncThunkAction"])(queryThunk);
    const isMutationThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAsyncThunkAction"])(mutationThunk);
    const isFulfilledThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(queryThunk, mutationThunk);
    const lifecycleMap = {};
    const handler = (action, mwApi, stateBefore)=>{
        const cacheKey = getCacheKey(action);
        if (queryThunk.pending.match(action)) {
            const oldState = stateBefore[reducerPath].queries[cacheKey];
            const state = mwApi.getState()[reducerPath].queries[cacheKey];
            if (!oldState && state) {
                handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
            }
        } else if (mutationThunk.pending.match(action)) {
            const state = mwApi.getState()[reducerPath].mutations[cacheKey];
            if (state) {
                handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
            }
        } else if (isFulfilledThunk(action)) {
            const lifecycle = lifecycleMap[cacheKey];
            if (lifecycle?.valueResolved) {
                lifecycle.valueResolved({
                    data: action.payload,
                    meta: action.meta.baseQueryMeta
                });
                delete lifecycle.valueResolved;
            }
        } else if (api.internalActions.removeQueryResult.match(action) || api.internalActions.removeMutationResult.match(action)) {
            const lifecycle = lifecycleMap[cacheKey];
            if (lifecycle) {
                delete lifecycleMap[cacheKey];
                lifecycle.cacheEntryRemoved();
            }
        } else if (api.util.resetApiState.match(action)) {
            for (const [cacheKey2, lifecycle] of Object.entries(lifecycleMap)){
                delete lifecycleMap[cacheKey2];
                lifecycle.cacheEntryRemoved();
            }
        }
    };
    function getCacheKey(action) {
        if (isQueryThunk(action)) return action.meta.arg.queryCacheKey;
        if (isMutationThunk(action)) {
            return action.meta.arg.fixedCacheKey ?? action.meta.requestId;
        }
        if (api.internalActions.removeQueryResult.match(action)) return action.payload.queryCacheKey;
        if (api.internalActions.removeMutationResult.match(action)) return getMutationCacheKey(action.payload);
        return "";
    }
    function handleNewKey(endpointName, originalArgs, queryCacheKey, mwApi, requestId) {
        const endpointDefinition = context.endpointDefinitions[endpointName];
        const onCacheEntryAdded = endpointDefinition?.onCacheEntryAdded;
        if (!onCacheEntryAdded) return;
        const lifecycle = {};
        const cacheEntryRemoved = new Promise((resolve)=>{
            lifecycle.cacheEntryRemoved = resolve;
        });
        const cacheDataLoaded = Promise.race([
            new Promise((resolve)=>{
                lifecycle.valueResolved = resolve;
            }),
            cacheEntryRemoved.then(()=>{
                throw neverResolvedError;
            })
        ]);
        cacheDataLoaded.catch(()=>{});
        lifecycleMap[queryCacheKey] = lifecycle;
        const selector = api.endpoints[endpointName].select(endpointDefinition.type === "query" /* query */  ? originalArgs : queryCacheKey);
        const extra = mwApi.dispatch((_, __, extra2)=>extra2);
        const lifecycleApi = {
            ...mwApi,
            getCacheEntry: ()=>selector(mwApi.getState()),
            requestId,
            extra,
            updateCachedData: endpointDefinition.type === "query" /* query */  ? (updateRecipe)=>mwApi.dispatch(api.util.updateQueryData(endpointName, originalArgs, updateRecipe)) : void 0,
            cacheDataLoaded,
            cacheEntryRemoved
        };
        const runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi);
        Promise.resolve(runningHandler).catch((e)=>{
            if (e === neverResolvedError) return;
            throw e;
        });
    }
    return handler;
};
// src/query/core/buildMiddleware/devMiddleware.ts
var buildDevCheckHandler = ({ api, context: { apiUid }, reducerPath })=>{
    return (action, mwApi)=>{
        if (api.util.resetApiState.match(action)) {
            mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid));
        }
        if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
            if (api.internalActions.middlewareRegistered.match(action) && action.payload === apiUid && mwApi.getState()[reducerPath]?.config?.middlewareRegistered === "conflict") {
                console.warn(`There is a mismatch between slice and middleware for the reducerPath "${reducerPath}".
You can only have one api per reducer path, this will lead to crashes in various situations!${reducerPath === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
            }
        }
    };
};
// src/query/core/buildMiddleware/invalidationByTags.ts
var buildInvalidationByTagsHandler = ({ reducerPath, context, context: { endpointDefinitions }, mutationThunk, queryThunk, api, assertTagType, refetchQuery, internalState })=>{
    const { removeQueryResult } = api.internalActions;
    const isThunkActionWithTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(mutationThunk), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejectedWithValue"])(mutationThunk));
    const isQueryEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(mutationThunk, queryThunk), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejected"])(mutationThunk, queryThunk));
    let pendingTagInvalidations = [];
    const handler = (action, mwApi)=>{
        if (isThunkActionWithTags(action)) {
            invalidateTags(calculateProvidedByThunk(action, "invalidatesTags", endpointDefinitions, assertTagType), mwApi);
        } else if (isQueryEnd(action)) {
            invalidateTags([], mwApi);
        } else if (api.util.invalidateTags.match(action)) {
            invalidateTags(calculateProvidedBy(action.payload, void 0, void 0, void 0, void 0, assertTagType), mwApi);
        }
    };
    function hasPendingRequests(state) {
        for(const key in state.queries){
            if (state.queries[key]?.status === "pending" /* pending */ ) return true;
        }
        for(const key in state.mutations){
            if (state.mutations[key]?.status === "pending" /* pending */ ) return true;
        }
        return false;
    }
    function invalidateTags(newTags, mwApi) {
        const rootState = mwApi.getState();
        const state = rootState[reducerPath];
        pendingTagInvalidations.push(...newTags);
        if (state.config.invalidationBehavior === "delayed" && hasPendingRequests(state)) {
            return;
        }
        const tags = pendingTagInvalidations;
        pendingTagInvalidations = [];
        if (tags.length === 0) return;
        const toInvalidate = api.util.selectInvalidatedBy(rootState, tags);
        context.batch(()=>{
            const valuesArray = Array.from(toInvalidate.values());
            for (const { queryCacheKey } of valuesArray){
                const querySubState = state.queries[queryCacheKey];
                const subscriptionSubState = internalState.currentSubscriptions[queryCacheKey] ?? {};
                if (querySubState) {
                    if (countObjectKeys(subscriptionSubState) === 0) {
                        mwApi.dispatch(removeQueryResult({
                            queryCacheKey
                        }));
                    } else if (querySubState.status !== "uninitialized" /* uninitialized */ ) {
                        mwApi.dispatch(refetchQuery(querySubState, queryCacheKey));
                    }
                }
            }
        });
    }
    return handler;
};
// src/query/core/buildMiddleware/polling.ts
var buildPollingHandler = ({ reducerPath, queryThunk, api, refetchQuery, internalState })=>{
    const currentPolls = {};
    const handler = (action, mwApi)=>{
        if (api.internalActions.updateSubscriptionOptions.match(action) || api.internalActions.unsubscribeQueryResult.match(action)) {
            updatePollingInterval(action.payload, mwApi);
        }
        if (queryThunk.pending.match(action) || queryThunk.rejected.match(action) && action.meta.condition) {
            updatePollingInterval(action.meta.arg, mwApi);
        }
        if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action) && !action.meta.condition) {
            startNextPoll(action.meta.arg, mwApi);
        }
        if (api.util.resetApiState.match(action)) {
            clearPolls();
        }
    };
    function startNextPoll({ queryCacheKey }, api2) {
        const state = api2.getState()[reducerPath];
        const querySubState = state.queries[queryCacheKey];
        const subscriptions = internalState.currentSubscriptions[queryCacheKey];
        if (!querySubState || querySubState.status === "uninitialized" /* uninitialized */ ) return;
        const { lowestPollingInterval, skipPollingIfUnfocused } = findLowestPollingInterval(subscriptions);
        if (!Number.isFinite(lowestPollingInterval)) return;
        const currentPoll = currentPolls[queryCacheKey];
        if (currentPoll?.timeout) {
            clearTimeout(currentPoll.timeout);
            currentPoll.timeout = void 0;
        }
        const nextPollTimestamp = Date.now() + lowestPollingInterval;
        currentPolls[queryCacheKey] = {
            nextPollTimestamp,
            pollingInterval: lowestPollingInterval,
            timeout: setTimeout(()=>{
                if (state.config.focused || !skipPollingIfUnfocused) {
                    api2.dispatch(refetchQuery(querySubState, queryCacheKey));
                }
                startNextPoll({
                    queryCacheKey
                }, api2);
            }, lowestPollingInterval)
        };
    }
    function updatePollingInterval({ queryCacheKey }, api2) {
        const state = api2.getState()[reducerPath];
        const querySubState = state.queries[queryCacheKey];
        const subscriptions = internalState.currentSubscriptions[queryCacheKey];
        if (!querySubState || querySubState.status === "uninitialized" /* uninitialized */ ) {
            return;
        }
        const { lowestPollingInterval } = findLowestPollingInterval(subscriptions);
        if (!Number.isFinite(lowestPollingInterval)) {
            cleanupPollForKey(queryCacheKey);
            return;
        }
        const currentPoll = currentPolls[queryCacheKey];
        const nextPollTimestamp = Date.now() + lowestPollingInterval;
        if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
            startNextPoll({
                queryCacheKey
            }, api2);
        }
    }
    function cleanupPollForKey(key) {
        const existingPoll = currentPolls[key];
        if (existingPoll?.timeout) {
            clearTimeout(existingPoll.timeout);
        }
        delete currentPolls[key];
    }
    function clearPolls() {
        for (const key of Object.keys(currentPolls)){
            cleanupPollForKey(key);
        }
    }
    function findLowestPollingInterval(subscribers = {}) {
        let skipPollingIfUnfocused = false;
        let lowestPollingInterval = Number.POSITIVE_INFINITY;
        for(let key in subscribers){
            if (!!subscribers[key].pollingInterval) {
                lowestPollingInterval = Math.min(subscribers[key].pollingInterval, lowestPollingInterval);
                skipPollingIfUnfocused = subscribers[key].skipPollingIfUnfocused || skipPollingIfUnfocused;
            }
        }
        return {
            lowestPollingInterval,
            skipPollingIfUnfocused
        };
    }
    return handler;
};
// src/query/core/buildMiddleware/queryLifecycle.ts
var buildQueryLifecycleHandler = ({ api, context, queryThunk, mutationThunk })=>{
    const isPendingThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isPending"])(queryThunk, mutationThunk);
    const isRejectedThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isRejected"])(queryThunk, mutationThunk);
    const isFullfilledThunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isFulfilled"])(queryThunk, mutationThunk);
    const lifecycleMap = {};
    const handler = (action, mwApi)=>{
        if (isPendingThunk(action)) {
            const { requestId, arg: { endpointName, originalArgs } } = action.meta;
            const endpointDefinition = context.endpointDefinitions[endpointName];
            const onQueryStarted = endpointDefinition?.onQueryStarted;
            if (onQueryStarted) {
                const lifecycle = {};
                const queryFulfilled = new Promise((resolve, reject)=>{
                    lifecycle.resolve = resolve;
                    lifecycle.reject = reject;
                });
                queryFulfilled.catch(()=>{});
                lifecycleMap[requestId] = lifecycle;
                const selector = api.endpoints[endpointName].select(endpointDefinition.type === "query" /* query */  ? originalArgs : requestId);
                const extra = mwApi.dispatch((_, __, extra2)=>extra2);
                const lifecycleApi = {
                    ...mwApi,
                    getCacheEntry: ()=>selector(mwApi.getState()),
                    requestId,
                    extra,
                    updateCachedData: endpointDefinition.type === "query" /* query */  ? (updateRecipe)=>mwApi.dispatch(api.util.updateQueryData(endpointName, originalArgs, updateRecipe)) : void 0,
                    queryFulfilled
                };
                onQueryStarted(originalArgs, lifecycleApi);
            }
        } else if (isFullfilledThunk(action)) {
            const { requestId, baseQueryMeta } = action.meta;
            lifecycleMap[requestId]?.resolve({
                data: action.payload,
                meta: baseQueryMeta
            });
            delete lifecycleMap[requestId];
        } else if (isRejectedThunk(action)) {
            const { requestId, rejectedWithValue, baseQueryMeta } = action.meta;
            lifecycleMap[requestId]?.reject({
                error: action.payload ?? action.error,
                isUnhandledError: !rejectedWithValue,
                meta: baseQueryMeta
            });
            delete lifecycleMap[requestId];
        }
    };
    return handler;
};
// src/query/core/buildMiddleware/windowEventHandling.ts
var buildWindowEventHandler = ({ reducerPath, context, api, refetchQuery, internalState })=>{
    const { removeQueryResult } = api.internalActions;
    const handler = (action, mwApi)=>{
        if (onFocus.match(action)) {
            refetchValidQueries(mwApi, "refetchOnFocus");
        }
        if (onOnline.match(action)) {
            refetchValidQueries(mwApi, "refetchOnReconnect");
        }
    };
    function refetchValidQueries(api2, type) {
        const state = api2.getState()[reducerPath];
        const queries = state.queries;
        const subscriptions = internalState.currentSubscriptions;
        context.batch(()=>{
            for (const queryCacheKey of Object.keys(subscriptions)){
                const querySubState = queries[queryCacheKey];
                const subscriptionSubState = subscriptions[queryCacheKey];
                if (!subscriptionSubState || !querySubState) continue;
                const shouldRefetch = Object.values(subscriptionSubState).some((sub)=>sub[type] === true) || Object.values(subscriptionSubState).every((sub)=>sub[type] === void 0) && state.config[type];
                if (shouldRefetch) {
                    if (countObjectKeys(subscriptionSubState) === 0) {
                        api2.dispatch(removeQueryResult({
                            queryCacheKey
                        }));
                    } else if (querySubState.status !== "uninitialized" /* uninitialized */ ) {
                        api2.dispatch(refetchQuery(querySubState, queryCacheKey));
                    }
                }
            }
        });
    }
    return handler;
};
// src/query/core/buildMiddleware/index.ts
function buildMiddleware(input) {
    const { reducerPath, queryThunk, api, context } = input;
    const { apiUid } = context;
    const actions = {
        invalidateTags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAction"])(`${reducerPath}/invalidateTags`)
    };
    const isThisApiSliceAction = (action)=>action.type.startsWith(`${reducerPath}/`);
    const handlerBuilders = [
        buildDevCheckHandler,
        buildCacheCollectionHandler,
        buildInvalidationByTagsHandler,
        buildPollingHandler,
        buildCacheLifecycleHandler,
        buildQueryLifecycleHandler
    ];
    const middleware = (mwApi)=>{
        let initialized2 = false;
        const internalState = {
            currentSubscriptions: {}
        };
        const builderArgs = {
            ...input,
            internalState,
            refetchQuery,
            isThisApiSliceAction
        };
        const handlers = handlerBuilders.map((build)=>build(builderArgs));
        const batchedActionsHandler = buildBatchedActionsHandler(builderArgs);
        const windowEventsHandler = buildWindowEventHandler(builderArgs);
        return (next)=>{
            return (action)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                    return next(action);
                }
                if (!initialized2) {
                    initialized2 = true;
                    mwApi.dispatch(api.internalActions.middlewareRegistered(apiUid));
                }
                const mwApiWithNext = {
                    ...mwApi,
                    next
                };
                const stateBefore = mwApi.getState();
                const [actionShouldContinue, internalProbeResult] = batchedActionsHandler(action, mwApiWithNext, stateBefore);
                let res;
                if (actionShouldContinue) {
                    res = next(action);
                } else {
                    res = internalProbeResult;
                }
                if (!!mwApi.getState()[reducerPath]) {
                    windowEventsHandler(action, mwApiWithNext, stateBefore);
                    if (isThisApiSliceAction(action) || context.hasRehydrationInfo(action)) {
                        for (const handler of handlers){
                            handler(action, mwApiWithNext, stateBefore);
                        }
                    }
                }
                return res;
            };
        };
    };
    return {
        middleware,
        actions
    };
    function refetchQuery(querySubState, queryCacheKey, override = {}) {
        return queryThunk({
            type: "query",
            endpointName: querySubState.endpointName,
            originalArgs: querySubState.originalArgs,
            subscribe: false,
            forceRefetch: true,
            queryCacheKey,
            ...override
        });
    }
}
// src/query/core/module.ts
var coreModuleName = /* @__PURE__ */ Symbol();
var coreModule = ({ createSelector: createSelector2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSelector"] } = {})=>({
        name: coreModuleName,
        init (api, { baseQuery, tagTypes, reducerPath, serializeQueryArgs, keepUnusedDataFor, refetchOnMountOrArgChange, refetchOnFocus, refetchOnReconnect, invalidationBehavior }, context) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$immer$40$10$2e$1$2e$1$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enablePatches"])();
            assertCast(serializeQueryArgs);
            const assertTagType = (tag)=>{
                if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                    if (!tagTypes.includes(tag.type)) {
                        console.error(`Tag type '${tag.type}' was used, but not specified in \`tagTypes\`!`);
                    }
                }
                return tag;
            };
            Object.assign(api, {
                reducerPath,
                endpoints: {},
                internalActions: {
                    onOnline,
                    onOffline,
                    onFocus,
                    onFocusLost
                },
                util: {}
            });
            const { queryThunk, mutationThunk, patchQueryData, updateQueryData, upsertQueryData, prefetch, buildMatchThunkActions } = buildThunks({
                baseQuery,
                reducerPath,
                context,
                api,
                serializeQueryArgs,
                assertTagType
            });
            const { reducer, actions: sliceActions } = buildSlice({
                context,
                queryThunk,
                mutationThunk,
                reducerPath,
                assertTagType,
                config: {
                    refetchOnFocus,
                    refetchOnReconnect,
                    refetchOnMountOrArgChange,
                    keepUnusedDataFor,
                    reducerPath,
                    invalidationBehavior
                }
            });
            safeAssign(api.util, {
                patchQueryData,
                updateQueryData,
                upsertQueryData,
                prefetch,
                resetApiState: sliceActions.resetApiState
            });
            safeAssign(api.internalActions, sliceActions);
            const { middleware, actions: middlewareActions } = buildMiddleware({
                reducerPath,
                context,
                queryThunk,
                mutationThunk,
                api,
                assertTagType
            });
            safeAssign(api.util, middlewareActions);
            safeAssign(api, {
                reducer,
                middleware
            });
            const { buildQuerySelector, buildMutationSelector, selectInvalidatedBy, selectCachedArgsForQuery } = buildSelectors({
                serializeQueryArgs,
                reducerPath,
                createSelector: createSelector2
            });
            safeAssign(api.util, {
                selectInvalidatedBy,
                selectCachedArgsForQuery
            });
            const { buildInitiateQuery, buildInitiateMutation, getRunningMutationThunk, getRunningMutationsThunk, getRunningQueriesThunk, getRunningQueryThunk } = buildInitiate({
                queryThunk,
                mutationThunk,
                api,
                serializeQueryArgs,
                context
            });
            safeAssign(api.util, {
                getRunningMutationThunk,
                getRunningMutationsThunk,
                getRunningQueryThunk,
                getRunningQueriesThunk
            });
            return {
                name: coreModuleName,
                injectEndpoint (endpointName, definition) {
                    const anyApi = api;
                    anyApi.endpoints[endpointName] ??= {};
                    if (isQueryDefinition(definition)) {
                        safeAssign(anyApi.endpoints[endpointName], {
                            name: endpointName,
                            select: buildQuerySelector(endpointName, definition),
                            initiate: buildInitiateQuery(endpointName, definition)
                        }, buildMatchThunkActions(queryThunk, endpointName));
                    } else if (isMutationDefinition(definition)) {
                        safeAssign(anyApi.endpoints[endpointName], {
                            name: endpointName,
                            select: buildMutationSelector(),
                            initiate: buildInitiateMutation(endpointName)
                        }, buildMatchThunkActions(mutationThunk, endpointName));
                    }
                }
            };
        }
    });
// src/query/core/index.ts
var createApi = /* @__PURE__ */ buildCreateApi(coreModule());
;
 //# sourceMappingURL=rtk-query.modern.mjs.map

})()),
"[project]/node_modules/.pnpm/@reduxjs+toolkit@2.2.7_react-redux@9.1.2_@types+react@18.3.3_react@18.3.1_redux@5.0.1__react@18.3.1/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-rsc] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// src/query/react/index.ts
__turbopack_esm__({
    "ApiProvider": ()=>ApiProvider,
    "UNINITIALIZED_VALUE": ()=>UNINITIALIZED_VALUE,
    "createApi": ()=>createApi,
    "reactHooksModule": ()=>reactHooksModule,
    "reactHooksModuleName": ()=>reactHooksModuleName
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/redux@5.0.1/node_modules/redux/dist/redux.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-redux@9.1.2_@types+react@18.3.3_react@18.3.1_redux@5.0.1/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.2.7_react-redux@9.1.2_@types+react@18.3.3_react@18.3.1_redux@5.0.1__react@18.3.1/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/reselect@5.1.1/node_modules/reselect/dist/reselect.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.2.7_react-redux@9.1.2_@types+react@18.3.3_react@18.3.1_redux@5.0.1__react@18.3.1/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
// src/query/endpointDefinitions.ts
function isQueryDefinition(e) {
    return e.type === "query" /* query */ ;
}
function isMutationDefinition(e) {
    return e.type === "mutation" /* mutation */ ;
}
// src/query/tsHelpers.ts
function safeAssign(target, ...args) {
    return Object.assign(target, ...args);
}
// src/query/utils/capitalize.ts
function capitalize(str) {
    return str.replace(str[0], str[0].toUpperCase());
}
;
// src/query/utils/countObjectKeys.ts
function countObjectKeys(obj) {
    let count = 0;
    for(const _key in obj){
        count++;
    }
    return count;
}
;
;
;
;
// src/query/defaultSerializeQueryArgs.ts
var cache = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var defaultSerializeQueryArgs = ({ endpointName, queryArgs })=>{
    let serialized = "";
    const cached = cache?.get(queryArgs);
    if (typeof cached === "string") {
        serialized = cached;
    } else {
        const stringified = JSON.stringify(queryArgs, (key, value)=>{
            value = typeof value === "bigint" ? {
                $bigint: value.toString()
            } : value;
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(value) ? Object.keys(value).sort().reduce((acc, key2)=>{
                acc[key2] = value[key2];
                return acc;
            }, {}) : value;
            return value;
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$redux$40$5$2e$0$2e$1$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(queryArgs)) {
            cache?.set(queryArgs, stringified);
        }
        serialized = stringified;
    }
    return `${endpointName}(${serialized})`;
};
// src/query/react/constants.ts
var UNINITIALIZED_VALUE = Symbol();
;
function useStableQueryArgs(queryArgs, serialize, endpointDefinition, endpointName) {
    const incoming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            queryArgs,
            serialized: typeof queryArgs == "object" ? serialize({
                queryArgs,
                endpointDefinition,
                endpointName
            }) : queryArgs
        }), [
        queryArgs,
        serialize,
        endpointDefinition,
        endpointName
    ]);
    const cache2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(incoming);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cache2.current.serialized !== incoming.serialized) {
            cache2.current = incoming;
        }
    }, [
        incoming
    ]);
    return cache2.current.serialized === incoming.serialized ? cache2.current.queryArgs : queryArgs;
}
;
;
function useShallowStableValue(value) {
    const cache2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowEqual"])(cache2.current, value)) {
            cache2.current = value;
        }
    }, [
        value
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowEqual"])(cache2.current, value) ? cache2.current : value;
}
// src/query/react/buildHooks.ts
var canUseDOM = ()=>!!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = ()=>typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = ()=>isDOM || isReactNative ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"];
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
var noPendingQueryStateSelector = (selected)=>{
    if (selected.isUninitialized) {
        return {
            ...selected,
            isUninitialized: false,
            isFetching: true,
            isLoading: selected.data !== void 0 ? false : true,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryStatus"].pending
        };
    }
    return selected;
};
function buildHooks({ api, moduleOptions: { batch, hooks: { useDispatch, useSelector, useStore }, unstable__sideEffectsInRender, createSelector: createSelector2 }, serializeQueryArgs, context }) {
    const usePossiblyImmediateEffect = unstable__sideEffectsInRender ? (cb)=>cb() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"];
    return {
        buildQueryHooks,
        buildMutationHook,
        usePrefetch
    };
    function queryStatePreSelector(currentState, lastResult, queryArgs) {
        if (lastResult?.endpointName && currentState.isUninitialized) {
            const { endpointName } = lastResult;
            const endpointDefinition = context.endpointDefinitions[endpointName];
            if (serializeQueryArgs({
                queryArgs: lastResult.originalArgs,
                endpointDefinition,
                endpointName
            }) === serializeQueryArgs({
                queryArgs,
                endpointDefinition,
                endpointName
            })) lastResult = void 0;
        }
        let data = currentState.isSuccess ? currentState.data : lastResult?.data;
        if (data === void 0) data = currentState.data;
        const hasData = data !== void 0;
        const isFetching = currentState.isLoading;
        const isLoading = (!lastResult || lastResult.isLoading || lastResult.isUninitialized) && !hasData && isFetching;
        const isSuccess = currentState.isSuccess || isFetching && hasData;
        return {
            ...currentState,
            data,
            currentData: currentState.data,
            isFetching,
            isLoading,
            isSuccess
        };
    }
    function usePrefetch(endpointName, defaultOptions) {
        const dispatch = useDispatch();
        const stableDefaultOptions = useShallowStableValue(defaultOptions);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((arg, options)=>dispatch(api.util.prefetch(endpointName, arg, {
                ...stableDefaultOptions,
                ...options
            })), [
            endpointName,
            dispatch,
            stableDefaultOptions
        ]);
    }
    function buildQueryHooks(name) {
        const useQuerySubscription = (arg, { refetchOnReconnect, refetchOnFocus, refetchOnMountOrArgChange, skip = false, pollingInterval = 0, skipPollingIfUnfocused = false } = {})=>{
            const { initiate } = api.endpoints[name];
            const dispatch = useDispatch();
            const subscriptionSelectorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(void 0);
            if (!subscriptionSelectorsRef.current) {
                const returnedValue = dispatch(api.internalActions.internal_getRTKQSubscriptions());
                if ("TURBOPACK compile-time truthy", 1) {
                    if (typeof returnedValue !== "object" || typeof returnedValue?.type === "string") {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `Warning: Middleware for RTK-Query API at reducerPath "${api.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
                    }
                }
                subscriptionSelectorsRef.current = returnedValue;
            }
            const stableArg = useStableQueryArgs(skip ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] : arg, // Even if the user provided a per-endpoint `serializeQueryArgs` with
            // a consistent return value, _here_ we want to use the default behavior
            // so we can tell if _anything_ actually changed. Otherwise, we can end up
            // with a case where the query args did change but the serialization doesn't,
            // and then we never try to initiate a refetch.
            defaultSerializeQueryArgs, context.endpointDefinitions[name], name);
            const stableSubscriptionOptions = useShallowStableValue({
                refetchOnReconnect,
                refetchOnFocus,
                pollingInterval,
                skipPollingIfUnfocused
            });
            const lastRenderHadSubscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(false);
            const promiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(void 0);
            let { queryCacheKey, requestId } = promiseRef.current || {};
            let currentRenderHasSubscription = false;
            if (queryCacheKey && requestId) {
                currentRenderHasSubscription = subscriptionSelectorsRef.current.isRequestSubscribed(queryCacheKey, requestId);
            }
            const subscriptionRemoved = !currentRenderHasSubscription && lastRenderHadSubscription.current;
            usePossiblyImmediateEffect(()=>{
                lastRenderHadSubscription.current = currentRenderHasSubscription;
            });
            usePossiblyImmediateEffect(()=>{
                if (subscriptionRemoved) {
                    promiseRef.current = void 0;
                }
            }, [
                subscriptionRemoved
            ]);
            usePossiblyImmediateEffect(()=>{
                const lastPromise = promiseRef.current;
                if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "removeMeOnCompilation") {
                    console.log(subscriptionRemoved);
                }
                if (stableArg === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"]) {
                    lastPromise?.unsubscribe();
                    promiseRef.current = void 0;
                    return;
                }
                const lastSubscriptionOptions = promiseRef.current?.subscriptionOptions;
                if (!lastPromise || lastPromise.arg !== stableArg) {
                    lastPromise?.unsubscribe();
                    const promise = dispatch(initiate(stableArg, {
                        subscriptionOptions: stableSubscriptionOptions,
                        forceRefetch: refetchOnMountOrArgChange
                    }));
                    promiseRef.current = promise;
                } else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                    lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
                }
            }, [
                dispatch,
                initiate,
                refetchOnMountOrArgChange,
                stableArg,
                stableSubscriptionOptions,
                subscriptionRemoved
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
                return ()=>{
                    promiseRef.current?.unsubscribe();
                    promiseRef.current = void 0;
                };
            }, []);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                    /**
         * A method to manually refetch data for the query
         */ refetch: ()=>{
                        if (!promiseRef.current) throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Cannot refetch a query that has not been started yet.");
                        return promiseRef.current?.refetch();
                    }
                }), []);
        };
        const useLazyQuerySubscription = ({ refetchOnReconnect, refetchOnFocus, pollingInterval = 0, skipPollingIfUnfocused = false } = {})=>{
            const { initiate } = api.endpoints[name];
            const dispatch = useDispatch();
            const [arg, setArg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(UNINITIALIZED_VALUE);
            const promiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(void 0);
            const stableSubscriptionOptions = useShallowStableValue({
                refetchOnReconnect,
                refetchOnFocus,
                pollingInterval,
                skipPollingIfUnfocused
            });
            usePossiblyImmediateEffect(()=>{
                const lastSubscriptionOptions = promiseRef.current?.subscriptionOptions;
                if (stableSubscriptionOptions !== lastSubscriptionOptions) {
                    promiseRef.current?.updateSubscriptionOptions(stableSubscriptionOptions);
                }
            }, [
                stableSubscriptionOptions
            ]);
            const subscriptionOptionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(stableSubscriptionOptions);
            usePossiblyImmediateEffect(()=>{
                subscriptionOptionsRef.current = stableSubscriptionOptions;
            }, [
                stableSubscriptionOptions
            ]);
            const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(arg2, preferCacheValue = false) {
                let promise;
                batch(()=>{
                    promiseRef.current?.unsubscribe();
                    promiseRef.current = promise = dispatch(initiate(arg2, {
                        subscriptionOptions: subscriptionOptionsRef.current,
                        forceRefetch: !preferCacheValue
                    }));
                    setArg(arg2);
                });
                return promise;
            }, [
                dispatch,
                initiate
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
                return ()=>{
                    promiseRef?.current?.unsubscribe();
                };
            }, []);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
                if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
                    trigger(arg, true);
                }
            }, [
                arg,
                trigger
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
                    trigger,
                    arg
                ], [
                trigger,
                arg
            ]);
        };
        const useQueryState = (arg, { skip = false, selectFromResult } = {})=>{
            const { select } = api.endpoints[name];
            const stableArg = useStableQueryArgs(skip ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] : arg, serializeQueryArgs, context.endpointDefinitions[name], name);
            const lastValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(void 0);
            const selectDefaultResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>createSelector2([
                    select(stableArg),
                    (_, lastResult)=>lastResult,
                    (_)=>stableArg
                ], queryStatePreSelector, {
                    memoizeOptions: {
                        resultEqualityCheck: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowEqual"]
                    }
                }), [
                select,
                stableArg
            ]);
            const querySelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectFromResult ? createSelector2([
                    selectDefaultResult
                ], selectFromResult, {
                    devModeChecks: {
                        identityFunctionCheck: "never"
                    }
                }) : selectDefaultResult, [
                selectDefaultResult,
                selectFromResult
            ]);
            const currentState = useSelector((state)=>querySelector(state, lastValue.current), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowEqual"]);
            const store = useStore();
            const newLastValue = selectDefaultResult(store.getState(), lastValue.current);
            useIsomorphicLayoutEffect(()=>{
                lastValue.current = newLastValue;
            }, [
                newLastValue
            ]);
            return currentState;
        };
        return {
            useQueryState,
            useQuerySubscription,
            useLazyQuerySubscription,
            useLazyQuery (options) {
                const [trigger, arg] = useLazyQuerySubscription(options);
                const queryStateResults = useQueryState(arg, {
                    ...options,
                    skip: arg === UNINITIALIZED_VALUE
                });
                const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                        lastArg: arg
                    }), [
                    arg
                ]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
                        trigger,
                        queryStateResults,
                        info
                    ], [
                    trigger,
                    queryStateResults,
                    info
                ]);
            },
            useQuery (arg, options) {
                const querySubscriptionResults = useQuerySubscription(arg, options);
                const queryStateResults = useQueryState(arg, {
                    selectFromResult: arg === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] || options?.skip ? void 0 : noPendingQueryStateSelector,
                    ...options
                });
                const { data, status, isLoading, isSuccess, isError, error } = queryStateResults;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDebugValue"])({
                    data,
                    status,
                    isLoading,
                    isSuccess,
                    isError,
                    error
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                        ...queryStateResults,
                        ...querySubscriptionResults
                    }), [
                    queryStateResults,
                    querySubscriptionResults
                ]);
            }
        };
    }
    function buildMutationHook(name) {
        return ({ selectFromResult, fixedCacheKey } = {})=>{
            const { select, initiate } = api.endpoints[name];
            const dispatch = useDispatch();
            const [promise, setPromise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
                    if (!promise?.arg.fixedCacheKey) {
                        promise?.reset();
                    }
                }, [
                promise
            ]);
            const triggerMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(function(arg) {
                const promise2 = dispatch(initiate(arg, {
                    fixedCacheKey
                }));
                setPromise(promise2);
                return promise2;
            }, [
                dispatch,
                initiate,
                fixedCacheKey
            ]);
            const { requestId } = promise || {};
            const selectDefaultResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>select({
                    fixedCacheKey,
                    requestId: promise?.requestId
                }), [
                fixedCacheKey,
                promise,
                select
            ]);
            const mutationSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectFromResult ? createSelector2([
                    selectDefaultResult
                ], selectFromResult) : selectDefaultResult, [
                selectFromResult,
                selectDefaultResult
            ]);
            const currentState = useSelector(mutationSelector, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shallowEqual"]);
            const originalArgs = fixedCacheKey == null ? promise?.arg.originalArgs : void 0;
            const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
                batch(()=>{
                    if (promise) {
                        setPromise(void 0);
                    }
                    if (fixedCacheKey) {
                        dispatch(api.internalActions.removeMutationResult({
                            requestId,
                            fixedCacheKey
                        }));
                    }
                });
            }, [
                dispatch,
                fixedCacheKey,
                promise,
                requestId
            ]);
            const { endpointName, data, status, isLoading, isSuccess, isError, error } = currentState;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDebugValue"])({
                endpointName,
                data,
                status,
                isLoading,
                isSuccess,
                isError,
                error
            });
            const finalState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                    ...currentState,
                    originalArgs,
                    reset
                }), [
                currentState,
                originalArgs,
                reset
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
                    triggerMutation,
                    finalState
                ], [
                triggerMutation,
                finalState
            ]);
        };
    }
}
// src/query/react/module.ts
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = ({ batch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["batch"], hooks = {
    useDispatch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDispatch"],
    useSelector: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSelector"],
    useStore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useStore"]
}, createSelector: createSelector2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$reselect$40$5$2e$1$2e$1$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSelector"], unstable__sideEffectsInRender = false, ...rest } = {})=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const hookNames = [
            "useDispatch",
            "useSelector",
            "useStore"
        ];
        let warned = false;
        for (const hookName of hookNames){
            if (countObjectKeys(rest) > 0) {
                if (rest[hookName]) {
                    if (!warned) {
                        console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`");
                        warned = true;
                    }
                }
                hooks[hookName] = rest[hookName];
            }
            if (typeof hooks[hookName] !== "function") {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : `When using custom hooks for context, all ${hookNames.length} hooks need to be provided: ${hookNames.join(", ")}.
Hook ${hookName} was either not provided or not a function.`);
            }
        }
    }
    return {
        name: reactHooksModuleName,
        init (api, { serializeQueryArgs }, context) {
            const anyApi = api;
            const { buildQueryHooks, buildMutationHook, usePrefetch } = buildHooks({
                api,
                moduleOptions: {
                    batch,
                    hooks,
                    unstable__sideEffectsInRender,
                    createSelector: createSelector2
                },
                serializeQueryArgs,
                context
            });
            safeAssign(anyApi, {
                usePrefetch
            });
            safeAssign(context, {
                batch
            });
            return {
                injectEndpoint (endpointName, definition) {
                    if (isQueryDefinition(definition)) {
                        const { useQuery, useLazyQuery, useLazyQuerySubscription, useQueryState, useQuerySubscription } = buildQueryHooks(endpointName);
                        safeAssign(anyApi.endpoints[endpointName], {
                            useQuery,
                            useLazyQuery,
                            useLazyQuerySubscription,
                            useQueryState,
                            useQuerySubscription
                        });
                        api[`use${capitalize(endpointName)}Query`] = useQuery;
                        api[`useLazy${capitalize(endpointName)}Query`] = useLazyQuery;
                    } else if (isMutationDefinition(definition)) {
                        const useMutation = buildMutationHook(endpointName);
                        safeAssign(anyApi.endpoints[endpointName], {
                            useMutation
                        });
                        api[`use${capitalize(endpointName)}Mutation`] = useMutation;
                    }
                }
            };
        }
    };
};
;
;
;
;
;
;
;
function ApiProvider(props) {
    const context = props.context || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReactReduxContext"];
    const existingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])(context);
    if (existingContext) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "Existing Redux context detected. If you already have a store set up, please use the traditional Redux setup.");
    }
    const [store] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.useState(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
            reducer: {
                [props.api.reducerPath]: props.api.reducer
            },
            middleware: (gDM)=>gDM().concat(props.api.middleware)
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>props.setupListeners === false ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setupListeners"])(store.dispatch, props.setupListeners), [
        props.setupListeners,
        store.dispatch
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"], {
        store,
        context
    }, props.children);
}
// src/query/react/index.ts
var createApi = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCreateApi"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$2$2e$7_react$2d$redux$40$9$2e$1$2e$2_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_redux$40$5$2e$0$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coreModule"])(), reactHooksModule());
;
 //# sourceMappingURL=rtk-query-react.modern.mjs.map

})()),

};

//# sourceMappingURL=2953c_%40reduxjs_toolkit_dist_5cf0e0._.js.map