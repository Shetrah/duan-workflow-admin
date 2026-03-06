(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Fb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hv={exports:{}},uu={},fv={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),zb=Symbol.for("react.portal"),Ub=Symbol.for("react.fragment"),$b=Symbol.for("react.strict_mode"),Bb=Symbol.for("react.profiler"),qb=Symbol.for("react.provider"),Hb=Symbol.for("react.context"),Wb=Symbol.for("react.forward_ref"),Gb=Symbol.for("react.suspense"),Kb=Symbol.for("react.memo"),Qb=Symbol.for("react.lazy"),ug=Symbol.iterator;function Yb(t){return t===null||typeof t!="object"?null:(t=ug&&t[ug]||t["@@iterator"],typeof t=="function"?t:null)}var pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,gv={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yv(){}yv.prototype=Xi.prototype;function If(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}var kf=If.prototype=new yv;kf.constructor=If;mv(kf,Xi.prototype);kf.isPureReactComponent=!0;var dg=Array.isArray,vv=Object.prototype.hasOwnProperty,Cf={current:null},xv={key:!0,ref:!0,__self:!0,__source:!0};function _v(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)vv.call(e,r)&&!xv.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),d=0;d<c;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:Fa,type:t,key:i,ref:o,props:s,_owner:Cf.current}}function Jb(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function Xb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hg=/\/+/g;function fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xb(""+t.key):e.toString(36)}function ql(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case zb:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+fd(o,0):r,dg(s)?(n="",t!=null&&(n=t.replace(hg,"$&/")+"/"),ql(s,e,n,"",function(d){return d})):s!=null&&(Nf(s)&&(s=Jb(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(hg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",dg(t))for(var c=0;c<t.length;c++){i=t[c];var u=r+fd(i,c);o+=ql(i,e,n,u,s)}else if(u=Yb(t),typeof u=="function")for(t=u.call(t),c=0;!(i=t.next()).done;)i=i.value,u=r+fd(i,c++),o+=ql(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gl(t,e,n){if(t==null)return t;var r=[],s=0;return ql(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Zb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},Hl={transition:null},eE={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Cf};function wv(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:gl,forEach:function(t,e,n){gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gl(t,function(){e++}),e},toArray:function(t){return gl(t,function(e){return e})||[]},only:function(t){if(!Nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Xi;he.Fragment=Ub;he.Profiler=Bb;he.PureComponent=If;he.StrictMode=$b;he.Suspense=Gb;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;he.act=wv;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Cf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(u in e)vv.call(e,u)&&!xv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&c!==void 0?c[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:Fa,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:Hb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qb,_context:t},t.Consumer=t};he.createElement=_v;he.createFactory=function(t){var e=_v.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:Wb,render:t}};he.isValidElement=Nf;he.lazy=function(t){return{$$typeof:Qb,_payload:{_status:-1,_result:t},_init:Zb}};he.memo=function(t,e){return{$$typeof:Kb,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};he.unstable_act=wv;he.useCallback=function(t,e){return Dt.current.useCallback(t,e)};he.useContext=function(t){return Dt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Dt.current.useEffect(t,e)};he.useId=function(){return Dt.current.useId()};he.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Dt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};he.useRef=function(t){return Dt.current.useRef(t)};he.useState=function(t){return Dt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Dt.current.useTransition()};he.version="18.3.1";fv.exports=he;var P=fv.exports;const tE=Fb(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=P,rE=Symbol.for("react.element"),sE=Symbol.for("react.fragment"),iE=Object.prototype.hasOwnProperty,oE=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aE={key:!0,ref:!0,__self:!0,__source:!0};function bv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iE.call(e,r)&&!aE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:rE,type:t,key:i,ref:o,props:s,_owner:oE.current}}uu.Fragment=sE;uu.jsx=bv;uu.jsxs=bv;hv.exports=uu;var a=hv.exports,nh={},Ev={exports:{}},Qt={},Tv={exports:{}},Sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var X=$.length;$.push(Y);e:for(;0<X;){var ue=X-1>>>1,k=$[ue];if(0<s(k,Y))$[ue]=Y,$[X]=k,X=ue;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],X=$.pop();if(X!==Y){$[0]=X;e:for(var ue=0,k=$.length,G=k>>>1;ue<G;){var de=2*(ue+1)-1,Ke=$[de],ke=de+1,qe=$[ke];if(0>s(Ke,X))ke<k&&0>s(qe,Ke)?($[ue]=qe,$[ke]=X,ue=ke):($[ue]=Ke,$[de]=X,ue=de);else if(ke<k&&0>s(qe,X))$[ue]=qe,$[ke]=X,ue=ke;else break e}}return Y}function s($,Y){var X=$.sortIndex-Y.sortIndex;return X!==0?X:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,c=o.now();t.unstable_now=function(){return o.now()-c}}var u=[],d=[],f=1,m=null,g=3,I=!1,R=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=$)r(d),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(d)}}function V($){if(N=!1,T($),!R)if(n(u)!==null)R=!0,Te(F);else{var Y=n(d);Y!==null&&q(V,Y.startTime-$)}}function F($,Y){R=!1,N&&(N=!1,w(y),y=-1),I=!0;var X=g;try{for(T(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||$&&!b());){var ue=m.callback;if(typeof ue=="function"){m.callback=null,g=m.priorityLevel;var k=ue(m.expirationTime<=Y);Y=t.unstable_now(),typeof k=="function"?m.callback=k:m===n(u)&&r(u),T(Y)}else r(u);m=n(u)}if(m!==null)var G=!0;else{var de=n(d);de!==null&&q(V,de.startTime-Y),G=!1}return G}finally{m=null,g=X,I=!1}}var j=!1,v=null,y=-1,S=5,C=-1;function b(){return!(t.unstable_now()-C<S)}function D(){if(v!==null){var $=t.unstable_now();C=$;var Y=!0;try{Y=v(!0,$)}finally{Y?E():(j=!1,v=null)}}else j=!1}var E;if(typeof _=="function")E=function(){_(D)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ge=ie.port2;ie.port1.onmessage=D,E=function(){ge.postMessage(null)}}else E=function(){O(D,0)};function Te($){v=$,j||(j=!0,E())}function q($,Y){y=O(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||I||(R=!0,Te(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var X=g;g=Y;try{return $()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var X=g;g=$;try{return Y()}finally{g=X}},t.unstable_scheduleCallback=function($,Y,X){var ue=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ue+X:ue):X=ue,$){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=X+k,$={id:f++,callback:Y,priorityLevel:$,startTime:X,expirationTime:k,sortIndex:-1},X>ue?($.sortIndex=X,e(d,$),n(u)===null&&$===n(d)&&(N?(w(y),y=-1):N=!0,q(V,X-ue))):($.sortIndex=k,e(u,$),R||I||(R=!0,Te(F))),$},t.unstable_shouldYield=b,t.unstable_wrapCallback=function($){var Y=g;return function(){var X=g;g=Y;try{return $.apply(this,arguments)}finally{g=X}}}})(Sv);Tv.exports=Sv;var lE=Tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE=P,Kt=lE;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iv=new Set,ca={};function Hs(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(ca[t]=e,t=0;t<e.length;t++)Iv.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,uE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fg={},pg={};function dE(t){return rh.call(pg,t)?!0:rh.call(fg,t)?!1:uE.test(t)?pg[t]=!0:(fg[t]=!0,!1)}function hE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fE(t,e,n,r){if(e===null||typeof e>"u"||hE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,Rf);yt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,Rf);yt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,Rf);yt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,r){var s=yt.hasOwnProperty(e)?yt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fE(e,n,s,r)&&(n=null),r||s===null?dE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=cE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),di=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),Cv=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),Nv=Symbol.for("react.offscreen"),mg=Symbol.iterator;function ko(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,pd;function Vo(t){if(pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pd=e&&e[1]||""}return`
`+pd+t}var md=!1;function gd(t,e){if(!t||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,c=i.length-1;1<=o&&0<=c&&s[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(s[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||s[o]!==i[c]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=c);break}}}finally{md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function pE(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=gd(t.type,!1),t;case 11:return t=gd(t.type.render,!1),t;case 1:return t=gd(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case di:return"Portal";case sh:return"Profiler";case jf:return"StrictMode";case ih:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cv:return(t.displayName||"Context")+".Consumer";case kv:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Of:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function mE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ts(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gE(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=gE(t))}function Rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ts(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pv(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function ch(t,e){Pv(t,e);var n=ts(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,ts(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||mc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function Ti(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ts(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Mo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ts(n)}}function jv(t,e){var n=ts(e.value),r=ts(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xl,Ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xl=xl||document.createElement("div"),xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yE=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){yE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function Lv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function Vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Lv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var vE=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(vE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function Lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,Si=null,Ii=null;function _g(t){if(t=$a(t)){if(typeof gh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=mu(e),gh(t.stateNode,t.type,e))}}function Mv(t){Si?Ii?Ii.push(t):Ii=[t]:Si=t}function Fv(){if(Si){var t=Si,e=Ii;if(Ii=Si=null,_g(t),e)for(t=0;t<e.length;t++)_g(e[t])}}function zv(t,e){return t(e)}function Uv(){}var yd=!1;function $v(t,e,n){if(yd)return t(e,n);yd=!0;try{return zv(t,e,n)}finally{yd=!1,(Si!==null||Ii!==null)&&(Uv(),Fv())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var yh=!1;if(ir)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){yh=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{yh=!1}function xE(t,e,n,r,s,i,o,c,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Ko=!1,gc=null,yc=!1,vh=null,_E={onError:function(t){Ko=!0,gc=t}};function wE(t,e,n,r,s,i,o,c,u){Ko=!1,gc=null,xE.apply(_E,arguments)}function bE(t,e,n,r,s,i,o,c,u){if(wE.apply(this,arguments),Ko){if(Ko){var d=gc;Ko=!1,gc=null}else throw Error(B(198));yc||(yc=!0,vh=d)}}function Ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wg(t){if(Ws(t)!==t)throw Error(B(188))}function EE(t){var e=t.alternate;if(!e){if(e=Ws(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return wg(s),t;if(i===r)return wg(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,c=s.child;c;){if(c===n){o=!0,n=s,r=i;break}if(c===r){o=!0,r=s,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=s;break}if(c===r){o=!0,r=i,n=s;break}c=c.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function qv(t){return t=EE(t),t!==null?Hv(t):null}function Hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hv(t);if(e!==null)return e;t=t.sibling}return null}var Wv=Kt.unstable_scheduleCallback,bg=Kt.unstable_cancelCallback,TE=Kt.unstable_shouldYield,SE=Kt.unstable_requestPaint,We=Kt.unstable_now,IE=Kt.unstable_getCurrentPriorityLevel,Vf=Kt.unstable_ImmediatePriority,Gv=Kt.unstable_UserBlockingPriority,vc=Kt.unstable_NormalPriority,kE=Kt.unstable_LowPriority,Kv=Kt.unstable_IdlePriority,du=null,Pn=null;function CE(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:RE,NE=Math.log,AE=Math.LN2;function RE(t){return t>>>=0,t===0?32:31-(NE(t)/AE|0)|0}var _l=64,wl=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var c=o&~s;c!==0?r=Fo(c):(i&=o,i!==0&&(r=Fo(i)))}else o=n&~s,o!==0?r=Fo(o):i!==0&&(r=Fo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),s=1<<n,r|=t[n],e&=~s;return r}function PE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-mn(i),c=1<<o,u=s[o];u===-1?(!(c&n)||c&r)&&(s[o]=PE(c,e)):u<=e&&(t.expiredLanes|=c),i&=~c}}function xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qv(){var t=_l;return _l<<=1,!(_l&4194240)&&(_l=64),t}function vd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function DE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-mn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var be=0;function Yv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jv,Ff,Xv,Zv,ex,_h=!1,bl=[],zr=null,Ur=null,$r=null,ha=new Map,fa=new Map,Nr=[],OE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eg(t,e){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function No(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=$a(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function LE(t,e,n,r,s){switch(e){case"focusin":return zr=No(zr,t,e,n,r,s),!0;case"dragenter":return Ur=No(Ur,t,e,n,r,s),!0;case"mouseover":return $r=No($r,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ha.set(i,No(ha.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,fa.set(i,No(fa.get(i)||null,t,e,n,r,s)),!0}return!1}function tx(t){var e=Ss(t.target);if(e!==null){var n=Ws(e);if(n!==null){if(e=n.tag,e===13){if(e=Bv(n),e!==null){t.blockedOn=e,ex(t.priority,function(){Xv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=$a(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function Tg(t,e,n){Wl(t)&&n.delete(e)}function VE(){_h=!1,zr!==null&&Wl(zr)&&(zr=null),Ur!==null&&Wl(Ur)&&(Ur=null),$r!==null&&Wl($r)&&($r=null),ha.forEach(Tg),fa.forEach(Tg)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,VE)))}function pa(t){function e(s){return Ao(s,t)}if(0<bl.length){Ao(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zr!==null&&Ao(zr,t),Ur!==null&&Ao(Ur,t),$r!==null&&Ao($r,t),ha.forEach(e),fa.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)tx(n),n.blockedOn===null&&Nr.shift()}var ki=pr.ReactCurrentBatchConfig,_c=!0;function ME(t,e,n,r){var s=be,i=ki.transition;ki.transition=null;try{be=1,zf(t,e,n,r)}finally{be=s,ki.transition=i}}function FE(t,e,n,r){var s=be,i=ki.transition;ki.transition=null;try{be=4,zf(t,e,n,r)}finally{be=s,ki.transition=i}}function zf(t,e,n,r){if(_c){var s=wh(t,e,n,r);if(s===null)Cd(t,e,r,wc,n),Eg(t,r);else if(LE(s,t,e,n,r))r.stopPropagation();else if(Eg(t,r),e&4&&-1<OE.indexOf(t)){for(;s!==null;){var i=$a(s);if(i!==null&&Jv(i),i=wh(t,e,n,r),i===null&&Cd(t,e,r,wc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Cd(t,e,r,null,n)}}var wc=null;function wh(t,e,n,r){if(wc=null,t=Lf(r),t=Ss(t),t!==null)if(e=Ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function nx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IE()){case Vf:return 1;case Gv:return 4;case vc:case kE:return 16;case Kv:return 536870912;default:return 16}default:return 16}}var Vr=null,Uf=null,Gl=null;function rx(){if(Gl)return Gl;var t,e=Uf,n=e.length,r,s="value"in Vr?Vr.value:Vr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Gl=s.slice(t,1<r?1-r:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Sg(){return!1}function Yt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?El:Sg,this.isPropagationStopped=Sg,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=Yt(Zi),Ua=Fe({},Zi,{view:0,detail:0}),zE=Yt(Ua),xd,_d,Ro,hu=Fe({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(xd=t.screenX-Ro.screenX,_d=t.screenY-Ro.screenY):_d=xd=0,Ro=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:_d}}),Ig=Yt(hu),UE=Fe({},hu,{dataTransfer:0}),$E=Yt(UE),BE=Fe({},Ua,{relatedTarget:0}),wd=Yt(BE),qE=Fe({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),HE=Yt(qE),WE=Fe({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GE=Yt(WE),KE=Fe({},Zi,{data:0}),kg=Yt(KE),QE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JE[t])?!!e[t]:!1}function Bf(){return XE}var ZE=Fe({},Ua,{key:function(t){if(t.key){var e=QE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e2=Yt(ZE),t2=Fe({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=Yt(t2),n2=Fe({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),r2=Yt(n2),s2=Fe({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),i2=Yt(s2),o2=Fe({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a2=Yt(o2),l2=[9,13,27,32],qf=ir&&"CompositionEvent"in window,Qo=null;ir&&"documentMode"in document&&(Qo=document.documentMode);var c2=ir&&"TextEvent"in window&&!Qo,sx=ir&&(!qf||Qo&&8<Qo&&11>=Qo),Ng=" ",Ag=!1;function ix(t,e){switch(t){case"keyup":return l2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ox(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function u2(t,e){switch(t){case"compositionend":return ox(e);case"keypress":return e.which!==32?null:(Ag=!0,Ng);case"textInput":return t=e.data,t===Ng&&Ag?null:t;default:return null}}function d2(t,e){if(fi)return t==="compositionend"||!qf&&ix(t,e)?(t=rx(),Gl=Uf=Vr=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sx&&e.locale!=="ko"?null:e.data;default:return null}}var h2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h2[t.type]:e==="textarea"}function ax(t,e,n,r){Mv(r),e=bc(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yo=null,ma=null;function f2(t){vx(t,0)}function fu(t){var e=gi(t);if(Rv(e))return t}function p2(t,e){if(t==="change")return e}var lx=!1;if(ir){var bd;if(ir){var Ed="oninput"in document;if(!Ed){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),Ed=typeof Pg.oninput=="function"}bd=Ed}else bd=!1;lx=bd&&(!document.documentMode||9<document.documentMode)}function jg(){Yo&&(Yo.detachEvent("onpropertychange",cx),ma=Yo=null)}function cx(t){if(t.propertyName==="value"&&fu(ma)){var e=[];ax(e,ma,t,Lf(t)),$v(f2,e)}}function m2(t,e,n){t==="focusin"?(jg(),Yo=e,ma=n,Yo.attachEvent("onpropertychange",cx)):t==="focusout"&&jg()}function g2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(ma)}function y2(t,e){if(t==="click")return fu(e)}function v2(t,e){if(t==="input"||t==="change")return fu(e)}function x2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:x2;function ga(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!rh.call(e,s)||!_n(t[s],e[s]))return!1}return!0}function Dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Og(t,e){var n=Dg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dg(n)}}function ux(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ux(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dx(){for(var t=window,e=mc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mc(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _2(t){var e=dx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ux(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Og(n,i);var o=Og(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w2=ir&&"documentMode"in document&&11>=document.documentMode,pi=null,bh=null,Jo=null,Eh=!1;function Lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eh||pi==null||pi!==mc(r)||(r=pi,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&ga(Jo,r)||(Jo=r,r=bc(bh,"onSelect"),0<r.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function Tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Td={},hx={};ir&&(hx=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function pu(t){if(Td[t])return Td[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hx)return Td[t]=e[n];return t}var fx=pu("animationend"),px=pu("animationiteration"),mx=pu("animationstart"),gx=pu("transitionend"),yx=new Map,Vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(t,e){yx.set(t,e),Hs(e,[t])}for(var Sd=0;Sd<Vg.length;Sd++){var Id=Vg[Sd],b2=Id.toLowerCase(),E2=Id[0].toUpperCase()+Id.slice(1);us(b2,"on"+E2)}us(fx,"onAnimationEnd");us(px,"onAnimationIteration");us(mx,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(gx,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);Hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T2=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function Mg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bE(r,e,void 0,t),t.currentTarget=null}function vx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,d=c.currentTarget;if(c=c.listener,u!==i&&s.isPropagationStopped())break e;Mg(s,c,d),i=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,d=c.currentTarget,c=c.listener,u!==i&&s.isPropagationStopped())break e;Mg(s,c,d),i=u}}}if(yc)throw t=vh,yc=!1,vh=null,t}function Re(t,e){var n=e[Ch];n===void 0&&(n=e[Ch]=new Set);var r=t+"__bubble";n.has(r)||(xx(e,t,2,!1),n.add(r))}function kd(t,e,n){var r=0;e&&(r|=4),xx(n,t,r,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Sl]){t[Sl]=!0,Iv.forEach(function(n){n!=="selectionchange"&&(T2.has(n)||kd(n,!1,t),kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,kd("selectionchange",!1,e))}}function xx(t,e,n,r){switch(nx(e)){case 1:var s=ME;break;case 4:s=FE;break;default:s=zf}n=s.bind(null,e,n,t),s=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Cd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;c!==null;){if(o=Ss(c),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}c=c.parentNode}}r=r.return}$v(function(){var d=i,f=Lf(n),m=[];e:{var g=yx.get(t);if(g!==void 0){var I=$f,R=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":I=e2;break;case"focusin":R="focus",I=wd;break;case"focusout":R="blur",I=wd;break;case"beforeblur":case"afterblur":I=wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=$E;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=r2;break;case fx:case px:case mx:I=HE;break;case gx:I=i2;break;case"scroll":I=zE;break;case"wheel":I=a2;break;case"copy":case"cut":case"paste":I=GE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Cg}var N=(e&4)!==0,O=!N&&t==="scroll",w=N?g!==null?g+"Capture":null:g;N=[];for(var _=d,T;_!==null;){T=_;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,w!==null&&(V=da(_,w),V!=null&&N.push(va(_,V,T)))),O)break;_=_.return}0<N.length&&(g=new I(g,R,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==mh&&(R=n.relatedTarget||n.fromElement)&&(Ss(R)||R[or]))break e;if((I||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,I?(R=n.relatedTarget||n.toElement,I=d,R=R?Ss(R):null,R!==null&&(O=Ws(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=d),I!==R)){if(N=Ig,V="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Cg,V="onPointerLeave",w="onPointerEnter",_="pointer"),O=I==null?g:gi(I),T=R==null?g:gi(R),g=new N(V,_+"leave",I,n,f),g.target=O,g.relatedTarget=T,V=null,Ss(f)===d&&(N=new N(w,_+"enter",R,n,f),N.target=T,N.relatedTarget=O,V=N),O=V,I&&R)t:{for(N=I,w=R,_=0,T=N;T;T=oi(T))_++;for(T=0,V=w;V;V=oi(V))T++;for(;0<_-T;)N=oi(N),_--;for(;0<T-_;)w=oi(w),T--;for(;_--;){if(N===w||w!==null&&N===w.alternate)break t;N=oi(N),w=oi(w)}N=null}else N=null;I!==null&&Fg(m,g,I,N,!1),R!==null&&O!==null&&Fg(m,O,R,N,!0)}}e:{if(g=d?gi(d):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var F=p2;else if(Rg(g))if(lx)F=v2;else{F=g2;var j=m2}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=y2);if(F&&(F=F(t,d))){ax(m,F,n,f);break e}j&&j(t,g,d),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&uh(g,"number",g.value)}switch(j=d?gi(d):window,t){case"focusin":(Rg(j)||j.contentEditable==="true")&&(pi=j,bh=d,Jo=null);break;case"focusout":Jo=bh=pi=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,Lg(m,n,f);break;case"selectionchange":if(w2)break;case"keydown":case"keyup":Lg(m,n,f)}var v;if(qf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else fi?ix(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(sx&&n.locale!=="ko"&&(fi||y!=="onCompositionStart"?y==="onCompositionEnd"&&fi&&(v=rx()):(Vr=f,Uf="value"in Vr?Vr.value:Vr.textContent,fi=!0)),j=bc(d,y),0<j.length&&(y=new kg(y,t,null,n,f),m.push({event:y,listeners:j}),v?y.data=v:(v=ox(n),v!==null&&(y.data=v)))),(v=c2?u2(t,n):d2(t,n))&&(d=bc(d,"onBeforeInput"),0<d.length&&(f=new kg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=v))}vx(m,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=da(t,n),i!=null&&r.unshift(va(t,i,s)),i=da(t,e),i!=null&&r.push(va(t,i,s))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,d=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&d!==null&&(c=d,s?(u=da(n,i),u!=null&&o.unshift(va(n,u,c))):s||(u=da(n,i),u!=null&&o.push(va(n,u,c)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var S2=/\r\n?/g,I2=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(S2,`
`).replace(I2,"")}function Il(t,e,n){if(e=zg(e),zg(t)!==e&&n)throw Error(B(425))}function Ec(){}var Th=null,Sh=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,k2=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,C2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(N2)}:kh;function N2(t){setTimeout(function(){throw t})}function Nd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);pa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+eo,xa="__reactProps$"+eo,or="__reactContainer$"+eo,Ch="__reactEvents$"+eo,A2="__reactListeners$"+eo,R2="__reactHandles$"+eo;function Ss(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$g(t);t!==null;){if(n=t[Rn])return n;t=$g(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[Rn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function mu(t){return t[xa]||null}var Nh=[],yi=-1;function ds(t){return{current:t}}function Pe(t){0>yi||(t.current=Nh[yi],Nh[yi]=null,yi--)}function Ne(t,e){yi++,Nh[yi]=t.current,t.current=e}var ns={},It=ds(ns),zt=ds(!1),js=ns;function Mi(t,e){var n=t.type.contextTypes;if(!n)return ns;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ut(t){return t=t.childContextTypes,t!=null}function Tc(){Pe(zt),Pe(It)}function Bg(t,e,n){if(It.current!==ns)throw Error(B(168));Ne(It,e),Ne(zt,n)}function _x(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,mE(t)||"Unknown",s));return Fe({},n,r)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,js=It.current,Ne(It,t),Ne(zt,zt.current),!0}function qg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=_x(t,e,js),r.__reactInternalMemoizedMergedChildContext=t,Pe(zt),Pe(It),Ne(It,t)):Pe(zt),Ne(zt,n)}var Yn=null,gu=!1,Ad=!1;function wx(t){Yn===null?Yn=[t]:Yn.push(t)}function P2(t){gu=!0,wx(t)}function hs(){if(!Ad&&Yn!==null){Ad=!0;var t=0,e=be;try{var n=Yn;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,gu=!1}catch(s){throw Yn!==null&&(Yn=Yn.slice(t+1)),Wv(Vf,hs),s}finally{be=e,Ad=!1}}return null}var vi=[],xi=0,Ic=null,kc=0,Xt=[],Zt=0,Ds=null,Xn=1,Zn="";function bs(t,e){vi[xi++]=kc,vi[xi++]=Ic,Ic=t,kc=e}function bx(t,e,n){Xt[Zt++]=Xn,Xt[Zt++]=Zn,Xt[Zt++]=Ds,Ds=t;var r=Xn;t=Zn;var s=32-mn(r)-1;r&=~(1<<s),n+=1;var i=32-mn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Xn=1<<32-mn(e)+s|n<<s|r,Zn=i+t}else Xn=1<<i|n<<s|r,Zn=t}function Wf(t){t.return!==null&&(bs(t,1),bx(t,1,0))}function Gf(t){for(;t===Ic;)Ic=vi[--xi],vi[xi]=null,kc=vi[--xi],vi[xi]=null;for(;t===Ds;)Ds=Xt[--Zt],Xt[Zt]=null,Zn=Xt[--Zt],Xt[Zt]=null,Xn=Xt[--Zt],Xt[Zt]=null}var Gt=null,Ht=null,De=!1,hn=null;function Ex(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ds!==null?{id:Xn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Ht=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rh(t){if(De){var e=Ht;if(e){var n=e;if(!Hg(t,e)){if(Ah(t))throw Error(B(418));e=Br(n.nextSibling);var r=Gt;e&&Hg(t,e)?Ex(r,n):(t.flags=t.flags&-4097|2,De=!1,Gt=t)}}else{if(Ah(t))throw Error(B(418));t.flags=t.flags&-4097|2,De=!1,Gt=t}}}function Wg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function kl(t){if(t!==Gt)return!1;if(!De)return Wg(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=Ht)){if(Ah(t))throw Tx(),Error(B(418));for(;e;)Ex(t,e),e=Br(e.nextSibling)}if(Wg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Gt?Br(t.stateNode.nextSibling):null;return!0}function Tx(){for(var t=Ht;t;)t=Br(t.nextSibling)}function Fi(){Ht=Gt=null,De=!1}function Kf(t){hn===null?hn=[t]:hn.push(t)}var j2=pr.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var c=s.refs;o===null?delete c[i]:c[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Cl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gg(t){var e=t._init;return e(t._payload)}function Sx(t){function e(w,_){if(t){var T=w.deletions;T===null?(w.deletions=[_],w.flags|=16):T.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=Gr(w,_),w.index=0,w.sibling=null,w}function i(w,_,T){return w.index=T,t?(T=w.alternate,T!==null?(T=T.index,T<_?(w.flags|=2,_):T):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function c(w,_,T,V){return _===null||_.tag!==6?(_=Vd(T,w.mode,V),_.return=w,_):(_=s(_,T),_.return=w,_)}function u(w,_,T,V){var F=T.type;return F===hi?f(w,_,T.props.children,V,T.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ir&&Gg(F)===_.type)?(V=s(_,T.props),V.ref=Po(w,_,T),V.return=w,V):(V=tc(T.type,T.key,T.props,null,w.mode,V),V.ref=Po(w,_,T),V.return=w,V)}function d(w,_,T,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Md(T,w.mode,V),_.return=w,_):(_=s(_,T.children||[]),_.return=w,_)}function f(w,_,T,V,F){return _===null||_.tag!==7?(_=Rs(T,w.mode,V,F),_.return=w,_):(_=s(_,T),_.return=w,_)}function m(w,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Vd(""+_,w.mode,T),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yl:return T=tc(_.type,_.key,_.props,null,w.mode,T),T.ref=Po(w,null,_),T.return=w,T;case di:return _=Md(_,w.mode,T),_.return=w,_;case Ir:var V=_._init;return m(w,V(_._payload),T)}if(Mo(_)||ko(_))return _=Rs(_,w.mode,T,null),_.return=w,_;Cl(w,_)}return null}function g(w,_,T,V){var F=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:c(w,_,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case yl:return T.key===F?u(w,_,T,V):null;case di:return T.key===F?d(w,_,T,V):null;case Ir:return F=T._init,g(w,_,F(T._payload),V)}if(Mo(T)||ko(T))return F!==null?null:f(w,_,T,V,null);Cl(w,T)}return null}function I(w,_,T,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return w=w.get(T)||null,c(_,w,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case yl:return w=w.get(V.key===null?T:V.key)||null,u(_,w,V,F);case di:return w=w.get(V.key===null?T:V.key)||null,d(_,w,V,F);case Ir:var j=V._init;return I(w,_,T,j(V._payload),F)}if(Mo(V)||ko(V))return w=w.get(T)||null,f(_,w,V,F,null);Cl(_,V)}return null}function R(w,_,T,V){for(var F=null,j=null,v=_,y=_=0,S=null;v!==null&&y<T.length;y++){v.index>y?(S=v,v=null):S=v.sibling;var C=g(w,v,T[y],V);if(C===null){v===null&&(v=S);break}t&&v&&C.alternate===null&&e(w,v),_=i(C,_,y),j===null?F=C:j.sibling=C,j=C,v=S}if(y===T.length)return n(w,v),De&&bs(w,y),F;if(v===null){for(;y<T.length;y++)v=m(w,T[y],V),v!==null&&(_=i(v,_,y),j===null?F=v:j.sibling=v,j=v);return De&&bs(w,y),F}for(v=r(w,v);y<T.length;y++)S=I(v,w,y,T[y],V),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?y:S.key),_=i(S,_,y),j===null?F=S:j.sibling=S,j=S);return t&&v.forEach(function(b){return e(w,b)}),De&&bs(w,y),F}function N(w,_,T,V){var F=ko(T);if(typeof F!="function")throw Error(B(150));if(T=F.call(T),T==null)throw Error(B(151));for(var j=F=null,v=_,y=_=0,S=null,C=T.next();v!==null&&!C.done;y++,C=T.next()){v.index>y?(S=v,v=null):S=v.sibling;var b=g(w,v,C.value,V);if(b===null){v===null&&(v=S);break}t&&v&&b.alternate===null&&e(w,v),_=i(b,_,y),j===null?F=b:j.sibling=b,j=b,v=S}if(C.done)return n(w,v),De&&bs(w,y),F;if(v===null){for(;!C.done;y++,C=T.next())C=m(w,C.value,V),C!==null&&(_=i(C,_,y),j===null?F=C:j.sibling=C,j=C);return De&&bs(w,y),F}for(v=r(w,v);!C.done;y++,C=T.next())C=I(v,w,y,C.value,V),C!==null&&(t&&C.alternate!==null&&v.delete(C.key===null?y:C.key),_=i(C,_,y),j===null?F=C:j.sibling=C,j=C);return t&&v.forEach(function(D){return e(w,D)}),De&&bs(w,y),F}function O(w,_,T,V){if(typeof T=="object"&&T!==null&&T.type===hi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case yl:e:{for(var F=T.key,j=_;j!==null;){if(j.key===F){if(F=T.type,F===hi){if(j.tag===7){n(w,j.sibling),_=s(j,T.props.children),_.return=w,w=_;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ir&&Gg(F)===j.type){n(w,j.sibling),_=s(j,T.props),_.ref=Po(w,j,T),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}T.type===hi?(_=Rs(T.props.children,w.mode,V,T.key),_.return=w,w=_):(V=tc(T.type,T.key,T.props,null,w.mode,V),V.ref=Po(w,_,T),V.return=w,w=V)}return o(w);case di:e:{for(j=T.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(w,_.sibling),_=s(_,T.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Md(T,w.mode,V),_.return=w,w=_}return o(w);case Ir:return j=T._init,O(w,_,j(T._payload),V)}if(Mo(T))return R(w,_,T,V);if(ko(T))return N(w,_,T,V);Cl(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,T),_.return=w,w=_):(n(w,_),_=Vd(T,w.mode,V),_.return=w,w=_),o(w)):n(w,_)}return O}var zi=Sx(!0),Ix=Sx(!1),Cc=ds(null),Nc=null,_i=null,Qf=null;function Yf(){Qf=_i=Nc=null}function Jf(t){var e=Cc.current;Pe(Cc),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){Nc=t,Qf=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Qf!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(Nc===null)throw Error(B(308));_i=t,Nc.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Is=null;function Xf(t){Is===null?Is=[t]:Is.push(t)}function kx(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Xf(e)):(n.next=s.next,s.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,ar(t,n)}return s=r.interleaved,s===null?(e.next=e,Xf(r)):(e.next=s.next,s.next=e),r.interleaved=e,ar(t,n)}function Ql(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mf(t,n)}}function Kg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,r){var s=t.updateQueue;kr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==o&&(c===null?f.firstBaseUpdate=d:c.next=d,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=d=u=null,c=i;do{var g=c.lane,I=c.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:I,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var R=t,N=c;switch(g=e,I=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(I,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(I,m,g):R,g==null)break e;m=Fe({},m,g);break e;case 2:kr=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[c]:g.push(c))}else I={eventTime:I,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(d=f=I,u=m):f=f.next=I,o|=g;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;g=c,c=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ls|=o,t.lanes=o,t.memoizedState=m}}function Qg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var Ba={},jn=ds(Ba),_a=ds(Ba),wa=ds(Ba);function ks(t){if(t===Ba)throw Error(B(174));return t}function ep(t,e){switch(Ne(wa,e),Ne(_a,t),Ne(jn,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hh(e,t)}Pe(jn),Ne(jn,e)}function Ui(){Pe(jn),Pe(_a),Pe(wa)}function Nx(t){ks(wa.current);var e=ks(jn.current),n=hh(e,t.type);e!==n&&(Ne(_a,t),Ne(jn,n))}function tp(t){_a.current===t&&(Pe(jn),Pe(_a))}var Ve=ds(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rd=[];function np(){for(var t=0;t<Rd.length;t++)Rd[t]._workInProgressVersionPrimary=null;Rd.length=0}var Yl=pr.ReactCurrentDispatcher,Pd=pr.ReactCurrentBatchConfig,Os=0,Me=null,nt=null,ut=null,Pc=!1,Xo=!1,ba=0,D2=0;function xt(){throw Error(B(321))}function rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function sp(t,e,n,r,s,i){if(Os=i,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?M2:F2,t=n(r,s),Xo){i=0;do{if(Xo=!1,ba=0,25<=i)throw Error(B(301));i+=1,ut=nt=null,e.updateQueue=null,Yl.current=z2,t=n(r,s)}while(Xo)}if(Yl.current=jc,e=nt!==null&&nt.next!==null,Os=0,ut=nt=Me=null,Pc=!1,e)throw Error(B(300));return t}function ip(){var t=ba!==0;return ba=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Me.memoizedState=ut=t:ut=ut.next=t,ut}function on(){if(nt===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=ut===null?Me.memoizedState:ut.next;if(e!==null)ut=e,nt=t;else{if(t===null)throw Error(B(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ut===null?Me.memoizedState=ut=t:ut=ut.next=t}return ut}function Ea(t,e){return typeof e=="function"?e(t):e}function jd(t){var e=on(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=nt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var c=o=null,u=null,d=i;do{var f=d.lane;if((Os&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(c=u=m,o=r):u=u.next=m,Me.lanes|=f,Ls|=f}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=c,_n(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Me.lanes|=i,Ls|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dd(t){var e=on(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);_n(i,e.memoizedState)||(Ft=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Ax(){}function Rx(t,e){var n=Me,r=on(),s=e(),i=!_n(r.memoizedState,s);if(i&&(r.memoizedState=s,Ft=!0),r=r.queue,op(Dx.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,Ta(9,jx.bind(null,n,r,s,e),void 0,null),dt===null)throw Error(B(349));Os&30||Px(n,e,s)}return s}function Px(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jx(t,e,n,r){e.value=n,e.getSnapshot=r,Ox(e)&&Lx(t)}function Dx(t,e,n){return n(function(){Ox(e)&&Lx(t)})}function Ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function Lx(t){var e=ar(t,1);e!==null&&gn(e,t,1,-1)}function Yg(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=V2.bind(null,Me,t),[e.memoizedState,t]}function Ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vx(){return on().memoizedState}function Jl(t,e,n,r){var s=Nn();Me.flags|=t,s.memoizedState=Ta(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var s=on();r=r===void 0?null:r;var i=void 0;if(nt!==null){var o=nt.memoizedState;if(i=o.destroy,r!==null&&rp(r,o.deps)){s.memoizedState=Ta(e,n,i,r);return}}Me.flags|=t,s.memoizedState=Ta(1|e,n,i,r)}function Jg(t,e){return Jl(8390656,8,t,e)}function op(t,e){return yu(2048,8,t,e)}function Mx(t,e){return yu(4,2,t,e)}function Fx(t,e){return yu(4,4,t,e)}function zx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ux(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,zx.bind(null,e,t),n)}function ap(){}function $x(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Bx(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qx(t,e,n){return Os&21?(_n(n,e)||(n=Qv(),Me.lanes|=n,Ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function O2(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{be=n,Pd.transition=r}}function Hx(){return on().memoizedState}function L2(t,e,n){var r=Wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wx(t))Gx(e,n);else if(n=kx(t,e,n,r),n!==null){var s=jt();gn(n,t,r,s),Kx(n,e,r)}}function V2(t,e,n){var r=Wr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wx(t))Gx(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,c=i(o,n);if(s.hasEagerState=!0,s.eagerState=c,_n(c,o)){var u=e.interleaved;u===null?(s.next=s,Xf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=kx(t,e,s,r),n!==null&&(s=jt(),gn(n,t,r,s),Kx(n,e,r))}}function Wx(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function Gx(t,e){Xo=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mf(t,n)}}var jc={readContext:sn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},M2={readContext:sn,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Jg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,zx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=L2.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:Yg,useDebugValue:ap,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=Yg(!1),e=t[0];return t=O2.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,s=Nn();if(De){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),dt===null)throw Error(B(349));Os&30||Px(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Jg(Dx.bind(null,r,i,t),[t]),r.flags|=2048,Ta(9,jx.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Nn(),e=dt.identifierPrefix;if(De){var n=Zn,r=Xn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=D2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F2={readContext:sn,useCallback:$x,useContext:sn,useEffect:op,useImperativeHandle:Ux,useInsertionEffect:Mx,useLayoutEffect:Fx,useMemo:Bx,useReducer:jd,useRef:Vx,useState:function(){return jd(Ea)},useDebugValue:ap,useDeferredValue:function(t){var e=on();return qx(e,nt.memoizedState,t)},useTransition:function(){var t=jd(Ea)[0],e=on().memoizedState;return[t,e]},useMutableSource:Ax,useSyncExternalStore:Rx,useId:Hx,unstable_isNewReconciler:!1},z2={readContext:sn,useCallback:$x,useContext:sn,useEffect:op,useImperativeHandle:Ux,useInsertionEffect:Mx,useLayoutEffect:Fx,useMemo:Bx,useReducer:Dd,useRef:Vx,useState:function(){return Dd(Ea)},useDebugValue:ap,useDeferredValue:function(t){var e=on();return nt===null?e.memoizedState=t:qx(e,nt.memoizedState,t)},useTransition:function(){var t=Dd(Ea)[0],e=on().memoizedState;return[t,e]},useMutableSource:Ax,useSyncExternalStore:Rx,useId:Hx,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),s=Wr(t),i=nr(r,s);i.payload=e,n!=null&&(i.callback=n),e=qr(t,i,s),e!==null&&(gn(e,t,s,r),Ql(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),s=Wr(t),i=nr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=qr(t,i,s),e!==null&&(gn(e,t,s,r),Ql(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=Wr(t),s=nr(n,r);s.tag=2,e!=null&&(s.callback=e),e=qr(t,s,r),e!==null&&(gn(e,t,r,n),Ql(e,t,r))}};function Xg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(s,i):!0}function Qx(t,e,n){var r=!1,s=ns,i=e.contextType;return typeof i=="object"&&i!==null?i=sn(i):(s=Ut(e)?js:It.current,r=e.contextTypes,i=(r=r!=null)?Mi(t,s):ns),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Zg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Zf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=sn(i):(i=Ut(e)?js:It.current,s.context=Mi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(jh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&vu.enqueueReplaceState(s,s.state,null),Ac(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function $i(t,e){try{var n="",r=e;do n+=pE(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U2=typeof WeakMap=="function"?WeakMap:Map;function Yx(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Oc||(Oc=!0,Hh=r),Oh(t,e)},n}function Jx(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Oh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Oh(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ey(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new U2;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=tT.bind(null,t,e,n),e.then(t,t))}function ty(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ny(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var $2=pr.ReactCurrentOwner,Ft=!1;function Rt(t,e,n,r){e.child=t===null?Ix(e,null,n,r):zi(e,t.child,n,r)}function ry(t,e,n,r,s){n=n.render;var i=e.ref;return Ci(e,s),r=sp(t,e,n,r,i,s),n=ip(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,lr(t,e,s)):(De&&n&&Wf(e),e.flags|=1,Rt(t,e,r,s),e.child)}function sy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!mp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Xx(t,e,i,r,s)):(t=tc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return lr(t,e,s)}return e.flags|=1,t=Gr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Xx(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ga(i,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,lr(t,e,s)}return Lh(t,e,n,r,s)}function Zx(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(bi,qt),qt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(bi,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ne(bi,qt),qt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ne(bi,qt),qt|=r;return Rt(t,e,s,n),e.child}function e_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lh(t,e,n,r,s){var i=Ut(n)?js:It.current;return i=Mi(e,i),Ci(e,s),n=sp(t,e,n,r,i,s),r=ip(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,lr(t,e,s)):(De&&r&&Wf(e),e.flags|=1,Rt(t,e,n,s),e.child)}function iy(t,e,n,r,s){if(Ut(n)){var i=!0;Sc(e)}else i=!1;if(Ci(e,s),e.stateNode===null)Xl(t,e),Qx(e,n,r),Dh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,c=e.memoizedProps;o.props=c;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=sn(d):(d=Ut(n)?js:It.current,d=Mi(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==d)&&Zg(e,o,r,d),kr=!1;var g=e.memoizedState;o.state=g,Ac(e,r,o,s),u=e.memoizedState,c!==r||g!==u||zt.current||kr?(typeof f=="function"&&(jh(e,n,f,r),u=e.memoizedState),(c=kr||Xg(e,n,c,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cx(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:un(e.type,c),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=Ut(n)?js:It.current,u=Mi(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==m||g!==u)&&Zg(e,o,r,u),kr=!1,g=e.memoizedState,o.state=g,Ac(e,r,o,s);var R=e.memoizedState;c!==m||g!==R||zt.current||kr?(typeof I=="function"&&(jh(e,n,I,r),R=e.memoizedState),(d=kr||Xg(e,n,d,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Vh(t,e,n,r,i,s)}function Vh(t,e,n,r,s,i){e_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&qg(e,n,!1),lr(t,e,i);r=e.stateNode,$2.current=e;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,i),e.child=zi(e,null,c,i)):Rt(t,e,c,i),e.memoizedState=r.state,s&&qg(e,n,!0),e.child}function t_(t){var e=t.stateNode;e.pendingContext?Bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bg(t,e.context,!1),ep(t,e.containerInfo)}function oy(t,e,n,r,s){return Fi(),Kf(s),e.flags|=256,Rt(t,e,n,r),e.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function n_(t,e,n){var r=e.pendingProps,s=Ve.current,i=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ne(Ve,s&1),t===null)return Rh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=wu(o,r,0,null),t=Rs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Fh(n),e.memoizedState=Mh,t):lp(e,o));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return B2(t,e,o,r,c,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,c=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Gr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?i=Gr(c,i):(i=Rs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Mh,r}return i=t.child,t=i.sibling,r=Gr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lp(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,r){return r!==null&&Kf(r),zi(e,t.child,null,n),t=lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function B2(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Od(Error(B(422))),Nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=wu({mode:"visible",children:r.children},s,0,null),i=Rs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=Fh(o),e.memoizedState=Mh,i);if(!(e.mode&1))return Nl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(B(419)),r=Od(i,r,void 0),Nl(t,e,o,r)}if(c=(o&t.childLanes)!==0,Ft||c){if(r=dt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,ar(t,s),gn(r,t,s,-1))}return pp(),r=Od(Error(B(421))),Nl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=nT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ht=Br(s.nextSibling),Gt=e,De=!0,hn=null,t!==null&&(Xt[Zt++]=Xn,Xt[Zt++]=Zn,Xt[Zt++]=Ds,Xn=t.id,Zn=t.overflow,Ds=e),e=lp(e,r.children),e.flags|=4096,e)}function ay(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Ld(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function r_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Rt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ay(t,n,e);else if(t.tag===19)ay(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ld(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Rc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ld(e,!0,n,null,i);break;case"together":Ld(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function q2(t,e,n){switch(e.tag){case 3:t_(e),Fi();break;case 5:Nx(e);break;case 1:Ut(e.type)&&Sc(e);break;case 4:ep(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ne(Cc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?n_(t,e,n):(Ne(Ve,Ve.current&1),t=lr(t,e,n),t!==null?t.sibling:null);Ne(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return r_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Zx(t,e,n)}return lr(t,e,n)}var s_,zh,i_,o_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};i_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ks(jn.current);var i=null;switch(n){case"input":s=lh(t,s),r=lh(t,r),i=[];break;case"select":s=Fe({},s,{value:void 0}),r=Fe({},r,{value:void 0}),i=[];break;case"textarea":s=dh(t,s),r=dh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ec)}fh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ca.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(c=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==c&&(u!=null||c!=null))if(d==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ca.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Re("scroll",t),i||c===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};o_=function(t,e,n,r){n!==r&&(e.flags|=4)};function jo(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function H2(t,e,n){var r=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ut(e.type)&&Tc(),_t(e),null;case 3:return r=e.stateNode,Ui(),Pe(zt),Pe(It),np(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Kh(hn),hn=null))),zh(t,e),_t(e),null;case 5:tp(e);var s=ks(wa.current);if(n=e.type,t!==null&&e.stateNode!=null)i_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return _t(e),null}if(t=ks(jn.current),kl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Rn]=e,r[xa]=i,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(s=0;s<zo.length;s++)Re(zo[s],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":gg(r,i),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Re("invalid",r);break;case"textarea":vg(r,i),Re("invalid",r)}fh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,c,t),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Il(r.textContent,c,t),s=["children",""+c]):ca.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":vl(r),yg(r,i,!0);break;case"textarea":vl(r),xg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ec)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[xa]=r,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":Re("cancel",t),Re("close",t),s=r;break;case"iframe":case"object":case"embed":Re("load",t),s=r;break;case"video":case"audio":for(s=0;s<zo.length;s++)Re(zo[s],t);s=r;break;case"source":Re("error",t),s=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),s=r;break;case"details":Re("toggle",t),s=r;break;case"input":gg(t,r),s=lh(t,r),Re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Fe({},r,{value:void 0}),Re("invalid",t);break;case"textarea":vg(t,r),s=dh(t,r),Re("invalid",t);break;default:s=r}fh(n,s),c=s;for(i in c)if(c.hasOwnProperty(i)){var u=c[i];i==="style"?Vv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ov(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ua(t,u):typeof u=="number"&&ua(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ca.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Re("scroll",t):u!=null&&Pf(t,i,u,o))}switch(n){case"input":vl(t),yg(t,r,!1);break;case"textarea":vl(t),xg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ts(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ti(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)o_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ks(wa.current),ks(jn.current),kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(i=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:Il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Il(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return _t(e),null;case 13:if(Pe(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Ht!==null&&e.mode&1&&!(e.flags&128))Tx(),Fi(),e.flags|=98560,i=!1;else if(i=kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Rn]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),i=!1}else hn!==null&&(Kh(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?rt===0&&(rt=3):pp())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Ui(),zh(t,e),t===null&&ya(e.stateNode.containerInfo),_t(e),null;case 10:return Jf(e.type._context),_t(e),null;case 17:return Ut(e.type)&&Tc(),_t(e),null;case 19:if(Pe(Ve),i=e.memoizedState,i===null)return _t(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)jo(i,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,jo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(Ve,Ve.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>Bi&&(e.flags|=128,r=!0,jo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!De)return _t(e),null}else 2*We()-i.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,jo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,n=Ve.current,Ne(Ve,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return fp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function W2(t,e){switch(Gf(e),e.tag){case 1:return Ut(e.type)&&Tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),Pe(zt),Pe(It),np(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tp(e),null;case 13:if(Pe(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Ve),null;case 4:return Ui(),null;case 10:return Jf(e.type._context),null;case 22:case 23:return fp(),null;case 24:return null;default:return null}}var Al=!1,Et=!1,G2=typeof WeakSet=="function"?WeakSet:Set,Q=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){Be(t,e,r)}}var ly=!1;function K2(t,e){if(Th=_c,t=dx(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var I;m!==n||s!==0&&m.nodeType!==3||(c=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(I=m.firstChild)!==null;)g=m,m=I;for(;;){if(m===t)break t;if(g===n&&++d===s&&(c=o),g===i&&++f===r&&(u=o),(I=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=I}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},_c=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,O=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:un(e.type,N),O);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){Be(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=ly,ly=!1,R}function Zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Uh(e,n,i)}s=s.next}while(s!==r)}}function xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[xa],delete e[Ch],delete e[A2],delete e[R2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l_(t){return t.tag===5||t.tag===3||t.tag===4}function cy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ec));else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var ft=null,dn=!1;function Er(t,e,n){for(n=n.child;n!==null;)c_(t,e,n),n=n.sibling}function c_(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:Et||wi(n,e);case 6:var r=ft,s=dn;ft=null,Er(t,e,n),ft=r,dn=s,ft!==null&&(dn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(dn?(t=ft,n=n.stateNode,t.nodeType===8?Nd(t.parentNode,n):t.nodeType===1&&Nd(t,n),pa(t)):Nd(ft,n.stateNode));break;case 4:r=ft,s=dn,ft=n.stateNode.containerInfo,dn=!0,Er(t,e,n),ft=r,dn=s;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Uh(n,e,o),s=s.next}while(s!==r)}Er(t,e,n);break;case 1:if(!Et&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Be(n,e,c)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,Er(t,e,n),Et=r):Er(t,e,n);break;default:Er(t,e,n)}}function uy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G2),e.forEach(function(r){var s=rT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 5:ft=c.stateNode,dn=!1;break e;case 3:ft=c.stateNode.containerInfo,dn=!0;break e;case 4:ft=c.stateNode.containerInfo,dn=!0;break e}c=c.return}if(ft===null)throw Error(B(160));c_(i,o,s),ft=null,dn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Be(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u_(e,t),e=e.sibling}function u_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),Cn(t),r&4){try{Zo(3,t,t.return),xu(3,t)}catch(N){Be(t,t.return,N)}try{Zo(5,t,t.return)}catch(N){Be(t,t.return,N)}}break;case 1:cn(e,t),Cn(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(cn(e,t),Cn(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var s=t.stateNode;try{ua(s,"")}catch(N){Be(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,c=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Pv(s,i),ph(c,o);var d=ph(c,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Vv(s,m):f==="dangerouslySetInnerHTML"?Ov(s,m):f==="children"?ua(s,m):Pf(s,f,m,d)}switch(c){case"input":ch(s,i);break;case"textarea":jv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Ti(s,!!i.multiple,I,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ti(s,!!i.multiple,i.defaultValue,!0):Ti(s,!!i.multiple,i.multiple?[]:"",!1))}s[xa]=i}catch(N){Be(t,t.return,N)}}break;case 6:if(cn(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Be(t,t.return,N)}}break;case 3:if(cn(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(N){Be(t,t.return,N)}break;case 4:cn(e,t),Cn(t);break;case 13:cn(e,t),Cn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(dp=We())),r&4&&uy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(d=Et)||f,cn(e,t),Et=d):cn(e,t),Cn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(m=Q=f;Q!==null;){switch(g=Q,I=g.child,g.tag){case 0:case 11:case 14:case 15:Zo(4,g,g.return);break;case 1:wi(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Be(r,n,N)}}break;case 5:wi(g,g.return);break;case 22:if(g.memoizedState!==null){hy(m);continue}}I!==null?(I.return=g,Q=I):hy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=Lv("display",o))}catch(N){Be(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(N){Be(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:cn(e,t),Cn(t),r&4&&uy(t);break;case 21:break;default:cn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l_(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ua(s,""),r.flags&=-33);var i=cy(t);qh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,c=cy(t);Bh(t,c,o);break;default:throw Error(B(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q2(t,e,n){Q=t,d_(t)}function d_(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Al;if(!o){var c=s.alternate,u=c!==null&&c.memoizedState!==null||Et;c=Al;var d=Et;if(Al=o,(Et=u)&&!d)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?fy(s):u!==null?(u.return=o,Q=u):fy(s);for(;i!==null;)Q=i,d_(i),i=i.sibling;Q=s,Al=c,Et=d}dy(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):dy(t)}}function dy(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Qg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qg(e,o,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&pa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Et||e.flags&512&&$h(e)}catch(g){Be(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function hy(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function fy(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xu(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Be(e,s,u)}}var i=e.return;try{$h(e)}catch(u){Be(e,i,u)}break;case 5:var o=e.return;try{$h(e)}catch(u){Be(e,o,u)}}}catch(u){Be(e,e.return,u)}if(e===t){Q=null;break}var c=e.sibling;if(c!==null){c.return=e.return,Q=c;break}Q=e.return}}var Y2=Math.ceil,Dc=pr.ReactCurrentDispatcher,cp=pr.ReactCurrentOwner,rn=pr.ReactCurrentBatchConfig,xe=0,dt=null,Xe=null,gt=0,qt=0,bi=ds(0),rt=0,Sa=null,Ls=0,_u=0,up=0,ea=null,Vt=null,dp=0,Bi=1/0,Qn=null,Oc=!1,Hh=null,Hr=null,Rl=!1,Mr=null,Lc=0,ta=0,Wh=null,Zl=-1,ec=0;function jt(){return xe&6?We():Zl!==-1?Zl:Zl=We()}function Wr(t){return t.mode&1?xe&2&&gt!==0?gt&-gt:j2.transition!==null?(ec===0&&(ec=Qv()),ec):(t=be,t!==0||(t=window.event,t=t===void 0?16:nx(t.type)),t):1}function gn(t,e,n,r){if(50<ta)throw ta=0,Wh=null,Error(B(185));za(t,n,r),(!(xe&2)||t!==dt)&&(t===dt&&(!(xe&2)&&(_u|=n),rt===4&&Ar(t,gt)),$t(t,r),n===1&&xe===0&&!(e.mode&1)&&(Bi=We()+500,gu&&hs()))}function $t(t,e){var n=t.callbackNode;jE(t,e);var r=xc(t,t===dt?gt:0);if(r===0)n!==null&&bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bg(n),e===1)t.tag===0?P2(py.bind(null,t)):wx(py.bind(null,t)),C2(function(){!(xe&6)&&hs()}),n=null;else{switch(Yv(r)){case 1:n=Vf;break;case 4:n=Gv;break;case 16:n=vc;break;case 536870912:n=Kv;break;default:n=vc}n=x_(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(Zl=-1,ec=0,xe&6)throw Error(B(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=xc(t,t===dt?gt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vc(t,r);else{e=r;var s=xe;xe|=2;var i=p_();(dt!==t||gt!==e)&&(Qn=null,Bi=We()+500,As(t,e));do try{Z2();break}catch(c){f_(t,c)}while(!0);Yf(),Dc.current=i,xe=s,Xe!==null?e=0:(dt=null,gt=0,e=rt)}if(e!==0){if(e===2&&(s=xh(t),s!==0&&(r=s,e=Gh(t,s))),e===1)throw n=Sa,As(t,0),Ar(t,r),$t(t,We()),n;if(e===6)Ar(t,r);else{if(s=t.current.alternate,!(r&30)&&!J2(s)&&(e=Vc(t,r),e===2&&(i=xh(t),i!==0&&(r=i,e=Gh(t,i))),e===1))throw n=Sa,As(t,0),Ar(t,r),$t(t,We()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Es(t,Vt,Qn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=dp+500-We(),10<e)){if(xc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=kh(Es.bind(null,t,Vt,Qn),e);break}Es(t,Vt,Qn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-mn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y2(r/1960))-r,10<r){t.timeoutHandle=kh(Es.bind(null,t,Vt,Qn),r);break}Es(t,Vt,Qn);break;case 5:Es(t,Vt,Qn);break;default:throw Error(B(329))}}}return $t(t,We()),t.callbackNode===n?h_.bind(null,t):null}function Gh(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(As(t,e).flags|=256),t=Vc(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&Kh(e)),t}function Kh(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function J2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!_n(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~up,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function py(t){if(xe&6)throw Error(B(327));Ni();var e=xc(t,0);if(!(e&1))return $t(t,We()),null;var n=Vc(t,e);if(t.tag!==0&&n===2){var r=xh(t);r!==0&&(e=r,n=Gh(t,r))}if(n===1)throw n=Sa,As(t,0),Ar(t,e),$t(t,We()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Es(t,Vt,Qn),$t(t,We()),null}function hp(t,e){var n=xe;xe|=1;try{return t(e)}finally{xe=n,xe===0&&(Bi=We()+500,gu&&hs())}}function Vs(t){Mr!==null&&Mr.tag===0&&!(xe&6)&&Ni();var e=xe;xe|=1;var n=rn.transition,r=be;try{if(rn.transition=null,be=1,t)return t()}finally{be=r,rn.transition=n,xe=e,!(xe&6)&&hs()}}function fp(){qt=bi.current,Pe(bi)}function As(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,k2(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(Gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tc();break;case 3:Ui(),Pe(zt),Pe(It),np();break;case 5:tp(r);break;case 4:Ui();break;case 13:Pe(Ve);break;case 19:Pe(Ve);break;case 10:Jf(r.type._context);break;case 22:case 23:fp()}n=n.return}if(dt=t,Xe=t=Gr(t.current,null),gt=qt=e,rt=0,Sa=null,up=_u=Ls=0,Vt=ea=null,Is!==null){for(e=0;e<Is.length;e++)if(n=Is[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Is=null}return t}function f_(t,e){do{var n=Xe;try{if(Yf(),Yl.current=jc,Pc){for(var r=Me.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pc=!1}if(Os=0,ut=nt=Me=null,Xo=!1,ba=0,cp.current=null,n===null||n.return===null){rt=1,Sa=e,Xe=null;break}e:{var i=t,o=n.return,c=n,u=e;if(e=gt,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=c,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=ty(o);if(I!==null){I.flags&=-257,ny(I,o,c,i,e),I.mode&1&&ey(i,d,e),e=I,u=d;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){ey(i,d,e),pp();break e}u=Error(B(426))}}else if(De&&c.mode&1){var O=ty(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),ny(O,o,c,i,e),Kf($i(u,c));break e}}i=u=$i(u,c),rt!==4&&(rt=2),ea===null?ea=[i]:ea.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=Yx(i,u,e);Kg(i,w);break e;case 1:c=u;var _=i.type,T=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Hr===null||!Hr.has(T)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=Jx(i,c,e);Kg(i,V);break e}}i=i.return}while(i!==null)}g_(n)}catch(F){e=F,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function p_(){var t=Dc.current;return Dc.current=jc,t===null?jc:t}function pp(){(rt===0||rt===3||rt===2)&&(rt=4),dt===null||!(Ls&268435455)&&!(_u&268435455)||Ar(dt,gt)}function Vc(t,e){var n=xe;xe|=2;var r=p_();(dt!==t||gt!==e)&&(Qn=null,As(t,e));do try{X2();break}catch(s){f_(t,s)}while(!0);if(Yf(),xe=n,Dc.current=r,Xe!==null)throw Error(B(261));return dt=null,gt=0,rt}function X2(){for(;Xe!==null;)m_(Xe)}function Z2(){for(;Xe!==null&&!TE();)m_(Xe)}function m_(t){var e=v_(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?g_(t):Xe=e,cp.current=null}function g_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W2(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Xe=null;return}}else if(n=H2(n,e,qt),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);rt===0&&(rt=5)}function Es(t,e,n){var r=be,s=rn.transition;try{rn.transition=null,be=1,eT(t,e,n,r)}finally{rn.transition=s,be=r}return null}function eT(t,e,n,r){do Ni();while(Mr!==null);if(xe&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(DE(t,i),t===dt&&(Xe=dt=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,x_(vc,function(){return Ni(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rn.transition,rn.transition=null;var o=be;be=1;var c=xe;xe|=4,cp.current=null,K2(t,n),u_(n,t),_2(Sh),_c=!!Th,Sh=Th=null,t.current=n,Q2(n),SE(),xe=c,be=o,rn.transition=i}else t.current=n;if(Rl&&(Rl=!1,Mr=t,Lc=s),i=t.pendingLanes,i===0&&(Hr=null),CE(n.stateNode),$t(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Oc)throw Oc=!1,t=Hh,Hh=null,t;return Lc&1&&t.tag!==0&&Ni(),i=t.pendingLanes,i&1?t===Wh?ta++:(ta=0,Wh=t):ta=0,hs(),null}function Ni(){if(Mr!==null){var t=Yv(Lc),e=rn.transition,n=be;try{if(rn.transition=null,be=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Lc=0,xe&6)throw Error(B(331));var s=xe;for(xe|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var c=i.deletions;if(c!==null){for(var u=0;u<c.length;u++){var d=c[u];for(Q=d;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:Zo(8,f,i)}var m=f.child;if(m!==null)m.return=f,Q=m;else for(;Q!==null;){f=Q;var g=f.sibling,I=f.return;if(a_(f),f===d){Q=null;break}if(g!==null){g.return=I,Q=g;break}Q=I}}}var R=i.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,Q=w;break e}Q=i.return}}var _=t.current;for(Q=_;Q!==null;){o=Q;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,Q=T;else e:for(o=_;Q!==null;){if(c=Q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:xu(9,c)}}catch(F){Be(c,c.return,F)}if(c===o){Q=null;break e}var V=c.sibling;if(V!==null){V.return=c.return,Q=V;break e}Q=c.return}}if(xe=s,hs(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(du,t)}catch{}r=!0}return r}finally{be=n,rn.transition=e}}return!1}function my(t,e,n){e=$i(n,e),e=Yx(t,e,1),t=qr(t,e,1),e=jt(),t!==null&&(za(t,1,e),$t(t,e))}function Be(t,e,n){if(t.tag===3)my(t,t,n);else for(;e!==null;){if(e.tag===3){my(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=$i(n,t),t=Jx(e,t,1),e=qr(e,t,1),t=jt(),e!==null&&(za(e,1,t),$t(e,t));break}}e=e.return}}function tT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(gt&n)===n&&(rt===4||rt===3&&(gt&130023424)===gt&&500>We()-dp?As(t,0):up|=n),$t(t,e)}function y_(t,e){e===0&&(t.mode&1?(e=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):e=1);var n=jt();t=ar(t,e),t!==null&&(za(t,e,n),$t(t,n))}function nT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y_(t,n)}function rT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),y_(t,n)}var v_;v_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,q2(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,De&&e.flags&1048576&&bx(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xl(t,e),t=e.pendingProps;var s=Mi(e,It.current);Ci(e,n),s=sp(null,e,r,t,s,n);var i=ip();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(i=!0,Sc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Zf(e),s.updater=vu,e.stateNode=s,s._reactInternals=e,Dh(e,r,t,n),e=Vh(null,e,r,!0,i,n)):(e.tag=0,De&&i&&Wf(e),Rt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=iT(r),t=un(r,t),s){case 0:e=Lh(null,e,r,t,n);break e;case 1:e=iy(null,e,r,t,n);break e;case 11:e=ry(null,e,r,t,n);break e;case 14:e=sy(null,e,r,un(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Lh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),iy(t,e,r,s,n);case 3:e:{if(t_(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Cx(t,e),Ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=$i(Error(B(423)),e),e=oy(t,e,r,n,s);break e}else if(r!==s){s=$i(Error(B(424)),e),e=oy(t,e,r,n,s);break e}else for(Ht=Br(e.stateNode.containerInfo.firstChild),Gt=e,De=!0,hn=null,n=Ix(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===s){e=lr(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return Nx(e),t===null&&Rh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ih(r,s)?o=null:i!==null&&Ih(r,i)&&(e.flags|=32),e_(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&Rh(e),null;case 13:return n_(t,e,n);case 4:return ep(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),ry(t,e,r,s,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ne(Cc,r._currentValue),r._currentValue=o,i!==null)if(_n(i.value,o)){if(i.children===s.children&&!zt.current){e=lr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=nr(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ph(i.return,n,e),c.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ph(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Rt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ci(e,n),s=sn(s),r=r(s),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,s=un(r,e.pendingProps),s=un(r.type,s),sy(t,e,r,s,n);case 15:return Xx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Xl(t,e),e.tag=1,Ut(r)?(t=!0,Sc(e)):t=!1,Ci(e,n),Qx(e,r,s),Dh(e,r,s,n),Vh(null,e,r,!0,t,n);case 19:return r_(t,e,n);case 22:return Zx(t,e,n)}throw Error(B(156,e.tag))};function x_(t,e){return Wv(t,e)}function sT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new sT(t,e,n,r)}function mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iT(t){if(typeof t=="function")return mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===Of)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")mp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return Rs(n.children,s,i,e);case jf:o=8,s|=8;break;case sh:return t=nn(12,n,e,s|2),t.elementType=sh,t.lanes=i,t;case ih:return t=nn(13,n,e,s),t.elementType=ih,t.lanes=i,t;case oh:return t=nn(19,n,e,s),t.elementType=oh,t.lanes=i,t;case Nv:return wu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kv:o=10;break e;case Cv:o=9;break e;case Df:o=11;break e;case Of:o=14;break e;case Ir:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=nn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Rs(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function wu(t,e,n,r){return t=nn(22,t,r,e),t.elementType=Nv,t.lanes=n,t.stateNode={isHidden:!1},t}function Vd(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Md(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vd(0),this.expirationTimes=vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function gp(t,e,n,r,s,i,o,c,u){return t=new oT(t,e,n,c,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=nn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(i),t}function aT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function __(t){if(!t)return ns;t=t._reactInternals;e:{if(Ws(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ut(n))return _x(t,n,e)}return e}function w_(t,e,n,r,s,i,o,c,u){return t=gp(n,r,!0,t,s,i,o,c,u),t.context=__(null),n=t.current,r=jt(),s=Wr(n),i=nr(r,s),i.callback=e??null,qr(n,i,s),t.current.lanes=s,za(t,s,r),$t(t,r),t}function bu(t,e,n,r){var s=e.current,i=jt(),o=Wr(s);return n=__(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(s,e,o),t!==null&&(gn(t,s,o,i),Ql(t,s,o)),o}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){gy(t,e),(t=t.alternate)&&gy(t,e)}function lT(){return null}var b_=typeof reportError=="function"?reportError:function(t){console.error(t)};function vp(t){this._internalRoot=t}Eu.prototype.render=vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));bu(t,e,null,null)};Eu.prototype.unmount=vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vs(function(){bu(null,t,null,null)}),e[or]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&tx(t)}};function xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yy(){}function cT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Mc(o);i.call(d)}}var o=w_(e,r,t,0,null,!1,!1,"",yy);return t._reactRootContainer=o,t[or]=o.current,ya(t.nodeType===8?t.parentNode:t),Vs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var d=Mc(u);c.call(d)}}var u=gp(t,0,!1,null,null,!1,!1,"",yy);return t._reactRootContainer=u,t[or]=u.current,ya(t.nodeType===8?t.parentNode:t),Vs(function(){bu(e,u,n,r)}),u}function Su(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var c=s;s=function(){var u=Mc(o);c.call(u)}}bu(e,o,t,s)}else o=cT(n,e,t,s,r);return Mc(o)}Jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(Mf(e,n|1),$t(e,We()),!(xe&6)&&(Bi=We()+500,hs()))}break;case 13:Vs(function(){var r=ar(t,1);if(r!==null){var s=jt();gn(r,t,1,s)}}),yp(t,1)}};Ff=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=jt();gn(e,t,134217728,n)}yp(t,134217728)}};Xv=function(t){if(t.tag===13){var e=Wr(t),n=ar(t,e);if(n!==null){var r=jt();gn(n,t,e,r)}yp(t,e)}};Zv=function(){return be};ex=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};gh=function(t,e,n){switch(e){case"input":if(ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=mu(r);if(!s)throw Error(B(90));Rv(r),ch(r,s)}}}break;case"textarea":jv(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};zv=hp;Uv=Vs;var uT={usingClientEntryPoint:!1,Events:[$a,gi,mu,Mv,Fv,hp]},Do={findFiberByHostInstance:Ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dT={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qv(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||lT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{du=Pl.inject(dT),Pn=Pl}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uT;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(B(200));return aT(t,e,null,n)};Qt.createRoot=function(t,e){if(!xp(t))throw Error(B(299));var n=!1,r="",s=b_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=gp(t,1,!1,null,null,n,!1,r,s),t[or]=e.current,ya(t.nodeType===8?t.parentNode:t),new vp(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=qv(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return Vs(t)};Qt.hydrate=function(t,e,n){if(!Tu(e))throw Error(B(200));return Su(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!xp(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=b_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w_(e,null,t,1,n??null,s,!1,i,o),t[or]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Eu(e)};Qt.render=function(t,e,n){if(!Tu(e))throw Error(B(200));return Su(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(B(40));return t._reactRootContainer?(Vs(function(){Su(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Qt.unstable_batchedUpdates=hp;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Su(t,e,n,!1,r)};Qt.version="18.3.1-next-f1338f8080-20240426";function E_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E_)}catch(t){console.error(t)}}E_(),Ev.exports=Qt;var hT=Ev.exports,vy=hT;nh.createRoot=vy.createRoot,nh.hydrateRoot=vy.hydrateRoot;/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xy="popstate";function fT(t={}){function e(r,s){let{pathname:i,search:o,hash:c}=r.location;return Qh("",{pathname:i,search:o,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Ia(s)}return mT(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pT(){return Math.random().toString(36).substring(2,10)}function _y(t,e){return{usr:t.state,key:t.key,idx:e}}function Qh(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?to(e):e,state:n,key:e&&e.key||r||pT()}}function Ia({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function to(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function mT(t,e,n,r={}){let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,c="POP",u=null,d=f();d==null&&(d=0,o.replaceState({...o.state,idx:d},""));function f(){return(o.state||{idx:null}).idx}function m(){c="POP";let O=f(),w=O==null?null:O-d;d=O,u&&u({action:c,location:N.location,delta:w})}function g(O,w){c="PUSH";let _=Qh(N.location,O,w);d=f()+1;let T=_y(_,d),V=N.createHref(_);try{o.pushState(T,"",V)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(V)}i&&u&&u({action:c,location:N.location,delta:1})}function I(O,w){c="REPLACE";let _=Qh(N.location,O,w);d=f();let T=_y(_,d),V=N.createHref(_);o.replaceState(T,"",V),i&&u&&u({action:c,location:N.location,delta:0})}function R(O){return gT(O)}let N={get action(){return c},get location(){return t(s,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(xy,m),u=O,()=>{s.removeEventListener(xy,m),u=null}},createHref(O){return e(s,O)},createURL:R,encodeLocation(O){let w=R(O);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:I,go(O){return o.go(O)}};return N}function gT(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Ia(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function T_(t,e,n="/"){return yT(t,e,n,!1)}function yT(t,e,n,r){let s=typeof e=="string"?to(e):e,i=cr(s.pathname||"/",n);if(i==null)return null;let o=S_(t);vT(o);let c=null;for(let u=0;c==null&&u<o.length;++u){let d=NT(i);c=kT(o[u],d,r)}return c}function S_(t,e=[],n=[],r="",s=!1){let i=(o,c,u=s,d)=>{let f={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;Oe(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let m=rr([r,f.relativePath]),g=n.concat(f);o.children&&o.children.length>0&&(Oe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),S_(o.children,e,g,m,u)),!(o.path==null&&!o.index)&&e.push({path:m,score:ST(m,o.index),routesMeta:g})};return t.forEach((o,c)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))i(o,c);else for(let d of I_(o.path))i(o,c,!0,d)}),e}function I_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=I_(r.join("/")),c=[];return c.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...o),c.map(u=>t.startsWith("/")&&u===""?"/":u)}function vT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var xT=/^:[\w-]+$/,_T=3,wT=2,bT=1,ET=10,TT=-2,wy=t=>t==="*";function ST(t,e){let n=t.split("/"),r=n.length;return n.some(wy)&&(r+=TT),e&&(r+=wT),n.filter(s=>!wy(s)).reduce((s,i)=>s+(xT.test(i)?_T:i===""?bT:ET),r)}function IT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function kT(t,e,n=!1){let{routesMeta:r}=t,s={},i="/",o=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=Fc({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),g=u.route;if(!m&&d&&n&&!r[r.length-1].route.index&&(m=Fc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:rr([i,m.pathname]),pathnameBase:jT(rr([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=rr([i,m.pathnameBase]))}return o}function Fc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CT(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((d,{paramName:f,isOptional:m},g)=>{if(f==="*"){let R=c[g]||"";o=i.slice(0,i.length-R.length).replace(/(.)\/+$/,"$1")}const I=c[g];return m&&!I?d[f]=void 0:d[f]=(I||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function CT(t,e=!1,n=!0){wn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function NT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function cr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var AT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function RT(t,e="/"){let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?to(t):t,i;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?i=by(n.substring(1),"/"):i=by(n,e)):i=e,{pathname:i,search:DT(r),hash:OT(s)}}function by(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Fd(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function PT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _p(t){let e=PT(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function wp(t,e,n,r=!1){let s;typeof t=="string"?s=to(t):(s={...t},Oe(!s.pathname||!s.pathname.includes("?"),Fd("?","pathname","search",s)),Oe(!s.pathname||!s.pathname.includes("#"),Fd("#","pathname","hash",s)),Oe(!s.search||!s.search.includes("#"),Fd("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,c;if(o==null)c=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}c=m>=0?e[m]:"/"}let u=RT(s,c),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}var rr=t=>t.join("/").replace(/\/\/+/g,"/"),jT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,LT=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function VT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function MT(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var k_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function C_(t,e){let n=t;if(typeof n!="string"||!AT.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,s=!1;if(k_)try{let i=new URL(window.location.href),o=n.startsWith("//")?new URL(i.protocol+n):new URL(n),c=cr(o.pathname,e);o.origin===i.origin&&c!=null?n=c+o.search+o.hash:s=!0}catch{wn(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:s,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var N_=["POST","PUT","PATCH","DELETE"];new Set(N_);var FT=["GET",...N_];new Set(FT);var no=P.createContext(null);no.displayName="DataRouter";var Iu=P.createContext(null);Iu.displayName="DataRouterState";var zT=P.createContext(!1),A_=P.createContext({isTransitioning:!1});A_.displayName="ViewTransition";var UT=P.createContext(new Map);UT.displayName="Fetchers";var $T=P.createContext(null);$T.displayName="Await";var Jt=P.createContext(null);Jt.displayName="Navigation";var qa=P.createContext(null);qa.displayName="Location";var Bn=P.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var bp=P.createContext(null);bp.displayName="RouteError";var R_="REACT_ROUTER_ERROR",BT="REDIRECT",qT="ROUTE_ERROR_RESPONSE";function HT(t){if(t.startsWith(`${R_}:${BT}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function WT(t){if(t.startsWith(`${R_}:${qT}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new LT(e.status,e.statusText,e.data)}catch{}}function GT(t,{relative:e}={}){Oe(ro(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=P.useContext(Jt),{hash:s,pathname:i,search:o}=Ha(t,{relative:e}),c=i;return n!=="/"&&(c=i==="/"?n:rr([n,i])),r.createHref({pathname:c,search:o,hash:s})}function ro(){return P.useContext(qa)!=null}function fs(){return Oe(ro(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(qa).location}var P_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function j_(t){P.useContext(Jt).static||P.useLayoutEffect(t)}function Gs(){let{isDataRoute:t}=P.useContext(Bn);return t?oS():KT()}function KT(){Oe(ro(),"useNavigate() may be used only in the context of a <Router> component.");let t=P.useContext(no),{basename:e,navigator:n}=P.useContext(Jt),{matches:r}=P.useContext(Bn),{pathname:s}=fs(),i=JSON.stringify(_p(r)),o=P.useRef(!1);return j_(()=>{o.current=!0}),P.useCallback((u,d={})=>{if(wn(o.current,P_),!o.current)return;if(typeof u=="number"){n.go(u);return}let f=wp(u,JSON.parse(i),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:rr([e,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[e,n,i,s,t])}P.createContext(null);function Ha(t,{relative:e}={}){let{matches:n}=P.useContext(Bn),{pathname:r}=fs(),s=JSON.stringify(_p(n));return P.useMemo(()=>wp(t,JSON.parse(s),r,e==="path"),[t,s,r,e])}function QT(t,e){return D_(t,e)}function D_(t,e,n,r,s){var _;Oe(ro(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=P.useContext(Jt),{matches:o}=P.useContext(Bn),c=o[o.length-1],u=c?c.params:{},d=c?c.pathname:"/",f=c?c.pathnameBase:"/",m=c&&c.route;{let T=m&&m.path||"";L_(d,!m||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let g=fs(),I;if(e){let T=typeof e=="string"?to(e):e;Oe(f==="/"||((_=T.pathname)==null?void 0:_.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${T.pathname}" was given in the \`location\` prop.`),I=T}else I=g;let R=I.pathname||"/",N=R;if(f!=="/"){let T=f.replace(/^\//,"").split("/");N="/"+R.replace(/^\//,"").split("/").slice(T.length).join("/")}let O=T_(t,{pathname:N});wn(m||O!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),wn(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=eS(O&&O.map(T=>Object.assign({},T,{params:Object.assign({},u,T.params),pathname:rr([f,i.encodeLocation?i.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?f:rr([f,i.encodeLocation?i.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),o,n,r,s);return e&&w?P.createElement(qa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},w):w}function YT(){let t=iS(),e=VT(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:i},"ErrorBoundary")," or"," ",P.createElement("code",{style:i},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:s},n):null,o)}var JT=P.createElement(YT,null),O_=class extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=WT(t.digest);n&&(t=n)}let e=t!==void 0?P.createElement(Bn.Provider,{value:this.props.routeContext},P.createElement(bp.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?P.createElement(XT,{error:t},e):e}};O_.contextType=zT;var zd=new WeakMap;function XT({children:t,error:e}){let{basename:n}=P.useContext(Jt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=HT(e.digest);if(r){let s=zd.get(e);if(s)throw s;let i=C_(r.location,n);if(k_&&!zd.get(e))if(i.isExternal||r.reloadDocument)window.location.href=i.absoluteURL||i.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:r.replace}));throw zd.set(e,o),o}return P.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return t}function ZT({routeContext:t,match:e,children:n}){let r=P.useContext(no);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(Bn.Provider,{value:t},n)}function eS(t,e=[],n=null,r=null,s=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n==null?void 0:n.errors;if(o!=null){let f=i.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Oe(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,f+1))}let c=!1,u=-1;if(n)for(let f=0;f<i.length;f++){let m=i[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:I}=n,R=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!I||I[m.route.id]===void 0);if(m.route.lazy||R){c=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}let d=n&&r?(f,m)=>{var g,I;r(f,{location:n.location,params:((I=(g=n.matches)==null?void 0:g[0])==null?void 0:I.params)??{},unstable_pattern:MT(n.matches),errorInfo:m})}:void 0;return i.reduceRight((f,m,g)=>{let I,R=!1,N=null,O=null;n&&(I=o&&m.route.id?o[m.route.id]:void 0,N=m.route.errorElement||JT,c&&(u<0&&g===0?(L_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,O=null):u===g&&(R=!0,O=m.route.hydrateFallbackElement||null)));let w=e.concat(i.slice(0,g+1)),_=()=>{let T;return I?T=N:R?T=O:m.route.Component?T=P.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=f,P.createElement(ZT,{match:m,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:T})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?P.createElement(O_,{location:n.location,revalidation:n.revalidation,component:N,error:I,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0},onError:d}):_()},null)}function Ep(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tS(t){let e=P.useContext(no);return Oe(e,Ep(t)),e}function nS(t){let e=P.useContext(Iu);return Oe(e,Ep(t)),e}function rS(t){let e=P.useContext(Bn);return Oe(e,Ep(t)),e}function Tp(t){let e=rS(t),n=e.matches[e.matches.length-1];return Oe(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function sS(){return Tp("useRouteId")}function iS(){var r;let t=P.useContext(bp),e=nS("useRouteError"),n=Tp("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function oS(){let{router:t}=tS("useNavigate"),e=Tp("useNavigate"),n=P.useRef(!1);return j_(()=>{n.current=!0}),P.useCallback(async(s,i={})=>{wn(n.current,P_),n.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:e,...i}))},[t,e])}var Ey={};function L_(t,e,n){!e&&!Ey[t]&&(Ey[t]=!0,wn(!1,n))}P.memo(aS);function aS({routes:t,future:e,state:n,onError:r}){return D_(t,void 0,n,r,e)}function jl({to:t,replace:e,state:n,relative:r}){Oe(ro(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=P.useContext(Jt);wn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=P.useContext(Bn),{pathname:o}=fs(),c=Gs(),u=wp(t,_p(i),o,r==="path"),d=JSON.stringify(u);return P.useEffect(()=>{c(JSON.parse(d),{replace:e,state:n,relative:r})},[c,d,r,e,n]),null}function Sr(t){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lS({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:s,static:i=!1,unstable_useTransitions:o}){Oe(!ro(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:c,navigator:s,static:i,unstable_useTransitions:o,future:{}}),[c,s,i,o]);typeof n=="string"&&(n=to(n));let{pathname:d="/",search:f="",hash:m="",state:g=null,key:I="default"}=n,R=P.useMemo(()=>{let N=cr(d,c);return N==null?null:{location:{pathname:N,search:f,hash:m,state:g,key:I},navigationType:r}},[c,d,f,m,g,I,r]);return wn(R!=null,`<Router basename="${c}"> is not able to match the URL "${d}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:P.createElement(Jt.Provider,{value:u},P.createElement(qa.Provider,{children:e,value:R}))}function cS({children:t,location:e}){return QT(Yh(t),e)}function Yh(t,e=[]){let n=[];return P.Children.forEach(t,(r,s)=>{if(!P.isValidElement(r))return;let i=[...e,s];if(r.type===P.Fragment){n.push.apply(n,Yh(r.props.children,i));return}Oe(r.type===Sr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yh(r.props.children,i)),n.push(o)}),n}var nc="get",rc="application/x-www-form-urlencoded";function ku(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function uS(t){return ku(t)&&t.tagName.toLowerCase()==="button"}function dS(t){return ku(t)&&t.tagName.toLowerCase()==="form"}function hS(t){return ku(t)&&t.tagName.toLowerCase()==="input"}function fS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pS(t,e){return t.button===0&&(!e||e==="_self")&&!fS(t)}var Dl=null;function mS(){if(Dl===null)try{new FormData(document.createElement("form"),0),Dl=!1}catch{Dl=!0}return Dl}var gS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ud(t){return t!=null&&!gS.has(t)?(wn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rc}"`),null):t}function yS(t,e){let n,r,s,i,o;if(dS(t)){let c=t.getAttribute("action");r=c?cr(c,e):null,n=t.getAttribute("method")||nc,s=Ud(t.getAttribute("enctype"))||rc,i=new FormData(t)}else if(uS(t)||hS(t)&&(t.type==="submit"||t.type==="image")){let c=t.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||c.getAttribute("action");if(r=u?cr(u,e):null,n=t.getAttribute("formmethod")||c.getAttribute("method")||nc,s=Ud(t.getAttribute("formenctype"))||Ud(c.getAttribute("enctype"))||rc,i=new FormData(c,t),!mS()){let{name:d,type:f,value:m}=t;if(f==="image"){let g=d?`${d}.`:"";i.append(`${g}x`,"0"),i.append(`${g}y`,"0")}else d&&i.append(d,m)}}else{if(ku(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=nc,r=null,s=rc,o=t}return i&&s==="text/plain"&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vS(t,e,n,r){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${r}`:s.pathname=`${s.pathname}.${r}`:s.pathname==="/"?s.pathname=`_root.${r}`:e&&cr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function xS(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _S(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function wS(t,e,n){let r=await Promise.all(t.map(async s=>{let i=e.routes[s.route.id];if(i){let o=await xS(i,n);return o.links?o.links():[]}return[]}));return SS(r.flat(1).filter(_S).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Ty(t,e,n,r,s,i){let o=(u,d)=>n[d]?u.route.id!==n[d].route.id:!0,c=(u,d)=>{var f;return n[d].pathname!==u.pathname||((f=n[d].route.path)==null?void 0:f.endsWith("*"))&&n[d].params["*"]!==u.params["*"]};return i==="assets"?e.filter((u,d)=>o(u,d)||c(u,d)):i==="data"?e.filter((u,d)=>{var m;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function bS(t,e,{includeHydrateFallback:n}={}){return ES(t.map(r=>{let s=e.routes[r.route.id];if(!s)return[];let i=[s.module];return s.clientActionModule&&(i=i.concat(s.clientActionModule)),s.clientLoaderModule&&(i=i.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(i=i.concat(s.hydrateFallbackModule)),s.imports&&(i=i.concat(s.imports)),i}).flat(1))}function ES(t){return[...new Set(t)]}function TS(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function SS(t,e){let n=new Set;return new Set(e),t.reduce((r,s)=>{let i=JSON.stringify(TS(s));return n.has(i)||(n.add(i),r.push({key:i,link:s})),r},[])}function V_(){let t=P.useContext(no);return Sp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function IS(){let t=P.useContext(Iu);return Sp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ip=P.createContext(void 0);Ip.displayName="FrameworkContext";function M_(){let t=P.useContext(Ip);return Sp(t,"You must render this element inside a <HydratedRouter> element"),t}function kS(t,e){let n=P.useContext(Ip),[r,s]=P.useState(!1),[i,o]=P.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:f,onTouchStart:m}=e,g=P.useRef(null);P.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let N=w=>{w.forEach(_=>{o(_.isIntersecting)})},O=new IntersectionObserver(N,{threshold:.5});return g.current&&O.observe(g.current),()=>{O.disconnect()}}},[t]),P.useEffect(()=>{if(r){let N=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(N)}}},[r]);let I=()=>{s(!0)},R=()=>{s(!1),o(!1)};return n?t!=="intent"?[i,g,{}]:[i,g,{onFocus:Oo(c,I),onBlur:Oo(u,R),onMouseEnter:Oo(d,I),onMouseLeave:Oo(f,R),onTouchStart:Oo(m,I)}]:[!1,g,{}]}function Oo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function CS({page:t,...e}){let{router:n}=V_(),r=P.useMemo(()=>T_(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?P.createElement(AS,{page:t,matches:r,...e}):null}function NS(t){let{manifest:e,routeModules:n}=M_(),[r,s]=P.useState([]);return P.useEffect(()=>{let i=!1;return wS(t,e,n).then(o=>{i||s(o)}),()=>{i=!0}},[t,e,n]),r}function AS({page:t,matches:e,...n}){let r=fs(),{future:s,manifest:i,routeModules:o}=M_(),{basename:c}=V_(),{loaderData:u,matches:d}=IS(),f=P.useMemo(()=>Ty(t,e,d,i,r,"data"),[t,e,d,i,r]),m=P.useMemo(()=>Ty(t,e,d,i,r,"assets"),[t,e,d,i,r]),g=P.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let N=new Set,O=!1;if(e.forEach(_=>{var V;let T=i.routes[_.route.id];!T||!T.hasLoader||(!f.some(F=>F.route.id===_.route.id)&&_.route.id in u&&((V=o[_.route.id])!=null&&V.shouldRevalidate)||T.hasClientLoader?O=!0:N.add(_.route.id))}),N.size===0)return[];let w=vS(t,c,s.unstable_trailingSlashAwareDataRequests,"data");return O&&N.size>0&&w.searchParams.set("_routes",e.filter(_=>N.has(_.route.id)).map(_=>_.route.id).join(",")),[w.pathname+w.search]},[c,s.unstable_trailingSlashAwareDataRequests,u,r,i,f,e,t,o]),I=P.useMemo(()=>bS(m,i),[m,i]),R=NS(m);return P.createElement(P.Fragment,null,g.map(N=>P.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),I.map(N=>P.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),R.map(({key:N,link:O})=>P.createElement("link",{key:N,nonce:n.nonce,...O,crossOrigin:O.crossOrigin??n.crossOrigin})))}function RS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var PS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PS&&(window.__reactRouterVersion="7.13.0")}catch{}function jS({basename:t,children:e,unstable_useTransitions:n,window:r}){let s=P.useRef();s.current==null&&(s.current=fT({window:r,v5Compat:!0}));let i=s.current,[o,c]=P.useState({action:i.action,location:i.location}),u=P.useCallback(d=>{n===!1?c(d):P.startTransition(()=>c(d))},[n]);return P.useLayoutEffect(()=>i.listen(u),[i,u]),P.createElement(lS,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i,unstable_useTransitions:n})}var F_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z_=P.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:s,reloadDocument:i,replace:o,state:c,target:u,to:d,preventScrollReset:f,viewTransition:m,unstable_defaultShouldRevalidate:g,...I},R){let{basename:N,unstable_useTransitions:O}=P.useContext(Jt),w=typeof d=="string"&&F_.test(d),_=C_(d,N);d=_.to;let T=GT(d,{relative:s}),[V,F,j]=kS(r,I),v=VS(d,{replace:o,state:c,target:u,preventScrollReset:f,relative:s,viewTransition:m,unstable_defaultShouldRevalidate:g,unstable_useTransitions:O});function y(C){e&&e(C),C.defaultPrevented||v(C)}let S=P.createElement("a",{...I,...j,href:_.absoluteURL||T,onClick:_.isExternal||i?e:y,ref:RS(R,F),target:u,"data-discover":!w&&n==="render"?"true":void 0});return V&&!w?P.createElement(P.Fragment,null,S,P.createElement(CS,{page:T})):S});z_.displayName="Link";var DS=P.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:s=!1,style:i,to:o,viewTransition:c,children:u,...d},f){let m=Ha(o,{relative:d.relative}),g=fs(),I=P.useContext(Iu),{navigator:R,basename:N}=P.useContext(Jt),O=I!=null&&$S(m)&&c===!0,w=R.encodeLocation?R.encodeLocation(m).pathname:m.pathname,_=g.pathname,T=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(_=_.toLowerCase(),T=T?T.toLowerCase():null,w=w.toLowerCase()),T&&N&&(T=cr(T,N)||T);const V=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let F=_===w||!s&&_.startsWith(w)&&_.charAt(V)==="/",j=T!=null&&(T===w||!s&&T.startsWith(w)&&T.charAt(w.length)==="/"),v={isActive:F,isPending:j,isTransitioning:O},y=F?e:void 0,S;typeof r=="function"?S=r(v):S=[r,F?"active":null,j?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let C=typeof i=="function"?i(v):i;return P.createElement(z_,{...d,"aria-current":y,className:S,ref:f,style:C,to:o,viewTransition:c},typeof u=="function"?u(v):u)});DS.displayName="NavLink";var OS=P.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:s,state:i,method:o=nc,action:c,onSubmit:u,relative:d,preventScrollReset:f,viewTransition:m,unstable_defaultShouldRevalidate:g,...I},R)=>{let{unstable_useTransitions:N}=P.useContext(Jt),O=zS(),w=US(c,{relative:d}),_=o.toLowerCase()==="get"?"get":"post",T=typeof c=="string"&&F_.test(c),V=F=>{if(u&&u(F),F.defaultPrevented)return;F.preventDefault();let j=F.nativeEvent.submitter,v=(j==null?void 0:j.getAttribute("formmethod"))||o,y=()=>O(j||F.currentTarget,{fetcherKey:e,method:v,navigate:n,replace:s,state:i,relative:d,preventScrollReset:f,viewTransition:m,unstable_defaultShouldRevalidate:g});N&&n!==!1?P.startTransition(()=>y()):y()};return P.createElement("form",{ref:R,method:_,action:w,onSubmit:r?u:V,...I,"data-discover":!T&&t==="render"?"true":void 0})});OS.displayName="Form";function LS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U_(t){let e=P.useContext(no);return Oe(e,LS(t)),e}function VS(t,{target:e,replace:n,state:r,preventScrollReset:s,relative:i,viewTransition:o,unstable_defaultShouldRevalidate:c,unstable_useTransitions:u}={}){let d=Gs(),f=fs(),m=Ha(t,{relative:i});return P.useCallback(g=>{if(pS(g,e)){g.preventDefault();let I=n!==void 0?n:Ia(f)===Ia(m),R=()=>d(t,{replace:I,state:r,preventScrollReset:s,relative:i,viewTransition:o,unstable_defaultShouldRevalidate:c});u?P.startTransition(()=>R()):R()}},[f,d,m,n,r,e,t,s,i,o,c,u])}var MS=0,FS=()=>`__${String(++MS)}__`;function zS(){let{router:t}=U_("useSubmit"),{basename:e}=P.useContext(Jt),n=sS(),r=t.fetch,s=t.navigate;return P.useCallback(async(i,o={})=>{let{action:c,method:u,encType:d,formData:f,body:m}=yS(i,e);if(o.navigate===!1){let g=o.fetcherKey||FS();await r(g,n,o.action||c,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await s(o.action||c,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,s,e,n])}function US(t,{relative:e}={}){let{basename:n}=P.useContext(Jt),r=P.useContext(Bn);Oe(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),i={...Ha(t||".",{relative:e})},o=fs();if(t==null){i.search=o.search;let c=new URLSearchParams(i.search),u=c.getAll("index");if(u.some(f=>f==="")){c.delete("index"),u.filter(m=>m).forEach(m=>c.append("index",m));let f=c.toString();i.search=f?`?${f}`:""}}return(!t||t===".")&&s.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:rr([n,i.pathname])),Ia(i)}function $S(t,{relative:e}={}){let n=P.useContext(A_);Oe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=U_("useViewTransitionState"),s=Ha(t,{relative:e});if(!n.isTransitioning)return!1;let i=cr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=cr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fc(s.pathname,o)!=null||Fc(s.pathname,i)!=null}const BS=()=>{};var Sy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},B_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,I=d&63;u||(I=64,o||(g=64)),r.push(n[f],n[m],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new HS;const g=i<<2|c>>4;if(r.push(g),d!==64){const I=c<<4&240|d>>2;if(r.push(I),m!==64){const R=d<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WS=function(t){const e=$_(t);return B_.encodeByteArray(e,!0)},zc=function(t){return WS(t).replace(/\./g,"")},q_=function(t){try{return B_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=()=>GS().__FIREBASE_DEFAULTS__,QS=()=>{if(typeof process>"u"||typeof Sy>"u")return;const t=Sy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&q_(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return BS()||KS()||QS()||YS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},H_=t=>{var e,n;return(n=(e=Cu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},W_=t=>{const e=H_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G_=()=>{var t;return(t=Cu())==null?void 0:t.config},K_=t=>{var e;return(e=Cu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[zc(JSON.stringify(n)),zc(JSON.stringify(o)),""].join(".")}const na={};function XS(){const t={prod:[],emulator:[]};for(const e of Object.keys(na))na[e]?t.emulator.push(e):t.prod.push(e);return t}function ZS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Iy=!1;function Cp(t,e){if(typeof window>"u"||typeof document>"u"||!Ks(window.location.host)||na[t]===e||na[t]||Iy)return;na[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=XS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Iy=!0,o()},g}function f(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=ZS(r),I=n("text"),R=document.getElementById(I)||document.createElement("span"),N=n("learnmore"),O=document.getElementById(N)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const T=g.element;c(T),f(O,N);const V=d();u(_,w),T.append(_,R,O,V),document.body.appendChild(T)}i?(R.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function tI(){var e;const t=(e=Cu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oI(){return!tI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aI(){try{return typeof indexedDB=="object"}catch{return!1}}function lI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cI,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?uI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new qn(s,c,r)}}function uI(t,e){return t.replace(dI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dI=/\{\$([^}]+)}/g;function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ky(i)&&ky(o)){if(!Ms(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ky(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $o(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fI(t,e){const n=new pI(t,e);return n.subscribe.bind(n)}class pI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$d),s.error===void 0&&(s.error=$d),s.complete===void 0&&(s.complete=$d);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $d(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class rs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vI(e))try{this.getOrInitializeService({instanceIdentifier:Ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ts){return this.instances.has(e)}getOptions(e=Ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ts){return this.component?this.component.multipleInstances?e:Ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===Ts?void 0:t}function vI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const _I={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},wI=fe.INFO,bI={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},EI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=bI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Np{constructor(e){this.name=e,this._logLevel=wI,this._logHandler=EI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_I[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const TI=(t,e)=>e.some(n=>t instanceof n);let Cy,Ny;function SI(){return Cy||(Cy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function II(){return Ny||(Ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y_=new WeakMap,Jh=new WeakMap,J_=new WeakMap,Bd=new WeakMap,Ap=new WeakMap;function kI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y_.set(n,t)}).catch(()=>{}),Ap.set(e,t),e}function CI(t){if(Jh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Jh.set(t,e)}let Xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NI(t){Xh=t(Xh)}function AI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qd(this),e,...n);return J_.set(r,e.sort?e.sort():[e]),Kr(r)}:II().includes(t)?function(...e){return t.apply(qd(this),e),Kr(Y_.get(this))}:function(...e){return Kr(t.apply(qd(this),e))}}function RI(t){return typeof t=="function"?AI(t):(t instanceof IDBTransaction&&CI(t),TI(t,SI())?new Proxy(t,Xh):t)}function Kr(t){if(t instanceof IDBRequest)return kI(t);if(Bd.has(t))return Bd.get(t);const e=RI(t);return e!==t&&(Bd.set(t,e),Ap.set(e,t)),e}const qd=t=>Ap.get(t);function PI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Kr(o.result),u.oldVersion,u.newVersion,Kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const jI=["get","getKey","getAll","getAllKeys","count"],DI=["put","add","delete","clear"],Hd=new Map;function Ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hd.get(e))return Hd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=DI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jI.includes(n)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&u.done]))[0]};return Hd.set(e,i),i}NI(t=>({...t,get:(e,n,r)=>Ay(e,n)||t.get(e,n,r),has:(e,n)=>!!Ay(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zh="@firebase/app",Ry="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Np("@firebase/app"),VI="@firebase/app-compat",MI="@firebase/analytics-compat",FI="@firebase/analytics",zI="@firebase/app-check-compat",UI="@firebase/app-check",$I="@firebase/auth",BI="@firebase/auth-compat",qI="@firebase/database",HI="@firebase/data-connect",WI="@firebase/database-compat",GI="@firebase/functions",KI="@firebase/functions-compat",QI="@firebase/installations",YI="@firebase/installations-compat",JI="@firebase/messaging",XI="@firebase/messaging-compat",ZI="@firebase/performance",ek="@firebase/performance-compat",tk="@firebase/remote-config",nk="@firebase/remote-config-compat",rk="@firebase/storage",sk="@firebase/storage-compat",ik="@firebase/firestore",ok="@firebase/ai",ak="@firebase/firestore-compat",lk="firebase",ck="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="[DEFAULT]",uk={[Zh]:"fire-core",[VI]:"fire-core-compat",[FI]:"fire-analytics",[MI]:"fire-analytics-compat",[UI]:"fire-app-check",[zI]:"fire-app-check-compat",[$I]:"fire-auth",[BI]:"fire-auth-compat",[qI]:"fire-rtdb",[HI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[GI]:"fire-fn",[KI]:"fire-fn-compat",[QI]:"fire-iid",[YI]:"fire-iid-compat",[JI]:"fire-fcm",[XI]:"fire-fcm-compat",[ZI]:"fire-perf",[ek]:"fire-perf-compat",[tk]:"fire-rc",[nk]:"fire-rc-compat",[rk]:"fire-gcs",[sk]:"fire-gcs-compat",[ik]:"fire-fst",[ak]:"fire-fst-compat",[ok]:"fire-vertex","fire-js":"fire-js",[lk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Map,dk=new Map,tf=new Map;function Py(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fs(t){const e=t.name;if(tf.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,t);for(const n of Uc.values())Py(n,t);for(const n of dk.values())Py(n,t);return!0}function Nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qr=new Wa("app","Firebase",hk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=ck;function X_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ef,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qr.create("bad-app-name",{appName:String(s)});if(n||(n=G_()),!n)throw Qr.create("no-options");const i=Uc.get(s);if(i){if(Ms(n,i.options)&&Ms(r,i.config))return i;throw Qr.create("duplicate-app",{appName:s})}const o=new xI(s);for(const u of tf.values())o.addComponent(u);const c=new fk(n,r,o);return Uc.set(s,c),c}function Rp(t=ef){const e=Uc.get(t);if(!e&&t===ef&&G_())return X_();if(!e)throw Qr.create("no-app",{appName:t});return e}function Dn(t,e,n){let r=uk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(o.join(" "));return}Fs(new rs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="firebase-heartbeat-database",mk=1,ka="firebase-heartbeat-store";let Wd=null;function Z_(){return Wd||(Wd=PI(pk,mk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ka)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),Wd}async function gk(t){try{const n=(await Z_()).transaction(ka),r=await n.objectStore(ka).get(e1(t));return await n.done,r}catch(e){if(e instanceof qn)ur.warn(e.message);else{const n=Qr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function jy(t,e){try{const r=(await Z_()).transaction(ka,"readwrite");await r.objectStore(ka).put(e,e1(t)),await r.done}catch(n){if(n instanceof qn)ur.warn(n.message);else{const r=Qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function e1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=1024,vk=30;class xk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>vk){const o=bk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ur.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dy(),{heartbeatsToSend:r,unsentEntries:s}=_k(this._heartbeatsCache.heartbeats),i=zc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ur.warn(n),""}}}function Dy(){return new Date().toISOString().substring(0,10)}function _k(t,e=yk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Oy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?lI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Oy(t){return zc(JSON.stringify({version:2,heartbeats:t})).length}function bk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){Fs(new rs("platform-logger",e=>new OI(e),"PRIVATE")),Fs(new rs("heartbeat",e=>new xk(e),"PRIVATE")),Dn(Zh,Ry,t),Dn(Zh,Ry,"esm2020"),Dn("fire-js","")}Ek("");function t1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tk=t1,n1=new Wa("auth","Firebase",t1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Np("@firebase/auth");function Sk(t,...e){$c.logLevel<=fe.WARN&&$c.warn(`Auth (${Qs}): ${t}`,...e)}function sc(t,...e){$c.logLevel<=fe.ERROR&&$c.error(`Auth (${Qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw Pp(t,...e)}function On(t,...e){return Pp(t,...e)}function r1(t,e,n){const r={...Tk(),[e]:n};return new Wa("auth","Firebase",r).create(e,{appName:t.name})}function Yr(t){return r1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return n1.create(t,...e)}function re(t,e,...n){if(!t)throw Pp(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function dr(t,e){t||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Ik(){return Ly()==="http:"||Ly()==="https:"}function Ly(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ik()||rI()||"connection"in navigator)?navigator.onLine:!0}function Ck(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=eI()||sI()}get(){return kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rk=new Ka(3e4,6e4);function ps(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function mr(t,e,n,r,s={}){return i1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ga({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return nI()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Ks(t.emulatorConfig.host)&&(d.credentials="include"),s1.fetch()(await o1(t,t.config.apiHost,n,c),d)})}async function i1(t,e,n){t._canInitEmulator=!1;const r={...Nk,...e};try{const s=new jk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ol(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ol(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ol(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw r1(t,f,d);bn(t,f)}}catch(s){if(s instanceof qn)throw s;bn(t,"network-request-failed",{message:String(s)})}}async function Au(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function o1(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?jp(t.config,s):`${t.config.apiScheme}://${s}`;return Ak.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Pk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(On(this.auth,"network-request-failed")),Rk.get())})}}function Ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=On(t,e,r);return s.customData._tokenResponse=n,s}function Vy(t){return t!==void 0&&t.enterprise!==void 0}class Dk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Pk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ok(t,e){return mr(t,"GET","/v2/recaptchaConfig",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(t,e){return mr(t,"POST","/v1/accounts:delete",e)}async function Bc(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vk(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Dp(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ra(Gd(s.auth_time)),issuedAtTime:ra(Gd(s.iat)),expirationTime:ra(Gd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Gd(t){return Number(t)*1e3}function Dp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const s=q_(n);return s?JSON.parse(s):(sc("Failed to decode base64 JWT payload"),null)}catch(s){return sc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function My(t){const e=Dp(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&Mk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ca(t,Bc(e,{idToken:n}));re(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?a1(s.providerUserInfo):[],o=Uk(t.providerData,i),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new rf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function zk(t){const e=it(t);await qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function a1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){const n=await i1(t,{},async()=>{const r=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await o1(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ks(t.emulatorConfig.host)&&(u.credentials="include"),s1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bk(t,e){return mr(t,"POST","/v2/accounts:revokeToken",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):My(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=My(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $k(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ai;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ca(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vk(this,e)}reload(){return zk(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(Yr(this.auth));const e=await this.getIdToken();return await Ca(this,Lk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:I,providerData:R,stsTokenManager:N}=n;re(m&&N,e,"internal-error");const O=Ai.fromJSON(this.name,N);re(typeof m=="string",e,"internal-error"),Tr(r,e.name),Tr(s,e.name),re(typeof g=="boolean",e,"internal-error"),re(typeof I=="boolean",e,"internal-error"),Tr(i,e.name),Tr(o,e.name),Tr(c,e.name),Tr(u,e.name),Tr(d,e.name),Tr(f,e.name);const w=new fn({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:d,lastLoginAt:f});return R&&Array.isArray(R)&&(w.providerData=R.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ai;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?a1(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ai;c.updateFromIdToken(r);const u=new fn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new rf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=new Map;function tr(t){dr(t instanceof Function,"Expected a class definition");let e=Fy.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l1.type="NONE";const zy=l1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ic(this.userKey,s.apiKey,i),this.fullPersistenceKey=ic("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bc(this.auth,{idToken:e}).catch(()=>{});return n?fn._fromGetAccountInfoResponse(this.auth,n,e):null}return fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(tr(zy),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||tr(zy);const o=ic(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const f=await d._get(o);if(f){let m;if(typeof f=="string"){const g=await Bc(e,{idToken:f}).catch(()=>{});if(!g)break;m=await fn._fromGetAccountInfoResponse(e,g,f)}else m=fn._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ri(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Ri(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p1(e))return"Blackberry";if(m1(e))return"Webos";if(u1(e))return"Safari";if((e.includes("chrome/")||d1(e))&&!e.includes("edge/"))return"Chrome";if(f1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c1(t=kt()){return/firefox\//i.test(t)}function u1(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d1(t=kt()){return/crios\//i.test(t)}function h1(t=kt()){return/iemobile/i.test(t)}function f1(t=kt()){return/android/i.test(t)}function p1(t=kt()){return/blackberry/i.test(t)}function m1(t=kt()){return/webos/i.test(t)}function Op(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qk(t=kt()){var e;return Op(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Hk(){return iI()&&document.documentMode===10}function g1(t=kt()){return Op(t)||f1(t)||m1(t)||p1(t)||/windows phone/i.test(t)||h1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t,e=[]){let n;switch(t){case"Browser":n=Uy(kt());break;case"Worker":n=`${Uy(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e={}){return mr(t,"GET","/v2/passwordPolicy",ps(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=6;class Qk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Kk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $y(this),this.idTokenSubscription=new $y(this),this.beforeStateQueue=new Wk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=n1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bc(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ck()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(Yr(this));const n=e?it(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(Yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(Yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gk(this),n=new Qk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Sk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ys(t){return it(t)}class $y{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jk(t){Ru=t}function v1(t){return Ru.loadJS(t)}function Xk(){return Ru.recaptchaEnterpriseScript}function Zk(){return Ru.gapiScript}function eC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class tC{constructor(){this.enterprise=new nC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class nC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const rC="recaptcha-enterprise",x1="NO_RECAPTCHA";class sC{constructor(e){this.type=rC,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Ok(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Dk(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;Vy(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(x1)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Vy(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Xk();u.length!==0&&(u+=c),v1(u).then(()=>{s(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function By(t,e,n,r=!1,s=!1){const i=new sC(t);let o;if(s)o=x1;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function sf(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await By(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await By(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t,e){const n=Nu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ms(i,e??{}))return s;bn(s,"already-initialized")}return n.initialize({options:e})}function oC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aC(t,e,n){const r=Ys(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_1(e),{host:o,port:c}=lC(e),u=c===null?"":`:${c}`,d={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(Ms(d,r.config.emulator)&&Ms(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ks(o)?(kp(`${i}//${o}${u}`),Cp("Auth",!0)):cC()}function _1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lC(t){const e=_1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function uC(t,e){return mr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e){return Au(t,"POST","/v1/accounts:signInWithPassword",ps(t,e))}async function hC(t,e){return mr(t,"POST","/v1/accounts:sendOobCode",ps(t,e))}async function fC(t,e){return hC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}async function mC(t,e){return Au(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Lp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,n,"signInWithPassword",dC);case"emailLink":return pC(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,r,"signUpPassword",uC);case"emailLink":return mC(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e){return Au(t,"POST","/v1/accounts:signInWithIdp",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="http://localhost";class zs extends Lp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new zs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:gC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ga(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vC(t){const e=Uo($o(t)).link,n=e?Uo($o(e)).deep_link_id:null,r=Uo($o(t)).deep_link_id;return(r?Uo($o(r)).link:null)||r||n||e||t}class Vp{constructor(e){const n=Uo($o(e)),r=n.apiKey??null,s=n.oobCode??null,i=yC(n.mode??null);re(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=vC(e);try{return new Vp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return Na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vp.parseLink(n);return re(r,"argument-error"),Na._fromEmailAndCode(e,r.code,r.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends w1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Qa{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zs._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Qa{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Qa{constructor(){super("twitter.com")}static credential(e,n){return zs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=Hy(r);return new qi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Hy(r);return new qi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Hy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends qn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hc(e,n,r,s)}}function b1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hc._fromErrorAndOperation(t,i,e,r):i})}async function xC(t,e,n=!1){const r=await Ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(Yr(r));const s="reauthenticate";try{const i=await Ca(t,b1(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=Dp(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(t.uid===c,r,"user-mismatch"),qi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e,n=!1){if(en(t.app))return Promise.reject(Yr(t));const r="signIn",s=await b1(t,r,e),i=await qi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function wC(t,e){return E1(Ys(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function EC(t,e,n){const r=Ys(t);await sf(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",fC)}function TC(t,e,n){return en(t.app)?Promise.reject(Yr(t)):wC(it(t),so.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bC(t),r})}function SC(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function IC(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function Wc(t){return it(t).signOut()}const Gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=1e3,CC=10;class S1 extends T1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Hk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}S1.type="LOCAL";const NC=S1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1 extends T1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}I1.type="SESSION";const k1=I1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(n.origin,i)),u=await AC(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const d=Mp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function PC(t){Ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function jC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function OC(){return C1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="firebaseLocalStorageDb",LC=1,Kc="firebaseLocalStorage",A1="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ju(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function VC(){const t=indexedDB.deleteDatabase(N1);return new Ya(t).toPromise()}function of(){const t=indexedDB.open(N1,LC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kc,{keyPath:A1})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await VC(),e(await of()))})})}async function Wy(t,e,n){const r=ju(t,!0).put({[A1]:e,value:n});return new Ya(r).toPromise()}async function MC(t,e){const n=ju(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function Gy(t,e){const n=ju(t,!0).delete(e);return new Ya(n).toPromise()}const FC=800,zC=3;class R1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pu._getInstance(OC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await jC(),!this.activeServiceWorker)return;this.sender=new RC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await Wy(e,Gc,"1"),await Gy(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ju(s,!1).getAll();return new Ya(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R1.type="LOCAL";const UC=R1;new Ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t,e){return e?tr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Lp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BC(t){return E1(t.auth,new Fp(t),t.bypassAuthState)}function qC(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),_C(n,new Fp(t),t.bypassAuthState)}async function HC(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),xC(n,new Fp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BC;case"linkViaPopup":case"linkViaRedirect":return HC;case"reauthViaPopup":case"reauthViaRedirect":return qC;default:bn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new Ka(2e3,1e4);class Ei extends P1{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=Mp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WC.get())};e()}}Ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="pendingRedirect",oc=new Map;class KC extends P1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const r=await QC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(t,e){const n=XC(e),r=JC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YC(t,e){oc.set(t._key(),e)}function JC(t){return tr(t._redirectPersistence)}function XC(t){return ic(GC,t.config.apiKey,t.name)}async function ZC(t,e,n=!1){if(en(t.app))return Promise.reject(Yr(t));const r=Ys(t),s=$C(r,e),o=await new KC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=10*60*1e3;class tN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!j1(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(On(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ky(e))}saveEventToCache(e){this.cachedEventUids.add(Ky(e)),this.lastProcessedEventTime=Date.now()}}function Ky(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e={}){return mr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iN=/^https?/;async function oN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rN(t);for(const n of e)try{if(aN(n))return}catch{}bn(t,"unauthorized-domain")}function aN(t){const e=nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iN.test(n))return!1;if(sN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new Ka(3e4,6e4);function Qy(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cN(t){return new Promise((e,n)=>{var s,i,o;function r(){Qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qy(),n(On(t,"network-request-failed"))},timeout:lN.get()})}if((i=(s=Ln().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ln().gapi)!=null&&o.load)r();else{const c=eC("iframefcb");return Ln()[c]=()=>{gapi.load?r():n(On(t,"network-request-failed"))},v1(`${Zk()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw ac=null,e})}let ac=null;function uN(t){return ac=ac||cN(t),ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=new Ka(5e3,15e3),hN="__/auth/iframe",fN="emulator/auth/iframe",pN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gN(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jp(e,fN):`https://${t.config.authDomain}/${hN}`,r={apiKey:e.apiKey,appName:t.name,v:Qs},s=mN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ga(r).slice(1)}`}async function yN(t){const e=await uN(t),n=Ln().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:gN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=On(t,"network-request-failed"),c=Ln().setTimeout(()=>{i(o)},dN.get());function u(){Ln().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xN=500,_N=600,wN="_blank",bN="http://localhost";class Yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EN(t,e,n,r=xN,s=_N){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...vN,width:r.toString(),height:s.toString(),top:i,left:o},d=kt().toLowerCase();n&&(c=d1(d)?wN:n),c1(d)&&(e=e||bN,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[I,R])=>`${g}${I}=${R},`,"");if(qk(d)&&c!=="_self")return TN(e||"",c),new Yy(null);const m=window.open(e||"",c,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new Yy(m)}function TN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="__/auth/handler",IN="emulator/auth/handler",kN=encodeURIComponent("fac");async function Jy(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qs,eventId:s};if(e instanceof w1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Qa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await t._getAppCheckToken(),d=u?`#${kN}=${encodeURIComponent(u)}`:"";return`${CN(t)}?${Ga(c).slice(1)}${d}`}function CN({config:t}){return t.emulator?jp(t,IN):`https://${t.authDomain}/${SN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="webStorageSupport";class NN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k1,this._completeRedirectFn=ZC,this._overrideRedirectResult=YC}async _openPopup(e,n,r,s){var o;dr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Jy(e,n,r,nf(),s);return EN(e,i,Mp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jy(e,n,r,nf(),s);return PC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yN(e),r=new tN(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kd,{type:Kd},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Kd];i!==void 0&&n(!!i),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g1()||u1()||Op()}}const AN=NN;var Xy="@firebase/auth",Zy="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jN(t){Fs(new rs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y1(t)},d=new Yk(r,s,i,u);return oC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fs(new rs("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new RN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Xy,Zy,PN(t)),Dn(Xy,Zy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=5*60,ON=K_("authIdTokenMaxAge")||DN;let e0=null;const LN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ON)return;const s=n==null?void 0:n.token;e0!==s&&(e0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function VN(t=Rp()){const e=Nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iC(t,{popupRedirectResolver:AN,persistence:[UC,NC,k1]}),r=K_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=LN(i.toString());IC(n,o,()=>o(n.currentUser)),SC(n,c=>o(c))}}const s=H_("auth");return s&&aC(n,`http://${s}`),n}function MN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Jk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=On("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",MN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jN("Browser");var t0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,D1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function S(){}S.prototype=y.prototype,v.F=y.prototype,v.prototype=new S,v.prototype.constructor=v,v.D=function(C,b,D){for(var E=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)E[ie-2]=arguments[ie];return y.prototype[b].apply(C,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,S){S||(S=0);const C=Array(16);if(typeof y=="string")for(var b=0;b<16;++b)C[b]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(b=0;b<16;++b)C[b]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=v.g[0],S=v.g[1],b=v.g[2];let D=v.g[3],E;E=y+(D^S&(b^D))+C[0]+3614090360&4294967295,y=S+(E<<7&4294967295|E>>>25),E=D+(b^y&(S^b))+C[1]+3905402710&4294967295,D=y+(E<<12&4294967295|E>>>20),E=b+(S^D&(y^S))+C[2]+606105819&4294967295,b=D+(E<<17&4294967295|E>>>15),E=S+(y^b&(D^y))+C[3]+3250441966&4294967295,S=b+(E<<22&4294967295|E>>>10),E=y+(D^S&(b^D))+C[4]+4118548399&4294967295,y=S+(E<<7&4294967295|E>>>25),E=D+(b^y&(S^b))+C[5]+1200080426&4294967295,D=y+(E<<12&4294967295|E>>>20),E=b+(S^D&(y^S))+C[6]+2821735955&4294967295,b=D+(E<<17&4294967295|E>>>15),E=S+(y^b&(D^y))+C[7]+4249261313&4294967295,S=b+(E<<22&4294967295|E>>>10),E=y+(D^S&(b^D))+C[8]+1770035416&4294967295,y=S+(E<<7&4294967295|E>>>25),E=D+(b^y&(S^b))+C[9]+2336552879&4294967295,D=y+(E<<12&4294967295|E>>>20),E=b+(S^D&(y^S))+C[10]+4294925233&4294967295,b=D+(E<<17&4294967295|E>>>15),E=S+(y^b&(D^y))+C[11]+2304563134&4294967295,S=b+(E<<22&4294967295|E>>>10),E=y+(D^S&(b^D))+C[12]+1804603682&4294967295,y=S+(E<<7&4294967295|E>>>25),E=D+(b^y&(S^b))+C[13]+4254626195&4294967295,D=y+(E<<12&4294967295|E>>>20),E=b+(S^D&(y^S))+C[14]+2792965006&4294967295,b=D+(E<<17&4294967295|E>>>15),E=S+(y^b&(D^y))+C[15]+1236535329&4294967295,S=b+(E<<22&4294967295|E>>>10),E=y+(b^D&(S^b))+C[1]+4129170786&4294967295,y=S+(E<<5&4294967295|E>>>27),E=D+(S^b&(y^S))+C[6]+3225465664&4294967295,D=y+(E<<9&4294967295|E>>>23),E=b+(y^S&(D^y))+C[11]+643717713&4294967295,b=D+(E<<14&4294967295|E>>>18),E=S+(D^y&(b^D))+C[0]+3921069994&4294967295,S=b+(E<<20&4294967295|E>>>12),E=y+(b^D&(S^b))+C[5]+3593408605&4294967295,y=S+(E<<5&4294967295|E>>>27),E=D+(S^b&(y^S))+C[10]+38016083&4294967295,D=y+(E<<9&4294967295|E>>>23),E=b+(y^S&(D^y))+C[15]+3634488961&4294967295,b=D+(E<<14&4294967295|E>>>18),E=S+(D^y&(b^D))+C[4]+3889429448&4294967295,S=b+(E<<20&4294967295|E>>>12),E=y+(b^D&(S^b))+C[9]+568446438&4294967295,y=S+(E<<5&4294967295|E>>>27),E=D+(S^b&(y^S))+C[14]+3275163606&4294967295,D=y+(E<<9&4294967295|E>>>23),E=b+(y^S&(D^y))+C[3]+4107603335&4294967295,b=D+(E<<14&4294967295|E>>>18),E=S+(D^y&(b^D))+C[8]+1163531501&4294967295,S=b+(E<<20&4294967295|E>>>12),E=y+(b^D&(S^b))+C[13]+2850285829&4294967295,y=S+(E<<5&4294967295|E>>>27),E=D+(S^b&(y^S))+C[2]+4243563512&4294967295,D=y+(E<<9&4294967295|E>>>23),E=b+(y^S&(D^y))+C[7]+1735328473&4294967295,b=D+(E<<14&4294967295|E>>>18),E=S+(D^y&(b^D))+C[12]+2368359562&4294967295,S=b+(E<<20&4294967295|E>>>12),E=y+(S^b^D)+C[5]+4294588738&4294967295,y=S+(E<<4&4294967295|E>>>28),E=D+(y^S^b)+C[8]+2272392833&4294967295,D=y+(E<<11&4294967295|E>>>21),E=b+(D^y^S)+C[11]+1839030562&4294967295,b=D+(E<<16&4294967295|E>>>16),E=S+(b^D^y)+C[14]+4259657740&4294967295,S=b+(E<<23&4294967295|E>>>9),E=y+(S^b^D)+C[1]+2763975236&4294967295,y=S+(E<<4&4294967295|E>>>28),E=D+(y^S^b)+C[4]+1272893353&4294967295,D=y+(E<<11&4294967295|E>>>21),E=b+(D^y^S)+C[7]+4139469664&4294967295,b=D+(E<<16&4294967295|E>>>16),E=S+(b^D^y)+C[10]+3200236656&4294967295,S=b+(E<<23&4294967295|E>>>9),E=y+(S^b^D)+C[13]+681279174&4294967295,y=S+(E<<4&4294967295|E>>>28),E=D+(y^S^b)+C[0]+3936430074&4294967295,D=y+(E<<11&4294967295|E>>>21),E=b+(D^y^S)+C[3]+3572445317&4294967295,b=D+(E<<16&4294967295|E>>>16),E=S+(b^D^y)+C[6]+76029189&4294967295,S=b+(E<<23&4294967295|E>>>9),E=y+(S^b^D)+C[9]+3654602809&4294967295,y=S+(E<<4&4294967295|E>>>28),E=D+(y^S^b)+C[12]+3873151461&4294967295,D=y+(E<<11&4294967295|E>>>21),E=b+(D^y^S)+C[15]+530742520&4294967295,b=D+(E<<16&4294967295|E>>>16),E=S+(b^D^y)+C[2]+3299628645&4294967295,S=b+(E<<23&4294967295|E>>>9),E=y+(b^(S|~D))+C[0]+4096336452&4294967295,y=S+(E<<6&4294967295|E>>>26),E=D+(S^(y|~b))+C[7]+1126891415&4294967295,D=y+(E<<10&4294967295|E>>>22),E=b+(y^(D|~S))+C[14]+2878612391&4294967295,b=D+(E<<15&4294967295|E>>>17),E=S+(D^(b|~y))+C[5]+4237533241&4294967295,S=b+(E<<21&4294967295|E>>>11),E=y+(b^(S|~D))+C[12]+1700485571&4294967295,y=S+(E<<6&4294967295|E>>>26),E=D+(S^(y|~b))+C[3]+2399980690&4294967295,D=y+(E<<10&4294967295|E>>>22),E=b+(y^(D|~S))+C[10]+4293915773&4294967295,b=D+(E<<15&4294967295|E>>>17),E=S+(D^(b|~y))+C[1]+2240044497&4294967295,S=b+(E<<21&4294967295|E>>>11),E=y+(b^(S|~D))+C[8]+1873313359&4294967295,y=S+(E<<6&4294967295|E>>>26),E=D+(S^(y|~b))+C[15]+4264355552&4294967295,D=y+(E<<10&4294967295|E>>>22),E=b+(y^(D|~S))+C[6]+2734768916&4294967295,b=D+(E<<15&4294967295|E>>>17),E=S+(D^(b|~y))+C[13]+1309151649&4294967295,S=b+(E<<21&4294967295|E>>>11),E=y+(b^(S|~D))+C[4]+4149444226&4294967295,y=S+(E<<6&4294967295|E>>>26),E=D+(S^(y|~b))+C[11]+3174756917&4294967295,D=y+(E<<10&4294967295|E>>>22),E=b+(y^(D|~S))+C[2]+718787259&4294967295,b=D+(E<<15&4294967295|E>>>17),E=S+(D^(b|~y))+C[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+b&4294967295,v.g[3]=v.g[3]+D&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const S=y-this.blockSize,C=this.C;let b=this.h,D=0;for(;D<y;){if(b==0)for(;D<=S;)s(this,v,D),D+=this.blockSize;if(typeof v=="string"){for(;D<y;)if(C[b++]=v.charCodeAt(D++),b==this.blockSize){s(this,C),b=0;break}}else for(;D<y;)if(C[b++]=v[D++],b==this.blockSize){s(this,C),b=0;break}}this.h=b,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var S=v.length-8;S<v.length;++S)v[S]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,S=0;S<4;++S)for(let C=0;C<32;C+=8)v[y++]=this.g[S]>>>C&255;return v};function i(v,y){var S=c;return Object.prototype.hasOwnProperty.call(S,v)?S[v]:S[v]=y(v)}function o(v,y){this.h=y;const S=[];let C=!0;for(let b=v.length-1;b>=0;b--){const D=v[b]|0;C&&D==y||(S[b]=D,C=!1)}this.g=S}var c={};function u(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return O(d(-v));const y=[];let S=1;for(let C=0;v>=S;C++)y[C]=v/S|0,S*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return O(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=d(Math.pow(y,8));let C=m;for(let D=0;D<v.length;D+=8){var b=Math.min(8,v.length-D);const E=parseInt(v.substring(D,D+b),y);b<8?(b=d(Math.pow(y,b)),C=C.j(b).add(d(E))):(C=C.j(S),C=C.add(d(E)))}return C}var m=u(0),g=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();let v=0,y=1;for(let S=0;S<this.g.length;S++){const C=this.i(S);v+=(C>=0?C:4294967296+C)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(N(this))return"-"+O(this).toString(v);const y=d(Math.pow(v,6));var S=this;let C="";for(;;){const b=V(S,y).g;S=w(S,b.j(y));let D=((S.g.length>0?S.g[0]:S.h)>>>0).toString(v);if(S=b,R(S))return D+C;for(;D.length<6;)D="0"+D;C=D+C}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=w(this,v),N(v)?-1:R(v)?0:1};function O(v){const y=v.g.length,S=[];for(let C=0;C<y;C++)S[C]=~v.g[C];return new o(S,~v.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),S=[];let C=0;for(let b=0;b<=y;b++){let D=C+(this.i(b)&65535)+(v.i(b)&65535),E=(D>>>16)+(this.i(b)>>>16)+(v.i(b)>>>16);C=E>>>16,D&=65535,E&=65535,S[b]=E<<16|D}return new o(S,S[S.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(O(y))}t.j=function(v){if(R(this)||R(v))return m;if(N(this))return N(v)?O(this).j(O(v)):O(O(this).j(v));if(N(v))return O(this.j(O(v)));if(this.l(I)<0&&v.l(I)<0)return d(this.m()*v.m());const y=this.g.length+v.g.length,S=[];for(var C=0;C<2*y;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(let b=0;b<v.g.length;b++){const D=this.i(C)>>>16,E=this.i(C)&65535,ie=v.i(b)>>>16,ge=v.i(b)&65535;S[2*C+2*b]+=E*ge,_(S,2*C+2*b),S[2*C+2*b+1]+=D*ge,_(S,2*C+2*b+1),S[2*C+2*b+1]+=E*ie,_(S,2*C+2*b+1),S[2*C+2*b+2]+=D*ie,_(S,2*C+2*b+2)}for(v=0;v<y;v++)S[v]=S[2*v+1]<<16|S[2*v];for(v=y;v<2*y;v++)S[v]=0;return new o(S,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function T(v,y){this.g=v,this.h=y}function V(v,y){if(R(y))throw Error("division by zero");if(R(v))return new T(m,m);if(N(v))return y=V(O(v),y),new T(O(y.g),O(y.h));if(N(y))return y=V(v,O(y)),new T(O(y.g),y.h);if(v.g.length>30){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var S=g,C=y;C.l(v)<=0;)S=F(S),C=F(C);var b=j(S,1),D=j(C,1);for(C=j(C,2),S=j(S,2);!R(C);){var E=D.add(C);E.l(v)<=0&&(b=b.add(S),D=E),C=j(C,1),S=j(S,1)}return y=w(v,b.j(y)),new T(b,y)}for(b=m;v.l(y)>=0;){for(S=Math.max(1,Math.floor(v.m()/y.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),D=d(S),E=D.j(y);N(E)||E.l(v)>0;)S-=C,D=d(S),E=D.j(y);R(D)&&(D=g),b=b.add(D),v=w(v,E)}return new T(b,v)}t.B=function(v){return V(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),S=[];for(let C=0;C<y;C++)S[C]=this.i(C)&v.i(C);return new o(S,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),S=[];for(let C=0;C<y;C++)S[C]=this.i(C)|v.i(C);return new o(S,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),S=[];for(let C=0;C<y;C++)S[C]=this.i(C)^v.i(C);return new o(S,this.h^v.h)};function F(v){const y=v.g.length+1,S=[];for(let C=0;C<y;C++)S[C]=v.i(C)<<1|v.i(C-1)>>>31;return new o(S,v.h)}function j(v,y){const S=y>>5;y%=32;const C=v.g.length-S,b=[];for(let D=0;D<C;D++)b[D]=y>0?v.i(D+S)>>>y|v.i(D+S+1)<<32-y:v.i(D+S);return new o(b,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,D1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Jr=o}).apply(typeof t0<"u"?t0:typeof self<"u"?self:typeof window<"u"?window:{});var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var O1,Bo,L1,lc,af,V1,M1,F1;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ll=="object"&&Ll];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var p=r;l=l.split(".");for(var x=0;x<l.length-1;x++){var L=l[x];if(!(L in p))break e;p=p[L]}l=l[l.length-1],x=p[l],h=h(x),h!=x&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(h){var p=[],x;for(x in h)Object.prototype.hasOwnProperty.call(h,x)&&p.push([x,h[x]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function u(l,h,p){return l.call.apply(l.bind,arguments)}function d(l,h,p){return d=u,d.apply(null,arguments)}function f(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var x=p.slice();return x.push.apply(x,arguments),l.apply(this,x)}}function m(l,h){function p(){}p.prototype=h.prototype,l.Z=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Ob=function(x,L,M){for(var H=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)H[ce-2]=arguments[ce];return h.prototype[L].apply(x,H)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function I(l){const h=l.length;if(h>0){const p=Array(h);for(let x=0;x<h;x++)p[x]=l[x];return p}return[]}function R(l,h){for(let x=1;x<arguments.length;x++){const L=arguments[x];var p=typeof L;if(p=p!="object"?p:L?Array.isArray(L)?"array":p:"null",p=="array"||p=="object"&&typeof L.length=="number"){p=l.length||0;const M=L.length||0;l.length=p+M;for(let H=0;H<M;H++)l[p+H]=L[H]}else l.push(L)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(l){o.setTimeout(()=>{throw l},0)}function w(){var l=v;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,p){const x=T.get();x.set(h,p),this.h?this.h.next=x:this.g=x,this.h=x}}var T=new N(()=>new V,l=>l.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let F,j=!1,v=new _,y=()=>{const l=Promise.resolve(void 0);F=()=>{l.then(S)}};function S(){for(var l;l=w();){try{l.h.call(l.g)}catch(p){O(p)}var h=T;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}j=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return l}();function E(l){return/^[\s\xa0]*$/.test(l)}function ie(l,h){b.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}m(ie,b),ie.prototype.init=function(l,h){const p=this.type=l.type,x=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&ie.Z.h.call(this)},ie.prototype.h=function(){ie.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ge="closure_listenable_"+(Math.random()*1e6|0),Te=0;function q(l,h,p,x,L){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!x,this.ha=L,this.key=++Te,this.da=this.fa=!1}function $(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Y(l,h,p){for(const x in l)h.call(p,l[x],x,l)}function X(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function ue(l){const h={};for(const p in l)h[p]=l[p];return h}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function G(l,h){let p,x;for(let L=1;L<arguments.length;L++){x=arguments[L];for(p in x)l[p]=x[p];for(let M=0;M<k.length;M++)p=k[M],Object.prototype.hasOwnProperty.call(x,p)&&(l[p]=x[p])}}function de(l){this.src=l,this.g={},this.h=0}de.prototype.add=function(l,h,p,x,L){const M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);const H=ke(l,h,x,L);return H>-1?(h=l[H],p||(h.fa=!1)):(h=new q(h,this.src,M,!!x,L),h.fa=p,l.push(h)),h};function Ke(l,h){const p=h.type;if(p in l.g){var x=l.g[p],L=Array.prototype.indexOf.call(x,h,void 0),M;(M=L>=0)&&Array.prototype.splice.call(x,L,1),M&&($(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function ke(l,h,p,x){for(let L=0;L<l.length;++L){const M=l[L];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==x)return L}return-1}var qe="closure_lm_"+(Math.random()*1e6|0),Qe={};function Ct(l,h,p,x,L){if(Array.isArray(h)){for(let M=0;M<h.length;M++)Ct(l,h[M],p,x,L);return null}return p=rl(p),l&&l[ge]?l.J(h,p,c(x)?!!x.capture:!1,L):Wn(l,h,p,!1,x,L)}function Wn(l,h,p,x,L,M){if(!h)throw Error("Invalid event type");const H=c(L)?!!L.capture:!!L;let ce=ei(l);if(ce||(l[qe]=ce=new de(l)),p=ce.add(h,p,x,H,M),p.proxy)return p;if(x=Nt(),p.proxy=x,x.src=l,x.listener=p,l.addEventListener)D||(L=H),L===void 0&&(L=!1),l.addEventListener(h.toString(),x,L);else if(l.attachEvent)l.attachEvent(Gn(h.toString()),x);else if(l.addListener&&l.removeListener)l.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Nt(){function l(p){return h.call(l.src,l.listener,p)}const h=Qu;return l}function At(l,h,p,x,L){if(Array.isArray(h))for(var M=0;M<h.length;M++)At(l,h[M],p,x,L);else x=c(x)?!!x.capture:!!x,p=rl(p),l&&l[ge]?(l=l.i,M=String(h).toString(),M in l.g&&(h=l.g[M],p=ke(h,p,x,L),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete l.g[M],l.h--)))):l&&(l=ei(l))&&(h=l.g[h.toString()],l=-1,h&&(l=ke(h,p,x,L)),(p=l>-1?h[l]:null)&&uo(p))}function uo(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[ge])Ke(h.i,l);else{var p=l.type,x=l.proxy;h.removeEventListener?h.removeEventListener(p,x,l.capture):h.detachEvent?h.detachEvent(Gn(p),x):h.addListener&&h.removeListener&&h.removeListener(x),(p=ei(h))?(Ke(p,l),p.h==0&&(p.src=null,h[qe]=null)):$(l)}}}function Gn(l){return l in Qe?Qe[l]:Qe[l]="on"+l}function Qu(l,h){if(l.da)l=!0;else{h=new ie(h,this);const p=l.listener,x=l.ha||l.src;l.fa&&uo(l),l=p.call(x,h)}return l}function ei(l){return l=l[qe],l instanceof de?l:null}var an="__closure_events_fn_"+(Math.random()*1e9>>>0);function rl(l){return typeof l=="function"?l:(l[an]||(l[an]=function(h){return l.handleEvent(h)}),l[an])}function ot(){C.call(this),this.i=new de(this),this.M=this,this.G=null}m(ot,C),ot.prototype[ge]=!0,ot.prototype.removeEventListener=function(l,h,p,x){At(this,l,h,p,x)};function ht(l,h){var p,x=l.G;if(x)for(p=[];x;x=x.G)p.push(x);if(l=l.M,x=h.type||h,typeof h=="string")h=new b(h,l);else if(h instanceof b)h.target=h.target||l;else{var L=h;h=new b(x,l),G(h,L)}L=!0;let M,H;if(p)for(H=p.length-1;H>=0;H--)M=h.g=p[H],L=ti(M,x,!0,h)&&L;if(M=h.g=l,L=ti(M,x,!0,h)&&L,L=ti(M,x,!1,h)&&L,p)for(H=0;H<p.length;H++)M=h.g=p[H],L=ti(M,x,!1,h)&&L}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const p=l.g[h];for(let x=0;x<p.length;x++)$(p[x]);delete l.g[h],l.h--}}this.G=null},ot.prototype.J=function(l,h,p,x){return this.i.add(String(l),h,!1,p,x)},ot.prototype.K=function(l,h,p,x){return this.i.add(String(l),h,!0,p,x)};function ti(l,h,p,x){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let L=!0;for(let M=0;M<h.length;++M){const H=h[M];if(H&&!H.da&&H.capture==p){const ce=H.listener,tt=H.ha||H.src;H.fa&&Ke(l.i,H),L=ce.call(tt,x)!==!1&&L}}return L&&!x.defaultPrevented}function Yu(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=d(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(l,h||0)}function Tn(l){l.g=Yu(()=>{l.g=null,l.i&&(l.i=!1,Tn(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Ju extends C{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(l){C.call(this),this.h=l,this.g={}}m(ys,C);var ho=[];function sl(l){Y(l.g,function(h,p){this.g.hasOwnProperty(p)&&uo(h)},l),l.g={}}ys.prototype.N=function(){ys.Z.N.call(this),sl(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=o.JSON.stringify,Xu=o.JSON.parse,ni=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function il(){}function fo(){}var Kn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function po(){b.call(this,"d")}m(po,b);function mo(){b.call(this,"c")}m(mo,b);var Sn={},A=null;function J(){return A=A||new ot}Sn.Ia="serverreachability";function ae(l){b.call(this,Sn.Ia,l)}m(ae,b);function te(l){const h=J();ht(h,new ae(h))}Sn.STAT_EVENT="statevent";function ne(l,h){b.call(this,Sn.STAT_EVENT,l),this.stat=h}m(ne,b);function ee(l){const h=J();ht(h,new ne(h,l))}Sn.Ja="timingevent";function at(l,h){b.call(this,Sn.Ja,l),this.size=h}m(at,b);function je(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},h)}function Le(){this.g=!0}Le.prototype.ua=function(){this.g=!1};function Ye(l,h,p,x,L,M){l.info(function(){if(l.g)if(M){var H="",ce=M.split("&");for(let Se=0;Se<ce.length;Se++){var tt=ce[Se].split("=");if(tt.length>1){const lt=tt[0];tt=tt[1];const kn=lt.split("_");H=kn.length>=2&&kn[1]=="type"?H+(lt+"="+tt+"&"):H+(lt+"=redacted&")}}}else H=null;else H=M;return"XMLHTTP REQ ("+x+") [attempt "+L+"]: "+h+`
`+p+`
`+H})}function ln(l,h,p,x,L,M,H){l.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+L+"]: "+h+`
`+p+`
`+M+" "+H})}function ri(l,h,p,x){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+_b(l,p)+(x?" "+x:"")})}function xb(l,h){l.info(function(){return"TIMEOUT: "+h})}Le.prototype.info=function(){};function _b(l,h){if(!l.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(l=0;l<M.length;l++)if(Array.isArray(M[l])){var p=M[l];if(!(p.length<2)){var x=p[1];if(Array.isArray(x)&&!(x.length<1)){var L=x[0];if(L!="noop"&&L!="stop"&&L!="close")for(let H=1;H<x.length;H++)x[H]=""}}}}return gr(M)}catch{return h}}var ol={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Sm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Im;function Zu(){}m(Zu,il),Zu.prototype.g=function(){return new XMLHttpRequest},Im=new Zu;function go(l){return encodeURIComponent(String(l))}function wb(l){var h=1;l=l.split(":");const p=[];for(;h>0&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function yr(l,h,p,x){this.j=l,this.i=h,this.l=p,this.S=x||1,this.V=new ys(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new km}function km(){this.i=null,this.g="",this.h=!1}var Cm={},ed={};function td(l,h,p){l.M=1,l.A=ll(In(h)),l.u=p,l.R=!0,Nm(l,null)}function Nm(l,h){l.F=Date.now(),al(l),l.B=In(l.A);var p=l.B,x=l.S;Array.isArray(x)||(x=[String(x)]),$m(p.i,"t",x),l.C=0,p=l.j.L,l.h=new km,l.g=og(l.j,p?h:null,!l.u),l.P>0&&(l.O=new Ju(d(l.Y,l,l.g),l.P)),h=l.V,p=l.g,x=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(ho[0]=L.toString()),L=ho);for(let M=0;M<L.length;M++){const H=Ct(p,L[M],x||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=l.J?ue(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),te(),Ye(l.i,l.v,l.B,l.l,l.S,l.u)}yr.prototype.ba=function(l){l=l.target;const h=this.O;h&&_r(l)==3?h.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const ce=_r(this.g),tt=this.g.ya(),Se=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||Qm(this.g)))){this.K||ce!=4||tt==7||(tt==8||Se<=0?te(3):te(2)),nd(this);var h=this.g.ca();this.X=h;var p=bb(this);if(this.o=h==200,ln(this.i,this.v,this.B,this.l,this.S,ce,h),this.o){if(this.U&&!this.L){t:{if(this.g){var x,L=this.g;if((x=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(x)){var M=x;break t}}M=null}if(l=M)ri(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rd(this,l);else{this.o=!1,this.m=3,ee(12),vs(this),yo(this);break e}}if(this.R){l=!0;let lt;for(;!this.K&&this.C<p.length;)if(lt=Eb(this,p),lt==ed){ce==4&&(this.m=4,ee(14),l=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==Cm){this.m=4,ee(15),ri(this.i,this.l,p,"[Invalid Chunk]"),l=!1;break}else ri(this.i,this.l,lt,null),rd(this,lt);if(Am(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||p.length!=0||this.h.h||(this.m=1,ee(16),l=!1),this.o=this.o&&l,!l)ri(this.i,this.l,p,"[Invalid Chunked Response]"),vs(this),yo(this);else if(p.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),dd(H),H.P=!0,ee(11))}}else ri(this.i,this.l,p,null),rd(this,p);ce==4&&vs(this),this.o&&!this.K&&(ce==4?ng(this.j,this):(this.o=!1,al(this)))}else Vb(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,ee(12)):(this.m=0,ee(13)),vs(this),yo(this)}}}catch{}finally{}};function bb(l){if(!Am(l))return l.g.la();const h=Qm(l.g);if(h==="")return"";let p="";const x=h.length,L=_r(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return vs(l),yo(l),"";l.h.i=new o.TextDecoder}for(let M=0;M<x;M++)l.h.h=!0,p+=l.h.i.decode(h[M],{stream:!(L&&M==x-1)});return h.length=0,l.h.g+=p,l.C=0,l.h.g}function Am(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Eb(l,h){var p=l.C,x=h.indexOf(`
`,p);return x==-1?ed:(p=Number(h.substring(p,x)),isNaN(p)?Cm:(x+=1,x+p>h.length?ed:(h=h.slice(x,x+p),l.C=x+p,h)))}yr.prototype.cancel=function(){this.K=!0,vs(this)};function al(l){l.T=Date.now()+l.H,Rm(l,l.H)}function Rm(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=je(d(l.aa,l),h)}function nd(l){l.D&&(o.clearTimeout(l.D),l.D=null)}yr.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(xb(this.i,this.B),this.M!=2&&(te(),ee(17)),vs(this),this.m=2,yo(this)):Rm(this,this.T-l)};function yo(l){l.j.I==0||l.K||ng(l.j,l)}function vs(l){nd(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,sl(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function rd(l,h){try{var p=l.j;if(p.I!=0&&(p.g==l||sd(p.h,l))){if(!l.L&&sd(p.h,l)&&p.I==3){try{var x=p.Ba.g.parse(h)}catch{x=null}if(Array.isArray(x)&&x.length==3){var L=x;if(L[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<l.F)fl(p),dl(p);else break e;ud(p),ee(18)}}else p.xa=L[1],0<p.xa-p.K&&L[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=je(d(p.Va,p),6e3));Dm(p.h)<=1&&p.ta&&(p.ta=void 0)}else _s(p,11)}else if((l.L||p.g==l)&&fl(p),!E(h))for(L=p.Ba.g.parse(h),h=0;h<L.length;h++){let Se=L[h];const lt=Se[0];if(!(lt<=p.K))if(p.K=lt,Se=Se[1],p.I==2)if(Se[0]=="c"){p.M=Se[1],p.ba=Se[2];const kn=Se[3];kn!=null&&(p.ka=kn,p.j.info("VER="+p.ka));const ws=Se[4];ws!=null&&(p.za=ws,p.j.info("SVER="+p.za));const wr=Se[5];wr!=null&&typeof wr=="number"&&wr>0&&(x=1.5*wr,p.O=x,p.j.info("backChannelRequestTimeoutMs_="+x)),x=p;const br=l.g;if(br){const ml=br.g?br.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ml){var M=x.h;M.g||ml.indexOf("spdy")==-1&&ml.indexOf("quic")==-1&&ml.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(id(M,M.h),M.h=null))}if(x.G){const hd=br.g?br.g.getResponseHeader("X-HTTP-Session-Id"):null;hd&&(x.wa=hd,Ae(x.J,x.G,hd))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-l.F,p.j.info("Handshake RTT: "+p.T+"ms")),x=p;var H=l;if(x.na=ig(x,x.L?x.ba:null,x.W),H.L){Om(x.h,H);var ce=H,tt=x.O;tt&&(ce.H=tt),ce.D&&(nd(ce),al(ce)),x.g=H}else eg(x);p.i.length>0&&hl(p)}else Se[0]!="stop"&&Se[0]!="close"||_s(p,7);else p.I==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?_s(p,7):cd(p):Se[0]!="noop"&&p.l&&p.l.qa(Se),p.A=0)}}te(4)}catch{}}var Tb=class{constructor(l,h){this.g=l,this.map=h}};function Pm(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Dm(l){return l.h?1:l.g?l.g.size:0}function sd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function id(l,h){l.g?l.g.add(h):l.h=h}function Om(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Pm.prototype.cancel=function(){if(this.i=Lm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Lm(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.G);return h}return I(l.i)}var Vm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(l,h){if(l){l=l.split("&");for(let p=0;p<l.length;p++){const x=l[p].indexOf("=");let L,M=null;x>=0?(L=l[p].substring(0,x),M=l[p].substring(x+1)):L=l[p],h(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function vr(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof vr?(this.l=l.l,vo(this,l.j),this.o=l.o,this.g=l.g,xo(this,l.u),this.h=l.h,od(this,Bm(l.i)),this.m=l.m):l&&(h=String(l).match(Vm))?(this.l=!1,vo(this,h[1]||"",!0),this.o=_o(h[2]||""),this.g=_o(h[3]||"",!0),xo(this,h[4]),this.h=_o(h[5]||"",!0),od(this,h[6]||"",!0),this.m=_o(h[7]||"")):(this.l=!1,this.i=new bo(null,this.l))}vr.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(wo(h,Mm,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(wo(h,Mm,!0),"@"),l.push(go(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&l.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(wo(p,p.charAt(0)=="/"?Cb:kb,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",wo(p,Ab)),l.join("")},vr.prototype.resolve=function(l){const h=In(this);let p=!!l.j;p?vo(h,l.j):p=!!l.o,p?h.o=l.o:p=!!l.g,p?h.g=l.g:p=l.u!=null;var x=l.h;if(p)xo(h,l.u);else if(p=!!l.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var L=h.h.lastIndexOf("/");L!=-1&&(x=h.h.slice(0,L+1)+x)}if(L=x,L==".."||L==".")x="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){x=L.lastIndexOf("/",0)==0,L=L.split("/");const M=[];for(let H=0;H<L.length;){const ce=L[H++];ce=="."?x&&H==L.length&&M.push(""):ce==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),x&&H==L.length&&M.push("")):(M.push(ce),x=!0)}x=M.join("/")}else x=L}return p?h.h=x:p=l.i.toString()!=="",p?od(h,Bm(l.i)):p=!!l.m,p&&(h.m=l.m),h};function In(l){return new vr(l)}function vo(l,h,p){l.j=p?_o(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function xo(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function od(l,h,p){h instanceof bo?(l.i=h,Rb(l.i,l.l)):(p||(h=wo(h,Nb)),l.i=new bo(h,l.l))}function Ae(l,h,p){l.i.set(h,p)}function ll(l){return Ae(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function _o(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function wo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,Ib),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ib(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Mm=/[#\/\?@]/g,kb=/[#\?:]/g,Cb=/[#\?]/g,Nb=/[#\?@]/g,Ab=/#/g;function bo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function xs(l){l.g||(l.g=new Map,l.h=0,l.i&&Sb(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=bo.prototype,t.add=function(l,h){xs(this),this.i=null,l=si(this,l);let p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Fm(l,h){xs(l),h=si(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function zm(l,h){return xs(l),h=si(l,h),l.g.has(h)}t.forEach=function(l,h){xs(this),this.g.forEach(function(p,x){p.forEach(function(L){l.call(h,L,x,this)},this)},this)};function Um(l,h){xs(l);let p=[];if(typeof h=="string")zm(l,h)&&(p=p.concat(l.g.get(si(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)p=p.concat(l[h]);return p}t.set=function(l,h){return xs(this),this.i=null,l=si(this,l),zm(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=Um(this,l),l.length>0?String(l[0]):h):h};function $m(l,h,p){Fm(l,h),p.length>0&&(l.i=null,l.g.set(si(l,h),I(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let x=0;x<h.length;x++){var p=h[x];const L=go(p);p=Um(this,p);for(let M=0;M<p.length;M++){let H=L;p[M]!==""&&(H+="="+go(p[M])),l.push(H)}}return this.i=l.join("&")};function Bm(l){const h=new bo;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function si(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function Rb(l,h){h&&!l.j&&(xs(l),l.i=null,l.g.forEach(function(p,x){const L=x.toLowerCase();x!=L&&(Fm(this,x),$m(this,L,p))},l)),l.j=h}function Pb(l,h){const p=new Le;if(o.Image){const x=new Image;x.onload=f(xr,p,"TestLoadImage: loaded",!0,h,x),x.onerror=f(xr,p,"TestLoadImage: error",!1,h,x),x.onabort=f(xr,p,"TestLoadImage: abort",!1,h,x),x.ontimeout=f(xr,p,"TestLoadImage: timeout",!1,h,x),o.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=l}else h(!1)}function jb(l,h){const p=new Le,x=new AbortController,L=setTimeout(()=>{x.abort(),xr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:x.signal}).then(M=>{clearTimeout(L),M.ok?xr(p,"TestPingServer: ok",!0,h):xr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),xr(p,"TestPingServer: error",!1,h)})}function xr(l,h,p,x,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),x(p)}catch{}}function Db(){this.g=new ni}function ad(l){this.i=l.Sb||null,this.h=l.ab||!1}m(ad,il),ad.prototype.g=function(){return new cl(this.i,this.h)};function cl(l,h){ot.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(cl,ot),t=cl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,To(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Eo(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,To(this)),this.g&&(this.readyState=3,To(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qm(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function qm(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Eo(this):To(this),this.readyState==3&&qm(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Eo(this))},t.Na=function(l){this.g&&(this.response=l,Eo(this))},t.ga=function(){this.g&&Eo(this)};function Eo(l){l.readyState=4,l.l=null,l.j=null,l.B=null,To(l)}t.setRequestHeader=function(l,h){this.A.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function To(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(cl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Hm(l){let h="";return Y(l,function(p,x){h+=x,h+=":",h+=p,h+=`\r
`}),h}function ld(l,h,p){e:{for(x in p){var x=!1;break e}x=!0}x||(p=Hm(p),typeof l=="string"?p!=null&&go(p):Ae(l,h,p))}function Ue(l){ot.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ue,ot);var Ob=/^https?$/i,Lb=["POST","PUT"];t=Ue.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,h,p,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Im.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){Wm(this,M);return}if(l=p||"",p=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var L in x)p.set(L,x[L]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const M of x.keys())p.set(M,x.get(M));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),L=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(Lb,h,void 0)>=0)||x||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,H]of p)this.g.setRequestHeader(M,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(M){Wm(this,M)}};function Wm(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,Gm(l),ul(l)}function Gm(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,ht(this,"complete"),ht(this,"abort"),ul(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ul(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Km(this):this.Xa())},t.Xa=function(){Km(this)};function Km(l){if(l.h&&typeof i<"u"){if(l.v&&_r(l)==4)setTimeout(l.Ca.bind(l),0);else if(ht(l,"readystatechange"),_r(l)==4){l.h=!1;try{const M=l.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var x;if(x=M===0){let H=String(l.D).match(Vm)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),x=!Ob.test(H?H.toLowerCase():"")}p=x}if(p)ht(l,"complete"),ht(l,"success");else{l.o=6;try{var L=_r(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",Gm(l)}}finally{ul(l)}}}}function ul(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const p=l.g;l.g=null,h||ht(l,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function _r(l){return l.g?l.g.readyState:0}t.ca=function(){try{return _r(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Xu(h)}};function Qm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Vb(l){const h={};l=(l.g&&_r(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<l.length;x++){if(E(l[x]))continue;var p=wb(l[x]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[L]||[];h[L]=M,M.push(p)}X(h,function(x){return x.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function So(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Ym(l){this.za=0,this.i=[],this.j=new Le,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=So("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=So("baseRetryDelayMs",5e3,l),this.Za=So("retryDelaySeedMs",1e4,l),this.Ta=So("forwardChannelMaxRetries",2,l),this.va=So("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Pm(l&&l.concurrentRequestLimit),this.Ba=new Db,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ym.prototype,t.ka=8,t.I=1,t.connect=function(l,h,p,x){ee(0),this.W=l,this.H=h||{},p&&x!==void 0&&(this.H.OSID=p,this.H.OAID=x),this.F=this.X,this.J=ig(this,null,this.W),hl(this)};function cd(l){if(Jm(l),l.I==3){var h=l.V++,p=In(l.J);if(Ae(p,"SID",l.M),Ae(p,"RID",h),Ae(p,"TYPE","terminate"),Io(l,p),h=new yr(l,l.j,h),h.M=2,h.A=ll(In(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=og(h.j,null),h.g.ea(h.A)),h.F=Date.now(),al(h)}sg(l)}function dl(l){l.g&&(dd(l),l.g.cancel(),l.g=null)}function Jm(l){dl(l),l.v&&(o.clearTimeout(l.v),l.v=null),fl(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function hl(l){if(!jm(l.h)&&!l.m){l.m=!0;var h=l.Ea;F||y(),j||(F(),j=!0),v.add(h,l),l.D=0}}function Mb(l,h){return Dm(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=je(d(l.Ea,l,h),rg(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new yr(this,this.j,l);let M=this.o;if(this.U&&(M?(M=ue(M),G(M,this.U)):M=this.U),this.u!==null||this.R||(L.J=M,M=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var x=this.i[p];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(h+=x,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Zm(this,L,h),p=In(this.J),Ae(p,"RID",l),Ae(p,"CVER",22),this.G&&Ae(p,"X-HTTP-Session-Id",this.G),Io(this,p),M&&(this.R?h="headers="+go(Hm(M))+"&"+h:this.u&&ld(p,this.u,M)),id(this.h,L),this.Ra&&Ae(p,"TYPE","init"),this.S?(Ae(p,"$req",h),Ae(p,"SID","null"),L.U=!0,td(L,p,null)):td(L,p,h),this.I=2}}else this.I==3&&(l?Xm(this,l):this.i.length==0||jm(this.h)||Xm(this))};function Xm(l,h){var p;h?p=h.l:p=l.V++;const x=In(l.J);Ae(x,"SID",l.M),Ae(x,"RID",p),Ae(x,"AID",l.K),Io(l,x),l.u&&l.o&&ld(x,l.u,l.o),p=new yr(l,l.j,p,l.D+1),l.u===null&&(p.J=l.o),h&&(l.i=h.G.concat(l.i)),h=Zm(l,p,1e3),p.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),id(l.h,p),td(p,x,h)}function Io(l,h){l.H&&Y(l.H,function(p,x){Ae(h,x,p)}),l.l&&Y({},function(p,x){Ae(h,x,p)})}function Zm(l,h,p){p=Math.min(l.i.length,p);const x=l.l?d(l.l.Ka,l.l,l):null;e:{var L=l.i;let ce=-1;for(;;){const tt=["count="+p];ce==-1?p>0?(ce=L[0].g,tt.push("ofs="+ce)):ce=0:tt.push("ofs="+ce);let Se=!0;for(let lt=0;lt<p;lt++){var M=L[lt].g;const kn=L[lt].map;if(M-=ce,M<0)ce=Math.max(0,L[lt].g-100),Se=!1;else try{M="req"+M+"_"||"";try{var H=kn instanceof Map?kn:Object.entries(kn);for(const[ws,wr]of H){let br=wr;c(wr)&&(br=gr(wr)),tt.push(M+ws+"="+encodeURIComponent(br))}}catch(ws){throw tt.push(M+"type="+encodeURIComponent("_badmap")),ws}}catch{x&&x(kn)}}if(Se){H=tt.join("&");break e}}H=void 0}return l=l.i.splice(0,p),h.G=l,H}function eg(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;F||y(),j||(F(),j=!0),v.add(h,l),l.A=0}}function ud(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=je(d(l.Da,l),rg(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,tg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=je(d(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ee(10),dl(this),tg(this))};function dd(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function tg(l){l.g=new yr(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=In(l.na);Ae(h,"RID","rpc"),Ae(h,"SID",l.M),Ae(h,"AID",l.K),Ae(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ae(h,"TO",l.ia),Ae(h,"TYPE","xmlhttp"),Io(l,h),l.u&&l.o&&ld(h,l.u,l.o),l.O&&(l.g.H=l.O);var p=l.g;l=l.ba,p.M=1,p.A=ll(In(h)),p.u=null,p.R=!0,Nm(p,l)}t.Va=function(){this.C!=null&&(this.C=null,dl(this),ud(this),ee(19))};function fl(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function ng(l,h){var p=null;if(l.g==h){fl(l),dd(l),l.g=null;var x=2}else if(sd(l.h,h))p=h.G,Om(l.h,h),x=1;else return;if(l.I!=0){if(h.o)if(x==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var L=l.D;x=J(),ht(x,new at(x,p)),hl(l)}else eg(l);else if(L=h.m,L==3||L==0&&h.X>0||!(x==1&&Mb(l,h)||x==2&&ud(l)))switch(p&&p.length>0&&(h=l.h,h.i=h.i.concat(p)),L){case 1:_s(l,5);break;case 4:_s(l,10);break;case 3:_s(l,6);break;default:_s(l,2)}}}function rg(l,h){let p=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(p*=2),p*h}function _s(l,h){if(l.j.info("Error code "+h),h==2){var p=d(l.bb,l),x=l.Ua;const L=!x;x=new vr(x||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||vo(x,"https"),ll(x),L?Pb(x.toString(),p):jb(x.toString(),p)}else ee(2);l.I=0,l.l&&l.l.pa(h),sg(l),Jm(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function sg(l){if(l.I=0,l.ja=[],l.l){const h=Lm(l.h);(h.length!=0||l.i.length!=0)&&(R(l.ja,h),R(l.ja,l.i),l.h.i.length=0,I(l.i),l.i.length=0),l.l.oa()}}function ig(l,h,p){var x=p instanceof vr?In(p):new vr(p);if(x.g!="")h&&(x.g=h+"."+x.g),xo(x,x.u);else{var L=o.location;x=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;const M=new vr(null);x&&vo(M,x),h&&(M.g=h),L&&xo(M,L),p&&(M.h=p),x=M}return p=l.G,h=l.wa,p&&h&&Ae(x,p,h),Ae(x,"VER",l.ka),Io(l,x),x}function og(l,h,p){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new Ue(new ad({ab:p})):new Ue(l.ma),h.Fa(l.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ag(){}t=ag.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function pl(){}pl.prototype.g=function(l,h){return new Bt(l,h)};function Bt(l,h){ot.call(this),this.g=new Ym(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!E(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ii(this)}m(Bt,ot),Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){cd(this.g)},Bt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.v&&(p={},p.__data__=gr(l),l=p);h.i.push(new Tb(h.Ya++,l)),h.I==3&&hl(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,cd(this.g),delete this.g,Bt.Z.N.call(this)};function lg(l){po.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}m(lg,po);function cg(){mo.call(this),this.status=1}m(cg,mo);function ii(l){this.g=l}m(ii,ag),ii.prototype.ra=function(){ht(this.g,"a")},ii.prototype.qa=function(l){ht(this.g,new lg(l))},ii.prototype.pa=function(l){ht(this.g,new cg)},ii.prototype.oa=function(){ht(this.g,"b")},pl.prototype.createWebChannel=pl.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,F1=function(){return new pl},M1=function(){return J()},V1=Sn,af={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ol.NO_ERROR=0,ol.TIMEOUT=8,ol.HTTP_ERROR=6,lc=ol,Sm.COMPLETE="complete",L1=Sm,fo.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",ot.prototype.listen=ot.prototype.J,Bo=fo,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,O1=Ue}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="12.8.0";function FN(t){io=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Np("@firebase/firestore");function ai(){return Us.logLevel}function K(t,...e){if(Us.logLevel<=fe.DEBUG){const n=e.map(zp);Us.debug(`Firestore (${io}): ${t}`,...n)}}function hr(t,...e){if(Us.logLevel<=fe.ERROR){const n=e.map(zp);Us.error(`Firestore (${io}): ${t}`,...n)}}function Hi(t,...e){if(Us.logLevel<=fe.WARN){const n=e.map(zp);Us.warn(`Firestore (${io}): ${t}`,...n)}}function zp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,z1(t,r,n)}function z1(t,e,n){let r=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw hr(r),new Error(r)}function we(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||z1(e,s,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class UN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $N{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new U1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class BN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class qN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new BN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,en(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new n0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new n0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=WN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function lf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Qd(s)===Qd(i)?pe(s,i):Qd(s)?1:-1}return pe(t.length,e.length)}const GN=55296,KN=57343;function Qd(t){const e=t.charCodeAt(0);return e>=GN&&e<=KN}function Wi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=An.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),s=An.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?An.extractNumericId(e).compare(An.extractNumericId(n)):lf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jr.fromString(e.substring(4,e.length-2))}}class Ce extends An{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const QN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends An{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return QN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===r0}static keyField(){return new mt([r0])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new W(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ce.fromString(e))}static fromName(e){return new Z(Ce.fromString(e).popFirst(5))}static empty(){return new Z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t,e,n){if(!n)throw new W(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YN(t,e,n,r){if(e===!0&&r===!0)throw new W(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s0(t){if(!Z.isDocumentKey(t))throw new W(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function i0(t){if(Z.isDocumentKey(t))throw new W(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function B1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new W(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ja(t,e){if(!B1(t))throw new W(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=-62135596800,a0=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*a0);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<o0)throw new W(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/a0}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ja(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-o0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:et("string",ve._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ve(0,0))}static max(){return new oe(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=-1;function JN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new ss(s,Z.empty(),e)}function XN(t){return new ss(t.readTime,t.key,Aa)}class ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ss(oe.min(),Z.empty(),Aa)}static max(){return new ss(oe.max(),Z.empty(),Aa)}}function ZN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==eA)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function nA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ou.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=-1;function Lu(t){return t==null}function Qc(t){return t===0&&1/t==-1/0}function rA(t){return typeof t=="number"&&Number.isInteger(t)&&!Qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="";function sA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=l0(e)),e=iA(t.get(n),e);return l0(e)}function iA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case q1:n+="";break;default:n+=i}}return n}function l0(t){return t+q1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function H1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vl(this.root,e,this.comparator,!0)}}class Vl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u0(this.data.getIterator())}getIteratorFrom(e){return new u0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class u0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new st(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new W1("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const oA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=oA.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="server_timestamp",K1="__type__",Q1="__previous_value__",Y1="__local_write_time__";function Bp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[K1])==null?void 0:r.stringValue)===G1}function Vu(t){const e=t.mapValue.fields[Q1];return Bp(e)?Vu(e):e}function Ra(t){const e=is(t.mapValue.fields[Y1].timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n,r,s,i,o,c,u,d,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=m}}const Yc="(default)";class Pa{constructor(e,n){this.projectId=e,this.database=n||Yc}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===Yc}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}function lA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="__type__",cA="__max__",Ml={mapValue:{}},X1="__vector__",Jc="value";function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bp(t)?4:dA(t)?9007199254740991:uA(t)?10:11:se(28295,{value:t})}function Un(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=is(s.timestampValue),c=is(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return os(s.bytesValue).isEqual(os(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?Qc(o)===Qc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Wi(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(c0(o)!==c0(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Un(o[u],c[u])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function ja(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=He(i.integerValue||i.doubleValue),u=He(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return d0(t.timestampValue,e.timestampValue);case 4:return d0(Ra(t),Ra(e));case 5:return lf(t.stringValue,e.stringValue);case 6:return function(i,o){const c=os(i),u=os(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=pe(c[d],u[d]);if(f!==0)return f}return pe(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=pe(He(i.latitude),He(o.latitude));return c!==0?c:pe(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return h0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,R,N;const c=i.fields||{},u=o.fields||{},d=(g=c[Jc])==null?void 0:g.arrayValue,f=(I=u[Jc])==null?void 0:I.arrayValue,m=pe(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:h0(d,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ml.mapValue&&o===Ml.mapValue)return 0;if(i===Ml.mapValue)return 1;if(o===Ml.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=lf(u[m],f[m]);if(g!==0)return g;const I=Gi(c[u[m]],d[f[m]]);if(I!==0)return I}return pe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function d0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=is(t),r=is(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function h0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gi(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function Ki(t){return cf(t)}function cf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=is(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=cf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${cf(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function cc(t){switch(as(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vu(t);return e?16+cc(e):16;case 5:return 2*t.stringValue.length;case 6:return os(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+cc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ms(r.fields,(i,o)=>{s+=i.length+cc(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function f0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function uf(t){return!!t&&"integerValue"in t}function qp(t){return!!t&&"arrayValue"in t}function p0(t){return!!t&&"nullValue"in t}function m0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uc(t){return!!t&&"mapValue"in t}function uA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[J1])==null?void 0:r.stringValue)===X1}function sa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sa(t.arrayValue.values[n]);return e}return{...t}}function dA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===cA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sa(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=sa(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];uc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(sa(this.value))}}function Z1(t){const e=[];return ms(t.fields,(n,r)=>{const s=new mt([n]);if(uc(r)){const i=Z1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Tt(e,0,oe.min(),oe.min(),oe.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,oe.min(),oe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,oe.min(),oe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.position=e,this.inclusive=n}}function g0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function y0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n="asc"){this.field=e,this.dir=n}}function hA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{}class Ze extends ew{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pA(e,n,r):n==="array-contains"?new yA(e,r):n==="in"?new vA(e,r):n==="not-in"?new xA(e,r):n==="array-contains-any"?new _A(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mA(e,r):new gA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gi(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends ew{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new En(e,n)}matches(e){return tw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tw(t){return t.op==="and"}function nw(t){return fA(t)&&tw(t)}function fA(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function df(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(nw(t))return t.filters.map(e=>df(e)).join(",");{const e=t.filters.map(n=>df(n)).join(",");return`${t.op}(${e})`}}function rw(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Un(r.value,s.value)}(t,e):t instanceof En?function(r,s){return s instanceof En&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&rw(o,s.filters[c]),!0):!1}(t,e):void se(19439)}function sw(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(sw).join(" ,")+"}"}(t):"Filter"}class pA extends Ze{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class mA extends Ze{constructor(e,n){super(e,"in",n),this.keys=iw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gA extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=iw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class yA extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qp(n)&&ja(n.arrayValue,this.value)}}class vA extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ja(this.value.arrayValue,n)}}class xA extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ja(this.value.arrayValue,n)}}class _A extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ja(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function v0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new wA(t,e,n,r,s,i,o)}function Hp(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>df(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.Te=n}return e.Te}function Wp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!y0(t.startAt,e.startAt)&&y0(t.endAt,e.endAt)}function hf(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function bA(t,e,n,r,s,i,o,c){return new lo(t,e,n,r,s,i,o,c)}function Mu(t){return new lo(t)}function x0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EA(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ow(t){return t.collectionGroup!==null}function ia(t){const e=le(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new st(mt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Da(i,r))}),n.has(mt.keyField().canonicalString())||e.Ie.push(new Da(mt.keyField(),r))}return e.Ie}function Mn(t){const e=le(t);return e.Ee||(e.Ee=TA(e,ia(t))),e.Ee}function TA(t,e){if(t.limitType==="F")return v0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Da(s.field,i)});const n=t.endAt?new Xc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xc(t.startAt.position,t.startAt.inclusive):null;return v0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ff(t,e){const n=t.filters.concat([e]);return new lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function SA(t,e){const n=t.explicitOrderBy.concat([e]);return new lo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function pf(t,e,n){return new lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fu(t,e){return Wp(Mn(t),Mn(e))&&t.limitType===e.limitType}function aw(t){return`${Hp(Mn(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>sw(s)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ki(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ki(s)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ia(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const d=g0(o,c,u);return o.inclusive?d<=0:d<0}(r.startAt,ia(r),s)||r.endAt&&!function(o,c,u){const d=g0(o,c,u);return o.inclusive?d>=0:d>0}(r.endAt,ia(r),s))}(t,e)}function IA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lw(t){return(e,n)=>{let r=!1;for(const s of ia(t)){const i=kA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kA(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,c){const u=o.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Gi(u,d):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return H1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new ze(Z.comparator);function fr(){return CA}const cw=new ze(Z.comparator);function qo(...t){let e=cw;for(const n of t)e=e.insert(n.key,n);return e}function uw(t){let e=cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cs(){return oa()}function dw(){return oa()}function oa(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const NA=new ze(Z.comparator),AA=new st(Z.comparator);function me(...t){let e=AA;for(const n of t)e=e.add(n);return e}const RA=new st(pe);function PA(){return RA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(e)?"-0":e}}function hw(t){return{integerValue:""+t}}function jA(t,e){return rA(e)?hw(e):Gp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this._=void 0}}function DA(t,e,n){return t instanceof Zc?function(s,i){const o={fields:{[K1]:{stringValue:G1},[Y1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bp(i)&&(i=Vu(i)),i&&(o.fields[Q1]=i),{mapValue:o}}(n,e):t instanceof Oa?pw(t,e):t instanceof La?mw(t,e):function(s,i){const o=fw(s,i),c=_0(o)+_0(s.Ae);return uf(o)&&uf(s.Ae)?hw(c):Gp(s.serializer,c)}(t,e)}function OA(t,e,n){return t instanceof Oa?pw(t,e):t instanceof La?mw(t,e):n}function fw(t,e){return t instanceof eu?function(r){return uf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zc extends Uu{}class Oa extends Uu{constructor(e){super(),this.elements=e}}function pw(t,e){const n=gw(e);for(const r of t.elements)n.some(s=>Un(s,r))||n.push(r);return{arrayValue:{values:n}}}class La extends Uu{constructor(e){super(),this.elements=e}}function mw(t,e){let n=gw(e);for(const r of t.elements)n=n.filter(s=>!Un(s,r));return{arrayValue:{values:n}}}class eu extends Uu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function _0(t){return He(t.integerValue||t.doubleValue)}function gw(t){return qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function LA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oa&&s instanceof Oa||r instanceof La&&s instanceof La?Wi(r.elements,s.elements,Un):r instanceof eu&&s instanceof eu?Un(r.Ae,s.Ae):r instanceof Zc&&s instanceof Zc}(t.transform,e.transform)}class VA{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $u{}function yw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kp(t.key,yn.none()):new Xa(t.key,t.data,yn.none());{const n=t.data,r=Mt.empty();let s=new st(mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gs(t.key,r,new Wt(s.toArray()),yn.none())}}function MA(t,e,n){t instanceof Xa?function(s,i,o){const c=s.value.clone(),u=b0(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof gs?function(s,i,o){if(!dc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=b0(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(vw(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function aa(t,e,n,r){return t instanceof Xa?function(i,o,c,u){if(!dc(i.precondition,o))return c;const d=i.value.clone(),f=E0(i.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof gs?function(i,o,c,u){if(!dc(i.precondition,o))return c;const d=E0(i.fieldTransforms,u,o),f=o.data;return f.setAll(vw(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,c){return dc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function FA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fw(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function w0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Wi(r,s,(i,o)=>LA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xa extends $u{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gs extends $u{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function b0(t,e,n){const r=new Map;we(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,OA(o,c,n[s]))}return r}function E0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DA(i,o,e))}return r}class Kp extends $u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zA extends $u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&MA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const u=yw(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(n,r)=>w0(n,r))&&Wi(this.baseMutations,e.baseMutations,(n,r)=>w0(n,r))}}class Qp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return NA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,ye;function qA(t){switch(t){case z.OK:return se(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function xw(t){if(t===void 0)return hr("GRPC error has no .code"),z.UNKNOWN;switch(t){case Je.OK:return z.OK;case Je.CANCELLED:return z.CANCELLED;case Je.UNKNOWN:return z.UNKNOWN;case Je.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Je.INTERNAL:return z.INTERNAL;case Je.UNAVAILABLE:return z.UNAVAILABLE;case Je.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Je.NOT_FOUND:return z.NOT_FOUND;case Je.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Je.ABORTED:return z.ABORTED;case Je.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Je.DATA_LOSS:return z.DATA_LOSS;default:return se(39323,{code:t})}}(ye=Je||(Je={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new Jr([4294967295,4294967295],0);function T0(t){const e=HA().encode(t),n=new D1;return n.update(e),new Uint8Array(n.digest())}function S0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class Yp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(r<0)throw new Ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Jr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(WA)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=T0(e),[r,s]=S0(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Yp(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=T0(e),[r,s]=S0(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bu(oe.min(),s,new ze(pe),fr(),me())}}class Za{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Za(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class _w{constructor(e,n){this.targetId=e,this.Ce=n}}class ww{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class I0{constructor(){this.ve=0,this.Fe=k0(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),r=me();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new Za(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=k0()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class GA{constructor(e){this.Ge=e,this.ze=new Map,this.je=fr(),this.He=Fl(),this.Je=Fl(),this.Ze=new ze(pe)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(hf(i))if(r===0){const o=new Z(i.path);this.et(n,o,Tt.newNoDocument(o,oe.min()))}else we(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=os(r).toUint8Array()}catch(u){if(u instanceof W1)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Yp(o,s,i)}catch(u){return Hi(u instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&hf(c.target)){const u=new Z(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Tt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=me();this.Je.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Bu(e,n,this.Ze,this.je,r);return this.je=fr(),this.He=Fl(),this.Je=Fl(),this.Ze=new ze(pe),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new I0,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new st(pe),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new st(pe),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new I0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fl(){return new ze(Z.comparator)}function k0(){return new ze(Z.comparator)}const KA={asc:"ASCENDING",desc:"DESCENDING"},QA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YA={and:"AND",or:"OR"};class JA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mf(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function tu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XA(t,e){return tu(t,e.toTimestamp())}function Fn(t){return we(!!t,49232),oe.fromTimestamp(function(n){const r=is(n);return new ve(r.seconds,r.nanos)}(t))}function Jp(t,e){return gf(t,e).canonicalString()}function gf(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ew(t){const e=Ce.fromString(t);return we(Cw(e),10190,{key:e.toString()}),e}function yf(t,e){return Jp(t.databaseId,e.path)}function Yd(t,e){const n=Ew(e);if(n.get(1)!==t.databaseId.projectId)throw new W(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(Sw(n))}function Tw(t,e){return Jp(t.databaseId,e)}function ZA(t){const e=Ew(t);return e.length===4?Ce.emptyPath():Sw(e)}function vf(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sw(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function C0(t,e,n){return{name:yf(t,e),fields:n.value.mapValue.fields}}function eR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:se(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(we(f===void 0||typeof f=="string",58123),vt.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),vt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const f=d.code===void 0?z.UNKNOWN:xw(d.code);return new W(f,d.message||"")}(o);n=new ww(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yd(t,r.document.name),i=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):oe.min(),c=new Mt({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(s,i,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];n=new hc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yd(t,r.document),i=r.readTime?Fn(r.readTime):oe.min(),o=Tt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new hc([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yd(t,r.document),i=r.removedTargetIds||[];n=new hc([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BA(s,i),c=r.targetId;n=new _w(c,o)}}return n}function tR(t,e){let n;if(e instanceof Xa)n={update:C0(t,e.key,e.value)};else if(e instanceof Kp)n={delete:yf(t,e.key)};else if(e instanceof gs)n={update:C0(t,e.key,e.data),updateMask:uR(e.fieldMask)};else{if(!(e instanceof zA))return se(16599,{dt:e.type});n={verify:yf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Zc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof La)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof eu)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:XA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function nR(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Fn(s.updateTime):Fn(i);return o.isEqual(oe.min())&&(o=Fn(i)),new VA(o,s.transformResults||[])}(n,e))):[]}function rR(t,e){return{documents:[Tw(t,e.path)]}}function sR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tw(t,s);const i=function(d){if(d.length!==0)return kw(En.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:ci(g.field),direction:aR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=mf(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function iR(t){let e=ZA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Iw(m);return g instanceof En&&nw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new Da(ui(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(m){let g;return g=typeof m=="object"?m.value:m,Lu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,I=m.values||[];return new Xc(I,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,I=m.values||[];return new Xc(I,g)}(n.endAt)),bA(e,s,o,i,c,"F",u,d)}function oR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Iw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ui(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ui(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ui(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ui(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(ui(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>Iw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function aR(t){return KA[t]}function lR(t){return QA[t]}function cR(t){return YA[t]}function ci(t){return{fieldPath:t.canonicalString()}}function ui(t){return mt.fromServerFormat(t.fieldPath)}function kw(t){return t instanceof Ze?function(n){if(n.op==="=="){if(m0(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(p0(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(m0(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(p0(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:lR(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(s=>kw(s));return r.length===1?r[0]:{compositeFilter:{op:cR(n.op),filters:r}}}(t):se(54877,{filter:t})}function uR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Nw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),c=vt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.yt=e}}function hR(t){const e=iR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.Sn=new pR}addToCollectionParentIndex(e,n){return this.Sn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ss.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class pR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Aw=41943040;class Lt{static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(Aw,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Qi(0)}static ar(){return new Qi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="LruGarbageCollector",mR=1048576;function R0([t,e],[n,r]){const s=pe(t,n);return s===0?pe(e,r):s}class gR{constructor(e){this.Pr=e,this.buffer=new st(R0),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();R0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(A0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ao(n)?K(A0,"Ignoring IndexedDB error during garbage collection: ",n):await oo(n)}await this.Ar(3e5)})}}class vR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Ou.ce);const r=new gR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(N0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),N0):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),ai()<=fe.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function xR(t,e){return new vR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&aa(r.mutation,s,Wt.empty(),ve.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=Cs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qo();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=fr();const o=oa(),c=function(){return oa()}();return n.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof gs)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),aa(f.mutation,d,f.mutation.getFieldMask(),ve.now())):o.set(d.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>c.set(d,new wR(f,o.get(d)??null))),c))}recalculateAndSaveOverlays(e,n){const r=oa();let s=new ze((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Wt.empty();f=c.applyToLocalView(d,f),r.set(u,f);const m=(s.get(c.batchId)||me()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,m=dw();f.forEach(g=>{if(!i.has(g)){const I=yw(n.get(g),r.get(g));I!==null&&m.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return EA(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ow(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Cs());let c=Aa,u=i;return o.next(d=>U.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,me())).next(f=>({batchId:c,changes:uw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=qo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qo();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,u=>{const d=function(m,g){return new lo(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let c=qo();return o.forEach((u,d)=>{const f=i.get(u);f!==void 0&&aa(f.mutation,d,Wt.empty(),ve.now()),zu(n,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Fn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:hR(s.bundledQuery),readTime:Fn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.overlays=new ze(Z.comparator),this.Lr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cs();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Cs(),i=n.length+1,o=new Z(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Cs(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=Cs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return U.resolve(c)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $A(n,r));let i=this.Lr.get(n);i===void 0&&(i=me(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.kr=new st(ct.Kr),this.qr=new st(ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ct(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Z(new Ce([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Z(new Ce([])),r=new ct(n,e),s=new ct(n,e+1);let i=me();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Z.comparator(e.key,n.key)||pe(e.Hr,n.Hr)}static Ur(e,n){return pe(e.Hr,n.Hr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new st(ct.Kr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UA(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new ct(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?$p:this.Yn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const c=this.Zr(o.Hr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(pe);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],c=>{r=r.add(c.Hr)})}),U.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new ct(new Z(i),0);let c=new st(pe);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)},o),U.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return U.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new ct(n,0),s=this.Jr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ti=e,this.docs=function(){return new ze(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=fr();const o=n.path,c=new Z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||ZN(XN(f),r)<=0||(s.has(f.key)||zu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ni(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CR(this)}getSize(e){return U.resolve(this.size)}}class CR extends _R{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.persistence=e,this.ri=new Js(n=>Hp(n),Wp),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.ii=0,this.si=new Xp,this.targetCount=0,this.oi=Qi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),U.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.lr(n),U.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this._i={},this.overlays={},this.ai=new Ou(0),this.ui=!1,this.ui=!0,this.ci=new SR,this.referenceDelegate=e(this),this.li=new NR(this),this.indexManager=new fR,this.remoteDocumentCache=function(s){return new kR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new dR(n),this.Pi=new ER(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new IR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new AR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return U.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class AR extends tA{constructor(e){super(),this.currentSequenceNumber=e}}class Zp{constructor(e){this.persistence=e,this.Ri=new Xp,this.Ai=null}static Vi(e){return new Zp(e)}get di(){if(this.Ai)return this.Ai;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,r=>{const s=Z.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class nu{constructor(e,n){this.persistence=e,this.fi=new Js(r=>sA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=xR(this,n)}static Vi(e,n){return new nu(e,n)}Ti(){}Ii(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return U.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cc(e.data.value)),n}wr(e,n,r){return U.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new em(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return oI()?8:nA(kt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new RR;return this.ys(e,n,o).next(c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ai()<=fe.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(ai()<=fe.DEBUG&&K("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ai()<=fe.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):U.resolve())}gs(e,n){if(x0(n))return U.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pf(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.bs(n,c);return this.Ss(n,d,o,u.readTime)?this.gs(e,pf(n,null,"F")):this.Ds(e,d,n,u)}))})))}ps(e,n,r,s){return x0(n)||s.isEqual(oe.min())?U.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?U.resolve(null):(ai()<=fe.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),li(n)),this.Ds(e,o,n,JN(s,Aa)).next(c=>c))})}bs(e,n){let r=new st(lw(e));return n.forEach((s,i)=>{zu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ai()<=fe.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",li(n)),this.fs.getDocumentsMatchingQuery(e,n,ss.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="LocalStore",jR=3e8;class DR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ze(pe),this.Fs=new Js(i=>Hp(i),Wp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function OR(t,e,n,r){return new DR(t,e,n,r)}async function Pw(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=me();for(const d of s){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:c}))})})}function LR(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const m=d.batch,g=m.keys();let I=U.resolve();return g.forEach(R=>{I=I.next(()=>f.getEntry(u,R)).next(N=>{const O=d.docVersions.get(R);we(O!==null,48541),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=me();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jw(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function VR(t,e){const n=le(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;c.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(vt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(m,I),function(N,O,w){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=jR?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,I,f)&&c.push(n.li.updateTargetData(i,I))});let u=fr(),d=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(MR(i,o,e.documentUpdates).next(f=>{u=f.Bs,d=f.Ls})),!r.isEqual(oe.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.vs=s,i))}function MR(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=fr();return n.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):K(tm,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function FR(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=$p),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zR(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function xf(t,e,n){const r=le(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ao(o))throw o;K(tm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function P0(t,e,n){const r=le(t);let s=oe.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=le(u),g=m.Fs.get(f);return g!==void 0?U.resolve(m.vs.get(g)):m.li.getTargetData(d,f)}(r,o,Mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:me())).next(c=>(UR(r,IA(e),c),{documents:c,ks:i})))}function UR(t,e,n){let r=t.Ms.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class j0{constructor(){this.activeTargetIds=PA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $R{constructor(){this.vo=new j0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new j0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="ConnectivityMonitor";class O0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(D0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(D0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl=null;function _f(){return zl===null?zl=function(){return 268435456+Math.round(2147483648*Math.random())}():zl++,"0x"+zl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="RestConnection",qR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class HR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Yc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=_f(),c=this.Qo(e,n.toUriEncodedString());K(Jd,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(c),f=Ks(d);return this.zo(e,c,u,r,f).then(m=>(K(Jd,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Hi(Jd,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=qR[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection",Lo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ji extends HR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ji.c_){const e=M1();Lo(e,V1.STAT_EVENT,n=>{n.stat===af.PROXY?K(wt,"STAT_EVENT: detected buffering proxy"):n.stat===af.NOPROXY&&K(wt,"STAT_EVENT: detected no buffering proxy")}),ji.c_=!0}}zo(e,n,r,s,i){const o=_f();return new Promise((c,u)=>{const d=new O1;d.setWithCredentials(!0),d.listenOnce(L1.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case lc.NO_ERROR:const m=d.getResponseJson();K(wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case lc.TIMEOUT:K(wt,`RPC '${e}' ${o} timed out`),u(new W(z.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const g=d.getStatus();if(K(wt,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let I=d.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const N=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(_)>=0?_:z.UNKNOWN}(R.status);u(new W(N,R.message))}else u(new W(z.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new W(z.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{K(wt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);K(wt,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",f,r,15)})}T_(e,n,r){const s=_f(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");K(wt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=o.createWebChannel(d,c);this.I_(f);let m=!1,g=!1;const I=new WR({Ho:R=>{g?K(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||(K(wt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),K(wt,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return Lo(f,Bo.EventType.OPEN,()=>{g||(K(wt,`RPC '${e}' stream ${s} transport opened.`),I.i_())}),Lo(f,Bo.EventType.CLOSE,()=>{g||(g=!0,K(wt,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(f))}),Lo(f,Bo.EventType.ERROR,R=>{g||(g=!0,Hi(wt,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),I.o_(new W(z.UNAVAILABLE,"The operation could not be completed")))}),Lo(f,Bo.EventType.MESSAGE,R=>{var N;if(!g){const O=R.data[0];we(!!O,16349);const w=O,_=(w==null?void 0:w.error)||((N=w[0])==null?void 0:N.error);if(_){K(wt,`RPC '${e}' stream ${s} received error:`,_);const T=_.status;let V=function(v){const y=Je[v];if(y!==void 0)return xw(y)}(T),F=_.message;V===void 0&&(V=z.INTERNAL,F="Unknown error status: "+T+" with message "+_.message),g=!0,I.o_(new W(V,F)),f.close()}else K(wt,`RPC '${e}' stream ${s} received:`,O),I.__(O)}}),ji.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return F1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){return new ji(t)}function Xd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){return new JA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ji.c_=!1;class Dw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="PersistentStream";class Ow{constructor(e,n,r,s,i,o,c,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Dw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(L0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(L0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KR extends Ow{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eR(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Fn(o.readTime):oe.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=vf(this.serializer),n.addTarget=function(i,o){let c;const u=o.target;if(c=hf(u)?{documents:rR(i,u)}:{query:sR(i,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=bw(i,o.resumeToken);const d=mf(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(oe.min())>0){c.readTime=tu(i,o.snapshotVersion.toTimestamp());const d=mf(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=oR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=vf(this.serializer),n.removeTarget=e,this.K_(n)}}class QR extends Ow{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nR(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=vf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{}class JR extends YR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,gf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(z.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,gf(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(z.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function XR(t,e,n,r){return new JR(t,e,n,r)}class ZR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hr(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="RemoteStore";class eP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Xs(this)&&(K($s,"Restarting streams for network reachability change."),await async function(u){const d=le(u);d.Ea.add(4),await el(d),d.Va.set("Unknown"),d.Ea.delete(4),await Hu(d)}(this))})}),this.Va=new ZR(r,s)}}async function Hu(t){if(Xs(t))for(const e of t.Ra)await e(!0)}async function el(t){for(const e of t.Ra)await e(!1)}function Lw(t,e){const n=le(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),im(n)?sm(n):co(n).O_()&&rm(n,e))}function nm(t,e){const n=le(t),r=co(n);n.Ia.delete(e),r.O_()&&Vw(n,e),n.Ia.size===0&&(r.O_()?r.L_():Xs(n)&&n.Va.set("Unknown"))}function rm(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}co(t).Z_(e)}function Vw(t,e){t.da.$e(e),co(t).X_(e)}function sm(t){t.da=new GA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),co(t).start(),t.Va.ua()}function im(t){return Xs(t)&&!co(t).x_()&&t.Ia.size>0}function Xs(t){return le(t).Ea.size===0}function Mw(t){t.da=void 0}async function tP(t){t.Va.set("Online")}async function nP(t){t.Ia.forEach((e,n)=>{rm(t,e)})}async function rP(t,e){Mw(t),im(t)?(t.Va.ha(e),sm(t)):t.Va.set("Unknown")}async function sP(t,e,n){if(t.Va.set("Online"),e instanceof ww&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))}(t,e)}catch(r){K($s,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof hc?t.da.Xe(e):e instanceof _w?t.da.st(e):t.da.tt(e),!n.isEqual(oe.min()))try{const r=await jw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(vt.EMPTY_BYTE_STRING,f.snapshotVersion)),Vw(i,u);const m=new Fr(f.target,u,d,f.sequenceNumber);rm(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){K($s,"Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!ao(e))throw e;t.Ea.add(1),await el(t),t.Va.set("Offline"),n||(n=()=>jw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K($s,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Hu(t)})}function Fw(t,e){return e().catch(n=>ru(t,n,e))}async function Wu(t){const e=le(t),n=ls(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$p;for(;iP(e);)try{const s=await FR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,oP(e,s)}catch(s){await ru(e,s)}zw(e)&&Uw(e)}function iP(t){return Xs(t)&&t.Ta.length<10}function oP(t,e){t.Ta.push(e);const n=ls(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function zw(t){return Xs(t)&&!ls(t).x_()&&t.Ta.length>0}function Uw(t){ls(t).start()}async function aP(t){ls(t).ra()}async function lP(t){const e=ls(t);for(const n of t.Ta)e.ea(n.mutations)}async function cP(t,e,n){const r=t.Ta.shift(),s=Qp.from(r,e,n);await Fw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wu(t)}async function uP(t,e){e&&ls(t).Y_&&await async function(r,s){if(function(o){return qA(o)&&o!==z.ABORTED}(s.code)){const i=r.Ta.shift();ls(r).B_(),await Fw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wu(r)}}(t,e),zw(t)&&Uw(t)}async function V0(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),K($s,"RemoteStore received new credentials");const r=Xs(n);n.Ea.add(3),await el(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Hu(n)}async function dP(t,e){const n=le(t);e?(n.Ea.delete(2),await Hu(n)):e||(n.Ea.add(2),await el(n),n.Va.set("Unknown"))}function co(t){return t.ma||(t.ma=function(n,r,s){const i=le(n);return i.sa(),new KR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:tP.bind(null,t),Yo:nP.bind(null,t),t_:rP.bind(null,t),J_:sP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),im(t)?sm(t):t.Va.set("Unknown")):(await t.ma.stop(),Mw(t))})),t.ma}function ls(t){return t.fa||(t.fa=function(n,r,s){const i=le(n);return i.sa(),new QR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:aP.bind(null,t),t_:uP.bind(null,t),ta:lP.bind(null,t),na:cP.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Wu(t)):(await t.fa.stop(),t.Ta.length>0&&(K($s,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new om(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(t,e){if(hr("AsyncQueue",`${e}: ${t}`),ao(t))return new W(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{static emptySet(e){return new Di(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=qo(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.ga=new ze(Z.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yi{constructor(e,n,r,s,i,o,c,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Yi(e,n,Di.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class fP{constructor(){this.queries=F0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=F0(),i.forEach((o,c)=>{for(const u of c.ba)u.onError(r)})})(this,new W(z.ABORTED,"Firestore shutting down"))}}function F0(){return new Js(t=>aw(t),Fu)}async function $w(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new hP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=am(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&lm(n)}async function Bw(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pP(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&lm(n)}function mP(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function lm(t){t.Ca.forEach(e=>{e.next()})}var wf,z0;(z0=wf||(wf={})).Ma="default",z0.Cache="cache";class qw{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.key=e}}class Ww{constructor(e){this.key=e}}class gP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=me(),this.mutatedKeys=me(),this.eu=lw(e),this.tu=new Di(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new M0,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),I=zu(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;g&&I?g.data.isEqual(I.data)?R!==N&&(r.track({type:3,doc:I}),O=!0):this.su(g,I)||(r.track({type:2,doc:I}),O=!0,(u&&this.eu(I,u)>0||d&&this.eu(I,d)<0)&&(c=!0)):!g&&I?(r.track({type:0,doc:I}),O=!0):g&&!I&&(r.track({type:1,doc:g}),O=!0,(u||d)&&(c=!0)),O&&(I?(o=o.add(I),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(I,R){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:O})}};return N(I)-N(R)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,o.length!==0||d?{snapshot:new Yi(this.query,e.tu,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new M0,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=me(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Ww(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Hw(r))}),n}cu(e){this.Za=e.ks,this.Ya=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Yi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const cm="SyncEngine";class yP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vP{constructor(e){this.key=e,this.hu=!1}}class xP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Js(c=>aw(c),Fu),this.Iu=new Map,this.Eu=new Set,this.Ru=new ze(Z.comparator),this.Au=new Map,this.Vu=new Xp,this.du={},this.mu=new Map,this.fu=Qi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _P(t,e,n=!0){const r=Xw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Gw(r,e,n,!0),s}async function wP(t,e){const n=Xw(t);await Gw(n,e,!0,!1)}async function Gw(t,e,n,r){const s=await zR(t.localStore,Mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await bP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Lw(t.remoteStore,s),c}async function bP(t,e,n,r,s){t.pu=(m,g,I)=>async function(N,O,w,_){let T=O.view.ru(w);T.Ss&&(T=await P0(N.localStore,O.query,!1).then(({documents:v})=>O.view.ru(v,T)));const V=_&&_.targetChanges.get(O.targetId),F=_&&_.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(T,N.isPrimaryClient,V,F);return $0(N,O.targetId,j.au),j.snapshot}(t,m,g,I);const i=await P0(t.localStore,e,!0),o=new gP(e,i.ks),c=o.ru(i.documents),u=Za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(c,t.isPrimaryClient,u);$0(t,n,d.au);const f=new yP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function EP(t,e,n){const r=le(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Fu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&nm(r.remoteStore,s.targetId),bf(r,s.targetId)}).catch(oo)):(bf(r,s.targetId),await xf(r.localStore,s.targetId,!0))}async function TP(t,e){const n=le(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nm(n.remoteStore,r.targetId))}async function SP(t,e,n){const r=PP(t);try{const s=await function(o,c){const u=le(o),d=ve.now(),f=c.reduce((I,R)=>I.add(R.key),me());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=fr(),N=me();return u.xs.getEntries(I,f).next(O=>{R=O,R.forEach((w,_)=>{_.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(O=>{m=O;const w=[];for(const _ of c){const T=FA(_,m.get(_.key).overlayedDocument);T!=null&&w.push(new gs(_.key,T,Z1(T.value.mapValue),yn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,d,w,c)}).next(O=>{g=O;const w=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(I,O.batchId,w)})}).then(()=>({batchId:g.batchId,changes:uw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let d=o.du[o.currentUser.toKey()];d||(d=new ze(pe)),d=d.insert(c,u),o.du[o.currentUser.toKey()]=d}(r,s.batchId,n),await tl(r,s.changes),await Wu(r.remoteStore)}catch(s){const i=am(s,"Failed to persist write");n.reject(i)}}async function Kw(t,e){const n=le(t);try{const r=await VR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?we(o.hu,14607):s.removedDocuments.size>0&&(we(o.hu,42227),o.hu=!1))}),await tl(n,r,e)}catch(r){await oo(r)}}function U0(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=le(o);u.onlineState=c;let d=!1;u.queries.forEach((f,m)=>{for(const g of m.ba)g.va(c)&&(d=!0)}),d&&lm(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IP(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ze(Z.comparator);o=o.insert(i,Tt.newNoDocument(i,oe.min()));const c=me().add(i),u=new Bu(oe.min(),new Map,new ze(pe),o,c);await Kw(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),um(r)}else await xf(r.localStore,e,!1).then(()=>bf(r,e,n)).catch(oo)}async function kP(t,e){const n=le(t),r=e.batch.batchId;try{const s=await LR(n.localStore,e);Yw(n,r,null),Qw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tl(n,s)}catch(s){await oo(s)}}async function CP(t,e,n){const r=le(t);try{const s=await function(o,c){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(m=>(we(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);Yw(r,e,n),Qw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tl(r,s)}catch(s){await oo(s)}}function Qw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Yw(t,e,n){const r=le(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Jw(t,r)})}function Jw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(nm(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),um(t))}function $0(t,e,n){for(const r of n)r instanceof Hw?(t.Vu.addReference(r.key,e),NP(t,r)):r instanceof Ww?(K(cm,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Jw(t,r.key)):se(19791,{wu:r})}function NP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(K(cm,"New document in limbo: "+n),t.Eu.add(r),um(t))}function um(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Z(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new vP(n)),t.Ru=t.Ru.insert(n,r),Lw(t.remoteStore,new Fr(Mn(Mu(n.path)),r,"TargetPurposeLimboResolution",Ou.ce))}}async function tl(t,e,n){const r=le(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{o.push(r.pu(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=em.Es(u.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,d){const f=le(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>U.forEach(d,g=>U.forEach(g.Ts,I=>f.persistence.referenceDelegate.addReference(m,g.targetId,I)).next(()=>U.forEach(g.Is,I=>f.persistence.referenceDelegate.removeReference(m,g.targetId,I)))))}catch(m){if(!ao(m))throw m;K(tm,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const I=f.vs.get(g),R=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(g,N)}}}(r.localStore,i))}async function AP(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){K(cm,"User change. New user:",e.toKey());const r=await Pw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new W(z.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tl(n,r.Ns)}}function RP(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return me().add(r.key);{let s=me();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Xw(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IP.bind(null,e),e.Pu.J_=pP.bind(null,e.eventManager),e.Pu.yu=mP.bind(null,e.eventManager),e}function PP(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CP.bind(null,e),e}class su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return OR(this.persistence,new PR,e.initialUser,this.serializer)}Cu(e){return new Rw(Zp.Vi,this.serializer)}Du(e){return new $R}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}su.provider={build:()=>new su};class jP extends su{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){we(this.persistence.referenceDelegate instanceof nu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new Rw(r=>nu.Vi(r,n),this.serializer)}}class Ef{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>U0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AP.bind(null,this.syncEngine),await dP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fP}()}createDatastore(e){const n=qu(e.databaseInfo.databaseId),r=GR(e.databaseInfo);return XR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new eP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>U0(this.syncEngine,n,0),function(){return O0.v()?new O0:new BR}())}createSyncEngine(e,n){return function(s,i,o,c,u,d,f){const m=new xP(s,i,o,c,u,d);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);K($s,"RemoteStore shutting down."),i.Ea.add(5),await el(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ef.provider={build:()=>new Ef};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="FirestoreClient";class DP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=Up.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(cs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(cs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zd(t,e){t.asyncQueue.verifyOperationInProgress(),K(cs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Pw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OP(t);K(cs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>V0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>V0(e.remoteStore,s)),t._onlineComponents=e}async function OP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(cs,"Using user provided OfflineComponentProvider");try{await Zd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await Zd(t,new su)}}else K(cs,"Using default OfflineComponentProvider"),await Zd(t,new jP(void 0));return t._offlineComponents}async function eb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(cs,"Using user provided OnlineComponentProvider"),await B0(t,t._uninitializedComponentsProvider._online)):(K(cs,"Using default OnlineComponentProvider"),await B0(t,new Ef))),t._onlineComponents}function LP(t){return eb(t).then(e=>e.syncEngine)}async function Tf(t){const e=await eb(t),n=e.eventManager;return n.onListen=_P.bind(null,e.syncEngine),n.onUnlisten=EP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TP.bind(null,e.syncEngine),n}function VP(t,e,n,r){const s=new Zw(r),i=new qw(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>$w(await Tf(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Bw(await Tf(t),i))}}function MP(t,e,n={}){const r=new Xr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,d){const f=new Zw({next:g=>{f.Nu(),o.enqueueAndForget(()=>Bw(i,m));const I=g.docs.has(c);!I&&g.fromCache?d.reject(new W(z.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&u&&u.source==="server"?d.reject(new W(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new qw(Mu(c.path),f,{includeMetadataChanges:!0,Ka:!0});return $w(i,m)}(await Tf(t),t.asyncQueue,e,n,r)),r.promise}function FP(t,e){const n=new Xr;return t.asyncQueue.enqueueAndForget(async()=>SP(await LP(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="ComponentProvider",q0=new Map;function UP(t,e,n,r,s){return new aA(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,tb(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="firestore.googleapis.com",H0=!0;class W0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nb,this.ssl=H0}else this.host=e.host,this.ssl=e.ssl??H0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mR)throw new W(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tb(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zN;switch(r.type){case"firstParty":return new qN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=q0.get(n);r&&(K(zP,"Removing Datastore"),q0.delete(n),r.terminate())}(this),Promise.resolve()}}function $P(t,e,n,r={}){var d;t=Vn(t,Gu);const s=Ks(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(kp(`https://${c}`),Cp("Firestore",!0)),i.host!==nb&&i.host!==c&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Ms(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=bt.MOCK_USER;else{f=Q_(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new bt(g)}t._authCredentials=new UN(new U1(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zs(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ja(n,Ge._jsonSchema))return new Ge(e,r||null,new Z(Ce.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:et("string",Ge._jsonSchemaVersion),referencePath:et("string")};class Zr extends Zs{constructor(e,n,r){super(e,n,Mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new Z(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function St(t,e,...n){if(t=it(t),$1("collection","path",e),t instanceof Gu){const r=Ce.fromString(e,...n);return i0(r),new Zr(t,null,r)}{if(!(t instanceof Ge||t instanceof Zr))throw new W(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return i0(r),new Zr(t.firestore,null,r)}}function Pt(t,e,...n){if(t=it(t),arguments.length===1&&(e=Up.newId()),$1("doc","path",e),t instanceof Gu){const r=Ce.fromString(e,...n);return s0(r),new Ge(t,null,new Z(r))}{if(!(t instanceof Ge||t instanceof Zr))throw new W(z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return s0(r),new Ge(t.firestore,t instanceof Zr?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="AsyncQueue";class K0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Dw(this,"async_queue_retry"),this._c=()=>{const r=Xd();r&&K(G0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Xd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Xr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ao(e))throw e;K(G0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,hr("INTERNAL UNHANDLED ERROR: ",Q0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=om.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&se(47125,{Pc:Q0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Q0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Bs extends Gu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new K0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K0(e),this._firestoreClient=void 0,await e}}}function BP(t,e){const n=typeof t=="object"?t:Rp(),r=typeof t=="string"?t:Yc,s=Nu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=W_("firestore");i&&$P(s,...i)}return s}function dm(t){if(t._terminated)throw new W(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qP(t),t._firestoreClient}function qP(t){var r,s,i,o;const e=t._freezeSettings(),n=UP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new DP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(vt.fromBase64String(e))}catch(n){throw new W(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ja(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:et("string",tn._jsonSchemaVersion),bytes:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(Ja(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:et("string",zn._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ja(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new vn(e.vectorValues);throw new W(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:et("string",vn._jsonSchemaVersion),vectorValues:et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=/^__.*__$/;class WP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xa(e,this.data,n,this.fieldTransforms)}}class rb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:t})}}class pm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new pm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return iu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(sb(this.dataSource)&&HP.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class GP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qu(e)}createContext(e,n,r,s=!1){return new pm({dataSource:e,methodName:n,targetDoc:r,path:mt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mm(t){const e=t._freezeSettings(),n=qu(t._databaseId);return new GP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KP(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);gm("Data must be an object, but it was:",o,r);const c=ib(r,o);let u,d;if(i.merge)u=new Wt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Ji(e,m,n);if(!o.contains(g))throw new W(z.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);lb(f,g)||f.push(g)}u=new Wt(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new WP(new Mt(c),u,d)}class Ku extends fm{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ku}}function QP(t,e,n,r){const s=t.createContext(1,e,n);gm("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();ms(r,(u,d)=>{const f=ab(e,u,n);d=it(d);const m=s.childContextForFieldPath(f);if(d instanceof Ku)i.push(f);else{const g=nl(d,m);g!=null&&(i.push(f),o.set(f,g))}});const c=new Wt(i);return new rb(o,c,s.fieldTransforms)}function YP(t,e,n,r,s,i){const o=t.createContext(1,e,n),c=[Ji(e,r,n)],u=[s];if(i.length%2!=0)throw new W(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Ji(e,i[g])),u.push(i[g+1]);const d=[],f=Mt.empty();for(let g=c.length-1;g>=0;--g)if(!lb(d,c[g])){const I=c[g];let R=u[g];R=it(R);const N=o.childContextForFieldPath(I);if(R instanceof Ku)d.push(I);else{const O=nl(R,N);O!=null&&(d.push(I),f.set(I,O))}}const m=new Wt(d);return new rb(f,m,o.fieldTransforms)}function JP(t,e,n,r=!1){return nl(n,t.createContext(r?4:3,e))}function nl(t,e){if(ob(t=it(t)))return gm("Unsupported field value:",e,t),ib(t,e);if(t instanceof fm)return function(r,s){if(!sb(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=nl(c,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:tu(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tu(s.serializer,i)}}if(r instanceof zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:bw(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vn)return function(o,c){const u=o instanceof vn?o.toArray():o;return{mapValue:{fields:{[J1]:{stringValue:X1},[Jc]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Gp(c.serializer,f)})}}}}}}(r,s);if(Nw(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Du(r)}`)}(t,e)}function ib(t,e){const n={};return H1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,s)=>{const i=nl(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ob(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof zn||t instanceof tn||t instanceof Ge||t instanceof fm||t instanceof vn||Nw(t))}function gm(t,e,n){if(!ob(n)||!B1(n)){const r=Du(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ji(t,e,n){if((e=it(e))instanceof hm)return e._internalPath;if(typeof e=="string")return ab(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const XP=new RegExp("[~\\*/\\[\\]]");function ab(t,e,n){if(e.search(XP)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hm(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(z.INVALID_ARGUMENT,c+t+u)}function lb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Jc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>He(o.doubleValue));return new vn(n)}convertGeoPoint(e){return new zn(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=is(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);we(Cw(r),9688,{name:e});const s=new Pa(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||hr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb extends ZP{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}const Y0="@firebase/firestore",J0="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ji("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e4 extends ub{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ym{}class db extends ym{}function sr(t,e,...n){let r=[];e instanceof ym&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof xm).length,c=i.filter(u=>u instanceof vm).length;if(o>1||o>0&&c>0)throw new W(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class vm extends db{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vm(e,n,r)}_apply(e){const n=this._parse(e);return hb(e._query,n),new Zs(e.firestore,e.converter,ff(e._query,n))}_parse(e){const n=mm(e.firestore);return function(i,o,c,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ev(m,f);const R=[];for(const N of m)R.push(Z0(u,i,N));g={arrayValue:{values:R}}}else g=Z0(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ev(m,f),g=JP(c,o,m,f==="in"||f==="not-in");return Ze.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class xm extends ym{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:En.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)hb(o,u),o=ff(o,u)}(e._query,n),new Zs(e.firestore,e.converter,ff(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _m extends db{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _m(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Da(i,o)}(e._query,this._field,this._direction);return new Zs(e.firestore,e.converter,SA(e._query,n))}}function qs(t,e="asc"){const n=e,r=Ji("orderBy",t);return _m._create(r,n)}function Z0(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new W(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ow(e)&&n.indexOf("/")!==-1)throw new W(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!Z.isDocumentKey(r))throw new W(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return f0(t,new Z(r))}if(n instanceof Ge)return f0(t,n._key);throw new W(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function ev(t,e){if(!Array.isArray(t)||t.length===0)throw new W(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hb(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function n4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Wo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends ub{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ji("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:et("string",Ps._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class fc extends Ps{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fc(this._firestore,this._userDataWriter,r.key,r,new Wo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new fc(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new fc(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:r4(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Up.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function r4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:et("string",Oi._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(t){t=Vn(t,Ge);const e=Vn(t.firestore,Bs),n=dm(e);return MP(n,t._key).then(r=>fb(e,t,r))}function Or(t,e,n,...r){t=Vn(t,Ge);const s=Vn(t.firestore,Bs),i=mm(s);let o;return o=typeof(e=it(e))=="string"||e instanceof hm?YP(i,"updateDoc",t._key,e,n,r):QP(i,"updateDoc",t._key,e),wm(s,[o.toMutation(t._key,yn.exists(!0))])}function Va(t){return wm(Vn(t.firestore,Bs),[new Kp(t._key,yn.none())])}function Ma(t,e){const n=Vn(t.firestore,Bs),r=Pt(t),s=n4(t.converter,e),i=mm(t.firestore);return wm(n,[KP(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function xn(t,...e){var d,f,m;t=it(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||X0(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(X0(e[r])){const g=e[r];e[r]=(d=g.next)==null?void 0:d.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(m=g.complete)==null?void 0:m.bind(g)}let i,o,c;if(t instanceof Ge)o=Vn(t.firestore,Bs),c=Mu(t._key.path),i={next:g=>{e[r]&&e[r](fb(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=Vn(t,Zs);o=Vn(g.firestore,Bs),c=g._query;const I=new cb(o);i={next:R=>{e[r]&&e[r](new Oi(o,I,g,R))},error:e[r+1],complete:e[r+2]},t4(t._query)}const u=dm(o);return VP(u,c,s,i)}function wm(t,e){const n=dm(t);return FP(n,e)}function fb(t,e,n){const r=n.docs.get(e._key),s=new cb(t);return new Ps(t,s,e._key,r,new Wo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){FN(Qs),Fs(new rs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Bs(new $N(r.getProvider("auth-internal")),new HN(o,r.getProvider("app-check-internal")),lA(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Dn(Y0,J0,e),Dn(Y0,J0,"esm2020")})();var i4="firebase",o4="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(i4,o4,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="firebasestorage.googleapis.com",a4="storageBucket",l4=2*60*1e3,c4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends qn{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Hn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $n;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($n||($n={}));function eh(t){return"storage/"+t}function u4(){const t="An unknown error occurred, please check the error payload for server response.";return new Hn($n.UNKNOWN,t)}function d4(){return new Hn($n.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function h4(){return new Hn($n.CANCELED,"User canceled the upload/download.")}function f4(t){return new Hn($n.INVALID_URL,"Invalid URL '"+t+"'.")}function p4(t){return new Hn($n.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tv(t){return new Hn($n.INVALID_ARGUMENT,t)}function mb(){return new Hn($n.APP_DELETED,"The Firebase app was deleted.")}function m4(t){return new Hn($n.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw p4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(V){V.path_=decodeURIComponent(V.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},N=n===pb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",w=new RegExp(`^https?://${N}/${s}/${O}`,"i"),T=[{regex:c,indices:u,postModify:i},{regex:I,indices:R,postModify:d},{regex:w,indices:{bucket:1,path:2},postModify:d}];for(let V=0;V<T.length;V++){const F=T[V],j=F.regex.exec(e);if(j){const v=j[F.indices.bucket];let y=j[F.indices.path];y||(y=""),r=new pn(v,y),F.postModify(r);break}}if(r==null)throw f4(e);return r}}class g4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y4(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let d=!1;function f(...O){d||(d=!0,e.apply(null,O))}function m(O){s=setTimeout(()=>{s=null,t(I,u())},O)}function g(){i&&clearTimeout(i)}function I(O,...w){if(d){g();return}if(O){g(),f.call(null,O,...w);return}if(u()||o){g(),f.call(null,O,...w);return}r<64&&(r*=2);let T;c===1?(c=2,T=0):T=(r+Math.random())*1e3,m(T)}let R=!1;function N(O){R||(R=!0,g(),!d&&(s!==null?(O||(c=2),clearTimeout(s),m(0)):O||(c=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function v4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(t){return t!==void 0}function nv(t,e,n,r){if(r<e)throw tv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tv(`Invalid value for '${t}'. Expected ${n} or less.`)}function _4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ou;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ou||(ou={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e,n,r,s,i,o,c,u,d,f,m,g=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ul(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===ou.NO_ERROR,u=i.getStatus();if(!c||w4(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ou.ABORT;r(!1,new Ul(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Ul(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());x4(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=u4();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?mb():h4();o(u)}else{const u=d4();o(u)}};this.canceled_?n(!1,new Ul(!1,null,!0)):this.backoffId_=y4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&v4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function E4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function T4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function S4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function I4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function k4(t,e,n,r,s,i,o=!0,c=!1){const u=_4(t.urlParams),d=t.url+u,f=Object.assign({},t.headers);return S4(f,e),E4(f,n),T4(f,i),I4(f,r),new b4(d,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function N4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new au(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return N4(this._location.path)}get storage(){return this._service}get parent(){const e=C4(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new au(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw m4(e)}}function rv(t,e){const n=e==null?void 0:e[a4];return n==null?null:pn.makeFromBucketSpec(n,t)}function A4(t,e,n,r={}){t.host=`${e}:${n}`;const s=Ks(e);s&&(kp(`https://${t.host}/b`),Cp("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Q_(i,t.app.options.projectId))}class R4{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=pb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l4,this._maxUploadRetryTime=c4,this._requests=new Set,s!=null?this._bucket=pn.makeFromBucketSpec(s,this._host):this._bucket=rv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=rv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new au(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new g4(mb());{const o=k4(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const sv="@firebase/storage",iv="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="storage";function P4(t=Rp(),e){t=it(t);const r=Nu(t,gb).getImmediate({identifier:e}),s=W_("storage");return s&&j4(r,...s),r}function j4(t,e,n,r={}){A4(t,e,n,r)}function D4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new R4(n,r,s,e,Qs)}function O4(){Fs(new rs(gb,D4,"PUBLIC").setMultipleInstances(!0)),Dn(sv,iv,""),Dn(sv,iv,"esm2020")}O4();const L4={apiKey:"AIzaSyDXoy2hEb_maSSdFZfzBsu-HxwMecf9vbw",authDomain:"workflow-apk.firebaseapp.com",projectId:"workflow-apk",storageBucket:"workflow-apk.firebasestorage.app",messagingSenderId:"637175775346",appId:"1:637175775346:web:3852adcb6be6c6d1d002eb"},bm=X_(L4),Ie=VN(bm),_e=BP(bm);P4(bm);const V4=()=>{const t=Gs(),[e,n]=P.useState(""),[r,s]=P.useState(""),[i,o]=P.useState(""),[c,u]=P.useState(!1);P.useEffect(()=>{u(!0)},[]);const d=async m=>{var g;m.preventDefault(),o("");try{const R=(await TC(Ie,e,r)).user,N=Pt(_e,"users",R.uid),O=await s4(N);if(!O.exists())throw await Wc(Ie),new Error("Access denied. User record not found.");if(((g=O.data().role)==null?void 0:g.toLowerCase())!=="admin")throw await Wc(Ie),new Error("Access denied. Admins only.");localStorage.setItem("adminToken",R.uid),localStorage.setItem("adminRole","admin"),t("/dashboard")}catch(I){o(I.message||"Login failed")}},f=async()=>{if(!e){o("Enter your email first");return}try{await EC(Ie,e),o("Password reset email sent")}catch(m){o(m.message||"Failed to send reset email")}};return a.jsxs("div",{className:"login-root",children:[a.jsx("style",{children:`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .login-root {
          position: relative;
          width: 100vw;
          height: 100vh;
          font-family: 'Segoe UI', system-ui, sans-serif;
          color: #fff;
        }

        .bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -3;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom right,
            rgba(2,6,23,0.65),
            rgba(2,6,23,0.9)
          );
          z-index: -2;
        }

        .login-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .login-form {
          width: 380px;
          padding: 50px 44px;
          border-radius: 24px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(26px);
          box-shadow: 0 40px 90px rgba(0,0,0,0.65);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.9s ease;
        }

        .login-form.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-bottom: 22px;
        }

        .logo img {
          height: 70px;
          padding: 12px;
          border-radius: 16px;
          background: rgba(255,255,255,0.18);
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
        }

        h2 {
          text-align: center;
          font-size: 30px;
          margin-bottom: 32px;
        }

        input {
          width: 100%;
          padding: 14px;
          margin-bottom: 18px;
          border-radius: 14px;
          border: none;
          outline: none;
          background: rgba(255,255,255,0.22);
          color: #fff;
          font-size: 15px;
        }

        input::placeholder {
          color: rgba(255,255,255,0.75);
        }

        .login-btn {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          margin-bottom: 14px;
        }

        .forgot-btn {
          background: none;
          border: none;
          width: 100%;
          color: #e5e7eb;
          font-size: 14px;
          text-decoration: underline;
          cursor: pointer;
        }

        .error-message {
          text-align: center;
          margin-bottom: 16px;
          font-size: 14px;
          color: #fca5a5;
        }

        .footer {
          position: absolute;
          bottom: 20px;
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: rgba(255,255,255,0.65);
        }
      `}),a.jsx("video",{className:"bg-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:a.jsx("source",{src:"/assets/videos/video-1.mp4",type:"video/mp4"})}),a.jsx("div",{className:"overlay"}),a.jsx("div",{className:"login-wrapper",children:a.jsxs("form",{className:`login-form ${c?"fade-in":""}`,onSubmit:d,children:[a.jsx("div",{className:"logo",children:a.jsx("img",{src:"/assets/images/logo-1.png",alt:"Duan Labels Logo"})}),a.jsx("h2",{children:"Admin Login"}),i&&a.jsx("div",{className:"error-message",children:i}),a.jsx("input",{type:"email",placeholder:"Email address",value:e,onChange:m=>n(m.target.value),required:!0}),a.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:m=>s(m.target.value),required:!0}),a.jsx("button",{type:"submit",className:"login-btn",children:"Secure Login"}),a.jsx("button",{type:"button",className:"forgot-btn",onClick:f,children:"Forgot password?"})]})}),a.jsxs("div",{className:"footer",children:["© ",new Date().getFullYear()," Duan Labels Ltd · Built by"," ",a.jsx("strong",{children:"NexxaCraft"})]})]})},M4="/assets/logo-1-BBgKUNcM.png",Sf=t=>{const e={};for(const n of Object.keys(t)){const r=t[n];r&&typeof r=="object"&&typeof r.toDate=="function"?e[n]=r.toDate().toLocaleDateString():r&&typeof r=="object"&&!Array.isArray(r)?e[n]=Sf(r):e[n]=r}return e},F4=(t,e,n)=>!e||!n?!1:e<n?t>=e&&t<n:t>=e||t<n,$l=t=>{if(!t)return"—";const[e,n]=t.split(":").map(Number),r=e>=12?"PM":"AM";return`${e%12||12}:${String(n).padStart(2,"0")} ${r}`},z4={low:"#38bdf8",medium:"#22c55e",high:"#f97316",urgent:"#ef4444"},U4={pending:"#f59e0b","in-progress":"#3b82f6","qc-review":"#8b5cf6",completed:"#10b981"},$4={pending:"Pending","in-progress":"In Progress","qc-review":"QC Review",completed:"Completed"},B4=()=>{var V,F;const t=Gs(),[e,n]=P.useState(null),[r,s]=P.useState([]),[i,o]=P.useState([]),[c,u]=P.useState([]),d=c.length,[f,m]=P.useState(!0),[g,I]=P.useState("dashboard"),R=r.filter(j=>j.isActive).length,N=(()=>{const j=new Date;return j.setDate(j.getDate()-j.getDay()),j.setHours(0,0,0,0),j})(),O=i.filter(j=>j.assignedStaff),w=O.filter(j=>{const v=j.timestamp||j.dueDate||"",y=new Date(v);return!isNaN(y.getTime())&&y>=N}).length,_=new Set([...O.map(j=>j.department),...r.map(j=>j.department||"")].filter(Boolean)).size,T={total:i.length,pending:i.filter(j=>j.status==="pending").length,inProgress:i.filter(j=>j.status==="in-progress").length,completed:i.filter(j=>j.status==="completed").length};return P.useEffect(()=>{const j=[];try{j.push(xn(St(_e,"staff"),y=>{const S=y.docs.map(C=>{const b=C.data();return{id:C.id,staffId:String(b.staffId??""),name:String(b.name??""),department:String(b.department??""),role:String(b.role??""),status:b.status??"inactive"}});u(S)}))}catch(y){console.error("staff listener:",y)}try{j.push(xn(sr(St(_e,"shifts"),qs("createdAt","desc")),y=>{const S=y.docs.map(C=>{const b=Sf(C.data());return{id:C.id,name:String(b.name??""),startTime:String(b.startTime??""),endTime:String(b.endTime??""),color:String(b.color??"#667eea"),isActive:!!b.isActive,assignedStaff:Number(b.assignedStaff??0),maxStaff:Number(b.maxStaff??0),department:String(b.department??"")}});s(S),m(!1)}))}catch(y){console.error("shifts listener:",y),m(!1)}try{j.push(xn(sr(St(_e,"jobs"),qs("createdAt","desc")),y=>{const S=y.docs.map(C=>{const b=Sf(C.data());return{id:C.id,title:String(b.title??""),customer:String(b.customer??""),status:b.status??"pending",priority:b.priority??"medium",department:String(b.department??""),dueDate:String(b.dueDate??""),assignedStaff:b.assignedStaff?String(b.assignedStaff):void 0,timestamp:b.timestamp?String(b.timestamp):b.createdAt?new Date(b.createdAt).toLocaleDateString():void 0}});o(S)}))}catch(y){console.error("jobs listener:",y)}const v=Ie.onAuthStateChanged(y=>n(y));return()=>{j.forEach(y=>y()),v()}},[]),f?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[a.jsx("div",{className:"loader"}),a.jsx("p",{style:{color:"#fff",fontSize:"18px",fontWeight:500},children:"Loading Dashboard…"})]})}):a.jsxs("div",{children:[a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { margin:0;padding:0;box-sizing:border-box;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif; }
        body { background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#1a202c;overflow-x:hidden; }

        .loader { width:50px;height:50px;border:4px solid rgba(255,255,255,.3);border-top:4px solid #fff;border-radius:50%;animation:spin 1s linear infinite; }
        @keyframes spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes slideIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.95)} to{opacity:1;transform:scale(1)} }

        /* Sidebar */
        .sidebar{width:280px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);height:100vh;position:fixed;padding:30px 20px;box-shadow:4px 0 30px rgba(0,0,0,.1);z-index:1000;animation:slideIn .5s ease-out;}
        .sidebar .logo{font-size:24px;font-weight:800;margin-bottom:50px;display:flex;align-items:center;gap:12px;padding:0 10px;color:#1a202c;}
        .sidebar .logo img{height:45px;filter:drop-shadow(0 2px 8px rgba(102,126,234,.3));}
        .sidebar nav{display:flex;flex-direction:column;gap:6px;}
        .sidebar nav a{display:flex;align-items:center;gap:12px;padding:14px 16px;color:#64748b;text-decoration:none;border-radius:12px;transition:all .3s cubic-bezier(.4,0,.2,1);font-weight:500;font-size:15px;position:relative;overflow:hidden;}
        .sidebar nav a:hover{background:linear-gradient(135deg,rgba(102,126,234,.1) 0%,rgba(118,75,162,.1) 100%);color:#667eea;transform:translateX(4px);}
        .sidebar nav a.active{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;box-shadow:0 8px 20px rgba(102,126,234,.3);}
        .nav-icon{font-size:20px;min-width:20px;}

        /* Main */
        .main{margin-left:280px;padding:30px 40px;min-height:100vh;animation:fadeIn .6s ease-out;}

        /* Topbar */
        .topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:35px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);padding:20px 30px;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.08);animation:slideIn .5s ease-out .1s both;}
        .topbar-left h1{font-size:32px;font-weight:800;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:4px;}
        .topbar-left p{color:#64748b;font-size:14px;font-weight:500;}
        .top-actions{display:flex;gap:12px;align-items:center;}
        .user-profile{display:flex;align-items:center;gap:12px;padding:8px 16px 8px 8px;background:rgba(102,126,234,.1);border-radius:50px;margin-right:12px;}
        .user-avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px;box-shadow:0 4px 12px rgba(102,126,234,.3);}
        .user-name{font-weight:600;font-size:14px;color:#1a202c;}
        .user-role{font-size:12px;color:#64748b;}
        .top-actions button{padding:12px 24px;border-radius:12px;cursor:pointer;border:none;font-weight:600;font-size:14px;transition:all .3s ease;display:flex;align-items:center;gap:8px;}
        .btn.primary{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;box-shadow:0 8px 20px rgba(102,126,234,.3);}
        .btn.primary:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(102,126,234,.4);}
        .btn.ghost{background:rgba(100,116,139,.1);color:#475569;}
        .btn.ghost:hover{background:rgba(100,116,139,.15);transform:translateY(-2px);}

        /* Stats */
        .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;margin-bottom:35px;}
        .stats .card{padding:28px;border-radius:20px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);box-shadow:0 10px 40px rgba(0,0,0,.08);position:relative;overflow:hidden;transition:all .3s ease;animation:scaleIn .5s ease-out backwards;}
        .stats .card:nth-child(1){animation-delay:.1s}.stats .card:nth-child(2){animation-delay:.2s}.stats .card:nth-child(3){animation-delay:.3s}.stats .card:nth-child(4){animation-delay:.4s}
        .stats .card::before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(90deg,var(--gradient-start),var(--gradient-end));}
        .stats .card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(0,0,0,.12);}
        .stat-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;}
        .stat-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;background:linear-gradient(135deg,var(--gradient-start),var(--gradient-end));color:#fff;box-shadow:0 8px 20px rgba(0,0,0,.15);}
        .stats .card h3{font-size:14px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;}
        .stats .card p{font-size:36px;font-weight:800;margin-bottom:8px;background:linear-gradient(135deg,var(--gradient-start),var(--gradient-end));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .stats .card span{font-size:13px;color:#64748b;font-weight:500;display:flex;align-items:center;gap:6px;}
        .trend-up{color:#10b981;font-weight:600;}
        .stat.blue{--gradient-start:#3b82f6;--gradient-end:#2563eb;}
        .stat.green{--gradient-start:#10b981;--gradient-end:#059669;}
        .stat.purple{--gradient-start:#8b5cf6;--gradient-end:#7c3aed;}
        .stat.orange{--gradient-start:#f59e0b;--gradient-end:#d97706;}

        /* Grid */
        .grid{display:grid;grid-template-columns:2fr 1fr;gap:24px;animation:fadeIn .6s ease-out .3s both;}
        .card.table-card,.card.shifts-card{background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-radius:20px;padding:28px;box-shadow:0 10px 40px rgba(0,0,0,.08);transition:all .3s ease;}
        .card.table-card:hover,.card.shifts-card:hover{box-shadow:0 20px 50px rgba(0,0,0,.12);}
        .card h2{font-size:20px;font-weight:700;margin-bottom:24px;color:#1a202c;display:flex;align-items:center;gap:10px;}
        .card h2::before{content:'';width:4px;height:24px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:2px;}

        /* Table */
        table{width:100%;border-collapse:separate;border-spacing:0 8px;}
        table th{text-align:left;padding:12px 16px;background:transparent;color:#64748b;font-weight:600;font-size:13px;text-transform:uppercase;letter-spacing:.5px;border:none;}
        table td{text-align:left;padding:16px;border:none;background:rgba(248,250,252,.8);font-weight:500;color:#334155;}
        table tbody tr:hover td{background:rgba(102,126,234,.08);}
        table tbody tr td:first-child{border-radius:12px 0 0 12px;}
        table tbody tr td:last-child{border-radius:0 12px 12px 0;}

        /* Badge */
        .badge{padding:6px 14px;border-radius:20px;color:#fff;font-size:12px;font-weight:600;display:inline-block;box-shadow:0 4px 12px rgba(0,0,0,.15);}
        .badge.blue{background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%);}
        .badge.purple{background:linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%);}
        .badge.amber{background:linear-gradient(135deg,#f59e0b 0%,#d97706 100%);}
        .badge.green{background:linear-gradient(135deg,#10b981 0%,#059669 100%);}
        .badge.red{background:linear-gradient(135deg,#ef4444 0%,#dc2626 100%);}

        /* Shifts panel */
        .shifts-card{display:flex;flex-direction:column;gap:12px;}
        .shift{display:flex;align-items:center;padding:16px;background:rgba(248,250,252,.8);border-radius:16px;transition:all .3s ease;border:2px solid transparent;}
        .shift:hover{background:rgba(102,126,234,.08);border-color:rgba(102,126,234,.2);transform:translateX(4px);}
        .shift .dot{width:16px;height:16px;border-radius:50%;margin-right:16px;box-shadow:0 4px 12px rgba(0,0,0,.2);flex-shrink:0;}
        .shift-info{flex:1;}
        .shift-info strong{display:block;font-size:15px;font-weight:700;color:#1a202c;margin-bottom:3px;}
        .shift-info small{display:block;font-size:12px;color:#64748b;font-weight:500;}
        .shift-badge{font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;color:#fff;}
        .shift-empty{text-align:center;padding:40px 20px;color:#94a3b8;font-size:14px;}

        /* Job stats row */
        .job-stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-top:35px;animation:fadeIn .6s ease-out .5s both;}
        .job-stat-card{background:rgba(255,255,255,.95);border-radius:16px;padding:20px 24px;box-shadow:0 8px 30px rgba(0,0,0,.07);transition:all .3s ease;display:flex;align-items:center;gap:16px;}
        .job-stat-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.1);}
        .job-stat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
        .job-stat-info strong{font-size:26px;font-weight:800;color:#1a202c;}
        .job-stat-info span{font-size:12px;color:#64748b;font-weight:500;display:block;margin-top:2px;}

        /* Recent jobs table */
        .jobs-section{margin-top:24px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-radius:20px;padding:28px;box-shadow:0 10px 40px rgba(0,0,0,.08);animation:fadeIn .6s ease-out .55s both;}

        /* Current shift chip */
        .current-shift-chip{margin-top:16px;padding:18px;background:rgba(102,126,234,.1);border-radius:16px;}
        .current-shift-label{font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;}
        .current-shift-value{font-size:18px;font-weight:700;color:#667eea;}
        .current-shift-sub{font-size:12px;color:#64748b;margin-top:3px;}

        /* Empty state */
        .empty-state{text-align:center;padding:60px 20px;color:#94a3b8;}
        .empty-state-icon{font-size:64px;margin-bottom:16px;opacity:.5;}

        /* Responsive */
        @media(max-width:1200px){.grid{grid-template-columns:1fr;}}
        @media(max-width:768px){
          .sidebar{width:100%;height:auto;position:relative;padding:20px;}
          .main{margin-left:0;padding:20px;}
          .stats{grid-template-columns:1fr;}
          .topbar{flex-direction:column;gap:16px;align-items:flex-start;}
          .top-actions{width:100%;justify-content:space-between;}
          table{font-size:13px;}
          table th,table td{padding:10px;}
        }
        ::-webkit-scrollbar{width:8px;height:8px;}
        ::-webkit-scrollbar-track{background:rgba(0,0,0,.05);}
        ::-webkit-scrollbar-thumb{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:4px;}
        ::-webkit-scrollbar-thumb:hover{background:linear-gradient(135deg,#764ba2 0%,#667eea 100%);}
      `}),a.jsxs("aside",{className:"sidebar",children:[a.jsx("div",{className:"logo",children:a.jsx("img",{src:M4,alt:"Logo"})}),a.jsxs("nav",{children:[a.jsxs("a",{className:g==="dashboard"?"active":"",onClick:()=>I("dashboard"),style:{cursor:"pointer"},children:[a.jsx("span",{className:"nav-icon",children:"📊"})," Dashboard"]}),a.jsxs("a",{className:g==="staff"?"active":"",onClick:()=>{I("staff"),t("/staff")},style:{cursor:"pointer"},children:[a.jsx("span",{className:"nav-icon",children:"👥"})," Staff Management"]}),a.jsxs("a",{className:g==="shifts"?"active":"",onClick:()=>{I("shifts"),t("/shifts")},style:{cursor:"pointer"},children:[a.jsx("span",{className:"nav-icon",children:"🕐"})," Shifts"]}),a.jsxs("a",{className:g==="scheduling"?"active":"",onClick:()=>{I("scheduling"),t("/assignments")},style:{cursor:"pointer"},children:[a.jsx("span",{className:"nav-icon",children:"📅"})," Assignments"]}),a.jsxs("a",{onClick:async()=>{await Wc(Ie),localStorage.clear(),t("/login")},style:{cursor:"pointer",marginTop:"20px",color:"#ef4444"},children:[a.jsx("span",{className:"nav-icon",children:"🚪"})," Logout"]})]})]}),a.jsxs("main",{className:"main",children:[a.jsxs("header",{className:"topbar",children:[a.jsxs("div",{className:"topbar-left",children:[a.jsx("h1",{children:"Admin Dashboard"}),a.jsx("p",{children:"Welcome back! Here's what's happening today."})]}),a.jsxs("div",{className:"top-actions",children:[a.jsxs("div",{className:"user-profile",children:[a.jsx("div",{className:"user-avatar",children:((V=e==null?void 0:e.email)==null?void 0:V.charAt(0).toUpperCase())||"A"}),a.jsxs("div",{children:[a.jsx("div",{className:"user-name",children:((F=e==null?void 0:e.email)==null?void 0:F.split("@")[0])||"Admin"}),a.jsx("div",{className:"user-role",children:"Administrator"})]})]}),a.jsxs("button",{className:"btn ghost",children:[a.jsx("span",{children:"📥"})," Export"]}),a.jsxs("button",{className:"btn primary",onClick:()=>t("/assignments"),children:[a.jsx("span",{children:"➕"})," New Assignment"]}),a.jsxs("button",{className:"btn ghost",onClick:async()=>{await Wc(Ie),localStorage.clear(),t("/login")},style:{color:"#ef4444"},children:[a.jsx("span",{children:"🚪"})," Logout"]})]})]}),a.jsxs("section",{className:"stats",children:[a.jsx("div",{className:"card stat blue",children:a.jsxs("div",{className:"stat-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Total Staff"}),a.jsx("p",{children:d}),a.jsx("span",{children:"Active employees"})]}),a.jsx("div",{className:"stat-icon",children:"👥"})]})}),a.jsx("div",{className:"card stat green",children:a.jsxs("div",{className:"stat-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Active Shifts"}),a.jsx("p",{children:R}),a.jsx("span",{children:"From Firestore shifts"})]}),a.jsx("div",{className:"stat-icon",children:"🕐"})]})}),a.jsx("div",{className:"card stat purple",children:a.jsxs("div",{className:"stat-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"This Week"}),a.jsx("p",{children:w}),a.jsx("span",{children:"Assignments"})]}),a.jsx("div",{className:"stat-icon",children:"📋"})]})}),a.jsx("div",{className:"card stat orange",children:a.jsxs("div",{className:"stat-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Departments"}),a.jsx("p",{children:_}),a.jsx("span",{children:"Operational units"})]}),a.jsx("div",{className:"stat-icon",children:"🏢"})]})})]}),a.jsxs("section",{className:"grid",children:[a.jsxs("div",{className:"card table-card",children:[a.jsx("h2",{children:"Recent Staff Assignments"}),a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Staff Member"}),a.jsx("th",{children:"Job Title"}),a.jsx("th",{children:"Department"}),a.jsx("th",{children:"Date"})]})}),a.jsx("tbody",{children:O.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:4,children:a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-state-icon",children:"📭"}),a.jsx("div",{children:"No assignments yet"})]})})}):O.slice(0,8).map(j=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:j.assignedStaff||"—"})}),a.jsx("td",{children:a.jsx("span",{className:"badge blue",children:j.title||"—"})}),a.jsx("td",{children:j.department||"—"}),a.jsx("td",{children:j.timestamp?new Date(j.timestamp).toLocaleDateString():"—"})]},j.id))})]})]}),a.jsxs("div",{className:"card shifts-card",children:[a.jsx("h2",{children:"Shift Schedule"}),r.length===0?a.jsxs("div",{className:"shift-empty",children:[a.jsx("div",{style:{fontSize:40,marginBottom:8},children:"🕐"}),"No shifts configured yet.",a.jsx("br",{}),a.jsx("span",{style:{color:"#667eea",cursor:"pointer",fontWeight:600},onClick:()=>t("/shifts"),children:"Add shifts →"})]}):r.slice(0,6).map(j=>a.jsxs("div",{className:"shift",children:[a.jsx("span",{className:"dot",style:{background:j.color||"#667eea"}}),a.jsxs("div",{className:"shift-info",children:[a.jsx("strong",{children:j.name}),a.jsxs("small",{children:[$l(j.startTime)," – ",$l(j.endTime),j.department?` · ${j.department}`:""]}),j.maxStaff?a.jsxs("small",{style:{marginTop:2},children:[j.assignedStaff??0," / ",j.maxStaff," staff"]}):null]}),a.jsx("span",{className:"shift-badge",style:{background:j.isActive?"#10b981":"#94a3b8"},children:j.isActive?"Active":"Off"})]},j.id)),a.jsxs("div",{className:"current-shift-chip",children:[a.jsx("div",{className:"current-shift-label",children:"CURRENT SHIFT"}),(()=>{const j=new Date,v=`${String(j.getHours()).padStart(2,"0")}:${String(j.getMinutes()).padStart(2,"0")}`,y=r.find(S=>S.isActive&&F4(v,S.startTime,S.endTime));return y?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"current-shift-value",children:[a.jsx("span",{style:{marginRight:"8px"},children:"👤"}),y.name]}),a.jsxs("div",{className:"current-shift-sub",children:[$l(y.startTime)," – ",$l(y.endTime),y.department?` · ${y.department}`:""]})]}):a.jsx("div",{className:"current-shift-value",style:{fontSize:"14px",color:"#94a3b8"},children:"No active shift detected"})})()]})]})]}),a.jsx("div",{className:"job-stats-row",children:[{label:"Total Jobs",value:T.total,icon:"📦",bg:"#667eea22",color:"#667eea"},{label:"Pending",value:T.pending,icon:"⏳",bg:"#f59e0b22",color:"#f59e0b"},{label:"In Progress",value:T.inProgress,icon:"🚀",bg:"#3b82f622",color:"#3b82f6"},{label:"Completed",value:T.completed,icon:"✅",bg:"#10b98122",color:"#10b981"}].map(j=>a.jsxs("div",{className:"job-stat-card",onClick:()=>t("/assignments"),style:{cursor:"pointer"},children:[a.jsx("div",{className:"job-stat-icon",style:{background:j.bg},children:j.icon}),a.jsxs("div",{className:"job-stat-info",children:[a.jsx("strong",{style:{color:j.color},children:j.value}),a.jsx("span",{children:j.label})]})]},j.label))}),i.length>0&&a.jsxs("div",{className:"jobs-section",children:[a.jsx("h2",{children:"Recent Jobs"}),a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Job Title"}),a.jsx("th",{children:"Customer"}),a.jsx("th",{children:"Department"}),a.jsx("th",{children:"Priority"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Due Date"})]})}),a.jsx("tbody",{children:i.slice(0,6).map(j=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:j.title||"—"})}),a.jsx("td",{children:j.customer||"—"}),a.jsx("td",{children:j.department||"—"}),a.jsx("td",{children:a.jsx("span",{className:"badge",style:{background:z4[j.priority]||"#667eea"},children:j.priority})}),a.jsx("td",{children:a.jsx("span",{className:"badge",style:{background:U4[j.status]||"#667eea"},children:$4[j.status]||j.status})}),a.jsx("td",{children:j.dueDate||"—"})]},j.id))})]}),i.length>6&&a.jsx("div",{style:{textAlign:"center",marginTop:16},children:a.jsxs("button",{className:"btn primary",onClick:()=>t("/assignments"),children:["View all ",i.length," jobs →"]})})]}),c.length>0&&a.jsxs("div",{className:"jobs-section",style:{marginTop:35},children:[a.jsx("h2",{children:"Staff Directory"}),a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Role"}),a.jsx("th",{children:"Department"}),a.jsx("th",{children:"Status"})]})}),a.jsx("tbody",{children:c.slice(0,6).map(j=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:"badge",style:{background:"#f3f4f6",color:"#6b7280"},children:j.staffId||"—"})}),a.jsx("td",{children:a.jsx("strong",{children:j.name||"—"})}),a.jsx("td",{children:a.jsx("span",{className:"badge",style:{background:"#64748b"},children:j.role||"—"})}),a.jsx("td",{children:j.department||"—"}),a.jsx("td",{children:a.jsx("span",{className:"badge",style:{background:j.status==="active"?"#10b981":"#94a3b8"},children:j.status==="active"?"Active":"Inactive"})})]},j.id))})]}),c.length>6&&a.jsx("div",{style:{textAlign:"center",marginTop:16},children:a.jsxs("button",{className:"btn primary",onClick:()=>t("/staff"),children:["View all ",c.length," staff members →"]})})]})]})]})},q4="/assets/logo-2-CxjwVk6H.png",H4=["admin","designer","packaging","supervisor","operator","qc-inspector","technician","store-manager"],W4=["active","inactive"],ov={admin:"#8B5CF6",designer:"#3B82F6",packaging:"#F97316",supervisor:"#10B981",operator:"#6B7280","qc-inspector":"#F59E0B",technician:"#06B6D4","store-manager":"#F43F5E"},av={active:"#10B981",inactive:"#6B7280"},lv={Production:"🏭",Printing:"🖨️",Finishing:"✨","Quality Control":"✅",Packaging:"📦",Design:"🎨",Management:"👔",Maintenance:"🔧",Logistics:"🚚",default:"📁"},G4=()=>{const t=Gs(),[e,n]=P.useState([]),[r,s]=P.useState(!0),[i,o]=P.useState(""),[c,u]=P.useState("all"),[d,f]=P.useState("grouped"),[m,g]=P.useState(!1),[I,R]=P.useState(null),[N,O]=P.useState({staffId:"",name:"",email:"",phone:"",role:"operator",department:"",status:"active"}),[w,_]=P.useState({}),[T,V]=P.useState(!1),[F,j]=P.useState(null),v=(q,$="success")=>{j({msg:q,type:$}),setTimeout(()=>j(null),3e3)};P.useEffect(()=>{const q=xn(St(_e,"staff"),$=>{const Y=$.docs.map(X=>({id:X.id,...X.data()}));n(Y),s(!1)});return()=>q()},[]);const y=()=>{const q={};return N.staffId||(q.staffId="Staff ID required"),N.name||(q.name="Name required"),N.email.includes("@")||(q.email="Valid email required"),N.phone||(q.phone="Phone required"),N.department||(q.department="Department required"),_(q),Object.keys(q).length===0},S=()=>{R(null),O({staffId:"",name:"",email:"",phone:"",role:"operator",department:"",status:"active"}),_({}),g(!0)},C=q=>{R(q),O(q),_({}),g(!0)},b=async()=>{if(y()){V(!0);try{I?(await Or(Pt(_e,"staff",I.id),N),v("Staff updated successfully")):(await Ma(St(_e,"staff"),{...N,joinedDate:new Date().toISOString().split("T")[0],createdAt:ve.now()}),v("Staff added successfully")),g(!1)}catch{v("Failed to save staff","error")}V(!1)}},D=async q=>{if(window.confirm(`Are you sure you want to delete ${q.name}?`))try{await Va(Pt(_e,"staff",q.id)),v("Staff removed successfully")}catch{v("Failed to remove staff","error")}},E=e.filter(q=>{const $=i.toLowerCase(),Y=q.name.toLowerCase().includes($)||q.email.toLowerCase().includes($)||q.department.toLowerCase().includes($),X=c==="all"||q.status===c;return Y&&X}),ie=E.reduce((q,$)=>{const Y=$.department||"Unassigned";return q[Y]||(q[Y]=[]),q[Y].push($),q},{}),ge=Object.keys(ie).sort(),Te={total:e.length,active:e.filter(q=>q.status==="active").length,inactive:e.filter(q=>q.status==="inactive").length,departments:new Set(e.map(q=>q.department)).size};return r?a.jsxs("div",{className:"loading-container",children:[a.jsx("div",{className:"loader"}),a.jsx("p",{children:"Loading staff data..."})]}):a.jsxs("div",{className:"page",children:[F&&a.jsxs("div",{className:`toast ${F.type}`,children:[a.jsx("span",{children:F.type==="success"?"✓":"✕"}),F.msg]}),a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"header-left",children:[a.jsx("button",{type:"button",title:"Go back to dashboard",className:"back-btn",onClick:()=>t("/dashboard"),children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),a.jsxs("div",{className:"header-title",children:[a.jsx("h1",{children:"Staff Management"}),a.jsxs("p",{children:[E.length," staff members"]})]})]}),a.jsxs("div",{className:"header-actions",children:[a.jsx("button",{className:"view-toggle",onClick:()=>f(d==="grouped"?"list":"grouped"),children:d==="grouped"?"📋 List View":"📊 Group View"}),a.jsxs("button",{className:"primary-btn",onClick:S,children:[a.jsx("span",{children:"+"})," Add Staff"]})]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",style:{"--accent":"#8B5CF6"},children:[a.jsx("div",{className:"stat-icon",children:"👥"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{children:Te.total}),a.jsx("p",{children:"Total Staff"})]})]}),a.jsxs("div",{className:"stat-card",style:{"--accent":"#10B981"},children:[a.jsx("div",{className:"stat-icon",children:"✅"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{children:Te.active}),a.jsx("p",{children:"Active"})]})]}),a.jsxs("div",{className:"stat-card",style:{"--accent":"#6B7280"},children:[a.jsx("div",{className:"stat-icon",children:"⏸️"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{children:Te.inactive}),a.jsx("p",{children:"Inactive"})]})]}),a.jsxs("div",{className:"stat-card",style:{"--accent":"#3B82F6"},children:[a.jsx("div",{className:"stat-icon",children:"🏢"}),a.jsxs("div",{className:"stat-content",children:[a.jsx("h3",{children:Te.departments}),a.jsx("p",{children:"Departments"})]})]})]}),a.jsxs("div",{className:"controls",children:[a.jsxs("div",{className:"search-box",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("path",{d:"m21 21-4.35-4.35"})]}),a.jsx("input",{placeholder:"Search by name, email, or department...",value:i,onChange:q=>o(q.target.value)})]}),a.jsx("div",{className:"filter-chips",children:["all","active","inactive"].map(q=>a.jsx("button",{className:c===q?"chip active":"chip",onClick:()=>u(q),children:q==="all"?`All (${Te.total})`:q==="active"?`Active (${Te.active})`:`Inactive (${Te.inactive})`},q))})]}),d==="grouped"?a.jsx("div",{className:"department-groups",children:ge.map(q=>a.jsxs("div",{className:"department-section",children:[a.jsx("div",{className:"department-header",children:a.jsxs("div",{className:"department-info",children:[a.jsx("span",{className:"department-icon",children:lv[q]||lv.default}),a.jsx("h2",{children:q}),a.jsxs("span",{className:"count",children:[ie[q].length," members"]})]})}),a.jsx("div",{className:"grid",children:ie[q].map($=>a.jsx(cv,{staff:$,onEdit:C,onDelete:D},$.id))})]},q))}):a.jsx("div",{className:"grid",children:E.map(q=>a.jsx(cv,{staff:q,onEdit:C,onDelete:D},q.id))}),E.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"👥"}),a.jsx("h3",{children:"No staff members found"}),a.jsx("p",{children:"Try adjusting your search or filters"})]}),m&&a.jsx("div",{className:"modal-backdrop",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(15, 23, 42, 0.7)",backdropFilter:"blur(8px)",zIndex:1e3,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"60px 20px",overflowY:"auto",animation:"fadeIn 0.3s ease"},onClick:()=>g(!1),children:a.jsxs("div",{className:"modal glass",onClick:q=>q.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("img",{src:q4,className:"logo",alt:"Company logo"}),a.jsx("h2",{children:I?"Edit Staff Member":"Add New Staff Member"}),a.jsx("p",{className:"modal-subtitle",children:"Fill in the details below"})]}),a.jsxs("div",{className:"modal-body",style:{padding:"20px 30px"},children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Staff ID *"}),a.jsx("input",{placeholder:"e.g., EMP-001",value:N.staffId,onChange:q=>O({...N,staffId:q.target.value}),className:w.staffId?"error":""}),w.staffId&&a.jsx("span",{className:"error-text",children:w.staffId})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Full Name *"}),a.jsx("input",{placeholder:"e.g., John Doe",value:N.name,onChange:q=>O({...N,name:q.target.value}),className:w.name?"error":""}),w.name&&a.jsx("span",{className:"error-text",children:w.name})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Email Address *"}),a.jsx("input",{type:"email",placeholder:"email@company.com",value:N.email,onChange:q=>O({...N,email:q.target.value}),className:w.email?"error":""}),w.email&&a.jsx("span",{className:"error-text",children:w.email})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Phone Number *"}),a.jsx("input",{type:"tel",placeholder:"+1234567890",value:N.phone,onChange:q=>O({...N,phone:q.target.value}),className:w.phone?"error":""}),w.phone&&a.jsx("span",{className:"error-text",children:w.phone})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Department *"}),a.jsx("input",{placeholder:"e.g., Production, Printing, Quality Control",value:N.department,onChange:q=>O({...N,department:q.target.value}),className:w.department?"error":""}),w.department&&a.jsx("span",{className:"error-text",children:w.department})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Role *"}),a.jsx("div",{className:"chip-grid",children:H4.map(q=>{var $;return a.jsx("button",{className:(($=N.role)==null?void 0:$.toLowerCase())===q.toLowerCase()?"chip-select active":"chip-select",onClick:()=>O({...N,role:q}),type:"button",children:q.charAt(0).toUpperCase()+q.slice(1)},q)})})]}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Status *"}),a.jsx("div",{className:"chip-grid",children:W4.map(q=>a.jsx("button",{className:N.status===q?"chip-select active":"chip-select",onClick:()=>O({...N,status:q}),type:"button",children:q==="active"?"✅ Active":"⏸️ Inactive"},q))})]})})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"cancel-btn",onClick:()=>g(!1),disabled:T,children:"Cancel"}),a.jsx("button",{className:"save-btn",onClick:b,disabled:T,children:T?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"btn-loader"}),"Saving..."]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"✓"}),I?"Update":"Add"," Staff"]})})]})]})}),a.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        
        body { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }

        .page { 
          padding: 30px 40px; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* LOADING */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          gap: 20px;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* HEADER */
        .header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 24px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .back-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.1);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          transform: translateX(-4px);
        }

        .header-title h1 { 
          font-size: 28px; 
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 4px;
        }

        .header-title p {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .view-toggle {
          padding: 12px 20px;
          border-radius: 12px;
          background: rgba(100, 116, 139, 0.1);
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: #475569;
          transition: all 0.3s ease;
        }

        .view-toggle:hover {
          background: rgba(100, 116, 139, 0.2);
          transform: translateY(-2px);
        }

        .primary-btn { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff; 
          padding: 12px 24px; 
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(102, 126, 234, 0.4);
        }

        .primary-btn span {
          font-size: 20px;
        }

        /* STATS */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-top: 4px solid var(--accent);
          animation: scaleIn 0.5s ease-out backwards;
        }

        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .stat-icon {
          font-size: 36px;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent), var(--accent));
          border-radius: 16px;
          opacity: 0.2;
        }

        .stat-content h3 {
          font-size: 32px;
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 4px;
        }

        .stat-content p {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
        }

        /* CONTROLS */
        .controls { 
          display: flex; 
          gap: 16px; 
          margin-bottom: 30px;
          flex-wrap: wrap;
          align-items: center;
        }

        .search-box {
          flex: 1;
          min-width: 300px;
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 14px 20px;
          border-radius: 14px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          gap: 12px;
        }

        .search-box svg {
          color: #9ca3af;
        }

        .search-box input { 
          flex: 1;
          padding: 0;
          border: none;
          background: transparent;
          font-size: 15px;
          color: #1f2937;
          outline: none;
          font-weight: 500;
        }

        .search-box input::placeholder {
          color: #9ca3af;
        }

        .filter-chips {
          display: flex;
          gap: 10px;
        }

        .chip { 
          padding: 10px 18px; 
          border-radius: 12px;
          border: 2px solid transparent;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .chip.active { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        /* DEPARTMENT GROUPS */
        .department-groups {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .department-section {
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .department-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 20px 24px;
          border-radius: 16px;
          margin-bottom: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }

        .department-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .department-icon {
          font-size: 28px;
        }

        .department-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .count {
          padding: 4px 12px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        /* GRID */
        .grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
          gap: 20px;
          animation: fadeIn 0.6s ease-out;
        }

        /* CARD */
        .card { 
          background: rgba(255, 255, 255, 0.95); 
          backdrop-filter: blur(20px);
          padding: 24px; 
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .card:hover::before {
          opacity: 1;
        }

        .card-top { 
          display: flex; 
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .card-top strong {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .card-top small {
          display: block;
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }

        .card-top > div:last-child {
          display: flex;
          gap: 8px;
        }

        .card-top button {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
          background: rgba(0, 0, 0, 0.05);
        }

        .card-top button:hover {
          transform: scale(1.1);
        }

        .card-top button:first-child:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .card-top button:last-child:hover {
          background: rgba(239, 68, 68, 0.1);
        }

        .badges { 
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .badges span { 
          padding: 6px 12px; 
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .card p {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .card p:last-child {
          margin-bottom: 0;
        }

        /* EMPTY STATE */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .empty-icon {
          font-size: 64px;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .empty-state h3 {
          font-size: 20px;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .empty-state p {
          color: #9ca3af;
        }

        /* MODAL */
        .modal-backdrop { 
          position: fixed; 
          inset: 0; 
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex; 
          justify-content: center; 
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
        }

        .modal { 
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(40px);
          padding: 0;
          border-radius: 28px;
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
          animation: modalSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          display: flex;
          flex-direction: column;
        }

        @keyframes modalSlide {
          from { transform: scale(0.9) translateY(40px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .modal-header {
          flex-shrink: 0;
          padding: 32px 32px 24px;
          text-align: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        }

        .logo { 
          width: 80px;
          height: 80px;
          display: block;
          margin: 0 auto 16px;
          filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.3));
        }

        .modal h2 {
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }

        .modal-body {
          flex: 1;
          padding: 16px 32px;
          overflow-y: auto;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #374151;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: rgba(249, 250, 251, 0.8);
          font-size: 15px;
          color: #1f2937;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-group input.error {
          border-color: #ef4444;
        }

        .error-text {
          display: block;
          color: #ef4444;
          font-size: 12px;
          margin-top: 6px;
          font-weight: 600;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .chip-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip-select {
          padding: 10px 16px;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: rgba(249, 250, 251, 0.8);
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
          transition: all 0.3s ease;
          font-size: 13px;
          text-transform: capitalize;
        }

        .chip-select:hover {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.05);
        }

        .chip-select.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .modal-footer {
          flex-shrink: 0;
          padding: 16px 32px;
          display: flex;
          gap: 12px;
          background: rgba(249, 250, 251, 0.95);
        }

        .cancel-btn {
          flex: 1;
          padding: 14px;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          background: #fff;
          cursor: pointer;
          font-weight: 700;
          color: #64748b;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .cancel-btn:hover {
          background: #f9fafb;
          border-color: #d1d5db;
        }

        .cancel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .save-btn {
          flex: 1;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.3s ease;
          font-size: 15px;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .save-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(102, 126, 234, 0.4);
        }

        .save-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .btn-loader {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        /* TOAST */
        .toast { 
          position: fixed; 
          bottom: 30px; 
          right: 30px;
          padding: 16px 24px;
          border-radius: 16px;
          color: #fff;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: toastSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes toastSlide {
          from { transform: translateX(400px); }
          to { transform: translateX(0); }
        }

        .toast.success { 
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .toast.error { 
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .toast span {
          font-size: 18px;
          font-weight: 700;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .page {
            padding: 20px;
          }

          .header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }

          .header-left {
            width: 100%;
          }

          .header-actions {
            width: 100%;
            justify-content: space-between;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .controls {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            min-width: 100%;
          }

          .filter-chips {
            justify-content: space-between;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .modal {
            width: 95%;
            max-height: 95vh;
          }
        }

        /* SCROLLBAR */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
      `})]})},cv=({staff:t,onEdit:e,onDelete:n})=>a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-top",children:[a.jsxs("div",{children:[a.jsx("strong",{children:t.name}),a.jsx("small",{children:t.department})]}),a.jsxs("div",{children:[a.jsx("button",{onClick:()=>e(t),title:"Edit",children:"✏️"}),a.jsx("button",{onClick:()=>n(t),title:"Delete",children:"🗑️"})]})]}),a.jsxs("div",{className:"badges",children:[a.jsx("span",{style:{background:ov[t.role]+"22",color:ov[t.role]},children:t.role}),a.jsx("span",{style:{background:av[t.status]+"22",color:av[t.status]},children:t.status})]}),a.jsxs("p",{children:["🆔 ",t.staffId||"N/A"]}),a.jsxs("p",{children:["� ",t.email]}),a.jsxs("p",{children:["📱 ",t.phone]}),a.jsxs("p",{children:["📅 Joined: ",t.joinedDate]})]});/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=t=>{const e=Q4(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=P.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...c},u)=>P.createElement("svg",{ref:u,...Y4,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:yb("lucide",s),...!i&&!J4(c)&&{"aria-hidden":"true"},...c},[...o.map(([d,f])=>P.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(t,e)=>{const n=P.forwardRef(({className:r,...s},i)=>P.createElement(X4,{ref:i,iconNode:e,className:yb(`lucide-${K4(uv(t))}`,`lucide-${t}`,r),...s}));return n.displayName=uv(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ej=Ee("activity",Z4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vb=Ee("arrow-left",tj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],lu=Ee("briefcase",nj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],pc=Ee("calendar",rj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ij=Ee("chevron-left",sj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],aj=Ee("chevron-right",oj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],$e=Ee("circle-alert",lj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],la=Ee("circle-check-big",cj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Cr=Ee("clock",uj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],hj=Ee("dollar-sign",dj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],pj=Ee("download",fj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gj=Ee("eye",mj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],vj=Ee("file-text",yj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],_j=Ee("funnel",xj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],bj=Ee("loader",wj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Tj=Ee("map-pin",Ej);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Ns=Ee("package",Sj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],es=Ee("plus",Ij);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Cj=Ee("save",kj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Em=Ee("search",Nj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Rj=Ee("settings",Aj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],jj=Ee("sparkles",Pj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Li=Ee("square-pen",Dj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Lr=Ee("trash-2",Oj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Tm=Ee("trending-up",Lj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Bl=Ee("user",Vj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],cu=Ee("users",Mj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jn=Ee("x",Fj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],dv=Ee("zap",zj);function Uj(){const t=Gs(),[e,n]=P.useState(""),[r,s]=P.useState(!1),[i,o]=P.useState(!1),[c,u]=P.useState(!1),[d,f]=P.useState(null),[m,g]=P.useState(null),[I,R]=P.useState([]),[N,O]=P.useState([]),[w,_]=P.useState(!0),[T,V]=P.useState(!1),[F,j]=P.useState("all"),[v,y]=P.useState({title:"",customer:"",quantity:"",priority:"medium",department:"",dueDate:"",description:"",status:"pending",createdBy:"Admin",assignedStaff:""}),[S,C]=P.useState({});P.useEffect(()=>{const k=Ie.onAuthStateChanged(de=>{de||t("/login")});return localStorage.getItem("adminToken")||t("/login"),()=>k()},[t]),P.useEffect(()=>{const k=sr(St(_e,"jobs"),qs("createdAt","desc")),G=xn(k,ke=>{const qe=Ct=>{const Wn={};for(const Nt of Object.keys(Ct)){const At=Ct[Nt];At&&typeof At=="object"&&typeof At.toDate=="function"?Wn[Nt]=At.toDate().toLocaleDateString():At&&typeof At=="object"&&!Array.isArray(At)?Wn[Nt]=qe(At):Wn[Nt]=At}return Wn},Qe=ke.docs.map(Ct=>({id:Ct.id,...qe(Ct.data())}));R(Qe),_(!1)},ke=>{console.error("Error fetching jobs:",ke),_(!1)}),de=sr(St(_e,"staff")),Ke=xn(de,ke=>{const qe=ke.docs.map(Qe=>({id:Qe.id,name:Qe.data().name,status:Qe.data().status}));O(qe)});return()=>{G(),Ke()}},[]);const b={low:{bg:"from-sky-400 to-cyan-500",text:"text-sky-50",icon:"🔵"},medium:{bg:"from-blue-500 to-indigo-600",text:"text-blue-50",icon:"🟢"},high:{bg:"from-orange-500 to-red-500",text:"text-orange-50",icon:"🟠"},urgent:{bg:"from-red-600 to-pink-600",text:"text-red-50",icon:"🔴"}},D={pending:{bg:"from-amber-400 to-yellow-500",text:"text-amber-900",icon:"⏳"},"in-progress":{bg:"from-blue-500 to-cyan-500",text:"text-blue-50",icon:"🚀"},"qc-review":{bg:"from-purple-500 to-pink-500",text:"text-purple-50",icon:"🔍"},completed:{bg:"from-green-500 to-emerald-600",text:"text-green-50",icon:"✅"}},E=()=>{const k={};return v.title.trim()||(k.title="Job title is required"),v.customer.trim()||(k.customer="Customer name is required"),(!v.quantity||parseInt(v.quantity)<=0)&&(k.quantity="Valid quantity is required"),v.department.trim()||(k.department="Department is required"),v.dueDate.trim()||(k.dueDate="Due date is required"),C(k),Object.keys(k).length===0},ie=()=>{y({title:"",customer:"",quantity:"",priority:"medium",department:"",dueDate:"",description:"",status:"pending",createdBy:"Admin",assignedStaff:""}),C({}),f(null)},ge=async()=>{if(E()){V(!0);try{if(!(Ie!=null&&Ie.currentUser))throw new Error("not-authenticated: user must be signed in to write to Firestore");await Ma(St(_e,"jobs"),{...v,quantity:parseInt(v.quantity),createdAt:ve.now(),timestamp:new Date().toLocaleString()}),s(!1),ie()}catch(k){console.error("Error creating job:",k);const G=(k==null?void 0:k.code)||"",de=(k==null?void 0:k.message)||String(k);alert(`Failed to create job (${G}): ${de}`)}finally{V(!1)}}},Te=async()=>{if(!(!E()||!d)){V(!0);try{const k=Pt(_e,"jobs",d.id);await Or(k,{title:v.title,customer:v.customer,quantity:parseInt(v.quantity),priority:v.priority,status:v.status,department:v.department,dueDate:v.dueDate,description:v.description,createdBy:v.createdBy,assignedStaff:v.assignedStaff}),o(!1),ie()}catch(k){console.error("Error updating job:",k),alert("Failed to update job")}finally{V(!1)}}},q=async k=>{if(window.confirm(`Are you sure you want to delete "${k.title}"?`))try{await Va(Pt(_e,"jobs",k.id))}catch(de){console.error("Error deleting job:",de),alert("Failed to delete job")}},$=k=>{f(k),y({title:k.title,customer:k.customer,quantity:k.quantity.toString(),priority:k.priority,department:k.department,dueDate:k.dueDate,description:k.description||"",status:k.status,createdBy:k.createdBy,assignedStaff:k.assignedStaff||""}),o(!0)},Y=k=>{g(k),u(!0)},X=I.filter(k=>{const G=k.title.toLowerCase().includes(e.toLowerCase())||k.customer.toLowerCase().includes(e.toLowerCase())||k.department.toLowerCase().includes(e.toLowerCase()),de=F==="all"||k.status===F;return G&&de}),ue={total:I.length,pending:I.filter(k=>k.status==="pending").length,inProgress:I.filter(k=>k.status==="in-progress").length,completed:I.filter(k=>k.status==="completed").length};return w?a.jsxs("div",{className:"loading-container",children:[a.jsx("style",{children:`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .spinner {
            width: 80px;
            height: 80px;
            border: 4px solid rgba(255, 255, 255, 0.2);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          .loading-text {
            color: white;
            font-size: 24px;
            font-weight: 700;
            margin-top: 24px;
          }
          .loading-subtext {
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            margin-top: 8px;
          }
        `}),a.jsx("div",{className:"spinner"}),a.jsx("div",{className:"loading-text",children:"Loading Jobs"}),a.jsx("div",{className:"loading-subtext",children:"Fetching data from Firebase..."})]}):a.jsxs("div",{className:"job-management-container",children:[a.jsx("style",{children:`
        .job-management-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 50%, #f3e5f5 100%);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Animations */
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes spin { to { transform: rotate(360deg); } }

        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .animate-slide-down { animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-scale-in { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-float { animation: float 3s ease-in-out infinite; }

        /* Glass Effects */
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .glass-modal {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
        }

        /* Shadows */
        .premium-shadow { box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05); }
        .premium-shadow-lg { box-shadow: 0 30px 90px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.08); }

        /* Header */
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 0;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(60px);
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .back-btn {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .header-title h1 {
          color: white;
          font-size: 42px;
          font-weight: 900;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .header-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .create-btn {
          background: white;
          color: #667eea;
          border: none;
          padding: 16px 32px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .create-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        /* Search Container */
        .search-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 10;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .search-box {
          flex: 1;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .search-box input::placeholder {
          color: #999;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          padding: 18px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        /* Stats Grid */
        .stats-grid {
          max-width: 1400px;
          margin: 32px auto 40px;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          position: relative;
          z-index: 20;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(30px);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
        }

        .stat-icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .stat-value {
          font-size: 40px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Filter Tabs */
        .filter-tabs {
          max-width: 1400px;
          margin: 0 auto 40px;
          padding: 0 32px;
          display: flex;
          gap: 16px;
          overflow-x: auto;
        }

        .filter-tabs::-webkit-scrollbar {
          height: 6px;
        }

        .filter-tabs::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }

        .filter-tabs::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        .filter-tab {
          padding: 14px 28px;
          border-radius: 16px;
          border: none;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          color: #555;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
          transform: scale(1.05);
        }

        .filter-tab:hover:not(.active) {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.9);
        }

        /* Jobs Grid */
        .jobs-container {
          max-width: 1400px;
          margin: 0 auto 60px;
          padding: 0 32px;
        }

        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 28px;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(30px);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .job-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .job-title {
          font-size: 22px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .job-id {
          display: inline-block;
          padding: 6px 14px;
          background: #e8eaf6;
          color: #667eea;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
        }

        .job-badges {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .badge {
          padding: 10px 18px;
          border-radius: 14px;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .job-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .detail-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-content {
          flex: 1;
        }

        .detail-label {
          font-size: 11px;
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }

        .detail-value {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .job-actions {
          display: flex;
          gap: 10px;
          padding-top: 20px;
          border-top: 2px solid rgba(0, 0, 0, 0.05);
        }

        .action-btn {
          flex: 1;
          padding: 14px;
          border: none;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          color: white;
        }

        .btn-view {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .btn-edit {
          background: linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%);
        }

        .btn-delete {
          background: linear-gradient(135deg, #ef5350 0%, #e53935 100%);
          flex: 0 0 auto;
          padding: 14px 16px;
        }

        .action-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 60px 20px;
          overflow-y: auto;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(50px);
          border-radius: 28px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

        .modal-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(60px);
        }

        .modal-header-content {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .modal-title {
          color: white;
          font-size: 32px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .modal-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .close-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 32px;
          flex: 1;
          overflow-y: auto;
          min-height: 0;
        }

        .modal-body::-webkit-scrollbar {
          width: 8px;
        }

        .modal-body::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
          transition: all 0.3s ease;
          background: white;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .priority-grid, .status-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .priority-btn, .status-btn {
          padding: 16px;
          border: 2px solid #e0e0e0;
          border-radius: 14px;
          background: white;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .priority-btn:hover, .status-btn:hover {
          transform: scale(1.05);
          border-color: #667eea;
        }

        .priority-btn.active, .status-btn.active {
          border-color: #667eea;
          color: white;
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .error-message {
          color: #f44336;
          font-size: 13px;
          font-weight: 700;
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .modal-footer {
          padding: 24px 32px;
          border-top: 2px solid rgba(0, 0, 0, 0.05);
          display: flex;
          gap: 16px;
          background: rgba(249, 250, 251, 0.5);
          flex-shrink: 0;
        }

        .modal-btn {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .modal-btn-cancel {
          background: #e0e0e0;
          color: #555;
        }

        .modal-btn-cancel:hover {
          background: #d0d0d0;
          transform: scale(1.05);
        }

        .modal-btn-submit {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }

        .modal-btn-submit:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 32px rgba(102, 126, 234, 0.5);
        }

        .modal-btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Empty State */
        .empty-state {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(30px);
          border-radius: 24px;
          padding: 80px 40px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .empty-icon {
          font-size: 100px;
          margin-bottom: 24px;
          animation: float 3s ease-in-out infinite;
        }

        .empty-title {
          font-size: 32px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .empty-subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 32px;
        }

        .empty-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 18px 36px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
        }

        .empty-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-title h1 {
            font-size: 32px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .jobs-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .priority-grid, .status-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"header-content",children:[a.jsxs("div",{className:"header-left",children:[a.jsx("button",{className:"back-btn",onClick:()=>t(-1),children:a.jsx(vb,{style:{color:"white",width:24,height:24}})}),a.jsxs("div",{className:"header-title",children:[a.jsx("h1",{children:"Job Management"}),a.jsxs("div",{className:"header-subtitle",children:[a.jsx(jj,{size:18}),a.jsxs("span",{children:["Managing ",X.length," jobs with precision"]})]})]})]}),a.jsxs("button",{className:"create-btn",onClick:()=>{ie(),s(!0)},children:[a.jsx(es,{size:24}),"Create Job"]})]}),a.jsxs("div",{className:"search-container",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(Em,{style:{color:"#667eea",width:24,height:24}}),a.jsx("input",{type:"text",placeholder:"Search by job title, customer, or department...",value:e,onChange:k=>n(k.target.value)})]}),a.jsx("button",{className:"filter-btn",children:a.jsx(_j,{style:{color:"white",width:24,height:24}})})]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card animate-scale-in",style:{animationDelay:"0s"},children:[a.jsx("div",{className:"stat-icon",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:a.jsx(Ns,{style:{color:"white",width:30,height:30}})}),a.jsx("div",{className:"stat-value",children:ue.total}),a.jsx("div",{className:"stat-label",children:"Total Jobs"})]}),a.jsxs("div",{className:"stat-card animate-scale-in",style:{animationDelay:"0.1s"},children:[a.jsx("div",{className:"stat-icon",style:{background:"linear-gradient(135deg, #ffd54f 0%, #ffb300 100%)"},children:a.jsx(Cr,{style:{color:"white",width:30,height:30}})}),a.jsx("div",{className:"stat-value",children:ue.pending}),a.jsx("div",{className:"stat-label",children:"Pending"})]}),a.jsxs("div",{className:"stat-card animate-scale-in",style:{animationDelay:"0.2s"},children:[a.jsx("div",{className:"stat-icon",style:{background:"linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)"},children:a.jsx(Tm,{style:{color:"white",width:30,height:30}})}),a.jsx("div",{className:"stat-value",children:ue.inProgress}),a.jsx("div",{className:"stat-label",children:"In Progress"})]}),a.jsxs("div",{className:"stat-card animate-scale-in",style:{animationDelay:"0.3s"},children:[a.jsx("div",{className:"stat-icon",style:{background:"linear-gradient(135deg, #66bb6a 0%, #43a047 100%)"},children:a.jsx(la,{style:{color:"white",width:30,height:30}})}),a.jsx("div",{className:"stat-value",children:ue.completed}),a.jsx("div",{className:"stat-label",children:"Completed"})]})]}),a.jsx("div",{className:"filter-tabs",children:[{key:"all",label:`All Jobs (${ue.total})`},{key:"pending",label:`Pending (${ue.pending})`},{key:"in-progress",label:`In Progress (${ue.inProgress})`},{key:"completed",label:`Completed (${ue.completed})`}].map(k=>a.jsx("button",{className:`filter-tab ${F===k.key?"active":""}`,onClick:()=>j(k.key),children:k.label},k.key))}),a.jsx("div",{className:"jobs-container",children:X.length===0?a.jsxs("div",{className:"empty-state animate-scale-in",children:[a.jsx("div",{className:"empty-icon",children:"📋"}),a.jsx("h3",{className:"empty-title",children:"No Jobs Found"}),a.jsx("p",{className:"empty-subtitle",children:e?"Try adjusting your search criteria":"Create your first job to get started"}),!e&&a.jsxs("button",{className:"empty-btn",onClick:()=>{ie(),s(!0)},children:[a.jsx(es,{size:24}),"Create Your First Job"]})]}):a.jsx("div",{className:"jobs-grid",children:X.map((k,G)=>a.jsxs("div",{className:"job-card animate-slide-up",style:{animationDelay:`${G*.05}s`},children:[a.jsx("div",{className:"job-header",children:a.jsxs("div",{children:[a.jsx("h3",{className:"job-title",children:k.title??"(Untitled)"}),a.jsxs("span",{className:"job-id",children:["#",k.id.slice(0,8)]})]})}),a.jsxs("div",{className:"job-badges",children:[a.jsxs("div",{className:`badge bg-gradient-to-r ${(b[k.priority]??b.medium).bg} ${(b[k.priority]??b.medium).text}`,children:[a.jsx("span",{children:(b[k.priority]??b.medium).icon}),k.priority]}),a.jsxs("div",{className:`badge bg-gradient-to-r ${(D[k.status]??D.pending).bg} ${(D[k.status]??D.pending).text}`,children:[a.jsx("span",{children:(D[k.status]??D.pending).icon}),(k.status??"pending").replace("-"," ")]})]}),a.jsxs("div",{className:"job-details",children:[a.jsxs("div",{className:"detail-item",children:[a.jsx("div",{className:"detail-icon",style:{background:"linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)"},children:a.jsx(Bl,{style:{color:"#8e24aa",width:20,height:20}})}),a.jsxs("div",{className:"detail-content",children:[a.jsx("div",{className:"detail-label",children:"Customer"}),a.jsx("div",{className:"detail-value",children:k.customer??"—"})]})]}),a.jsxs("div",{className:"detail-item",children:[a.jsx("div",{className:"detail-icon",style:{background:"linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%)"},children:a.jsx(Ns,{style:{color:"#0277bd",width:20,height:20}})}),a.jsxs("div",{className:"detail-content",children:[a.jsx("div",{className:"detail-label",children:"Quantity"}),a.jsxs("div",{className:"detail-value",children:[(k.quantity??0).toLocaleString()," units"]})]})]}),a.jsxs("div",{className:"detail-item",children:[a.jsx("div",{className:"detail-icon",style:{background:"linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)"},children:a.jsx(pc,{style:{color:"#2e7d32",width:20,height:20}})}),a.jsxs("div",{className:"detail-content",children:[a.jsx("div",{className:"detail-label",children:k.department??"—"}),a.jsx("div",{className:"detail-value",children:k.dueDate??"—"})]})]})]}),a.jsxs("div",{className:"job-actions",children:[a.jsxs("button",{className:"action-btn btn-view",onClick:()=>Y(k),children:[a.jsx(gj,{size:18}),"View"]}),a.jsxs("button",{className:"action-btn btn-edit",onClick:()=>$(k),children:[a.jsx(Li,{size:18}),"Edit"]}),a.jsx("button",{className:"action-btn btn-delete",onClick:()=>q(k),children:a.jsx(Lr,{size:18})})]})]},k.id))})}),(r||i)&&a.jsx("div",{className:"modal-backdrop",onClick:k=>{k.target===k.currentTarget&&(r?s(!1):o(!1),ie())},children:a.jsxs("div",{className:"modal-content",children:[a.jsx("div",{className:"modal-header",children:a.jsxs("div",{className:"modal-header-content",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"modal-title",children:r?"Create New Job":"Edit Job"}),a.jsxs("p",{className:"modal-subtitle",children:[a.jsx(dv,{size:16}),a.jsx("span",{children:r?"Fill in the details to create a new job":"Update job information"})]})]}),a.jsx("button",{className:"close-btn",onClick:()=>{r?s(!1):o(!1),ie()},children:a.jsx(Jn,{style:{color:"white",width:24,height:24}})})]})}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx(vj,{size:16,style:{color:"#667eea"}}),"Job Title *"]}),a.jsx("input",{type:"text",className:"form-input",placeholder:"e.g., Premium Label Design Project",value:v.title,onChange:k=>y({...v,title:k.target.value})}),S.title&&a.jsxs("div",{className:"error-message",children:[a.jsx($e,{size:16}),S.title]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx(Bl,{size:16,style:{color:"#667eea"}}),"Customer *"]}),a.jsx("input",{type:"text",className:"form-input",placeholder:"Customer name",value:v.customer,onChange:k=>y({...v,customer:k.target.value})}),S.customer&&a.jsxs("div",{className:"error-message",children:[a.jsx($e,{size:16}),S.customer]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx(Ns,{size:16,style:{color:"#667eea"}}),"Quantity *"]}),a.jsx("input",{type:"number",className:"form-input",placeholder:"0",min:"1",value:v.quantity,onChange:k=>y({...v,quantity:k.target.value})}),S.quantity&&a.jsxs("div",{className:"error-message",children:[a.jsx($e,{size:16}),S.quantity]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Priority Level"}),a.jsx("div",{className:"priority-grid",children:["low","medium","high","urgent"].map(k=>a.jsxs("button",{type:"button",className:`priority-btn ${v.priority===k?"active":""}`,style:v.priority===k?{background:`linear-gradient(135deg, ${k==="low"?"#4fc3f7 0%, #29b6f6 100%":k==="medium"?"#5c6bc0 0%, #3f51b5 100%":k==="high"?"#ff9800 0%, #f57c00 100%":"#f44336 0%, #d32f2f 100%"})`}:{},onClick:()=>y({...v,priority:k}),children:[a.jsx("span",{children:b[k].icon}),k]},k))})]}),i&&a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Job Status"}),a.jsx("div",{className:"status-grid",children:["pending","in-progress","qc-review","completed"].map(k=>a.jsxs("button",{type:"button",className:`status-btn ${v.status===k?"active":""}`,style:v.status===k?{background:`linear-gradient(135deg, ${k==="pending"?"#ffd54f 0%, #ffb300 100%":k==="in-progress"?"#42a5f5 0%, #1e88e5 100%":k==="qc-review"?"#ab47bc 0%, #8e24aa 100%":"#66bb6a 0%, #43a047 100%"})`}:{},onClick:()=>y({...v,status:k}),children:[a.jsx("span",{children:D[k].icon}),k.replace("-"," ").toUpperCase()]},k))})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Department *"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"e.g., Printing, Design, QC",value:v.department,onChange:k=>y({...v,department:k.target.value})}),S.department&&a.jsxs("div",{className:"error-message",children:[a.jsx($e,{size:16}),S.department]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx(pc,{size:16,style:{color:"#667eea"}}),"Due Date *"]}),a.jsx("input",{type:"date",className:"form-input",value:v.dueDate,onChange:k=>y({...v,dueDate:k.target.value})}),S.dueDate&&a.jsxs("div",{className:"error-message",children:[a.jsx($e,{size:16}),S.dueDate]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx(Bl,{size:16,style:{color:"#667eea"}}),"Assign to Staff (Optional)"]}),a.jsxs("select",{className:"form-input",style:{appearance:"auto"},value:v.assignedStaff,onChange:k=>y({...v,assignedStaff:k.target.value}),children:[a.jsx("option",{value:"",children:"-- Unassigned --"}),N.filter(k=>k.status==="active").map(k=>a.jsx("option",{value:k.name,children:k.name},k.id))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Description (Optional)"}),a.jsx("textarea",{className:"form-input",rows:4,placeholder:"Add detailed job description, special requirements, or notes...",style:{resize:"vertical"},value:v.description,onChange:k=>y({...v,description:k.target.value})})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:()=>{r?s(!1):o(!1),ie()},disabled:T,children:"Cancel"}),a.jsx("button",{className:"modal-btn modal-btn-submit",onClick:r?ge:Te,disabled:T,children:T?a.jsxs(a.Fragment,{children:[a.jsx(bj,{size:20,className:"animate-spin",style:{animation:"spin 1s linear infinite"}}),r?"Creating...":"Updating..."]}):a.jsxs(a.Fragment,{children:[r?a.jsx(es,{size:20}):a.jsx(Li,{size:20}),r?"Create Job":"Update Job"]})})]})]})}),c&&m&&a.jsx("div",{className:"modal-backdrop",onClick:k=>{k.target===k.currentTarget&&u(!1)},children:a.jsxs("div",{className:"modal-content",children:[a.jsx("div",{className:"modal-header",children:a.jsxs("div",{className:"modal-header-content",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"modal-title",children:"Job Details"}),a.jsx("p",{className:"modal-subtitle",children:"Complete job information"})]}),a.jsx("button",{className:"close-btn",onClick:()=>u(!1),children:a.jsx(Jn,{style:{color:"white",width:24,height:24}})})]})}),a.jsxs("div",{className:"modal-body",children:[a.jsx("div",{className:"form-group",children:a.jsxs("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:[a.jsx("p",{className:"detail-label",style:{fontSize:14},children:"Job Title"}),a.jsx("h3",{style:{fontSize:28,fontWeight:900,color:"#1a1a1a",marginTop:8},children:m.title})]})}),a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsxs("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:[a.jsx("p",{className:"detail-label",style:{fontSize:14,marginBottom:12},children:"Priority"}),a.jsxs("div",{className:`badge bg-gradient-to-r ${(b[m.priority]??b.medium).bg} ${(b[m.priority]??b.medium).text}`,style:{justifyContent:"center",fontSize:14},children:[a.jsx("span",{style:{fontSize:24},children:(b[m.priority]??b.medium).icon}),m.priority??"medium"]})]})}),a.jsx("div",{className:"form-group",children:a.jsxs("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:[a.jsx("p",{className:"detail-label",style:{fontSize:14,marginBottom:12},children:"Status"}),a.jsxs("div",{className:`badge bg-gradient-to-r ${(D[m.status]??D.pending).bg} ${(D[m.status]??D.pending).text}`,style:{justifyContent:"center",fontSize:14},children:[a.jsx("span",{style:{fontSize:24},children:(D[m.status]??D.pending).icon}),(m.status??"pending").replace("-"," ")]})]})})]}),a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsx("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:48,height:48,background:"linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(Bl,{style:{color:"#8e24aa",width:24,height:24}})}),a.jsxs("div",{children:[a.jsx("p",{className:"detail-label",children:"Customer"}),a.jsx("p",{className:"detail-value",style:{fontSize:18},children:m.customer})]})]})})}),a.jsx("div",{className:"form-group",children:a.jsx("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:48,height:48,background:"linear-gradient(135deg, #b3e5fc 0%, #81d4fa 100%)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(Ns,{style:{color:"#0277bd",width:24,height:24}})}),a.jsxs("div",{children:[a.jsx("p",{className:"detail-label",children:"Quantity"}),a.jsxs("p",{className:"detail-value",style:{fontSize:18},children:[(m.quantity??0).toLocaleString()," units"]})]})]})})})]}),a.jsxs("div",{className:"form-row",children:[a.jsx("div",{className:"form-group",children:a.jsx("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:48,height:48,background:"linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(pc,{style:{color:"#2e7d32",width:24,height:24}})}),a.jsxs("div",{children:[a.jsx("p",{className:"detail-label",children:"Due Date"}),a.jsx("p",{className:"detail-value",style:{fontSize:18},children:m.dueDate})]})]})})}),a.jsx("div",{className:"form-group",children:a.jsx("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("div",{style:{width:48,height:48,background:"linear-gradient(135deg, #ffe082 0%, #ffd54f 100%)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(dv,{style:{color:"#f57f17",width:24,height:24}})}),a.jsxs("div",{children:[a.jsx("p",{className:"detail-label",children:"Department"}),a.jsx("p",{className:"detail-value",style:{fontSize:18},children:m.department})]})]})})})]}),m.description&&a.jsx("div",{className:"form-group",children:a.jsxs("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:[a.jsx("p",{className:"detail-label",style:{fontSize:14,marginBottom:12},children:"Description"}),a.jsx("p",{style:{color:"#555",lineHeight:1.6},children:m.description})]})}),a.jsx("div",{className:"form-group",children:a.jsxs("div",{className:"glass-effect",style:{borderRadius:16,padding:24,boxShadow:"0 10px 40px rgba(0, 0, 0, 0.08)"},children:[a.jsx("p",{className:"detail-label",style:{fontSize:14,marginBottom:12},children:"Additional Information"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"#666",fontWeight:600},children:"Job ID:"}),a.jsxs("span",{style:{color:"#1a1a1a",fontWeight:700},children:["#",m.id.slice(0,8)]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsx("span",{style:{color:"#666",fontWeight:600},children:"Created By:"}),a.jsx("span",{style:{color:"#1a1a1a",fontWeight:700},children:m.createdBy})]})]})]})})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsxs("button",{className:"modal-btn",style:{flex:1,background:"linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)",color:"white",boxShadow:"0 8px 24px rgba(66, 165, 245, 0.4)"},onClick:()=>{u(!1),$(m)},children:[a.jsx(Li,{size:24}),"Edit Job"]}),a.jsx("button",{className:"modal-btn modal-btn-cancel",onClick:()=>u(!1),children:"Close"})]})]})})]})}function $j(){const[t,e]=P.useState([]),[n,r]=P.useState([]),[s,i]=P.useState(""),[o,c]=P.useState(!1),[u,d]=P.useState(!1),[f,m]=P.useState(null),[g,I]=P.useState(!0),[R,N]=P.useState(!1),[O,w]=P.useState("all"),[_,T]=P.useState(!1),[V,F]=P.useState(null),[j,v]=P.useState({name:"",type:"production",headOfDepartment:"",location:"",workingHours:"",budget:"",staffCount:"0",equipment:""}),[y,S]=P.useState({});P.useEffect(()=>{const k=sr(St(_e,"departments"),qs("createdAt","desc")),G=xn(k,ke=>{const qe=[];ke.forEach(Qe=>{qe.push({id:Qe.id,...Qe.data()})}),e(qe),I(!1)}),de=sr(St(_e,"resources"),qs("createdAt","desc")),Ke=xn(de,ke=>{const qe=[];ke.forEach(Qe=>{qe.push({id:Qe.id,...Qe.data()})}),r(qe)});return()=>{G(),Ke()}},[]);const C=()=>{const k={};return j.name.trim()||(k.name="Department name is required"),j.headOfDepartment.trim()||(k.headOfDepartment="Head of department is required"),j.location.trim()||(k.location="Location is required"),j.workingHours.trim()||(k.workingHours="Working hours are required"),(!j.budget||parseFloat(j.budget)<=0)&&(k.budget="Valid budget is required"),S(k),Object.keys(k).length===0},b=async()=>{if(C()){N(!0);try{const k=j.equipment.split(",").map(de=>de.trim()).filter(de=>de.length>0),G={name:j.name,type:j.type,headOfDepartment:j.headOfDepartment,staffCount:parseInt(j.staffCount)||0,activeJobs:0,equipment:k,workingHours:j.workingHours,location:j.location,status:"active",budget:parseFloat(j.budget),utilization:0,createdAt:ve.now(),updatedAt:ve.now()};f?await Or(Pt(_e,"departments",f.id),{...G,createdAt:f.createdAt}):await Ma(St(_e,"departments"),G),ie(),c(!1)}catch(k){console.error("Error saving department:",k),alert("Error saving department. Please try again.")}finally{N(!1)}}},D=async()=>{if(V)try{await Va(Pt(_e,"departments",V)),T(!1),F(null)}catch(k){console.error("Error deleting department:",k),alert("Error deleting department. Please try again.")}},E=k=>{m(k),v({name:k.name,type:k.type,headOfDepartment:k.headOfDepartment,location:k.location,workingHours:k.workingHours,budget:k.budget.toString(),staffCount:k.staffCount.toString(),equipment:k.equipment.join(", ")}),c(!0)},ie=()=>{v({name:"",type:"production",headOfDepartment:"",location:"",workingHours:"",budget:"",staffCount:"0",equipment:""}),S({}),m(null)},ge=t.filter(k=>{const G=k.name.toLowerCase().includes(s.toLowerCase())||k.id.toLowerCase().includes(s.toLowerCase())||k.headOfDepartment.toLowerCase().includes(s.toLowerCase()),de=O==="all"||k.type===O;return G&&de}),Te=t.reduce((k,G)=>k+G.staffCount,0),q=t.reduce((k,G)=>k+G.activeJobs,0),$=t.length>0?Math.round(t.reduce((k,G)=>k+G.utilization,0)/t.length):0,Y=t.reduce((k,G)=>k+G.budget,0),X=k=>k>=80?"#10b981":k>=60?"#f59e0b":"#ef4444",ue=k=>{const G={production:{bg:"#dbeafe",text:"#1e40af"},support:{bg:"#d1fae5",text:"#065f46"},management:{bg:"#e9d5ff",text:"#6b21a8"}};return G[k]||G.production};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          background: white;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Header Styles */
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          padding: 40px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .header-content {
          position: relative;
          z-index: 1;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }

        .header h1 {
          font-size: 36px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
        }

        .btn-primary {
          background: white;
          color: #3b82f6;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .btn-danger {
          background: #ef4444;
          color: white;
        }

        .btn-danger:hover {
          background: #dc2626;
        }

        .btn-ghost {
          background: transparent;
          color: #6b7280;
          padding: 8px 16px;
        }

        .btn-ghost:hover {
          background: #f3f4f6;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Search and Filter */
        .search-filter-container {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          background: rgba(255,255,255,0.95);
          color: #1f2937;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: white;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
        }

        .filter-container {
          display: flex;
          gap: 8px;
          background: rgba(255,255,255,0.95);
          padding: 8px;
          border-radius: 12px;
          border: 2px solid rgba(255,255,255,0.3);
        }

        .filter-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: #6b7280;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: capitalize;
        }

        .filter-btn.active {
          background: #3b82f6;
          color: white;
        }

        .filter-btn:hover:not(.active) {
          background: #f3f4f6;
        }

        /* Main Content */
        .main-content {
          padding: 32px 40px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--stat-color), transparent);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
          border-color: var(--stat-color);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: var(--stat-bg);
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        /* Section Header */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
        }

        /* Department Grid */
        .department-grid {
          display: grid;
          gap: 24px;
        }

        .department-card {
          background: white;
          border-radius: 16px;
          padding: 28px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
          animation: scaleIn 0.3s ease-in-out;
        }

        .department-card:hover {
          border-color: #e5e7eb;
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }

        .dept-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .dept-info h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 6px;
        }

        .dept-id {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          font-family: 'Courier New', monospace;
        }

        .dept-actions {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f3f4f6;
        }

        .icon-btn:hover {
          transform: scale(1.1);
        }

        .icon-btn.edit:hover {
          background: #dbeafe;
          color: #3b82f6;
        }

        .icon-btn.delete:hover {
          background: #fee2e2;
          color: #ef4444;
        }

        /* Tags */
        .tags {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Department Details */
        .dept-details {
          display: grid;
          gap: 14px;
          margin-bottom: 20px;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6b7280;
          font-size: 14px;
        }

        .detail-row svg {
          flex-shrink: 0;
        }

        .detail-label {
          font-weight: 600;
          color: #4b5563;
        }

        /* Utilization Bar */
        .utilization-section {
          margin-bottom: 20px;
        }

        .utilization-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .utilization-label {
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }

        .utilization-value {
          font-size: 13px;
          font-weight: 700;
          color: #1f2937;
        }

        .progress-bar {
          height: 8px;
          background: #f3f4f6;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.5s ease;
        }

        /* Equipment Tags */
        .equipment-section {
          padding-top: 20px;
          border-top: 2px solid #f3f4f6;
        }

        .equipment-label {
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 10px;
        }

        .equipment-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .equipment-tag {
          padding: 6px 12px;
          background: #f3f4f6;
          border-radius: 8px;
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
        }

        /* Budget Section */
        .budget-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid #f3f4f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .budget-label {
          font-size: 13px;
          color: #6b7280;
        }

        .budget-value {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.2s ease-in-out;
        }

        /* Modal */
        .modal {
          background: white;
          border-radius: 24px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: scaleIn 0.3s ease-in-out;
        }

        .modal-header {
          padding: 28px 32px;
          border-bottom: 2px solid #f3f4f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .modal-close {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #f3f4f6;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #e5e7eb;
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 32px;
          max-height: calc(90vh - 200px);
          overflow-y: auto;
        }

        .modal-body::-webkit-scrollbar {
          width: 8px;
        }

        .modal-body::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }

        .modal-footer {
          padding: 24px 32px;
          border-top: 2px solid #f3f4f6;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          background: #f9fafb;
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-label .required {
          color: #ef4444;
          margin-left: 2px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          color: #1f2937;
          transition: all 0.2s ease;
          background: #f9fafb;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-input.error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .form-error {
          color: #ef4444;
          font-size: 13px;
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .form-helper {
          color: #6b7280;
          font-size: 13px;
          margin-top: 6px;
        }

        /* Type Selection */
        .type-selection {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .type-option {
          padding: 14px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f9fafb;
          font-weight: 600;
          text-transform: capitalize;
          color: #6b7280;
        }

        .type-option:hover {
          border-color: #d1d5db;
          background: white;
        }

        .type-option.selected {
          border-color: #3b82f6;
          background: #eff6ff;
          color: #3b82f6;
        }

        /* Loading State */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 4px solid #f3f4f6;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-text {
          margin-top: 16px;
          color: #6b7280;
          font-size: 15px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
        }

        .empty-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
        }

        .empty-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .empty-description {
          font-size: 15px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        /* Resource Modal */
        .resource-grid {
          display: grid;
          gap: 16px;
        }

        .resource-card {
          background: #f9fafb;
          border-radius: 12px;
          padding: 20px;
          border: 2px solid #e5e7eb;
        }

        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .resource-name {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .resource-type {
          font-size: 12px;
          color: #6b7280;
          text-transform: capitalize;
        }

        .resource-id {
          background: #dbeafe;
          color: #1e40af;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          font-family: 'Courier New', monospace;
        }

        .resource-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .resource-stat-label {
          color: #6b7280;
        }

        .resource-stat-value {
          font-weight: 700;
          color: #1f2937;
        }

        /* Confirm Dialog */
        .confirm-dialog {
          background: white;
          border-radius: 20px;
          padding: 32px;
          max-width: 440px;
          width: 100%;
          animation: scaleIn 0.3s ease-in-out;
        }

        .confirm-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #fee2e2;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .confirm-title {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
          margin-bottom: 12px;
        }

        .confirm-message {
          font-size: 15px;
          color: #6b7280;
          text-align: center;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .confirm-actions {
          display: flex;
          gap: 12px;
        }

        .confirm-actions .btn {
          flex: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          body {
            padding: 10px;
          }

          .header {
            padding: 24px 20px;
          }

          .header h1 {
            font-size: 24px;
          }

          .main-content {
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .search-filter-container {
            flex-direction: column;
          }

          .search-container {
            min-width: 100%;
          }

          .filter-container {
            width: 100%;
            overflow-x: auto;
          }

          .type-selection {
            grid-template-columns: 1fr;
          }

          .modal {
            max-width: 100%;
            margin: 10px;
          }

          .modal-body {
            padding: 20px;
          }

          .modal-footer {
            padding: 16px 20px;
          }
        }

        /* Animations for individual elements */
        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        .slide-in {
          animation: slideIn 0.3s ease-in-out;
        }
      `}),a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"header",children:a.jsxs("div",{className:"header-content",children:[a.jsxs("div",{className:"header-top",children:[a.jsxs("h1",{children:[a.jsx(lu,{size:36}),"Department Management"]}),a.jsxs("div",{className:"header-actions",children:[a.jsxs("button",{className:"btn btn-secondary",onClick:()=>d(!0),children:[a.jsx(Rj,{size:18}),"Resources"]}),a.jsxs("button",{className:"btn btn-primary",onClick:()=>{ie(),c(!0)},children:[a.jsx(es,{size:20}),"Add Department"]})]})]}),a.jsxs("div",{className:"search-filter-container",children:[a.jsxs("div",{className:"search-container",children:[a.jsx(Em,{size:20,className:"search-icon"}),a.jsx("input",{type:"text",className:"search-input",placeholder:"Search departments, managers, locations...",value:s,onChange:k=>i(k.target.value)})]}),a.jsxs("div",{className:"filter-container",children:[a.jsx("button",{className:`filter-btn ${O==="all"?"active":""}`,onClick:()=>w("all"),children:"All"}),a.jsx("button",{className:`filter-btn ${O==="production"?"active":""}`,onClick:()=>w("production"),children:"Production"}),a.jsx("button",{className:`filter-btn ${O==="support"?"active":""}`,onClick:()=>w("support"),children:"Support"}),a.jsx("button",{className:`filter-btn ${O==="management"?"active":""}`,onClick:()=>w("management"),children:"Management"})]})]})]})}),a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#3b82f6","--stat-bg":"#dbeafe"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(cu,{size:24,color:"#3b82f6"})}),a.jsx("div",{className:"stat-value",children:Te}),a.jsx("div",{className:"stat-label",children:"Total Staff"})]}),a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#10b981","--stat-bg":"#d1fae5"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Ns,{size:24,color:"#10b981"})}),a.jsx("div",{className:"stat-value",children:q}),a.jsx("div",{className:"stat-label",children:"Active Jobs"})]}),a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#f59e0b","--stat-bg":"#fef3c7"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Tm,{size:24,color:"#f59e0b"})}),a.jsxs("div",{className:"stat-value",children:[$,"%"]}),a.jsx("div",{className:"stat-label",children:"Avg Utilization"})]}),a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#8b5cf6","--stat-bg":"#ede9fe"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(hj,{size:24,color:"#8b5cf6"})}),a.jsxs("div",{className:"stat-value",children:["$",(Y/1e3).toFixed(0),"K"]}),a.jsx("div",{className:"stat-label",children:"Total Budget"})]})]}),a.jsx("div",{className:"section-header",children:a.jsxs("h2",{className:"section-title",children:["Departments (",ge.length,")"]})}),g&&a.jsxs("div",{className:"loading-container",children:[a.jsx("div",{className:"loading-spinner"}),a.jsx("div",{className:"loading-text",children:"Loading departments..."})]}),!g&&ge.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:a.jsx(lu,{size:40})}),a.jsx("div",{className:"empty-title",children:"No departments found"}),a.jsx("div",{className:"empty-description",children:s||O!=="all"?"Try adjusting your search or filters":"Get started by creating your first department"}),!s&&O==="all"&&a.jsxs("button",{className:"btn btn-primary",onClick:()=>{ie(),c(!0)},children:[a.jsx(es,{size:20}),"Create Department"]})]}),!g&&ge.length>0&&a.jsx("div",{className:"department-grid",children:ge.map(k=>{const G=ue(k.type);return a.jsxs("div",{className:"department-card",children:[a.jsxs("div",{className:"dept-header",children:[a.jsxs("div",{className:"dept-info",children:[a.jsx("h3",{children:k.name}),a.jsx("div",{className:"dept-id",children:k.id})]}),a.jsxs("div",{className:"dept-actions",children:[a.jsx("button",{className:"icon-btn edit",onClick:()=>E(k),title:"Edit department",children:a.jsx(Li,{size:16})}),a.jsx("button",{className:"icon-btn delete",onClick:()=>{F(k.id),T(!0)},title:"Delete department",children:a.jsx(Lr,{size:16})})]})]}),a.jsxs("div",{className:"tags",children:[a.jsx("div",{className:"tag",style:{background:G.bg,color:G.text},children:k.type}),a.jsx("div",{className:"tag",style:{background:k.status==="active"?"#d1fae5":"#f3f4f6",color:k.status==="active"?"#065f46":"#6b7280"},children:k.status})]}),a.jsxs("div",{className:"dept-details",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx(cu,{size:16}),a.jsxs("span",{children:[a.jsx("span",{className:"detail-label",children:"Head:"})," ",k.headOfDepartment,a.jsx("span",{style:{margin:"0 8px"},children:"•"}),a.jsx("span",{className:"detail-label",children:"Staff:"})," ",k.staffCount]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx(Ns,{size:16}),a.jsxs("span",{children:[a.jsx("span",{className:"detail-label",children:"Active Jobs:"})," ",k.activeJobs]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx(Cr,{size:16}),a.jsxs("span",{children:[a.jsx("span",{className:"detail-label",children:"Hours:"})," ",k.workingHours]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx(Tj,{size:16}),a.jsx("span",{children:k.location})]})]}),a.jsxs("div",{className:"utilization-section",children:[a.jsxs("div",{className:"utilization-header",children:[a.jsx("span",{className:"utilization-label",children:"Utilization"}),a.jsxs("span",{className:"utilization-value",children:[k.utilization,"%"]})]}),a.jsx("div",{className:"progress-bar",children:a.jsx("div",{className:"progress-fill",style:{width:`${k.utilization}%`,background:X(k.utilization)}})})]}),k.equipment&&k.equipment.length>0&&a.jsxs("div",{className:"equipment-section",children:[a.jsx("div",{className:"equipment-label",children:"Equipment:"}),a.jsx("div",{className:"equipment-tags",children:k.equipment.map((de,Ke)=>a.jsx("div",{className:"equipment-tag",children:de},Ke))})]}),a.jsxs("div",{className:"budget-section",children:[a.jsx("span",{className:"budget-label",children:"Annual Budget:"}),a.jsxs("span",{className:"budget-value",children:["$",k.budget.toLocaleString()]})]})]},k.id)})})]})]}),o&&a.jsx("div",{className:"modal-overlay",onClick:()=>{c(!1),ie()},children:a.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:f?"Edit Department":"Create New Department"}),a.jsx("button",{className:"modal-close",onClick:()=>{c(!1),ie()},children:a.jsx(Jn,{size:20})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Department Name ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:`form-input ${y.name?"error":""}`,placeholder:"e.g., Printing Department",value:j.name,onChange:k=>v({...j,name:k.target.value})}),y.name&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),y.name]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Department Type ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("div",{className:"type-selection",children:["production","support","management"].map(k=>a.jsx("div",{className:`type-option ${j.type===k?"selected":""}`,onClick:()=>v({...j,type:k}),children:k},k))})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Head of Department ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:`form-input ${y.headOfDepartment?"error":""}`,placeholder:"e.g., John Smith",value:j.headOfDepartment,onChange:k=>v({...j,headOfDepartment:k.target.value})}),y.headOfDepartment&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),y.headOfDepartment]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Location ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:`form-input ${y.location?"error":""}`,placeholder:"e.g., Building A - Floor 1",value:j.location,onChange:k=>v({...j,location:k.target.value})}),y.location&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),y.location]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Working Hours ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:`form-input ${y.workingHours?"error":""}`,placeholder:"e.g., 08:00 - 18:00 or 24/7 (3 shifts)",value:j.workingHours,onChange:k=>v({...j,workingHours:k.target.value})}),y.workingHours&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),y.workingHours]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Staff Count"}),a.jsx("input",{type:"number",className:"form-input",placeholder:"0",value:j.staffCount,onChange:k=>v({...j,staffCount:k.target.value}),min:"0"}),a.jsx("div",{className:"form-helper",children:"Current number of staff members"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Annual Budget (USD) ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"number",className:`form-input ${y.budget?"error":""}`,placeholder:"e.g., 150000",value:j.budget,onChange:k=>v({...j,budget:k.target.value}),min:"0",step:"1000"}),y.budget&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),y.budget]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Equipment"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"e.g., Digital Press, Flexo Press, Offset Press",value:j.equipment,onChange:k=>v({...j,equipment:k.target.value})}),a.jsx("div",{className:"form-helper",children:"Separate equipment names with commas"})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{c(!1),ie()},children:"Cancel"}),a.jsx("button",{className:"btn btn-primary",onClick:b,disabled:R,children:R?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"loading-spinner",style:{width:16,height:16,borderWidth:2}}),"Saving..."]}):a.jsxs(a.Fragment,{children:[a.jsx(la,{size:18}),f?"Update Department":"Create Department"]})})]})]})}),u&&a.jsx("div",{className:"modal-overlay",onClick:()=>d(!1),children:a.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:"Resource Allocation"}),a.jsx("button",{className:"modal-close",onClick:()=>d(!1),children:a.jsx(Jn,{size:20})})]}),a.jsx("div",{className:"modal-body",children:n.length===0?a.jsxs("div",{className:"empty-state",style:{padding:"40px 20px"},children:[a.jsx("div",{className:"empty-icon",style:{width:60,height:60},children:a.jsx(Ns,{size:30})}),a.jsx("div",{className:"empty-title",style:{fontSize:18},children:"No Resources"}),a.jsx("div",{className:"empty-description",children:"No resources have been added yet."})]}):a.jsx("div",{className:"resource-grid",children:n.map(k=>{const G=k.allocated/k.quantity*100;return a.jsxs("div",{className:"resource-card",children:[a.jsxs("div",{className:"resource-header",children:[a.jsxs("div",{children:[a.jsx("div",{className:"resource-name",children:k.name}),a.jsxs("div",{className:"resource-type",children:["Type: ",k.type]})]}),a.jsx("div",{className:"resource-id",children:k.id})]}),a.jsxs("div",{className:"resource-stats",children:[a.jsxs("div",{children:[a.jsx("span",{className:"resource-stat-label",children:"Allocated: "}),a.jsxs("span",{className:"resource-stat-value",children:[k.allocated," ",k.unit]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"resource-stat-label",children:"Total: "}),a.jsxs("span",{className:"resource-stat-value",children:[k.quantity," ",k.unit]})]})]}),a.jsx("div",{className:"progress-bar",children:a.jsx("div",{className:"progress-fill",style:{width:`${G}%`,background:G>=80?"#ef4444":G>=60?"#f59e0b":"#10b981"}})}),a.jsxs("div",{style:{textAlign:"right",fontSize:12,color:"#6b7280",marginTop:4},children:[G.toFixed(0),"% utilized"]})]},k.id)})})}),a.jsx("div",{className:"modal-footer",children:a.jsx("button",{className:"btn btn-primary",onClick:()=>d(!1),children:"Close"})})]})}),_&&a.jsx("div",{className:"modal-overlay",onClick:()=>{T(!1),F(null)},children:a.jsxs("div",{className:"confirm-dialog",onClick:k=>k.stopPropagation(),children:[a.jsx("div",{className:"confirm-icon",children:a.jsx($e,{size:28})}),a.jsx("h3",{className:"confirm-title",children:"Delete Department?"}),a.jsx("p",{className:"confirm-message",children:"Are you sure you want to delete this department? This action cannot be undone."}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{T(!1),F(null)},children:"Cancel"}),a.jsxs("button",{className:"btn btn-danger",onClick:D,children:[a.jsx(Lr,{size:18}),"Delete"]})]})]})})]})}function Bj(){var Sn;const t=Gs(),[e,n]=P.useState([]),[r,s]=P.useState([]),[i,o]=P.useState([]),[c,u]=P.useState(new Date),[d,f]=P.useState(new Date),[m,g]=P.useState(!1),[I,R]=P.useState(!1),[N,O]=P.useState(null),[w,_]=P.useState(!0),[T,V]=P.useState(!1),[F,j]=P.useState(""),[v,y]=P.useState(!1),[S,C]=P.useState(null),[b,D]=P.useState({name:"",startTime:"08:00",endTime:"16:00",color:"#3B82F6",description:"",maxStaff:"10",department:"",breakDuration:"30"}),[E,ie]=P.useState({shiftId:"",staffName:"",staffDocId:"",staffId:"",frequency:"single",date:new Date().toISOString().split("T")[0],endDate:new Date().toISOString().split("T")[0],notes:""}),[ge,Te]=P.useState(null),[q,$]=P.useState(!1),[Y,X]=P.useState(null),[ue,k]=P.useState(!1),[G,de]=P.useState({}),[Ke,ke]=P.useState(null),[qe,Qe]=P.useState(!1),[Ct,Wn]=P.useState(!0),[Nt,At]=P.useState(!0),uo=["#3B82F6","#8B5CF6","#EC4899","#EF4444","#F59E0B","#10B981","#06B6D4","#6366F1","#84CC16","#F97316"];P.useEffect(()=>{const A=Ie.onAuthStateChanged(ae=>{ae||t("/login")});return localStorage.getItem("adminToken")||t("/login"),()=>A()},[t]),P.useEffect(()=>{const A=je=>{const Le={};for(const Ye of Object.keys(je)){const ln=je[Ye];ln&&typeof ln=="object"&&typeof ln.toDate=="function"?Le[Ye]=ln.toDate().toLocaleDateString():ln&&typeof ln=="object"&&!Array.isArray(ln)?Le[Ye]=A(ln):Le[Ye]=ln}return Le},J=sr(St(_e,"shifts"),qs("createdAt","desc")),ae=xn(J,je=>{const Le=je.docs.map(Ye=>({id:Ye.id,...A(Ye.data())}));n(Le),_(!1)}),te=sr(St(_e,"assignments"),qs("createdAt","desc")),ne=xn(te,je=>{const Le=je.docs.map(Ye=>({id:Ye.id,...A(Ye.data())}));o(Le)}),ee=sr(St(_e,"staff")),at=xn(ee,je=>{const Le=je.docs.map(Ye=>({id:Ye.id,staffId:Ye.data().staffId||Ye.id,name:Ye.data().name||"",department:Ye.data().department||"",role:Ye.data().role||""}));s(Le)});return()=>{ae(),ne(),at()}},[]);const Gn=A=>{const J=A.getFullYear(),ae=String(A.getMonth()+1).padStart(2,"0"),te=String(A.getDate()).padStart(2,"0");return`${J}-${ae}-${te}`},Qu=()=>{const A=new Date(d),J=A.getDay(),ae=A.getDate()-J+(J===0?-6:1);return A.setDate(ae),A.setHours(0,0,0,0),Array.from({length:7},(te,ne)=>{const ee=new Date(A);return ee.setDate(A.getDate()+ne),ee.setHours(0,0,0,0),ee})},ei=A=>{const J=new Date(d);J.setDate(J.getDate()+(A==="next"?7:-7)),J.setHours(12,0,0,0),f(J)},an=Qu(),rl=()=>{const A={};return b.name.trim()||(A.name="Shift name is required"),b.startTime||(A.startTime="Start time is required"),b.endTime||(A.endTime="End time is required"),b.startTime===b.endTime&&(A.endTime="End time must be different from start time"),de(A),Object.keys(A).length===0},ot=()=>{const A={};return E.shiftId||(A.shiftId="Please select a shift"),E.staffName.trim()||(A.staffName="Staff name is required"),E.staffId.trim()||(A.staffId="Staff ID is required"),E.date||(A.date="Start Date is required"),E.frequency!=="single"&&(E.endDate?new Date(E.endDate)<new Date(E.date)&&(A.endDate="End Date must be after Start Date"):A.endDate="End Date is required for recurring shifts"),de(A),Object.keys(A).length===0},ht=async()=>{if(rl()){V(!0);try{if(!(Ie!=null&&Ie.currentUser))throw new Error("not-authenticated: user must be signed in to write to Firestore");const A={name:b.name,startTime:b.startTime,endTime:b.endTime,color:b.color,description:b.description,maxStaff:parseInt(b.maxStaff)||10,assignedStaff:0,department:b.department,breakDuration:parseInt(b.breakDuration)||0,isActive:!0,createdAt:ve.now(),updatedAt:ve.now()};N?await Or(Pt(_e,"shifts",N.id),{...A,createdAt:N.createdAt,assignedStaff:N.assignedStaff}):await Ma(St(_e,"shifts"),A),Tn(),g(!1)}catch(A){console.error("Error saving shift:",A);const J=(A==null?void 0:A.code)||"",ae=(A==null?void 0:A.message)||String(A);alert(`Error saving shift (${J}): ${ae}`)}finally{V(!1)}}},ti=async()=>{if(S)try{await Va(Pt(_e,"shifts",S)),y(!1),C(null)}catch(A){console.error("Error deleting shift:",A),alert("Error deleting shift. Please try again.")}},Yu=A=>{var J,ae;O(A),D({name:A.name,startTime:A.startTime,endTime:A.endTime,color:A.color,description:A.description||"",maxStaff:((J=A.maxStaff)==null?void 0:J.toString())||"10",department:A.department||"",breakDuration:((ae=A.breakDuration)==null?void 0:ae.toString())||"30"}),g(!0)},Tn=()=>{D({name:"",startTime:"08:00",endTime:"16:00",color:"#3B82F6",description:"",maxStaff:"10",department:"",breakDuration:"30"}),de({}),O(null)},Ju=async()=>{if(ot()){V(!0);try{if(!(Ie!=null&&Ie.currentUser))throw new Error("not-authenticated: user must be signed in to write to Firestore");const A=[],J=new Date(E.date);if(E.frequency==="single")A.push(E.date);else{const ne=new Date(E.endDate);let ee=1;E.frequency==="weekly"?ee=7:E.frequency==="biweekly"&&(ee=14);let at=new Date(J);for(;at<=ne;)A.push(Gn(at)),at.setDate(at.getDate()+ee)}const ae=A.map(ne=>{const ee={shiftId:E.shiftId,staffName:E.staffName,staffId:E.staffId,date:ne,status:"scheduled",notes:E.notes,createdAt:ve.now()};return Ma(St(_e,"assignments"),ee)});await Promise.all(ae);const te=e.find(ne=>ne.id===E.shiftId);te&&await Or(Pt(_e,"shifts",te.id),{assignedStaff:(te.assignedStaff||0)+1,updatedAt:ve.now()}),gr(),R(!1)}catch(A){console.error("Error creating assignment:",A);const J=(A==null?void 0:A.code)||"",ae=(A==null?void 0:A.message)||String(A);alert(`Error creating assignment (${J}): ${ae}`)}finally{V(!1)}}},ys=async()=>{if(!(!ge||!(Ie!=null&&Ie.currentUser))){V(!0);try{await Or(Pt(_e,"assignments",ge.id),{staffName:ge.staffName,staffId:ge.staffId,date:ge.date,status:ge.status,notes:ge.notes||""}),$(!1),Te(null)}catch(A){console.error("Error updating assignment:",A),alert("Error updating assignment. Please try again.")}finally{V(!1)}}},ho=async()=>{if(!(!Y||!(Ie!=null&&Ie.currentUser)))try{const A=i.find(J=>J.id===Y);if(await Va(Pt(_e,"assignments",Y)),A){const J=e.find(ae=>ae.id===A.shiftId);J&&J.assignedStaff&&J.assignedStaff>0&&await Or(Pt(_e,"shifts",J.id),{assignedStaff:J.assignedStaff-1})}k(!1),X(null)}catch(A){console.error("Error deleting assignment:",A),alert("Error deleting assignment. Please try again.")}},sl=async A=>{if(!(Ie!=null&&Ie.currentUser))return;const J=["scheduled","completed","absent"],ae=J.indexOf(A.status),te=J[(ae+1)%J.length];try{await Or(Pt(_e,"assignments",A.id),{status:te,updatedAt:ve.now()})}catch(ne){console.error("Error toggling status:",ne)}},gr=()=>{ie({shiftId:"",staffName:"",staffDocId:"",staffId:"",frequency:"single",date:new Date().toISOString().split("T")[0],endDate:new Date().toISOString().split("T")[0],notes:""}),de({})},Xu=(A,J)=>{const[ae,te]=A.split(":").map(Number),[ne,ee]=J.split(":").map(Number);let at=ne-ae,je=ee-te;return je<0&&(at--,je+=60),`${at}h ${je>0?`${je}m`:""}`},ni=e.filter(A=>A.name.toLowerCase().includes(F.toLowerCase())||A.department&&A.department.toLowerCase().includes(F.toLowerCase())),il=e.filter(A=>A.isActive),fo=e.reduce((A,J)=>A+(J.assignedStaff||0),0),Kn=e.reduce((A,J)=>A+(J.maxStaff||0),0),po=Kn>0?Math.round(fo/Kn*100):0,mo=()=>{const A=e.map(ne=>`${ne.name},${ne.startTime},${ne.endTime},${ne.assignedStaff||0},${ne.maxStaff||0}`).join(`
`),J=new Blob([`Name,Start Time,End Time,Assigned,Capacity
${A}`],{type:"text/csv"}),ae=window.URL.createObjectURL(J),te=document.createElement("a");te.href=ae,te.download="shift-schedule.csv",te.click()};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          background: white;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        /* Header Styles */
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .header-content {
          position: relative;
          z-index: 1;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 30px;
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .header h1 {
          font-size: 36px;
          font-weight: 700;
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
        }

        .btn-primary {
          background: white;
          color: #667eea;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .btn-danger {
          background: #ef4444;
          color: white;
        }

        .btn-danger:hover {
          background: #dc2626;
        }

        .btn-ghost {
          background: transparent;
          color: #6b7280;
          padding: 8px 16px;
        }

        .btn-ghost:hover {
          background: #f3f4f6;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-icon {
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Search Bar */
        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 12px;
          background: rgba(255,255,255,0.95);
          color: #1f2937;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: white;
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
        }

        /* Main Content */
        .main-content {
          padding: 32px 40px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--stat-color), transparent);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
          border-color: var(--stat-color);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: var(--stat-bg);
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        /* Calendar Week View */
        .calendar-section {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          border: 2px solid #f3f4f6;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .calendar-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .week-nav {
          display: flex;
          gap: 8px;
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
        }

        .day-card {
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          border: 2px solid #e5e7eb;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .day-card:hover {
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }

        .day-card.today {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: #667eea;
        }

        .day-weekday {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
          opacity: 0.7;
        }

        .day-date {
          font-size: 24px;
          font-weight: 700;
        }

        .day-assignments {
          margin-top: 8px;
          font-size: 11px;
          opacity: 0.8;
        }

        /* Action Buttons Section */
        .action-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .action-btn {
          background: white;
          border: 2px solid #e5e7eb;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-weight: 600;
          color: #1f2937;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:hover {
          border-color: #667eea;
          background: #f9fafb;
          transform: translateY(-2px);
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
        }

        /* Shift Cards */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
        }

        .shift-grid {
          display: grid;
          gap: 20px;
        }

        .shift-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 2px solid #f3f4f6;
          transition: all 0.3s ease;
          animation: scaleIn 0.3s ease-in-out;
          position: relative;
          overflow: hidden;
        }

        .shift-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: var(--shift-color);
        }

        .shift-card:hover {
          border-color: #e5e7eb;
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }

        .shift-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .shift-info {
          flex: 1;
        }

        .shift-name {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .shift-badge {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--shift-color);
          box-shadow: 0 0 0 3px rgba(var(--shift-color-rgb), 0.2);
        }

        .shift-time {
          font-size: 15px;
          color: #6b7280;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .shift-duration {
          background: #f3f4f6;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }

        .shift-actions {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f3f4f6;
        }

        .icon-btn:hover {
          transform: scale(1.1);
        }

        .icon-btn.edit:hover {
          background: #dbeafe;
          color: #3b82f6;
        }

        .icon-btn.delete:hover {
          background: #fee2e2;
          color: #ef4444;
        }

        .shift-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          padding: 20px;
          background: #f9fafb;
          border-radius: 12px;
          margin-top: 20px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .detail-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: var(--shift-color);
        }

        .detail-content {
          flex: 1;
        }

        .detail-label {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 2px;
        }

        .detail-value {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
        }

        .staff-capacity {
          margin-top: 16px;
        }

        .capacity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .capacity-label {
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }

        .capacity-value {
          font-size: 13px;
          font-weight: 700;
          color: #1f2937;
        }

        .progress-bar {
          height: 8px;
          background: #f3f4f6;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 0.5s ease;
          background: var(--shift-color);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          z-index: 1000;
          padding: 60px 20px;
          overflow-y: auto;
          animation: fadeIn 0.2s ease-in-out;
        }

        .modal {
          background: white;
          border-radius: 24px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: scaleIn 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 28px 32px;
          border-bottom: 2px solid #f3f4f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .modal-close {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: #f3f4f6;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #e5e7eb;
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 32px;
          flex: 1;
          overflow-y: auto;
          min-height: 0;
        }

        .modal-body::-webkit-scrollbar {
          width: 8px;
        }

        .modal-body::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }

        .modal-body::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }

        .modal-footer {
          padding: 24px 32px;
          border-top: 2px solid #f3f4f6;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          background: #f9fafb;
          flex-shrink: 0;
        }

        /* Form Styles */
        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .form-label .required {
          color: #ef4444;
          margin-left: 2px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          color: #1f2937;
          transition: all 0.2s ease;
          background: #f9fafb;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-input.error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .form-error {
          color: #ef4444;
          font-size: 13px;
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .form-helper {
          color: #6b7280;
          font-size: 13px;
          margin-top: 6px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        /* Color Picker */
        .color-picker {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .color-option {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.2s ease;
          position: relative;
        }

        .color-option:hover {
          transform: scale(1.1);
        }

        .color-option.selected {
          border-color: #1f2937;
          transform: scale(1.15);
        }

        .color-option.selected::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 20px;
          font-weight: bold;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        /* Loading State */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 4px solid #f3f4f6;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-text {
          margin-top: 16px;
          color: #6b7280;
          font-size: 15px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
        }

        .empty-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
        }

        .empty-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .empty-description {
          font-size: 15px;
          color: #6b7280;
          margin-bottom: 24px;
        }

        /* Confirm Dialog */
        .confirm-dialog {
          background: white;
          border-radius: 20px;
          padding: 32px;
          max-width: 440px;
          width: 100%;
          animation: scaleIn 0.3s ease-in-out;
        }

        .confirm-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #fee2e2;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .confirm-title {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
          margin-bottom: 12px;
        }

        .confirm-message {
          font-size: 15px;
          color: #6b7280;
          text-align: center;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .confirm-actions {
          display: flex;
          gap: 12px;
        }

        .confirm-actions .btn {
          flex: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          body {
            padding: 10px;
          }

          .header {
            padding: 24px 20px;
          }

          .header h1 {
            font-size: 24px;
          }

          .main-content {
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .week-grid {
            grid-template-columns: repeat(7, 1fr);
            gap: 6px;
          }

          .day-card {
            padding: 8px;
          }

          .day-date {
            font-size: 18px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .modal {
            max-width: 100%;
            margin: 10px;
          }

          .modal-body {
            padding: 20px;
          }

          .action-buttons {
            grid-template-columns: 1fr;
          }
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        .slide-in {
          animation: slideIn 0.3s ease-in-out;
        }
        .table-container {
          background: white;
          border-radius: 16px;
          border: 2px solid #f3f4f6;
          overflow: hidden;
          margin-bottom: 32px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background: #f9fafb;
          padding: 16px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #e5e7eb;
        }

        td {
          padding: 16px;
          font-size: 15px;
          color: #1f2937;
          border-bottom: 1px solid #e5e7eb;
        }

        tbody tr:last-child td {
          border-bottom: none;
        }

        tbody tr:hover {
          background: #f9fafb;
        }

        .status-badge {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .status-scheduled {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-completed {
          background: #d1fae5;
          color: #065f46;
        }

        .status-absent {
          background: #fee2e2;
          color: #b91c1c;
        }
        .register-container {
          background: white;
          border-radius: 20px;
          border: 2px solid #f3f4f6;
          overflow: hidden;
          margin-bottom: 40px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .reg-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
        }

        .reg-th {
          background: #f8fafc;
          padding: 20px 16px;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .reg-th.staff-col {
          text-align: left;
          width: 250px;
          position: sticky;
          left: 0;
          background: #f8fafc;
          border-right: 2px solid #e2e8f0;
          z-index: 20;
        }

        .reg-td {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
          text-align: center;
          transition: background 0.2s;
        }

        .reg-td.staff-col {
          text-align: left;
          position: sticky;
          left: 0;
          background: white;
          border-right: 2px solid #f1f5f9;
          z-index: 5;
        }

        .reg-row:hover .reg-td {
          background: #f8fafc;
        }

        .reg-row:hover .reg-td.staff-col {
          background: #f1f5f9;
        }

        .attendance-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 8px;
          border-radius: 12px;
          transition: all 0.2s;
          user-select: none;
        }

        .attendance-cell:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .reg-status {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .status-dot-scheduled {
          background: #eff6ff;
          color: #3b82f6;
          border: 2px solid #dbeafe;
        }

        .status-dot-completed {
          background: #f0fdf4;
          color: #22c55e;
          border: 2px solid #dcfce7;
        }

        .status-dot-absent {
          background: #fef2f2;
          color: #ef4444;
          border: 2px solid #fee2e2;
        }

        .reg-day-info {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
        }

        .no-assign {
          color: #cbd5e1;
          font-size: 12px;
          font-style: italic;
        }

        .register-header {
          padding: 24px 32px;
          background: white;
          border-bottom: 2px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}),a.jsxs("div",{className:"container",children:[a.jsx("div",{className:"header",children:a.jsxs("div",{className:"header-content",children:[a.jsxs("div",{className:"header-top",children:[a.jsxs("div",{className:"header-left",style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>t(-1),title:"Back",children:a.jsx(vb,{size:18})}),a.jsxs("div",{className:"header-title",children:[a.jsx(Cr,{size:36}),a.jsx("h1",{children:"Shift Scheduling"})]})]}),a.jsxs("div",{className:"header-actions",children:[a.jsxs("button",{className:"btn btn-secondary",onClick:mo,children:[a.jsx(pj,{size:18}),"Export Schedule"]}),a.jsxs("button",{className:"btn btn-primary",onClick:()=>{Tn(),g(!0)},children:[a.jsx(es,{size:20}),"New Shift"]})]})]}),a.jsxs("div",{className:"search-container",children:[a.jsx(Em,{size:20,className:"search-icon"}),a.jsx("input",{type:"text",className:"search-input",placeholder:"Search shifts, departments...",value:F,onChange:A=>j(A.target.value)})]})]})}),a.jsxs("div",{className:"main-content",children:[a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#667eea","--stat-bg":"#e0e7ff"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(ej,{size:24,color:"#667eea"})}),a.jsx("div",{className:"stat-value",children:il.length}),a.jsx("div",{className:"stat-label",children:"Active Shifts"})]}),a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#10b981","--stat-bg":"#d1fae5"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(cu,{size:24,color:"#10b981"})}),a.jsx("div",{className:"stat-value",children:fo}),a.jsx("div",{className:"stat-label",children:"Staff Assigned"})]}),a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#f59e0b","--stat-bg":"#fef3c7"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Tm,{size:24,color:"#f59e0b"})}),a.jsxs("div",{className:"stat-value",children:[po,"%"]}),a.jsx("div",{className:"stat-label",children:"Utilization Rate"})]}),a.jsxs("div",{className:"stat-card",style:{"--stat-color":"#8b5cf6","--stat-bg":"#ede9fe"},children:[a.jsx("div",{className:"stat-icon",children:a.jsx(lu,{size:24,color:"#8b5cf6"})}),a.jsx("div",{className:"stat-value",children:Kn}),a.jsx("div",{className:"stat-label",children:"Total Capacity"})]})]}),a.jsxs("div",{className:"calendar-section",children:[a.jsxs("div",{className:"calendar-header",children:[a.jsxs("h2",{className:"calendar-title",children:[a.jsx(pc,{size:24,style:{display:"inline",marginRight:8}}),"Week Overview"]}),a.jsxs("div",{className:"week-nav",children:[a.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>ei("prev"),"aria-label":"Previous week",title:"Previous week",children:a.jsx(ij,{size:20})}),a.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>ei("next"),"aria-label":"Next week",title:"Next week",children:a.jsx(aj,{size:20})})]})]}),a.jsx("div",{className:"week-grid",children:an.map(A=>{const J=A.toDateString()===new Date().toDateString(),ae=Gn(A),te=i.filter(ne=>ne.date===ae);return a.jsxs("div",{className:`day-card ${J?"today":""}`,children:[a.jsx("div",{className:"day-weekday",children:A.toLocaleDateString("en-US",{weekday:"short"})}),a.jsx("div",{className:"day-date",children:A.getDate()}),te.length>0&&a.jsxs("div",{className:"day-assignments",children:[te.length," assigned"]})]},A.toISOString())})})]}),a.jsxs("div",{className:"action-buttons",children:[a.jsxs("button",{className:"action-btn primary",onClick:()=>R(!0),children:[a.jsx(cu,{size:20}),"Assign Staff to Shift"]}),a.jsxs("button",{className:"action-btn",onClick:()=>{Tn(),g(!0)},children:[a.jsx(es,{size:20}),"Create New Shift"]})]}),a.jsx("div",{className:"section-header",children:a.jsxs("h2",{className:"section-title",children:["Defined Shifts (",ni.length,")"]})}),w&&a.jsxs("div",{className:"loading-container",children:[a.jsx("div",{className:"loading-spinner"}),a.jsx("div",{className:"loading-text",children:"Loading shifts..."})]}),!w&&ni.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:a.jsx(Cr,{size:40})}),a.jsx("div",{className:"empty-title",children:"No shifts found"}),a.jsx("div",{className:"empty-description",children:F?"Try adjusting your search":"Get started by creating your first shift"}),!F&&a.jsxs("button",{className:"btn btn-primary",onClick:()=>{Tn(),g(!0)},children:[a.jsx(es,{size:20}),"Create First Shift"]})]}),!w&&ni.length>0&&a.jsx("div",{className:"shift-grid",children:ni.map(A=>{const J=A.maxStaff?Math.round((A.assignedStaff||0)/A.maxStaff*100):0;return a.jsxs("div",{className:"shift-card",style:{"--shift-color":A.color},children:[a.jsxs("div",{className:"shift-header",children:[a.jsxs("div",{className:"shift-info",children:[a.jsxs("div",{className:"shift-name",children:[a.jsx("div",{className:"shift-badge"}),A.name]}),a.jsxs("div",{className:"shift-time",children:[a.jsx(Cr,{size:16}),A.startTime," – ",A.endTime,a.jsx("span",{className:"shift-duration",children:Xu(A.startTime,A.endTime)})]}),A.description&&a.jsx("p",{style:{marginTop:8,fontSize:14,color:"#6b7280",lineHeight:1.5},children:A.description})]}),a.jsxs("div",{className:"shift-actions",children:[a.jsx("button",{className:"icon-btn edit",onClick:()=>Yu(A),title:"Edit shift","aria-label":"Edit shift",children:a.jsx(Li,{size:16})}),a.jsx("button",{className:"icon-btn delete",onClick:()=>{C(A.id),y(!0)},title:"Delete shift","aria-label":"Delete shift",children:a.jsx(Lr,{size:16})})]})]}),a.jsxs("div",{className:"shift-details",children:[A.department&&a.jsxs("div",{className:"detail-item",children:[a.jsx("div",{className:"detail-icon",children:a.jsx(lu,{size:18})}),a.jsxs("div",{className:"detail-content",children:[a.jsx("div",{className:"detail-label",children:"Department"}),a.jsx("div",{className:"detail-value",children:A.department})]})]}),A.breakDuration!==void 0&&a.jsxs("div",{className:"detail-item",children:[a.jsx("div",{className:"detail-icon",children:a.jsx(Cr,{size:18})}),a.jsxs("div",{className:"detail-content",children:[a.jsx("div",{className:"detail-label",children:"Break Time"}),a.jsxs("div",{className:"detail-value",children:[A.breakDuration," mins"]})]})]})]}),a.jsxs("div",{className:"staff-capacity",children:[a.jsxs("div",{className:"capacity-header",children:[a.jsx("span",{className:"capacity-label",children:"Staff Capacity"}),a.jsxs("span",{className:"capacity-value",children:[A.assignedStaff||0," / ",A.maxStaff||0]})]}),a.jsx("div",{className:"progress-bar",children:a.jsx("div",{className:"progress-fill",style:{width:`${J}%`,background:A.color}})})]})]},A.id)})}),a.jsxs("div",{className:"section-header",style:{marginTop:"40px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("div",{children:[a.jsx("h2",{className:"section-title",children:"Staff Attendance Master Roster"}),a.jsx("p",{style:{color:"#64748b",fontSize:"14px",marginTop:"4px"},children:Nt?`Summary of staff members assigned for the current week (${an[0].toLocaleDateString()} - ${an[6].toLocaleDateString()})`:"Displaying all staff with upcoming shift assignments"})]}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{onClick:()=>At(!0),style:{padding:"6px 16px",fontSize:"13px",fontWeight:600,borderRadius:"8px",border:"1px solid #e2e8f0",background:Nt?"#3b82f6":"white",color:Nt?"white":"#64748b",cursor:"pointer",transition:"all 0.2s"},children:"This Week"}),a.jsx("button",{onClick:()=>At(!1),style:{padding:"6px 16px",fontSize:"13px",fontWeight:600,borderRadius:"8px",border:"1px solid #e2e8f0",background:Nt?"white":"#3b82f6",color:Nt?"#64748b":"white",cursor:"pointer",transition:"all 0.2s"},children:"All Upcoming"})]})]}),a.jsx("div",{className:"register-container",children:a.jsxs("table",{className:"reg-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"reg-th",style:{textAlign:"left",paddingLeft:"32px"},children:"Staff Member"}),a.jsx("th",{className:"reg-th",children:"Staff ID"}),a.jsx("th",{className:"reg-th",children:"Department"}),a.jsx("th",{className:"reg-th",children:"Shifts This Week"}),a.jsx("th",{className:"reg-th",children:"Actions"})]})}),a.jsx("tbody",{children:(()=>{const A=Gn(an[0]),J=Gn(an[6]),te=Array.from(new Set(i.filter(ne=>Nt?ne.date>=A&&ne.date<=J:ne.date>=A).map(ne=>ne.staffId))).map(ne=>{var je;const ee=r.find(Le=>Le.staffId===ne),at=i.filter(Le=>Le.staffId===ne?Nt?Le.date>=A&&Le.date<=J:Le.date>=A:!1);return{id:(ee==null?void 0:ee.id)||`temp-${ne}`,staffId:ne,name:(ee==null?void 0:ee.name)||((je=at[0])==null?void 0:je.staffName)||"Unknown Staff",department:(ee==null?void 0:ee.department)||"General",role:(ee==null?void 0:ee.role)||"Staff",shiftCount:at.length}}).sort((ne,ee)=>ne.name.localeCompare(ee.name));return te.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:5,className:"reg-td",style:{padding:"60px"},children:a.jsx("div",{style:{color:"#94a3b8",textAlign:"center"},children:Nt?"No staff members assigned for this week":"No upcoming shift assignments found"})})}):te.map(ne=>a.jsxs("tr",{className:"reg-row",children:[a.jsx("td",{className:"reg-td",style:{textAlign:"left",paddingLeft:"32px"},children:a.jsx("div",{style:{fontWeight:700,color:"#1e293b"},children:ne.name})}),a.jsx("td",{className:"reg-td",children:a.jsx("span",{style:{padding:"4px 10px",background:"#f1f5f9",borderRadius:"6px",fontSize:"12px",fontWeight:600,color:"#475569"},children:ne.staffId})}),a.jsx("td",{className:"reg-td",style:{color:"#64748b"},children:ne.department||"General"}),a.jsx("td",{className:"reg-td",children:a.jsx("span",{style:{fontWeight:700,color:"#3b82f6",background:"#eff6ff",padding:"4px 12px",borderRadius:"20px",fontSize:"13px"},children:ne.shiftCount})}),a.jsx("td",{className:"reg-td",children:a.jsxs("button",{className:"btn btn-primary",style:{padding:"8px 16px",fontSize:"13px",display:"flex",alignItems:"center",gap:"8px"},onClick:()=>{ke(ne),Qe(!0)},children:[a.jsx(la,{size:16}),"Mark Attendance"]})})]},ne.id))})()})]})})]})]}),m&&a.jsx("div",{className:"modal-overlay",onClick:()=>{g(!1),Tn()},children:a.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:N?"Edit Shift":"Create New Shift"}),a.jsx("button",{className:"modal-close",onClick:()=>{g(!1),Tn()},title:"Close modal","aria-label":"Close modal",children:a.jsx(Jn,{size:20})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Shift Name ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:`form-input ${G.name?"error":""}`,placeholder:"e.g., Morning Shift, Night Shift",value:b.name,onChange:A=>D({...b,name:A.target.value})}),G.name&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.name]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Start Time ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"time",className:`form-input ${G.startTime?"error":""}`,value:b.startTime,onChange:A=>D({...b,startTime:A.target.value})}),G.startTime&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.startTime]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["End Time ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"time",className:`form-input ${G.endTime?"error":""}`,value:b.endTime,onChange:A=>D({...b,endTime:A.target.value})}),G.endTime&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.endTime]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Shift Color"}),a.jsx("div",{className:"color-picker",children:uo.map(A=>a.jsx("div",{className:`color-option ${b.color===A?"selected":""}`,style:{background:A},onClick:()=>D({...b,color:A})},A))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Description"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"Optional shift description",value:b.description,onChange:A=>D({...b,description:A.target.value})})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Max Staff"}),a.jsx("input",{type:"number",className:"form-input",placeholder:"10",value:b.maxStaff,onChange:A=>D({...b,maxStaff:A.target.value}),min:"1"}),a.jsx("div",{className:"form-helper",children:"Maximum number of staff for this shift"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Break Duration (mins)"}),a.jsx("input",{type:"number",className:"form-input",placeholder:"30",value:b.breakDuration,onChange:A=>D({...b,breakDuration:A.target.value}),min:"0"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Department"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"e.g., Production, Quality Control",value:b.department,onChange:A=>D({...b,department:A.target.value})})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{g(!1),Tn()},children:"Cancel"}),a.jsx("button",{className:"btn btn-primary",onClick:ht,disabled:T,children:T?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"loading-spinner",style:{width:16,height:16,borderWidth:2}}),"Saving..."]}):a.jsxs(a.Fragment,{children:[a.jsx(Cj,{size:18}),N?"Update Shift":"Create Shift"]})})]})]})}),I&&a.jsx("div",{className:"modal-overlay",onClick:()=>{R(!1),gr()},children:a.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:"Assign Staff to Shift"}),a.jsx("button",{className:"modal-close",onClick:()=>{R(!1),gr()},title:"Close modal","aria-label":"Close modal",children:a.jsx(Jn,{size:20})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Select Shift ",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("select",{className:`form-input ${G.shiftId?"error":""}`,value:E.shiftId,onChange:A=>ie({...E,shiftId:A.target.value}),title:"Select a shift to assign staff","aria-label":"Select shift",children:[a.jsx("option",{value:"",children:"Choose a shift..."}),e.map(A=>a.jsxs("option",{value:A.id,children:[A.name," (",A.startTime," - ",A.endTime,")"]},A.id))]}),G.shiftId&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.shiftId]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Staff Member ",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("select",{className:`form-input ${G.staffName?"error":""}`,value:E.staffDocId,onChange:A=>{const J=A.target.value,ae=r.find(te=>te.id===J);ie({...E,staffDocId:J,staffId:ae?ae.staffId:"",staffName:ae?ae.name:""})},children:[a.jsx("option",{value:"",children:"Choose staff member..."}),r.map(A=>a.jsxs("option",{value:A.id,children:[A.name," ",A.department?`(${A.department})`:""]},A.id))]}),G.staffName&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.staffName]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Staff ID ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:`form-input ${G.staffId?"error":""}`,placeholder:"e.g., EMP-001 (Auto-filled)",value:E.staffId,readOnly:!0,style:{backgroundColor:"#f3f4f6",cursor:"not-allowed"}}),G.staffId&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.staffId]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Frequency ",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("div",{style:{display:"flex",gap:"16px",marginTop:"8px"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[a.jsx("input",{type:"radio",name:"frequency",value:"single",checked:E.frequency==="single",onChange:A=>ie({...E,frequency:A.target.value})}),a.jsx("span",{style:{fontSize:"14px",color:"#374151"},children:"Single"})]}),a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[a.jsx("input",{type:"radio",name:"frequency",value:"daily",checked:E.frequency==="daily",onChange:A=>ie({...E,frequency:A.target.value})}),a.jsx("span",{style:{fontSize:"14px",color:"#374151"},children:"Daily"})]}),a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[a.jsx("input",{type:"radio",name:"frequency",value:"weekly",checked:E.frequency==="weekly",onChange:A=>ie({...E,frequency:A.target.value})}),a.jsx("span",{style:{fontSize:"14px",color:"#374151"},children:"Weekly"})]}),a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[a.jsx("input",{type:"radio",name:"frequency",value:"biweekly",checked:E.frequency==="biweekly",onChange:A=>ie({...E,frequency:A.target.value})}),a.jsx("span",{style:{fontSize:"14px",color:"#374151"},children:"Bi-weekly"})]})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Date ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"date",className:`form-input ${G.date?"error":""}`,value:E.date,onChange:A=>ie({...E,date:A.target.value})}),G.date&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.date]})]}),E.frequency!=="single"&&a.jsxs("div",{className:"form-group fade-in",children:[a.jsxs("label",{className:"form-label",children:["End Date ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"date",className:`form-input ${G.endDate?"error":""}`,value:E.endDate,onChange:A=>ie({...E,endDate:A.target.value}),min:E.date}),G.endDate&&a.jsxs("div",{className:"form-error",children:[a.jsx($e,{size:14}),G.endDate]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Notes (Optional)"}),a.jsx("input",{type:"text",className:"form-input",placeholder:"Any additional notes...",title:"Additional notes for this staff assignment","aria-label":"Notes",value:E.notes,onChange:A=>ie({...E,notes:A.target.value})})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{R(!1),gr()},children:"Cancel"}),a.jsx("button",{className:"btn btn-primary",onClick:Ju,disabled:T,children:T?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"loading-spinner",style:{width:16,height:16,borderWidth:2}}),"Assigning..."]}):a.jsxs(a.Fragment,{children:[a.jsx(la,{size:18}),"Assign Staff"]})})]})]})}),v&&a.jsx("div",{className:"modal-overlay",style:{zIndex:1100},onClick:()=>{y(!1),C(null)},children:a.jsxs("div",{className:"confirm-dialog",onClick:A=>A.stopPropagation(),children:[a.jsx("div",{className:"confirm-icon",children:a.jsx($e,{size:28})}),a.jsx("h3",{className:"confirm-title",children:"Delete Shift?"}),a.jsx("p",{className:"confirm-message",children:"Are you sure you want to delete this shift? This action cannot be undone and will remove all associated assignments."}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{y(!1),C(null)},children:"Cancel"}),a.jsxs("button",{className:"btn btn-danger",onClick:ti,children:[a.jsx(Lr,{size:18}),"Delete"]})]})]})}),ue&&a.jsx("div",{className:"modal-overlay",style:{zIndex:1100},onClick:()=>{k(!1),X(null)},children:a.jsxs("div",{className:"confirm-dialog",onClick:A=>A.stopPropagation(),children:[a.jsx("div",{className:"confirm-icon",style:{background:"#fee2e2",color:"#ef4444"},children:a.jsx($e,{size:28})}),a.jsx("h3",{className:"confirm-title",children:"Delete Assignment?"}),a.jsx("p",{className:"confirm-message",children:"Are you sure you want to delete this staff assignment? This will remove the staff member from this specific shift on this date."}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{k(!1),X(null)},children:"Cancel"}),a.jsxs("button",{className:"btn btn-danger",onClick:ho,children:[a.jsx(Lr,{size:18}),"Delete"]})]})]})}),q&&ge&&a.jsx("div",{className:"modal-overlay",style:{zIndex:1100},onClick:()=>{$(!1),Te(null)},children:a.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:"Edit Assignment"}),a.jsx("button",{className:"modal-close",onClick:()=>{$(!1),Te(null)},children:a.jsx(Jn,{size:20})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:["Staff Member ",a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("select",{className:"form-input",value:((Sn=r.find(A=>A.staffId===ge.staffId))==null?void 0:Sn.id)||"",onChange:A=>{const J=A.target.value,ae=r.find(te=>te.id===J);Te({...ge,staffId:ae?ae.staffId:"",staffName:ae?ae.name:""})},children:[a.jsx("option",{value:"",children:"Choose staff member..."}),r.map(A=>a.jsxs("option",{value:A.id,children:[A.name," ",A.department?`(${A.department})`:""]},A.id))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Date"}),a.jsx("input",{type:"date",className:"form-input",value:ge.date,onChange:A=>Te({...ge,date:A.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Status"}),a.jsxs("select",{className:"form-input",value:ge.status,onChange:A=>Te({...ge,status:A.target.value}),children:[a.jsx("option",{value:"scheduled",children:"Scheduled"}),a.jsx("option",{value:"completed",children:"Completed"}),a.jsx("option",{value:"absent",children:"Absent"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Notes"}),a.jsx("input",{type:"text",className:"form-input",value:ge.notes||"",onChange:A=>Te({...ge,notes:A.target.value})})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{$(!1),Te(null)},children:"Cancel"}),a.jsx("button",{className:"btn btn-primary",onClick:ys,disabled:T,children:T?"Saving...":"Save Changes"})]})]})}),ue&&a.jsx("div",{className:"modal-overlay",style:{zIndex:1100},onClick:()=>{k(!1),X(null)},children:a.jsxs("div",{className:"confirm-dialog",onClick:A=>A.stopPropagation(),children:[a.jsx("div",{className:"confirm-icon",children:a.jsx($e,{size:28})}),a.jsx("h3",{className:"confirm-title",children:"Delete Assignment?"}),a.jsx("p",{className:"confirm-message",children:"Are you sure you want to delete this specific shift assignment? This action cannot be undone."}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"btn btn-ghost",onClick:()=>{k(!1),X(null)},children:"Cancel"}),a.jsxs("button",{className:"btn btn-danger",onClick:ho,children:[a.jsx(Lr,{size:18}),"Delete"]})]})]})}),qe&&Ke&&a.jsx("div",{className:"modal-overlay",onClick:()=>{Qe(!1),ke(null)},children:a.jsxs("div",{className:"modal",style:{maxWidth:"600px"},onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},children:[a.jsxs("div",{children:[a.jsx("h2",{className:"modal-title",style:{color:"white"},children:"Attendance Register"}),a.jsxs("p",{style:{fontSize:"14px",opacity:.9},children:[Ke.name," • ",Ke.staffId]})]}),a.jsx("button",{className:"modal-close",style:{color:"white"},onClick:()=>{Qe(!1),ke(null)},children:a.jsx(Jn,{size:20})})]}),a.jsxs("div",{className:"modal-body",style:{maxHeight:"70vh",overflowY:"auto",padding:"0"},children:[a.jsxs("div",{style:{padding:"20px 32px",borderBottom:"1px solid #f1f5f9",background:"#f8fafc",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("p",{style:{fontSize:"13px",fontWeight:600,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em"},children:Ct?"Assignments for This Week":"All Upcoming Assignments"}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{onClick:()=>Wn(!0),style:{padding:"4px 12px",fontSize:"11px",fontWeight:600,borderRadius:"6px",border:"1px solid #e2e8f0",background:Ct?"#3b82f6":"white",color:Ct?"white":"#64748b",cursor:"pointer"},children:"This Week"}),a.jsx("button",{onClick:()=>Wn(!1),style:{padding:"4px 12px",fontSize:"11px",fontWeight:600,borderRadius:"6px",border:"1px solid #e2e8f0",background:Ct?"white":"#3b82f6",color:Ct?"#64748b":"white",cursor:"pointer"},children:"All Upcoming"})]})]}),(()=>{const A=Gn(an[0]),J=Gn(an[6]),ae=i.filter(te=>te.staffId===(Ke==null?void 0:Ke.staffId)?Ct?te.date>=A&&te.date<=J:te.date>=A:!1).sort((te,ne)=>te.date.localeCompare(ne.date));return ae.length===0?a.jsx("div",{style:{padding:"40px",textAlign:"center",color:"#94a3b8"},children:"No shifts assigned for this week."}):ae.map((te,ne)=>{const ee=e.find(je=>je.id===te.shiftId),at=new Date(te.date);return a.jsxs("div",{style:{padding:"20px 32px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:ne===ae.length-1?"none":"1px solid #f1f5f9",background:"white"},children:[a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsxs("div",{style:{textAlign:"center",minWidth:"50px",padding:"8px",background:"#f8fafc",borderRadius:"12px",border:"1px solid #e2e8f0"},children:[a.jsx("div",{style:{fontSize:"10px",fontWeight:700,color:"#94a3b8",textTransform:"uppercase"},children:at.toLocaleDateString("en-US",{weekday:"short"})}),a.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"#1e293b"},children:at.getDate()})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:700,color:"#1e293b"},children:(ee==null?void 0:ee.name)||"Shift"}),a.jsxs("div",{style:{fontSize:"12px",color:"#64748b",display:"flex",alignItems:"center",gap:"4px",marginTop:"2px"},children:[a.jsx(Cr,{size:12}),ee==null?void 0:ee.startTime," - ",ee==null?void 0:ee.endTime]})]})]}),a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx("button",{className:"btn btn-icon btn-ghost",style:{color:"#64748b",padding:"8px"},onClick:()=>{Te({...te}),$(!0)},title:"Edit Assignment",children:a.jsx(Li,{size:18})}),a.jsx("button",{className:"btn btn-icon btn-ghost",style:{color:"#ef4444",padding:"8px"},onClick:()=>{X(te.id),k(!0)},title:"Delete Assignment",children:a.jsx(Lr,{size:18})})]}),a.jsx("div",{onClick:()=>sl(te),style:{cursor:"pointer",transition:"transform 0.2s"},className:"attendance-toggle",children:a.jsxs("div",{className:`reg-status status-dot-${te.status}`,style:{width:"48px",height:"48px"},children:[te.status==="scheduled"&&a.jsx(Cr,{size:24}),te.status==="completed"&&a.jsx(la,{size:24}),te.status==="absent"&&a.jsx(Jn,{size:24})]})})]})]},te.id)})})()]}),a.jsx("div",{className:"modal-footer",style:{borderTop:"2px solid #f1f5f9",justifyContent:"center"},children:a.jsx("button",{className:"btn btn-primary",style:{width:"100%",padding:"12px"},onClick:()=>{Qe(!1),ke(null)},children:"Close Register"})})]})})]})}const th=()=>!!localStorage.getItem("adminToken"),qj=()=>a.jsx(jS,{children:a.jsxs(cS,{children:[a.jsx(Sr,{path:"/",element:a.jsx(V4,{})}),a.jsx(Sr,{path:"/dashboard",element:th()?a.jsx(B4,{}):a.jsx(jl,{to:"/"})}),a.jsx(Sr,{path:"/staff",element:th()?a.jsx(G4,{}):a.jsx(jl,{to:"/"})}),a.jsx(Sr,{path:"/assignments",element:th()?a.jsx(Uj,{}):a.jsx(jl,{to:"/"})}),a.jsx(Sr,{path:"/shifts",element:a.jsx(Bj,{})}),a.jsx(Sr,{path:"/departments",element:a.jsx($j,{})}),a.jsx(Sr,{path:"*",element:a.jsx(jl,{to:"/"})})]})}),Hj=nh.createRoot(document.getElementById("root"));Hj.render(a.jsx(tE.StrictMode,{children:a.jsx(qj,{})}));
