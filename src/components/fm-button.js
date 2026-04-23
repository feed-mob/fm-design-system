import { FmElement } from "../core/fm-element.js";

/**
 * <fm-button> — A polished, professional button for FM Agency.
 *
 * Attributes:
 *   variant  — "primary" (default) | "secondary" | "outline" | "ghost" | "text"
 *   disabled — boolean
 *   arrow    — boolean (adds arrow icon for text variant)
 */
export class FmButton extends FmElement {
  static observedAttributes = ["variant", "disabled", "arrow"];

  template() {
    const variant = this.attr("variant", "primary");
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
        class="${variant}"
        ${disabled ? "disabled" : ""}
        part="button"
      >
        <slot></slot>
        ${arrowIcon}
      </button>
    `;
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("fm-button", FmButton);
