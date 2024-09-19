module.exports = {

"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-YSKACL7R.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useShortcut": ()=>useShortcut
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
function isPrintableCharacter(event) {
    const { key } = event;
    return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props = {}) {
    const { timeout = 300, preventDefault = ()=>true } = props;
    const [keys, setKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const flush = ()=>{
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };
    const clearKeysAfterDelay = ()=>{
        flush();
        timeoutRef.current = setTimeout(()=>{
            setKeys([]);
            timeoutRef.current = null;
        }, timeout);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>flush, []);
    function onKeyDown(fn) {
        return (event)=>{
            if (event.key === "Backspace") {
                const keysCopy = [
                    ...keys
                ];
                keysCopy.pop();
                setKeys(keysCopy);
                return;
            }
            if (isPrintableCharacter(event)) {
                const keysCopy = keys.concat(event.key);
                if (preventDefault(event)) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                setKeys(keysCopy);
                fn(keysCopy.join(""));
                clearKeysAfterDelay();
            }
        };
    }
    return onKeyDown;
}
;
 //# sourceMappingURL=chunk-YSKACL7R.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-BWUXSGSJ.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getNextItemFromSearch": ()=>getNextItemFromSearch
});
'use client';
// src/get-next-item-from-search.ts
function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
    if (searchString == null) {
        return currentItem;
    }
    if (!currentItem) {
        const foundItem = items.find((item)=>itemToString(item).toLowerCase().startsWith(searchString.toLowerCase()));
        return foundItem;
    }
    const matchingItems = items.filter((item)=>itemToString(item).toLowerCase().startsWith(searchString.toLowerCase()));
    if (matchingItems.length > 0) {
        let nextIndex;
        if (matchingItems.includes(currentItem)) {
            const currentIndex = matchingItems.indexOf(currentItem);
            nextIndex = currentIndex + 1;
            if (nextIndex === matchingItems.length) {
                nextIndex = 0;
            }
            return matchingItems[nextIndex];
        }
        nextIndex = items.indexOf(matchingItems[0]);
        return items[nextIndex];
    }
    return currentItem;
}
;
 //# sourceMappingURL=chunk-BWUXSGSJ.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuDescendantsProvider": ()=>MenuDescendantsProvider,
    "MenuProvider": ()=>MenuProvider,
    "useMenu": ()=>useMenu,
    "useMenuButton": ()=>useMenuButton,
    "useMenuContext": ()=>useMenuContext,
    "useMenuDescendant": ()=>useMenuDescendant,
    "useMenuDescendants": ()=>useMenuDescendants,
    "useMenuDescendantsContext": ()=>useMenuDescendantsContext,
    "useMenuItem": ()=>useMenuItem,
    "useMenuList": ()=>useMenuList,
    "useMenuOption": ()=>useMenuOption,
    "useMenuOptionGroup": ()=>useMenuOptionGroup,
    "useMenuPositioner": ()=>useMenuPositioner,
    "useMenuState": ()=>useMenuState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$YSKACL7R$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-YSKACL7R.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$BWUXSGSJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-BWUXSGSJ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$clickable$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$clickable$2f$dist$2f$chunk$2d$AXLEE3EK$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+clickable@2.1.0_react@18.3.1/node_modules/@chakra-ui/clickable/dist/chunk-AXLEE3EK.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$descendant$40$3$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$descendant$2f$dist$2f$chunk$2d$OCNORRQU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+descendant@3.1.0_react@18.3.1/node_modules/@chakra-ui/descendant/dist/chunk-OCNORRQU.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$focus$2d$effect$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$focus$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-use-focus-effect@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-focus-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$popper$40$3$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$popper$2f$dist$2f$chunk$2d$LUYFNC5G$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+popper@3.1.0_react@18.3.1/node_modules/@chakra-ui/popper/dist/chunk-LUYFNC5G.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$disclosure$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-use-disclosure@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-disclosure/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$outside$2d$click$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$outside$2d$click$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-use-outside-click@2.2.0_react@18.3.1/node_modules/@chakra-ui/react-use-outside-click/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$animation$2d$state$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$animation$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-use-animation-state@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-animation-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$context$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-context@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$children$2d$utils$40$2$2e$0$2e$6_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$children$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-children-utils@2.0.6_react@18.3.1/node_modules/@chakra-ui/react-children-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$controllable$2d$state$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-use-controllable-state@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$update$2d$effect$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$update$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-use-update-effect@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$merge$2d$refs$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$merge$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-use-merge-refs@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$lazy$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$lazy$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+lazy-utils@2.0.5/node_modules/@chakra-ui/lazy-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var [MenuDescendantsProvider, useMenuDescendantsContext, useMenuDescendants, useMenuDescendant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$descendant$40$3$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$descendant$2f$dist$2f$chunk$2d$OCNORRQU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDescendantContext"])();
var [MenuProvider, useMenuContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$context$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    strict: false,
    name: "MenuContext"
});
function useIds(idProp, ...prefixes) {
    const reactId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const id = idProp || reactId;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return prefixes.map((prefix)=>`${prefix}-${id}`);
    }, [
        id,
        prefixes
    ]);
}
function getOwnerDocument(node) {
    var _a;
    return (_a = node == null ? void 0 : node.ownerDocument) != null ? _a : document;
}
function isActiveElement(element) {
    const doc = getOwnerDocument(element);
    return doc.activeElement === element;
}
function useMenu(props = {}) {
    const { id, closeOnSelect = true, closeOnBlur = true, initialFocusRef, autoSelect = true, isLazy, isOpen: isOpenProp, defaultIsOpen, onClose: onCloseProp, onOpen: onOpenProp, placement = "bottom-start", lazyBehavior = "unmount", direction, computePositionOnMount = false, ...popperProps } = props;
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const descendants = useMenuDescendants();
    const focusMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        requestAnimationFrame(()=>{
            var _a;
            (_a = menuRef.current) == null ? void 0 : _a.focus({
                preventScroll: false
            });
        });
    }, []);
    const focusFirstItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const id2 = setTimeout(()=>{
            var _a;
            if (initialFocusRef) {
                (_a = initialFocusRef.current) == null ? void 0 : _a.focus();
            } else {
                const first = descendants.firstEnabled();
                if (first) setFocusedIndex(first.index);
            }
        });
        timeoutIds.current.add(id2);
    }, [
        descendants,
        initialFocusRef
    ]);
    const focusLastItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const id2 = setTimeout(()=>{
            const last = descendants.lastEnabled();
            if (last) setFocusedIndex(last.index);
        });
        timeoutIds.current.add(id2);
    }, [
        descendants
    ]);
    const onOpenInternal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        onOpenProp == null ? void 0 : onOpenProp();
        if (autoSelect) {
            focusFirstItem();
        } else {
            focusMenu();
        }
    }, [
        autoSelect,
        focusFirstItem,
        focusMenu,
        onOpenProp
    ]);
    const { isOpen, onOpen, onClose, onToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$disclosure$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisclosure"])({
        isOpen: isOpenProp,
        defaultIsOpen,
        onClose: onCloseProp,
        onOpen: onOpenInternal
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$outside$2d$click$40$2$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$outside$2d$click$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOutsideClick"])({
        enabled: isOpen && closeOnBlur,
        ref: menuRef,
        handler: (event)=>{
            var _a;
            if (!((_a = buttonRef.current) == null ? void 0 : _a.contains(event.target))) {
                onClose();
            }
        }
    });
    const popper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$popper$40$3$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$popper$2f$dist$2f$chunk$2d$LUYFNC5G$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopper"])({
        ...popperProps,
        enabled: isOpen || computePositionOnMount,
        placement,
        direction
    });
    const [focusedIndex, setFocusedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$update$2d$effect$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$update$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUpdateEffect"])(()=>{
        if (!isOpen) {
            setFocusedIndex(-1);
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$focus$2d$effect$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$focus$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusOnHide"])(menuRef, {
        focusRef: buttonRef,
        visible: isOpen,
        shouldFocus: true
    });
    const animationState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$animation$2d$state$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$animation$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationState"])({
        isOpen,
        ref: menuRef
    });
    const [buttonId, menuId] = useIds(id, `menu-button`, `menu-list`);
    const openAndFocusMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        onOpen();
        focusMenu();
    }, [
        onOpen,
        focusMenu
    ]);
    const timeoutIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(/* @__PURE__ */ new Set([]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ids = timeoutIds.current;
        return ()=>{
            ids.forEach((id2)=>clearTimeout(id2));
            ids.clear();
        };
    }, []);
    const openAndFocusFirstItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        onOpen();
        focusFirstItem();
    }, [
        focusFirstItem,
        onOpen
    ]);
    const openAndFocusLastItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        onOpen();
        focusLastItem();
    }, [
        onOpen,
        focusLastItem
    ]);
    const refocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        var _a, _b;
        const doc = getOwnerDocument(menuRef.current);
        const hasFocusWithin = (_a = menuRef.current) == null ? void 0 : _a.contains(doc.activeElement);
        const shouldRefocus = isOpen && !hasFocusWithin;
        if (!shouldRefocus) return;
        const node = (_b = descendants.item(focusedIndex)) == null ? void 0 : _b.node;
        node == null ? void 0 : node.focus({
            preventScroll: true
        });
    }, [
        isOpen,
        focusedIndex,
        descendants
    ]);
    const rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return {
        openAndFocusMenu,
        openAndFocusFirstItem,
        openAndFocusLastItem,
        onTransitionEnd: refocus,
        unstable__animationState: animationState,
        descendants,
        popper,
        buttonId,
        menuId,
        forceUpdate: popper.forceUpdate,
        orientation: "vertical",
        isOpen,
        onToggle,
        onOpen,
        onClose,
        menuRef,
        buttonRef,
        focusedIndex,
        closeOnSelect,
        closeOnBlur,
        autoSelect,
        setFocusedIndex,
        isLazy,
        lazyBehavior,
        initialFocusRef,
        rafId
    };
}
function useMenuButton(props = {}, externalRef = null) {
    const menu = useMenuContext();
    const { onToggle, popper, openAndFocusFirstItem, openAndFocusLastItem } = menu;
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const eventKey = event.key;
        const keyMap = {
            Enter: openAndFocusFirstItem,
            ArrowDown: openAndFocusFirstItem,
            ArrowUp: openAndFocusLastItem
        };
        const action = keyMap[eventKey];
        if (action) {
            event.preventDefault();
            event.stopPropagation();
            action(event);
        }
    }, [
        openAndFocusFirstItem,
        openAndFocusLastItem
    ]);
    return {
        ...props,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$merge$2d$refs$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$merge$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRefs"])(menu.buttonRef, externalRef, popper.referenceRef),
        id: menu.buttonId,
        "data-active": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataAttr"])(menu.isOpen),
        "aria-expanded": menu.isOpen,
        "aria-haspopup": "menu",
        "aria-controls": menu.menuId,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callAllHandlers"])(props.onClick, onToggle),
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callAllHandlers"])(props.onKeyDown, onKeyDown)
    };
}
function isTargetMenuItem(target) {
    var _a;
    return isHTMLElement(target) && !!((_a = target == null ? void 0 : target.getAttribute("role")) == null ? void 0 : _a.startsWith("menuitem"));
}
function useMenuList(props = {}, ref = null) {
    const menu = useMenuContext();
    if (!menu) {
        throw new Error(`useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>`);
    }
    const { focusedIndex, setFocusedIndex, menuRef, isOpen, onClose, menuId, isLazy, lazyBehavior, unstable__animationState: animated } = menu;
    const descendants = useMenuDescendantsContext();
    const createTypeaheadHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$YSKACL7R$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useShortcut"])({
        preventDefault: (event)=>event.key !== " " && isTargetMenuItem(event.target)
    });
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (!event.currentTarget.contains(event.target)) return;
        const eventKey = event.key;
        const keyMap = {
            Tab: (event2)=>event2.preventDefault(),
            Escape: onClose,
            ArrowDown: ()=>{
                const next = descendants.nextEnabled(focusedIndex);
                if (next) setFocusedIndex(next.index);
            },
            ArrowUp: ()=>{
                const prev = descendants.prevEnabled(focusedIndex);
                if (prev) setFocusedIndex(prev.index);
            }
        };
        const fn = keyMap[eventKey];
        if (fn) {
            event.preventDefault();
            fn(event);
            return;
        }
        const onTypeahead = createTypeaheadHandler((character)=>{
            const nextItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$BWUXSGSJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextItemFromSearch"])(descendants.values(), character, (item)=>{
                var _a, _b;
                return (_b = (_a = item == null ? void 0 : item.node) == null ? void 0 : _a.textContent) != null ? _b : "";
            }, descendants.item(focusedIndex));
            if (nextItem) {
                const index = descendants.indexOf(nextItem.node);
                setFocusedIndex(index);
            }
        });
        if (isTargetMenuItem(event.target)) {
            onTypeahead(event);
        }
    }, [
        descendants,
        focusedIndex,
        createTypeaheadHandler,
        onClose,
        setFocusedIndex
    ]);
    const hasBeenOpened = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    if (isOpen) {
        hasBeenOpened.current = true;
    }
    const shouldRenderChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$lazy$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$lazy$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazyDisclosure"])({
        wasSelected: hasBeenOpened.current,
        enabled: isLazy,
        mode: lazyBehavior,
        isSelected: animated.present
    });
    return {
        ...props,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$merge$2d$refs$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$merge$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRefs"])(menuRef, ref),
        children: shouldRenderChildren ? props.children : null,
        tabIndex: -1,
        role: "menu",
        id: menuId,
        style: {
            ...props.style,
            transformOrigin: "var(--popper-transform-origin)"
        },
        "aria-orientation": "vertical",
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callAllHandlers"])(props.onKeyDown, onKeyDown)
    };
}
function useMenuPositioner(props = {}) {
    const { popper, isOpen } = useMenuContext();
    return popper.getPopperProps({
        ...props,
        style: {
            visibility: isOpen ? "visible" : "hidden",
            ...props.style
        }
    });
}
function useMenuItem(props = {}, externalRef = null) {
    const { onMouseEnter: onMouseEnterProp, onMouseMove: onMouseMoveProp, onMouseLeave: onMouseLeaveProp, onClick: onClickProp, onFocus: onFocusProp, isDisabled, isFocusable, closeOnSelect, type: typeProp, ...htmlProps } = props;
    const menu = useMenuContext();
    const { setFocusedIndex, focusedIndex, closeOnSelect: menuCloseOnSelect, onClose, menuRef, isOpen, menuId, rafId } = menu;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = `${menuId}-menuitem-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])()}`;
    const { index, register } = useMenuDescendant({
        disabled: isDisabled && !isFocusable
    });
    const onMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
        if (isDisabled) return;
        setFocusedIndex(index);
    }, [
        setFocusedIndex,
        index,
        isDisabled,
        onMouseEnterProp
    ]);
    const onMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
        if (ref.current && !isActiveElement(ref.current)) {
            onMouseEnter(event);
        }
    }, [
        onMouseEnter,
        onMouseMoveProp
    ]);
    const onMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
        if (isDisabled) return;
        setFocusedIndex(-1);
    }, [
        setFocusedIndex,
        isDisabled,
        onMouseLeaveProp
    ]);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        onClickProp == null ? void 0 : onClickProp(event);
        if (!isTargetMenuItem(event.currentTarget)) return;
        if (closeOnSelect != null ? closeOnSelect : menuCloseOnSelect) {
            onClose();
        }
    }, [
        onClose,
        onClickProp,
        menuCloseOnSelect,
        closeOnSelect
    ]);
    const onFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        onFocusProp == null ? void 0 : onFocusProp(event);
        setFocusedIndex(index);
    }, [
        setFocusedIndex,
        onFocusProp,
        index
    ]);
    const isFocused = index === focusedIndex;
    const trulyDisabled = isDisabled && !isFocusable;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$update$2d$effect$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$update$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUpdateEffect"])(()=>{
        if (!isOpen) return;
        if (isFocused && !trulyDisabled && ref.current) {
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
            rafId.current = requestAnimationFrame(()=>{
                var _a;
                (_a = ref.current) == null ? void 0 : _a.focus({
                    preventScroll: true
                });
                rafId.current = null;
            });
        } else if (menuRef.current && !isActiveElement(menuRef.current)) {
            menuRef.current.focus({
                preventScroll: true
            });
        }
        return ()=>{
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [
        isFocused,
        trulyDisabled,
        menuRef,
        isOpen
    ]);
    const clickableProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$clickable$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$clickable$2f$dist$2f$chunk$2d$AXLEE3EK$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClickable"])({
        onClick,
        onFocus,
        onMouseEnter,
        onMouseMove,
        onMouseLeave,
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$merge$2d$refs$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$merge$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRefs"])(register, ref, externalRef),
        isDisabled,
        isFocusable
    });
    return {
        ...htmlProps,
        ...clickableProps,
        type: typeProp != null ? typeProp : clickableProps.type,
        id,
        role: "menuitem",
        tabIndex: isFocused ? 0 : -1
    };
}
function useMenuOption(props = {}, ref = null) {
    const { type = "radio", isChecked, ...rest } = props;
    const ownProps = useMenuItem(rest, ref);
    return {
        ...ownProps,
        role: `menuitem${type}`,
        "aria-checked": isChecked
    };
}
function useMenuOptionGroup(props = {}) {
    const { children, type = "radio", value: valueProp, defaultValue, onChange: onChangeProp, ...htmlProps } = props;
    const isRadio = type === "radio";
    const fallback = isRadio ? "" : [];
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$use$2d$controllable$2d$state$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        defaultValue: defaultValue != null ? defaultValue : fallback,
        value: valueProp,
        onChange: onChangeProp
    });
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectedValue)=>{
        if (type === "radio" && typeof value === "string") {
            setValue(selectedValue);
        }
        if (type === "checkbox" && Array.isArray(value)) {
            const nextValue = value.includes(selectedValue) ? value.filter((item)=>item !== selectedValue) : value.concat(selectedValue);
            setValue(nextValue);
        }
    }, [
        value,
        setValue,
        type
    ]);
    const validChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$children$2d$utils$40$2$2e$0$2e$6_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$children$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValidChildren"])(children);
    const clones = validChildren.map((child)=>{
        if (child.type.id !== "MenuItemOption") return child;
        const onClick = (event)=>{
            var _a, _b;
            onChange(child.props.value);
            (_b = (_a = child.props).onClick) == null ? void 0 : _b.call(_a, event);
        };
        const isChecked = type === "radio" ? child.props.value === value : value.includes(child.props.value);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
            type,
            onClick,
            isChecked
        });
    });
    return {
        ...htmlProps,
        children: clones
    };
}
function useMenuState() {
    const { isOpen, onClose } = useMenuContext();
    return {
        isOpen,
        onClose
    };
}
function isHTMLElement(el) {
    var _a;
    if (!isElement(el)) return false;
    const win = (_a = el.ownerDocument.defaultView) != null ? _a : window;
    return el instanceof win.HTMLElement;
}
function isElement(el) {
    return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
;
 //# sourceMappingURL=chunk-SANI5SUM.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Menu": ()=>Menu,
    "useMenuStyles": ()=>useMenuStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$context$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+react-context@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$styled$2d$system$40$2$2e$9$2e$2$2f$node_modules$2f40$chakra$2d$ui$2f$styled$2d$system$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+styled-system@2.9.2/node_modules/@chakra-ui/styled-system/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$DMO4EI7P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$UIGT7YZF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
var [MenuStylesProvider, useMenuStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$react$2d$context$40$2$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$chakra$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    name: `MenuStylesContext`,
    errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
var Menu = (props)=>{
    const { children } = props;
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$DMO4EI7P$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMultiStyleConfig"])("Menu", props);
    const ownProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$styled$2d$system$40$2$2e$9$2e$2$2f$node_modules$2f40$chakra$2d$ui$2f$styled$2d$system$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["omitThemingProps"])(props);
    const { direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$UIGT7YZF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const { descendants, ...ctx } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenu"])({
        ...ownProps,
        direction
    });
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ctx, [
        ctx
    ]);
    const { isOpen, onClose, forceUpdate } = context;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuDescendantsProvider"], {
        value: descendants,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuProvider"], {
            value: context,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuStylesProvider, {
                value: styles,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runIfFn"])(children, {
                    isOpen,
                    onClose,
                    forceUpdate
                })
            })
        })
    });
};
Menu.displayName = "Menu";
;
 //# sourceMappingURL=chunk-UZJ3TPNQ.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-Z3VR2BFQ.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuButton": ()=>MenuButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
var StyledMenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuStyles"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chakra"].button, {
        ref,
        ...props,
        __css: {
            display: "inline-flex",
            appearance: "none",
            alignItems: "center",
            outline: 0,
            ...styles.button
        }
    });
});
var MenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { children, as: As, ...rest } = props;
    const buttonProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuButton"])(rest, ref);
    const Element = As || StyledMenuButton;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Element, {
        ...buttonProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("chakra-menu__menu-button", props.className),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chakra"].span, {
            __css: {
                pointerEvents: "none",
                flex: "1 1 auto",
                minW: 0
            },
            children: props.children
        })
    });
});
MenuButton.displayName = "MenuButton";
;
 //# sourceMappingURL=chunk-Z3VR2BFQ.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-6MF6NSK4.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuList": ()=>MenuList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$5$2e$4_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/framer-motion@11.5.4_@emotion+is-prop-valid@1.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
var motionVariants = {
    enter: {
        visibility: "visible",
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        }
    },
    exit: {
        transitionEnd: {
            visibility: "hidden"
        },
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.1,
            easings: "easeOut"
        }
    }
};
var MenuTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chakra"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$5$2e$4_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div);
var MenuList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function MenuList2(props, ref) {
    var _a, _b;
    const { rootProps, motionProps, ...rest } = props;
    const { isOpen, onTransitionEnd, unstable__animationState: animated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuContext"])();
    const listProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuList"])(rest, ref);
    const positionerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuPositioner"])(rootProps);
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuStyles"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chakra"].div, {
        ...positionerProps,
        __css: {
            zIndex: (_b = props.zIndex) != null ? _b : (_a = styles.list) == null ? void 0 : _a.zIndex
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuTransition, {
            variants: motionVariants,
            initial: false,
            animate: isOpen ? "enter" : "exit",
            __css: {
                outline: 0,
                ...styles.list
            },
            ...motionProps,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("chakra-menu__menu-list", listProps.className),
            ...listProps,
            onUpdate: onTransitionEnd,
            onAnimationComplete: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callAll"])(animated.onComplete, listProps.onAnimationComplete)
        })
    });
});
MenuList.displayName = "MenuList";
;
 //# sourceMappingURL=chunk-6MF6NSK4.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-4CNGLKYX.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuCommand": ()=>MenuCommand
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
var MenuCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuStyles"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chakra"].span, {
        ref,
        ...props,
        __css: styles.command,
        className: "chakra-menu__command"
    });
});
MenuCommand.displayName = "MenuCommand";
;
 //# sourceMappingURL=chunk-4CNGLKYX.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-M565QO7N.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StyledMenuItem": ()=>StyledMenuItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
var StyledMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { type, ...rest } = props;
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuStyles"])();
    const btnType = rest.as || type ? type != null ? type : void 0 : "button";
    const buttonStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            textDecoration: "none",
            color: "inherit",
            userSelect: "none",
            display: "flex",
            width: "100%",
            alignItems: "center",
            textAlign: "start",
            flex: "0 0 auto",
            outline: 0,
            ...styles.item
        }), [
        styles.item
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chakra"].button, {
        ref,
        type: btnType,
        ...rest,
        __css: buttonStyles
    });
});
;
 //# sourceMappingURL=chunk-M565QO7N.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-HB6KBUMZ.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuIcon": ()=>MenuIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
var MenuIcon = (props)=>{
    const { className, children, ...rest } = props;
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$UZJ3TPNQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuStyles"])();
    const child = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    const clone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
        focusable: "false",
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("chakra-menu__icon", child.props.className)
    }) : null;
    const _className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("chakra-menu__icon-wrapper", className);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZHQNHOQS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chakra"].span, {
        className: _className,
        ...rest,
        __css: styles.icon,
        children: clone
    });
};
MenuIcon.displayName = "MenuIcon";
;
 //# sourceMappingURL=chunk-HB6KBUMZ.mjs.map

})()),
"[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-5TWLKMYI.mjs [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuItem": ()=>MenuItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$4CNGLKYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-4CNGLKYX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$M565QO7N$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-M565QO7N.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$HB6KBUMZ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-HB6KBUMZ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+menu@2.2.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_reac_srbylykfqcwy7zx7jpibge6zhi/node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@emotion+sty_n24egcnexhql2u7evdg5t5zb6u/node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@chakra-ui+shared-utils@2.0.5/node_modules/@chakra-ui/shared-utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
var MenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_react$40$18$2e$3$2e$1_$5f40$emotion$2b$sty_n24egcnexhql2u7evdg5t5zb6u$2f$node_modules$2f40$chakra$2d$ui$2f$system$2f$dist$2f$chunk$2d$ZJJGQIVY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { icon, iconSpacing = "0.75rem", command, commandSpacing = "0.75rem", children, ...rest } = props;
    const menuitemProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$SANI5SUM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMenuItem"])(rest, ref);
    const shouldWrap = icon || command;
    const _children = shouldWrap ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        style: {
            pointerEvents: "none",
            flex: 1
        },
        children
    }) : children;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$M565QO7N$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledMenuItem"], {
        ...menuitemProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$shared$2d$utils$40$2$2e$0$2e$5$2f$node_modules$2f40$chakra$2d$ui$2f$shared$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("chakra-menu__menuitem", menuitemProps.className),
        children: [
            icon && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$HB6KBUMZ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuIcon"], {
                fontSize: "0.8em",
                marginEnd: iconSpacing,
                children: icon
            }),
            _children,
            command && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$chakra$2d$ui$2b$menu$40$2$2e$2$2e$1_$40$chakra$2d$ui$2b$system$40$2$2e$6$2e$2_$40$emotion$2b$react$40$11$2e$13$2e$3_$40$types$2b$react$40$18$2e$3$2e$3_reac_srbylykfqcwy7zx7jpibge6zhi$2f$node_modules$2f40$chakra$2d$ui$2f$menu$2f$dist$2f$chunk$2d$4CNGLKYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuCommand"], {
                marginStart: commandSpacing,
                children: command
            })
        ]
    });
});
MenuItem.displayName = "MenuItem";
;
 //# sourceMappingURL=chunk-5TWLKMYI.mjs.map

})()),

};

//# sourceMappingURL=ade25_%40chakra-ui_menu_dist_f21493._.js.map