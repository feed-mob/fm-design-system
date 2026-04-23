import { FmElement } from "../core/fm-element.js";
import { animate, hover, press } from "motion";

/**
 * <fm-clipboard> — A copy-to-clipboard component for FM Agency.
 *
 * Attributes:
 *   text       — The text to copy (required unless using slotted text)
 *   label      — Button label text (default: "Copy")
 *   variant    — "button" (default) | "icon" | "inline"
 *   feedback   — "tooltip" | "none" (default: "tooltip")
 *   feedback-text — Text shown after copy (default: "Copied!")
 *   position   — "right" (default) | "left" — Icon position for inline variant
 *   hide-icon  — boolean, hides the copy icon
 *
 * Animations (Motion):
 *   - Entrance: Fade-in with slide
 *   - Hover: Gentle lift with shadow
 *   - Press: Tactile press-down
 *   - Success: Checkmark morph + feedback animation
 */
export class FmClipboard extends FmElement {
  static observedAttributes = ["text", "label", "variant", "feedback", "feedback-text", "position", "hide-icon"];

  template() {
    const variant = this.attr("variant", "button");
    const label = this.attr("label", "Copy");
    const position = this.attr("position", "right");
    const hideIcon = this.boolAttr("hide-icon");
    const feedbackText = this.attr("feedback-text", "Copied!");

    // Icon container with both copy and check icons
    const iconContainer = !hideIcon ? `
      <span class="icon-container">
        <svg class="icon-copy" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg class="icon-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    ` : "";

    // Tooltip (hidden by default)
    const tooltip = `
      <div class="tooltip" role="status" aria-live="polite" aria-atomic="true">
        ${feedbackText}
      </div>
    `;

    let content = "";

    if (variant === "button") {
      content = `
        <button class="clipboard-btn ${variant}" part="button" aria-label="Copy to clipboard">
          ${iconContainer}
          <span class="btn-label">${label}</span>
        </button>
      `;
    } else if (variant === "icon") {
      content = `
        <button class="clipboard-btn ${variant}" part="button" aria-label="Copy to clipboard" title="${label}">
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
      `;
    } else if (variant === "inline") {
      if (position === "left") {
        content = `
          <button class="clipboard-btn ${variant}" part="button" aria-label="Copy to clipboard">
            ${iconContainer}
            <span class="inline-text"><slot></slot></span>
          </button>
        `;
      } else {
        content = `
          <button class="clipboard-btn ${variant}" part="button" aria-label="Copy to clipboard">
            <span class="inline-text"><slot></slot></span>
            ${iconContainer}
          </button>
        `;
      }
    }

    return /* html */ `
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

      ${this.attr("feedback", "tooltip") === "tooltip" ? tooltip : ""}
      ${content}
    `;
  }

  /* ---- Animations ---- */

  onEnter() {
    const btn = this.root.querySelector(".clipboard-btn");
    animate(btn, { opacity: [0, 1], y: [4, 0] }, {
      type: "spring",
      stiffness: 400,
      damping: 25,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    const btn = this.root.querySelector(".clipboard-btn");
    if (!btn) return;

    // Click handler for copy
    btn.addEventListener("click", (e) => this._handleCopy(e));

    // Hover animation
    hover(btn, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { y: -1 }, {
        type: "spring",
        stiffness: 450,
        damping: 20,
      });

      return () => {
        animate(element, { y: 0 }, {
          type: "spring",
          stiffness: 450,
          damping: 20,
        });
      };
    });

    // Press animation
    press(btn, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 0.96 }, {
        type: "spring",
        stiffness: 500,
        damping: 22,
      });

      return () => {
        animate(element, { scale: 1 }, {
          type: "spring",
          stiffness: 450,
          damping: 18,
        });
      };
    });
  }

  async _handleCopy(e) {
    e.preventDefault();
    e.stopPropagation();

    const btn = this.root.querySelector(".clipboard-btn");
    const feedback = this.attr("feedback", "tooltip");

    // Get text to copy
    let textToCopy = this.attr("text", "");
    
    // If no text attribute, try to get from slotted content
    if (!textToCopy && this.attr("variant", "button") === "inline") {
      const slot = btn.querySelector(".inline-text slot");
      if (slot) {
        const assignedNodes = slot.assignedNodes({ flatten: true });
        textToCopy = assignedNodes.map(node => node.textContent).join("").trim();
      }
    }

    if (!textToCopy) {
      console.warn("fm-clipboard: No text to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      this._showSuccess(btn, feedback);
    } catch (err) {
      console.error("fm-clipboard: Failed to copy", err);
      // Fallback: try using execCommand
      this._fallbackCopy(textToCopy, btn, feedback);
    }
  }

  _fallbackCopy(text, btn, feedback) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      const success = document.execCommand("copy");
      if (success) {
        this._showSuccess(btn, feedback);
      }
    } catch (err) {
      console.error("fm-clipboard: Fallback copy failed", err);
    }
    
    document.body.removeChild(textArea);
  }

  _showSuccess(btn, feedback) {
    const variant = this.attr("variant", "button");

    // Add success class for icon swap
    btn.classList.add("success");

    // Animate the checkmark (spring only supports 2 keyframes)
    const checkIcon = btn.querySelector(".icon-check");
    if (checkIcon) {
      animate(checkIcon, { 
        scale: [0.5, 1],
        opacity: [0, 1] 
      }, {
        type: "spring",
        stiffness: 500,
        damping: 20,
      });
    }

    // Show feedback
    if (feedback === "tooltip") {
      const tooltip = this.root.querySelector(".tooltip");
      if (tooltip) {
        // Note: tooltip has transform: translateX(-50%) in CSS for centering
        // We animate y via margin-top to avoid overriding the transform
        animate(tooltip, {
          opacity: [0, 1],
          marginTop: ["4px", "0px"]
        }, {
          type: "spring",
          stiffness: 450,
          damping: 20,
        });

        setTimeout(() => {
          animate(tooltip, {
            opacity: 0,
            marginTop: "-4px"
          }, {
            duration: 0.2,
          });
        }, 1500);
      }
    }

    // Reset after animation
    setTimeout(() => {
      btn.classList.remove("success");
      // Reset check icon to hidden state - clear Motion's inline styles
      const checkIcon = btn.querySelector(".icon-check");
      if (checkIcon) {
        checkIcon.style.opacity = "0";
        checkIcon.style.scale = "0.5";
      }
    }, 2000);

    // Dispatch success event
    this.dispatchEvent(new CustomEvent("fm-copy", {
      bubbles: true,
      composed: true,
      detail: { text: this.attr("text", "") }
    }));
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-clipboard", FmClipboard);
