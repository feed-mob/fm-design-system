import { FmElement } from "../core/fm-element.js";
import { animate, hover, press } from "motion";

/**
 * <fm-button> — A polished, professional button for FM Agency.
 *
 * Attributes:
 *   variant  — "primary" (default) | "secondary" | "tertiary" | "outline" | "ghost" | "text"
 *   size     — "sm" | "md" (default) | "lg"
 *   disabled — boolean
 *   arrow    — boolean (adds arrow icon for text variant)
 *
 * Animations (Motion):
 *   - Entrance: subtle fade-in + upward slide
 *   - Hover: refined lift with shadow enhancement
 *   - Press: tactile press-down with spring physics
 *   - Focus: teal ring indicator
 */
export class FmButton extends FmElement {
  static observedAttributes = ["variant", "size", "disabled", "arrow"];

  template() {
    const variant = this.attr("variant", "primary");
    const size = this.attr("size", "md");
    const disabled = this.boolAttr("disabled");
    const arrow = this.boolAttr("arrow");

    const arrowIcon = arrow ? `<svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>` : "";

    return /* html */ `
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
                      border-color var(--fm-transition-fast),
                      background var(--fm-transition-fast);

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

        /* Tertiary: dark background with subtle border */
        button.tertiary {
          background: var(--fm-color-surface-alt);
          color: var(--fm-color-text);
          border: 1px solid var(--fm-color-border);
          box-shadow: none;
        }
        button.tertiary:hover:not(:disabled) {
          background: var(--fm-color-surface-muted);
          border-color: var(--fm-color-text-secondary);
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
        class="${variant} ${size}"
        ${disabled ? "disabled" : ""}
        part="button"
      >
        <slot></slot>
        ${arrowIcon}
      </button>
    `;
  }

  /* ---- Animations ---- */

  onEnter() {
    const btn = this.root.querySelector("button");
    animate(btn, { opacity: [0, 1], y: [6, 0] }, {
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
    const btn = this.root.querySelector("button");
    if (!btn) return;

    hover(btn, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 1.03, y: -1 }, {
        type: "spring",
        stiffness: 450,
        damping: 20,
      });

      return () => {
        animate(element, { scale: 1, y: 0 }, {
          type: "spring",
          stiffness: 450,
          damping: 20,
        });
      };
    });

    press(btn, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 0.96 }, {
        type: "spring",
        stiffness: 500,
        damping: 22,
      });

      return () => {
        animate(element, { scale: 1.03 }, {
          type: "spring",
          stiffness: 450,
          damping: 18,
        });
      };
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-button", FmButton);
