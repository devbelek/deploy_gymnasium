(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/154a1_react-dom_cjs_react-dom_development_83ef4e.js", {

"[project]/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom.development.js [client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react-dom.development.js
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
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = (()=>{
            const e = new Error("Cannot find module 'react'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        var Scheduler = __turbopack_require__("[project]/node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js [client] (ecmascript)");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var suppressWarning = false;
        function setSuppressWarning(newSuppressWarning) {
            {
                suppressWarning = newSuppressWarning;
            }
        } // In DEV, calls to console.warn and console.error get replaced
        // by calls to these methods by a Babel plugin.
        //
        // In PROD (or in packages without access to React internals),
        // they are left as they are instead.
        function warn(format) {
            {
                if (!suppressWarning) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    printWarning('warn', format, args);
                }
            }
        }
        function error(format) {
            {
                if (!suppressWarning) {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var FunctionComponent = 0;
        var ClassComponent = 1;
        var IndeterminateComponent = 2; // Before we know whether it is function or class
        var HostRoot = 3; // Root of a host tree. Could be nested inside another node.
        var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.
        var HostComponent = 5;
        var HostText = 6;
        var Fragment = 7;
        var Mode = 8;
        var ContextConsumer = 9;
        var ContextProvider = 10;
        var ForwardRef = 11;
        var Profiler = 12;
        var SuspenseComponent = 13;
        var MemoComponent = 14;
        var SimpleMemoComponent = 15;
        var LazyComponent = 16;
        var IncompleteClassComponent = 17;
        var DehydratedFragment = 18;
        var SuspenseListComponent = 19;
        var ScopeComponent = 21;
        var OffscreenComponent = 22;
        var LegacyHiddenComponent = 23;
        var CacheComponent = 24;
        var TracingMarkerComponent = 25;
        // -----------------------------------------------------------------------------
        var enableClientRenderFallbackOnTextMismatch = true; // TODO: Need to review this code one more time before landing
        // the react-reconciler package.
        var enableNewReconciler = false; // Support legacy Primer support on internal FB www
        var enableLazyContextPropagation = false; // FB-only usage. The new API has different semantics.
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        var enableSuspenseAvoidThisFallback = false; // Enables unstable_avoidThisFallback feature in Fizz
        // React DOM Chopping Block
        //
        // Similar to main Chopping Block but only flags related to React DOM. These are
        // grouped because we will likely batch all of them into a single major release.
        // -----------------------------------------------------------------------------
        // Disable support for comment nodes as React DOM containers. Already disabled
        // in open source, but www codebase still relies on it. Need to remove.
        var disableCommentsAsDOMContainers = true; // Disable javascript: URL strings in href for XSS protection.
        // and client rendering, mostly to allow JSX attributes to apply to the custom
        // element's object properties instead of only HTML attributes.
        // https://github.com/facebook/react/issues/11347
        var enableCustomElementPropertySupport = false; // Disables children for <textarea> elements
        var warnAboutStringRefs = true; // -----------------------------------------------------------------------------
        // Debugging and DevTools
        // -----------------------------------------------------------------------------
        // Adds user timing marks for e.g. state updates, suspense, and work loop stuff,
        // for an experimental timeline tool.
        var enableSchedulingProfiler = true; // Helps identify side effects in render-phase lifecycle hooks and setState
        var enableProfilerTimer = true; // Record durations for commit and passive effects phases.
        var enableProfilerCommitHooks = true; // Phase param passed to onRender callback differentiates between an "update" and a "cascading-update".
        var allNativeEvents = new Set();
        /**
 * Mapping from registration name to event name
 */ var registrationNameDependencies = {};
        /**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */ var possibleRegistrationNames = {}; // Trust the developer to only use possibleRegistrationNames in true
        function registerTwoPhaseEvent(registrationName, dependencies) {
            registerDirectEvent(registrationName, dependencies);
            registerDirectEvent(registrationName + 'Capture', dependencies);
        }
        function registerDirectEvent(registrationName, dependencies) {
            {
                if (registrationNameDependencies[registrationName]) {
                    error('EventRegistry: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName);
                }
            }
            registrationNameDependencies[registrationName] = dependencies;
            {
                var lowerCasedName = registrationName.toLowerCase();
                possibleRegistrationNames[lowerCasedName] = registrationName;
                if (registrationName === 'onDoubleClick') {
                    possibleRegistrationNames.ondblclick = registrationName;
                }
            }
            for(var i = 0; i < dependencies.length; i++){
                allNativeEvents.add(dependencies[i]);
            }
        }
        var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
        function typeName(value) {
            {
                // toStringTag is needed for namespaced types like Temporal.Instant
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
                return type;
            }
        } // $FlowFixMe only called in DEV, so void return is not possible.
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            // If you ended up here by following an exception call stack, here's what's
            // happened: you supplied an object or symbol value to React (as a prop, key,
            // DOM attribute, CSS property, string ref, etc.) and when React tried to
            // coerce it to a string using `'' + value`, an exception was thrown.
            //
            // The most common types that will cause this exception are `Symbol` instances
            // and Temporal objects like `Temporal.Instant`. But any object that has a
            // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
            // exception. (Library authors do this to prevent users from using built-in
            // numeric operators like `+` or comparison operators like `>=` because custom
            // methods are needed to perform accurate arithmetic or comparison.)
            //
            // To fix the problem, coerce this object or symbol value to a string before
            // passing it to React. The most reliable way is usually `String(value)`.
            //
            // To find which value is throwing, check the browser or debugger console.
            // Before this exception was thrown, there should be `console.error` output
            // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
            // problem and how that type was used: key, atrribute, input value prop, etc.
            // In most cases, this console output also shows the component and its
            // ancestor components where the exception happened.
            //
            // eslint-disable-next-line react-internal/safe-string-coercion
            return '' + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        function checkPropStringCoercion(value, propName) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided `%s` prop is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided `%s` CSS property is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        function checkHtmlStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        function checkFormFieldValueStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('Form field values (value, checked, defaultValue, or defaultChecked props)' + ' must be strings, not %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        // A reserved attribute.
        // It is handled by React separately and shouldn't be written to the DOM.
        var RESERVED = 0; // A simple string attribute.
        // Attributes that aren't in the filter are presumed to have this type.
        var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
        // "enumerated" attributes with "true" and "false" as possible values.
        // When true, it should be set to a "true" string.
        // When false, it should be set to a "false" string.
        var BOOLEANISH_STRING = 2; // A real boolean attribute.
        // When true, it should be present (set either to an empty string or its name).
        // When false, it should be omitted.
        var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
        // When true, it should be present (set either to an empty string or its name).
        // When false, it should be omitted.
        // For any other value, should be present with that value.
        var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
        // When falsy, it should be removed.
        var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
        // When falsy, it should be removed.
        var POSITIVE_NUMERIC = 6;
        /* eslint-disable max-len */ var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        /* eslint-enable max-len */ var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
            if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
                return true;
            }
            if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
                return false;
            }
            if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
                validatedAttributeNameCache[attributeName] = true;
                return true;
            }
            illegalAttributeNameCache[attributeName] = true;
            {
                error('Invalid attribute name: `%s`', attributeName);
            }
            return false;
        }
        function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
            if (propertyInfo !== null) {
                return propertyInfo.type === RESERVED;
            }
            if (isCustomComponentTag) {
                return false;
            }
            if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
                return true;
            }
            return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
            if (propertyInfo !== null && propertyInfo.type === RESERVED) {
                return false;
            }
            switch(typeof value){
                case 'function':
                case 'symbol':
                    // eslint-disable-line
                    return true;
                case 'boolean':
                    {
                        if (isCustomComponentTag) {
                            return false;
                        }
                        if (propertyInfo !== null) {
                            return !propertyInfo.acceptsBooleans;
                        } else {
                            var prefix = name.toLowerCase().slice(0, 5);
                            return prefix !== 'data-' && prefix !== 'aria-';
                        }
                    }
                default:
                    return false;
            }
        }
        function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
            if (value === null || typeof value === 'undefined') {
                return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
                return true;
            }
            if (isCustomComponentTag) {
                return false;
            }
            if (propertyInfo !== null) {
                switch(propertyInfo.type){
                    case BOOLEAN:
                        return !value;
                    case OVERLOADED_BOOLEAN:
                        return value === false;
                    case NUMERIC:
                        return isNaN(value);
                    case POSITIVE_NUMERIC:
                        return isNaN(value) || value < 1;
                }
            }
            return false;
        }
        function getPropertyInfo(name) {
            return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
            this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
            this.attributeName = attributeName;
            this.attributeNamespace = attributeNamespace;
            this.mustUseProperty = mustUseProperty;
            this.propertyName = name;
            this.type = type;
            this.sanitizeURL = sanitizeURL;
            this.removeEmptyString = removeEmptyString;
        } // When adding attributes to this list, be sure to also add them to
        // the `possibleStandardNames` module to ensure casing and incorrect
        // name warnings.
        var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.
        var reservedProps = [
            'children',
            'dangerouslySetInnerHTML',
            // elements (not just inputs). Now that ReactDOMInput assigns to the
            // defaultValue property -- do we need this?
            'defaultValue',
            'defaultChecked',
            'innerHTML',
            'suppressContentEditableWarning',
            'suppressHydrationWarning',
            'style'
        ];
        reservedProps.forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        }); // A few React string attributes have a different name.
        // This is a mapping from React prop names to the attribute names.
        [
            [
                'acceptCharset',
                'accept-charset'
            ],
            [
                'className',
                'class'
            ],
            [
                'htmlFor',
                'for'
            ],
            [
                'httpEquiv',
                'http-equiv'
            ]
        ].forEach(function(_ref) {
            var name = _ref[0], attributeName = _ref[1];
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        }); // These are "enumerated" HTML attributes that accept "true" and "false".
        // In React, we let users pass `true` and `false` even though technically
        // these aren't boolean attributes (they are coerced to strings).
        [
            'contentEditable',
            'draggable',
            'spellCheck',
            'value'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        }); // These are "enumerated" SVG attributes that accept "true" and "false".
        // In React, we let users pass `true` and `false` even though technically
        // these aren't boolean attributes (they are coerced to strings).
        // Since these are SVG attributes, their attribute names are case-sensitive.
        [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        }); // These are HTML boolean attributes.
        [
            'allowFullScreen',
            'async',
            // on the client side because the browsers are inconsistent. Instead we call focus().
            'autoFocus',
            'autoPlay',
            'controls',
            'default',
            'defer',
            'disabled',
            'disablePictureInPicture',
            'disableRemotePlayback',
            'formNoValidate',
            'hidden',
            'loop',
            'noModule',
            'noValidate',
            'ope