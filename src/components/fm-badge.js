import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-badge> — A compact status indicator / label for FM Agency.
 *
 * Attributes:
 *   variant  — "primary" (default) | "secondary" | "success" | "warning" | "error" | "neutral" | "tag"
 *   size     — "sm" | "md" (default)
 *   dot      — boolean, shows a leading status dot
 *   animate  — "none" (default) | "pulse"
 *   removable — boolean, shows X button (for tag variant)
 *
 * Animations (Motion):
 *   - Entrance: scales in from 0 with spring physics
 *   - Pulse: subtle recurring scale animation for attention
 *   - Remove: fade out + scale down when tag is removed
 * 
 * Events:
 *   - fm-remove: fired when removable tag's X button is clicked
 */
export class FmBadge extends FmElement {
  static observedAttributes = ["variant", "size", "dot", "animate", "removable"];

  template() {
    const variant = this.attr("variant", "primary");
    const size = this.attr("size", "md");
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

        /* Tag variant: outlined style with border, for removable chips */
        .badge.tag {
          background: var(--fm-color-surface);
          color: var(--fm-color-text);
          border: 1px solid var(--fm-color-border);
          padding: 3px 10px;
        }
        .badge.tag.sm {
          padding: 1px 6px;
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
        .badge.sm .remove-btn {
          width: 12px;
          height: 12px;
          margin: 0 -1px 0 1px;
        }
        .badge.sm .remove-btn svg {
          width: 10px;
          height: 10px;
        }
      </style>

      <span class="badge ${variant} ${size}" part="badge">
        ${dot ? '<span class="dot"></span>' : ""}
        <slot></slot>
        ${removeButton}
      </span>
    `;
  }

  /* ---- Animations ---- */

  onEnter() {
    const badge = this.root.querySelector(".badge");
    const animType = this.attr("animate", "none");

    // Entrance: pop in
    animate(badge, { scale: [0, 1], opacity: [0, 1] }, {
      type: "spring",
      stiffness: 400,
      damping: 22,
    });

    // Optional continuous pulse
    if (animType === "pulse") {
      this._startPulse(badge);
    }
  }

  _startPulse(el) {
    const run = () => {
      this._pulseAnim = animate(
        el,
        { scale: [1, 1.06, 1] },
        { duration: 1.8, ease: "easeInOut" },
      );
      this._pulseAnim.finished.then(() => {
        if (this.isConnected) run();
      });
    };
    run();
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

      // Animate removal
      const badge = this.root.querySelector(".badge");
      animate(badge, { scale: [1, 0.8], opacity: [1, 0] }, {
        duration: 0.15,
        ease: "easeIn"
      }).finished.then(() => {
        this.style.display = "none";
      });
    });
  }

  disconnectedCallback() {
    if (this._pulseAnim) {
      this._pulseAnim.cancel();
    }
  }

  attributeChangedCallback() {
    this.render();
    this._bindRemoveEvent();
  }
}

customElements.define("fm-badge", FmBadge);
