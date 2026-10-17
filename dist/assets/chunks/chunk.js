var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
          case REACT_VIEW_TRANSITION_TYPE:
            return "ViewTransition";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var resolveDebugValue = null, rejectDebugValue = null, ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now(), ioInfo.value = new Promise(function(resolve, reject) {
            resolveDebugValue = resolve;
            rejectDebugValue = reject;
          }));
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                if (null != _ioInfo) {
                  _ioInfo.end = performance.now();
                  var debugValue = null == moduleObject ? void 0 : moduleObject.default;
                  resolveDebugValue(debugValue);
                  _ioInfo.value.status = "fulfilled";
                  _ioInfo.value.value = debugValue;
                }
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now(), _ioInfo2.value.then(noop, noop), rejectDebugValue(error), _ioInfo2.value.status = "rejected", _ioInfo2.value.reason = error);
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function startTransition(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition.types = null !== prevTransition ? prevTransition.types : null;
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      }
      function addTransitionType(type) {
        var transition = ReactSharedInternals.T;
        if (null !== transition) {
          var transitionTypes = transition.types;
          null === transitionTypes ? transition.types = [type] : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
        } else
          0 === ReactSharedInternals.asyncTransitions && console.error(
            "addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."
          ), startTransition(addTransitionType.bind(null, type));
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.addTransitionType = addTransitionType;
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        var propName;
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        (propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++) ? (childArray = Error.stackTraceLimit, Error.stackTraceLimit = 10, childrenLength = Error("react-stack-top-frame"), Error.stackTraceLimit = childArray) : childrenLength = unknownOwnerDebugStack;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          childrenLength,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = startTransition;
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.3.1";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
          case REACT_VIEW_TRANSITION_TYPE:
            return "ViewTransition";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var React3 = require_react(), REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = React3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React3 = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React3.react_stack_bottom_frame.bind(
        React3,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
          var previousStackTraceLimit = Error.stackTraceLimit;
          Error.stackTraceLimit = 10;
          var debugStackDEV = Error("react-stack-top-frame");
          Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          debugStackDEV,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
          var previousStackTraceLimit = Error.stackTraceLimit;
          Error.stackTraceLimit = 10;
          var debugStackDEV = Error("react-stack-top-frame");
          Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          debugStackDEV,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// src/config/site.ts
var SITE_CONFIG = {
  brand: "Novyra AI",
  tagline: "Ideias inteligentes. Resultados reais.",
  institutional: "Intelig\xEAncia artificial e automa\xE7\xE3o para o atendimento de empresas.",
  offer: {
    originalPrice: 350,
    promotionalPrice: 297,
    eligibility: "Primeira contrata\xE7\xE3o",
    /**
     * PENDENTE DE CONFIRMAÇÃO: o que está incluído no plano.
     * Enquanto estiver vazio, nenhuma lista de funcionalidades é exibida na página.
     */
    includedFeatures: []
  },
  /**
   * Mídia animada. Para trocar os vídeos, substitua os arquivos em /public/videos (mesmo nome)
   * ou altere os caminhos abaixo. Se um vídeo não existir ou falhar, a imagem `fallback` é exibida.
   */
  media: {
    logoAnimation: {
      src: "/videos/novyra-logo.mp4",
      poster: "/images/video-poster-logo.webp",
      fallback: "/images/logo-lockup-tagline.webp",
      fallbackSize: { width: 900, height: 680 },
      /**
       * O vídeo exportado do Google Flow gerou o slogan com erro de grafia ("INTELIYGENTES").
       * Com true, a faixa do slogan é mascarada no vídeo. Use false após exportar uma versão corrigida.
       */
      hideTagline: true
    },
    offerAnimation: {
      src: "/videos/novyra-oferta.mp4",
      poster: "/images/video-poster-oferta.webp",
      fallback: "/images/novyra-oferta.webp",
      fallbackSize: { width: 1024, height: 1536 },
      /** Proporção da janela exibida do vídeo (largura / altura). Ajuste se trocar a composição. */
      frameAspect: "5 / 7"
    }
  },
  /** Destino do botão principal do hero: "checkout" abre o pagamento; "offer" rola até a seção de oferta. */
  heroCtaTarget: "checkout",
  /** Único endereço de checkout usado por TODOS os botões de compra. */
  checkoutUrl: "https://pay.cakto.com.br/owstw3v_1208780",
  /** true = abre o checkout em nova aba; false = mesma aba. */
  checkoutOpensInNewTab: false,
  /** Analytics: desativado até receber uma integração real (ver src/lib/analytics.ts). */
  analytics: { enabled: false },
  /**
   * Links do rodapé. Só adicione quando existir uma página/destino válido.
   * Ex.: { label: "Privacidade", href: "/privacidade" }
   */
  footerLinks: []
};

// src/lib/checkout.ts
var PLACEHOLDER = /(example\.|placeholder|seu-link|xxxx|todo|localhost)/i;
function isValidCheckoutUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" && !PLACEHOLDER.test(url);
  } catch {
    return false;
  }
}
var CHECKOUT_URL = SITE_CONFIG.checkoutUrl;
var CHECKOUT_READY = isValidCheckoutUrl(CHECKOUT_URL);
if (!CHECKOUT_READY) {
  console.warn(
    "[Novyra] SITE_CONFIG.checkoutUrl n\xE3o est\xE1 configurado. Os bot\xF5es de compra ficam desativados at\xE9 que o link oficial seja informado."
  );
}
var brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
var formatBRL = (value) => brl.format(value).replace(/ /g, " ");
var withPrice = (text, price) => text.replaceAll("{{price}}", formatBRL(price));

