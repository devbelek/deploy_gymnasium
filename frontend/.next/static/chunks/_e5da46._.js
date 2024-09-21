(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_e5da46._.js", {

"[project]/src/redux/api/teachers/index.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useGetDetTeacherQuery": ()=>useGetDetTeacherQuery,
    "useGetTeachersQuery": ()=>useGetTeachersQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ENDPOINTS = ("TURBOPACK compile-time value", "api");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].injectEndpoints({
    endpoints: (build)=>({
            getTeachers: build.query({
                query: ()=>({
                        url: `${ENDPOINTS}/teachers/`,
                        method: "GET"
                    }),
                providesTags: [
                    "teachers"
                ]
            }),
            getDetTeacher: build.query({
                query: (id)=>({
                        url: `${ENDPOINTS}/teachers/${id}`,
                        method: "GET"
                    })
            })
        })
});
const { useGetTeachersQuery, useGetDetTeacherQuery } = api;

})()),
"[project]/src/appPages/site/components/pages/TeachersPage.module.scss.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "content": "TeachersPage-module-scss-module__ujt5Ea__content",
});

})()),
"[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.module.scss.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "TeachersMainContent": "TeachersMainContent-module-scss-module__G-T1La__TeachersMainContent",
  "content": "TeachersMainContent-module-scss-module__G-T1La__content",
  "head": "TeachersMainContent-module-scss-module__G-T1La__head",
  "teacher": "TeachersMainContent-module-scss-module__G-T1La__teacher",
  "teacher_cards": "TeachersMainContent-module-scss-module__G-T1La__teacher_cards",
});

})()),
"[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$teachers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/api/teachers/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const TeachersMainContent = ()=>{
    _s();
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$teachers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetTeachersQuery"])();
    console.log("🚀 ~ TeachersMainContent ~ data:", data);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Error loading data"
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].TeachersMainContent,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                ",",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].head,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Все учителя"
                                }, void 0, false, {
                                    fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                    fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teacher_cards,
                            children: data?.map((teacher)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teacher,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onClick: ()=>router.push(`/teachers/${teacher.id}`),
                                            src: teacher?.image,
                                            alt: "img",
                                            width: 700,
                                            height: 500,
                                            priority: true,
                                            quality: 70
                                        }, void 0, false, {
                                            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: [
                                                teacher.surname,
                                                " ",
                                                teacher.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this),
                                                teacher.last_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                width: "100%",
                                                maxWidth: "230px"
                                            },
                                            children: teacher.subject
                                        }, void 0, false, {
                                            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, teacher.id, true, {
                                    fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_s(TeachersMainContent, "sRa5xGW2fXuP7eNfvr/pWM1zPl0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$teachers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetTeachersQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TeachersMainContent;
const __TURBOPACK__default__export__ = TeachersMainContent;
var _c;
__turbopack_refresh__.register(_c, "TeachersMainContent");

})()),
"[project]/src/appPages/site/components/pages/TeachersPage.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$teachers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/api/teachers/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$TeachersPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/appPages/site/components/pages/TeachersPage.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/appPages/site/components/pages/teachers/TeachersMainContent/TeachersMainContent.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const TeachersPage = ()=>{
    _s();
    const { data, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$teachers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetTeachersQuery"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/TeachersPage.tsx",
            lineNumber: 11,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Error loading data"
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/TeachersPage.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$TeachersPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$appPages$2f$site$2f$components$2f$pages$2f$teachers$2f$TeachersMainContent$2f$TeachersMainContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/appPages/site/components/pages/TeachersPage.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/appPages/site/components/pages/TeachersPage.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(TeachersPage, "zZ4rvxgStB6sPwXTurDznqCtehA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$api$2f$teachers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetTeachersQuery"]
    ];
});
_c = TeachersPage;
const __TURBOPACK__default__export__ = TeachersPage;
var _c;
__turbopack_refresh__.register(_c, "TeachersPage");

})()),
"[project]/src/app/(site)/teachers/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
"[project]/node_modules/.pnpm/react-fast-compare@3.2.2/node_modules/react-fast-compare/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */ var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;
// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js
function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.3
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        // START: Modifications:
        // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
        //    to co-exist with es5.
        // 2. Replace `for of` with es5 compliant iteration using `for`.
        //    Basically, take:
        //
        //    ```js
        //    for (i of a.entries())
        //      if (!b.has(i[0])) return false;
        //    ```
        //
        //    ... and convert to:
        //
        //    ```js
        //    it = a.entries();
        //    while (!(i = it.next()).done)
        //      if (!b.has(i.value[0])) return false;
        //    ```
        //
        //    **Note**: `i` access switches to `i.value`.
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!equal(i.value[1], b.get(i.value[0]))) return false;
            return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return false;
            it = a.entries();
            while(!(i = it.next()).done)if (!b.has(i.value[0])) return false;
            return true;
        }
        // END: Modifications
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        // START: Modifications:
        // Apply guards for `Object.create(null)` handling. See:
        // - https://github.com/FormidableLabs/react-fast-compare/issues/64
        // - https://github.com/epoberezkin/fast-deep-equal/issues/49
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
        // END: Modifications
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        // END: fast-deep-equal
        // START: react-fast-compare
        // custom handling for DOM elements
        if (hasElementType && a instanceof Element) return false;
        // custom handling for React/Preact
        for(i = length; i-- !== 0;){
            if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
                continue;
            }
            // all other properties should be traversed as usual
            if (!equal(a[keys[i]], b[keys[i]])) return false;
        }
        // END: react-fast-compare
        // START: fast-deep-equal
        return true;
    }
    return a !== a && b !== b;
}
// end fast-deep-equal
module.exports = function isEqual(a, b) {
    try {
        return equal(a, b);
    } catch (error) {
        if ((error.message || '').match(/stack|recursion/i)) {
            // warn on circular references, don't crash
            // browsers give this different errors name and messages:
            // chrome/safari: "RangeError", "Maximum call stack size exceeded"
            // firefox: "InternalError", too much recursion"
            // edge: "Error", "Out of stack space"
            console.warn('react-fast-compare cannot handle circular refs');
            return false;
        }
        // some other error. we should definitely know about these
        throw error;
    }
};

}.call(this) }),
"[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/utils.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Enhanced random function, selects a random value between a minimum and maximum. If the values provided are both
 * integers then the number returned will be an integer, otherwise the return number will be a decimal.
 * @param min The minimum value
 * @param max The maximum value
 */ __turbopack_esm__({
    "getSize": ()=>getSize,
    "lerp": ()=>lerp,
    "random": ()=>random,
    "randomElement": ()=>randomElement,
    "twoPi": ()=>twoPi
});
function random(min, max) {
    const randomNumber = Math.random() * (max - min + 1) + min;
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return randomNumber;
    } else {
        return Math.floor(randomNumber);
    }
}
function lerp(start, end, normal) {
    return (1 - normal) * start + normal * end;
}
function randomElement(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}
function getSize(element) {
    if (!element) return {
        height: 0,
        width: 0
    };
    return {
        height: element.offsetHeight,
        width: element.offsetWidth
    };
}
const twoPi = Math.PI * 2; //# sourceMappingURL=utils.js.map

})()),
"[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/Snowflake.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "defaultConfig": ()=>defaultConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$fast$2d$compare$40$3$2e$2$2e$2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-fast-compare@3.2.2/node_modules/react-fast-compare/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/utils.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const defaultConfig = {
    color: '#dee4fd',
    radius: [
        0.5,
        3.0
    ],
    speed: [
        1.0,
        3.0
    ],
    wind: [
        -0.5,
        2.0
    ],
    changeFrequency: 200,
    rotationSpeed: [
        -1.0,
        1.0
    ]
};
/**
 * An individual snowflake that will update it's location every call to `update`
 * and draw itself to the canvas every call to `draw`.
 */ class Snowflake {
    /**
     * A utility function to create a collection of snowflakes
     * @param canvas The canvas element
     * @param amount The number of snowflakes
     * @param config The configuration for each snowflake
     */ static createSnowflakes(canvas, amount, config) {
        if (!canvas) return [];
        const snowflakes = [];
        for(let i = 0; i < amount; i++){
            snowflakes.push(new Snowflake(canvas, config));
        }
        return snowflakes;
    }
    constructor(canvas, config = {}){
        // Set custom config
        this.updateConfig(config);
        // Setting initial parameters
        const { radius, wind, speed, rotationSpeed } = this.config;
        this.params = {
            x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(0, canvas.offsetWidth),
            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(-canvas.offsetHeight, 0),
            rotation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(0, 360),
            radius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...radius),
            speed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...speed),
            wind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...wind),
            rotationSpeed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...rotationSpeed),
            nextSpeed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...wind),
            nextWind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...speed),
            nextRotationSpeed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...rotationSpeed)
        };
        this.framesSinceLastUpdate = 0;
    }
    selectImage() {
        if (this.config.images && this.config.images.length > 0) {
            this.image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomElement"])(this.config.images);
        } else {
            this.image = undefined;
        }
    }
    updateConfig(config) {
        const previousConfig = this.config;
        this.config = {
            ...defaultConfig,
            ...config
        };
        this.config.changeFrequency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(this.config.changeFrequency, this.config.changeFrequency * 1.5);
        // Update the radius if the config has changed, it won't gradually update on it's own
        if (this.params && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$fast$2d$compare$40$3$2e$2$2e$2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.config.radius, previousConfig === null || previousConfig === void 0 ? void 0 : previousConfig.radius)) {
            this.params.radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...this.config.radius);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$fast$2d$compare$40$3$2e$2$2e$2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.config.images, previousConfig === null || previousConfig === void 0 ? void 0 : previousConfig.images)) {
            this.selectImage();
        }
    }
    updateTargetParams() {
        this.params.nextSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...this.config.speed);
        this.params.nextWind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...this.config.wind);
        if (this.image) {
            this.params.nextRotationSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(...this.config.rotationSpeed);
        }
    }
    update(offsetWidth, offsetHeight, framesPassed = 1) {
        const { x, y, rotation, rotationSpeed, nextRotationSpeed, wind, speed, nextWind, nextSpeed, radius } = this.params;
        // Update current location, wrapping around if going off the canvas
        this.params.x = (x + wind * framesPassed) % (offsetWidth + radius * 2);
        if (this.params.x > offsetWidth + radius) this.params.x = -radius;
        this.params.y = (y + speed * framesPassed) % (offsetHeight + radius * 2);
        if (this.params.y > offsetHeight + radius) this.params.y = -radius;
        // Apply rotation
        if (this.image) {
            this.params.rotation = (rotation + rotationSpeed) % 360;
        }
        // Update the wind, speed and rotation towards the desired values
        this.params.speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(speed, nextSpeed, 0.01);
        this.params.wind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(wind, nextWind, 0.01);
        this.params.rotationSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(rotationSpeed, nextRotationSpeed, 0.01);
        if (this.framesSinceLastUpdate++ > this.config.changeFrequency) {
            this.updateTargetParams();
            this.framesSinceLastUpdate = 0;
        }
    }
    getImageOffscreenCanvas(image, size) {
        var _a, _b;
        if (image instanceof HTMLImageElement && image.loading) return image;
        let sizes = Snowflake.offscreenCanvases.get(image);
        if (!sizes) {
            sizes = {};
            Snowflake.offscreenCanvases.set(image, sizes);
        }
        if (!(size in sizes)) {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            (_a = canvas.getContext('2d')) === null || _a === void 0 ? void 0 : _a.drawImage(image, 0, 0, size, size);
            sizes[size] = canvas;
        }
        return (_b = sizes[size]) !== null && _b !== void 0 ? _b : image;
    }
    /**
     * Draws a circular snowflake to the canvas.
     *
     * This method should only be called if our config does not have images.
     *
     * This method assumes that a path has already been started on the canvas.
     * `ctx.beginPath()` should be called before calling this method.
     *
     * After calling this method, the fillStyle should be set to the snowflake's
     * color and `ctx.fill()` should be called to fill the snowflake.
     *
     * Calling `ctx.fill()` after multiple snowflakes have had `drawCircle` called
     * will render all of the snowflakes since the last call to `ctx.beginPath()`.
     *
     * @param ctx The canvas context to draw to
     */ drawCircle(ctx) {
        ctx.moveTo(this.params.x, this.params.y);
        ctx.arc(this.params.x, this.params.y, this.params.radius, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twoPi"]);
    }
    /**
     * Draws an image-based snowflake to the canvas.
     *
     * This method should only be called if our config has images.
     *
     * @param ctx The canvas context to draw to
     */ drawImage(ctx) {
        const { x, y, rotation, radius } = this.params;
        const radian = rotation * Math.PI / 180;
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        // Translate to the location that we will be drawing the snowflake, including any rotation that needs to be applied
        // The arguments for setTransform are: a, b, c, d, e, f
        // a (scaleX), b (skewY), c (skewX), d (scaleY), e (translateX), f (translateY)
        ctx.setTransform(cos, sin, -sin, cos, x, y);
        // Draw the image with the center of the image at the center of the current location
        const image = this.getImageOffscreenCanvas(this.image, radius);
        ctx.drawImage(image, -(radius / 2), -(radius / 2), radius, radius);
    }
}
Snowflake.offscreenCanvases = new WeakMap();
const __TURBOPACK__default__export__ = Snowflake;
 //# sourceMappingURL=Snowflake.js.map

})()),
"[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/config.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "snowfallBaseStyle": ()=>snowfallBaseStyle,
    "targetFrameTime": ()=>targetFrameTime
});
const snowfallBaseStyle = {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
};
const targetFrameTime = 1000 / 60; //# sourceMappingURL=config.js.map

})()),
"[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/SnowfallCanvas.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SnowfallCanvas": ()=>SnowfallCanvas,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/Snowflake.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/config.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _SnowfallCanvas_ctx, _SnowfallCanvas_canvas;
;
;
class SnowfallCanvas {
    get ctx() {
        return __classPrivateFieldGet(this, _SnowfallCanvas_ctx, "f");
    }
    get canvas() {
        return __classPrivateFieldGet(this, _SnowfallCanvas_canvas, "f");
    }
    set canvas(canvas) {
        __classPrivateFieldSet(this, _SnowfallCanvas_canvas, canvas, "f");
        __classPrivateFieldSet(this, _SnowfallCanvas_ctx, canvas.getContext('2d'), "f");
    }
    constructor(canvas, config){
        this.lastUpdate = Date.now();
        this.snowflakes = [];
        _SnowfallCanvas_ctx.set(this, void 0);
        _SnowfallCanvas_canvas.set(this, void 0);
        __classPrivateFieldSet(this, _SnowfallCanvas_canvas, canvas, "f");
        __classPrivateFieldSet(this, _SnowfallCanvas_ctx, canvas.getContext('2d'), "f");
        this.config = {
            snowflakeCount: 150,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"],
            ...config
        };
        this.snowflakes = [];
        this.snowflakes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createSnowflakes(canvas, config.snowflakeCount || 150, config);
        this.play();
    }
    /**
     * Updates the config used for the snowfall animation, if the number of snowflakes
     * has changed then this will create new or remove existing snowflakes gracefully
     * to retain the position of as many existing snowflakes as possible.
     */ updateConfig(config) {
        this.config = {
            ...this.config,
            ...config
        };
        const sizeDifference = this.config.snowflakeCount - this.snowflakes.length;
        if (sizeDifference > 0) {
            this.snowflakes = [
                ...this.snowflakes,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createSnowflakes(this.canvas, sizeDifference, config)
            ];
        }
        if (sizeDifference < 0) {
            this.snowflakes = this.snowflakes.slice(0, this.config.snowflakeCount);
        }
        for (const snowflake of this.snowflakes){
            snowflake.updateConfig(this.config);
        }
    }
    /**
     * Updates the location of each snowflake based on the number of frames passed then
     * clears the canvas and draws each snowflake.
     */ render(framesPassed = 1) {
        const { ctx, canvas, snowflakes } = this;
        if (!ctx || !canvas) return;
        const { offsetWidth, offsetHeight } = canvas;
        // Update the position of each snowflake
        for (const snowflake of snowflakes){
            snowflake.update(offsetWidth, offsetHeight, framesPassed);
        }
        // Render the snowflakes
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, offsetWidth, offsetHeight);
        // If using images, draw each image individually
        if (this.config.images && this.config.images.length > 0) {
            for (const snowflake of snowflakes){
                snowflake.drawImage(ctx);
            }
            return;
        }
        // Not using images, draw circles in a single path
        ctx.beginPath();
        for (const snowflake of snowflakes){
            snowflake.drawCircle(ctx);
        }
        ctx.fillStyle = this.config.color;
        ctx.fill();
    }
    /**
     * The animation loop, will calculate the time since the last render and update
     * the position of the snowflakes appropriately before queueing another frame.
     */ loop() {
        // Update based on time passed so that a slow frame rate won't slow down the snowflake
        const now = Date.now();
        const msPassed = Date.now() - this.lastUpdate;
        this.lastUpdate = now;
        // Frames that would have passed if running at 60 fps
        const framesPassed = msPassed / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["targetFrameTime"];
        this.render(framesPassed);
        this.animationFrame = requestAnimationFrame(()=>this.loop());
    }
    /** Start the animation playing. */ play() {
        this.loop();
    }
    /** Pause the animation. */ pause() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
    }
}
_SnowfallCanvas_ctx = new WeakMap(), _SnowfallCanvas_canvas = new WeakMap();
const __TURBOPACK__default__export__ = SnowfallCanvas;
 //# sourceMappingURL=SnowfallCanvas.js.map

})()),
"[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/hooks.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useComponentSize": ()=>useComponentSize,
    "useDeepCompareEffect": ()=>useDeepCompareEffect,
    "useDeepMemo": ()=>useDeepMemo,
    "useSnowfallStyle": ()=>useSnowfallStyle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$fast$2d$compare$40$3$2e$2$2e$2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-fast-compare@3.2.2/node_modules/react-fast-compare/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/utils.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const useComponentSize = (ref)=>{
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(ref.current));
    const resizeHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (ref.current) {
            setSize((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(ref.current));
        }
    }, [
        ref
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { ResizeObserver } = window;
        if (!ref.current) return;
        resizeHandler();
        if (typeof ResizeObserver === 'function') {
            const resizeObserver = new ResizeObserver(resizeHandler);
            resizeObserver.observe(ref.current);
            return ()=>resizeObserver.disconnect();
        } else {
            window.addEventListener('resize', resizeHandler);
            return ()=>window.removeEventListener('resize', resizeHandler);
        }
    }, [
        ref,
        resizeHandler
    ]);
    return size;
};
const useSnowfallStyle = (overrides)=>{
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snowfallBaseStyle"],
            ...overrides || {}
        }), [
        overrides
    ]);
    return styles;
};
function useDeepCompareEffect(effect, deps) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(deps);
    // Only update the current dependencies if they are not deep equal
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$fast$2d$compare$40$3$2e$2$2e$2$2f$node_modules$2f$react$2d$fast$2d$compare$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(deps, ref.current)) {
        ref.current = deps;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(effect, ref.current);
}
function useDeepMemo(value) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    useDeepCompareEffect(()=>setState(value), [
        value
    ]);
    return state;
} //# sourceMappingURL=hooks.js.map

})()),
"[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/Snowfall.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Snowfall": ()=>Snowfall,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$SnowfallCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/SnowfallCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/Snowflake.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-snowfall@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-snowfall/lib/hooks.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const Snowfall = ({ color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"].color, changeFrequency = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"].changeFrequency, radius = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"].radius, speed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"].speed, wind = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"].wind, rotationSpeed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$Snowflake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultConfig"].rotationSpeed, snowflakeCount = 150, images, style } = {})=>{
    const mergedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnowfallStyle"])(style);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentSize"])(canvasRef);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeepMemo"])({
        color,
        changeFrequency,
        radius,
        speed,
        wind,
        rotationSpeed,
        images,
        snowflakeCount
    });
    // A reference to the config used for creating the initial instance
    const configRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(config);
    const snowfallCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!snowfallCanvasRef.current && canvasRef.current) {
            snowfallCanvasRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$snowfall$40$2$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$snowfall$2f$lib$2f$SnowfallCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnowfallCanvas"](canvasRef.current, configRef.current);
        }
        return ()=>{
            var _a;
            (_a = snowfallCanvasRef.current) === null || _a === void 0 ? void 0 : _a.pause();
            snowfallCanvasRef.current = undefined;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (snowfallCanvasRef.current) {
            snowfallCanvasRef.current.updateConfig(config);
        }
    }, [
        config
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("canvas", {
        ref: canvasRef,
        height: canvasSize.height,
        width: canvasSize.width,
        style: mergedStyle,
        "data-testid": "SnowfallCanvas"
    });
};
const __TURBOPACK__default__export__ = Snowfall;
 //# sourceMappingURL=Snowfall.js.map

})()),
}]);

//# sourceMappingURL=_e5da46._.js.map