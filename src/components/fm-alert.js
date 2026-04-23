import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-alert> — Alert / notification component for FM Agency.
 *
 * Attributes:
 *   variant     — "info" (default) | "success" | "warning" | "error"
 *   dismissible — boolean, shows close button
 *   title       — string, alert title text
 *
 * Slots:
 *   (default) — alert message content
 *   icon      — custom icon (overrides default)
 *
 * Animations (Motion):
 *   - Entrance: slide in from top with fade
 *   - Exit: slide up and fade out when dismissed
 */
export class FmAlert extends FmElement {
  static observedAttributes = ["variant", "dismissible", "title"];

  template() {
    const variant = this.attr("variant", "info");
    const dismissible = this.boolAttr("dismissible");
    const title = this.attr("title", "");

    // Default icons from Tabler Icons (https://tabler.io/icons)
    const defaultIcons = {
      info: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
      </svg>`,
      success: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M9 12l2 2l4 -4" />
      </svg>`,
      warning: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 9v4" />
        <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
        <path d="M12 16h.01" />
      </svg>`,
      error: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg>`,
    };

    return /* html */ `
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

      <div class="alert ${variant} ${title ? 'has-title' : ''}" part="alert">
        <div class="icon-wrapper">
          <slot name="icon">${defaultIcons[variant] || defaultIcons.info}</slot>
        </div>
        <div class="content">
          ${title ? `<div class="title" part="title">${title}</div>` : ""}
          <div class="message" part="message">
            <slot></slot>
          </div>
        </div>
        ${dismissible ? `
          <button class="close-btn" part="close-btn" aria-label="Dismiss alert">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        ` : ""}
      </div>
    `;
  }

  /* ---- Animations ---- */

  onEnter() {
    const alert = this.root.querySelector(".alert");
    animate(alert, { opacity: [0, 1], y: [-8, 0] }, {
      type: "spring",
      stiffness: 350,
      damping: 25,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const closeBtn = this.root.querySelector(".close-btn");
    if (!closeBtn) return;

    closeBtn.addEventListener("click", () => this.dismiss());
  }

  /**
   * Dismiss the alert with exit animation
   */
  dismiss() {
    const alert = this.root.querySelector(".alert");
    if (!alert || alert.classList.contains("hidden")) return;

    animate(alert, { opacity: [1, 0], y: [0, -8], scale: [1, 0.98] }, {
      type: "spring",
      stiffness: 400,
      damping: 30,
    }).finished.then(() => {
      alert.classList.add("hidden");
      this.dispatchEvent(new CustomEvent("dismiss", { bubbles: true }));
    });
  }

  /**
   * Show the alert again
   */
  show() {
    const alert = this.root.querySelector(".alert");
    if (!alert) return;

    alert.classList.remove("hidden");
    this.onEnter();
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-alert", FmAlert);