// src/components/Logo.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var FILES = {
  symbol: { src: "/images/logo-symbol.webp", w: 480, h: 409 },
  wordmark: { src: "/images/logo-wordmark.webp", w: 720, h: 163 },
  lockup: { src: "/images/logo-lockup.webp", w: 900, h: 612 }
};
function Logo({ variant, className = "", priority = false, alt = SITE_CONFIG.brand }) {
  const [failed, setFailed] = (0, import_react.useState)(false);
  const f = FILES[variant];
  if (failed) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `logo-fallback ${className}`, role: alt ? "img" : void 0, "aria-label": alt || void 0, children: "NOVYRA AI" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      className,
      src: f.src,
      width: f.w,
      height: f.h,
      alt,
      decoding: "async",
      loading: priority ? "eager" : "lazy",
      fetchPriority: priority ? "high" : "auto",
      onError: () => setFailed(true),
      draggable: false
    }
  );
}

// node_modules/react-icons/lib/iconBase.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react2 = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react2.default.createContext && /* @__PURE__ */ import_react2.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react3.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react3.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var attr = props.attr, size = props.size, title = props.title, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react3.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react3.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react3.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/lu/index.mjs
function LuX(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M18 6 6 18" }, "child": [] }, { "tag": "path", "attr": { "d": "m6 6 12 12" }, "child": [] }] })(props);
}
function LuWrench(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }, "child": [] }] })(props);
}
function LuUtensilsCrossed(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }, "child": [] }, { "tag": "path", "attr": { "d": "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }, "child": [] }, { "tag": "path", "attr": { "d": "m2.1 21.8 6.4-6.3" }, "child": [] }, { "tag": "path", "attr": { "d": "m19 5-7 7" }, "child": [] }] })(props);
}
function LuUserRound(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "8", "r": "5" }, "child": [] }, { "tag": "path", "attr": { "d": "M20 21a8 8 0 0 0-16 0" }, "child": [] }] })(props);
}
function LuStore(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }, "child": [] }, { "tag": "path", "attr": { "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }, "child": [] }, { "tag": "path", "attr": { "d": "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }, "child": [] }, { "tag": "path", "attr": { "d": "M2 7h20" }, "child": [] }, { "tag": "path", "attr": { "d": "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" }, "child": [] }] })(props);
}
function LuStethoscope(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M11 2v2" }, "child": [] }, { "tag": "path", "attr": { "d": "M5 2v2" }, "child": [] }, { "tag": "path", "attr": { "d": "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }, "child": [] }, { "tag": "path", "attr": { "d": "M8 15a6 6 0 0 0 12 0v-3" }, "child": [] }, { "tag": "circle", "attr": { "cx": "20", "cy": "10", "r": "2" }, "child": [] }] })(props);
}
function LuSlidersHorizontal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "21", "x2": "14", "y1": "4", "y2": "4" }, "child": [] }, { "tag": "line", "attr": { "x1": "10", "x2": "3", "y1": "4", "y2": "4" }, "child": [] }, { "tag": "line", "attr": { "x1": "21", "x2": "12", "y1": "12", "y2": "12" }, "child": [] }, { "tag": "line", "attr": { "x1": "8", "x2": "3", "y1": "12", "y2": "12" }, "child": [] }, { "tag": "line", "attr": { "x1": "21", "x2": "16", "y1": "20", "y2": "20" }, "child": [] }, { "tag": "line", "attr": { "x1": "12", "x2": "3", "y1": "20", "y2": "20" }, "child": [] }, { "tag": "line", "attr": { "x1": "14", "x2": "14", "y1": "2", "y2": "6" }, "child": [] }, { "tag": "line", "attr": { "x1": "8", "x2": "8", "y1": "10", "y2": "14" }, "child": [] }, { "tag": "line", "attr": { "x1": "16", "x2": "16", "y1": "18", "y2": "22" }, "child": [] }] })(props);
}
function LuSettings2(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M20 7h-9" }, "child": [] }, { "tag": "path", "attr": { "d": "M14 17H5" }, "child": [] }, { "tag": "circle", "attr": { "cx": "17", "cy": "17", "r": "3" }, "child": [] }, { "tag": "circle", "attr": { "cx": "7", "cy": "7", "r": "3" }, "child": [] }] })(props);
}
function LuRotateCcw(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }, "child": [] }, { "tag": "path", "attr": { "d": "M3 3v5h5" }, "child": [] }] })(props);
}
function LuReceiptText(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }, "child": [] }, { "tag": "path", "attr": { "d": "M14 8H8" }, "child": [] }, { "tag": "path", "attr": { "d": "M16 12H8" }, "child": [] }, { "tag": "path", "attr": { "d": "M13 16H8" }, "child": [] }] })(props);
}
function LuPlus(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M5 12h14" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 5v14" }, "child": [] }] })(props);
}
function LuPlay(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polygon", "attr": { "points": "6 3 20 12 6 21 6 3" }, "child": [] }] })(props);
}
function LuPause(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "14", "y": "4", "width": "4", "height": "16", "rx": "1" }, "child": [] }, { "tag": "rect", "attr": { "x": "6", "y": "4", "width": "4", "height": "16", "rx": "1" }, "child": [] }] })(props);
}
function LuMessageCircleQuestion(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }, "child": [] }, { "tag": "path", "attr": { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 17h.01" }, "child": [] }] })(props);
}
function LuMenu(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "4", "x2": "20", "y1": "12", "y2": "12" }, "child": [] }, { "tag": "line", "attr": { "x1": "4", "x2": "20", "y1": "6", "y2": "6" }, "child": [] }, { "tag": "line", "attr": { "x1": "4", "x2": "20", "y1": "18", "y2": "18" }, "child": [] }] })(props);
}
function LuListChecks(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "m3 17 2 2 4-4" }, "child": [] }, { "tag": "path", "attr": { "d": "m3 7 2 2 4-4" }, "child": [] }, { "tag": "path", "attr": { "d": "M13 6h8" }, "child": [] }, { "tag": "path", "attr": { "d": "M13 12h8" }, "child": [] }, { "tag": "path", "attr": { "d": "M13 18h8" }, "child": [] }] })(props);
}
function LuInfo(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "10" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 16v-4" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 8h.01" }, "child": [] }] })(props);
}
function LuInbox(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "22 12 16 12 14 15 10 15 8 12 2 12" }, "child": [] }, { "tag": "path", "attr": { "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }, "child": [] }] })(props);
}
function LuClock(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "10" }, "child": [] }, { "tag": "polyline", "attr": { "points": "12 6 12 12 16 14" }, "child": [] }] })(props);
}
function LuClipboardList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "width": "8", "height": "4", "x": "8", "y": "2", "rx": "1", "ry": "1" }, "child": [] }, { "tag": "path", "attr": { "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 11h4" }, "child": [] }, { "tag": "path", "attr": { "d": "M12 16h4" }, "child": [] }, { "tag": "path", "attr": { "d": "M8 11h.01" }, "child": [] }, { "tag": "path", "attr": { "d": "M8 16h.01" }, "child": [] }] })(props);
}
function LuCheck(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M20 6 9 17l-5-5" }, "child": [] }] })(props);
}
function LuBot(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M12 8V4H8" }, "child": [] }, { "tag": "rect", "attr": { "width": "16", "height": "12", "x": "4", "y": "8", "rx": "2" }, "child": [] }, { "tag": "path", "attr": { "d": "M2 14h2" }, "child": [] }, { "tag": "path", "attr": { "d": "M20 14h2" }, "child": [] }, { "tag": "path", "attr": { "d": "M15 13v2" }, "child": [] }, { "tag": "path", "attr": { "d": "M9 13v2" }, "child": [] }] })(props);
}
function LuArrowRight(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M5 12h14" }, "child": [] }, { "tag": "path", "attr": { "d": "m12 5 7 7-7 7" }, "child": [] }] })(props);
}

