import { FmElement } from "../core/fm-element.js";
import { animate, hover } from "motion";

/**
 * <fm-card> — A clean, professional content card for FM Agency.
 *
 * Attributes:
 *   variant   — "default" | "outlined" | "elevated"
 *   hoverable — boolean, adds subtle lift on hover
 *
 * Slots:
 *   (default) — main body content
 *   header    — card header / title area
 *   footer    — card footer / actions area
 *
 * Animations (Motion):
 *   - Entrance: fade + slide up with spring easing
 *   - Hover (if hoverable): refined lift with shadow elevation
 */
export class FmCard extends FmElement {
  static observedAttributes = ["variant", "hoverable"];

  template() {
    const variant = this.attr("variant", "default");
    const hoverable = this.boolAttr("hoverable");

    return /* html */ `
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

      <div class="card ${variant} ${hoverable ? "hoverable" : ""}" part="card">
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

  /* ---- Animations ---- */

  onEnter() {
    animate(
      this.root.querySelector(".card"),
      { opacity: [0, 1], y: [12, 0] },
      { type: "spring", stiffness: 280, damping: 24 },
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindHoverEvents();
    this._updateFooterVisibility();

    // Listen for slot changes to update footer visibility
    const footerSlot = this.root.querySelector('slot[name="footer"]');
    if (footerSlot) {
      footerSlot.addEventListener('slotchange', () => this._updateFooterVisibility());
    }
  }

  _updateFooterVisibility() {
    const footerSlot = this.root.querySelector('slot[name="footer"]');
    const footerWrapper = this.root.querySelector('.footer-wrapper');
    if (!footerSlot || !footerWrapper) return;

    const hasContent = footerSlot.assignedNodes().length > 0;
    footerWrapper.classList.toggle('no-content', !hasContent);
  }

  _bindHoverEvents() {
    if (!this.boolAttr("hoverable")) return;

    const card = this.root.querySelector(".card");
    if (!card) return;

    hover(card, (element) => {
      animate(element, { y: -3, scale: 1.01 }, {
        type: "spring",
        stiffness: 400,
        damping: 22,
      });

      return () => {
        animate(element, { y: 0, scale: 1 }, {
          type: "spring",
          stiffness: 400,
          damping: 22,
        });
      };
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindHoverEvents();
  }
}

customElements.define("fm-card", FmCard);
