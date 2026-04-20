import { themeStyles } from "./theme.js";

/**
 * FmElement — Base class for all FM Design System web components.
 *
 * Provides:
 *  - Shadow DOM with shared theme tokens injected automatically
 *  - Lifecycle hooks for entrance animations (onEnter)
 *  - Attribute-to-property reflection helpers
 *  - Single render() pipeline: theme styles + component template()
 */
export class FmElement extends HTMLElement {
  /** @type {ShadowRoot} */
  root;

  /** @type {boolean} Tracks whether entrance animation has played */
  _entered = false;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  /* ------------------------------------------------------------------ */
  /*  Lifecycle                                                          */
  /* ------------------------------------------------------------------ */

  connectedCallback() {
    this.render();
    if (!this._entered) {
      this._entered = true;
      this.onEnter();
    }
  }

  disconnectedCallback() {
    /* subclasses can override for cleanup */
  }

  /* ------------------------------------------------------------------ */
  /*  Rendering                                                          */
  /* ------------------------------------------------------------------ */

  /**
   * Override in subclasses to return the component's inner HTML.
   * @returns {string}
   */
  template() {
    return "";
  }

  /**
   * Full render — injects shared theme + component template into shadow DOM.
   */
  render() {
    this.root.innerHTML = `<style>${themeStyles}</style>${this.template()}`;
  }

  /* ------------------------------------------------------------------ */
  /*  Animation lifecycle                                                */
  /* ------------------------------------------------------------------ */

  /**
   * Called once the first time the component is connected.
   * Override in subclasses to add entrance animations via Motion.
   */
  onEnter() {
    /* default: no-op */
  }

  /* ------------------------------------------------------------------ */
  /*  Attribute helpers                                                   */
  /* ------------------------------------------------------------------ */

  /** Read a string attribute with fallback */
  attr(name, fallback = "") {
    return this.getAttribute(name) ?? fallback;
  }

  /** Check if a boolean attribute is present */
  boolAttr(name) {
    return this.hasAttribute(name);
  }
}