// src/config/content.ts
var NAV_LINKS = [
  { label: "Solu\xE7\xE3o", href: "#demo" },
  { label: "Benef\xEDcios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "D\xFAvidas", href: "#duvidas" }
];
var HERO = {
  eyebrow: "INTELIG\xCANCIA ARTIFICIAL PARA EMPRESAS",
  title: ["Seu atendimento.", "Em um novo n\xEDvel."],
  highlight: "novo n\xEDvel",
  subtitle: "A Novyra AI ajuda sua empresa a automatizar tarefas de atendimento pelo WhatsApp, responder d\xFAvidas frequentes e organizar conversas com mais intelig\xEAncia.",
  primaryCta: "QUERO CONHECER A NOVYRA AI",
  secondaryCta: "VER COMO FUNCIONA",
  note: "Automa\xE7\xE3o inteligente, com espa\xE7o para o atendimento humano.",
  videoLabel: "Anima\xE7\xE3o de abertura da marca Novyra AI."
};
var DEMO = {
  eyebrow: "DEMONSTRA\xC7\xC3O",
  title: "Veja a intelig\xEAncia em a\xE7\xE3o.",
  text: "Uma experi\xEAncia de atendimento organizada para responder d\xFAvidas recorrentes e orientar cada conversa de acordo com as informa\xE7\xF5es configuradas.",
  badge: "Simula\xE7\xE3o ilustrativa",
  disclaimer: "Esta \xE9 uma simula\xE7\xE3o local. Nenhuma mensagem \xE9 enviada, nenhum dado \xE9 solicitado e voc\xEA n\xE3o est\xE1 falando com a IA de produ\xE7\xE3o.",
  start: "Experimentar demonstra\xE7\xE3o",
  running: "Simula\xE7\xE3o em andamento\u2026",
  statusIdle: "Pronta para iniciar",
  statusRunning: "Simula\xE7\xE3o em andamento",
  statusDone: "Conversa conclu\xEDda",
  restart: "Ver novamente",
  empty: "Pressione \u201CExperimentar demonstra\xE7\xE3o\u201D para ver uma conversa de exemplo.",
  script: [
    { from: "client", text: "Ol\xE1! Gostaria de saber mais sobre os servi\xE7os." },
    { from: "assistant", text: "Ol\xE1! Posso ajudar voc\xEA a conhecer os servi\xE7os e orientar os pr\xF3ximos passos." },
    { from: "client", text: "Consigo falar com uma pessoa?" },
    { from: "assistant", text: "Sim. Posso orientar voc\xEA sobre como entrar em contato com a equipe." }
  ]
};
var PROBLEM = {
  eyebrow: "O DESAFIO",
  title: ["Mais organiza\xE7\xE3o.", "Menos tarefas repetitivas."],
  situations: [
    "Perguntas frequentes que precisam ser respondidas repetidamente.",
    "Conversas que precisam ser organizadas.",
    "Solicita\xE7\xF5es que exigem encaminhamento para a equipe.",
    "Tempo gasto com tarefas operacionais."
  ],
  support: "Nem toda tarefa de atendimento precisa come\xE7ar do zero. Com uma automa\xE7\xE3o bem configurada, determinadas etapas podem ser simplificadas, respeitando os limites da tecnologia e as necessidades da sua empresa."
};
var BENEFITS = {
  eyebrow: "BENEF\xCDCIOS",
  title: "Tecnologia que trabalha a favor da sua opera\xE7\xE3o.",
  items: [
    {
      title: "Respostas a d\xFAvidas frequentes",
      text: "Ajude a automatizar respostas recorrentes com base nas informa\xE7\xF5es configuradas para o neg\xF3cio."
    },
    {
      title: "Atendimento mais organizado",
      text: "Estruture o fluxo inicial de conversas e facilite o encaminhamento das solicita\xE7\xF5es."
    },
    {
      title: "Mais tempo para a equipe",
      text: "Reduza a necessidade de digitar manualmente determinadas respostas repetitivas."
    },
    {
      title: "Experi\xEAncia alinhada ao neg\xF3cio",
      text: "Configure instru\xE7\xF5es e informa\xE7\xF5es de acordo com a linguagem e os processos da empresa."
    }
  ]
};
var HOW = {
  eyebrow: "COMO FUNCIONA",
  title: "Simples de entender. Pensado para sua empresa.",
  steps: [
    {
      title: "Entenda suas necessidades",
      text: "Identificamos as tarefas de atendimento que podem ser automatizadas."
    },
    {
      title: "Configure a solu\xE7\xE3o",
      text: "A automa\xE7\xE3o \xE9 organizada com as informa\xE7\xF5es, instru\xE7\xF5es e processos relevantes para a empresa."
    },
    {
      title: "Organize o atendimento",
      text: "A solu\xE7\xE3o pode responder d\xFAvidas recorrentes e orientar o encaminhamento de conversas conforme as funcionalidades configuradas."
    }
  ]
};
var SEGMENTS = {
  eyebrow: "APLICA\xC7\xD5ES",
  title: "Uma experi\xEAncia que pode se adaptar ao seu neg\xF3cio.",
  note: "Exemplos ilustrativos de uso. A aplica\xE7\xE3o depende da configura\xE7\xE3o e dos recursos dispon\xEDveis.",
  items: [
    {
      id: "comercio",
      label: "Com\xE9rcio e lojas",
      question: "Qual o hor\xE1rio de funcionamento da loja?",
      uses: [
        "Responder d\xFAvidas frequentes sobre produtos e atendimento.",
        "Informar hor\xE1rios de funcionamento.",
        "Orientar o cliente sobre os pr\xF3ximos passos."
      ]
    },
    {
      id: "servicos",
      label: "Prestadores de servi\xE7os",
      question: "Quais servi\xE7os voc\xEAs oferecem?",
      uses: [
        "Explicar os servi\xE7os oferecidos pela empresa.",
        "Organizar as informa\xE7\xF5es iniciais de uma solicita\xE7\xE3o.",
        "Encaminhar o contato para a equipe."
      ]
    },
    {
      id: "restaurantes",
      label: "Restaurantes",
      question: "Voc\xEAs abrem aos domingos?",
      uses: [
        "Informar hor\xE1rios e dias de funcionamento.",
        "Responder d\xFAvidas frequentes sobre o card\xE1pio.",
        "Orientar como fazer um pedido ou uma reserva."
      ]
    },
    {
      id: "clinicas",
      label: "Cl\xEDnicas e consult\xF3rios",
      question: "Como posso falar com a recep\xE7\xE3o?",
      uses: [
        "Informar hor\xE1rios e endere\xE7o de atendimento.",
        "Responder d\xFAvidas administrativas frequentes.",
        "Orientar o contato com a recep\xE7\xE3o ou a equipe."
      ],
      caution: "Uso administrativo. A automa\xE7\xE3o n\xE3o oferece aconselhamento m\xE9dico."
    },
    {
      id: "orcamentos",
      label: "Empresas que trabalham com or\xE7amentos",
      question: "Como fa\xE7o para pedir um or\xE7amento?",
      uses: [
        "Explicar como solicitar um or\xE7amento.",
        "Organizar as informa\xE7\xF5es necess\xE1rias para a solicita\xE7\xE3o.",
        "Encaminhar o pedido para a equipe respons\xE1vel."
      ]
    }
  ]
};
var DIFFERENTIAL = {
  eyebrow: "DIFERENCIAL",
  title: "Automa\xE7\xE3o com prop\xF3sito. Atendimento com contexto.",
  text: "Uma automa\xE7\xE3o \xFAtil n\xE3o consiste apenas em enviar respostas autom\xE1ticas. Ela precisa:",
  requirements: [
    "Considerar o contexto da conversa.",
    "Utilizar informa\xE7\xF5es corretas.",
    "Ter instru\xE7\xF5es claras.",
    "Reconhecer quando n\xE3o sabe responder.",
    "Permitir encaminhamento para a equipe quando necess\xE1rio."
  ],
  message: "A tecnologia deve apoiar o atendimento, n\xE3o criar uma experi\xEAncia fria ou confusa.",
  aiLabel: "Automa\xE7\xE3o",
  aiNote: "N\xE3o encontrei essa informa\xE7\xE3o. Vou encaminhar para a equipe.",
  humanLabel: "Equipe",
  humanNote: "Ol\xE1! Assumo a conversa a partir daqui.",
  illustrative: "Ilustra\xE7\xE3o conceitual"
};
var OFFER = {
  eyebrow: "OFERTA ESPECIAL",
  title: "Uma condi\xE7\xE3o especial para come\xE7ar.",
  leadTitle: "Automatize seu atendimento com intelig\xEAncia.",
  leadText: "Organize conversas, responda d\xFAvidas frequentes e simplifique tarefas repetitivas com uma automa\xE7\xE3o configurada para as necessidades do seu neg\xF3cio.",
  badge: "SOMENTE PARA A PRIMEIRA CONTRATA\xC7\xC3O",
  cta: "QUERO CONTRATAR POR {{price}}",
  legal: "Oferta destinada \xE0 primeira contrata\xE7\xE3o. Conhe\xE7a a solu\xE7\xE3o e consulte as condi\xE7\xF5es comerciais aplic\xE1veis.",
  videoLabel: "Apresenta\xE7\xE3o animada da Novyra AI: atendimento pelo WhatsApp e oferta de primeira contrata\xE7\xE3o.",
  videoCaption: "Apresenta\xE7\xE3o ilustrativa"
};
var FAQ = {
  eyebrow: "D\xDAVIDAS",
  title: "Perguntas frequentes.",
  items: [
    {
      id: "o-que-e",
      q: "O que \xE9 a Novyra AI?",
      a: "A Novyra AI oferece solu\xE7\xF5es de intelig\xEAncia artificial e automa\xE7\xE3o para ajudar empresas a organizar o atendimento, responder d\xFAvidas frequentes e orientar conversas pelo WhatsApp."
    },
    {
      id: "substitui",
      q: "A automa\xE7\xE3o substitui os atendentes?",
      a: "N\xE3o necessariamente. A automa\xE7\xE3o pode apoiar a equipe com tarefas repetitivas e encaminhar situa\xE7\xF5es espec\xEDficas para atendimento humano, conforme a configura\xE7\xE3o."
    },
    {
      id: "personalizar",
      q: "Posso personalizar o atendimento?",
      a: "A automa\xE7\xE3o pode ser configurada com informa\xE7\xF5es e instru\xE7\xF5es relacionadas \xE0 empresa, dentro dos recursos dispon\xEDveis."
    },
    {
      id: "erros",
      q: "A IA pode cometer erros?",
      a: "Sim. Por isso, \xE9 importante utilizar informa\xE7\xF5es corretas, testar a solu\xE7\xE3o e definir situa\xE7\xF5es em que a equipe humana deve assumir a conversa."
    },
    {
      id: "contratacao",
      q: "Como funciona a contrata\xE7\xE3o?",
      a: "Voc\xEA pode utilizar o bot\xE3o de contrata\xE7\xE3o para acessar o checkout oficial e consultar as condi\xE7\xF5es apresentadas no momento da compra."
    },
    {
      id: "oferta",
      q: "A oferta de {{price}} \xE9 para todos os clientes?",
      a: "Essa condi\xE7\xE3o foi definida para a primeira contrata\xE7\xE3o. A elegibilidade deve seguir as condi\xE7\xF5es comerciais aplic\xE1veis."
    },
    {
      id: "adequada",
      q: "Como sei se a solu\xE7\xE3o \xE9 adequada para minha empresa?",
      a: "O ideal \xE9 avaliar as necessidades do seu atendimento e verificar se os recursos dispon\xEDveis atendem aos processos da sua empresa."
    },
    {
      id: "integracoes",
      q: "Quais integra\xE7\xF5es est\xE3o dispon\xEDveis?",
      a: "As integra\xE7\xF5es dependem da configura\xE7\xE3o e dos recursos oferecidos. Consulte a equipe respons\xE1vel para confirmar a compatibilidade com os sistemas utilizados pela sua empresa."
    }
  ]
};
var FINAL = {
  title: "Seu atendimento pode evoluir.",
  subtitle: "Descubra como a intelig\xEAncia artificial pode ajudar sua empresa a organizar conversas e simplificar tarefas de atendimento.",
  cta: "QUERO CONHECER A NOVYRA AI",
  signature: "NOVYRA AI \u2014 Ideias inteligentes. Resultados reais."
};

// src/hooks/useReducedMotion.ts
var import_react4 = __toESM(require_react(), 1);
var QUERY = "(prefers-reduced-motion: reduce)";
function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(QUERY).matches;
}
function useReducedMotion() {
  const [reduced, setReduced] = (0, import_react4.useState)(prefersReducedMotion);
  (0, import_react4.useEffect)(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

// src/lib/analytics.ts
var listeners = /* @__PURE__ */ new Set();
function track(event, params = {}) {
  if (!SITE_CONFIG.analytics.enabled) {
    if (true) console.debug("[analytics:desativado]", event, params);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  listeners.forEach((l) => l(event, params));
}

// src/components/CheckoutButton.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function CheckoutButton({ location, children, size = "lg", className = "", isHeroCta = false }) {
  const cls = `btn btn--primary btn--${size} ${className}`.trim();
  if (!CHECKOUT_READY) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: `${cls} is-disabled`, disabled: true, title: "Link de checkout ainda n\xE3o configurado", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children }) });
  }
  const newTab = SITE_CONFIG.checkoutOpensInNewTab;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "a",
    {
      className: cls,
      href: CHECKOUT_URL,
      "data-checkout": "true",
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noopener noreferrer" : "noopener",
      onClick: () => {
        if (isHeroCta) track("hero_cta_click", { cta: "primary" });
        track("checkout_click", { location });
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LuArrowRight, { className: "btn__icon", "aria-hidden": "true" })
      ]
    }
  );
}

