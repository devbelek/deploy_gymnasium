module.exports = {

"[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "A": ()=>useInstanceHandle,
    "B": ()=>Block,
    "C": ()=>useStore,
    "D": ()=>useThree,
    "E": ()=>ErrorBoundary,
    "F": ()=>useFrame,
    "G": ()=>useGraph,
    "H": ()=>useLoader,
    "a": ()=>useIsomorphicLayoutEffect,
    "b": ()=>createRoot,
    "c": ()=>createPointerEvents,
    "d": ()=>unmountComponentAtNode,
    "e": ()=>extend,
    "f": ()=>createEvents,
    "g": ()=>context,
    "h": ()=>createPortal,
    "i": ()=>isRef,
    "j": ()=>reconciler,
    "k": ()=>applyProps,
    "l": ()=>dispose,
    "m": ()=>invalidate,
    "n": ()=>advance,
    "o": ()=>addEffect,
    "p": ()=>addAfterEffect,
    "q": ()=>addTail,
    "r": ()=>render,
    "s": ()=>flushGlobalEffects,
    "t": ()=>threeTypes,
    "u": ()=>useMutableCallback,
    "v": ()=>flushSync,
    "w": ()=>getRootState,
    "x": ()=>act,
    "y": ()=>buildGraph,
    "z": ()=>roots
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/three@0.168.0/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$3$2e$7$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zustand@3.7.2_react@18.3.1/node_modules/zustand/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$suspend$2d$react$40$0$2e$1$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/suspend-react@0.1.3_react@18.3.1/node_modules/suspend-react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scheduler$40$0$2e$21$2e$0$2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/scheduler@0.21.0/node_modules/scheduler/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
var threeTypes = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
const catalogue = {};
const extend = (objects)=>void Object.assign(catalogue, objects);
function createRenderer(_roots, _getEventPriority) {
    function createInstance(type, { args = [], attach, ...props }, root) {
        let name = `${type[0].toUpperCase()}${type.slice(1)}`;
        let instance;
        if (type === 'primitive') {
            if (props.object === undefined) throw new Error("R3F: Primitives without 'object' are invalid!");
            const object = props.object;
            instance = prepare(object, {
                type,
                root,
                attach,
                primitive: true
            });
        } else {
            const target = catalogue[name];
            if (!target) {
                throw new Error(`R3F: ${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
            }
            // Throw if an object or literal was passed for args
            if (!Array.isArray(args)) throw new Error('R3F: The args prop must be an array!');
            // Instanciate new object, link it to the root
            // Append memoized props with args so it's not forgotten
            instance = prepare(new target(...args), {
                type,
                root,
                attach,
                // Save args in case we need to reconstruct later for HMR
                memoizedProps: {
                    args
                }
            });
        }
        // Auto-attach geometries and materials
        if (instance.__r3f.attach === undefined) {
            if (instance instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BufferGeometry) instance.__r3f.attach = 'geometry';
            else if (instance instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Material) instance.__r3f.attach = 'material';
        }
        // It should NOT call onUpdate on object instanciation, because it hasn't been added to the
        // view yet. If the callback relies on references for instance, they won't be ready yet, this is
        // why it passes "true" here
        // There is no reason to apply props to injects
        if (name !== 'inject') applyProps$1(instance, props);
        return instance;
    }
    function appendChild(parentInstance, child) {
        let added = false;
        if (child) {
            var _child$__r3f, _parentInstance$__r3f;
            // The attach attribute implies that the object attaches itself on the parent
            if ((_child$__r3f = child.__r3f) != null && _child$__r3f.attach) {
                attach(parentInstance, child, child.__r3f.attach);
            } else if (child.isObject3D && parentInstance.isObject3D) {
                // add in the usual parent-child way
                parentInstance.add(child);
                added = true;
            }
            // This is for anything that used attach, and for non-Object3Ds that don't get attached to props;
            // that is, anything that's a child in React but not a child in the scenegraph.
            if (!added) (_parentInstance$__r3f = parentInstance.__r3f) == null ? void 0 : _parentInstance$__r3f.objects.push(child);
            if (!child.__r3f) prepare(child, {});
            child.__r3f.parent = parentInstance;
            updateInstance(child);
            invalidateInstance(child);
        }
    }
    function insertBefore(parentInstance, child, beforeChild) {
        let added = false;
        if (child) {
            var _child$__r3f2, _parentInstance$__r3f2;
            if ((_child$__r3f2 = child.__r3f) != null && _child$__r3f2.attach) {
                attach(parentInstance, child, child.__r3f.attach);
            } else if (child.isObject3D && parentInstance.isObject3D) {
                child.parent = parentInstance;
                child.dispatchEvent({
                    type: 'added'
                });
                parentInstance.dispatchEvent({
                    type: 'childadded',
                    child
                });
                const restSiblings = parentInstance.children.filter((sibling)=>sibling !== child);
                const index = restSiblings.indexOf(beforeChild);
                parentInstance.children = [
                    ...restSiblings.slice(0, index),
                    child,
                    ...restSiblings.slice(index)
                ];
                added = true;
            }
            if (!added) (_parentInstance$__r3f2 = parentInstance.__r3f) == null ? void 0 : _parentInstance$__r3f2.objects.push(child);
            if (!child.__r3f) prepare(child, {});
            child.__r3f.parent = parentInstance;
            updateInstance(child);
            invalidateInstance(child);
        }
    }
    function removeRecursive(array, parent, dispose = false) {
        if (array) [
            ...array
        ].forEach((child)=>removeChild(parent, child, dispose));
    }
    function removeChild(parentInstance, child, dispose) {
        if (child) {
            var _parentInstance$__r3f3, _child$__r3f3, _child$__r3f5;
            // Clear the parent reference
            if (child.__r3f) child.__r3f.parent = null;
            // Remove child from the parents objects
            if ((_parentInstance$__r3f3 = parentInstance.__r3f) != null && _parentInstance$__r3f3.objects) parentInstance.__r3f.objects = parentInstance.__r3f.objects.filter((x)=>x !== child);
            // Remove attachment
            if ((_child$__r3f3 = child.__r3f) != null && _child$__r3f3.attach) {
                detach(parentInstance, child, child.__r3f.attach);
            } else if (child.isObject3D && parentInstance.isObject3D) {
                var _child$__r3f4;
                parentInstance.remove(child);
                // @ts-expect-error
                // Remove interactivity on the initial root
                if ((_child$__r3f4 = child.__r3f) != null && _child$__r3f4.root) {
                    removeInteractivity(findInitialRoot(child), child);
                }
            }
            // Allow objects to bail out of recursive dispose altogether by passing dispose={null}
            // Never dispose of primitives because their state may be kept outside of React!
            // In order for an object to be able to dispose it has to have
            //   - a dispose method,
            //   - it cannot be a <primitive object={...} />
            //   - it cannot be a THREE.Scene, because three has broken it's own api
            //
            // Since disposal is recursive, we can check the optional dispose arg, which will be undefined
            // when the reconciler calls it, but then carry our own check recursively
            const isPrimitive = (_child$__r3f5 = child.__r3f) == null ? void 0 : _child$__r3f5.primitive;
            const shouldDispose = !isPrimitive && (dispose === undefined ? child.dispose !== null : dispose);
            // Remove nested child objects. Primitives should not have objects and children that are
            // attached to them declaratively ...
            if (!isPrimitive) {
                var _child$__r3f6;
                removeRecursive((_child$__r3f6 = child.__r3f) == null ? void 0 : _child$__r3f6.objects, child, shouldDispose);
                removeRecursive(child.children, child, shouldDispose);
            }
            // Remove references
            delete child.__r3f;
            // Dispose item whenever the reconciler feels like it
            if (shouldDispose && child.dispose && child.type !== 'Scene') {
                const callback = ()=>{
                    try {
                        child.dispose();
                    } catch (e) {
                    /* ... */ }
                };
                // Schedule async at runtime, flush sync in testing
                if (typeof IS_REACT_ACT_ENVIRONMENT === 'undefined') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scheduler$40$0$2e$21$2e$0$2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unstable_scheduleCallback"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$scheduler$40$0$2e$21$2e$0$2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unstable_IdlePriority"], callback);
                } else {
                    callback();
                }
            }
            invalidateInstance(parentInstance);
        }
    }
    function switchInstance(instance, type, newProps, fiber) {
        var _instance$__r3f;
        const parent = (_instance$__r3f = instance.__r3f) == null ? void 0 : _instance$__r3f.parent;
        if (!parent) return;
        const newInstance = createInstance(type, newProps, instance.__r3f.root);
        // https://github.com/pmndrs/react-three-fiber/issues/1348
        // When args change the instance has to be re-constructed, which then
        // forces r3f to re-parent the children and non-scene objects
        if (instance.children) {
            for (const child of instance.children){
                if (child.__r3f) appendChild(newInstance, child);
            }
            instance.children = instance.children.filter((child)=>!child.__r3f);
        }
        instance.__r3f.objects.forEach((child)=>appendChild(newInstance, child));
        instance.__r3f.objects = [];
        if (!instance.__r3f.autoRemovedBeforeAppend) {
            removeChild(parent, instance);
        }
        if (newInstance.parent) {
            newInstance.__r3f.autoRemovedBeforeAppend = true;
        }
        appendChild(parent, newInstance);
        // Re-bind event handlers on the initial root
        if (newInstance.raycast && newInstance.__r3f.eventCount) {
            const rootState = findInitialRoot(newInstance).getState();
            rootState.internal.interaction.push(newInstance);
        }
        [
            fiber,
            fiber.alternate
        ].forEach((fiber)=>{
            if (fiber !== null) {
                fiber.stateNode = newInstance;
                if (fiber.ref) {
                    if (typeof fiber.ref === 'function') fiber.ref(newInstance);
                    else fiber.ref.current = newInstance;
                }
            }
        });
    }
    // Don't handle text instances, warn on undefined behavior
    const handleTextInstance = ()=>console.warn('Text is not allowed in the R3F tree! This could be stray whitespace or characters.');
    const reconciler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        createInstance,
        removeChild,
        appendChild,
        appendInitialChild: appendChild,
        insertBefore,
        supportsMutation: true,
        isPrimaryRenderer: false,
        supportsPersistence: false,
        supportsHydration: false,
        noTimeout: -1,
        appendChildToContainer: (container, child)=>{
            if (!child) return;
            // Don't append to unmounted container
            const scene = container.getState().scene;
            if (!scene.__r3f) return;
            // Link current root to the default scene
            scene.__r3f.root = container;
            appendChild(scene, child);
        },
        removeChildFromContainer: (container, child)=>{
            if (!child) return;
            removeChild(container.getState().scene, child);
        },
        insertInContainerBefore: (container, child, beforeChild)=>{
            if (!child || !beforeChild) return;
            // Don't append to unmounted container
            const scene = container.getState().scene;
            if (!scene.__r3f) return;
            insertBefore(scene, child, beforeChild);
        },
        getRootHostContext: ()=>null,
        getChildHostContext: (parentHostContext)=>parentHostContext,
        finalizeInitialChildren (instance) {
            var _instance$__r3f2;
            const localState = (_instance$__r3f2 = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f2 : {};
            // https://github.com/facebook/react/issues/20271
            // Returning true will trigger commitMount
            return Boolean(localState.handlers);
        },
        prepareUpdate (instance, _type, oldProps, newProps) {
            var _instance$__r3f3;
            const localState = (_instance$__r3f3 = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f3 : {};
            // Create diff-sets
            if (localState.primitive && newProps.object && newProps.object !== instance) {
                return [
                    true
                ];
            } else {
                // This is a data object, let's extract critical information about it
                const { args: argsNew = [], children: cN, ...restNew } = newProps;
                const { args: argsOld = [], children: cO, ...restOld } = oldProps;
                // Throw if an object or literal was passed for args
                if (!Array.isArray(argsNew)) throw new Error('R3F: the args prop must be an array!');
                // If it has new props or arguments, then it needs to be re-instantiated
                if (argsNew.some((value, index)=>value !== argsOld[index])) return [
                    true
                ];
                // Create a diff-set, flag if there are any changes
                const diff = diffProps(instance, restNew, restOld, true);
                if (diff.changes.length) return [
                    false,
                    diff
                ];
                // Otherwise do not touch the instance
                return null;
            }
        },
        commitUpdate (instance, [reconstruct, diff], type, _oldProps, newProps, fiber) {
            // Reconstruct when args or <primitive object={...} have changes
            if (reconstruct) switchInstance(instance, type, newProps, fiber);
            else applyProps$1(instance, diff);
        },
        commitMount (instance, _type, _props, _int) {
            var _instance$__r3f4;
            // https://github.com/facebook/react/issues/20271
            // This will make sure events are only added once to the central container on the initial root
            const localState = (_instance$__r3f4 = instance.__r3f) != null ? _instance$__r3f4 : {};
            if (instance.raycast && localState.handlers && localState.eventCount) {
                findInitialRoot(instance).getState().internal.interaction.push(instance);
            }
        },
        getPublicInstance: (instance)=>instance,
        prepareForCommit: ()=>null,
        preparePortalMount: (container)=>prepare(container.getState().scene),
        resetAfterCommit: ()=>{},
        shouldSetTextContent: ()=>false,
        clearContainer: ()=>false,
        hideInstance (instance) {
            var _instance$__r3f5;
            // Detach while the instance is hidden
            const { attach: type, parent } = (_instance$__r3f5 = instance.__r3f) != null ? _instance$__r3f5 : {};
            if (type && parent) detach(parent, instance, type);
            if (instance.isObject3D) instance.visible = false;
            invalidateInstance(instance);
        },
        unhideInstance (instance, props) {
            var _instance$__r3f6;
            // Re-attach when the instance is unhidden
            const { attach: type, parent } = (_instance$__r3f6 = instance.__r3f) != null ? _instance$__r3f6 : {};
            if (type && parent) attach(parent, instance, type);
            if (instance.isObject3D && props.visible == null || props.visible) instance.visible = true;
            invalidateInstance(instance);
        },
        createTextInstance: handleTextInstance,
        hideTextInstance: handleTextInstance,
        unhideTextInstance: handleTextInstance,
        // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r916356874
        // @ts-expect-error
        getCurrentEventPriority: ()=>_getEventPriority ? _getEventPriority() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultEventPriority"],
        beforeActiveInstanceBlur: ()=>{},
        afterActiveInstanceBlur: ()=>{},
        detachDeletedInstance: ()=>{},
        now: typeof performance !== 'undefined' && is.fun(performance.now) ? performance.now : is.fun(Date.now) ? Date.now : ()=>0,
        // https://github.com/pmndrs/react-three-fiber/pull/2360#discussion_r920883503
        scheduleTimeout: is.fun(setTimeout) ? setTimeout : undefined,
        cancelTimeout: is.fun(clearTimeout) ? clearTimeout : undefined
    });
    return {
        reconciler,
        applyProps: applyProps$1
    };
}
var _window$document, _window$navigator;
/**
 * Returns `true` with correct TS type inference if an object has a configurable color space (since r152).
 */ const hasColorSpace = (object)=>'colorSpace' in object || 'outputColorSpace' in object;
/**
 * The current THREE.ColorManagement instance, if present.
 */ const getColorManagement = ()=>{
    var _ColorManagement;
    return (_ColorManagement = catalogue.ColorManagement) != null ? _ColorManagement : null;
};
const isOrthographicCamera = (def)=>def && def.isOrthographicCamera;
const isRef = (obj)=>obj && obj.hasOwnProperty('current');
/**
 * An SSR-friendly useLayoutEffect.
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect elsewhere.
 *
 * @see https://github.com/facebook/react/issues/14927
 */ const useIsomorphicLayoutEffect = typeof window !== 'undefined' && ((_window$document = window.document) != null && _window$document.createElement || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === 'ReactNative') ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect;
function useMutableCallback(fn) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(fn);
    useIsomorphicLayoutEffect(()=>void (ref.current = fn), [
        fn
    ]);
    return ref;
}
function Block({ set }) {
    useIsomorphicLayoutEffect(()=>{
        set(new Promise(()=>null));
        return ()=>set(false);
    }, [
        set
    ]);
    return null;
}
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Component {
    constructor(...args){
        super(...args);
        this.state = {
            error: false
        };
    }
    componentDidCatch(err) {
        this.props.set(err);
    }
    render() {
        return this.state.error ? null : this.props.children;
    }
}
ErrorBoundary.getDerivedStateFromError = ()=>({
        error: true
    });
const DEFAULT = '__default';
const DEFAULTS = new Map();
const isDiffSet = (def)=>def && !!def.memoized && !!def.changes;
function calculateDpr(dpr) {
    var _window$devicePixelRa;
    // Err on the side of progress by assuming 2x dpr if we can't detect it
    // This will happen in workers where window is defined but dpr isn't.
    const target = typeof window !== 'undefined' ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
    return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
/**
 * Returns instance root state
 */ const getRootState = (obj)=>{
    var _r3f;
    return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
};
/**
 * Returns the instances initial (outmost) root
 */ function findInitialRoot(child) {
    let root = child.__r3f.root;
    while(root.getState().previousRoot)root = root.getState().previousRoot;
    return root;
}
// A collection of compare functions
const is = {
    obj: (a)=>a === Object(a) && !is.arr(a) && typeof a !== 'function',
    fun: (a)=>typeof a === 'function',
    str: (a)=>typeof a === 'string',
    num: (a)=>typeof a === 'number',
    boo: (a)=>typeof a === 'boolean',
    und: (a)=>a === void 0,
    arr: (a)=>Array.isArray(a),
    equ (a, b, { arrays = 'shallow', objects = 'reference', strict = true } = {}) {
        // Wrong type or one of the two undefined, doesn't match
        if (typeof a !== typeof b || !!a !== !!b) return false;
        // Atomic, just compare a against b
        if (is.str(a) || is.num(a) || is.boo(a)) return a === b;
        const isObj = is.obj(a);
        if (isObj && objects === 'reference') return a === b;
        const isArr = is.arr(a);
        if (isArr && arrays === 'reference') return a === b;
        // Array or Object, shallow compare first to see if it's a match
        if ((isArr || isObj) && a === b) return true;
        // Last resort, go through keys
        let i;
        // Check if a has all the keys of b
        for(i in a)if (!(i in b)) return false;
        // Check if values between keys match
        if (isObj && arrays === 'shallow' && objects === 'shallow') {
            for(i in strict ? b : a)if (!is.equ(a[i], b[i], {
                strict,
                objects: 'reference'
            })) return false;
        } else {
            for(i in strict ? b : a)if (a[i] !== b[i]) return false;
        }
        // If i is undefined
        if (is.und(i)) {
            // If both arrays are empty we consider them equal
            if (isArr && a.length === 0 && b.length === 0) return true;
            // If both objects are empty we consider them equal
            if (isObj && Object.keys(a).length === 0 && Object.keys(b).length === 0) return true;
            // Otherwise match them by value
            if (a !== b) return false;
        }
        return true;
    }
};
/**
 * Collects nodes and materials from a THREE.Object3D.
 */ function buildGraph(object) {
    const data = {
        nodes: {},
        materials: {}
    };
    if (object) {
        object.traverse((obj)=>{
            if (obj.name) data.nodes[obj.name] = obj;
            if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
        });
    }
    return data;
}
// Disposes an object and all its properties
function dispose(obj) {
    if (obj.dispose && obj.type !== 'Scene') obj.dispose();
    for(const p in obj){
        p.dispose == null ? void 0 : p.dispose();
        delete obj[p];
    }
}
// Each object in the scene carries a small LocalState descriptor
function prepare(object, state) {
    const instance = object;
    instance.__r3f = {
        type: '',
        root: null,
        previousAttach: null,
        memoizedProps: {},
        eventCount: 0,
        handlers: {},
        objects: [],
        parent: null,
        ...state
    };
    return object;
}
function resolve(instance, key) {
    let target = instance;
    if (key.includes('-')) {
        const entries = key.split('-');
        const last = entries.pop();
        target = entries.reduce((acc, key)=>acc[key], instance);
        return {
            target,
            key: last
        };
    } else return {
        target,
        key
    };
}
// Checks if a dash-cased string ends with an integer
const INDEX_REGEX = /-\d+$/;
function attach(parent, child, type) {
    if (is.str(type)) {
        // If attaching into an array (foo-0), create one
        if (INDEX_REGEX.test(type)) {
            const root = type.replace(INDEX_REGEX, '');
            const { target, key } = resolve(parent, root);
            if (!Array.isArray(target[key])) target[key] = [];
        }
        const { target, key } = resolve(parent, type);
        child.__r3f.previousAttach = target[key];
        target[key] = child;
    } else child.__r3f.previousAttach = type(parent, child);
}
function detach(parent, child, type) {
    var _child$__r3f, _child$__r3f2;
    if (is.str(type)) {
        const { target, key } = resolve(parent, type);
        const previous = child.__r3f.previousAttach;
        // When the previous value was undefined, it means the value was never set to begin with
        if (previous === undefined) delete target[key];
        else target[key] = previous;
    } else (_child$__r3f = child.__r3f) == null ? void 0 : _child$__r3f.previousAttach == null ? void 0 : _child$__r3f.previousAttach(parent, child);
    (_child$__r3f2 = child.__r3f) == null ? true : delete _child$__r3f2.previousAttach;
}
// This function prepares a set of changes to be applied to the instance
function diffProps(instance, { children: cN, key: kN, ref: rN, ...props }, { children: cP, key: kP, ref: rP, ...previous } = {}, remove = false) {
    const localState = instance.__r3f;
    const entries = Object.entries(props);
    const changes = [];
    // Catch removed props, prepend them so they can be reset or removed
    if (remove) {
        const previousKeys = Object.keys(previous);
        for(let i = 0; i < previousKeys.length; i++){
            if (!props.hasOwnProperty(previousKeys[i])) entries.unshift([
                previousKeys[i],
                DEFAULT + 'remove'
            ]);
        }
    }
    entries.forEach(([key, value])=>{
        var _instance$__r3f;
        // Bail out on primitive object
        if ((_instance$__r3f = instance.__r3f) != null && _instance$__r3f.primitive && key === 'object') return;
        // When props match bail out
        if (is.equ(value, previous[key])) return;
        // Collect handlers and bail out
        if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(key)) return changes.push([
            key,
            value,
            true,
            []
        ]);
        // Split dashed props
        let entries = [];
        if (key.includes('-')) entries = key.split('-');
        changes.push([
            key,
            value,
            false,
            entries
        ]);
        // Reset pierced props
        for(const prop in props){
            const value = props[prop];
            if (prop.startsWith(`${key}-`)) changes.push([
                prop,
                value,
                false,
                prop.split('-')
            ]);
        }
    });
    const memoized = {
        ...props
    };
    if (localState != null && localState.memoizedProps && localState != null && localState.memoizedProps.args) memoized.args = localState.memoizedProps.args;
    if (localState != null && localState.memoizedProps && localState != null && localState.memoizedProps.attach) memoized.attach = localState.memoizedProps.attach;
    return {
        memoized,
        changes
    };
}
const __DEV__ = typeof process !== 'undefined' && ("TURBOPACK compile-time value", "development") !== 'production';
// This function applies a set of changes to the instance
function applyProps$1(instance, data) {
    var _instance$__r3f2;
    // Filter equals, events and reserved props
    const localState = instance.__r3f;
    const root = localState == null ? void 0 : localState.root;
    const rootState = root == null ? void 0 : root.getState == null ? void 0 : root.getState();
    const { memoized, changes } = isDiffSet(data) ? data : diffProps(instance, data);
    const prevHandlers = localState == null ? void 0 : localState.eventCount;
    // Prepare memoized props
    if (instance.__r3f) instance.__r3f.memoizedProps = memoized;
    for(let i = 0; i < changes.length; i++){
        let [key, value, isEvent, keys] = changes[i];
        // Alias (output)encoding => (output)colorSpace (since r152)
        // https://github.com/pmndrs/react-three-fiber/pull/2829
        if (hasColorSpace(instance)) {
            const sRGBEncoding = 3001;
            const SRGBColorSpace = 'srgb';
            const LinearSRGBColorSpace = 'srgb-linear';
            if (key === 'encoding') {
                key = 'colorSpace';
                value = value === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
            } else if (key === 'outputEncoding') {
                key = 'outputColorSpace';
                value = value === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
            }
        }
        let currentInstance = instance;
        let targetProp = currentInstance[key];
        // Revolve dashed props
        if (keys.length) {
            targetProp = keys.reduce((acc, key)=>acc[key], instance);
            // If the target is atomic, it forces us to switch the root
            if (!(targetProp && targetProp.set)) {
                const [name, ...reverseEntries] = keys.reverse();
                currentInstance = reverseEntries.reverse().reduce((acc, key)=>acc[key], instance);
                key = name;
            }
        }
        // https://github.com/mrdoob/three.js/issues/21209
        // HMR/fast-refresh relies on the ability to cancel out props, but threejs
        // has no means to do this. Hence we curate a small collection of value-classes
        // with their respective constructor/set arguments
        // For removed props, try to set default values, if possible
        if (value === DEFAULT + 'remove') {
            if (currentInstance.constructor) {
                // create a blank slate of the instance and copy the particular parameter.
                let ctor = DEFAULTS.get(currentInstance.constructor);
                if (!ctor) {
                    // @ts-expect-error
                    ctor = new currentInstance.constructor();
                    DEFAULTS.set(currentInstance.constructor, ctor);
                }
                value = ctor[key];
            } else {
                // instance does not have constructor, just set it to 0
                value = 0;
            }
        }
        // Deal with pointer events ...
        if (isEvent && localState) {
            if (value) localState.handlers[key] = value;
            else delete localState.handlers[key];
            localState.eventCount = Object.keys(localState.handlers).length;
        } else if (targetProp && targetProp.set && (targetProp.copy || targetProp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Layers)) {
            // If value is an array
            if (Array.isArray(value)) {
                if (targetProp.fromArray) targetProp.fromArray(value);
                else targetProp.set(...value);
            } else if (targetProp.copy && value && value.constructor && (// Some environments may break strict identity checks by duplicating versions of three.js.
            // Loosen to unminified names, ignoring descendents.
            // https://github.com/pmndrs/react-three-fiber/issues/2856
            // TODO: fix upstream and remove in v9
            __DEV__ ? targetProp.constructor.name === value.constructor.name : targetProp.constructor === value.constructor)) {
                targetProp.copy(value);
            } else if (value !== undefined) {
                const isColor = targetProp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Color;
                // Allow setting array scalars
                if (!isColor && targetProp.setScalar) targetProp.setScalar(value);
                else if (targetProp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Layers && value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Layers) targetProp.mask = value.mask;
                else targetProp.set(value);
                // For versions of three which don't support THREE.ColorManagement,
                // Auto-convert sRGB colors
                // https://github.com/pmndrs/react-three-fiber/issues/344
                if (!getColorManagement() && rootState && !rootState.linear && isColor) targetProp.convertSRGBToLinear();
            }
        // Else, just overwrite the value
        } else {
            currentInstance[key] = value;
            // Auto-convert sRGB textures, for now ...
            // https://github.com/pmndrs/react-three-fiber/issues/344
            if (currentInstance[key] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Texture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
            currentInstance[key].format === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.RGBAFormat && currentInstance[key].type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.UnsignedByteType && rootState) {
                const texture = currentInstance[key];
                if (hasColorSpace(texture) && hasColorSpace(rootState.gl)) texture.colorSpace = rootState.gl.outputColorSpace;
                else texture.encoding = rootState.gl.outputEncoding;
            }
        }
        invalidateInstance(instance);
    }
    if (localState && localState.parent && instance.raycast && prevHandlers !== localState.eventCount) {
        // Get the initial root state's internals
        const internal = findInitialRoot(instance).getState().internal;
        // Pre-emptively remove the instance from the interaction manager
        const index = internal.interaction.indexOf(instance);
        if (index > -1) internal.interaction.splice(index, 1);
        // Add the instance to the interaction manager only when it has handlers
        if (localState.eventCount) internal.interaction.push(instance);
    }
    // Call the update lifecycle when it is being updated, but only when it is part of the scene.
    // Skip updates to the `onUpdate` prop itself
    const isCircular = changes.length === 1 && changes[0][0] === 'onUpdate';
    if (!isCircular && changes.length && (_instance$__r3f2 = instance.__r3f) != null && _instance$__r3f2.parent) updateInstance(instance);
    return instance;
}
function invalidateInstance(instance) {
    var _instance$__r3f3, _instance$__r3f3$root;
    const state = (_instance$__r3f3 = instance.__r3f) == null ? void 0 : (_instance$__r3f3$root = _instance$__r3f3.root) == null ? void 0 : _instance$__r3f3$root.getState == null ? void 0 : _instance$__r3f3$root.getState();
    if (state && state.internal.frames === 0) state.invalidate();
}
function updateInstance(instance) {
    instance.onUpdate == null ? void 0 : instance.onUpdate(instance);
}
function updateCamera(camera, size) {
    // https://github.com/pmndrs/react-three-fiber/issues/92
    // Do not mess with the camera if it belongs to the user
    if (!camera.manual) {
        if (isOrthographicCamera(camera)) {
            camera.left = size.width / -2;
            camera.right = size.width / 2;
            camera.top = size.height / 2;
            camera.bottom = size.height / -2;
        } else {
            camera.aspect = size.width / size.height;
        }
        camera.updateProjectionMatrix();
        // https://github.com/pmndrs/react-three-fiber/issues/178
        // Update matrix world since the renderer is a frame late
        camera.updateMatrixWorld();
    }
}
function makeId(event) {
    return (event.eventObject || event.object).uuid + '/' + event.index + event.instanceId;
}
// https://github.com/facebook/react/tree/main/packages/react-reconciler#getcurrenteventpriority
// Gives React a clue as to how import the current interaction is
function getEventPriority() {
    var _globalScope$event;
    // Get a handle to the current global scope in window and worker contexts if able
    // https://github.com/pmndrs/react-three-fiber/pull/2493
    const globalScope = typeof self !== 'undefined' && self || typeof window !== 'undefined' && window;
    if (!globalScope) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultEventPriority"];
    const name = (_globalScope$event = globalScope.event) == null ? void 0 : _globalScope$event.type;
    switch(name){
        case 'click':
        case 'contextmenu':
        case 'dblclick':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscreteEventPriority"];
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerenter':
        case 'pointerleave':
        case 'wheel':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContinuousEventPriority"];
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultEventPriority"];
    }
}
/**
 * Release pointer captures.
 * This is called by releasePointerCapture in the API, and when an object is removed.
 */ function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
    const captureData = captures.get(obj);
    if (captureData) {
        captures.delete(obj);
        // If this was the last capturing object for this pointer
        if (captures.size === 0) {
            capturedMap.delete(pointerId);
            captureData.target.releasePointerCapture(pointerId);
        }
    }
}
function removeInteractivity(store, object) {
    const { internal } = store.getState();
    // Removes every trace of an object from the data store
    internal.interaction = internal.interaction.filter((o)=>o !== object);
    internal.initialHits = internal.initialHits.filter((o)=>o !== object);
    internal.hovered.forEach((value, key)=>{
        if (value.eventObject === object || value.object === object) {
            // Clear out intersects, they are outdated by now
            internal.hovered.delete(key);
        }
    });
    internal.capturedMap.forEach((captures, pointerId)=>{
        releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
    });
}
function createEvents(store) {
    /** Calculates delta */ function calculateDistance(event) {
        const { internal } = store.getState();
        const dx = event.offsetX - internal.initialClick[0];
        const dy = event.offsetY - internal.initialClick[1];
        return Math.round(Math.sqrt(dx * dx + dy * dy));
    }
    /** Returns true if an instance has a valid pointer-event registered, this excludes scroll, clicks etc */ function filterPointerEvents(objects) {
        return objects.filter((obj)=>[
                'Move',
                'Over',
                'Enter',
                'Out',
                'Leave'
            ].some((name)=>{
                var _r3f;
                return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers['onPointer' + name];
            }));
    }
    function intersect(event, filter) {
        const state = store.getState();
        const duplicates = new Set();
        const intersections = [];
        // Allow callers to eliminate event objects
        const eventsObjects = filter ? filter(state.internal.interaction) : state.internal.interaction;
        // Reset all raycaster cameras to undefined
        for(let i = 0; i < eventsObjects.length; i++){
            const state = getRootState(eventsObjects[i]);
            if (state) {
                state.raycaster.camera = undefined;
            }
        }
        if (!state.previousRoot) {
            // Make sure root-level pointer and ray are set up
            state.events.compute == null ? void 0 : state.events.compute(event, state);
        }
        function handleRaycast(obj) {
            const state = getRootState(obj);
            // Skip event handling when noEvents is set, or when the raycasters camera is null
            if (!state || !state.events.enabled || state.raycaster.camera === null) return [];
            // When the camera is undefined we have to call the event layers update function
            if (state.raycaster.camera === undefined) {
                var _state$previousRoot;
                state.events.compute == null ? void 0 : state.events.compute(event, state, (_state$previousRoot = state.previousRoot) == null ? void 0 : _state$previousRoot.getState());
                // If the camera is still undefined we have to skip this layer entirely
                if (state.raycaster.camera === undefined) state.raycaster.camera = null;
            }
            // Intersect object by object
            return state.raycaster.camera ? state.raycaster.intersectObject(obj, true) : [];
        }
        // Collect events
        let hits = eventsObjects// Intersect objects
        .flatMap(handleRaycast)// Sort by event priority and distance
        .sort((a, b)=>{
            const aState = getRootState(a.object);
            const bState = getRootState(b.object);
            if (!aState || !bState) return a.distance - b.distance;
            return bState.events.priority - aState.events.priority || a.distance - b.distance;
        })// Filter out duplicates
        .filter((item)=>{
            const id = makeId(item);
            if (duplicates.has(id)) return false;
            duplicates.add(id);
            return true;
        });
        // https://github.com/mrdoob/three.js/issues/16031
        // Allow custom userland intersect sort order, this likely only makes sense on the root filter
        if (state.events.filter) hits = state.events.filter(hits, state);
        // Bubble up the events, find the event source (eventObject)
        for (const hit of hits){
            let eventObject = hit.object;
            // Bubble event up
            while(eventObject){
                var _r3f2;
                if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push({
                    ...hit,
                    eventObject
                });
                eventObject = eventObject.parent;
            }
        }
        // If the interaction is captured, make all capturing targets part of the intersect.
        if ('pointerId' in event && state.internal.capturedMap.has(event.pointerId)) {
            for (let captureData of state.internal.capturedMap.get(event.pointerId).values()){
                if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
            }
        }
        return intersections;
    }
    /**  Handles intersections by forwarding them to handlers */ function handleIntersects(intersections, event, delta, callback) {
        const rootState = store.getState();
        // If anything has been found, forward it to the event listeners
        if (intersections.length) {
            const localState = {
                stopped: false
            };
            for (const hit of intersections){
                const state = getRootState(hit.object) || rootState;
                const { raycaster, pointer, camera, internal } = state;
                const unprojectedPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3(pointer.x, pointer.y, 0).unproject(camera);
                const hasPointerCapture = (id)=>{
                    var _internal$capturedMap, _internal$capturedMap2;
                    return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
                };
                const setPointerCapture = (id)=>{
                    const captureData = {
                        intersection: hit,
                        target: event.target
                    };
                    if (internal.capturedMap.has(id)) {
                        // if the pointerId was previously captured, we add the hit to the
                        // event capturedMap.
                        internal.capturedMap.get(id).set(hit.eventObject, captureData);
                    } else {
                        // if the pointerId was not previously captured, we create a map
                        // containing the hitObject, and the hit. hitObject is used for
                        // faster access.
                        internal.capturedMap.set(id, new Map([
                            [
                                hit.eventObject,
                                captureData
                            ]
                        ]));
                    }
                    event.target.setPointerCapture(id);
                };
                const releasePointerCapture = (id)=>{
                    const captures = internal.capturedMap.get(id);
                    if (captures) {
                        releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
                    }
                };
                // Add native event props
                let extractEventProps = {};
                // This iterates over the event's properties including the inherited ones. Native PointerEvents have most of their props as getters which are inherited, but polyfilled PointerEvents have them all as their own properties (i.e. not inherited). We can't use Object.keys() or Object.entries() as they only return "own" properties; nor Object.getPrototypeOf(event) as that *doesn't* return "own" properties, only inherited ones.
                for(let prop in event){
                    let property = event[prop];
                    // Only copy over atomics, leave functions alone as these should be
                    // called as event.nativeEvent.fn()
                    if (typeof property !== 'function') extractEventProps[prop] = property;
                }
                let raycastEvent = {
                    ...hit,
                    ...extractEventProps,
                    pointer,
                    intersections,
                    stopped: localState.stopped,
                    delta,
                    unprojectedPoint,
                    ray: raycaster.ray,
                    camera: camera,
                    // Hijack stopPropagation, which just sets a flag
                    stopPropagation () {
                        // https://github.com/pmndrs/react-three-fiber/issues/596
                        // Events are not allowed to stop propagation if the pointer has been captured
                        const capturesForPointer = 'pointerId' in event && internal.capturedMap.get(event.pointerId);
                        // We only authorize stopPropagation...
                        if (// ...if this pointer hasn't been captured
                        !capturesForPointer || // ... or if the hit object is capturing the pointer
                        capturesForPointer.has(hit.eventObject)) {
                            raycastEvent.stopped = localState.stopped = true;
                            // Propagation is stopped, remove all other hover records
                            // An event handler is only allowed to flush other handlers if it is hovered itself
                            if (internal.hovered.size && Array.from(internal.hovered.values()).find((i)=>i.eventObject === hit.eventObject)) {
                                // Objects cannot flush out higher up objects that have already caught the event
                                const higher = intersections.slice(0, intersections.indexOf(hit));
                                cancelPointer([
                                    ...higher,
                                    hit
                                ]);
                            }
                        }
                    },
                    // there should be a distinction between target and currentTarget
                    target: {
                        hasPointerCapture,
                        setPointerCapture,
                        releasePointerCapture
                    },
                    currentTarget: {
                        hasPointerCapture,
                        setPointerCapture,
                        releasePointerCapture
                    },
                    nativeEvent: event
                };
                // Call subscribers
                callback(raycastEvent);
                // Event bubbling may be interrupted by stopPropagation
                if (localState.stopped === true) break;
            }
        }
        return intersections;
    }
    function cancelPointer(intersections) {
        const { internal } = store.getState();
        for (const hoveredObj of internal.hovered.values()){
            // When no objects were hit or the the hovered object wasn't found underneath the cursor
            // we call onPointerOut and delete the object from the hovered-elements map
            if (!intersections.length || !intersections.find((hit)=>hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
                const eventObject = hoveredObj.eventObject;
                const instance = eventObject.__r3f;
                const handlers = instance == null ? void 0 : instance.handlers;
                internal.hovered.delete(makeId(hoveredObj));
                if (instance != null && instance.eventCount) {
                    // Clear out intersects, they are outdated by now
                    const data = {
                        ...hoveredObj,
                        intersections
                    };
                    handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
                    handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
                }
            }
        }
    }
    function pointerMissed(event, objects) {
        for(let i = 0; i < objects.length; i++){
            const instance = objects[i].__r3f;
            instance == null ? void 0 : instance.handlers.onPointerMissed == null ? void 0 : instance.handlers.onPointerMissed(event);
        }
    }
    function handlePointer(name) {
        // Deal with cancelation
        switch(name){
            case 'onPointerLeave':
            case 'onPointerCancel':
                return ()=>cancelPointer([]);
            case 'onLostPointerCapture':
                return (event)=>{
                    const { internal } = store.getState();
                    if ('pointerId' in event && internal.capturedMap.has(event.pointerId)) {
                        // If the object event interface had onLostPointerCapture, we'd call it here on every
                        // object that's getting removed. We call it on the next frame because onLostPointerCapture
                        // fires before onPointerUp. Otherwise pointerUp would never be called if the event didn't
                        // happen in the object it originated from, leaving components in a in-between state.
                        requestAnimationFrame(()=>{
                            // Only release if pointer-up didn't do it already
                            if (internal.capturedMap.has(event.pointerId)) {
                                internal.capturedMap.delete(event.pointerId);
                                cancelPointer([]);
                            }
                        });
                    }
                };
        }
        // Any other pointer goes here ...
        return function handleEvent(event) {
            const { onPointerMissed, internal } = store.getState();
            // prepareRay(event)
            internal.lastEvent.current = event;
            // Get fresh intersects
            const isPointerMove = name === 'onPointerMove';
            const isClickEvent = name === 'onClick' || name === 'onContextMenu' || name === 'onDoubleClick';
            const filter = isPointerMove ? filterPointerEvents : undefined;
            const hits = intersect(event, filter);
            const delta = isClickEvent ? calculateDistance(event) : 0;
            // Save initial coordinates on pointer-down
            if (name === 'onPointerDown') {
                internal.initialClick = [
                    event.offsetX,
                    event.offsetY
                ];
                internal.initialHits = hits.map((hit)=>hit.eventObject);
            }
            // If a click yields no results, pass it back to the user as a miss
            // Missed events have to come first in order to establish user-land side-effect clean up
            if (isClickEvent && !hits.length) {
                if (delta <= 2) {
                    pointerMissed(event, internal.interaction);
                    if (onPointerMissed) onPointerMissed(event);
                }
            }
            // Take care of unhover
            if (isPointerMove) cancelPointer(hits);
            function onIntersect(data) {
                const eventObject = data.eventObject;
                const instance = eventObject.__r3f;
                const handlers = instance == null ? void 0 : instance.handlers;
                // Check presence of handlers
                if (!(instance != null && instance.eventCount)) return;
                /*
        MAYBE TODO, DELETE IF NOT: 
          Check if the object is captured, captured events should not have intersects running in parallel
          But wouldn't it be better to just replace capturedMap with a single entry?
          Also, are we OK with straight up making picking up multiple objects impossible?
          
        const pointerId = (data as ThreeEvent<PointerEvent>).pointerId        
        if (pointerId !== undefined) {
          const capturedMeshSet = internal.capturedMap.get(pointerId)
          if (capturedMeshSet) {
            const captured = capturedMeshSet.get(eventObject)
            if (captured && captured.localState.stopped) return
          }
        }*/ if (isPointerMove) {
                    // Move event ...
                    if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
                        // When enter or out is present take care of hover-state
                        const id = makeId(data);
                        const hoveredItem = internal.hovered.get(id);
                        if (!hoveredItem) {
                            // If the object wasn't previously hovered, book it and call its handler
                            internal.hovered.set(id, data);
                            handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
                            handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
                        } else if (hoveredItem.stopped) {
                            // If the object was previously hovered and stopped, we shouldn't allow other items to proceed
                            data.stopPropagation();
                        }
                    }
                    // Call mouse move
                    handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
                } else {
                    // All other events ...
                    const handler = handlers[name];
                    if (handler) {
                        // Forward all events back to their respective handlers with the exception of click events,
                        // which must use the initial target
                        if (!isClickEvent || internal.initialHits.includes(eventObject)) {
                            // Missed events have to come first
                            pointerMissed(event, internal.interaction.filter((object)=>!internal.initialHits.includes(object)));
                            // Now call the handler
                            handler(data);
                        }
                    } else {
                        // Trigger onPointerMissed on all elements that have pointer over/out handlers, but not click and weren't hit
                        if (isClickEvent && internal.initialHits.includes(eventObject)) {
                            pointerMissed(event, internal.interaction.filter((object)=>!internal.initialHits.includes(object)));
                        }
                    }
                }
            }
            handleIntersects(hits, event, delta, onIntersect);
        };
    }
    return {
        handlePointer
    };
}
// Keys that shouldn't be copied between R3F stores
const privateKeys = [
    'set',
    'get',
    'setSize',
    'setFrameloop',
    'setDpr',
    'events',
    'invalidate',
    'advance',
    'size',
    'viewport'
];
const isRenderer = (def)=>!!(def != null && def.render);
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
const createStore = (invalidate, advance)=>{
    const rootState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$3$2e$7$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((set, get)=>{
        const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3();
        const defaultTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3();
        const tempTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3();
        function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
            const { width, height, top, left } = size;
            const aspect = width / height;
            if (target instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3) tempTarget.copy(target);
            else tempTarget.set(...target);
            const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
            if (isOrthographicCamera(camera)) {
                return {
                    width: width / camera.zoom,
                    height: height / camera.zoom,
                    top,
                    left,
                    factor: 1,
                    distance,
                    aspect
                };
            } else {
                const fov = camera.fov * Math.PI / 180; // convert vertical fov to radians
                const h = 2 * Math.tan(fov / 2) * distance; // visible height
                const w = h * (width / height);
                return {
                    width: w,
                    height: h,
                    top,
                    left,
                    factor: width / w,
                    distance,
                    aspect
                };
            }
        }
        let performanceTimeout = undefined;
        const setPerformanceCurrent = (current)=>set((state)=>({
                    performance: {
                        ...state.performance,
                        current
                    }
                }));
        const pointer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector2();
        const rootState = {
            set,
            get,
            // Mock objects that have to be configured
            gl: null,
            camera: null,
            raycaster: null,
            events: {
                priority: 1,
                enabled: true,
                connected: false
            },
            xr: null,
            scene: null,
            invalidate: (frames = 1)=>invalidate(get(), frames),
            advance: (timestamp, runGlobalEffects)=>advance(timestamp, runGlobalEffects, get()),
            legacy: false,
            linear: false,
            flat: false,
            controls: null,
            clock: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Clock(),
            pointer,
            mouse: pointer,
            frameloop: 'always',
            onPointerMissed: undefined,
            performance: {
                current: 1,
                min: 0.5,
                max: 1,
                debounce: 200,
                regress: ()=>{
                    const state = get();
                    // Clear timeout
                    if (performanceTimeout) clearTimeout(performanceTimeout);
                    // Set lower bound performance
                    if (state.performance.current !== state.performance.min) setPerformanceCurrent(state.performance.min);
                    // Go back to upper bound performance after a while unless something regresses meanwhile
                    performanceTimeout = setTimeout(()=>setPerformanceCurrent(get().performance.max), state.performance.debounce);
                }
            },
            size: {
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                updateStyle: false
            },
            viewport: {
                initialDpr: 0,
                dpr: 0,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                aspect: 0,
                distance: 0,
                factor: 0,
                getCurrentViewport
            },
            setEvents: (events)=>set((state)=>({
                        ...state,
                        events: {
                            ...state.events,
                            ...events
                        }
                    })),
            setSize: (width, height, updateStyle, top, left)=>{
                const camera = get().camera;
                const size = {
                    width,
                    height,
                    top: top || 0,
                    left: left || 0,
                    updateStyle
                };
                set((state)=>({
                        size,
                        viewport: {
                            ...state.viewport,
                            ...getCurrentViewport(camera, defaultTarget, size)
                        }
                    }));
            },
            setDpr: (dpr)=>set((state)=>{
                    const resolved = calculateDpr(dpr);
                    return {
                        viewport: {
                            ...state.viewport,
                            dpr: resolved,
                            initialDpr: state.viewport.initialDpr || resolved
                        }
                    };
                }),
            setFrameloop: (frameloop = 'always')=>{
                const clock = get().clock;
                // if frameloop === "never" clock.elapsedTime is updated using advance(timestamp)
                clock.stop();
                clock.elapsedTime = 0;
                if (frameloop !== 'never') {
                    clock.start();
                    clock.elapsedTime = 0;
                }
                set(()=>({
                        frameloop
                    }));
            },
            previousRoot: undefined,
            internal: {
                active: false,
                priority: 0,
                frames: 0,
                lastEvent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createRef(),
                interaction: [],
                hovered: new Map(),
                subscribers: [],
                initialClick: [
                    0,
                    0
                ],
                initialHits: [],
                capturedMap: new Map(),
                subscribe: (ref, priority, store)=>{
                    const internal = get().internal;
                    // If this subscription was given a priority, it takes rendering into its own hands
                    // For that reason we switch off automatic rendering and increase the manual flag
                    // As long as this flag is positive there can be no internal rendering at all
                    // because there could be multiple render subscriptions
                    internal.priority = internal.priority + (priority > 0 ? 1 : 0);
                    internal.subscribers.push({
                        ref,
                        priority,
                        store
                    });
                    // Register subscriber and sort layers from lowest to highest, meaning,
                    // highest priority renders last (on top of the other frames)
                    internal.subscribers = internal.subscribers.sort((a, b)=>a.priority - b.priority);
                    return ()=>{
                        const internal = get().internal;
                        if (internal != null && internal.subscribers) {
                            // Decrease manual flag if this subscription had a priority
                            internal.priority = internal.priority - (priority > 0 ? 1 : 0);
                            // Remove subscriber from list
                            internal.subscribers = internal.subscribers.filter((s)=>s.ref !== ref);
                        }
                    };
                }
            }
        };
        return rootState;
    });
    const state = rootState.getState();
    let oldSize = state.size;
    let oldDpr = state.viewport.dpr;
    let oldCamera = state.camera;
    rootState.subscribe(()=>{
        const { camera, size, viewport, gl, set } = rootState.getState();
        // Resize camera and renderer on changes to size and pixelratio
        if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
            var _size$updateStyle;
            oldSize = size;
            oldDpr = viewport.dpr;
            // Update camera & renderer
            updateCamera(camera, size);
            gl.setPixelRatio(viewport.dpr);
            const updateStyle = (_size$updateStyle = size.updateStyle) != null ? _size$updateStyle : typeof HTMLCanvasElement !== 'undefined' && gl.domElement instanceof HTMLCanvasElement;
            gl.setSize(size.width, size.height, updateStyle);
        }
        // Update viewport once the camera changes
        if (camera !== oldCamera) {
            oldCamera = camera;
            // Update viewport
            set((state)=>({
                    viewport: {
                        ...state.viewport,
                        ...state.viewport.getCurrentViewport(camera)
                    }
                }));
        }
    });
    // Invalidate on any change
    rootState.subscribe((state)=>invalidate(state));
    // Return root state
    return rootState;
};
function createSubs(callback, subs) {
    const sub = {
        callback
    };
    subs.add(sub);
    return ()=>void subs.delete(sub);
}
let i;
let globalEffects = new Set();
let globalAfterEffects = new Set();
let globalTailEffects = new Set();
/**
 * Adds a global render callback which is called each frame.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addEffect
 */ const addEffect = (callback)=>createSubs(callback, globalEffects);
/**
 * Adds a global after-render callback which is called each frame.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addAfterEffect
 */ const addAfterEffect = (callback)=>createSubs(callback, globalAfterEffects);
/**
 * Adds a global callback which is called when rendering stops.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addTail
 */ const addTail = (callback)=>createSubs(callback, globalTailEffects);
function run(effects, timestamp) {
    if (!effects.size) return;
    for (const { callback } of effects.values()){
        callback(timestamp);
    }
}
function flushGlobalEffects(type, timestamp) {
    switch(type){
        case 'before':
            return run(globalEffects, timestamp);
        case 'after':
            return run(globalAfterEffects, timestamp);
        case 'tail':
            return run(globalTailEffects, timestamp);
    }
}
let subscribers;
let subscription;
function render$1(timestamp, state, frame) {
    // Run local effects
    let delta = state.clock.getDelta();
    // In frameloop='never' mode, clock times are updated using the provided timestamp
    if (state.frameloop === 'never' && typeof timestamp === 'number') {
        delta = timestamp - state.clock.elapsedTime;
        state.clock.oldTime = state.clock.elapsedTime;
        state.clock.elapsedTime = timestamp;
    }
    // Call subscribers (useFrame)
    subscribers = state.internal.subscribers;
    for(i = 0; i < subscribers.length; i++){
        subscription = subscribers[i];
        subscription.ref.current(subscription.store.getState(), delta, frame);
    }
    // Render content
    if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera);
    // Decrease frame count
    state.internal.frames = Math.max(0, state.internal.frames - 1);
    return state.frameloop === 'always' ? 1 : state.internal.frames;
}
function createLoop(roots) {
    let running = false;
    let useFrameInProgress = false;
    let repeat;
    let frame;
    let state;
    function loop(timestamp) {
        frame = requestAnimationFrame(loop);
        running = true;
        repeat = 0;
        // Run effects
        flushGlobalEffects('before', timestamp);
        // Render all roots
        useFrameInProgress = true;
        for (const root of roots.values()){
            var _state$gl$xr;
            state = root.store.getState();
            // If the frameloop is invalidated, do not run another frame
            if (state.internal.active && (state.frameloop === 'always' || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) {
                repeat += render$1(timestamp, state);
            }
        }
        useFrameInProgress = false;
        // Run after-effects
        flushGlobalEffects('after', timestamp);
        // Stop the loop if nothing invalidates it
        if (repeat === 0) {
            // Tail call effects, they are called when rendering stops
            flushGlobalEffects('tail', timestamp);
            // Flag end of operation
            running = false;
            return cancelAnimationFrame(frame);
        }
    }
    function invalidate(state, frames = 1) {
        var _state$gl$xr2;
        if (!state) return roots.forEach((root)=>invalidate(root.store.getState(), frames));
        if ((_state$gl$xr2 = state.gl.xr) != null && _state$gl$xr2.isPresenting || !state.internal.active || state.frameloop === 'never') return;
        if (frames > 1) {
            // legacy support for people using frames parameters
            // Increase frames, do not go higher than 60
            state.internal.frames = Math.min(60, state.internal.frames + frames);
        } else {
            if (useFrameInProgress) {
                //called from within a useFrame, it means the user wants an additional frame
                state.internal.frames = 2;
            } else {
                //the user need a new frame, no need to increment further than 1
                state.internal.frames = 1;
            }
        }
        // If the render-loop isn't active, start it
        if (!running) {
            running = true;
            requestAnimationFrame(loop);
        }
    }
    function advance(timestamp, runGlobalEffects = true, state, frame) {
        if (runGlobalEffects) flushGlobalEffects('before', timestamp);
        if (!state) for (const root of roots.values())render$1(timestamp, root.store.getState());
        else render$1(timestamp, state, frame);
        if (runGlobalEffects) flushGlobalEffects('after', timestamp);
    }
    return {
        loop,
        invalidate,
        advance
    };
}
/**
 * Exposes an object's {@link LocalState}.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#useInstanceHandle
 *
 * **Note**: this is an escape hatch to react-internal fields. Expect this to change significantly between versions.
 */ function useInstanceHandle(ref) {
    const instance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    useIsomorphicLayoutEffect(()=>void (instance.current = ref.current.__r3f), [
        ref
    ]);
    return instance;
}
function useStore() {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(context);
    if (!store) throw new Error('R3F: Hooks can only be used within the Canvas component!');
    return store;
}
/**
 * Accesses R3F's internal state, containing renderer, canvas, scene, etc.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usethree
 */ function useThree(selector = (state)=>state, equalityFn) {
    return useStore()(selector, equalityFn);
}
/**
 * Executes a callback before render in a shared frame loop.
 * Can order effects with render priority or manually render with a positive priority.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
 */ function useFrame(callback, renderPriority = 0) {
    const store = useStore();
    const subscribe = store.getState().internal.subscribe;
    // Memoize ref
    const ref = useMutableCallback(callback);
    // Subscribe on mount, unsubscribe on unmount
    useIsomorphicLayoutEffect(()=>subscribe(ref, renderPriority, store), [
        renderPriority,
        subscribe,
        store
    ]);
    return null;
}
/**
 * Returns a node graph of an object with named nodes & materials.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usegraph
 */ function useGraph(object) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>buildGraph(object), [
        object
    ]);
}
const memoizedLoaders = new WeakMap();
function loadingFn(extensions, onProgress) {
    return function(Proto, ...input) {
        // Construct new loader and run extensions
        let loader = memoizedLoaders.get(Proto);
        if (!loader) {
            loader = new Proto();
            memoizedLoaders.set(Proto, loader);
        }
        if (extensions) extensions(loader);
        // Go through the urls and load them
        return Promise.all(input.map((input)=>new Promise((res, reject)=>loader.load(input, (data)=>{
                    if (data.scene) Object.assign(data, buildGraph(data.scene));
                    res(data);
                }, onProgress, (error)=>reject(new Error(`Could not load ${input}: ${error == null ? void 0 : error.message}`))))));
    };
}
/**
 * Synchronously loads and caches assets with a three loader.
 *
 * Note: this hook's caller must be wrapped with `React.Suspense`
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useloader
 */ function useLoader(Proto, input, extensions, onProgress) {
    // Use suspense to load async assets
    const keys = Array.isArray(input) ? input : [
        input
    ];
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$suspend$2d$react$40$0$2e$1$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suspend"])(loadingFn(extensions, onProgress), [
        Proto,
        ...keys
    ], {
        equal: is.equ
    });
    // Return the object/s
    return Array.isArray(input) ? results : results[0];
}
/**
 * Preloads an asset into cache as a side-effect.
 */ useLoader.preload = function(Proto, input, extensions) {
    const keys = Array.isArray(input) ? input : [
        input
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$suspend$2d$react$40$0$2e$1$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preload"])(loadingFn(extensions), [
        Proto,
        ...keys
    ]);
};
/**
 * Removes a loaded asset from cache.
 */ useLoader.clear = function(Proto, input) {
    const keys = Array.isArray(input) ? input : [
        input
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$suspend$2d$react$40$0$2e$1$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clear"])([
        Proto,
        ...keys
    ]);
};
const roots = new Map();
const { invalidate, advance } = createLoop(roots);
const { reconciler, applyProps } = createRenderer(roots, getEventPriority);
const shallowLoose = {
    objects: 'shallow',
    strict: false
};
const createRendererInstance = (gl, canvas)=>{
    const customRenderer = typeof gl === 'function' ? gl(canvas) : gl;
    if (isRenderer(customRenderer)) return customRenderer;
    else return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.WebGLRenderer({
        powerPreference: 'high-performance',
        canvas: canvas,
        antialias: true,
        alpha: true,
        ...gl
    });
};
function computeInitialSize(canvas, defaultSize) {
    const defaultStyle = typeof HTMLCanvasElement !== 'undefined' && canvas instanceof HTMLCanvasElement;
    if (defaultSize) {
        const { width, height, top, left, updateStyle = defaultStyle } = defaultSize;
        return {
            width,
            height,
            top,
            left,
            updateStyle
        };
    } else if (typeof HTMLCanvasElement !== 'undefined' && canvas instanceof HTMLCanvasElement && canvas.parentElement) {
        const { width, height, top, left } = canvas.parentElement.getBoundingClientRect();
        return {
            width,
            height,
            top,
            left,
            updateStyle: defaultStyle
        };
    } else if (typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
        return {
            width: canvas.width,
            height: canvas.height,
            top: 0,
            left: 0,
            updateStyle: defaultStyle
        };
    }
    return {
        width: 0,
        height: 0,
        top: 0,
        left: 0
    };
}
function createRoot(canvas) {
    // Check against mistaken use of createRoot
    const prevRoot = roots.get(canvas);
    const prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
    const prevStore = prevRoot == null ? void 0 : prevRoot.store;
    if (prevRoot) console.warn('R3F.createRoot should only be called once!');
    // Report when an error was detected in a previous render
    // https://github.com/pmndrs/react-three-fiber/pull/2261
    const logRecoverableError = typeof reportError === 'function' ? // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError : // In older browsers and test environments, fallback to console.error.
    console.error;
    // Create store
    const store = prevStore || createStore(invalidate, advance);
    // Create renderer
    const fiber = prevFiber || reconciler.createContainer(store, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$reconciler$40$0$2e$27$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConcurrentRoot"], null, false, null, '', logRecoverableError, null);
    // Map it
    if (!prevRoot) roots.set(canvas, {
        fiber,
        store
    });
    // Locals
    let onCreated;
    let configured = false;
    let lastCamera;
    return {
        configure (props = {}) {
            let { gl: glConfig, size: propsSize, scene: sceneOptions, events, onCreated: onCreatedCallback, shadows = false, linear = false, flat = false, legacy = false, orthographic = false, frameloop = 'always', dpr = [
                1,
                2
            ], performance: performance1, raycaster: raycastOptions, camera: cameraOptions, onPointerMissed } = props;
            let state = store.getState();
            // Set up renderer (one time only!)
            let gl = state.gl;
            if (!state.gl) state.set({
                gl: gl = createRendererInstance(glConfig, canvas)
            });
            // Set up raycaster (one time only!)
            let raycaster = state.raycaster;
            if (!raycaster) state.set({
                raycaster: raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Raycaster()
            });
            // Set raycaster options
            const { params, ...options } = raycastOptions || {};
            if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, {
                ...options
            });
            if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, {
                params: {
                    ...raycaster.params,
                    ...params
                }
            });
            // Create default camera, don't overwrite any user-set state
            if (!state.camera || state.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
                lastCamera = cameraOptions;
                const isCamera = cameraOptions instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Camera;
                const camera = isCamera ? cameraOptions : orthographic ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.OrthographicCamera(0, 0, 0, 0, 0.1, 1000) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PerspectiveCamera(75, 0, 0.1, 1000);
                if (!isCamera) {
                    camera.position.z = 5;
                    if (cameraOptions) {
                        applyProps(camera, cameraOptions);
                        // Preserve user-defined frustum if possible
                        // https://github.com/pmndrs/react-three-fiber/issues/3160
                        if ('aspect' in cameraOptions || 'left' in cameraOptions || 'right' in cameraOptions || 'bottom' in cameraOptions || 'top' in cameraOptions) {
                            camera.manual = true;
                            camera.updateProjectionMatrix();
                        }
                    }
                    // Always look at center by default
                    if (!state.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
                }
                state.set({
                    camera
                });
                // Configure raycaster
                // https://github.com/pmndrs/react-xr/issues/300
                raycaster.camera = camera;
            }
            // Set up scene (one time only!)
            if (!state.scene) {
                let scene;
                if (sceneOptions instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Scene) {
                    scene = sceneOptions;
                } else {
                    scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Scene();
                    if (sceneOptions) applyProps(scene, sceneOptions);
                }
                state.set({
                    scene: prepare(scene)
                });
            }
            // Set up XR (one time only!)
            if (!state.xr) {
                var _gl$xr;
                // Handle frame behavior in WebXR
                const handleXRFrame = (timestamp, frame)=>{
                    const state = store.getState();
                    if (state.frameloop === 'never') return;
                    advance(timestamp, true, state, frame);
                };
                // Toggle render switching on session
                const handleSessionChange = ()=>{
                    const state = store.getState();
                    state.gl.xr.enabled = state.gl.xr.isPresenting;
                    state.gl.xr.setAnimationLoop(state.gl.xr.isPresenting ? handleXRFrame : null);
                    if (!state.gl.xr.isPresenting) invalidate(state);
                };
                // WebXR session manager
                const xr = {
                    connect () {
                        const gl = store.getState().gl;
                        gl.xr.addEventListener('sessionstart', handleSessionChange);
                        gl.xr.addEventListener('sessionend', handleSessionChange);
                    },
                    disconnect () {
                        const gl = store.getState().gl;
                        gl.xr.removeEventListener('sessionstart', handleSessionChange);
                        gl.xr.removeEventListener('sessionend', handleSessionChange);
                    }
                };
                // Subscribe to WebXR session events
                if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === 'function') xr.connect();
                state.set({
                    xr
                });
            }
            // Set shadowmap
            if (gl.shadowMap) {
                const oldEnabled = gl.shadowMap.enabled;
                const oldType = gl.shadowMap.type;
                gl.shadowMap.enabled = !!shadows;
                if (is.boo(shadows)) {
                    gl.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PCFSoftShadowMap;
                } else if (is.str(shadows)) {
                    var _types$shadows;
                    const types = {
                        basic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BasicShadowMap,
                        percentage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PCFShadowMap,
                        soft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PCFSoftShadowMap,
                        variance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.VSMShadowMap
                    };
                    gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PCFSoftShadowMap;
                } else if (is.obj(shadows)) {
                    Object.assign(gl.shadowMap, shadows);
                }
                if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
            }
            // Safely set color management if available.
            // Avoid accessing THREE.ColorManagement to play nice with older versions
            const ColorManagement = getColorManagement();
            if (ColorManagement) {
                if ('enabled' in ColorManagement) ColorManagement.enabled = !legacy;
                else if ('legacyMode' in ColorManagement) ColorManagement.legacyMode = legacy;
            }
            if (!configured) {
                // Set color space and tonemapping preferences, once
                const LinearEncoding = 3000;
                const sRGBEncoding = 3001;
                applyProps(gl, {
                    outputEncoding: linear ? LinearEncoding : sRGBEncoding,
                    toneMapping: flat ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.NoToneMapping : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ACESFilmicToneMapping
                });
            }
            // Update color management state
            if (state.legacy !== legacy) state.set(()=>({
                    legacy
                }));
            if (state.linear !== linear) state.set(()=>({
                    linear
                }));
            if (state.flat !== flat) state.set(()=>({
                    flat
                }));
            // Set gl props
            if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
            // Store events internally
            if (events && !state.events.handlers) state.set({
                events: events(store)
            });
            // Check size, allow it to take on container bounds initially
            const size = computeInitialSize(canvas, propsSize);
            if (!is.equ(size, state.size, shallowLoose)) {
                state.setSize(size.width, size.height, size.updateStyle, size.top, size.left);
            }
            // Check pixelratio
            if (dpr && state.viewport.dpr !== calculateDpr(dpr)) state.setDpr(dpr);
            // Check frameloop
            if (state.frameloop !== frameloop) state.setFrameloop(frameloop);
            // Check pointer missed
            if (!state.onPointerMissed) state.set({
                onPointerMissed
            });
            // Check performance
            if (performance1 && !is.equ(performance1, state.performance, shallowLoose)) state.set((state)=>({
                    performance: {
                        ...state.performance,
                        ...performance1
                    }
                }));
            // Set locals
            onCreated = onCreatedCallback;
            configured = true;
            return this;
        },
        render (children) {
            // The root has to be configured before it can be rendered
            if (!configured) this.configure();
            reconciler.updateContainer(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Provider, {
                store: store,
                children: children,
                onCreated: onCreated,
                rootElement: canvas
            }), fiber, null, ()=>undefined);
            return store;
        },
        unmount () {
            unmountComponentAtNode(canvas);
        }
    };
}
function render(children, canvas, config) {
    console.warn('R3F.render is no longer supported in React 18. Use createRoot instead!');
    const root = createRoot(canvas);
    root.configure(config);
    return root.render(children);
}
function Provider({ store, children, onCreated, rootElement }) {
    useIsomorphicLayoutEffect(()=>{
        const state = store.getState();
        // Flag the canvas active, rendering will now begin
        state.set((state)=>({
                internal: {
                    ...state.internal,
                    active: true
                }
            }));
        // Notifiy that init is completed, the scene graph exists, but nothing has yet rendered
        if (onCreated) onCreated(state);
        // Connect events to the targets parent, this is done to ensure events are registered on
        // a shared target, and not on the canvas itself
        if (!store.getState().events.connected) state.events.connect == null ? void 0 : state.events.connect(rootElement);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(context.Provider, {
        value: store,
        children: children
    });
}
function unmountComponentAtNode(canvas, callback) {
    const root = roots.get(canvas);
    const fiber = root == null ? void 0 : root.fiber;
    if (fiber) {
        const state = root == null ? void 0 : root.store.getState();
        if (state) state.internal.active = false;
        reconciler.updateContainer(null, fiber, null, ()=>{
            if (state) {
                setTimeout(()=>{
                    try {
                        var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
                        state.events.disconnect == null ? void 0 : state.events.disconnect();
                        (_state$gl = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
                        (_state$gl2 = state.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
                        if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
                        dispose(state);
                        roots.delete(canvas);
                        if (callback) callback(canvas);
                    } catch (e) {
                    /* ... */ }
                }, 500);
            }
        });
    }
}
function createPortal(children, container, state) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Portal, {
        children: children,
        container: container,
        state: state
    }, container.uuid);
}
function Portal({ state = {}, children, container }) {
    /** This has to be a component because it would not be able to call useThree/useStore otherwise since
   *  if this is our environment, then we are not in r3f's renderer but in react-dom, it would trigger
   *  the "R3F hooks can only be used within the Canvas component!" warning:
   *  <Canvas>
   *    {createPortal(...)} */ const { events, size, ...rest } = state;
    const previousRoot = useStore();
    const [raycaster] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Raycaster());
    const [pointer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector2());
    const inject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((rootState, injectState)=>{
        const intersect = {
            ...rootState
        }; // all prev state props
        // Only the fields of "rootState" that do not differ from injectState
        // Some props should be off-limits
        // Otherwise filter out the props that are different and let the inject layer take precedence
        Object.keys(rootState).forEach((key)=>{
            if (// Some props should be off-limits
            privateKeys.includes(key) || // Otherwise filter out the props that are different and let the inject layer take precedence
            // Unless the inject layer props is undefined, then we keep the root layer
            rootState[key] !== injectState[key] && injectState[key]) {
                delete intersect[key];
            }
        });
        let viewport = undefined;
        if (injectState && size) {
            const camera = injectState.camera;
            // Calculate the override viewport, if present
            viewport = rootState.viewport.getCurrentViewport(camera, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Vector3(), size);
            // Update the portal camera, if it differs from the previous layer
            if (camera !== rootState.camera) updateCamera(camera, size);
        }
        return {
            // The intersect consists of the previous root state
            ...intersect,
            // Portals have their own scene, which forms the root, a raycaster and a pointer
            scene: container,
            raycaster,
            pointer,
            mouse: pointer,
            // Their previous root is the layer before it
            previousRoot,
            // Events, size and viewport can be overridden by the inject layer
            events: {
                ...rootState.events,
                ...injectState == null ? void 0 : injectState.events,
                ...events
            },
            size: {
                ...rootState.size,
                ...size
            },
            viewport: {
                ...rootState.viewport,
                ...viewport
            },
            ...rest
        };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        state
    ]);
    const [usePortalStore] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(()=>{
        // Create a mirrored store, based on the previous root with a few overrides ...
        const previousState = previousRoot.getState();
        const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$3$2e$7$2e$2_react$40$18$2e$3$2e$1$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((set, get)=>({
                ...previousState,
                scene: container,
                raycaster,
                pointer,
                mouse: pointer,
                previousRoot,
                events: {
                    ...previousState.events,
                    ...events
                },
                size: {
                    ...previousState.size,
                    ...size
                },
                ...rest,
                // Set and get refer to this root-state
                set,
                get,
                // Layers are allowed to override events
                setEvents: (events)=>set((state)=>({
                            ...state,
                            events: {
                                ...state.events,
                                ...events
                            }
                        }))
            }));
        return store;
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        // Subscribe to previous root-state and copy changes over to the mirrored portal-state
        const unsub = previousRoot.subscribe((prev)=>usePortalStore.setState((state)=>inject(prev, state)));
        return ()=>{
            unsub();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        inject
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        usePortalStore.setState((injectState)=>inject(previousRoot.getState(), injectState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        inject
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        return ()=>{
            usePortalStore.destroy();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: reconciler.createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(context.Provider, {
            value: usePortalStore,
            children: children
        }), usePortalStore, null)
    });
}
/**
 * Force React to flush any updates inside the provided callback synchronously and immediately.
 * All the same caveats documented for react-dom's `flushSync` apply here (see https://react.dev/reference/react-dom/flushSync).
 * Nevertheless, sometimes one needs to render synchronously, for example to keep DOM and 3D changes in lock-step without
 * having to revert to a non-React solution.
 */ function flushSync(fn) {
    // `flushSync` implementation only takes one argument. I don't know what's up with the type declaration for it.
    return reconciler.flushSync(fn, undefined);
}
reconciler.injectIntoDevTools({
    bundleType: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 1,
    rendererPackageName: '@react-three/fiber',
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.version
});
const act = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.unstable_act;
const DOM_EVENTS = {
    onClick: [
        'click',
        false
    ],
    onContextMenu: [
        'contextmenu',
        false
    ],
    onDoubleClick: [
        'dblclick',
        false
    ],
    onWheel: [
        'wheel',
        true
    ],
    onPointerDown: [
        'pointerdown',
        true
    ],
    onPointerUp: [
        'pointerup',
        true
    ],
    onPointerLeave: [
        'pointerleave',
        true
    ],
    onPointerMove: [
        'pointermove',
        true
    ],
    onPointerCancel: [
        'pointercancel',
        true
    ],
    onLostPointerCapture: [
        'lostpointercapture',
        true
    ]
};
/** Default R3F event manager for web */ function createPointerEvents(store) {
    const { handlePointer } = createEvents(store);
    return {
        priority: 1,
        enabled: true,
        compute (event, state, previous) {
            // https://github.com/pmndrs/react-three-fiber/pull/782
            // Events trigger outside of canvas when moved, use offsetX/Y by default and allow overrides
            state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
            state.raycaster.setFromCamera(state.pointer, state.camera);
        },
        connected: undefined,
        handlers: Object.keys(DOM_EVENTS).reduce((acc, key)=>({
                ...acc,
                [key]: handlePointer(key)
            }), {}),
        update: ()=>{
            var _internal$lastEvent;
            const { events, internal } = store.getState();
            if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
        },
        connect: (target)=>{
            var _events$handlers;
            const { set, events } = store.getState();
            events.disconnect == null ? void 0 : events.disconnect();
            set((state)=>({
                    events: {
                        ...state.events,
                        connected: target
                    }
                }));
            Object.entries((_events$handlers = events.handlers) != null ? _events$handlers : []).forEach(([name, event])=>{
                const [eventName, passive] = DOM_EVENTS[name];
                target.addEventListener(eventName, event, {
                    passive
                });
            });
        },
        disconnect: ()=>{
            const { set, events } = store.getState();
            if (events.connected) {
                var _events$handlers2;
                Object.entries((_events$handlers2 = events.handlers) != null ? _events$handlers2 : []).forEach(([name, event])=>{
                    if (events && events.connected instanceof HTMLElement) {
                        const [eventName] = DOM_EVENTS[name];
                        events.connected.removeEventListener(eventName, event);
                    }
                });
                set((state)=>({
                        events: {
                            ...state.events,
                            connected: undefined
                        }
                    }));
            }
        }
    };
}
;

})()),
"[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Canvas": ()=>Canvas
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debounce$40$1$2e$2$2e$1$2f$node_modules$2f$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/debounce@1.2.1/node_modules/debounce/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/three@0.168.0/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$its$2d$fine$40$1$2e$2$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/its-fine@1.2.5_react@18.3.1/node_modules/its-fine/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.77.8/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
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
/* eslint-disable react-hooks/rules-of-hooks */ function useMeasure({ debounce, scroll, polyfill, offsetSize } = {
    debounce: 0,
    scroll: false,
    offsetSize: false
}) {
    const ResizeObserver = polyfill || typeof window !== 'undefined' && window.ResizeObserver;
    const [bounds, set] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    });
    // In test mode
    if (!ResizeObserver) {
        // @ts-ignore
        bounds.width = 1280;
        // @ts-ignore
        bounds.height = 800;
        return [
            ()=>{},
            bounds,
            ()=>{}
        ];
    }
    // keep all state in a ref
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: bounds
    });
    // set actual debounce values early, so effects know if they should react accordingly
    const scrollDebounce = debounce ? typeof debounce === 'number' ? debounce : debounce.scroll : null;
    const resizeDebounce = debounce ? typeof debounce === 'number' ? debounce : debounce.resize : null;
    // make sure to update state only as long as the component is truly mounted
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mounted.current = true;
        return ()=>void (mounted.current = false);
    });
    // memoize handlers, so event-listeners know when they should update
    const [forceRefresh, resizeChange, scrollChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const callback = ()=>{
            if (!state.current.element) return;
            const { left, top, width, height, bottom, right, x, y } = state.current.element.getBoundingClientRect();
            const size = {
                left,
                top,
                width,
                height,
                bottom,
                right,
                x,
                y
            };
            if (state.current.element instanceof HTMLElement && offsetSize) {
                size.height = state.current.element.offsetHeight;
                size.width = state.current.element.offsetWidth;
            }
            Object.freeze(size);
            if (mounted.current && !areBoundsEqual(state.current.lastBounds, size)) set(state.current.lastBounds = size);
        };
        return [
            callback,
            resizeDebounce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debounce$40$1$2e$2$2e$1$2f$node_modules$2f$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(callback, resizeDebounce) : callback,
            scrollDebounce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$debounce$40$1$2e$2$2e$1$2f$node_modules$2f$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(callback, scrollDebounce) : callback
        ];
    }, [
        set,
        offsetSize,
        scrollDebounce,
        resizeDebounce
    ]);
    // cleanup current scroll-listeners / observers
    function removeListeners() {
        if (state.current.scrollContainers) {
            state.current.scrollContainers.forEach((element)=>element.removeEventListener('scroll', scrollChange, true));
            state.current.scrollContainers = null;
        }
        if (state.current.resizeObserver) {
            state.current.resizeObserver.disconnect();
            state.current.resizeObserver = null;
        }
    }
    // add scroll-listeners / observers
    function addListeners() {
        if (!state.current.element) return;
        state.current.resizeObserver = new ResizeObserver(scrollChange);
        state.current.resizeObserver.observe(state.current.element);
        if (scroll && state.current.scrollContainers) {
            state.current.scrollContainers.forEach((scrollContainer)=>scrollContainer.addEventListener('scroll', scrollChange, {
                    capture: true,
                    passive: true
                }));
        }
    }
    // the ref we expose to the user
    const ref = (node)=>{
        if (!node || node === state.current.element) return;
        removeListeners();
        state.current.element = node;
        state.current.scrollContainers = findScrollContainers(node);
        addListeners();
    };
    // add general event listeners
    useOnWindowScroll(scrollChange, Boolean(scroll));
    useOnWindowResize(resizeChange);
    // respond to changes that are relevant for the listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        removeListeners();
        addListeners();
    }, [
        scroll,
        scrollChange,
        resizeChange
    ]);
    // remove all listeners when the components unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>removeListeners, []);
    return [
        ref,
        bounds,
        forceRefresh
    ];
}
// Adds native resize listener to window
function useOnWindowResize(onWindowResize) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cb = onWindowResize;
        window.addEventListener('resize', cb);
        return ()=>void window.removeEventListener('resize', cb);
    }, [
        onWindowResize
    ]);
}
function useOnWindowScroll(onScroll, enabled) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (enabled) {
            const cb = onScroll;
            window.addEventListener('scroll', cb, {
                capture: true,
                passive: true
            });
            return ()=>void window.removeEventListener('scroll', cb, true);
        }
    }, [
        onScroll,
        enabled
    ]);
}
// Returns a list of scroll offsets
function findScrollContainers(element) {
    const result = [];
    if (!element || element === document.body) return result;
    const { overflow, overflowX, overflowY } = window.getComputedStyle(element);
    if ([
        overflow,
        overflowX,
        overflowY
    ].some((prop)=>prop === 'auto' || prop === 'scroll')) result.push(element);
    return [
        ...result,
        ...findScrollContainers(element.parentElement)
    ];
}
// Checks if element boundaries are equal
const keys = [
    'x',
    'y',
    'top',
    'bottom',
    'left',
    'right',
    'width',
    'height'
];
const areBoundsEqual = (a, b)=>keys.every((key)=>a[key] === b[key]);
const CanvasImpl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function Canvas({ children, fallback, resize, style, gl, events = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"], eventSource, eventPrefix, shadows, linear, flat, legacy, orthographic, frameloop, dpr, performance, raycaster, camera, scene, onPointerMissed, onCreated, ...props }, forwardedRef) {
    // Create a known catalogue of Threejs-native elements
    // This will include the entire THREE namespace by default, users can extend
    // their own elements by using the createRoot API instead
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$168$2e$0$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__), []);
    const Bridge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$its$2d$fine$40$1$2e$2$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextBridge"])();
    const [containerRef, containerRect] = useMeasure({
        scroll: true,
        debounce: {
            scroll: 50,
            resize: 0
        },
        ...resize
    });
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    const divRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useImperativeHandle(forwardedRef, ()=>canvasRef.current);
    const handlePointerMissed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(onPointerMissed);
    const [block, setBlock] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false);
    // Suspend this component if block is a promise (2nd run)
    if (block) throw block;
    // Throw exception outwards if anything within canvas throws
    if (error) throw error;
    const root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(()=>{
        const canvas = canvasRef.current;
        if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
            if (!root.current) root.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(canvas);
            root.current.configure({
                gl,
                events,
                shadows,
                linear,
                flat,
                legacy,
                orthographic,
                frameloop,
                dpr,
                performance,
                raycaster,
                camera,
                scene,
                size: containerRect,
                // Pass mutable reference to onPointerMissed so it's free to update
                onPointerMissed: (...args)=>handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
                onCreated: (state)=>{
                    // Connect to event source
                    state.events.connect == null ? void 0 : state.events.connect(eventSource ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(eventSource) ? eventSource.current : eventSource : divRef.current);
                    // Set up compute function
                    if (eventPrefix) {
                        state.setEvents({
                            compute: (event, state)=>{
                                const x = event[eventPrefix + 'X'];
                                const y = event[eventPrefix + 'Y'];
                                state.pointer.set(x / state.size.width * 2 - 1, -(y / state.size.height) * 2 + 1);
                                state.raycaster.setFromCamera(state.pointer, state.camera);
                            }
                        });
                    }
                    // Call onCreated callback
                    onCreated == null ? void 0 : onCreated(state);
                }
            });
            root.current.render(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bridge, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E"], {
                    set: setError,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Suspense, {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"], {
                            set: setBlock
                        }),
                        children: children
                    })
                })
            }));
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        const canvas = canvasRef.current;
        if (canvas) return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(canvas);
    }, []);
    // When the event source is not this div, we need to set pointer-events to none
    // Or else the canvas will block events from reaching the event source
    const pointerEvents = eventSource ? 'none' : 'auto';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: divRef,
        style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents,
            ...style
        },
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: containerRef,
            style: {
                width: '100%',
                height: '100%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("canvas", {
                ref: canvasRef,
                style: {
                    display: 'block'
                },
                children: fallback
            })
        })
    });
});
/**
 * A DOM canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */ const Canvas = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function CanvasWrapper(props, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$its$2d$fine$40$1$2e$2$2e$5_react$40$18$2e$3$2e$1$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiberProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_sass$40$1$2e$77$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CanvasImpl, {
            ...props,
            ref: ref
        })
    });
});
;

})()),
"[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript) <export e as extend>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "extend": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript) <export o as addEffect>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript) <export k as applyProps>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "applyProps": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript) <export D as useThree>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useThree": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["D"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript) <export F as useFrame>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useFrame": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$8$2e$17$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1_three$40$0$2e$168$2e$0$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$3515660a$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-three+fiber@8.17.8_react-dom@18.3.1_react@18.3.1__react@18.3.1_three@0.168.0/node_modules/@react-three/fiber/dist/events-3515660a.esm.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),

};

//# sourceMappingURL=5aae6_%40react-three_fiber_dist_e955ad._.js.map