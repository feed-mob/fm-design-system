(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports):typeof define==`function`&&define.amd?define([`exports`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.FmDS={}))})(this,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var t=`
  :host {
    /* ---- Primary Teal Palette ---- */
    --fm-color-primary: #0D9488;
    --fm-color-primary-light: #14B8A6;
    --fm-color-primary-dark: #0F766E;
    --fm-color-primary-50: #F0FDFA;
    --fm-color-primary-100: #CCFBF1;
    --fm-color-primary-200: #99F6E4;

    /* ---- Secondary & Accent ---- */
    --fm-color-secondary: #1E293B;
    --fm-color-secondary-light: #334155;
    --fm-color-accent: #F59E0B;
    --fm-color-accent-light: #FBBF24;

    /* ---- Semantic ---- */
    --fm-color-success: #059669;
    --fm-color-warning: #D97706;
    --fm-color-error: #DC2626;
    --fm-color-info: #0284C7;

    /* ---- Surfaces ---- */
    --fm-color-surface: #FFFFFF;
    --fm-color-surface-alt: #F8FAFC;
    --fm-color-surface-muted: #F1F5F9;
    --fm-color-text: #0F172A;
    --fm-color-text-secondary: #475569;
    --fm-color-text-light: #FFFFFF;
    --fm-color-border: #E2E8F0;
    --fm-color-border-strong: #CBD5E1;

    /* ---- Alpha Colors ---- */
    --fm-alpha-primary-10: rgba(13, 148, 136, 0.10);
    --fm-alpha-primary-15: rgba(13, 148, 136, 0.15);
    --fm-alpha-primary-20: rgba(13, 148, 136, 0.20);
    --fm-alpha-secondary-10: rgba(30, 41, 59, 0.10);
    --fm-alpha-accent-12: rgba(245, 158, 11, 0.12);

    /* ---- Typography ---- */
    --fm-font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --fm-font-size-xs: 0.75rem;
    --fm-font-size-sm: 0.875rem;
    --fm-font-size-md: 1rem;
    --fm-font-size-lg: 1.125rem;
    --fm-font-size-xl: 1.25rem;
    --fm-font-size-2xl: 1.5rem;
    --fm-font-weight-normal: 400;
    --fm-font-weight-medium: 500;
    --fm-font-weight-semibold: 600;
    --fm-font-weight-bold: 700;
    --fm-line-height: 1.5;
    --fm-letter-spacing: -0.011em;

    /* ---- Shape ---- */
    --fm-radius-sm: 6px;
    --fm-radius-md: 8px;
    --fm-radius-lg: 12px;
    --fm-radius-xl: 16px;
    --fm-radius-full: 9999px;

    /* ---- Spacing ---- */
    --fm-space-xs: 4px;
    --fm-space-sm: 8px;
    --fm-space-md: 16px;
    --fm-space-lg: 24px;
    --fm-space-xl: 32px;
    --fm-space-2xl: 48px;

    /* ---- Shadows ---- */
    --fm-shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.05);
    --fm-shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04);
    --fm-shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05);
    --fm-shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04);
    --fm-shadow-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06);

    /* ---- Transitions ---- */
    --fm-transition-fast: 150ms ease;
    --fm-transition-normal: 250ms ease;
    --fm-transition-slow: 400ms ease;

    /* ---- Base Styles ---- */
    font-family: var(--fm-font-family);
    color: var(--fm-color-text);
    line-height: var(--fm-line-height);
    letter-spacing: var(--fm-letter-spacing);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;function n(e){"@babel/helpers - typeof";return n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},n(e)}function r(e,t){if(n(e)!=`object`||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||`default`);if(n(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function i(e){var t=r(e,`string`);return n(t)==`symbol`?t:t+``}function a(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=class extends HTMLElement{constructor(){super(),a(this,`root`,void 0),a(this,`_entered`,!1),this.root=this.attachShadow({mode:`open`})}connectedCallback(){this.render(),this._entered||(this._entered=!0,this.onEnter())}disconnectedCallback(){}template(){return``}render(){this.root.innerHTML=`<style>${t}</style>${this.template()}`}onEnter(){}attr(e,t=``){return this.getAttribute(e)??t}boolAttr(e){return this.hasAttribute(e)}};function s(e,t){e.indexOf(t)===-1&&e.push(t)}function c(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var l=(e,t,n)=>n>t?t:n<e?e:n,u={},d=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function f(e){return typeof e==`object`&&!!e}var p=e=>/^0[^.\s]+$/u.test(e);function m(e){let t;return()=>(t===void 0&&(t=e()),t)}var h=e=>e,g=(e,t)=>n=>t(e(n)),_=(...e)=>e.reduce(g),v=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},y=class{constructor(){this.subscriptions=[]}add(e){return s(this.subscriptions,e),()=>c(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},b=e=>e*1e3,x=e=>e/1e3;function S(e,t){return t?1e3/t*e:0}var C=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},w=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,T=1e-7,E=12;function D(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=w(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>T&&++s<E);return o}function ee(e,t,n,r){if(e===t&&n===r)return h;let i=t=>D(t,0,1,e,n);return e=>e===0||e===1?e:w(i(e),t,r)}var te=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ne=e=>t=>1-e(1-t),re=ee(.33,1.53,.69,.99),ie=ne(re),ae=te(ie),oe=e=>e>=1?1:(e*=2)<1?.5*ie(e):.5*(2-2**(-10*(e-1))),se=e=>1-Math.sin(Math.acos(e)),ce=ne(se),le=te(se),ue=ee(.42,0,1,1),de=ee(0,0,.58,1),fe=ee(.42,0,.58,1),pe=e=>Array.isArray(e)&&typeof e[0]!=`number`;function me(e,t){return pe(e)?e[C(0,e.length,t)]:e}var he=e=>Array.isArray(e)&&typeof e[0]==`number`,ge={linear:h,easeIn:ue,easeInOut:fe,easeOut:de,circIn:se,circInOut:le,circOut:ce,backIn:ie,backInOut:ae,backOut:re,anticipate:oe},_e=e=>typeof e==`string`,ve=e=>{if(he(e)){e.length;let[t,n,r,i]=e;return ee(t,n,r,i)}else if(_e(e))return ge[e],`${e}`,ge[e];return e},ye=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],be={value:null,addProjectionMetrics:null};function xe(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&be.value&&be.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Se=40;function Ce(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ye.reduce((e,n)=>(e[n]=xe(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:d,update:f,preRender:p,render:m,postRender:h}=o,g=()=>{let a=u.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Se),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),d.process(i),f.process(i),p.process(i),m.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},_=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:ye.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||_(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<ye.length;t++)o[ye[t]].cancel(e)},state:i,steps:o}}var{schedule:O,cancel:we,state:Te,steps:Ee}=Ce(typeof requestAnimationFrame<`u`?requestAnimationFrame:h,!0),De;function Oe(){De=void 0}var k={now:()=>(De===void 0&&k.set(Te.isProcessing||u.useManualTiming?Te.timestamp:performance.now()),De),set:e=>{De=e,queueMicrotask(Oe)}},ke={layout:0,mainThread:0,waapi:0},Ae=e=>t=>typeof t==`string`&&t.startsWith(e),je=Ae(`--`),Me=Ae(`var(--`),Ne=e=>Me(e)?Pe.test(e.split(`/*`)[0].trim()):!1,Pe=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Fe(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var A={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},j={...A,transform:e=>l(0,1,e)},Ie={...A,default:1},M=e=>Math.round(e*1e5)/1e5,Le=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Re(e){return e==null}var ze=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Be=(e,t)=>n=>!!(typeof n==`string`&&ze.test(n)&&n.startsWith(e)||t&&!Re(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ve=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Le);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},He=e=>l(0,255,e),Ue={...A,transform:e=>Math.round(He(e))},N={test:Be(`rgb`,`red`),parse:Ve(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Ue.transform(e)+`, `+Ue.transform(t)+`, `+Ue.transform(n)+`, `+M(j.transform(r))+`)`};function We(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Ge={test:Be(`#`),parse:We,transform:N.transform},P=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),F=P(`deg`),I=P(`%`),L=P(`px`),Ke=P(`vh`),qe=P(`vw`),Je={...I,parse:e=>I.parse(e)/100,transform:e=>I.transform(e*100)},R={test:Be(`hsl`,`hue`),parse:Ve(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+I.transform(M(t))+`, `+I.transform(M(n))+`, `+M(j.transform(r))+`)`},z={test:e=>N.test(e)||Ge.test(e)||R.test(e),parse:e=>N.test(e)?N.parse(e):R.test(e)?R.parse(e):Ge.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?N.transform(e):R.transform(e),getAnimatableNone:e=>{let t=z.parse(e);return t.alpha=0,z.transform(t)}},Ye=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Xe(e){return isNaN(e)&&typeof e==`string`&&(e.match(Le)?.length||0)+(e.match(Ye)?.length||0)>0}var Ze=`number`,Qe=`color`,$e=`var`,et=`var(`,tt="${}",nt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function B(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(nt,e=>(z.test(e)?(r.color.push(a),i.push(Qe),n.push(z.parse(e))):e.startsWith(et)?(r.var.push(a),i.push($e),n.push(e)):(r.number.push(a),i.push(Ze),n.push(parseFloat(e))),++a,tt)).split(tt),indexes:r,types:i}}function rt(e){return B(e).values}function it({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Ze?i+=M(r[a]):e===Qe?i+=z.transform(r[a]):i+=r[a]}return i}}function at(e){return it(B(e))}var ot=e=>typeof e==`number`?0:z.test(e)?z.getAnimatableNone(e):e,st=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:ot(e);function ct(e){let t=B(e);return it(t)(t.values.map((e,n)=>st(e,t.split[n])))}var V={test:Xe,parse:rt,createTransformer:at,getAnimatableNone:ct};function lt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ut({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=lt(s,r,e+1/3),a=lt(s,r,e),o=lt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function dt(e,t){return n=>n>0?t:e}var H=(e,t,n)=>e+(t-e)*n,ft=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},pt=[Ge,N,R],mt=e=>pt.find(t=>t.test(e));function ht(e){let t=mt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===R&&(n=ut(n)),n}var gt=(e,t)=>{let n=ht(e),r=ht(t);if(!n||!r)return dt(e,t);let i={...n};return e=>(i.red=ft(n.red,r.red,e),i.green=ft(n.green,r.green,e),i.blue=ft(n.blue,r.blue,e),i.alpha=H(n.alpha,r.alpha,e),N.transform(i))},_t=new Set([`none`,`hidden`]);function vt(e,t){return _t.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function yt(e,t){return n=>H(e,t,n)}function bt(e){return typeof e==`number`?yt:typeof e==`string`?Ne(e)?dt:z.test(e)?gt:wt:Array.isArray(e)?xt:typeof e==`object`?z.test(e)?gt:St:dt}function xt(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>bt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function St(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=bt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ct(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var wt=(e,t)=>{let n=V.createTransformer(t),r=B(e),i=B(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?_t.has(e)&&!i.values.length||_t.has(t)&&!r.values.length?vt(e,t):_(xt(Ct(r,i),i.values),n):(`${e}${t}`,dt(e,t))};function Tt(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?H(e,t,n):bt(e)(e,t)}var Et=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>O.update(t,e),stop:()=>we(t),now:()=>Te.isProcessing?Te.timestamp:k.now()}},Dt=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Ot=2e4;function kt(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function At(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(kt(r),Ot);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:x(i)}}var U={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function jt(e,t){return e*Math.sqrt(1-t*t)}var Mt=12;function Nt(e,t,n){let r=n;for(let n=1;n<Mt;n++)r-=e(r)/t(r);return r}var Pt=.001;function Ft({duration:e=U.duration,bounce:t=U.bounce,velocity:n=U.velocity,mass:r=U.mass}){let i,a;U.maxDuration;let o=1-t;o=l(U.minDamping,U.maxDamping,o),e=l(U.minDuration,U.maxDuration,x(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=jt(t,o),c=Math.exp(-i);return Pt-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=jt(t**2,o);return(-i(t)+Pt>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Pt+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Nt(i,a,s);if(e=b(e),isNaN(c))return{stiffness:U.stiffness,damping:U.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var It=[`duration`,`bounce`],Lt=[`stiffness`,`damping`,`mass`];function Rt(e,t){return t.some(t=>e[t]!==void 0)}function zt(e){let t={velocity:U.velocity,stiffness:U.stiffness,damping:U.damping,mass:U.mass,isResolvedFromDuration:!1,...e};if(!Rt(e,Lt)&&Rt(e,It))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*l(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:U.mass,stiffness:i,damping:a}}else{let n=Ft({...e,velocity:0});t={...t,...n,mass:U.mass},t.isResolvedFromDuration=!0}return t}function W(e=U.visualDuration,t=U.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=zt({...n,velocity:-x(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=x(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?U.restSpeed.granular:U.restSpeed.default,i||=v?U.restDelta.granular:U.restDelta.default;let y,S,C,w,T,E;if(h<1)C=jt(_,h),w=(m+h*_*g)/C,y=e=>o-Math.exp(-h*_*e)*(w*Math.sin(C*e)+g*Math.cos(C*e)),T=h*_*w+g*C,E=h*_*g-w*C,S=e=>Math.exp(-h*_*e)*(T*Math.sin(C*e)+E*Math.cos(C*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;S=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;S=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let D={calculatedDuration:p&&d||null,velocity:e=>b(S(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(C*e),a=Math.cos(C*e),c=o-t*(w*n+g*a),l=b(t*(T*n+E*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=b(S(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(kt(D),Ot),t=Dt(t=>D.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return D}W.applyToOptions=e=>{let t=At(e,100,W);return e.ease=t.ease,e.duration=b(t.duration),e.type=`keyframes`,e};var Bt=5;function Vt(e,t,n){let r=Math.max(t-Bt,0);return S(n-e(r),t-r)}function Ht({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=W({keyframes:[f.value,m(f.value)],velocity:Vt(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Ut(e,t,n){let r=[],i=n||u.mix||Tt,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=_(Array.isArray(t)?t[n]||h:t,a)),r.push(a)}return r}function Wt(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Ut(t,r,i),c=s.length,u=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=v(e[r],e[r+1],n);return s[r](i)};return n?t=>u(l(e[0],e[a-1],t)):u}function Gt(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=v(0,t,r);e.push(H(n,1,i))}}function Kt(e){let t=[0];return Gt(t,e.length-1),t}function qt(e,t){return e.map(e=>e*t)}function Jt(e,t){return e.map(()=>t||fe).splice(0,e.length-1)}function Yt({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=pe(r)?r.map(ve):ve(r),a={done:!1,value:t[0]},o=Wt(qt(n&&n.length===t.length?n:Kt(t),e),t,{ease:Array.isArray(i)?i:Jt(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Xt=e=>e!==null;function Zt(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Xt),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Qt={decay:Ht,inertia:Ht,tween:Yt,keyframes:Yt,spring:W};function $t(e){typeof e.type==`string`&&(e.type=Qt[e.type])}var en=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},tn=e=>e/100,nn=class extends en{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==k.now()&&this.tick(k.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},ke.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;$t(e);let{type:t=Yt,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Yt;s!==Yt&&typeof o[0]!=`number`&&(this.mixKeyframes=_(tn,Tt(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=kt(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:m,onUpdate:h,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let _=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?_<0:_>r;this.currentTime=Math.max(_,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,b=n;if(d){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,d+1),t%2&&(f===`reverse`?(n=1-n,p&&(n-=p/o)):f===`mirror`&&(b=a)),y=l(0,1,n)*o}let x;v?(this.delayState.value=u[0],x=this.delayState):x=b.next(y),i&&!v&&(x.value=i(x.value));let{done:S}=x;!v&&s!==null&&(S=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let C=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&S);return C&&m!==Ht&&(x.value=Zt(u,this.options,g,this.speed)),h&&h(x.value),C&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return x(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+x(e)}get time(){return x(this.currentTime)}set time(e){e=b(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Vt(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(k.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=x(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Et,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(k.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,ke.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function rn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var G=e=>e*180/Math.PI,an=e=>sn(G(Math.atan2(e[1],e[0]))),on={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:an,rotateZ:an,skewX:e=>G(Math.atan(e[1])),skewY:e=>G(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},sn=e=>(e%=360,e<0&&(e+=360),e),cn=an,ln=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),un=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),dn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ln,scaleY:un,scale:e=>(ln(e)+un(e))/2,rotateX:e=>sn(G(Math.atan2(e[6],e[5]))),rotateY:e=>sn(G(Math.atan2(-e[2],e[0]))),rotateZ:cn,rotate:cn,skewX:e=>G(Math.atan(e[4])),skewY:e=>G(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function fn(e){return+!!e.includes(`scale`)}function pn(e,t){if(!e||e===`none`)return fn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=dn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=on,i=t}if(!i)return fn(t);let a=r[t],o=i[1].split(`,`).map(hn);return typeof a==`function`?a(o):o[a]}var mn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return pn(n,t)};function hn(e){return parseFloat(e.trim())}var K=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],q=new Set(K),gn=e=>e===A||e===L,_n=new Set([`x`,`y`,`z`]),vn=K.filter(e=>!_n.has(e));function yn(e){let t=[];return vn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var J={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>pn(t,`x`),y:(e,{transform:t})=>pn(t,`y`)};J.translateX=J.x,J.translateY=J.y;var Y=new Set,bn=!1,xn=!1,Sn=!1;function Cn(){if(xn){let e=Array.from(Y).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=yn(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}xn=!1,bn=!1,Y.forEach(e=>e.complete(Sn)),Y.clear()}function wn(){Y.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(xn=!0)})}function Tn(){Sn=!0,wn(),Cn(),Sn=!1}var En=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Y.add(this),bn||(bn=!0,O.read(wn),O.resolveKeyframes(Cn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}rn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Y.delete(this)}cancel(){this.state===`scheduled`&&(Y.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Dn=e=>e.startsWith(`--`);function On(e,t,n){Dn(t)?e.style.setProperty(t,n):e.style[t]=n}var kn={};function An(e,t){let n=m(e);return()=>kn[t]??n()}var jn=An(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Mn=An(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Nn=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Pn={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Nn([0,.65,.55,1]),circOut:Nn([.55,0,1,.45]),backIn:Nn([.31,.01,.66,-.59]),backOut:Nn([.33,1.53,.69,.99])};function Fn(e,t){if(e)return typeof e==`function`?Mn()?Dt(e,t):`ease-out`:he(e)?Nn(e):Array.isArray(e)?e.map(e=>Fn(e,t)||Pn.easeOut):Pn[e]}function In(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Fn(s,i);Array.isArray(d)&&(u.easing=d),be.value&&ke.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return be.value&&p.finished.finally(()=>{ke.waapi--}),p}function Ln(e){return typeof e==`function`&&`applyToOptions`in e}function Rn({type:e,...t}){return Ln(e)&&Mn()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var zn=class extends en{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Rn(e);this.animation=In(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Zt(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),On(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return x(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+x(e)}get time(){return x(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=b(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&jn()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),h):r(this)}},Bn={anticipate:oe,backInOut:ae,circInOut:le};function Vn(e){return e in Bn}function Hn(e){typeof e.ease==`string`&&Vn(e.ease)&&(e.ease=Bn[e.ease])}var Un=10,Wn=class extends zn{constructor(e){Hn(e),$t(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new nn({...a,autoplay:!1}),s=Math.max(Un,k.now()-this.startTime),c=l(0,Un,s-Un),u=o.sample(s).value,{name:d}=this.options;i&&d&&On(i,d,u),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,u,c),o.stop()}},Gn=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(V.test(e)||e===`0`)&&!e.startsWith(`url(`));function Kn(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function qn(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Gn(i,t),s=Gn(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Kn(e)||(n===`spring`||Ln(n))&&r}function Jn(e){e.duration=0,e.type=`keyframes`}var Yn=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Xn=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Zn(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Xn.test(e[t]))return!0;return!1}var Qn=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),$n=m(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function er(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return $n()&&n&&(Yn.has(n)||Qn.has(n)&&Zn(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var tr=40,nr=class extends en{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=k.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||En;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=k.now();let d=!0;qn(e,i,a,o)||(d=!1,(u.instantAnimations||!s)&&l?.(Zt(e,n,t)),e[0]=e[e.length-1],Jn(n),n.repeat=0);let f={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>tr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},p=d&&!c&&er(f),m=f.motionValue?.owner?.current,g;if(p)try{g=new Wn({...f,element:m})}catch{g=new nn(f)}else g=new nn(f);g.finished.then(()=>{this.notifyFinished()}).catch(h),this.pendingTimeline&&=(this.stopTimeline=g.attachTimeline(this.pendingTimeline),void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Tn()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}},rr=class{constructor(e){this.stop=()=>this.runAll(`stop`),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>t.attachTimeline(e));return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll(`time`)}set time(e){this.setAll(`time`,e)}get speed(){return this.getAll(`speed`)}set speed(e){this.setAll(`speed`,e)}get state(){return this.getAll(`state`)}get startTime(){return this.getAll(`startTime`)}get duration(){return ir(this.animations,`duration`)}get iterationDuration(){return ir(this.animations,`iterationDuration`)}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll(`play`)}pause(){this.runAll(`pause`)}cancel(){this.runAll(`cancel`)}complete(){this.runAll(`complete`)}};function ir(e,t){let n=0;for(let r=0;r<e.length;r++){let i=e[r][t];i!==null&&i>n&&(n=i)}return n}var ar=class extends rr{then(e,t){return this.finished.finally(e).then(()=>{})}},or=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sr(e){let t=or.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function cr(e,t,n=1){`${e}`;let[r,i]=sr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return d(e)?parseFloat(e):e}return Ne(i)?cr(i,t,n+1):i}var lr={type:`spring`,stiffness:500,damping:25,restSpeed:10},ur=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),dr={type:`keyframes`,duration:.8},fr={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},pr=(e,{keyframes:t})=>t.length>2?dr:q.has(e)?e.startsWith(`scale`)?ur(t[1]):lr:fr;function mr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function hr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:mr(n,e)}var gr=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function _r(e){for(let t in e)if(!gr.has(t))return!0;return!1}var vr=(e,t,n,r={},i,a)=>o=>{let s=hr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=b(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};_r(s)||Object.assign(d,pr(e,d)),d.duration&&=b(d.duration),d.repeatDelay&&=b(d.repeatDelay),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Jn(d),d.delay===0&&(f=!0)),(u.instantAnimations||u.skipAnimations||i?.shouldSkipAnimations)&&(f=!0,Jn(d),d.delay=0),d.allowFlatten=!s.type&&!s.ease,f&&!a&&t.get()!==void 0){let e=Zt(d.keyframes,s);if(e!==void 0){O.update(()=>{d.onUpdate(e),d.onComplete()});return}}return s.isSync?new nn(d):new nr(d)};function yr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function br(e,t,n,r){if(typeof t==`function`){let[i,a]=yr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=yr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function xr(e,t,n){let r=e.getProps();return br(r,t,n===void 0?r.custom:n,e)}var Sr=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...K]),Cr=30,wr=e=>!isNaN(parseFloat(e)),Tr={current:void 0},Er=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=k.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=k.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=wr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new y);let n=this.events[e].add(t);return e===`change`?()=>{n(),O.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Tr.current&&Tr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=k.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Cr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Cr);return S(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function X(e,t){return new Er(e,t)}var Dr=e=>Array.isArray(e);function Or(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,X(n))}function kr(e){return Dr(e)?e[e.length-1]||0:e}function Ar(e,t){let{transitionEnd:n={},transition:r={},...i}=xr(e,t)||{};i={...i,...n};for(let t in i)Or(e,t,kr(i[t]))}var Z=e=>!!(e&&e.getVelocity);function jr(e){return!!(Z(e)&&e.add)}function Mr(e,t){let n=e.getValue(`willChange`);if(jr(n))return n.add(t);if(!n&&u.WillChange){let n=new u.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Nr(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Pr=`data-`+Nr(`framerAppearId`);function Fr(e){return e.props[Pr]}function Ir({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Lr(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?mr(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Ir(d,t))continue;let o={delay:n,...hr(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){O.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Fr(e);if(n){let e=window.MotionHandoffAnimation(n,t,O);e!==null&&(o.startTime=e,f=!0)}}Mr(e,t);let p=l??e.shouldReduceMotion;r.start(vr(t,r,i,p&&Sr.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>O.update(()=>{o&&Ar(e,o)});u.length?Promise.all(u).then(t):t()}return u}var Rr={test:e=>e===`auto`,parse:e=>e},zr=e=>t=>t.test(e),Br=[A,L,I,F,qe,Ke,Rr],Vr=e=>Br.find(zr(e));function Hr(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||p(e)}var Ur=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Wr(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Le)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Ur.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Gr=/\b([a-z-]*)\(.*?\)/gu,Kr={...V,getAnimatableNone:e=>{let t=e.match(Gr);return t?t.map(Wr).join(` `):e}},qr={...V,getAnimatableNone:e=>{let t=V.parse(e);return V.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Jr={...A,transform:Math.round},Yr={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,inset:L,insetBlock:L,insetBlockStart:L,insetBlockEnd:L,insetInline:L,insetInlineStart:L,insetInlineEnd:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,paddingBlock:L,paddingBlockStart:L,paddingBlockEnd:L,paddingInline:L,paddingInlineStart:L,paddingInlineEnd:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,marginBlock:L,marginBlockStart:L,marginBlockEnd:L,marginInline:L,marginInlineStart:L,marginInlineEnd:L,fontSize:L,backgroundPositionX:L,backgroundPositionY:L,rotate:F,rotateX:F,rotateY:F,rotateZ:F,scale:Ie,scaleX:Ie,scaleY:Ie,scaleZ:Ie,skew:F,skewX:F,skewY:F,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:j,originX:Je,originY:Je,originZ:L,zIndex:Jr,fillOpacity:j,strokeOpacity:j,numOctaves:Jr},Xr={...Yr,color:z,backgroundColor:z,outlineColor:z,fill:z,stroke:z,borderColor:z,borderTopColor:z,borderRightColor:z,borderBottomColor:z,borderLeftColor:z,filter:Kr,WebkitFilter:Kr,mask:qr,WebkitMask:qr},Zr=e=>Xr[e],Qr=new Set([Kr,qr]);function $r(e,t){let n=Zr(e);return Qr.has(n)||(n=V),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var ei=new Set([`auto`,`none`,`0`]);function ti(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!ei.has(t)&&B(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=$r(n,i)}var ni=class extends En{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ne(r))){let i=cr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Sr.has(n)||e.length!==2)return;let[r,i]=e,a=Vr(r),o=Vr(i);if(Fe(r)!==Fe(i)&&J[n]){this.needsMeasurement=!0;return}if(a!==o)if(gn(a)&&gn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else J[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Hr(e[t]))&&n.push(t);n.length&&ti(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=J[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=J[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ri(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ii=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ai(e){return f(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:oi,cancel:si}=Ce(queueMicrotask,!1),ci={x:!1,y:!1};function li(){return ci.x||ci.y}function ui(e,t){let n=ri(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function di(e){return!(e.pointerType===`touch`||li())}function fi(e,t,n={}){let[r,i,a]=ui(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!di(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var pi=(e,t)=>t?e===t?!0:pi(e,t.parentElement):!1,mi=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,hi=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function gi(e){return hi.has(e.tagName)||e.isContentEditable===!0}var _i=new WeakSet;function vi(e){return t=>{t.key===`Enter`&&e(t)}}function yi(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var bi=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=vi(()=>{if(_i.has(n))return;yi(n,`down`);let e=vi(()=>{yi(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>yi(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function xi(e){return mi(e)&&!li()}var Si=new WeakSet;function Ci(e,t,n={}){let[r,i,a]=ui(e,n),o=e=>{let r=e.currentTarget;if(!xi(e)||Si.has(e))return;_i.add(r),n.stopPropagation&&Si.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),_i.has(r)&&_i.delete(r),xi(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||pi(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ai(e)&&(e.addEventListener(`focus`,e=>bi(e,i)),!gi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function wi(e){return f(e)&&`ownerSVGElement`in e}function Ti(e){return wi(e)&&e.tagName===`svg`}var Ei=[...Br,z,V],Di=e=>Ei.find(zr(e)),Oi=()=>({min:0,max:0}),ki=()=>({x:Oi(),y:Oi()}),Q=new WeakMap;function Ai(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function ji(e){return typeof e==`string`||Array.isArray(e)}var Mi=[`initial`,...[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`]];function Ni(e){return Ai(e.animate)||Mi.some(t=>ji(e[t]))}function Pi(e){return!!(Ni(e)||e.variants)}function Fi(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Z(i))e.addValue(r,i);else if(Z(a))e.addValue(r,X(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,X(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ii={current:null},Li={current:!1},Ri=typeof window<`u`;function zi(){if(Li.current=!0,Ri)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ii.current=e.matches;e.addEventListener(`change`,t),t()}else Ii.current=!1}var Bi=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Vi={},Hi=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=En,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=k.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,O.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ni(t),this.isVariantNode=Pi(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Z(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Q.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Li.current||zi(),this.shouldReduceMotion=Ii.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),we(this.notifyUpdate),we(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Yn.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new zn({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:b(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=q.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&O.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Vi){let t=Vi[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ki()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Bi.length;t++){let n=Bi[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Fi(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=X(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(d(n)||p(n))?n=parseFloat(n):!Di(n)&&V.test(t)&&(n=$r(e,t)),this.setBaseTarget(e,Z(n)?n.get():n)),Z(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=br(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Z(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new y),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){oi.render(this.render)}},Ui=class extends Hi{constructor(){super(...arguments),this.KeyframeResolver=ni}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Z(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}};function Wi({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Gi(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ki(e,t){return Wi(Gi(e.getBoundingClientRect(),t))}var qi={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ji=K.length;function Yi(e,t,n){let r=``,i=!0;for(let a=0;a<Ji;a++){let o=K[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ii(s,Yr[o]);if(!c){i=!1;let t=qi[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Xi(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(q.has(e)){o=!0;continue}else if(je(e)){i[e]=n;continue}else{let t=ii(n,Yr[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Yi(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Zi(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Qi(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var $i={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(L.test(e))e=parseFloat(e);else return e;return`${Qi(e,t.target.x)}% ${Qi(e,t.target.y)}%`}},ea={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=V.parse(e);if(i.length>5)return r;let a=V.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=H(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ta={borderRadius:{...$i,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:$i,borderTopRightRadius:$i,borderBottomLeftRadius:$i,borderBottomRightRadius:$i,boxShadow:ea};function na(e,{layout:t,layoutId:n}){return q.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!ta[e]||e===`opacity`)}function ra(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Z(r[t])||i&&Z(i[t])||na(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function ia(e){return window.getComputedStyle(e)}var aa=class extends Ui{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Zi}readValueFromInstance(e,t){if(q.has(t))return this.projection?.isProjecting?fn(t):mn(e,t);{let n=ia(e),r=(je(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ki(e,t)}build(e,t,n){Xi(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ra(e,t,n)}};function oa(e,t){return e in t}var sa=class extends Hi{constructor(){super(...arguments),this.type=`object`}readValueFromInstance(e,t){if(oa(t,e)){let n=e[t];if(typeof n==`string`||typeof n==`number`)return n}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return ki()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}},ca={offset:`stroke-dashoffset`,array:`stroke-dasharray`},la={offset:`strokeDashoffset`,array:`strokeDasharray`};function ua(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?ca:la;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var da=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function fa(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Xi(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of da)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ua(d,i,a,o,!1)}var pa=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ma=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ha(e,t,n,r){Zi(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(pa.has(n)?n:Nr(n),t.attrs[n])}function ga(e,t,n){let r=ra(e,t,n);for(let n in e)if(Z(e[n])||Z(t[n])){let t=K.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var _a=class extends Ui{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=ki}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(q.has(t)){let e=Zr(t);return e&&e.default||0}return t=pa.has(t)?t:Nr(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ga(e,t,n)}build(e,t,n){fa(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ha(e,t,n,r)}mount(e){this.isSVGTag=ma(e.tagName),super.mount(e)}};function va(e,t,n){let r=Z(e)?e:X(e);return r.start(vr(``,r,t,n)),r.animation}function ya(e){return typeof e==`object`&&!Array.isArray(e)}function ba(e,t,n,r){return e==null?[]:typeof e==`string`&&ya(t)?ri(e,n,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(e=>e!=null):[e]}function xa(e,t,n){return e*(t+1)}function Sa(e,t,n,r){return typeof t==`number`?t:t.startsWith(`-`)||t.startsWith(`+`)?Math.max(0,e+parseFloat(t)):t===`<`?n:t.startsWith(`<`)?Math.max(0,n+parseFloat(t.slice(1))):r.get(t)??e}function Ca(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.at>t&&i.at<n&&(c(e,i),r--)}}function wa(e,t,n,r,i,a){Ca(e,i,a);for(let o=0;o<t.length;o++)e.push({value:t[o],at:H(i,a,r[o]),easing:me(n,o)})}function Ta(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]/(t+1)}function Ea(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}var Da=`easeInOut`;function Oa(e,{defaultTransition:t={},...n}={},r,i){let a=t.duration||.3,o=new Map,s=new Map,c={},l=new Map,u=0,d=0,f=0;for(let n=0;n<e.length;n++){let o=e[n];if(typeof o==`string`){l.set(o,d);continue}else if(!Array.isArray(o)){l.set(o.name,Sa(d,o.at,u,l));continue}let[p,m,h={}]=o;h.at!==void 0&&(d=Sa(d,h.at,u,l));let g=0,_=(e,n,r,o=0,s=0)=>{let c=ja(e),{delay:l=0,times:u=Kt(c),type:p=t.type||`keyframes`,repeat:m,repeatType:h,repeatDelay:_=0,...v}=n,{ease:y=t.ease||`easeOut`,duration:x}=n,S=typeof l==`function`?l(o,s):l,C=c.length,w=Ln(p)?p:i?.[p||`keyframes`];if(C<=2&&w){let e=100;if(C===2&&Pa(c)){let t=c[1]-c[0];e=Math.abs(t)}let n={...t,...v};x!==void 0&&(n.duration=b(x));let r=At(n,e,w);y=r.ease,x=r.duration}x??=a;let T=d+S;u.length===1&&u[0]===0&&(u[1]=1);let E=u.length-c.length;if(E>0&&Gt(u,E),c.length===1&&c.unshift(null),m){x=xa(x,m);let e=[...c],t=[...u];y=Array.isArray(y)?[...y]:[y];let n=[...y];for(let r=0;r<m;r++){c.push(...e);for(let i=0;i<e.length;i++)u.push(t[i]+(r+1)),y.push(i===0?`linear`:me(n,i-1))}Ta(u,m)}let D=T+x;wa(r,c,y,u,T,D),g=Math.max(S+x,g),f=Math.max(D,f)};if(Z(p)){let e=ka(p,s);_(m,h,Aa(`default`,e))}else{let e=ba(p,m,r,c),t=e.length;for(let n=0;n<t;n++){m=m,h=h;let r=e[n],i=ka(r,s);for(let e in m)_(m[e],Ma(h,e),Aa(e,i),n,t)}}u=d,d+=g}return s.forEach((e,r)=>{for(let i in e){let a=e[i];a.sort(Ea);let s=[],c=[],l=[];for(let e=0;e<a.length;e++){let{at:t,value:n,easing:r}=a[e];s.push(n),c.push(v(0,f,t)),l.push(r||`easeOut`)}c[0]!==0&&(c.unshift(0),s.unshift(s[0]),l.unshift(Da)),c[c.length-1]!==1&&(c.push(1),s.push(null)),o.has(r)||o.set(r,{keyframes:{},transition:{}});let u=o.get(r);u.keyframes[i]=s;let{type:d,...p}=t;u.transition[i]={...p,duration:f,ease:l,times:c,...n}}}),o}function ka(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function Aa(e,t){return t[e]||(t[e]=[]),t[e]}function ja(e){return Array.isArray(e)?e:[e]}function Ma(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}var Na=e=>typeof e==`number`,Pa=e=>e.every(Na);function Fa(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=wi(e)&&!Ti(e)?new _a(t):new aa(t);n.mount(e),Q.set(e,n)}function Ia(e){let t=new sa({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});t.mount(e),Q.set(e,t)}function La(e,t){return Z(e)||typeof e==`number`||typeof e==`string`&&!ya(t)}function Ra(e,t,n,r){let i=[];if(La(e,t))i.push(va(e,ya(t)&&t.default||t,n&&(n.default||n)));else{if(e==null)return i;let a=ba(e,t,r),o=a.length;for(let e=0;e<o;e++){let r=a[e],s=r instanceof Element?Fa:Ia;Q.has(r)||s(r);let c=Q.get(r),l={...n};`delay`in l&&typeof l.delay==`function`&&(l.delay=l.delay(e,o)),i.push(...Lr(c,{...t,transition:l},{}))}}return i}function za(e,t,n){let r=[];return Oa(e.map(e=>{if(Array.isArray(e)&&typeof e[0]==`function`){let t=e[0],n=X(0);return n.on(`change`,t),e.length===1?[n,[0,1]]:e.length===2?[n,[0,1],e[1]]:[n,e[1],e[2]]}return e}),t,n,{spring:W}).forEach(({keyframes:e,transition:t},n)=>{r.push(...Ra(n,e,t))}),r}function Ba(e){return Array.isArray(e)&&e.some(Array.isArray)}function Va(e={}){let{scope:t,reduceMotion:n}=e;function r(e,r,i){let a=[],o;if(Ba(e)){let{onComplete:i,...s}=r||{};typeof i==`function`&&(o=i),a=za(e,n===void 0?s:{reduceMotion:n,...s},t)}else{let{onComplete:s,...c}=i||{};typeof s==`function`&&(o=s),a=Ra(e,r,n===void 0?c:{reduceMotion:n,...c},t)}let s=new ar(a);return o&&s.finished.then(o),t&&(t.animations.push(s),s.finished.then(()=>{c(t.animations,s)})),s}return r}var $=Va(),Ha=class extends o{template(){return`
      <style>
        :host {
          display: inline-block;
        }

        button {
          /* Reset */
          border: none;
          cursor: pointer;
          outline: none;
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-semibold);
          letter-spacing: var(--fm-letter-spacing);
          line-height: 1;
          border-radius: var(--fm-radius-md);
          position: relative;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          white-space: nowrap;
          transition: box-shadow var(--fm-transition-fast),
                      border-color var(--fm-transition-fast);

          /* Default (md) sizing */
          padding: 10px 20px;
          font-size: var(--fm-font-size-sm);
          gap: var(--fm-space-sm);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* ---- Sizes ---- */
        button.sm {
          padding: 6px 14px;
          font-size: var(--fm-font-size-xs);
          border-radius: var(--fm-radius-sm);
        }
        button.lg {
          padding: 14px 28px;
          font-size: var(--fm-font-size-md);
          border-radius: var(--fm-radius-lg);
        }

        /* ---- Variants ---- */
        button.primary {
          background: var(--fm-color-primary);
          color: var(--fm-color-text-light);
          box-shadow: var(--fm-shadow-sm);
        }
        button.primary:hover:not(:disabled) {
          background: var(--fm-color-primary-dark);
        }

        button.secondary {
          background: var(--fm-color-secondary);
          color: var(--fm-color-text-light);
          box-shadow: var(--fm-shadow-sm);
        }
        button.secondary:hover:not(:disabled) {
          background: var(--fm-color-secondary-light);
        }

        button.outline {
          background: transparent;
          color: var(--fm-color-primary);
          border: 1.5px solid var(--fm-color-primary);
          box-shadow: none;
        }
        button.outline:hover:not(:disabled) {
          background: var(--fm-alpha-primary-10);
          border-color: var(--fm-color-primary-dark);
        }

        button.ghost {
          background: transparent;
          color: var(--fm-color-primary);
          border: none;
          box-shadow: none;
        }
        button.ghost:hover:not(:disabled) {
          background: var(--fm-alpha-primary-10);
        }

        /* ---- Disabled ---- */
        button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        /* ---- Focus ring ---- */
        button:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }
      </style>

      <button
        class="${this.attr(`variant`,`primary`)} ${this.attr(`size`,`md`)}"
        ${this.boolAttr(`disabled`)?`disabled`:``}
        part="button"
      >
        <slot></slot>
      </button>
    `}onEnter(){$(this.root.querySelector(`button`),{opacity:[0,1],y:[6,0]},{type:`spring`,stiffness:350,damping:25})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`button`);e&&(fi(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:1.03,y:-1},{type:`spring`,stiffness:450,damping:20}),()=>{$(e,{scale:1,y:0},{type:`spring`,stiffness:450,damping:20})})),Ci(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:.96},{type:`spring`,stiffness:500,damping:22}),()=>{$(e,{scale:1.03},{type:`spring`,stiffness:450,damping:18})})))}attributeChangedCallback(){this.render(),this._bindEvents()}};a(Ha,`observedAttributes`,[`variant`,`size`,`disabled`]),customElements.define(`fm-button`,Ha);var Ua=class extends o{template(){return`
      <style>
        :host {
          display: block;
        }

        .card {
          border-radius: var(--fm-radius-lg);
          padding: var(--fm-space-lg);
          font-family: var(--fm-font-family);
          overflow: hidden;
          will-change: transform, opacity;
          transition: box-shadow var(--fm-transition-normal),
                      border-color var(--fm-transition-normal);
        }

        /* ---- Variants ---- */
        .card.default {
          background: var(--fm-color-surface);
          box-shadow: var(--fm-shadow-sm);
          border: 1px solid var(--fm-color-border);
        }

        .card.outlined {
          background: var(--fm-color-surface);
          border: 1.5px solid var(--fm-color-border-strong);
          box-shadow: none;
        }

        .card.elevated {
          background: var(--fm-color-surface);
          box-shadow: var(--fm-shadow-lg);
          border: none;
        }

        /* ---- Hoverable ---- */
        .card.hoverable {
          cursor: pointer;
        }

        /* ---- Slots ---- */
        .header-wrapper {
          margin-bottom: var(--fm-space-md);
        }
        .header-wrapper:empty {
          display: none;
          margin: 0;
        }

        ::slotted([slot="header"]) {
          font-size: var(--fm-font-size-lg);
          font-weight: var(--fm-font-weight-semibold);
          color: var(--fm-color-text);
          display: block;
          line-height: 1.3;
        }

        .body {
          font-size: var(--fm-font-size-sm);
          font-weight: var(--fm-font-weight-normal);
          color: var(--fm-color-text-secondary);
          line-height: var(--fm-line-height);
        }

        .footer-wrapper {
          margin-top: var(--fm-space-lg);
          padding-top: var(--fm-space-md);
          border-top: 1px solid var(--fm-color-border);
        }
        .footer-wrapper:empty {
          display: none;
          margin: 0;
          padding: 0;
          border: none;
        }
      </style>

      <div class="card ${this.attr(`variant`,`default`)} ${this.boolAttr(`hoverable`)?`hoverable`:``}" part="card">
        <div class="header-wrapper">
          <slot name="header"></slot>
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="footer-wrapper">
          <slot name="footer"></slot>
        </div>
      </div>
    `}onEnter(){$(this.root.querySelector(`.card`),{opacity:[0,1],y:[12,0]},{type:`spring`,stiffness:280,damping:24})}connectedCallback(){super.connectedCallback(),this._bindHoverEvents()}_bindHoverEvents(){if(!this.boolAttr(`hoverable`))return;let e=this.root.querySelector(`.card`);e&&fi(e,e=>($(e,{y:-3,scale:1.01},{type:`spring`,stiffness:400,damping:22}),()=>{$(e,{y:0,scale:1},{type:`spring`,stiffness:400,damping:22})}))}attributeChangedCallback(){this.render(),this._bindHoverEvents()}};a(Ua,`observedAttributes`,[`variant`,`hoverable`]),customElements.define(`fm-card`,Ua);var Wa=class extends o{template(){return`
      <style>
        :host {
          display: inline-flex;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-medium);
          white-space: nowrap;
          border-radius: var(--fm-radius-full);
          line-height: 1;
          user-select: none;
          will-change: transform;
        }

        /* ---- Sizes ---- */
        .badge.sm {
          padding: 2px 8px;
          font-size: 11px;
        }
        .badge.md {
          padding: 4px 12px;
          font-size: var(--fm-font-size-xs);
        }

        /* ---- Variants ---- */
        .badge.primary {
          background: var(--fm-color-primary-100);
          color: var(--fm-color-primary-dark);
        }
        .badge.secondary {
          background: var(--fm-alpha-secondary-10);
          color: var(--fm-color-secondary);
        }
        .badge.success {
          background: rgba(5, 150, 105, 0.12);
          color: #047857;
        }
        .badge.warning {
          background: rgba(217, 119, 6, 0.12);
          color: #92400E;
        }
        .badge.error {
          background: rgba(220, 38, 38, 0.10);
          color: #B91C1C;
        }
        .badge.neutral {
          background: var(--fm-color-surface-muted);
          color: var(--fm-color-text-secondary);
        }

        /* ---- Dot indicator ---- */
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .primary .dot { background: var(--fm-color-primary); }
        .secondary .dot { background: var(--fm-color-secondary); }
        .success .dot { background: var(--fm-color-success); }
        .warning .dot { background: var(--fm-color-warning); }
        .error .dot { background: var(--fm-color-error); }
        .neutral .dot { background: var(--fm-color-text-secondary); }
      </style>

      <span class="badge ${this.attr(`variant`,`primary`)} ${this.attr(`size`,`md`)}" part="badge">
        ${this.boolAttr(`dot`)?`<span class="dot"></span>`:``}
        <slot></slot>
      </span>
    `}onEnter(){let e=this.root.querySelector(`.badge`),t=this.attr(`animate`,`none`);$(e,{scale:[0,1],opacity:[0,1]},{type:`spring`,stiffness:400,damping:22}),t===`pulse`&&this._startPulse(e)}_startPulse(e){let t=()=>{this._pulseAnim=$(e,{scale:[1,1.06,1]},{duration:1.8,ease:`ease-in-out`}),this._pulseAnim.finished.then(()=>{this.isConnected&&t()})};t()}disconnectedCallback(){this._pulseAnim&&this._pulseAnim.cancel()}attributeChangedCallback(){this.render()}};a(Wa,`observedAttributes`,[`variant`,`size`,`dot`,`animate`]),customElements.define(`fm-badge`,Wa);var Ga=class extends o{template(){let e=parseInt(this.attr(`active`,`0`),10);return`
      <style>
        :host { display: block; }

        .tab-header {
          display: flex;
          gap: var(--fm-space-xs);
          border-bottom: 2px solid var(--fm-color-border);
          margin-bottom: var(--fm-space-md);
          position: relative;
        }

        .tab-header.pills {
          border-bottom: none;
          background: var(--fm-color-surface-muted);
          border-radius: var(--fm-radius-full);
          padding: var(--fm-space-xs);
        }

        .tab-btn {
          border: none;
          background: transparent;
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          font-weight: var(--fm-font-weight-medium);
          color: var(--fm-color-text-secondary);
          padding: var(--fm-space-sm) var(--fm-space-md);
          cursor: pointer;
          position: relative;
          transition: color var(--fm-transition-fast), background var(--fm-transition-fast);
          border-radius: 0;
          outline: none;
        }

        .pills .tab-btn {
          border-radius: var(--fm-radius-full);
        }

        .tab-btn:hover { 
          color: var(--fm-color-text); 
        }

        .tab-btn.active {
          color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        .pills .tab-btn.active {
          background: var(--fm-color-surface);
          box-shadow: var(--fm-shadow-sm);
          color: var(--fm-color-primary);
        }

        .tab-btn:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* Underline indicator for default variant */
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--fm-color-primary);
          border-radius: var(--fm-radius-full);
        }

        .pills .tab-btn.active::after { display: none; }

        .tab-panel {
          will-change: opacity;
        }
      </style>

      <div class="tab-header ${this.attr(`variant`,`default`)}" role="tablist" part="header">
        ${Array.from(this.children).filter(e=>e.tagName===`FM-TAB`).map((t,n)=>`
        <button
          class="tab-btn ${n===e?`active`:``}"
          data-index="${n}"
          role="tab"
          aria-selected="${n===e}"
        >
          ${t.getAttribute(`label`)||`Tab ${n+1}`}
        </button>`).join(``)}
      </div>
      <div class="tab-panel" role="tabpanel" part="panel">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._updatePanels(),this._bindEvents(),requestAnimationFrame(()=>{this._updatePanels()})}onEnter(){$(this.root.querySelector(`.tab-header`),{opacity:[0,1],y:[-8,0]},{type:`spring`,stiffness:300,damping:20})}_updatePanels(){let e=parseInt(this.attr(`active`,`0`),10);Array.from(this.children).filter(e=>e.tagName===`FM-TAB`).forEach((t,n)=>{t.style.display=n===e?`block`:`none`})}_bindEvents(){this.root.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index||`0`,10);this.setAttribute(`active`,String(t))})})}attributeChangedCallback(e){if(this.render(),this._updatePanels(),this._bindEvents(),e===`active`){let e=parseInt(this.attr(`active`,`0`),10),t=Array.from(this.children).filter(e=>e.tagName===`FM-TAB`)[e]?.getAttribute(`label`)||``;$(this.root.querySelector(`.tab-panel`),{opacity:[0,1]},{duration:.25}),this.dispatchEvent(new CustomEvent(`fm-tab-change`,{bubbles:!0,detail:{index:e,label:t}}))}}};a(Ga,`observedAttributes`,[`active`,`variant`]);var Ka=class extends HTMLElement{connectedCallback(){requestAnimationFrame(()=>{this.style.display||(this.style.display=`none`)})}};customElements.define(`fm-tabs`,Ga),customElements.define(`fm-tab`,Ka),e.FmBadge=Wa,e.FmButton=Ha,e.FmCard=Ua,e.FmElement=o,e.FmTab=Ka,e.FmTabs=Ga,e.themeStyles=t});