// src/components/StageVideo.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function saveDataEnabled() {
  const c = navigator.connection;
  return !!c && (c.saveData === true || c.effectiveType === "slow-2g" || c.effectiveType === "2g");
}
function StageVideo({
  src,
  poster,
  fallback,
  fallbackSize,
  fallbackAlt,
  label,
  mode,
  maxPlays = 3,
  priority = false,
  className = "",
  threshold = 0.4
}) {
  const reduced = useReducedMotion();
  const [lowData] = (0, import_react5.useState)(saveDataEnabled);
  const isStatic = reduced || lowData;
  const wrapRef = (0, import_react5.useRef)(null);
  const videoRef = (0, import_react5.useRef)(null);
  const [attached, setAttached] = (0, import_react5.useState)(priority);
  const [status, setStatus] = (0, import_react5.useState)(isStatic ? "static" : "loading");
  const userPaused = (0, import_react5.useRef)(false);
  const plays = (0, import_react5.useRef)(0);
  const effective = isStatic ? "static" : status;
  const sources = [{ src, type: "video/mp4" }, ...src.endsWith(".mp4") ? [{ src: src.replace(/\.mp4$/, ".webm"), type: "video/webm" }] : []];
  const play = (0, import_react5.useCallback)(() => {
    const v = videoRef.current;
    if (!v || !v.paused) return;
    v.muted = true;
    const p = v.play();
    if (p) p.catch(() => setStatus((s) => s === "error" ? s : "paused"));
  }, []);
  (0, import_react5.useEffect)(() => {
    if (isStatic || attached) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAttached(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isStatic, attached]);
  (0, import_react5.useEffect)(() => {
    if (isStatic || !attached) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        const v = videoRef.current;
        if (!v) return;
        if (e.isIntersecting) {
          if (userPaused.current) return;
          if (v.ended) {
            if (mode === "inview" && plays.current < maxPlays) {
              v.currentTime = 0;
              play();
            }
          } else {
            play();
          }
        } else if (!v.paused) {
          v.pause();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isStatic, attached, mode, maxPlays, threshold, play]);
  const onToggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!v.paused && !v.ended) {
      userPaused.current = true;
      v.pause();
    } else {
      userPaused.current = false;
      if (v.ended) v.currentTime = 0;
      play();
    }
  };
  const showFallback = effective === "static" || effective === "error";
  const playing = effective === "playing";
  const ctlLabel = playing ? "Pausar anima\xE7\xE3o" : effective === "ended" ? "Reproduzir anima\xE7\xE3o novamente" : "Reproduzir anima\xE7\xE3o";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ref: wrapRef, className: `sv ${className}`.trim(), "data-status": effective, children: showFallback ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "img",
    {
      className: "sv__fallback",
      src: fallback,
      alt: fallbackAlt,
      width: fallbackSize.width,
      height: fallbackSize.height,
      loading: priority ? "eager" : "lazy",
      decoding: "async",
      draggable: false
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "video",
      {
        ref: videoRef,
        className: "sv__video",
        poster,
        "aria-label": label,
        muted: true,
        playsInline: true,
        preload: attached ? "auto" : "none",
        disablePictureInPicture: true,
        disableRemotePlayback: true,
        onPlay: (e) => {
          if (e.currentTarget.currentTime < 0.1) plays.current += 1;
        },
        onPlaying: () => setStatus("playing"),
        onPause: (e) => !e.currentTarget.ended && setStatus("paused"),
        onEnded: () => setStatus("ended"),
        children: attached && sources.map((s, i) => (
          // Com <source>, o erro dispara no elemento <source>; só o último falhando significa "sem vídeo".
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("source", { src: s.src, type: s.type, onError: i === sources.length - 1 ? () => setStatus("error") : void 0 }, s.src)
        ))
      },
      attached ? "loaded" : "idle"
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sv__ctl", onClick: onToggle, "aria-label": ctlLabel, title: ctlLabel, children: playing ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuPause, { "aria-hidden": "true" }) : effective === "ended" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuRotateCcw, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LuPlay, { "aria-hidden": "true" }) })
  ] }) });
}

export {
  __commonJS,
  __toESM,
  require_react,
  SITE_CONFIG,
  CHECKOUT_READY,
  formatBRL,
  withPrice,
  require_jsx_runtime,
  Logo,
  LuX,
  LuWrench,
  LuUtensilsCrossed,
  LuUserRound,
  LuStore,
  LuStethoscope,
  LuSlidersHorizontal,
  LuSettings2,
  LuRotateCcw,
  LuReceiptText,
  LuPlus,
  LuPlay,
  LuMessageCircleQuestion,
  LuMenu,
  LuListChecks,
  LuInfo,
  LuInbox,
  LuClock,
  LuClipboardList,
  LuCheck,
  LuBot,
  LuArrowRight,
  NAV_LINKS,
  HERO,
  DEMO,
  PROBLEM,
  BENEFITS,
  HOW,
  SEGMENTS,
  DIFFERENTIAL,
  OFFER,
  FAQ,
  FINAL,
  prefersReducedMotion,
  track,
  CheckoutButton,
  StageVideo
};
//# sourceMappingURL=chunk.js.map
