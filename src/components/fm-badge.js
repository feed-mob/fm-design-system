import { FmElement } from "../core/fm-element.js";

/**
 * <fm-badge> — A compact status indicator / label for FM Agency.
 *
 * Attributes:
 *   variant  — "primary" (default) | "secondary" | "success" | "warning" | "error" | "neutral" | "tag"
 *   dot      — boolean, shows a leading status dot
 *   removable — boolean, shows X button (for tag variant)
 *
 * Events:
 *   - fm-remove: fired when removable tag's X button is clicked
 */
export class FmBadge extends FmElement {
  static observedAttributes = ["variant", "dot", "removable"];

  template() {
    const variant = this.attr("variant", "primary");
    const dot = this.boolAttr("dot");
    const removable = this.boolAttr("removable");

    const removeButton = removable ? `
      <button class="remove-btn" part="remove" aria-label="Remove" tabindex="-1">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 4L4 8M4 4l4 4"/>
        </svg>
      </button>
    ` : "";

    return /* html */ `
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

      <span class="badge ${variant}" part="badge">
        ${dot ? '<span class="dot"></span>' : ""}
        <slot></slot>
        ${removeButton}
      </span>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindRemoveEvent();
  }

  _bindRemoveEvent() {
    const removeBtn = this.root.querySelector(".remove-btn");
    if (!removeBtn) return;

    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      
      // Dispatch remove event
      this.dispatchEvent(new CustomEvent("fm-remove", {
        bubbles: true,
        composed: true,
        detail: { 
          text: this.textContent?.trim() 
        }
      }));

      // Hide the badge
      this.style.display = "none";
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindRemoveEvent();
  }
}

customElements.define("fm-badge", FmBadge);
