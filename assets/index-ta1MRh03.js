(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function AS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Eh={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function wS(){if(Z0)return zo;Z0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:f,ref:o!==void 0?o:null,props:c}}return zo.Fragment=e,zo.jsx=n,zo.jsxs=n,zo}var K0;function RS(){return K0||(K0=1,Eh.exports=wS()),Eh.exports}var K=RS(),Th={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function CS(){if(Q0)return rt;Q0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(N,ee,ye){this.props=N,this.context=ee,this.refs=E,this.updater=ye||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=S.prototype;function R(N,ee,ye){this.props=N,this.context=ee,this.refs=E,this.updater=ye||x}var w=R.prototype=new _;w.constructor=R,b(w,S.prototype),w.isPureReactComponent=!0;var L=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function z(N,ee,ye,Me,J,ge){return ye=ge.ref,{$$typeof:s,type:N,key:ee,ref:ye!==void 0?ye:null,props:ge}}function k(N,ee){return z(N.type,ee,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function D(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return ee[ye]})}var G=/\/+/g;function ce(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):ee.toString(36)}function oe(){}function me(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(oe,oe):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function fe(N,ee,ye,Me,J){var ge=typeof N;(ge==="undefined"||ge==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(ge){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case s:case e:Se=!0;break;case g:return Se=N._init,fe(Se(N._payload),ee,ye,Me,J)}}if(Se)return J=J(N),Se=Me===""?"."+ce(N,0):Me,L(J)?(ye="",Se!=null&&(ye=Se.replace(G,"$&/")+"/"),fe(J,ee,ye,"",function(ot){return ot})):J!=null&&(U(J)&&(J=k(J,ye+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+Se)),ee.push(J)),1;Se=0;var we=Me===""?".":Me+":";if(L(N))for(var Oe=0;Oe<N.length;Oe++)Me=N[Oe],ge=we+ce(Me,Oe),Se+=fe(Me,ee,ye,ge,J);else if(Oe=y(N),typeof Oe=="function")for(N=Oe.call(N),Oe=0;!(Me=N.next()).done;)Me=Me.value,ge=we+ce(Me,Oe++),Se+=fe(Me,ee,ye,ge,J);else if(ge==="object"){if(typeof N.then=="function")return fe(me(N),ee,ye,Me,J);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Se}function O(N,ee,ye){if(N==null)return N;var Me=[],J=0;return fe(N,Me,"","",function(ge){return ee.call(ye,ge,J++)}),Me}function Z(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function be(){}return rt.Children={map:O,forEach:function(N,ee,ye){O(N,function(){ee.apply(this,arguments)},ye)},count:function(N){var ee=0;return O(N,function(){ee++}),ee},toArray:function(N){return O(N,function(ee){return ee})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},rt.Component=S,rt.Fragment=n,rt.Profiler=o,rt.PureComponent=R,rt.StrictMode=a,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cloneElement=function(N,ee,ye){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Me=b({},N.props),J=N.key,ge=void 0;if(ee!=null)for(Se in ee.ref!==void 0&&(ge=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!B.call(ee,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ee.ref===void 0||(Me[Se]=ee[Se]);var Se=arguments.length-2;if(Se===1)Me.children=ye;else if(1<Se){for(var we=Array(Se),Oe=0;Oe<Se;Oe++)we[Oe]=arguments[Oe+2];Me.children=we}return z(N.type,J,void 0,void 0,ge,Me)},rt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},rt.createElement=function(N,ee,ye){var Me,J={},ge=null;if(ee!=null)for(Me in ee.key!==void 0&&(ge=""+ee.key),ee)B.call(ee,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(J[Me]=ee[Me]);var Se=arguments.length-2;if(Se===1)J.children=ye;else if(1<Se){for(var we=Array(Se),Oe=0;Oe<Se;Oe++)we[Oe]=arguments[Oe+2];J.children=we}if(N&&N.defaultProps)for(Me in Se=N.defaultProps,Se)J[Me]===void 0&&(J[Me]=Se[Me]);return z(N,ge,void 0,void 0,null,J)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:h,render:N}},rt.isValidElement=U,rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},rt.memo=function(N,ee){return{$$typeof:d,type:N,compare:ee===void 0?null:ee}},rt.startTransition=function(N){var ee=F.T,ye={};F.T=ye;try{var Me=N(),J=F.S;J!==null&&J(ye,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(be,j)}catch(ge){j(ge)}finally{F.T=ee}},rt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},rt.use=function(N){return F.H.use(N)},rt.useActionState=function(N,ee,ye){return F.H.useActionState(N,ee,ye)},rt.useCallback=function(N,ee){return F.H.useCallback(N,ee)},rt.useContext=function(N){return F.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,ee){return F.H.useDeferredValue(N,ee)},rt.useEffect=function(N,ee,ye){var Me=F.H;if(typeof ye=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(N,ee)},rt.useId=function(){return F.H.useId()},rt.useImperativeHandle=function(N,ee,ye){return F.H.useImperativeHandle(N,ee,ye)},rt.useInsertionEffect=function(N,ee){return F.H.useInsertionEffect(N,ee)},rt.useLayoutEffect=function(N,ee){return F.H.useLayoutEffect(N,ee)},rt.useMemo=function(N,ee){return F.H.useMemo(N,ee)},rt.useOptimistic=function(N,ee){return F.H.useOptimistic(N,ee)},rt.useReducer=function(N,ee,ye){return F.H.useReducer(N,ee,ye)},rt.useRef=function(N){return F.H.useRef(N)},rt.useState=function(N){return F.H.useState(N)},rt.useSyncExternalStore=function(N,ee,ye){return F.H.useSyncExternalStore(N,ee,ye)},rt.useTransition=function(){return F.H.useTransition()},rt.version="19.1.0",rt}var $0;function np(){return $0||($0=1,Th.exports=CS()),Th.exports}var le=np();const Ur=AS(le);var Ah={exports:{}},Fo={},wh={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function DS(){return J0||(J0=1,function(s){function e(O,Z){var j=O.length;O.push(Z);e:for(;0<j;){var be=j-1>>>1,N=O[be];if(0<o(N,Z))O[be]=Z,O[j]=N,j=be;else break e}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var Z=O[0],j=O.pop();if(j!==Z){O[0]=j;e:for(var be=0,N=O.length,ee=N>>>1;be<ee;){var ye=2*(be+1)-1,Me=O[ye],J=ye+1,ge=O[J];if(0>o(Me,j))J<N&&0>o(ge,Me)?(O[be]=ge,O[J]=j,be=J):(O[be]=Me,O[ye]=j,be=ye);else if(J<N&&0>o(ge,j))O[be]=ge,O[J]=j,be=J;else break e}}return Z}function o(O,Z){var j=O.sortIndex-Z.sortIndex;return j!==0?j:O.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],d=[],g=1,v=null,y=3,x=!1,b=!1,E=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var Z=n(d);Z!==null;){if(Z.callback===null)a(d);else if(Z.startTime<=O)a(d),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(d)}}function F(O){if(E=!1,L(O),!b)if(n(p)!==null)b=!0,B||(B=!0,ce());else{var Z=n(d);Z!==null&&fe(F,Z.startTime-O)}}var B=!1,z=-1,k=5,U=-1;function D(){return S?!0:!(s.unstable_now()-U<k)}function G(){if(S=!1,B){var O=s.unstable_now();U=O;var Z=!0;try{e:{b=!1,E&&(E=!1,R(z),z=-1),x=!0;var j=y;try{t:{for(L(O),v=n(p);v!==null&&!(v.expirationTime>O&&D());){var be=v.callback;if(typeof be=="function"){v.callback=null,y=v.priorityLevel;var N=be(v.expirationTime<=O);if(O=s.unstable_now(),typeof N=="function"){v.callback=N,L(O),Z=!0;break t}v===n(p)&&a(p),L(O)}else a(p);v=n(p)}if(v!==null)Z=!0;else{var ee=n(d);ee!==null&&fe(F,ee.startTime-O),Z=!1}}break e}finally{v=null,y=j,x=!1}Z=void 0}}finally{Z?ce():B=!1}}}var ce;if(typeof w=="function")ce=function(){w(G)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=G,ce=function(){me.postMessage(null)}}else ce=function(){_(G,0)};function fe(O,Z){z=_(function(){O(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var j=y;y=Z;try{return O()}finally{y=j}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=y;y=O;try{return Z()}finally{y=j}},s.unstable_scheduleCallback=function(O,Z,j){var be=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?be+j:be):j=be,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,O={id:g++,callback:Z,priorityLevel:O,startTime:j,expirationTime:N,sortIndex:-1},j>be?(O.sortIndex=j,e(d,O),n(p)===null&&O===n(d)&&(E?(R(z),z=-1):E=!0,fe(F,j-be))):(O.sortIndex=N,e(p,O),b||x||(b=!0,B||(B=!0,ce()))),O},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(O){var Z=y;return function(){var j=y;y=Z;try{return O.apply(this,arguments)}finally{y=j}}}}(Rh)),Rh}var ev;function LS(){return ev||(ev=1,wh.exports=DS()),wh.exports}var Ch={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function US(){if(tv)return Un;tv=1;var s=np();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,g)},Un.flushSync=function(p){var d=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=d,a.p=g,a.d.f()}},Un.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Un.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Un.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),y=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Un.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Un.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Un.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Un.requestFormReset=function(p){a.d.r(p)},Un.unstable_batchedUpdates=function(p,d){return p(d)},Un.useFormState=function(p,d,g){return f.H.useFormState(p,d,g)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var nv;function NS(){if(nv)return Ch.exports;nv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ch.exports=US(),Ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function PS(){if(iv)return Fo;iv=1;var s=LS(),e=np(),n=NS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var u=r.return;if(u===null)break;var m=u.alternate;if(m===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===r)return h(u),t;if(m===l)return h(u),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=u,l=m;else{for(var M=!1,T=u.child;T;){if(T===r){M=!0,r=u,l=m;break}if(T===l){M=!0,l=u,r=m;break}T=T.sibling}if(!M){for(T=m.child;T;){if(T===r){M=!0,r=m,l=u;break}if(T===l){M=!0,l=m,r=u;break}T=T.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function d(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=d(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),w=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case w:return(t.displayName||"Context")+".Provider";case R:return(t._context.displayName||"Context")+".Consumer";case L:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case k:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var fe=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},be=[],N=-1;function ee(t){return{current:t}}function ye(t){0>N||(t.current=be[N],be[N]=null,N--)}function Me(t,i){N++,be[N]=t.current,t.current=i}var J=ee(null),ge=ee(null),Se=ee(null),we=ee(null);function Oe(t,i){switch(Me(Se,i),Me(ge,t),Me(J,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?M0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=M0(i),t=E0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(J),Me(J,t)}function ot(){ye(J),ye(ge),ye(Se)}function Ke(t){t.memoizedState!==null&&Me(we,t);var i=J.current,r=E0(i,t.type);i!==r&&(Me(ge,t),Me(J,r))}function Gt(t){ge.current===t&&(ye(J),ye(ge)),we.current===t&&(ye(we),No._currentValue=j)}var zt=Object.prototype.hasOwnProperty,ft=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,zn=s.unstable_shouldYield,_t=s.unstable_requestPaint,nt=s.unstable_now,je=s.unstable_getCurrentPriorityLevel,Lt=s.unstable_ImmediatePriority,Ve=s.unstable_UserBlockingPriority,P=s.unstable_NormalPriority,A=s.unstable_LowPriority,ne=s.unstable_IdlePriority,xe=s.log,Ee=s.unstable_setDisableYieldValue,de=null,ze=null;function Re(t){if(typeof xe=="function"&&Ee(t),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(de,t)}catch{}}var Ce=Math.clz32?Math.clz32:He,yt=Math.log,Ae=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(yt(t)/Ae|0)|0}var Ye=256,Qe=4194304;function Ie(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ct(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var u=0,m=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?u=Ie(l):(M&=T,M!==0?u=Ie(M):r||(r=T&~t,r!==0&&(u=Ie(r))))):(T=l&~m,T!==0?u=Ie(T):M!==0?u=Ie(M):r||(r=l&~t,r!==0&&(u=Ie(r)))),u===0?0:i!==0&&i!==u&&(i&m)===0&&(m=u&-u,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:u}function tt(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ut(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Ye;return Ye<<=1,(Ye&4194048)===0&&(Ye=256),t}function Ne(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function ue(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function ve(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Be(t,i,r,l,u,m){var M=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,te=t.hiddenUpdates;for(r=M&~r;0<r;){var he=31-Ce(r),_e=1<<he;T[he]=0,I[he]=-1;var ie=te[he];if(ie!==null)for(te[he]=null,he=0;he<ie.length;he++){var ae=ie[he];ae!==null&&(ae.lane&=-536870913)}r&=~_e}l!==0&&Pe(t,l,0),m!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=m&~(M&~i))}function Pe(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ce(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&4194090}function it(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Ce(r),u=1<<l;u&i|t[l]&i&&(t[l]|=i),r&=~u}}function Vt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:k0(t.type))}function Yn(t,i){var r=Z.p;try{return Z.p=t,i()}finally{Z.p=r}}var mn=Math.random().toString(36).slice(2),ln="__reactFiber$"+mn,Mn="__reactProps$"+mn,Fn="__reactContainer$"+mn,nr="__reactEvents$"+mn,ul="__reactListeners$"+mn,fl="__reactHandles$"+mn,ir="__reactResources$"+mn,ya="__reactMarker$"+mn;function xa(t){delete t[ln],delete t[Mn],delete t[nr],delete t[ul],delete t[fl]}function zi(t){var i=t[ln];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Fn]||r[ln]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=R0(t);t!==null;){if(r=t[ln])return r;t=R0(t)}return i}t=r,r=t.parentNode}return null}function Fi(t){if(t=t[ln]||t[Fn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ar(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Sa(t){var i=t[ir];return i||(i=t[ir]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function an(t){t[ya]=!0}var hl=new Set,dl={};function Hi(t,i){C(t,i),C(t+"Capture",i)}function C(t,i){for(dl[t]=i,t=0;t<i.length;t++)hl.add(i[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},se={};function Y(t){return zt.call(se,t)?!0:zt.call(re,t)?!1:q.test(t)?se[t]=!0:(re[t]=!0,!1)}function Te(t,i,r){if(Y(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function De(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Le(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}var Fe,Je;function We(t){if(Fe===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Fe=i&&i[1]||"",Je=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+Je}var Xe=!1;function pt(t,i){if(!t||Xe)return"";Xe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ae){var ie=ae}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ae){ie=ae}t.call(_e.prototype)}}else{try{throw Error()}catch(ae){ie=ae}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ae){if(ae&&ie&&typeof ae.stack=="string")return[ae.stack,ie.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],T=m[1];if(M&&T){var I=M.split(`
`),te=T.split(`
`);for(u=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(l===I.length||u===te.length)for(l=I.length-1,u=te.length-1;1<=l&&0<=u&&I[l]!==te[u];)u--;for(;1<=l&&0<=u;l--,u--)if(I[l]!==te[u]){if(l!==1||u!==1)do if(l--,u--,0>u||I[l]!==te[u]){var he=`
`+I[l].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=l&&0<=u);break}}}finally{Xe=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?We(r):""}function At(t){switch(t.tag){case 26:case 27:case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return We("Activity");default:return""}}function qt(t){try{var i="";do i+=At(t),t=t.return;while(t);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(t){var i=St(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,m=r.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(t,i,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Kt(t){t._valueTracker||(t._valueTracker=qe(t))}function Et(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=St(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function Cn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ba=/[\n"\\]/g;function kt(t){return t.replace(ba,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gi(t,i,r,l,u,m,M,T){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+xt(i)):t.value!==""+xt(i)&&(t.value=""+xt(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Dn(t,M,xt(i)):r!=null?Dn(t,M,xt(r)):l!=null&&t.removeAttribute("value"),u==null&&m!=null&&(t.defaultChecked=!!m),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+xt(T):t.removeAttribute("name")}function Ft(t,i,r,l,u,m,M,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;r=r!=null?""+xt(r):"",i=i!=null?""+xt(i):r,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Dn(t,i,r){i==="number"&&Cn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function cn(t,i,r,l){if(t=t.options,i){i={};for(var u=0;u<r.length;u++)i["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=i.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&l&&(t[r].defaultSelected=!0)}else{for(r=""+xt(r),i=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function gn(t,i,r){if(i!=null&&(i=""+xt(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+xt(r):""}function En(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(fe(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=xt(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l)}function Ti(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mp(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||Vi.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Ep(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&r[u]!==l&&Mp(t,u,l)}else for(var m in i)i.hasOwnProperty(m)&&Mp(t,m,i[m])}function bu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return Ty.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Mu=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zr=null,Fr=null;function Tp(t){var i=Fi(t);if(i&&(t=i.stateNode)){var r=t[Mn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Gi(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+kt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var u=l[Mn]||null;if(!u)throw Error(a(90));Gi(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&Et(l)}break e;case"textarea":gn(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&cn(t,!!r.multiple,i,!1)}}}var Tu=!1;function Ap(t,i,r){if(Tu)return t(i,r);Tu=!0;try{var l=t(i);return l}finally{if(Tu=!1,(zr!==null||Fr!==null)&&(Jl(),zr&&(i=zr,t=Fr,Fr=zr=null,Tp(i),t)))for(i=0;i<t.length;i++)Tp(t[i])}}function js(t,i){var r=t.stateNode;if(r===null)return null;var l=r[Mn]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(ki)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{Au=!1}var Ma=null,wu=null,ml=null;function wp(){if(ml)return ml;var t,i=wu,r=i.length,l,u="value"in Ma?Ma.value:Ma.textContent,m=u.length;for(t=0;t<r&&i[t]===u[t];t++);var M=r-t;for(l=1;l<=M&&i[r-l]===u[m-l];l++);return ml=u.slice(t,1<l?1-l:void 0)}function gl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Rp(){return!1}function Hn(t){function i(r,l,u,m,M){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(r=t[T],this[T]=r?r(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vl:Rp,this.isPropagationStopped=Rp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),i}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Hn(rr),qs=g({},rr,{view:0,detail:0}),Ay=Hn(qs),Ru,Cu,Ys,yl=g({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(Ru=t.screenX-Ys.screenX,Cu=t.screenY-Ys.screenY):Cu=Ru=0,Ys=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Cp=Hn(yl),wy=g({},yl,{dataTransfer:0}),Ry=Hn(wy),Cy=g({},qs,{relatedTarget:0}),Du=Hn(Cy),Dy=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=Hn(Dy),Uy=g({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ny=Hn(Uy),Py=g({},rr,{data:0}),Dp=Hn(Py),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=By[t])?!!i[t]:!1}function Lu(){return zy}var Fy=g({},qs,{key:function(t){if(t.key){var i=Oy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hy=Hn(Fy),Gy=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Hn(Gy),Vy=g({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),ky=Hn(Vy),Xy=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=Hn(Xy),Wy=g({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qy=Hn(Wy),Yy=g({},rr,{newState:0,oldState:0}),Zy=Hn(Yy),Ky=[9,13,27,32],Uu=ki&&"CompositionEvent"in window,Zs=null;ki&&"documentMode"in document&&(Zs=document.documentMode);var Qy=ki&&"TextEvent"in window&&!Zs,Up=ki&&(!Uu||Zs&&8<Zs&&11>=Zs),Np=" ",Pp=!1;function Op(t,i){switch(t){case"keyup":return Ky.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function $y(t,i){switch(t){case"compositionend":return Ip(i);case"keypress":return i.which!==32?null:(Pp=!0,Np);case"textInput":return t=i.data,t===Np&&Pp?null:t;default:return null}}function Jy(t,i){if(Hr)return t==="compositionend"||!Uu&&Op(t,i)?(t=wp(),ml=wu=Ma=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Up&&i.locale!=="ko"?null:i.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ex[t.type]:i==="textarea"}function zp(t,i,r,l){zr?Fr?Fr.push(l):Fr=[l]:zr=l,i=rc(i,"onChange"),0<i.length&&(r=new _l("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var Ks=null,Qs=null;function tx(t){_0(t,0)}function xl(t){var i=ar(t);if(Et(i))return t}function Fp(t,i){if(t==="change")return i}var Hp=!1;if(ki){var Nu;if(ki){var Pu="oninput"in document;if(!Pu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Pu=typeof Gp.oninput=="function"}Nu=Pu}else Nu=!1;Hp=Nu&&(!document.documentMode||9<document.documentMode)}function Vp(){Ks&&(Ks.detachEvent("onpropertychange",kp),Qs=Ks=null)}function kp(t){if(t.propertyName==="value"&&xl(Qs)){var i=[];zp(i,Qs,t,Eu(t)),Ap(tx,i)}}function nx(t,i,r){t==="focusin"?(Vp(),Ks=i,Qs=r,Ks.attachEvent("onpropertychange",kp)):t==="focusout"&&Vp()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Qs)}function ax(t,i){if(t==="click")return xl(i)}function rx(t,i){if(t==="input"||t==="change")return xl(i)}function sx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:sx;function $s(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!zt.call(i,u)||!Zn(t[u],i[u]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,i){var r=Xp(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xp(r)}}function Wp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Cn(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Cn(t.document)}return i}function Ou(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var ox=ki&&"documentMode"in document&&11>=document.documentMode,Gr=null,Iu=null,Js=null,Bu=!1;function Yp(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Bu||Gr==null||Gr!==Cn(l)||(l=Gr,"selectionStart"in l&&Ou(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Js&&$s(Js,l)||(Js=l,l=rc(Iu,"onSelect"),0<l.length&&(i=new _l("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=Gr)))}function sr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},zu={},Zp={};ki&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(t){if(zu[t])return zu[t];if(!Vr[t])return t;var i=Vr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Zp)return zu[t]=i[r];return t}var Kp=or("animationend"),Qp=or("animationiteration"),$p=or("animationstart"),lx=or("transitionrun"),cx=or("transitionstart"),ux=or("transitioncancel"),Jp=or("transitionend"),em=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function gi(t,i){em.set(t,i),Hi(i,[t])}var tm=new WeakMap;function ri(t,i){if(typeof t=="object"&&t!==null){var r=tm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:qt(i)},tm.set(t,i),i)}return{value:t,source:i,stack:qt(i)}}var si=[],kr=0,Hu=0;function Sl(){for(var t=kr,i=Hu=kr=0;i<t;){var r=si[i];si[i++]=null;var l=si[i];si[i++]=null;var u=si[i];si[i++]=null;var m=si[i];if(si[i++]=null,l!==null&&u!==null){var M=l.pending;M===null?u.next=u:(u.next=M.next,M.next=u),l.pending=u}m!==0&&nm(r,u,m)}}function bl(t,i,r,l){si[kr++]=t,si[kr++]=i,si[kr++]=r,si[kr++]=l,Hu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Gu(t,i,r,l){return bl(t,i,r,l),Ml(t)}function Xr(t,i){return bl(t,null,null,i),Ml(t)}function nm(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var u=!1,m=t.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(u=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,u&&i!==null&&(u=31-Ce(r),t=m.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=r|536870912),m):null}function Ml(t){if(50<To)throw To=0,Yf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var jr={};function fx(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,r,l){return new fx(t,i,r,l)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,i){var r=t.alternate;return r===null?(r=Kn(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function im(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function El(t,i,r,l,u,m){var M=0;if(l=t,typeof t=="function")Vu(t)&&(M=1);else if(typeof t=="string")M=dS(t,r,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Kn(31,r,i,u),t.elementType=U,t.lanes=m,t;case b:return lr(r.children,u,m,i);case E:M=8,u|=24;break;case S:return t=Kn(12,r,i,u|2),t.elementType=S,t.lanes=m,t;case F:return t=Kn(13,r,i,u),t.elementType=F,t.lanes=m,t;case B:return t=Kn(19,r,i,u),t.elementType=B,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case w:M=10;break e;case R:M=9;break e;case L:M=11;break e;case z:M=14;break e;case k:M=16,l=null;break e}M=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Kn(M,r,i,u),i.elementType=t,i.type=l,i.lanes=m,i}function lr(t,i,r,l){return t=Kn(7,t,l,i),t.lanes=r,t}function ku(t,i,r){return t=Kn(6,t,null,i),t.lanes=r,t}function Xu(t,i,r){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Wr=[],qr=0,Tl=null,Al=0,oi=[],li=0,cr=null,ji=1,Wi="";function ur(t,i){Wr[qr++]=Al,Wr[qr++]=Tl,Tl=t,Al=i}function am(t,i,r){oi[li++]=ji,oi[li++]=Wi,oi[li++]=cr,cr=t;var l=ji;t=Wi;var u=32-Ce(l)-1;l&=~(1<<u),r+=1;var m=32-Ce(i)+u;if(30<m){var M=u-u%5;m=(l&(1<<M)-1).toString(32),l>>=M,u-=M,ji=1<<32-Ce(i)+u|r<<u|l,Wi=m+t}else ji=1<<m|r<<u|l,Wi=t}function ju(t){t.return!==null&&(ur(t,1),am(t,1,0))}function Wu(t){for(;t===Tl;)Tl=Wr[--qr],Wr[qr]=null,Al=Wr[--qr],Wr[qr]=null;for(;t===cr;)cr=oi[--li],oi[li]=null,Wi=oi[--li],oi[li]=null,ji=oi[--li],oi[li]=null}var On=null,Qt=null,Rt=!1,fr=null,Ai=!1,qu=Error(a(519));function hr(t){var i=Error(a(418,""));throw no(ri(i,t)),qu}function rm(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[ln]=t,i[Mn]=l,r){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)gt(wo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":gt("invalid",i),Ft(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Kt(i);break;case"select":gt("invalid",i);break;case"textarea":gt("invalid",i),En(i,l.value,l.defaultValue,l.children),Kt(i)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||b0(i.textContent,r)?(l.popover!=null&&(gt("beforetoggle",i),gt("toggle",i)),l.onScroll!=null&&gt("scroll",i),l.onScrollEnd!=null&&gt("scrollend",i),l.onClick!=null&&(i.onclick=sc),i=!0):i=!1,i||hr(t)}function sm(t){for(On=t.return;On;)switch(On.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:On=On.return}}function eo(t){if(t!==On)return!1;if(!Rt)return sm(t),Rt=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||uh(t.type,t.memoizedProps)),r=!r),r&&Qt&&hr(t),sm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(i===0){Qt=_i(t.nextSibling);break e}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;t=t.nextSibling}Qt=null}}else i===27?(i=Qt,Fa(t.type)?(t=ph,ph=null,Qt=t):Qt=i):Qt=On?_i(t.stateNode.nextSibling):null;return!0}function to(){Qt=On=null,Rt=!1}function om(){var t=fr;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),fr=null),t}function no(t){fr===null?fr=[t]:fr.push(t)}var Yu=ee(null),dr=null,qi=null;function Ea(t,i,r){Me(Yu,i._currentValue),i._currentValue=r}function Yi(t){t._currentValue=Yu.current,ye(Yu)}function Zu(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function Ku(t,i,r,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var m=u.dependencies;if(m!==null){var M=u.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=u;for(var I=0;I<i.length;I++)if(T.context===i[I]){m.lanes|=r,T=m.alternate,T!==null&&(T.lanes|=r),Zu(m.return,r,t),l||(M=null);break e}m=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(a(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),Zu(M,r,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function io(t,i,r,l){t=null;for(var u=i,m=!1;u!==null;){if(!m){if((u.flags&524288)!==0)m=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var T=u.type;Zn(u.pendingProps.value,M.value)||(t!==null?t.push(T):t=[T])}}else if(u===we.current){if(M=u.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Ku(i,t,r,l),i.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){dr=t,qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return lm(dr,t)}function Rl(t,i){return dr===null&&pr(t),lm(t,i)}function lm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},qi===null){if(t===null)throw Error(a(308));qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else qi=qi.next=i;return r}var hx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},dx=s.unstable_scheduleCallback,px=s.unstable_NormalPriority,un={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new hx,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&dx(px,function(){t.controller.abort()})}var ro=null,$u=0,Yr=0,Zr=null;function mx(t,i){if(ro===null){var r=ro=[];$u=0,Yr=th(),Zr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return $u++,i.then(cm,cm),i}function cm(){if(--$u===0&&ro!==null){Zr!==null&&(Zr.status="fulfilled");var t=ro;ro=null,Yr=0,Zr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function gx(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<r.length;u++)(0,r[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var um=O.S;O.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&mx(t,i),um!==null&&um(t,i)};var mr=ee(null);function Ju(){var t=mr.current;return t!==null?t:Xt.pooledCache}function Cl(t,i){i===null?Me(mr,mr.current):Me(mr,i.pool)}function fm(){var t=Ju();return t===null?null:{parent:un._currentValue,pool:t}}var so=Error(a(460)),hm=Error(a(474)),Dl=Error(a(542)),ef={then:function(){}};function dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ll(){}function pm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Ll,Ll),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,gm(t),t;default:if(typeof i.status=="string")i.then(Ll,Ll);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,gm(t),t}throw oo=i,so}}var oo=null;function mm(){if(oo===null)throw Error(a(459));var t=oo;return oo=null,t}function gm(t){if(t===so||t===Dl)throw Error(a(483))}var Ta=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Aa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ct&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Ml(t),nm(t,null,r),i}return bl(t,l,i,r),Ml(t)}function lo(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,it(t,r)}}function af(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?u=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?u=m=i:m=m.next=i}else u=m=i;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var rf=!1;function co(){if(rf){var t=Zr;if(t!==null)throw t}}function uo(t,i,r,l){rf=!1;var u=t.updateQueue;Ta=!1;var m=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,te=I.next;I.next=null,M===null?m=te:M.next=te,M=I;var he=t.alternate;he!==null&&(he=he.updateQueue,T=he.lastBaseUpdate,T!==M&&(T===null?he.firstBaseUpdate=te:T.next=te,he.lastBaseUpdate=I))}if(m!==null){var _e=u.baseState;M=0,he=te=I=null,T=m;do{var ie=T.lane&-536870913,ae=ie!==T.lane;if(ae?(Mt&ie)===ie:(l&ie)===ie){ie!==0&&ie===Yr&&(rf=!0),he!==null&&(he=he.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var et=t,Ze=T;ie=i;var Ot=r;switch(Ze.tag){case 1:if(et=Ze.payload,typeof et=="function"){_e=et.call(Ot,_e,ie);break e}_e=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=Ze.payload,ie=typeof et=="function"?et.call(Ot,_e,ie):et,ie==null)break e;_e=g({},_e,ie);break e;case 2:Ta=!0}}ie=T.callback,ie!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=u.callbacks,ae===null?u.callbacks=[ie]:ae.push(ie))}else ae={lane:ie,tag:T.tag,payload:T.payload,callback:T.callback,next:null},he===null?(te=he=ae,I=_e):he=he.next=ae,M|=ie;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ae=T,T=ae.next,ae.next=null,u.lastBaseUpdate=ae,u.shared.pending=null}}while(!0);he===null&&(I=_e),u.baseState=I,u.firstBaseUpdate=te,u.lastBaseUpdate=he,m===null&&(u.shared.lanes=0),Oa|=M,t.lanes=M,t.memoizedState=_e}}function vm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function _m(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)vm(r[t],i)}var Kr=ee(null),Ul=ee(0);function ym(t,i){t=ta,Me(Ul,t),Me(Kr,i),ta=t|i.baseLanes}function sf(){Me(Ul,ta),Me(Kr,Kr.current)}function of(){ta=Ul.current,ye(Kr),ye(Ul)}var Ra=0,ut=null,Nt=null,rn=null,Nl=!1,Qr=!1,gr=!1,Pl=0,fo=0,$r=null,vx=0;function en(){throw Error(a(321))}function lf(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Zn(t[r],i[r]))return!1;return!0}function cf(t,i,r,l,u,m){return Ra=m,ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?ng:ig,gr=!1,m=r(l,u),gr=!1,Qr&&(m=Sm(i,r,l,u)),xm(t),m}function xm(t){O.H=Hl;var i=Nt!==null&&Nt.next!==null;if(Ra=0,rn=Nt=ut=null,Nl=!1,fo=0,$r=null,i)throw Error(a(300));t===null||vn||(t=t.dependencies,t!==null&&wl(t)&&(vn=!0))}function Sm(t,i,r,l){ut=t;var u=0;do{if(Qr&&($r=null),fo=0,Qr=!1,25<=u)throw Error(a(301));if(u+=1,rn=Nt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=Ex,m=i(r,l)}while(Qr);return m}function _x(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?ho(i):i,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ut.flags|=1024),i}function uf(){var t=Pl!==0;return Pl=0,t}function ff(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function hf(t){if(Nl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Nl=!1}Ra=0,rn=Nt=ut=null,Qr=!1,fo=Pl=0,$r=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?ut.memoizedState=rn=t:rn=rn.next=t,rn}function sn(){if(Nt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var i=rn===null?ut.memoizedState:rn.next;if(i!==null)rn=i,Nt=t;else{if(t===null)throw ut.alternate===null?Error(a(467)):Error(a(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},rn===null?ut.memoizedState=rn=t:rn=rn.next=t}return rn}function df(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var i=fo;return fo+=1,$r===null&&($r=[]),t=pm($r,t,i),i=ut,(rn===null?i.memoizedState:rn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?ng:ig),t}function Ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===w)return Ln(t)}throw Error(a(438,String(t)))}function pf(t){var i=null,r=ut.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=ut.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=df(),ut.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=D;return i.index++,r}function Zi(t,i){return typeof i=="function"?i(t):i}function Il(t){var i=sn();return mf(i,Nt,t)}function mf(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var u=t.baseQueue,m=l.pending;if(m!==null){if(u!==null){var M=u.next;u.next=m.next,m.next=M}i.baseQueue=u=m,l.pending=null}if(m=t.baseState,u===null)t.memoizedState=m;else{i=u.next;var T=M=null,I=null,te=i,he=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(Mt&_e)===_e:(Ra&_e)===_e){var ie=te.revertLane;if(ie===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===Yr&&(he=!0);else if((Ra&ie)===ie){te=te.next,ie===Yr&&(he=!0);continue}else _e={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(T=I=_e,M=m):I=I.next=_e,ut.lanes|=ie,Oa|=ie;_e=te.action,gr&&r(m,_e),m=te.hasEagerState?te.eagerState:r(m,_e)}else ie={lane:_e,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(T=I=ie,M=m):I=I.next=ie,ut.lanes|=_e,Oa|=_e;te=te.next}while(te!==null&&te!==i);if(I===null?M=m:I.next=T,!Zn(m,t.memoizedState)&&(vn=!0,he&&(r=Zr,r!==null)))throw r;t.memoizedState=m,t.baseState=M,t.baseQueue=I,l.lastRenderedState=m}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function gf(t){var i=sn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,u=r.pending,m=i.memoizedState;if(u!==null){r.pending=null;var M=u=u.next;do m=t(m,M.action),M=M.next;while(M!==u);Zn(m,i.memoizedState)||(vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function bm(t,i,r){var l=ut,u=sn(),m=Rt;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var M=!Zn((Nt||u).memoizedState,r);M&&(u.memoizedState=r,vn=!0),u=u.queue;var T=Tm.bind(null,l,u,t);if(po(2048,8,T,[t]),u.getSnapshot!==i||M||rn!==null&&rn.memoizedState.tag&1){if(l.flags|=2048,Jr(9,Bl(),Em.bind(null,l,u,r,i),null),Xt===null)throw Error(a(349));m||(Ra&124)!==0||Mm(l,i,r)}return r}function Mm(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=ut.updateQueue,i===null?(i=df(),ut.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function Em(t,i,r,l){i.value=r,i.getSnapshot=l,Am(i)&&wm(t)}function Tm(t,i,r){return r(function(){Am(i)&&wm(t)})}function Am(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Zn(t,r)}catch{return!0}}function wm(t){var i=Xr(t,2);i!==null&&ti(i,t,2)}function vf(t){var i=Gn();if(typeof t=="function"){var r=t;if(t=r(),gr){Re(!0);try{r()}finally{Re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},i}function Rm(t,i,r,l){return t.baseState=r,mf(t,Nt,typeof l=="function"?l:Zi)}function yx(t,i,r,l,u){if(Fl(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};O.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,Cm(i,m)):(m.next=r.next,i.pending=r.next=m)}}function Cm(t,i){var r=i.action,l=i.payload,u=t.state;if(i.isTransition){var m=O.T,M={};O.T=M;try{var T=r(u,l),I=O.S;I!==null&&I(M,T),Dm(t,i,T)}catch(te){_f(t,i,te)}finally{O.T=m}}else try{m=r(u,l),Dm(t,i,m)}catch(te){_f(t,i,te)}}function Dm(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Lm(t,i,l)},function(l){return _f(t,i,l)}):Lm(t,i,r)}function Lm(t,i,r){i.status="fulfilled",i.value=r,Um(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Cm(t,r)))}function _f(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Um(i),i=i.next;while(i!==l)}t.action=null}function Um(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Nm(t,i){return i}function Pm(t,i){if(Rt){var r=Xt.formState;if(r!==null){e:{var l=ut;if(Rt){if(Qt){t:{for(var u=Qt,m=Ai;u.nodeType!==8;){if(!m){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}m=u.data,u=m==="F!"||m==="F"?u:null}if(u){Qt=_i(u.nextSibling),l=u.data==="F!";break e}}hr(l)}l=!1}l&&(i=r[0])}}return r=Gn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:i},r.queue=l,r=Jm.bind(null,ut,l),l.dispatch=r,l=vf(!1),m=Mf.bind(null,ut,!1,l.queue),l=Gn(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,r=yx.bind(null,ut,u,m,r),u.dispatch=r,l.memoizedState=t,[i,r,!1]}function Om(t){var i=sn();return Im(i,Nt,t)}function Im(t,i,r){if(i=mf(t,i,Nm)[0],t=Il(Zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ho(i)}catch(M){throw M===so?Dl:M}else l=i;i=sn();var u=i.queue,m=u.dispatch;return r!==i.memoizedState&&(ut.flags|=2048,Jr(9,Bl(),xx.bind(null,u,r),null)),[l,m,t]}function xx(t,i){t.action=i}function Bm(t){var i=sn(),r=Nt;if(r!==null)return Im(i,r,t);sn(),i=i.memoizedState,r=sn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function Jr(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=ut.updateQueue,i===null&&(i=df(),ut.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function Bl(){return{destroy:void 0,resource:void 0}}function zm(){return sn().memoizedState}function zl(t,i,r,l){var u=Gn();l=l===void 0?null:l,ut.flags|=t,u.memoizedState=Jr(1|i,Bl(),r,l)}function po(t,i,r,l){var u=sn();l=l===void 0?null:l;var m=u.memoizedState.inst;Nt!==null&&l!==null&&lf(l,Nt.memoizedState.deps)?u.memoizedState=Jr(i,m,r,l):(ut.flags|=t,u.memoizedState=Jr(1|i,m,r,l))}function Fm(t,i){zl(8390656,8,t,i)}function Hm(t,i){po(2048,8,t,i)}function Gm(t,i){return po(4,2,t,i)}function Vm(t,i){return po(4,4,t,i)}function km(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xm(t,i,r){r=r!=null?r.concat([t]):null,po(4,4,km.bind(null,i,t),r)}function yf(){}function jm(t,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&lf(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function Wm(t,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&lf(i,l[1]))return l[0];if(l=t(),gr){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[l,i],l}function xf(t,i,r){return r===void 0||(Ra&1073741824)!==0?t.memoizedState=i:(t.memoizedState=r,t=Zg(),ut.lanes|=t,Oa|=t,r)}function qm(t,i,r,l){return Zn(r,i)?r:Kr.current!==null?(t=xf(t,r,l),Zn(t,i)||(vn=!0),t):(Ra&42)===0?(vn=!0,t.memoizedState=r):(t=Zg(),ut.lanes|=t,Oa|=t,i)}function Ym(t,i,r,l,u){var m=Z.p;Z.p=m!==0&&8>m?m:8;var M=O.T,T={};O.T=T,Mf(t,!1,i,r);try{var I=u(),te=O.S;if(te!==null&&te(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var he=gx(I,l);mo(t,i,he,ei(t))}else mo(t,i,l,ei(t))}catch(_e){mo(t,i,{then:function(){},status:"rejected",reason:_e},ei())}finally{Z.p=m,O.T=M}}function Sx(){}function Sf(t,i,r,l){if(t.tag!==5)throw Error(a(476));var u=Zm(t).queue;Ym(t,u,i,j,r===null?Sx:function(){return Km(t),r(l)})}function Zm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:j},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Km(t){var i=Zm(t).next.queue;mo(t,i,{},ei())}function bf(){return Ln(No)}function Qm(){return sn().memoizedState}function $m(){return sn().memoizedState}function bx(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=ei();t=Aa(r);var l=wa(i,t,r);l!==null&&(ti(l,i,r),lo(l,i,r)),i={cache:Qu()},t.payload=i;return}i=i.return}}function Mx(t,i,r){var l=ei();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Fl(t)?eg(i,r):(r=Gu(t,i,r,l),r!==null&&(ti(r,t,l),tg(r,i,l)))}function Jm(t,i,r){var l=ei();mo(t,i,r,l)}function mo(t,i,r,l){var u={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))eg(i,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,T=m(M,r);if(u.hasEagerState=!0,u.eagerState=T,Zn(T,M))return bl(t,i,u,0),Xt===null&&Sl(),!1}catch{}finally{}if(r=Gu(t,i,u,l),r!==null)return ti(r,t,l),tg(r,i,l),!0}return!1}function Mf(t,i,r,l){if(l={lane:2,revertLane:th(),action:l,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(i)throw Error(a(479))}else i=Gu(t,r,l,2),i!==null&&ti(i,t,2)}function Fl(t){var i=t.alternate;return t===ut||i!==null&&i===ut}function eg(t,i){Qr=Nl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function tg(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,it(t,r)}}var Hl={readContext:Ln,use:Ol,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},ng={readContext:Ln,use:Ol,useCallback:function(t,i){return Gn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:Fm,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,zl(4194308,4,km.bind(null,i,t),r)},useLayoutEffect:function(t,i){return zl(4194308,4,t,i)},useInsertionEffect:function(t,i){zl(4,2,t,i)},useMemo:function(t,i){var r=Gn();i=i===void 0?null:i;var l=t();if(gr){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=Gn();if(r!==void 0){var u=r(i);if(gr){Re(!0);try{r(i)}finally{Re(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=Mx.bind(null,ut,t),[l.memoizedState,t]},useRef:function(t){var i=Gn();return t={current:t},i.memoizedState=t},useState:function(t){t=vf(t);var i=t.queue,r=Jm.bind(null,ut,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:yf,useDeferredValue:function(t,i){var r=Gn();return xf(r,t,i)},useTransition:function(){var t=vf(!1);return t=Ym.bind(null,ut,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=ut,u=Gn();if(Rt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Xt===null)throw Error(a(349));(Mt&124)!==0||Mm(l,i,r)}u.memoizedState=r;var m={value:r,getSnapshot:i};return u.queue=m,Fm(Tm.bind(null,l,m,t),[t]),l.flags|=2048,Jr(9,Bl(),Em.bind(null,l,m,r,i),null),r},useId:function(){var t=Gn(),i=Xt.identifierPrefix;if(Rt){var r=Wi,l=ji;r=(l&~(1<<32-Ce(l)-1)).toString(32)+r,i="«"+i+"R"+r,r=Pl++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=vx++,i="«"+i+"r"+r.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:bf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var i=Gn();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Mf.bind(null,ut,!0,r),r.dispatch=i,[t,i]},useMemoCache:pf,useCacheRefresh:function(){return Gn().memoizedState=bx.bind(null,ut)}},ig={readContext:Ln,use:Ol,useCallback:jm,useContext:Ln,useEffect:Hm,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Il,useRef:zm,useState:function(){return Il(Zi)},useDebugValue:yf,useDeferredValue:function(t,i){var r=sn();return qm(r,Nt.memoizedState,t,i)},useTransition:function(){var t=Il(Zi)[0],i=sn().memoizedState;return[typeof t=="boolean"?t:ho(t),i]},useSyncExternalStore:bm,useId:Qm,useHostTransitionStatus:bf,useFormState:Om,useActionState:Om,useOptimistic:function(t,i){var r=sn();return Rm(r,Nt,t,i)},useMemoCache:pf,useCacheRefresh:$m},Ex={readContext:Ln,use:Ol,useCallback:jm,useContext:Ln,useEffect:Hm,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:Wm,useReducer:gf,useRef:zm,useState:function(){return gf(Zi)},useDebugValue:yf,useDeferredValue:function(t,i){var r=sn();return Nt===null?xf(r,t,i):qm(r,Nt.memoizedState,t,i)},useTransition:function(){var t=gf(Zi)[0],i=sn().memoizedState;return[typeof t=="boolean"?t:ho(t),i]},useSyncExternalStore:bm,useId:Qm,useHostTransitionStatus:bf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,i){var r=sn();return Nt!==null?Rm(r,Nt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:pf,useCacheRefresh:$m},es=null,go=0;function Gl(t){var i=go;return go+=1,es===null&&(es=[]),pm(es,t,i)}function vo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Vl(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function ag(t){var i=t._init;return i(t._payload)}function rg(t){function i(W,V){if(t){var $=W.deletions;$===null?(W.deletions=[V],W.flags|=16):$.push(V)}}function r(W,V){if(!t)return null;for(;V!==null;)i(W,V),V=V.sibling;return null}function l(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function u(W,V){return W=Xi(W,V),W.index=0,W.sibling=null,W}function m(W,V,$){return W.index=$,t?($=W.alternate,$!==null?($=$.index,$<V?(W.flags|=67108866,V):$):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function M(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function T(W,V,$,pe){return V===null||V.tag!==6?(V=ku($,W.mode,pe),V.return=W,V):(V=u(V,$),V.return=W,V)}function I(W,V,$,pe){var Ge=$.type;return Ge===b?he(W,V,$.props.children,pe,$.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===k&&ag(Ge)===V.type)?(V=u(V,$.props),vo(V,$),V.return=W,V):(V=El($.type,$.key,$.props,null,W.mode,pe),vo(V,$),V.return=W,V)}function te(W,V,$,pe){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Xu($,W.mode,pe),V.return=W,V):(V=u(V,$.children||[]),V.return=W,V)}function he(W,V,$,pe,Ge){return V===null||V.tag!==7?(V=lr($,W.mode,pe,Ge),V.return=W,V):(V=u(V,$),V.return=W,V)}function _e(W,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ku(""+V,W.mode,$),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return $=El(V.type,V.key,V.props,null,W.mode,$),vo($,V),$.return=W,$;case x:return V=Xu(V,W.mode,$),V.return=W,V;case k:var pe=V._init;return V=pe(V._payload),_e(W,V,$)}if(fe(V)||ce(V))return V=lr(V,W.mode,$,null),V.return=W,V;if(typeof V.then=="function")return _e(W,Gl(V),$);if(V.$$typeof===w)return _e(W,Rl(W,V),$);Vl(W,V)}return null}function ie(W,V,$,pe){var Ge=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ge!==null?null:T(W,V,""+$,pe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===Ge?I(W,V,$,pe):null;case x:return $.key===Ge?te(W,V,$,pe):null;case k:return Ge=$._init,$=Ge($._payload),ie(W,V,$,pe)}if(fe($)||ce($))return Ge!==null?null:he(W,V,$,pe,null);if(typeof $.then=="function")return ie(W,V,Gl($),pe);if($.$$typeof===w)return ie(W,V,Rl(W,$),pe);Vl(W,$)}return null}function ae(W,V,$,pe,Ge){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return W=W.get($)||null,T(V,W,""+pe,Ge);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case y:return W=W.get(pe.key===null?$:pe.key)||null,I(V,W,pe,Ge);case x:return W=W.get(pe.key===null?$:pe.key)||null,te(V,W,pe,Ge);case k:var ht=pe._init;return pe=ht(pe._payload),ae(W,V,$,pe,Ge)}if(fe(pe)||ce(pe))return W=W.get($)||null,he(V,W,pe,Ge,null);if(typeof pe.then=="function")return ae(W,V,$,Gl(pe),Ge);if(pe.$$typeof===w)return ae(W,V,$,Rl(V,pe),Ge);Vl(V,pe)}return null}function et(W,V,$,pe){for(var Ge=null,ht=null,ke=V,$e=V=0,yn=null;ke!==null&&$e<$.length;$e++){ke.index>$e?(yn=ke,ke=null):yn=ke.sibling;var wt=ie(W,ke,$[$e],pe);if(wt===null){ke===null&&(ke=yn);break}t&&ke&&wt.alternate===null&&i(W,ke),V=m(wt,V,$e),ht===null?Ge=wt:ht.sibling=wt,ht=wt,ke=yn}if($e===$.length)return r(W,ke),Rt&&ur(W,$e),Ge;if(ke===null){for(;$e<$.length;$e++)ke=_e(W,$[$e],pe),ke!==null&&(V=m(ke,V,$e),ht===null?Ge=ke:ht.sibling=ke,ht=ke);return Rt&&ur(W,$e),Ge}for(ke=l(ke);$e<$.length;$e++)yn=ae(ke,W,$e,$[$e],pe),yn!==null&&(t&&yn.alternate!==null&&ke.delete(yn.key===null?$e:yn.key),V=m(yn,V,$e),ht===null?Ge=yn:ht.sibling=yn,ht=yn);return t&&ke.forEach(function(Xa){return i(W,Xa)}),Rt&&ur(W,$e),Ge}function Ze(W,V,$,pe){if($==null)throw Error(a(151));for(var Ge=null,ht=null,ke=V,$e=V=0,yn=null,wt=$.next();ke!==null&&!wt.done;$e++,wt=$.next()){ke.index>$e?(yn=ke,ke=null):yn=ke.sibling;var Xa=ie(W,ke,wt.value,pe);if(Xa===null){ke===null&&(ke=yn);break}t&&ke&&Xa.alternate===null&&i(W,ke),V=m(Xa,V,$e),ht===null?Ge=Xa:ht.sibling=Xa,ht=Xa,ke=yn}if(wt.done)return r(W,ke),Rt&&ur(W,$e),Ge;if(ke===null){for(;!wt.done;$e++,wt=$.next())wt=_e(W,wt.value,pe),wt!==null&&(V=m(wt,V,$e),ht===null?Ge=wt:ht.sibling=wt,ht=wt);return Rt&&ur(W,$e),Ge}for(ke=l(ke);!wt.done;$e++,wt=$.next())wt=ae(ke,W,$e,wt.value,pe),wt!==null&&(t&&wt.alternate!==null&&ke.delete(wt.key===null?$e:wt.key),V=m(wt,V,$e),ht===null?Ge=wt:ht.sibling=wt,ht=wt);return t&&ke.forEach(function(TS){return i(W,TS)}),Rt&&ur(W,$e),Ge}function Ot(W,V,$,pe){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var Ge=$.key;V!==null;){if(V.key===Ge){if(Ge=$.type,Ge===b){if(V.tag===7){r(W,V.sibling),pe=u(V,$.props.children),pe.return=W,W=pe;break e}}else if(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===k&&ag(Ge)===V.type){r(W,V.sibling),pe=u(V,$.props),vo(pe,$),pe.return=W,W=pe;break e}r(W,V);break}else i(W,V);V=V.sibling}$.type===b?(pe=lr($.props.children,W.mode,pe,$.key),pe.return=W,W=pe):(pe=El($.type,$.key,$.props,null,W.mode,pe),vo(pe,$),pe.return=W,W=pe)}return M(W);case x:e:{for(Ge=$.key;V!==null;){if(V.key===Ge)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){r(W,V.sibling),pe=u(V,$.children||[]),pe.return=W,W=pe;break e}else{r(W,V);break}else i(W,V);V=V.sibling}pe=Xu($,W.mode,pe),pe.return=W,W=pe}return M(W);case k:return Ge=$._init,$=Ge($._payload),Ot(W,V,$,pe)}if(fe($))return et(W,V,$,pe);if(ce($)){if(Ge=ce($),typeof Ge!="function")throw Error(a(150));return $=Ge.call($),Ze(W,V,$,pe)}if(typeof $.then=="function")return Ot(W,V,Gl($),pe);if($.$$typeof===w)return Ot(W,V,Rl(W,$),pe);Vl(W,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(r(W,V.sibling),pe=u(V,$),pe.return=W,W=pe):(r(W,V),pe=ku($,W.mode,pe),pe.return=W,W=pe),M(W)):r(W,V)}return function(W,V,$,pe){try{go=0;var Ge=Ot(W,V,$,pe);return es=null,Ge}catch(ke){if(ke===so||ke===Dl)throw ke;var ht=Kn(29,ke,null,W.mode);return ht.lanes=pe,ht.return=W,ht}finally{}}}var ts=rg(!0),sg=rg(!1),ci=ee(null),wi=null;function Ca(t){var i=t.alternate;Me(fn,fn.current&1),Me(ci,t),wi===null&&(i===null||Kr.current!==null||i.memoizedState!==null)&&(wi=t)}function og(t){if(t.tag===22){if(Me(fn,fn.current),Me(ci,t),wi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(wi=t)}}else Da()}function Da(){Me(fn,fn.current),Me(ci,ci.current)}function Ki(t){ye(ci),wi===t&&(wi=null),ye(fn)}var fn=ee(0);function kl(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||dh(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Ef(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Tf={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=ei(),u=Aa(l);u.payload=i,r!=null&&(u.callback=r),i=wa(t,u,l),i!==null&&(ti(i,t,l),lo(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=ei(),u=Aa(l);u.tag=1,u.payload=i,r!=null&&(u.callback=r),i=wa(t,u,l),i!==null&&(ti(i,t,l),lo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=ei(),l=Aa(r);l.tag=2,i!=null&&(l.callback=i),i=wa(t,l,r),i!==null&&(ti(i,t,r),lo(i,t,r))}};function lg(t,i,r,l,u,m,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!$s(r,l)||!$s(u,m):!0}function cg(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Tf.enqueueReplaceState(i,i.state,null)}function vr(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ug(t){Xl(t)}function fg(t){console.error(t)}function hg(t){Xl(t)}function jl(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function dg(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Af(t,i,r){return r=Aa(r),r.tag=3,r.payload={element:null},r.callback=function(){jl(t,i)},r}function pg(t){return t=Aa(t),t.tag=3,t}function mg(t,i,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var m=l.value;t.payload=function(){return u(m)},t.callback=function(){dg(i,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){dg(i,r,l),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Tx(t,i,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&io(i,r,u,!0),r=ci.current,r!==null){switch(r.tag){case 13:return wi===null?Kf():r.alternate===null&&$t===0&&($t=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===ef?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),$f(t,l,u)),!1;case 22:return r.flags|=65536,l===ef?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),$f(t,l,u)),!1}throw Error(a(435,r.tag))}return $f(t,l,u),Kf(),!1}if(Rt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==qu&&(t=Error(a(422),{cause:l}),no(ri(t,r)))):(l!==qu&&(i=Error(a(423),{cause:l}),no(ri(i,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=ri(l,r),u=Af(t.stateNode,l,u),af(t,u),$t!==4&&($t=2)),!1;var m=Error(a(520),{cause:l});if(m=ri(m,r),Eo===null?Eo=[m]:Eo.push(m),$t!==4&&($t=2),i===null)return!0;l=ri(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Af(r.stateNode,l,t),af(r,t),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ia===null||!Ia.has(m))))return r.flags|=65536,u&=-u,r.lanes|=u,u=pg(u),mg(u,t,r,l),af(r,u),!1}r=r.return}while(r!==null);return!1}var gg=Error(a(461)),vn=!1;function Tn(t,i,r,l){i.child=t===null?sg(i,null,r,l):ts(i,t.child,r,l)}function vg(t,i,r,l,u){r=r.render;var m=i.ref;if("ref"in l){var M={};for(var T in l)T!=="ref"&&(M[T]=l[T])}else M=l;return pr(i),l=cf(t,i,r,M,m,u),T=uf(),t!==null&&!vn?(ff(t,i,u),Qi(t,i,u)):(Rt&&T&&ju(i),i.flags|=1,Tn(t,i,l,u),i.child)}function _g(t,i,r,l,u){if(t===null){var m=r.type;return typeof m=="function"&&!Vu(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,yg(t,i,m,l,u)):(t=El(r.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!Pf(t,u)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:$s,r(M,l)&&t.ref===i.ref)return Qi(t,i,u)}return i.flags|=1,t=Xi(m,l),t.ref=i.ref,t.return=i,i.child=t}function yg(t,i,r,l,u){if(t!==null){var m=t.memoizedProps;if($s(m,l)&&t.ref===i.ref)if(vn=!1,i.pendingProps=l=m,Pf(t,u))(t.flags&131072)!==0&&(vn=!0);else return i.lanes=t.lanes,Qi(t,i,u)}return wf(t,i,r,l,u)}function xg(t,i,r){var l=i.pendingProps,u=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|r:r,t!==null){for(u=i.child=t.child,m=0;u!==null;)m=m|u.lanes|u.childLanes,u=u.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Sg(t,i,l,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(i,m!==null?m.cachePool:null),m!==null?ym(i,m):sf(),og(i);else return i.lanes=i.childLanes=536870912,Sg(t,i,m!==null?m.baseLanes|r:r,r)}else m!==null?(Cl(i,m.cachePool),ym(i,m),Da(),i.memoizedState=null):(t!==null&&Cl(i,null),sf(),Da());return Tn(t,i,u,r),i.child}function Sg(t,i,r,l){var u=Ju();return u=u===null?null:{parent:un._currentValue,pool:u},i.memoizedState={baseLanes:r,cachePool:u},t!==null&&Cl(i,null),sf(),og(i),t!==null&&io(t,i,l,!0),null}function Wl(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function wf(t,i,r,l,u){return pr(i),r=cf(t,i,r,l,void 0,u),l=uf(),t!==null&&!vn?(ff(t,i,u),Qi(t,i,u)):(Rt&&l&&ju(i),i.flags|=1,Tn(t,i,r,u),i.child)}function bg(t,i,r,l,u,m){return pr(i),i.updateQueue=null,r=Sm(i,l,r,u),xm(t),l=uf(),t!==null&&!vn?(ff(t,i,m),Qi(t,i,m)):(Rt&&l&&ju(i),i.flags|=1,Tn(t,i,r,m),i.child)}function Mg(t,i,r,l,u){if(pr(i),i.stateNode===null){var m=jr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Ln(M)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Tf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},tf(i),M=r.contextType,m.context=typeof M=="object"&&M!==null?Ln(M):jr,m.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Ef(i,r,M,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Tf.enqueueReplaceState(m,m.state,null),uo(i,l,m,u),co(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var T=i.memoizedProps,I=vr(r,T);m.props=I;var te=m.context,he=r.contextType;M=jr,typeof he=="object"&&he!==null&&(M=Ln(he));var _e=r.getDerivedStateFromProps;he=typeof _e=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,he||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||te!==M)&&cg(i,m,l,M),Ta=!1;var ie=i.memoizedState;m.state=ie,uo(i,l,m,u),co(),te=i.memoizedState,T||ie!==te||Ta?(typeof _e=="function"&&(Ef(i,r,_e,l),te=i.memoizedState),(I=Ta||lg(i,r,I,l,ie,te,M))?(he||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),m.props=l,m.state=te,m.context=M,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,nf(t,i),M=i.memoizedProps,he=vr(r,M),m.props=he,_e=i.pendingProps,ie=m.context,te=r.contextType,I=jr,typeof te=="object"&&te!==null&&(I=Ln(te)),T=r.getDerivedStateFromProps,(te=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==_e||ie!==I)&&cg(i,m,l,I),Ta=!1,ie=i.memoizedState,m.state=ie,uo(i,l,m,u),co();var ae=i.memoizedState;M!==_e||ie!==ae||Ta||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof T=="function"&&(Ef(i,r,T,l),ae=i.memoizedState),(he=Ta||lg(i,r,he,l,ie,ae,I)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(te||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ae,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ae,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ae),m.props=l,m.state=ae,m.context=I,l=he):(typeof m.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,Wl(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=ts(i,t.child,null,u),i.child=ts(i,null,r,u)):Tn(t,i,r,u),i.memoizedState=m.state,t=i.child):t=Qi(t,i,u),t}function Eg(t,i,r,l){return to(),i.flags|=256,Tn(t,i,r,l),i.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:fm()}}function Df(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=ui),t}function Tg(t,i,r){var l=i.pendingProps,u=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),M&&(u=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(u?Ca(i):Da(),Rt){var T=Qt,I;if(I=T){e:{for(I=T,T=Ai;I.nodeType!==8;){if(!T){T=null;break e}if(I=_i(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(i.memoizedState={dehydrated:T,treeContext:cr!==null?{id:ji,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},I=Kn(18,null,null,0),I.stateNode=T,I.return=i,i.child=I,On=i,Qt=null,I=!0):I=!1}I||hr(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return dh(T)?i.lanes=32:i.lanes=536870912,null;Ki(i)}return T=l.children,l=l.fallback,u?(Da(),u=i.mode,T=ql({mode:"hidden",children:T},u),l=lr(l,u,r,null),T.return=i,l.return=i,T.sibling=l,i.child=T,u=i.child,u.memoizedState=Cf(r),u.childLanes=Df(t,M,r),i.memoizedState=Rf,l):(Ca(i),Lf(i,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(m)i.flags&256?(Ca(i),i.flags&=-257,i=Uf(t,i,r)):i.memoizedState!==null?(Da(),i.child=t.child,i.flags|=128,i=null):(Da(),u=l.fallback,T=i.mode,l=ql({mode:"visible",children:l.children},T),u=lr(u,T,r,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,ts(i,t.child,null,r),l=i.child,l.memoizedState=Cf(r),l.childLanes=Df(t,M,r),i.memoizedState=Rf,i=u);else if(Ca(i),dh(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var te=M.dgst;M=te,l=Error(a(419)),l.stack="",l.digest=M,no({value:l,source:null,stack:null}),i=Uf(t,i,r)}else if(vn||io(t,i,r,!1),M=(r&t.childLanes)!==0,vn||M){if(M=Xt,M!==null&&(l=r&-r,l=(l&42)!==0?1:Vt(l),l=(l&(M.suspendedLanes|r))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Xr(t,l),ti(M,t,l),gg;T.data==="$?"||Kf(),i=Uf(t,i,r)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,Qt=_i(T.nextSibling),On=i,Rt=!0,fr=null,Ai=!1,t!==null&&(oi[li++]=ji,oi[li++]=Wi,oi[li++]=cr,ji=t.id,Wi=t.overflow,cr=i),i=Lf(i,l.children),i.flags|=4096);return i}return u?(Da(),u=l.fallback,T=i.mode,I=t.child,te=I.sibling,l=Xi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,te!==null?u=Xi(te,u):(u=lr(u,T,r,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,T=t.child.memoizedState,T===null?T=Cf(r):(I=T.cachePool,I!==null?(te=un._currentValue,I=I.parent!==te?{parent:te,pool:te}:I):I=fm(),T={baseLanes:T.baseLanes|r,cachePool:I}),u.memoizedState=T,u.childLanes=Df(t,M,r),i.memoizedState=Rf,l):(Ca(i),r=t.child,t=r.sibling,r=Xi(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=r,i.memoizedState=null,r)}function Lf(t,i){return i=ql({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function ql(t,i){return t=Kn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Uf(t,i,r){return ts(i,t.child,null,r),t=Lf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Ag(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Zu(t.return,i,r)}function Nf(t,i,r,l,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=r,m.tailMode=u)}function wg(t,i,r){var l=i.pendingProps,u=l.revealOrder,m=l.tail;if(Tn(t,i,l.children,r),l=fn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,r,i);else if(t.tag===19)Ag(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Me(fn,l),u){case"forwards":for(r=i.child,u=null;r!==null;)t=r.alternate,t!==null&&kl(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=i.child,i.child=null):(u=r.sibling,r.sibling=null),Nf(i,!1,u,r,m);break;case"backwards":for(r=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&kl(t)===null){i.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Nf(i,!0,r,null,m);break;case"together":Nf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qi(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Oa|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(io(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=Xi(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Xi(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Pf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function Ax(t,i,r){switch(i.tag){case 3:Oe(i,i.stateNode.containerInfo),Ea(i,un,t.memoizedState.cache),to();break;case 27:case 5:Ke(i);break;case 4:Oe(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ca(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Tg(t,i,r):(Ca(i),t=Qi(t,i,r),t!==null?t.sibling:null);Ca(i);break;case 19:var u=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(io(t,i,r,!1),l=(r&i.childLanes)!==0),u){if(l)return wg(t,i,r);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(fn,fn.current),l)break;return null;case 22:case 23:return i.lanes=0,xg(t,i,r);case 24:Ea(i,un,t.memoizedState.cache)}return Qi(t,i,r)}function Rg(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)vn=!0;else{if(!Pf(t,r)&&(i.flags&128)===0)return vn=!1,Ax(t,i,r);vn=(t.flags&131072)!==0}else vn=!1,Rt&&(i.flags&1048576)!==0&&am(i,Al,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")Vu(l)?(t=vr(l,t),i.tag=1,i=Mg(null,i,l,t,r)):(i.tag=0,i=wf(null,i,l,t,r));else{if(l!=null){if(u=l.$$typeof,u===L){i.tag=11,i=vg(null,i,l,t,r);break e}else if(u===z){i.tag=14,i=_g(null,i,l,t,r);break e}}throw i=me(l)||l,Error(a(306,i,""))}}return i;case 0:return wf(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,u=vr(l,i.pendingProps),Mg(t,i,l,u,r);case 3:e:{if(Oe(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;u=m.element,nf(t,i),uo(i,l,null,r);var M=i.memoizedState;if(l=M.cache,Ea(i,un,l),l!==m.cache&&Ku(i,[un],r,!0),co(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Eg(t,i,l,r);break e}else if(l!==u){u=ri(Error(a(424)),i),no(u),i=Eg(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=_i(t.firstChild),On=i,Rt=!0,fr=null,Ai=!0,r=sg(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(to(),l===u){i=Qi(t,i,r);break e}Tn(t,i,l,r)}i=i.child}return i;case 26:return Wl(t,i),t===null?(r=U0(i.type,null,i.pendingProps,null))?i.memoizedState=r:Rt||(r=i.type,t=i.pendingProps,l=oc(Se.current).createElement(r),l[ln]=i,l[Mn]=t,wn(l,r,t),an(l),i.stateNode=l):i.memoizedState=U0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ke(i),t===null&&Rt&&(l=i.stateNode=C0(i.type,i.pendingProps,Se.current),On=i,Ai=!0,u=Qt,Fa(i.type)?(ph=u,Qt=_i(l.firstChild)):Qt=u),Tn(t,i,i.pendingProps.children,r),Wl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((u=l=Qt)&&(l=eS(l,i.type,i.pendingProps,Ai),l!==null?(i.stateNode=l,On=i,Qt=_i(l.firstChild),Ai=!1,u=!0):u=!1),u||hr(i)),Ke(i),u=i.type,m=i.pendingProps,M=t!==null?t.memoizedProps:null,l=m.children,uh(u,m)?l=null:M!==null&&uh(u,M)&&(i.flags|=32),i.memoizedState!==null&&(u=cf(t,i,_x,null,null,r),No._currentValue=u),Wl(t,i),Tn(t,i,l,r),i.child;case 6:return t===null&&Rt&&((t=r=Qt)&&(r=tS(r,i.pendingProps,Ai),r!==null?(i.stateNode=r,On=i,Qt=null,t=!0):t=!1),t||hr(i)),null;case 13:return Tg(t,i,r);case 4:return Oe(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ts(i,null,l,r):Tn(t,i,l,r),i.child;case 11:return vg(t,i,i.type,i.pendingProps,r);case 7:return Tn(t,i,i.pendingProps,r),i.child;case 8:return Tn(t,i,i.pendingProps.children,r),i.child;case 12:return Tn(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ea(i,i.type,l.value),Tn(t,i,l.children,r),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,pr(i),u=Ln(u),l=l(u),i.flags|=1,Tn(t,i,l,r),i.child;case 14:return _g(t,i,i.type,i.pendingProps,r);case 15:return yg(t,i,i.type,i.pendingProps,r);case 19:return wg(t,i,r);case 31:return l=i.pendingProps,r=i.mode,l={mode:l.mode,children:l.children},t===null?(r=ql(l,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=Xi(t.child,l),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return xg(t,i,r);case 24:return pr(i),l=Ln(un),t===null?(u=Ju(),u===null&&(u=Xt,m=Qu(),u.pooledCache=m,m.refCount++,m!==null&&(u.pooledCacheLanes|=r),u=m),i.memoizedState={parent:l,cache:u},tf(i),Ea(i,un,u)):((t.lanes&r)!==0&&(nf(t,i),uo(i,null,null,r),co()),u=t.memoizedState,m=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ea(i,un,l)):(l=m.cache,Ea(i,un,l),l!==u.cache&&Ku(i,[un],r,!0))),Tn(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function $i(t){t.flags|=4}function Cg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!B0(i)){if(i=ci.current,i!==null&&((Mt&4194048)===Mt?wi!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||i!==wi))throw oo=ef,hm;t.flags|=8192}}function Yl(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ne():536870912,t.lanes|=i,rs|=i)}function _o(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Yt(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function wx(t,i,r){var l=i.pendingProps;switch(Wu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(i),null;case 1:return Yt(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Yi(un),ot(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(eo(i)?$i(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,om())),Yt(i),null;case 26:return r=i.memoizedState,t===null?($i(i),r!==null?(Yt(i),Cg(i,r)):(Yt(i),i.flags&=-16777217)):r?r!==t.memoizedState?($i(i),Yt(i),Cg(i,r)):(Yt(i),i.flags&=-16777217):(t.memoizedProps!==l&&$i(i),Yt(i),i.flags&=-16777217),null;case 27:Gt(i),r=Se.current;var u=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}t=J.current,eo(i)?rm(i):(t=C0(u,l,r),i.stateNode=t,$i(i))}return Yt(i),null;case 5:if(Gt(i),r=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Yt(i),null}if(t=J.current,eo(i))rm(i);else{switch(u=oc(Se.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}t[ln]=i,t[Mn]=l;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=t;e:switch(wn(t,r,l),r){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&$i(i)}}return Yt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&$i(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=Se.current,eo(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,u=On,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[ln]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||b0(t.nodeValue,r)),t||hr(i)}else t=oc(t).createTextNode(l),t[ln]=i,i.stateNode=t}return Yt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=eo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ln]=i}else to(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Yt(i),u=!1}else u=om(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Ki(i),i):(Ki(i),null)}if(Ki(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=l!==null,t=t!==null&&t.memoizedState!==null,r){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==u&&(l.flags|=2048)}return r!==t&&r&&(i.child.flags|=8192),Yl(i,i.updateQueue),Yt(i),null;case 4:return ot(),t===null&&rh(i.stateNode.containerInfo),Yt(i),null;case 10:return Yi(i.type),Yt(i),null;case 19:if(ye(fn),u=i.memoizedState,u===null)return Yt(i),null;if(l=(i.flags&128)!==0,m=u.rendering,m===null)if(l)_o(u,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=kl(t),m!==null){for(i.flags|=128,_o(u,!1),t=m.updateQueue,i.updateQueue=t,Yl(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)im(r,t),r=r.sibling;return Me(fn,fn.current&1|2),i.child}t=t.sibling}u.tail!==null&&nt()>Ql&&(i.flags|=128,l=!0,_o(u,!1),i.lanes=4194304)}else{if(!l)if(t=kl(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Yl(i,t),_o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Rt)return Yt(i),null}else 2*nt()-u.renderingStartTime>Ql&&r!==536870912&&(i.flags|=128,l=!0,_o(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(t=u.last,t!==null?t.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=nt(),i.sibling=null,t=fn.current,Me(fn,l?t&1|2:t&1),i):(Yt(i),null);case 22:case 23:return Ki(i),of(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Yt(i),i.subtreeFlags&6&&(i.flags|=8192)):Yt(i),r=i.updateQueue,r!==null&&Yl(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&ye(mr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Yi(un),Yt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Rx(t,i){switch(Wu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Yi(un),ot(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Gt(i),null;case 13:if(Ki(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));to()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ye(fn),null;case 4:return ot(),null;case 10:return Yi(i.type),null;case 22:case 23:return Ki(i),of(),t!==null&&ye(mr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Yi(un),null;case 25:return null;default:return null}}function Dg(t,i){switch(Wu(i),i.tag){case 3:Yi(un),ot();break;case 26:case 27:case 5:Gt(i);break;case 4:ot();break;case 13:Ki(i);break;case 19:ye(fn);break;case 10:Yi(i.type);break;case 22:case 23:Ki(i),of(),t!==null&&ye(mr);break;case 24:Yi(un)}}function yo(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&t)===t){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==u)}}catch(T){Ht(i,i.return,T)}}function La(t,i,r){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var m=u.next;l=m;do{if((l.tag&t)===t){var M=l.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=i;var I=r,te=T;try{te()}catch(he){Ht(u,I,he)}}}l=l.next}while(l!==m)}}catch(he){Ht(i,i.return,he)}}function Lg(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{_m(i,r)}catch(l){Ht(t,t.return,l)}}}function Ug(t,i,r){r.props=vr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Ht(t,i,l)}}function xo(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(u){Ht(t,i,u)}}function Ri(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){Ht(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ht(t,i,u)}else r.current=null}function Ng(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){Ht(t,t.return,u)}}function Of(t,i,r){try{var l=t.stateNode;Zx(l,t.type,r,i),l[Mn]=i}catch(u){Ht(t,t.return,u)}}function Pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=sc));else if(l!==4&&(l===27&&Fa(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(Bf(t,i,r),t=t.sibling;t!==null;)Bf(t,i,r),t=t.sibling}function Zl(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&Fa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Zl(t,i,r),t=t.sibling;t!==null;)Zl(t,i,r),t=t.sibling}function Og(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);wn(i,l,r),i[ln]=t,i[Mn]=r}catch(m){Ht(t,t.return,m)}}var Ji=!1,tn=!1,zf=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Cx(t,i){if(t=t.containerInfo,lh=dc,t=qp(t),Ou(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break e}var M=0,T=-1,I=-1,te=0,he=0,_e=t,ie=null;t:for(;;){for(var ae;_e!==r||u!==0&&_e.nodeType!==3||(T=M+u),_e!==m||l!==0&&_e.nodeType!==3||(I=M+l),_e.nodeType===3&&(M+=_e.nodeValue.length),(ae=_e.firstChild)!==null;)ie=_e,_e=ae;for(;;){if(_e===t)break t;if(ie===r&&++te===u&&(T=M),ie===m&&++he===l&&(I=M),(ae=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=ae}r=T===-1||I===-1?null:{start:T,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(ch={focusedElem:t,selectionRange:r},dc=!1,_n=i;_n!==null;)if(i=_n,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,_n=t;else for(;_n!==null;){switch(i=_n,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,r=i,u=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var et=vr(r.type,u,r.elementType===r.type);t=l.getSnapshotBeforeUpdate(et,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){Ht(r,r.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)hh(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,_n=t;break}_n=i.return}}function Bg(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ua(t,r),l&4&&yo(5,r);break;case 1:if(Ua(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(M){Ht(r,r.return,M)}else{var u=vr(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ht(r,r.return,M)}}l&64&&Lg(r),l&512&&xo(r,r.return);break;case 3:if(Ua(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{_m(t,i)}catch(M){Ht(r,r.return,M)}}break;case 27:i===null&&l&4&&Og(r);case 26:case 5:Ua(t,r),i===null&&l&4&&Ng(r),l&512&&xo(r,r.return);break;case 12:Ua(t,r);break;case 13:Ua(t,r),l&4&&Hg(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=zx.bind(null,r),nS(t,r))));break;case 22:if(l=r.memoizedState!==null||Ji,!l){i=i!==null&&i.memoizedState!==null||tn,u=Ji;var m=tn;Ji=l,(tn=i)&&!m?Na(t,r,(r.subtreeFlags&8772)!==0):Ua(t,r),Ji=u,tn=m}break;case 30:break;default:Ua(t,r)}}function zg(t){var i=t.alternate;i!==null&&(t.alternate=null,zg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&xa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Vn=!1;function ea(t,i,r){for(r=r.child;r!==null;)Fg(t,i,r),r=r.sibling}function Fg(t,i,r){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(de,r)}catch{}switch(r.tag){case 26:tn||Ri(r,i),ea(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:tn||Ri(r,i);var l=jt,u=Vn;Fa(r.type)&&(jt=r.stateNode,Vn=!1),ea(t,i,r),Co(r.stateNode),jt=l,Vn=u;break;case 5:tn||Ri(r,i);case 6:if(l=jt,u=Vn,jt=null,ea(t,i,r),jt=l,Vn=u,jt!==null)if(Vn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(r.stateNode)}catch(m){Ht(r,i,m)}else try{jt.removeChild(r.stateNode)}catch(m){Ht(r,i,m)}break;case 18:jt!==null&&(Vn?(t=jt,w0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Bo(t)):w0(jt,r.stateNode));break;case 4:l=jt,u=Vn,jt=r.stateNode.containerInfo,Vn=!0,ea(t,i,r),jt=l,Vn=u;break;case 0:case 11:case 14:case 15:tn||La(2,r,i),tn||La(4,r,i),ea(t,i,r);break;case 1:tn||(Ri(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Ug(r,i,l)),ea(t,i,r);break;case 21:ea(t,i,r);break;case 22:tn=(l=tn)||r.memoizedState!==null,ea(t,i,r),tn=l;break;default:ea(t,i,r)}}function Hg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bo(t)}catch(r){Ht(i,i.return,r)}}function Dx(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Ig),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Ig),i;default:throw Error(a(435,t.tag))}}function Ff(t,i){var r=Dx(t);i.forEach(function(l){var u=Fx.bind(null,t,l);r.has(l)||(r.add(l),l.then(u,u))})}function Qn(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],m=t,M=i,T=M;e:for(;T!==null;){switch(T.tag){case 27:if(Fa(T.type)){jt=T.stateNode,Vn=!1;break e}break;case 5:jt=T.stateNode,Vn=!1;break e;case 3:case 4:jt=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(jt===null)throw Error(a(160));Fg(m,M,u),jt=null,Vn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Gg(i,t),i=i.sibling}var vi=null;function Gg(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(i,t),$n(t),l&4&&(La(3,t,t.return),yo(3,t),La(5,t,t.return));break;case 1:Qn(i,t),$n(t),l&512&&(tn||r===null||Ri(r,r.return)),l&64&&Ji&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=vi;if(Qn(i,t),$n(t),l&512&&(tn||r===null||Ri(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":m=u.getElementsByTagName("title")[0],(!m||m[ya]||m[ln]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=u.createElement(l),u.head.insertBefore(m,u.querySelector("head > title"))),wn(m,l,r),m[ln]=t,an(m),l=m;break e;case"link":var M=O0("link","href",u).get(l+(r.href||""));if(M){for(var T=0;T<M.length;T++)if(m=M[T],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(T,1);break t}}m=u.createElement(l),wn(m,l,r),u.head.appendChild(m);break;case"meta":if(M=O0("meta","content",u).get(l+(r.content||""))){for(T=0;T<M.length;T++)if(m=M[T],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(T,1);break t}}m=u.createElement(l),wn(m,l,r),u.head.appendChild(m);break;default:throw Error(a(468,l))}m[ln]=t,an(m),l=m}t.stateNode=l}else I0(u,t.type,t.stateNode);else t.stateNode=P0(u,l,t.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?I0(u,t.type,t.stateNode):P0(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Of(t,t.memoizedProps,r.memoizedProps)}break;case 27:Qn(i,t),$n(t),l&512&&(tn||r===null||Ri(r,r.return)),r!==null&&l&4&&Of(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Qn(i,t),$n(t),l&512&&(tn||r===null||Ri(r,r.return)),t.flags&32){u=t.stateNode;try{Ti(u,"")}catch(ae){Ht(t,t.return,ae)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Of(t,u,r!==null?r.memoizedProps:u)),l&1024&&(zf=!0);break;case 6:if(Qn(i,t),$n(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(ae){Ht(t,t.return,ae)}}break;case 3:if(uc=null,u=vi,vi=lc(i.containerInfo),Qn(i,t),vi=u,$n(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Bo(i.containerInfo)}catch(ae){Ht(t,t.return,ae)}zf&&(zf=!1,Vg(t));break;case 4:l=vi,vi=lc(t.stateNode.containerInfo),Qn(i,t),$n(t),vi=l;break;case 12:Qn(i,t),$n(t);break;case 13:Qn(i,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(jf=nt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ff(t,l)));break;case 22:u=t.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,te=Ji,he=tn;if(Ji=te||u,tn=he||I,Qn(i,t),tn=he,Ji=te,$n(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(r===null||I||Ji||tn||_r(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){I=r=i;try{if(m=I.stateNode,u)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=I.stateNode;var _e=I.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ae){Ht(I,I.return,ae)}}}else if(i.tag===6){if(r===null){I=i;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(ae){Ht(I,I.return,ae)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Ff(t,r))));break;case 19:Qn(i,t),$n(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ff(t,l)));break;case 30:break;case 21:break;default:Qn(i,t),$n(t)}}function $n(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(Pg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,m=If(t);Zl(t,m,u);break;case 5:var M=r.stateNode;r.flags&32&&(Ti(M,""),r.flags&=-33);var T=If(t);Zl(t,T,M);break;case 3:case 4:var I=r.stateNode.containerInfo,te=If(t);Bf(t,te,I);break;default:throw Error(a(161))}}catch(he){Ht(t,t.return,he)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Vg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Vg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ua(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Bg(t,i.alternate,i),i=i.sibling}function _r(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:La(4,i,i.return),_r(i);break;case 1:Ri(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Ug(i,i.return,r),_r(i);break;case 27:Co(i.stateNode);case 26:case 5:Ri(i,i.return),_r(i);break;case 22:i.memoizedState===null&&_r(i);break;case 30:_r(i);break;default:_r(i)}t=t.sibling}}function Na(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Na(u,m,r),yo(4,m);break;case 1:if(Na(u,m,r),l=m,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ht(l,l.return,te)}if(l=m,u=l.updateQueue,u!==null){var T=l.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)vm(I[u],T)}catch(te){Ht(l,l.return,te)}}r&&M&64&&Lg(m),xo(m,m.return);break;case 27:Og(m);case 26:case 5:Na(u,m,r),r&&l===null&&M&4&&Ng(m),xo(m,m.return);break;case 12:Na(u,m,r);break;case 13:Na(u,m,r),r&&M&4&&Hg(u,m);break;case 22:m.memoizedState===null&&Na(u,m,r),xo(m,m.return);break;case 30:break;default:Na(u,m,r)}i=i.sibling}}function Hf(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&ao(r))}function Gf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ao(t))}function Ci(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kg(t,i,r,l),i=i.sibling}function kg(t,i,r,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(t,i,r,l),u&2048&&yo(9,i);break;case 1:Ci(t,i,r,l);break;case 3:Ci(t,i,r,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){Ci(t,i,r,l),t=i.stateNode;try{var m=i.memoizedProps,M=m.id,T=m.onPostCommit;typeof T=="function"&&T(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ht(i,i.return,I)}}else Ci(t,i,r,l);break;case 13:Ci(t,i,r,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Ci(t,i,r,l):So(t,i):m._visibility&2?Ci(t,i,r,l):(m._visibility|=2,ns(t,i,r,l,(i.subtreeFlags&10256)!==0)),u&2048&&Hf(M,i);break;case 24:Ci(t,i,r,l),u&2048&&Gf(i.alternate,i);break;default:Ci(t,i,r,l)}}function ns(t,i,r,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,M=i,T=r,I=l,te=M.flags;switch(M.tag){case 0:case 11:case 15:ns(m,M,T,I,u),yo(8,M);break;case 23:break;case 22:var he=M.stateNode;M.memoizedState!==null?he._visibility&2?ns(m,M,T,I,u):So(m,M):(he._visibility|=2,ns(m,M,T,I,u)),u&&te&2048&&Hf(M.alternate,M);break;case 24:ns(m,M,T,I,u),u&&te&2048&&Gf(M.alternate,M);break;default:ns(m,M,T,I,u)}i=i.sibling}}function So(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,u=l.flags;switch(l.tag){case 22:So(r,l),u&2048&&Hf(l.alternate,l);break;case 24:So(r,l),u&2048&&Gf(l.alternate,l);break;default:So(r,l)}i=i.sibling}}var bo=8192;function is(t){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Xg(t),t=t.sibling}function Xg(t){switch(t.tag){case 26:is(t),t.flags&bo&&t.memoizedState!==null&&mS(vi,t.memoizedState,t.memoizedProps);break;case 5:is(t);break;case 3:case 4:var i=vi;vi=lc(t.stateNode.containerInfo),is(t),vi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=bo,bo=16777216,is(t),bo=i):is(t));break;default:is(t)}}function jg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Mo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];_n=l,qg(l,t)}jg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&La(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Kl(t)):Mo(t);break;default:Mo(t)}}function Kl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];_n=l,qg(l,t)}jg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:La(8,i,i.return),Kl(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Kl(i));break;default:Kl(i)}t=t.sibling}}function qg(t,i){for(;_n!==null;){var r=_n;switch(r.tag){case 0:case 11:case 15:La(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ao(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,_n=l;else e:for(r=t;_n!==null;){l=_n;var u=l.sibling,m=l.return;if(zg(l),l===r){_n=null;break e}if(u!==null){u.return=m,_n=u;break e}_n=m}}}var Lx={getCacheForType:function(t){var i=Ln(un),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r}},Ux=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Xt=null,mt=null,Mt=0,Dt=0,Jn=null,Pa=!1,as=!1,Vf=!1,ta=0,$t=0,Oa=0,yr=0,kf=0,ui=0,rs=0,Eo=null,kn=null,Xf=!1,jf=0,Ql=1/0,$l=null,Ia=null,An=0,Ba=null,ss=null,os=0,Wf=0,qf=null,Yg=null,To=0,Yf=null;function ei(){if((Ct&2)!==0&&Mt!==0)return Mt&-Mt;if(O.T!==null){var t=Yr;return t!==0?t:th()}return Tt()}function Zg(){ui===0&&(ui=(Mt&536870912)===0||Rt?X():536870912);var t=ci.current;return t!==null&&(t.flags|=32),ui}function ti(t,i,r){(t===Xt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),za(t,Mt,ui,!1)),ve(t,r),((Ct&2)===0||t!==Xt)&&(t===Xt&&((Ct&2)===0&&(yr|=r),$t===4&&za(t,Mt,ui,!1)),Di(t))}function Kg(t,i,r){if((Ct&6)!==0)throw Error(a(327));var l=!r&&(i&124)===0&&(i&t.expiredLanes)===0||tt(t,i),u=l?Ox(t,i):Qf(t,i,!0),m=l;do{if(u===0){as&&!l&&za(t,i,0,!1);break}else{if(r=t.current.alternate,m&&!Nx(r)){u=Qf(t,i,!1),m=!1;continue}if(u===2){if(m=i,t.errorRecoveryDisabledLanes&m)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var T=t;u=Eo;var I=T.current.memoizedState.isDehydrated;if(I&&(ls(T,M).flags|=256),M=Qf(T,M,!1),M!==2){if(Vf&&!I){T.errorRecoveryDisabledLanes|=m,yr|=m,u=4;break e}m=kn,kn=u,m!==null&&(kn===null?kn=m:kn.push.apply(kn,m))}u=M}if(m=!1,u!==2)continue}}if(u===1){ls(t,0),za(t,i,0,!0);break}e:{switch(l=t,m=u,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:za(l,i,ui,!Pa);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=jf+300-nt(),10<u)){if(za(l,i,ui,!Pa),ct(l,0,!0)!==0)break e;l.timeoutHandle=T0(Qg.bind(null,l,r,kn,$l,Xf,i,ui,yr,rs,Pa,m,2,-0,0),u);break e}Qg(l,r,kn,$l,Xf,i,ui,yr,rs,Pa,m,0,-0,0)}}break}while(!0);Di(t)}function Qg(t,i,r,l,u,m,M,T,I,te,he,_e,ie,ae){if(t.timeoutHandle=-1,_e=i.subtreeFlags,(_e&8192||(_e&16785408)===16785408)&&(Uo={stylesheets:null,count:0,unsuspend:pS},Xg(i),_e=gS(),_e!==null)){t.cancelPendingCommit=_e(a0.bind(null,t,i,m,r,l,u,M,T,I,he,1,ie,ae)),za(t,m,M,!te);return}a0(t,i,m,r,l,u,M,T,I)}function Nx(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],m=u.getSnapshot;u=u.value;try{if(!Zn(m(),u))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function za(t,i,r,l){i&=~kf,i&=~yr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var m=31-Ce(u),M=1<<m;l[m]=-1,u&=~M}r!==0&&Pe(t,r,i)}function Jl(){return(Ct&6)===0?(Ao(0),!1):!0}function Zf(){if(mt!==null){if(Dt===0)var t=mt.return;else t=mt,qi=dr=null,hf(t),es=null,go=0,t=mt;for(;t!==null;)Dg(t.alternate,t),t=t.return;mt=null}}function ls(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Qx(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Zf(),Xt=t,mt=r=Xi(t.current,null),Mt=i,Dt=0,Jn=null,Pa=!1,as=tt(t,i),Vf=!1,rs=ui=kf=yr=Oa=$t=0,kn=Eo=null,Xf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Ce(l),m=1<<u;i|=t[u],l&=~m}return ta=i,Sl(),r}function $g(t,i){ut=null,O.H=Hl,i===so||i===Dl?(i=mm(),Dt=3):i===hm?(i=mm(),Dt=4):Dt=i===gg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jn=i,mt===null&&($t=1,jl(t,ri(i,t.current)))}function Jg(){var t=O.H;return O.H=Hl,t===null?Hl:t}function e0(){var t=O.A;return O.A=Lx,t}function Kf(){$t=4,Pa||(Mt&4194048)!==Mt&&ci.current!==null||(as=!0),(Oa&134217727)===0&&(yr&134217727)===0||Xt===null||za(Xt,Mt,ui,!1)}function Qf(t,i,r){var l=Ct;Ct|=2;var u=Jg(),m=e0();(Xt!==t||Mt!==i)&&($l=null,ls(t,i)),i=!1;var M=$t;e:do try{if(Dt!==0&&mt!==null){var T=mt,I=Jn;switch(Dt){case 8:Zf(),M=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var te=Dt;if(Dt=0,Jn=null,cs(t,T,I,te),r&&as){M=0;break e}break;default:te=Dt,Dt=0,Jn=null,cs(t,T,I,te)}}Px(),M=$t;break}catch(he){$g(t,he)}while(!0);return i&&t.shellSuspendCounter++,qi=dr=null,Ct=l,O.H=u,O.A=m,mt===null&&(Xt=null,Mt=0,Sl()),M}function Px(){for(;mt!==null;)t0(mt)}function Ox(t,i){var r=Ct;Ct|=2;var l=Jg(),u=e0();Xt!==t||Mt!==i?($l=null,Ql=nt()+500,ls(t,i)):as=tt(t,i);e:do try{if(Dt!==0&&mt!==null){i=mt;var m=Jn;t:switch(Dt){case 1:Dt=0,Jn=null,cs(t,i,m,1);break;case 2:case 9:if(dm(m)){Dt=0,Jn=null,n0(i);break}i=function(){Dt!==2&&Dt!==9||Xt!==t||(Dt=7),Di(t)},m.then(i,i);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:dm(m)?(Dt=0,Jn=null,n0(i)):(Dt=0,Jn=null,cs(t,i,m,7));break;case 5:var M=null;switch(mt.tag){case 26:M=mt.memoizedState;case 5:case 27:var T=mt;if(!M||B0(M)){Dt=0,Jn=null;var I=T.sibling;if(I!==null)mt=I;else{var te=T.return;te!==null?(mt=te,ec(te)):mt=null}break t}}Dt=0,Jn=null,cs(t,i,m,5);break;case 6:Dt=0,Jn=null,cs(t,i,m,6);break;case 8:Zf(),$t=6;break e;default:throw Error(a(462))}}Ix();break}catch(he){$g(t,he)}while(!0);return qi=dr=null,O.H=l,O.A=u,Ct=r,mt!==null?0:(Xt=null,Mt=0,Sl(),$t)}function Ix(){for(;mt!==null&&!zn();)t0(mt)}function t0(t){var i=Rg(t.alternate,t,ta);t.memoizedProps=t.pendingProps,i===null?ec(t):mt=i}function n0(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=bg(r,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=bg(r,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:hf(i);default:Dg(r,i),i=mt=im(i,ta),i=Rg(r,i,ta)}t.memoizedProps=t.pendingProps,i===null?ec(t):mt=i}function cs(t,i,r,l){qi=dr=null,hf(i),es=null,go=0;var u=i.return;try{if(Tx(t,u,i,r,Mt)){$t=1,jl(t,ri(r,t.current)),mt=null;return}}catch(m){if(u!==null)throw mt=u,m;$t=1,jl(t,ri(r,t.current)),mt=null;return}i.flags&32768?(Rt||l===1?t=!0:as||(Mt&536870912)!==0?t=!1:(Pa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),i0(i,t)):ec(i)}function ec(t){var i=t;do{if((i.flags&32768)!==0){i0(i,Pa);return}t=i.return;var r=wx(i.alternate,i,ta);if(r!==null){mt=r;return}if(i=i.sibling,i!==null){mt=i;return}mt=i=t}while(i!==null);$t===0&&($t=5)}function i0(t,i){do{var r=Rx(t.alternate,t);if(r!==null){r.flags&=32767,mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){mt=t;return}mt=t=r}while(t!==null);$t=6,mt=null}function a0(t,i,r,l,u,m,M,T,I){t.cancelPendingCommit=null;do tc();while(An!==0);if((Ct&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Hu,Be(t,r,m,M,T,I),t===Xt&&(mt=Xt=null,Mt=0),ss=i,Ba=t,os=r,Wf=m,qf=u,Yg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hx(P,function(){return c0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=Z.p,Z.p=2,M=Ct,Ct|=4;try{Cx(t,i,r)}finally{Ct=M,Z.p=u,O.T=l}}An=1,r0(),s0(),o0()}}function r0(){if(An===1){An=0;var t=Ba,i=ss,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=Z.p;Z.p=2;var u=Ct;Ct|=4;try{Gg(i,t);var m=ch,M=qp(t.containerInfo),T=m.focusedElem,I=m.selectionRange;if(M!==T&&T&&T.ownerDocument&&Wp(T.ownerDocument.documentElement,T)){if(I!==null&&Ou(T)){var te=I.start,he=I.end;if(he===void 0&&(he=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(he,T.value.length);else{var _e=T.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var ae=ie.getSelection(),et=T.textContent.length,Ze=Math.min(I.start,et),Ot=I.end===void 0?Ze:Math.min(I.end,et);!ae.extend&&Ze>Ot&&(M=Ot,Ot=Ze,Ze=M);var W=jp(T,Ze),V=jp(T,Ot);if(W&&V&&(ae.rangeCount!==1||ae.anchorNode!==W.node||ae.anchorOffset!==W.offset||ae.focusNode!==V.node||ae.focusOffset!==V.offset)){var $=_e.createRange();$.setStart(W.node,W.offset),ae.removeAllRanges(),Ze>Ot?(ae.addRange($),ae.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),ae.addRange($))}}}}for(_e=[],ae=T;ae=ae.parentNode;)ae.nodeType===1&&_e.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var pe=_e[T];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}dc=!!lh,ch=lh=null}finally{Ct=u,Z.p=l,O.T=r}}t.current=i,An=2}}function s0(){if(An===2){An=0;var t=Ba,i=ss,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=Z.p;Z.p=2;var u=Ct;Ct|=4;try{Bg(t,i.alternate,i)}finally{Ct=u,Z.p=l,O.T=r}}An=3}}function o0(){if(An===4||An===3){An=0,_t();var t=Ba,i=ss,r=os,l=Yg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,ss=Ba=null,l0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ia=null),nn(r),i=i.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(de,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,u=Z.p,Z.p=2,O.T=null;try{for(var m=t.onRecoverableError,M=0;M<l.length;M++){var T=l[M];m(T.value,{componentStack:T.stack})}}finally{O.T=i,Z.p=u}}(os&3)!==0&&tc(),Di(t),u=t.pendingLanes,(r&4194090)!==0&&(u&42)!==0?t===Yf?To++:(To=0,Yf=t):To=0,Ao(0)}}function l0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ao(i)))}function tc(t){return r0(),s0(),o0(),c0()}function c0(){if(An!==5)return!1;var t=Ba,i=Wf;Wf=0;var r=nn(os),l=O.T,u=Z.p;try{Z.p=32>r?32:r,O.T=null,r=qf,qf=null;var m=Ba,M=os;if(An=0,ss=Ba=null,os=0,(Ct&6)!==0)throw Error(a(331));var T=Ct;if(Ct|=4,Wg(m.current),kg(m,m.current,M,r),Ct=T,Ao(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(de,m)}catch{}return!0}finally{Z.p=u,O.T=l,l0(t,i)}}function u0(t,i,r){i=ri(r,i),i=Af(t.stateNode,i,2),t=wa(t,i,2),t!==null&&(ve(t,2),Di(t))}function Ht(t,i,r){if(t.tag===3)u0(t,t,r);else for(;i!==null;){if(i.tag===3){u0(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ia===null||!Ia.has(l))){t=ri(r,t),r=pg(2),l=wa(i,r,2),l!==null&&(mg(r,l,i,t),ve(l,2),Di(l));break}}i=i.return}}function $f(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new Ux;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(r)||(Vf=!0,u.add(r),t=Bx.bind(null,t,i,r),i.then(t,t))}function Bx(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Xt===t&&(Mt&r)===r&&($t===4||$t===3&&(Mt&62914560)===Mt&&300>nt()-jf?(Ct&2)===0&&ls(t,0):kf|=r,rs===Mt&&(rs=0)),Di(t)}function f0(t,i){i===0&&(i=Ne()),t=Xr(t,i),t!==null&&(ve(t,i),Di(t))}function zx(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),f0(t,r)}function Fx(t,i){var r=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),f0(t,r)}function Hx(t,i){return ft(t,i)}var nc=null,us=null,Jf=!1,ic=!1,eh=!1,xr=0;function Di(t){t!==us&&t.next===null&&(us===null?nc=us=t:us=us.next=t),ic=!0,Jf||(Jf=!0,Vx())}function Ao(t,i){if(!eh&&ic){eh=!0;do for(var r=!1,l=nc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var m=0;else{var M=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-Ce(42|t)+1)-1,m&=u&~(M&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,m0(l,m))}else m=Mt,m=ct(l,l===Xt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||tt(l,m)||(r=!0,m0(l,m));l=l.next}while(r);eh=!1}}function Gx(){h0()}function h0(){ic=Jf=!1;var t=0;xr!==0&&(Kx()&&(t=xr),xr=0);for(var i=nt(),r=null,l=nc;l!==null;){var u=l.next,m=d0(l,i);m===0?(l.next=null,r===null?nc=u:r.next=u,u===null&&(us=r)):(r=l,(t!==0||(m&3)!==0)&&(ic=!0)),l=u}Ao(t)}function d0(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var M=31-Ce(m),T=1<<M,I=u[M];I===-1?((T&r)===0||(T&l)!==0)&&(u[M]=Ut(T,i)):I<=i&&(t.expiredLanes|=T),m&=~T}if(i=Xt,r=Mt,r=ct(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&H(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||tt(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&H(l),nn(r)){case 2:case 8:r=Ve;break;case 32:r=P;break;case 268435456:r=ne;break;default:r=P}return l=p0.bind(null,t),r=ft(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&H(l),t.callbackPriority=2,t.callbackNode=null,2}function p0(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(tc()&&t.callbackNode!==r)return null;var l=Mt;return l=ct(t,t===Xt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Kg(t,l,i),d0(t,nt()),t.callbackNode!=null&&t.callbackNode===r?p0.bind(null,t):null)}function m0(t,i){if(tc())return null;Kg(t,i,!0)}function Vx(){$x(function(){(Ct&6)!==0?ft(Lt,Gx):h0()})}function th(){return xr===0&&(xr=X()),xr}function g0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function v0(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function kx(t,i,r,l,u){if(i==="submit"&&r&&r.stateNode===u){var m=g0((u[Mn]||null).action),M=l.submitter;M&&(i=(i=M[Mn]||null)?g0(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var T=new _l("action","action",null,l,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xr!==0){var I=M?v0(u,M):new FormData(u);Sf(r,{pending:!0,data:I,method:u.method,action:m},null,I)}}else typeof m=="function"&&(T.preventDefault(),I=M?v0(u,M):new FormData(u),Sf(r,{pending:!0,data:I,method:u.method,action:m},m,I))},currentTarget:u}]})}}for(var nh=0;nh<Fu.length;nh++){var ih=Fu[nh],Xx=ih.toLowerCase(),jx=ih[0].toUpperCase()+ih.slice(1);gi(Xx,"on"+jx)}gi(Kp,"onAnimationEnd"),gi(Qp,"onAnimationIteration"),gi($p,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(lx,"onTransitionRun"),gi(cx,"onTransitionStart"),gi(ux,"onTransitionCancel"),gi(Jp,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function _0(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],u=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var T=l[M],I=T.instance,te=T.currentTarget;if(T=T.listener,I!==m&&u.isPropagationStopped())break e;m=T,u.currentTarget=te;try{m(u)}catch(he){Xl(he)}u.currentTarget=null,m=I}else for(M=0;M<l.length;M++){if(T=l[M],I=T.instance,te=T.currentTarget,T=T.listener,I!==m&&u.isPropagationStopped())break e;m=T,u.currentTarget=te;try{m(u)}catch(he){Xl(he)}u.currentTarget=null,m=I}}}}function gt(t,i){var r=i[nr];r===void 0&&(r=i[nr]=new Set);var l=t+"__bubble";r.has(l)||(y0(i,t,2,!1),r.add(l))}function ah(t,i,r){var l=0;i&&(l|=4),y0(r,t,l,i)}var ac="_reactListening"+Math.random().toString(36).slice(2);function rh(t){if(!t[ac]){t[ac]=!0,hl.forEach(function(r){r!=="selectionchange"&&(Wx.has(r)||ah(r,!1,t),ah(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ac]||(i[ac]=!0,ah("selectionchange",!1,i))}}function y0(t,i,r,l){switch(k0(i)){case 2:var u=yS;break;case 8:u=xS;break;default:u=yh}r=u.bind(null,i,r,t),u=void 0,!Au||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,r,{capture:!0,passive:u}):t.addEventListener(i,r,!0):u!==void 0?t.addEventListener(i,r,{passive:u}):t.addEventListener(i,r,!1)}function sh(t,i,r,l,u){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var T=l.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=l.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=zi(T),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){l=m=M;continue e}T=T.parentNode}}l=l.return}Ap(function(){var te=m,he=Eu(r),_e=[];e:{var ie=em.get(t);if(ie!==void 0){var ae=_l,et=t;switch(t){case"keypress":if(gl(r)===0)break e;case"keydown":case"keyup":ae=Hy;break;case"focusin":et="focus",ae=Du;break;case"focusout":et="blur",ae=Du;break;case"beforeblur":case"afterblur":ae=Du;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=ky;break;case Kp:case Qp:case $p:ae=Ly;break;case Jp:ae=jy;break;case"scroll":case"scrollend":ae=Ay;break;case"wheel":ae=qy;break;case"copy":case"cut":case"paste":ae=Ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=Lp;break;case"toggle":case"beforetoggle":ae=Zy}var Ze=(i&4)!==0,Ot=!Ze&&(t==="scroll"||t==="scrollend"),W=Ze?ie!==null?ie+"Capture":null:ie;Ze=[];for(var V=te,$;V!==null;){var pe=V;if($=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||$===null||W===null||(pe=js(V,W),pe!=null&&Ze.push(Ro(V,pe,$))),Ot)break;V=V.return}0<Ze.length&&(ie=new ae(ie,et,null,r,he),_e.push({event:ie,listeners:Ze}))}}if((i&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ie&&r!==Mu&&(et=r.relatedTarget||r.fromElement)&&(zi(et)||et[Fn]))break e;if((ae||ie)&&(ie=he.window===he?he:(ie=he.ownerDocument)?ie.defaultView||ie.parentWindow:window,ae?(et=r.relatedTarget||r.toElement,ae=te,et=et?zi(et):null,et!==null&&(Ot=c(et),Ze=et.tag,et!==Ot||Ze!==5&&Ze!==27&&Ze!==6)&&(et=null)):(ae=null,et=te),ae!==et)){if(Ze=Cp,pe="onMouseLeave",W="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Lp,pe="onPointerLeave",W="onPointerEnter",V="pointer"),Ot=ae==null?ie:ar(ae),$=et==null?ie:ar(et),ie=new Ze(pe,V+"leave",ae,r,he),ie.target=Ot,ie.relatedTarget=$,pe=null,zi(he)===te&&(Ze=new Ze(W,V+"enter",et,r,he),Ze.target=$,Ze.relatedTarget=Ot,pe=Ze),Ot=pe,ae&&et)t:{for(Ze=ae,W=et,V=0,$=Ze;$;$=fs($))V++;for($=0,pe=W;pe;pe=fs(pe))$++;for(;0<V-$;)Ze=fs(Ze),V--;for(;0<$-V;)W=fs(W),$--;for(;V--;){if(Ze===W||W!==null&&Ze===W.alternate)break t;Ze=fs(Ze),W=fs(W)}Ze=null}else Ze=null;ae!==null&&x0(_e,ie,ae,Ze,!1),et!==null&&Ot!==null&&x0(_e,Ot,et,Ze,!0)}}e:{if(ie=te?ar(te):window,ae=ie.nodeName&&ie.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ie.type==="file")var Ge=Fp;else if(Bp(ie))if(Hp)Ge=rx;else{Ge=ix;var ht=nx}else ae=ie.nodeName,!ae||ae.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?te&&bu(te.elementType)&&(Ge=Fp):Ge=ax;if(Ge&&(Ge=Ge(t,te))){zp(_e,Ge,r,he);break e}ht&&ht(t,ie,te),t==="focusout"&&te&&ie.type==="number"&&te.memoizedProps.value!=null&&Dn(ie,"number",ie.value)}switch(ht=te?ar(te):window,t){case"focusin":(Bp(ht)||ht.contentEditable==="true")&&(Gr=ht,Iu=te,Js=null);break;case"focusout":Js=Iu=Gr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Yp(_e,r,he);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":Yp(_e,r,he)}var ke;if(Uu)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Hr?Op(t,r)&&($e="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&($e="onCompositionStart");$e&&(Up&&r.locale!=="ko"&&(Hr||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Hr&&(ke=wp()):(Ma=he,wu="value"in Ma?Ma.value:Ma.textContent,Hr=!0)),ht=rc(te,$e),0<ht.length&&($e=new Dp($e,t,null,r,he),_e.push({event:$e,listeners:ht}),ke?$e.data=ke:(ke=Ip(r),ke!==null&&($e.data=ke)))),(ke=Qy?$y(t,r):Jy(t,r))&&($e=rc(te,"onBeforeInput"),0<$e.length&&(ht=new Dp("onBeforeInput","beforeinput",null,r,he),_e.push({event:ht,listeners:$e}),ht.data=ke)),kx(_e,t,te,r,he)}_0(_e,i)})}function Ro(t,i,r){return{instance:t,listener:i,currentTarget:r}}function rc(t,i){for(var r=i+"Capture",l=[];t!==null;){var u=t,m=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||m===null||(u=js(t,r),u!=null&&l.unshift(Ro(t,u,m)),u=js(t,i),u!=null&&l.push(Ro(t,u,m))),t.tag===3)return l;t=t.return}return[]}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function x0(t,i,r,l,u){for(var m=i._reactName,M=[];r!==null&&r!==l;){var T=r,I=T.alternate,te=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||te===null||(I=te,u?(te=js(r,m),te!=null&&M.unshift(Ro(r,te,I))):u||(te=js(r,m),te!=null&&M.push(Ro(r,te,I)))),r=r.return}M.length!==0&&t.push({event:i,listeners:M})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function S0(t){return(typeof t=="string"?t:""+t).replace(qx,`
`).replace(Yx,"")}function b0(t,i){return i=S0(i),S0(t)===i}function sc(){}function Pt(t,i,r,l,u,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ti(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ti(t,""+l);break;case"className":De(t,"class",l);break;case"tabIndex":De(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,r,l);break;case"style":Ep(t,l,m);break;case"data":if(i!=="object"){De(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=pl(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Pt(t,i,"name",u.name,u,null),Pt(t,i,"formEncType",u.formEncType,u,null),Pt(t,i,"formMethod",u.formMethod,u,null),Pt(t,i,"formTarget",u.formTarget,u,null)):(Pt(t,i,"encType",u.encType,u,null),Pt(t,i,"method",u.method,u,null),Pt(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=pl(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=sc);break;case"onScroll":l!=null&&gt("scroll",t);break;case"onScrollEnd":l!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=pl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Te(t,"popover",l);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Te(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Ey.get(r)||r,Te(t,r,l))}}function oh(t,i,r,l,u,m){switch(r){case"style":Ep(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Ti(t,l):(typeof l=="number"||typeof l=="bigint")&&Ti(t,""+l);break;case"onScroll":l!=null&&gt("scroll",t);break;case"onScrollEnd":l!=null&&gt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dl.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),i=r.slice(2,u?r.length-7:void 0),m=t[Mn]||null,m=m!=null?m[r]:null,typeof m=="function"&&t.removeEventListener(i,m,u),typeof l=="function")){typeof m!="function"&&m!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,u);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Te(t,r,l)}}}function wn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var l=!1,u=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pt(t,i,m,M,r,null)}}u&&Pt(t,i,"srcSet",r.srcSet,r,null),l&&Pt(t,i,"src",r.src,r,null);return;case"input":gt("invalid",t);var T=m=M=u=null,I=null,te=null;for(l in r)if(r.hasOwnProperty(l)){var he=r[l];if(he!=null)switch(l){case"name":u=he;break;case"type":M=he;break;case"checked":I=he;break;case"defaultChecked":te=he;break;case"value":m=he;break;case"defaultValue":T=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(a(137,i));break;default:Pt(t,i,l,he,r,null)}}Ft(t,m,T,I,te,M,u,!1),Kt(t);return;case"select":gt("invalid",t),l=M=m=null;for(u in r)if(r.hasOwnProperty(u)&&(T=r[u],T!=null))switch(u){case"value":m=T;break;case"defaultValue":M=T;break;case"multiple":l=T;default:Pt(t,i,u,T,r,null)}i=m,r=M,t.multiple=!!l,i!=null?cn(t,!!l,i,!1):r!=null&&cn(t,!!l,r,!0);return;case"textarea":gt("invalid",t),m=u=l=null;for(M in r)if(r.hasOwnProperty(M)&&(T=r[M],T!=null))switch(M){case"value":l=T;break;case"defaultValue":u=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Pt(t,i,M,T,r,null)}En(t,l,u,m),Kt(t);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(l=r[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Pt(t,i,I,l,r,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(l=0;l<wo.length;l++)gt(wo[l],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in r)if(r.hasOwnProperty(te)&&(l=r[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pt(t,i,te,l,r,null)}return;default:if(bu(i)){for(he in r)r.hasOwnProperty(he)&&(l=r[he],l!==void 0&&oh(t,i,he,l,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(l=r[T],l!=null&&Pt(t,i,T,l,r,null))}function Zx(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,m=null,M=null,T=null,I=null,te=null,he=null;for(ae in r){var _e=r[ae];if(r.hasOwnProperty(ae)&&_e!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":I=_e;default:l.hasOwnProperty(ae)||Pt(t,i,ae,null,l,_e)}}for(var ie in l){var ae=l[ie];if(_e=r[ie],l.hasOwnProperty(ie)&&(ae!=null||_e!=null))switch(ie){case"type":m=ae;break;case"name":u=ae;break;case"checked":te=ae;break;case"defaultChecked":he=ae;break;case"value":M=ae;break;case"defaultValue":T=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:ae!==_e&&Pt(t,i,ie,ae,l,_e)}}Gi(t,M,T,I,te,he,m,u);return;case"select":ae=M=T=ie=null;for(m in r)if(I=r[m],r.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":ae=I;default:l.hasOwnProperty(m)||Pt(t,i,m,null,l,I)}for(u in l)if(m=l[u],I=r[u],l.hasOwnProperty(u)&&(m!=null||I!=null))switch(u){case"value":ie=m;break;case"defaultValue":T=m;break;case"multiple":M=m;default:m!==I&&Pt(t,i,u,m,l,I)}i=T,r=M,l=ae,ie!=null?cn(t,!!r,ie,!1):!!l!=!!r&&(i!=null?cn(t,!!r,i,!0):cn(t,!!r,r?[]:"",!1));return;case"textarea":ae=ie=null;for(T in r)if(u=r[T],r.hasOwnProperty(T)&&u!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pt(t,i,T,null,l,u)}for(M in l)if(u=l[M],m=r[M],l.hasOwnProperty(M)&&(u!=null||m!=null))switch(M){case"value":ie=u;break;case"defaultValue":ae=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==m&&Pt(t,i,M,u,l,m)}gn(t,ie,ae);return;case"option":for(var et in r)if(ie=r[et],r.hasOwnProperty(et)&&ie!=null&&!l.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Pt(t,i,et,null,l,ie)}for(I in l)if(ie=l[I],ae=r[I],l.hasOwnProperty(I)&&ie!==ae&&(ie!=null||ae!=null))switch(I){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Pt(t,i,I,ie,l,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in r)ie=r[Ze],r.hasOwnProperty(Ze)&&ie!=null&&!l.hasOwnProperty(Ze)&&Pt(t,i,Ze,null,l,ie);for(te in l)if(ie=l[te],ae=r[te],l.hasOwnProperty(te)&&ie!==ae&&(ie!=null||ae!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:Pt(t,i,te,ie,l,ae)}return;default:if(bu(i)){for(var Ot in r)ie=r[Ot],r.hasOwnProperty(Ot)&&ie!==void 0&&!l.hasOwnProperty(Ot)&&oh(t,i,Ot,void 0,l,ie);for(he in l)ie=l[he],ae=r[he],!l.hasOwnProperty(he)||ie===ae||ie===void 0&&ae===void 0||oh(t,i,he,ie,l,ae);return}}for(var W in r)ie=r[W],r.hasOwnProperty(W)&&ie!=null&&!l.hasOwnProperty(W)&&Pt(t,i,W,null,l,ie);for(_e in l)ie=l[_e],ae=r[_e],!l.hasOwnProperty(_e)||ie===ae||ie==null&&ae==null||Pt(t,i,_e,ie,l,ae)}var lh=null,ch=null;function oc(t){return t.nodeType===9?t:t.ownerDocument}function M0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function uh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fh=null;function Kx(){var t=window.event;return t&&t.type==="popstate"?t===fh?!1:(fh=t,!0):(fh=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,$x=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(t){return A0.resolve(null).then(t).catch(Jx)}:T0;function Jx(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function w0(t,i){var r=i,l=0,u=0;do{var m=r.nextSibling;if(t.removeChild(r),m&&m.nodeType===8)if(r=m.data,r==="/$"){if(0<l&&8>l){r=l;var M=t.ownerDocument;if(r&1&&Co(M.documentElement),r&2&&Co(M.body),r&4)for(r=M.head,Co(r),M=r.firstChild;M;){var T=M.nextSibling,I=M.nodeName;M[ya]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||r.removeChild(M),M=T}}if(u===0){t.removeChild(m),Bo(i);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:l=r.charCodeAt(0)-48;else l=0;r=m}while(r);Bo(i)}function hh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":hh(r),xa(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function eS(t,i,r,l){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ya])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function tS(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=_i(t.nextSibling),t===null))return null;return t}function dh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function nS(t,i){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var ph=null;function R0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return t;i--}else r==="/$"&&i++}t=t.previousSibling}return null}function C0(t,i,r){switch(i=oc(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Co(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);xa(t)}var fi=new Map,D0=new Set;function lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=Z.d;Z.d={f:iS,r:aS,D:rS,C:sS,L:oS,m:lS,X:uS,S:cS,M:fS};function iS(){var t=na.f(),i=Jl();return t||i}function aS(t){var i=Fi(t);i!==null&&i.tag===5&&i.type==="form"?Km(i):na.r(t)}var hs=typeof document>"u"?null:document;function L0(t,i,r){var l=hs;if(l&&typeof i=="string"&&i){var u=kt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),D0.has(u)||(D0.add(u),t={rel:t,crossOrigin:r,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),wn(i,"link",t),an(i),l.head.appendChild(i)))}}function rS(t){na.D(t),L0("dns-prefetch",t,null)}function sS(t,i){na.C(t,i),L0("preconnect",t,i)}function oS(t,i,r){na.L(t,i,r);var l=hs;if(l&&t&&i){var u='link[rel="preload"][as="'+kt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+kt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+kt(r.imageSizes)+'"]')):u+='[href="'+kt(t)+'"]';var m=u;switch(i){case"style":m=ds(t);break;case"script":m=ps(t)}fi.has(m)||(t=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),fi.set(m,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(Do(m))||i==="script"&&l.querySelector(Lo(m))||(i=l.createElement("link"),wn(i,"link",t),an(i),l.head.appendChild(i)))}}function lS(t,i){na.m(t,i);var r=hs;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(t)+'"]',m=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ps(t)}if(!fi.has(m)&&(t=g({rel:"modulepreload",href:t},i),fi.set(m,t),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Lo(m)))return}l=r.createElement("link"),wn(l,"link",t),an(l),r.head.appendChild(l)}}}function cS(t,i,r){na.S(t,i,r);var l=hs;if(l&&t){var u=Sa(l).hoistableStyles,m=ds(t);i=i||"default";var M=u.get(m);if(!M){var T={loading:0,preload:null};if(M=l.querySelector(Do(m)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},r),(r=fi.get(m))&&mh(t,r);var I=M=l.createElement("link");an(I),wn(I,"link",t),I._p=new Promise(function(te,he){I.onload=te,I.onerror=he}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,cc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(m,M)}}}function uS(t,i){na.X(t,i);var r=hs;if(r&&t){var l=Sa(r).hoistableScripts,u=ps(t),m=l.get(u);m||(m=r.querySelector(Lo(u)),m||(t=g({src:t,async:!0},i),(i=fi.get(u))&&gh(t,i),m=r.createElement("script"),an(m),wn(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(u,m))}}function fS(t,i){na.M(t,i);var r=hs;if(r&&t){var l=Sa(r).hoistableScripts,u=ps(t),m=l.get(u);m||(m=r.querySelector(Lo(u)),m||(t=g({src:t,async:!0,type:"module"},i),(i=fi.get(u))&&gh(t,i),m=r.createElement("script"),an(m),wn(m,"link",t),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(u,m))}}function U0(t,i,r,l){var u=(u=Se.current)?lc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ds(r.href),r=Sa(u).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ds(r.href);var m=Sa(u).hoistableStyles,M=m.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,M),(m=u.querySelector(Do(t)))&&!m._p&&(M.instance=m,M.state.loading=5),fi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},fi.set(t,r),m||hS(u,t,r,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ps(r),r=Sa(u).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ds(t){return'href="'+kt(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function N0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function hS(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",r),an(i),t.head.appendChild(i))}function ps(t){return'[src="'+kt(t)+'"]'}function Lo(t){return"script[async]"+t}function P0(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+kt(r.href)+'"]');if(l)return i.instance=l,an(l),l;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),an(l),wn(l,"style",u),cc(l,r.precedence,t),i.instance=l;case"stylesheet":u=ds(r.href);var m=t.querySelector(Do(u));if(m)return i.state.loading|=4,i.instance=m,an(m),m;l=N0(r),(u=fi.get(u))&&mh(l,u),m=(t.ownerDocument||t).createElement("link"),an(m);var M=m;return M._p=new Promise(function(T,I){M.onload=T,M.onerror=I}),wn(m,"link",l),i.state.loading|=4,cc(m,r.precedence,t),i.instance=m;case"script":return m=ps(r.src),(u=t.querySelector(Lo(m)))?(i.instance=u,an(u),u):(l=r,(u=fi.get(m))&&(l=g({},r),gh(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),an(u),wn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,cc(l,r.precedence,t));return i.instance}function cc(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,m=u,M=0;M<l.length;M++){var T=l[M];if(T.dataset.precedence===i)m=T;else if(m!==u)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function mh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function gh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var uc=null;function O0(t,i,r){if(uc===null){var l=new Map,u=uc=new Map;u.set(r,l)}else u=uc,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var m=r[u];if(!(m[ya]||m[ln]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=t+M;var T=l.get(M);T?T.push(m):l.set(M,[m])}}return l}function I0(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function dS(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function B0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Uo=null;function pS(){}function mS(t,i,r){if(Uo===null)throw Error(a(475));var l=Uo;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ds(r.href),m=t.querySelector(Do(u));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=fc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,an(m);return}m=t.ownerDocument||t,r=N0(r),(u=fi.get(u))&&mh(r,u),m=m.createElement("link"),an(m);var M=m;M._p=new Promise(function(T,I){M.onload=T,M.onerror=I}),wn(m,"link",r),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=fc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function gS(){if(Uo===null)throw Error(a(475));var t=Uo;return t.stylesheets&&t.count===0&&vh(t,t.stylesheets),0<t.count?function(i){var r=setTimeout(function(){if(t.stylesheets&&vh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)vh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hc=null;function vh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hc=new Map,i.forEach(vS,t),hc=null,fc.call(t))}function vS(t,i){if(!(i.state.loading&4)){var r=hc.get(t);if(r)var l=r.get(null);else{r=new Map,hc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<u.length;m++){var M=u[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}u=i.instance,M=u.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,u),r.set(M,u),this.count++,l=fc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),m?m.parentNode.insertBefore(u,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var No={$$typeof:w,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function _S(t,i,r,l,u,m,M,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ue(0),this.hiddenUpdates=ue(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function z0(t,i,r,l,u,m,M,T,I,te,he,_e){return t=new _S(t,i,r,M,T,I,te,_e),i=1,m===!0&&(i|=24),m=Kn(3,null,null,i),t.current=m,m.stateNode=t,i=Qu(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},tf(m),t}function F0(t){return t?(t=jr,t):jr}function H0(t,i,r,l,u,m){u=F0(u),l.context===null?l.context=u:l.pendingContext=u,l=Aa(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=wa(t,l,i),r!==null&&(ti(r,t,i),lo(r,t,i))}function G0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function _h(t,i){G0(t,i),(t=t.alternate)&&G0(t,i)}function V0(t){if(t.tag===13){var i=Xr(t,67108864);i!==null&&ti(i,t,67108864),_h(t,67108864)}}var dc=!0;function yS(t,i,r,l){var u=O.T;O.T=null;var m=Z.p;try{Z.p=2,yh(t,i,r,l)}finally{Z.p=m,O.T=u}}function xS(t,i,r,l){var u=O.T;O.T=null;var m=Z.p;try{Z.p=8,yh(t,i,r,l)}finally{Z.p=m,O.T=u}}function yh(t,i,r,l){if(dc){var u=xh(l);if(u===null)sh(t,i,l,pc,r),X0(t,l);else if(bS(u,t,i,r,l))l.stopPropagation();else if(X0(t,l),i&4&&-1<SS.indexOf(t)){for(;u!==null;){var m=Fi(u);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Ie(m.pendingLanes);if(M!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var I=1<<31-Ce(M);T.entanglements[1]|=I,M&=~I}Di(m),(Ct&6)===0&&(Ql=nt()+500,Ao(0))}}break;case 13:T=Xr(m,2),T!==null&&ti(T,m,2),Jl(),_h(m,2)}if(m=xh(l),m===null&&sh(t,i,l,pc,r),m===u)break;u=m}u!==null&&l.stopPropagation()}else sh(t,i,l,null,r)}}function xh(t){return t=Eu(t),Sh(t)}var pc=null;function Sh(t){if(pc=null,t=zi(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return pc=t,null}function k0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(je()){case Lt:return 2;case Ve:return 8;case P:case A:return 32;case ne:return 268435456;default:return 32}default:return 32}}var bh=!1,Ha=null,Ga=null,Va=null,Po=new Map,Oo=new Map,ka=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(t,i){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(i.pointerId)}}function Io(t,i,r,l,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[u]},i!==null&&(i=Fi(i),i!==null&&V0(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function bS(t,i,r,l,u){switch(i){case"focusin":return Ha=Io(Ha,t,i,r,l,u),!0;case"dragenter":return Ga=Io(Ga,t,i,r,l,u),!0;case"mouseover":return Va=Io(Va,t,i,r,l,u),!0;case"pointerover":var m=u.pointerId;return Po.set(m,Io(Po.get(m)||null,t,i,r,l,u)),!0;case"gotpointercapture":return m=u.pointerId,Oo.set(m,Io(Oo.get(m)||null,t,i,r,l,u)),!0}return!1}function j0(t){var i=zi(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=f(r),i!==null){t.blockedOn=i,Yn(t.priority,function(){if(r.tag===13){var l=ei();l=Vt(l);var u=Xr(r,l);u!==null&&ti(u,r,l),_h(r,l)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=xh(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Mu=l,r.target.dispatchEvent(l),Mu=null}else return i=Fi(r),i!==null&&V0(i),t.blockedOn=r,!1;i.shift()}return!0}function W0(t,i,r){mc(t)&&r.delete(i)}function MS(){bh=!1,Ha!==null&&mc(Ha)&&(Ha=null),Ga!==null&&mc(Ga)&&(Ga=null),Va!==null&&mc(Va)&&(Va=null),Po.forEach(W0),Oo.forEach(W0)}function gc(t,i){t.blockedOn===i&&(t.blockedOn=null,bh||(bh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,MS)))}var vc=null;function q0(t){vc!==t&&(vc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Sh(l||r)===null)continue;break}var m=Fi(r);m!==null&&(t.splice(i,3),i-=3,Sf(m,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function Bo(t){function i(I){return gc(I,t)}Ha!==null&&gc(Ha,t),Ga!==null&&gc(Ga,t),Va!==null&&gc(Va,t),Po.forEach(i),Oo.forEach(i);for(var r=0;r<ka.length;r++){var l=ka[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ka.length&&(r=ka[0],r.blockedOn===null);)j0(r),r.blockedOn===null&&ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],m=r[l+1],M=u[Mn]||null;if(typeof m=="function")M||q0(r);else if(M){var T=null;if(m&&m.hasAttribute("formAction")){if(u=m,M=m[Mn]||null)T=M.formAction;else if(Sh(u)!==null)continue}else T=M.action;typeof T=="function"?r[l+1]=T:(r.splice(l,3),l-=3),q0(r)}}}function Mh(t){this._internalRoot=t}_c.prototype.render=Mh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=ei();H0(r,l,t,i,null,null)},_c.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;H0(t.current,2,null,t,null,null),Jl(),i[Fn]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var i=Tt();t={blockedOn:null,target:t,priority:i};for(var r=0;r<ka.length&&i!==0&&i<ka[r].priority;r++);ka.splice(r,0,t),r===0&&j0(t)}};var Y0=e.version;if(Y0!=="19.1.0")throw Error(a(527,Y0,"19.1.0"));Z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?d(t):null,t=t===null?null:t.stateNode,t};var ES={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{de=yc.inject(ES),ze=yc}catch{}}return Fo.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",u=ug,m=fg,M=hg,T=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=z0(t,1,!1,null,null,r,l,u,m,M,T,null),t[Fn]=i.current,rh(t),new Mh(i)},Fo.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,u="",m=ug,M=fg,T=hg,I=null,te=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(I=r.unstable_transitionCallbacks),r.formState!==void 0&&(te=r.formState)),i=z0(t,1,!0,i,r??null,l,u,m,M,T,I,te),i.context=F0(null),r=i.current,l=ei(),l=Vt(l),u=Aa(l),u.callback=null,wa(r,u,l),r=l,i.current.lanes=r,ve(i,r),Di(i),t[Fn]=i.current,rh(t),new _c(i)},Fo.version="19.1.0",Fo}var av;function OS(){if(av)return Ah.exports;av=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ah.exports=PS(),Ah.exports}var IS=OS(),Ho={},rv;function BS(){if(rv)return Ho;rv=1,Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.parse=f,Ho.serialize=d;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,c=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function f(y,x){const b=new c,E=y.length;if(E<2)return b;const S=(x==null?void 0:x.decode)||g;let _=0;do{const R=y.indexOf("=",_);if(R===-1)break;const w=y.indexOf(";",_),L=w===-1?E:w;if(R>L){_=y.lastIndexOf(";",R-1)+1;continue}const F=h(y,_,R),B=p(y,R,F),z=y.slice(F,B);if(b[z]===void 0){let k=h(y,R+1,L),U=p(y,L,k);const D=S(y.slice(k,U));b[z]=D}_=L+1}while(_<E);return b}function h(y,x,b){do{const E=y.charCodeAt(x);if(E!==32&&E!==9)return x}while(++x<b);return b}function p(y,x,b){for(;x>b;){const E=y.charCodeAt(--x);if(E!==32&&E!==9)return x+1}return b}function d(y,x,b){const E=(b==null?void 0:b.encode)||encodeURIComponent;if(!s.test(y))throw new TypeError(`argument name is invalid: ${y}`);const S=E(x);if(!e.test(S))throw new TypeError(`argument val is invalid: ${x}`);let _=y+"="+S;if(!b)return _;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);_+="; Max-Age="+b.maxAge}if(b.domain){if(!n.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);_+="; Domain="+b.domain}if(b.path){if(!a.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);_+="; Path="+b.path}if(b.expires){if(!v(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);_+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(_+="; HttpOnly"),b.secure&&(_+="; Secure"),b.partitioned&&(_+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return _}function g(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function v(y){return o.call(y)==="[object Date]"}return Ho}BS();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var sv="popstate";function zS(s={}){function e(a,o){let{pathname:c,search:f,hash:h}=a.location;return dd("",{pathname:c,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:Qo(o)}return HS(e,n,null,s)}function Zt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Oi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FS(){return Math.random().toString(36).substring(2,10)}function ov(s,e){return{usr:s.state,key:s.key,idx:e}}function dd(s,e,n=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Hs(e):e,state:n,key:e&&e.key||a||FS()}}function Qo({pathname:s="/",search:e="",hash:n=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function Hs(s){let e={};if(s){let n=s.indexOf("#");n>=0&&(e.hash=s.substring(n),s=s.substring(0,n));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function HS(s,e,n,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,f=o.history,h="POP",p=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let S=g(),_=S==null?null:S-d;d=S,p&&p({action:h,location:E.location,delta:_})}function y(S,_){h="PUSH";let R=dd(E.location,S,_);d=g()+1;let w=ov(R,d),L=E.createHref(R);try{f.pushState(w,"",L)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(L)}c&&p&&p({action:h,location:E.location,delta:1})}function x(S,_){h="REPLACE";let R=dd(E.location,S,_);d=g();let w=ov(R,d),L=E.createHref(R);f.replaceState(w,"",L),c&&p&&p({action:h,location:E.location,delta:0})}function b(S){let _=o.location.origin!=="null"?o.location.origin:o.location.href,R=typeof S=="string"?S:Qo(S);return R=R.replace(/ $/,"%20"),Zt(_,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,_)}let E={get action(){return h},get location(){return s(o,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(sv,v),p=S,()=>{o.removeEventListener(sv,v),p=null}},createHref(S){return e(o,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:x,go(S){return f.go(S)}};return E}function E_(s,e,n="/"){return GS(s,e,n,!1)}function GS(s,e,n,a){let o=typeof e=="string"?Hs(e):e,c=pa(o.pathname||"/",n);if(c==null)return null;let f=T_(s);VS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let d=JS(c);h=QS(f[p],d,a)}return h}function T_(s,e=[],n=[],a=""){let o=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Zt(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let d=ha([a,p.relativePath]),g=n.concat(p);c.children&&c.children.length>0&&(Zt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),T_(c.children,e,g,d)),!(c.path==null&&!c.index)&&e.push({path:d,score:ZS(d,c.index),routesMeta:g})};return s.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))o(c,f);else for(let p of A_(c.path))o(c,f,p)}),e}function A_(s){let e=s.split("/");if(e.length===0)return[];let[n,...a]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let f=A_(a.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),o&&h.push(...f),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function VS(s){s.sort((e,n)=>e.score!==n.score?n.score-e.score:KS(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var kS=/^:[\w-]+$/,XS=3,jS=2,WS=1,qS=10,YS=-2,lv=s=>s==="*";function ZS(s,e){let n=s.split("/"),a=n.length;return n.some(lv)&&(a+=YS),e&&(a+=jS),n.filter(o=>!lv(o)).reduce((o,c)=>o+(kS.test(c)?XS:c===""?WS:qS),a)}function KS(s,e){return s.length===e.length&&s.slice(0,-1).every((a,o)=>a===e[o])?s[s.length-1]-e[e.length-1]:0}function QS(s,e,n=!1){let{routesMeta:a}=s,o={},c="/",f=[];for(let h=0;h<a.length;++h){let p=a[h],d=h===a.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=ou({path:p.relativePath,caseSensitive:p.caseSensitive,end:d},g),y=p.route;if(!v&&d&&n&&!a[a.length-1].route.index&&(v=ou({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),f.push({params:o,pathname:ha([c,v.pathname]),pathnameBase:ib(ha([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=ha([c,v.pathnameBase]))}return f}function ou(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,a]=$S(s.path,s.caseSensitive,s.end),o=e.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((d,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=h[y]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const x=h[y];return v&&!x?d[g]=void 0:d[g]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:f,pattern:s}}function $S(s,e=!1,n=!0){Oi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(a.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(a.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function JS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Oi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function pa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=s.charAt(n);return a&&a!=="/"?null:s.slice(n)||"/"}function eb(s,e="/"){let{pathname:n,search:a="",hash:o=""}=typeof s=="string"?Hs(s):s;return{pathname:n?n.startsWith("/")?n:tb(n,e):e,search:ab(a),hash:rb(o)}}function tb(s,e){let n=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Dh(s,e,n,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nb(s){return s.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function w_(s){let e=nb(s);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function R_(s,e,n,a=!1){let o;typeof s=="string"?o=Hs(s):(o={...s},Zt(!o.pathname||!o.pathname.includes("?"),Dh("?","pathname","search",o)),Zt(!o.pathname||!o.pathname.includes("#"),Dh("#","pathname","hash",o)),Zt(!o.search||!o.search.includes("#"),Dh("#","search","hash",o)));let c=s===""||o.pathname==="",f=c?"/":o.pathname,h;if(f==null)h=n;else{let v=e.length-1;if(!a&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}h=v>=0?e[v]:"/"}let p=eb(o,h),d=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(d||g)&&(p.pathname+="/"),p}var ha=s=>s.join("/").replace(/\/\/+/g,"/"),ib=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ab=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,rb=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function sb(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var C_=["POST","PUT","PATCH","DELETE"];new Set(C_);var ob=["GET",...C_];new Set(ob);var Gs=le.createContext(null);Gs.displayName="DataRouter";var gu=le.createContext(null);gu.displayName="DataRouterState";var D_=le.createContext({isTransitioning:!1});D_.displayName="ViewTransition";var lb=le.createContext(new Map);lb.displayName="Fetchers";var cb=le.createContext(null);cb.displayName="Await";var Bi=le.createContext(null);Bi.displayName="Navigation";var il=le.createContext(null);il.displayName="Location";var _a=le.createContext({outlet:null,matches:[],isDataRoute:!1});_a.displayName="Route";var ip=le.createContext(null);ip.displayName="RouteError";function ub(s,{relative:e}={}){Zt(al(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=le.useContext(Bi),{hash:o,pathname:c,search:f}=rl(s,{relative:e}),h=c;return n!=="/"&&(h=c==="/"?n:ha([n,c])),a.createHref({pathname:h,search:f,hash:o})}function al(){return le.useContext(il)!=null}function Ir(){return Zt(al(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(il).location}var L_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function U_(s){le.useContext(Bi).static||le.useLayoutEffect(s)}function fb(){let{isDataRoute:s}=le.useContext(_a);return s?Eb():hb()}function hb(){Zt(al(),"useNavigate() may be used only in the context of a <Router> component.");let s=le.useContext(Gs),{basename:e,navigator:n}=le.useContext(Bi),{matches:a}=le.useContext(_a),{pathname:o}=Ir(),c=JSON.stringify(w_(a)),f=le.useRef(!1);return U_(()=>{f.current=!0}),le.useCallback((p,d={})=>{if(Oi(f.current,L_),!f.current)return;if(typeof p=="number"){n.go(p);return}let g=R_(p,JSON.parse(c),o,d.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ha([e,g.pathname])),(d.replace?n.replace:n.push)(g,d.state,d)},[e,n,c,o,s])}le.createContext(null);function rl(s,{relative:e}={}){let{matches:n}=le.useContext(_a),{pathname:a}=Ir(),o=JSON.stringify(w_(n));return le.useMemo(()=>R_(s,JSON.parse(o),a,e==="path"),[s,o,a,e])}function db(s,e){return N_(s,e)}function N_(s,e,n,a){var R;Zt(al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:c}=le.useContext(Bi),{matches:f}=le.useContext(_a),h=f[f.length-1],p=h?h.params:{},d=h?h.pathname:"/",g=h?h.pathnameBase:"/",v=h&&h.route;{let w=v&&v.path||"";P_(d,!v||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let y=Ir(),x;if(e){let w=typeof e=="string"?Hs(e):e;Zt(g==="/"||((R=w.pathname)==null?void 0:R.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),x=w}else x=y;let b=x.pathname||"/",E=b;if(g!=="/"){let w=g.replace(/^\//,"").split("/");E="/"+b.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=!c&&n&&n.matches&&n.matches.length>0?n.matches:E_(s,{pathname:E});Oi(v||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Oi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=_b(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},p,w.params),pathname:ha([g,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:ha([g,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),f,n,a);return e&&_?le.createElement(il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},_):_}function pb(){let s=Mb(),e=sb(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:c},"ErrorBoundary")," or"," ",le.createElement("code",{style:c},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),n?le.createElement("pre",{style:o},n):null,f)}var mb=le.createElement(pb,null),gb=class extends le.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?le.createElement(_a.Provider,{value:this.props.routeContext},le.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vb({routeContext:s,match:e,children:n}){let a=le.useContext(Gs);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement(_a.Provider,{value:s},n)}function _b(s,e=[],n=null,a=null){if(s==null){if(!n)return null;if(n.errors)s=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)s=n.matches;else return null}let o=s,c=n==null?void 0:n.errors;if(c!=null){let p=o.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);Zt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<o.length;p++){let d=o[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=p),d.route.id){let{loaderData:g,errors:v}=n,y=d.route.loader&&!g.hasOwnProperty(d.route.id)&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){f=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,d,g)=>{let v,y=!1,x=null,b=null;n&&(v=c&&d.route.id?c[d.route.id]:void 0,x=d.route.errorElement||mb,f&&(h<0&&g===0?(P_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):h===g&&(y=!0,b=d.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),S=()=>{let _;return v?_=x:y?_=b:d.route.Component?_=le.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=p,le.createElement(vb,{match:d,routeContext:{outlet:p,matches:E,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?le.createElement(gb,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:S(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):S()},null)}function ap(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yb(s){let e=le.useContext(Gs);return Zt(e,ap(s)),e}function xb(s){let e=le.useContext(gu);return Zt(e,ap(s)),e}function Sb(s){let e=le.useContext(_a);return Zt(e,ap(s)),e}function rp(s){let e=Sb(s),n=e.matches[e.matches.length-1];return Zt(n.route.id,`${s} can only be used on routes that contain a unique "id"`),n.route.id}function bb(){return rp("useRouteId")}function Mb(){var a;let s=le.useContext(ip),e=xb("useRouteError"),n=rp("useRouteError");return s!==void 0?s:(a=e.errors)==null?void 0:a[n]}function Eb(){let{router:s}=yb("useNavigate"),e=rp("useNavigate"),n=le.useRef(!1);return U_(()=>{n.current=!0}),le.useCallback(async(o,c={})=>{Oi(n.current,L_),n.current&&(typeof o=="number"?s.navigate(o):await s.navigate(o,{fromRouteId:e,...c}))},[s,e])}var cv={};function P_(s,e,n){!e&&!cv[s]&&(cv[s]=!0,Oi(!1,n))}le.memo(Tb);function Tb({routes:s,future:e,state:n}){return N_(s,void 0,n,e)}function Zc(s){Zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ab({basename:s="/",children:e=null,location:n,navigationType:a="POP",navigator:o,static:c=!1}){Zt(!al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=le.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=Hs(n));let{pathname:p="/",search:d="",hash:g="",state:v=null,key:y="default"}=n,x=le.useMemo(()=>{let b=pa(p,f);return b==null?null:{location:{pathname:b,search:d,hash:g,state:v,key:y},navigationType:a}},[f,p,d,g,v,y,a]);return Oi(x!=null,`<Router basename="${f}"> is not able to match the URL "${p}${d}${g}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:le.createElement(Bi.Provider,{value:h},le.createElement(il.Provider,{children:e,value:x}))}function wb({children:s,location:e}){return db(pd(s),e)}function pd(s,e=[]){let n=[];return le.Children.forEach(s,(a,o)=>{if(!le.isValidElement(a))return;let c=[...e,o];if(a.type===le.Fragment){n.push.apply(n,pd(a.props.children,c));return}Zt(a.type===Zc,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Zt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=pd(a.props.children,c)),n.push(f)}),n}var Kc="get",Qc="application/x-www-form-urlencoded";function vu(s){return s!=null&&typeof s.tagName=="string"}function Rb(s){return vu(s)&&s.tagName.toLowerCase()==="button"}function Cb(s){return vu(s)&&s.tagName.toLowerCase()==="form"}function Db(s){return vu(s)&&s.tagName.toLowerCase()==="input"}function Lb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ub(s,e){return s.button===0&&(!e||e==="_self")&&!Lb(s)}var xc=null;function Nb(){if(xc===null)try{new FormData(document.createElement("form"),0),xc=!1}catch{xc=!0}return xc}var Pb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lh(s){return s!=null&&!Pb.has(s)?(Oi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qc}"`),null):s}function Ob(s,e){let n,a,o,c,f;if(Cb(s)){let h=s.getAttribute("action");a=h?pa(h,e):null,n=s.getAttribute("method")||Kc,o=Lh(s.getAttribute("enctype"))||Qc,c=new FormData(s)}else if(Rb(s)||Db(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(a=p?pa(p,e):null,n=s.getAttribute("formmethod")||h.getAttribute("method")||Kc,o=Lh(s.getAttribute("formenctype"))||Lh(h.getAttribute("enctype"))||Qc,c=new FormData(h,s),!Nb()){let{name:d,type:g,value:v}=s;if(g==="image"){let y=d?`${d}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else d&&c.append(d,v)}}else{if(vu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Kc,a=null,o=Qc,f=s}return c&&o==="text/plain"&&(f=c,c=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:c,body:f}}function sp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function Ib(s,e){if(s.id in e)return e[s.id];try{let n=await import(s.module);return e[s.id]=n,n}catch(n){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function zb(s,e,n){let a=await Promise.all(s.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await Ib(c,n);return f.links?f.links():[]}return[]}));return Vb(a.flat(1).filter(Bb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function uv(s,e,n,a,o,c){let f=(p,d)=>n[d]?p.route.id!==n[d].route.id:!0,h=(p,d)=>{var g;return n[d].pathname!==p.pathname||((g=n[d].route.path)==null?void 0:g.endsWith("*"))&&n[d].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,d)=>f(p,d)||h(p,d)):c==="data"?e.filter((p,d)=>{var v;let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,d)||h(p,d))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Fb(s,e,{includeHydrateFallback:n}={}){return Hb(s.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function Hb(s){return[...new Set(s)]}function Gb(s){let e={},n=Object.keys(s).sort();for(let a of n)e[a]=s[a];return e}function Vb(s,e){let n=new Set;return new Set(e),s.reduce((a,o)=>{let c=JSON.stringify(Gb(o));return n.has(c)||(n.add(c),a.push({key:c,link:o})),a},[])}function kb(s,e){let n=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return n.pathname==="/"?n.pathname="_root.data":e&&pa(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function O_(){let s=le.useContext(Gs);return sp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Xb(){let s=le.useContext(gu);return sp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var op=le.createContext(void 0);op.displayName="FrameworkContext";function I_(){let s=le.useContext(op);return sp(s,"You must render this element inside a <HydratedRouter> element"),s}function jb(s,e){let n=le.useContext(op),[a,o]=le.useState(!1),[c,f]=le.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:d,onMouseLeave:g,onTouchStart:v}=e,y=le.useRef(null);le.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let E=_=>{_.forEach(R=>{f(R.isIntersecting)})},S=new IntersectionObserver(E,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[s]),le.useEffect(()=>{if(a){let E=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(E)}}},[a]);let x=()=>{o(!0)},b=()=>{o(!1),f(!1)};return n?s!=="intent"?[c,y,{}]:[c,y,{onFocus:Go(h,x),onBlur:Go(p,b),onMouseEnter:Go(d,x),onMouseLeave:Go(g,b),onTouchStart:Go(v,x)}]:[!1,y,{}]}function Go(s,e){return n=>{s&&s(n),n.defaultPrevented||e(n)}}function Wb({page:s,...e}){let{router:n}=O_(),a=le.useMemo(()=>E_(n.routes,s,n.basename),[n.routes,s,n.basename]);return a?le.createElement(Yb,{page:s,matches:a,...e}):null}function qb(s){let{manifest:e,routeModules:n}=I_(),[a,o]=le.useState([]);return le.useEffect(()=>{let c=!1;return zb(s,e,n).then(f=>{c||o(f)}),()=>{c=!0}},[s,e,n]),a}function Yb({page:s,matches:e,...n}){let a=Ir(),{manifest:o,routeModules:c}=I_(),{basename:f}=O_(),{loaderData:h,matches:p}=Xb(),d=le.useMemo(()=>uv(s,e,p,o,a,"data"),[s,e,p,o,a]),g=le.useMemo(()=>uv(s,e,p,o,a,"assets"),[s,e,p,o,a]),v=le.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let b=new Set,E=!1;if(e.forEach(_=>{var w;let R=o.routes[_.route.id];!R||!R.hasLoader||(!d.some(L=>L.route.id===_.route.id)&&_.route.id in h&&((w=c[_.route.id])!=null&&w.shouldRevalidate)||R.hasClientLoader?E=!0:b.add(_.route.id))}),b.size===0)return[];let S=kb(s,f);return E&&b.size>0&&S.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,a,o,d,e,s,c]),y=le.useMemo(()=>Fb(g,o),[g,o]),x=qb(g);return le.createElement(le.Fragment,null,v.map(b=>le.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),y.map(b=>le.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),x.map(({key:b,link:E})=>le.createElement("link",{key:b,...E})))}function Zb(...s){return e=>{s.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var B_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{B_&&(window.__reactRouterVersion="7.4.1")}catch{}function Kb({basename:s,children:e,window:n}){let a=le.useRef();a.current==null&&(a.current=zS({window:n,v5Compat:!0}));let o=a.current,[c,f]=le.useState({action:o.action,location:o.location}),h=le.useCallback(p=>{le.startTransition(()=>f(p))},[f]);return le.useLayoutEffect(()=>o.listen(h),[o,h]),le.createElement(Ab,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:o})}var z_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ps=le.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:o,reloadDocument:c,replace:f,state:h,target:p,to:d,preventScrollReset:g,viewTransition:v,...y},x){let{basename:b}=le.useContext(Bi),E=typeof d=="string"&&z_.test(d),S,_=!1;if(typeof d=="string"&&E&&(S=d,B_))try{let U=new URL(window.location.href),D=d.startsWith("//")?new URL(U.protocol+d):new URL(d),G=pa(D.pathname,b);D.origin===U.origin&&G!=null?d=G+D.search+D.hash:_=!0}catch{Oi(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=ub(d,{relative:o}),[w,L,F]=jb(a,y),B=eM(d,{replace:f,state:h,target:p,preventScrollReset:g,relative:o,viewTransition:v});function z(U){e&&e(U),U.defaultPrevented||B(U)}let k=le.createElement("a",{...y,...F,href:S||R,onClick:_||c?e:z,ref:Zb(x,L),target:p,"data-discover":!E&&n==="render"?"true":void 0});return w&&!E?le.createElement(le.Fragment,null,k,le.createElement(Wb,{page:R})):k});Ps.displayName="Link";var Qb=le.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:o=!1,style:c,to:f,viewTransition:h,children:p,...d},g){let v=rl(f,{relative:d.relative}),y=Ir(),x=le.useContext(gu),{navigator:b,basename:E}=le.useContext(Bi),S=x!=null&&rM(v)&&h===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,R=y.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(R=R.toLowerCase(),w=w?w.toLowerCase():null,_=_.toLowerCase()),w&&E&&(w=pa(w,E)||w);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=R===_||!o&&R.startsWith(_)&&R.charAt(L)==="/",B=w!=null&&(w===_||!o&&w.startsWith(_)&&w.charAt(_.length)==="/"),z={isActive:F,isPending:B,isTransitioning:S},k=F?e:void 0,U;typeof a=="function"?U=a(z):U=[a,F?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(z):c;return le.createElement(Ps,{...d,"aria-current":k,className:U,ref:g,style:D,to:f,viewTransition:h},typeof p=="function"?p(z):p)});Qb.displayName="NavLink";var $b=le.forwardRef(({discover:s="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:o,state:c,method:f=Kc,action:h,onSubmit:p,relative:d,preventScrollReset:g,viewTransition:v,...y},x)=>{let b=iM(),E=aM(h,{relative:d}),S=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&z_.test(h),R=w=>{if(p&&p(w),w.defaultPrevented)return;w.preventDefault();let L=w.nativeEvent.submitter,F=(L==null?void 0:L.getAttribute("formmethod"))||f;b(L||w.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:o,state:c,relative:d,preventScrollReset:g,viewTransition:v})};return le.createElement("form",{ref:x,method:S,action:E,onSubmit:a?p:R,...y,"data-discover":!_&&s==="render"?"true":void 0})});$b.displayName="Form";function Jb(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F_(s){let e=le.useContext(Gs);return Zt(e,Jb(s)),e}function eM(s,{target:e,replace:n,state:a,preventScrollReset:o,relative:c,viewTransition:f}={}){let h=fb(),p=Ir(),d=rl(s,{relative:c});return le.useCallback(g=>{if(Ub(g,e)){g.preventDefault();let v=n!==void 0?n:Qo(p)===Qo(d);h(s,{replace:v,state:a,preventScrollReset:o,relative:c,viewTransition:f})}},[p,h,d,n,a,e,s,o,c,f])}var tM=0,nM=()=>`__${String(++tM)}__`;function iM(){let{router:s}=F_("useSubmit"),{basename:e}=le.useContext(Bi),n=bb();return le.useCallback(async(a,o={})=>{let{action:c,method:f,encType:h,formData:p,body:d}=Ob(a,e);if(o.navigate===!1){let g=o.fetcherKey||nM();await s.fetch(g,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:d,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await s.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:d,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,e,n])}function aM(s,{relative:e}={}){let{basename:n}=le.useContext(Bi),a=le.useContext(_a);Zt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...rl(s||".",{relative:e})},f=Ir();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:ha([n,c.pathname])),Qo(c)}function rM(s,e={}){let n=le.useContext(D_);Zt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=F_("useViewTransitionState"),o=rl(s,{relative:e.relative});if(!n.isTransitioning)return!1;let c=pa(n.currentLocation.pathname,a)||n.currentLocation.pathname,f=pa(n.nextLocation.pathname,a)||n.nextLocation.pathname;return ou(o.pathname,f)!=null||ou(o.pathname,c)!=null}new TextEncoder;const sM=()=>K.jsx("nav",{className:"bg-gray-800 text-white h-16 shadow-md border-b border-gray-700",children:K.jsxs("div",{className:"container mx-auto px-4 h-full flex items-center justify-between",children:[K.jsx("div",{className:"flex items-center ml-16",children:K.jsx(Ps,{to:"/",className:"text-xl font-bold text-amber-400",children:"Get Bills"})}),K.jsx("div",{className:"flex items-center",children:K.jsx(Ps,{to:"/profile",children:K.jsx("img",{src:"/DuckProfile.png",alt:"Profile",className:"h-12 w-12 rounded-full border-2 border-amber-500 hover:border-amber-400 transition-colors"})})})]})}),Uh=({icon:s})=>K.jsx("div",{className:`relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto 
                        bg-gray-700 hover:bg-amber-500 hover:text-gray-900
                        text-amber-400 hover:rounded-xl rounded-3xl
                        transition-all duration-300 ease-linear cursor-pointer
                        shadow-lg group`,children:s});var H_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fv=Ur.createContext&&Ur.createContext(H_),oM=["attr","size","title"];function lM(s,e){if(s==null)return{};var n=cM(s,e),a,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(o=0;o<c.length;o++)a=c[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(s,a)&&(n[a]=s[a])}return n}function cM(s,e){if(s==null)return{};var n={};for(var a in s)if(Object.prototype.hasOwnProperty.call(s,a)){if(e.indexOf(a)>=0)continue;n[a]=s[a]}return n}function lu(){return lu=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a])}return s},lu.apply(this,arguments)}function hv(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),n.push.apply(n,a)}return n}function cu(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hv(Object(n),!0).forEach(function(a){uM(s,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):hv(Object(n)).forEach(function(a){Object.defineProperty(s,a,Object.getOwnPropertyDescriptor(n,a))})}return s}function uM(s,e,n){return e=fM(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function fM(s){var e=hM(s,"string");return typeof e=="symbol"?e:e+""}function hM(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var a=n.call(s,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function G_(s){return s&&s.map((e,n)=>Ur.createElement(e.tag,cu({key:n},e.attr),G_(e.child)))}function lp(s){return e=>Ur.createElement(dM,lu({attr:cu({},s.attr)},e),G_(s.child))}function dM(s){var e=n=>{var{attr:a,size:o,title:c}=s,f=lM(s,oM),h=o||n.size||"1em",p;return n.className&&(p=n.className),s.className&&(p=(p?p+" ":"")+s.className),Ur.createElement("svg",lu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,f,{className:p,style:cu(cu({color:s.color||n.color},n.style),s.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&Ur.createElement("title",null,c),s.children)};return fv!==void 0?Ur.createElement(fv.Consumer,null,n=>e(n)):e(H_)}function pM(s){return lp({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M322.8 50.96c-28.1.66-52.4 13.13-65.8 38.48-13.4 25.36-16.1 64.96 3.6 120.46v.2c3.2 9.4 2.4 19.2-2.6 26.4-5 7.3-12.9 11.6-21.9 14.5-18 5.8-42.3 6.4-69.3 4.5-48.7-3.5-105.4-15.7-142.38-27.9-2.34 56.3 13.28 113.7 45.28 157.2 34.2 46.5 86.2 77.5 156 76.2 45.3-.8 98.8-7.4 140.2-25.5 41.4-18 70-45.8 71.3-92.4v-.1c.6-19.8-18.4-47.1-36.3-74.7-8.9-13.8-17.3-27.8-21.9-42.4-4.6-14.5-5-30.3 3.2-44.5l.2-.3.2-.3c22.2-32.6 18.7-64.5 3.9-89.24-14.7-24.79-41.5-41.12-63.7-40.6zm30.5 42.05a18 18 0 0 1 18 17.99 18 18 0 0 1-18 18 18 18 0 0 1-18-18 18 18 0 0 1 18-17.99zM416 130.2c.4 14.3-2.4 29.3-9.2 44.2 19.5-1.2 38.8-3.4 53.6-8.4 9.6-3.1 17.1-7.4 21.8-12.3 2.7-2.9 4.5-6 5.6-9.7-24.7.3-51-6.3-71.8-13.8zm-72.6 142.5c6.5 13.6 6.1 28.2.7 40.9-5.4 12.7-15.3 23.8-27.7 33.9-24.7 20-59.6 35.5-93.6 44.8-34 9.3-66.4 12.8-88.7 4.8-11.2-4-20.6-12.6-22.2-24.5-1.6-12 3.6-24.8 14.4-39.8l14.6 10.6c-9.4 13-11.8 22.2-11.2 26.8.7 4.7 3.1 7.3 10.4 10 14.7 5.2 45.9 3.5 78-5.3 32-8.7 65.3-23.8 87-41.4 10.8-8.8 18.7-18.2 22.4-27 3.8-8.8 4.1-16.8-.3-26z"},child:[]}]})(s)}function mM(s){return lp({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"},child:[]}]})(s)}function gM(s){return lp({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(s)}const V_=s=>{const e=le.useRef(null);return le.useEffect(()=>(e.current=new Audio(s),e.current.load(),()=>{e.current&&(e.current.pause(),e.current=null)}),[]),le.useEffect(()=>{e.current&&(e.current.src=s,e.current.load())},[s]),{play:()=>e.current?(e.current.currentTime=0,e.current.play().catch(c=>{console.warn("Audio playback failed:",c)})):Promise.reject(new Error("Audio not initialized")),pause:()=>{e.current&&e.current.pause()},stop:()=>{e.current&&(e.current.pause(),e.current.currentTime=0)},get audio(){return e.current}}},vM=()=>{const s=V_("/quack.mp3");return K.jsxs("div",{className:"fixed left-0 h-full w-16 m-0 flex flex-col bg-gray-800 text-amber-400 shadow-lg z-20 border-r border-gray-700",children:[K.jsx(Ps,{to:"/",children:K.jsx(Uh,{icon:K.jsx(mM,{size:"30"})})}),K.jsx(Ps,{to:"/learn",children:K.jsx(Uh,{icon:K.jsx(gM,{size:"28"})})}),K.jsx("div",{onClick:()=>s.play(),children:K.jsx(Uh,{icon:K.jsx(pM,{size:"30"})})})]})},_M=()=>K.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-800",children:K.jsx("h1",{className:"text-8xl md:text-9xl font-extrabold text-amber-400 text-center",children:"What's Quackin?"})}),Sc=({children:s,delay:e=0,className:n="",resetKey:a})=>{const[o,c]=le.useState(!1);return le.useEffect(()=>{c(!1);const f=setTimeout(()=>{c(!0)},e);return()=>clearTimeout(f)},[e,a]),K.jsx("div",{style:{transform:o?"translateY(0)":"translateY(20px)",transition:"opacity 700ms ease-out, transform 900ms cubic-bezier(0.19, 1, 0.22, 1)"},className:`transition-opacity duration-700 ease-out ${o?"opacity-100":"opacity-0"} ${n}`,children:s})},yM=s=>{if(!s)return"";let e=s.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");return e=e.replace(/\*(.*?)\*/g,"<em>$1</em>"),e},xM=({text:s})=>K.jsx("p",{className:"text-gray-300",dangerouslySetInnerHTML:{__html:yM(s)}}),SM=({title:s,subpassages:e=[],images:n=[]})=>{const[a,o]=le.useState(s);le.useEffect(()=>{o(d=>s+Date.now())},[s]);const c=d=>d.split(/\n+/).filter(g=>g.trim()!==""),f=200,h=500,p=180;return K.jsxs("div",{className:"flex flex-row w-full gap-6",children:[K.jsxs("div",{className:"flex-1 bg-gray-800 text-white p-4 rounded-xl shadow-md overflow-hidden border border-gray-700",children:[K.jsx(Sc,{delay:f,className:"mb-4 pb-2 border-b border-gray-700",resetKey:a,children:K.jsx("h2",{className:"text-xl font-bold text-amber-400",children:s})}),e.map((d,g)=>{let v=f+500;for(let b=0;b<g;b++){const E=c(e[b].content).length;v+=h+E*p}const y=v,x=c(d.content);return K.jsxs("div",{className:"mb-6",children:[K.jsx(Sc,{delay:y,className:"mb-2",resetKey:a,children:K.jsx("h3",{className:"text-lg font-semibold text-amber-300",children:d.heading})}),x.map((b,E)=>K.jsx(Sc,{delay:y+(E+1)*p,className:"mb-2",resetKey:a,children:K.jsx(xM,{text:b})},`${a}-${g}-${E}`))]},`${a}-${g}`)})]}),n&&n.length>0&&K.jsx("div",{className:"w-1/3 flex flex-col gap-4",children:n.map((d,g)=>K.jsx(Sc,{delay:f+g*300,resetKey:a,className:"bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-700",children:K.jsxs("div",{className:"flex flex-col",children:[K.jsx("img",{src:d.src,alt:d.alt,className:"w-full h-auto object-cover"}),d.caption&&K.jsx("p",{className:"text-sm text-gray-400 p-2 text-center",children:d.caption})]})},`${a}-image-${g}`))})]})},Xn={chapters:[{title:"Good Financial Habits",lessons:[{title:"Econ 101",subpassages:[{heading:"Dollars, Banks, Fed",content:`Modern money is a form of currency issued by a central bank and backed by government authority.

The **Federal Reserve** ("The Fed") is the central bank of the United States and is responsible for monetary policy, including setting interest rates and managing the money supply.

Commercial banks operate within this system, taking deposits from customers and making loans, which effectively creates more money in the economy through *fractional reserve banking*.`},{heading:"How Money Flows",content:`Money flows through the economy in a circular pattern.

Consumers spend money on goods and services, which becomes income for businesses.

Businesses use this income to pay employees and investors, who in turn become consumers again.

The **Federal Reserve** and government policies can influence this flow through *interest rates*, taxation, and spending.`},{heading:"Inflation and Deflation",content:`**Inflation** is the general increase in prices over time, reducing the purchasing power of money.

*Deflation* is the opposite—a general decrease in prices, which can indicate economic problems.

The Fed targets a moderate inflation rate (around **2%**) to encourage spending and investment while maintaining price stability.

Understanding inflation is *crucial* for financial planning, as it affects the real returns on investments and the future cost of goods and services.`}]},{title:"Bank Accounts",subpassages:[{heading:"Types of Bank Accounts",content:`**Checking accounts** are designed for frequent transactions and typically offer unlimited withdrawals and payments.

**Savings accounts** are meant for storing money and usually provide higher interest rates than checking accounts, but may limit withdrawals.

*Money Market* accounts combine features of both checking and savings accounts, often providing higher interest rates than regular savings with some check-writing privileges.

*Certificates of Deposit* (CDs) offer higher interest rates in exchange for leaving your money untouched for a set period, ranging from months to years.`},{heading:"Banking Fees and How to Avoid Them",content:`Common banking fees include monthly maintenance fees, overdraft fees, ATM fees, and minimum balance fees.

Strategies to avoid fees include:

**Choosing banks** with no-fee account options

*Maintaining* minimum balance requirements

Using in-network ATMs

Setting up direct deposit

Opting out of overdraft protection and setting up balance alerts instead`},{heading:"Online vs. Traditional Banking",content:`**Online banks** typically offer higher interest rates and lower fees due to lower overhead costs.

*Traditional banks* provide in-person services and may have more extensive ATM networks.

Many people use a **combination of both** to maximize benefits.

When choosing either option, consider *FDIC insurance coverage*, which protects deposits up to $250,000 per depositor, per bank.`}]},{title:"Credit vs. Debit",subpassages:[{heading:"Overview, Penalties, Fees",content:`Credit cards allow you to borrow money up to a certain limit, which must be repaid, typically with interest if not paid in full each month.

Debit cards draw money directly from your checking account with no borrowing involved.

Credit card fees can include annual fees, late payment fees (typically $25-$40), over-limit fees, balance transfer fees, and cash advance fees.

Credit cards charge interest on unpaid balances, with average APRs ranging from 15% to 24% depending on creditworthiness.

Debit card fees are typically limited to overdraft fees ($35 on average) if you spend more than your account balance, and sometimes out-of-network ATM fees.`},{heading:"Credit Score, Rating Agencies",content:`Your credit score is a number between 300-850 that represents your creditworthiness based on your credit history.

The three major credit bureaus are Equifax, Experian, and TransUnion.

Factors affecting your credit score include:

Payment history (35%)

Credit utilization (30%)

Length of credit history (15%)

New credit (10%)

Credit mix (10%)

You're entitled to one free credit report from each bureau annually through AnnualCreditReport.com.`},{heading:"Building and Protecting Credit",content:`To build good credit:

Pay all bills on time

Keep credit utilization below 30% of your limit

Don't close old accounts unnecessarily

Limit applications for new credit

Regularly check your credit report for errors

Consider a secured credit card if you're starting out

To protect your credit, place a credit freeze with all three bureaus if you suspect identity theft, and dispute inaccurate information promptly.`}]},{title:"Emergency Funds: Your Financial Safety Net",subpassages:[{heading:"What is an Emergency Fund?",content:`An emergency fund is money set aside specifically for unexpected expenses or financial emergencies.

It serves as a financial buffer that helps you avoid going into debt when unforeseen circumstances arise such as medical emergencies, car repairs, or job loss.`},{heading:"How Much Should You Save?",content:`Financial experts typically recommend saving 3-6 months of essential living expenses.

Essential expenses include:

Housing (rent/mortgage)

Utilities

Food

Insurance premiums

Minimum debt payments

Those with variable income or less stable employment may benefit from having 6-12 months of expenses saved.`},{heading:"Where to Keep Your Emergency Fund",content:`Emergency funds should be kept in accounts that are:

Liquid: Easily accessible without penalties

Safe: Not subject to market volatility

Separate: Distinct from everyday checking accounts

Good options include high-yield savings accounts, money market accounts, or cash management accounts that offer some interest while maintaining liquidity.`}]},{title:"Budgeting Basics",subpassages:[{heading:"Budgeting Methods",content:`Zero-Based Budgeting: Assign every dollar a job so income minus expenses equals zero.

50/30/20 Rule: Allocate 50% of income to needs, 30% to wants, and 20% to savings and debt repayment.

Envelope System: Divide cash into envelopes for different spending categories.

Pay Yourself First: Automatically save a predetermined amount before budgeting the rest for expenses.`},{heading:"Tracking Expenses",content:`Record all expenses for at least 30 days to understand your spending patterns.

Categorize expenses as fixed (same amount each month) or variable (fluctuating).

Use budgeting apps like Mint, YNAB, or Personal Capital to automate tracking.

Regularly review spending to identify areas where you can cut back.

Adjust your budget as your income and expenses change.`},{heading:"Creating a Sustainable Budget",content:`Start with your actual income after taxes, not your gross salary.

Be realistic about expenses and include occasional costs like car maintenance.

Build in some flexibility for unexpected expenses.

Include savings as a non-negotiable expense in your budget.

Review and adjust your budget monthly until it becomes sustainable.

Celebrate small wins to stay motivated with your budgeting journey.`}]}]},{title:"Loans",lessons:[{title:"Student Loans, Mortgage, Personal Loans",subpassages:[{heading:"Student Loans",content:`Federal student loans often offer lower interest rates and more flexible repayment options than private loans.

Repayment options for federal loans include standard, graduated, extended, and income-driven plans.

Loan forgiveness programs exist for certain professions and public service workers.

Interest on student loans may be tax-deductible up to $2,500 per year, depending on your income.`},{heading:"Mortgages",content:`Common mortgage types include conventional, FHA, VA, and USDA loans.

Fixed-rate mortgages maintain the same interest rate for the life of the loan, while adjustable-rate mortgages (ARMs) can change after an initial fixed period.

Lenders typically require a debt-to-income ratio of 43% or less.

Closing costs typically range from 2-5% of the loan amount.

Mortgage interest and property taxes may be tax-deductible if you itemize deductions.`},{heading:"Personal Loans",content:`Personal loans are typically unsecured, meaning they don't require collateral.

Interest rates vary widely based on your credit score, from about 6% to over 30%.

Common uses include debt consolidation, home improvements, and large purchases.

Loan terms typically range from 1-7 years.

Avoid predatory loans like payday loans, which can have annual percentage rates (APRs) of 400% or more.`}]},{title:"Debt Management Strategies",subpassages:[{heading:"Debt Snowball Method",content:`The Debt Snowball method focuses on psychological wins by paying off the smallest debts first.

Step 1: List all debts from smallest to largest balance.

Step 2: Make minimum payments on all debts except the smallest.

Step 3: Put any extra money toward the smallest debt until it's paid off.

Step 4: Roll the payment from the smallest debt into the next smallest, creating a snowball effect.

This method builds momentum through quick wins, which can be motivating.`},{heading:"Debt Avalanche Method",content:`The Debt Avalanche method focuses on mathematical efficiency by paying off highest-interest debts first.

Step 1: List all debts from highest to lowest interest rate.

Step 2: Make minimum payments on all debts except the highest-interest debt.

Step 3: Put any extra money toward the highest-interest debt until it's paid off.

Step 4: Move to the next highest-interest debt.

This method saves the most money in interest payments over time.`},{heading:"Debt Consolidation and Refinancing",content:`Debt consolidation combines multiple debts into a single loan, ideally at a lower interest rate.

Refinancing replaces an existing loan with a new one that has better terms.

Options include personal loans, balance transfer credit cards (often with 0% introductory rates), home equity loans, and student loan refinancing.

Be cautious of fees and ensure the new interest rate and terms actually save you money in the long run.

Avoid consolidating unsecured debt (like credit cards) into secured debt (like home equity) unless you're certain you can make the payments.`}]}]},{title:"Taxes",lessons:[{title:"W-2, 1099, brackets, filing, refunds, deductions",subpassages:[{heading:"Income and Tax Forms",content:`W-2 forms are issued by employers to employees showing wages earned and taxes withheld.

1099 forms are used to report other types of income, including self-employment income (1099-NEC), interest (1099-INT), dividends (1099-DIV), and retirement distributions (1099-R).

The IRS tax filing deadline is typically April 15, though extensions can be requested until October 15.`},{heading:"Tax Brackets and Rates",content:`The U.S. uses a progressive tax system with marginal tax brackets.

For 2023, federal income tax rates are 10%, 12%, 22%, 24%, 32%, 35%, and 37%.

Only the income within each bracket is taxed at that rate, not your entire income.

Your effective tax rate (total tax divided by total income) is typically lower than your marginal tax rate (the rate on your last dollar of income).`},{heading:"Deductions and Credits",content:`Standard deduction (2023): $13,850 for single filers, $27,700 for married filing jointly.

Common itemized deductions include mortgage interest, state and local taxes (up to $10,000), charitable contributions, and some medical expenses.

Tax credits directly reduce your tax bill and include the Earned Income Tax Credit, Child Tax Credit, American Opportunity Credit (education), and Lifetime Learning Credit.

Adjustments to income ("above-the-line deductions") include student loan interest, HSA contributions, and self-employed retirement contributions.`}]}]},{title:"Growing Your Money",lessons:[{title:"Investing Basics",subpassages:[{heading:"Why Invest?",content:`Investing allows your money to work for you through compound growth.

Over time, investments can help you outpace inflation and build wealth.

When you invest, you're buying assets that have the potential to generate income or increase in value.

Starting early gives your investments more time to compound, significantly increasing your potential returns.`},{heading:"Getting Started with Investing",content:`Before investing, ensure you have:

Paid off high-interest debt

Established an emergency fund

Clear financial goals (retirement, home purchase, education, etc.)

Understanding of your risk tolerance

Time horizon for your investments

Start with tax-advantaged accounts like 401(k)s and IRAs before taxable accounts.`},{heading:"Key Investment Principles",content:`Diversification: Spread investments across different asset classes to reduce risk.

Asset Allocation: Determine the right mix of stocks, bonds, and other assets based on your goals and risk tolerance.

Dollar-Cost Averaging: Invest a fixed amount regularly regardless of market conditions to reduce timing risk.

Compound Growth: Reinvest earnings to generate more earnings over time.

Long-Term Perspective: Focus on long-term growth rather than short-term market fluctuations.`}]},{title:"Inflation is the Goal to Beat",subpassages:[{heading:"Understanding Inflation Impact",content:`Inflation erodes the purchasing power of money over time.

At 3% annual inflation, $100 today will only buy about $74 worth of goods in 10 years.

This means money kept in cash or low-yield accounts actually loses value in real terms.

The historical average inflation rate in the U.S. is approximately 3% per year.`},{heading:"Real Returns vs. Nominal Returns",content:`Nominal return is the percentage gain on an investment before accounting for inflation.

Real return is the nominal return minus the inflation rate, representing actual purchasing power gained.

Example: If your investment grows 7% in a year with 3% inflation, your real return is only 4%.

When evaluating investment performance, always consider the real return.`},{heading:"Inflation-Beating Strategies",content:`Stocks have historically outpaced inflation, with average annual returns of about 10% before inflation (7% real return).

Inflation-protected securities like TIPS (Treasury Inflation-Protected Securities) adjust with the Consumer Price Index.

Real estate can serve as an inflation hedge as property values and rents tend to rise with inflation.

Diversification across asset classes helps manage inflation risk over different economic cycles.`}]},{title:'"Safest" Assets',subpassages:[{heading:"Treasury Securities",content:`Treasury securities are debt instruments issued by the U.S. government and are considered among the safest investments available.

Treasury Bills (T-Bills): Short-term securities with maturities from a few days to 52 weeks.

Treasury Notes (T-Notes): Medium-term securities with maturities from 2 to 10 years.

Treasury Bonds (T-Bonds): Long-term securities with 20 or 30-year maturities.

Treasury Inflation-Protected Securities (TIPS): Adjust principal for inflation based on the Consumer Price Index.`},{heading:'Savings Accounts"ish": Money Market, CDs',content:`High-yield savings accounts offer better interest rates than traditional savings accounts while maintaining FDIC insurance.

Money Market Accounts (MMAs) typically offer higher interest rates than standard savings accounts with some check-writing privileges, and are FDIC-insured up to $250,000.

Certificates of Deposit (CDs) lock in your money for a specified period (3 months to 5+ years) in exchange for a guaranteed interest rate, with FDIC insurance.

Money Market Funds are mutual funds that invest in short-term debt securities but are not FDIC-insured (though still considered relatively safe).`},{heading:"Corporate Bonds/Ratings",content:`Corporate bonds are debt securities issued by companies to raise capital.

Bond ratings from agencies like Moody's, S&P, and Fitch indicate credit quality:

Investment Grade: AAA, AA, A, BBB (lowest risk)

High Yield/Junk Bonds: BB, B, CCC, CC, C (higher risk, higher potential returns)

Lower-rated bonds offer higher yields to compensate for increased default risk.

Bond prices move inversely to interest rates—when rates rise, existing bond prices fall, and vice versa.`}]},{title:"Stocks",subpassages:[{heading:"Market Overview",content:`Stocks represent ownership shares in companies and are traded on exchanges like the NYSE and NASDAQ.

Major market indices include the S&P 500 (500 largest U.S. companies), Dow Jones Industrial Average (30 large companies), and NASDAQ Composite (technology-heavy).

Stock prices are influenced by company performance, economic conditions, investor sentiment, and other factors.

Markets experience both bull markets (rising prices) and bear markets (falling prices) as part of normal cycles.`},{heading:"Stocks: Dividends and Growth types",content:`Growth stocks focus on companies expected to grow faster than average, often reinvesting profits rather than paying dividends.

Value stocks trade at prices below their intrinsic value based on fundamentals like earnings and assets.

Dividend stocks regularly distribute a portion of earnings to shareholders, providing income alongside potential appreciation.

Income stocks emphasize higher-than-average dividend yields, often in stable industries like utilities and consumer staples.

Blue-chip stocks are large, well-established companies with stable earnings and often pay dividends.`},{heading:"Funds: ETF, Index, Mutual",content:`Exchange-Traded Funds (ETFs) trade like stocks throughout the day and typically track indices, sectors, or asset classes with lower expense ratios than mutual funds.

Index Funds passively track specific market indices like the S&P 500, offering broad diversification at low cost.

Mutual Funds pool money from many investors to purchase a diverse portfolio, trading once daily after market close.

Active funds employ managers to select investments, while passive funds track indices.

Expense ratios (annual management fees) significantly impact long-term returns—lower is generally better.`},{heading:"Long vs Short Selling",content:`Long positions involve buying shares with the expectation that prices will rise over time—the traditional buy low, sell high approach.

Short selling involves borrowing shares to sell now with the plan to buy them back later at a lower price, profiting from price declines.

Long positions have limited downside (you can't lose more than your investment) but unlimited upside potential.

Short positions have limited upside (the price can only go to zero) but theoretically unlimited downside if prices rise significantly.

Short selling is considerably riskier and generally not recommended for beginning investors.`},{heading:"Limit vs Market Order",content:`Market orders execute immediately at the best available current price, guaranteeing execution but not price.

Limit orders specify a maximum purchase price or minimum selling price, guaranteeing price but not execution if the market doesn't reach your specified price.

Stop orders (stop-loss or stop-limit) trigger when a stock crosses a specified price, helping manage downside risk.

Use market orders for liquid stocks when immediate execution is prioritized.

Use limit orders when price is more important than immediate execution.`},{heading:"Tax implications of short term vs long term gain",content:`Short-term capital gains (assets held less than one year) are taxed as ordinary income, with rates ranging from 10% to 37% based on your tax bracket.

Long-term capital gains (assets held more than one year) receive preferential tax rates of 0%, 15%, or 20%, depending on your income.

2023 Long-term capital gains tax rates:

0%: Income up to $44,625 (single) or $89,250 (married filing jointly)

15%: Income between $44,626-$492,300 (single) or $89,251-$553,850 (married filing jointly)

20%: Income above $492,300 (single) or $553,850 (married filing jointly)

Holding investments for at least one year before selling can significantly reduce your tax burden.`}]},{title:"Derivatives",subpassages:[{heading:"Futures vs. Options",content:`Futures contracts obligate the buyer to purchase and the seller to sell an asset at a predetermined price on a specific future date.

Options give the buyer the right, but not the obligation, to buy (call option) or sell (put option) an asset at a specified price within a certain time period.

Futures are standardized contracts traded on exchanges with daily settlement.

Options have premiums (the price paid for the contract) that represent the maximum loss for buyers but maximum gain for sellers.

Both require understanding of contract specifications, expiration dates, and potential leverage risks.`},{heading:"Leverage and Margin",content:`Leverage allows investors to control a larger position with a smaller amount of capital.

Margin involves borrowing money from a broker to purchase securities, typically requiring a deposit as collateral.

Margin requirements vary but usually start at 50% of the purchase price for stocks (Regulation T).

Maintenance margin (typically 25%) must be maintained to avoid margin calls, which require depositing additional funds.

Leverage amplifies both gains and losses—a 10% move in the underlying asset with 2:1 leverage results in a 20% gain or loss on invested capital.

Interest is charged on margin loans, adding to the cost of leveraged positions.`},{heading:"Risks of Derivatives Trading",content:`Derivatives are advanced financial instruments that carry significant risks.

Leverage can lead to losses exceeding your initial investment.

Market volatility can trigger margin calls requiring immediate additional funds.

Derivatives contracts have expiration dates, creating time sensitivity.

Complex pricing models make valuation difficult for inexperienced investors.

Derivatives trading requires advanced knowledge of markets, strategies, and risk management techniques.

Beginners should thoroughly educate themselves or avoid derivatives entirely until gaining significant investment experience.`}]},{title:"Alternatives Basics",subpassages:[{heading:"Real Estate",content:`Real estate investing offers potential returns through appreciation, rental income, and tax benefits.

Investment options include:

Direct ownership of residential or commercial properties

Real Estate Investment Trusts (REITs) that trade like stocks

Real estate crowdfunding platforms

Benefits include potential inflation protection and portfolio diversification.

Considerations include illiquidity, management responsibilities, financing costs, and market cycles.`},{heading:"Commodities",content:`Commodities are physical goods like precious metals (gold, silver), energy products (oil, natural gas), agricultural products (wheat, coffee), and industrial metals (copper, aluminum).

Investment options include:

Physical ownership (primarily for precious metals)

Commodity ETFs and mutual funds

Futures contracts (advanced)

Shares in commodity-producing companies

Commodities often move differently from stocks and bonds, providing diversification.

Prices are driven by supply and demand fundamentals, geopolitical factors, weather, and currency movements.`},{heading:"Alternative Investments",content:`Beyond traditional real estate and commodities, alternative investments include:

Private equity: Investing in private companies not listed on public exchanges

Venture capital: Funding early-stage companies with high growth potential

Hedge funds: Investment funds using various strategies to generate returns regardless of market direction

Collectibles: Art, wine, coins, and other items that may appreciate in value

These typically require higher minimum investments, longer holding periods, and may have limited liquidity.

Many alternatives are primarily accessible to accredited investors with significant net worth or income.`}]},{title:"You can't beat the System (Barriers of Entry)",subpassages:[{heading:"Explain HFT vs Large Institutions how they trade",content:`High-Frequency Trading (HFT) uses powerful computers and algorithms to execute thousands of trades in fractions of a second.

HFT firms profit from tiny price discrepancies, market-making, and statistical arbitrage rather than fundamental investment decisions.

Large institutional investors (pension funds, mutual funds, insurance companies) trade in large blocks, often using dark pools and specialized brokers to minimize market impact.

Institutions have advantages including dedicated research teams, direct company access, lower transaction costs, and sophisticated risk management tools.

Both HFT firms and institutions can see market depth and order flow information that retail traders cannot.`},{heading:"Retail traders impact",content:`Retail traders (individual investors) represent approximately 25-30% of stock market trading volume, varying by market conditions.

Challenges retail traders face include:

Information disadvantages compared to professionals

Higher relative transaction costs

Emotional biases affecting decision-making

Limited access to certain markets and investments

Lack of specialized knowledge and tools

Retail traders can overcome some disadvantages through long-term investing, index funds, patience, and focusing on areas where they may have knowledge advantages.`},{heading:"Capital Requirements, FINRA, Regulation",content:`Pattern Day Trader rules require maintaining at least $25,000 in a margin account to make more than three day trades in a five-day period.

FINRA (Financial Industry Regulatory Authority) oversees brokerage firms and enforces rules protecting investors.

The SEC (Securities and Exchange Commission) regulates securities markets, enforces federal securities laws, and requires company disclosures.

Accredited investor status (income over $200,000 or net worth over $1 million excluding primary residence) is required for certain private investments.

Regulatory protections exist but primarily focus on disclosure and fraud prevention rather than protecting investors from poor investment decisions.`},{heading:'"Zero Commission" brokerages, high speed market makers',content:`"Zero commission" brokerages make money through:

Payment for Order Flow (PFOF): Selling customer orders to market makers

Interest on uninvested cash balances

Margin interest

Securities lending

Premium subscription services

Market makers profit from the bid-ask spread and statistical advantages over time.

While direct costs to retail investors have decreased, indirect costs may still exist through slightly less favorable execution prices.

Understanding that "free" services have hidden revenue sources helps investors make more informed decisions about where and how to trade.`}]},{title:"Understanding Risk vs. Reward",subpassages:[{heading:"The Risk-Return Relationship",content:`Risk and return are fundamentally linked in investing.

Higher potential returns generally come with higher risk of loss.

Lower risk investments typically offer lower potential returns.

This relationship is one of the most important concepts to understand when making investment decisions.`},{heading:"Types of Investment Risk",content:`Market Risk: The possibility that investments will lose value due to market-wide factors.

Inflation Risk: The risk that your investments won't keep pace with inflation, reducing your purchasing power.

Liquidity Risk: The risk of not being able to sell an investment quickly without loss of value.

Concentration Risk: The danger of having too much of your portfolio in a single investment or sector.

Credit Risk: The possibility that a borrower will default on their obligations.`},{heading:"Risk Management Strategies",content:`Diversification: Spreading investments across different asset classes, sectors, and geographies.

Time Horizon: Matching investment strategies to your time frame (longer horizons can generally tolerate more risk).

Asset Allocation: Determining the right mix of stocks, bonds, and other assets based on your risk tolerance.

Dollar-Cost Averaging: Investing fixed amounts at regular intervals to reduce the impact of market volatility.`}]},{title:"Behavioral Finance: Understanding Your Money Psychology",subpassages:[{heading:"Common Cognitive Biases in Finance",content:`Loss Aversion: The tendency to strongly prefer avoiding losses over acquiring equivalent gains.

Confirmation Bias: Seeking out information that confirms our existing beliefs about investments.

Recency Bias: Giving too much weight to recent events and assuming trends will continue.

Overconfidence: Overestimating our own abilities to pick winning investments or time the market.`},{heading:"Emotional Investing Pitfalls",content:`Fear and Greed Cycle: Buying high out of FOMO (fear of missing out) and selling low out of panic.

Herd Mentality: Following what others are doing rather than making independent decisions based on research.

Anchoring: Fixating on a specific price point that influences decisions, like refusing to sell a losing investment until it returns to the purchase price.`},{heading:"Building Better Financial Habits",content:`Automate Good Decisions: Set up automatic transfers to savings and investment accounts.

Follow a Plan: Create and stick to an investment policy statement that outlines your goals and strategy.

Limit Financial News Consumption: Reduce exposure to market noise that can trigger emotional reactions.

Reflective Decision-Making: Institute a mandatory waiting period before making major financial decisions.`}]}]},{title:"Managing a Long Term Plan",lessons:[{title:"Saving Essentials",subpassages:[{heading:"The Importance of Saving",content:`Saving is the foundation of financial security and future wealth building.

Regular saving creates a buffer against unexpected expenses and reduces financial stress.

Saving enables you to take advantage of opportunities when they arise without going into debt.

The earlier you start saving, the more you benefit from compound growth over time.

Even small amounts saved consistently can grow significantly over decades.`},{heading:"Setting Saving Goals",content:`Effective saving begins with clear, specific goals that have defined timeframes.

Short-term goals (under 2 years): Emergency fund, vacation, new appliances.

Medium-term goals (2-5 years): Down payment on a home, car purchase, starting a business.

Long-term goals (5+ years): Retirement, college funding, financial independence.

Use the SMART framework: Specific, Measurable, Achievable, Relevant, Time-bound.`},{heading:"Automating Your Savings",content:`Automation removes the willpower barrier from saving and ensures consistency.

Set up automatic transfers from checking to savings accounts on paydays.

Use direct deposit to split your paycheck between checking and savings accounts.

Gradually increase your automated savings rate as your income grows.

Consider using apps that round up purchases and save the difference or automatically transfer small amounts based on spending habits.`}]},{title:"Saving for Milestones",subpassages:[{heading:"Home Purchase",content:`Typical down payments range from 3.5% to 20% of the home's purchase price.

Benefits of a larger down payment include lower monthly payments, better interest rates, and avoiding private mortgage insurance (PMI).

Consider saving for closing costs (2-5% of the loan amount) in addition to the down payment.

Some savings vehicles for home down payments include high-yield savings accounts, CDs, or Roth IRAs (first-time homebuyers can withdraw contributions plus up to $10,000 in earnings penalty-free).`},{heading:"Education Funding",content:`529 College Savings Plans offer tax-free growth and withdrawals for qualified education expenses.

Coverdell Education Savings Accounts provide tax-free growth for K-12 and college expenses but have lower contribution limits.

UTMA/UGMA custodial accounts allow you to save in a child's name with fewer restrictions on use, but can impact financial aid eligibility.

Roth IRAs can serve as dual-purpose savings for retirement and education.

Start early—even small contributions have time to grow significantly before college begins.`},{heading:"Major Life Events",content:`Weddings: The average U.S. wedding costs $30,000, but setting a budget based on your financial situation is crucial.

Starting a Family: Consider costs of childbirth (potentially $5,000-$11,000 even with insurance), parental leave, childcare, and increased expenses for housing, healthcare, and daily needs.

Career Changes: Build a transition fund covering 6-12 months of expenses if planning a career shift, additional education, or starting a business.

Establish dedicated savings accounts for each major goal to avoid commingling funds and track progress more effectively.`}]},{title:"Retirement Accounts",subpassages:[{heading:"401k vs Ira, Roth, Maximizing Employer plans",content:`401(k) plans are employer-sponsored retirement accounts with contribution limits of $23,000 for 2023 ($30,500 for those 50+).

Employer matches are essentially free money—contribute at least enough to get the full match.

Traditional IRAs and 401(k)s offer tax-deferred growth with contributions typically tax-deductible.

Roth IRAs and Roth 401(k)s provide tax-free growth and withdrawals in retirement, with contributions made after-tax.

Contribution limits for IRAs in 2023 are $6,500 ($7,500 for those 50+).

Consider contributing in this order: 401(k) up to employer match → Roth IRA (if eligible) → back to 401(k) up to maximum.`},{heading:"Retirement Investing",content:`Asset allocation in retirement accounts typically shifts from growth-oriented (stocks) to more conservative (bonds) as you approach retirement.

Target-date funds automatically adjust allocation based on your expected retirement year.

A common starting guideline is to subtract your age from 110 or 120 to get your approximate stock percentage (e.g., a 30-year-old might have 80-90% in stocks).

Rebalance your portfolio annually to maintain your desired allocation.

Focus on low-fee index funds or ETFs for broad market exposure and lower costs.`},{heading:"Withdrawal Strategies",content:`The 4% Rule suggests withdrawing 4% of your retirement portfolio in year one, then adjusting that amount for inflation each subsequent year.

Required Minimum Distributions (RMDs) from traditional retirement accounts begin at age 73.

Withdrawal order matters for tax efficiency: generally, taxable accounts first, then tax-deferred accounts (traditional IRA/401(k)), and tax-free accounts (Roth) last.

Social Security claiming strategy significantly impacts lifetime benefits—delaying claims increases monthly payments by approximately 8% per year between full retirement age and age 70.

Consider working with a financial advisor to develop a personalized withdrawal strategy based on your specific situation.`}]},{title:"Estate Planning Basics",subpassages:[{heading:"Essential Estate Documents",content:`Will: Directs how your assets should be distributed and names guardians for minor children.

Trust: Can help avoid probate, provide privacy, and manage asset distribution according to specific terms.

Power of Attorney: Appoints someone to handle your financial affairs if you're unable to do so.

Healthcare Directive: Specifies your medical treatment preferences if you cannot communicate them.

Beneficiary Designations: Override wills for certain accounts (retirement accounts, life insurance) and should be kept updated.`},{heading:"Probate and Asset Transfer",content:`Probate is the legal process of validating a will and distributing assets, which can be time-consuming and expensive.

Assets that typically avoid probate include:

Jointly owned property with right of survivorship

Accounts with designated beneficiaries (retirement accounts, life insurance)

Assets held in trusts

Accounts with Transfer on Death (TOD) or Payable on Death (POD) designations

Regularly review and update your estate plan after major life events (marriage, divorce, births, deaths) or significant changes in assets.`},{heading:"Tax Considerations",content:`The federal estate tax exemption for 2023 is $12.92 million per individual ($25.84 million per married couple).

Some states have their own estate or inheritance taxes with lower thresholds.

Lifetime gifting can reduce estate taxes—the annual gift tax exclusion is $17,000 per recipient for 2023.

Inherited assets typically receive a step-up in cost basis to market value at the time of death, potentially reducing capital gains taxes for heirs.

Consider consulting with an estate planning attorney and tax professional to optimize your plan based on current laws and your specific situation.`}]},{title:"Insurance Fundamentals: Protecting Your Financial Future",subpassages:[{heading:"Why Insurance Matters",content:`Insurance protects against catastrophic financial losses that could otherwise deplete your savings or lead to bankruptcy.

It transfers the risk of major losses from you to an insurance company in exchange for regular premium payments.

Having proper insurance coverage is a cornerstone of financial security and complements your emergency fund.`},{heading:"Essential Insurance Types",content:`Health Insurance: Covers medical expenses and helps protect against catastrophic healthcare costs.

Auto Insurance: Provides liability coverage and can cover damage to your vehicle.

Homeowners/Renters Insurance: Protects your dwelling and possessions against damage or theft.

Life Insurance: Provides financial support to dependents in the event of your death.

Disability Insurance: Replaces a portion of your income if you become unable to work due to illness or injury.`},{heading:"Insurance Best Practices",content:`Choose Appropriate Deductibles: Higher deductibles mean lower premiums but more out-of-pocket costs when filing claims.

Avoid Being Underinsured: Make sure coverage limits are sufficient to protect your assets.

Shop Around: Compare policies from multiple providers before purchasing.

Review Coverage Annually: Reassess your needs as your financial situation changes.

Understand Policy Exclusions: Know what isn't covered to avoid surprises when making claims.`}]},{title:"Digital Finance",subpassages:[{heading:"Online Banking Security",content:`Use strong, unique passwords for financial accounts and enable two-factor authentication whenever available.

Secure your devices with up-to-date antivirus software and operating system updates.

Only access financial accounts on secure, private networks—avoid public Wi-Fi for banking transactions.

Regularly monitor accounts for unauthorized transactions and set up alerts for account activity.

Be vigilant about phishing attempts—financial institutions will never ask for passwords or sensitive information via email or text.`},{heading:"Fintech Apps and Tools",content:`Budgeting apps like Mint, YNAB, or Personal Capital can help track spending, set goals, and monitor net worth.

Robo-advisors offer automated investment management at lower costs than traditional financial advisors.

Payment apps like Venmo, PayPal, and Cash App simplify peer-to-peer transfers but require security precautions.

Round-up and microsaving apps can help build savings automatically by rounding purchases to the nearest dollar.

Credit monitoring services can help track your credit score and alert you to potential identity theft.`},{heading:"Cryptocurrency Basics",content:`Cryptocurrencies are digital or virtual currencies that use cryptography for security and typically operate on decentralized networks using blockchain technology.

Bitcoin was the first cryptocurrency and remains the largest by market capitalization.

Cryptocurrencies are highly volatile and speculative investments, with potential for both significant gains and losses.

Store cryptocurrency in either hot wallets (connected to the internet) or cold wallets (offline storage) with appropriate security measures.

Understand the tax implications—cryptocurrency transactions are subject to capital gains taxes in most jurisdictions.

Consider limiting cryptocurrency investments to a small percentage of your overall portfolio due to their high risk nature.`}]}]}]},bM=()=>{const[s,e]=le.useState(0),[n,a]=le.useState(0),[o,c]=le.useState(null),[f,h]=le.useState({});le.useEffect(()=>{if(Xn.chapters&&Xn.chapters.length>0&&Xn.chapters[0].lessons&&Xn.chapters[0].lessons.length>0){c(Xn.chapters[0].lessons[0]);const x={};x[0]=!0,h(x)}},[]);const p=()=>{const x=Xn.chapters;let b=s,E=n+1;E>=x[s].lessons.length&&(E=0,b+=1),b>=x.length&&(alert("Congratulations! You've completed the entire course!"),b=0,E=0),c(null),setTimeout(()=>{e(b),a(E),c(x[b].lessons[E]);const S={...f};S[b]=!0,h(S),window.scrollTo(0,0)},50)},d=(x,b)=>{x===s&&b===n||(c(null),setTimeout(()=>{e(x),a(b),c(Xn.chapters[x].lessons[b]),window.scrollTo(0,0)},50))},g=x=>{const b={...f};b[x]=!b[x],h(b)};if(!o)return K.jsx("div",{className:"p-4 flex justify-center text-amber-400",children:"Loading..."});return K.jsx("div",{className:"min-h-screen bg-gray-900 py-8 px-4",children:K.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6",children:[K.jsx("div",{className:"md:w-1/4",children:K.jsxs("div",{className:"bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700 p-4 sticky top-4",children:[K.jsx("h2",{className:"text-lg font-bold text-amber-400 border-b border-gray-700 pb-2 mb-3",children:"Course Contents"}),K.jsx("div",{className:"space-y-2 max-h-[60vh] overflow-y-auto pr-2",children:Xn.chapters.map((x,b)=>K.jsxs("div",{className:"mb-2",children:[K.jsxs("div",{className:`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-colors ${b===s?"bg-gray-700":"hover:bg-gray-750"}`,onClick:()=>g(b),children:[K.jsxs("span",{className:`font-medium ${b===s?"text-amber-300":"text-gray-300"}`,children:[b+1,". ",x.title]}),K.jsx("svg",{className:`w-4 h-4 text-gray-400 transform transition-transform ${f[b]?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:K.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),f[b]&&K.jsx("div",{className:"ml-4 mt-1 space-y-1",children:x.lessons.map((E,S)=>K.jsxs("div",{className:`p-2 cursor-pointer rounded-lg text-sm ${b===s&&S===n?"bg-amber-500/20 text-amber-300 font-medium":"text-gray-400 hover:bg-gray-700"}`,onClick:()=>d(b,S),children:[S+1,". ",E.title]},`lesson-${b}-${S}`))})]},`chapter-${b}`))})]})}),K.jsxs("div",{className:"md:w-3/4",children:[K.jsxs("div",{className:"mb-4 text-sm text-gray-400",children:["Chapter ",s+1,": ",Xn.chapters[s].title," >  Lesson ",n+1,": ",o.title]}),K.jsxs("div",{className:"bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700 p-6",children:[K.jsx(SM,{title:o.title,subpassages:o.subpassages,images:[]}),K.jsxs("div",{className:"mt-12 mb-8 pt-4 border-t border-gray-700",children:[K.jsxs("div",{className:"flex justify-between mb-4",children:[K.jsx("button",{onClick:()=>{const x=n-1,b=s;c(null),setTimeout(()=>{if(x>=0)a(x),c(Xn.chapters[b].lessons[x]);else if(b>0){const E=b-1,S=Xn.chapters[E].lessons.length-1;e(E),a(S),c(Xn.chapters[E].lessons[S]);const _={...f};_[E]=!0,h(_)}window.scrollTo(0,0)},50)},className:"px-4 py-2 bg-gray-700 text-amber-300 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50",disabled:s===0&&n===0,children:"Previous"}),K.jsx("button",{onClick:p,className:"px-4 py-2 bg-amber-500 text-gray-900 font-medium rounded-lg shadow hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50",children:"Next Lesson"})]}),K.jsxs("div",{children:[K.jsxs("div",{className:"text-sm text-gray-400 text-center mb-2",children:[v()," of ",y()," lessons"]}),K.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2.5",children:K.jsx("div",{className:"bg-amber-500 h-2.5 rounded-full",style:{width:`${v()/y()*100}%`}})})]})]})]})]})]})});function v(){let x=0;for(let b=0;b<s;b++)x+=Xn.chapters[b].lessons.length;return x+n+1}function y(){return Xn.chapters.reduce((x,b)=>x+b.lessons.length,0)}},MM=()=>{const[s,e]=le.useState([]),[n,a]=le.useState([]),o=()=>{e([...s,{id:Date.now(),name:"",date:"",amount:""}])},c=()=>{a([...n,{id:Date.now(),name:"",date:"",amount:""}])},f=(R,w,L,F)=>{(R==="income"?e:a)((R==="income"?s:n).map(k=>k.id===w?{...k,[L]:F}:k))},h=(R,w)=>{(R==="income"?e:a)((R==="income"?s:n).filter(B=>B.id!==w))},p=s.reduce((R,w)=>R+Number(w.amount||0),0),d=n.reduce((R,w)=>R+Number(w.amount||0),0),g=p-d,[v,y]=le.useState([]),x=()=>{y([...v,{id:Date.now(),type:"Stock",name:"",date:"",quantity:"",buyPrice:"",currentPrice:""}])},b=(R,w,L)=>{y(v.map(F=>F.id===R?{...F,[w]:L}:F))},E=R=>{y(v.filter(w=>w.id!==R))},S=R=>(Number(R.currentPrice||0)-Number(R.buyPrice||0))*Number(R.quantity||0),_=v.reduce((R,w)=>R+S(w),0);return K.jsx("div",{className:"min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8",children:K.jsxs("div",{className:"max-w-5xl mx-auto space-y-8",children:[K.jsxs("div",{className:"bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700",children:[K.jsx("div",{className:"bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-4",children:K.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Budget Calculator"})}),K.jsxs("div",{className:"p-6",children:[K.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[K.jsx("button",{onClick:o,className:"px-4 py-2 bg-amber-500 text-gray-900 font-medium rounded-lg shadow hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50",children:"+ Add Income"}),K.jsx("button",{onClick:c,className:"px-4 py-2 bg-gray-700 text-amber-300 font-medium rounded-lg shadow hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50",children:"+ Add Expense"})]}),K.jsx("div",{className:"overflow-x-auto",children:K.jsxs("table",{className:"w-full",children:[K.jsx("thead",{children:K.jsxs("tr",{className:"text-left border-b border-gray-700",children:[K.jsx("th",{className:"pb-3 font-medium text-gray-400 w-1/6",children:"Type"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400 w-1/4",children:"Name"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400 w-1/6",children:"Date"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400 w-1/6",children:"Amount ($)"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400 w-12"})]})}),K.jsx("tbody",{className:"divide-y divide-gray-700",children:[...s.map(R=>({...R,type:"Income"})),...n.map(R=>({...R,type:"Expense"}))].map(R=>K.jsxs("tr",{className:"group hover:bg-gray-750",children:[K.jsx("td",{className:"py-3",children:K.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-medium ${R.type==="Income"?"bg-amber-500/20 text-amber-300":"bg-gray-600 text-gray-300"}`,children:R.type})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"text",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.name,onChange:w=>f(R.type.toLowerCase(),R.id,"name",w.target.value)})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"date",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.date,onChange:w=>f(R.type.toLowerCase(),R.id,"date",w.target.value)})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"number",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.amount,onChange:w=>f(R.type.toLowerCase(),R.id,"amount",w.target.value)})}),K.jsx("td",{className:"py-3 text-center",children:K.jsx("button",{onClick:()=>h(R.type.toLowerCase(),R.id),className:"opacity-50 group-hover:opacity-100 p-1 text-gray-400 hover:text-amber-300 rounded-full hover:bg-gray-700 transition-colors",children:K.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:K.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},R.id))})]})}),K.jsx("div",{className:"mt-8 p-5 bg-gray-750 rounded-xl border border-gray-700",children:K.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[K.jsxs("div",{className:"text-center",children:[K.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Total Income"}),K.jsxs("p",{className:"text-xl font-bold text-amber-400",children:["$",p.toFixed(2)]})]}),K.jsxs("div",{className:"text-center",children:[K.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Total Expenses"}),K.jsxs("p",{className:"text-xl font-bold text-gray-300",children:["$",d.toFixed(2)]})]}),K.jsxs("div",{className:"text-center",children:[K.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Total Capital"}),K.jsxs("p",{className:`text-xl font-bold ${g>=0?"text-amber-400":"text-gray-300"}`,children:["$",g.toFixed(2)]})]})]})})]})]}),K.jsxs("div",{className:"bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700",children:[K.jsx("div",{className:"bg-gradient-to-r from-yellow-500 to-amber-700 px-6 py-4",children:K.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Portfolio Tracker"})}),K.jsxs("div",{className:"p-6",children:[K.jsx("div",{className:"mb-6",children:K.jsx("button",{onClick:x,className:"px-4 py-2 bg-amber-600 text-gray-900 font-medium rounded-lg shadow hover:bg-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50",children:"+ Add Holding"})}),K.jsx("div",{className:"overflow-x-auto",children:K.jsxs("table",{className:"w-full",children:[K.jsx("thead",{children:K.jsxs("tr",{className:"text-left border-b border-gray-700",children:[K.jsx("th",{className:"pb-3 font-medium text-gray-400",children:"Type"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400",children:"Name"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400",children:"Date"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400",children:"Quantity"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400",children:"Buy Price ($)"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400",children:"Current Price ($)"}),K.jsx("th",{className:"pb-3 font-medium text-gray-400 w-12"})]})}),K.jsx("tbody",{className:"divide-y divide-gray-700",children:v.map(R=>K.jsxs("tr",{className:"group hover:bg-gray-750",children:[K.jsx("td",{className:"py-3",children:K.jsxs("select",{className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.type,onChange:w=>b(R.id,"type",w.target.value),children:[K.jsx("option",{value:"Stock",children:"Stock"}),K.jsx("option",{value:"Bond",children:"Bond"}),K.jsx("option",{value:"Crypto",children:"Crypto"}),K.jsx("option",{value:"Other",children:"Other"})]})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"text",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.name,onChange:w=>b(R.id,"name",w.target.value)})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"date",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.date,onChange:w=>b(R.id,"date",w.target.value)})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"number",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.quantity,onChange:w=>b(R.id,"quantity",w.target.value)})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"number",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.buyPrice,onChange:w=>b(R.id,"buyPrice",w.target.value)})}),K.jsx("td",{className:"py-3",children:K.jsx("input",{type:"number",className:"w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 focus:ring-opacity-50",value:R.currentPrice,onChange:w=>b(R.id,"currentPrice",w.target.value)})}),K.jsx("td",{className:"py-3 text-center",children:K.jsx("button",{onClick:()=>E(R.id),className:"opacity-50 group-hover:opacity-100 p-1 text-gray-400 hover:text-amber-300 rounded-full hover:bg-gray-700 transition-colors",children:K.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:K.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})})})]},R.id))})]})}),K.jsxs("div",{className:"mt-8 p-5 bg-gray-750 rounded-xl border border-gray-700 text-center",children:[K.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Total Profit"}),K.jsxs("p",{className:`text-2xl font-bold ${_>=0?"text-amber-400":"text-gray-300"}`,children:["$",_.toFixed(2)]})]})]})]})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="175",Ls={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EM=0,dv=1,TM=2,k_=1,AM=2,ca=3,ma=0,qn=1,Ui=2,Ja=0,Us=1,pv=2,mv=3,gv=4,wM=5,Rr=100,RM=101,CM=102,DM=103,LM=104,UM=200,NM=201,PM=202,OM=203,md=204,gd=205,IM=206,BM=207,zM=208,FM=209,HM=210,GM=211,VM=212,kM=213,XM=214,vd=0,_d=1,yd=2,Os=3,xd=4,Sd=5,bd=6,Md=7,up=0,jM=1,WM=2,er=0,qM=1,YM=2,ZM=3,KM=4,QM=5,$M=6,JM=7,X_=300,Is=301,Bs=302,Ed=303,Td=304,_u=306,uu=1e3,Dr=1001,Ad=1002,Ei=1003,eE=1004,bc=1005,Ni=1006,Nh=1007,Lr=1008,ga=1009,j_=1010,W_=1011,$o=1012,fp=1013,Nr=1014,ua=1015,sl=1016,hp=1017,dp=1018,Jo=1020,q_=35902,Y_=1021,Z_=1022,Mi=1023,K_=1024,Q_=1025,el=1026,tl=1027,$_=1028,pp=1029,J_=1030,mp=1031,gp=1033,$c=33776,Jc=33777,eu=33778,tu=33779,wd=35840,Rd=35841,Cd=35842,Dd=35843,Ld=36196,Ud=37492,Nd=37496,Pd=37808,Od=37809,Id=37810,Bd=37811,zd=37812,Fd=37813,Hd=37814,Gd=37815,Vd=37816,kd=37817,Xd=37818,jd=37819,Wd=37820,qd=37821,nu=36492,Yd=36494,Zd=36495,ey=36283,Kd=36284,Qd=36285,$d=36286,tE=3200,nE=3201,ty=0,iE=1,$a="",Rn="srgb",zs="srgb-linear",fu="linear",It="srgb",ms=7680,vv=519,aE=512,rE=513,sE=514,ny=515,oE=516,lE=517,cE=518,uE=519,_v=35044,yv="300 es",fa=2e3,hu=2001;class Br{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,Jd=180/Math.PI;function ol(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function fE(s,e){return(s%e+e)%e}function Ph(s,e,n){return(1-n)*s+n*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hE={DEG2RAD:iu};class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*o+e.x,this.y=c*o+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,a,o,c,f,h,p,d){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,f,h,p,d)}set(e,n,a,o,c,f,h,p,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,f=a[0],h=a[3],p=a[6],d=a[1],g=a[4],v=a[7],y=a[2],x=a[5],b=a[8],E=o[0],S=o[3],_=o[6],R=o[1],w=o[4],L=o[7],F=o[2],B=o[5],z=o[8];return c[0]=f*E+h*R+p*F,c[3]=f*S+h*w+p*B,c[6]=f*_+h*L+p*z,c[1]=d*E+g*R+v*F,c[4]=d*S+g*w+v*B,c[7]=d*_+g*L+v*z,c[2]=y*E+x*R+b*F,c[5]=y*S+x*w+b*B,c[8]=y*_+x*L+b*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],f=e[4],h=e[5],p=e[6],d=e[7],g=e[8];return n*f*g-n*h*d-a*c*g+a*h*p+o*c*d-o*f*p}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],f=e[4],h=e[5],p=e[6],d=e[7],g=e[8],v=g*f-h*d,y=h*p-g*c,x=d*c-f*p,b=n*v+a*y+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=v*E,e[1]=(o*d-g*a)*E,e[2]=(h*a-o*f)*E,e[3]=y*E,e[4]=(g*n-o*p)*E,e[5]=(o*c-h*n)*E,e[6]=x*E,e[7]=(a*p-d*n)*E,e[8]=(f*n-a*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,f,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*f+d*h)+f+e,-o*d,o*p,-o*(-d*f+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Oh.makeScale(e,n)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new st;function iy(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dE(){const s=nl("canvas");return s.style.display="block",s}const xv={};function au(s){s in xv||(xv[s]=!0,console.warn(s))}function pE(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function mE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vE(){const s={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===It&&(o.r=da(o.r),o.g=da(o.g),o.b=da(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(o.r=Ns(o.r),o.g=Ns(o.g),o.b=Ns(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$a?fu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[zs]:{primaries:e,whitePoint:a,transfer:fu,toXYZ:Sv,fromXYZ:bv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:a,transfer:It,toXYZ:Sv,fromXYZ:bv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),s}const bt=vE();function da(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class _E{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{gs===void 0&&(gs=nl("canvas")),gs.width=e.width,gs.height=e.height;const o=gs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=gs}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=da(c[f]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(da(n[a]/255)*255):n[a]=da(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yE=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(Ih(o[f].image)):c.push(Ih(o[f]))}else c=Ih(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Ih(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_E.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;class Bn extends Br{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,a=Dr,o=Dr,c=Ni,f=Lr,h=Mi,p=ga,d=Bn.DEFAULT_ANISOTROPY,g=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=ol(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uu:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uu:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=X_;Bn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,n=0,a=0,o=1){Jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const p=e.elements,d=p[0],g=p[4],v=p[8],y=p[1],x=p[5],b=p[9],E=p[2],S=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(v-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+E)<.1&&Math.abs(b+S)<.1&&Math.abs(d+x+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,L=(x+1)/2,F=(_+1)/2,B=(g+y)/4,z=(v+E)/4,k=(b+S)/4;return w>L&&w>F?w<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(w),o=B/a,c=z/a):L>F?L<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),a=B/o,c=k/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=z/c,o=k/c),this.set(a,o,c,n),this}let R=Math.sqrt((S-b)*(S-b)+(v-E)*(v-E)+(y-g)*(y-g));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(v-E)/R,this.z=(y-g)/R,this.w=Math.acos((d+x+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SE extends Br{constructor(e=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n);const o={width:e,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Bn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new vp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends SE{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class ay extends Bn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bE extends Bn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,f,h){let p=a[o+0],d=a[o+1],g=a[o+2],v=a[o+3];const y=c[f+0],x=c[f+1],b=c[f+2],E=c[f+3];if(h===0){e[n+0]=p,e[n+1]=d,e[n+2]=g,e[n+3]=v;return}if(h===1){e[n+0]=y,e[n+1]=x,e[n+2]=b,e[n+3]=E;return}if(v!==E||p!==y||d!==x||g!==b){let S=1-h;const _=p*y+d*x+g*b+v*E,R=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const F=Math.sqrt(w),B=Math.atan2(F,_*R);S=Math.sin(S*B)/F,h=Math.sin(h*B)/F}const L=h*R;if(p=p*S+y*L,d=d*S+x*L,g=g*S+b*L,v=v*S+E*L,S===1-h){const F=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=F,d*=F,g*=F,v*=F}}e[n]=p,e[n+1]=d,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,o,c,f){const h=a[o],p=a[o+1],d=a[o+2],g=a[o+3],v=c[f],y=c[f+1],x=c[f+2],b=c[f+3];return e[n]=h*b+g*v+p*x-d*y,e[n+1]=p*b+g*y+d*v-h*x,e[n+2]=d*b+g*x+h*y-p*v,e[n+3]=g*b-h*v-p*y-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(o/2),v=h(c/2),y=p(a/2),x=p(o/2),b=p(c/2);switch(f){case"XYZ":this._x=y*g*v+d*x*b,this._y=d*x*v-y*g*b,this._z=d*g*b+y*x*v,this._w=d*g*v-y*x*b;break;case"YXZ":this._x=y*g*v+d*x*b,this._y=d*x*v-y*g*b,this._z=d*g*b-y*x*v,this._w=d*g*v+y*x*b;break;case"ZXY":this._x=y*g*v-d*x*b,this._y=d*x*v+y*g*b,this._z=d*g*b+y*x*v,this._w=d*g*v-y*x*b;break;case"ZYX":this._x=y*g*v-d*x*b,this._y=d*x*v+y*g*b,this._z=d*g*b-y*x*v,this._w=d*g*v+y*x*b;break;case"YZX":this._x=y*g*v+d*x*b,this._y=d*x*v+y*g*b,this._z=d*g*b-y*x*v,this._w=d*g*v-y*x*b;break;case"XZY":this._x=y*g*v-d*x*b,this._y=d*x*v-y*g*b,this._z=d*g*b+y*x*v,this._w=d*g*v+y*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],f=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],y=a+h+v;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-d)*x,this._z=(f-o)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+f)/x,this._z=(c+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-d)/x,this._x=(o+f)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(f-o)/x,this._x=(c+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,f=e._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+f*h+o*d-c*p,this._y=o*g+f*p+c*h-a*d,this._z=c*g+f*d+a*p-o*h,this._w=f*g-a*h-o*p-c*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*e._w+a*e._x+o*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*f+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),v=Math.sin((1-n)*g)/d,y=Math.sin(n*g)/d;return this._w=f*v+this._w*y,this._x=a*v+this._x*y,this._y=o*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,a=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,f=e.y,h=e.z,p=e.w,d=2*(f*o-h*a),g=2*(h*n-c*o),v=2*(c*a-f*n);return this.x=n+p*d+f*v-h*g,this.y=a+p*g+h*d-c*v,this.z=o+p*v+c*g-f*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,f=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*f-a*p,this.z=a*h-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new Q,Mv=new Or;class Vs{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Mc.copy(a.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Ec.subVectors(this.max,ko),vs.subVectors(e.a,ko),_s.subVectors(e.b,ko),ys.subVectors(e.c,ko),ja.subVectors(_s,vs),Wa.subVectors(ys,_s),Sr.subVectors(vs,ys);let n=[0,-ja.z,ja.y,0,-Wa.z,Wa.y,0,-Sr.z,Sr.y,ja.z,0,-ja.x,Wa.z,0,-Wa.x,Sr.z,0,-Sr.x,-ja.y,ja.x,0,-Wa.y,Wa.x,0,-Sr.y,Sr.x,0];return!zh(n,vs,_s,ys,Ec)||(n=[1,0,0,0,1,0,0,0,1],!zh(n,vs,_s,ys,Ec))?!1:(Tc.crossVectors(ja,Wa),n=[Tc.x,Tc.y,Tc.z],zh(n,vs,_s,ys,Ec))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ia=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yi=new Q,Mc=new Vs,vs=new Q,_s=new Q,ys=new Q,ja=new Q,Wa=new Q,Sr=new Q,ko=new Q,Ec=new Q,Tc=new Q,br=new Q;function zh(s,e,n,a,o){for(let c=0,f=s.length-3;c<=f;c+=3){br.fromArray(s,c);const h=o.x*Math.abs(br.x)+o.y*Math.abs(br.y)+o.z*Math.abs(br.z),p=e.dot(br),d=n.dot(br),g=a.dot(br);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const ME=new Vs,Xo=new Q,Fh=new Q;class ll{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):ME.setFromPoints(e).getCenter(a);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Xo,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Fh)),this.expandByPoint(Xo.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const aa=new Q,Hh=new Q,Ac=new Q,qa=new Q,Gh=new Q,wc=new Q,Vh=new Q;class yu{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=aa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,n),aa.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Hh.copy(e).add(n).multiplyScalar(.5),Ac.copy(n).sub(e).normalize(),qa.copy(this.origin).sub(Hh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Ac),h=qa.dot(this.direction),p=-qa.dot(Ac),d=qa.lengthSq(),g=Math.abs(1-f*f);let v,y,x,b;if(g>0)if(v=f*p-h,y=f*h-p,b=c*g,v>=0)if(y>=-b)if(y<=b){const E=1/g;v*=E,y*=E,x=v*(v+f*y+2*h)+y*(f*v+y+2*p)+d}else y=c,v=Math.max(0,-(f*y+h)),x=-v*v+y*(y+2*p)+d;else y=-c,v=Math.max(0,-(f*y+h)),x=-v*v+y*(y+2*p)+d;else y<=-b?(v=Math.max(0,-(-f*c+h)),y=v>0?-c:Math.min(Math.max(-c,-p),c),x=-v*v+y*(y+2*p)+d):y<=b?(v=0,y=Math.min(Math.max(-c,-p),c),x=y*(y+2*p)+d):(v=Math.max(0,-(f*c+h)),y=v>0?c:Math.min(Math.max(-c,-p),c),x=-v*v+y*(y+2*p)+d);else y=f>0?-c:c,v=Math.max(0,-(f*y+h)),x=-v*v+y*(y+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Hh).addScaledVector(Ac,y),x}intersectSphere(e,n){aa.subVectors(e.center,this.origin);const a=aa.dot(this.direction),o=aa.dot(aa)-a*a,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,f,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return d>=0?(a=(e.min.x-y.x)*d,o=(e.max.x-y.x)*d):(a=(e.max.x-y.x)*d,o=(e.min.x-y.x)*d),g>=0?(c=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),v>=0?(h=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(h=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,n,a,o,c){Gh.subVectors(n,e),wc.subVectors(a,e),Vh.crossVectors(Gh,wc);let f=this.direction.dot(Vh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;qa.subVectors(this.origin,e);const p=h*this.direction.dot(wc.crossVectors(qa,wc));if(p<0)return null;const d=h*this.direction.dot(Gh.cross(qa));if(d<0||p+d>f)return null;const g=-h*qa.dot(Vh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,a,o,c,f,h,p,d,g,v,y,x,b,E,S){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,f,h,p,d,g,v,y,x,b,E,S)}set(e,n,a,o,c,f,h,p,d,g,v,y,x,b,E,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=a,_[12]=o,_[1]=c,_[5]=f,_[9]=h,_[13]=p,_[2]=d,_[6]=g,_[10]=v,_[14]=y,_[3]=x,_[7]=b,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/xs.setFromMatrixColumn(e,0).length(),c=1/xs.setFromMatrixColumn(e,1).length(),f=1/xs.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=f*g,x=f*v,b=h*g,E=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=x+b*d,n[5]=y-E*d,n[9]=-h*p,n[2]=E-y*d,n[6]=b+x*d,n[10]=f*p}else if(e.order==="YXZ"){const y=p*g,x=p*v,b=d*g,E=d*v;n[0]=y+E*h,n[4]=b*h-x,n[8]=f*d,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=x*h-b,n[6]=E+y*h,n[10]=f*p}else if(e.order==="ZXY"){const y=p*g,x=p*v,b=d*g,E=d*v;n[0]=y-E*h,n[4]=-f*v,n[8]=b+x*h,n[1]=x+b*h,n[5]=f*g,n[9]=E-y*h,n[2]=-f*d,n[6]=h,n[10]=f*p}else if(e.order==="ZYX"){const y=f*g,x=f*v,b=h*g,E=h*v;n[0]=p*g,n[4]=b*d-x,n[8]=y*d+E,n[1]=p*v,n[5]=E*d+y,n[9]=x*d-b,n[2]=-d,n[6]=h*p,n[10]=f*p}else if(e.order==="YZX"){const y=f*p,x=f*d,b=h*p,E=h*d;n[0]=p*g,n[4]=E-y*v,n[8]=b*v+x,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*v+b,n[10]=y-E*v}else if(e.order==="XZY"){const y=f*p,x=f*d,b=h*p,E=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=y*v+E,n[5]=f*g,n[9]=x*v-b,n[2]=b*v-x,n[6]=h*g,n[10]=E*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EE,e,TE)}lookAt(e,n,a){const o=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ya.crossVectors(a,ni),Ya.lengthSq()===0&&(Math.abs(a.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ya.crossVectors(a,ni)),Ya.normalize(),Rc.crossVectors(ni,Ya),o[0]=Ya.x,o[4]=Rc.x,o[8]=ni.x,o[1]=Ya.y,o[5]=Rc.y,o[9]=ni.y,o[2]=Ya.z,o[6]=Rc.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,f=a[0],h=a[4],p=a[8],d=a[12],g=a[1],v=a[5],y=a[9],x=a[13],b=a[2],E=a[6],S=a[10],_=a[14],R=a[3],w=a[7],L=a[11],F=a[15],B=o[0],z=o[4],k=o[8],U=o[12],D=o[1],G=o[5],ce=o[9],oe=o[13],me=o[2],fe=o[6],O=o[10],Z=o[14],j=o[3],be=o[7],N=o[11],ee=o[15];return c[0]=f*B+h*D+p*me+d*j,c[4]=f*z+h*G+p*fe+d*be,c[8]=f*k+h*ce+p*O+d*N,c[12]=f*U+h*oe+p*Z+d*ee,c[1]=g*B+v*D+y*me+x*j,c[5]=g*z+v*G+y*fe+x*be,c[9]=g*k+v*ce+y*O+x*N,c[13]=g*U+v*oe+y*Z+x*ee,c[2]=b*B+E*D+S*me+_*j,c[6]=b*z+E*G+S*fe+_*be,c[10]=b*k+E*ce+S*O+_*N,c[14]=b*U+E*oe+S*Z+_*ee,c[3]=R*B+w*D+L*me+F*j,c[7]=R*z+w*G+L*fe+F*be,c[11]=R*k+w*ce+L*O+F*N,c[15]=R*U+w*oe+L*Z+F*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],f=e[1],h=e[5],p=e[9],d=e[13],g=e[2],v=e[6],y=e[10],x=e[14],b=e[3],E=e[7],S=e[11],_=e[15];return b*(+c*p*v-o*d*v-c*h*y+a*d*y+o*h*x-a*p*x)+E*(+n*p*x-n*d*y+c*f*y-o*f*x+o*d*g-c*p*g)+S*(+n*d*v-n*h*x-c*f*v+a*f*x+c*h*g-a*d*g)+_*(-o*h*g-n*p*v+n*h*y+o*f*v-a*f*y+a*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],f=e[4],h=e[5],p=e[6],d=e[7],g=e[8],v=e[9],y=e[10],x=e[11],b=e[12],E=e[13],S=e[14],_=e[15],R=v*S*d-E*y*d+E*p*x-h*S*x-v*p*_+h*y*_,w=b*y*d-g*S*d-b*p*x+f*S*x+g*p*_-f*y*_,L=g*E*d-b*v*d+b*h*x-f*E*x-g*h*_+f*v*_,F=b*v*p-g*E*p-b*h*y+f*E*y+g*h*S-f*v*S,B=n*R+a*w+o*L+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=R*z,e[1]=(E*y*c-v*S*c-E*o*x+a*S*x+v*o*_-a*y*_)*z,e[2]=(h*S*c-E*p*c+E*o*d-a*S*d-h*o*_+a*p*_)*z,e[3]=(v*p*c-h*y*c-v*o*d+a*y*d+h*o*x-a*p*x)*z,e[4]=w*z,e[5]=(g*S*c-b*y*c+b*o*x-n*S*x-g*o*_+n*y*_)*z,e[6]=(b*p*c-f*S*c-b*o*d+n*S*d+f*o*_-n*p*_)*z,e[7]=(f*y*c-g*p*c+g*o*d-n*y*d-f*o*x+n*p*x)*z,e[8]=L*z,e[9]=(b*v*c-g*E*c-b*a*x+n*E*x+g*a*_-n*v*_)*z,e[10]=(f*E*c-b*h*c+b*a*d-n*E*d-f*a*_+n*h*_)*z,e[11]=(g*h*c-f*v*c-g*a*d+n*v*d+f*a*x-n*h*x)*z,e[12]=F*z,e[13]=(g*E*o-b*v*o+b*a*y-n*E*y-g*a*S+n*v*S)*z,e[14]=(b*h*o-f*E*o-b*a*p+n*E*p+f*a*S-n*h*S)*z,e[15]=(f*v*o-g*h*o+g*a*p-n*v*p-f*a*y+n*h*y)*z,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,f=e.x,h=e.y,p=e.z,d=c*f,g=c*h;return this.set(d*f+a,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+a,g*p-o*f,0,d*p-o*h,g*p+o*f,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,f){return this.set(1,a,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,d=c+c,g=f+f,v=h+h,y=c*d,x=c*g,b=c*v,E=f*g,S=f*v,_=h*v,R=p*d,w=p*g,L=p*v,F=a.x,B=a.y,z=a.z;return o[0]=(1-(E+_))*F,o[1]=(x+L)*F,o[2]=(b-w)*F,o[3]=0,o[4]=(x-L)*B,o[5]=(1-(y+_))*B,o[6]=(S+R)*B,o[7]=0,o[8]=(b+w)*z,o[9]=(S-R)*z,o[10]=(1-(y+E))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=xs.set(o[0],o[1],o[2]).length();const f=xs.set(o[4],o[5],o[6]).length(),h=xs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const d=1/c,g=1/f,v=1/h;return xi.elements[0]*=d,xi.elements[1]*=d,xi.elements[2]*=d,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,n.setFromRotationMatrix(xi),a.x=c,a.y=f,a.z=h,this}makePerspective(e,n,a,o,c,f,h=fa){const p=this.elements,d=2*c/(n-e),g=2*c/(a-o),v=(n+e)/(n-e),y=(a+o)/(a-o);let x,b;if(h===fa)x=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===hu)x=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,f,h=fa){const p=this.elements,d=1/(n-e),g=1/(a-o),v=1/(f-c),y=(n+e)*d,x=(a+o)*g;let b,E;if(h===fa)b=(f+c)*v,E=-2*v;else if(h===hu)b=c*v,E=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=E,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const xs=new Q,xi=new Wt,EE=new Q(0,0,0),TE=new Q(1,1,1),Ya=new Q,Rc=new Q,ni=new Q,Ev=new Wt,Tv=new Or;class Ii{constructor(e=0,n=0,a=0,o=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],f=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],y=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class ry{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AE=0;const Av=new Q,Ss=new Or,ra=new Wt,Cc=new Q,jo=new Q,wE=new Q,RE=new Or,wv=new Q(1,0,0),Rv=new Q(0,1,0),Cv=new Q(0,0,1),Dv={type:"added"},CE={type:"removed"},bs={type:"childadded",child:null},kh={type:"childremoved",child:null};class bn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new Q,n=new Ii,a=new Or,o=new Q(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new st}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(wv,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Cv,e)}translateOnAxis(e,n){return Av.copy(e).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wv,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Cc.copy(e):Cc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(jo,Cc,this.up):ra.lookAt(Cc,jo,this.up),this.quaternion.setFromRotationMatrix(ra),o&&(ra.extractRotation(o.matrixWorld),Ss.setFromRotationMatrix(ra),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CE),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,RE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(e.animations,p))}}if(n){const h=f(e.geometries),p=f(e.materials),d=f(e.textures),g=f(e.images),v=f(e.shapes),y=f(e.skeletons),x=f(e.animations),b=f(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),y.length>0&&(a.skeletons=y),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function f(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}bn.DEFAULT_UP=new Q(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new Q,sa=new Q,Xh=new Q,oa=new Q,Ms=new Q,Es=new Q,Lv=new Q,jh=new Q,Wh=new Q,qh=new Q,Yh=new Jt,Zh=new Jt,Kh=new Jt;class bi{constructor(e=new Q,n=new Q,a=new Q){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Si.subVectors(e,n),o.cross(Si);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Si.subVectors(o,n),sa.subVectors(a,n),Xh.subVectors(e,n);const f=Si.dot(Si),h=Si.dot(sa),p=Si.dot(Xh),d=sa.dot(sa),g=sa.dot(Xh),v=f*d-h*h;if(v===0)return c.set(0,0,0),null;const y=1/v,x=(d*p-h*g)*y,b=(f*g-h*p)*y;return c.set(1-x-b,b,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,n,a,o,c,f,h,p){return this.getBarycoord(e,n,a,o,oa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,oa.x),p.addScaledVector(f,oa.y),p.addScaledVector(h,oa.z),p)}static getInterpolatedAttribute(e,n,a,o,c,f){return Yh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),Yh.fromBufferAttribute(e,n),Zh.fromBufferAttribute(e,a),Kh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Yh,c.x),f.addScaledVector(Zh,c.y),f.addScaledVector(Kh,c.z),f}static isFrontFacing(e,n,a,o){return Si.subVectors(a,n),sa.subVectors(e,n),Si.cross(sa).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Si.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return bi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let f,h;Ms.subVectors(o,a),Es.subVectors(c,a),jh.subVectors(e,a);const p=Ms.dot(jh),d=Es.dot(jh);if(p<=0&&d<=0)return n.copy(a);Wh.subVectors(e,o);const g=Ms.dot(Wh),v=Es.dot(Wh);if(g>=0&&v<=g)return n.copy(o);const y=p*v-g*d;if(y<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(a).addScaledVector(Ms,f);qh.subVectors(e,c);const x=Ms.dot(qh),b=Es.dot(qh);if(b>=0&&x<=b)return n.copy(c);const E=x*d-p*b;if(E<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(a).addScaledVector(Es,h);const S=g*b-x*v;if(S<=0&&v-g>=0&&x-b>=0)return Lv.subVectors(c,o),h=(v-g)/(v-g+(x-b)),n.copy(o).addScaledVector(Lv,h);const _=1/(S+E+y);return f=E*_,h=y*_,n.copy(a).addScaledVector(Ms,f).addScaledVector(Es,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Qh(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class dt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,n),this}setRGB(e,n,a,o=bt.workingColorSpace){return this.r=e,this.g=n,this.b=a,bt.toWorkingColorSpace(this,o),this}setHSL(e,n,a,o=bt.workingColorSpace){if(e=fE(e,1),n=vt(n,0,1),a=vt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=Qh(f,c,e+1/3),this.g=Qh(f,c,e),this.b=Qh(f,c,e-1/3)}return bt.toWorkingColorSpace(this,o),this}setStyle(e,n=Rn){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const a=sy[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return bt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(vt(Pn.r*255,0,255))*65536+Math.round(vt(Pn.g*255,0,255))*256+Math.round(vt(Pn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.fromWorkingColorSpace(Pn.copy(this),n);const a=Pn.r,o=Pn.g,c=Pn.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let p,d;const g=(h+f)/2;if(h===f)p=0,d=0;else{const v=f-h;switch(d=g<=.5?v/(f+h):v/(2-f-h),f){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return e.h=p,e.s=d,e.l=g,e}getRGB(e,n=bt.workingColorSpace){return bt.fromWorkingColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Rn){bt.fromWorkingColorSpace(Pn.copy(this),e);const n=Pn.r,a=Pn.g,o=Pn.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+n,Za.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Za),e.getHSL(Dc);const a=Ph(Za.h,Dc.h,n),o=Ph(Za.s,Dc.s,n),c=Ph(Za.l,Dc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new dt;dt.NAMES=sy;let DE=0;class va extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Us,this.side=ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(a.blending=this.blending),this.side!==ma&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==md&&(a.blendSrc=this.blendSrc),this.blendDst!==gd&&(a.blendDst=this.blendDst),this.blendEquation!==Rr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _p extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new Q,Lc=new at;let LE=0;class Pi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=_v,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Lc.fromBufferAttribute(this,n),Lc.applyMatrix3(e),this.setXY(n,Lc.x,Lc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Vo(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=jn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array),c=jn(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_v&&(e.usage=this.usage),e}}class oy extends Pi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class ly extends Pi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Sn extends Pi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let UE=0;const hi=new Wt,$h=new bn,Ts=new Q,ii=new Vs,Wo=new Vs,xn=new Q;class mi extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iy(e)?ly:oy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new st().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,n,a){return hi.makeTranslation(e,n,a),this.applyMatrix4(hi),this}scale(e,n,a){return hi.makeScale(e,n,a),this.applyMatrix4(hi),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Sn(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const a=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ii.min,Wo.min),ii.expandByPoint(xn),xn.addVectors(ii.max,Wo.max),ii.expandByPoint(xn)):(ii.expandByPoint(Wo.min),ii.expandByPoint(Wo.max))}ii.getCenter(a);let o=0;for(let c=0,f=e.count;c<f;c++)xn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(xn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)xn.fromBufferAttribute(h,d),p&&(Ts.fromBufferAttribute(e,d),xn.add(Ts)),o=Math.max(o,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let k=0;k<a.count;k++)h[k]=new Q,p[k]=new Q;const d=new Q,g=new Q,v=new Q,y=new at,x=new at,b=new at,E=new Q,S=new Q;function _(k,U,D){d.fromBufferAttribute(a,k),g.fromBufferAttribute(a,U),v.fromBufferAttribute(a,D),y.fromBufferAttribute(c,k),x.fromBufferAttribute(c,U),b.fromBufferAttribute(c,D),g.sub(d),v.sub(d),x.sub(y),b.sub(y);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(G),S.copy(v).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),h[k].add(E),h[U].add(E),h[D].add(E),p[k].add(S),p[U].add(S),p[D].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let k=0,U=R.length;k<U;++k){const D=R[k],G=D.start,ce=D.count;for(let oe=G,me=G+ce;oe<me;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const w=new Q,L=new Q,F=new Q,B=new Q;function z(k){F.fromBufferAttribute(o,k),B.copy(F);const U=h[k];w.copy(U),w.sub(F.multiplyScalar(F.dot(U))).normalize(),L.crossVectors(B,U);const G=L.dot(p[k])<0?-1:1;f.setXYZW(k,w.x,w.y,w.z,G)}for(let k=0,U=R.length;k<U;++k){const D=R[k],G=D.start,ce=D.count;for(let oe=G,me=G+ce;oe<me;oe+=3)z(e.getX(oe+0)),z(e.getX(oe+1)),z(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let y=0,x=a.count;y<x;y++)a.setXYZ(y,0,0,0);const o=new Q,c=new Q,f=new Q,h=new Q,p=new Q,d=new Q,g=new Q,v=new Q;if(e)for(let y=0,x=e.count;y<x;y+=3){const b=e.getX(y+0),E=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,S),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let y=0,x=n.count;y<x;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,p){const d=h.array,g=h.itemSize,v=h.normalized,y=new d.constructor(p.length*g);let x=0,b=0;for(let E=0,S=p.length;E<S;E++){h.isInterleavedBufferAttribute?x=p[E]*h.data.stride+h.offset:x=p[E]*g;for(let _=0;_<g;_++)y[b++]=d[x++]}return new Pi(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let g=0,v=d.length;g<v;g++){const y=d[g],x=e(y,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const d=f[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,y=d.length;v<y;v++){const x=d[v];g.push(x.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=e.morphAttributes;for(const d in c){const g=[],v=c[d];for(let y=0,x=v.length;y<x;y++)g.push(v[y].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let d=0,g=f.length;d<g;d++){const v=f[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uv=new Wt,Mr=new yu,Uc=new ll,Nv=new Q,Nc=new Q,Pc=new Q,Oc=new Q,Jh=new Q,Ic=new Q,Pv=new Q,Bc=new Q;class ai extends bn{constructor(e=new mi,n=new _p){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Ic.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=h[p],v=c[p];g!==0&&(Jh.fromBufferAttribute(v,e),f?Ic.addScaledVector(Jh,g):Ic.addScaledVector(Jh.sub(n),g))}n.add(Ic)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Uc.copy(a.boundingSphere),Uc.applyMatrix4(c),Mr.copy(e.ray).recast(e.near),!(Uc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Uc,Nv)===null||Mr.origin.distanceToSquared(Nv)>(e.far-e.near)**2))&&(Uv.copy(c).invert(),Mr.copy(e.ray).applyMatrix4(Uv),!(a.boundingBox!==null&&Mr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,a){let o;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=y.length;b<E;b++){const S=y[b],_=f[S.materialIndex],R=Math.max(S.start,x.start),w=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let L=R,F=w;L<F;L+=3){const B=h.getX(L),z=h.getX(L+1),k=h.getX(L+2);o=zc(this,_,e,a,d,g,v,B,z,k),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let S=b,_=E;S<_;S+=3){const R=h.getX(S),w=h.getX(S+1),L=h.getX(S+2);o=zc(this,f,e,a,d,g,v,R,w,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,E=y.length;b<E;b++){const S=y[b],_=f[S.materialIndex],R=Math.max(S.start,x.start),w=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let L=R,F=w;L<F;L+=3){const B=L,z=L+1,k=L+2;o=zc(this,_,e,a,d,g,v,B,z,k),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),E=Math.min(p.count,x.start+x.count);for(let S=b,_=E;S<_;S+=3){const R=S,w=S+1,L=S+2;o=zc(this,f,e,a,d,g,v,R,w,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function NE(s,e,n,a,o,c,f,h){let p;if(e.side===qn?p=a.intersectTriangle(f,c,o,!0,h):p=a.intersectTriangle(o,c,f,e.side===ma,h),p===null)return null;Bc.copy(h),Bc.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(Bc);return d<n.near||d>n.far?null:{distance:d,point:Bc.clone(),object:s}}function zc(s,e,n,a,o,c,f,h,p,d){s.getVertexPosition(h,Nc),s.getVertexPosition(p,Pc),s.getVertexPosition(d,Oc);const g=NE(s,e,n,a,Nc,Pc,Oc,Pv);if(g){const v=new Q;bi.getBarycoord(Pv,Nc,Pc,Oc,v),o&&(g.uv=bi.getInterpolatedAttribute(o,h,p,d,v,new at)),c&&(g.uv1=bi.getInterpolatedAttribute(c,h,p,d,v,new at)),f&&(g.normal=bi.getInterpolatedAttribute(f,h,p,d,v,new Q),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:p,c:d,normal:new Q,materialIndex:0};bi.getNormal(Nc,Pc,Oc,y.normal),g.face=y,g.barycoord=v}return g}class cl extends mi{constructor(e=1,n=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],d=[],g=[],v=[];let y=0,x=0;b("z","y","x",-1,-1,a,n,e,f,c,0),b("z","y","x",1,-1,a,n,-e,f,c,1),b("x","z","y",1,1,e,a,n,o,f,2),b("x","z","y",1,-1,e,a,-n,o,f,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Sn(d,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(v,2));function b(E,S,_,R,w,L,F,B,z,k,U){const D=L/z,G=F/k,ce=L/2,oe=F/2,me=B/2,fe=z+1,O=k+1;let Z=0,j=0;const be=new Q;for(let N=0;N<O;N++){const ee=N*G-oe;for(let ye=0;ye<fe;ye++){const Me=ye*D-ce;be[E]=Me*R,be[S]=ee*w,be[_]=me,d.push(be.x,be.y,be.z),be[E]=0,be[S]=0,be[_]=B>0?1:-1,g.push(be.x,be.y,be.z),v.push(ye/z),v.push(1-N/k),Z+=1}}for(let N=0;N<k;N++)for(let ee=0;ee<z;ee++){const ye=y+ee+fe*N,Me=y+ee+fe*(N+1),J=y+(ee+1)+fe*(N+1),ge=y+(ee+1)+fe*N;p.push(ye,Me,ge),p.push(Me,J,ge),j+=6}h.addGroup(x,j,U),x+=j,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function In(s){const e={};for(let n=0;n<s.length;n++){const a=Fs(s[n]);for(const o in a)e[o]=a[o]}return e}function PE(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function cy(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const OE={clone:Fs,merge:In};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=PE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class uy extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=fa}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new Q,Ov=new at,Iv=new at;class pi extends uy{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,n){return this.getViewBounds(e,Ov,Iv),n.subVectors(Iv,Ov)}setViewOffset(e,n,a,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(iu*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,d=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*a/d,o*=f.width/p,a*=f.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,ws=1;class zE extends bn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(As,ws,e,n);o.layers=this.layers,this.add(o);const c=new pi(As,ws,e,n);c.layers=this.layers,this.add(c);const f=new pi(As,ws,e,n);f.layers=this.layers,this.add(f);const h=new pi(As,ws,e,n);h.layers=this.layers,this.add(h);const p=new pi(As,ws,e,n);p.layers=this.layers,this.add(p);const d=new pi(As,ws,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,f,h,p]=n;for(const d of n)this.remove(d);if(e===fa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===hu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,d,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,f),e.setRenderTarget(a,2,o),e.render(n,h),e.setRenderTarget(a,3,o),e.render(n,p),e.setRenderTarget(a,4,o),e.render(n,d),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(v,y,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class fy extends Bn{constructor(e=[],n=Is,a,o,c,f,h,p,d,g){super(e,n,a,o,c,f,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FE extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new fy(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new cl(5,5,5),c=new tr({name:"CubemapFromEquirect",uniforms:Fs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:qn,blending:Ja});c.uniforms.tEquirect.value=n;const f=new ai(o,c),h=n.minFilter;return n.minFilter===Lr&&(n.minFilter=Ni),new zE(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,a,o);e.setRenderTarget(c)}}class Yo extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,f=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){f=!0;for(const E of e.hand.values()){const S=n.getJointPose(E,a),_=this._getHandJoint(d,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],y=g.position.distanceTo(v.position),x=.02,b=.005;d.inputState.pinching&&y>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&y<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Yo;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class GE extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const td=new Q,VE=new Q,kE=new st;class Qa{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=td.subVectors(a,n).cross(VE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(td),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||kE.getNormalMatrix(e),o=this.coplanarPoint(td).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new ll,Fc=new Q;class yp{constructor(e=new Qa,n=new Qa,a=new Qa,o=new Qa,c=new Qa,f=new Qa){this.planes=[e,n,a,o,c,f]}set(e,n,a,o,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=fa){const a=this.planes,o=e.elements,c=o[0],f=o[1],h=o[2],p=o[3],d=o[4],g=o[5],v=o[6],y=o[7],x=o[8],b=o[9],E=o[10],S=o[11],_=o[12],R=o[13],w=o[14],L=o[15];if(a[0].setComponents(p-c,y-d,S-x,L-_).normalize(),a[1].setComponents(p+c,y+d,S+x,L+_).normalize(),a[2].setComponents(p+f,y+g,S+b,L+R).normalize(),a[3].setComponents(p-f,y-g,S-b,L-R).normalize(),a[4].setComponents(p-h,y-v,S-E,L-w).normalize(),n===fa)a[5].setComponents(p+h,y+v,S+E,L+w).normalize();else if(n===hu)a[5].setComponents(h,v,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Fc.x=o.normal.x>0?e.max.x:e.min.x,Fc.y=o.normal.y>0?e.max.y:e.min.y,Fc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends va{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new Q,pu=new Q,Bv=new Wt,qo=new yu,Hc=new ll,nd=new Q,zv=new Q;class XE extends bn{constructor(e=new mi,n=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)du.fromBufferAttribute(n,o-1),pu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=du.distanceTo(pu);e.setAttribute("lineDistance",new Sn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Hc.copy(a.boundingSphere),Hc.applyMatrix4(o),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;Bv.copy(o).invert(),qo.copy(e.ray).applyMatrix4(Bv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,g=a.index,y=a.attributes.position;if(g!==null){const x=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let E=x,S=b-1;E<S;E+=d){const _=g.getX(E),R=g.getX(E+1),w=Gc(this,e,qo,p,_,R,E);w&&n.push(w)}if(this.isLineLoop){const E=g.getX(b-1),S=g.getX(x),_=Gc(this,e,qo,p,E,S,b-1);_&&n.push(_)}}else{const x=Math.max(0,f.start),b=Math.min(y.count,f.start+f.count);for(let E=x,S=b-1;E<S;E+=d){const _=Gc(this,e,qo,p,E,E+1,E);_&&n.push(_)}if(this.isLineLoop){const E=Gc(this,e,qo,p,b-1,x,b-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gc(s,e,n,a,o,c,f){const h=s.geometry.attributes.position;if(du.fromBufferAttribute(h,o),pu.fromBufferAttribute(h,c),n.distanceSqToSegment(du,pu,nd,zv)>a)return;nd.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(nd);if(!(d<e.near||d>e.far))return{distance:d,point:zv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const Fv=new Q,Hv=new Q;class Gv extends XE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Fv.fromBufferAttribute(n,o),Hv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Fv.distanceTo(Hv);e.setAttribute("lineDistance",new Sn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zo extends va{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vv=new Wt,ep=new yu,Vc=new ll,kc=new Q;class id extends bn{constructor(e=new mi,n=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Vc.copy(a.boundingSphere),Vc.applyMatrix4(o),Vc.radius+=c,e.ray.intersectsSphere(Vc)===!1)return;Vv.copy(o).invert(),ep.copy(e.ray).applyMatrix4(Vv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,v=a.attributes.position;if(d!==null){const y=Math.max(0,f.start),x=Math.min(d.count,f.start+f.count);for(let b=y,E=x;b<E;b++){const S=d.getX(b);kc.fromBufferAttribute(v,S),kv(kc,S,p,o,e,n,this)}}else{const y=Math.max(0,f.start),x=Math.min(v.count,f.start+f.count);for(let b=y,E=x;b<E;b++)kc.fromBufferAttribute(v,b),kv(kc,b,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function kv(s,e,n,a,o,c,f){const h=ep.distanceSqToPoint(s);if(h<n){const p=new Q;ep.closestPointToPoint(s,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class hy extends Bn{constructor(e,n,a=Nr,o,c,f,h=Ei,p=Ei,d,g=el){if(g!==el&&g!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,f,h,p,g,a,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xp extends mi{constructor(e=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],f=[],h=[],p=[],d=new Q,g=new at;f.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let v=0,y=3;v<=n;v++,y+=3){const x=a+v/n*o;d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.push(d.x,d.y,d.z),h.push(0,0,1),g.x=(f[y]/e+1)/2,g.y=(f[y+1]/e+1)/2,p.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new Sn(f,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xu extends mi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,f=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,g=p+1,v=e/h,y=n/p,x=[],b=[],E=[],S=[];for(let _=0;_<g;_++){const R=_*y-f;for(let w=0;w<d;w++){const L=w*v-c;b.push(L,-R,0),E.push(0,0,1),S.push(w/h),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let R=0;R<h;R++){const w=R+d*_,L=R+d*(_+1),F=R+1+d*(_+1),B=R+1+d*_;x.push(w,L,B),x.push(L,F,B)}this.setIndex(x),this.setAttribute("position",new Sn(b,3)),this.setAttribute("normal",new Sn(E,3)),this.setAttribute("uv",new Sn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class dy extends va{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new dt(16777215),this.specular=new dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ty,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jE extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WE extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mu={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qE{constructor(e,n,a){const o=this;let c=!1,f=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return d.push(g,v),this},this.removeHandler=function(g){const v=d.indexOf(g);return v!==-1&&d.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=d.length;v<y;v+=2){const x=d[v],b=d[v+1];if(x.global&&(x.lastIndex=0),x.test(g))return b}return null}}}const py=new qE;class ks{constructor(e){this.manager=e!==void 0?e:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const la={};class YE extends Error{constructor(e,n){super(e),this.response=n}}class my extends ks{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=mu.get(e);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(la[e]!==void 0){la[e].push({onLoad:n,onProgress:a,onError:o});return}la[e]=[],la[e].push({onLoad:n,onProgress:a,onError:o});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,p=this.responseType;fetch(f).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=la[e],v=d.body.getReader(),y=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=y?parseInt(y):0,b=x!==0;let E=0;const S=new ReadableStream({start(_){R();function R(){v.read().then(({done:w,value:L})=>{if(w)_.close();else{E+=L.byteLength;const F=new ProgressEvent("progress",{lengthComputable:b,loaded:E,total:x});for(let B=0,z=g.length;B<z;B++){const k=g[B];k.onProgress&&k.onProgress(F)}_.enqueue(L),R()}},w=>{_.error(w)})}}});return new Response(S)}else throw new YE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return d.json();default:if(h==="")return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(h),y=v&&v[1]?v[1].toLowerCase():void 0,x=new TextDecoder(y);return d.arrayBuffer().then(b=>x.decode(b))}}}).then(d=>{mu.add(e,d);const g=la[e];delete la[e];for(let v=0,y=g.length;v<y;v++){const x=g[v];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=la[e];if(g===void 0)throw this.manager.itemError(e),d;delete la[e];for(let v=0,y=g.length;v<y;v++){const x=g[v];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ZE extends ks{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=mu.get(e);if(f!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(f),c.manager.itemEnd(e)},0),f;const h=nl("img");function p(){g(),mu.add(e,this),n&&n(this),c.manager.itemEnd(e)}function d(v){g(),o&&o(v),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(e),h.src=e,h}}class KE extends ks{constructor(e){super(e)}load(e,n,a,o){const c=new Bn,f=new ZE(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class gy extends bn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ad=new Wt,Xv=new Q,jv=new Q;class QE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Xv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xv),jv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(jv),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vy extends uy{constructor(e=-1,n=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,f=a+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $E extends QE{constructor(){super(new vy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class JE extends gy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new $E}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eT extends gy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class tT{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class nT extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Wv{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iT extends Br{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function qv(s,e,n,a){const o=aT(a);switch(n){case Y_:return s*e;case K_:return s*e;case Q_:return s*e*2;case $_:return s*e/o.components*o.byteLength;case pp:return s*e/o.components*o.byteLength;case J_:return s*e*2/o.components*o.byteLength;case mp:return s*e*2/o.components*o.byteLength;case Z_:return s*e*3/o.components*o.byteLength;case Mi:return s*e*4/o.components*o.byteLength;case gp:return s*e*4/o.components*o.byteLength;case $c:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Dd:return Math.max(s,16)*Math.max(e,8)/4;case wd:case Cd:return Math.max(s,8)*Math.max(e,8)/2;case Ld:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nu:case Yd:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ey:case Kd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aT(s){switch(s){case ga:case j_:return{byteLength:1,components:1};case $o:case W_:case sl:return{byteLength:2,components:1};case hp:case dp:return{byteLength:2,components:4};case Nr:case fp:case ua:return{byteLength:4,components:1};case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _y(){let s=null,e=!1,n=null,a=null;function o(c,f){n(c,f),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function rT(s){const e=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,d){const g=p.array,v=p.updateRanges;if(s.bindBuffer(d,h),v.length===0)s.bufferSubData(d,0,g);else{v.sort((x,b)=>x.start-b.start);let y=0;for(let x=1;x<v.length;x++){const b=v[y],E=v[x];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++y,v[y]=E)}v.length=y+1;for(let x=0,b=v.length;x<b;x++){const E=v[x];s.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:f}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_T=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",BT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:sT,alphahash_pars_fragment:oT,alphamap_fragment:lT,alphamap_pars_fragment:cT,alphatest_fragment:uT,alphatest_pars_fragment:fT,aomap_fragment:hT,aomap_pars_fragment:dT,batching_pars_vertex:pT,batching_vertex:mT,begin_vertex:gT,beginnormal_vertex:vT,bsdfs:_T,iridescence_fragment:yT,bumpmap_pars_fragment:xT,clipping_planes_fragment:ST,clipping_planes_pars_fragment:bT,clipping_planes_pars_vertex:MT,clipping_planes_vertex:ET,color_fragment:TT,color_pars_fragment:AT,color_pars_vertex:wT,color_vertex:RT,common:CT,cube_uv_reflection_fragment:DT,defaultnormal_vertex:LT,displacementmap_pars_vertex:UT,displacementmap_vertex:NT,emissivemap_fragment:PT,emissivemap_pars_fragment:OT,colorspace_fragment:IT,colorspace_pars_fragment:BT,envmap_fragment:zT,envmap_common_pars_fragment:FT,envmap_pars_fragment:HT,envmap_pars_vertex:GT,envmap_physical_pars_fragment:$T,envmap_vertex:VT,fog_vertex:kT,fog_pars_vertex:XT,fog_fragment:jT,fog_pars_fragment:WT,gradientmap_pars_fragment:qT,lightmap_pars_fragment:YT,lights_lambert_fragment:ZT,lights_lambert_pars_fragment:KT,lights_pars_begin:QT,lights_toon_fragment:JT,lights_toon_pars_fragment:e1,lights_phong_fragment:t1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:a1,lights_fragment_begin:r1,lights_fragment_maps:s1,lights_fragment_end:o1,logdepthbuf_fragment:l1,logdepthbuf_pars_fragment:c1,logdepthbuf_pars_vertex:u1,logdepthbuf_vertex:f1,map_fragment:h1,map_pars_fragment:d1,map_particle_fragment:p1,map_particle_pars_fragment:m1,metalnessmap_fragment:g1,metalnessmap_pars_fragment:v1,morphinstance_vertex:_1,morphcolor_vertex:y1,morphnormal_vertex:x1,morphtarget_pars_vertex:S1,morphtarget_vertex:b1,normal_fragment_begin:M1,normal_fragment_maps:E1,normal_pars_fragment:T1,normal_pars_vertex:A1,normal_vertex:w1,normalmap_pars_fragment:R1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:U1,opaque_fragment:N1,packing:P1,premultiplied_alpha_fragment:O1,project_vertex:I1,dithering_fragment:B1,dithering_pars_fragment:z1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:V1,shadowmap_vertex:k1,shadowmask_pars_fragment:X1,skinbase_vertex:j1,skinning_pars_vertex:W1,skinning_vertex:q1,skinnormal_vertex:Y1,specularmap_fragment:Z1,specularmap_pars_fragment:K1,tonemapping_fragment:Q1,tonemapping_pars_fragment:$1,transmission_fragment:J1,transmission_pars_fragment:eA,uv_pars_fragment:tA,uv_pars_vertex:nA,uv_vertex:iA,worldpos_vertex:aA,background_vert:rA,background_frag:sA,backgroundCube_vert:oA,backgroundCube_frag:lA,cube_vert:cA,cube_frag:uA,depth_vert:fA,depth_frag:hA,distanceRGBA_vert:dA,distanceRGBA_frag:pA,equirect_vert:mA,equirect_frag:gA,linedashed_vert:vA,linedashed_frag:_A,meshbasic_vert:yA,meshbasic_frag:xA,meshlambert_vert:SA,meshlambert_frag:bA,meshmatcap_vert:MA,meshmatcap_frag:EA,meshnormal_vert:TA,meshnormal_frag:AA,meshphong_vert:wA,meshphong_frag:RA,meshphysical_vert:CA,meshphysical_frag:DA,meshtoon_vert:LA,meshtoon_frag:UA,points_vert:NA,points_frag:PA,shadow_vert:OA,shadow_frag:IA,sprite_vert:BA,sprite_frag:zA},Ue={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Li={basic:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:In([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:In([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:In([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new dt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:In([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:In([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:In([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:In([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:In([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:In([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:In([Ue.common,Ue.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:In([Ue.lights,Ue.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Li.physical={uniforms:In([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Xc={r:0,b:0,g:0},Tr=new Ii,FA=new Wt;function HA(s,e,n,a,o,c,f){const h=new dt(0);let p=c===!0?0:1,d,g,v=null,y=0,x=null;function b(w){let L=w.isScene===!0?w.background:null;return L&&L.isTexture&&(L=(w.backgroundBlurriness>0?n:e).get(L)),L}function E(w){let L=!1;const F=b(w);F===null?_(h,p):F&&F.isColor&&(_(F,1),L=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(w,L){const F=b(L);F&&(F.isCubeTexture||F.mapping===_u)?(g===void 0&&(g=new ai(new cl(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Fs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Tr.copy(L.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(Tr)),g.material.toneMapped=bt.getTransfer(F.colorSpace)!==It,(v!==F||y!==F.version||x!==s.toneMapping)&&(g.material.needsUpdate=!0,v=F,y=F.version,x=s.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(d===void 0&&(d=new ai(new xu(2,2),new tr({name:"BackgroundMaterial",uniforms:Fs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=F,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=bt.getTransfer(F.colorSpace)!==It,F.matrixAutoUpdate===!0&&F.updateMatrix(),d.material.uniforms.uvTransform.value.copy(F.matrix),(v!==F||y!==F.version||x!==s.toneMapping)&&(d.material.needsUpdate=!0,v=F,y=F.version,x=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function _(w,L){w.getRGB(Xc,cy(s)),a.buffers.color.setClear(Xc.r,Xc.g,Xc.b,L,f)}function R(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,L=1){h.set(w),p=L,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,_(h,p)},render:E,addToRenderList:S,dispose:R}}function GA(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=y(null);let c=o,f=!1;function h(D,G,ce,oe,me){let fe=!1;const O=v(oe,ce,G);c!==O&&(c=O,d(c.object)),fe=x(D,oe,ce,me),fe&&b(D,oe,ce,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,L(D,G,ce,oe),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function p(){return s.createVertexArray()}function d(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function v(D,G,ce){const oe=ce.wireframe===!0;let me=a[D.id];me===void 0&&(me={},a[D.id]=me);let fe=me[G.id];fe===void 0&&(fe={},me[G.id]=fe);let O=fe[oe];return O===void 0&&(O=y(p()),fe[oe]=O),O}function y(D){const G=[],ce=[],oe=[];for(let me=0;me<n;me++)G[me]=0,ce[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ce,attributeDivisors:oe,object:D,attributes:{},index:null}}function x(D,G,ce,oe){const me=c.attributes,fe=G.attributes;let O=0;const Z=ce.getAttributes();for(const j in Z)if(Z[j].location>=0){const N=me[j];let ee=fe[j];if(ee===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;O++}return c.attributesNum!==O||c.index!==oe}function b(D,G,ce,oe){const me={},fe=G.attributes;let O=0;const Z=ce.getAttributes();for(const j in Z)if(Z[j].location>=0){let N=fe[j];N===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),me[j]=ee,O++}c.attributes=me,c.attributesNum=O,c.index=oe}function E(){const D=c.newAttributes;for(let G=0,ce=D.length;G<ce;G++)D[G]=0}function S(D){_(D,0)}function _(D,G){const ce=c.newAttributes,oe=c.enabledAttributes,me=c.attributeDivisors;ce[D]=1,oe[D]===0&&(s.enableVertexAttribArray(D),oe[D]=1),me[D]!==G&&(s.vertexAttribDivisor(D,G),me[D]=G)}function R(){const D=c.newAttributes,G=c.enabledAttributes;for(let ce=0,oe=G.length;ce<oe;ce++)G[ce]!==D[ce]&&(s.disableVertexAttribArray(ce),G[ce]=0)}function w(D,G,ce,oe,me,fe,O){O===!0?s.vertexAttribIPointer(D,G,ce,me,fe):s.vertexAttribPointer(D,G,ce,oe,me,fe)}function L(D,G,ce,oe){E();const me=oe.attributes,fe=ce.getAttributes(),O=G.defaultAttributeValues;for(const Z in fe){const j=fe[Z];if(j.location>=0){let be=me[Z];if(be===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),be!==void 0){const N=be.normalized,ee=be.itemSize,ye=e.get(be);if(ye===void 0)continue;const Me=ye.buffer,J=ye.type,ge=ye.bytesPerElement,Se=J===s.INT||J===s.UNSIGNED_INT||be.gpuType===fp;if(be.isInterleavedBufferAttribute){const we=be.data,Oe=we.stride,ot=be.offset;if(we.isInstancedInterleavedBuffer){for(let Ke=0;Ke<j.locationSize;Ke++)_(j.location+Ke,we.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ke=0;Ke<j.locationSize;Ke++)S(j.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Ke=0;Ke<j.locationSize;Ke++)w(j.location+Ke,ee/j.locationSize,J,N,Oe*ge,(ot+ee/j.locationSize*Ke)*ge,Se)}else{if(be.isInstancedBufferAttribute){for(let we=0;we<j.locationSize;we++)_(j.location+we,be.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let we=0;we<j.locationSize;we++)S(j.location+we);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let we=0;we<j.locationSize;we++)w(j.location+we,ee/j.locationSize,J,N,ee*ge,ee/j.locationSize*we*ge,Se)}}else if(O!==void 0){const N=O[Z];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(j.location,N);break;case 3:s.vertexAttrib3fv(j.location,N);break;case 4:s.vertexAttrib4fv(j.location,N);break;default:s.vertexAttrib1fv(j.location,N)}}}}R()}function F(){k();for(const D in a){const G=a[D];for(const ce in G){const oe=G[ce];for(const me in oe)g(oe[me].object),delete oe[me];delete G[ce]}delete a[D]}}function B(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const ce in G){const oe=G[ce];for(const me in oe)g(oe[me].object),delete oe[me];delete G[ce]}delete a[D.id]}function z(D){for(const G in a){const ce=a[G];if(ce[D.id]===void 0)continue;const oe=ce[D.id];for(const me in oe)g(oe[me].object),delete oe[me];delete ce[D.id]}}function k(){U(),f=!0,c!==o&&(c=o,d(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:S,disableUnusedAttributes:R}}function VA(s,e,n){let a;function o(d){a=d}function c(d,g){s.drawArrays(a,d,g),n.update(g,a,1)}function f(d,g,v){v!==0&&(s.drawArraysInstanced(a,d,g,v),n.update(g,a,v))}function h(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,v);let x=0;for(let b=0;b<v;b++)x+=g[b];n.update(x,a,1)}function p(d,g,v,y){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<d.length;b++)f(d[b],g[b],y[b]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,g,0,y,0,v);let b=0;for(let E=0;E<v;E++)b+=g[E]*y[E];n.update(b,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function kA(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==Mi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const k=z===sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ga&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ua&&!k)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:L,vertexTextures:F,maxSamples:B}}function XA(s){const e=this;let n=null,a=0,o=!1,c=!1;const f=new Qa,h=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const x=v.length!==0||y||a!==0||o;return o=y,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){n=g(v,y,0)},this.setState=function(v,y,x){const b=v.clippingPlanes,E=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!o||b===null||b.length===0||c&&!S)c?g(null):d();else{const R=c?0:a,w=R*4;let L=_.clippingState||null;p.value=L,L=g(b,y,w,x);for(let F=0;F!==w;++F)L[F]=n[F];_.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,y,x,b){const E=v!==null?v.length:0;let S=null;if(E!==0){if(S=p.value,b!==!0||S===null){const _=x+E*4,R=y.matrixWorldInverse;h.getNormalMatrix(R),(S===null||S.length<_)&&(S=new Float32Array(_));for(let w=0,L=x;w!==E;++w,L+=4)f.copy(v[w]).applyMatrix4(R,h),f.normal.toArray(S,L),S[L+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function jA(s){let e=new WeakMap;function n(f,h){return h===Ed?f.mapping=Is:h===Td&&(f.mapping=Bs),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===Ed||h===Td)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const d=new FE(p.height);return d.fromEquirectangularTexture(s,f),e.set(f,d),f.addEventListener("dispose",o),n(d.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Ds=4,Yv=[.125,.215,.35,.446,.526,.582],Cr=20,rd=new vy,Zv=new dt;let sd=null,od=0,ld=0,cd=!1;const wr=(1+Math.sqrt(5))/2,Rs=1/wr,Kv=[new Q(-wr,Rs,0),new Q(wr,Rs,0),new Q(-Rs,0,wr),new Q(Rs,0,wr),new Q(0,wr,-Rs),new Q(0,wr,Rs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],WA=new Q;class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,o=100,c={}){const{size:f=256,position:h=WA}=c;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,jc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:sl,format:Mi,colorSpace:zs,depthBuffer:!1},o=$v(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qA(c)),this._blurMaterial=YA(c,e,n)}return o}_compileMaterial(e){const n=new ai(this._lodPlanes[0],e);this._renderer.compile(n,rd)}_sceneToCubeUV(e,n,a,o,c){const p=new pi(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(Zv),v.toneMapping=er,v.autoClear=!1;const b=new _p({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),E=new ai(new cl,b);let S=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,S=!0):(b.color.copy(Zv),S=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(p.up.set(0,d[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[R],c.y,c.z)):w===1?(p.up.set(0,0,d[R]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[R],c.z)):(p.up.set(0,d[R],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[R]));const L=this._cubeSize;jc(o,w*L,R>2?L:0,L,L),v.setRenderTarget(o),S&&v.render(E,p),v.render(e,p)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=y,e.background=_}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Is||e.mapping===Bs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=e_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new ai(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;jc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(f,rd)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Kv[(o-c-1)%Kv.length];this._blur(e,c-1,c,f,h)}n.autoClear=a}_blur(e,n,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,a,o,"latitudinal",c),this._halfBlur(f,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,f,h){const p=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ai(this._lodPlanes[o],d),y=d.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Cr-1),E=c/b,S=isFinite(c)?1+Math.floor(g*E):Cr;S>Cr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const _=[];let R=0;for(let z=0;z<Cr;++z){const k=z/E,U=Math.exp(-k*k/2);_.push(U),z===0?R+=U:z<S&&(R+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/R;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:w}=this;y.dTheta.value=b,y.mipInt.value=w-a;const L=this._sizeLods[o],F=3*L*(o>w-Ds?o-w+Ds:0),B=4*(this._cubeSize-L);jc(n,F,B,3*L,2*L),p.setRenderTarget(n),p.render(v,rd)}}function qA(s){const e=[],n=[],a=[];let o=s;const c=s-Ds+1+Yv.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let p=1/h;f>s-Ds?p=Yv[f-s+Ds-1]:f===0&&(p=0),a.push(p);const d=1/(h-2),g=-d,v=1+d,y=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,b=6,E=3,S=2,_=1,R=new Float32Array(E*b*x),w=new Float32Array(S*b*x),L=new Float32Array(_*b*x);for(let B=0;B<x;B++){const z=B%3*2/3-1,k=B>2?0:-1,U=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];R.set(U,E*b*B),w.set(y,S*b*B);const D=[B,B,B,B,B,B];L.set(D,_*b*B)}const F=new mi;F.setAttribute("position",new Pi(R,E)),F.setAttribute("uv",new Pi(w,S)),F.setAttribute("faceIndex",new Pi(L,_)),e.push(F),o>Ds&&o--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function $v(s,e,n){const a=new Pr(s,e,n);return a.texture.mapping=_u,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function jc(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function YA(s,e,n){const a=new Float32Array(Cr),o=new Q(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Jv(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function e_(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Sp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZA(s){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===Ed||p===Td,g=p===Is||p===Bs;if(d||g){let v=e.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return n===null&&(n=new Qv(s)),v=d?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return d&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new Qv(s)),v=d?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function KA(s){const e={};function n(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&au("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function QA(s,e,n,a){const o={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete o[y.id];const x=c.get(y);x&&(e.remove(x),c.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function h(v,y){return o[y.id]===!0||(y.addEventListener("dispose",f),o[y.id]=!0,n.memory.geometries++),y}function p(v){const y=v.attributes;for(const x in y)e.update(y[x],s.ARRAY_BUFFER)}function d(v){const y=[],x=v.index,b=v.attributes.position;let E=0;if(x!==null){const R=x.array;E=x.version;for(let w=0,L=R.length;w<L;w+=3){const F=R[w+0],B=R[w+1],z=R[w+2];y.push(F,B,B,z,z,F)}}else if(b!==void 0){const R=b.array;E=b.version;for(let w=0,L=R.length/3-1;w<L;w+=3){const F=w+0,B=w+1,z=w+2;y.push(F,B,B,z,z,F)}}else return;const S=new(iy(y)?ly:oy)(y,1);S.version=E;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function g(v){const y=c.get(v);if(y){const x=v.index;x!==null&&y.version<x.version&&d(v)}else d(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function $A(s,e,n){let a;function o(y){a=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function p(y,x){s.drawElements(a,x,c,y*f),n.update(x,a,1)}function d(y,x,b){b!==0&&(s.drawElementsInstanced(a,x,c,y*f,b),n.update(x,a,b))}function g(y,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,y,0,b);let S=0;for(let _=0;_<b;_++)S+=x[_];n.update(S,a,1)}function v(y,x,b,E){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)d(y[_]/f,x[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,c,y,0,E,0,b);let _=0;for(let R=0;R<b;R++)_+=x[R]*E[R];n.update(_,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function JA(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function ew(s,e,n){const a=new WeakMap,o=new Jt;function c(f,h,p){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let y=a.get(h);if(y===void 0||y.count!==v){let D=function(){k.dispose(),a.delete(h),h.removeEventListener("dispose",D)};var x=D;y!==void 0&&y.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),E===!0&&(L=2),S===!0&&(L=3);let F=h.attributes.position.count*L,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*B*4*v),k=new ay(z,F,B,v);k.type=ua,k.needsUpdate=!0;const U=L*4;for(let G=0;G<v;G++){const ce=_[G],oe=R[G],me=w[G],fe=F*B*4*G;for(let O=0;O<ce.count;O++){const Z=O*U;b===!0&&(o.fromBufferAttribute(ce,O),z[fe+Z+0]=o.x,z[fe+Z+1]=o.y,z[fe+Z+2]=o.z,z[fe+Z+3]=0),E===!0&&(o.fromBufferAttribute(oe,O),z[fe+Z+4]=o.x,z[fe+Z+5]=o.y,z[fe+Z+6]=o.z,z[fe+Z+7]=0),S===!0&&(o.fromBufferAttribute(me,O),z[fe+Z+8]=o.x,z[fe+Z+9]=o.y,z[fe+Z+10]=o.z,z[fe+Z+11]=me.itemSize===4?o.w:1)}}y={count:v,texture:k,size:new at(F,B)},a.set(h,y),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const E=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function tw(s,e,n,a){let o=new WeakMap;function c(p){const d=a.render.frame,g=p.geometry,v=e.get(p,g);if(o.get(v)!==d&&(e.update(v),o.set(v,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==d&&(y.update(),o.set(y,d))}return v}function f(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:f}}const yy=new Bn,t_=new hy(1,1),xy=new ay,Sy=new bE,by=new fy,n_=[],i_=[],a_=new Float32Array(16),r_=new Float32Array(9),s_=new Float32Array(4);function Xs(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=n_[o];if(c===void 0&&(c=new Float32Array(o),n_[o]=c),e!==0){a.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=n,s[f].toArray(c,h)}return c}function dn(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function pn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function Su(s,e){let n=i_[e];n===void 0&&(n=new Int32Array(e),i_[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function nw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function iw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;s.uniform2fv(this.addr,e),pn(n,e)}}function aw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dn(n,e))return;s.uniform3fv(this.addr,e),pn(n,e)}}function rw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;s.uniform4fv(this.addr,e),pn(n,e)}}function sw(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;s_.set(a),s.uniformMatrix2fv(this.addr,!1,s_),pn(n,a)}}function ow(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;r_.set(a),s.uniformMatrix3fv(this.addr,!1,r_),pn(n,a)}}function lw(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(dn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(n,e)}else{if(dn(n,a))return;a_.set(a),s.uniformMatrix4fv(this.addr,!1,a_),pn(n,a)}}function cw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function uw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;s.uniform2iv(this.addr,e),pn(n,e)}}function fw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;s.uniform3iv(this.addr,e),pn(n,e)}}function hw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;s.uniform4iv(this.addr,e),pn(n,e)}}function dw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function pw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;s.uniform2uiv(this.addr,e),pn(n,e)}}function mw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;s.uniform3uiv(this.addr,e),pn(n,e)}}function gw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;s.uniform4uiv(this.addr,e),pn(n,e)}}function vw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(t_.compareFunction=ny,c=t_):c=yy,n.setTexture2D(e||c,o)}function _w(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Sy,o)}function yw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||by,o)}function xw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||xy,o)}function Sw(s){switch(s){case 5126:return nw;case 35664:return iw;case 35665:return aw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return lw;case 5124:case 35670:return cw;case 35667:case 35671:return uw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return dw;case 36294:return pw;case 36295:return mw;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return xw}}function bw(s,e){s.uniform1fv(this.addr,e)}function Mw(s,e){const n=Xs(e,this.size,2);s.uniform2fv(this.addr,n)}function Ew(s,e){const n=Xs(e,this.size,3);s.uniform3fv(this.addr,n)}function Tw(s,e){const n=Xs(e,this.size,4);s.uniform4fv(this.addr,n)}function Aw(s,e){const n=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function ww(s,e){const n=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Rw(s,e){const n=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Cw(s,e){s.uniform1iv(this.addr,e)}function Dw(s,e){s.uniform2iv(this.addr,e)}function Lw(s,e){s.uniform3iv(this.addr,e)}function Uw(s,e){s.uniform4iv(this.addr,e)}function Nw(s,e){s.uniform1uiv(this.addr,e)}function Pw(s,e){s.uniform2uiv(this.addr,e)}function Ow(s,e){s.uniform3uiv(this.addr,e)}function Iw(s,e){s.uniform4uiv(this.addr,e)}function Bw(s,e,n){const a=this.cache,o=e.length,c=Su(n,o);dn(a,c)||(s.uniform1iv(this.addr,c),pn(a,c));for(let f=0;f!==o;++f)n.setTexture2D(e[f]||yy,c[f])}function zw(s,e,n){const a=this.cache,o=e.length,c=Su(n,o);dn(a,c)||(s.uniform1iv(this.addr,c),pn(a,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||Sy,c[f])}function Fw(s,e,n){const a=this.cache,o=e.length,c=Su(n,o);dn(a,c)||(s.uniform1iv(this.addr,c),pn(a,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||by,c[f])}function Hw(s,e,n){const a=this.cache,o=e.length,c=Su(n,o);dn(a,c)||(s.uniform1iv(this.addr,c),pn(a,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||xy,c[f])}function Gw(s){switch(s){case 5126:return bw;case 35664:return Mw;case 35665:return Ew;case 35666:return Tw;case 35674:return Aw;case 35675:return ww;case 35676:return Rw;case 5124:case 35670:return Cw;case 35667:case 35671:return Dw;case 35668:case 35672:return Lw;case 35669:case 35673:return Uw;case 5125:return Nw;case 36294:return Pw;case 36295:return Ow;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Vw{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Sw(n.type)}}class kw{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gw(n.type)}}class Xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function o_(s,e){s.seq.push(e),s.map[e.id]=e}function jw(s,e,n){const a=s.name,o=a.length;for(ud.lastIndex=0;;){const c=ud.exec(a),f=ud.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&f+2===o){o_(n,d===void 0?new Vw(h,s,e):new kw(h,s,e));break}else{let v=n.map[h];v===void 0&&(v=new Xw(h),o_(n,v)),n=v}}}class su{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),f=e.getUniformLocation(n,c.name);jw(c,f,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&a.push(f)}return a}}function l_(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const Ww=37297;let qw=0;function Yw(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const c_=new st;function Zw(s){bt._getMatrix(c_,bt.workingColorSpace,s);const e=`mat3( ${c_.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(s)){case fu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function u_(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+Yw(s.getShaderSource(e),f)}else return o}function Kw(s,e){const n=Zw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Qw(s,e){let n;switch(e){case qM:n="Linear";break;case YM:n="Reinhard";break;case ZM:n="Cineon";break;case KM:n="ACESFilmic";break;case $M:n="AgX";break;case JM:n="Neutral";break;case QM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wc=new Q;function $w(){bt.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),n=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function eR(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function tR(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return n}function Ko(s){return s!==""}function f_(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nR=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(s){return s.replace(nR,aR)}const iR=new Map;function aR(s,e){let n=lt[e];if(n===void 0){const a=iR.get(e);if(a!==void 0)n=lt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return tp(n)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d_(s){return s.replace(rR,sR)}function sR(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function p_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===AM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function lR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Bs:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function uR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case up:e="ENVMAP_BLENDING_MULTIPLY";break;case jM:e="ENVMAP_BLENDING_MIX";break;case WM:e="ENVMAP_BLENDING_ADD";break}return e}function fR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function hR(s,e,n,a){const o=s.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=oR(n),d=lR(n),g=cR(n),v=uR(n),y=fR(n),x=Jw(n),b=eR(c),E=o.createProgram();let S,_,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ko).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ko).join(`
`),_.length>0&&(_+=`
`)):(S=[p_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),_=[p_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?lt.tonemapping_pars_fragment:"",n.toneMapping!==er?Qw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Kw("linearToOutputTexel",n.outputColorSpace),$w(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),f=tp(f),f=f_(f,n),f=h_(f,n),h=tp(h),h=f_(h,n),h=h_(h,n),f=d_(f),h=d_(h),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=R+S+f,L=R+_+h,F=l_(o,o.VERTEX_SHADER,w),B=l_(o,o.FRAGMENT_SHADER,L);o.attachShader(E,F),o.attachShader(E,B),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function z(G){if(s.debug.checkShaderErrors){const ce=o.getProgramInfoLog(E).trim(),oe=o.getShaderInfoLog(F).trim(),me=o.getShaderInfoLog(B).trim();let fe=!0,O=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,F,B);else{const Z=u_(o,F,"vertex"),j=u_(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ce+`
`+Z+`
`+j)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(oe===""||me==="")&&(O=!1);O&&(G.diagnostics={runnable:fe,programLog:ce,vertexShader:{log:oe,prefix:S},fragmentShader:{log:me,prefix:_}})}o.deleteShader(F),o.deleteShader(B),k=new su(o,E),U=tR(o,E)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(E,Ww)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=F,this.fragmentShader=B,this}let dR=0;class pR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new mR(e),n.set(e,a)),a}}class mR{constructor(e){this.id=dR++,this.code=e,this.usedTimes=0}}function gR(s,e,n,a,o,c,f){const h=new ry,p=new pR,d=new Set,g=[],v=o.logarithmicDepthBuffer,y=o.vertexTextures;let x=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(U){return d.add(U),U===0?"uv":`uv${U}`}function S(U,D,G,ce,oe){const me=ce.fog,fe=oe.geometry,O=U.isMeshStandardMaterial?ce.environment:null,Z=(U.isMeshStandardMaterial?n:e).get(U.envMap||O),j=Z&&Z.mapping===_u?Z.image.height:null,be=b[U.type];U.precision!==null&&(x=o.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const N=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,ee=N!==void 0?N.length:0;let ye=0;fe.morphAttributes.position!==void 0&&(ye=1),fe.morphAttributes.normal!==void 0&&(ye=2),fe.morphAttributes.color!==void 0&&(ye=3);let Me,J,ge,Se;if(be){const Tt=Li[be];Me=Tt.vertexShader,J=Tt.fragmentShader}else Me=U.vertexShader,J=U.fragmentShader,p.update(U),ge=p.getVertexShaderID(U),Se=p.getFragmentShaderID(U);const we=s.getRenderTarget(),Oe=s.state.buffers.depth.getReversed(),ot=oe.isInstancedMesh===!0,Ke=oe.isBatchedMesh===!0,Gt=!!U.map,zt=!!U.matcap,ft=!!Z,H=!!U.aoMap,zn=!!U.lightMap,_t=!!U.bumpMap,nt=!!U.normalMap,je=!!U.displacementMap,Lt=!!U.emissiveMap,Ve=!!U.metalnessMap,P=!!U.roughnessMap,A=U.anisotropy>0,ne=U.clearcoat>0,xe=U.dispersion>0,Ee=U.iridescence>0,de=U.sheen>0,ze=U.transmission>0,Re=A&&!!U.anisotropyMap,Ce=ne&&!!U.clearcoatMap,yt=ne&&!!U.clearcoatNormalMap,Ae=ne&&!!U.clearcoatRoughnessMap,He=Ee&&!!U.iridescenceMap,Ye=Ee&&!!U.iridescenceThicknessMap,Qe=de&&!!U.sheenColorMap,Ie=de&&!!U.sheenRoughnessMap,ct=!!U.specularMap,tt=!!U.specularColorMap,Ut=!!U.specularIntensityMap,X=ze&&!!U.transmissionMap,Ne=ze&&!!U.thicknessMap,ue=!!U.gradientMap,ve=!!U.alphaMap,Be=U.alphaTest>0,Pe=!!U.alphaHash,it=!!U.extensions;let Vt=er;U.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const nn={shaderID:be,shaderType:U.type,shaderName:U.name,vertexShader:Me,fragmentShader:J,defines:U.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:Ke,batchingColor:Ke&&oe._colorsTexture!==null,instancing:ot,instancingColor:ot&&oe.instanceColor!==null,instancingMorph:ot&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:zs,alphaToCoverage:!!U.alphaToCoverage,map:Gt,matcap:zt,envMap:ft,envMapMode:ft&&Z.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:zn,bumpMap:_t,normalMap:nt,displacementMap:y&&je,emissiveMap:Lt,normalMapObjectSpace:nt&&U.normalMapType===iE,normalMapTangentSpace:nt&&U.normalMapType===ty,metalnessMap:Ve,roughnessMap:P,anisotropy:A,anisotropyMap:Re,clearcoat:ne,clearcoatMap:Ce,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ae,dispersion:xe,iridescence:Ee,iridescenceMap:He,iridescenceThicknessMap:Ye,sheen:de,sheenColorMap:Qe,sheenRoughnessMap:Ie,specularMap:ct,specularColorMap:tt,specularIntensityMap:Ut,transmission:ze,transmissionMap:X,thicknessMap:Ne,gradientMap:ue,opaque:U.transparent===!1&&U.blending===Us&&U.alphaToCoverage===!1,alphaMap:ve,alphaTest:Be,alphaHash:Pe,combine:U.combine,mapUv:Gt&&E(U.map.channel),aoMapUv:H&&E(U.aoMap.channel),lightMapUv:zn&&E(U.lightMap.channel),bumpMapUv:_t&&E(U.bumpMap.channel),normalMapUv:nt&&E(U.normalMap.channel),displacementMapUv:je&&E(U.displacementMap.channel),emissiveMapUv:Lt&&E(U.emissiveMap.channel),metalnessMapUv:Ve&&E(U.metalnessMap.channel),roughnessMapUv:P&&E(U.roughnessMap.channel),anisotropyMapUv:Re&&E(U.anisotropyMap.channel),clearcoatMapUv:Ce&&E(U.clearcoatMap.channel),clearcoatNormalMapUv:yt&&E(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(U.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&E(U.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&E(U.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&E(U.sheenRoughnessMap.channel),specularMapUv:ct&&E(U.specularMap.channel),specularColorMapUv:tt&&E(U.specularColorMap.channel),specularIntensityMapUv:Ut&&E(U.specularIntensityMap.channel),transmissionMapUv:X&&E(U.transmissionMap.channel),thicknessMapUv:Ne&&E(U.thicknessMap.channel),alphaMapUv:ve&&E(U.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(nt||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!fe.attributes.uv&&(Gt||ve),fog:!!me,useFog:U.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Oe,skinning:oe.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Gt&&U.map.isVideoTexture===!0&&bt.getTransfer(U.map.colorSpace)===It,decodeVideoTextureEmissive:Lt&&U.emissiveMap.isVideoTexture===!0&&bt.getTransfer(U.emissiveMap.colorSpace)===It,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ui,flipSided:U.side===qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:it&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&U.extensions.multiDraw===!0||Ke)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return nn.vertexUv1s=d.has(1),nn.vertexUv2s=d.has(2),nn.vertexUv3s=d.has(3),d.clear(),nn}function _(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)D.push(G),D.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(R(D,U),w(D,U),D.push(s.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function R(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function w(U,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reverseDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),U.push(h.mask)}function L(U){const D=b[U.type];let G;if(D){const ce=Li[D];G=OE.clone(ce.uniforms)}else G=U.uniforms;return G}function F(U,D){let G;for(let ce=0,oe=g.length;ce<oe;ce++){const me=g[ce];if(me.cacheKey===D){G=me,++G.usedTimes;break}}return G===void 0&&(G=new hR(s,D,U,c),g.push(G)),G}function B(U){if(--U.usedTimes===0){const D=g.indexOf(U);g[D]=g[g.length-1],g.pop(),U.destroy()}}function z(U){p.remove(U)}function k(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:L,acquireProgram:F,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:k}}function vR(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function o(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function _R(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function m_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function g_(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function f(v,y,x,b,E,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:x,groupOrder:b,renderOrder:v.renderOrder,z:E,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=x,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=E,_.group=S),e++,_}function h(v,y,x,b,E,S){const _=f(v,y,x,b,E,S);x.transmission>0?a.push(_):x.transparent===!0?o.push(_):n.push(_)}function p(v,y,x,b,E,S){const _=f(v,y,x,b,E,S);x.transmission>0?a.unshift(_):x.transparent===!0?o.unshift(_):n.unshift(_)}function d(v,y){n.length>1&&n.sort(v||_R),a.length>1&&a.sort(y||m_),o.length>1&&o.sort(y||m_)}function g(){for(let v=e,y=s.length;v<y;v++){const x=s[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:g,sort:d}}function yR(){let s=new WeakMap;function e(a,o){const c=s.get(a);let f;return c===void 0?(f=new g_,s.set(a,[f])):o>=c.length?(f=new g_,c.push(f)):f=c[o],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function xR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new dt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function SR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let bR=0;function MR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ER(s){const e=new xR,n=SR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Q);const o=new Q,c=new Wt,f=new Wt;function h(d){let g=0,v=0,y=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,b=0,E=0,S=0,_=0,R=0,w=0,L=0,F=0,B=0,z=0;d.sort(MR);for(let U=0,D=d.length;U<D;U++){const G=d[U],ce=G.color,oe=G.intensity,me=G.distance,fe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ce.r*oe,v+=ce.g*oe,y+=ce.b*oe;else if(G.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(G.sh.coefficients[O],oe);z++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,j=n.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,a.directionalShadow[x]=j,a.directionalShadowMap[x]=fe,a.directionalShadowMatrix[x]=G.shadow.matrix,R++}a.directional[x]=O,x++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(ce).multiplyScalar(oe),O.distance=me,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,a.spot[E]=O;const Z=G.shadow;if(G.map&&(a.spotLightMap[F]=G.map,F++,Z.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[E]=Z.matrix,G.castShadow){const j=n.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,a.spotShadow[E]=j,a.spotShadowMap[E]=fe,L++}E++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(ce).multiplyScalar(oe),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=O,S++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const Z=G.shadow,j=n.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,a.pointShadow[b]=j,a.pointShadowMap[b]=fe,a.pointShadowMatrix[b]=G.shadow.matrix,w++}a.point[b]=O,b++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(oe),O.groundColor.copy(G.groundColor).multiplyScalar(oe),a.hemi[_]=O,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ue.LTC_FLOAT_1,a.rectAreaLTC2=Ue.LTC_FLOAT_2):(a.rectAreaLTC1=Ue.LTC_HALF_1,a.rectAreaLTC2=Ue.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=y;const k=a.hash;(k.directionalLength!==x||k.pointLength!==b||k.spotLength!==E||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==R||k.numPointShadows!==w||k.numSpotShadows!==L||k.numSpotMaps!==F||k.numLightProbes!==z)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=S,a.point.length=b,a.hemi.length=_,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=L+F-B,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,k.directionalLength=x,k.pointLength=b,k.spotLength=E,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=R,k.numPointShadows=w,k.numSpotShadows=L,k.numSpotMaps=F,k.numLightProbes=z,a.version=bR++)}function p(d,g){let v=0,y=0,x=0,b=0,E=0;const S=g.matrixWorldInverse;for(let _=0,R=d.length;_<R;_++){const w=d[_];if(w.isDirectionalLight){const L=a.directional[v];L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),v++}else if(w.isSpotLight){const L=a.spot[x];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),x++}else if(w.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),f.identity(),c.copy(w.matrixWorld),c.premultiply(S),f.extractRotation(c),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(w.isPointLight){const L=a.point[y];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),y++}else if(w.isHemisphereLight){const L=a.hemi[E];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(S),E++}}}return{setup:h,setupView:p,state:a}}function v_(s){const e=new ER(s),n=[],a=[];function o(g){d.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function f(g){a.push(g)}function h(){e.setup(n)}function p(g){e.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function TR(s){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let h;return f===void 0?(h=new v_(s),e.set(o,[h])):c>=f.length?(h=new v_(s),f.push(h)):h=f[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const AR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RR(s,e,n){let a=new yp;const o=new at,c=new at,f=new Jt,h=new jE({depthPacking:nE}),p=new WE,d={},g=n.maxTextureSize,v={[ma]:qn,[qn]:ma,[Ui]:Ui},y=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:AR,fragmentShader:wR}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const b=new mi;b.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ai(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k_;let _=this.type;this.render=function(B,z,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const U=s.getRenderTarget(),D=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(Ja),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=_!==ca&&this.type===ca,me=_===ca&&this.type!==ca;for(let fe=0,O=B.length;fe<O;fe++){const Z=B[fe],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const be=j.getFrameExtents();if(o.multiply(be),c.copy(j.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/be.x),o.x=c.x*be.x,j.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/be.y),o.y=c.y*be.y,j.mapSize.y=c.y)),j.map===null||oe===!0||me===!0){const ee=this.type!==ca?{minFilter:Ei,magFilter:Ei}:{};j.map!==null&&j.map.dispose(),j.map=new Pr(o.x,o.y,ee),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const N=j.getViewportCount();for(let ee=0;ee<N;ee++){const ye=j.getViewport(ee);f.set(c.x*ye.x,c.y*ye.y,c.x*ye.z,c.y*ye.w),ce.viewport(f),j.updateMatrices(Z,ee),a=j.getFrustum(),L(z,k,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ca&&R(j,k),j.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(U,D,G)};function R(B,z){const k=e.update(E);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Pr(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(z,null,k,y,E,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(z,null,k,x,E,null)}function w(B,z,k,U){let D=null;const G=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)D=G;else if(D=k.isPointLight===!0?p:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ce=D.uuid,oe=z.uuid;let me=d[ce];me===void 0&&(me={},d[ce]=me);let fe=me[oe];fe===void 0&&(fe=D.clone(),me[oe]=fe,z.addEventListener("dispose",F)),D=fe}if(D.visible=z.visible,D.wireframe=z.wireframe,U===ca?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:v[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,k.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ce=s.properties.get(D);ce.light=k}return D}function L(B,z,k,U,D){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===ca)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const oe=e.update(B),me=B.material;if(Array.isArray(me)){const fe=oe.groups;for(let O=0,Z=fe.length;O<Z;O++){const j=fe[O],be=me[j.materialIndex];if(be&&be.visible){const N=w(B,be,U,D);B.onBeforeShadow(s,B,z,k,oe,N,j),s.renderBufferDirect(k,null,oe,N,B,j),B.onAfterShadow(s,B,z,k,oe,N,j)}}}else if(me.visible){const fe=w(B,me,U,D);B.onBeforeShadow(s,B,z,k,oe,fe,null),s.renderBufferDirect(k,null,oe,fe,B,null),B.onAfterShadow(s,B,z,k,oe,fe,null)}}const ce=B.children;for(let oe=0,me=ce.length;oe<me;oe++)L(ce[oe],z,k,U,D)}function F(B){B.target.removeEventListener("dispose",F);for(const k in d){const U=d[k],D=B.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const CR={[vd]:_d,[yd]:bd,[xd]:Md,[Os]:Sd,[_d]:vd,[bd]:yd,[Md]:xd,[Sd]:Os};function DR(s,e){function n(){let X=!1;const Ne=new Jt;let ue=null;const ve=new Jt(0,0,0,0);return{setMask:function(Be){ue!==Be&&!X&&(s.colorMask(Be,Be,Be,Be),ue=Be)},setLocked:function(Be){X=Be},setClear:function(Be,Pe,it,Vt,nn){nn===!0&&(Be*=Vt,Pe*=Vt,it*=Vt),Ne.set(Be,Pe,it,Vt),ve.equals(Ne)===!1&&(s.clearColor(Be,Pe,it,Vt),ve.copy(Ne))},reset:function(){X=!1,ue=null,ve.set(-1,0,0,0)}}}function a(){let X=!1,Ne=!1,ue=null,ve=null,Be=null;return{setReversed:function(Pe){if(Ne!==Pe){const it=e.get("EXT_clip_control");Pe?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Ne=Pe;const Vt=Be;Be=null,this.setClear(Vt)}},getReversed:function(){return Ne},setTest:function(Pe){Pe?we(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(Pe){ue!==Pe&&!X&&(s.depthMask(Pe),ue=Pe)},setFunc:function(Pe){if(Ne&&(Pe=CR[Pe]),ve!==Pe){switch(Pe){case vd:s.depthFunc(s.NEVER);break;case _d:s.depthFunc(s.ALWAYS);break;case yd:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case xd:s.depthFunc(s.EQUAL);break;case Sd:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Md:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){Be!==Pe&&(Ne&&(Pe=1-Pe),s.clearDepth(Pe),Be=Pe)},reset:function(){X=!1,ue=null,ve=null,Be=null,Ne=!1}}}function o(){let X=!1,Ne=null,ue=null,ve=null,Be=null,Pe=null,it=null,Vt=null,nn=null;return{setTest:function(Tt){X||(Tt?we(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(Tt){Ne!==Tt&&!X&&(s.stencilMask(Tt),Ne=Tt)},setFunc:function(Tt,Yn,mn){(ue!==Tt||ve!==Yn||Be!==mn)&&(s.stencilFunc(Tt,Yn,mn),ue=Tt,ve=Yn,Be=mn)},setOp:function(Tt,Yn,mn){(Pe!==Tt||it!==Yn||Vt!==mn)&&(s.stencilOp(Tt,Yn,mn),Pe=Tt,it=Yn,Vt=mn)},setLocked:function(Tt){X=Tt},setClear:function(Tt){nn!==Tt&&(s.clearStencil(Tt),nn=Tt)},reset:function(){X=!1,Ne=null,ue=null,ve=null,Be=null,Pe=null,it=null,Vt=null,nn=null}}}const c=new n,f=new a,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},y=new WeakMap,x=[],b=null,E=!1,S=null,_=null,R=null,w=null,L=null,F=null,B=null,z=new dt(0,0,0),k=0,U=!1,D=null,G=null,ce=null,oe=null,me=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=Z>=2);let be=null,N={};const ee=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Me=new Jt().fromArray(ee),J=new Jt().fromArray(ye);function ge(X,Ne,ue,ve){const Be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(X,Pe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ue;it++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Ne+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Pe}const Se={};Se[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),we(s.DEPTH_TEST),f.setFunc(Os),_t(!1),nt(dv),we(s.CULL_FACE),H(Ja);function we(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Oe(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function ot(X,Ne){return v[X]!==Ne?(s.bindFramebuffer(X,Ne),v[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(X,Ne){let ue=x,ve=!1;if(X){ue=y.get(Ne),ue===void 0&&(ue=[],y.set(Ne,ue));const Be=X.textures;if(ue.length!==Be.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,it=Be.length;Pe<it;Pe++)ue[Pe]=s.COLOR_ATTACHMENT0+Pe;ue.length=Be.length,ve=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ue)}function Gt(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const zt={[Rr]:s.FUNC_ADD,[RM]:s.FUNC_SUBTRACT,[CM]:s.FUNC_REVERSE_SUBTRACT};zt[DM]=s.MIN,zt[LM]=s.MAX;const ft={[UM]:s.ZERO,[NM]:s.ONE,[PM]:s.SRC_COLOR,[md]:s.SRC_ALPHA,[HM]:s.SRC_ALPHA_SATURATE,[zM]:s.DST_COLOR,[IM]:s.DST_ALPHA,[OM]:s.ONE_MINUS_SRC_COLOR,[gd]:s.ONE_MINUS_SRC_ALPHA,[FM]:s.ONE_MINUS_DST_COLOR,[BM]:s.ONE_MINUS_DST_ALPHA,[GM]:s.CONSTANT_COLOR,[VM]:s.ONE_MINUS_CONSTANT_COLOR,[kM]:s.CONSTANT_ALPHA,[XM]:s.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ne,ue,ve,Be,Pe,it,Vt,nn,Tt){if(X===Ja){E===!0&&(Oe(s.BLEND),E=!1);return}if(E===!1&&(we(s.BLEND),E=!0),X!==wM){if(X!==S||Tt!==U){if((_!==Rr||L!==Rr)&&(s.blendEquation(s.FUNC_ADD),_=Rr,L=Rr),Tt)switch(X){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pv:s.blendFunc(s.ONE,s.ONE);break;case mv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,w=null,F=null,B=null,z.set(0,0,0),k=0,S=X,U=Tt}return}Be=Be||Ne,Pe=Pe||ue,it=it||ve,(Ne!==_||Be!==L)&&(s.blendEquationSeparate(zt[Ne],zt[Be]),_=Ne,L=Be),(ue!==R||ve!==w||Pe!==F||it!==B)&&(s.blendFuncSeparate(ft[ue],ft[ve],ft[Pe],ft[it]),R=ue,w=ve,F=Pe,B=it),(Vt.equals(z)===!1||nn!==k)&&(s.blendColor(Vt.r,Vt.g,Vt.b,nn),z.copy(Vt),k=nn),S=X,U=!1}function zn(X,Ne){X.side===Ui?Oe(s.CULL_FACE):we(s.CULL_FACE);let ue=X.side===qn;Ne&&(ue=!ue),_t(ue),X.blending===Us&&X.transparent===!1?H(Ja):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const ve=X.stencilWrite;h.setTest(ve),ve&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function nt(X){X!==EM?(we(s.CULL_FACE),X!==G&&(X===dv?s.cullFace(s.BACK):X===TM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),G=X}function je(X){X!==ce&&(O&&s.lineWidth(X),ce=X)}function Lt(X,Ne,ue){X?(we(s.POLYGON_OFFSET_FILL),(oe!==Ne||me!==ue)&&(s.polygonOffset(Ne,ue),oe=Ne,me=ue)):Oe(s.POLYGON_OFFSET_FILL)}function Ve(X){X?we(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function P(X){X===void 0&&(X=s.TEXTURE0+fe-1),be!==X&&(s.activeTexture(X),be=X)}function A(X,Ne,ue){ue===void 0&&(be===null?ue=s.TEXTURE0+fe-1:ue=be);let ve=N[ue];ve===void 0&&(ve={type:void 0,texture:void 0},N[ue]=ve),(ve.type!==X||ve.texture!==Ne)&&(be!==ue&&(s.activeTexture(ue),be=ue),s.bindTexture(X,Ne||Se[X]),ve.type=X,ve.texture=Ne)}function ne(){const X=N[be];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function xe(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Me.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function Ie(X){J.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ct(X,Ne){let ue=d.get(Ne);ue===void 0&&(ue=new WeakMap,d.set(Ne,ue));let ve=ue.get(X);ve===void 0&&(ve=s.getUniformBlockIndex(Ne,X.name),ue.set(X,ve))}function tt(X,Ne){const ve=d.get(Ne).get(X);p.get(Ne)!==ve&&(s.uniformBlockBinding(Ne,ve,X.__bindingPointIndex),p.set(Ne,ve))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},be=null,N={},v={},y=new WeakMap,x=[],b=null,E=!1,S=null,_=null,R=null,w=null,L=null,F=null,B=null,z=new dt(0,0,0),k=0,U=!1,D=null,G=null,ce=null,oe=null,me=null,Me.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:we,disable:Oe,bindFramebuffer:ot,drawBuffers:Ke,useProgram:Gt,setBlending:H,setMaterial:zn,setFlipSided:_t,setCullFace:nt,setLineWidth:je,setPolygonOffset:Lt,setScissorTest:Ve,activeTexture:P,bindTexture:A,unbindTexture:ne,compressedTexImage2D:xe,compressedTexImage3D:Ee,texImage2D:He,texImage3D:Ye,updateUBOMapping:ct,uniformBlockBinding:tt,texStorage2D:yt,texStorage3D:Ae,texSubImage2D:de,texSubImage3D:ze,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ce,scissor:Qe,viewport:Ie,reset:Ut}}function LR(s,e,n,a,o,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new at,g=new WeakMap;let v;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,A){return x?new OffscreenCanvas(P,A):nl("canvas")}function E(P,A,ne){let xe=1;const Ee=Ve(P);if((Ee.width>ne||Ee.height>ne)&&(xe=ne/Math.max(Ee.width,Ee.height)),xe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(xe*Ee.width),ze=Math.floor(xe*Ee.height);v===void 0&&(v=b(de,ze));const Re=A?b(de,ze):v;return Re.width=de,Re.height=ze,Re.getContext("2d").drawImage(P,0,0,de,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+de+"x"+ze+")."),Re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),P;return P}function S(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,A,ne,xe,Ee=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=A;if(A===s.RED&&(ne===s.FLOAT&&(de=s.R32F),ne===s.HALF_FLOAT&&(de=s.R16F),ne===s.UNSIGNED_BYTE&&(de=s.R8)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.R8UI),ne===s.UNSIGNED_SHORT&&(de=s.R16UI),ne===s.UNSIGNED_INT&&(de=s.R32UI),ne===s.BYTE&&(de=s.R8I),ne===s.SHORT&&(de=s.R16I),ne===s.INT&&(de=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(de=s.RG32F),ne===s.HALF_FLOAT&&(de=s.RG16F),ne===s.UNSIGNED_BYTE&&(de=s.RG8)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RG8UI),ne===s.UNSIGNED_SHORT&&(de=s.RG16UI),ne===s.UNSIGNED_INT&&(de=s.RG32UI),ne===s.BYTE&&(de=s.RG8I),ne===s.SHORT&&(de=s.RG16I),ne===s.INT&&(de=s.RG32I)),A===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(de=s.RGB16UI),ne===s.UNSIGNED_INT&&(de=s.RGB32UI),ne===s.BYTE&&(de=s.RGB8I),ne===s.SHORT&&(de=s.RGB16I),ne===s.INT&&(de=s.RGB32I)),A===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),ne===s.UNSIGNED_INT&&(de=s.RGBA32UI),ne===s.BYTE&&(de=s.RGBA8I),ne===s.SHORT&&(de=s.RGBA16I),ne===s.INT&&(de=s.RGBA32I)),A===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),A===s.RGBA){const ze=Ee?fu:bt.getTransfer(xe);ne===s.FLOAT&&(de=s.RGBA32F),ne===s.HALF_FLOAT&&(de=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(de=ze===It?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(P,A){let ne;return P?A===null||A===Nr||A===Jo?ne=s.DEPTH24_STENCIL8:A===ua?ne=s.DEPTH32F_STENCIL8:A===$o&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Nr||A===Jo?ne=s.DEPTH_COMPONENT24:A===ua?ne=s.DEPTH_COMPONENT32F:A===$o&&(ne=s.DEPTH_COMPONENT16),ne}function F(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ei&&P.minFilter!==Ni?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function B(P){const A=P.target;A.removeEventListener("dispose",B),k(A),A.isVideoTexture&&g.delete(A)}function z(P){const A=P.target;A.removeEventListener("dispose",z),D(A)}function k(P){const A=a.get(P);if(A.__webglInit===void 0)return;const ne=P.source,xe=y.get(ne);if(xe){const Ee=xe[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(P),Object.keys(xe).length===0&&y.delete(ne)}a.remove(P)}function U(P){const A=a.get(P);s.deleteTexture(A.__webglTexture);const ne=P.source,xe=y.get(ne);delete xe[A.__cacheKey],f.memory.textures--}function D(P){const A=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let Ee=0;Ee<A.__webglFramebuffer[xe].length;Ee++)s.deleteFramebuffer(A.__webglFramebuffer[xe][Ee]);else s.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)s.deleteFramebuffer(A.__webglFramebuffer[xe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=P.textures;for(let xe=0,Ee=ne.length;xe<Ee;xe++){const de=a.get(ne[xe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),a.remove(ne[xe])}a.remove(P)}let G=0;function ce(){G=0}function oe(){const P=G;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),G+=1,P}function me(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function fe(P,A){const ne=a.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){const xe=P.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ne,P,A);return}}n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function O(P,A){const ne=a.get(P);if(P.version>0&&ne.__version!==P.version){J(ne,P,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function Z(P,A){const ne=a.get(P);if(P.version>0&&ne.__version!==P.version){J(ne,P,A);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function j(P,A){const ne=a.get(P);if(P.version>0&&ne.__version!==P.version){ge(ne,P,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const be={[uu]:s.REPEAT,[Dr]:s.CLAMP_TO_EDGE,[Ad]:s.MIRRORED_REPEAT},N={[Ei]:s.NEAREST,[eE]:s.NEAREST_MIPMAP_NEAREST,[bc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[Nh]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},ee={[aE]:s.NEVER,[uE]:s.ALWAYS,[rE]:s.LESS,[ny]:s.LEQUAL,[sE]:s.EQUAL,[cE]:s.GEQUAL,[oE]:s.GREATER,[lE]:s.NOTEQUAL};function ye(P,A){if(A.type===ua&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ni||A.magFilter===Nh||A.magFilter===bc||A.magFilter===Lr||A.minFilter===Ni||A.minFilter===Nh||A.minFilter===bc||A.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,be[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,be[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,be[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,N[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ei||A.minFilter!==bc&&A.minFilter!==Lr||A.type===ua&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function Me(P,A){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",B));const xe=A.source;let Ee=y.get(xe);Ee===void 0&&(Ee={},y.set(xe,Ee));const de=me(A);if(de!==P.__cacheKey){Ee[de]===void 0&&(Ee[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),Ee[de].usedTimes++;const ze=Ee[P.__cacheKey];ze!==void 0&&(Ee[P.__cacheKey].usedTimes--,ze.usedTimes===0&&U(A)),P.__cacheKey=de,P.__webglTexture=Ee[de].texture}return ne}function J(P,A,ne){let xe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=s.TEXTURE_3D);const Ee=Me(P,A),de=A.source;n.bindTexture(xe,P.__webglTexture,s.TEXTURE0+ne);const ze=a.get(de);if(de.version!==ze.__version||Ee===!0){n.activeTexture(s.TEXTURE0+ne);const Re=bt.getPrimaries(bt.workingColorSpace),Ce=A.colorSpace===$a?null:bt.getPrimaries(A.colorSpace),yt=A.colorSpace===$a||Re===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ae=E(A.image,!1,o.maxTextureSize);Ae=Lt(A,Ae);const He=c.convert(A.format,A.colorSpace),Ye=c.convert(A.type);let Qe=w(A.internalFormat,He,Ye,A.colorSpace,A.isVideoTexture);ye(xe,A);let Ie;const ct=A.mipmaps,tt=A.isVideoTexture!==!0,Ut=ze.__version===void 0||Ee===!0,X=de.dataReady,Ne=F(A,Ae);if(A.isDepthTexture)Qe=L(A.format===tl,A.type),Ut&&(tt?n.texStorage2D(s.TEXTURE_2D,1,Qe,Ae.width,Ae.height):n.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,He,Ye,null));else if(A.isDataTexture)if(ct.length>0){tt&&Ut&&n.texStorage2D(s.TEXTURE_2D,Ne,Qe,ct[0].width,ct[0].height);for(let ue=0,ve=ct.length;ue<ve;ue++)Ie=ct[ue],tt?X&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ie.width,Ie.height,He,Ye,Ie.data):n.texImage2D(s.TEXTURE_2D,ue,Qe,Ie.width,Ie.height,0,He,Ye,Ie.data);A.generateMipmaps=!1}else tt?(Ut&&n.texStorage2D(s.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height),X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,Ye,Ae.data)):n.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,He,Ye,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&Ut&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Qe,ct[0].width,ct[0].height,Ae.depth);for(let ue=0,ve=ct.length;ue<ve;ue++)if(Ie=ct[ue],A.format!==Mi)if(He!==null)if(tt){if(X)if(A.layerUpdates.size>0){const Be=qv(Ie.width,Ie.height,A.format,A.type);for(const Pe of A.layerUpdates){const it=Ie.data.subarray(Pe*Be/Ie.data.BYTES_PER_ELEMENT,(Pe+1)*Be/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Pe,Ie.width,Ie.height,1,He,it)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ie.width,Ie.height,Ae.depth,He,Ie.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Qe,Ie.width,Ie.height,Ae.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?X&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,Ie.width,Ie.height,Ae.depth,He,Ye,Ie.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ue,Qe,Ie.width,Ie.height,Ae.depth,0,He,Ye,Ie.data)}else{tt&&Ut&&n.texStorage2D(s.TEXTURE_2D,Ne,Qe,ct[0].width,ct[0].height);for(let ue=0,ve=ct.length;ue<ve;ue++)Ie=ct[ue],A.format!==Mi?He!==null?tt?X&&n.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,Ie.width,Ie.height,He,Ie.data):n.compressedTexImage2D(s.TEXTURE_2D,ue,Qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?X&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ie.width,Ie.height,He,Ye,Ie.data):n.texImage2D(s.TEXTURE_2D,ue,Qe,Ie.width,Ie.height,0,He,Ye,Ie.data)}else if(A.isDataArrayTexture)if(tt){if(Ut&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Qe,Ae.width,Ae.height,Ae.depth),X)if(A.layerUpdates.size>0){const ue=qv(Ae.width,Ae.height,A.format,A.type);for(const ve of A.layerUpdates){const Be=Ae.data.subarray(ve*ue/Ae.data.BYTES_PER_ELEMENT,(ve+1)*ue/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Ae.width,Ae.height,1,He,Ye,Be)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(A.isData3DTexture)tt?(Ut&&n.texStorage3D(s.TEXTURE_3D,Ne,Qe,Ae.width,Ae.height,Ae.depth),X&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,Ye,Ae.data)):n.texImage3D(s.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,He,Ye,Ae.data);else if(A.isFramebufferTexture){if(Ut)if(tt)n.texStorage2D(s.TEXTURE_2D,Ne,Qe,Ae.width,Ae.height);else{let ue=Ae.width,ve=Ae.height;for(let Be=0;Be<Ne;Be++)n.texImage2D(s.TEXTURE_2D,Be,Qe,ue,ve,0,He,Ye,null),ue>>=1,ve>>=1}}else if(ct.length>0){if(tt&&Ut){const ue=Ve(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ne,Qe,ue.width,ue.height)}for(let ue=0,ve=ct.length;ue<ve;ue++)Ie=ct[ue],tt?X&&n.texSubImage2D(s.TEXTURE_2D,ue,0,0,He,Ye,Ie):n.texImage2D(s.TEXTURE_2D,ue,Qe,He,Ye,Ie);A.generateMipmaps=!1}else if(tt){if(Ut){const ue=Ve(Ae);n.texStorage2D(s.TEXTURE_2D,Ne,Qe,ue.width,ue.height)}X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,He,Ye,Ae)}else n.texImage2D(s.TEXTURE_2D,0,Qe,He,Ye,Ae);S(A)&&_(xe),ze.__version=de.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ge(P,A,ne){if(A.image.length!==6)return;const xe=Me(P,A),Ee=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ne);const de=a.get(Ee);if(Ee.version!==de.__version||xe===!0){n.activeTexture(s.TEXTURE0+ne);const ze=bt.getPrimaries(bt.workingColorSpace),Re=A.colorSpace===$a?null:bt.getPrimaries(A.colorSpace),Ce=A.colorSpace===$a||ze===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const yt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,He=[];for(let ve=0;ve<6;ve++)!yt&&!Ae?He[ve]=E(A.image[ve],!0,o.maxCubemapSize):He[ve]=Ae?A.image[ve].image:A.image[ve],He[ve]=Lt(A,He[ve]);const Ye=He[0],Qe=c.convert(A.format,A.colorSpace),Ie=c.convert(A.type),ct=w(A.internalFormat,Qe,Ie,A.colorSpace),tt=A.isVideoTexture!==!0,Ut=de.__version===void 0||xe===!0,X=Ee.dataReady;let Ne=F(A,Ye);ye(s.TEXTURE_CUBE_MAP,A);let ue;if(yt){tt&&Ut&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ct,Ye.width,Ye.height);for(let ve=0;ve<6;ve++){ue=He[ve].mipmaps;for(let Be=0;Be<ue.length;Be++){const Pe=ue[Be];A.format!==Mi?Qe!==null?tt?X&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Pe.width,Pe.height,Qe,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Pe.width,Pe.height,Qe,Ie,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,ct,Pe.width,Pe.height,0,Qe,Ie,Pe.data)}}}else{if(ue=A.mipmaps,tt&&Ut){ue.length>0&&Ne++;const ve=Ve(He[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,ct,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ae){tt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,He[ve].width,He[ve].height,Qe,Ie,He[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,He[ve].width,He[ve].height,0,Qe,Ie,He[ve].data);for(let Be=0;Be<ue.length;Be++){const it=ue[Be].image[ve].image;tt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,it.width,it.height,Qe,Ie,it.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,ct,it.width,it.height,0,Qe,Ie,it.data)}}else{tt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Qe,Ie,He[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ct,Qe,Ie,He[ve]);for(let Be=0;Be<ue.length;Be++){const Pe=ue[Be];tt?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,Qe,Ie,Pe.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,ct,Qe,Ie,Pe.image[ve])}}}S(A)&&_(s.TEXTURE_CUBE_MAP),de.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Se(P,A,ne,xe,Ee,de){const ze=c.convert(ne.format,ne.colorSpace),Re=c.convert(ne.type),Ce=w(ne.internalFormat,ze,Re,ne.colorSpace),yt=a.get(A),Ae=a.get(ne);if(Ae.__renderTarget=A,!yt.__hasExternalTextures){const He=Math.max(1,A.width>>de),Ye=Math.max(1,A.height>>de);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?n.texImage3D(Ee,de,Ce,He,Ye,A.depth,0,ze,Re,null):n.texImage2D(Ee,de,Ce,He,Ye,0,ze,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),nt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,Ee,Ae.__webglTexture,0,_t(A)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,Ee,Ae.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function we(P,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const xe=A.depthTexture,Ee=xe&&xe.isDepthTexture?xe.type:null,de=L(A.stencilBuffer,Ee),ze=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=_t(A);nt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,de,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,de,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,de,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,P)}else{const xe=A.textures;for(let Ee=0;Ee<xe.length;Ee++){const de=xe[Ee],ze=c.convert(de.format,de.colorSpace),Re=c.convert(de.type),Ce=w(de.internalFormat,ze,Re,de.colorSpace),yt=_t(A);ne&&nt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,Ce,A.width,A.height):nt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,Ce,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=a.get(A.depthTexture);xe.__renderTarget=A,(!xe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const Ee=xe.__webglTexture,de=_t(A);if(A.depthTexture.format===el)nt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(A.depthTexture.format===tl)nt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function ot(P){const A=a.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const xe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xe){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xe.removeEventListener("dispose",Ee)};xe.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=xe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Oe(A.__webglFramebuffer,P)}else if(ne){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]===void 0)A.__webglDepthbuffer[xe]=s.createRenderbuffer(),we(A.__webglDepthbuffer[xe],P,!1);else{const Ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),we(A.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,Ee)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(P,A,ne){const xe=a.get(P);A!==void 0&&Se(xe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&ot(P)}function Gt(P){const A=P.texture,ne=a.get(P),xe=a.get(A);P.addEventListener("dispose",z);const Ee=P.textures,de=P.isWebGLCubeRenderTarget===!0,ze=Ee.length>1;if(ze||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=A.version,f.memory.textures++),de){ne.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[Re]=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)ne.__webglFramebuffer[Re][Ce]=s.createFramebuffer()}else ne.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Re=0;Re<A.mipmaps.length;Re++)ne.__webglFramebuffer[Re]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Re=0,Ce=Ee.length;Re<Ce;Re++){const yt=a.get(Ee[Re]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&nt(P)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Re=0;Re<Ee.length;Re++){const Ce=Ee[Re];ne.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Re]);const yt=c.convert(Ce.format,Ce.colorSpace),Ae=c.convert(Ce.type),He=w(Ce.internalFormat,yt,Ae,Ce.colorSpace,P.isXRRenderTarget===!0),Ye=_t(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,He,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),we(ne.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ye(s.TEXTURE_CUBE_MAP,A);for(let Re=0;Re<6;Re++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)Se(ne.__webglFramebuffer[Re][Ce],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ce);else Se(ne.__webglFramebuffer[Re],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(A)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ze){for(let Re=0,Ce=Ee.length;Re<Ce;Re++){const yt=Ee[Re],Ae=a.get(yt);n.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),ye(s.TEXTURE_2D,yt),Se(ne.__webglFramebuffer,P,yt,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),S(yt)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Re=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,xe.__webglTexture),ye(Re,A),A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)Se(ne.__webglFramebuffer[Ce],P,A,s.COLOR_ATTACHMENT0,Re,Ce);else Se(ne.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,Re,0);S(A)&&_(Re),n.unbindTexture()}P.depthBuffer&&ot(P)}function zt(P){const A=P.textures;for(let ne=0,xe=A.length;ne<xe;ne++){const Ee=A[ne];if(S(Ee)){const de=R(P),ze=a.get(Ee).__webglTexture;n.bindTexture(de,ze),_(de),n.unbindTexture()}}}const ft=[],H=[];function zn(P){if(P.samples>0){if(nt(P)===!1){const A=P.textures,ne=P.width,xe=P.height;let Ee=s.COLOR_BUFFER_BIT;const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=a.get(P),Re=A.length>1;if(Re)for(let Ce=0;Ce<A.length;Ce++)n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ce]);const yt=a.get(A[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,yt,0)}s.blitFramebuffer(0,0,ne,xe,0,0,ne,xe,Ee,s.NEAREST),p===!0&&(ft.length=0,H.length=0,ft.push(s.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ft.push(de),H.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ce=0;Ce<A.length;Ce++){n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Ce]);const yt=a.get(A[Ce]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,yt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function _t(P){return Math.min(o.maxSamples,P.samples)}function nt(P){const A=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function je(P){const A=f.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function Lt(P,A){const ne=P.colorSpace,xe=P.format,Ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ne!==zs&&ne!==$a&&(bt.getTransfer(ne)===It?(xe!==Mi||Ee!==ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),A}function Ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=oe,this.resetTextureUnits=ce,this.setTexture2D=fe,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=Ke,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=zn,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=nt}function UR(s,e){function n(a,o=$a){let c;const f=bt.getTransfer(o);if(a===ga)return s.UNSIGNED_BYTE;if(a===hp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===dp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===q_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===j_)return s.BYTE;if(a===W_)return s.SHORT;if(a===$o)return s.UNSIGNED_SHORT;if(a===fp)return s.INT;if(a===Nr)return s.UNSIGNED_INT;if(a===ua)return s.FLOAT;if(a===sl)return s.HALF_FLOAT;if(a===Y_)return s.ALPHA;if(a===Z_)return s.RGB;if(a===Mi)return s.RGBA;if(a===K_)return s.LUMINANCE;if(a===Q_)return s.LUMINANCE_ALPHA;if(a===el)return s.DEPTH_COMPONENT;if(a===tl)return s.DEPTH_STENCIL;if(a===$_)return s.RED;if(a===pp)return s.RED_INTEGER;if(a===J_)return s.RG;if(a===mp)return s.RG_INTEGER;if(a===gp)return s.RGBA_INTEGER;if(a===$c||a===Jc||a===eu||a===tu)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wd||a===Rd||a===Cd||a===Dd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ld||a===Ud||a===Nd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ld||a===Ud)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Nd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Pd||a===Od||a===Id||a===Bd||a===zd||a===Fd||a===Hd||a===Gd||a===Vd||a===kd||a===Xd||a===jd||a===Wd||a===qd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Pd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Od)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Id)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Bd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===zd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Vd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===kd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Xd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===jd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Wd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===qd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===nu||a===Yd||a===Zd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===nu)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ey||a===Kd||a===Qd||a===$d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===nu)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Jo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const NR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,a){if(this.texture===null){const o=new Bn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new tr({vertexShader:NR,fragmentShader:PR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new xu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IR extends Br{constructor(e,n){super();const a=this;let o=null,c=1,f=null,h="local-floor",p=1,d=null,g=null,v=null,y=null,x=null,b=null;const E=new OR,S=n.getContextAttributes();let _=null,R=null;const w=[],L=[],F=new at;let B=null;const z=new pi;z.viewport=new Jt;const k=new pi;k.viewport=new Jt;const U=[z,k],D=new nT;let G=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=w[J];return ge===void 0&&(ge=new ed,w[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=w[J];return ge===void 0&&(ge=new ed,w[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=w[J];return ge===void 0&&(ge=new ed,w[J]=ge),ge.getHandSpace()};function oe(J){const ge=L.indexOf(J.inputSource);if(ge===-1)return;const Se=w[ge];Se!==void 0&&(Se.update(J.inputSource,J.frame,d||f),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function me(){o.removeEventListener("select",oe),o.removeEventListener("selectstart",oe),o.removeEventListener("selectend",oe),o.removeEventListener("squeeze",oe),o.removeEventListener("squeezestart",oe),o.removeEventListener("squeezeend",oe),o.removeEventListener("end",me),o.removeEventListener("inputsourceschange",fe);for(let J=0;J<w.length;J++){const ge=L[J];ge!==null&&(L[J]=null,w[J].disconnect(ge))}G=null,ce=null,E.reset(),e.setRenderTarget(_),x=null,y=null,v=null,o=null,R=null,Me.stop(),a.isPresenting=!1,e.setPixelRatio(B),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",oe),o.addEventListener("selectstart",oe),o.addEventListener("selectend",oe),o.addEventListener("squeeze",oe),o.addEventListener("squeezestart",oe),o.addEventListener("squeezeend",oe),o.addEventListener("end",me),o.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,we=null,Oe=null;S.depth&&(Oe=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=S.stencil?tl:el,we=S.stencil?Jo:Nr);const ot={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:c};v=new XRWebGLBinding(o,n),y=v.createProjectionLayer(ot),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Pr(y.textureWidth,y.textureHeight,{format:Mi,type:ga,depthTexture:new hy(y.textureWidth,y.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new Pr(x.framebufferWidth,x.framebufferHeight,{format:Mi,type:ga,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,f=await o.requestReferenceSpace(h),Me.setContext(o),Me.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe(J){for(let ge=0;ge<J.removed.length;ge++){const Se=J.removed[ge],we=L.indexOf(Se);we>=0&&(L[we]=null,w[we].disconnect(Se))}for(let ge=0;ge<J.added.length;ge++){const Se=J.added[ge];let we=L.indexOf(Se);if(we===-1){for(let ot=0;ot<w.length;ot++)if(ot>=L.length){L.push(Se),we=ot;break}else if(L[ot]===null){L[ot]=Se,we=ot;break}if(we===-1)break}const Oe=w[we];Oe&&Oe.connect(Se)}}const O=new Q,Z=new Q;function j(J,ge,Se){O.setFromMatrixPosition(ge.matrixWorld),Z.setFromMatrixPosition(Se.matrixWorld);const we=O.distanceTo(Z),Oe=ge.projectionMatrix.elements,ot=Se.projectionMatrix.elements,Ke=Oe[14]/(Oe[10]-1),Gt=Oe[14]/(Oe[10]+1),zt=(Oe[9]+1)/Oe[5],ft=(Oe[9]-1)/Oe[5],H=(Oe[8]-1)/Oe[0],zn=(ot[8]+1)/ot[0],_t=Ke*H,nt=Ke*zn,je=we/(-H+zn),Lt=je*-H;if(ge.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ve=Ke+je,P=Gt+je,A=_t-Lt,ne=nt+(we-Lt),xe=zt*Gt/P*Ve,Ee=ft*Gt/P*Ve;J.projectionMatrix.makePerspective(A,ne,xe,Ee,Ve,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let ge=J.near,Se=J.far;E.texture!==null&&(E.depthNear>0&&(ge=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),D.near=k.near=z.near=ge,D.far=k.far=z.far=Se,(G!==D.near||ce!==D.far)&&(o.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,ce=D.far),z.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,D.layers.mask=z.layers.mask|k.layers.mask;const we=J.parent,Oe=D.cameras;be(D,we);for(let ot=0;ot<Oe.length;ot++)be(Oe[ot],we);Oe.length===2?j(D,z,k):D.projectionMatrix.copy(z.projectionMatrix),N(J,D,we)};function N(J,ge,Se){Se===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Jd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(J){p=J,y!==null&&(y.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(D)};let ee=null;function ye(J,ge){if(g=ge.getViewerPose(d||f),b=ge,g!==null){const Se=g.views;x!==null&&(e.setRenderTargetFramebuffer(R,x.framebuffer),e.setRenderTarget(R));let we=!1;Se.length!==D.cameras.length&&(D.cameras.length=0,we=!0);for(let Ke=0;Ke<Se.length;Ke++){const Gt=Se[Ke];let zt=null;if(x!==null)zt=x.getViewport(Gt);else{const H=v.getViewSubImage(y,Gt);zt=H.viewport,Ke===0&&(e.setRenderTargetTextures(R,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(R))}let ft=U[Ke];ft===void 0&&(ft=new pi,ft.layers.enable(Ke),ft.viewport=new Jt,U[Ke]=ft),ft.matrix.fromArray(Gt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Gt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(zt.x,zt.y,zt.width,zt.height),Ke===0&&(D.matrix.copy(ft.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),we===!0&&D.cameras.push(ft)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ke=v.getDepthInformation(Se[0]);Ke&&Ke.isValid&&Ke.texture&&E.init(e,Ke,o.renderState)}}for(let Se=0;Se<w.length;Se++){const we=L[Se],Oe=w[Se];we!==null&&Oe!==void 0&&Oe.update(we,ge,d||f)}ee&&ee(J,ge),ge.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ge}),b=null}const Me=new _y;Me.setAnimationLoop(ye),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const Ar=new Ii,BR=new Wt;function zR(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function a(S,_){_.color.getRGB(S.fogColor.value,cy(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,R,w,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&x(S,_,L)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),E(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?p(S,_,R,w):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const R=e.get(_),w=R.envMap,L=R.envMapRotation;w&&(S.envMap.value=w,Ar.copy(L),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),S.envMapRotation.value.setFromMatrix4(BR.makeRotationFromEuler(Ar)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,R,w){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*R,S.scale.value=w*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function x(S,_,R){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const R=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function FR(s,e,n,a){let o={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,w){const L=w.program;a.uniformBlockBinding(R,L)}function d(R,w){let L=o[R.id];L===void 0&&(b(R),L=g(R),o[R.id]=L,R.addEventListener("dispose",S));const F=w.program;a.updateUBOMapping(R,F);const B=e.render.frame;c[R.id]!==B&&(y(R),c[R.id]=B)}function g(R){const w=v();R.__bindingPointIndex=w;const L=s.createBuffer(),F=R.__size,B=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,F,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,L),L}function v(){for(let R=0;R<h;R++)if(f.indexOf(R)===-1)return f.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(R){const w=o[R.id],L=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let B=0,z=L.length;B<z;B++){const k=Array.isArray(L[B])?L[B]:[L[B]];for(let U=0,D=k.length;U<D;U++){const G=k[U];if(x(G,B,U,F)===!0){const ce=G.__offset,oe=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let fe=0;fe<oe.length;fe++){const O=oe[fe],Z=E(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,ce+me,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,me),me+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ce,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(R,w,L,F){const B=R.value,z=w+"_"+L;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const k=F[z];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return F[z]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function b(R){const w=R.uniforms;let L=0;const F=16;for(let z=0,k=w.length;z<k;z++){const U=Array.isArray(w[z])?w[z]:[w[z]];for(let D=0,G=U.length;D<G;D++){const ce=U[D],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let me=0,fe=oe.length;me<fe;me++){const O=oe[me],Z=E(O),j=L%F,be=j%Z.boundary,N=j+be;L+=be,N!==0&&F-N<Z.storage&&(L+=F-N),ce.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=L,L+=Z.storage}}}const B=L%F;return B>0&&(L+=F-B),R.__size=L,R.__cache={},this}function E(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function S(R){const w=R.target;w.removeEventListener("dispose",S);const L=f.indexOf(w.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function _(){for(const R in o)s.deleteBuffer(o[R]);f=[],o={},c={}}return{bind:p,update:d,dispose:_}}class HR{constructor(e={}){const{canvas:n=dE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=f;const b=new Uint32Array(4),E=new Int32Array(4);let S=null,_=null;const R=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1;this._outputColorSpace=Rn;let B=0,z=0,k=null,U=-1,D=null;const G=new Jt,ce=new Jt;let oe=null;const me=new dt(0);let fe=0,O=n.width,Z=n.height,j=1,be=null,N=null;const ee=new Jt(0,0,O,Z),ye=new Jt(0,0,O,Z);let Me=!1;const J=new yp;let ge=!1,Se=!1;const we=new Wt,Oe=new Wt,ot=new Q,Ke=new Jt,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ft(){return k===null?j:1}let H=a;function zn(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cp}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const q="webgl2";if(H=zn(q,C),H===null)throw zn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _t,nt,je,Lt,Ve,P,A,ne,xe,Ee,de,ze,Re,Ce,yt,Ae,He,Ye,Qe,Ie,ct,tt,Ut,X;function Ne(){_t=new KA(H),_t.init(),tt=new UR(H,_t),nt=new kA(H,_t,e,tt),je=new DR(H,_t),nt.reverseDepthBuffer&&y&&je.buffers.depth.setReversed(!0),Lt=new JA(H),Ve=new vR,P=new LR(H,_t,je,Ve,nt,tt,Lt),A=new jA(L),ne=new ZA(L),xe=new rT(H),Ut=new GA(H,xe),Ee=new QA(H,xe,Lt,Ut),de=new tw(H,Ee,xe,Lt),Qe=new ew(H,nt,P),Ae=new XA(Ve),ze=new gR(L,A,ne,_t,nt,Ut,Ae),Re=new zR(L,Ve),Ce=new yR,yt=new TR(_t),Ye=new HA(L,A,ne,je,de,x,p),He=new RR(L,de,nt),X=new FR(H,Lt,nt,je),Ie=new VA(H,_t,Lt),ct=new $A(H,_t,Lt),Lt.programs=ze.programs,L.capabilities=nt,L.extensions=_t,L.properties=Ve,L.renderLists=Ce,L.shadowMap=He,L.state=je,L.info=Lt}Ne();const ue=new IR(L,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(O,Z,!1))},this.getSize=function(C){return C.set(O,Z)},this.setSize=function(C,q,re=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,Z=q,n.width=Math.floor(C*j),n.height=Math.floor(q*j),re===!0&&(n.style.width=C+"px",n.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(O*j,Z*j).floor()},this.setDrawingBufferSize=function(C,q,re){O=C,Z=q,j=re,n.width=Math.floor(C*re),n.height=Math.floor(q*re),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,q,re,se){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,q,re,se),je.viewport(G.copy(ee).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,q,re,se){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,q,re,se),je.scissor(ce.copy(ye).multiplyScalar(j).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){je.setScissorTest(Me=C)},this.setOpaqueSort=function(C){be=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,re=!0){let se=0;if(C){let Y=!1;if(k!==null){const Te=k.texture.format;Y=Te===gp||Te===mp||Te===pp}if(Y){const Te=k.texture.type,De=Te===ga||Te===Nr||Te===$o||Te===Jo||Te===hp||Te===dp,Le=Ye.getClearColor(),Fe=Ye.getClearAlpha(),Je=Le.r,We=Le.g,Xe=Le.b;De?(b[0]=Je,b[1]=We,b[2]=Xe,b[3]=Fe,H.clearBufferuiv(H.COLOR,0,b)):(E[0]=Je,E[1]=We,E[2]=Xe,E[3]=Fe,H.clearBufferiv(H.COLOR,0,E))}else se|=H.COLOR_BUFFER_BIT}q&&(se|=H.DEPTH_BUFFER_BIT),re&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ye.dispose(),Ce.dispose(),yt.dispose(),Ve.dispose(),A.dispose(),ne.dispose(),de.dispose(),Ut.dispose(),X.dispose(),ze.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ln),ue.removeEventListener("sessionend",Mn),Fn.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=Lt.autoReset,q=He.enabled,re=He.autoUpdate,se=He.needsUpdate,Y=He.type;Ne(),Lt.autoReset=C,He.enabled=q,He.autoUpdate=re,He.needsUpdate=se,He.type=Y}function Pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function it(C){const q=C.target;q.removeEventListener("dispose",it),Vt(q)}function Vt(C){nn(C),Ve.remove(C)}function nn(C){const q=Ve.get(C).programs;q!==void 0&&(q.forEach(function(re){ze.releaseProgram(re)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,re,se,Y,Te){q===null&&(q=Gt);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=ar(C,q,re,se,Y);je.setMaterial(se,De);let Fe=re.index,Je=1;if(se.wireframe===!0){if(Fe=Ee.getWireframeAttribute(re),Fe===void 0)return;Je=2}const We=re.drawRange,Xe=re.attributes.position;let pt=We.start*Je,At=(We.start+We.count)*Je;Te!==null&&(pt=Math.max(pt,Te.start*Je),At=Math.min(At,(Te.start+Te.count)*Je)),Fe!==null?(pt=Math.max(pt,0),At=Math.min(At,Fe.count)):Xe!=null&&(pt=Math.max(pt,0),At=Math.min(At,Xe.count));const qt=At-pt;if(qt<0||qt===1/0)return;Ut.setup(Y,se,Le,re,Fe);let xt,St=Ie;if(Fe!==null&&(xt=xe.get(Fe),St=ct,St.setIndex(xt)),Y.isMesh)se.wireframe===!0?(je.setLineWidth(se.wireframeLinewidth*ft()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(Y.isLine){let qe=se.linewidth;qe===void 0&&(qe=1),je.setLineWidth(qe*ft()),Y.isLineSegments?St.setMode(H.LINES):Y.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else Y.isPoints?St.setMode(H.POINTS):Y.isSprite&&St.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)au("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,Kt=Y._multiDrawCounts,Et=Y._multiDrawCount,Cn=Fe?xe.get(Fe).bytesPerElement:1,ba=Ve.get(se).currentProgram.getUniforms();for(let kt=0;kt<Et;kt++)ba.setValue(H,"_gl_DrawID",kt),St.render(qe[kt]/Cn,Kt[kt])}else if(Y.isInstancedMesh)St.renderInstances(pt,qt,Y.count);else if(re.isInstancedBufferGeometry){const qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Kt=Math.min(re.instanceCount,qe);St.renderInstances(pt,qt,Kt)}else St.render(pt,qt)};function Tt(C,q,re){C.transparent===!0&&C.side===Ui&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,xa(C,q,re),C.side=ma,C.needsUpdate=!0,xa(C,q,re),C.side=Ui):xa(C,q,re)}this.compile=function(C,q,re=null){re===null&&(re=C),_=yt.get(re),_.init(q),w.push(_),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),C!==re&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const se=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Le=Te[De];Tt(Le,re,Y),se.add(Le)}else Tt(Te,re,Y),se.add(Te)}),_=w.pop(),se},this.compileAsync=function(C,q,re=null){const se=this.compile(C,q,re);return new Promise(Y=>{function Te(){if(se.forEach(function(De){Ve.get(De).currentProgram.isReady()&&se.delete(De)}),se.size===0){Y(C);return}setTimeout(Te,10)}_t.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Yn=null;function mn(C){Yn&&Yn(C)}function ln(){Fn.stop()}function Mn(){Fn.start()}const Fn=new _y;Fn.setAnimationLoop(mn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(C){Yn=C,ue.setAnimationLoop(C),C===null?Fn.stop():Fn.start()},ue.addEventListener("sessionstart",ln),ue.addEventListener("sessionend",Mn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(q),q=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,q,k),_=yt.get(C,w.length),_.init(q),w.push(_),Oe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Oe),Se=this.localClippingEnabled,ge=Ae.init(this.clippingPlanes,Se),S=Ce.get(C,R.length),S.init(),R.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Te=L.xr.getDepthSensingMesh();Te!==null&&nr(Te,q,-1/0,L.sortObjects)}nr(C,q,0,L.sortObjects),S.finish(),L.sortObjects===!0&&S.sort(be,N),zt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,zt&&Ye.addToRenderList(S,C),this.info.render.frame++,ge===!0&&Ae.beginShadows();const re=_.state.shadowsArray;He.render(re,C,q),ge===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,Y=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Y.length>0)for(let De=0,Le=Te.length;De<Le;De++){const Fe=Te[De];fl(se,Y,C,Fe)}zt&&Ye.render(C);for(let De=0,Le=Te.length;De<Le;De++){const Fe=Te[De];ul(S,C,Fe,Fe.viewport)}}else Y.length>0&&fl(se,Y,C,q),zt&&Ye.render(C),ul(S,C,q);k!==null&&z===0&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(L,C,q),Ut.resetDefaultState(),U=-1,D=null,w.pop(),w.length>0?(_=w[w.length-1],ge===!0&&Ae.setGlobalState(L.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function nr(C,q,re,se){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){se&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const De=de.update(C),Le=C.material;Le.visible&&S.push(C,De,Le,re,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const De=de.update(C),Le=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ke.copy(De.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray(Le)){const Fe=De.groups;for(let Je=0,We=Fe.length;Je<We;Je++){const Xe=Fe[Je],pt=Le[Xe.materialIndex];pt&&pt.visible&&S.push(C,De,pt,re,Ke.z,Xe)}}else Le.visible&&S.push(C,De,Le,re,Ke.z,null)}}const Te=C.children;for(let De=0,Le=Te.length;De<Le;De++)nr(Te[De],q,re,se)}function ul(C,q,re,se){const Y=C.opaque,Te=C.transmissive,De=C.transparent;_.setupLightsView(re),ge===!0&&Ae.setGlobalState(L.clippingPlanes,re),se&&je.viewport(G.copy(se)),Y.length>0&&ir(Y,q,re),Te.length>0&&ir(Te,q,re),De.length>0&&ir(De,q,re),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function fl(C,q,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new Pr(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?sl:ga,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[se.id],De=se.viewport||G;Te.setSize(De.z*L.transmissionResolutionScale,De.w*L.transmissionResolutionScale);const Le=L.getRenderTarget();L.setRenderTarget(Te),L.getClearColor(me),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),zt&&Ye.render(re);const Fe=L.toneMapping;L.toneMapping=er;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),ge===!0&&Ae.setGlobalState(L.clippingPlanes,se),ir(C,re,se),P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te),_t.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Xe=0,pt=q.length;Xe<pt;Xe++){const At=q[Xe],qt=At.object,xt=At.geometry,St=At.material,qe=At.group;if(St.side===Ui&&qt.layers.test(se.layers)){const Kt=St.side;St.side=qn,St.needsUpdate=!0,ya(qt,re,se,xt,St,qe),St.side=Kt,St.needsUpdate=!0,We=!0}}We===!0&&(P.updateMultisampleRenderTarget(Te),P.updateRenderTargetMipmap(Te))}L.setRenderTarget(Le),L.setClearColor(me,fe),Je!==void 0&&(se.viewport=Je),L.toneMapping=Fe}function ir(C,q,re){const se=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Te=C.length;Y<Te;Y++){const De=C[Y],Le=De.object,Fe=De.geometry,Je=De.group;let We=De.material;We.allowOverride===!0&&se!==null&&(We=se),Le.layers.test(re.layers)&&ya(Le,q,re,Fe,We,Je)}}function ya(C,q,re,se,Y,Te){C.onBeforeRender(L,q,re,se,Y,Te),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(L,q,re,se,C,Te),Y.transparent===!0&&Y.side===Ui&&Y.forceSinglePass===!1?(Y.side=qn,Y.needsUpdate=!0,L.renderBufferDirect(re,q,se,Y,C,Te),Y.side=ma,Y.needsUpdate=!0,L.renderBufferDirect(re,q,se,Y,C,Te),Y.side=Ui):L.renderBufferDirect(re,q,se,Y,C,Te),C.onAfterRender(L,q,re,se,Y,Te)}function xa(C,q,re){q.isScene!==!0&&(q=Gt);const se=Ve.get(C),Y=_.state.lights,Te=_.state.shadowsArray,De=Y.state.version,Le=ze.getParameters(C,Y.state,Te,q,re),Fe=ze.getProgramCacheKey(Le);let Je=se.programs;se.environment=C.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(C.isMeshStandardMaterial?ne:A).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",it),Je=new Map,se.programs=Je);let We=Je.get(Fe);if(We!==void 0){if(se.currentProgram===We&&se.lightsStateVersion===De)return Fi(C,Le),We}else Le.uniforms=ze.getUniforms(C),C.onBeforeCompile(Le,L),We=ze.acquireProgram(Le,Fe),Je.set(Fe,We),se.uniforms=Le.uniforms;const Xe=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),Fi(C,Le),se.needsLights=an(C),se.lightsStateVersion=De,se.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMap.value=Y.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotShadowMap.value=Y.state.spotShadowMap,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMap.value=Y.state.pointShadowMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),se.currentProgram=We,se.uniformsList=null,We}function zi(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=su.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Fi(C,q){const re=Ve.get(C);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function ar(C,q,re,se,Y){q.isScene!==!0&&(q=Gt),P.resetTextureUnits();const Te=q.fog,De=se.isMeshStandardMaterial?q.environment:null,Le=k===null?L.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:zs,Fe=(se.isMeshStandardMaterial?ne:A).get(se.envMap||De),Je=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,We=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,At=!!re.morphAttributes.color;let qt=er;se.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qt=L.toneMapping);const xt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,St=xt!==void 0?xt.length:0,qe=Ve.get(se),Kt=_.state.lights;if(ge===!0&&(Se===!0||C!==D)){const gn=C===D&&se.id===U;Ae.setState(se,C,gn)}let Et=!1;se.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Kt.state.version||qe.outputColorSpace!==Le||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Fe||se.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==We||qe.morphTargets!==Xe||qe.morphNormals!==pt||qe.morphColors!==At||qe.toneMapping!==qt||qe.morphTargetsCount!==St)&&(Et=!0):(Et=!0,qe.__version=se.version);let Cn=qe.currentProgram;Et===!0&&(Cn=xa(se,q,Y));let ba=!1,kt=!1,Gi=!1;const Ft=Cn.getUniforms(),Dn=qe.uniforms;if(je.useProgram(Cn.program)&&(ba=!0,kt=!0,Gi=!0),se.id!==U&&(U=se.id,kt=!0),ba||D!==C){je.buffers.depth.getReversed()?(we.copy(C.projectionMatrix),mE(we),gE(we),Ft.setValue(H,"projectionMatrix",we)):Ft.setValue(H,"projectionMatrix",C.projectionMatrix),Ft.setValue(H,"viewMatrix",C.matrixWorldInverse);const En=Ft.map.cameraPosition;En!==void 0&&En.setValue(H,ot.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,kt=!0,Gi=!0)}if(Y.isSkinnedMesh){Ft.setOptional(H,Y,"bindMatrix"),Ft.setOptional(H,Y,"bindMatrixInverse");const gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ft.setValue(H,"boneTexture",gn.boneTexture,P))}Y.isBatchedMesh&&(Ft.setOptional(H,Y,"batchingTexture"),Ft.setValue(H,"batchingTexture",Y._matricesTexture,P),Ft.setOptional(H,Y,"batchingIdTexture"),Ft.setValue(H,"batchingIdTexture",Y._indirectTexture,P),Ft.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ft.setValue(H,"batchingColorTexture",Y._colorsTexture,P));const cn=re.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Qe.update(Y,re,Cn),(kt||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Ft.setValue(H,"receiveShadow",Y.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Dn.envMap.value=Fe,Dn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(Dn.envMapIntensity.value=q.environmentIntensity),kt&&(Ft.setValue(H,"toneMappingExposure",L.toneMappingExposure),qe.needsLights&&Sa(Dn,Gi),Te&&se.fog===!0&&Re.refreshFogUniforms(Dn,Te),Re.refreshMaterialUniforms(Dn,se,j,Z,_.state.transmissionRenderTarget[C.id]),su.upload(H,zi(qe),Dn,P)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(su.upload(H,zi(qe),Dn,P),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ft.setValue(H,"center",Y.center),Ft.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Ft.setValue(H,"normalMatrix",Y.normalMatrix),Ft.setValue(H,"modelMatrix",Y.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let En=0,Ti=gn.length;En<Ti;En++){const Vi=gn[En];X.update(Vi,Cn),X.bind(Vi,Cn)}}return Cn}function Sa(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function an(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,q,re){const se=Ve.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ve.get(C.texture).__webglTexture=q,Ve.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const re=Ve.get(C);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const hl=H.createFramebuffer();this.setRenderTarget=function(C,q=0,re=0){k=C,B=q,z=re;let se=!0,Y=null,Te=!1,De=!1;if(C){const Fe=Ve.get(C);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Fe.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Fe.__hasExternalTextures)P.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xe=C.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&Ve.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(De=!0);const We=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[q])?Y=We[q][re]:Y=We[q],Te=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?Y=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[re]:Y=We,G.copy(C.viewport),ce.copy(C.scissor),oe=C.scissorTest}else G.copy(ee).multiplyScalar(j).floor(),ce.copy(ye).multiplyScalar(j).floor(),oe=Me;if(re!==0&&(Y=hl),je.bindFramebuffer(H.FRAMEBUFFER,Y)&&se&&je.drawBuffers(C,Y),je.viewport(G),je.scissor(ce),je.setScissorTest(oe),Te){const Fe=Ve.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,re)}else if(De){const Fe=Ve.get(C.texture),Je=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,re,Je)}else if(C!==null&&re!==0){const Fe=Ve.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,re)}U=-1},this.readRenderTargetPixels=function(C,q,re,se,Y,Te,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le){je.bindFramebuffer(H.FRAMEBUFFER,Le);try{const Fe=C.texture,Je=Fe.format,We=Fe.type;if(!nt.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-se&&re>=0&&re<=C.height-Y&&H.readPixels(q,re,se,Y,tt.convert(Je),tt.convert(We),Te)}finally{const Fe=k!==null?Ve.get(k).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(C,q,re,se,Y,Te,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Le=Le[De]),Le)if(q>=0&&q<=C.width-se&&re>=0&&re<=C.height-Y){je.bindFramebuffer(H.FRAMEBUFFER,Le);const Fe=C.texture,Je=Fe.format,We=Fe.type;if(!nt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels(q,re,se,Y,tt.convert(Je),tt.convert(We),0);const pt=k!==null?Ve.get(k).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,pt);const At=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pE(H,At,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(Xe),H.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,re=0){const se=Math.pow(2,-re),Y=Math.floor(C.image.width*se),Te=Math.floor(C.image.height*se),De=q!==null?q.x:0,Le=q!==null?q.y:0;P.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,De,Le,Y,Te),je.unbindTexture()};const dl=H.createFramebuffer(),Hi=H.createFramebuffer();this.copyTextureToTexture=function(C,q,re=null,se=null,Y=0,Te=null){Te===null&&(Y!==0?(au("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Y,Y=0):Te=0);let De,Le,Fe,Je,We,Xe,pt,At,qt;const xt=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(re!==null)De=re.max.x-re.min.x,Le=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,Je=re.min.x,We=re.min.y,Xe=re.isBox3?re.min.z:0;else{const cn=Math.pow(2,-Y);De=Math.floor(xt.width*cn),Le=Math.floor(xt.height*cn),C.isDataArrayTexture?Fe=xt.depth:C.isData3DTexture?Fe=Math.floor(xt.depth*cn):Fe=1,Je=0,We=0,Xe=0}se!==null?(pt=se.x,At=se.y,qt=se.z):(pt=0,At=0,qt=0);const St=tt.convert(q.format),qe=tt.convert(q.type);let Kt;q.isData3DTexture?(P.setTexture3D(q,0),Kt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(P.setTexture2DArray(q,0),Kt=H.TEXTURE_2D_ARRAY):(P.setTexture2D(q,0),Kt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Et=H.getParameter(H.UNPACK_ROW_LENGTH),Cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ba=H.getParameter(H.UNPACK_SKIP_PIXELS),kt=H.getParameter(H.UNPACK_SKIP_ROWS),Gi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,We),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const Ft=C.isDataArrayTexture||C.isData3DTexture,Dn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const cn=Ve.get(C),gn=Ve.get(q),En=Ve.get(cn.__renderTarget),Ti=Ve.get(gn.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,En.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Vi=0;Vi<Fe;Vi++)Ft&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(C).__webglTexture,Y,Xe+Vi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,Te,qt+Vi)),H.blitFramebuffer(Je,We,De,Le,pt,At,De,Le,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Ve.has(C)){const cn=Ve.get(C),gn=Ve.get(q);je.bindFramebuffer(H.READ_FRAMEBUFFER,dl),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hi);for(let En=0;En<Fe;En++)Ft?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cn.__webglTexture,Y,Xe+En):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cn.__webglTexture,Y),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,Te,qt+En):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,Te),Y!==0?H.blitFramebuffer(Je,We,De,Le,pt,At,De,Le,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Kt,Te,pt,At,qt+En,Je,We,De,Le):H.copyTexSubImage2D(Kt,Te,pt,At,Je,We,De,Le);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Kt,Te,pt,At,qt,De,Le,Fe,St,qe,xt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Kt,Te,pt,At,qt,De,Le,Fe,St,xt.data):H.texSubImage3D(Kt,Te,pt,At,qt,De,Le,Fe,St,qe,xt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,pt,At,De,Le,St,qe,xt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,pt,At,xt.width,xt.height,St,xt.data):H.texSubImage2D(H.TEXTURE_2D,Te,pt,At,De,Le,St,qe,xt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ba),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gi),Te===0&&q.generateMipmaps&&H.generateMipmap(Kt),je.unbindTexture()},this.copyTextureToTexture3D=function(C,q,re=null,se=null,Y=0){return au('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,re,se,Y)},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),je.unbindTexture()},this.resetState=function(){B=0,z=0,k=null,je.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const __={type:"change"},bp={type:"start"},My={type:"end"},qc=new yu,y_=new Qa,GR=Math.cos(70*hE.DEG2RAD),hn=new Q,Wn=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fd=1e-6;class VR extends iT{constructor(e,n=null){super(e,n),this.state=Bt.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Or,this._lastTargetPosition=new Q,this._quat=new Or().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wv,this._sphericalDelta=new Wv,this._scale=1,this._panOffset=new Q,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new Q,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XR.bind(this),this._onPointerDown=kR.bind(this),this._onPointerUp=jR.bind(this),this._onContextMenu=$R.bind(this),this._onMouseWheel=YR.bind(this),this._onKeyDown=ZR.bind(this),this._onTouchStart=KR.bind(this),this._onTouchMove=QR.bind(this),this._onMouseDown=WR.bind(this),this._onMouseMove=qR.bind(this),this._interceptControlDown=JR.bind(this),this._interceptControlUp=eC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(__),this.update(),this.state=Bt.NONE}update(e=null){const n=this.object.position;hn.copy(n).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Wn:a>Math.PI&&(a-=Wn),o<-Math.PI?o+=Wn:o>Math.PI&&(o-=Wn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),n.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=hn.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new Q(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),f=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(qc.origin.copy(this.object.position),qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qc.direction))<GR?this.object.lookAt(this.target):(y_.setFromNormalAndCoplanarPoint(this.object.up,this.target),qc.intersectPlane(y_,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>fd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fd||this._lastTargetPosition.distanceToSquared(this.target)>fd?(this.dispatchEvent(__),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){hn.setFromMatrixColumn(n,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,n){this.screenSpacePanning===!0?hn.setFromMatrixColumn(n,1):(hn.setFromMatrixColumn(n,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;hn.copy(o).sub(this.target);let c=hn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=e-a.left,c=n-a.top,f=a.width,h=a.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),o=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,h=(e.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new at,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function kR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function XR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function jR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(My),this.state=Bt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function WR(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Bt.DOLLY;break;case Ls.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Bt.ROTATE}break;case Ls.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(bp)}function qR(s){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function YR(s){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(s.preventDefault(),this.dispatchEvent(bp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(My))}function ZR(s){this.enabled!==!1&&this._handleKeyDown(s)}function KR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Bt.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Bt.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(bp)}function QR(s){switch(this._trackPointer(s),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Bt.NONE}}function $R(s){this.enabled!==!1&&s.preventDefault()}function JR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const tC=/^[og]\s*(.+)?/,nC=/^mtllib /,iC=/^usemtl /,aC=/^usemap /,x_=/\s+/,S_=new Q,hd=new Q,b_=new Q,M_=new Q,di=new Q,Yc=new dt;function rC(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=n!==!1;return}const a=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(o,c){const f=this._finalize(!1);f&&(f.inherited||f.groupCount<=0)&&this.materials.splice(f.index,1);const h={index:this.materials.length,name:o||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:f!==void 0?f.smooth:this.smooth,groupStart:f!==void 0?f.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(p){const d={index:typeof p=="number"?p:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(h),h},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(o){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),o&&this.materials.length>1)for(let f=this.materials.length-1;f>=0;f--)this.materials[f].groupCount<=0&&this.materials.splice(f,1);return o&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},a&&a.name&&typeof a.clone=="function"){const o=a.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,n){const a=parseInt(e,10);return(a>=0?a-1:a+n/3)*3},parseNormalIndex:function(e,n){const a=parseInt(e,10);return(a>=0?a-1:a+n/3)*3},parseUVIndex:function(e,n){const a=parseInt(e,10);return(a>=0?a-1:a+n/2)*2},addVertex:function(e,n,a){const o=this.vertices,c=this.object.geometry.vertices;c.push(o[e+0],o[e+1],o[e+2]),c.push(o[n+0],o[n+1],o[n+2]),c.push(o[a+0],o[a+1],o[a+2])},addVertexPoint:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addVertexLine:function(e){const n=this.vertices;this.object.geometry.vertices.push(n[e+0],n[e+1],n[e+2])},addNormal:function(e,n,a){const o=this.normals,c=this.object.geometry.normals;c.push(o[e+0],o[e+1],o[e+2]),c.push(o[n+0],o[n+1],o[n+2]),c.push(o[a+0],o[a+1],o[a+2])},addFaceNormal:function(e,n,a){const o=this.vertices,c=this.object.geometry.normals;S_.fromArray(o,e),hd.fromArray(o,n),b_.fromArray(o,a),di.subVectors(b_,hd),M_.subVectors(S_,hd),di.cross(M_),di.normalize(),c.push(di.x,di.y,di.z),c.push(di.x,di.y,di.z),c.push(di.x,di.y,di.z)},addColor:function(e,n,a){const o=this.colors,c=this.object.geometry.colors;o[e]!==void 0&&c.push(o[e+0],o[e+1],o[e+2]),o[n]!==void 0&&c.push(o[n+0],o[n+1],o[n+2]),o[a]!==void 0&&c.push(o[a+0],o[a+1],o[a+2])},addUV:function(e,n,a){const o=this.uvs,c=this.object.geometry.uvs;c.push(o[e+0],o[e+1]),c.push(o[n+0],o[n+1]),c.push(o[a+0],o[a+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const n=this.uvs;this.object.geometry.uvs.push(n[e+0],n[e+1])},addFace:function(e,n,a,o,c,f,h,p,d){const g=this.vertices.length;let v=this.parseVertexIndex(e,g),y=this.parseVertexIndex(n,g),x=this.parseVertexIndex(a,g);if(this.addVertex(v,y,x),this.addColor(v,y,x),h!==void 0&&h!==""){const b=this.normals.length;v=this.parseNormalIndex(h,b),y=this.parseNormalIndex(p,b),x=this.parseNormalIndex(d,b),this.addNormal(v,y,x)}else this.addFaceNormal(v,y,x);if(o!==void 0&&o!==""){const b=this.uvs.length;v=this.parseUVIndex(o,b),y=this.parseUVIndex(c,b),x=this.parseUVIndex(f,b),this.addUV(v,y,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const n=this.vertices.length;for(let a=0,o=e.length;a<o;a++){const c=this.parseVertexIndex(e[a],n);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(e,n){this.object.geometry.type="Line";const a=this.vertices.length,o=this.uvs.length;for(let c=0,f=e.length;c<f;c++)this.addVertexLine(this.parseVertexIndex(e[c],a));for(let c=0,f=n.length;c<f;c++)this.addUVLine(this.parseUVIndex(n[c],o))}};return s.startObject("",!1),s}class sC extends ks{constructor(e){super(e),this.materials=null}load(e,n,a,o){const c=this,f=new my(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{n(c.parse(h))}catch(p){o?o(p):console.error(p),c.manager.itemError(e)}},a,o)}setMaterials(e){return this.materials=e,this}parse(e){const n=new rC;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const a=e.split(`
`);let o=[];for(let h=0,p=a.length;h<p;h++){const d=a[h].trimStart();if(d.length===0)continue;const g=d.charAt(0);if(g!=="#")if(g==="v"){const v=d.split(x_);switch(v[0]){case"v":n.vertices.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3])),v.length>=7?(Yc.setRGB(parseFloat(v[4]),parseFloat(v[5]),parseFloat(v[6]),Rn),n.colors.push(Yc.r,Yc.g,Yc.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(v[1]),parseFloat(v[2]),parseFloat(v[3]));break;case"vt":n.uvs.push(parseFloat(v[1]),parseFloat(v[2]));break}}else if(g==="f"){const y=d.slice(1).trim().split(x_),x=[];for(let E=0,S=y.length;E<S;E++){const _=y[E];if(_.length>0){const R=_.split("/");x.push(R)}}const b=x[0];for(let E=1,S=x.length-1;E<S;E++){const _=x[E],R=x[E+1];n.addFace(b[0],_[0],R[0],b[1],_[1],R[1],b[2],_[2],R[2])}}else if(g==="l"){const v=d.substring(1).trim().split(" ");let y=[];const x=[];if(d.indexOf("/")===-1)y=v;else for(let b=0,E=v.length;b<E;b++){const S=v[b].split("/");S[0]!==""&&y.push(S[0]),S[1]!==""&&x.push(S[1])}n.addLineGeometry(y,x)}else if(g==="p"){const y=d.slice(1).trim().split(" ");n.addPointGeometry(y)}else if((o=tC.exec(d))!==null){const v=(" "+o[0].slice(1).trim()).slice(1);n.startObject(v)}else if(iC.test(d))n.object.startMaterial(d.substring(7).trim(),n.materialLibraries);else if(nC.test(d))n.materialLibraries.push(d.substring(7).trim());else if(aC.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(o=d.split(" "),o.length>1){const y=o[1].trim().toLowerCase();n.object.smooth=y!=="0"&&y!=="off"}else n.object.smooth=!0;const v=n.object.currentMaterial();v&&(v.smooth=n.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}n.finalize();const c=new Yo;if(c.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let h=0,p=n.objects.length;h<p;h++){const d=n.objects[h],g=d.geometry,v=d.materials,y=g.type==="Line",x=g.type==="Points";let b=!1;if(g.vertices.length===0)continue;const E=new mi;E.setAttribute("position",new Sn(g.vertices,3)),g.normals.length>0&&E.setAttribute("normal",new Sn(g.normals,3)),g.colors.length>0&&(b=!0,E.setAttribute("color",new Sn(g.colors,3))),g.hasUVIndices===!0&&E.setAttribute("uv",new Sn(g.uvs,2));const S=[];for(let R=0,w=v.length;R<w;R++){const L=v[R],F=L.name+"_"+L.smooth+"_"+b;let B=n.materials[F];if(this.materials!==null){if(B=this.materials.create(L.name),y&&B&&!(B instanceof ru)){const z=new ru;va.prototype.copy.call(z,B),z.color.copy(B.color),B=z}else if(x&&B&&!(B instanceof Zo)){const z=new Zo({size:10,sizeAttenuation:!1});va.prototype.copy.call(z,B),z.color.copy(B.color),z.map=B.map,B=z}}B===void 0&&(y?B=new ru:x?B=new Zo({size:1,sizeAttenuation:!1}):B=new dy,B.name=L.name,B.flatShading=!L.smooth,B.vertexColors=b,n.materials[F]=B),S.push(B)}let _;if(S.length>1){for(let R=0,w=v.length;R<w;R++){const L=v[R];E.addGroup(L.groupStart,L.groupCount,R)}y?_=new Gv(E,S):x?_=new id(E,S):_=new ai(E,S)}else y?_=new Gv(E,S[0]):x?_=new id(E,S[0]):_=new ai(E,S[0]);_.name=d.name,c.add(_)}else if(n.vertices.length>0){const h=new Zo({size:1,sizeAttenuation:!1}),p=new mi;p.setAttribute("position",new Sn(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(p.setAttribute("color",new Sn(n.colors,3)),h.vertexColors=!0);const d=new id(p,h);c.add(d)}return c}}class oC extends ks{constructor(e){super(e)}load(e,n,a,o){const c=this,f=this.path===""?tT.extractUrlBase(e):this.path,h=new my(this.manager);h.setPath(this.path),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(p){try{n(c.parse(p,f))}catch(d){o?o(d):console.error(d),c.manager.itemError(e)}},a,o)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,n){const a=e.split(`
`);let o={};const c=/\s+/,f={};for(let p=0;p<a.length;p++){let d=a[p];if(d=d.trim(),d.length===0||d.charAt(0)==="#")continue;const g=d.indexOf(" ");let v=g>=0?d.substring(0,g):d;v=v.toLowerCase();let y=g>=0?d.substring(g+1):"";if(y=y.trim(),v==="newmtl")o={name:y},f[y]=o;else if(v==="ka"||v==="kd"||v==="ks"||v==="ke"){const x=y.split(c,3);o[v]=[parseFloat(x[0]),parseFloat(x[1]),parseFloat(x[2])]}else o[v]=y}const h=new lC(this.resourcePath||n,this.materialOptions);return h.setCrossOrigin(this.crossOrigin),h.setManager(this.manager),h.setMaterials(f),h}}class lC{constructor(e="",n={}){this.baseUrl=e,this.options=n,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:ma,this.wrap=this.options.wrap!==void 0?this.options.wrap:uu}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const n={};for(const a in e){const o=e[a],c={};n[a]=c;for(const f in o){let h=!0,p=o[f];const d=f.toLowerCase();switch(d){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(p=[p[0]/255,p[1]/255,p[2]/255]),this.options&&this.options.ignoreZeroRGBs&&p[0]===0&&p[1]===0&&p[2]===0&&(h=!1);break}h&&(c[d]=p)}}return n}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const n in this.materialsInfo)this.materialsArray[e]=this.create(n),this.nameLookup[n]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const n=this,a=this.materialsInfo[e],o={name:e,side:this.side};function c(h,p){return typeof p!="string"||p===""?"":/^https?:\/\//i.test(p)?p:h+p}function f(h,p){if(o[h])return;const d=n.getTextureParams(p,o),g=n.loadTexture(c(n.baseUrl,d.url));g.repeat.copy(d.scale),g.offset.copy(d.offset),g.wrapS=n.wrap,g.wrapT=n.wrap,(h==="map"||h==="emissiveMap")&&(g.colorSpace=Rn),o[h]=g}for(const h in a){const p=a[h];let d;if(p!=="")switch(h.toLowerCase()){case"kd":o.color=bt.toWorkingColorSpace(new dt().fromArray(p),Rn);break;case"ks":o.specular=bt.toWorkingColorSpace(new dt().fromArray(p),Rn);break;case"ke":o.emissive=bt.toWorkingColorSpace(new dt().fromArray(p),Rn);break;case"map_kd":f("map",p);break;case"map_ks":f("specularMap",p);break;case"map_ke":f("emissiveMap",p);break;case"norm":f("normalMap",p);break;case"map_bump":case"bump":f("bumpMap",p);break;case"disp":f("displacementMap",p);break;case"map_d":f("alphaMap",p),o.transparent=!0;break;case"ns":o.shininess=parseFloat(p);break;case"d":d=parseFloat(p),d<1&&(o.opacity=d,o.transparent=!0);break;case"tr":d=parseFloat(p),this.options&&this.options.invertTrProperty&&(d=1-d),d>0&&(o.opacity=1-d,o.transparent=!0);break}}return this.materials[e]=new dy(o),this.materials[e]}getTextureParams(e,n){const a={scale:new at(1,1),offset:new at(0,0)},o=e.split(/\s+/);let c;return c=o.indexOf("-bm"),c>=0&&(n.bumpScale=parseFloat(o[c+1]),o.splice(c,2)),c=o.indexOf("-mm"),c>=0&&(n.displacementBias=parseFloat(o[c+1]),n.displacementScale=parseFloat(o[c+2]),o.splice(c,3)),c=o.indexOf("-s"),c>=0&&(a.scale.set(parseFloat(o[c+1]),parseFloat(o[c+2])),o.splice(c,4)),c=o.indexOf("-o"),c>=0&&(a.offset.set(parseFloat(o[c+1]),parseFloat(o[c+2])),o.splice(c,4)),a.url=o.join(" ").trim(),a}loadTexture(e,n,a,o,c){const f=this.manager!==void 0?this.manager:py;let h=f.getHandler(e);h===null&&(h=new KE(f)),h.setCrossOrigin&&h.setCrossOrigin(this.crossOrigin);const p=h.load(e,a,o,c);return n!==void 0&&(p.mapping=n),p}}const cC=({value:s,onChange:e,placeholder:n="Type something...",modelSize:a=2,buttonSize:o=12})=>{const[c,f]=le.useState(!1),h=le.useRef(null),p=le.useRef(null),d=le.useRef(null),g=le.useRef(!1),v=V_("/quack.mp3"),y=()=>{f(x=>!x),v.play(),d.current&&(g.current=!0,setTimeout(()=>{g.current=!1},500))};return le.useEffect(()=>{if(!h.current)return;let x=p.current.getBoundingClientRect();const b=x.width,E=x.height,S=new GE,_=new pi(50,b/E,.1,1e3);window.duckCamera=_;const R=new HR({canvas:h.current,antialias:!0,alpha:!0});R.setSize(b,E),R.setPixelRatio(Math.min(window.devicePixelRatio,2)),R.setClearColor(0,0),S.background=null,R.shadowMap.enabled=!1,_.position.set(3*a,3*a,3*a),_.lookAt(0,0,0);const w=new VR(_,R.domElement);w.enableDamping=!0,w.dampingFactor=.05,w.enableRotate=!1,w.enablePan=!1,w.enableZoom=!1;const L=new xp(1.5*a,24),F=new _p({transparent:!0,opacity:0,side:Ui}),B=new ai(L,F);B.rotation.x=-Math.PI/2,B.position.y=0,S.add(B),new oC().load("/models/duck.mtl",me=>{me.preload(),Object.values(me.materials).forEach(O=>{O.shininess&&(O.shininess=30),O.specular&&O.specular.setRGB(.4,.4,.4),O.color&&O.color.offsetHSL(0,0,.15),O.castShadow=!1,O.receiveShadow=!1});const fe=new sC;fe.setMaterials(me),fe.load("/models/duck.obj",O=>{O.traverse(ye=>{ye instanceof ai&&(ye.geometry.computeVertexNormals(),ye.castShadow=!1,ye.receiveShadow=!1)});const Z=new Vs().setFromObject(O),j=Z.getSize(new Q),be=Math.max(j.x,j.y,j.z),N=3*a/be;O.scale.set(N,N,N);const ee=Z.getCenter(new Q);O.position.x=-ee.x*N,O.position.y=-ee.y*N+.5*a,O.position.z=-ee.z*N,S.add(O),d.current=O})});const k=new eT(16777215,1);S.add(k);const U=new JE(16777215,.5);U.position.set(5,10,7),U.castShadow=!1,S.add(U);const D=()=>{requestAnimationFrame(D),d.current&&g.current&&(d.current.rotation.z+=.2,d.current.rotation.z>=Math.PI*2&&(d.current.rotation.z=0,g.current=!1)),w.update(),R.render(S,_)},G=()=>{x=p.current.getBoundingClientRect();const me=x.width,fe=x.height;_.aspect=me/fe,_.updateProjectionMatrix(),R.setSize(me,fe)};window.addEventListener("resize",G);const ce=()=>{document.body.style.cursor="pointer"},oe=()=>{document.body.style.cursor="auto"};return p.current.addEventListener("mouseenter",ce),p.current.addEventListener("mouseleave",oe),p.current.addEventListener("click",y),D(),()=>{window.removeEventListener("resize",G),p.current&&(p.current.removeEventListener("mouseenter",ce),p.current.removeEventListener("mouseleave",oe),p.current.removeEventListener("click",y)),document.body.style.cursor="auto",S.clear(),R.dispose(),w.dispose(),delete window.duckCamera}},[a]),K.jsxs(K.Fragment,{children:[K.jsx("div",{ref:p,style:{position:"fixed",right:"0.5rem",bottom:"0.5rem",width:`${o}rem`,height:`${o}rem`,pointerEvents:"auto"},children:K.jsx("canvas",{ref:h,style:{width:"100%",height:"100%"}})}),K.jsx("div",{className:`fixed left-1/2 transform -translate-x-1/2 bottom-10 w-11/12 md:w-1/2 p-4 bg-yellow-600 text-white rounded-3xl shadow-lg transition-all duration-500 ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,children:K.jsx("input",{type:"text",value:s,onChange:e,className:"w-full p-2 rounded-xl bg-yellow-700 text-white placeholder-yellow-200 border border-yellow-400",placeholder:n})})]})};function uC(){const[s,e]=le.useState(""),n=a=>{e(a.target.value)};return K.jsx(Kb,{children:K.jsxs("div",{className:"h-screen flex flex-col bg-gray-800",children:[K.jsx("div",{className:"fixed top-0 left-0 right-0 z-20",children:K.jsx(sM,{})}),K.jsxs("div",{className:"flex flex-1 pt-16",children:[K.jsx(vM,{}),K.jsx("div",{className:"flex-1 ml-16 overflow-y-auto pb-20",children:K.jsxs(wb,{children:[K.jsx(Zc,{path:"/",element:K.jsx(_M,{})}),K.jsx(Zc,{path:"/learn",element:K.jsx(bM,{})}),K.jsx(Zc,{path:"/profile",element:K.jsx(MM,{})})]})})]}),K.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-20",children:K.jsx(cC,{value:s,onChange:n,placeholder:"What's Quackening..."})})]})})}IS.createRoot(document.getElementById("root")).render(K.jsx(le.StrictMode,{children:K.jsx(uC,{})}));
