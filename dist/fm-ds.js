//#region src/core/theme.js
var e = "\n  :host {\n    /* ---- Primary Teal Palette ---- */\n    --fm-color-primary: #0D9488;\n    --fm-color-primary-light: #14B8A6;\n    --fm-color-primary-dark: #0F766E;\n    --fm-color-primary-50: #F0FDFA;\n    --fm-color-primary-100: #CCFBF1;\n    --fm-color-primary-200: #99F6E4;\n\n    /* ---- Secondary & Accent ---- */\n    --fm-color-secondary: #1E293B;\n    --fm-color-secondary-light: #334155;\n    --fm-color-accent: #F59E0B;\n    --fm-color-accent-light: #FBBF24;\n\n    /* ---- Semantic ---- */\n    --fm-color-success: #059669;\n    --fm-color-warning: #D97706;\n    --fm-color-error: #DC2626;\n    --fm-color-info: #0284C7;\n\n    /* ---- Surfaces ---- */\n    --fm-color-surface: #FFFFFF;\n    --fm-color-surface-alt: #F8FAFC;\n    --fm-color-surface-muted: #F1F5F9;\n    --fm-color-text: #0F172A;\n    --fm-color-text-secondary: #475569;\n    --fm-color-text-light: #FFFFFF;\n    --fm-color-border: #E2E8F0;\n    --fm-color-border-strong: #CBD5E1;\n\n    /* ---- Alpha Colors ---- */\n    --fm-alpha-primary-10: rgba(13, 148, 136, 0.10);\n    --fm-alpha-primary-15: rgba(13, 148, 136, 0.15);\n    --fm-alpha-primary-20: rgba(13, 148, 136, 0.20);\n    --fm-alpha-secondary-10: rgba(30, 41, 59, 0.10);\n    --fm-alpha-accent-12: rgba(245, 158, 11, 0.12);\n\n    /* ---- Typography ---- */\n    --fm-font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;\n    --fm-font-size-xs: 0.75rem;\n    --fm-font-size-sm: 0.875rem;\n    --fm-font-size-md: 1rem;\n    --fm-font-size-lg: 1.125rem;\n    --fm-font-size-xl: 1.25rem;\n    --fm-font-size-2xl: 1.5rem;\n    --fm-font-weight-normal: 400;\n    --fm-font-weight-medium: 500;\n    --fm-font-weight-semibold: 600;\n    --fm-font-weight-bold: 700;\n    --fm-line-height: 1.5;\n    --fm-letter-spacing: -0.011em;\n\n    /* ---- Shape ---- */\n    --fm-radius-sm: 6px;\n    --fm-radius-md: 8px;\n    --fm-radius-lg: 12px;\n    --fm-radius-xl: 16px;\n    --fm-radius-full: 9999px;\n\n    /* ---- Spacing ---- */\n    --fm-space-xs: 4px;\n    --fm-space-sm: 8px;\n    --fm-space-md: 16px;\n    --fm-space-lg: 24px;\n    --fm-space-xl: 32px;\n    --fm-space-2xl: 48px;\n\n    /* ---- Shadows ---- */\n    --fm-shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.05);\n    --fm-shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04);\n    --fm-shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05);\n    --fm-shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04);\n    --fm-shadow-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06);\n\n    /* ---- Transitions ---- */\n    --fm-transition-fast: 150ms ease;\n    --fm-transition-normal: 250ms ease;\n    --fm-transition-slow: 400ms ease;\n\n    /* ---- Base Styles ---- */\n    font-family: var(--fm-font-family);\n    color: var(--fm-color-text);\n    line-height: var(--fm-line-height);\n    letter-spacing: var(--fm-letter-spacing);\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *, *::before, *::after {\n    box-sizing: inherit;\n  }\n";
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/typeof.js
function t(e) {
	"@babel/helpers - typeof";
	return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, t(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPrimitive.js
function n(e, n) {
	if (t(e) != "object" || !e) return e;
	var r = e[Symbol.toPrimitive];
	if (r !== void 0) {
		var i = r.call(e, n || "default");
		if (t(i) != "object") return i;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (n === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/toPropertyKey.js
function r(e) {
	var r = n(e, "string");
	return t(r) == "symbol" ? r : r + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.126.0/helpers/defineProperty.js
function i(e, t, n) {
	return (t = r(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region src/core/fm-element.js
var a = class extends HTMLElement {
	constructor() {
		super(), i(this, "root", void 0), i(this, "_entered", !1), this.root = this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		this.render(), this._entered || (this._entered = !0, this.onEnter());
	}
	disconnectedCallback() {}
	template() {
		return "";
	}
	render() {
		this.root.innerHTML = `<style>${e}</style>${this.template()}`;
	}
	onEnter() {}
	attr(e, t = "") {
		return this.getAttribute(e) ?? t;
	}
	boolAttr(e) {
		return this.hasAttribute(e);
	}
};
//#endregion
//#region node_modules/motion-utils/dist/es/array.mjs
function o(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function s(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/motion-utils/dist/es/clamp.mjs
var c = (e, t, n) => n > t ? t : n < e ? e : n, l = {}, u = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/is-object.mjs
function d(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var f = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/motion-utils/dist/es/memo.mjs
/* @__NO_SIDE_EFFECTS__ */
function p(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/motion-utils/dist/es/noop.mjs
var m = /* @__NO_SIDE_EFFECTS__ */ (e) => e, h = (e, t) => (n) => t(e(n)), g = (...e) => e.reduce(h), _ = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, v = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return o(this.subscriptions, e), () => s(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, y = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, b = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region node_modules/motion-utils/dist/es/velocity-per-second.mjs
function x(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/motion-utils/dist/es/wrap.mjs
var S = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
}, C = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, w = 1e-7, T = 12;
function E(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = C(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > w && ++s < T);
	return o;
}
function D(e, t, n, r) {
	if (e === t && n === r) return m;
	let i = (t) => E(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : C(i(e), t, r);
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var ee = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, te = (e) => (t) => 1 - e(1 - t), ne = /* @__PURE__ */ D(.33, 1.53, .69, .99), re = /* @__PURE__ */ te(ne), ie = /* @__PURE__ */ ee(re), ae = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * re(e) : .5 * (2 - 2 ** (-10 * (e - 1))), oe = (e) => 1 - Math.sin(Math.acos(e)), se = te(oe), ce = ee(oe), le = /* @__PURE__ */ D(.42, 0, 1, 1), ue = /* @__PURE__ */ D(0, 0, .58, 1), de = /* @__PURE__ */ D(.42, 0, .58, 1), fe = (e) => Array.isArray(e) && typeof e[0] != "number";
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function pe(e, t) {
	return fe(e) ? e[S(0, e.length, t)] : e;
}
//#endregion
//#region node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var me = (e) => Array.isArray(e) && typeof e[0] == "number", he = {
	linear: m,
	easeIn: le,
	easeInOut: de,
	easeOut: ue,
	circIn: oe,
	circInOut: ce,
	circOut: se,
	backIn: re,
	backInOut: ie,
	backOut: ne,
	anticipate: ae
}, ge = (e) => typeof e == "string", _e = (e) => {
	if (me(e)) {
		e.length;
		let [t, n, r, i] = e;
		return D(t, n, r, i);
	} else if (ge(e)) return he[e], `${e}`, he[e];
	return e;
}, ve = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], ye = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function be(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && ye.value && ye.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var xe = 40;
function Se(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = ve.reduce((e, n) => (e[n] = be(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: u, preUpdate: d, update: f, preRender: p, render: m, postRender: h } = o, g = () => {
		let a = l.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, xe), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), h.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
	}, _ = () => {
		n = !0, r = !0, i.isProcessing || e(g);
	};
	return {
		schedule: ve.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || _(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < ve.length; t++) o[ve[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: O, cancel: Ce, state: we, steps: Te } = /* @__PURE__ */ Se(typeof requestAnimationFrame < "u" ? requestAnimationFrame : m, !0), Ee;
function De() {
	Ee = void 0;
}
var k = {
	now: () => (Ee === void 0 && k.set(we.isProcessing || l.useManualTiming ? we.timestamp : performance.now()), Ee),
	set: (e) => {
		Ee = e, queueMicrotask(De);
	}
}, Oe = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, ke = (e) => (t) => typeof t == "string" && t.startsWith(e), Ae = /* @__PURE__ */ ke("--"), je = /* @__PURE__ */ ke("var(--"), Me = (e) => je(e) ? Ne.test(e.split("/*")[0].trim()) : !1, Ne = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Pe(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var A = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, j = {
	...A,
	transform: (e) => c(0, 1, e)
}, Fe = {
	...A,
	default: 1
}, M = (e) => Math.round(e * 1e5) / 1e5, Ie = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Le(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Re = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ze = (e, t) => (n) => !!(typeof n == "string" && Re.test(n) && n.startsWith(e) || t && !Le(n) && Object.prototype.hasOwnProperty.call(n, t)), Be = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Ie);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Ve = (e) => c(0, 255, e), He = {
	...A,
	transform: (e) => Math.round(Ve(e))
}, N = {
	test: /* @__PURE__ */ ze("rgb", "red"),
	parse: /* @__PURE__ */ Be("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + He.transform(e) + ", " + He.transform(t) + ", " + He.transform(n) + ", " + M(j.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function Ue(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var We = {
	test: /* @__PURE__ */ ze("#"),
	parse: Ue,
	transform: N.transform
}, P = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), F = /* @__PURE__ */ P("deg"), I = /* @__PURE__ */ P("%"), L = /* @__PURE__ */ P("px"), Ge = /* @__PURE__ */ P("vh"), Ke = /* @__PURE__ */ P("vw"), qe = {
	...I,
	parse: (e) => I.parse(e) / 100,
	transform: (e) => I.transform(e * 100)
}, R = {
	test: /* @__PURE__ */ ze("hsl", "hue"),
	parse: /* @__PURE__ */ Be("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + I.transform(M(t)) + ", " + I.transform(M(n)) + ", " + M(j.transform(r)) + ")"
}, z = {
	test: (e) => N.test(e) || We.test(e) || R.test(e),
	parse: (e) => N.test(e) ? N.parse(e) : R.test(e) ? R.parse(e) : We.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? N.transform(e) : R.transform(e),
	getAnimatableNone: (e) => {
		let t = z.parse(e);
		return t.alpha = 0, z.transform(t);
	}
}, Je = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Ye(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Ie)?.length || 0) + (e.match(Je)?.length || 0) > 0;
}
var Xe = "number", Ze = "color", Qe = "var", $e = "var(", et = "${}", tt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function B(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(tt, (e) => (z.test(e) ? (r.color.push(a), i.push(Ze), n.push(z.parse(e))) : e.startsWith($e) ? (r.var.push(a), i.push(Qe), n.push(e)) : (r.number.push(a), i.push(Xe), n.push(parseFloat(e))), ++a, et)).split(et),
		indexes: r,
		types: i
	};
}
function nt(e) {
	return B(e).values;
}
function rt({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Xe ? i += M(r[a]) : e === Ze ? i += z.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function it(e) {
	return rt(B(e));
}
var at = (e) => typeof e == "number" ? 0 : z.test(e) ? z.getAnimatableNone(e) : e, ot = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : at(e);
function st(e) {
	let t = B(e);
	return rt(t)(t.values.map((e, n) => ot(e, t.split[n])));
}
var V = {
	test: Ye,
	parse: nt,
	createTransformer: it,
	getAnimatableNone: st
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function ct(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function lt({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = ct(s, r, e + 1 / 3), a = ct(s, r, e), o = ct(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function ut(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var H = (e, t, n) => e + (t - e) * n, dt = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, ft = [
	We,
	N,
	R
], pt = (e) => ft.find((t) => t.test(e));
function mt(e) {
	let t = pt(e);
	if (`${e}`, !t) return !1;
	let n = t.parse(e);
	return t === R && (n = lt(n)), n;
}
var ht = (e, t) => {
	let n = mt(e), r = mt(t);
	if (!n || !r) return ut(e, t);
	let i = { ...n };
	return (e) => (i.red = dt(n.red, r.red, e), i.green = dt(n.green, r.green, e), i.blue = dt(n.blue, r.blue, e), i.alpha = H(n.alpha, r.alpha, e), N.transform(i));
}, gt = new Set(["none", "hidden"]);
function _t(e, t) {
	return gt.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function vt(e, t) {
	return (n) => H(e, t, n);
}
function yt(e) {
	return typeof e == "number" ? vt : typeof e == "string" ? Me(e) ? ut : z.test(e) ? ht : Ct : Array.isArray(e) ? bt : typeof e == "object" ? z.test(e) ? ht : xt : ut;
}
function bt(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => yt(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function xt(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = yt(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function St(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var Ct = (e, t) => {
	let n = V.createTransformer(t), r = B(e), i = B(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? gt.has(e) && !i.values.length || gt.has(t) && !r.values.length ? _t(e, t) : g(bt(St(r, i), i.values), n) : (`${e}${t}`, ut(e, t));
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function wt(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : yt(e)(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Tt = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => O.update(t, e),
		stop: () => Ce(t),
		now: () => we.isProcessing ? we.timestamp : k.now()
	};
}, Et = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Dt = 2e4;
function Ot(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function kt(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Ot(r), Dt);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ b(i)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var U = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function At(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var jt = 12;
function Mt(e, t, n) {
	let r = n;
	for (let n = 1; n < jt; n++) r -= e(r) / t(r);
	return r;
}
var Nt = .001;
function Pt({ duration: e = U.duration, bounce: t = U.bounce, velocity: n = U.velocity, mass: r = U.mass }) {
	let i, a;
	U.maxDuration;
	let o = 1 - t;
	o = c(U.minDamping, U.maxDamping, o), e = c(U.minDuration, U.maxDuration, /* @__PURE__ */ b(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = At(t, o), c = Math.exp(-i);
		return Nt - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = At(t ** 2, o);
		return (-i(t) + Nt > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => {
		let r = Math.exp(-t * e), i = (t - n) * e + 1;
		return -Nt + r * i;
	}, a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, l = Mt(i, a, s);
	if (e = /* @__PURE__ */ y(e), isNaN(l)) return {
		stiffness: U.stiffness,
		damping: U.damping,
		duration: e
	};
	{
		let t = l ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Ft = ["duration", "bounce"], It = [
	"stiffness",
	"damping",
	"mass"
];
function Lt(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Rt(e) {
	let t = {
		velocity: U.velocity,
		stiffness: U.stiffness,
		damping: U.damping,
		mass: U.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Lt(e, It) && Lt(e, Ft)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * c(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: U.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = Pt({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: U.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function W(e = U.visualDuration, t = U.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Rt({
		...n,
		velocity: -/* @__PURE__ */ b(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ b(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? U.restSpeed.granular : U.restSpeed.default, i ||= v ? U.restDelta.granular : U.restDelta.default;
	let x, S, C, w, T, E;
	if (h < 1) C = At(_, h), w = (m + h * _ * g) / C, x = (e) => o - Math.exp(-h * _ * e) * (w * Math.sin(C * e) + g * Math.cos(C * e)), T = h * _ * w + g * C, E = h * _ * g - w * C, S = (e) => Math.exp(-h * _ * e) * (T * Math.sin(C * e) + E * Math.cos(C * e));
	else if (h === 1) {
		x = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		S = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		x = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		S = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let D = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ y(S(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(C * e), a = Math.cos(C * e), c = o - t * (w * n + g * a), l = /* @__PURE__ */ y(t * (T * n + E * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = x(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ y(S(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Ot(D), Dt), t = Et((t) => D.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return D;
}
W.applyToOptions = (e) => {
	let t = kt(e, 100, W);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ y(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var zt = 5;
function Bt(e, t, n) {
	let r = Math.max(t - zt, 0);
	return x(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Vt({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = W({
			keyframes: [f.value, m(f.value)],
			velocity: Bt(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Ht(e, t, n) {
	let r = [], i = n || l.mix || wt, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = g(Array.isArray(t) ? t[n] || m : t, a)), r.push(a);
	}
	return r;
}
function Ut(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (t.length, a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Ht(t, r, i), l = s.length, u = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ _(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => u(c(e[0], e[a - 1], t)) : u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Wt(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ _(0, t, r);
		e.push(H(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Gt(e) {
	let t = [0];
	return Wt(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Kt(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function qt(e, t) {
	return e.map(() => t || de).splice(0, e.length - 1);
}
function G({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = fe(r) ? r.map(_e) : _e(r), a = {
		done: !1,
		value: t[0]
	}, o = Ut(Kt(n && n.length === t.length ? n : Gt(t), e), t, { ease: Array.isArray(i) ? i : qt(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Jt = (e) => e !== null;
function Yt(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Jt), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Xt = {
	decay: Vt,
	inertia: Vt,
	tween: G,
	keyframes: G,
	spring: W
};
function Zt(e) {
	typeof e.type == "string" && (e.type = Xt[e.type]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Qt = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, $t = (e) => e / 100, en = class extends Qt {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== k.now() && this.tick(k.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, Oe.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		Zt(e);
		let { type: t = G, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || G;
		s !== G && typeof o[0] != "number" && (this.mixKeyframes = g($t, wt(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Ot(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: l = 0, keyframes: u, repeat: d, repeatType: f, repeatDelay: p, type: m, onUpdate: h, finalKeyframe: g } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let _ = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), v = this.playbackSpeed >= 0 ? _ < 0 : _ > r;
		this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let y = this.currentTime, b = n;
		if (d) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, d + 1), t % 2 && (f === "reverse" ? (n = 1 - n, p && (n -= p / o)) : f === "mirror" && (b = a)), y = c(0, 1, n) * o;
		}
		let x;
		v ? (this.delayState.value = u[0], x = this.delayState) : x = b.next(y), i && !v && (x.value = i(x.value));
		let { done: S } = x;
		!v && s !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let C = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
		return C && m !== Vt && (x.value = Yt(u, this.options, g, this.speed)), h && h(x.value), C && this.finish(), x;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ b(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ b(e);
	}
	get time() {
		return /* @__PURE__ */ b(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ y(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Bt((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(k.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ b(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Tt, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(k.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Oe.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function tn(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var K = (e) => e * 180 / Math.PI, nn = (e) => an(K(Math.atan2(e[1], e[0]))), rn = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: nn,
	rotateZ: nn,
	skewX: (e) => K(Math.atan(e[1])),
	skewY: (e) => K(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, an = (e) => (e %= 360, e < 0 && (e += 360), e), on = nn, sn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), cn = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), ln = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: sn,
	scaleY: cn,
	scale: (e) => (sn(e) + cn(e)) / 2,
	rotateX: (e) => an(K(Math.atan2(e[6], e[5]))),
	rotateY: (e) => an(K(Math.atan2(-e[2], e[0]))),
	rotateZ: on,
	rotate: on,
	skewX: (e) => K(Math.atan(e[4])),
	skewY: (e) => K(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function un(e) {
	return +!!e.includes("scale");
}
function dn(e, t) {
	if (!e || e === "none") return un(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = ln, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = rn, i = t;
	}
	if (!i) return un(t);
	let a = r[t], o = i[1].split(",").map(pn);
	return typeof a == "function" ? a(o) : o[a];
}
var fn = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return dn(n, t);
};
function pn(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var q = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], J = new Set(q), mn = (e) => e === A || e === L, hn = new Set([
	"x",
	"y",
	"z"
]), gn = q.filter((e) => !hn.has(e));
function _n(e) {
	let t = [];
	return gn.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var Y = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => dn(t, "x"),
	y: (e, { transform: t }) => dn(t, "y")
};
Y.translateX = Y.x, Y.translateY = Y.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var X = /* @__PURE__ */ new Set(), vn = !1, yn = !1, bn = !1;
function xn() {
	if (yn) {
		let e = Array.from(X).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = _n(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	yn = !1, vn = !1, X.forEach((e) => e.complete(bn)), X.clear();
}
function Sn() {
	X.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (yn = !0);
	});
}
function Cn() {
	bn = !0, Sn(), xn(), bn = !1;
}
var wn = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (X.add(this), vn || (vn = !0, O.read(Sn), O.resolveKeyframes(xn))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		tn(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), X.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (X.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, Tn = (e) => e.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function En(e, t, n) {
	Tn(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Dn = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function On(e, t) {
	let n = /* @__PURE__ */ p(e);
	return () => Dn[t] ?? n();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var kn = /* @__PURE__ */ On(() => window.ScrollTimeline !== void 0, "scrollTimeline"), An = /* @__PURE__ */ On(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), jn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Mn = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ jn([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ jn([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ jn([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ jn([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Nn(e, t) {
	if (e) return typeof e == "function" ? An() ? Et(e, t) : "ease-out" : me(e) ? jn(e) : Array.isArray(e) ? e.map((e) => Nn(e, t) || Mn.easeOut) : Mn[e];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Pn(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Nn(s, i);
	Array.isArray(d) && (u.easing = d), ye.value && Oe.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return ye.value && p.finished.finally(() => {
		Oe.waapi--;
	}), p;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Fn(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function In({ type: e, ...t }) {
	return Fn(e) && An() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Ln = class extends Qt {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
		let c = In(e);
		this.animation = Pn(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Yt(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), En(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ b(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ b(e);
	}
	get time() {
		return /* @__PURE__ */ b(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ y(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && kn() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), m) : r(this);
	}
}, Rn = {
	anticipate: ae,
	backInOut: ie,
	circInOut: ce
};
function zn(e) {
	return e in Rn;
}
function Bn(e) {
	typeof e.ease == "string" && zn(e.ease) && (e.ease = Rn[e.ease]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Vn = 10, Hn = class extends Ln {
	constructor(e) {
		Bn(e), Zt(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new en({
			...a,
			autoplay: !1
		}), s = Math.max(Vn, k.now() - this.startTime), l = c(0, Vn, s - Vn), u = o.sample(s).value, { name: d } = this.options;
		i && d && En(i, d, u), t.setWithVelocity(o.sample(Math.max(0, s - l)).value, u, l), o.stop();
	}
}, Un = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (V.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Wn(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Gn(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Un(i, t), s = Un(a, t);
	return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : Wn(e) || (n === "spring" || Fn(n)) && r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Kn(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var qn = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Jn = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Yn(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && Jn.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Xn = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), Zn = /* @__PURE__ */ p(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Qn(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Zn() && n && (qn.has(n) || Xn.has(n) && Yn(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var $n = 40, er = class extends Qt {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = k.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || wn;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: u } = n;
		this.resolvedAt = k.now();
		let d = !0;
		Gn(e, i, a, o) || (d = !1, (l.instantAnimations || !s) && u?.(Yt(e, n, t)), e[0] = e[e.length - 1], Kn(n), n.repeat = 0);
		let f = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > $n ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, p = d && !c && Qn(f), h = f.motionValue?.owner?.current, g;
		if (p) try {
			g = new Hn({
				...f,
				element: h
			});
		} catch {
			g = new en(f);
		}
		else g = new en(f);
		g.finished.then(() => {
			this.notifyFinished();
		}).catch(m), this.pendingTimeline &&= (this.stopTimeline = g.attachTimeline(this.pendingTimeline), void 0), this._animation = g;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), Cn()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, tr = class {
	constructor(e) {
		this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((e) => e.finished));
	}
	getAll(e) {
		return this.animations[0][e];
	}
	setAll(e, t) {
		for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
	}
	attachTimeline(e) {
		let t = this.animations.map((t) => t.attachTimeline(e));
		return () => {
			t.forEach((e, t) => {
				e && e(), this.animations[t].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(e) {
		this.setAll("time", e);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(e) {
		this.setAll("speed", e);
	}
	get state() {
		return this.getAll("state");
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		return nr(this.animations, "duration");
	}
	get iterationDuration() {
		return nr(this.animations, "iterationDuration");
	}
	runAll(e) {
		this.animations.forEach((t) => t[e]());
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
};
function nr(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var rr = class extends tr {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
}, ir = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ar(e) {
	let t = ir.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function or(e, t, n = 1) {
	`${e}`;
	let [r, i] = ar(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return u(e) ? parseFloat(e) : e;
	}
	return Me(i) ? or(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var sr = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, cr = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), lr = {
	type: "keyframes",
	duration: .8
}, ur = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, dr = (e, { keyframes: t }) => t.length > 2 ? lr : J.has(e) ? e.startsWith("scale") ? cr(t[1]) : sr : ur;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function fr(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function pr(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : fr(n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var mr = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function hr(e) {
	for (let t in e) if (!mr.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var gr = (e, t, n, r = {}, i, a) => (o) => {
	let s = pr(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: u = 0 } = r;
	u -= /* @__PURE__ */ y(c);
	let d = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -u,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	hr(s) || Object.assign(d, dr(e, d)), d.duration &&= /* @__PURE__ */ y(d.duration), d.repeatDelay &&= /* @__PURE__ */ y(d.repeatDelay), d.from !== void 0 && (d.keyframes[0] = d.from);
	let f = !1;
	if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (Kn(d), d.delay === 0 && (f = !0)), (l.instantAnimations || l.skipAnimations || i?.shouldSkipAnimations) && (f = !0, Kn(d), d.delay = 0), d.allowFlatten = !s.type && !s.ease, f && !a && t.get() !== void 0) {
		let e = Yt(d.keyframes, s);
		if (e !== void 0) {
			O.update(() => {
				d.onUpdate(e), d.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new en(d) : new er(d);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function _r(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function vr(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = _r(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = _r(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function yr(e, t, n) {
	let r = e.getProps();
	return vr(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var br = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...q
]), xr = 30, Sr = (e) => !isNaN(parseFloat(e)), Cr = { current: void 0 }, wr = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = k.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = k.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Sr(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new v());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), O.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return Cr.current && Cr.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = k.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > xr) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, xr);
		return x(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function Z(e, t) {
	return new wr(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Tr = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
function Er(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Z(n));
}
function Dr(e) {
	return Tr(e) ? e[e.length - 1] || 0 : e;
}
function Or(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = yr(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Er(e, t, Dr(i[t]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var Q = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function kr(e) {
	return !!(Q(e) && e.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Ar(e, t) {
	let n = e.getValue("willChange");
	if (kr(n)) return n.add(t);
	if (!n && l.WillChange) {
		let n = new l.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function jr(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Mr = "data-" + jr("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Nr(e) {
	return e.props[Mr];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Pr({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Fr(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? fr(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && Pr(d, t)) continue;
		let o = {
			delay: n,
			...pr(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			O.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = Nr(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, O);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		Ar(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(gr(t, r, i, p && br.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => O.update(() => {
			o && Or(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
var Ir = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Lr = (e) => (t) => t.test(e), Rr = [
	A,
	L,
	I,
	F,
	Ke,
	Ge,
	Ir
], zr = (e) => Rr.find(Lr(e));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Br(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || f(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var Vr = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Hr(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Ie) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!Vr.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Ur = /\b([a-z-]*)\(.*?\)/gu, Wr = {
	...V,
	getAnimatableNone: (e) => {
		let t = e.match(Ur);
		return t ? t.map(Hr).join(" ") : e;
	}
}, Gr = {
	...V,
	getAnimatableNone: (e) => {
		let t = V.parse(e);
		return V.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, Kr = {
	...A,
	transform: Math.round
}, qr = {
	borderWidth: L,
	borderTopWidth: L,
	borderRightWidth: L,
	borderBottomWidth: L,
	borderLeftWidth: L,
	borderRadius: L,
	borderTopLeftRadius: L,
	borderTopRightRadius: L,
	borderBottomRightRadius: L,
	borderBottomLeftRadius: L,
	width: L,
	maxWidth: L,
	height: L,
	maxHeight: L,
	top: L,
	right: L,
	bottom: L,
	left: L,
	inset: L,
	insetBlock: L,
	insetBlockStart: L,
	insetBlockEnd: L,
	insetInline: L,
	insetInlineStart: L,
	insetInlineEnd: L,
	padding: L,
	paddingTop: L,
	paddingRight: L,
	paddingBottom: L,
	paddingLeft: L,
	paddingBlock: L,
	paddingBlockStart: L,
	paddingBlockEnd: L,
	paddingInline: L,
	paddingInlineStart: L,
	paddingInlineEnd: L,
	margin: L,
	marginTop: L,
	marginRight: L,
	marginBottom: L,
	marginLeft: L,
	marginBlock: L,
	marginBlockStart: L,
	marginBlockEnd: L,
	marginInline: L,
	marginInlineStart: L,
	marginInlineEnd: L,
	fontSize: L,
	backgroundPositionX: L,
	backgroundPositionY: L,
	rotate: F,
	rotateX: F,
	rotateY: F,
	rotateZ: F,
	scale: Fe,
	scaleX: Fe,
	scaleY: Fe,
	scaleZ: Fe,
	skew: F,
	skewX: F,
	skewY: F,
	distance: L,
	translateX: L,
	translateY: L,
	translateZ: L,
	x: L,
	y: L,
	z: L,
	perspective: L,
	transformPerspective: L,
	opacity: j,
	originX: qe,
	originY: qe,
	originZ: L,
	zIndex: Kr,
	fillOpacity: j,
	strokeOpacity: j,
	numOctaves: Kr
}, Jr = {
	...qr,
	color: z,
	backgroundColor: z,
	outlineColor: z,
	fill: z,
	stroke: z,
	borderColor: z,
	borderTopColor: z,
	borderRightColor: z,
	borderBottomColor: z,
	borderLeftColor: z,
	filter: Wr,
	WebkitFilter: Wr,
	mask: Gr,
	WebkitMask: Gr
}, Yr = (e) => Jr[e], Xr = /* @__PURE__ */ new Set([Wr, Gr]);
function Zr(e, t) {
	let n = Yr(e);
	return Xr.has(n) || (n = V), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Qr = new Set([
	"auto",
	"none",
	"0"
]);
function $r(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Qr.has(t) && B(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Zr(n, i);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var ei = class extends wn {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), Me(r))) {
				let i = or(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !br.has(n) || e.length !== 2) return;
		let [r, i] = e, a = zr(r), o = zr(i);
		if (Pe(r) !== Pe(i) && Y[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (mn(a) && mn(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else Y[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Br(e[t])) && n.push(t);
		n.length && $r(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Y[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = Y[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ti(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var ni = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function ri(e) {
	return d(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: ii, cancel: ai } = /* @__PURE__ */ Se(queueMicrotask, !1), oi = {
	x: !1,
	y: !1
};
function si() {
	return oi.x || oi.y;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function ci(e, t) {
	let n = ti(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/hover.mjs
function li(e) {
	return !(e.pointerType === "touch" || si());
}
function ui(e, t, n = {}) {
	let [r, i, a] = ci(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!li(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var di = (e, t) => t ? e === t ? !0 : di(e, t.parentElement) : !1, fi = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, pi = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function mi(e) {
	return pi.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var hi = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function gi(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function _i(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var vi = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = gi(() => {
		if (hi.has(n)) return;
		_i(n, "down");
		let e = gi(() => {
			_i(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => _i(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/press/index.mjs
function yi(e) {
	return fi(e) && !si();
}
var bi = /* @__PURE__ */ new WeakSet();
function xi(e, t, n = {}) {
	let [r, i, a] = ci(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!yi(e) || bi.has(e)) return;
		hi.add(r), n.stopPropagation && bi.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), hi.has(r) && hi.delete(r), yi(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || di(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), ri(e) && (e.addEventListener("focus", (e) => vi(e, i)), !mi(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Si(e) {
	return d(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function Ci(e) {
	return Si(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var wi = [
	...Rr,
	z,
	V
], Ti = (e) => wi.find(Lr(e)), Ei = () => ({
	min: 0,
	max: 0
}), Di = () => ({
	x: Ei(),
	y: Ei()
}), Oi = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function ki(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function Ai(e) {
	return typeof e == "string" || Array.isArray(e);
}
var ji = ["initial", ...[
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
]];
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function Mi(e) {
	return ki(e.animate) || ji.some((t) => Ai(e[t]));
}
function Ni(e) {
	return !!(Mi(e) || e.variants);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function Pi(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (Q(i)) e.addValue(r, i);
		else if (Q(a)) e.addValue(r, Z(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Z(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var Fi = { current: null }, Ii = { current: !1 }, Li = typeof window < "u";
function Ri() {
	if (Ii.current = !0, Li) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Fi.current = e.matches;
		e.addEventListener("change", t), t();
	} else Fi.current = !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/VisualElement.mjs
var zi = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Bi = {}, Vi = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = wn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = k.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, O.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Mi(t), this.isVariantNode = Ni(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && Q(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, Oi.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Ii.current || Ri(), this.shouldReduceMotion = Fi.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), Ce(this.notifyUpdate), Ce(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && qn.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Ln({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ y(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = J.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && O.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Bi) {
			let t = Bi[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Di();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < zi.length; t++) {
			let n = zi[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Pi(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Z(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (u(n) || f(n)) ? n = parseFloat(n) : !Ti(n) && V.test(t) && (n = Zr(e, t)), this.setBaseTarget(e, Q(n) ? n.get() : n)), Q(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = vr(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !Q(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new v()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		ii.render(this.render);
	}
}, Hi = class extends Vi {
	constructor() {
		super(...arguments), this.KeyframeResolver = ei;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		Q(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Ui({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Wi(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Gi(e, t) {
	return Ui(Wi(e.getBoundingClientRect(), t));
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var Ki = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, qi = q.length;
function Ji(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < qi; a++) {
		let o = q[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ni(s, qr[o]);
			if (!c) {
				i = !1;
				let t = Ki[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function Yi(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (J.has(e)) {
			o = !0;
			continue;
		} else if (Ae(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ni(n, qr[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Ji(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Xi(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function Zi(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Qi = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (L.test(e)) e = parseFloat(e);
	else return e;
	return `${Zi(e, t.target.x)}% ${Zi(e, t.target.y)}%`;
} }, $i = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = V.parse(e);
	if (i.length > 5) return r;
	let a = V.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = H(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, ea = {
	borderRadius: {
		...Qi,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Qi,
	borderTopRightRadius: Qi,
	borderBottomLeftRadius: Qi,
	borderBottomRightRadius: Qi,
	boxShadow: $i
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function ta(e, { layout: t, layoutId: n }) {
	return J.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ea[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function na(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (Q(r[t]) || i && Q(i[t]) || ta(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function ra(e) {
	return window.getComputedStyle(e);
}
var ia = class extends Hi {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Xi;
	}
	readValueFromInstance(e, t) {
		if (J.has(t)) return this.projection?.isProjecting ? un(t) : fn(e, t);
		{
			let n = ra(e), r = (Ae(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Gi(e, t);
	}
	build(e, t, n) {
		Yi(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return na(e, t, n);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function aa(e, t) {
	return e in t;
}
var oa = class extends Vi {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (aa(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return Di();
	}
	build(e, t) {
		Object.assign(e.output, t);
	}
	renderInstance(e, { output: t }) {
		Object.assign(e, t);
	}
	sortInstanceNodePosition() {
		return 0;
	}
}, sa = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, ca = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function la(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? sa : ca;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var ua = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function da(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Yi(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of ua) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && la(d, i, a, o, !1);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var fa = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), pa = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function ma(e, t, n, r) {
	Xi(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(fa.has(n) ? n : jr(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function ha(e, t, n) {
	let r = na(e, t, n);
	for (let n in e) if (Q(e[n]) || Q(t[n])) {
		let t = q.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var ga = class extends Hi {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Di;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (J.has(t)) {
			let e = Yr(t);
			return e && e.default || 0;
		}
		return t = fa.has(t) ? t : jr(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return ha(e, t, n);
	}
	build(e, t, n) {
		da(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		ma(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = pa(e.tagName), super.mount(e);
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function _a(e, t, n) {
	let r = Q(e) ? e : Z(e);
	return r.start(gr("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function va(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function ya(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && va(t) ? ti(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function ba(e, t, n) {
	return e * (t + 1);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function xa(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ?? e;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function Sa(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.at > t && i.at < n && (s(e, i), r--);
	}
}
function Ca(e, t, n, r, i, a) {
	Sa(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: H(i, a, r[o]),
		easing: pe(n, o)
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function wa(e, t) {
	for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function Ta(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var Ea = "easeInOut";
function Da(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
	let a = t.duration || .3, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {}, l = /* @__PURE__ */ new Map(), u = 0, d = 0, f = 0;
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		if (typeof o == "string") {
			l.set(o, d);
			continue;
		} else if (!Array.isArray(o)) {
			l.set(o.name, xa(d, o.at, u, l));
			continue;
		}
		let [p, m, h = {}] = o;
		h.at !== void 0 && (d = xa(d, h.at, u, l));
		let g = 0, _ = (e, n, r, o = 0, s = 0) => {
			let c = Aa(e), { delay: l = 0, times: u = Gt(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: b = t.ease || "easeOut", duration: x } = n, S = typeof l == "function" ? l(o, s) : l, C = c.length, w = Fn(p) ? p : i?.[p || "keyframes"];
			if (C <= 2 && w) {
				let e = 100;
				if (C === 2 && Na(c)) {
					let t = c[1] - c[0];
					e = Math.abs(t);
				}
				let n = {
					...t,
					...v
				};
				x !== void 0 && (n.duration = /* @__PURE__ */ y(x));
				let r = kt(n, e, w);
				b = r.ease, x = r.duration;
			}
			x ??= a;
			let T = d + S;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let E = u.length - c.length;
			if (E > 0 && Wt(u, E), c.length === 1 && c.unshift(null), m) {
				x = ba(x, m);
				let e = [...c], t = [...u];
				b = Array.isArray(b) ? [...b] : [b];
				let n = [...b];
				for (let r = 0; r < m; r++) {
					c.push(...e);
					for (let i = 0; i < e.length; i++) u.push(t[i] + (r + 1)), b.push(i === 0 ? "linear" : pe(n, i - 1));
				}
				wa(u, m);
			}
			let D = T + x;
			Ca(r, c, b, u, T, D), g = Math.max(S + x, g), f = Math.max(D, f);
		};
		if (Q(p)) {
			let e = Oa(p, s);
			_(m, h, ka("default", e));
		} else {
			let e = ya(p, m, r, c), t = e.length;
			for (let n = 0; n < t; n++) {
				m = m, h = h;
				let r = e[n], i = Oa(r, s);
				for (let e in m) _(m[e], ja(h, e), ka(e, i), n, t);
			}
		}
		u = d, d += g;
	}
	return s.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(Ta);
			let s = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				s.push(n), c.push(/* @__PURE__ */ _(0, f, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(Ea)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
				keyframes: {},
				transition: {}
			});
			let u = o.get(r);
			u.keyframes[i] = s;
			let { type: d, ...p } = t;
			u.transition[i] = {
				...p,
				duration: f,
				ease: l,
				times: c,
				...n
			};
		}
	}), o;
}
function Oa(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function ka(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function Aa(e) {
	return Array.isArray(e) ? e : [e];
}
function ja(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var Ma = (e) => typeof e == "number", Na = (e) => e.every(Ma);
//#endregion
//#region node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function Pa(e) {
	let t = {
		presenceContext: null,
		props: {},
		visualState: {
			renderState: {
				transform: {},
				transformOrigin: {},
				style: {},
				vars: {},
				attrs: {}
			},
			latestValues: {}
		}
	}, n = Si(e) && !Ci(e) ? new ga(t) : new ia(t);
	n.mount(e), Oi.set(e, n);
}
function Fa(e) {
	let t = new oa({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	t.mount(e), Oi.set(e, t);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function Ia(e, t) {
	return Q(e) || typeof e == "number" || typeof e == "string" && !va(t);
}
function La(e, t, n, r) {
	let i = [];
	if (Ia(e, t)) i.push(_a(e, va(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = ya(e, t, r), o = a.length;
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? Pa : Fa;
			Oi.has(r) || s(r);
			let c = Oi.get(r), l = { ...n };
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...Fr(c, {
				...t,
				transition: l
			}, {}));
		}
	}
	return i;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function Ra(e, t, n) {
	let r = [];
	return Da(e.map((e) => {
		if (Array.isArray(e) && typeof e[0] == "function") {
			let t = e[0], n = Z(0);
			return n.on("change", t), e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [
				n,
				[0, 1],
				e[1]
			] : [
				n,
				e[1],
				e[2]
			];
		}
		return e;
	}), t, n, { spring: W }).forEach(({ keyframes: e, transition: t }, n) => {
		r.push(...La(n, e, t));
	}), r;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/index.mjs
function za(e) {
	return Array.isArray(e) && e.some(Array.isArray);
}
function Ba(e = {}) {
	let { scope: t, reduceMotion: n } = e;
	function r(e, r, i) {
		let a = [], o;
		if (za(e)) {
			let { onComplete: i, ...s } = r || {};
			typeof i == "function" && (o = i), a = Ra(e, n === void 0 ? s : {
				reduceMotion: n,
				...s
			}, t);
		} else {
			let { onComplete: s, ...c } = i || {};
			typeof s == "function" && (o = s), a = La(e, r, n === void 0 ? c : {
				reduceMotion: n,
				...c
			}, t);
		}
		let c = new rr(a);
		return o && c.finished.then(o), t && (t.animations.push(c), c.finished.then(() => {
			s(t.animations, c);
		})), c;
	}
	return r;
}
var $ = Ba(), Va = class extends a {
	template() {
		return `
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
        class="${this.attr("variant", "primary")} ${this.attr("size", "md")}"
        ${this.boolAttr("disabled") ? "disabled" : ""}
        part="button"
      >
        <slot></slot>
      </button>
    `;
	}
	onEnter() {
		$(this.root.querySelector("button"), {
			opacity: [0, 1],
			y: [6, 0]
		}, {
			type: "spring",
			stiffness: 350,
			damping: 25
		});
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents();
	}
	_bindEvents() {
		let e = this.root.querySelector("button");
		e && (ui(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, {
			scale: 1.03,
			y: -1
		}, {
			type: "spring",
			stiffness: 450,
			damping: 20
		}), () => {
			$(e, {
				scale: 1,
				y: 0
			}, {
				type: "spring",
				stiffness: 450,
				damping: 20
			});
		})), xi(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, { scale: .96 }, {
			type: "spring",
			stiffness: 500,
			damping: 22
		}), () => {
			$(e, { scale: 1.03 }, {
				type: "spring",
				stiffness: 450,
				damping: 18
			});
		})));
	}
	attributeChangedCallback() {
		this.render(), this._bindEvents();
	}
};
i(Va, "observedAttributes", [
	"variant",
	"size",
	"disabled"
]), customElements.define("fm-button", Va);
//#endregion
//#region src/components/fm-card.js
var Ha = class extends a {
	template() {
		return `
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

      <div class="card ${this.attr("variant", "default")} ${this.boolAttr("hoverable") ? "hoverable" : ""}" part="card">
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
    `;
	}
	onEnter() {
		$(this.root.querySelector(".card"), {
			opacity: [0, 1],
			y: [12, 0]
		}, {
			type: "spring",
			stiffness: 280,
			damping: 24
		});
	}
	connectedCallback() {
		super.connectedCallback(), this._bindHoverEvents();
	}
	_bindHoverEvents() {
		if (!this.boolAttr("hoverable")) return;
		let e = this.root.querySelector(".card");
		e && ui(e, (e) => ($(e, {
			y: -3,
			scale: 1.01
		}, {
			type: "spring",
			stiffness: 400,
			damping: 22
		}), () => {
			$(e, {
				y: 0,
				scale: 1
			}, {
				type: "spring",
				stiffness: 400,
				damping: 22
			});
		}));
	}
	attributeChangedCallback() {
		this.render(), this._bindHoverEvents();
	}
};
i(Ha, "observedAttributes", ["variant", "hoverable"]), customElements.define("fm-card", Ha);
//#endregion
//#region src/components/fm-badge.js
var Ua = class extends a {
	template() {
		return `
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

      <span class="badge ${this.attr("variant", "primary")} ${this.attr("size", "md")}" part="badge">
        ${this.boolAttr("dot") ? "<span class=\"dot\"></span>" : ""}
        <slot></slot>
      </span>
    `;
	}
	onEnter() {
		let e = this.root.querySelector(".badge"), t = this.attr("animate", "none");
		$(e, {
			scale: [0, 1],
			opacity: [0, 1]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 22
		}), t === "pulse" && this._startPulse(e);
	}
	_startPulse(e) {
		let t = () => {
			this._pulseAnim = $(e, { scale: [
				1,
				1.06,
				1
			] }, {
				duration: 1.8,
				ease: "ease-in-out"
			}), this._pulseAnim.finished.then(() => {
				this.isConnected && t();
			});
		};
		t();
	}
	disconnectedCallback() {
		this._pulseAnim && this._pulseAnim.cancel();
	}
	attributeChangedCallback() {
		this.render();
	}
};
i(Ua, "observedAttributes", [
	"variant",
	"size",
	"dot",
	"animate"
]), customElements.define("fm-badge", Ua);
//#endregion
//#region src/components/fm-tabs.js
var Wa = class extends a {
	template() {
		let e = parseInt(this.attr("active", "0"), 10);
		return `
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

      <div class="tab-header ${this.attr("variant", "default")}" role="tablist" part="header">
        ${Array.from(this.children).filter((e) => e.tagName === "FM-TAB").map((t, n) => `
        <button
          class="tab-btn ${n === e ? "active" : ""}"
          data-index="${n}"
          role="tab"
          aria-selected="${n === e}"
        >
          ${t.getAttribute("label") || `Tab ${n + 1}`}
        </button>`).join("")}
      </div>
      <div class="tab-panel" role="tabpanel" part="panel">
        <slot></slot>
      </div>
    `;
	}
	connectedCallback() {
		super.connectedCallback(), this._updatePanels(), this._bindEvents(), requestAnimationFrame(() => {
			this._updatePanels();
		});
	}
	onEnter() {
		$(this.root.querySelector(".tab-header"), {
			opacity: [0, 1],
			y: [-8, 0]
		}, {
			type: "spring",
			stiffness: 300,
			damping: 20
		});
	}
	_updatePanels() {
		let e = parseInt(this.attr("active", "0"), 10);
		Array.from(this.children).filter((e) => e.tagName === "FM-TAB").forEach((t, n) => {
			t.style.display = n === e ? "block" : "none";
		});
	}
	_bindEvents() {
		this.root.querySelectorAll(".tab-btn").forEach((e) => {
			e.addEventListener("click", () => {
				let t = parseInt(e.dataset.index || "0", 10);
				this.setAttribute("active", String(t));
			});
		});
	}
	attributeChangedCallback(e) {
		if (this.render(), this._updatePanels(), this._bindEvents(), e === "active") {
			let e = parseInt(this.attr("active", "0"), 10), t = Array.from(this.children).filter((e) => e.tagName === "FM-TAB")[e]?.getAttribute("label") || "";
			$(this.root.querySelector(".tab-panel"), { opacity: [0, 1] }, { duration: .25 }), this.dispatchEvent(new CustomEvent("fm-tab-change", {
				bubbles: !0,
				detail: {
					index: e,
					label: t
				}
			}));
		}
	}
};
i(Wa, "observedAttributes", ["active", "variant"]);
var Ga = class extends HTMLElement {
	connectedCallback() {
		requestAnimationFrame(() => {
			this.style.display || (this.style.display = "none");
		});
	}
};
customElements.define("fm-tabs", Wa), customElements.define("fm-tab", Ga);
//#endregion
export { Ua as FmBadge, Va as FmButton, Ha as FmCard, a as FmElement, Ga as FmTab, Wa as FmTabs, e as themeStyles };
