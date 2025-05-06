const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SignupView-Bfc2gj9-.js","assets/SignupView-D0A4EQhh.css","assets/AboutView-BRh8zDTz.js","assets/AboutView-CSIvawM9.css","assets/DashboardView-DYbg9CIV.js","assets/DashboardView-BTpTszeO.css","assets/IngredientRecipesView-aj4k7T27.js","assets/IngredientRecipesView-CgMc-woh.css","assets/SearchByIngredientView-BGsk4bhn.js","assets/SearchByIngredientView-uktT5QbK.css","assets/FavouritesView-Df7gSSOX.js","assets/FavouritesView-DVhrq6yP.css","assets/RecipeDetailsView-88ociads.js","assets/RecipeDetailsView-7O5lbH6j.css","assets/ShoppingListView-hRd4_4O7.js","assets/ShoppingListView-CXm-guEn.css","assets/RestaurantDetailsView-BXbfSEni.js","assets/RestaurantDetailsView-ZLjZctnD.css","assets/SearchRestaurantByMealView-DjlAHm8J.js","assets/SearchRestaurantByMealView-BYg9M7qq.css","assets/RestaurantMap-CaJfU6UL.js","assets/RestaurantMap-Cx-SyETe.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _l(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Zr=[],rn=()=>{},jy=()=>!1,na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yl=t=>t.startsWith("onUpdate:"),ht=Object.assign,vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$y=Object.prototype.hasOwnProperty,Re=(t,e)=>$y.call(t,e),le=Array.isArray,es=t=>ra(t)==="[object Map]",sp=t=>ra(t)==="[object Set]",fe=t=>typeof t=="function",$e=t=>typeof t=="string",ir=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",ip=t=>(De(t)||fe(t))&&fe(t.then)&&fe(t.catch),op=Object.prototype.toString,ra=t=>op.call(t),Hy=t=>ra(t).slice(8,-1),ap=t=>ra(t)==="[object Object]",El=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ys=_l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qy=/-(\w)/g,Ft=sa(t=>t.replace(qy,(e,n)=>n?n.toUpperCase():"")),zy=/\B([A-Z])/g,xr=sa(t=>t.replace(zy,"-$1").toLowerCase()),ia=sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Za=sa(t=>t?`on${ia(t)}`:""),Kn=(t,e)=>!Object.is(t,e),fo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Oh;const oa=()=>Oh||(Oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?Qy(r):Tl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||De(t))return t}const Wy=/;(?![^(]*\))/g,Ky=/:([^]+)/,Gy=/\/\*[^]*?\*\//g;function Qy(t){const e={};return t.replace(Gy,"").split(Wy).forEach(n=>{if(n){const r=n.split(Ky);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Il(t){let e="";if($e(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Il(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jy=_l(Yy);function lp(t){return!!t||t===""}const up=t=>!!(t&&t.__v_isRef===!0),hp=t=>$e(t)?t:t==null?"":le(t)||De(t)&&(t.toString===op||!fe(t.toString))?up(t)?hp(t.value):JSON.stringify(t,fp,2):String(t),fp=(t,e)=>up(e)?fp(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ec(r,i)+" =>"]=s,n),{})}:sp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ec(n))}:ir(e)?ec(e):De(e)&&!le(e)&&!ap(e)?String(e):e,ec=(t,e="")=>{var n;return ir(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class dp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xy(t){return new dp(t)}function Zy(){return Ct}let Ce;const tc=new WeakSet;class pp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tc.has(this)&&(tc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dh(this),_p(this);const e=Ce,n=zt;Ce=this,zt=!0;try{return this.fn()}finally{yp(this),Ce=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rl(e);this.deps=this.depsTail=void 0,Dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sc(this)&&this.run()}get dirty(){return Sc(this)}}let gp=0,Js,Xs;function mp(t,e=!1){if(t.flags|=8,e){t.next=Xs,Xs=t;return}t.next=Js,Js=t}function wl(){gp++}function Al(){if(--gp>0)return;if(Xs){let e=Xs;for(Xs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Js;){let e=Js;for(Js=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function _p(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Rl(r),ev(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Sc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ui))return;t.globalVersion=ui;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sc(t)){t.flags&=-3;return}const n=Ce,r=zt;Ce=t,zt=!0;try{_p(t);const s=t.fn(t._value);(e.version===0||Kn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=n,zt=r,yp(t),t.flags&=-3}}function Rl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Rl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ev(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const Ep=[];function or(){Ep.push(zt),zt=!1}function ar(){const t=Ep.pop();zt=t===void 0?!0:t}function Dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let ui=0;class tv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ce||!zt||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new tv(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,Tp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(e){this.version++,ui++,this.notify(e)}notify(e){wl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Al()}}}function Tp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Tp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pc=new WeakMap,Ar=Symbol(""),Cc=Symbol(""),hi=Symbol("");function ot(t,e,n){if(zt&&Ce){let r=Pc.get(t);r||Pc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new bl),s.map=r,s.key=n),s.track()}}function vn(t,e,n,r,s,i){const o=Pc.get(t);if(!o){ui++;return}const c=l=>{l&&l.trigger()};if(wl(),e==="clear")o.forEach(c);else{const l=le(t),h=l&&El(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===hi||!ir(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(hi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Ar)),es(t)&&c(o.get(Cc)));break;case"delete":l||(c(o.get(Ar)),es(t)&&c(o.get(Cc)));break;case"set":es(t)&&c(o.get(Ar));break}}Al()}function zr(t){const e=Ae(t);return e===t?e:(ot(e,"iterate",hi),Ut(t)?e:e.map(at))}function aa(t){return ot(t=Ae(t),"iterate",hi),t}const nv={__proto__:null,[Symbol.iterator](){return nc(this,Symbol.iterator,at)},concat(...t){return zr(this).concat(...t.map(e=>le(e)?zr(e):e))},entries(){return nc(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return mn(this,"find",t,e,at,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return rc(this,"includes",t)},indexOf(...t){return rc(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return rc(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return Fs(this,"pop")},push(...t){return Fs(this,"push",t)},reduce(t,...e){return Nh(this,"reduce",t,e)},reduceRight(t,...e){return Nh(this,"reduceRight",t,e)},shift(){return Fs(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return Fs(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return Fs(this,"unshift",t)},values(){return nc(this,"values",at)}};function nc(t,e,n){const r=aa(t),s=r[e]();return r!==t&&!Ut(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const rv=Array.prototype;function mn(t,e,n,r,s,i){const o=aa(t),c=o!==t&&!Ut(t),l=o[e];if(l!==rv[e]){const p=l.apply(t,i);return c?at(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,at(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Nh(t,e,n,r){const s=aa(t);let i=n;return s!==t&&(Ut(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,at(c),l,t)}),s[e](i,...r)}function rc(t,e,n){const r=Ae(t);ot(r,"iterate",hi);const s=r[e](...n);return(s===-1||s===!1)&&Cl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Fs(t,e,n=[]){or(),wl();const r=Ae(t)[e].apply(t,n);return Al(),ar(),r}const sv=_l("__proto__,__v_isRef,__isVue"),Ip=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ir));function iv(t){ir(t)||(t=String(t));const e=Ae(this);return ot(e,"has",t),e.hasOwnProperty(t)}class wp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?gv:Sp:i?bp:Rp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=nv[n]))return l;if(n==="hasOwnProperty")return iv}const c=Reflect.get(e,n,ut(e)?e:r);return(ir(n)?Ip.has(n):sv(n))||(s||ot(e,"get",n),i)?c:ut(c)?o&&El(n)?c:c.value:De(c)?s?Cp(c):ca(c):c}}class Ap extends wp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=br(i);if(!Ut(r)&&!br(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&ut(i)&&!ut(r))return l?!1:(i.value=r,!0)}const o=le(e)&&El(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ut(e)?e:s);return e===Ae(s)&&(o?Kn(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ir(n)||!Ip.has(n))&&ot(e,"has",n),r}ownKeys(e){return ot(e,"iterate",le(e)?"length":Ar),Reflect.ownKeys(e)}}class ov extends wp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const av=new Ap,cv=new ov,lv=new Ap(!0);const kc=t=>t,to=t=>Reflect.getPrototypeOf(t);function uv(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=es(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?kc:e?Oc:at;return!e&&ot(i,"iterate",l?Cc:Ar),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function no(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hv(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(Kn(s,c)&&ot(o,"get",s),ot(o,"get",c));const{has:l}=to(o),h=e?kc:t?Oc:at;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ot(Ae(s),"iterate",Ar),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(Kn(s,c)&&ot(o,"has",s),ot(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?kc:t?Oc:at;return!t&&ot(l,"iterate",Ar),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return ht(n,t?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){!e&&!Ut(s)&&!br(s)&&(s=Ae(s));const i=Ae(this);return to(i).has.call(i,s)||(i.add(s),vn(i,"add",s,s)),this},set(s,i){!e&&!Ut(i)&&!br(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=to(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Kn(i,f)&&vn(o,"set",s,i):vn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=to(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&vn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=uv(s,t,e)}),n}function Sl(t,e){const n=hv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const fv={get:Sl(!1,!1)},dv={get:Sl(!1,!0)},pv={get:Sl(!0,!1)};const Rp=new WeakMap,bp=new WeakMap,Sp=new WeakMap,gv=new WeakMap;function mv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _v(t){return t.__v_skip||!Object.isExtensible(t)?0:mv(Hy(t))}function ca(t){return br(t)?t:Pl(t,!1,av,fv,Rp)}function Pp(t){return Pl(t,!1,lv,dv,bp)}function Cp(t){return Pl(t,!0,cv,pv,Sp)}function Pl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=_v(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ts(t){return br(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Ut(t){return!!(t&&t.__v_isShallow)}function Cl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function kp(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&cp(t,"__v_skip",!0),t}const at=t=>De(t)?ca(t):t,Oc=t=>De(t)?Cp(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function kl(t){return Op(t,!1)}function yv(t){return Op(t,!0)}function Op(t,e){return ut(t)?t:new vv(t,e)}class vv{constructor(e,n){this.dep=new bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ut(e)||br(e);e=r?e:Ae(e),Kn(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function An(t){return ut(t)?t.value:t}const Ev={get:(t,e,n)=>e==="__v_raw"?t:An(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dp(t){return ts(t)?t:new Proxy(t,Ev)}class Tv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return mp(this,!0),!0}get value(){const e=this.dep.track();return vp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Iv(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Tv(r,s,n)}const ro={},Co=new WeakMap;let Er;function wv(t,e=!1,n=Er){if(n){let r=Co.get(n);r||Co.set(n,r=[]),r.push(t)}}function Av(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=$=>s?$:Ut($)||s===!1||s===0?En($,1):En($);let f,p,m,_,C=!1,D=!1;if(ut(t)?(p=()=>t.value,C=Ut(t)):ts(t)?(p=()=>h(t),C=!0):le(t)?(D=!0,C=t.some($=>ts($)||Ut($)),p=()=>t.map($=>{if(ut($))return $.value;if(ts($))return h($);if(fe($))return l?l($,2):$()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){or();try{m()}finally{ar()}}const $=Er;Er=f;try{return l?l(t,3,[_]):t(_)}finally{Er=$}}:p=rn,e&&s){const $=p,ae=s===!0?1/0:s;p=()=>En($(),ae)}const O=Zy(),H=()=>{f.stop(),O&&O.active&&vl(O.effects,f)};if(i&&e){const $=e;e=(...ae)=>{$(...ae),H()}}let F=D?new Array(t.length).fill(ro):ro;const j=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const ae=f.run();if(s||C||(D?ae.some((he,w)=>Kn(he,F[w])):Kn(ae,F))){m&&m();const he=Er;Er=f;try{const w=[ae,F===ro?void 0:D&&F[0]===ro?[]:F,_];l?l(e,3,w):e(...w),F=ae}finally{Er=he}}}else f.run()};return c&&c(j),f=new pp(p),f.scheduler=o?()=>o(j,!1):j,_=$=>wv($,!1,f),m=f.onStop=()=>{const $=Co.get(f);if($){if(l)l($,4);else for(const ae of $)ae();Co.delete(f)}},e?r?j(!0):F=f.run():o?o(j.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function En(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ut(t))En(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)En(t[r],e,n);else if(sp(t)||es(t))t.forEach(r=>{En(r,e,n)});else if(ap(t)){for(const r in t)En(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&En(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(t,e,n,r){try{return r?t(...r):t()}catch(s){la(s,e,n)}}function ln(t,e,n,r){if(fe(t)){const s=bi(t,e,n,r);return s&&ip(s)&&s.catch(i=>{la(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function la(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){or(),bi(i,null,10,[t,l,h]),ar();return}}Rv(t,n,s,r,o)}function Rv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Xt=-1;const ns=[];let Fn=null,Wr=0;const Np=Promise.resolve();let ko=null;function Vp(t){const e=ko||Np;return t?e.then(this?t.bind(this):t):e}function bv(t){let e=Xt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ol(t){if(!(t.flags&1)){const e=fi(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=fi(n)?_t.push(t):_t.splice(bv(e),0,t),t.flags|=1,xp()}}function xp(){ko||(ko=Np.then(Mp))}function Sv(t){le(t)?ns.push(...t):Fn&&t.id===-1?Fn.splice(Wr+1,0,t):t.flags&1||(ns.push(t),t.flags|=1),xp()}function Vh(t,e,n=Xt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Lp(t){if(ns.length){const e=[...new Set(ns)].sort((n,r)=>fi(n)-fi(r));if(ns.length=0,Fn){Fn.push(...e);return}for(Fn=e,Wr=0;Wr<Fn.length;Wr++){const n=Fn[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fn=null,Wr=0}}const fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mp(t){try{for(Xt=0;Xt<_t.length;Xt++){const e=_t[Xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xt<_t.length;Xt++){const e=_t[Xt];e&&(e.flags&=-2)}Xt=-1,_t.length=0,Lp(),ko=null,(_t.length||ns.length)&&Mp()}}let kt=null,Up=null;function Oo(t){const e=kt;return kt=t,Up=t&&t.type.__scopeId||null,e}function Dc(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qh(-1);const i=Oo(e);let o;try{o=t(...s)}finally{Oo(i),r._d&&qh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zC(t,e){if(kt===null)return t;const n=da(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Pe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&En(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function yr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(or(),ln(l,n,8,[t.el,c,t,e]),ar())}}const Pv=Symbol("_vte"),Cv=t=>t.__isTeleport;function Dl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Dl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Si(t,e){return fe(t)?ht({name:t.name},e,{setup:t}):t}function Fp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Do(t,e,n,r,s=!1){if(le(t)){t.forEach((C,D)=>Do(C,e&&(le(e)?e[D]:e),n,r,s));return}if(Zs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Do(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?da(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,m=Ae(p),_=p===Pe?()=>!1:C=>Re(m,C);if(h!=null&&h!==l&&($e(h)?(f[h]=null,_(h)&&(p[h]=null)):ut(h)&&(h.value=null)),fe(l))bi(l,c,12,[o,f]);else{const C=$e(l),D=ut(l);if(C||D){const O=()=>{if(t.f){const H=C?_(l)?p[l]:f[l]:l.value;s?le(H)&&vl(H,i):le(H)?H.includes(i)||H.push(i):C?(f[l]=[i],_(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else C?(f[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(f[t.k]=o))};o?(O.id=-1,Pt(O,n)):O()}}}oa().requestIdleCallback;oa().cancelIdleCallback;const Zs=t=>!!t.type.__asyncLoader,Bp=t=>t.type.__isKeepAlive;function kv(t,e){jp(t,"a",e)}function Ov(t,e){jp(t,"da",e)}function jp(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ua(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bp(s.parent.vnode)&&Dv(r,e,n,s),s=s.parent}}function Dv(t,e,n,r){const s=ua(e,t,r,!0);Hp(()=>{vl(r[e],s)},n)}function ua(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{or();const c=Pi(n),l=ln(e,n,t,o);return c(),ar(),l});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=lt)=>{(!pi||t==="sp")&&ua(t,(...r)=>e(...r),n)},Nv=On("bm"),$p=On("m"),Vv=On("bu"),xv=On("u"),Lv=On("bum"),Hp=On("um"),Mv=On("sp"),Uv=On("rtg"),Fv=On("rtc");function Bv(t,e=lt){ua("ec",t,e)}const jv="components";function WC(t,e){return Hv(jv,t,!0,e)||t}const $v=Symbol.for("v-ndc");function Hv(t,e,n=!0,r=!1){const s=kt||lt;if(s){const i=s.type;{const c=kE(i,!1);if(c&&(c===e||c===Ft(e)||c===ia(Ft(e))))return i}const o=xh(s[t]||i[t],e)||xh(s.appContext[t],e);return!o&&r?i:o}}function xh(t,e){return t&&(t[e]||t[Ft(e)]||t[ia(Ft(e))])}function qv(t,e,n,r){let s;const i=n,o=le(t);if(o||$e(t)){const c=o&&ts(t);let l=!1;c&&(l=!Ut(t),t=aa(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?at(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Nc=t=>t?hg(t)?da(t):Nc(t.parent):null,ei=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nc(t.parent),$root:t=>Nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zp(t),$forceUpdate:t=>t.f||(t.f=()=>{Ol(t.update)}),$nextTick:t=>t.n||(t.n=Vp.bind(t.proxy)),$watch:t=>hE.bind(t)}),sc=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Re(t,e),zv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(sc(r,e))return o[e]=1,r[e];if(s!==Pe&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==Pe&&Re(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const f=ei[e];let p,m;if(f)return e==="$attrs"&&ot(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Re(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return sc(s,e)?(s[e]=n,!0):r!==Pe&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Pe&&Re(t,o)||sc(e,o)||(c=i[0])&&Re(c,o)||Re(r,o)||Re(ei,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vc=!0;function Wv(t){const e=zp(t),n=t.proxy,r=t.ctx;Vc=!1,e.beforeCreate&&Mh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:D,deactivated:O,beforeDestroy:H,beforeUnmount:F,destroyed:j,unmounted:$,render:ae,renderTracked:he,renderTriggered:w,errorCaptured:y,serverPrefetch:I,expose:A,inheritAttrs:R,components:S,directives:T,filters:dt}=e;if(h&&Kv(h,r,null),o)for(const ye in o){const ge=o[ye];fe(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);De(ye)&&(t.data=ca(ye))}if(Vc=!0,i)for(const ye in i){const ge=i[ye],bt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):rn,jt=!fe(ge)&&fe(ge.set)?ge.set.bind(n):rn,xt=Ht({get:bt,set:jt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>xt.value,set:Ne=>xt.value=Ne})}if(c)for(const ye in c)qp(c[ye],r,n,ye);if(l){const ye=fe(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(ge=>{po(ge,ye[ge])})}f&&Mh(f,t,"c");function Be(ye,ge){le(ge)?ge.forEach(bt=>ye(bt.bind(n))):ge&&ye(ge.bind(n))}if(Be(Nv,p),Be($p,m),Be(Vv,_),Be(xv,C),Be(kv,D),Be(Ov,O),Be(Bv,y),Be(Fv,he),Be(Uv,w),Be(Lv,F),Be(Hp,$),Be(Mv,I),le(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:bt=>n[ge]=bt})})}else t.exposed||(t.exposed={});ae&&t.render===rn&&(t.render=ae),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),T&&(t.directives=T),I&&Fp(t)}function Kv(t,e,n=rn){le(t)&&(t=xc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Mh(t,e,n){ln(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){let s=r.includes(".")?ig(n,r):()=>n[r];if($e(t)){const i=e[t];fe(i)&&go(s,i)}else if(fe(t))go(s,t.bind(n));else if(De(t))if(le(t))t.forEach(i=>qp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&go(s,i,t)}}function zp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>No(l,h,o,!0)),No(l,e,o)),De(e)&&i.set(e,l),l}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Gv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Gv={data:Uh,props:Fh,emits:Fh,methods:Hs,computed:Hs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Hs,directives:Hs,watch:Yv,provide:Uh,inject:Qv};function Uh(t,e){return e?t?function(){return ht(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Qv(t,e){return Hs(xc(t),xc(e))}function xc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?ht(Object.create(null),t,e):e}function Fh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ht(Object.create(null),Lh(t),Lh(e??{})):e}function Yv(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Wp(){return{app:null,config:{isNativeTag:jy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jv=0;function Xv(t,e){return function(r,s=null){fe(r)||(r=ht({},r)),s!=null&&!De(s)&&(s=null);const i=Wp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Jv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:DE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(h,...p)):fe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const _=h._ceVNode||yt(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,h._container=f,f.__vue_app__=h,da(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(ln(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=rs;rs=h;try{return f()}finally{rs=p}}};return h}}let rs=null;function po(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=lt||kt;if(r||rs){const s=rs?rs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const Kp={},Gp=()=>Object.create(Kp),Qp=t=>Object.getPrototypeOf(t)===Kp;function Zv(t,e,n,r=!1){const s={},i=Gp();t.propsDefaults=Object.create(null),Yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Pp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function eE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(ha(t.emitsOptions,m))continue;const _=e[m];if(l)if(Re(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const C=Ft(m);s[C]=Lc(l,c,C,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Yp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=xr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Lc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&vn(t.attrs,"set","")}function Yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ys(l))continue;const h=e[l];let f;s&&Re(s,f=Ft(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:ha(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Pe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Lc(s,l,p,h[p],t,!Re(h,p))}}return o}function Lc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Pi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===xr(n))&&(r=!0))}return r}const tE=new WeakMap;function Jp(t,e,n=!1){const r=n?tE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[m,_]=Jp(p,e,!0);ht(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return De(t)&&r.set(t,Zr),Zr;if(le(i))for(let f=0;f<i.length;f++){const p=Ft(i[f]);Bh(p)&&(o[p]=Pe)}else if(i)for(const f in i){const p=Ft(f);if(Bh(p)){const m=i[f],_=o[p]=le(m)||fe(m)?{type:m}:ht({},m),C=_.type;let D=!1,O=!0;if(le(C))for(let H=0;H<C.length;++H){const F=C[H],j=fe(F)&&F.name;if(j==="Boolean"){D=!0;break}else j==="String"&&(O=!1)}else D=fe(C)&&C.name==="Boolean";_[0]=D,_[1]=O,(D||Re(_,"default"))&&c.push(p)}}const h=[o,c];return De(t)&&r.set(t,h),h}function Bh(t){return t[0]!=="$"&&!Ys(t)}const Xp=t=>t[0]==="_"||t==="$stable",Nl=t=>le(t)?t.map(tn):[tn(t)],nE=(t,e,n)=>{if(e._n)return e;const r=Dc((...s)=>Nl(e(...s)),n);return r._c=!1,r},Zp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Xp(s))continue;const i=t[s];if(fe(i))e[s]=nE(s,i,r);else if(i!=null){const o=Nl(i);e[s]=()=>o}}},eg=(t,e)=>{const n=Nl(e);t.slots.default=()=>n},tg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},rE=(t,e,n)=>{const r=t.slots=Gp();if(t.vnode.shapeFlag&32){const s=e._;s?(tg(r,e,n),n&&cp(r,"_",s,!0)):Zp(e,r)}else e&&eg(t,e)},sE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:tg(s,e,n):(i=!e.$stable,Zp(e,s)),o=e}else e&&(eg(t,e),o={default:1});if(i)for(const c in s)!Xp(c)&&o[c]==null&&delete s[c]},Pt=yE;function iE(t){return oE(t)}function oE(t,e){const n=oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=rn,insertStaticContent:C}=t,D=(v,E,b,V=null,M=null,x=null,K=void 0,z=null,q=!!E.dynamicChildren)=>{if(v===E)return;v&&!Bs(v,E)&&(V=N(v),Ne(v,M,x,!0),v=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:B,ref:ne,shapeFlag:Q}=E;switch(B){case fa:O(v,E,b,V);break;case Sr:H(v,E,b,V);break;case oc:v==null&&F(E,b,V,K);break;case en:S(v,E,b,V,M,x,K,z,q);break;default:Q&1?ae(v,E,b,V,M,x,K,z,q):Q&6?T(v,E,b,V,M,x,K,z,q):(Q&64||Q&128)&&B.process(v,E,b,V,M,x,K,z,q,X)}ne!=null&&M&&Do(ne,v&&v.ref,x,E||v,!E)},O=(v,E,b,V)=>{if(v==null)r(E.el=c(E.children),b,V);else{const M=E.el=v.el;E.children!==v.children&&h(M,E.children)}},H=(v,E,b,V)=>{v==null?r(E.el=l(E.children||""),b,V):E.el=v.el},F=(v,E,b,V)=>{[v.el,v.anchor]=C(v.children,E,b,V,v.el,v.anchor)},j=({el:v,anchor:E},b,V)=>{let M;for(;v&&v!==E;)M=m(v),r(v,b,V),v=M;r(E,b,V)},$=({el:v,anchor:E})=>{let b;for(;v&&v!==E;)b=m(v),s(v),v=b;s(E)},ae=(v,E,b,V,M,x,K,z,q)=>{E.type==="svg"?K="svg":E.type==="math"&&(K="mathml"),v==null?he(E,b,V,M,x,K,z,q):I(v,E,M,x,K,z,q)},he=(v,E,b,V,M,x,K,z)=>{let q,B;const{props:ne,shapeFlag:Q,transition:ee,dirs:oe}=v;if(q=v.el=o(v.type,x,ne&&ne.is,ne),Q&8?f(q,v.children):Q&16&&y(v.children,q,null,V,M,ic(v,x),K,z),oe&&yr(v,null,V,"created"),w(q,v,v.scopeId,K,V),ne){for(const de in ne)de!=="value"&&!Ys(de)&&i(q,de,null,ne[de],x,V);"value"in ne&&i(q,"value",null,ne.value,x),(B=ne.onVnodeBeforeMount)&&Jt(B,V,v)}oe&&yr(v,null,V,"beforeMount");const re=aE(M,ee);re&&ee.beforeEnter(q),r(q,E,b),((B=ne&&ne.onVnodeMounted)||re||oe)&&Pt(()=>{B&&Jt(B,V,v),re&&ee.enter(q),oe&&yr(v,null,V,"mounted")},M)},w=(v,E,b,V,M)=>{if(b&&_(v,b),V)for(let x=0;x<V.length;x++)_(v,V[x]);if(M){let x=M.subTree;if(E===x||ag(x.type)&&(x.ssContent===E||x.ssFallback===E)){const K=M.vnode;w(v,K,K.scopeId,K.slotScopeIds,M.parent)}}},y=(v,E,b,V,M,x,K,z,q=0)=>{for(let B=q;B<v.length;B++){const ne=v[B]=z?Bn(v[B]):tn(v[B]);D(null,ne,E,b,V,M,x,K,z)}},I=(v,E,b,V,M,x,K)=>{const z=E.el=v.el;let{patchFlag:q,dynamicChildren:B,dirs:ne}=E;q|=v.patchFlag&16;const Q=v.props||Pe,ee=E.props||Pe;let oe;if(b&&vr(b,!1),(oe=ee.onVnodeBeforeUpdate)&&Jt(oe,b,E,v),ne&&yr(E,v,b,"beforeUpdate"),b&&vr(b,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(z,""),B?A(v.dynamicChildren,B,z,b,V,ic(E,M),x):K||ge(v,E,z,null,b,V,ic(E,M),x,!1),q>0){if(q&16)R(z,Q,ee,b,M);else if(q&2&&Q.class!==ee.class&&i(z,"class",null,ee.class,M),q&4&&i(z,"style",Q.style,ee.style,M),q&8){const re=E.dynamicProps;for(let de=0;de<re.length;de++){const ve=re[de],et=Q[ve],Ge=ee[ve];(Ge!==et||ve==="value")&&i(z,ve,et,Ge,M,b)}}q&1&&v.children!==E.children&&f(z,E.children)}else!K&&B==null&&R(z,Q,ee,b,M);((oe=ee.onVnodeUpdated)||ne)&&Pt(()=>{oe&&Jt(oe,b,E,v),ne&&yr(E,v,b,"updated")},V)},A=(v,E,b,V,M,x,K)=>{for(let z=0;z<E.length;z++){const q=v[z],B=E[z],ne=q.el&&(q.type===en||!Bs(q,B)||q.shapeFlag&70)?p(q.el):b;D(q,B,ne,null,V,M,x,K,!0)}},R=(v,E,b,V,M)=>{if(E!==b){if(E!==Pe)for(const x in E)!Ys(x)&&!(x in b)&&i(v,x,E[x],null,M,V);for(const x in b){if(Ys(x))continue;const K=b[x],z=E[x];K!==z&&x!=="value"&&i(v,x,z,K,M,V)}"value"in b&&i(v,"value",E.value,b.value,M)}},S=(v,E,b,V,M,x,K,z,q)=>{const B=E.el=v?v.el:c(""),ne=E.anchor=v?v.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:oe}=E;oe&&(z=z?z.concat(oe):oe),v==null?(r(B,b,V),r(ne,b,V),y(E.children||[],b,ne,M,x,K,z,q)):Q>0&&Q&64&&ee&&v.dynamicChildren?(A(v.dynamicChildren,ee,b,M,x,K,z),(E.key!=null||M&&E===M.subTree)&&ng(v,E,!0)):ge(v,E,b,ne,M,x,K,z,q)},T=(v,E,b,V,M,x,K,z,q)=>{E.slotScopeIds=z,v==null?E.shapeFlag&512?M.ctx.activate(E,b,V,K,q):dt(E,b,V,M,x,K,q):Vt(v,E,q)},dt=(v,E,b,V,M,x,K)=>{const z=v.component=RE(v,V,M);if(Bp(v)&&(z.ctx.renderer=X),bE(z,!1,K),z.asyncDep){if(M&&M.registerDep(z,Be,K),!v.el){const q=z.subTree=yt(Sr);H(null,q,E,b)}}else Be(z,v,E,b,M,x,K)},Vt=(v,E,b)=>{const V=E.component=v.component;if(mE(v,E,b))if(V.asyncDep&&!V.asyncResolved){ye(V,E,b);return}else V.next=E,V.update();else E.el=v.el,V.vnode=E},Be=(v,E,b,V,M,x,K)=>{const z=()=>{if(v.isMounted){let{next:Q,bu:ee,u:oe,parent:re,vnode:de}=v;{const tt=rg(v);if(tt){Q&&(Q.el=de.el,ye(v,Q,K)),tt.asyncDep.then(()=>{v.isUnmounted||z()});return}}let ve=Q,et;vr(v,!1),Q?(Q.el=de.el,ye(v,Q,K)):Q=de,ee&&fo(ee),(et=Q.props&&Q.props.onVnodeBeforeUpdate)&&Jt(et,re,Q,de),vr(v,!0);const Ge=$h(v),Lt=v.subTree;v.subTree=Ge,D(Lt,Ge,p(Lt.el),N(Lt),v,M,x),Q.el=Ge.el,ve===null&&_E(v,Ge.el),oe&&Pt(oe,M),(et=Q.props&&Q.props.onVnodeUpdated)&&Pt(()=>Jt(et,re,Q,de),M)}else{let Q;const{el:ee,props:oe}=E,{bm:re,m:de,parent:ve,root:et,type:Ge}=v,Lt=Zs(E);vr(v,!1),re&&fo(re),!Lt&&(Q=oe&&oe.onVnodeBeforeMount)&&Jt(Q,ve,E),vr(v,!0);{et.ce&&et.ce._injectChildStyle(Ge);const tt=v.subTree=$h(v);D(null,tt,b,V,v,M,x),E.el=tt.el}if(de&&Pt(de,M),!Lt&&(Q=oe&&oe.onVnodeMounted)){const tt=E;Pt(()=>Jt(Q,ve,tt),M)}(E.shapeFlag&256||ve&&Zs(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&Pt(v.a,M),v.isMounted=!0,E=b=V=null}};v.scope.on();const q=v.effect=new pp(z);v.scope.off();const B=v.update=q.run.bind(q),ne=v.job=q.runIfDirty.bind(q);ne.i=v,ne.id=v.uid,q.scheduler=()=>Ol(ne),vr(v,!0),B()},ye=(v,E,b)=>{E.component=v;const V=v.vnode.props;v.vnode=E,v.next=null,eE(v,E.props,V,b),sE(v,E.children,b),or(),Vh(v),ar()},ge=(v,E,b,V,M,x,K,z,q=!1)=>{const B=v&&v.children,ne=v?v.shapeFlag:0,Q=E.children,{patchFlag:ee,shapeFlag:oe}=E;if(ee>0){if(ee&128){jt(B,Q,b,V,M,x,K,z,q);return}else if(ee&256){bt(B,Q,b,V,M,x,K,z,q);return}}oe&8?(ne&16&&Et(B,M,x),Q!==B&&f(b,Q)):ne&16?oe&16?jt(B,Q,b,V,M,x,K,z,q):Et(B,M,x,!0):(ne&8&&f(b,""),oe&16&&y(Q,b,V,M,x,K,z,q))},bt=(v,E,b,V,M,x,K,z,q)=>{v=v||Zr,E=E||Zr;const B=v.length,ne=E.length,Q=Math.min(B,ne);let ee;for(ee=0;ee<Q;ee++){const oe=E[ee]=q?Bn(E[ee]):tn(E[ee]);D(v[ee],oe,b,null,M,x,K,z,q)}B>ne?Et(v,M,x,!0,!1,Q):y(E,b,V,M,x,K,z,q,Q)},jt=(v,E,b,V,M,x,K,z,q)=>{let B=0;const ne=E.length;let Q=v.length-1,ee=ne-1;for(;B<=Q&&B<=ee;){const oe=v[B],re=E[B]=q?Bn(E[B]):tn(E[B]);if(Bs(oe,re))D(oe,re,b,null,M,x,K,z,q);else break;B++}for(;B<=Q&&B<=ee;){const oe=v[Q],re=E[ee]=q?Bn(E[ee]):tn(E[ee]);if(Bs(oe,re))D(oe,re,b,null,M,x,K,z,q);else break;Q--,ee--}if(B>Q){if(B<=ee){const oe=ee+1,re=oe<ne?E[oe].el:V;for(;B<=ee;)D(null,E[B]=q?Bn(E[B]):tn(E[B]),b,re,M,x,K,z,q),B++}}else if(B>ee)for(;B<=Q;)Ne(v[B],M,x,!0),B++;else{const oe=B,re=B,de=new Map;for(B=re;B<=ee;B++){const Qe=E[B]=q?Bn(E[B]):tn(E[B]);Qe.key!=null&&de.set(Qe.key,B)}let ve,et=0;const Ge=ee-re+1;let Lt=!1,tt=0;const Nn=new Array(Ge);for(B=0;B<Ge;B++)Nn[B]=0;for(B=oe;B<=Q;B++){const Qe=v[B];if(et>=Ge){Ne(Qe,M,x,!0);continue}let Mt;if(Qe.key!=null)Mt=de.get(Qe.key);else for(ve=re;ve<=ee;ve++)if(Nn[ve-re]===0&&Bs(Qe,E[ve])){Mt=ve;break}Mt===void 0?Ne(Qe,M,x,!0):(Nn[Mt-re]=B+1,Mt>=tt?tt=Mt:Lt=!0,D(Qe,E[Mt],b,null,M,x,K,z,q),et++)}const bs=Lt?cE(Nn):Zr;for(ve=bs.length-1,B=Ge-1;B>=0;B--){const Qe=re+B,Mt=E[Qe],Fi=Qe+1<ne?E[Qe+1].el:V;Nn[B]===0?D(null,Mt,b,Fi,M,x,K,z,q):Lt&&(ve<0||B!==bs[ve]?xt(Mt,b,Fi,2):ve--)}}},xt=(v,E,b,V,M=null)=>{const{el:x,type:K,transition:z,children:q,shapeFlag:B}=v;if(B&6){xt(v.component.subTree,E,b,V);return}if(B&128){v.suspense.move(E,b,V);return}if(B&64){K.move(v,E,b,X);return}if(K===en){r(x,E,b);for(let Q=0;Q<q.length;Q++)xt(q[Q],E,b,V);r(v.anchor,E,b);return}if(K===oc){j(v,E,b);return}if(V!==2&&B&1&&z)if(V===0)z.beforeEnter(x),r(x,E,b),Pt(()=>z.enter(x),M);else{const{leave:Q,delayLeave:ee,afterLeave:oe}=z,re=()=>r(x,E,b),de=()=>{Q(x,()=>{re(),oe&&oe()})};ee?ee(x,re,de):de()}else r(x,E,b)},Ne=(v,E,b,V=!1,M=!1)=>{const{type:x,props:K,ref:z,children:q,dynamicChildren:B,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:oe}=v;if(Q===-2&&(M=!1),z!=null&&Do(z,null,b,v,!0),oe!=null&&(E.renderCache[oe]=void 0),ne&256){E.ctx.deactivate(v);return}const re=ne&1&&ee,de=!Zs(v);let ve;if(de&&(ve=K&&K.onVnodeBeforeUnmount)&&Jt(ve,E,v),ne&6)Yt(v.component,b,V);else{if(ne&128){v.suspense.unmount(b,V);return}re&&yr(v,null,E,"beforeUnmount"),ne&64?v.type.remove(v,E,b,X,V):B&&!B.hasOnce&&(x!==en||Q>0&&Q&64)?Et(B,E,b,!1,!0):(x===en&&Q&384||!M&&ne&16)&&Et(q,E,b),V&&Ve(v)}(de&&(ve=K&&K.onVnodeUnmounted)||re)&&Pt(()=>{ve&&Jt(ve,E,v),re&&yr(v,null,E,"unmounted")},b)},Ve=v=>{const{type:E,el:b,anchor:V,transition:M}=v;if(E===en){Dn(b,V);return}if(E===oc){$(v);return}const x=()=>{s(b),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(v.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:z}=M,q=()=>K(b,x);z?z(v.el,x,q):q()}else x()},Dn=(v,E)=>{let b;for(;v!==E;)b=m(v),s(v),v=b;s(E)},Yt=(v,E,b)=>{const{bum:V,scope:M,job:x,subTree:K,um:z,m:q,a:B}=v;jh(q),jh(B),V&&fo(V),M.stop(),x&&(x.flags|=8,Ne(K,v,E,b)),z&&Pt(z,E),Pt(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Et=(v,E,b,V=!1,M=!1,x=0)=>{for(let K=x;K<v.length;K++)Ne(v[K],E,b,V,M)},N=v=>{if(v.shapeFlag&6)return N(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const E=m(v.anchor||v.el),b=E&&E[Pv];return b?m(b):E};let Y=!1;const G=(v,E,b)=>{v==null?E._vnode&&Ne(E._vnode,null,null,!0):D(E._vnode||null,v,E,null,null,null,b),E._vnode=v,Y||(Y=!0,Vh(),Lp(),Y=!1)},X={p:D,um:Ne,m:xt,r:Ve,mt:dt,mc:y,pc:ge,pbc:A,n:N,o:t};return{render:G,hydrate:void 0,createApp:Xv(G)}}function ic({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function aE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ng(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Bn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ng(o,c)),c.type===fa&&(c.el=o.el)}}function cE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function rg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rg(e)}function jh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const lE=Symbol.for("v-scx"),uE=()=>Wt(lE);function go(t,e,n){return sg(t,e,n)}function sg(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:o}=n,c=ht({},n),l=e&&r||!e&&i!=="post";let h;if(pi){if(i==="sync"){const _=uE();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=rn,_.resume=rn,_.pause=rn,_}}const f=lt;c.call=(_,C,D)=>ln(_,f,C,D);let p=!1;i==="post"?c.scheduler=_=>{Pt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():Ol(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Av(t,e,c);return pi&&(h?h.push(m):l&&m()),m}function hE(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?ig(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Pi(this),c=sg(s,i.bind(r),n);return o(),c}function ig(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${xr(e)}Modifiers`];function dE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&fE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>$e(f)?f.trim():f)),o.number&&(s=n.map(bc)));let c,l=r[c=Za(e)]||r[c=Za(Ft(e))];!l&&i&&(l=r[c=Za(xr(e))]),l&&ln(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ln(h,t,6,s)}}function og(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=h=>{const f=og(h,e,!0);f&&(c=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):ht(o,i),De(t)&&r.set(t,o),o)}function ha(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,xr(e))||Re(t,e))}function $h(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:_,ctx:C,inheritAttrs:D}=t,O=Oo(t);let H,F;try{if(n.shapeFlag&4){const $=s||r,ae=$;H=tn(h.call(ae,$,f,p,_,m,C)),F=c}else{const $=e;H=tn($.length>1?$(p,{attrs:c,slots:o,emit:l}):$(p,null)),F=e.props?c:pE(c)}}catch($){ti.length=0,la($,t,1),H=yt(Sr)}let j=H;if(F&&D!==!1){const $=Object.keys(F),{shapeFlag:ae}=j;$.length&&ae&7&&(i&&$.some(yl)&&(F=gE(F,i)),j=us(j,F,!1,!0))}return n.dirs&&(j=us(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Dl(j,n.transition),H=j,Oo(O),H}const pE=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},gE=(t,e)=>{const n={};for(const r in t)(!yl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function mE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!ha(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Hh(r,o,h):!0:!!o;return!1}function Hh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ha(n,i))return!0}return!1}function _E({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ag=t=>t.__isSuspense;function yE(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Sv(t)}const en=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),oc=Symbol.for("v-stc"),ti=[];let Ot=null;function ss(t=!1){ti.push(Ot=t?null:[])}function vE(){ti.pop(),Ot=ti[ti.length-1]||null}let di=1;function qh(t,e=!1){di+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function cg(t){return t.dynamicChildren=di>0?Ot||Zr:null,vE(),di>0&&Ot&&Ot.push(t),t}function mo(t,e,n,r,s,i){return cg(ls(t,e,n,r,s,i,!0))}function lg(t,e,n,r,s){return cg(yt(t,e,n,r,s,!0))}function Vo(t){return t?t.__v_isVNode===!0:!1}function Bs(t,e){return t.type===e.type&&t.key===e.key}const ug=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||ut(t)||fe(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function ls(t,e=null,n=null,r=0,s=null,i=t===en?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ug(e),ref:e&&_o(e),scopeId:Up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return c?(Vl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),di>0&&!o&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const yt=EE;function EE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$v)&&(t=Sr),Vo(t)){const c=us(t,e,!0);return n&&Vl(c,n),di>0&&!i&&Ot&&(c.shapeFlag&6?Ot[Ot.indexOf(t)]=c:Ot.push(c)),c.patchFlag=-2,c}if(OE(t)&&(t=t.__vccOpts),e){e=TE(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=Il(c)),De(l)&&(Cl(l)&&!le(l)&&(l=ht({},l)),e.style=Tl(l))}const o=$e(t)?1:ag(t)?128:Cv(t)?64:De(t)?4:fe(t)?2:0;return ls(t,e,n,r,s,o,i,!0)}function TE(t){return t?Cl(t)||Qp(t)?ht({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?IE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ug(h),ref:e&&e.ref?n&&i?le(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==en?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Dl(f,l.clone(f)),f}function Mc(t=" ",e=0){return yt(fa,null,t,e)}function KC(t="",e=!1){return e?(ss(),lg(Sr,null,t)):yt(Sr,null,t)}function tn(t){return t==null||typeof t=="boolean"?yt(Sr):le(t)?yt(en,null,t.slice()):Vo(t)?Bn(t):yt(fa,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Vl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qp(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Mc(e)]):n=8);t.children=e,t.shapeFlag|=n}function IE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Il([e.class,r.class]));else if(s==="style")e.style=Tl([e.style,r.style]);else if(na(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Jt(t,e,n,r=null){ln(t,e,7,[n,r])}const wE=Wp();let AE=0;function RE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wE,i={uid:AE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(r,s),emitsOptions:og(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dE.bind(null,i),t.ce&&t.ce(i),i}let lt=null,xo,Uc;{const t=oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};xo=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Uc=e("__VUE_SSR_SETTERS__",n=>pi=n)}const Pi=t=>{const e=lt;return xo(t),t.scope.on(),()=>{t.scope.off(),xo(e)}},zh=()=>{lt&&lt.scope.off(),xo(null)};function hg(t){return t.vnode.shapeFlag&4}let pi=!1;function bE(t,e=!1,n=!1){e&&Uc(e);const{props:r,children:s}=t.vnode,i=hg(t);Zv(t,r,i,e),rE(t,s,n);const o=i?SE(t,e):void 0;return e&&Uc(!1),o}function SE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,zv);const{setup:r}=n;if(r){or();const s=t.setupContext=r.length>1?CE(t):null,i=Pi(t),o=bi(r,t,0,[t.props,s]),c=ip(o);if(ar(),i(),(c||t.sp)&&!Zs(t)&&Fp(t),c){if(o.then(zh,zh),e)return o.then(l=>{Wh(t,l)}).catch(l=>{la(l,t,0)});t.asyncDep=o}else Wh(t,o)}else fg(t)}function Wh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Dp(e)),fg(t)}function fg(t,e,n){const r=t.type;t.render||(t.render=r.render||rn);{const s=Pi(t);or();try{Wv(t)}finally{ar(),s()}}}const PE={get(t,e){return ot(t,"get",""),t[e]}};function CE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,PE),slots:t.slots,emit:t.emit,expose:e}}function da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dp(kp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ei)return ei[n](t)},has(e,n){return n in e||n in ei}})):t.proxy}function kE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function OE(t){return fe(t)&&"__vccOpts"in t}const Ht=(t,e)=>Iv(t,e,pi);function dg(t,e,n){const r=arguments.length;return r===2?De(e)&&!le(e)?Vo(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vo(n)&&(n=[n]),yt(t,e,n))}const DE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fc;const Kh=typeof window<"u"&&window.trustedTypes;if(Kh)try{Fc=Kh.createPolicy("vue",{createHTML:t=>t})}catch{}const pg=Fc?t=>Fc.createHTML(t):t=>t,NE="http://www.w3.org/2000/svg",VE="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,Gh=yn&&yn.createElement("template"),xE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(NE,t):e==="mathml"?yn.createElementNS(VE,t):n?yn.createElement(t,{is:n}):yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gh.innerHTML=pg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Gh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},LE=Symbol("_vtc");function ME(t,e,n){const r=t[LE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qh=Symbol("_vod"),UE=Symbol("_vsh"),FE=Symbol(""),BE=/(^|;)\s*display\s*:/;function jE(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&yo(r,c,"")}else for(const o in e)n[o]==null&&yo(r,o,"");for(const o in n)o==="display"&&(i=!0),yo(r,o,n[o])}else if(s){if(e!==n){const o=r[FE];o&&(n+=";"+o),r.cssText=n,i=BE.test(n)}}else e&&t.removeAttribute("style");Qh in t&&(t[Qh]=i?r.display:"",t[UE]&&(r.display="none"))}const Yh=/\s*!important$/;function yo(t,e,n){if(le(n))n.forEach(r=>yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$E(t,e);Yh.test(n)?t.setProperty(xr(r),n.replace(Yh,""),"important"):t[r]=n}}const Jh=["Webkit","Moz","ms"],ac={};function $E(t,e){const n=ac[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return ac[e]=r;r=ia(r);for(let s=0;s<Jh.length;s++){const i=Jh[s]+r;if(i in t)return ac[e]=i}return e}const Xh="http://www.w3.org/1999/xlink";function Zh(t,e,n,r,s,i=Jy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xh,e.slice(6,e.length)):t.setAttributeNS(Xh,e,n):n==null||i&&!lp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ir(n)?String(n):n)}function ef(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=lp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Kr(t,e,n,r){t.addEventListener(e,n,r)}function HE(t,e,n,r){t.removeEventListener(e,n,r)}const tf=Symbol("_vei");function qE(t,e,n,r,s=null){const i=t[tf]||(t[tf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=zE(e);if(r){const h=i[e]=GE(r,s);Kr(t,c,h,l)}else o&&(HE(t,c,o,l),i[e]=void 0)}}const nf=/(?:Once|Passive|Capture)$/;function zE(t){let e;if(nf.test(t)){e={};let r;for(;r=t.match(nf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let cc=0;const WE=Promise.resolve(),KE=()=>cc||(WE.then(()=>cc=0),cc=Date.now());function GE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(QE(r,n.value),e,5,[r])};return n.value=t,n.attached=KE(),n}function QE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,YE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ME(t,r,o):e==="style"?jE(t,n,r):na(e)?yl(e)||qE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JE(t,e,r,o))?(ef(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(r))?ef(t,Ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zh(t,e,r,o))};function JE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rf(e)&&$e(n)?!1:e in t}const sf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>fo(e,n):e};function XE(t){t.target.composing=!0}function of(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const lc=Symbol("_assign"),GC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[lc]=sf(s);const i=r||s.props&&s.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=bc(c)),t[lc](c)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",XE),Kr(t,"compositionend",of),Kr(t,"change",of))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[lc]=sf(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?bc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ZE=["ctrl","shift","alt","meta"],eT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ZE.some(n=>t[`${n}Key`]&&!e.includes(n))},QC=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=eT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},tT=ht({patchProp:YE},xE);let af;function nT(){return af||(af=iE(tT))}const rT=(...t)=>{const e=nT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=iT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,sT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function iT(t){return $e(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const oT=Symbol();var cf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(cf||(cf={}));function aT(){const t=Xy(!0),e=t.run(()=>kl({}));let n=[],r=[];const s=kp({install(i){s._a=i,i.provide(oT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof document<"u";function gg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&gg(t.default)}const we=Object.assign;function uc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Qt(s)?s.map(t):t(s)}return n}const ni=()=>{},Qt=Array.isArray,mg=/#/g,lT=/&/g,uT=/\//g,hT=/=/g,fT=/\?/g,_g=/\+/g,dT=/%5B/g,pT=/%5D/g,yg=/%5E/g,gT=/%60/g,vg=/%7B/g,mT=/%7C/g,Eg=/%7D/g,_T=/%20/g;function xl(t){return encodeURI(""+t).replace(mT,"|").replace(dT,"[").replace(pT,"]")}function yT(t){return xl(t).replace(vg,"{").replace(Eg,"}").replace(yg,"^")}function Bc(t){return xl(t).replace(_g,"%2B").replace(_T,"+").replace(mg,"%23").replace(lT,"%26").replace(gT,"`").replace(vg,"{").replace(Eg,"}").replace(yg,"^")}function vT(t){return Bc(t).replace(hT,"%3D")}function ET(t){return xl(t).replace(mg,"%23").replace(fT,"%3F")}function TT(t){return t==null?"":ET(t).replace(uT,"%2F")}function gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const IT=/\/$/,wT=t=>t.replace(IT,"");function hc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ST(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:gi(o)}}function AT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function RT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&Tg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bT(t[n],e[n]))return!1;return!0}function bT(t,e){return Qt(t)?uf(t,e):Qt(e)?uf(e,t):t===e}function uf(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ST(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function PT(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wT(t)}const CT=/^[^#]+#/;function kT(t,e){return t.replace(CT,"#")+e}function OT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const pa=()=>({left:window.scrollX,top:window.scrollY});function DT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=OT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hf(t,e){return(history.state?history.state.position-e:-1)+t}const jc=new Map;function NT(t,e){jc.set(t,e)}function VT(t){const e=jc.get(t);return jc.delete(t),e}let xT=()=>location.protocol+"//"+location.host;function Ig(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),lf(l,"")}return lf(n,t)+r+s}function LT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=Ig(t,location),C=n.value,D=e.value;let O=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}O=D?m.position-D.position:0}else r(_);s.forEach(H=>{H(n.value,C,{delta:O,type:mi.pop,direction:O?O>0?ri.forward:ri.back:ri.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(we({},m.state,{scroll:pa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function ff(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?pa():null}}function MT(t){const{history:e,location:n}=window,r={value:Ig(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:xT()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,h){const f=we({},e.state,ff(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:pa()});i(f.current,f,!0);const p=we({},ff(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function UT(t){t=PT(t);const e=MT(t),n=LT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:kT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function FT(t){return typeof t=="string"||t&&typeof t=="object"}function wg(t){return typeof t=="string"||typeof t=="symbol"}const Ag=Symbol("");var df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(df||(df={}));function fs(t,e){return we(new Error,{type:t,[Ag]:!0},e)}function _n(t,e){return t instanceof Error&&Ag in t&&(e==null||!!(t.type&e))}const pf="[^/]+?",BT={sensitive:!1,strict:!1,start:!0,end:!0},jT=/[.+*?^${}()[\]/\\]/g;function $T(t,e){const n=we({},BT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(jT,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:D,optional:O,regexp:H}=m;i.push({name:C,repeatable:D,optional:O});const F=H||pf;if(F!==pf){_+=10;try{new RegExp(`(${F})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${F}): `+$.message)}}let j=D?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(j=O&&h.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),D&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:D,optional:O}=_,H=C in h?h[C]:"";if(Qt(H)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const F=Qt(H)?H.join("/"):H;if(!F)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function HT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Rg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=HT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gf(r))return 1;if(gf(s))return-1}return s.length-r.length}function gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qT={type:0,value:""},zT=/[a-zA-Z0-9_]/;function WT(t){if(!t)return[[]];if(t==="/")return[[qT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:zT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function KT(t,e,n){const r=$T(WT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function GT(t,e){const n=[],r=new Map;e=vf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,D=_f(p);D.aliasOf=_&&_.record;const O=vf(e,p),H=[D];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of $)H.push(_f(we({},D,{components:_?_.record.components:D.components,path:ae,aliasOf:_?_.record:D})))}let F,j;for(const $ of H){const{path:ae}=$;if(m&&ae[0]!=="/"){const he=m.record.path,w=he[he.length-1]==="/"?"":"/";$.path=m.record.path+(ae&&w+ae)}if(F=KT($,m,O),_?_.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),C&&p.name&&!yf(F)&&o(p.name)),bg(F)&&l(F),D.children){const he=D.children;for(let w=0;w<he.length;w++)i(he[w],F,_&&_.children[w])}_=_||F}return j?()=>{o(j)}:ni}function o(p){if(wg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=JT(p,n);n.splice(m,0,p),p.record.name&&!yf(p)&&r.set(p.record.name,p)}function h(p,m){let _,C={},D,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw fs(1,{location:p});O=_.record.name,C=we(mf(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&mf(p.params,_.keys.map(j=>j.name))),D=_.stringify(C)}else if(p.path!=null)D=p.path,_=n.find(j=>j.re.test(D)),_&&(C=_.parse(D),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw fs(1,{location:p,currentLocation:m});O=_.record.name,C=we({},m.params,p.params),D=_.stringify(C)}const H=[];let F=_;for(;F;)H.unshift(F.record),F=F.parent;return{name:O,path:D,params:C,matched:H,meta:YT(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _f(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:QT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function QT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function YT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function vf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function JT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Rg(t,e[i])<0?r=i:n=i+1}const s=XT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function XT(t){let e=t;for(;e=e.parent;)if(bg(e)&&Rg(t,e)===0)return e}function bg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ZT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_g," "),o=i.indexOf("="),c=gi(o<0?i:i.slice(0,o)),l=o<0?null:gi(i.slice(o+1));if(c in e){let h=e[c];Qt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Ef(t){let e="";for(let n in t){const r=t[n];if(n=vT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(i=>i&&Bc(i)):[r&&Bc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function eI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const tI=Symbol(""),Tf=Symbol(""),ga=Symbol(""),Ll=Symbol(""),$c=Symbol("");function js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(fs(4,{from:n,to:e})):m instanceof Error?l(m):FT(m)?l(fs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function fc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(gg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(jn(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=cT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&jn(_,n,r,o,c,s)()}))}}return i}function If(t){const e=Wt(ga),n=Wt(Ll),r=Ht(()=>{const l=An(t.to);return e.resolve(l)}),s=Ht(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(hs.bind(null,f));if(m>-1)return m;const _=wf(l[h-2]);return h>1&&wf(f)===_&&p[p.length-1].path!==_?p.findIndex(hs.bind(null,l[h-2])):m}),i=Ht(()=>s.value>-1&&iI(n.params,r.value.params)),o=Ht(()=>s.value>-1&&s.value===n.matched.length-1&&Tg(n.params,r.value.params));function c(l={}){if(sI(l)){const h=e[An(t.replace)?"replace":"push"](An(t.to)).catch(ni);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ht(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function nI(t){return t.length===1?t[0]:t}const rI=Si({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:If,setup(t,{slots:e}){const n=ca(If(t)),{options:r}=Wt(ga),s=Ht(()=>({[Af(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Af(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&nI(e.default(n));return t.custom?i:dg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Hc=rI;function sI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function wf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Af=(t,e,n)=>t??e??n,oI=Si({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt($c),s=Ht(()=>t.route||r.value),i=Wt(Tf,0),o=Ht(()=>{let h=An(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Ht(()=>s.value.matched[o.value]);po(Tf,Ht(()=>o.value+1)),po(tI,c),po($c,s);const l=kl();return go(()=>[l.value,c.value,t.name],([h,f,p],[m,_,C])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!hs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Rf(n.default,{Component:m,route:h});const _=p.props[f],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,O=dg(m,we({},C,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Rf(n.default,{Component:O,route:h})||O}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sg=oI;function aI(t){const e=GT(t.routes,t),n=t.parseQuery||ZT,r=t.stringifyQuery||Ef,s=t.history,i=js(),o=js(),c=js(),l=yv(Mn);let h=Mn;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=uc.bind(null,N=>""+N),p=uc.bind(null,TT),m=uc.bind(null,gi);function _(N,Y){let G,X;return wg(N)?(G=e.getRecordMatcher(N),X=Y):X=N,e.addRoute(X,G)}function C(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function D(){return e.getRoutes().map(N=>N.record)}function O(N){return!!e.getRecordMatcher(N)}function H(N,Y){if(Y=we({},Y||l.value),typeof N=="string"){const b=hc(n,N,Y.path),V=e.resolve({path:b.path},Y),M=s.createHref(b.fullPath);return we(b,V,{params:m(V.params),hash:gi(b.hash),redirectedFrom:void 0,href:M})}let G;if(N.path!=null)G=we({},N,{path:hc(n,N.path,Y.path).path});else{const b=we({},N.params);for(const V in b)b[V]==null&&delete b[V];G=we({},N,{params:p(b)}),Y.params=p(Y.params)}const X=e.resolve(G,Y),Te=N.hash||"";X.params=f(m(X.params));const v=AT(r,we({},N,{hash:yT(Te),path:X.path})),E=s.createHref(v);return we({fullPath:v,hash:Te,query:r===Ef?eI(N.query):N.query||{}},X,{redirectedFrom:void 0,href:E})}function F(N){return typeof N=="string"?hc(n,N,l.value.path):we({},N)}function j(N,Y){if(h!==N)return fs(8,{from:Y,to:N})}function $(N){return w(N)}function ae(N){return $(we(F(N),{replace:!0}))}function he(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:G}=Y;let X=typeof G=="function"?G(N):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=F(X):{path:X},X.params={}),we({query:N.query,hash:N.hash,params:X.path!=null?{}:N.params},X)}}function w(N,Y){const G=h=H(N),X=l.value,Te=N.state,v=N.force,E=N.replace===!0,b=he(G);if(b)return w(we(F(b),{state:typeof b=="object"?we({},Te,b.state):Te,force:v,replace:E}),Y||G);const V=G;V.redirectedFrom=Y;let M;return!v&&RT(r,X,G)&&(M=fs(16,{to:V,from:X}),xt(X,X,!0,!1)),(M?Promise.resolve(M):A(V,X)).catch(x=>_n(x)?_n(x,2)?x:jt(x):ge(x,V,X)).then(x=>{if(x){if(_n(x,2))return w(we({replace:E},F(x.to),{state:typeof x.to=="object"?we({},Te,x.to.state):Te,force:v}),Y||V)}else x=S(V,X,!0,E,Te);return R(V,X,x),x})}function y(N,Y){const G=j(N,Y);return G?Promise.reject(G):Promise.resolve()}function I(N){const Y=Dn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function A(N,Y){let G;const[X,Te,v]=cI(N,Y);G=fc(X.reverse(),"beforeRouteLeave",N,Y);for(const b of X)b.leaveGuards.forEach(V=>{G.push(jn(V,N,Y))});const E=y.bind(null,N,Y);return G.push(E),Et(G).then(()=>{G=[];for(const b of i.list())G.push(jn(b,N,Y));return G.push(E),Et(G)}).then(()=>{G=fc(Te,"beforeRouteUpdate",N,Y);for(const b of Te)b.updateGuards.forEach(V=>{G.push(jn(V,N,Y))});return G.push(E),Et(G)}).then(()=>{G=[];for(const b of v)if(b.beforeEnter)if(Qt(b.beforeEnter))for(const V of b.beforeEnter)G.push(jn(V,N,Y));else G.push(jn(b.beforeEnter,N,Y));return G.push(E),Et(G)}).then(()=>(N.matched.forEach(b=>b.enterCallbacks={}),G=fc(v,"beforeRouteEnter",N,Y,I),G.push(E),Et(G))).then(()=>{G=[];for(const b of o.list())G.push(jn(b,N,Y));return G.push(E),Et(G)}).catch(b=>_n(b,8)?b:Promise.reject(b))}function R(N,Y,G){c.list().forEach(X=>I(()=>X(N,Y,G)))}function S(N,Y,G,X,Te){const v=j(N,Y);if(v)return v;const E=Y===Mn,b=Gr?history.state:{};G&&(X||E?s.replace(N.fullPath,we({scroll:E&&b&&b.scroll},Te)):s.push(N.fullPath,Te)),l.value=N,xt(N,Y,G,E),jt()}let T;function dt(){T||(T=s.listen((N,Y,G)=>{if(!Yt.listening)return;const X=H(N),Te=he(X);if(Te){w(we(Te,{replace:!0,force:!0}),X).catch(ni);return}h=X;const v=l.value;Gr&&NT(hf(v.fullPath,G.delta),pa()),A(X,v).catch(E=>_n(E,12)?E:_n(E,2)?(w(we(F(E.to),{force:!0}),X).then(b=>{_n(b,20)&&!G.delta&&G.type===mi.pop&&s.go(-1,!1)}).catch(ni),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ge(E,X,v))).then(E=>{E=E||S(X,v,!1),E&&(G.delta&&!_n(E,8)?s.go(-G.delta,!1):G.type===mi.pop&&_n(E,20)&&s.go(-1,!1)),R(X,v,E)}).catch(ni)}))}let Vt=js(),Be=js(),ye;function ge(N,Y,G){jt(N);const X=Be.list();return X.length?X.forEach(Te=>Te(N,Y,G)):console.error(N),Promise.reject(N)}function bt(){return ye&&l.value!==Mn?Promise.resolve():new Promise((N,Y)=>{Vt.add([N,Y])})}function jt(N){return ye||(ye=!N,dt(),Vt.list().forEach(([Y,G])=>N?G(N):Y()),Vt.reset()),N}function xt(N,Y,G,X){const{scrollBehavior:Te}=t;if(!Gr||!Te)return Promise.resolve();const v=!G&&VT(hf(N.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return Vp().then(()=>Te(N,Y,v)).then(E=>E&&DT(E)).catch(E=>ge(E,N,Y))}const Ne=N=>s.go(N);let Ve;const Dn=new Set,Yt={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:D,resolve:H,options:t,push:$,replace:ae,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Be.add,isReady:bt,install(N){const Y=this;N.component("RouterLink",Hc),N.component("RouterView",Sg),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>An(l)}),Gr&&!Ve&&l.value===Mn&&(Ve=!0,$(s.location).catch(Te=>{}));const G={};for(const Te in Mn)Object.defineProperty(G,Te,{get:()=>l.value[Te],enumerable:!0});N.provide(ga,Y),N.provide(Ll,Pp(G)),N.provide($c,l);const X=N.unmount;Dn.add(N),N.unmount=function(){Dn.delete(N),Dn.size<1&&(h=Mn,T&&T(),T=null,l.value=Mn,Ve=!1,ye=!1),X()}}};function Et(N){return N.reduce((Y,G)=>Y.then(()=>I(G)),Promise.resolve())}return Yt}function cI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>hs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>hs(h,l))||s.push(l))}return[n,r,s]}function YC(){return Wt(ga)}function JC(t){return Wt(Ll)}const lI=Si({__name:"App",setup(t){return(e,n)=>(ss(),lg(An(Sg)))}}),uI="modulepreload",hI=function(t){return"/co_dzis_zjesc/"+t},bf={},Tt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(h=>{if(h=hI(h),h in bf)return;bf[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":uI,f||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((_,C)=>{m.addEventListener("load",_),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},fI=()=>{};var Sf={};/**
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
 */const Pg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new pI;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gI=function(t){const e=Pg(t);return Cg.encodeByteArray(e,!0)},Lo=function(t){return gI(t).replace(/\./g,"")},kg=function(t){try{return Cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _I=()=>mI().__FIREBASE_DEFAULTS__,yI=()=>{if(typeof process>"u"||typeof Sf>"u")return;const t=Sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kg(t[1]);return e&&JSON.parse(e)},ma=()=>{try{return fI()||_I()||yI()||vI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Og=t=>{var e,n;return(n=(e=ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dg=t=>{const e=Og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ng=()=>{var t;return(t=ma())===null||t===void 0?void 0:t.config},Vg=t=>{var e;return(e=ma())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),""].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function II(){var t;const e=(t=ma())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SI(){return!II()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PI(){try{return typeof indexedDB=="object"}catch{return!1}}function CI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const kI="FirebaseError";class dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kI,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dn(s,c,r)}}function OI(t,e){return t.replace(DI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DI=/\{\$([^}]+)}/g;function NI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Pf(i)&&Pf(o)){if(!Pr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pf(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VI(t,e){const n=new xI(t,e);return n.subscribe.bind(n)}class xI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=dc),s.error===void 0&&(s.error=dc),s.complete===void 0&&(s.complete=dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dc(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tr="[DEFAULT]";/**
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
 */class MI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FI(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UI(t){return t===Tr?void 0:t}function FI(t){return t.instantiationMode==="EAGER"}/**
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
 */class BI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const jI={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},$I=me.INFO,HI={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},qI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ml{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=qI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const zI=(t,e)=>e.some(n=>t instanceof n);let Cf,kf;function WI(){return Cf||(Cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KI(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lg=new WeakMap,qc=new WeakMap,Mg=new WeakMap,pc=new WeakMap,Ul=new WeakMap;function GI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lg.set(n,t)}).catch(()=>{}),Ul.set(e,t),e}function QI(t){if(qc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YI(t){zc=t(zc)}function JI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gc(this),e,...n);return Mg.set(r,e.sort?e.sort():[e]),Gn(r)}:KI().includes(t)?function(...e){return t.apply(gc(this),e),Gn(Lg.get(this))}:function(...e){return Gn(t.apply(gc(this),e))}}function XI(t){return typeof t=="function"?JI(t):(t instanceof IDBTransaction&&QI(t),zI(t,WI())?new Proxy(t,zc):t)}function Gn(t){if(t instanceof IDBRequest)return GI(t);if(pc.has(t))return pc.get(t);const e=XI(t);return e!==t&&(pc.set(t,e),Ul.set(e,t)),e}const gc=t=>Ul.get(t);function ZI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ew=["get","getKey","getAll","getAllKeys","count"],tw=["put","add","delete","clear"],mc=new Map;function Of(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mc.get(e))return mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ew.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return mc.set(e,i),i}YI(t=>({...t,get:(e,n,r)=>Of(e,n)||t.get(e,n,r),has:(e,n)=>!!Of(e,n)||t.has(e,n)}));/**
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
 */class nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",Df="0.11.5";/**
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
 */const Sn=new Ml("@firebase/app"),sw="@firebase/app-compat",iw="@firebase/analytics-compat",ow="@firebase/analytics",aw="@firebase/app-check-compat",cw="@firebase/app-check",lw="@firebase/auth",uw="@firebase/auth-compat",hw="@firebase/database",fw="@firebase/data-connect",dw="@firebase/database-compat",pw="@firebase/functions",gw="@firebase/functions-compat",mw="@firebase/installations",_w="@firebase/installations-compat",yw="@firebase/messaging",vw="@firebase/messaging-compat",Ew="@firebase/performance",Tw="@firebase/performance-compat",Iw="@firebase/remote-config",ww="@firebase/remote-config-compat",Aw="@firebase/storage",Rw="@firebase/storage-compat",bw="@firebase/firestore",Sw="@firebase/vertexai",Pw="@firebase/firestore-compat",Cw="firebase",kw="11.6.1";/**
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
 */const Kc="[DEFAULT]",Ow={[Wc]:"fire-core",[sw]:"fire-core-compat",[ow]:"fire-analytics",[iw]:"fire-analytics-compat",[cw]:"fire-app-check",[aw]:"fire-app-check-compat",[lw]:"fire-auth",[uw]:"fire-auth-compat",[hw]:"fire-rtdb",[fw]:"fire-data-connect",[dw]:"fire-rtdb-compat",[pw]:"fire-fn",[gw]:"fire-fn-compat",[mw]:"fire-iid",[_w]:"fire-iid-compat",[yw]:"fire-fcm",[vw]:"fire-fcm-compat",[Ew]:"fire-perf",[Tw]:"fire-perf-compat",[Iw]:"fire-rc",[ww]:"fire-rc-compat",[Aw]:"fire-gcs",[Rw]:"fire-gcs-compat",[bw]:"fire-fst",[Pw]:"fire-fst-compat",[Sw]:"fire-vertex","fire-js":"fire-js",[Cw]:"fire-js-all"};/**
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
 */const Mo=new Map,Dw=new Map,Gc=new Map;function Nf(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cr(t){const e=t.name;if(Gc.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Mo.values())Nf(n,t);for(const n of Dw.values())Nf(n,t);return!0}function _a(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Nw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Ci("app","Firebase",Nw);/**
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
 */class Vw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Lr=kw;function Ug(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(n||(n=Ng()),!n)throw Qn.create("no-options");const i=Mo.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const o=new BI(s);for(const l of Gc.values())o.addComponent(l);const c=new Vw(n,r,o);return Mo.set(s,c),c}function Fl(t=Kc){const e=Mo.get(t);if(!e&&t===Kc&&Ng())return Ug();if(!e)throw Qn.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=Ow[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(c.join(" "));return}Cr(new Xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xw="firebase-heartbeat-database",Lw=1,_i="firebase-heartbeat-store";let _c=null;function Fg(){return _c||(_c=ZI(xw,Lw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),_c}async function Mw(t){try{const n=(await Fg()).transaction(_i),r=await n.objectStore(_i).get(Bg(t));return await n.done,r}catch(e){if(e instanceof dn)Sn.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function Vf(t,e){try{const r=(await Fg()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,Bg(t)),await r.done}catch(n){if(n instanceof dn)Sn.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function Bg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uw=1024,Fw=30;class Bw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $w(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Fw){const o=Hw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xf(),{heartbeatsToSend:r,unsentEntries:s}=jw(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sn.warn(n),""}}}function xf(){return new Date().toISOString().substring(0,10)}function jw(t,e=Uw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $w{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PI()?CI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lf(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}function Hw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function qw(t){Cr(new Xn("platform-logger",e=>new nw(e),"PRIVATE")),Cr(new Xn("heartbeat",e=>new Bw(e),"PRIVATE")),sn(Wc,Df,t),sn(Wc,Df,"esm2017"),sn("fire-js","")}qw("");var zw="firebase",Ww="11.6.1";/**
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
 */sn(zw,Ww,"app");const Kw={apiKey:"AIzaSyALavVRjmPta6tbAYUnXcb2oZo74Z3liFo",authDomain:"psm-project-e2c8f.firebaseapp.com",projectId:"psm-project-e2c8f",storageBucket:"psm-project-e2c8f.firebasestorage.app",messagingSenderId:"930428013604",appId:"1:930428013604:web:2f9126f4d7b782e9b05cb1"},Bl=Ug(Kw);/**
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
 */const jg="firebasestorage.googleapis.com",$g="storageBucket",Gw=2*60*1e3,Qw=10*60*1e3;/**
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
 */class Ue extends dn{constructor(e,n,r=0){super(yc(e),`Firebase Storage: ${n} (${yc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function yc(t){return"storage/"+t}function jl(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Me.UNKNOWN,t)}function Yw(t){return new Ue(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Jw(t){return new Ue(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Xw(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Me.UNAUTHENTICATED,t)}function Zw(){return new Ue(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eA(t){return new Ue(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function tA(){return new Ue(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nA(){return new Ue(Me.CANCELED,"User canceled the upload/download.")}function rA(t){return new Ue(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function sA(t){return new Ue(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iA(){return new Ue(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$g+"' property when initializing the app?")}function oA(){return new Ue(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aA(){return new Ue(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cA(t){return new Ue(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qc(t){return new Ue(Me.INVALID_ARGUMENT,t)}function Hg(){return new Ue(Me.APP_DELETED,"The Firebase app was deleted.")}function lA(t){return new Ue(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function si(t,e){return new Ue(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $s(t){throw new Ue(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw sA(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h($){$.path_=decodeURIComponent($.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},D=n===jg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",H=new RegExp(`^https?://${D}/${s}/${O}`,"i"),j=[{regex:c,indices:l,postModify:i},{regex:_,indices:C,postModify:h},{regex:H,indices:{bucket:1,path:2},postModify:h}];for(let $=0;$<j.length;$++){const ae=j[$],he=ae.regex.exec(e);if(he){const w=he[ae.indices.bucket];let y=he[ae.indices.path];y||(y=""),r=new Dt(w,y),ae.postModify(r);break}}if(r==null)throw rA(e);return r}}class uA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function hA(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,l())},O)}function m(){i&&clearTimeout(i)}function _(O,...H){if(h){m();return}if(O){m(),f.call(null,O,...H);return}if(l()||o){m(),f.call(null,O,...H);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,p(j)}let C=!1;function D(O){C||(C=!0,m(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function fA(t){t(!1)}/**
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
 */function dA(t){return t!==void 0}function pA(t){return typeof t=="object"&&!Array.isArray(t)}function $l(t){return typeof t=="string"||t instanceof String}function Mf(t){return Hl()&&t instanceof Blob}function Hl(){return typeof Blob<"u"}function Uf(t,e,n,r){if(r<e)throw Qc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ql(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qg(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Rr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rr||(Rr={}));/**
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
 */function gA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class mA{constructor(e,n,r,s,i,o,c,l,h,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,C)=>{this.resolve_=_,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new so(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Rr.NO_ERROR,l=i.getStatus();if(!c||gA(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Rr.ABORT;r(!1,new so(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new so(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());dA(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=jl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Hg():nA();o(l)}else{const l=tA();o(l)}};this.canceled_?n(!1,new so(!1,null,!0)):this.backoffId_=hA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class so{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function _A(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function EA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TA(t,e,n,r,s,i,o=!0){const c=qg(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return vA(h,e),_A(h,n),yA(h,i),EA(h,r),new mA(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function IA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wA(...t){const e=IA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Hl())return new Blob(t);throw new Ue(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function RA(t){if(typeof atob>"u")throw cA("base-64");return atob(t)}/**
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
 */const nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vc{constructor(e,n){this.data=e,this.contentType=n||null}}function bA(t,e){switch(t){case nn.RAW:return new vc(zg(e));case nn.BASE64:case nn.BASE64URL:return new vc(Wg(t,e));case nn.DATA_URL:return new vc(PA(e),CA(e))}throw jl()}function zg(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function SA(t){let e;try{e=decodeURIComponent(t)}catch{throw si(nn.DATA_URL,"Malformed data URL.")}return zg(e)}function Wg(t,e){switch(t){case nn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw si(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case nn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw si(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=RA(e)}catch(s){throw s.message.includes("polyfill")?s:si(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Kg{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw si(nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PA(t){const e=new Kg(t);return e.base64?Wg(nn.BASE64,e.rest):SA(e.rest)}function CA(t){return new Kg(t).contentType}function kA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class $n{constructor(e,n){let r=0,s="";Mf(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mf(this.data_)){const r=this.data_,s=AA(r,e,n);return s===null?null:new $n(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new $n(r,!0)}}static getBlob(...e){if(Hl()){const n=e.map(r=>r instanceof $n?r.data_:r);return new $n(wA.apply(null,n))}else{const n=e.map(o=>$l(o)?bA(nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new $n(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Gg(t){let e;try{e=JSON.parse(t)}catch{return null}return pA(e)?e:null}/**
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
 */function OA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function DA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Qg(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function NA(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||NA}}let io=null;function VA(t){return!$l(t)||t.length<2?t:Qg(t)}function Yg(){if(io)return io;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return VA(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),io=t,io}function xA(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Dt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function LA(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return xA(r,t),r}function Jg(t,e,n){const r=Gg(e);return r===null?null:LA(t,r,n)}function MA(t,e,n,r){const s=Gg(e);if(s===null||!$l(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),_=ql(m,n,r),C=qg({alt:"media",token:h});return _+C})[0]}function UA(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Xg{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zg(t){if(!t)throw jl()}function FA(t,e){function n(r,s){const i=Jg(t,s,e);return Zg(i!==null),i}return n}function BA(t,e){function n(r,s){const i=Jg(t,s,e);return Zg(i!==null),MA(i,s,t.host,t._protocol)}return n}function em(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Zw():s=Xw():n.getStatus()===402?s=Jw(t.bucket):n.getStatus()===403?s=eA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function jA(t){const e=em(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Yw(t.path)),i.serverResponse=s.serverResponse,i}return n}function $A(t,e,n){const r=e.fullServerUrl(),s=ql(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Xg(s,i,BA(t,n),o);return c.errorHandler=jA(e),c}function HA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=HA(null,e)),r}function zA(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let j="";for(let $=0;$<2;$++)j=j+Math.random().toString().slice(2);return j}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=qA(e,r,s),f=UA(h,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=$n.getBlob(p,r,m);if(_===null)throw oA();const C={name:h.fullPath},D=ql(i,t.host,t._protocol),O="POST",H=t.maxUploadRetryTime,F=new Xg(D,O,FA(t,n),H);return F.urlParams=C,F.headers=o,F.body=_.uploadData(),F.errorHandler=em(e),F}class WA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw $s("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $s("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $s("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $s("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $s("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class KA extends WA{initXhr(){this.xhr_.responseType="text"}}function tm(){return new KA}/**
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
 */class kr{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new kr(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qg(this._location.path)}get storage(){return this._service}get parent(){const e=OA(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new kr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lA(e)}}function GA(t,e,n){t._throwIfRoot("uploadBytes");const r=zA(t.storage,t._location,Yg(),new $n(e,!0),n);return t.storage.makeRequestWithTokens(r,tm).then(s=>({metadata:s,ref:t}))}function QA(t){t._throwIfRoot("getDownloadURL");const e=$A(t.storage,t._location,Yg());return t.storage.makeRequestWithTokens(e,tm).then(n=>{if(n===null)throw aA();return n})}function YA(t,e){const n=DA(t._location.path,e),r=new Dt(t._location.bucket,n);return new kr(t.storage,r)}/**
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
 */function JA(t){return/^[A-Za-z]+:\/\//.test(t)}function XA(t,e){return new kr(t,e)}function nm(t,e){if(t instanceof zl){const n=t;if(n._bucket==null)throw iA();const r=new kr(n,n._bucket);return e!=null?nm(r,e):r}else return e!==void 0?YA(t,e):t}function ZA(t,e){if(e&&JA(e)){if(t instanceof zl)return XA(t,e);throw Qc("To use ref(service, url), the first argument must be a Storage instance.")}else return nm(t,e)}function Ff(t,e){const n=e==null?void 0:e[$g];return n==null?null:Dt.makeFromBucketSpec(n,t)}function eR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:xg(s,t.app.options.projectId))}class zl{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=jg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Gw,this._maxUploadRetryTime=Qw,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=Ff(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=Ff(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new uA(Hg());{const o=TA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Bf="@firebase/storage",jf="0.13.7";/**
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
 */const rm="storage";function tR(t,e,n){return t=We(t),GA(t,e,n)}function nR(t){return t=We(t),QA(t)}function rR(t,e){return t=We(t),ZA(t,e)}function sR(t=Fl(),e){t=We(t);const r=_a(t,rm).getImmediate({identifier:e}),s=Dg("storage");return s&&iR(r,...s),r}function iR(t,e,n,r={}){eR(t,e,n,r)}function oR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new zl(n,r,s,e,Lr)}function aR(){Cr(new Xn(rm,oR,"PUBLIC").setMultipleInstances(!0)),sn(Bf,jf,""),sn(Bf,jf,"esm2017")}aR();var $f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yn,sm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,R,S){for(var T=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)T[dt-2]=arguments[dt];return y.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,I){I||(I=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],R=w.g[2];var S=w.g[3],T=y+(S^I&(R^S))+A[0]+3614090360&4294967295;y=I+(T<<7&4294967295|T>>>25),T=S+(R^y&(I^R))+A[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(I^S&(y^I))+A[2]+606105819&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(y^R&(S^y))+A[3]+3250441966&4294967295,I=R+(T<<22&4294967295|T>>>10),T=y+(S^I&(R^S))+A[4]+4118548399&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(R^y&(I^R))+A[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(I^S&(y^I))+A[6]+2821735955&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(y^R&(S^y))+A[7]+4249261313&4294967295,I=R+(T<<22&4294967295|T>>>10),T=y+(S^I&(R^S))+A[8]+1770035416&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(R^y&(I^R))+A[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(I^S&(y^I))+A[10]+4294925233&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(y^R&(S^y))+A[11]+2304563134&4294967295,I=R+(T<<22&4294967295|T>>>10),T=y+(S^I&(R^S))+A[12]+1804603682&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(R^y&(I^R))+A[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(I^S&(y^I))+A[14]+2792965006&4294967295,R=S+(T<<17&4294967295|T>>>15),T=I+(y^R&(S^y))+A[15]+1236535329&4294967295,I=R+(T<<22&4294967295|T>>>10),T=y+(R^S&(I^R))+A[1]+4129170786&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(y^I))+A[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^I&(S^y))+A[11]+643717713&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(R^S))+A[0]+3921069994&4294967295,I=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(I^R))+A[5]+3593408605&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(y^I))+A[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^I&(S^y))+A[15]+3634488961&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(R^S))+A[4]+3889429448&4294967295,I=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(I^R))+A[9]+568446438&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(y^I))+A[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^I&(S^y))+A[3]+4107603335&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(R^S))+A[8]+1163531501&4294967295,I=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(I^R))+A[13]+2850285829&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^R&(y^I))+A[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^I&(S^y))+A[7]+1735328473&4294967295,R=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(R^S))+A[12]+2368359562&4294967295,I=R+(T<<20&4294967295|T>>>12),T=y+(I^R^S)+A[5]+4294588738&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^R)+A[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^I)+A[11]+1839030562&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^y)+A[14]+4259657740&4294967295,I=R+(T<<23&4294967295|T>>>9),T=y+(I^R^S)+A[1]+2763975236&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^R)+A[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^I)+A[7]+4139469664&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^y)+A[10]+3200236656&4294967295,I=R+(T<<23&4294967295|T>>>9),T=y+(I^R^S)+A[13]+681279174&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^R)+A[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^I)+A[3]+3572445317&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^y)+A[6]+76029189&4294967295,I=R+(T<<23&4294967295|T>>>9),T=y+(I^R^S)+A[9]+3654602809&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^R)+A[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^I)+A[15]+530742520&4294967295,R=S+(T<<16&4294967295|T>>>16),T=I+(R^S^y)+A[2]+3299628645&4294967295,I=R+(T<<23&4294967295|T>>>9),T=y+(R^(I|~S))+A[0]+4096336452&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~R))+A[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~I))+A[14]+2878612391&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~y))+A[5]+4237533241&4294967295,I=R+(T<<21&4294967295|T>>>11),T=y+(R^(I|~S))+A[12]+1700485571&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~R))+A[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~I))+A[10]+4293915773&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~y))+A[1]+2240044497&4294967295,I=R+(T<<21&4294967295|T>>>11),T=y+(R^(I|~S))+A[8]+1873313359&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~R))+A[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~I))+A[6]+2734768916&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~y))+A[13]+1309151649&4294967295,I=R+(T<<21&4294967295|T>>>11),T=y+(R^(I|~S))+A[4]+4149444226&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~R))+A[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~I))+A[2]+718787259&4294967295,R=S+(T<<15&4294967295|T>>>17),T=I+(S^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var A=0;32>A;A+=8)w[I++]=this.g[y]>>>A&255;return w};function i(w,y){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;for(var I=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==y||(I[R]=S,A=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(h(-w));for(var y=[],I=1,A=0;w>=I;A++)y[A]=w/I|0,I*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(y,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),T=parseInt(w.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(D(this))return"-"+O(this).toString(w);for(var y=h(Math.pow(w,6)),I=this,A="";;){var R=$(I,y).g;I=H(I,R.j(y));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=R,C(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=H(this,w),D(w)?-1:C(w)?0:1};function O(w){for(var y=w.g.length,I=[],A=0;A<y;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return D(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),T=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=T>>>16,S&=65535,T&=65535,I[R]=T<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function H(w,y){return w.add(O(y))}t.j=function(w){if(C(this)||C(w))return p;if(D(this))return D(w)?O(this).j(O(w)):O(O(this).j(w));if(D(w))return O(this.j(O(w)));if(0>this.l(_)&&0>w.l(_))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,T=this.i(A)&65535,dt=w.i(R)>>>16,Vt=w.i(R)&65535;I[2*A+2*R]+=T*Vt,F(I,2*A+2*R),I[2*A+2*R+1]+=S*Vt,F(I,2*A+2*R+1),I[2*A+2*R+1]+=T*dt,F(I,2*A+2*R+1),I[2*A+2*R+2]+=S*dt,F(I,2*A+2*R+2)}for(A=0;A<y;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=y;A<2*y;A++)I[A]=0;return new o(I,0)};function F(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function j(w,y){this.g=w,this.h=y}function $(w,y){if(C(y))throw Error("division by zero");if(C(w))return new j(p,p);if(D(w))return y=$(O(w),y),new j(O(y.g),O(y.h));if(D(y))return y=$(w,O(y)),new j(O(y.g),y.h);if(30<w.g.length){if(D(w)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;0>=A.l(w);)I=ae(I),A=ae(A);var R=he(I,1),S=he(A,1);for(A=he(A,2),I=he(I,2);!C(A);){var T=S.add(A);0>=T.l(w)&&(R=R.add(I),S=T),A=he(A,1),I=he(I,1)}return y=H(w,R.j(y)),new j(R,y)}for(R=p;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),T=S.j(y);D(T)||0<T.l(w);)I-=A,S=h(I),T=S.j(y);C(S)&&(S=m),R=R.add(S),w=H(w,T)}return new j(R,w)}t.A=function(w){return $(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function ae(w){for(var y=w.g.length+1,I=[],A=0;A<y;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function he(w,y){var I=y>>5;y%=32;for(var A=w.g.length-I,R=[],S=0;S<A;S++)R[S]=0<y?w.i(S+I)>>>y|w.i(S+I+1)<<32-y:w.i(S+I);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Yn=o}).apply(typeof $f<"u"?$f:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var im,Ws,om,vo,Yc,am,cm,lm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var k=d++;return{value:u(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,k){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return u.prototype[P].apply(g,W)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function O(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const P=a.length||0,k=g.length||0;a.length=P+k;for(let W=0;W<k;W++)a[P+W]=g[W]}else a.push(g)}}class H{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var ae=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function he(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let k=0;k<I.length;k++)d=I[k],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=bt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const g=Vt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Vt=new H(()=>new Be,a=>a.reset());class Be{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,bt=new dt,jt=()=>{const a=c.Promise.resolve(void 0);ye=()=>{a.then(xt)}};var xt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var u=Vt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Dn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Yt(a,u){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ae){e:{try{$(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Et[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Yt.aa.h.call(this)}}C(Yt,Ve);var Et={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),Y=0;function G(a,u,d,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++Y,this.da=this.fa=!1}function X(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,u,d,g,P){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var W=E(a,u,g,P);return-1<W?(u=a[W],d||(u.fa=!1)):(u=new G(u,this.src,k,!!g,P),u.fa=d,a.push(u)),u};function v(a,u){var d=u.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(g,P,1),k&&(X(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function E(a,u,d,g){for(var P=0;P<a.length;++P){var k=a[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==g)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),V={};function M(a,u,d,g,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)M(a,u[k],d,g,P);return null}return d=oe(d),a&&a[N]?a.K(u,d,h(g)?!!g.capture:!1,P):x(a,u,d,!1,g,P)}function x(a,u,d,g,P,k){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,Se=Q(a);if(Se||(a[b]=Se=new Te(a)),d=Se.add(u,d,g,W,k),d.proxy)return d;if(g=K(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Dn||(P=W),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(B(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function z(a,u,d,g,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)z(a,u[k],d,g,P);else g=h(g)?!!g.capture:!!g,d=oe(d),a&&a[N]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],d=E(k,d,g,P),-1<d&&(X(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=E(u,d,g,P)),(d=-1<a?u[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[N])v(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(B(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(v(d,a),d.h==0&&(d.src=null,u[b]=null)):X(a)}}}function B(a){return a in V?V[a]:V[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new Yt(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&q(a),a=d.call(g,u)}return a}function Q(a){return a=a[b],a instanceof Te?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){Ne.call(this),this.i=new Te(this),this.M=this,this.F=null}C(re,Ne),re.prototype[N]=!0,re.prototype.removeEventListener=function(a,u,d,g){z(this,a,u,d,g)};function de(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Ve(u,a);else if(u instanceof Ve)u.target=u.target||a;else{var P=u;u=new Ve(g,a),A(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var W=u.g=d[k];P=ve(W,g,!0,u)&&P}if(W=u.g=a,P=ve(W,g,!0,u)&&P,P=ve(W,g,!1,u)&&P,d)for(k=0;k<d.length;k++)W=u.g=d[k],P=ve(W,g,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)X(d[g]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},re.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function ve(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var W=u[k];if(W&&!W.da&&W.capture==d){var Se=W.listener,Ye=W.ha||W.src;W.fa&&v(a.i,W),P=Se.call(Ye,g)!==!1&&P}}return P&&!g.defaultPrevented}function et(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ge(a){a.g=et(()=>{a.g=null,a.i&&(a.i=!1,Ge(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Lt extends Ne{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(a){Ne.call(this),this.h=a,this.g={}}C(tt,Ne);var Nn=[];function bs(a){he(a.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},a),a.g={}}tt.prototype.N=function(){tt.aa.N.call(this),bs(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,Mt=c.JSON.parse,Fi=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ua(){}Ua.prototype.h=null;function Bu(a){return a.h||(a.h=a.i())}function ju(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fa(){Ve.call(this,"d")}C(Fa,Ve);function Ba(){Ve.call(this,"c")}C(Ba,Ve);var pr={},$u=null;function Bi(){return $u=$u||new re}pr.La="serverreachability";function Hu(a){Ve.call(this,pr.La,a)}C(Hu,Ve);function Ps(a){const u=Bi();de(u,new Hu(u))}pr.STAT_EVENT="statevent";function qu(a,u){Ve.call(this,pr.STAT_EVENT,a),this.stat=u}C(qu,Ve);function pt(a){const u=Bi();de(u,new qu(u,a))}pr.Ma="timingevent";function zu(a,u){Ve.call(this,pr.Ma,a),this.size=u}C(zu,Ve);function Cs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function yy(a,u,d,g,P,k){a.info(function(){if(a.g)if(k)for(var W="",Se=k.split("&"),Ye=0;Ye<Se.length;Ye++){var Ie=Se[Ye].split("=");if(1<Ie.length){var nt=Ie[0];Ie=Ie[1];var rt=nt.split("_");W=2<=rt.length&&rt[1]=="type"?W+(nt+"="+Ie+"&"):W+(nt+"=redacted&")}}else W=null;else W=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+W})}function vy(a,u,d,g,P,k,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+W})}function jr(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ty(a,d)+(g?" "+g:"")})}function Ey(a,u){a.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function Ty(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return Qe(d)}catch{return u}}var ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ja;function $i(){}C($i,Ua),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},ja=new $i;function Vn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ku}function Ku(){this.i=null,this.g="",this.h=!1}var Gu={},$a={};function Ha(a,u,d){a.L=1,a.v=Wi(pn(u)),a.m=d,a.P=!0,Qu(a,null)}function Qu(a,u){a.F=Date.now(),Hi(a),a.A=pn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),lh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Ku,a.g=Sh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Lt(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Nn[0]=P.toString()),P=Nn);for(var k=0;k<P.length;k++){var W=M(d,P[k],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ps(),yy(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const u=this.M;u&&gn(a)==3?u.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=gn(this.g);var u=this.g.Ba();const qr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||mh(this.g)))){this.J||rt!=4||u==7||(u==8||0>=qr?Ps(3):Ps(2)),qa(this);var d=this.g.Z();this.X=d;t:if(Yu(this)){var g=mh(this.g);a="";var P=g.length,k=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Os(this);var W="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(k&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,vy(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Ye=this.g;if((Se=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Se)){var Ie=Se;break t}}Ie=null}if(d=Ie)jr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,za(this,d);else{this.o=!1,this.s=3,pt(12),gr(this),Os(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<W.length;)if($t=Iy(this,W),$t==$a){rt==4&&(this.s=4,pt(14),d=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if($t==Gu){this.s=4,pt(15),jr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else jr(this.i,this.l,$t,null),za(this,$t);if(Yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||W.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)jr(this.i,this.l,W,"[Invalid Chunked Response]"),gr(this),Os(this);else if(0<W.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Ja(nt),nt.M=!0,pt(11))}}else jr(this.i,this.l,W,null),za(this,W);rt==4&&gr(this),this.o&&!this.J&&(rt==4?wh(this.j,this):(this.o=!1,Hi(this)))}else Fy(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),gr(this),Os(this)}}}catch{}finally{}};function Yu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Iy(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?$a:(d=Number(u.substring(d,g)),isNaN(d)?Gu:(g+=1,g+d>u.length?$a:(u=u.slice(g,g+d),a.C=g+d,u)))}Vn.prototype.cancel=function(){this.J=!0,gr(this)};function Hi(a){a.S=Date.now()+a.I,Ju(a,a.I)}function Ju(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Cs(m(a.ba,a),u)}function qa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ey(this.i,this.A),this.L!=2&&(Ps(),pt(17)),gr(this),this.s=2,Os(this)):Ju(this,this.S-a)};function Os(a){a.j.G==0||a.J||wh(a.j,a)}function gr(a){qa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,bs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function za(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Wa(d.h,a))){if(!a.K&&Wa(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Xi(d),Yi(d);else break e;Ya(d),pt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Cs(m(d.Za,d),6e3));if(1>=eh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else _r(d,11)}else if((a.K||d.g==a)&&Xi(d),!F(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const nt=Ie[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=Ie[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const qr=Ie[5];qr!=null&&typeof qr=="number"&&0<qr&&(g=1.5*qr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const $t=a.g;if($t){const eo=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var k=g.h;k.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ka(k,k.h),k.h=null))}if(g.D){const Xa=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(g.ya=Xa,ke(g.I,g.D,Xa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=bh(g,g.J?g.ia:null,g.W),W.K){th(g.h,W);var Se=W,Ye=g.L;Ye&&(Se.I=Ye),Se.B&&(qa(Se),Hi(Se)),g.g=W}else Th(g);0<d.i.length&&Ji(d)}else Ie[0]!="stop"&&Ie[0]!="close"||_r(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?_r(d,7):Qa(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Ps(4)}catch{}}var wy=class{constructor(a,u){this.g=a,this.map=u}};function Xu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function eh(a){return a.h?1:a.g?a.g.size:0}function Wa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ka(a,u){a.g?a.g.add(u):a.h=u}function th(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Xu.prototype.cancel=function(){if(this.i=nh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function Ay(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function Ry(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function rh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Ry(a),g=Ay(a),P=g.length,k=0;k<P;k++)u.call(void 0,g[k],d&&d[k],a)}var sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function by(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var k=a[d].substring(0,g);P=a[d].substring(g+1)}else k=a[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof mr){this.h=a.h,qi(this,a.j),this.o=a.o,this.g=a.g,zi(this,a.s),this.l=a.l;var u=a.i,d=new Vs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ih(this,d),this.m=a.m}else a&&(u=String(a).match(sh))?(this.h=!1,qi(this,u[1]||"",!0),this.o=Ds(u[2]||""),this.g=Ds(u[3]||"",!0),zi(this,u[4]),this.l=Ds(u[5]||"",!0),ih(this,u[6]||"",!0),this.m=Ds(u[7]||"")):(this.h=!1,this.i=new Vs(null,this.h))}mr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ns(u,oh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ns(u,oh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?Cy:Py,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,Oy)),a.join("")};function pn(a){return new mr(a)}function qi(a,u,d){a.j=d?Ds(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function zi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ih(a,u,d){u instanceof Vs?(a.i=u,Dy(a.i,a.h)):(d||(u=Ns(u,ky)),a.i=new Vs(u,a.h))}function ke(a,u,d){a.i.set(u,d)}function Wi(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ds(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Sy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Sy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var oh=/[#\/\?@]/g,Py=/[#\?:]/g,Cy=/[#\?]/g,ky=/[#\?@]/g,Oy=/#/g;function Vs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&by(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Vs.prototype,t.add=function(a,u){xn(this),this.i=null,a=$r(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ah(a,u){xn(a),u=$r(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ch(a,u){return xn(a),u=$r(a,u),a.g.has(u)}t.forEach=function(a,u){xn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){xn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=a[g];for(let k=0;k<P.length;k++)d.push(u[g])}return d},t.V=function(a){xn(this);let u=[];if(typeof a=="string")ch(this,a)&&(u=u.concat(this.g.get($r(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return xn(this),this.i=null,a=$r(this,a),ch(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function lh(a,u,d){ah(a,u),0<d.length&&(a.i=null,a.g.set($r(a,u),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const k=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var P=k;W[g]!==""&&(P+="="+encodeURIComponent(String(W[g]))),a.push(P)}}return this.i=a.join("&")};function $r(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Dy(a,u){u&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(ah(this,g),lh(this,P,d))},a)),a.j=u}function Ny(a,u){const d=new ks;if(c.Image){const g=new Image;g.onload=_(Ln,d,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Ln,d,"TestLoadImage: error",!1,u,g),g.onabort=_(Ln,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Ln,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Vy(a,u){const d=new ks,g=new AbortController,P=setTimeout(()=>{g.abort(),Ln(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?Ln(d,"TestPingServer: ok",!0,u):Ln(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Ln(d,"TestPingServer: error",!1,u)})}function Ln(a,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function xy(){this.g=new Fi}function Ly(a,u,d){const g=d||"";try{rh(a,function(P,k){let W=P;h(P)&&(W=Qe(P)),u.push(g+k+"="+encodeURIComponent(W))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Ki(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ki,Ua),Ki.prototype.g=function(){return new Gi(this.l,this.j)},Ki.prototype.i=function(a){return function(){return a}}({});function Gi(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Gi,re),t=Gi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function uh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?xs(this):Ls(this),this.readyState==3&&uh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Qa=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hh(a){let u="";return he(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Ga(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=hh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ke(a,u,d))}function Le(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Le,re);var My=/^https?$/i,Uy=["POST","PUT"];t=Le.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ja.g(),this.v=this.o?Bu(this.o):Bu(ja),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){fh(this,k);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Uy,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of d)this.g.setRequestHeader(k,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){fh(this,k)}};function fh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,dh(a),Qi(a)}function dh(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ph(this):this.bb())},t.bb=function(){ph(this)};function ph(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)et(a.Ea,0,a);else if(de(a,"readystatechange"),gn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=W===0){var P=String(a.D).match(sh)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!My.test(P?P.toLowerCase():"")}d=g}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var k=2<gn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",dh(a)}}finally{Qi(a)}}}}function Qi(a,u){if(a.g){gh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||de(a,"ready");try{d.onreadystatechange=g}catch{}}}function gh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Mt(u)}};function mh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Fy(a){const u={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var d=R(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function _h(a){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,a),this.cb=Ms("retryDelaySeedMs",1e4,a),this.Wa=Ms("forwardChannelMaxRetries",2,a),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xu(a&&a.concurrentRequestLimit),this.Da=new xy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_h.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,g){pt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=bh(this,null,this.W),Ji(this)};function Qa(a){if(yh(a),a.G==3){var u=a.U++,d=pn(a.I);if(ke(d,"SID",a.K),ke(d,"RID",u),ke(d,"TYPE","terminate"),Us(a,d),u=new Vn(a,a.j,u),u.L=2,u.v=Wi(pn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Sh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hi(u)}Rh(a)}function Yi(a){a.g&&(Ja(a),a.g.cancel(),a.g=null)}function yh(a){Yi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ji(a){if(!Zu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||jt(),ge||(ye(),ge=!0),bt.add(u,a),a.B=0}}function By(a,u){return eh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Cs(m(a.Ga,a,u),Ah(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Vn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Eh(this,P,u),d=pn(this.I),ke(d,"RID",a),ke(d,"CVER",22),this.D&&ke(d,"X-HTTP-Session-Id",this.D),Us(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(hh(k)))+"&"+u:this.m&&Ga(d,this.m,k)),Ka(this.h,P),this.Ua&&ke(d,"TYPE","init"),this.P?(ke(d,"$req",u),ke(d,"SID","null"),P.T=!0,Ha(P,d,null)):Ha(P,d,u),this.G=2}}else this.G==3&&(a?vh(this,a):this.i.length==0||Zu(this.h)||vh(this))};function vh(a,u){var d;u?d=u.l:d=a.U++;const g=pn(a.I);ke(g,"SID",a.K),ke(g,"RID",d),ke(g,"AID",a.T),Us(a,g),a.m&&a.o&&Ga(g,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Eh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ka(a.h,d),Ha(d,g,u)}function Us(a,u){a.H&&he(a.H,function(d,g){ke(u,g,d)}),a.l&&rh({},function(d,g){ke(u,g,d)})}function Eh(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let k=-1;for(;;){const W=["count="+d];k==-1?0<d?(k=P[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let Se=!0;for(let Ye=0;Ye<d;Ye++){let Ie=P[Ye].g;const nt=P[Ye].map;if(Ie-=k,0>Ie)k=Math.max(0,P[Ye].g-100),Se=!1;else try{Ly(nt,W,"req"+Ie+"_")}catch{g&&g(nt)}}if(Se){g=W.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function Th(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||jt(),ge||(ye(),ge=!0),bt.add(u,a),a.v=0}}function Ya(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Cs(m(a.Fa,a),Ah(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ih(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Cs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Yi(this),Ih(this))};function Ja(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ih(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=pn(a.qa);ke(u,"RID","rpc"),ke(u,"SID",a.K),ke(u,"AID",a.T),ke(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(u,"TO",a.ja),ke(u,"TYPE","xmlhttp"),Us(a,u),a.m&&a.o&&Ga(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Wi(pn(u)),d.m=null,d.P=!0,Qu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Yi(this),Ya(this),pt(19))};function Xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function wh(a,u){var d=null;if(a.g==u){Xi(a),Ja(a),a.g=null;var g=2}else if(Wa(a.h,u))d=u.D,th(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=Bi(),de(g,new zu(g,d)),Ji(a)}else Th(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&By(a,u)||g==2&&Ya(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:_r(a,5);break;case 4:_r(a,10);break;case 3:_r(a,6);break;default:_r(a,2)}}}function Ah(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function _r(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new mr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qi(g,"https"),Wi(g),P?Ny(g.toString(),d):Vy(g.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(u),Rh(a),yh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Rh(a){if(a.G=0,a.ka=[],a.l){const u=nh(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function bh(a,u,d){var g=d instanceof mr?pn(d):new mr(d);if(g.g!="")u&&(g.g=u+"."+g.g),zi(g,g.s);else{var P=c.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new mr(null);g&&qi(k,g),u&&(k.g=u),P&&zi(k,P),d&&(k.l=d),g=k}return d=a.D,u=a.ya,d&&u&&ke(g,d,u),ke(g,"VER",a.la),Us(a,g),g}function Sh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Le(new Ki({eb:d})):new Le(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ph(){}t=Ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(a,u){return new St(a,u)};function St(a,u){re.call(this),this.g=new _h(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Hr(this)}C(St,re),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Qa(this.g)},St.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Qe(a),a=d);u.i.push(new wy(u.Ya++,a)),u.G==3&&Ji(u)},St.prototype.N=function(){this.g.l=null,delete this.j,Qa(this.g),delete this.g,St.aa.N.call(this)};function Ch(a){Fa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Ch,Fa);function kh(){Ba.call(this),this.status=1}C(kh,Ba);function Hr(a){this.g=a}C(Hr,Ph),Hr.prototype.ua=function(){de(this.g,"a")},Hr.prototype.ta=function(a){de(this.g,new Ch(a))},Hr.prototype.sa=function(a){de(this.g,new kh)},Hr.prototype.ra=function(){de(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,lm=function(){return new Zi},cm=function(){return Bi()},am=pr,Yc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,vo=ji,Wu.COMPLETE="complete",om=Wu,ju.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",re.prototype.listen=re.prototype.K,Ws=ju,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,im=Le}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const Hf="@firebase/firestore",qf="4.7.11";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Es="11.6.1";/**
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
 */const Or=new Ml("@firebase/firestore");function Qr(){return Or.logLevel}function J(t,...e){if(Or.logLevel<=me.DEBUG){const n=e.map(Wl);Or.debug(`Firestore (${Es}): ${t}`,...n)}}function Pn(t,...e){if(Or.logLevel<=me.ERROR){const n=e.map(Wl);Or.error(`Firestore (${Es}): ${t}`,...n)}}function ds(t,...e){if(Or.logLevel<=me.WARN){const n=e.map(Wl);Or.warn(`Firestore (${Es}): ${t}`,...n)}}function Wl(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,um(t,r,n)}function um(t,e,n){let r=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pn(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||um(e,s,r)}function ue(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class lR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uR{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new hm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class hR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new zf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new zf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function fm(){return new TextEncoder}/**
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
 */class dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Jc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return pe(r,s);{const i=fm(),o=gR(i.encode(Wf(t,n)),i.encode(Wf(e,n)));return o!==0?o:pe(r,s)}}n+=r>65535?2:1}return pe(t.length,e.length)}function Wf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function gR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return pe(t[n],e[n]);return pe(t.length,e.length)}function ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Kf=-62135596800,Gf=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Gf);return new qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Kf)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gf}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Kf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new qe(0,0))}static max(){return new ce(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qf="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):Jc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yn.fromString(e.substring(4,e.length-2))}}class Oe extends Zt{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const mR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Zt{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return mR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qf}static keyField(){return new Xe([Qf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Oe.fromString(e))}static fromName(e){return new te(Oe.fromString(e).popFirst(5))}static empty(){return new te(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Oe(e.slice()))}}/**
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
 */const yi=-1;function _R(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Zn(s,te.empty(),e)}function yR(t){return new Zn(t.readTime,t.key,yi)}class Zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zn(ce.min(),te.empty(),yi)}static max(){return new Zn(ce.max(),te.empty(),yi)}}function vR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const ER="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ts(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==ER)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function IR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Is(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ya.le=-1;/**
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
 */const Kl=-1;function va(t){return t==null}function Uo(t){return t===0&&1/t==-1/0}function wR(t){return typeof t=="number"&&Number.isInteger(t)&&!Uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const pm="";function AR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yf(e)),e=RR(t.get(n),e);return Yf(e)}function RR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case pm:n+="";break;default:n+=i}}return n}function Yf(t){return t+pm+""}/**
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
 */function Jf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xf(this.data.getIterator())}getIteratorFrom(e){return new Xf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Xf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mm("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const bR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=bR.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */const _m="server_timestamp",ym="__type__",vm="__previous_value__",Em="__local_write_time__";function Gl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ym])===null||n===void 0?void 0:n.stringValue)===_m}function Ea(t){const e=t.mapValue.fields[vm];return Gl(e)?Ea(e):e}function vi(t){const e=er(t.mapValue.fields[Em].timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class SR{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const Fo="(default)";class Ei{constructor(e,n){this.projectId=e,this.database=n||Fo}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database===Fo}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tm="__type__",PR="__max__",co={mapValue:{}},Im="__vector__",Bo="value";function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gl(t)?4:kR(t)?9007199254740991:CR(t)?10:11:ie(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=er(s.timestampValue),c=er(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return tr(s.bytesValue).isEqual(tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),c=Fe(i.doubleValue);return o===c?Uo(o)===Uo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Jf(o)!==Jf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!un(o[l],c[l])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function Ti(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=nr(t),r=nr(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Zf(t.timestampValue,e.timestampValue);case 4:return Zf(vi(t),vi(e));case 5:return Jc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=tr(i),l=tr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=pe(c[h],l[h]);if(f!==0)return f}return pe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=pe(Fe(i.latitude),Fe(o.latitude));return c!==0?c:pe(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ed(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},m=o.fields||{},_=(c=p[Bo])===null||c===void 0?void 0:c.arrayValue,C=(l=m[Bo])===null||l===void 0?void 0:l.arrayValue,D=pe(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:ed(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===co.mapValue&&o===co.mapValue)return 0;if(i===co.mapValue)return 1;if(o===co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Jc(l[p],f[p]);if(m!==0)return m;const _=gs(c[l[p]],h[f[p]]);if(_!==0)return _}return pe(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{Pe:n})}}function Zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=er(t),r=er(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function ed(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gs(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function ms(t){return Xc(t)}function Xc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Xc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Xc(n.fields[o])}`;return s+"}"}(t.mapValue):ie(61005,{value:t})}function Eo(t){switch(nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ea(t);return e?16+Eo(e):16;case 5:return 2*t.stringValue.length;case 6:return tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Eo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return cr(r.fields,(i,o)=>{s+=i.length+Eo(o)}),s}(t.mapValue);default:throw ie(13486,{value:t})}}function Zc(t){return!!t&&"integerValue"in t}function Ql(t){return!!t&&"arrayValue"in t}function td(t){return!!t&&"nullValue"in t}function nd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function To(t){return!!t&&"mapValue"in t}function CR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Tm])===null||n===void 0?void 0:n.stringValue)===Im}function ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PR}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!To(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ii(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());To(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];To(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(ii(this.value))}}function wm(t){const e=[];return cr(t.fields,(n,r)=>{const s=new Xe([n]);if(To(r)){const i=wm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,ce.min(),ce.min(),ce.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ce.min(),ce.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ce.min(),ce.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jo{constructor(e,n){this.position=e,this.inclusive=n}}function rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function OR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Am{}class He extends Am{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NR(e,n,r):n==="array-contains"?new LR(e,r):n==="in"?new MR(e,r):n==="not-in"?new UR(e,r):n==="array-contains-any"?new FR(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VR(e,r):new xR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Am{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new hn(e,n)}matches(e){return Rm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Rm(t){return t.op==="and"}function bm(t){return DR(t)&&Rm(t)}function DR(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function el(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(bm(t))return t.filters.map(e=>el(e)).join(",");{const e=t.filters.map(n=>el(n)).join(",");return`${t.op}(${e})`}}function Sm(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Sm(o,s.filters[c]),!0):!1}(t,e):void ie(19439)}function Pm(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Pm).join(" ,")+"}"}(t):"Filter"}class NR extends He{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class VR extends He{constructor(e,n){super(e,"in",n),this.keys=Cm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xR extends He{constructor(e,n){super(e,"not-in",n),this.keys=Cm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class LR extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ql(n)&&Ti(n.arrayValue,this.value)}}class MR extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class UR extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ti(this.value.arrayValue,n)}}class FR extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ql(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}/**
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
 */class BR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Ie=null}}function id(t,e=null,n=[],r=[],s=null,i=null,o=null){return new BR(t,e,n,r,s,i,o)}function Yl(t){const e=ue(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>el(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.Ie=n}return e.Ie}function Jl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sd(t.startAt,e.startAt)&&sd(t.endAt,e.endAt)}function tl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ta{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function jR(t,e,n,r,s,i,o,c){return new Ta(t,e,n,r,s,i,o,c)}function Xl(t){return new Ta(t)}function od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $R(t){return t.collectionGroup!==null}function oi(t){const e=ue(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ze(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new $o(i,r))}),n.has(Xe.keyField().canonicalString())||e.Ee.push(new $o(Xe.keyField(),r))}return e.Ee}function on(t){const e=ue(t);return e.de||(e.de=HR(e,oi(t))),e.de}function HR(t,e){if(t.limitType==="F")return id(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $o(s.field,i)});const n=t.endAt?new jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jo(t.startAt.position,t.startAt.inclusive):null;return id(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function nl(t,e,n){return new Ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ia(t,e){return Jl(on(t),on(e))&&t.limitType===e.limitType}function km(t){return`${Yl(on(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pm(s)).join(", ")}]`),va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ms(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=rd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,oi(r),s)||r.endAt&&!function(o,c,l){const h=rd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,oi(r),s))}(t,e)}function qR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Om(t){return(e,n)=>{let r=!1;for(const s of oi(t)){const i=zR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zR(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?gs(l,h):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
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
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gm(this.inner)}size(){return this.innerSize}}/**
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
 */const WR=new xe(te.comparator);function Cn(){return WR}const Dm=new xe(te.comparator);function Ks(...t){let e=Dm;for(const n of t)e=e.insert(n.key,n);return e}function Nm(t){let e=Dm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return ai()}function Vm(){return ai()}function ai(){return new Mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const KR=new xe(te.comparator),GR=new ze(te.comparator);function _e(...t){let e=GR;for(const n of t)e=e.add(n);return e}const QR=new ze(pe);function YR(){return QR}/**
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
 */function Zl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function xm(t){return{integerValue:""+t}}function JR(t,e){return wR(e)?xm(e):Zl(t,e)}/**
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
 */class Aa{constructor(){this._=void 0}}function XR(t,e,n){return t instanceof Ho?function(s,i){const o={fields:{[ym]:{stringValue:_m},[Em]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gl(i)&&(i=Ea(i)),i&&(o.fields[vm]=i),{mapValue:o}}(n,e):t instanceof Ii?Mm(t,e):t instanceof wi?Um(t,e):function(s,i){const o=Lm(s,i),c=ad(o)+ad(s.Re);return Zc(o)&&Zc(s.Re)?xm(c):Zl(s.serializer,c)}(t,e)}function ZR(t,e,n){return t instanceof Ii?Mm(t,e):t instanceof wi?Um(t,e):n}function Lm(t,e){return t instanceof qo?function(r){return Zc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ho extends Aa{}class Ii extends Aa{constructor(e){super(),this.elements=e}}function Mm(t,e){const n=Fm(e);for(const r of t.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class wi extends Aa{constructor(e){super(),this.elements=e}}function Um(t,e){let n=Fm(e);for(const r of t.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class qo extends Aa{constructor(e,n){super(),this.serializer=e,this.Re=n}}function ad(t){return Fe(t.integerValue||t.doubleValue)}function Fm(t){return Ql(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ii&&s instanceof Ii||r instanceof wi&&s instanceof wi?ps(r.elements,s.elements,un):r instanceof qo&&s instanceof qo?un(r.Re,s.Re):r instanceof Ho&&s instanceof Ho}(t.transform,e.transform)}class tb{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ra{}function Bm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eu(t.key,Kt.none()):new Oi(t.key,t.data,Kt.none());{const n=t.data,r=At.empty();let s=new ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new lr(t.key,r,new Nt(s.toArray()),Kt.none())}}function nb(t,e,n){t instanceof Oi?function(s,i,o){const c=s.value.clone(),l=ld(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(s,i,o){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ld(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(jm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ci(t,e,n,r){return t instanceof Oi?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=i.value.clone(),f=ud(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,o,c,l){if(!Io(i.precondition,o))return c;const h=ud(i.fieldTransforms,l,o),f=o.data;return f.setAll(jm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function rb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lm(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,(i,o)=>eb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends Ra{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lr extends Ra{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ld(t,e,n){const r=new Map;be(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,ZR(o,c,n[s]))}return r}function ud(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,XR(i,o,e))}return r}class eu extends Ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sb extends Ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ib{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Vm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Bm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>cd(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>cd(n,r))}}class tu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return KR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new tu(e,n,r,s)}}/**
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
 */class ob{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ab{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,Ee;function cb(t){switch(t){case U.OK:return ie(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function $m(t){if(t===void 0)return Pn("GRPC error has no .code"),U.UNKNOWN;switch(t){case je.OK:return U.OK;case je.CANCELLED:return U.CANCELLED;case je.UNKNOWN:return U.UNKNOWN;case je.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case je.INTERNAL:return U.INTERNAL;case je.UNAVAILABLE:return U.UNAVAILABLE;case je.UNAUTHENTICATED:return U.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case je.NOT_FOUND:return U.NOT_FOUND;case je.ALREADY_EXISTS:return U.ALREADY_EXISTS;case je.PERMISSION_DENIED:return U.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case je.ABORTED:return U.ABORTED;case je.OUT_OF_RANGE:return U.OUT_OF_RANGE;case je.UNIMPLEMENTED:return U.UNIMPLEMENTED;case je.DATA_LOSS:return U.DATA_LOSS;default:return ie(39323,{code:t})}}(Ee=je||(je={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const lb=new Yn([4294967295,4294967295],0);function hd(t){const e=fm().encode(t),n=new sm;return n.update(e),new Uint8Array(n.digest())}function fd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yn([n,r],0),new Yn([s,i],0)]}class nu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gs(`Invalid padding: ${n}`);if(r<0)throw new Gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gs(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Yn.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(Yn.fromNumber(r)));return s.compare(lb)===1&&(s=new Yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=hd(e),[r,s]=fd(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.pe===0)return;const n=hd(e),[r,s]=fd(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ba{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ba(ce.min(),s,new xe(pe),Cn(),_e())}}class Di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Di(r,n,_e(),_e(),_e())}}/**
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
 */class wo{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class Hm{constructor(e,n){this.targetId=e,this.Ce=n}}class qm{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dd{constructor(){this.Fe=0,this.Me=pd(),this.xe=Ze.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=_e(),n=_e(),r=_e();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}}),new Di(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=pd()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,be(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class ub{constructor(e){this.ze=e,this.je=new Map,this.He=Cn(),this.Je=lo(),this.Ye=lo(),this.Ze=new xe(pe)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(tl(i))if(r===0){const o=new te(i.path);this.tt(n,o,ct.newNoDocument(o,ce.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const c=this.ct(e),l=c?this.lt(c,e,o):1;if(l!==0){this.st(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=tr(r).toUint8Array()}catch(l){if(l instanceof mm)return ds("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new nu(o,s,i)}catch(l){return ds(l instanceof Gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.pe===0?null:c}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const c=this._t(o);if(c){if(i.current&&tl(c.target)){const l=new te(c.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,ct.newNoDocument(l,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=_e();this.Ye.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this._t(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new ba(e,n,this.Ze,this.He,r);return this.He=Cn(),this.Je=lo(),this.Ye=lo(),this.Ze=new xe(pe),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new dd,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new ze(pe),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ze(pe),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new dd),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function lo(){return new xe(te.comparator)}function pd(){return new xe(te.comparator)}const hb={asc:"ASCENDING",desc:"DESCENDING"},fb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},db={and:"AND",or:"OR"};class pb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rl(t,e){return t.useProto3Json||va(e)?e:{value:e}}function zo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gb(t,e){return zo(t,e.toTimestamp())}function an(t){return be(!!t,49232),ce.fromTimestamp(function(n){const r=er(n);return new qe(r.seconds,r.nanos)}(t))}function ru(t,e){return sl(t,e).canonicalString()}function sl(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Wm(t){const e=Oe.fromString(t);return be(Jm(e),10190,{key:e.toString()}),e}function il(t,e){return ru(t.databaseId,e.path)}function Ec(t,e){const n=Wm(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Gm(n))}function Km(t,e){return ru(t.databaseId,e)}function mb(t){const e=Wm(t);return e.length===4?Oe.emptyPath():Gm(e)}function ol(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gm(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function gd(t,e,n){return{name:il(t,e),fields:n.value.mapValue.fields}}function _b(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string",58123),Ze.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?U.UNKNOWN:$m(h.code);return new Z(f,h.message||"")}(o);n=new qm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ec(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):ce.min(),c=new At({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new wo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ec(t,r.document),i=r.readTime?an(r.readTime):ce.min(),o=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new wo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ec(t,r.document),i=r.removedTargetIds||[];n=new wo([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ab(s,i),c=r.targetId;n=new Hm(c,o)}}return n}function yb(t,e){let n;if(e instanceof Oi)n={update:gd(t,e.key,e.value)};else if(e instanceof eu)n={delete:il(t,e.key)};else if(e instanceof lr)n={update:gd(t,e.key,e.data),updateMask:Sb(e.fieldMask)};else{if(!(e instanceof sb))return ie(16599,{ft:e.type});n={verify:il(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qo)return{fieldPath:o.field.canonicalString(),increment:c.Re};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)}(t,e.precondition)),n}function vb(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(ce.min())&&(o=an(i)),new tb(o,s.transformResults||[])}(n,e))):[]}function Eb(t,e){return{documents:[Km(t,e.path)]}}function Tb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Km(t,s);const i=function(h){if(h.length!==0)return Ym(hn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Jr(m.field),direction:Ab(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=rl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:s}}function Ib(t){let e=mb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=Qm(p);return m instanceof hn&&bm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new $o(Xr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,va(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new jo(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new jo(_,m)}(n.endAt)),jR(e,s,o,i,c,"F",l,h)}function wb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return He.create(Xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>Qm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function Ab(t){return hb[t]}function Rb(t){return fb[t]}function bb(t){return db[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return Xe.fromServerFormat(t.fieldPath)}function Ym(t){return t instanceof He?function(n){if(n.op==="=="){if(nd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(td(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nd(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(td(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:Rb(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>Ym(s));return r.length===1?r[0]:{compositeFilter:{op:bb(n.op),filters:r}}}(t):ie(54877,{filter:t})}function Sb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Pb{constructor(e){this.wt=e}}function Cb(t){const e=Ib({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nl(e,e.limit,"L"):e}/**
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
 */class kb{constructor(){this.yn=new Ob}addToCollectionParentIndex(e,n){return this.yn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Zn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Oe.comparator)).toArray()}}/**
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
 */const md={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xm=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Xm,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class _s{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new _s(0)}static ir(){return new _s(-1)}}/**
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
 */const _d="LruGarbageCollector",Db=1048576;function yd([t,e],[n,r]){const s=pe(t,n);return s===0?pe(e,r):s}class Nb{constructor(e){this.cr=e,this.buffer=new ze(yd),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();yd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Vb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){J(_d,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Is(n)?J(_d,"Ignoring IndexedDB error during garbage collection: ",n):await Ts(n)}await this.Ir(3e5)})}}class xb{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ya.le);const r=new Nb(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(md)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),md):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Qr()<=me.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Lb(t,e){return new xb(t,e)}/**
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
 */class Mb{constructor(){this.changes=new Mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ub{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Fb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ci(r.mutation,s,Nt.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Ir();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ks();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Cn();const o=ai(),c=function(){return ai()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof lr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ci(f.mutation,h,f.mutation.getFieldMask(),qe.now())):o.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new Ub(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ai();let s=new xe((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Nt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Vm();f.forEach(m=>{if(!i.has(m)){const _=Bm(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$R(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Ir());let c=yi,l=i;return o.next(h=>L.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,_e())).next(f=>({batchId:c,changes:Nm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Ks();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ks();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,m){return new Ta(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let c=Ks();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ci(f.mutation,h,Nt.empty(),qe.now()),wa(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class Bb{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return L.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:Cb(s.bundledQuery),readTime:an(s.readTime)}}(n)),L.resolve()}}/**
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
 */class jb{constructor(){this.overlays=new xe(te.comparator),this.Or=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Ir(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Ir(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Ir(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ob(n,r));let i=this.Or.get(n);i===void 0&&(i=_e(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
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
 */class $b{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class su{constructor(){this.Nr=new ze(Ke.Br),this.Lr=new ze(Ke.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Ke(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new te(new Oe([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new te(new Oe([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=_e();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return te.comparator(e.key,n.key)||pe(e.Gr,n.Gr)}static kr(e,n){return pe(e.Gr,n.Gr)||te.comparator(e.key,n.key)}}/**
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
 */class Hb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new ze(Ke.Br)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ib(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.zr=this.zr.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Kl:this.Jn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const c=this.jr(o.Gr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(pe);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],c=>{r=r.add(c.Gr)})}),L.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new te(i),0);let c=new ze(pe);return this.zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Gr)),!0)},o),L.resolve(this.Jr(c))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return L.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Ke(n,0),s=this.zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class qb{constructor(e){this.Zr=e,this.docs=function(){return new xe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cn();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||vR(yR(f),r)<=0||(s.has(f.key)||wa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}Xr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zb(this)}getSize(e){return L.resolve(this.size)}}class zb extends Mb{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class Wb{constructor(e){this.persistence=e,this.ei=new Mr(n=>Yl(n),Jl),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.ti=0,this.ni=new su,this.targetCount=0,this.ri=_s.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),L.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.ar(n),L.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ni.containsKey(n))}}/**
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
 */class Zm{constructor(e,n){this.ii={},this.overlays={},this.si=new ya(0),this.oi=!1,this.oi=!0,this._i=new $b,this.referenceDelegate=e(this),this.ai=new Wb(this),this.indexManager=new kb,this.remoteDocumentCache=function(s){return new qb(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new Pb(n),this.ci=new Bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new Hb(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new Kb(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return L.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class Kb extends TR{constructor(e){super(),this.currentSequenceNumber=e}}class iu{constructor(e){this.persistence=e,this.Ti=new su,this.Ii=null}static Ei(e){return new iu(e)}get di(){if(this.Ii)return this.Ii;throw ie(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=te.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return L.or([()=>L.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class Wo{constructor(e,n){this.persistence=e,this.Ri=new Mr(r=>AR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Lb(this,n)}static Ei(e,n){return new Wo(e,n)}li(){}hi(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return L.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),L.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Eo(e.data.value)),n}gr(e,n,r){return L.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ou{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ou(e,n.fromCache,r,s)}}/**
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
 */class Gb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Qb{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return SI()?8:IR(ft())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Gb;return this.fs(e,n,o).next(c=>{if(i.result=c,this.Is)return this.gs(e,n,o,c.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(Qr()<=me.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),L.resolve()):(Qr()<=me.DEBUG&&J("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Qr()<=me.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):L.resolve())}Rs(e,n){if(od(n))return L.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=nl(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.As.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ps(n,c);return this.ys(n,h,o,l.readTime)?this.Rs(e,nl(n,null,"F")):this.ws(e,h,n,l)}))})))}Vs(e,n,r,s){return od(n)||s.isEqual(ce.min())?L.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?L.resolve(null):(Qr()<=me.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yr(n)),this.ws(e,o,n,_R(s,yi)).next(c=>c))})}ps(e,n){let r=new ze(Om(e));return n.forEach((s,i)=>{wa(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return Qr()<=me.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.As.getDocumentsMatchingQuery(e,n,Zn.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const au="LocalStore",Yb=3e8;class Jb{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new xe(pe),this.Ds=new Mr(i=>Yl(i),Jl),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fb(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function Xb(t,e,n,r){return new Jb(t,e,n,r)}async function e_(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:c}))})})}function Zb(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,m=p.keys();let _=L.resolve();return m.forEach(C=>{_=_.next(()=>f.getEntry(l,C)).next(D=>{const O=h.docVersions.get(C);be(O!==null,48541),D.version.compareTo(O)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function t_(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function e0(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.ai.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.ai.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Ze.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(D,O,H){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Yb?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(m,_,f)&&c.push(n.ai.updateTargetData(i,_))});let l=Cn(),h=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(t0(i,o,e.documentUpdates).next(f=>{l=f.xs,h=f.Os})),!r.isEqual(ce.min())){const f=n.ai.getLastRemoteSnapshotVersion(i).next(p=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ss=s,i))}function t0(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Cn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):J(au,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{xs:o,Os:s}})}function n0(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Kl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function r0(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function al(t,e,n){const r=ue(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Is(o))throw o;J(au,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function vd(t,e,n){const r=ue(t);let s=ce.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ue(l),m=p.Ds.get(f);return m!==void 0?L.resolve(p.Ss.get(m)):p.ai.getTargetData(h,f)}(r,o,on(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:_e())).next(c=>(s0(r,qR(e),c),{documents:c,Ns:i})))}function s0(t,e,n){let r=t.vs.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class Ed{constructor(){this.activeTargetIds=YR()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class i0{constructor(){this.So=new Ed,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Ed,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class o0{vo(e){}shutdown(){}}/**
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
 */const Td="ConnectivityMonitor";class Id{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){J(Td,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){J(Td,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uo=null;function cl(){return uo===null?uo=function(){return 268435456+Math.round(2147483648*Math.random())}():uo++,"0x"+uo.toString(16)}/**
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
 */const Tc="RestConnection",a0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class c0{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Fo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=cl(),c=this.$o(e,n.toUriEncodedString());J(Tc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(l,s,i),this.Ko(e,c,l,r).then(h=>(J(Tc,`Received RPC '${e}' ${o}: `,h),h),h=>{throw ds(Tc,`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",r),h})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=a0[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class l0{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const st="WebChannelConnection";class u0 extends c0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s){const i=cl();return new Promise((o,c)=>{const l=new im;l.setWithCredentials(!0),l.listenOnce(om.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vo.NO_ERROR:const f=l.getResponseJson();J(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case vo.TIMEOUT:J(st,`RPC '${e}' ${i} timed out`),c(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const p=l.getStatus();if(J(st,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const C=function(O){const H=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(H)>=0?H:U.UNKNOWN}(_.status);c(new Z(C,_.message))}else c(new Z(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Z(U.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{s_:e,streamId:i,o_:l.getLastErrorCode(),__:l.getLastError()})}}finally{J(st,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);J(st,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}a_(e,n,r){const s=cl(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lm(),c=cm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");J(st,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,_=!1;const C=new l0({Go:O=>{_?J(st,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(J(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),J(st,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},zo:()=>p.close()}),D=(O,H,F)=>{O.listen(H,j=>{try{F(j)}catch($){setTimeout(()=>{throw $},0)}})};return D(p,Ws.EventType.OPEN,()=>{_||(J(st,`RPC '${e}' stream ${s} transport opened.`),C.t_())}),D(p,Ws.EventType.CLOSE,()=>{_||(_=!0,J(st,`RPC '${e}' stream ${s} transport closed`),C.r_())}),D(p,Ws.EventType.ERROR,O=>{_||(_=!0,ds(st,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),C.r_(new Z(U.UNAVAILABLE,"The operation could not be completed")))}),D(p,Ws.EventType.MESSAGE,O=>{var H;if(!_){const F=O.data[0];be(!!F,16349);const j=F,$=(j==null?void 0:j.error)||((H=j[0])===null||H===void 0?void 0:H.error);if($){J(st,`RPC '${e}' stream ${s} received error:`,$);const ae=$.status;let he=function(I){const A=je[I];if(A!==void 0)return $m(A)}(ae),w=$.message;he===void 0&&(he=U.INTERNAL,w="Unknown error status: "+ae+" with message "+$.message),_=!0,C.r_(new Z(he,w)),p.close()}else J(st,`RPC '${e}' stream ${s} received:`,F),C.i_(F)}}),D(c,am.STAT_EVENT,O=>{O.stat===Yc.PROXY?J(st,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Yc.NOPROXY&&J(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.n_()},0),C}}function Ic(){return typeof document<"u"?document:null}/**
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
 */function Sa(t){return new pb(t,!0)}/**
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
 */class n_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const wd="PersistentStream";class r_{constructor(e,n,r,s,i,o,c,l){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new n_(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new Z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return J(wd,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(J(wd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h0 extends r_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=_b(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?an(o.readTime):ce.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=ol(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=tl(l)?{documents:Eb(i,l)}:{query:Tb(i,l).gt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zm(i,o.resumeToken);const h=rl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=zo(i,o.snapshotVersion.toTimestamp());const h=rl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=wb(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=ol(this.serializer),n.removeTarget=e,this.F_(n)}}class f0 extends r_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=vb(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=ol(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yb(this.serializer,r))};this.F_(n)}}/**
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
 */class d0{}class p0 extends d0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,sl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(U.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(e,sl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(U.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class g0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Pn(n),this.ea=!1):J("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const Dr="RemoteStore";class m0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{Ur(this)&&(J(Dr,"Restarting streams for network reachability change."),await async function(l){const h=ue(l);h.aa.add(4),await Ni(h),h.la.set("Unknown"),h.aa.delete(4),await Pa(h)}(this))})}),this.la=new g0(r,s)}}async function Pa(t){if(Ur(t))for(const e of t.ua)await e(!0)}async function Ni(t){for(const e of t.ua)await e(!1)}function s_(t,e){const n=ue(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),hu(n)?uu(n):ws(n).b_()&&lu(n,e))}function cu(t,e){const n=ue(t),r=ws(n);n._a.delete(e),r.b_()&&i_(n,e),n._a.size===0&&(r.b_()?r.v_():Ur(n)&&n.la.set("Unknown"))}function lu(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).U_(e)}function i_(t,e){t.ha.Ke(e),ws(t).K_(e)}function uu(t){t.ha=new ub({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.la.ta()}function hu(t){return Ur(t)&&!ws(t).w_()&&t._a.size>0}function Ur(t){return ue(t).aa.size===0}function o_(t){t.ha=void 0}async function _0(t){t.la.set("Online")}async function y0(t){t._a.forEach((e,n)=>{lu(t,e)})}async function v0(t,e){o_(t),hu(t)?(t.la.ia(e),uu(t)):t.la.set("Unknown")}async function E0(t,e,n){if(t.la.set("Online"),e instanceof qm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s._a.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s._a.delete(c),s.ha.removeTarget(c))}(t,e)}catch(r){J(Dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ko(t,r)}else if(e instanceof wo?t.ha.Xe(e):e instanceof Hm?t.ha.ot(e):t.ha.nt(e),!n.isEqual(ce.min()))try{const r=await t_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.ha.It(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i._a.get(l);if(!f)return;i._a.set(l,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),i_(i,l);const p=new Wn(f.target,l,h,f.sequenceNumber);lu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){J(Dr,"Failed to raise snapshot:",r),await Ko(t,r)}}async function Ko(t,e,n){if(!Is(e))throw e;t.aa.add(1),await Ni(t),t.la.set("Offline"),n||(n=()=>t_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(Dr,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Pa(t)})}function a_(t,e){return e().catch(n=>Ko(t,n,e))}async function Ca(t){const e=ue(t),n=rr(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Kl;for(;T0(e);)try{const s=await n0(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,I0(e,s)}catch(s){await Ko(e,s)}c_(e)&&l_(e)}function T0(t){return Ur(t)&&t.oa.length<10}function I0(t,e){t.oa.push(e);const n=rr(t);n.b_()&&n.W_&&n.G_(e.mutations)}function c_(t){return Ur(t)&&!rr(t).w_()&&t.oa.length>0}function l_(t){rr(t).start()}async function w0(t){rr(t).H_()}async function A0(t){const e=rr(t);for(const n of t.oa)e.G_(n.mutations)}async function R0(t,e,n){const r=t.oa.shift(),s=tu.from(r,e,n);await a_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ca(t)}async function b0(t,e){e&&rr(t).W_&&await async function(r,s){if(function(o){return cb(o)&&o!==U.ABORTED}(s.code)){const i=r.oa.shift();rr(r).D_(),await a_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ca(r)}}(t,e),c_(t)&&l_(t)}async function Ad(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),J(Dr,"RemoteStore received new credentials");const r=Ur(n);n.aa.add(3),await Ni(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Pa(n)}async function S0(t,e){const n=ue(t);e?(n.aa.delete(2),await Pa(n)):e||(n.aa.add(2),await Ni(n),n.la.set("Unknown"))}function ws(t){return t.Pa||(t.Pa=function(n,r,s){const i=ue(n);return i.Y_(),new h0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:_0.bind(null,t),Jo:y0.bind(null,t),Zo:v0.bind(null,t),Q_:E0.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),hu(t)?uu(t):t.la.set("Unknown")):(await t.Pa.stop(),o_(t))})),t.Pa}function rr(t){return t.Ta||(t.Ta=function(n,r,s){const i=ue(n);return i.Y_(),new f0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:w0.bind(null,t),Zo:b0.bind(null,t),z_:A0.bind(null,t),j_:R0.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Ca(t)):(await t.Ta.stop(),t.oa.length>0&&(J(Dr,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class fu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new fu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Is(t))return new Z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class is{static emptySet(e){return new is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Ks(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Rd{constructor(){this.Ia=new xe(te.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ys(e,n,is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class P0{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class C0{constructor(){this.queries=bd(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=bd(),i.forEach((o,c)=>{for(const l of c.Ra)l.onError(r)})})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function bd(){return new Mr(t=>km(t),Ia)}async function u_(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new P0,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=du(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&pu(n)}async function h_(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function k0(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Ra)c.pa(s)&&(r=!0);o.Aa=s}}r&&pu(n)}function O0(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function pu(t){t.fa.forEach(e=>{e.next()})}var ll,Sd;(Sd=ll||(ll={})).ya="default",Sd.Cache="cache";class f_{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==ll.Cache}}/**
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
 */class d_{constructor(e){this.key=e}}class p_{constructor(e){this.key=e}}class D0{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=_e(),this.mutatedKeys=_e(),this.Ua=Om(e),this.Ka=new is(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Rd,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=wa(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),O=!0):this.ja(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.Ua(_,l)>0||h&&this.Ua(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||h)&&(c=!0)),O&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ka:o,za:r,ys:c,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((f,p)=>function(_,C){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:O})}};return D(_)-D(C)}(f.type,p.type)||this.Ua(f.doc,p.doc)),this.Ha(r),s=s!=null&&s;const c=n&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,h=l!==this.Qa;return this.Qa=l,o.length!==0||h?{snapshot:new ys(this.query,e.Ka,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:c}:{Ya:c}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Rd,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=_e(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new p_(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new d_(r))}),n}Xa(e){this.qa=e.Ns,this.$a=_e();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return ys.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const gu="SyncEngine";class N0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class V0{constructor(e){this.key=e,this.tu=!1}}class x0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Mr(c=>km(c),Ia),this.iu=new Map,this.su=new Set,this.ou=new xe(te.comparator),this._u=new Map,this.au=new su,this.uu={},this.cu=new Map,this.lu=_s.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function L0(t,e,n=!0){const r=E_(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await g_(r,e,n,!0),s}async function M0(t,e){const n=E_(t);await g_(n,e,!0,!1)}async function g_(t,e,n,r){const s=await r0(t.localStore,on(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await U0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&s_(t.remoteStore,s),c}async function U0(t,e,n,r,s){t.Pu=(p,m,_)=>async function(D,O,H,F){let j=O.view.Ga(H);j.ys&&(j=await vd(D.localStore,O.query,!1).then(({documents:w})=>O.view.Ga(w,j)));const $=F&&F.targetChanges.get(O.targetId),ae=F&&F.targetMismatches.get(O.targetId)!=null,he=O.view.applyChanges(j,D.isPrimaryClient,$,ae);return Cd(D,O.targetId,he.Ya),he.snapshot}(t,p,m,_);const i=await vd(t.localStore,e,!0),o=new D0(e,i.Ns),c=o.Ga(i.documents),l=Di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Cd(t,n,h.Ya);const f=new N0(e,n,o);return t.ru.set(e,f),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),h.snapshot}async function F0(t,e,n){const r=ue(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!Ia(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await al(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&cu(r.remoteStore,s.targetId),ul(r,s.targetId)}).catch(Ts)):(ul(r,s.targetId),await al(r.localStore,s.targetId,!0))}async function B0(t,e){const n=ue(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cu(n.remoteStore,r.targetId))}async function j0(t,e,n){const r=G0(t);try{const s=await function(o,c){const l=ue(o),h=qe.now(),f=c.reduce((_,C)=>_.add(C.key),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Cn(),D=_e();return l.Cs.getEntries(_,f).next(O=>{C=O,C.forEach((H,F)=>{F.isValidDocument()||(D=D.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,C)).next(O=>{p=O;const H=[];for(const F of c){const j=rb(F,p.get(F.key).overlayedDocument);j!=null&&H.push(new lr(F.key,j,wm(j.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,H,c)}).next(O=>{m=O;const H=O.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(_,O.batchId,H)})}).then(()=>({batchId:m.batchId,changes:Nm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.uu[o.currentUser.toKey()];h||(h=new xe(pe)),h=h.insert(c,l),o.uu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Vi(r,s.changes),await Ca(r.remoteStore)}catch(s){const i=du(s,"Failed to persist write");n.reject(i)}}async function m_(t,e){const n=ue(t);try{const r=await e0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?be(o.tu,14607):s.removedDocuments.size>0&&(be(o.tu,42227),o.tu=!1))}),await Vi(n,r,e)}catch(r){await Ts(r)}}function Pd(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const c=o.view.ga(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ue(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.Ra)m.ga(c)&&(h=!0)}),h&&pu(l)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $0(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new xe(te.comparator);o=o.insert(i,ct.newNoDocument(i,ce.min()));const c=_e().add(i),l=new ba(ce.min(),new Map,new xe(pe),o,c);await m_(r,l),r.ou=r.ou.remove(i),r._u.delete(e),mu(r)}else await al(r.localStore,e,!1).then(()=>ul(r,e,n)).catch(Ts)}async function H0(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await Zb(n.localStore,e);y_(n,r,null),__(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(n,s)}catch(s){await Ts(s)}}async function q0(t,e,n){const r=ue(t);try{const s=await function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(be(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);y_(r,e,n),__(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vi(r,s)}catch(s){await Ts(s)}}function __(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function y_(t,e,n){const r=ue(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||v_(t,r)})}function v_(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(cu(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),mu(t))}function Cd(t,e,n){for(const r of n)r instanceof d_?(t.au.addReference(r.key,e),z0(t,r)):r instanceof p_?(J(gu,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||v_(t,r.key)):ie(19791,{Iu:r})}function z0(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(J(gu,"New document in limbo: "+n),t.su.add(r),mu(t))}function mu(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new te(Oe.fromString(e)),r=t.lu.next();t._u.set(r,new V0(n)),t.ou=t.ou.insert(n,r),s_(t.remoteStore,new Wn(on(Xl(n.path)),r,"TargetPurposeLimboResolution",ya.le))}}async function Vi(t,e,n){const r=ue(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((c,l)=>{o.push(r.Pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ou.Ps(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(l,h){const f=ue(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.ls,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>L.forEach(m.hs,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Is(p))throw p;J(au,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=f.Ss.get(m),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);f.Ss=f.Ss.insert(m,D)}}}(r.localStore,i))}async function W0(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){J(gu,"User change. New user:",e.toKey());const r=await e_(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(c=>{c.forEach(l=>{l.reject(new Z(U.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(n,r.Ms)}}function K0(t,e){const n=ue(t),r=n._u.get(e);if(r&&r.tu)return _e().add(r.key);{let s=_e();const i=n.iu.get(e);if(!i)return s;for(const o of i){const c=n.ru.get(o);s=s.unionWith(c.view.Wa)}return s}}function E_(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$0.bind(null,e),e.nu.Q_=k0.bind(null,e.eventManager),e.nu.Tu=O0.bind(null,e.eventManager),e}function G0(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q0.bind(null,e),e}class Go{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sa(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return Xb(this.persistence,new Qb,e.initialUser,this.serializer)}Ru(e){return new Zm(iu.Ei,this.serializer)}Au(e){return new i0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Go.provider={build:()=>new Go};class Q0 extends Go{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){be(this.persistence.referenceDelegate instanceof Wo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Vb(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Zm(r=>Wo.Ei(r,n),this.serializer)}}class hl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=W0.bind(null,this.syncEngine),await S0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C0}()}createDatastore(e){const n=Sa(e.databaseInfo.databaseId),r=function(i){return new u0(i)}(e.databaseInfo);return function(i,o,c,l){return new p0(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new m0(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Pd(this.syncEngine,n,0),function(){return Id.C()?new Id:new o0}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new x0(s,i,o,c,l,h);return f&&(p.hu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);J(Dr,"RemoteStore shutting down."),i.aa.add(5),await Ni(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hl.provider={build:()=>new hl};/**
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
 */class T_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const sr="FirestoreClient";class Y0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J(sr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J(sr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=du(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wc(t,e){t.asyncQueue.verifyOperationInProgress(),J(sr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await e_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await J0(t);J(sr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ad(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ad(e.remoteStore,s)),t._onlineComponents=e}async function J0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(sr,"Using user provided OfflineComponentProvider");try{await wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await wc(t,new Go)}}else J(sr,"Using default OfflineComponentProvider"),await wc(t,new Q0(void 0));return t._offlineComponents}async function I_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(sr,"Using user provided OnlineComponentProvider"),await kd(t,t._uninitializedComponentsProvider._online)):(J(sr,"Using default OnlineComponentProvider"),await kd(t,new hl))),t._onlineComponents}function X0(t){return I_(t).then(e=>e.syncEngine)}async function w_(t){const e=await I_(t),n=e.eventManager;return n.onListen=L0.bind(null,e.syncEngine),n.onUnlisten=F0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=M0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=B0.bind(null,e.syncEngine),n}function Z0(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new T_({next:m=>{f.yu(),o.enqueueAndForget(()=>h_(i,p));const _=m.docs.has(c);!_&&m.fromCache?h.reject(new Z(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?h.reject(new Z(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new f_(Xl(c.path),f,{includeMetadataChanges:!0,Fa:!0});return u_(i,p)}(await w_(t),t.asyncQueue,e,n,r)),r.promise}function eS(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new T_({next:m=>{f.yu(),o.enqueueAndForget(()=>h_(i,p)),m.fromCache&&l.source==="server"?h.reject(new Z(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new f_(c,f,{includeMetadataChanges:!0,Fa:!0});return u_(i,p)}(await w_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function A_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Od=new Map;/**
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
 */function R_(t,e,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tS(t,e,n,r){if(e===!0&&r===!0)throw new Z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dd(t){if(!te.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nd(t){if(te.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new Z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const b_="firestore.googleapis.com",Vd=!0;class xd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=b_,this.ssl=Vd}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Vd;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Db)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cR;switch(r.type){case"firstParty":return new fR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Od.get(n);r&&(J("ComponentProvider","Removing Datastore"),Od.delete(n),r.terminate())}(this),Promise.resolve()}}function nS(t,e,n,r={}){var s;const i=(t=fn(t,ka))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==b_&&i.host!==c&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!Pr(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=it.MOCK_USER;else{h=xg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new it(p)}t._authCredentials=new lR(new hm(h,f))}}/**
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
 */class Oa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oa(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Jn extends Oa{constructor(e,n,r){super(e,n,Xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new te(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function Fr(t,e,...n){if(t=We(t),R_("collection","path",e),t instanceof ka){const r=Oe.fromString(e,...n);return Nd(r),new Jn(t,null,r)}{if(!(t instanceof Rt||t instanceof Jn))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Nd(r),new Jn(t.firestore,null,r)}}function ur(t,e,...n){if(t=We(t),arguments.length===1&&(e=dm.newId()),R_("doc","path",e),t instanceof ka){const r=Oe.fromString(e,...n);return Dd(r),new Rt(t,null,new te(r))}{if(!(t instanceof Rt||t instanceof Jn))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Dd(r),new Rt(t.firestore,t instanceof Jn?t.converter:null,new te(r))}}/**
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
 */const Ld="AsyncQueue";class Md{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new n_(this,"async_queue_retry"),this.ju=()=>{const r=Ic();r&&J(Ld,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=Ic();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Rn;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Is(e))throw e;J(Ld,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Pn("INTERNAL UNHANDLED ERROR: ",Ud(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=fu.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&ie(47125,{ec:Ud(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function Ud(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class As extends ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Md,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Md(e),this._firestoreClient=void 0,await e}}}function rS(t,e){const n=typeof t=="object"?t:Fl(),r=typeof t=="string"?t:Fo,s=_a(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dg("firestore");i&&nS(s,...i)}return s}function yu(t){if(t._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||sS(t),t._firestoreClient}function sS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new SR(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,A_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Y0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(Ze.fromBase64String(e))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vs(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Da{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vu{constructor(e){this._methodName=e}}/**
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
 */class Eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */class Tu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const iS=/^__.*__$/;class oS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}class S_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function P_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{oc:t})}}class Iu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Qo(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(P_(this.oc)&&iS.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class aS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sa(e)}dc(e,n,r,s=!1){return new Iu({oc:e,methodName:n,Ec:r,path:Xe.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function C_(t){const e=t._freezeSettings(),n=Sa(t._databaseId);return new aS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cS(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);wu("Data must be an object, but it was:",o,r);const c=k_(r,o);let l,h;if(i.merge)l=new Nt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=fl(e,p,n);if(!o.contains(m))throw new Z(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);D_(f,m)||f.push(m)}l=new Nt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new oS(new At(c),l,h)}class Na extends vu{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Na}}function lS(t,e,n,r){const s=t.dc(1,e,n);wu("Data must be an object, but it was:",s,r);const i=[],o=At.empty();cr(r,(l,h)=>{const f=Au(e,l,n);h=We(h);const p=s.hc(f);if(h instanceof Na)i.push(f);else{const m=Va(h,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new Nt(i);return new S_(o,c,s.fieldTransforms)}function uS(t,e,n,r,s,i){const o=t.dc(1,e,n),c=[fl(e,r,n)],l=[s];if(i.length%2!=0)throw new Z(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(fl(e,i[m])),l.push(i[m+1]);const h=[],f=At.empty();for(let m=c.length-1;m>=0;--m)if(!D_(h,c[m])){const _=c[m];let C=l[m];C=We(C);const D=o.hc(_);if(C instanceof Na)h.push(_);else{const O=Va(C,D);O!=null&&(h.push(_),f.set(_,O))}}const p=new Nt(h);return new S_(f,p,o.fieldTransforms)}function Va(t,e){if(O_(t=We(t)))return wu("Unsupported field value:",e,t),k_(t,e);if(t instanceof vu)return function(r,s){if(!P_(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Va(c,s.Pc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:zo(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zo(s.serializer,i)}}if(r instanceof Eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vs)return{bytesValue:zm(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ru(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tu)return function(o,c){return{mapValue:{fields:{[Tm]:{stringValue:Im},[Bo]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Tc("VectorValues must only contain numeric values.");return Zl(c.serializer,h)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${_u(r)}`)}(t,e)}function k_(t,e){const n={};return gm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cr(t,(r,s)=>{const i=Va(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function O_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Eu||t instanceof vs||t instanceof Rt||t instanceof vu||t instanceof Tu)}function wu(t,e,n){if(!O_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_u(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function fl(t,e,n){if((e=We(e))instanceof Da)return e._internalPath;if(typeof e=="string")return Au(t,e);throw Qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const hS=new RegExp("[~\\*/\\[\\]]");function Au(t,e,n){if(e.search(hS)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Da(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(U.INVALID_ARGUMENT,c+t+l)}function D_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class N_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(V_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fS extends N_{data(){return super.data()}}function V_(t,e){return typeof e=="string"?Au(t,e):e instanceof Da?e._internalPath:e._delegate._internalPath}/**
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
 */function dS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pS{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Bo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new Tu(i)}convertGeoPoint(e){return new Eu(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ea(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=er(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);be(Jm(r),9688,{name:e});const s=new Ei(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function gS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class x_ extends N_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(V_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ao extends x_{data(e={}){return super.data(e)}}class mS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ao(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:_S(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _S(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
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
 */function Ru(t){t=fn(t,Rt);const e=fn(t.firestore,As);return Z0(yu(e),t._key).then(n=>vS(e,t,n))}class L_ extends pS{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Br(t){t=fn(t,Oa);const e=fn(t.firestore,As),n=yu(e),r=new L_(e);return dS(t._query),eS(n,t._query).then(s=>new mS(e,r,t,s))}function M_(t,e,n){t=fn(t,Rt);const r=fn(t.firestore,As),s=gS(t.converter,e);return bu(r,[cS(C_(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kt.none())])}function yS(t,e,n,...r){t=fn(t,Rt);const s=fn(t.firestore,As),i=C_(s);let o;return o=typeof(e=We(e))=="string"||e instanceof Da?uS(i,"updateDoc",t._key,e,n,r):lS(i,"updateDoc",t._key,e),bu(s,[o.toMutation(t._key,Kt.exists(!0))])}function U_(t){return bu(fn(t.firestore,As),[new eu(t._key,Kt.none())])}function bu(t,e){return function(r,s){const i=new Rn;return r.asyncQueue.enqueueAndForget(async()=>j0(await X0(r),s,i)),i.promise}(yu(t),e)}function vS(t,e,n){const r=n.docs.get(e._key),s=new L_(t);return new x_(t,s,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Es=s})(Lr),Cr(new Xn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new As(new uR(r.getProvider("auth-internal")),new dR(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),sn(Hf,qf,e),sn(Hf,qf,"esm2017")})();function Su(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function F_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ES=F_,B_=new Ci("auth","Firebase",F_());/**
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
 */const Yo=new Ml("@firebase/auth");function TS(t,...e){Yo.logLevel<=me.WARN&&Yo.warn(`Auth (${Lr}): ${t}`,...e)}function Ro(t,...e){Yo.logLevel<=me.ERROR&&Yo.error(`Auth (${Lr}): ${t}`,...e)}/**
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
 */function Bt(t,...e){throw Cu(t,...e)}function Gt(t,...e){return Cu(t,...e)}function Pu(t,e,n){const r=Object.assign(Object.assign({},ES()),{[e]:n});return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return Pu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bt(t,"argument-error"),Pu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return B_.create(t,...e)}function se(t,e,...n){if(!t)throw Cu(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function kn(t,e){t||In(e)}/**
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
 */function dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wS(){return Fd()==="http:"||Fd()==="https:"}function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wS()||AI()||"connection"in navigator)?navigator.onLine:!0}function RS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=TI()||RI()}get(){return AS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ku(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class j_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PS=new xi(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fr(t,e,n,r,s={}){return $_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return wI()||(h.referrerPolicy="no-referrer"),j_.fetch()(await H_(t,t.config.apiHost,n,c),h)})}async function $_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bS),e);try{const s=new kS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ho(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pu(t,f,h);Bt(t,f)}}catch(s){if(s instanceof dn)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function Li(t,e,n,r,s={}){const i=await fr(t,e,n,r,s);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function H_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?ku(t.config,s):`${t.config.apiScheme}://${s}`;return SS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function CS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),PS.get())})}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function Bd(t){return t!==void 0&&t.enterprise!==void 0}class OS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DS(t,e){return fr(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
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
 */async function NS(t,e){return fr(t,"POST","/v1/accounts:delete",e)}async function Jo(t,e){return fr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=Ou(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:li(Ac(s.auth_time)),issuedAtTime:li(Ac(s.iat)),expirationTime:li(Ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function Ou(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=kg(n);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jd(t){const e=Ou(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&xS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ai(t,Jo(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?q_(i.providerUserInfo):[],c=US(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new pl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function MS(t){const e=We(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function US(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function q_(t){return t.map(e=>{var{providerId:n}=e,r=Su(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function FS(t,e){const n=await $_(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await H_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",j_.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BS(t,e){return fr(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=jd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new os;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Un(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VS(this,e)}reload(){return MS(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Ai(this,NS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,H=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:$,isAnonymous:ae,providerData:he,stsTokenManager:w}=n;se(j&&w,e,"internal-error");const y=os.fromJSON(this.name,w);se(typeof j=="string",e,"internal-error"),Un(p,e.name),Un(m,e.name),se(typeof $=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),Un(_,e.name),Un(C,e.name),Un(D,e.name),Un(O,e.name),Un(H,e.name),Un(F,e.name);const I=new qt({uid:j,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:ae,photoURL:C,phoneNumber:_,tenantId:D,stsTokenManager:y,createdAt:H,lastLoginAt:F});return he&&Array.isArray(he)&&(I.providerData=he.map(A=>Object.assign({},A))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new os;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?q_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const l=new qt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const $d=new Map;function wn(t){kn(t instanceof Function,"Expected a class definition");let e=$d.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$d.set(t,e),e)}/**
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
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const Hd=z_;/**
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
 */function bo(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jo(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(wn(Hd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||wn(Hd);const o=bo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await Jo(e,{idToken:f}).catch(()=>{});if(!m)break;p=await qt._fromGetAccountInfoResponse(e,m,f)}else p=qt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new as(i,e,r))}}/**
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
 */function qd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(X_(e))return"Webos";if(K_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function W_(t=ft()){return/firefox\//i.test(t)}function K_(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=ft()){return/crios\//i.test(t)}function Q_(t=ft()){return/iemobile/i.test(t)}function Y_(t=ft()){return/android/i.test(t)}function J_(t=ft()){return/blackberry/i.test(t)}function X_(t=ft()){return/webos/i.test(t)}function Du(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jS(t=ft()){var e;return Du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $S(){return bI()&&document.documentMode===10}function Z_(t=ft()){return Du(t)||Y_(t)||X_(t)||J_(t)||/windows phone/i.test(t)||Q_(t)}/**
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
 */function ey(t,e=[]){let n;switch(t){case"Browser":n=qd(ft());break;case"Worker":n=`${qd(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lr}/${r}`}/**
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
 */class HS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qS(t,e={}){return fr(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
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
 */const zS=6;class WS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class KS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zd(this),this.idTokenSubscription=new zd(this),this.beforeStateQueue=new HS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jo(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(bn(this));const n=e?We(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qS(this),n=new WS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ey(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return We(t)}class zd{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GS(t){xa=t}function ty(t){return xa.loadJS(t)}function QS(){return xa.recaptchaEnterpriseScript}function YS(){return xa.gapiScript}function JS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class XS{constructor(){this.enterprise=new ZS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const eP="recaptcha-enterprise",ny="NO_RECAPTCHA";class tP{constructor(e){this.type=eP,this.auth=dr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{DS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new OS(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(ny)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Bd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=QS();l.length!==0&&(l+=c),ty(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Wd(t,e,n,r=!1,s=!1){const i=new tP(t);let o;if(s)o=ny;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function gl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Wd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function nP(t,e){const n=_a(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function rP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sP(t,e,n){const r=dr(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ry(e),{host:o,port:c}=iP(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(Pr(h,r.config.emulator)&&Pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,oP()}function ry(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iP(t){const e=ry(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Kd(o)}}}function Kd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function aP(t,e){return fr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cP(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}/**
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
 */async function lP(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function uP(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
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
 */class Ri extends Nu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,n,"signInWithPassword",cP);case"emailLink":return lP(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,r,"signUpPassword",aP);case"emailLink":return uP(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cs(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
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
 */const hP="http://localhost";class Nr extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Su(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:hP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
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
 */function fP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dP(t){const e=qs(zs(t)).link,n=e?qs(zs(e)).deep_link_id:null,r=qs(zs(t)).deep_link_id;return(r?qs(zs(r)).link:null)||r||n||e||t}class Vu{constructor(e){var n,r,s,i,o,c;const l=qs(zs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=fP((s=l.mode)!==null&&s!==void 0?s:null);se(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=dP(e);try{return new Vu(n)}catch{return null}}}/**
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
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vu.parseLink(n);return se(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends xu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends Mi{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class qn extends Mi{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class zn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */async function pP(t,e){return Li(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
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
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),o=Gd(r);return new Vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gd(r);return new Vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zo extends dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zo(e,n,r,s)}}function sy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,i,e,r):i})}async function gP(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
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
 */async function mP(t,e,n=!1){const{auth:r}=t;if(wt(r.app))return Promise.reject(bn(r));const s="reauthenticate";try{const i=await Ai(t,sy(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Ou(i.idToken);se(o,r,"internal-error");const{sub:c}=o;return se(t.uid===c,r,"user-mismatch"),Vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
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
 */async function iy(t,e,n=!1){if(wt(t.app))return Promise.reject(bn(t));const r="signIn",s=await sy(t,r,e),i=await Vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _P(t,e){return iy(dr(t),e)}/**
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
 */async function oy(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yP(t,e,n){if(wt(t.app))return Promise.reject(bn(t));const r=dr(t),o=await gl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&oy(t),l}),c=await Vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function vP(t,e,n){return wt(t.app)?Promise.reject(bn(t)):_P(We(t),Rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oy(t),r})}function EP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function TP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}const ea="__sak";/**
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
 */class ay{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IP=1e3,wP=10;class cy extends ay{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$S()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cy.type="LOCAL";const AP=cy;/**
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
 */class ly extends ay{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ly.type="SESSION";const uy=ly;/**
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
 */function RP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class La{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new La(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await RP(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}La.receivers=[];/**
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
 */function Lu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Lu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function SP(t){cn().location.href=t}/**
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
 */function hy(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function PP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kP(){return hy()?self:null}/**
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
 */const fy="firebaseLocalStorageDb",OP=1,ta="firebaseLocalStorage",dy="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ma(t,e){return t.transaction([ta],e?"readwrite":"readonly").objectStore(ta)}function DP(){const t=indexedDB.deleteDatabase(fy);return new Ui(t).toPromise()}function ml(){const t=indexedDB.open(fy,OP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ta,{keyPath:dy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ta)?e(r):(r.close(),await DP(),e(await ml()))})})}async function Qd(t,e,n){const r=Ma(t,!0).put({[dy]:e,value:n});return new Ui(r).toPromise()}async function NP(t,e){const n=Ma(t,!1).get(e),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function Yd(t,e){const n=Ma(t,!0).delete(e);return new Ui(n).toPromise()}const VP=800,xP=3;class py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=La._getInstance(kP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PP(),!this.activeServiceWorker)return;this.sender=new bP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await Qd(e,ea,"1"),await Yd(e,ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ma(s,!1).getAll();return new Ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}py.type="LOCAL";const LP=py;new xi(3e4,6e4);/**
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
 */function gy(t,e){return e?wn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mu extends Nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MP(t){return iy(t.auth,new Mu(t),t.bypassAuthState)}function UP(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),mP(n,new Mu(t),t.bypassAuthState)}async function FP(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),gP(n,new Mu(t),t.bypassAuthState)}/**
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
 */class my{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MP;case"linkViaPopup":case"linkViaRedirect":return FP;case"reauthViaPopup":case"reauthViaRedirect":return UP;default:Bt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BP=new xi(2e3,1e4);async function jP(t,e,n){if(wt(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const r=dr(t);IS(t,e,xu);const s=gy(r,n);return new wr(r,"signInViaPopup",e,s).executeNotNull()}class wr extends my{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BP.get())};e()}}wr.currentPopupAction=null;/**
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
 */const $P="pendingRedirect",So=new Map;class HP extends my{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(t,e){const n=KP(e),r=WP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zP(t,e){So.set(t._key(),e)}function WP(t){return wn(t._redirectPersistence)}function KP(t){return bo($P,t.config.apiKey,t.name)}async function GP(t,e,n=!1){if(wt(t.app))return Promise.reject(bn(t));const r=dr(t),s=gy(r,e),o=await new HP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QP=10*60*1e3;class YP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_y(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jd(e))}saveEventToCache(e){this.cachedEventUids.add(Jd(e)),this.lastProcessedEventTime=Date.now()}}function Jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _y({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _y(t);default:return!1}}/**
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
 */async function XP(t,e={}){return fr(t,"GET","/v1/projects",e)}/**
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
 */const ZP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eC=/^https?/;async function tC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XP(t);for(const n of e)try{if(nC(n))return}catch{}Bt(t,"unauthorized-domain")}function nC(t){const e=dl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eC.test(n))return!1;if(ZP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rC=new xi(3e4,6e4);function Xd(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sC(t){return new Promise((e,n)=>{var r,s,i;function o(){Xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xd(),n(Gt(t,"network-request-failed"))},timeout:rC.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const c=JS("iframefcb");return cn()[c]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},ty(`${YS()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Po=null,e})}let Po=null;function iC(t){return Po=Po||sC(t),Po}/**
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
 */const oC=new xi(5e3,15e3),aC="__/auth/iframe",cC="emulator/auth/iframe",lC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hC(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,cC):`https://${t.config.authDomain}/${aC}`,r={apiKey:e.apiKey,appName:t.name,v:Lr},s=uC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ki(r).slice(1)}`}async function fC(t){const e=await iC(t),n=cn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:hC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},oC.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const dC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pC=500,gC=600,mC="_blank",_C="http://localhost";class Zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yC(t,e,n,r=pC,s=gC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},dC),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ft().toLowerCase();n&&(c=G_(h)?mC:n),W_(h)&&(e=e||_C,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(jS(h)&&c!=="_self")return vC(e||"",c),new Zd(null);const p=window.open(e||"",c,f);se(p,t,"popup-blocked");try{p.focus()}catch{}return new Zd(p)}function vC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EC="__/auth/handler",TC="emulator/auth/handler",IC=encodeURIComponent("fac");async function ep(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lr,eventId:s};if(e instanceof xu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Mi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${IC}=${encodeURIComponent(l)}`:"";return`${wC(t)}?${ki(c).slice(1)}${h}`}function wC({config:t}){return t.emulator?ku(t,TC):`https://${t.authDomain}/${EC}`}/**
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
 */const Rc="webStorageSupport";class AC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uy,this._completeRedirectFn=GP,this._overrideRedirectResult=zP}async _openPopup(e,n,r,s){var i;kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ep(e,n,r,dl(),s);return yC(e,o,Lu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ep(e,n,r,dl(),s);return SP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fC(e),r=new YP(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rc];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z_()||K_()||Du()}}const RC=AC;var tp="@firebase/auth",np="1.10.1";/**
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
 */class bC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PC(t){Cr(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ey(t)},h=new KS(r,s,i,l);return rP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cr(new Xn("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(r=>new bC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(tp,np,SC(t)),sn(tp,np,"esm2017")}/**
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
 */const CC=5*60,kC=Vg("authIdTokenMaxAge")||CC;let rp=null;const OC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kC)return;const s=n==null?void 0:n.token;rp!==s&&(rp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DC(t=Fl()){const e=_a(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nP(t,{popupRedirectResolver:RC,persistence:[LP,AP,uy]}),r=Vg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=OC(i.toString());TP(n,o,()=>o(n.currentUser)),EP(n,c=>o(c))}}const s=Og("auth");return s&&sP(n,`http://${s}`),n}function NC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",NC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PC("Browser");const vt=rS(Bl),Uu=DC(Bl),VC=sR(Bl),xC=async()=>(await Br(Fr(vt,"recipes"))).docs.map(e=>({id:e.id,...e.data()})),ZC=async t=>{const e=ur(vt,"recipes",t),n=await Ru(e);return n.exists()?{id:n.id,...n.data()}:{}},ek=async t=>(await Br(Fr(vt,"recipes"))).docs.map(r=>({id:r.id,...r.data()})).filter(r=>Array.isArray(r.ingredients)&&r.ingredients.includes(t)),tk=async()=>{const t=await Br(Fr(vt,"recipes")),e=new Set;return t.forEach(n=>{const r=n.data();Array.isArray(r.ingredients)&&r.ingredients.forEach(s=>e.add(s))}),Array.from(e)},nk=async()=>{const t=new Tn;return(await jP(Uu,t)).user},rk=async(t,e)=>(await yP(Uu,t,e)).user,sk=async(t,e)=>(await vP(Uu,t,e)).user;async function ik(t,e){const n=ur(vt,`users/${t}/favourites`,e.id);await M_(n,e)}async function ok(t,e){const n=ur(vt,`users/${t}/favourites`,e);await U_(n)}async function ak(t,e){const n=ur(vt,`users/${t}/favourites`,e);return(await Ru(n)).exists()}const ck=async(t,e)=>{const n=rR(VC,`recipes/${e}/${t.name}`);await tR(n,t);const r=await nR(n),s=ur(vt,"recipes",e);return await yS(s,{imageUrl:r}),r},lk=async()=>(await Br(Fr(vt,"recipes"))).docs.map(e=>e.data()),uk=async()=>(await Br(Fr(vt,"restaurants"))).docs.map(e=>({id:e.id,...e.data()}));async function hk(t,e){const n=ur(vt,`users/${t}/favouriteRestaurants`,e);return(await Ru(n)).exists()}async function fk(t,e){const n=ur(vt,`users/${t}/favouriteRestaurants`,e.id);await M_(n,e)}async function dk(t,e){const n=ur(vt,`users/${t}/favouriteRestaurants`,e);await U_(n)}const pk=async()=>{const t=await Br(Fr(vt,"restaurants")),e=new Set;return t.forEach(n=>{const r=n.data();Array.isArray(r.menu)&&r.menu.forEach(s=>e.add(s))}),Array.from(e)},gk=async t=>(await Br(Fr(vt,"restaurants"))).docs.map(r=>({id:r.id,...r.data()})).filter(r=>Array.isArray(r.menu)&&r.menu.includes(t)),LC={class:"container"},MC={class:"list-group"},UC=Si({__name:"HomeView",setup(t){const e=kl([]);return $p(async()=>{e.value=await xC()}),(n,r)=>(ss(),mo("main",LC,[r[0]||(r[0]=ls("h2",{class:"my-3"},"Dostępne przepisy",-1)),ls("ul",MC,[(ss(!0),mo(en,null,qv(e.value,s=>(ss(),mo("li",{key:s.id,class:"list-group-item"},hp(s.name),1))),128))])]))}}),FC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},BC={class:"welcome"},jC={class:"overlay"},$C=Si({__name:"WelcomeView",setup(t){return(e,n)=>(ss(),mo("div",BC,[ls("div",jC,[n[2]||(n[2]=ls("h1",null,"Co dziś zjeść?",-1)),yt(An(Hc),{to:"/login",class:"btn btn-primary"},{default:Dc(()=>n[0]||(n[0]=[Mc("LOG IN")])),_:1}),yt(An(Hc),{to:"/signup",class:"btn btn-secondary mt-2"},{default:Dc(()=>n[1]||(n[1]=[Mc("SIGN UP")])),_:1})])]))}}),HC=FC($C,[["__scopeId","data-v-6989f80b"]]),qC=aI({history:UT("/co_dzis_zjesc/"),routes:[{path:"/",name:"welcome",component:HC},{path:"/login",name:"login",component:()=>Tt(()=>import("./LoginView-BpK3KFJT.js"),[])},{path:"/signup",name:"signup",component:()=>Tt(()=>import("./SignupView-Bfc2gj9-.js"),__vite__mapDeps([0,1]))},{path:"/home",name:"home",component:UC},{path:"/about",name:"about",component:()=>Tt(()=>import("./AboutView-BRh8zDTz.js"),__vite__mapDeps([2,3]))},{path:"/dashboard",name:"dashboard",component:()=>Tt(()=>import("./DashboardView-DYbg9CIV.js"),__vite__mapDeps([4,5]))},{path:"/recipes/ingredient/:name",name:"IngredientRecipes",component:()=>Tt(()=>import("./IngredientRecipesView-aj4k7T27.js"),__vite__mapDeps([6,7]))},{path:"/search-by-ingredient",name:"SearchByIngredient",component:()=>Tt(()=>import("./SearchByIngredientView-BGsk4bhn.js"),__vite__mapDeps([8,9]))},{path:"/favourites",name:"Favourites",component:()=>Tt(()=>import("./FavouritesView-Df7gSSOX.js"),__vite__mapDeps([10,11]))},{path:"/recipe/:id",name:"recipe-details",component:()=>Tt(()=>import("./RecipeDetailsView-88ociads.js"),__vite__mapDeps([12,13])),props:!0},{path:"/recipe/:id",name:"recipe-details",component:()=>Tt(()=>import("./RecipeDetailsView-88ociads.js"),__vite__mapDeps([12,13]))},{path:"/recipe/:id/shopping-list",name:"shopping-list",component:()=>Tt(()=>import("./ShoppingListView-hRd4_4O7.js"),__vite__mapDeps([14,15]))},{path:"/search-ingredient",name:"search-by-ingredient",component:()=>Tt(()=>import("./SearchByIngredientView-BGsk4bhn.js"),__vite__mapDeps([8,9]))},{path:"/restaurant/:id",name:"restaurant-details",component:()=>Tt(()=>import("./RestaurantDetailsView-BXbfSEni.js"),__vite__mapDeps([16,17])),props:!0},{path:"/search-by-meal",name:"search-by-meal",component:()=>Tt(()=>import("./SearchRestaurantByMealView-DjlAHm8J.js"),__vite__mapDeps([18,19]))},{path:"/restaurant/:id/location",name:"restaurant-location",component:()=>Tt(()=>import("./RestaurantMap-CaJfU6UL.js"),__vite__mapDeps([20,21]))}]}),Fu=rT(lI);Fu.use(aT());Fu.use(qC);Fu.mount("#app");export{ek as A,DC as B,uk as C,lk as D,Il as E,en as F,ZC as G,ak as H,KC as I,WC as J,ck as K,ok as L,ik as M,hk as N,dk as O,fk as P,pk as Q,Hc as R,gk as S,Ru as T,ur as U,FC as _,ls as a,yt as b,mo as c,Si as d,QC as e,Mc as f,Dc as g,YC as h,rk as i,rS as j,Bl as k,sk as l,Br as m,Fr as n,ss as o,JC as p,$p as q,kl as r,nk as s,hp as t,An as u,GC as v,zC as w,tk as x,Ht as y,qv as z};
