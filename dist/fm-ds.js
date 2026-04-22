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
}, Ie = (e) => Math.round(e * 1e5) / 1e5, Le = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Re(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var ze = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Be = (e, t) => (n) => !!(typeof n == "string" && ze.test(n) && n.startsWith(e) || t && !Re(n) && Object.prototype.hasOwnProperty.call(n, t)), Ve = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Le);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, He = (e) => c(0, 255, e), Ue = {
	...A,
	transform: (e) => Math.round(He(e))
}, M = {
	test: /* @__PURE__ */ Be("rgb", "red"),
	parse: /* @__PURE__ */ Ve("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ue.transform(e) + ", " + Ue.transform(t) + ", " + Ue.transform(n) + ", " + Ie(j.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function We(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Ge = {
	test: /* @__PURE__ */ Be("#"),
	parse: We,
	transform: M.transform
}, N = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), P = /* @__PURE__ */ N("deg"), F = /* @__PURE__ */ N("%"), I = /* @__PURE__ */ N("px"), Ke = /* @__PURE__ */ N("vh"), qe = /* @__PURE__ */ N("vw"), Je = {
	...F,
	parse: (e) => F.parse(e) / 100,
	transform: (e) => F.transform(e * 100)
}, L = {
	test: /* @__PURE__ */ Be("hsl", "hue"),
	parse: /* @__PURE__ */ Ve("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + F.transform(Ie(t)) + ", " + F.transform(Ie(n)) + ", " + Ie(j.transform(r)) + ")"
}, R = {
	test: (e) => M.test(e) || Ge.test(e) || L.test(e),
	parse: (e) => M.test(e) ? M.parse(e) : L.test(e) ? L.parse(e) : Ge.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? M.transform(e) : L.transform(e),
	getAnimatableNone: (e) => {
		let t = R.parse(e);
		return t.alpha = 0, R.transform(t);
	}
}, Ye = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Xe(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Le)?.length || 0) + (e.match(Ye)?.length || 0) > 0;
}
var Ze = "number", Qe = "color", $e = "var", et = "var(", tt = "${}", nt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function z(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(nt, (e) => (R.test(e) ? (r.color.push(a), i.push(Qe), n.push(R.parse(e))) : e.startsWith(et) ? (r.var.push(a), i.push($e), n.push(e)) : (r.number.push(a), i.push(Ze), n.push(parseFloat(e))), ++a, tt)).split(tt),
		indexes: r,
		types: i
	};
}
function rt(e) {
	return z(e).values;
}
function it({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Ze ? i += Ie(r[a]) : e === Qe ? i += R.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function at(e) {
	return it(z(e));
}
var ot = (e) => typeof e == "number" ? 0 : R.test(e) ? R.getAnimatableNone(e) : e, st = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : ot(e);
function ct(e) {
	let t = z(e);
	return it(t)(t.values.map((e, n) => st(e, t.split[n])));
}
var B = {
	test: Xe,
	parse: rt,
	createTransformer: at,
	getAnimatableNone: ct
};
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function lt(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ut({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = lt(s, r, e + 1 / 3), a = lt(s, r, e), o = lt(s, r, e - 1 / 3);
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
function dt(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/number.mjs
var V = (e, t, n) => e + (t - e) * n, ft = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, pt = [
	Ge,
	M,
	L
], mt = (e) => pt.find((t) => t.test(e));
function ht(e) {
	let t = mt(e);
	if (`${e}`, !t) return !1;
	let n = t.parse(e);
	return t === L && (n = ut(n)), n;
}
var gt = (e, t) => {
	let n = ht(e), r = ht(t);
	if (!n || !r) return dt(e, t);
	let i = { ...n };
	return (e) => (i.red = ft(n.red, r.red, e), i.green = ft(n.green, r.green, e), i.blue = ft(n.blue, r.blue, e), i.alpha = V(n.alpha, r.alpha, e), M.transform(i));
}, _t = new Set(["none", "hidden"]);
function vt(e, t) {
	return _t.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function yt(e, t) {
	return (n) => V(e, t, n);
}
function bt(e) {
	return typeof e == "number" ? yt : typeof e == "string" ? Me(e) ? dt : R.test(e) ? gt : wt : Array.isArray(e) ? xt : typeof e == "object" ? R.test(e) ? gt : St : dt;
}
function xt(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => bt(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function St(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = bt(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Ct(e, t) {
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
var wt = (e, t) => {
	let n = B.createTransformer(t), r = z(e), i = z(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? _t.has(e) && !i.values.length || _t.has(t) && !r.values.length ? vt(e, t) : g(xt(Ct(r, i), i.values), n) : (`${e}${t}`, dt(e, t));
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/mix/index.mjs
function Tt(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? V(e, t, n) : bt(e)(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Et = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => O.update(t, e),
		stop: () => Ce(t),
		now: () => we.isProcessing ? we.timestamp : k.now()
	};
}, Dt = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Ot = 2e4;
function kt(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function At(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(kt(r), Ot);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ b(i)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var H = {
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
function jt(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Mt = 12;
function Nt(e, t, n) {
	let r = n;
	for (let n = 1; n < Mt; n++) r -= e(r) / t(r);
	return r;
}
var Pt = .001;
function Ft({ duration: e = H.duration, bounce: t = H.bounce, velocity: n = H.velocity, mass: r = H.mass }) {
	let i, a;
	H.maxDuration;
	let o = 1 - t;
	o = c(H.minDamping, H.maxDamping, o), e = c(H.minDuration, H.maxDuration, /* @__PURE__ */ b(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = jt(t, o), c = Math.exp(-i);
		return Pt - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = jt(t ** 2, o);
		return (-i(t) + Pt > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => {
		let r = Math.exp(-t * e), i = (t - n) * e + 1;
		return -Pt + r * i;
	}, a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, l = Nt(i, a, s);
	if (e = /* @__PURE__ */ y(e), isNaN(l)) return {
		stiffness: H.stiffness,
		damping: H.damping,
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
var It = ["duration", "bounce"], Lt = [
	"stiffness",
	"damping",
	"mass"
];
function Rt(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function zt(e) {
	let t = {
		velocity: H.velocity,
		stiffness: H.stiffness,
		damping: H.damping,
		mass: H.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Rt(e, Lt) && Rt(e, It)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * c(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: H.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = Ft({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: H.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function U(e = H.visualDuration, t = H.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = zt({
		...n,
		velocity: -/* @__PURE__ */ b(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ b(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? H.restSpeed.granular : H.restSpeed.default, i ||= v ? H.restDelta.granular : H.restDelta.default;
	let x, S, C, w, T, E;
	if (h < 1) C = jt(_, h), w = (m + h * _ * g) / C, x = (e) => o - Math.exp(-h * _ * e) * (w * Math.sin(C * e) + g * Math.cos(C * e)), T = h * _ * w + g * C, E = h * _ * g - w * C, S = (e) => Math.exp(-h * _ * e) * (T * Math.sin(C * e) + E * Math.cos(C * e));
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
			let e = Math.min(kt(D), Ot), t = Dt((t) => D.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return D;
}
U.applyToOptions = (e) => {
	let t = At(e, 100, U);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ y(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Bt = 5;
function Vt(e, t, n) {
	let r = Math.max(t - Bt, 0);
	return x(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Ht({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = U({
			keyframes: [f.value, m(f.value)],
			velocity: Vt(y, e, f.value),
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
function Ut(e, t, n) {
	let r = [], i = n || l.mix || Tt, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = g(Array.isArray(t) ? t[n] || m : t, a)), r.push(a);
	}
	return r;
}
function Wt(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (t.length, a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Ut(t, r, i), l = s.length, u = (n) => {
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
function Gt(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ _(0, t, r);
		e.push(V(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Kt(e) {
	let t = [0];
	return Gt(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function qt(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Jt(e, t) {
	return e.map(() => t || de).splice(0, e.length - 1);
}
function W({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = fe(r) ? r.map(_e) : _e(r), a = {
		done: !1,
		value: t[0]
	}, o = Wt(qt(n && n.length === t.length ? n : Kt(t), e), t, { ease: Array.isArray(i) ? i : Jt(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Yt = (e) => e !== null;
function Xt(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Yt), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Zt = {
	decay: Ht,
	inertia: Ht,
	tween: W,
	keyframes: W,
	spring: U
};
function Qt(e) {
	typeof e.type == "string" && (e.type = Zt[e.type]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var $t = class {
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
}, en = (e) => e / 100, tn = class extends $t {
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
		Qt(e);
		let { type: t = W, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || W;
		s !== W && typeof o[0] != "number" && (this.mixKeyframes = g(en, Tt(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = kt(c));
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
		return C && m !== Ht && (x.value = Xt(u, this.options, g, this.speed)), h && h(x.value), C && this.finish(), x;
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
		return Vt((e) => this.generator.next(e).value, e, t);
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
		let { driver: e = Et, startTime: t } = this.options;
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
function nn(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var G = (e) => e * 180 / Math.PI, rn = (e) => on(G(Math.atan2(e[1], e[0]))), an = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: rn,
	rotateZ: rn,
	skewX: (e) => G(Math.atan(e[1])),
	skewY: (e) => G(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, on = (e) => (e %= 360, e < 0 && (e += 360), e), sn = rn, cn = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), ln = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), un = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: cn,
	scaleY: ln,
	scale: (e) => (cn(e) + ln(e)) / 2,
	rotateX: (e) => on(G(Math.atan2(e[6], e[5]))),
	rotateY: (e) => on(G(Math.atan2(-e[2], e[0]))),
	rotateZ: sn,
	rotate: sn,
	skewX: (e) => G(Math.atan(e[4])),
	skewY: (e) => G(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function dn(e) {
	return +!!e.includes("scale");
}
function fn(e, t) {
	if (!e || e === "none") return dn(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = un, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = an, i = t;
	}
	if (!i) return dn(t);
	let a = r[t], o = i[1].split(",").map(mn);
	return typeof a == "function" ? a(o) : o[a];
}
var pn = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return fn(n, t);
};
function mn(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var K = [
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
], q = new Set(K), hn = (e) => e === A || e === I, gn = new Set([
	"x",
	"y",
	"z"
]), _n = K.filter((e) => !gn.has(e));
function vn(e) {
	let t = [];
	return _n.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var J = {
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
	x: (e, { transform: t }) => fn(t, "x"),
	y: (e, { transform: t }) => fn(t, "y")
};
J.translateX = J.x, J.translateY = J.y;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var Y = /* @__PURE__ */ new Set(), yn = !1, bn = !1, xn = !1;
function Sn() {
	if (bn) {
		let e = Array.from(Y).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = vn(e);
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
	bn = !1, yn = !1, Y.forEach((e) => e.complete(xn)), Y.clear();
}
function Cn() {
	Y.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (bn = !0);
	});
}
function wn() {
	xn = !0, Cn(), Sn(), xn = !1;
}
var Tn = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Y.add(this), yn || (yn = !0, O.read(Cn), O.resolveKeyframes(Sn))) : (this.readKeyframes(), this.complete());
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
		nn(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Y.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Y.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, En = (e) => e.startsWith("--");
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Dn(e, t, n) {
	En(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var On = {};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function kn(e, t) {
	let n = /* @__PURE__ */ p(e);
	return () => On[t] ?? n();
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var An = /* @__PURE__ */ kn(() => window.ScrollTimeline !== void 0, "scrollTimeline"), jn = /* @__PURE__ */ kn(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Mn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Nn = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ Mn([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ Mn([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ Mn([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ Mn([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Pn(e, t) {
	if (e) return typeof e == "function" ? jn() ? Dt(e, t) : "ease-out" : me(e) ? Mn(e) : Array.isArray(e) ? e.map((e) => Pn(e, t) || Nn.easeOut) : Nn[e];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Fn(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Pn(s, i);
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
function In(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Ln({ type: e, ...t }) {
	return In(e) && jn() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Rn = class extends $t {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
		let c = Ln(e);
		this.animation = Fn(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Xt(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Dn(t, n, e), this.animation.cancel();
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
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && An() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), m) : r(this);
	}
}, zn = {
	anticipate: ae,
	backInOut: ie,
	circInOut: ce
};
function Bn(e) {
	return e in zn;
}
function Vn(e) {
	typeof e.ease == "string" && Bn(e.ease) && (e.ease = zn[e.ease]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Hn = 10, Un = class extends Rn {
	constructor(e) {
		Vn(e), Qt(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new tn({
			...a,
			autoplay: !1
		}), s = Math.max(Hn, k.now() - this.startTime), l = c(0, Hn, s - Hn), u = o.sample(s).value, { name: d } = this.options;
		i && d && Dn(i, d, u), t.setWithVelocity(o.sample(Math.max(0, s - l)).value, u, l), o.stop();
	}
}, Wn = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (B.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Gn(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Kn(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Wn(i, t), s = Wn(a, t);
	return `${t}${i}${a}${o ? a : i}`, !o || !s ? !1 : Gn(e) || (n === "spring" || In(n)) && r;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function qn(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var Jn = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Yn = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Xn(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && Yn.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Zn = new Set([
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
]), Qn = /* @__PURE__ */ p(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function $n(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Qn() && n && (Jn.has(n) || Zn.has(n) && Xn(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var er = 40, tr = class extends $t {
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
		}, f = l?.KeyframeResolver || Tn;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: u } = n;
		this.resolvedAt = k.now();
		let d = !0;
		Kn(e, i, a, o) || (d = !1, (l.instantAnimations || !s) && u?.(Xt(e, n, t)), e[0] = e[e.length - 1], qn(n), n.repeat = 0);
		let f = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > er ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, p = d && !c && $n(f), h = f.motionValue?.owner?.current, g;
		if (p) try {
			g = new Un({
				...f,
				element: h
			});
		} catch {
			g = new tn(f);
		}
		else g = new tn(f);
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
		return this._animation || (this.keyframeResolver?.resume(), wn()), this._animation;
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
}, nr = class {
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
		return rr(this.animations, "duration");
	}
	get iterationDuration() {
		return rr(this.animations, "iterationDuration");
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
function rr(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var ir = class extends nr {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
}, ar = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function or(e) {
	let t = ar.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function sr(e, t, n = 1) {
	`${e}`;
	let [r, i] = or(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return u(e) ? parseFloat(e) : e;
	}
	return Me(i) ? sr(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var cr = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, lr = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), ur = {
	type: "keyframes",
	duration: .8
}, dr = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, fr = (e, { keyframes: t }) => t.length > 2 ? ur : q.has(e) ? e.startsWith("scale") ? lr(t[1]) : cr : dr;
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function pr(e, t) {
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
function mr(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : pr(n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var hr = new Set([
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
function gr(e) {
	for (let t in e) if (!hr.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var _r = (e, t, n, r = {}, i, a) => (o) => {
	let s = mr(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: u = 0 } = r;
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
	gr(s) || Object.assign(d, fr(e, d)), d.duration &&= /* @__PURE__ */ y(d.duration), d.repeatDelay &&= /* @__PURE__ */ y(d.repeatDelay), d.from !== void 0 && (d.keyframes[0] = d.from);
	let f = !1;
	if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (qn(d), d.delay === 0 && (f = !0)), (l.instantAnimations || l.skipAnimations || i?.shouldSkipAnimations) && (f = !0, qn(d), d.delay = 0), d.allowFlatten = !s.type && !s.ease, f && !a && t.get() !== void 0) {
		let e = Xt(d.keyframes, s);
		if (e !== void 0) {
			O.update(() => {
				d.onUpdate(e), d.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new tn(d) : new tr(d);
};
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function vr(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function yr(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = vr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = vr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function br(e, t, n) {
	let r = e.getProps();
	return yr(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var xr = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...K
]), Sr = 30, Cr = (e) => !isNaN(parseFloat(e)), wr = { current: void 0 }, Tr = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = k.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = k.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Cr(this.current));
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
		return wr.current && wr.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = k.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Sr) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, Sr);
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
function X(e, t) {
	return new Tr(e, t);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Er = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion-dom/dist/es/render/utils/setters.mjs
function Dr(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, X(n));
}
function Or(e) {
	return Er(e) ? e[e.length - 1] || 0 : e;
}
function kr(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = br(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Dr(e, t, Or(i[t]));
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var Z = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Ar(e) {
	return !!(Z(e) && e.add);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function jr(e, t) {
	let n = e.getValue("willChange");
	if (Ar(n)) return n.add(t);
	if (!n && l.WillChange) {
		let n = new l.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Mr(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Nr = "data-" + Mr("framerAppearId");
//#endregion
//#region node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Pr(e) {
	return e.props[Nr];
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Fr({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Ir(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? pr(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && Fr(d, t)) continue;
		let o = {
			delay: n,
			...mr(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			O.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = Pr(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, O);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		jr(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(_r(t, r, i, p && xr.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => O.update(() => {
			o && kr(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/auto.mjs
var Lr = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Rr = (e) => (t) => t.test(e), zr = [
	A,
	I,
	F,
	P,
	qe,
	Ke,
	Lr
], Br = (e) => zr.find(Rr(e));
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Vr(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || f(e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var Hr = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Ur(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Le) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!Hr.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Wr = /\b([a-z-]*)\(.*?\)/gu, Gr = {
	...B,
	getAnimatableNone: (e) => {
		let t = e.match(Wr);
		return t ? t.map(Ur).join(" ") : e;
	}
}, Kr = {
	...B,
	getAnimatableNone: (e) => {
		let t = B.parse(e);
		return B.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, qr = {
	...A,
	transform: Math.round
}, Jr = {
	borderWidth: I,
	borderTopWidth: I,
	borderRightWidth: I,
	borderBottomWidth: I,
	borderLeftWidth: I,
	borderRadius: I,
	borderTopLeftRadius: I,
	borderTopRightRadius: I,
	borderBottomRightRadius: I,
	borderBottomLeftRadius: I,
	width: I,
	maxWidth: I,
	height: I,
	maxHeight: I,
	top: I,
	right: I,
	bottom: I,
	left: I,
	inset: I,
	insetBlock: I,
	insetBlockStart: I,
	insetBlockEnd: I,
	insetInline: I,
	insetInlineStart: I,
	insetInlineEnd: I,
	padding: I,
	paddingTop: I,
	paddingRight: I,
	paddingBottom: I,
	paddingLeft: I,
	paddingBlock: I,
	paddingBlockStart: I,
	paddingBlockEnd: I,
	paddingInline: I,
	paddingInlineStart: I,
	paddingInlineEnd: I,
	margin: I,
	marginTop: I,
	marginRight: I,
	marginBottom: I,
	marginLeft: I,
	marginBlock: I,
	marginBlockStart: I,
	marginBlockEnd: I,
	marginInline: I,
	marginInlineStart: I,
	marginInlineEnd: I,
	fontSize: I,
	backgroundPositionX: I,
	backgroundPositionY: I,
	rotate: P,
	rotateX: P,
	rotateY: P,
	rotateZ: P,
	scale: Fe,
	scaleX: Fe,
	scaleY: Fe,
	scaleZ: Fe,
	skew: P,
	skewX: P,
	skewY: P,
	distance: I,
	translateX: I,
	translateY: I,
	translateZ: I,
	x: I,
	y: I,
	z: I,
	perspective: I,
	transformPerspective: I,
	opacity: j,
	originX: Je,
	originY: Je,
	originZ: I,
	zIndex: qr,
	fillOpacity: j,
	strokeOpacity: j,
	numOctaves: qr
}, Yr = {
	...Jr,
	color: R,
	backgroundColor: R,
	outlineColor: R,
	fill: R,
	stroke: R,
	borderColor: R,
	borderTopColor: R,
	borderRightColor: R,
	borderBottomColor: R,
	borderLeftColor: R,
	filter: Gr,
	WebkitFilter: Gr,
	mask: Kr,
	WebkitMask: Kr
}, Xr = (e) => Yr[e], Zr = /* @__PURE__ */ new Set([Gr, Kr]);
function Qr(e, t) {
	let n = Xr(e);
	return Zr.has(n) || (n = B), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var $r = new Set([
	"auto",
	"none",
	"0"
]);
function ei(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !$r.has(t) && z(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Qr(n, i);
}
//#endregion
//#region node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var ti = class extends Tn {
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
				let i = sr(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !xr.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Br(r), o = Br(i);
		if (Pe(r) !== Pe(i) && J[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (hn(a) && hn(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else J[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Vr(e[t])) && n.push(t);
		n.length && ei(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = J[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = J[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ni(e, t, n) {
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
var ri = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function ii(e) {
	return d(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: ai, cancel: oi } = /* @__PURE__ */ Se(queueMicrotask, !1), si = {
	x: !1,
	y: !1
};
function ci() {
	return si.x || si.y;
}
//#endregion
//#region node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function li(e, t) {
	let n = ni(e), r = new AbortController();
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
function ui(e) {
	return !(e.pointerType === "touch" || ci());
}
function Q(e, t, n = {}) {
	let [r, i, a] = li(e, n);
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
			if (!ui(n)) return;
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
	return fi(e) && !ci();
}
var bi = /* @__PURE__ */ new WeakSet();
function xi(e, t, n = {}) {
	let [r, i, a] = li(e, n), o = (e) => {
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
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), ii(e) && (e.addEventListener("focus", (e) => vi(e, i)), !mi(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
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
	...zr,
	R,
	B
], Ti = (e) => wi.find(Rr(e)), Ei = () => ({
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
		if (Z(i)) e.addValue(r, i);
		else if (Z(a)) e.addValue(r, X(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, X(t === void 0 ? i : t, { owner: e }));
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
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Tn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
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
			c[e] !== void 0 && Z(t) && t.set(c[e]);
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
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && Jn.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Rn({
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
		let n = q.has(e);
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
		return n === void 0 && t !== void 0 && (n = X(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (u(n) || f(n)) ? n = parseFloat(n) : !Ti(n) && B.test(t) && (n = Qr(e, t)), this.setBaseTarget(e, Z(n) ? n.get() : n)), Z(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = yr(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !Z(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new v()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		ai.render(this.render);
	}
}, Hi = class extends Vi {
	constructor() {
		super(...arguments), this.KeyframeResolver = ti;
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
		Z(e) && (this.childSubscription = e.on("change", (e) => {
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
}, qi = K.length;
function Ji(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < qi; a++) {
		let o = K[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ri(s, Jr[o]);
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
		if (q.has(e)) {
			o = !0;
			continue;
		} else if (Ae(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ri(n, Jr[e]);
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
	if (typeof e == "string") if (I.test(e)) e = parseFloat(e);
	else return e;
	return `${Zi(e, t.target.x)}% ${Zi(e, t.target.y)}%`;
} }, $i = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = B.parse(e);
	if (i.length > 5) return r;
	let a = B.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = V(s, c, .5);
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
	return q.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ea[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function na(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (Z(r[t]) || i && Z(i[t]) || ta(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
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
		if (q.has(t)) return this.projection?.isProjecting ? dn(t) : pn(e, t);
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
	for (let n in t.attrs) e.setAttribute(fa.has(n) ? n : Mr(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function ha(e, t, n) {
	let r = na(e, t, n);
	for (let n in e) if (Z(e[n]) || Z(t[n])) {
		let t = K.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
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
		if (q.has(t)) {
			let e = Xr(t);
			return e && e.default || 0;
		}
		return t = fa.has(t) ? t : Mr(t), e.getAttribute(t);
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
	let r = Z(e) ? e : X(e);
	return r.start(_r("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function va(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function ya(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && va(t) ? ni(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
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
		at: V(i, a, r[o]),
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
			let c = Aa(e), { delay: l = 0, times: u = Kt(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: b = t.ease || "easeOut", duration: x } = n, S = typeof l == "function" ? l(o, s) : l, C = c.length, w = In(p) ? p : i?.[p || "keyframes"];
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
				let r = At(n, e, w);
				b = r.ease, x = r.duration;
			}
			x ??= a;
			let T = d + S;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let E = u.length - c.length;
			if (E > 0 && Gt(u, E), c.length === 1 && c.unshift(null), m) {
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
		if (Z(p)) {
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
	return Z(e) || typeof e == "number" || typeof e == "string" && !va(t);
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
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...Ir(c, {
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
			let t = e[0], n = X(0);
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
	}), t, n, { spring: U }).forEach(({ keyframes: e, transition: t }, n) => {
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
		let c = new ir(a);
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
		e && (Q(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, {
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
		e && Q(e, (e) => ($(e, {
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
				ease: "easeInOut"
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
//#region src/components/fm-alert.js
var Ka = class extends a {
	template() {
		let e = this.attr("variant", "info"), t = this.boolAttr("dismissible"), n = this.attr("title", ""), r = {
			info: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" />\n        <path d=\"M12 9h.01\" />\n        <path d=\"M11 12h1v4h1\" />\n      </svg>",
			success: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" />\n        <path d=\"M9 12l2 2l4 -4\" />\n      </svg>",
			warning: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <path d=\"M12 9v4\" />\n        <path d=\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0\" />\n        <path d=\"M12 16h.01\" />\n      </svg>",
			error: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" />\n        <path d=\"M10 10l4 4m0 -4l-4 4\" />\n      </svg>"
		};
		return `
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
          margin-top: 2px;
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
          margin-top: -2px;
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

      <div class="alert ${e}" part="alert">
        <div class="icon-wrapper">
          <slot name="icon">${r[e] || r.info}</slot>
        </div>
        <div class="content">
          ${n ? `<div class="title" part="title">${n}</div>` : ""}
          <div class="message" part="message">
            <slot></slot>
          </div>
        </div>
        ${t ? "\n          <button class=\"close-btn\" part=\"close-btn\" aria-label=\"Dismiss alert\">\n            <svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M4 4L12 12M12 4L4 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            </svg>\n          </button>\n        " : ""}
      </div>
    `;
	}
	onEnter() {
		$(this.root.querySelector(".alert"), {
			opacity: [0, 1],
			y: [-8, 0]
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
		let e = this.root.querySelector(".close-btn");
		e && e.addEventListener("click", () => this.dismiss());
	}
	dismiss() {
		let e = this.root.querySelector(".alert");
		!e || e.classList.contains("hidden") || $(e, {
			opacity: [1, 0],
			y: [0, -8],
			scale: [1, .98]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 30
		}).finished.then(() => {
			e.classList.add("hidden"), this.dispatchEvent(new CustomEvent("dismiss", { bubbles: !0 }));
		});
	}
	show() {
		let e = this.root.querySelector(".alert");
		e && (e.classList.remove("hidden"), this.onEnter());
	}
	attributeChangedCallback() {
		this.render(), this._bindEvents();
	}
};
i(Ka, "observedAttributes", [
	"variant",
	"dismissible",
	"title"
]), customElements.define("fm-alert", Ka);
//#endregion
//#region src/components/fm-checkbox.js
var qa = class extends a {
	template() {
		let e = this.attr("size", "md"), t = this.boolAttr("disabled"), n = this.boolAttr("checked"), r = this.boolAttr("indeterminate");
		return `
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
        }

        /* ---- Sizes ---- */
        .checkbox-box.size-sm {
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }
        .checkbox-box.size-sm svg {
          width: 10px;
          height: 10px;
        }

        .checkbox-box.size-md {
          width: 20px;
          height: 20px;
        }
        .checkbox-box.size-md svg {
          width: 12px;
          height: 12px;
        }

        .checkbox-box.size-lg {
          width: 24px;
          height: 24px;
          border-radius: var(--fm-radius-md);
        }
        .checkbox-box.size-lg svg {
          width: 14px;
          height: 14px;
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

        .checkbox-box.size-sm ~ .label {
          font-size: var(--fm-font-size-xs);
        }

        .checkbox-box.size-lg ~ .label {
          font-size: var(--fm-font-size-md);
        }
      </style>

      <div class="checkbox-wrapper">
        <div
          class="checkbox-box ${{
			sm: "size-sm",
			md: "size-md",
			lg: "size-lg"
		}[e] || "size-md"} ${n || r ? "is-checked" : ""} ${t ? "is-disabled" : ""}"
          part="checkbox"
          role="checkbox"
          aria-checked="${n || r ? "true" : "false"}"
          tabindex="${t ? "-1" : "0"}"
        >
          ${r ? "<div class=\"indeterminate-dash\" part=\"dash\"></div>" : "\n              <svg class=\"checkmark\" viewBox=\"0 0 12 12\" part=\"checkmark\">\n                <path d=\"M2 6L5 9L10 3\" />\n              </svg>\n            "}
        </div>
        <span class="label" part="label">
          <slot></slot>
        </span>
      </div>
    `;
	}
	onEnter() {
		$(this.root.querySelector(".checkbox-wrapper"), {
			opacity: [0, 1],
			scale: [.9, 1]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 25
		});
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents();
	}
	_bindEvents() {
		let e = this.root.querySelector(".checkbox-box"), t = this.root.querySelector(".checkbox-wrapper");
		!e || !t || (t.addEventListener("click", (e) => {
			this.boolAttr("disabled") || (e.preventDefault(), this.toggle());
		}), e.addEventListener("keydown", (e) => {
			this.boolAttr("disabled") || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.toggle());
		}), Q(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, { scale: 1.08 }, {
			type: "spring",
			stiffness: 400,
			damping: 20
		}), () => {
			$(e, { scale: 1 }, {
				type: "spring",
				stiffness: 400,
				damping: 20
			});
		})), xi(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, { scale: .92 }, {
			type: "spring",
			stiffness: 500,
			damping: 22
		}), () => {
			$(e, { scale: 1.08 }, {
				type: "spring",
				stiffness: 400,
				damping: 18
			});
		})), (this.boolAttr("checked") || this.boolAttr("indeterminate")) && this._animateCheck(!0));
	}
	toggle() {
		let e = this.boolAttr("checked") || this.boolAttr("indeterminate");
		e ? (this.removeAttribute("checked"), this.removeAttribute("indeterminate")) : this.setAttribute("checked", ""), this._animateCheck(!e), this.dispatchEvent(new CustomEvent("change", {
			detail: { checked: !e },
			bubbles: !0,
			composed: !0
		}));
	}
	_animateCheck(e) {
		let t = this.root.querySelector(".checkbox-box"), n = this.root.querySelector(".checkmark"), r = this.root.querySelector(".indeterminate-dash");
		if (!t) return;
		$(t, {
			backgroundColor: e ? "var(--fm-color-primary)" : "var(--fm-color-surface)",
			borderColor: e ? "var(--fm-color-primary)" : "var(--fm-color-border-strong)"
		}, { duration: .15 });
		let i = n || r;
		i && (e ? $(i, {
			opacity: [0, 1],
			scale: [0, 1],
			x: ["-20%", "0%"]
		}, {
			type: "spring",
			stiffness: 500,
			damping: 20
		}) : $(i, {
			opacity: 0,
			scale: .5
		}, {
			duration: .15,
			ease: "easeOut"
		}));
	}
	attributeChangedCallback(e, t, n) {
		if (e === "size" || e === "disabled") this.render(), this._bindEvents();
		else if (e === "checked" || e === "indeterminate") {
			let e = t !== null, r = n !== null;
			if (e !== r) {
				let e = this.root.querySelector(".checkbox-box");
				e && (r ? e.classList.add("is-checked") : e.classList.remove("is-checked"), e.setAttribute("aria-checked", r ? "true" : "false")), this._animateCheck(r);
			}
		}
	}
};
i(qa, "observedAttributes", [
	"checked",
	"disabled",
	"size",
	"indeterminate"
]), customElements.define("fm-checkbox", qa);
//#endregion
//#region src/components/fm-breadcrumb.js
var Ja = class extends a {
	template() {
		let e = this.attr("separator", "chevron"), t = this.attr("size", "md"), n = this.attr("items", ""), r = [];
		if (n) try {
			r = JSON.parse(n);
		} catch {
			console.warn("[fm-breadcrumb] Invalid items JSON");
		}
		let i = this.innerHTML.trim().length > 0, a = {
			chevron: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m9 18 6-6-6-6\"/></svg>",
			slash: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 4 3 20\"/></svg>",
			arrow: "<svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg>"
		}[e] || a.chevron;
		return `
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
        .breadcrumb.sm {
          font-size: var(--fm-font-size-xs);
          gap: var(--fm-space-xs);
        }
        .breadcrumb.sm .breadcrumb-separator {
          width: 12px;
          height: 12px;
        }
        .breadcrumb.sm .breadcrumb-separator svg {
          width: 12px;
          height: 12px;
        }

        .breadcrumb.md {
          font-size: var(--fm-font-size-sm);
          gap: var(--fm-space-sm);
        }
        .breadcrumb.md .breadcrumb-separator {
          width: 14px;
          height: 14px;
        }
        .breadcrumb.md .breadcrumb-separator svg {
          width: 14px;
          height: 14px;
        }

        .breadcrumb.lg {
          font-size: var(--fm-font-size-md);
          gap: var(--fm-space-sm);
        }
        .breadcrumb.lg .breadcrumb-separator {
          width: 16px;
          height: 16px;
        }
        .breadcrumb.lg .breadcrumb-separator svg {
          width: 16px;
          height: 16px;
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
        <ol class="breadcrumb ${t}" part="breadcrumb">
          ${!r.length && !i ? "" : r.length ? r.map((e, t) => {
			let n = t === r.length - 1, i = e.href && !n ? `<a href="${e.href}" class="breadcrumb-link" data-index="${t}">${e.label}</a>` : `<span class="breadcrumb-current" aria-current="page">${e.label}</span>`;
			return `
            <li class="breadcrumb-item ${n ? "is-last" : ""}" data-index="${t}">
              ${i}
              ${n ? "" : `<span class="breadcrumb-separator" aria-hidden="true">${a}</span>`}
            </li>
          `;
		}).join("") : "<li class=\"breadcrumb-slot-container\"><slot></slot></li>"}
        </ol>
      </nav>
    `;
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents();
	}
	onEnter() {
		let e = this.root.querySelector(".breadcrumb");
		e && $(e, {
			opacity: [0, 1],
			y: [-4, 0]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 25
		});
	}
	_bindEvents() {
		this.root.querySelectorAll(".breadcrumb-link").forEach((e) => {
			e.addEventListener("click", (t) => {
				let n = parseInt(e.dataset.index || "0", 10), r = e.getAttribute("href") || "", i = e.textContent || "";
				this.dispatchEvent(new CustomEvent("fm-breadcrumb-click", {
					bubbles: !0,
					detail: {
						index: n,
						label: i,
						href: r
					}
				}));
			});
		});
	}
	attributeChangedCallback() {
		this.render(), this._bindEvents();
	}
};
i(Ja, "observedAttributes", [
	"items",
	"separator",
	"size"
]), customElements.define("fm-breadcrumb", Ja);
//#endregion
//#region src/components/fm-clipboard.js
var Ya = class extends a {
	template() {
		let e = this.attr("variant", "button"), t = this.attr("label", "Copy"), n = this.attr("position", "right"), r = this.boolAttr("hide-icon"), i = this.attr("feedback-text", "Copied!"), a = r ? "" : "\n      <span class=\"icon-container\">\n        <svg class=\"icon-copy\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect>\n          <path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>\n        </svg>\n        <svg class=\"icon-check\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <polyline points=\"20 6 9 17 4 12\"></polyline>\n        </svg>\n      </span>\n    ", o = `
      <div class="toast" role="status" aria-live="polite" aria-atomic="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${i}</span>
      </div>
    `, s = `
      <div class="tooltip" role="status" aria-live="polite" aria-atomic="true">
        ${i}
      </div>
    `, c = "";
		return e === "button" ? c = `
        <button class="clipboard-btn ${e}" part="button" aria-label="Copy to clipboard">
          ${a}
          <span class="btn-label">${t}</span>
        </button>
      ` : e === "icon" ? c = `
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
      ` : e === "inline" && (c = n === "left" ? `
          <button class="clipboard-btn ${e}" part="button" aria-label="Copy to clipboard">
            ${a}
            <span class="inline-text"><slot></slot></span>
          </button>
        ` : `
          <button class="clipboard-btn ${e}" part="button" aria-label="Copy to clipboard">
            <span class="inline-text"><slot></slot></span>
            ${a}
          </button>
        `), `
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
          transition: opacity 0.2s ease;
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

        /* ---- Toast notification ---- */
        .toast {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: var(--fm-color-secondary);
          color: var(--fm-color-text-light);
          font-size: var(--fm-font-size-xs);
          font-weight: var(--fm-font-weight-medium);
          border-radius: var(--fm-radius-md);
          box-shadow: var(--fm-shadow-md);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          z-index: 1000;
        }
        .toast::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: var(--fm-color-secondary);
        }
        .toast svg {
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

      ${this.attr("feedback", "toast") === "toast" ? o : ""}
      ${this.attr("feedback", "toast") === "tooltip" ? s : ""}
      ${c}
    `;
	}
	onEnter() {
		$(this.root.querySelector(".clipboard-btn"), {
			opacity: [0, 1],
			y: [4, 0]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 25
		});
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents();
	}
	_bindEvents() {
		let e = this.root.querySelector(".clipboard-btn");
		e && (e.addEventListener("click", (e) => this._handleCopy(e)), Q(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, { y: -1 }, {
			type: "spring",
			stiffness: 450,
			damping: 20
		}), () => {
			$(e, { y: 0 }, {
				type: "spring",
				stiffness: 450,
				damping: 20
			});
		})), xi(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, { scale: .96 }, {
			type: "spring",
			stiffness: 500,
			damping: 22
		}), () => {
			$(e, { scale: 1 }, {
				type: "spring",
				stiffness: 450,
				damping: 18
			});
		})));
	}
	async _handleCopy(e) {
		e.preventDefault(), e.stopPropagation();
		let t = this.root.querySelector(".clipboard-btn"), n = this.attr("feedback", "toast"), r = this.attr("text", "");
		if (!r && this.attr("variant", "button") === "inline") {
			let e = t.querySelector(".inline-text slot");
			e && (r = e.assignedNodes({ flatten: !0 }).map((e) => e.textContent).join("").trim());
		}
		if (!r) {
			console.warn("fm-clipboard: No text to copy");
			return;
		}
		try {
			await navigator.clipboard.writeText(r), this._showSuccess(t, n);
		} catch (e) {
			console.error("fm-clipboard: Failed to copy", e), this._fallbackCopy(r, t, n);
		}
	}
	_fallbackCopy(e, t, n) {
		let r = document.createElement("textarea");
		r.value = e, r.style.position = "fixed", r.style.left = "-9999px", document.body.appendChild(r), r.select();
		try {
			document.execCommand("copy") && this._showSuccess(t, n);
		} catch (e) {
			console.error("fm-clipboard: Fallback copy failed", e);
		}
		document.body.removeChild(r);
	}
	_showSuccess(e, t) {
		this.attr("variant", "button"), e.classList.add("success");
		let n = e.querySelector(".icon-check");
		if (n && $(n, {
			scale: [.5, 1],
			opacity: [0, 1]
		}, {
			type: "spring",
			stiffness: 500,
			damping: 20
		}), t === "toast") {
			let e = this.root.querySelector(".toast");
			e && ($(e, {
				opacity: [0, 1],
				y: [4, 0]
			}, {
				type: "spring",
				stiffness: 400,
				damping: 22
			}), setTimeout(() => {
				$(e, {
					opacity: 0,
					y: -4
				}, { duration: .2 });
			}, 2e3));
		} else if (t === "tooltip") {
			let e = this.root.querySelector(".tooltip");
			e && ($(e, {
				opacity: [0, 1],
				y: [2, 0]
			}, {
				type: "spring",
				stiffness: 450,
				damping: 20
			}), setTimeout(() => {
				$(e, {
					opacity: 0,
					y: -2
				}, { duration: .2 });
			}, 1500));
		}
		setTimeout(() => {
			e.classList.remove("success");
		}, 2e3), this.dispatchEvent(new CustomEvent("fm-copy", {
			bubbles: !0,
			composed: !0,
			detail: { text: this.attr("text", "") }
		}));
	}
	attributeChangedCallback() {
		this.render(), this._bindEvents();
	}
};
i(Ya, "observedAttributes", [
	"text",
	"label",
	"variant",
	"feedback",
	"feedback-text",
	"position",
	"hide-icon"
]), customElements.define("fm-clipboard", Ya);
//#endregion
//#region src/components/fm-collapsible.js
var Xa = class extends a {
	constructor(...e) {
		super(...e), i(this, "_isExpanded", !1);
	}
	template() {
		let e = this.attr("header", ""), t = this.boolAttr("disabled"), n = this.boolAttr("expanded");
		return this._isExpanded = n, `
      <style>
        :host {
          display: block;
        }

        .collapsible {
          border: 1px solid var(--fm-color-border);
          border-radius: var(--fm-radius-lg);
          background: var(--fm-color-surface);
          font-family: var(--fm-font-family);
          overflow: hidden;
          will-change: transform, opacity;
        }

        /* ---- Header ---- */
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--fm-space-md) var(--fm-space-lg);
          cursor: ${t ? "not-allowed" : "pointer"};
          background: var(--fm-color-surface);
          transition: background var(--fm-transition-fast);
          user-select: none;
          gap: var(--fm-space-md);
        }

        .header:hover {
          background: ${t ? "var(--fm-color-surface)" : "var(--fm-color-surface-alt)"};
        }

        .header-content {
          flex: 1;
          min-width: 0;
          font-size: var(--fm-font-size-md);
          font-weight: var(--fm-font-weight-semibold);
          color: var(--fm-color-text);
        }
        .header-content:empty {
          display: none;
        }

        /* ---- Icon wrapper ---- */
        .icon-wrapper {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          color: var(--fm-color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--fm-transition-normal);
          transform-origin: center;
        }

        .icon-wrapper.expanded {
          transform: rotate(180deg);
        }

        .icon-wrapper ::slotted(svg),
        .icon-wrapper ::slotted(img) {
          width: 100%;
          height: 100%;
        }

        /* ---- Content wrapper ---- */
        .content-wrapper {
          overflow: hidden;
          height: ${n ? "auto" : "0"};
          opacity: ${n ? "1" : "0"};
        }

        .content {
          padding: 0 var(--fm-space-lg) var(--fm-space-lg) var(--fm-space-lg);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text-secondary);
          line-height: var(--fm-line-height);
        }

        /* ---- Disabled state ---- */
        .collapsible.disabled {
          opacity: 0.6;
        }

        .collapsible.disabled .header {
          cursor: not-allowed;
        }

        .collapsible.disabled .header:hover {
          background: var(--fm-color-surface);
        }
      </style>

      <div class="collapsible ${t ? "disabled" : ""}" part="collapsible">
        <div class="header" part="header" role="button" tabindex="${t ? "-1" : "0"}" aria-expanded="${n}">
          <div class="header-content">
            ${e ? `<span>${e}</span>` : ""}
            <slot name="header"></slot>
          </div>
          <div class="icon-wrapper ${n ? "expanded" : ""}" part="icon">
            <slot name="icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg></slot>
          </div>
        </div>
        <div class="content-wrapper" part="content-wrapper">
          <div class="content" part="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents(), this._isExpanded = this.boolAttr("expanded");
	}
	_bindEvents() {
		if (this.boolAttr("disabled")) return;
		let e = this.root.querySelector(".header");
		e && (e.addEventListener("click", () => this.toggle()), e.addEventListener("keydown", (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.toggle());
		}));
	}
	onEnter() {
		$(this.root.querySelector(".collapsible"), {
			opacity: [0, 1],
			y: [8, 0]
		}, {
			type: "spring",
			stiffness: 300,
			damping: 24
		});
	}
	expand() {
		if (this._isExpanded || this.boolAttr("disabled")) return;
		this._isExpanded = !0, this.setAttribute("expanded", "");
		let e = this.root.querySelector(".content-wrapper"), t = this.root.querySelector(".content"), n = this.root.querySelector(".icon-wrapper");
		if (!e || !t) return;
		let r = t.scrollHeight;
		$(e, {
			height: [0, r + "px"],
			opacity: [0, 1]
		}, {
			duration: .25,
			ease: "easeOut"
		}), n && $(n, { rotate: 180 }, {
			duration: .2,
			ease: "easeInOut"
		}), this.dispatchEvent(new CustomEvent("fm-collapse-change", {
			detail: { expanded: !0 },
			bubbles: !0
		}));
	}
	collapse() {
		if (!this._isExpanded || this.boolAttr("disabled")) return;
		this._isExpanded = !1, this.removeAttribute("expanded");
		let e = this.root.querySelector(".content-wrapper"), t = this.root.querySelector(".icon-wrapper");
		e && ($(e, {
			height: 0,
			opacity: 0
		}, {
			duration: .2,
			ease: "easeIn"
		}), t && $(t, { rotate: 0 }, {
			duration: .2,
			ease: "easeInOut"
		}), this.dispatchEvent(new CustomEvent("fm-collapse-change", {
			detail: { expanded: !1 },
			bubbles: !0
		})));
	}
	toggle() {
		this._isExpanded ? this.collapse() : this.expand();
	}
	get expanded() {
		return this._isExpanded;
	}
	attributeChangedCallback(e, t, n) {
		if (t === n) return;
		if (e !== "expanded") {
			this.render(), this._bindEvents();
			return;
		}
		let r = n !== null;
		r !== this._isExpanded && (r ? this.expand() : this.collapse());
	}
};
i(Xa, "observedAttributes", [
	"expanded",
	"disabled",
	"header"
]), customElements.define("fm-collapsible", Xa);
//#endregion
//#region src/components/fm-dropdown.js
var Za = class extends a {
	constructor(...e) {
		super(...e), i(this, "_isOpen", !1), i(this, "_items", []);
	}
	template() {
		let e = this.attr("placeholder", "Menu"), t = this.boolAttr("disabled"), n = this.attr("size", "md"), r = this.attr("variant", "default"), i = this.attr("items", "");
		if (i) try {
			this._items = JSON.parse(i);
		} catch {
			this._items = [];
		}
		else this._items = [];
		return `
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        /* ---- Trigger Button ---- */
        .trigger {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--fm-space-sm);
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-semibold);
          letter-spacing: var(--fm-letter-spacing);
          line-height: 1;
          border-radius: var(--fm-radius-md);
          cursor: ${t ? "not-allowed" : "pointer"};
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          white-space: nowrap;
          transition: box-shadow var(--fm-transition-fast), border-color var(--fm-transition-fast);
          width: 100%;
        }

        /* Sizes */
        .trigger.sm {
          padding: 6px 12px;
          font-size: var(--fm-font-size-xs);
          border-radius: var(--fm-radius-sm);
        }
        .trigger.md {
          padding: 10px 16px;
          font-size: var(--fm-font-size-sm);
        }
        .trigger.lg {
          padding: 14px 20px;
          font-size: var(--fm-font-size-md);
          border-radius: var(--fm-radius-lg);
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
          transition: transform var(--fm-transition-normal);
        }
        .trigger-icon.open {
          transform: rotate(180deg);
        }

        /* ---- Dropdown Menu ---- */
        .dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          min-width: 100%;
          background: var(--fm-color-surface);
          border: 1px solid var(--fm-color-border);
          border-radius: var(--fm-radius-lg);
          box-shadow: var(--fm-shadow-md);
          z-index: 1000;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transform-origin: top center;
        }

        .dropdown.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* ---- Dropdown Items ---- */
        .items {
          padding: 4px 0;
          max-height: 280px;
          overflow-y: auto;
        }

        .item {
          display: flex;
          align-items: center;
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          user-select: none;
          transition: background var(--fm-transition-fast);
        }

        .item-button,
        .item-link {
          all: unset;
          display: flex;
          align-items: center;
          width: 100%;
          padding: 8px var(--fm-space-md);
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          cursor: pointer;
          text-decoration: none;
          box-sizing: border-box;
        }

        .item-button:hover:not(:disabled),
        .item-link:hover:not([disabled]) {
          background: var(--fm-color-surface-alt);
        }

        .item-button:disabled,
        .item-link[disabled] {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .item.disabled {
          opacity: 0.4;
        }
        .item.disabled .item-button,
        .item.disabled .item-link {
          cursor: not-allowed;
        }

        /* Empty state */
        .empty {
          padding: var(--fm-space-md);
          text-align: center;
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text-secondary);
        }
      </style>

      <button 
        class="trigger ${n} ${r}" 
        part="trigger"
        ${t ? "disabled" : ""}
        aria-haspopup="true"
        aria-expanded="${this._isOpen}"
      >
        <span class="trigger-content" part="trigger-content">
          <slot name="trigger">
            <span class="trigger-text" part="trigger-text">${e}</span>
          </slot>
        </span>
        <span class="trigger-icon ${this._isOpen ? "open" : ""}" part="trigger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>
        </span>
      </button>

      <div class="dropdown ${this._isOpen ? "open" : ""}" part="dropdown">
        <div class="items" part="items">
          ${this._renderItems()}
        </div>
      </div>
    `;
	}
	_renderItems() {
		return this._items.length === 0 ? "<div class=\"empty\">No items</div>" : this._items.map((e, t) => {
			let n = e.type || "button", r = e.disabled || !1, i = e.href || "javascript:void(0)";
			return n === "link" ? `
          <div class="item ${r ? "disabled" : ""}" part="item link-item" data-index="${t}">
            <a class="item-link" href="${i}" ${r ? "tabindex=-1" : ""} data-value="${e.value}">
              ${e.label}
            </a>
          </div>
        ` : `
          <div class="item ${r ? "disabled" : ""}" part="item button-item" data-index="${t}">
            <button class="item-button" ${r ? "disabled" : ""} data-value="${e.value}">
              ${e.label}
            </button>
          </div>
        `;
		}).join("");
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents();
	}
	disconnectedCallback() {
		this._removeOutsideClickListener();
	}
	_bindEvents() {
		if (this.boolAttr("disabled")) return;
		let e = this.root.querySelector(".trigger");
		if (!e) return;
		e.addEventListener("click", (e) => {
			e.stopPropagation(), this.toggle();
		}), e.addEventListener("keydown", (e) => {
			e.key === "Enter" || e.key === " " ? (e.preventDefault(), this.toggle()) : e.key === "Escape" && this._isOpen && (e.preventDefault(), this.close());
		});
		let t = this.root.querySelector(".items");
		t && t.addEventListener("click", (e) => {
			let t = e.target.closest(".item");
			if (!t || t.classList.contains("disabled")) return;
			let n = parseInt(t.dataset.index, 10), r = this._items[n];
			r && (this.dispatchEvent(new CustomEvent("fm-dropdown-click", {
				detail: {
					value: r.value,
					label: r.label,
					index: n,
					type: r.type || "button"
				},
				bubbles: !0
			})), this.close());
		}), Q(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, { scale: 1.02 }, {
			type: "spring",
			stiffness: 450,
			damping: 20
		}), () => {
			$(e, { scale: 1 }, {
				type: "spring",
				stiffness: 450,
				damping: 20
			});
		})), xi(e, (e) => this.boolAttr("disabled") ? () => {} : ($(e, { scale: .98 }, {
			type: "spring",
			stiffness: 500,
			damping: 22
		}), () => {
			$(e, { scale: 1.02 }, {
				type: "spring",
				stiffness: 450,
				damping: 18
			});
		}));
	}
	_addOutsideClickListener() {
		this._outsideClickHandler = (e) => {
			!this.contains(e.target) && !this.root.contains(e.target) && this.close();
		}, document.addEventListener("click", this._outsideClickHandler);
	}
	_removeOutsideClickListener() {
		this._outsideClickHandler &&= (document.removeEventListener("click", this._outsideClickHandler), null);
	}
	onEnter() {
		$(this.root.querySelector(".trigger"), {
			opacity: [0, 1],
			y: [6, 0]
		}, {
			type: "spring",
			stiffness: 350,
			damping: 25
		});
	}
	_animateOpen() {
		let e = this.root.querySelector(".dropdown");
		if (!e) return;
		$(e, {
			opacity: [0, 1],
			scaleY: [.9, 1],
			y: [-8, 0]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 28
		});
		let t = this.root.querySelectorAll(".item");
		t.length > 0 && t.forEach((e, t) => {
			$(e, {
				opacity: [0, 1],
				x: [-10, 0]
			}, {
				type: "spring",
				stiffness: 400,
				damping: 25,
				delay: t * .03
			});
		});
	}
	_animateClose() {
		let e = this.root.querySelector(".dropdown");
		e && $(e, {
			opacity: 0,
			scaleY: .95,
			y: -4
		}, {
			duration: .15,
			ease: "easeIn"
		});
	}
	open() {
		this._isOpen || this.boolAttr("disabled") || (this._isOpen = !0, this.render(), this._bindEvents(), this._animateOpen(), this._addOutsideClickListener(), this.dispatchEvent(new CustomEvent("fm-dropdown-open", { bubbles: !0 })));
	}
	close() {
		this._isOpen && (this._animateClose(), this._isOpen = !1, this._removeOutsideClickListener(), setTimeout(() => {
			this.render(), this._bindEvents();
		}, 150), this.dispatchEvent(new CustomEvent("fm-dropdown-close", { bubbles: !0 })));
	}
	toggle() {
		this._isOpen ? this.close() : this.open();
	}
	attributeChangedCallback(e, t, n) {
		t !== n && (this.render(), this._bindEvents());
	}
};
i(Za, "observedAttributes", [
	"items",
	"placeholder",
	"disabled",
	"size",
	"variant"
]), customElements.define("fm-dropdown", Za);
//#endregion
//#region src/components/fm-pagination.js
var Qa = class extends a {
	template() {
		let e = Math.max(1, Math.min(this.getTotal(), this.getCurrent())), t = this.getTotal(), n = this.attr("size", "md"), r = this.attr("variant", "default"), i = this.boolAttr("disabled"), a = this.boolAttr("show-first-last"), o = !this.boolAttr("hide-prev-next"), s = this.attr("prev-label", ""), c = this.attr("next-label", ""), l = this.attr("href-template", ""), u = parseInt(this.attr("sibling-count", "1"), 10) || 1, d = parseInt(this.attr("boundary-count", "1"), 10) || 1, f = this._getPageSeries(e, t, u, d), p = (e) => l ? l.replace(":page", e) : null, m = p(e - 1), h = p(e + 1), g = p(1), _ = p(t), v = o ? `
      <button 
        class="pagination-btn pagination-nav ${n} ${r}" 
        data-action="prev"
        ${e <= 1 || i ? "disabled" : ""}
        aria-label="Go to previous page"
      >
        ${m && e > 1 ? `<a href="${m}" class="nav-link" tabindex="-1">` : ""}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          ${s ? `<span class="nav-label">${s}</span>` : ""}
        ${m && e > 1 ? "</a>" : ""}
      </button>
    ` : "", y = o ? `
      <button 
        class="pagination-btn pagination-nav ${n} ${r}" 
        data-action="next"
        ${e >= t || i ? "disabled" : ""}
        aria-label="Go to next page"
      >
        ${h && e < t ? `<a href="${h}" class="nav-link" tabindex="-1">` : ""}
          ${c ? `<span class="nav-label">${c}</span>` : ""}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        ${h && e < t ? "</a>" : ""}
      </button>
    ` : "", b = a ? `
      <button 
        class="pagination-btn pagination-nav ${n} ${r}" 
        data-action="first"
        ${e <= 1 || i ? "disabled" : ""}
        aria-label="Go to first page"
      >
        ${g && e > 1 ? `<a href="${g}" class="nav-link" tabindex="-1">` : ""}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>
        ${g && e > 1 ? "</a>" : ""}
      </button>
    ` : "", x = a ? `
      <button 
        class="pagination-btn pagination-nav ${n} ${r}" 
        data-action="last"
        ${e >= t || i ? "disabled" : ""}
        aria-label="Go to last page"
      >
        ${_ && e < t ? `<a href="${_}" class="nav-link" tabindex="-1">` : ""}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 17 5-5-5-5"/><path d="m6 17 5-5-5-5"/></svg>
        ${_ && e < t ? "</a>" : ""}
      </button>
    ` : "";
		return `
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
        }

        .pagination-btn:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ---- Sizes ---- */
        .pagination-btn.sm {
          min-width: 28px;
          height: 28px;
          padding: 0 8px;
          font-size: var(--fm-font-size-xs);
          gap: 4px;
        }
        .pagination-btn.sm svg {
          width: 14px;
          height: 14px;
        }

        .pagination-btn.md {
          min-width: 36px;
          height: 36px;
          padding: 0 12px;
          font-size: var(--fm-font-size-sm);
          gap: 6px;
        }
        .pagination-btn.md svg {
          width: 16px;
          height: 16px;
        }

        .pagination-btn.lg {
          min-width: 44px;
          height: 44px;
          padding: 0 16px;
          font-size: var(--fm-font-size-md);
          gap: 8px;
        }
        .pagination-btn.lg svg {
          width: 18px;
          height: 18px;
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
        .pagination-nav .nav-label {
          margin: 0 4px;
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
          pointer-events: none; /* Let button handle clicks for SPA, but allow right-click open */
        }

        /* ---- Ellipsis ---- */
        .pagination-ellipsis {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--fm-color-text-secondary);
          user-select: none;
          padding: 0 4px;
        }
        .pagination-ellipsis.sm {
          min-width: 28px;
          height: 28px;
          font-size: var(--fm-font-size-xs);
        }
        .pagination-ellipsis.md {
          min-width: 36px;
          height: 36px;
          font-size: var(--fm-font-size-sm);
        }
        .pagination-ellipsis.lg {
          min-width: 44px;
          height: 44px;
          font-size: var(--fm-font-size-md);
        }

        /* ---- Info text ---- */
        .pagination-info {
          color: var(--fm-color-text-secondary);
          font-size: var(--fm-font-size-sm);
          margin: 0 var(--fm-space-sm);
        }
      </style>

      <nav class="pagination" role="navigation" aria-label="Pagination">
        ${b}
        ${v}
        ${f.map((t) => {
			if (t === "..." || t === ":gap" || t === "gap") return `<span class="pagination-ellipsis ${n}">...</span>`;
			let a = parseInt(t, 10), o = a === e, s = p(a);
			return `
          <button 
            class="pagination-btn pagination-page ${n} ${r} ${o ? "active" : ""}" 
            data-page="${a}"
            ${i ? "disabled" : ""}
            aria-label="Go to page ${a}"
            aria-current="${o ? "page" : "false"}"
          >
            ${s && !o ? `<a href="${s}" class="page-link" tabindex="-1">${a}</a>` : a}
          </button>
        `;
		}).join("")}
        ${y}
        ${x}
      </nav>
    `;
	}
	_getPagyObject() {
		let e = this.attr("pagy", "");
		if (e) try {
			let t = JSON.parse(e);
			if (typeof t == "object" && t) return t;
		} catch {
			console.warn("[fm-pagination] Invalid pagy JSON");
		}
		return null;
	}
	_getPageSeries(e, t, n, r) {
		let i = this._getPagyObject();
		if (i && i.series && Array.isArray(i.series)) return i.series.map((e) => e === ":gap" || e === "gap" ? "..." : typeof e == "number" ? e : String(e));
		let a = this.attr("series", "");
		if (a) try {
			let e = JSON.parse(a);
			if (Array.isArray(e)) return e.map((e) => e === ":gap" || e === "gap" ? "..." : typeof e == "number" ? e : String(e));
		} catch {
			console.warn("[fm-pagination] Invalid series JSON");
		}
		return this._getPageRange(e, t, n, r);
	}
	_getPageRange(e, t, n, r) {
		let i = [], a = [];
		for (let e = 1; e <= Math.min(r, t); e++) a.push(e);
		let o = [];
		for (let e = Math.max(r + 1, t - r + 1); e <= t; e++) o.push(e);
		let s = Math.max(r + 1, e - n), c = Math.min(t - r, e + n);
		i.push(...a), s > r + 1 ? i.push("...") : s === r + 1 && !a.includes(s) && i.push(s);
		for (let e = Math.max(s, r + 2); e <= c; e++) !a.includes(e) && !o.includes(e) && i.push(e);
		c < t - r ? i.push("...") : c === t - r && !o.includes(c) && i.push(c);
		for (let e of o) i.includes(e) || i.push(e);
		return i;
	}
	getCurrent() {
		let e = this._getPagyObject();
		if (e && typeof e.page == "number") return Math.max(1, e.page);
		let t = this.attr("page", ""), n = this.attr("current", "");
		return Math.max(1, parseInt(t || n || "1", 10) || 1);
	}
	getTotal() {
		let e = this._getPagyObject();
		if (e && typeof e.pages == "number") return Math.max(1, e.pages);
		let t = this.attr("pages", ""), n = this.attr("total", "");
		return Math.max(1, parseInt(t || n || "1", 10) || 1);
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents();
	}
	onEnter() {
		let e = this.root.querySelector(".pagination");
		e && $(e, {
			opacity: [0, 1],
			y: [8, 0]
		}, {
			type: "spring",
			stiffness: 350,
			damping: 25
		});
	}
	_bindEvents() {
		this.boolAttr("disabled") || this.root.querySelectorAll(".pagination-btn:not(:disabled)").forEach((e) => {
			e.addEventListener("click", (t) => {
				if (t.target.tagName === "A" && !t.ctrlKey && !t.metaKey) return;
				t.preventDefault();
				let n = this.getCurrent(), r = n;
				if (e.dataset.action === "prev" ? r = Math.max(1, n - 1) : e.dataset.action === "next" ? r = Math.min(this.getTotal(), n + 1) : e.dataset.action === "first" ? r = 1 : e.dataset.action === "last" ? r = this.getTotal() : e.dataset.page && (r = parseInt(e.dataset.page, 10)), r !== n) {
					let e = n;
					this.setAttribute("current", String(r)), this.dispatchEvent(new CustomEvent("fm-page-change", {
						bubbles: !0,
						detail: {
							page: r,
							previousPage: e
						}
					}));
				}
			}), Q(e, (e) => ($(e, { scale: 1.05 }, {
				type: "spring",
				stiffness: 400,
				damping: 20
			}), () => {
				$(e, { scale: 1 }, {
					type: "spring",
					stiffness: 400,
					damping: 20
				});
			})), xi(e, (e) => ($(e, { scale: .95 }, {
				type: "spring",
				stiffness: 500,
				damping: 22
			}), () => {
				$(e, { scale: 1.05 }, {
					type: "spring",
					stiffness: 400,
					damping: 20
				});
			}));
		});
	}
	attributeChangedCallback() {
		this.render(), this._bindEvents();
	}
};
i(Qa, "observedAttributes", [
	"pagy",
	"current",
	"page",
	"total",
	"pages",
	"series",
	"size",
	"variant",
	"sibling-count",
	"boundary-count",
	"disabled",
	"show-first-last",
	"hide-prev-next",
	"prev-label",
	"next-label",
	"href-template"
]), customElements.define("fm-pagination", Qa);
//#endregion
//#region src/components/fm-sparkline.js
var $a = 0, eo = class extends a {
	constructor() {
		super(), $a += 1, this._gradientId = `fm-sparkline-gradient-${$a}`;
	}
	template() {
		let e = this._parseData(), t = this._numberAttr("width", 200), n = this._numberAttr("height", 60), r = this.attr("gradient-from", "var(--fm-alpha-primary-20)"), i = this.attr("gradient-to", "transparent"), a = this.attr("stroke-color", "var(--fm-color-primary)"), o = this._numberAttr("stroke-width", 2), s = this.attr("aria-label", "Sparkline trend"), { line: c, area: l, point: u } = this._buildPathData(e, t, n), d = this._formatPoint(Math.max(o * 1.5, 3));
		return `
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

          ${l ? `
            <path
              class="area"
              d="${l}"
              fill="url(#${this._gradientId})"
              part="area"
            ></path>
          ` : ""}

          ${c ? `
            <path
              class="line"
              d="${c}"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="stroke: ${this._escapeAttr(a)}; stroke-width: ${o}px;"
              part="line"
            ></path>
          ` : ""}

          ${u ? `
            <circle
              class="point"
              cx="${u[0]}"
              cy="${u[1]}"
              r="${d}"
              style="fill: ${this._escapeAttr(a)};"
              part="point"
            ></circle>
          ` : ""}
        </svg>
      </div>
    `;
	}
	onEnter() {
		this._animateSparkline();
	}
	attributeChangedCallback() {
		this.render(), this.isConnected && this._entered && this._animateSparkline();
	}
	_animateSparkline() {
		let e = this.root.querySelector(".sparkline");
		e && $(e, {
			opacity: [.4, 1],
			y: [6, 0]
		}, {
			type: "spring",
			stiffness: 320,
			damping: 26
		});
	}
	_numberAttr(e, t) {
		let n = Number(this.attr(e, String(t)));
		return Number.isFinite(n) && n > 0 ? n : t;
	}
	_parseData() {
		let e = this.attr("data", "").trim();
		if (!e) return [];
		try {
			let t = JSON.parse(e);
			if (Array.isArray(t)) return t.map((e) => Number(e)).filter((e) => Number.isFinite(e));
		} catch {}
		return e.split(",").map((e) => Number(e.trim())).filter((e) => Number.isFinite(e));
	}
	_buildPathData(e, t, n) {
		if (e.length === 0) return {
			line: "",
			area: "",
			point: null
		};
		let r = Math.min(...e), i = Math.max(...e) - r || 1, a = Math.min(10, t / 2, n / 2), o = Math.max(t - a * 2, 0), s = Math.max(n - a * 2, 0), c = e.map((n, c) => {
			let l = e.length === 1 ? t / 2 : a + c / (e.length - 1) * o, u = a + s - (n - r) / i * s;
			return [this._formatPoint(l), this._formatPoint(u)];
		});
		if (e.length === 1) return {
			line: "",
			area: "",
			point: c[0]
		};
		let l = c.map(([e, t], n) => `${n === 0 ? "M" : "L"} ${e} ${t}`).join(" "), u = this._formatPoint(n - a);
		return {
			line: l,
			area: `${l} L ${c[c.length - 1][0]} ${u} L ${c[0][0]} ${u} Z`,
			point: null
		};
	}
	_formatPoint(e) {
		return Number(e.toFixed(2));
	}
	_escapeAttr(e) {
		return String(e).replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
	}
};
i(eo, "observedAttributes", [
	"data",
	"width",
	"height",
	"gradient-from",
	"gradient-to",
	"stroke-color",
	"stroke-width",
	"aria-label"
]), customElements.define("fm-sparkline", eo);
//#endregion
//#region src/components/fm-tooltip.js
var to = class extends a {
	constructor(...e) {
		super(...e), i(this, "_handleShow", () => {
			let e = this.root.querySelector(".tip");
			if (!e) return;
			let t = this.attr("position", "top"), n = t === "top" || t === "bottom" ? "translateX(-50%)" : "translateY(-50%)", r = {
				top: `${n} translateY(6px)`,
				bottom: `${n} translateY(-6px)`,
				left: `${n} translateX(6px)`,
				right: `${n} translateX(-6px)`
			}, i = {
				top: `${n} translateY(0)`,
				bottom: `${n} translateY(0)`,
				left: `${n} translateX(0)`,
				right: `${n} translateX(0)`
			};
			e.style.visibility = "visible", $(e, {
				opacity: [0, 1],
				transform: [r[t] ?? r.top, i[t] ?? i.top]
			}, {
				type: "spring",
				stiffness: 400,
				damping: 20
			});
		}), i(this, "_handleHide", () => {
			let e = this.root.querySelector(".tip");
			e && $(e, { opacity: 0 }, { duration: .15 }).then(() => {
				e.style.opacity === "0" && (e.style.visibility = "hidden");
			});
		});
	}
	template() {
		let e = this.attr("text", "");
		return `
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
      <div class="tip ${this.attr("position", "top")} ${this.attr("variant", "dark")}" part="tip">${e}</div>
    `;
	}
	connectedCallback() {
		super.connectedCallback(), this._bindEvents();
	}
	_bindEvents() {
		this.addEventListener("mouseenter", this._handleShow), this.addEventListener("mouseleave", this._handleHide), this.addEventListener("focusin", this._handleShow), this.addEventListener("focusout", this._handleHide);
	}
	attributeChangedCallback() {
		this.render(), this._bindEvents();
	}
};
i(to, "observedAttributes", [
	"text",
	"position",
	"variant"
]), customElements.define("fm-tooltip", to);
//#endregion
//#region src/components/fm-input.js
var no = class extends a {
	template() {
		let e = this.attr("type", "text"), t = this.attr("value", ""), n = this.attr("placeholder", ""), r = this.boolAttr("disabled"), i = this.boolAttr("readonly"), a = this.boolAttr("required"), o = this.attr("error", ""), s = this.attr("size", "md"), c = this.attr("variant", "default"), l = t.length > 0, u = o.length > 0;
		return `
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

      <div class="input-wrapper ${{
			sm: "size-sm",
			md: "size-md",
			lg: "size-lg"
		}[s] || "size-md"} ${{
			default: "variant-default",
			filled: "variant-filled",
			outlined: "variant-outlined"
		}[c] || "variant-default"} ${r ? "is-disabled" : ""} ${u ? "has-error" : ""} ${this._focused ? "is-focused" : ""} ${l || this._focused ? "is-filled" : ""}">
        <input
          class="input-field"
          part="input"
          type="${e}"
          value="${t}"
          placeholder="${n}"
          ${r ? "disabled" : ""}
          ${i ? "readonly" : ""}
          ${a ? "required" : ""}
          aria-invalid="${u ? "true" : "false"}"
          aria-describedby="${u ? "error-msg" : ""}"
        />
        ${u ? `
          <div class="error-message" id="error-msg" part="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
            ${o}
          </div>
        ` : "\n          <slot name=\"helper\">\n            <div class=\"helper-text\" part=\"helper\">\n              <slot name=\"helper-text\"></slot>\n            </div>\n          </slot>\n        "}
      </div>
    `;
	}
	onEnter() {
		let e = this.root.querySelector(".input-wrapper");
		e && $(e, {
			opacity: [0, 1],
			y: [8, 0]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 30
		});
	}
	connectedCallback() {
		super.connectedCallback(), this._focused = !1, this._bindEvents();
	}
	_bindEvents() {
		let e = this.root.querySelector(".input-field");
		e && (e.addEventListener("input", (e) => {
			let t = e.target.value, n = this.root.querySelector(".input-wrapper");
			n && (t.length > 0 ? n.classList.add("is-filled") : n.classList.remove("is-filled")), this.dispatchEvent(new CustomEvent("input", {
				detail: { value: t },
				bubbles: !0,
				composed: !0
			}));
		}), e.addEventListener("focus", () => {
			this._focused = !0;
			let e = this.root.querySelector(".input-wrapper");
			e && e.classList.add("is-focused"), this.dispatchEvent(new CustomEvent("focus", {
				bubbles: !0,
				composed: !0
			}));
		}), e.addEventListener("blur", () => {
			this._focused = !1;
			let t = this.root.querySelector(".input-wrapper");
			t && t.classList.remove("is-focused"), this.dispatchEvent(new CustomEvent("blur", {
				bubbles: !0,
				composed: !0
			})), this.dispatchEvent(new CustomEvent("change", {
				detail: { value: e.value },
				bubbles: !0,
				composed: !0
			}));
		}));
	}
	attributeChangedCallback(e, t, n) {
		if (t !== n) if (e === "value") {
			let e = this.root.querySelector(".input-field");
			if (e && e.value !== n) {
				e.value = n ?? "";
				let t = this.root.querySelector(".input-wrapper");
				t && (n && n.length > 0 ? t.classList.add("is-filled") : t.classList.remove("is-filled"));
			}
		} else if (e === "error") {
			let e = this.root.querySelector(".input-wrapper");
			e && (n && n.length > 0 ? (e.classList.add("has-error"), $(e, { x: [
				0,
				-4,
				4,
				-4,
				4,
				0
			] }, {
				duration: .4,
				ease: "easeInOut"
			})) : e.classList.remove("has-error")), this.render(), this._bindEvents();
		} else this.render(), this._bindEvents();
	}
	focus() {
		let e = this.root.querySelector(".input-field");
		e && e.focus();
	}
	blur() {
		let e = this.root.querySelector(".input-field");
		e && e.blur();
	}
	clear() {
		this.setAttribute("value", "");
		let e = this.root.querySelector(".input-field");
		e && (e.value = "");
		let t = this.root.querySelector(".input-wrapper");
		t && t.classList.remove("is-filled");
	}
	get value() {
		return this.attr("value", "");
	}
	set value(e) {
		this.setAttribute("value", e);
	}
};
i(no, "observedAttributes", [
	"type",
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"error",
	"size",
	"variant"
]), customElements.define("fm-input", no);
//#endregion
//#region src/components/fm-textarea.js
var ro = class extends a {
	template() {
		let e = this.attr("value", ""), t = this.attr("placeholder", ""), n = this.boolAttr("disabled"), r = this.boolAttr("readonly"), i = this.boolAttr("required"), a = this.attr("error", ""), o = this.attr("size", "md"), s = this.attr("variant", "default"), c = parseInt(this.attr("rows", "3"), 10) || 3, l = parseInt(this.attr("maxrows", "10"), 10) || 10, u = this.boolAttr("autoresize"), d = this.attr("maxlength", ""), f = this.boolAttr("showcount"), p = e.length > 0, m = a.length > 0, h = d && d.length > 0, g = e.length, _ = h ? parseInt(d, 10) : 0, v = {
			sm: "size-sm",
			md: "size-md",
			lg: "size-lg"
		}[o] || "size-md", y = {
			default: "variant-default",
			filled: "variant-filled",
			outlined: "variant-outlined"
		}[s] || "variant-default", b = n ? "is-disabled" : "", x = m ? "has-error" : "", S = this._focused ? "is-focused" : "", C = p || this._focused ? "is-filled" : "", w = o === "sm" ? 20 : o === "lg" ? 28 : 24, T = o === "sm" ? 24 : o === "lg" ? 40 : 32, E = c * w + T;
		return `
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
          max-height: ${u ? l * w + T + "px" : "none"};
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
          min-height: ${Math.max(E, 60)}px;
        }

        .size-md .textarea-field {
          padding: var(--fm-space-md);
          font-size: var(--fm-font-size-md);
          min-height: ${Math.max(E, 76)}px;
        }

        .size-lg .textarea-field {
          padding: var(--fm-space-lg);
          font-size: var(--fm-font-size-lg);
          min-height: ${Math.max(E, 92)}px;
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
          ${n ? "disabled" : ""}
          ${r ? "readonly" : ""}
          ${i ? "required" : ""}
          ${h ? `maxlength="${d}"` : ""}
          aria-invalid="${m ? "true" : "false"}"
          aria-describedby="${m ? "error-msg" : ""}"
        >${e}</textarea>
        ${f && h ? `
          <div class="char-count ${g > _ * .9 ? "is-near-limit" : ""} ${m ? "has-error" : ""}" part="count">
            ${g}/${_}
          </div>
        ` : ""}
        ${m ? `
          <div class="error-message" id="error-msg" part="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
            ${a}
          </div>
        ` : f ? "" : "\n          <slot name=\"helper\">\n            <div class=\"helper-text\" part=\"helper\">\n              <slot name=\"helper-text\"></slot>\n            </div>\n          </slot>\n        "}
      </div>
    `;
	}
	onEnter() {
		let e = this.root.querySelector(".textarea-wrapper");
		e && $(e, {
			opacity: [0, 1],
			y: [8, 0]
		}, {
			type: "spring",
			stiffness: 400,
			damping: 30
		});
	}
	connectedCallback() {
		super.connectedCallback(), this._focused = !1, this._bindEvents();
	}
	_bindEvents() {
		let e = this.root.querySelector(".textarea-field");
		e && (e.addEventListener("input", (t) => {
			let n = t.target.value, r = this.root.querySelector(".textarea-wrapper");
			r && (n.length > 0 ? r.classList.add("is-filled") : r.classList.remove("is-filled")), this.boolAttr("autoresize") && this._autoResize(e), this.boolAttr("showcount") && this._updateCharCount(n.length), this.dispatchEvent(new CustomEvent("input", {
				detail: { value: n },
				bubbles: !0,
				composed: !0
			}));
		}), e.addEventListener("focus", () => {
			this._focused = !0;
			let e = this.root.querySelector(".textarea-wrapper");
			e && e.classList.add("is-focused"), this.dispatchEvent(new CustomEvent("focus", {
				bubbles: !0,
				composed: !0
			}));
		}), e.addEventListener("blur", () => {
			this._focused = !1;
			let t = this.root.querySelector(".textarea-wrapper");
			t && t.classList.remove("is-focused"), this.dispatchEvent(new CustomEvent("blur", {
				bubbles: !0,
				composed: !0
			})), this.dispatchEvent(new CustomEvent("change", {
				detail: { value: e.value },
				bubbles: !0,
				composed: !0
			}));
		}));
	}
	_autoResize(e) {
		e.style.height = "auto";
		let t = parseInt(getComputedStyle(e).lineHeight, 10) || 24, n = parseInt(getComputedStyle(e).paddingTop, 10) + parseInt(getComputedStyle(e).paddingBottom, 10), r = (parseInt(this.attr("maxrows", "10"), 10) || 10) * t + n, i = Math.min(e.scrollHeight, r);
		e.style.height = `${i}px`, e.style.resize = e.scrollHeight > r ? "vertical" : "none";
	}
	_updateCharCount(e) {
		let t = this.root.querySelector(".char-count");
		if (!t) return;
		let n = parseInt(this.attr("maxlength", "0"), 10) || 0, r = n > 0 && e > n * .9;
		t.textContent = `${e}/${n}`, r ? t.classList.add("is-near-limit") : t.classList.remove("is-near-limit");
	}
	attributeChangedCallback(e, t, n) {
		if (t !== n) if (e === "value") {
			let e = this.root.querySelector(".textarea-field");
			if (e && e.value !== n) {
				e.value = n ?? "";
				let t = this.root.querySelector(".textarea-wrapper");
				t && (n && n.length > 0 ? t.classList.add("is-filled") : t.classList.remove("is-filled")), this.boolAttr("autoresize") && this._autoResize(e), this.boolAttr("showcount") && this._updateCharCount((n ?? "").length);
			}
		} else if (e === "error") {
			let e = this.root.querySelector(".textarea-wrapper");
			e && (n && n.length > 0 ? (e.classList.add("has-error"), $(e, { x: [
				0,
				-4,
				4,
				-4,
				4,
				0
			] }, {
				duration: .4,
				ease: "easeInOut"
			})) : e.classList.remove("has-error")), this.render(), this._bindEvents();
		} else this.render(), this._bindEvents();
	}
	focus() {
		let e = this.root.querySelector(".textarea-field");
		e && e.focus();
	}
	blur() {
		let e = this.root.querySelector(".textarea-field");
		e && e.blur();
	}
	clear() {
		this.setAttribute("value", "");
		let e = this.root.querySelector(".textarea-field");
		e && (e.value = "", e.style.height = "auto");
		let t = this.root.querySelector(".textarea-wrapper");
		t && t.classList.remove("is-filled"), this.boolAttr("showcount") && this._updateCharCount(0);
	}
	insertText(e) {
		let t = this.root.querySelector(".textarea-field");
		if (!t) return;
		let n = t.selectionStart, r = t.selectionEnd, i = t.value, a = i.substring(0, n) + e + i.substring(r);
		this.value = a, setTimeout(() => {
			t.selectionStart = t.selectionEnd = n + e.length;
		}, 0);
	}
	get value() {
		return this.attr("value", "");
	}
	set value(e) {
		this.setAttribute("value", e);
	}
};
i(ro, "observedAttributes", [
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"error",
	"size",
	"variant",
	"rows",
	"maxrows",
	"autoresize",
	"maxlength",
	"showcount"
]), customElements.define("fm-textarea", ro);
//#endregion
export { Ka as FmAlert, Ua as FmBadge, Ja as FmBreadcrumb, Va as FmButton, Ha as FmCard, qa as FmCheckbox, Ya as FmClipboard, Xa as FmCollapsible, Za as FmDropdown, a as FmElement, no as FmInput, Qa as FmPagination, eo as FmSparkline, Ga as FmTab, Wa as FmTabs, ro as FmTextarea, to as FmTooltip, e as themeStyles };
