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
`;function n(e){"@babel/helpers - typeof";return n=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},n(e)}function r(e,t){if(n(e)!=`object`||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||`default`);if(n(i)!=`object`)return i;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function i(e){var t=r(e,`string`);return n(t)==`symbol`?t:t+``}function a(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=class extends HTMLElement{constructor(){super(),a(this,`root`,void 0),a(this,`_entered`,!1),this.root=this.attachShadow({mode:`open`})}connectedCallback(){this.render(),this._entered||(this._entered=!0,this.onEnter())}disconnectedCallback(){}template(){return``}render(){this.root.innerHTML=`<style>${t}</style>${this.template()}`}onEnter(){}attr(e,t=``){return this.getAttribute(e)??t}boolAttr(e){return this.hasAttribute(e)}},s=class extends o{template(){let e=this.attr(`variant`,`primary`),t=this.boolAttr(`disabled`),n=this.boolAttr(`arrow`)?`<svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`:``;return`
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
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

          /* Default sizing */
          padding: 10px 20px;
          font-size: var(--fm-font-size-sm);
          gap: var(--fm-space-sm);
          display: inline-flex;
          align-items: center;
          justify-content: center;
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

        /* Text variant: text with optional arrow */
        button.text {
          background: transparent;
          color: var(--fm-color-primary);
          border: none;
          box-shadow: none;
          padding: 0;
          font-weight: var(--fm-font-weight-medium);
        }
        button.text:hover:not(:disabled) {
          color: var(--fm-color-primary-dark);
        }
        button.text .arrow-icon {
          transition: transform 0.2s ease;
        }
        button.text:hover:not(:disabled) .arrow-icon {
          transform: translateX(2px);
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
        button.text:focus-visible {
          outline-offset: 4px;
        }
      </style>

      <button
        class="${e}"
        ${t?`disabled`:``}
        part="button"
      >
        <slot></slot>
        ${n}
      </button>
    `}attributeChangedCallback(){this.render()}};a(s,`observedAttributes`,[`variant`,`disabled`,`arrow`]),customElements.define(`fm-button`,s);function c(e,t){e.indexOf(t)===-1&&e.push(t)}function l(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var u=(e,t,n)=>n>t?t:n<e?e:n,d={},f=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function p(e){return typeof e==`object`&&!!e}var m=e=>/^0[^.\s]+$/u.test(e);function h(e){let t;return()=>(t===void 0&&(t=e()),t)}var g=e=>e,_=(e,t)=>n=>t(e(n)),v=(...e)=>e.reduce(_),y=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},b=class{constructor(){this.subscriptions=[]}add(e){return c(this.subscriptions,e),()=>l(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},x=e=>e*1e3,S=e=>e/1e3;function C(e,t){return t?1e3/t*e:0}var w=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},T=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,E=1e-7,D=12;function ee(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=T(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>E&&++s<D);return o}function O(e,t,n,r){if(e===t&&n===r)return g;let i=t=>ee(t,0,1,e,n);return e=>e===0||e===1?e:T(i(e),t,r)}var te=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ne=e=>t=>1-e(1-t),re=O(.33,1.53,.69,.99),ie=ne(re),ae=te(ie),oe=e=>e>=1?1:(e*=2)<1?.5*ie(e):.5*(2-2**(-10*(e-1))),se=e=>1-Math.sin(Math.acos(e)),ce=ne(se),le=te(se),ue=O(.42,0,1,1),de=O(0,0,.58,1),fe=O(.42,0,.58,1),pe=e=>Array.isArray(e)&&typeof e[0]!=`number`;function me(e,t){return pe(e)?e[w(0,e.length,t)]:e}var he=e=>Array.isArray(e)&&typeof e[0]==`number`,ge={linear:g,easeIn:ue,easeInOut:fe,easeOut:de,circIn:se,circInOut:le,circOut:ce,backIn:ie,backInOut:ae,backOut:re,anticipate:oe},_e=e=>typeof e==`string`,ve=e=>{if(he(e)){e.length;let[t,n,r,i]=e;return O(t,n,r,i)}else if(_e(e))return ge[e],`${e}`,ge[e];return e},ye=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],be={value:null,addProjectionMetrics:null};function xe(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&be.value&&be.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Se=40;function Ce(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=ye.reduce((e,n)=>(e[n]=xe(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:f,preRender:p,render:m,postRender:h}=o,g=()=>{let a=d.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Se),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),f.process(i),p.process(i),m.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},_=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:ye.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||_(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<ye.length;t++)o[ye[t]].cancel(e)},state:i,steps:o}}var{schedule:k,cancel:we,state:Te,steps:Ee}=Ce(typeof requestAnimationFrame<`u`?requestAnimationFrame:g,!0),De;function Oe(){De=void 0}var A={now:()=>(De===void 0&&A.set(Te.isProcessing||d.useManualTiming?Te.timestamp:performance.now()),De),set:e=>{De=e,queueMicrotask(Oe)}},ke={layout:0,mainThread:0,waapi:0},Ae=e=>t=>typeof t==`string`&&t.startsWith(e),je=Ae(`--`),Me=Ae(`var(--`),Ne=e=>Me(e)?Pe.test(e.split(`/*`)[0].trim()):!1,Pe=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Fe(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var j={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Ie={...j,transform:e=>u(0,1,e)},Le={...j,default:1},M=e=>Math.round(e*1e5)/1e5,Re=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ze(e){return e==null}var Be=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ve=(e,t)=>n=>!!(typeof n==`string`&&Be.test(n)&&n.startsWith(e)||t&&!ze(n)&&Object.prototype.hasOwnProperty.call(n,t)),He=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Re);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Ue=e=>u(0,255,e),We={...j,transform:e=>Math.round(Ue(e))},N={test:Ve(`rgb`,`red`),parse:He(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+We.transform(e)+`, `+We.transform(t)+`, `+We.transform(n)+`, `+M(Ie.transform(r))+`)`};function Ge(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Ke={test:Ve(`#`),parse:Ge,transform:N.transform},P=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),F=P(`deg`),I=P(`%`),L=P(`px`),qe=P(`vh`),Je=P(`vw`),Ye={...I,parse:e=>I.parse(e)/100,transform:e=>I.transform(e*100)},R={test:Ve(`hsl`,`hue`),parse:He(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+I.transform(M(t))+`, `+I.transform(M(n))+`, `+M(Ie.transform(r))+`)`},z={test:e=>N.test(e)||Ke.test(e)||R.test(e),parse:e=>N.test(e)?N.parse(e):R.test(e)?R.parse(e):Ke.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?N.transform(e):R.transform(e),getAnimatableNone:e=>{let t=z.parse(e);return t.alpha=0,z.transform(t)}},Xe=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ze(e){return isNaN(e)&&typeof e==`string`&&(e.match(Re)?.length||0)+(e.match(Xe)?.length||0)>0}var Qe=`number`,$e=`color`,et=`var`,tt=`var(`,nt="${}",rt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function B(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(rt,e=>(z.test(e)?(r.color.push(a),i.push($e),n.push(z.parse(e))):e.startsWith(tt)?(r.var.push(a),i.push(et),n.push(e)):(r.number.push(a),i.push(Qe),n.push(parseFloat(e))),++a,nt)).split(nt),indexes:r,types:i}}function it(e){return B(e).values}function at({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===Qe?i+=M(r[a]):e===$e?i+=z.transform(r[a]):i+=r[a]}return i}}function ot(e){return at(B(e))}var st=e=>typeof e==`number`?0:z.test(e)?z.getAnimatableNone(e):e,ct=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:st(e);function lt(e){let t=B(e);return at(t)(t.values.map((e,n)=>ct(e,t.split[n])))}var V={test:Ze,parse:it,createTransformer:ot,getAnimatableNone:lt};function ut(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function dt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=ut(s,r,e+1/3),a=ut(s,r,e),o=ut(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function ft(e,t){return n=>n>0?t:e}var H=(e,t,n)=>e+(t-e)*n,pt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},mt=[Ke,N,R],ht=e=>mt.find(t=>t.test(e));function gt(e){let t=ht(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===R&&(n=dt(n)),n}var _t=(e,t)=>{let n=gt(e),r=gt(t);if(!n||!r)return ft(e,t);let i={...n};return e=>(i.red=pt(n.red,r.red,e),i.green=pt(n.green,r.green,e),i.blue=pt(n.blue,r.blue,e),i.alpha=H(n.alpha,r.alpha,e),N.transform(i))},vt=new Set([`none`,`hidden`]);function yt(e,t){return vt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function bt(e,t){return n=>H(e,t,n)}function xt(e){return typeof e==`number`?bt:typeof e==`string`?Ne(e)?ft:z.test(e)?_t:Tt:Array.isArray(e)?St:typeof e==`object`?z.test(e)?_t:Ct:ft}function St(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>xt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ct(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=xt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function wt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Tt=(e,t)=>{let n=V.createTransformer(t),r=B(e),i=B(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?vt.has(e)&&!i.values.length||vt.has(t)&&!r.values.length?yt(e,t):v(St(wt(r,i),i.values),n):(`${e}${t}`,ft(e,t))};function Et(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?H(e,t,n):xt(e)(e,t)}var Dt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>k.update(t,e),stop:()=>we(t),now:()=>Te.isProcessing?Te.timestamp:A.now()}},Ot=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},kt=2e4;function At(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function jt(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(At(r),kt);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:S(i)}}var U={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Mt(e,t){return e*Math.sqrt(1-t*t)}var Nt=12;function Pt(e,t,n){let r=n;for(let n=1;n<Nt;n++)r-=e(r)/t(r);return r}var Ft=.001;function It({duration:e=U.duration,bounce:t=U.bounce,velocity:n=U.velocity,mass:r=U.mass}){let i,a;U.maxDuration;let o=1-t;o=u(U.minDamping,U.maxDamping,o),e=u(U.minDuration,U.maxDuration,S(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Mt(t,o),c=Math.exp(-i);return Ft-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Mt(t**2,o);return(-i(t)+Ft>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Ft+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Pt(i,a,s);if(e=x(e),isNaN(c))return{stiffness:U.stiffness,damping:U.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Lt=[`duration`,`bounce`],Rt=[`stiffness`,`damping`,`mass`];function zt(e,t){return t.some(t=>e[t]!==void 0)}function Bt(e){let t={velocity:U.velocity,stiffness:U.stiffness,damping:U.damping,mass:U.mass,isResolvedFromDuration:!1,...e};if(!zt(e,Rt)&&zt(e,Lt))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*u(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:U.mass,stiffness:i,damping:a}}else{let n=It({...e,velocity:0});t={...t,...n,mass:U.mass},t.isResolvedFromDuration=!0}return t}function Vt(e=U.visualDuration,t=U.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Bt({...n,velocity:-S(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=S(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?U.restSpeed.granular:U.restSpeed.default,i||=v?U.restDelta.granular:U.restDelta.default;let y,b,C,w,T,E;if(h<1)C=Mt(_,h),w=(m+h*_*g)/C,y=e=>o-Math.exp(-h*_*e)*(w*Math.sin(C*e)+g*Math.cos(C*e)),T=h*_*w+g*C,E=h*_*g-w*C,b=e=>Math.exp(-h*_*e)*(T*Math.sin(C*e)+E*Math.cos(C*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let D={calculatedDuration:p&&d||null,velocity:e=>x(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(C*e),a=Math.cos(C*e),c=o-t*(w*n+g*a),l=x(t*(T*n+E*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=x(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(At(D),kt),t=Ot(t=>D.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return D}Vt.applyToOptions=e=>{let t=jt(e,100,Vt);return e.ease=t.ease,e.duration=x(t.duration),e.type=`keyframes`,e};var Ht=5;function Ut(e,t,n){let r=Math.max(t-Ht,0);return C(n-e(r),t-r)}function Wt({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Vt({keyframes:[f.value,m(f.value)],velocity:Ut(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Gt(e,t,n){let r=[],i=n||d.mix||Et,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=v(Array.isArray(t)?t[n]||g:t,a)),r.push(a)}return r}function Kt(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Gt(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=y(e[r],e[r+1],n);return s[r](i)};return n?t=>l(u(e[0],e[a-1],t)):l}function qt(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=y(0,t,r);e.push(H(n,1,i))}}function Jt(e){let t=[0];return qt(t,e.length-1),t}function Yt(e,t){return e.map(e=>e*t)}function Xt(e,t){return e.map(()=>t||fe).splice(0,e.length-1)}function W({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=pe(r)?r.map(ve):ve(r),a={done:!1,value:t[0]},o=Kt(Yt(n&&n.length===t.length?n:Jt(t),e),t,{ease:Array.isArray(i)?i:Xt(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Zt=e=>e!==null;function Qt(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Zt),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var $t={decay:Wt,inertia:Wt,tween:W,keyframes:W,spring:Vt};function en(e){typeof e.type==`string`&&(e.type=$t[e.type])}var tn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},nn=e=>e/100,rn=class extends tn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==A.now()&&this.tick(A.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},ke.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;en(e);let{type:t=W,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||W;s!==W&&typeof o[0]!=`number`&&(this.mixKeyframes=v(nn,Et(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=At(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:d,repeatType:f,repeatDelay:p,type:m,onUpdate:h,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let _=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?_<0:_>r;this.currentTime=Math.max(_,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,b=n;if(d){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,d+1),t%2&&(f===`reverse`?(n=1-n,p&&(n-=p/o)):f===`mirror`&&(b=a)),y=u(0,1,n)*o}let x;v?(this.delayState.value=l[0],x=this.delayState):x=b.next(y),i&&!v&&(x.value=i(x.value));let{done:S}=x;!v&&s!==null&&(S=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let C=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&S);return C&&m!==Wt&&(x.value=Qt(l,this.options,g,this.speed)),h&&h(x.value),C&&this.finish(),x}then(e,t){return this.finished.then(e,t)}get duration(){return S(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+S(e)}get time(){return S(this.currentTime)}set time(e){e=x(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Ut(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(A.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=S(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Dt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(A.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,ke.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function an(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var G=e=>e*180/Math.PI,on=e=>cn(G(Math.atan2(e[1],e[0]))),sn={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:on,rotateZ:on,skewX:e=>G(Math.atan(e[1])),skewY:e=>G(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},cn=e=>(e%=360,e<0&&(e+=360),e),ln=on,un=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),dn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),fn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:un,scaleY:dn,scale:e=>(un(e)+dn(e))/2,rotateX:e=>cn(G(Math.atan2(e[6],e[5]))),rotateY:e=>cn(G(Math.atan2(-e[2],e[0]))),rotateZ:ln,rotate:ln,skewX:e=>G(Math.atan(e[4])),skewY:e=>G(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function pn(e){return+!!e.includes(`scale`)}function mn(e,t){if(!e||e===`none`)return pn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=fn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=sn,i=t}if(!i)return pn(t);let a=r[t],o=i[1].split(`,`).map(gn);return typeof a==`function`?a(o):o[a]}var hn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return mn(n,t)};function gn(e){return parseFloat(e.trim())}var K=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],q=new Set(K),_n=e=>e===j||e===L,vn=new Set([`x`,`y`,`z`]),yn=K.filter(e=>!vn.has(e));function bn(e){let t=[];return yn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var J={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>mn(t,`x`),y:(e,{transform:t})=>mn(t,`y`)};J.translateX=J.x,J.translateY=J.y;var Y=new Set,xn=!1,Sn=!1,Cn=!1;function wn(){if(Sn){let e=Array.from(Y).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=bn(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Sn=!1,xn=!1,Y.forEach(e=>e.complete(Cn)),Y.clear()}function Tn(){Y.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Sn=!0)})}function En(){Cn=!0,Tn(),wn(),Cn=!1}var Dn=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Y.add(this),xn||(xn=!0,k.read(Tn),k.resolveKeyframes(wn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}an(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Y.delete(this)}cancel(){this.state===`scheduled`&&(Y.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},On=e=>e.startsWith(`--`);function kn(e,t,n){On(t)?e.style.setProperty(t,n):e.style[t]=n}var An={};function jn(e,t){let n=h(e);return()=>An[t]??n()}var Mn=jn(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Nn=jn(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),X=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Pn={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:X([0,.65,.55,1]),circOut:X([.55,0,1,.45]),backIn:X([.31,.01,.66,-.59]),backOut:X([.33,1.53,.69,.99])};function Fn(e,t){if(e)return typeof e==`function`?Nn()?Ot(e,t):`ease-out`:he(e)?X(e):Array.isArray(e)?e.map(e=>Fn(e,t)||Pn.easeOut):Pn[e]}function In(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Fn(s,i);Array.isArray(d)&&(u.easing=d),be.value&&ke.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return be.value&&p.finished.finally(()=>{ke.waapi--}),p}function Ln(e){return typeof e==`function`&&`applyToOptions`in e}function Rn({type:e,...t}){return Ln(e)&&Nn()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var zn=class extends tn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Rn(e);this.animation=In(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Qt(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),kn(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return S(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+S(e)}get time(){return S(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=x(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Mn()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),g):r(this)}},Bn={anticipate:oe,backInOut:ae,circInOut:le};function Vn(e){return e in Bn}function Hn(e){typeof e.ease==`string`&&Vn(e.ease)&&(e.ease=Bn[e.ease])}var Un=10,Wn=class extends zn{constructor(e){Hn(e),en(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new rn({...a,autoplay:!1}),s=Math.max(Un,A.now()-this.startTime),c=u(0,Un,s-Un),l=o.sample(s).value,{name:d}=this.options;i&&d&&kn(i,d,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Gn=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(V.test(e)||e===`0`)&&!e.startsWith(`url(`));function Kn(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function qn(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Gn(i,t),s=Gn(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Kn(e)||(n===`spring`||Ln(n))&&r}function Jn(e){e.duration=0,e.type=`keyframes`}var Yn=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Xn=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Zn(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Xn.test(e[t]))return!0;return!1}var Qn=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),$n=h(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function er(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return $n()&&n&&(Yn.has(n)||Qn.has(n)&&Zn(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var tr=40,nr=class extends tn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=A.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Dn;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=A.now();let u=!0;qn(e,i,a,o)||(u=!1,(d.instantAnimations||!s)&&l?.(Qt(e,n,t)),e[0]=e[e.length-1],Jn(n),n.repeat=0);let f={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>tr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},p=u&&!c&&er(f),m=f.motionValue?.owner?.current,h;if(p)try{h=new Wn({...f,element:m})}catch{h=new rn(f)}else h=new rn(f);h.finished.then(()=>{this.notifyFinished()}).catch(g),this.pendingTimeline&&=(this.stopTimeline=h.attachTimeline(this.pendingTimeline),void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),En()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}},rr=class{constructor(e){this.stop=()=>this.runAll(`stop`),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>t.attachTimeline(e));return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll(`time`)}set time(e){this.setAll(`time`,e)}get speed(){return this.getAll(`speed`)}set speed(e){this.setAll(`speed`,e)}get state(){return this.getAll(`state`)}get startTime(){return this.getAll(`startTime`)}get duration(){return ir(this.animations,`duration`)}get iterationDuration(){return ir(this.animations,`iterationDuration`)}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll(`play`)}pause(){this.runAll(`pause`)}cancel(){this.runAll(`cancel`)}complete(){this.runAll(`complete`)}};function ir(e,t){let n=0;for(let r=0;r<e.length;r++){let i=e[r][t];i!==null&&i>n&&(n=i)}return n}var ar=class extends rr{then(e,t){return this.finished.finally(e).then(()=>{})}},or=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sr(e){let t=or.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function cr(e,t,n=1){`${e}`;let[r,i]=sr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return f(e)?parseFloat(e):e}return Ne(i)?cr(i,t,n+1):i}var lr={type:`spring`,stiffness:500,damping:25,restSpeed:10},ur=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),dr={type:`keyframes`,duration:.8},fr={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},pr=(e,{keyframes:t})=>t.length>2?dr:q.has(e)?e.startsWith(`scale`)?ur(t[1]):lr:fr;function mr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function hr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:mr(n,e)}var gr=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function _r(e){for(let t in e)if(!gr.has(t))return!0;return!1}var vr=(e,t,n,r={},i,a)=>o=>{let s=hr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=x(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};_r(s)||Object.assign(u,pr(e,u)),u.duration&&=x(u.duration),u.repeatDelay&&=x(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Jn(u),u.delay===0&&(f=!0)),(d.instantAnimations||d.skipAnimations||i?.shouldSkipAnimations)&&(f=!0,Jn(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,f&&!a&&t.get()!==void 0){let e=Qt(u.keyframes,s);if(e!==void 0){k.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new rn(u):new nr(u)};function yr(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function br(e,t,n,r){if(typeof t==`function`){let[i,a]=yr(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=yr(r);t=t(n===void 0?e.custom:n,i,a)}return t}function xr(e,t,n){let r=e.getProps();return br(r,t,n===void 0?r.custom:n,e)}var Sr=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...K]),Cr=30,wr=e=>!isNaN(parseFloat(e)),Tr={current:void 0},Er=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=A.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=A.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=wr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new b);let n=this.events[e].add(t);return e===`change`?()=>{n(),k.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Tr.current&&Tr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=A.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Cr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Cr);return C(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Z(e,t){return new Er(e,t)}var Dr=e=>Array.isArray(e);function Or(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Z(n))}function kr(e){return Dr(e)?e[e.length-1]||0:e}function Ar(e,t){let{transitionEnd:n={},transition:r={},...i}=xr(e,t)||{};i={...i,...n};for(let t in i)Or(e,t,kr(i[t]))}var Q=e=>!!(e&&e.getVelocity);function jr(e){return!!(Q(e)&&e.add)}function Mr(e,t){let n=e.getValue(`willChange`);if(jr(n))return n.add(t);if(!n&&d.WillChange){let n=new d.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Nr(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Pr=`data-`+Nr(`framerAppearId`);function Fr(e){return e.props[Pr]}function Ir({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Lr(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?mr(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Ir(d,t))continue;let o={delay:n,...hr(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){k.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=Fr(e);if(n){let e=window.MotionHandoffAnimation(n,t,k);e!==null&&(o.startTime=e,f=!0)}}Mr(e,t);let p=l??e.shouldReduceMotion;r.start(vr(t,r,i,p&&Sr.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>k.update(()=>{o&&Ar(e,o)});u.length?Promise.all(u).then(t):t()}return u}var Rr={test:e=>e===`auto`,parse:e=>e},zr=e=>t=>t.test(e),Br=[j,L,I,F,Je,qe,Rr],Vr=e=>Br.find(zr(e));function Hr(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||m(e)}var Ur=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Wr(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Re)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Ur.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Gr=/\b([a-z-]*)\(.*?\)/gu,Kr={...V,getAnimatableNone:e=>{let t=e.match(Gr);return t?t.map(Wr).join(` `):e}},qr={...V,getAnimatableNone:e=>{let t=V.parse(e);return V.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Jr={...j,transform:Math.round},Yr={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,inset:L,insetBlock:L,insetBlockStart:L,insetBlockEnd:L,insetInline:L,insetInlineStart:L,insetInlineEnd:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,paddingBlock:L,paddingBlockStart:L,paddingBlockEnd:L,paddingInline:L,paddingInlineStart:L,paddingInlineEnd:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,marginBlock:L,marginBlockStart:L,marginBlockEnd:L,marginInline:L,marginInlineStart:L,marginInlineEnd:L,fontSize:L,backgroundPositionX:L,backgroundPositionY:L,rotate:F,rotateX:F,rotateY:F,rotateZ:F,scale:Le,scaleX:Le,scaleY:Le,scaleZ:Le,skew:F,skewX:F,skewY:F,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Ie,originX:Ye,originY:Ye,originZ:L,zIndex:Jr,fillOpacity:Ie,strokeOpacity:Ie,numOctaves:Jr},Xr={...Yr,color:z,backgroundColor:z,outlineColor:z,fill:z,stroke:z,borderColor:z,borderTopColor:z,borderRightColor:z,borderBottomColor:z,borderLeftColor:z,filter:Kr,WebkitFilter:Kr,mask:qr,WebkitMask:qr},Zr=e=>Xr[e],Qr=new Set([Kr,qr]);function $r(e,t){let n=Zr(e);return Qr.has(n)||(n=V),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var ei=new Set([`auto`,`none`,`0`]);function ti(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!ei.has(t)&&B(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=$r(n,i)}var ni=class extends Dn{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ne(r))){let i=cr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Sr.has(n)||e.length!==2)return;let[r,i]=e,a=Vr(r),o=Vr(i);if(Fe(r)!==Fe(i)&&J[n]){this.needsMeasurement=!0;return}if(a!==o)if(_n(a)&&_n(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else J[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Hr(e[t]))&&n.push(t);n.length&&ti(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=J[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=J[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ri(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ii=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ai(e){return p(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:oi,cancel:si}=Ce(queueMicrotask,!1),ci={x:!1,y:!1};function li(){return ci.x||ci.y}function ui(e,t){let n=ri(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function di(e){return!(e.pointerType===`touch`||li())}function fi(e,t,n={}){let[r,i,a]=ui(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!di(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var pi=(e,t)=>t?e===t?!0:pi(e,t.parentElement):!1,mi=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,hi=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function gi(e){return hi.has(e.tagName)||e.isContentEditable===!0}var _i=new WeakSet;function vi(e){return t=>{t.key===`Enter`&&e(t)}}function yi(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var bi=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=vi(()=>{if(_i.has(n))return;yi(n,`down`);let e=vi(()=>{yi(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>yi(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function xi(e){return mi(e)&&!li()}var Si=new WeakSet;function Ci(e,t,n={}){let[r,i,a]=ui(e,n),o=e=>{let r=e.currentTarget;if(!xi(e)||Si.has(e))return;_i.add(r),n.stopPropagation&&Si.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),_i.has(r)&&_i.delete(r),xi(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||pi(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ai(e)&&(e.addEventListener(`focus`,e=>bi(e,i)),!gi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function wi(e){return p(e)&&`ownerSVGElement`in e}function Ti(e){return wi(e)&&e.tagName===`svg`}var Ei=[...Br,z,V],Di=e=>Ei.find(zr(e)),Oi=()=>({min:0,max:0}),ki=()=>({x:Oi(),y:Oi()}),Ai=new WeakMap;function ji(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Mi(e){return typeof e==`string`||Array.isArray(e)}var Ni=[`initial`,...[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`]];function Pi(e){return ji(e.animate)||Ni.some(t=>Mi(e[t]))}function Fi(e){return!!(Pi(e)||e.variants)}function Ii(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Q(i))e.addValue(r,i);else if(Q(a))e.addValue(r,Z(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Z(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Li={current:null},Ri={current:!1},zi=typeof window<`u`;function Bi(){if(Ri.current=!0,zi)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Li.current=e.matches;e.addEventListener(`change`,t),t()}else Li.current=!1}var Vi=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Hi={},Ui=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Dn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=A.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,k.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Pi(t),this.isVariantNode=Fi(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Q(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Ai.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Ri.current||Bi(),this.shouldReduceMotion=Li.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),we(this.notifyUpdate),we(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Yn.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new zn({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:x(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=q.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&k.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Hi){let t=Hi[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ki()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Vi.length;t++){let n=Vi[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Ii(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Z(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(f(n)||m(n))?n=parseFloat(n):!Di(n)&&V.test(t)&&(n=$r(e,t)),this.setBaseTarget(e,Q(n)?n.get():n)),Q(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=br(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Q(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new b),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){oi.render(this.render)}},Wi=class extends Ui{constructor(){super(...arguments),this.KeyframeResolver=ni}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Q(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}};function Gi({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ki(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function qi(e,t){return Gi(Ki(e.getBoundingClientRect(),t))}var Ji={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Yi=K.length;function Xi(e,t,n){let r=``,i=!0;for(let a=0;a<Yi;a++){let o=K[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ii(s,Yr[o]);if(!c){i=!1;let t=Ji[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Zi(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(q.has(e)){o=!0;continue}else if(je(e)){i[e]=n;continue}else{let t=ii(n,Yr[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Xi(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Qi(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function $i(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var ea={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(L.test(e))e=parseFloat(e);else return e;return`${$i(e,t.target.x)}% ${$i(e,t.target.y)}%`}},ta={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=V.parse(e);if(i.length>5)return r;let a=V.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=H(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},na={borderRadius:{...ea,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:ea,borderTopRightRadius:ea,borderBottomLeftRadius:ea,borderBottomRightRadius:ea,boxShadow:ta};function ra(e,{layout:t,layoutId:n}){return q.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!na[e]||e===`opacity`)}function ia(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Q(r[t])||i&&Q(i[t])||ra(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function aa(e){return window.getComputedStyle(e)}var oa=class extends Wi{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Qi}readValueFromInstance(e,t){if(q.has(t))return this.projection?.isProjecting?pn(t):hn(e,t);{let n=aa(e),r=(je(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return qi(e,t)}build(e,t,n){Zi(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ia(e,t,n)}};function sa(e,t){return e in t}var ca=class extends Ui{constructor(){super(...arguments),this.type=`object`}readValueFromInstance(e,t){if(sa(t,e)){let n=e[t];if(typeof n==`string`||typeof n==`number`)return n}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return ki()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}},la={offset:`stroke-dashoffset`,array:`stroke-dasharray`},ua={offset:`strokeDashoffset`,array:`strokeDasharray`};function da(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?la:ua;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var fa=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function pa(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Zi(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of fa)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&da(d,i,a,o,!1)}var ma=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ha=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ga(e,t,n,r){Qi(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(ma.has(n)?n:Nr(n),t.attrs[n])}function _a(e,t,n){let r=ia(e,t,n);for(let n in e)if(Q(e[n])||Q(t[n])){let t=K.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var va=class extends Wi{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=ki}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(q.has(t)){let e=Zr(t);return e&&e.default||0}return t=ma.has(t)?t:Nr(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return _a(e,t,n)}build(e,t,n){pa(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ga(e,t,n,r)}mount(e){this.isSVGTag=ha(e.tagName),super.mount(e)}};function ya(e,t,n){let r=Q(e)?e:Z(e);return r.start(vr(``,r,t,n)),r.animation}function ba(e){return typeof e==`object`&&!Array.isArray(e)}function xa(e,t,n,r){return e==null?[]:typeof e==`string`&&ba(t)?ri(e,n,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(e=>e!=null):[e]}function Sa(e,t,n){return e*(t+1)}function Ca(e,t,n,r){return typeof t==`number`?t:t.startsWith(`-`)||t.startsWith(`+`)?Math.max(0,e+parseFloat(t)):t===`<`?n:t.startsWith(`<`)?Math.max(0,n+parseFloat(t.slice(1))):r.get(t)??e}function wa(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.at>t&&i.at<n&&(l(e,i),r--)}}function Ta(e,t,n,r,i,a){wa(e,i,a);for(let o=0;o<t.length;o++)e.push({value:t[o],at:H(i,a,r[o]),easing:me(n,o)})}function Ea(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]/(t+1)}function Da(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}var Oa=`easeInOut`;function ka(e,{defaultTransition:t={},...n}={},r,i){let a=t.duration||.3,o=new Map,s=new Map,c={},l=new Map,u=0,d=0,f=0;for(let n=0;n<e.length;n++){let o=e[n];if(typeof o==`string`){l.set(o,d);continue}else if(!Array.isArray(o)){l.set(o.name,Ca(d,o.at,u,l));continue}let[p,m,h={}]=o;h.at!==void 0&&(d=Ca(d,h.at,u,l));let g=0,_=(e,n,r,o=0,s=0)=>{let c=Ma(e),{delay:l=0,times:u=Jt(c),type:p=t.type||`keyframes`,repeat:m,repeatType:h,repeatDelay:_=0,...v}=n,{ease:y=t.ease||`easeOut`,duration:b}=n,S=typeof l==`function`?l(o,s):l,C=c.length,w=Ln(p)?p:i?.[p||`keyframes`];if(C<=2&&w){let e=100;if(C===2&&Fa(c)){let t=c[1]-c[0];e=Math.abs(t)}let n={...t,...v};b!==void 0&&(n.duration=x(b));let r=jt(n,e,w);y=r.ease,b=r.duration}b??=a;let T=d+S;u.length===1&&u[0]===0&&(u[1]=1);let E=u.length-c.length;if(E>0&&qt(u,E),c.length===1&&c.unshift(null),m){b=Sa(b,m);let e=[...c],t=[...u];y=Array.isArray(y)?[...y]:[y];let n=[...y];for(let r=0;r<m;r++){c.push(...e);for(let i=0;i<e.length;i++)u.push(t[i]+(r+1)),y.push(i===0?`linear`:me(n,i-1))}Ea(u,m)}let D=T+b;Ta(r,c,y,u,T,D),g=Math.max(S+b,g),f=Math.max(D,f)};if(Q(p)){let e=Aa(p,s);_(m,h,ja(`default`,e))}else{let e=xa(p,m,r,c),t=e.length;for(let n=0;n<t;n++){m=m,h=h;let r=e[n],i=Aa(r,s);for(let e in m)_(m[e],Na(h,e),ja(e,i),n,t)}}u=d,d+=g}return s.forEach((e,r)=>{for(let i in e){let a=e[i];a.sort(Da);let s=[],c=[],l=[];for(let e=0;e<a.length;e++){let{at:t,value:n,easing:r}=a[e];s.push(n),c.push(y(0,f,t)),l.push(r||`easeOut`)}c[0]!==0&&(c.unshift(0),s.unshift(s[0]),l.unshift(Oa)),c[c.length-1]!==1&&(c.push(1),s.push(null)),o.has(r)||o.set(r,{keyframes:{},transition:{}});let u=o.get(r);u.keyframes[i]=s;let{type:d,...p}=t;u.transition[i]={...p,duration:f,ease:l,times:c,...n}}}),o}function Aa(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function ja(e,t){return t[e]||(t[e]=[]),t[e]}function Ma(e){return Array.isArray(e)?e:[e]}function Na(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}var Pa=e=>typeof e==`number`,Fa=e=>e.every(Pa);function Ia(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=wi(e)&&!Ti(e)?new va(t):new oa(t);n.mount(e),Ai.set(e,n)}function La(e){let t=new ca({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});t.mount(e),Ai.set(e,t)}function Ra(e,t){return Q(e)||typeof e==`number`||typeof e==`string`&&!ba(t)}function za(e,t,n,r){let i=[];if(Ra(e,t))i.push(ya(e,ba(t)&&t.default||t,n&&(n.default||n)));else{if(e==null)return i;let a=xa(e,t,r),o=a.length;for(let e=0;e<o;e++){let r=a[e],s=r instanceof Element?Ia:La;Ai.has(r)||s(r);let c=Ai.get(r),l={...n};`delay`in l&&typeof l.delay==`function`&&(l.delay=l.delay(e,o)),i.push(...Lr(c,{...t,transition:l},{}))}}return i}function Ba(e,t,n){let r=[];return ka(e.map(e=>{if(Array.isArray(e)&&typeof e[0]==`function`){let t=e[0],n=Z(0);return n.on(`change`,t),e.length===1?[n,[0,1]]:e.length===2?[n,[0,1],e[1]]:[n,e[1],e[2]]}return e}),t,n,{spring:Vt}).forEach(({keyframes:e,transition:t},n)=>{r.push(...za(n,e,t))}),r}function Va(e){return Array.isArray(e)&&e.some(Array.isArray)}function Ha(e={}){let{scope:t,reduceMotion:n}=e;function r(e,r,i){let a=[],o;if(Va(e)){let{onComplete:i,...s}=r||{};typeof i==`function`&&(o=i),a=Ba(e,n===void 0?s:{reduceMotion:n,...s},t)}else{let{onComplete:s,...c}=i||{};typeof s==`function`&&(o=s),a=za(e,r,n===void 0?c:{reduceMotion:n,...c},t)}let s=new ar(a);return o&&s.finished.then(o),t&&(t.animations.push(s),s.finished.then(()=>{l(t.animations,s)})),s}return r}var $=Ha(),Ua=class extends o{template(){return`
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
        .footer-wrapper:empty,
        .footer-wrapper.no-content {
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
    `}onEnter(){$(this.root.querySelector(`.card`),{opacity:[0,1],y:[12,0]},{type:`spring`,stiffness:280,damping:24})}connectedCallback(){super.connectedCallback(),this._bindHoverEvents(),this._updateFooterVisibility();let e=this.root.querySelector(`slot[name="footer"]`);e&&e.addEventListener(`slotchange`,()=>this._updateFooterVisibility())}_updateFooterVisibility(){let e=this.root.querySelector(`slot[name="footer"]`),t=this.root.querySelector(`.footer-wrapper`);if(!e||!t)return;let n=e.assignedNodes().length>0;t.classList.toggle(`no-content`,!n)}_bindHoverEvents(){if(!this.boolAttr(`hoverable`))return;let e=this.root.querySelector(`.card`);e&&fi(e,e=>($(e,{y:-3,scale:1.01},{type:`spring`,stiffness:400,damping:22}),()=>{$(e,{y:0,scale:1},{type:`spring`,stiffness:400,damping:22})}))}attributeChangedCallback(){this.render(),this._bindHoverEvents()}};a(Ua,`observedAttributes`,[`variant`,`hoverable`]),customElements.define(`fm-card`,Ua);var Wa=class extends o{template(){let e=this.attr(`variant`,`primary`),t=this.boolAttr(`dot`),n=this.boolAttr(`removable`)?`
      <button class="remove-btn" part="remove" aria-label="Remove" tabindex="-1">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 4L4 8M4 4l4 4"/>
        </svg>
      </button>
    `:``;return`
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
          padding: 4px 12px;
          font-size: var(--fm-font-size-xs);
        }

        /* ---- Variants with improved contrast ---- */
        .badge.primary {
          background: var(--fm-color-primary-100);
          color: var(--fm-color-primary-dark);
        }
        .badge.secondary {
          background: var(--fm-color-primary-50);
          color: var(--fm-color-primary-dark);
        }
        .badge.success {
          background: #D1FAE5;
          color: #065F46;
        }
        .badge.warning {
          background: #FEF3C7;
          color: #92400E;
        }
        .badge.error {
          background: #FEE2E2;
          color: #991B1B;
        }
        .badge.neutral {
          background: #F3F4F6;
          color: #374151;
        }

        /* Tag variant: outlined style with border, for removable chips */
        .badge.tag {
          background: var(--fm-color-surface);
          color: var(--fm-color-text);
          border: 1px solid var(--fm-color-border);
          padding: 3px 10px;
        }
        .badge.tag:hover {
          border-color: var(--fm-color-text-secondary);
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

        /* ---- Remove button ---- */
        .remove-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 14px;
          height: 14px;
          padding: 0;
          margin: 0 -2px 0 2px;
          border: none;
          background: transparent;
          color: currentColor;
          cursor: pointer;
          border-radius: 50%;
          opacity: 0.6;
          transition: opacity 0.15s ease, background 0.15s ease;
        }
        .remove-btn:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.08);
        }
        .remove-btn:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 1px;
        }
        .badge.tag .remove-btn {
          width: 14px;
          height: 14px;
          margin: 0 -2px 0 2px;
        }
        .badge.tag .remove-btn svg {
          width: 12px;
          height: 12px;
        }
      </style>

      <span class="badge ${e}" part="badge">
        ${t?`<span class="dot"></span>`:``}
        <slot></slot>
        ${n}
      </span>
    `}connectedCallback(){super.connectedCallback(),this._bindRemoveEvent()}_bindRemoveEvent(){let e=this.root.querySelector(`.remove-btn`);e&&e.addEventListener(`click`,e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`fm-remove`,{bubbles:!0,composed:!0,detail:{text:this.textContent?.trim()}})),this.style.display=`none`})}attributeChangedCallback(){this.render(),this._bindRemoveEvent()}};a(Wa,`observedAttributes`,[`variant`,`dot`,`removable`]),customElements.define(`fm-badge`,Wa);var Ga=class extends o{template(){let e=parseInt(this.attr(`active`,`0`),10);return`
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
    `}connectedCallback(){super.connectedCallback(),this._updatePanels(),this._bindEvents(),requestAnimationFrame(()=>{this._updatePanels()})}onEnter(){$(this.root.querySelector(`.tab-header`),{opacity:[0,1],y:[-8,0]},{type:`spring`,stiffness:300,damping:20})}_updatePanels(){let e=parseInt(this.attr(`active`,`0`),10);Array.from(this.children).filter(e=>e.tagName===`FM-TAB`).forEach((t,n)=>{t.style.display=n===e?`block`:`none`})}_bindEvents(){this.root.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index||`0`,10);this.setAttribute(`active`,String(t))})})}attributeChangedCallback(e){if(this.render(),this._updatePanels(),this._bindEvents(),e===`active`){let e=parseInt(this.attr(`active`,`0`),10),t=Array.from(this.children).filter(e=>e.tagName===`FM-TAB`)[e]?.getAttribute(`label`)||``;$(this.root.querySelector(`.tab-panel`),{opacity:[0,1]},{duration:.25}),this.dispatchEvent(new CustomEvent(`fm-tab-change`,{bubbles:!0,detail:{index:e,label:t}}))}}};a(Ga,`observedAttributes`,[`active`,`variant`]);var Ka=class extends HTMLElement{connectedCallback(){requestAnimationFrame(()=>{this.style.display||(this.style.display=`none`)})}};customElements.define(`fm-tabs`,Ga),customElements.define(`fm-tab`,Ka);var qa=class extends o{template(){let e=this.attr(`variant`,`info`),t=this.boolAttr(`dismissible`),n=this.attr(`title`,``),r={info:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
      </svg>`,success:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M9 12l2 2l4 -4" />
      </svg>`,warning:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 9v4" />
        <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
        <path d="M12 16h.01" />
      </svg>`,error:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg>`};return`
      <style>
        :host {
          display: block;
        }

        .alert {
          display: flex;
          align-items: flex-start;
          gap: var(--fm-space-md);
          padding: var(--fm-space-md) var(--fm-space-lg);
          border-radius: var(--fm-radius-lg);
          font-family: var(--fm-font-family);
          position: relative;
          overflow: hidden;
          will-change: transform, opacity;
        }

        /* ---- Variants ---- */
        .alert.info {
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.2);
          color: #0369A1;
        }
        .alert.info .icon-wrapper {
          color: var(--fm-color-info);
        }

        .alert.success {
          background: rgba(5, 150, 105, 0.08);
          border: 1px solid rgba(5, 150, 105, 0.2);
          color: #047857;
        }
        .alert.success .icon-wrapper {
          color: var(--fm-color-success);
        }

        .alert.warning {
          background: rgba(217, 119, 6, 0.08);
          border: 1px solid rgba(217, 119, 6, 0.2);
          color: #92400E;
        }
        .alert.warning .icon-wrapper {
          color: var(--fm-color-warning);
        }

        .alert.error {
          background: rgba(220, 38, 38, 0.08);
          border: 1px solid rgba(220, 38, 38, 0.2);
          color: #B91C1C;
        }
        .alert.error .icon-wrapper {
          color: var(--fm-color-error);
        }

        /* ---- Icon ---- */
        .icon-wrapper {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0;
        }
        .alert.has-title .icon-wrapper {
          margin-top: 1px;
        }
        .icon-wrapper ::slotted(svg),
        .icon-wrapper ::slotted(img) {
          width: 100%;
          height: 100%;
        }

        /* ---- Content ---- */
        .content {
          flex: 1;
          min-width: 0;
        }

        .title {
          font-size: var(--fm-font-size-sm);
          font-weight: var(--fm-font-weight-semibold);
          margin: 0 0 4px 0;
          line-height: 1.4;
        }

        .message {
          font-size: var(--fm-font-size-sm);
          font-weight: var(--fm-font-weight-normal);
          line-height: var(--fm-line-height);
          margin: 0;
        }
        .message:empty {
          display: none;
        }

        /* ---- Close button ---- */
        .close-btn {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          border-radius: var(--fm-radius-md);
          cursor: pointer;
          color: currentColor;
          opacity: 0.6;
          transition: opacity var(--fm-transition-fast), background var(--fm-transition-fast);
          margin-right: -6px;
          padding: 0;
        }
        .close-btn:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.05);
        }
        .close-btn svg {
          width: 16px;
          height: 16px;
        }

        /* Hidden state */
        .alert.hidden {
          display: none;
        }
      </style>

      <div class="alert ${e} ${n?`has-title`:``}" part="alert">
        <div class="icon-wrapper">
          <slot name="icon">${r[e]||r.info}</slot>
        </div>
        <div class="content">
          ${n?`<div class="title" part="title">${n}</div>`:``}
          <div class="message" part="message">
            <slot></slot>
          </div>
        </div>
        ${t?`
          <button class="close-btn" part="close-btn" aria-label="Dismiss alert">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        `:``}
      </div>
    `}onEnter(){$(this.root.querySelector(`.alert`),{opacity:[0,1],y:[-8,0]},{type:`spring`,stiffness:350,damping:25})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.close-btn`);e&&e.addEventListener(`click`,()=>this.dismiss())}dismiss(){let e=this.root.querySelector(`.alert`);!e||e.classList.contains(`hidden`)||$(e,{opacity:[1,0],y:[0,-8],scale:[1,.98]},{type:`spring`,stiffness:400,damping:30}).finished.then(()=>{e.classList.add(`hidden`),this.dispatchEvent(new CustomEvent(`dismiss`,{bubbles:!0}))})}show(){let e=this.root.querySelector(`.alert`);e&&(e.classList.remove(`hidden`),this.onEnter())}attributeChangedCallback(){this.render(),this._bindEvents()}};a(qa,`observedAttributes`,[`variant`,`dismissible`,`title`]),customElements.define(`fm-alert`,qa);var Ja=class extends o{template(){let e=this.boolAttr(`disabled`),t=this.boolAttr(`checked`),n=this.boolAttr(`indeterminate`);return`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          gap: var(--fm-space-sm);
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        :host([disabled]) {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .checkbox-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .checkbox-box {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-sm);
          background: var(--fm-color-surface);
          transition: border-color var(--fm-transition-fast),
                      background-color var(--fm-transition-fast),
                      box-shadow var(--fm-transition-fast);
          position: relative;
          overflow: hidden;
          width: 20px;
          height: 20px;
        }

        .checkbox-box svg {
          width: 12px;
          height: 12px;
        }

        /* ---- States ---- */
        .checkbox-box.is-checked {
          background: var(--fm-color-primary);
          border-color: var(--fm-color-primary);
        }

        .checkbox-box.is-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Focus ---- */
        :host(:focus-visible) .checkbox-box {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* ---- Checkmark ---- */
        .checkmark {
          color: white;
          stroke: currentColor;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          opacity: 0;
          transform: scale(0);
        }

        .checkbox-box.is-checked .checkmark {
          opacity: 1;
          transform: scale(1);
        }

        /* ---- Indeterminate dash ---- */
        .indeterminate-dash {
          width: 60%;
          height: 2px;
          background: white;
          border-radius: 1px;
          opacity: 0;
          transform: scaleX(0);
        }

        .checkbox-box.is-checked .indeterminate-dash {
          opacity: 1;
          transform: scaleX(1);
        }

        /* ---- Label ---- */
        .label {
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          font-weight: var(--fm-font-weight-normal);
        }
      </style>

      <div class="checkbox-wrapper">
        <div
          class="checkbox-box ${t||n?`is-checked`:``} ${e?`is-disabled`:``}"
          part="checkbox"
          role="checkbox"
          aria-checked="${t||n?`true`:`false`}"
          tabindex="${e?`-1`:`0`}"
        >
          ${n?`<div class="indeterminate-dash" part="dash"></div>`:`
              <svg class="checkmark" viewBox="0 0 12 12" part="checkmark">
                <path d="M2 6L5 9L10 3" />
              </svg>
            `}
        </div>
        <span class="label" part="label">
          <slot></slot>
        </span>
      </div>
    `}onEnter(){$(this.root.querySelector(`.checkbox-wrapper`),{opacity:[0,1],scale:[.9,1]},{type:`spring`,stiffness:400,damping:25})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.checkbox-box`),t=this.root.querySelector(`.checkbox-wrapper`);!e||!t||(t.addEventListener(`click`,e=>{this.boolAttr(`disabled`)||(e.preventDefault(),this.toggle())}),e.addEventListener(`keydown`,e=>{this.boolAttr(`disabled`)||(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this.toggle())}),fi(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:1.08},{type:`spring`,stiffness:400,damping:20}),()=>{$(e,{scale:1},{type:`spring`,stiffness:400,damping:20})})),Ci(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:.92},{type:`spring`,stiffness:500,damping:22}),()=>{$(e,{scale:1.08},{type:`spring`,stiffness:400,damping:18})})),(this.boolAttr(`checked`)||this.boolAttr(`indeterminate`))&&this._animateCheck(!0))}toggle(){let e=this.boolAttr(`checked`)||this.boolAttr(`indeterminate`);e?(this.removeAttribute(`checked`),this.removeAttribute(`indeterminate`)):this.setAttribute(`checked`,``),this._animateCheck(!e),this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:!e},bubbles:!0,composed:!0}))}_animateCheck(e){let t=this.root.querySelector(`.checkbox-box`),n=this.root.querySelector(`.checkmark`),r=this.root.querySelector(`.indeterminate-dash`);if(!t)return;$(t,{backgroundColor:e?`var(--fm-color-primary)`:`var(--fm-color-surface)`,borderColor:e?`var(--fm-color-primary)`:`var(--fm-color-border-strong)`},{duration:.15});let i=n||r;i&&(e?$(i,{opacity:[0,1],scale:[0,1],x:[`-20%`,`0%`]},{type:`spring`,stiffness:500,damping:20}):$(i,{opacity:0,scale:.5},{duration:.15,ease:`easeOut`}))}attributeChangedCallback(e,t,n){if(e===`disabled`)this.render(),this._bindEvents();else if(e===`checked`||e===`indeterminate`){let e=t!==null,r=n!==null;if(e!==r){let e=this.root.querySelector(`.checkbox-box`);e&&(r?e.classList.add(`is-checked`):e.classList.remove(`is-checked`),e.setAttribute(`aria-checked`,r?`true`:`false`)),this._animateCheck(r)}}}};a(Ja,`observedAttributes`,[`checked`,`disabled`,`indeterminate`]),customElements.define(`fm-checkbox`,Ja);var Ya=class extends o{template(){let e=this.attr(`separator`,`chevron`),t=this.attr(`items`,``),n=[];if(t)try{n=JSON.parse(t)}catch{console.warn(`[fm-breadcrumb] Invalid items JSON`)}let r=this.innerHTML.trim().length>0,i={chevron:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,slash:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4 3 20"/></svg>`,arrow:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`}[e]||i.chevron;return`
      <style>
        :host { display: block; }

        .breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
          font-family: var(--fm-font-family);
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: var(--fm-space-xs);
        }

        /* ---- Sizes ---- */
        .breadcrumb {
          font-size: var(--fm-font-size-sm);
          gap: var(--fm-space-sm);
        }
        .breadcrumb .breadcrumb-separator {
          width: 14px;
          height: 14px;
        }
        .breadcrumb .breadcrumb-separator svg {
          width: 14px;
          height: 14px;
        }

        /* ---- Links ---- */
        .breadcrumb-link {
          color: var(--fm-color-text-secondary);
          text-decoration: none;
          font-weight: var(--fm-font-weight-medium);
          padding: 2px 4px;
          border-radius: var(--fm-radius-sm);
          transition: color var(--fm-transition-fast), background var(--fm-transition-fast);
        }

        .breadcrumb-link:hover {
          color: var(--fm-color-primary);
          background: var(--fm-alpha-primary-10);
        }

        .breadcrumb-link:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* ---- Current page ---- */
        .breadcrumb-current {
          color: var(--fm-color-text);
          font-weight: var(--fm-font-weight-semibold);
          padding: 2px 4px;
        }

        /* ---- Separator ---- */
        .breadcrumb-separator {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--fm-color-border-strong);
          flex-shrink: 0;
        }

        /* ---- Slotted content styling ---- */
        .breadcrumb-slot-container ::slotted(*) {
          display: flex;
          align-items: center;
          gap: var(--fm-space-sm);
        }

        .breadcrumb-slot-container ::slotted(a) {
          color: var(--fm-color-text-secondary);
          text-decoration: none;
          font-weight: var(--fm-font-weight-medium);
          padding: 2px 4px;
          border-radius: var(--fm-radius-sm);
          transition: color var(--fm-transition-fast), background var(--fm-transition-fast);
        }

        .breadcrumb-slot-container ::slotted(a:hover) {
          color: var(--fm-color-primary);
          background: var(--fm-alpha-primary-10);
        }

        .breadcrumb-slot-container ::slotted(:last-child) {
          color: var(--fm-color-text);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* Add separators between slotted items */
        .breadcrumb-slot-container ::slotted(:not(:last-child))::after {
          content: '';
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 14px;
          height: 14px;
          margin-left: var(--fm-space-sm);
          color: var(--fm-color-border-strong);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23CBD5E1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m9 18 6-6-6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
        }
      </style>

      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb" part="breadcrumb">
          ${!n.length&&!r?``:n.length?n.map((e,t)=>{let r=t===n.length-1,a=e.href&&!r?`<a href="${e.href}" class="breadcrumb-link" data-index="${t}">${e.label}</a>`:`<span class="breadcrumb-current" aria-current="page">${e.label}</span>`;return`
            <li class="breadcrumb-item ${r?`is-last`:``}" data-index="${t}">
              ${a}
              ${r?``:`<span class="breadcrumb-separator" aria-hidden="true">${i}</span>`}
            </li>
          `}).join(``):`<li class="breadcrumb-slot-container"><slot></slot></li>`}
        </ol>
      </nav>
    `}connectedCallback(){super.connectedCallback(),this._bindEvents()}onEnter(){let e=this.root.querySelector(`.breadcrumb`);e&&$(e,{opacity:[0,1],y:[-4,0]},{type:`spring`,stiffness:400,damping:25})}_bindEvents(){this.root.querySelectorAll(`.breadcrumb-link`).forEach(e=>{e.addEventListener(`click`,t=>{let n=parseInt(e.dataset.index||`0`,10),r=e.getAttribute(`href`)||``,i=e.textContent||``;this.dispatchEvent(new CustomEvent(`fm-breadcrumb-click`,{bubbles:!0,detail:{index:n,label:i,href:r}}))})})}attributeChangedCallback(){this.render(),this._bindEvents()}};a(Ya,`observedAttributes`,[`items`,`separator`]),customElements.define(`fm-breadcrumb`,Ya);var Xa=class extends o{template(){let e=this.attr(`variant`,`button`),t=this.attr(`label`,`Copy`),n=this.attr(`position`,`right`),r=this.boolAttr(`hide-icon`),i=this.attr(`feedback-text`,`Copied!`),a=r?``:`
      <span class="icon-container">
        <svg class="icon-copy" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg class="icon-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    `,o=`
      <div class="tooltip" role="status" aria-live="polite" aria-atomic="true">
        ${i}
      </div>
    `,s=``;return e===`button`?s=`
        <button class="clipboard-btn ${e}" part="button" aria-label="Copy to clipboard">
          ${a}
          <span class="btn-label">${t}</span>
        </button>
      `:e===`icon`?s=`
        <button class="clipboard-btn ${e}" part="button" aria-label="Copy to clipboard" title="${t}">
          <span class="icon-container">
            <svg class="icon-copy" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg class="icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        </button>
      `:e===`inline`&&(s=n===`left`?`
          <button class="clipboard-btn ${e}" part="button" aria-label="Copy to clipboard">
            ${a}
            <span class="inline-text"><slot></slot></span>
          </button>
        `:`
          <button class="clipboard-btn ${e}" part="button" aria-label="Copy to clipboard">
            <span class="inline-text"><slot></slot></span>
            ${a}
          </button>
        `),`
      <style>
        :host {
          display: inline-flex;
          position: relative;
        }

        .clipboard-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-medium);
          cursor: pointer;
          border: none;
          outline: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          transition: box-shadow var(--fm-transition-fast);
          position: relative;
          overflow: hidden;
        }

        /* ---- Button variant ---- */
        .clipboard-btn.button {
          padding: 8px 14px;
          font-size: var(--fm-font-size-sm);
          background: var(--fm-color-surface);
          color: var(--fm-color-text-secondary);
          border: 1.5px solid var(--fm-color-border);
          border-radius: var(--fm-radius-md);
          box-shadow: var(--fm-shadow-sm);
        }
        .clipboard-btn.button:hover:not(:disabled) {
          background: var(--fm-color-surface-alt);
          border-color: var(--fm-color-primary-light);
          color: var(--fm-color-primary);
        }
        .clipboard-btn.button:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* ---- Icon variant ---- */
        .clipboard-btn.icon {
          padding: 8px;
          background: transparent;
          color: var(--fm-color-text-secondary);
          border-radius: var(--fm-radius-md);
        }
        .clipboard-btn.icon:hover:not(:disabled) {
          background: var(--fm-alpha-primary-10);
          color: var(--fm-color-primary);
        }
        .clipboard-btn.icon:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* ---- Inline variant ---- */
        .clipboard-btn.inline {
          padding: 4px 8px;
          background: transparent;
          color: var(--fm-color-primary);
          border-radius: var(--fm-radius-sm);
          font-size: var(--fm-font-size-sm);
          text-decoration: underline;
          text-decoration-color: transparent;
          transition: text-decoration-color var(--fm-transition-fast),
                      background var(--fm-transition-fast);
        }
        .clipboard-btn.inline:hover:not(:disabled) {
          background: var(--fm-alpha-primary-10);
          text-decoration-color: currentColor;
        }
        .clipboard-btn.inline:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
          text-decoration: none;
        }
        .clipboard-btn.inline .inline-text {
          color: var(--fm-color-primary);
        }

        /* ---- Icon container ---- */
        .icon-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .clipboard-btn.icon .icon-container {
          width: 18px;
          height: 18px;
        }
        .clipboard-btn.inline .icon-container {
          width: 14px;
          height: 14px;
        }

        /* ---- Icons ---- */
        .icon-container svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .icon-check {
          opacity: 0;
          color: var(--fm-color-success);
        }

        /* ---- Success state ---- */
        .clipboard-btn.success .icon-copy {
          opacity: 0;
        }
        .clipboard-btn.success .icon-check {
          opacity: 1;
        }
        .clipboard-btn.success .btn-label {
          color: var(--fm-color-success);
        }

        /* ---- Tooltip ---- */
        .tooltip {
          position: absolute;
          bottom: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          padding: 4px 10px;
          background: var(--fm-color-secondary);
          color: var(--fm-color-text-light);
          font-size: var(--fm-font-size-xs);
          font-weight: var(--fm-font-weight-medium);
          border-radius: var(--fm-radius-sm);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          z-index: 1000;
        }
        .tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: var(--fm-color-secondary);
        }

        /* ---- Disabled ---- */
        .clipboard-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
      </style>

      ${this.attr(`feedback`,`tooltip`)===`tooltip`?o:``}
      ${s}
    `}onEnter(){$(this.root.querySelector(`.clipboard-btn`),{opacity:[0,1],y:[4,0]},{type:`spring`,stiffness:400,damping:25})}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.clipboard-btn`);e&&(e.addEventListener(`click`,e=>this._handleCopy(e)),fi(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{y:-1},{type:`spring`,stiffness:450,damping:20}),()=>{$(e,{y:0},{type:`spring`,stiffness:450,damping:20})})),Ci(e,e=>this.boolAttr(`disabled`)?()=>{}:($(e,{scale:.96},{type:`spring`,stiffness:500,damping:22}),()=>{$(e,{scale:1},{type:`spring`,stiffness:450,damping:18})})))}async _handleCopy(e){e.preventDefault(),e.stopPropagation();let t=this.root.querySelector(`.clipboard-btn`),n=this.attr(`feedback`,`tooltip`),r=this.attr(`text`,``);if(!r&&this.attr(`variant`,`button`)===`inline`){let e=t.querySelector(`.inline-text slot`);e&&(r=e.assignedNodes({flatten:!0}).map(e=>e.textContent).join(``).trim())}if(!r){console.warn(`fm-clipboard: No text to copy`);return}try{await navigator.clipboard.writeText(r),this._showSuccess(t,n)}catch(e){console.error(`fm-clipboard: Failed to copy`,e),this._fallbackCopy(r,t,n)}}_fallbackCopy(e,t,n){let r=document.createElement(`textarea`);r.value=e,r.style.position=`fixed`,r.style.left=`-9999px`,document.body.appendChild(r),r.select();try{document.execCommand(`copy`)&&this._showSuccess(t,n)}catch(e){console.error(`fm-clipboard: Fallback copy failed`,e)}document.body.removeChild(r)}_showSuccess(e,t){this.attr(`variant`,`button`),e.classList.add(`success`);let n=e.querySelector(`.icon-check`);if(n&&$(n,{scale:[.5,1],opacity:[0,1]},{type:`spring`,stiffness:500,damping:20}),t===`tooltip`){let e=this.root.querySelector(`.tooltip`);e&&($(e,{opacity:[0,1],marginTop:[`4px`,`0px`]},{type:`spring`,stiffness:450,damping:20}),setTimeout(()=>{$(e,{opacity:0,marginTop:`-4px`},{duration:.2})},1500))}setTimeout(()=>{e.classList.remove(`success`);let t=e.querySelector(`.icon-check`);t&&(t.style.opacity=`0`,t.style.scale=`0.5`)},2e3),this.dispatchEvent(new CustomEvent(`fm-copy`,{bubbles:!0,composed:!0,detail:{text:this.attr(`text`,``)}}))}attributeChangedCallback(){this.render(),this._bindEvents()}};a(Xa,`observedAttributes`,[`text`,`label`,`variant`,`feedback`,`feedback-text`,`position`,`hide-icon`]),customElements.define(`fm-clipboard`,Xa);var Za=class extends o{constructor(...e){super(...e),a(this,`_isOpen`,!1)}template(){let e=this.attr(`placeholder`,`Menu`),t=this.boolAttr(`disabled`),n=this.attr(`variant`,`default`),r=this.boolAttr(`icon-only`),i=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>`;return`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        /* ---- Trigger Button ---- */
        .trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--fm-space-sm);
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-semibold);
          letter-spacing: var(--fm-letter-spacing);
          line-height: 1;
          border-radius: var(--fm-radius-md);
          cursor: ${t?`not-allowed`:`pointer`};
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          white-space: nowrap;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          width: ${r?`auto`:`100%`};
          padding: 10px 16px;
          font-size: var(--fm-font-size-sm);
        }

        /* Variants */
        .trigger.default {
          background: var(--fm-color-surface);
          color: var(--fm-color-text);
          border: 1.5px solid var(--fm-color-border);
          box-shadow: var(--fm-shadow-sm);
        }
        .trigger.default:hover:not(:disabled) {
          border-color: var(--fm-color-primary);
          background: var(--fm-color-surface-alt);
        }

        .trigger.outline {
          background: transparent;
          color: var(--fm-color-primary);
          border: 1.5px solid var(--fm-color-primary);
          box-shadow: none;
        }
        .trigger.outline:hover:not(:disabled) {
          background: var(--fm-alpha-primary-10);
        }

        .trigger.ghost {
          background: transparent;
          color: var(--fm-color-text);
          border: none;
          box-shadow: none;
        }
        .trigger.ghost:hover:not(:disabled) {
          background: var(--fm-color-surface-alt);
        }

        .trigger:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .trigger:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* Icon-only variant - square shape with centered icon */
        .trigger.icon-only {
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Icon slot container */
        .icon-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: var(--fm-color-text-secondary);
        }

        .icon-slot ::slotted(*) {
          width: 100%;
          height: 100%;
        }

        /* Display text */
        .trigger-text {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Chevron icon */
        .trigger-icon {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          color: var(--fm-color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .trigger-icon.open {
          transform: rotate(180deg);
        }

        /* ---- Dropdown Menu ---- */
        .dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          min-width: 180px;
          background: var(--fm-color-surface);
          border: 1px solid var(--fm-color-border);
          border-radius: var(--fm-radius-md);
          box-shadow: var(--fm-shadow-md);
          z-index: 1000;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transform-origin: top center;
          transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
          transform: scaleY(0.95) translateY(-4px);
        }

        .dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: scaleY(1) translateY(0);
        }

        /* ---- Content Area ---- */
        .content {
          padding: 4px 0;
          max-height: 320px;
          overflow-y: auto;
        }

        /* ---- Divider ---- */
        ::slotted([slot="divider"]) {
          display: block;
          height: 1px;
          margin: 4px 0;
          background: var(--fm-color-border);
        }
      </style>

      <button 
        class="trigger ${n} ${r?`icon-only`:``}" 
        part="trigger"
        ${t?`disabled`:``}
        aria-haspopup="true"
        aria-expanded="${this._isOpen}"
      >
        ${r?`
          <span class="icon-slot" part="icon-slot">
            <slot name="icon">${i}</slot>
          </span>
        `:`
          <span class="trigger-content" part="trigger-content">
            <span class="trigger-text" part="trigger-text">${e}</span>
          </span>
          <span class="trigger-icon ${this._isOpen?`open`:``}" part="trigger-icon">
            ${i}
          </span>
        `}
      </button>

      <div class="dropdown ${this._isOpen?`open`:``}" part="dropdown">
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this._bindEvents()}disconnectedCallback(){this._removeOutsideClickListener()}_bindEvents(){if(this.boolAttr(`disabled`))return;let e=this.root.querySelector(`.trigger`);e&&(e.addEventListener(`click`,e=>{e.stopPropagation(),this.toggle()}),e.addEventListener(`keydown`,e=>{e.key===`Enter`||e.key===` `?(e.preventDefault(),this.toggle()):e.key===`Escape`&&this._isOpen&&(e.preventDefault(),this.close())}),this.addEventListener(`fm-dropdown-item-select`,e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`fm-dropdown-select`,{detail:{value:e.detail.value},bubbles:!0})),this.close()}))}_addOutsideClickListener(){this._outsideClickHandler=e=>{!this.contains(e.target)&&!this.root.contains(e.target)&&this.close()},document.addEventListener(`click`,this._outsideClickHandler)}_removeOutsideClickListener(){this._outsideClickHandler&&=(document.removeEventListener(`click`,this._outsideClickHandler),null)}open(){this._isOpen||this.boolAttr(`disabled`)||(this._isOpen=!0,this.render(),this._bindEvents(),this._addOutsideClickListener(),this.dispatchEvent(new CustomEvent(`fm-dropdown-open`,{bubbles:!0})))}close(){this._isOpen&&(this._isOpen=!1,this._removeOutsideClickListener(),this.render(),this._bindEvents(),this.dispatchEvent(new CustomEvent(`fm-dropdown-close`,{bubbles:!0})))}toggle(){this._isOpen?this.close():this.open()}attributeChangedCallback(e,t,n){t!==n&&(this.render(),this._bindEvents())}};a(Za,`observedAttributes`,[`placeholder`,`disabled`,`variant`,`icon-only`]),customElements.define(`fm-dropdown`,Za);var Qa=class extends o{template(){let e=this.attr(`value`,``),t=this.boolAttr(`disabled`),n=this.attr(`href`,``),r=n!==``,i=`
      <span class="icon" part="icon">
        <slot name="icon"></slot>
      </span>
      <span class="content" part="content">
        <slot></slot>
      </span>
    `;return`
      <style>
        :host {
          display: block;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 16px;
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          background: transparent;
          border: none;
          cursor: ${t?`not-allowed`:`pointer`};
          text-align: left;
          text-decoration: none;
          box-sizing: border-box;
          transition: background-color 0.15s ease;
          user-select: none;
        }

        .item:hover:not(:disabled):not([disabled]) {
          background: var(--fm-color-surface-alt);
        }

        .item:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: -2px;
        }

        .item:disabled,
        .item[disabled] {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          color: var(--fm-color-text-secondary);
        }

        .icon:empty {
          display: none;
        }

        .content {
          flex: 1;
          min-width: 0;
        }

        /* Allow any content in the slot */
        ::slotted(*) {
          margin: 0;
        }
      </style>

      ${r?`
        <a 
          class="item ${t?`disabled`:``}" 
          part="item"
          href="${t?`javascript:void(0)`:n}"
          ${t?`tabindex=-1`:``}
          data-value="${e}"
        >
          ${i}
        </a>
      `:`
        <button 
          class="item ${t?`disabled`:``}" 
          part="item"
          ${t?`disabled`:``}
          data-value="${e}"
        >
          ${i}
        </button>
      `}
    `}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){if(this.boolAttr(`disabled`))return;let e=this.root.querySelector(`.item`);e&&e.addEventListener(`click`,e=>{if(this.boolAttr(`disabled`))return;let t=this.attr(`value`,``);this.dispatchEvent(new CustomEvent(`fm-dropdown-item-select`,{detail:{value:t},bubbles:!0,composed:!0}))})}attributeChangedCallback(){this.render(),this._bindEvents()}};a(Qa,`observedAttributes`,[`value`,`disabled`,`href`]),customElements.define(`fm-dropdown-item`,Qa);var $a=class extends o{template(){let e=Math.max(1,Math.min(this.getTotal(),this.getCurrent())),t=this.getTotal(),n=this.attr(`variant`,`default`),r=this.boolAttr(`disabled`),i=this.attr(`href-template`,``),a=this._getPageRange(e,t),o=e=>i?i.replace(`:page`,e):null,s=o(e-1),c=o(e+1);return`
      <style>
        :host { display: inline-block; }

        .pagination {
          display: flex;
          align-items: center;
          gap: var(--fm-space-xs);
          font-family: var(--fm-font-family);
        }

        .pagination-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          outline: none;
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-medium);
          line-height: 1;
          border-radius: var(--fm-radius-md);
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          transition: all var(--fm-transition-fast);
          position: relative;
          overflow: hidden;
          min-width: 36px;
          height: 36px;
          padding: 0 12px;
          font-size: var(--fm-font-size-sm);
          gap: 6px;
        }

        .pagination-btn:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination-btn svg {
          width: 16px;
          height: 16px;
        }

        /* ---- Default variant ---- */
        .pagination-btn.default {
          background: var(--fm-color-surface);
          color: var(--fm-color-text-secondary);
          border: 1px solid var(--fm-color-border);
        }
        .pagination-btn.default:hover:not(:disabled):not(.active) {
          background: var(--fm-color-surface-muted);
          color: var(--fm-color-text);
          border-color: var(--fm-color-border-strong);
        }
        .pagination-btn.default.active {
          background: var(--fm-color-primary);
          color: var(--fm-color-text-light);
          border-color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* ---- Outline variant ---- */
        .pagination-btn.outline {
          background: transparent;
          color: var(--fm-color-text-secondary);
          border: 1.5px solid var(--fm-color-border);
        }
        .pagination-btn.outline:hover:not(:disabled):not(.active) {
          background: var(--fm-alpha-primary-10);
          color: var(--fm-color-primary);
          border-color: var(--fm-color-primary);
        }
        .pagination-btn.outline.active {
          background: transparent;
          color: var(--fm-color-primary);
          border-color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* ---- Ghost variant ---- */
        .pagination-btn.ghost {
          background: transparent;
          color: var(--fm-color-text-secondary);
          border: 1px solid transparent;
        }
        .pagination-btn.ghost:hover:not(:disabled):not(.active) {
          background: var(--fm-color-surface-muted);
          color: var(--fm-color-text);
        }
        .pagination-btn.ghost.active {
          background: var(--fm-color-surface-muted);
          color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* ---- Navigation buttons ---- */
        .pagination-nav {
          padding-left: 8px;
          padding-right: 8px;
        }

        /* ---- Links inside buttons (for SSR/SEO) ---- */
        .nav-link, .page-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: inherit;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
          pointer-events: none;
        }

        /* ---- Ellipsis ---- */
        .pagination-ellipsis {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--fm-color-text-secondary);
          user-select: none;
          padding: 0 4px;
          min-width: 36px;
          height: 36px;
          font-size: var(--fm-font-size-sm);
        }
      </style>

      <nav class="pagination" role="navigation" aria-label="Pagination">
        <button 
          class="pagination-btn pagination-nav ${n}" 
          data-action="prev"
          ${e<=1||r?`disabled`:``}
          aria-label="Go to previous page"
        >
          ${s&&e>1?`<a href="${s}" class="nav-link" tabindex="-1">`:``}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          ${s&&e>1?`</a>`:``}
        </button>

        ${a.map(t=>{if(t===`...`)return`<span class="pagination-ellipsis">...</span>`;let i=parseInt(t,10),a=i===e,s=o(i);return`
            <button 
              class="pagination-btn pagination-page ${n} ${a?`active`:``}" 
              data-page="${i}"
              ${r?`disabled`:``}
              aria-label="Go to page ${i}"
              aria-current="${a?`page`:`false`}"
            >
              ${s&&!a?`<a href="${s}" class="page-link" tabindex="-1">${i}</a>`:i}
            </button>
          `}).join(``)}

        <button 
          class="pagination-btn pagination-nav ${n}" 
          data-action="next"
          ${e>=t||r?`disabled`:``}
          aria-label="Go to next page"
        >
          ${c&&e<t?`<a href="${c}" class="nav-link" tabindex="-1">`:``}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          ${c&&e<t?`</a>`:``}
        </button>
      </nav>
    `}_getPageRange(e,t){let n=[],r=[];for(let e=1;e<=Math.min(1,t);e++)r.push(e);let i=[];for(let e=Math.max(2,t-1+1);e<=t;e++)i.push(e);let a=Math.max(2,e-1),o=Math.min(t-1,e+1);n.push(...r),a>2?n.push(`...`):a===2&&!r.includes(a)&&n.push(a);for(let e=Math.max(a,3);e<=o;e++)!r.includes(e)&&!i.includes(e)&&n.push(e);o<t-1?n.push(`...`):o===t-1&&!i.includes(o)&&n.push(o);for(let e of i)n.includes(e)||n.push(e);return n}getCurrent(){let e=this.attr(`current`,`1`);return Math.max(1,parseInt(e,10)||1)}getTotal(){let e=this.attr(`total`,`1`);return Math.max(1,parseInt(e,10)||1)}connectedCallback(){super.connectedCallback(),this._bindEvents()}onEnter(){let e=this.root.querySelector(`.pagination`);e&&$(e,{opacity:[0,1],y:[8,0]},{type:`spring`,stiffness:350,damping:25})}_bindEvents(){this.boolAttr(`disabled`)||this.root.querySelectorAll(`.pagination-btn:not(:disabled)`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.tagName===`A`&&!t.ctrlKey&&!t.metaKey)return;t.preventDefault();let n=this.getCurrent(),r=n;if(e.dataset.action===`prev`?r=Math.max(1,n-1):e.dataset.action===`next`?r=Math.min(this.getTotal(),n+1):e.dataset.page&&(r=parseInt(e.dataset.page,10)),r!==n){let e=n;this.setAttribute(`current`,String(r)),this.dispatchEvent(new CustomEvent(`fm-page-change`,{bubbles:!0,detail:{page:r,previousPage:e}}))}}),fi(e,e=>($(e,{scale:1.05},{type:`spring`,stiffness:400,damping:20}),()=>{$(e,{scale:1},{type:`spring`,stiffness:400,damping:20})})),Ci(e,e=>($(e,{scale:.95},{type:`spring`,stiffness:500,damping:22}),()=>{$(e,{scale:1.05},{type:`spring`,stiffness:400,damping:20})}))})}attributeChangedCallback(){this.render(),this._bindEvents()}};a($a,`observedAttributes`,[`current`,`total`,`variant`,`disabled`,`href-template`]),customElements.define(`fm-pagination`,$a);var eo=0,to=class extends o{constructor(){super(),eo+=1,this._gradientId=`fm-sparkline-gradient-${eo}`}template(){let e=this._parseData(),t=this._numberAttr(`width`,200),n=this._numberAttr(`height`,60),r=this.attr(`gradient-from`,`var(--fm-alpha-primary-20)`),i=this.attr(`gradient-to`,`transparent`),a=this.attr(`stroke-color`,`var(--fm-color-primary)`),o=this._numberAttr(`stroke-width`,2),s=this.attr(`aria-label`,`Sparkline trend`),{line:c,area:l,point:u}=this._buildPathData(e,t,n),d=this._formatPoint(Math.max(o*1.5,3));return`
      <style>
        :host {
          display: inline-block;
          line-height: 0;
        }

        .sparkline {
          display: inline-block;
          will-change: transform, opacity;
        }

        svg {
          display: block;
          overflow: visible;
        }

        .area {
          transition: opacity var(--fm-transition-normal);
        }

        .line {
          filter: drop-shadow(0 2px 6px var(--fm-alpha-primary-15));
          transition: opacity var(--fm-transition-normal);
        }

        .point {
          filter: drop-shadow(0 2px 6px var(--fm-alpha-primary-15));
          transition: opacity var(--fm-transition-normal);
        }
      </style>

      <div class="sparkline" part="sparkline">
        <svg
          width="${t}"
          height="${n}"
          viewBox="0 0 ${t} ${n}"
          role="img"
          aria-label="${this._escapeAttr(s)}"
          part="svg"
        >
          <defs>
            <linearGradient id="${this._gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: ${this._escapeAttr(r)};" />
              <stop offset="100%" style="stop-color: ${this._escapeAttr(i)};" />
            </linearGradient>
          </defs>

          ${l?`
            <path
              class="area"
              d="${l}"
              fill="url(#${this._gradientId})"
              part="area"
            ></path>
          `:``}

          ${c?`
            <path
              class="line"
              d="${c}"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="stroke: ${this._escapeAttr(a)}; stroke-width: ${o}px;"
              part="line"
            ></path>
          `:``}

          ${u?`
            <circle
              class="point"
              cx="${u[0]}"
              cy="${u[1]}"
              r="${d}"
              style="fill: ${this._escapeAttr(a)};"
              part="point"
            ></circle>
          `:``}
        </svg>
      </div>
    `}onEnter(){this._animateSparkline()}attributeChangedCallback(){this.render(),this.isConnected&&this._entered&&this._animateSparkline()}_animateSparkline(){let e=this.root.querySelector(`.sparkline`);e&&$(e,{opacity:[.4,1],y:[6,0]},{type:`spring`,stiffness:320,damping:26})}_numberAttr(e,t){let n=Number(this.attr(e,String(t)));return Number.isFinite(n)&&n>0?n:t}_parseData(){let e=this.attr(`data`,``).trim();if(!e)return[];try{let t=JSON.parse(e);if(Array.isArray(t))return t.map(e=>Number(e)).filter(e=>Number.isFinite(e))}catch{}return e.split(`,`).map(e=>Number(e.trim())).filter(e=>Number.isFinite(e))}_buildPathData(e,t,n){if(e.length===0)return{line:``,area:``,point:null};let r=Math.min(...e),i=Math.max(...e)-r||1,a=Math.min(10,t/2,n/2),o=Math.max(t-a*2,0),s=Math.max(n-a*2,0),c=e.map((n,c)=>{let l=e.length===1?t/2:a+c/(e.length-1)*o,u=a+s-(n-r)/i*s;return[this._formatPoint(l),this._formatPoint(u)]});if(e.length===1)return{line:``,area:``,point:c[0]};let l=c.map(([e,t],n)=>`${n===0?`M`:`L`} ${e} ${t}`).join(` `),u=this._formatPoint(n-a);return{line:l,area:`${l} L ${c[c.length-1][0]} ${u} L ${c[0][0]} ${u} Z`,point:null}}_formatPoint(e){return Number(e.toFixed(2))}_escapeAttr(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}};a(to,`observedAttributes`,[`data`,`width`,`height`,`gradient-from`,`gradient-to`,`stroke-color`,`stroke-width`,`aria-label`]),customElements.define(`fm-sparkline`,to);var no=class extends o{constructor(...e){super(...e),a(this,`_handleShow`,()=>{let e=this.root.querySelector(`.tip`);if(!e)return;let t=this.attr(`position`,`top`),n=t===`top`||t===`bottom`?`translateX(-50%)`:`translateY(-50%)`,r={top:`${n} translateY(6px)`,bottom:`${n} translateY(-6px)`,left:`${n} translateX(6px)`,right:`${n} translateX(-6px)`},i={top:`${n} translateY(0)`,bottom:`${n} translateY(0)`,left:`${n} translateX(0)`,right:`${n} translateX(0)`};e.style.visibility=`visible`,$(e,{opacity:[0,1],transform:[r[t]??r.top,i[t]??i.top]},{type:`spring`,stiffness:400,damping:20})}),a(this,`_handleHide`,()=>{let e=this.root.querySelector(`.tip`);e&&$(e,{opacity:0},{duration:.15}).then(()=>{e.style.opacity===`0`&&(e.style.visibility=`hidden`)})})}template(){let e=this.attr(`text`,``);return`
      <style>
        :host {
          display: inline-block;
          position: relative;
          cursor: pointer;
        }

        .trigger {
          display: inline-block;
          cursor: inherit;
        }

        .tip {
          position: absolute;
          z-index: 1000;
          padding: var(--fm-space-xs) var(--fm-space-sm);
          border-radius: var(--fm-radius-sm);
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-xs);
          font-weight: var(--fm-font-weight-medium);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          will-change: transform, opacity;
          box-shadow: var(--fm-shadow-md);
        }

        /* ---- Variants ---- */
        .tip.dark {
          background: var(--fm-color-text);
          color: var(--fm-color-text-light);
        }

        .tip.primary {
          background: var(--fm-color-primary);
          color: var(--fm-color-text-light);
        }

        .tip.secondary {
          background: var(--fm-color-secondary);
          color: var(--fm-color-text-light);
        }

        .tip.light {
          background: var(--fm-color-surface);
          color: var(--fm-color-text);
          border: 1px solid var(--fm-color-border);
        }

        /* ---- Positions ---- */
        .tip.top {
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        }

        .tip.bottom {
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        }

        .tip.left {
          right: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%);
        }

        .tip.right {
          left: calc(100% + 8px);
          top: 50%;
          transform: translateY(-50%);
        }

        /* ---- Arrow ---- */
        .tip::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: inherit;
          transform: rotate(45deg);
        }

        .tip.top::after {
          bottom: -4px;
          left: calc(50% - 4px);
        }

        .tip.bottom::after {
          top: -4px;
          left: calc(50% - 4px);
        }

        .tip.left::after {
          right: -4px;
          top: calc(50% - 4px);
        }

        .tip.right::after {
          left: -4px;
          top: calc(50% - 4px);
        }

        /* ---- Light variant arrow border ---- */
        .tip.light::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--fm-color-border);
          transform: rotate(45deg);
          z-index: -1;
        }

        .tip.light.top::before {
          bottom: -5px;
          left: calc(50% - 4px);
        }

        .tip.light.bottom::before {
          top: -5px;
          left: calc(50% - 4px);
        }

        .tip.light.left::before {
          right: -5px;
          top: calc(50% - 4px);
        }

        .tip.light.right::before {
          left: -5px;
          top: calc(50% - 4px);
        }
      </style>

      <div class="trigger" part="trigger">
        <slot></slot>
      </div>
      <div class="tip ${this.attr(`position`,`top`)} ${this.attr(`variant`,`dark`)}" part="tip">${e}</div>
    `}connectedCallback(){super.connectedCallback(),this._bindEvents()}_bindEvents(){this.addEventListener(`mouseenter`,this._handleShow),this.addEventListener(`mouseleave`,this._handleHide),this.addEventListener(`focusin`,this._handleShow),this.addEventListener(`focusout`,this._handleHide)}attributeChangedCallback(){this.render(),this._bindEvents()}};a(no,`observedAttributes`,[`text`,`position`,`variant`]),customElements.define(`fm-tooltip`,no);var ro=class extends o{template(){let e=this.attr(`type`,`text`),t=this.attr(`value`,``),n=this.attr(`placeholder`,``),r=this.boolAttr(`disabled`),i=this.boolAttr(`readonly`),a=this.boolAttr(`required`),o=this.attr(`error`,``),s=this.attr(`size`,`md`),c=this.attr(`variant`,`default`),l=t.length>0,u=o.length>0;return`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* ---- Variants ---- */
        .variant-default .input-field {
          background: var(--fm-color-surface);
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-default .input-field:hover:not(:disabled) {
          border-color: var(--fm-color-border);
        }
        .variant-default.is-focused .input-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-default.has-error .input-field {
          border-color: var(--fm-color-error);
        }
        .variant-default.has-error.is-focused .input-field {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }

        .variant-filled .input-field {
          background: var(--fm-color-surface-muted);
          border: 1.5px solid transparent;
          border-radius: var(--fm-radius-md);
        }
        .variant-filled .input-field:hover:not(:disabled) {
          background: var(--fm-color-surface-alt);
        }
        .variant-filled.is-focused .input-field {
          background: var(--fm-color-surface);
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-filled.has-error .input-field {
          border-color: var(--fm-color-error);
        }

        .variant-outlined .input-field {
          background: transparent;
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-outlined .input-field:hover:not(:disabled) {
          border-color: var(--fm-color-primary-light);
        }
        .variant-outlined.is-focused .input-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-outlined.has-error .input-field {
          border-color: var(--fm-color-error);
        }

        /* ---- Sizes ---- */
        .input-field {
          width: 100%;
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-normal);
          color: var(--fm-color-text);
          transition: all var(--fm-transition-fast);
          outline: none;
        }
        .input-field::placeholder {
          color: var(--fm-color-text-secondary);
          opacity: 0.6;
        }
        .input-field:disabled {
          background: var(--fm-color-surface-muted);
          cursor: not-allowed;
          opacity: 0.6;
        }

        .size-sm .input-field {
          height: 36px;
          padding: 0 var(--fm-space-sm);
          font-size: var(--fm-font-size-sm);
        }

        .size-md .input-field {
          height: 44px;
          padding: 0 var(--fm-space-md);
          font-size: var(--fm-font-size-md);
        }

        .size-lg .input-field {
          height: 52px;
          padding: 0 var(--fm-space-lg);
          font-size: var(--fm-font-size-lg);
        }

        /* ---- Error Message ---- */
        .error-message {
          display: flex;
          align-items: center;
          gap: var(--fm-space-xs);
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-error);
          font-weight: var(--fm-font-weight-medium);
        }
        .error-message svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* ---- Helper Text ---- */
        .helper-text {
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-text-secondary);
        }
        .helper-text.has-error {
          display: none;
        }
      </style>

      <div class="input-wrapper ${{sm:`size-sm`,md:`size-md`,lg:`size-lg`}[s]||`size-md`} ${{default:`variant-default`,filled:`variant-filled`,outlined:`variant-outlined`}[c]||`variant-default`} ${r?`is-disabled`:``} ${u?`has-error`:``} ${this._focused?`is-focused`:``} ${l||this._focused?`is-filled`:``}">
        <input
          class="input-field"
          part="input"
          type="${e}"
          value="${t}"
          placeholder="${n}"
          ${r?`disabled`:``}
          ${i?`readonly`:``}
          ${a?`required`:``}
          aria-invalid="${u?`true`:`false`}"
          aria-describedby="${u?`error-msg`:``}"
        />
        ${u?`
          <div class="error-message" id="error-msg" part="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
            ${o}
          </div>
        `:`
          <slot name="helper">
            <div class="helper-text" part="helper">
              <slot name="helper-text"></slot>
            </div>
          </slot>
        `}
      </div>
    `}onEnter(){let e=this.root.querySelector(`.input-wrapper`);e&&$(e,{opacity:[0,1],y:[8,0]},{type:`spring`,stiffness:400,damping:30})}connectedCallback(){super.connectedCallback(),this._focused=!1,this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.input-field`);e&&(e.addEventListener(`input`,e=>{let t=e.target.value,n=this.root.querySelector(`.input-wrapper`);n&&(t.length>0?n.classList.add(`is-filled`):n.classList.remove(`is-filled`)),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:t},bubbles:!0,composed:!0}))}),e.addEventListener(`focus`,()=>{this._focused=!0;let e=this.root.querySelector(`.input-wrapper`);e&&e.classList.add(`is-focused`),this.dispatchEvent(new CustomEvent(`focus`,{bubbles:!0,composed:!0}))}),e.addEventListener(`blur`,()=>{this._focused=!1;let t=this.root.querySelector(`.input-wrapper`);t&&t.classList.remove(`is-focused`),this.dispatchEvent(new CustomEvent(`blur`,{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e.value},bubbles:!0,composed:!0}))}))}attributeChangedCallback(e,t,n){if(t!==n)if(e===`value`){let e=this.root.querySelector(`.input-field`);if(e&&e.value!==n){e.value=n??``;let t=this.root.querySelector(`.input-wrapper`);t&&(n&&n.length>0?t.classList.add(`is-filled`):t.classList.remove(`is-filled`))}}else if(e===`error`){let e=this.root.querySelector(`.input-wrapper`);e&&(n&&n.length>0?(e.classList.add(`has-error`),$(e,{x:[0,-4,4,-4,4,0]},{duration:.4,ease:`easeInOut`})):e.classList.remove(`has-error`)),this.render(),this._bindEvents()}else this.render(),this._bindEvents()}focus(){let e=this.root.querySelector(`.input-field`);e&&e.focus()}blur(){let e=this.root.querySelector(`.input-field`);e&&e.blur()}clear(){this.setAttribute(`value`,``);let e=this.root.querySelector(`.input-field`);e&&(e.value=``);let t=this.root.querySelector(`.input-wrapper`);t&&t.classList.remove(`is-filled`)}get value(){return this.attr(`value`,``)}set value(e){this.setAttribute(`value`,e)}};a(ro,`observedAttributes`,[`type`,`value`,`placeholder`,`disabled`,`readonly`,`required`,`error`,`size`,`variant`]),customElements.define(`fm-input`,ro);var io=class extends o{template(){let e=this.attr(`value`,``),t=this.attr(`placeholder`,``),n=this.boolAttr(`disabled`),r=this.boolAttr(`readonly`),i=this.boolAttr(`required`),a=this.attr(`error`,``),o=this.attr(`size`,`md`),s=this.attr(`variant`,`default`),c=parseInt(this.attr(`rows`,`3`),10)||3,l=parseInt(this.attr(`maxrows`,`10`),10)||10,u=this.boolAttr(`autoresize`),d=this.attr(`maxlength`,``),f=this.boolAttr(`showcount`),p=e.length>0,m=a.length>0,h=d&&d.length>0,g=e.length,_=h?parseInt(d,10):0,v={sm:`size-sm`,md:`size-md`,lg:`size-lg`}[o]||`size-md`,y={default:`variant-default`,filled:`variant-filled`,outlined:`variant-outlined`}[s]||`variant-default`,b=n?`is-disabled`:``,x=m?`has-error`:``,S=this._focused?`is-focused`:``,C=p||this._focused?`is-filled`:``,w=o===`sm`?20:o===`lg`?28:24,T=o===`sm`?24:o===`lg`?40:32,E=c*w+T;return`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .textarea-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* ---- Variants ---- */
        .variant-default .textarea-field {
          background: var(--fm-color-surface);
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-default .textarea-field:hover:not(:disabled) {
          border-color: var(--fm-color-border);
        }
        .variant-default.is-focused .textarea-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-default.has-error .textarea-field {
          border-color: var(--fm-color-error);
        }
        .variant-default.has-error.is-focused .textarea-field {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }

        .variant-filled .textarea-field {
          background: var(--fm-color-surface-muted);
          border: 1.5px solid transparent;
          border-radius: var(--fm-radius-md);
        }
        .variant-filled .textarea-field:hover:not(:disabled) {
          background: var(--fm-color-surface-alt);
        }
        .variant-filled.is-focused .textarea-field {
          background: var(--fm-color-surface);
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-filled.has-error .textarea-field {
          border-color: var(--fm-color-error);
        }

        .variant-outlined .textarea-field {
          background: transparent;
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-outlined .textarea-field:hover:not(:disabled) {
          border-color: var(--fm-color-primary-light);
        }
        .variant-outlined.is-focused .textarea-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-outlined.has-error .textarea-field {
          border-color: var(--fm-color-error);
        }

        /* ---- Sizes ---- */
        .textarea-field {
          width: 100%;
          min-height: ${E}px;
          max-height: ${u?l*w+T+`px`:`none`};
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-normal);
          color: var(--fm-color-text);
          transition: all var(--fm-transition-fast);
          outline: none;
          resize: vertical;
          line-height: 1.5;
        }
        .textarea-field::placeholder {
          color: var(--fm-color-text-secondary);
          opacity: 0.6;
        }
        .textarea-field:disabled {
          background: var(--fm-color-surface-muted);
          cursor: not-allowed;
          opacity: 0.6;
          resize: none;
        }

        .size-sm .textarea-field {
          padding: var(--fm-space-sm) var(--fm-space-sm);
          font-size: var(--fm-font-size-sm);
          min-height: ${Math.max(E,60)}px;
        }

        .size-md .textarea-field {
          padding: var(--fm-space-md);
          font-size: var(--fm-font-size-md);
          min-height: ${Math.max(E,76)}px;
        }

        .size-lg .textarea-field {
          padding: var(--fm-space-lg);
          font-size: var(--fm-font-size-lg);
          min-height: ${Math.max(E,92)}px;
        }

        /* ---- Error Message ---- */
        .error-message {
          display: flex;
          align-items: center;
          gap: var(--fm-space-xs);
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-error);
          font-weight: var(--fm-font-weight-medium);
        }
        .error-message svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* ---- Character Count ---- */
        .char-count {
          display: flex;
          justify-content: flex-end;
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-text-secondary);
        }
        .char-count.has-error {
          color: var(--fm-color-error);
        }
        .char-count.is-near-limit {
          color: var(--fm-color-warning);
        }

        /* ---- Helper Text ---- */
        .helper-text {
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-text-secondary);
        }
        .helper-text.has-error {
          display: none;
        }
      </style>

      <div class="textarea-wrapper ${v} ${y} ${b} ${x} ${S} ${C}">
        <textarea
          class="textarea-field"
          part="textarea"
          rows="${c}"
          placeholder="${t}"
          ${n?`disabled`:``}
          ${r?`readonly`:``}
          ${i?`required`:``}
          ${h?`maxlength="${d}"`:``}
          aria-invalid="${m?`true`:`false`}"
          aria-describedby="${m?`error-msg`:``}"
        >${e}</textarea>
        ${f&&h?`
          <div class="char-count ${g>_*.9?`is-near-limit`:``} ${m?`has-error`:``}" part="count">
            ${g}/${_}
          </div>
        `:``}
        ${m?`
          <div class="error-message" id="error-msg" part="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
            ${a}
          </div>
        `:f?``:`
          <slot name="helper">
            <div class="helper-text" part="helper">
              <slot name="helper-text"></slot>
            </div>
          </slot>
        `}
      </div>
    `}onEnter(){let e=this.root.querySelector(`.textarea-wrapper`);e&&$(e,{opacity:[0,1],y:[8,0]},{type:`spring`,stiffness:400,damping:30})}connectedCallback(){super.connectedCallback(),this._focused=!1,this._bindEvents()}_bindEvents(){let e=this.root.querySelector(`.textarea-field`);e&&(e.addEventListener(`input`,t=>{let n=t.target.value,r=this.root.querySelector(`.textarea-wrapper`);r&&(n.length>0?r.classList.add(`is-filled`):r.classList.remove(`is-filled`)),this.boolAttr(`autoresize`)&&this._autoResize(e),this.boolAttr(`showcount`)&&this._updateCharCount(n.length),this.dispatchEvent(new CustomEvent(`input`,{detail:{value:n},bubbles:!0,composed:!0}))}),e.addEventListener(`focus`,()=>{this._focused=!0;let e=this.root.querySelector(`.textarea-wrapper`);e&&e.classList.add(`is-focused`),this.dispatchEvent(new CustomEvent(`focus`,{bubbles:!0,composed:!0}))}),e.addEventListener(`blur`,()=>{this._focused=!1;let t=this.root.querySelector(`.textarea-wrapper`);t&&t.classList.remove(`is-focused`),this.dispatchEvent(new CustomEvent(`blur`,{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e.value},bubbles:!0,composed:!0}))}))}_autoResize(e){e.style.height=`auto`;let t=parseInt(getComputedStyle(e).lineHeight,10)||24,n=parseInt(getComputedStyle(e).paddingTop,10)+parseInt(getComputedStyle(e).paddingBottom,10),r=(parseInt(this.attr(`maxrows`,`10`),10)||10)*t+n,i=Math.min(e.scrollHeight,r);e.style.height=`${i}px`,e.style.resize=e.scrollHeight>r?`vertical`:`none`}_updateCharCount(e){let t=this.root.querySelector(`.char-count`);if(!t)return;let n=parseInt(this.attr(`maxlength`,`0`),10)||0,r=n>0&&e>n*.9;t.textContent=`${e}/${n}`,r?t.classList.add(`is-near-limit`):t.classList.remove(`is-near-limit`)}attributeChangedCallback(e,t,n){if(t!==n)if(e===`value`){let e=this.root.querySelector(`.textarea-field`);if(e&&e.value!==n){e.value=n??``;let t=this.root.querySelector(`.textarea-wrapper`);t&&(n&&n.length>0?t.classList.add(`is-filled`):t.classList.remove(`is-filled`)),this.boolAttr(`autoresize`)&&this._autoResize(e),this.boolAttr(`showcount`)&&this._updateCharCount((n??``).length)}}else if(e===`error`){let e=this.root.querySelector(`.textarea-wrapper`);e&&(n&&n.length>0?(e.classList.add(`has-error`),$(e,{x:[0,-4,4,-4,4,0]},{duration:.4,ease:`easeInOut`})):e.classList.remove(`has-error`)),this.render(),this._bindEvents()}else this.render(),this._bindEvents()}focus(){let e=this.root.querySelector(`.textarea-field`);e&&e.focus()}blur(){let e=this.root.querySelector(`.textarea-field`);e&&e.blur()}clear(){this.setAttribute(`value`,``);let e=this.root.querySelector(`.textarea-field`);e&&(e.value=``,e.style.height=`auto`);let t=this.root.querySelector(`.textarea-wrapper`);t&&t.classList.remove(`is-filled`),this.boolAttr(`showcount`)&&this._updateCharCount(0)}insertText(e){let t=this.root.querySelector(`.textarea-field`);if(!t)return;let n=t.selectionStart,r=t.selectionEnd,i=t.value,a=i.substring(0,n)+e+i.substring(r);this.value=a,setTimeout(()=>{t.selectionStart=t.selectionEnd=n+e.length},0)}get value(){return this.attr(`value`,``)}set value(e){this.setAttribute(`value`,e)}};a(io,`observedAttributes`,[`value`,`placeholder`,`disabled`,`readonly`,`required`,`error`,`size`,`variant`,`rows`,`maxrows`,`autoresize`,`maxlength`,`showcount`]),customElements.define(`fm-textarea`,io),e.FmAlert=qa,e.FmBadge=Wa,e.FmBreadcrumb=Ya,e.FmButton=s,e.FmCard=Ua,e.FmCheckbox=Ja,e.FmClipboard=Xa,e.FmDropdown=Za,e.FmDropdownItem=Qa,e.FmElement=o,e.FmInput=ro,e.FmPagination=$a,e.FmSparkline=to,e.FmTab=Ka,e.FmTabs=Ga,e.FmTextarea=io,e.FmTooltip=no,e.themeStyles=t});