import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-tooltip> — A polished tooltip for contextual help and information.
 *
 * Attributes:
 *   text     — the tooltip text to display
 *   position — "top" (default) | "bottom" | "left" | "right"
 *   variant  — "dark" (default) | "primary" | "secondary" | "light"
 *
 * Slots:
 *   (default) — the trigger element
 *
 * Animations:
 *   - Show: spring pop-in + fade from the relevant direction
 *   - Hide: fade out
 */
export class FmTooltip extends FmElement {
  static observedAttributes = ["text", "position", "variant"];

  template() {
    const text = this.attr("text", "");
    const position = this.attr("position", "top");
    const variant = this.attr("variant", "dark");

    return /* html */ `
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
      <div class="tip ${position} ${variant}" part="tip">${text}</div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    // Bind events to the host element itself to capture all hover/focus
    this.addEventListener("mouseenter", this._handleShow);
    this.addEventListener("mouseleave", this._handleHide);
    this.addEventListener("focusin", this._handleShow);
    this.addEventListener("focusout", this._handleHide);
  }

  _handleShow = () => {
    const tip = this.root.querySelector(".tip");
    if (!tip) return;

    const position = this.attr("position", "top");

    // Keep the centering transform while animating the offset
    const isHorizontal = position === "top" || position === "bottom";
    const centering = isHorizontal ? "translateX(-50%)" : "translateY(-50%)";

    const offsets = {
      top: `${centering} translateY(6px)`,
      bottom: `${centering} translateY(-6px)`,
      left: `${centering} translateX(6px)`,
      right: `${centering} translateX(-6px)`,
    };

    const finals = {
      top: `${centering} translateY(0)`,
      bottom: `${centering} translateY(0)`,
      left: `${centering} translateX(0)`,
      right: `${centering} translateX(0)`,
    };

    // Make visible first
    tip.style.visibility = "visible";

    animate(tip, {
      opacity: [0, 1],
      transform: [offsets[position] ?? offsets.top, finals[position] ?? finals.top],
    }, {
      type: "spring",
      stiffness: 400,
      damping: 20,
    });
  };

  _handleHide = () => {
    const tip = this.root.querySelector(".tip");
    if (!tip) return;

    animate(tip, { opacity: 0 }, { duration: 0.15 }).then(() => {
      if (tip.style.opacity === "0") {
        tip.style.visibility = "hidden";
      }
    });
  };

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-tooltip", FmTooltip);
