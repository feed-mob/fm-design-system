import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-badge> — A compact status indicator / label for FM Agency.
 *
 * Attributes:
 *   variant  — "primary" (default) | "secondary" | "success" | "warning" | "error" | "neutral"
 *   size     — "sm" | "md" (default)
 *   dot      — boolean, shows a leading status dot
 *   animate  — "none" (default) | "pulse"
 *
 * Animations (Motion):
 *   - Entrance: scales in from 0 with spring physics
 *   - Pulse: subtle recurring scale animation for attention
 */
export class FmBadge extends FmElement {
  static observedAttributes = ["variant", "size", "dot", "animate"];

  template() {
    const variant = this.attr("variant", "primary");
    const size = this.attr("size", "md");
    const dot = this.boolAttr("dot");

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

      <span class="badge ${variant} ${size}" part="badge">
        ${dot ? '<span class="dot"></span>' : ""}
        <slot></slot>
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
        { duration: 1.8, ease: "ease-in-out" },
      );
      this._pulseAnim.finished.then(() => {
        if (this.isConnected) run();
      });
    };
    run();
  }

  disconnectedCallback() {
    if (this._pulseAnim) {
      this._pulseAnim.cancel();
    }
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("fm-badge", FmBadge);
