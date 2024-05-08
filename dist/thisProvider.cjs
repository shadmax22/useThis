"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const Z=require("react"),W=require("./store-BLwpa5Ef.cjs");function Rr(n){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const o in n)if(o!=="default"){const a=Object.getOwnPropertyDescriptor(n,o);Object.defineProperty(i,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}return i.default=n,Object.freeze(i)}const he=Rr(Z);var be={exports:{}},K={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e;function Or(){if($e)return K;$e=1;var n=Z,i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function w(T,d,c){var v,S={},y=null,E=null;c!==void 0&&(y=""+c),d.key!==void 0&&(y=""+d.key),d.ref!==void 0&&(E=d.ref);for(v in d)a.call(d,v)&&!b.hasOwnProperty(v)&&(S[v]=d[v]);if(T&&T.defaultProps)for(v in d=T.defaultProps,d)S[v]===void 0&&(S[v]=d[v]);return{$$typeof:i,type:T,key:y,ref:E,props:S,_owner:l.current}}return K.Fragment=o,K.jsx=w,K.jsxs=w,K}var J={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye;function Tr(){return Ye||(Ye=1,process.env.NODE_ENV!=="production"&&function(){var n=Z,i=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),T=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.for("react.offscreen"),R=Symbol.iterator,g="@@iterator";function k(e){if(e===null||typeof e!="object")return null;var r=R&&e[R]||e[g];return typeof r=="function"?r:null}var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),u=1;u<r;u++)t[u-1]=arguments[u];C("error",e,t)}}function C(e,r,t){{var u=x.ReactDebugCurrentFrame,p=u.getStackAddendum();p!==""&&(r+="%s",t=t.concat([p]));var h=t.map(function(f){return String(f)});h.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,h)}}var I=!1,P=!1,D=!1,$=!1,Q=!1,ee;ee=Symbol.for("react.module.reference");function ie(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===b||Q||e===l||e===c||e===v||$||e===E||I||P||D||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===S||e.$$typeof===w||e.$$typeof===T||e.$$typeof===d||e.$$typeof===ee||e.getModuleId!==void 0))}function Y(e,r,t){var u=e.displayName;if(u)return u;var p=r.displayName||r.name||"";return p!==""?t+"("+p+")":t}function B(e){return e.displayName||"Context"}function A(e){if(e==null)return null;if(typeof e.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case o:return"Portal";case b:return"Profiler";case l:return"StrictMode";case c:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T:var r=e;return B(r)+".Consumer";case w:var t=e;return B(t._context)+".Provider";case d:return Y(e,e.render,"ForwardRef");case S:var u=e.displayName||null;return u!==null?u:A(e.type)||"Memo";case y:{var p=e,h=p._payload,f=p._init;try{return A(f(h))}catch{return null}}}return null}var F=Object.assign,M=0,H,ge,me,Re,Oe,Te,we;function xe(){}xe.__reactDisabledLog=!0;function Ze(){{if(M===0){H=console.log,ge=console.info,me=console.warn,Re=console.error,Oe=console.group,Te=console.groupCollapsed,we=console.groupEnd;var e={configurable:!0,enumerable:!0,value:xe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Qe(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:F({},e,{value:H}),info:F({},e,{value:ge}),warn:F({},e,{value:me}),error:F({},e,{value:Re}),group:F({},e,{value:Oe}),groupCollapsed:F({},e,{value:Te}),groupEnd:F({},e,{value:we})})}M<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ue=x.ReactCurrentDispatcher,se;function re(e,r,t){{if(se===void 0)try{throw Error()}catch(p){var u=p.stack.trim().match(/\n( *(at )?)/);se=u&&u[1]||""}return`
`+se+e}}var ce=!1,te;{var er=typeof WeakMap=="function"?WeakMap:Map;te=new er}function Ce(e,r){if(!e||ce)return"";{var t=te.get(e);if(t!==void 0)return t}var u;ce=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var h;h=ue.current,ue.current=null,Ze();try{if(r){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(N){u=N}Reflect.construct(e,[],f)}else{try{f.call()}catch(N){u=N}e.call(f.prototype)}}else{try{throw Error()}catch(N){u=N}e()}}catch(N){if(N&&u&&typeof N.stack=="string"){for(var s=N.stack.split(`
`),j=u.stack.split(`
`),m=s.length-1,O=j.length-1;m>=1&&O>=0&&s[m]!==j[O];)O--;for(;m>=1&&O>=0;m--,O--)if(s[m]!==j[O]){if(m!==1||O!==1)do if(m--,O--,O<0||s[m]!==j[O]){var V=`
`+s[m].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),typeof e=="function"&&te.set(e,V),V}while(m>=1&&O>=0);break}}}finally{ce=!1,ue.current=h,Qe(),Error.prepareStackTrace=p}var q=e?e.displayName||e.name:"",Ue=q?re(q):"";return typeof e=="function"&&te.set(e,Ue),Ue}function rr(e,r,t){return Ce(e,!1)}function tr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ne(e,r,t){if(e==null)return"";if(typeof e=="function")return Ce(e,tr(e));if(typeof e=="string")return re(e);switch(e){case c:return re("Suspense");case v:return re("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return rr(e.render);case S:return ne(e.type,r,t);case y:{var u=e,p=u._payload,h=u._init;try{return ne(h(p),r,t)}catch{}}}return""}var ae=Object.prototype.hasOwnProperty,Pe={},je=x.ReactDebugCurrentFrame;function oe(e){if(e){var r=e._owner,t=ne(e.type,e._source,r?r.type:null);je.setExtraStackFrame(t)}else je.setExtraStackFrame(null)}function nr(e,r,t,u,p){{var h=Function.call.bind(ae);for(var f in e)if(h(e,f)){var s=void 0;try{if(typeof e[f]!="function"){var j=Error((u||"React class")+": "+t+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}s=e[f](r,f,u,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(m){s=m}s&&!(s instanceof Error)&&(oe(p),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",t,f,typeof s),oe(null)),s instanceof Error&&!(s.message in Pe)&&(Pe[s.message]=!0,oe(p),_("Failed %s type: %s",t,s.message),oe(null))}}}var ar=Array.isArray;function le(e){return ar(e)}function or(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ir(e){try{return ke(e),!1}catch{return!0}}function ke(e){return""+e}function De(e){if(ir(e))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",or(e)),ke(e)}var G=x.ReactCurrentOwner,ur={key:!0,ref:!0,__self:!0,__source:!0},Ae,Le,fe;fe={};function sr(e){if(ae.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function cr(e){if(ae.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function lr(e,r){if(typeof e.ref=="string"&&G.current&&r&&G.current.stateNode!==r){var t=A(G.current.type);fe[t]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',A(G.current.type),e.ref),fe[t]=!0)}}function fr(e,r){{var t=function(){Ae||(Ae=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function dr(e,r){{var t=function(){Le||(Le=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var vr=function(e,r,t,u,p,h,f){var s={$$typeof:i,type:e,key:r,ref:t,props:f,_owner:h};return s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function pr(e,r,t,u,p){{var h,f={},s=null,j=null;t!==void 0&&(De(t),s=""+t),cr(r)&&(De(r.key),s=""+r.key),sr(r)&&(j=r.ref,lr(r,p));for(h in r)ae.call(r,h)&&!ur.hasOwnProperty(h)&&(f[h]=r[h]);if(e&&e.defaultProps){var m=e.defaultProps;for(h in m)f[h]===void 0&&(f[h]=m[h])}if(s||j){var O=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&fr(f,O),j&&dr(f,O)}return vr(e,s,j,p,u,G.current,f)}}var de=x.ReactCurrentOwner,Ie=x.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=ne(e.type,e._source,r?r.type:null);Ie.setExtraStackFrame(t)}else Ie.setExtraStackFrame(null)}var ve;ve=!1;function pe(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function Ve(){{if(de.current){var e=A(de.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function hr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Fe={};function yr(e){{var r=Ve();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Me(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=yr(r);if(Fe[t])return;Fe[t]=!0;var u="";e&&e._owner&&e._owner!==de.current&&(u=" It was passed a child from "+A(e._owner.type)+"."),z(e),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,u),z(null)}}function Ne(e,r){{if(typeof e!="object")return;if(le(e))for(var t=0;t<e.length;t++){var u=e[t];pe(u)&&Me(u,r)}else if(pe(e))e._store&&(e._store.validated=!0);else if(e){var p=k(e);if(typeof p=="function"&&p!==e.entries)for(var h=p.call(e),f;!(f=h.next()).done;)pe(f.value)&&Me(f.value,r)}}}function _r(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===S))t=r.propTypes;else return;if(t){var u=A(r);nr(t,e.props,"prop",u,e)}else if(r.PropTypes!==void 0&&!ve){ve=!0;var p=A(r);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",p||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function br(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var u=r[t];if(u!=="children"&&u!=="key"){z(e),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",u),z(null);break}}e.ref!==null&&(z(e),_("Invalid attribute `ref` supplied to `React.Fragment`."),z(null))}}function We(e,r,t,u,p,h){{var f=ie(e);if(!f){var s="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j=hr(p);j?s+=j:s+=Ve();var m;e===null?m="null":le(e)?m="array":e!==void 0&&e.$$typeof===i?(m="<"+(A(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):m=typeof e,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",m,s)}var O=pr(e,r,t,p,h);if(O==null)return O;if(f){var V=r.children;if(V!==void 0)if(u)if(le(V)){for(var q=0;q<V.length;q++)Ne(V[q],e);Object.freeze&&Object.freeze(V)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ne(V,e)}return e===a?br(O):_r(O),O}}function Sr(e,r,t){return We(e,r,t,!0)}function Er(e,r,t){return We(e,r,t,!1)}var gr=Er,mr=Sr;J.Fragment=a,J.jsx=gr,J.jsxs=mr}()),J}process.env.NODE_ENV==="production"?be.exports=Or():be.exports=Tr();var X=be.exports,Se={exports:{}},ye={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be;function wr(){if(Be)return ye;Be=1;var n=Z;function i(d,c){return d===c&&(d!==0||1/d===1/c)||d!==d&&c!==c}var o=typeof Object.is=="function"?Object.is:i,a=n.useSyncExternalStore,l=n.useRef,b=n.useEffect,w=n.useMemo,T=n.useDebugValue;return ye.useSyncExternalStoreWithSelector=function(d,c,v,S,y){var E=l(null);if(E.current===null){var R={hasValue:!1,value:null};E.current=R}else R=E.current;E=w(function(){function k(P){if(!x){if(x=!0,_=P,P=S(P),y!==void 0&&R.hasValue){var D=R.value;if(y(D,P))return C=D}return C=P}if(D=C,o(_,P))return D;var $=S(P);return y!==void 0&&y(D,$)?D:(_=P,C=$)}var x=!1,_,C,I=v===void 0?null:v;return[function(){return k(c())},I===null?void 0:function(){return k(I())}]},[c,v,S,y]);var g=a(d,E[0],E[1]);return b(function(){R.hasValue=!0,R.value=g},[g]),T(g),g},ye}var _e={};/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function xr(){return He||(He=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var n=Z;function i(c,v){return c===v&&(c!==0||1/c===1/v)||c!==c&&v!==v}var o=typeof Object.is=="function"?Object.is:i,a=n.useSyncExternalStore,l=n.useRef,b=n.useEffect,w=n.useMemo,T=n.useDebugValue;function d(c,v,S,y,E){var R=l(null),g;R.current===null?(g={hasValue:!1,value:null},R.current=g):g=R.current;var k=w(function(){var I=!1,P,D,$=function(Y){if(!I){I=!0,P=Y;var B=y(Y);if(E!==void 0&&g.hasValue){var A=g.value;if(E(A,B))return D=A,A}return D=B,B}var F=P,M=D;if(o(F,Y))return M;var H=y(Y);return E!==void 0&&E(M,H)?M:(P=Y,D=H,H)},Q=S===void 0?null:S,ee=function(){return $(v())},ie=Q===null?void 0:function(){return $(Q())};return[ee,ie]},[v,S,y,E]),x=k[0],_=k[1],C=a(c,x,_);return b(function(){g.hasValue=!0,g.value=C},[C]),T(C),C}_e.useSyncExternalStoreWithSelector=d,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),_e}process.env.NODE_ENV==="production"?Se.exports=wr():Se.exports=xr();var Cr=Se.exports,L="default"in he?he.default:he,ze=Symbol.for("react-redux-context"),qe=typeof globalThis<"u"?globalThis:{};function Pr(){if(!L.createContext)return{};const n=qe[ze]??(qe[ze]=new Map);let i=n.get(L.createContext);return i||(i=L.createContext(null),process.env.NODE_ENV!=="production"&&(i.displayName="ReactRedux"),n.set(L.createContext,i)),i}var U=Pr(),jr=()=>{throw new Error("uSES not initialized!")};function Ee(n=U){return function(){const o=L.useContext(n);if(process.env.NODE_ENV!=="production"&&!o)throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");return o}}var Ke=Ee(),Je=jr,kr=n=>{Je=n},Dr=(n,i)=>n===i;function Ar(n=U){const i=n===U?Ke:Ee(n),o=(a,l={})=>{const{equalityFn:b=Dr,devModeChecks:w={}}=typeof l=="function"?{equalityFn:l}:l;if(process.env.NODE_ENV!=="production"){if(!a)throw new Error("You must pass a selector to useSelector");if(typeof a!="function")throw new Error("You must pass a function as a selector to useSelector");if(typeof b!="function")throw new Error("You must pass a function as an equality function to useSelector")}const{store:T,subscription:d,getServerState:c,stabilityCheck:v,identityFunctionCheck:S}=i(),y=L.useRef(!0),E=L.useCallback({[a.name](g){const k=a(g);if(process.env.NODE_ENV!=="production"){const{identityFunctionCheck:x,stabilityCheck:_}={stabilityCheck:v,identityFunctionCheck:S,...w};if(_==="always"||_==="once"&&y.current){const C=a(g);if(!b(k,C)){let I;try{throw new Error}catch(P){({stack:I}=P)}console.warn("Selector "+(a.name||"unknown")+` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,{state:g,selected:k,selected2:C,stack:I})}}if((x==="always"||x==="once"&&y.current)&&k===g){let C;try{throw new Error}catch(I){({stack:C}=I)}console.warn("Selector "+(a.name||"unknown")+` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,{stack:C})}y.current&&(y.current=!1)}return k}}[a.name],[a,v,w.stabilityCheck]),R=Je(d.addNestedSub,T.getState,c||T.getState,E,b);return L.useDebugValue(R),R};return Object.assign(o,{withTypes:()=>o}),o}var Lr=Ar();function Ir(n){n()}function Vr(){let n=null,i=null;return{clear(){n=null,i=null},notify(){Ir(()=>{let o=n;for(;o;)o.callback(),o=o.next})},get(){const o=[];let a=n;for(;a;)o.push(a),a=a.next;return o},subscribe(o){let a=!0;const l=i={callback:o,next:null,prev:i};return l.prev?l.prev.next=l:n=l,function(){!a||n===null||(a=!1,l.next?l.next.prev=l.prev:i=l.prev,l.prev?l.prev.next=l.next:n=l.next)}}}}var Ge={notify(){},get:()=>[]};function Fr(n,i){let o,a=Ge,l=0,b=!1;function w(g){v();const k=a.subscribe(g);let x=!1;return()=>{x||(x=!0,k(),S())}}function T(){a.notify()}function d(){R.onStateChange&&R.onStateChange()}function c(){return b}function v(){l++,o||(o=i?i.addNestedSub(d):n.subscribe(d),a=Vr())}function S(){l--,o&&l===0&&(o(),o=void 0,a.clear(),a=Ge)}function y(){b||(b=!0,v())}function E(){b&&(b=!1,S())}const R={addNestedSub:w,notifyNestedSubs:T,handleChangeWrapper:d,isSubscribed:c,trySubscribe:y,tryUnsubscribe:E,getListeners:()=>a};return R}var Mr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nr=Mr?L.useLayoutEffect:L.useEffect;function Wr({store:n,context:i,children:o,serverState:a,stabilityCheck:l="once",identityFunctionCheck:b="once"}){const w=L.useMemo(()=>{const c=Fr(n);return{store:n,subscription:c,getServerState:a?()=>a:void 0,stabilityCheck:l,identityFunctionCheck:b}},[n,a,l,b]),T=L.useMemo(()=>n.getState(),[n]);Nr(()=>{const{subscription:c}=w;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),T!==n.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[w,T]);const d=i||U;return L.createElement(d.Provider,{value:w},o)}var Ur=Wr;function Xe(n=U){const i=n===U?Ke:Ee(n),o=()=>{const{store:a}=i();return a};return Object.assign(o,{withTypes:()=>o}),o}var $r=Xe();function Yr(n=U){const i=n===U?$r:Xe(n),o=()=>i().dispatch;return Object.assign(o,{withTypes:()=>o}),o}var Br=Yr();kr(Cr.useSyncExternalStoreWithSelector);function Hr(n,i){return function(a){return i(W.StateHandler.update({data:a,state:n})),W._MAINSTORE.getState().This[n]}}function zr(n,i){return function(a){return i(W.StateHandler.update({data:a,state:n})),W._MAINSTORE.getState().This[n]}}function qr(n,i){return function(a,l){return i(W.StateHandler.upsert({data:a,active_state:n,config:l??{}})),W._MAINSTORE.getState().This[n]}}function Gr(n){let i=Br();const o=Lr(a=>a.This);return X.jsx(W.ThisContext.Provider,{...n,value:a=>({update:Hr(a,i),append:zr(a,i),upsert:qr(a,i),dispatcher:i,This:o[a]??null,get:()=>W._MAINSTORE.getState().This[a]})})}function Kr(n){return X.jsx(X.Fragment,{children:X.jsx(Ur,{store:W._MAINSTORE,children:X.jsx(Gr,{...n})})})}exports.ThisProvider=Kr;
//# sourceMappingURL=thisProvider.cjs.map
