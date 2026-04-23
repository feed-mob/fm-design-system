import { FmElement } from "../core/fm-element.js";
import { animate, hover, press } from "motion";

/**
 * <fm-checkbox> — A polished checkbox with smooth animations.
 *
 * Attributes:
 *   checked   — boolean
 *   disabled  — boolean
 *   indeterminate — boolean (visual only, shows dash instead of check)
 *
 * Animations (Motion):
 *   - Entrance: subtle fade-in + scale
 *   - Check: spring-pop on checkmark with path draw
 *   - Uncheck: fade-out with scale down
 *   - Hover: gentle lift with shadow
 *   - Press: tactile press-down
 *   - Focus: teal ring indicator
 */
export class FmCheckbox extends FmElement {
  static observedAttributes = ["checked", "disabled", "indeterminate"];

  template() {
    const disabled = this.boolAttr("disabled");
    const checked = this.boolAttr("checked");
    const indeterminate = this.boolAttr("indeterminate");

    const stateClass = checked || indeterminate ? "is-checked" : "";
    const disabledClass = disabled ? "is-disabled" : "";

    return /* html */ `
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          gap: var(--fm-space-sm);
          cursor: pointer;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        :host([disabled]) {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .checkbox-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .checkbox-box {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-sm);
          background: var(--fm-color-surface);
          transition: border-color var(--fm-transition-fast),
                      background-color var(--fm-transition-fast),
                      box-shadow var(--fm-transition-fast);
          position: relative;
          overflow: hidden;
          width: 20px;
          height: 20px;
        }

        .checkbox-box svg {
          width: 12px;
          height: 12px;
        }

        /* ---- States ---- */
        .checkbox-box.is-checked {
          background: var(--fm-color-primary);
          border-color: var(--fm-color-primary);
        }

        .checkbox-box.is-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ---- Focus ---- */
        :host(:focus-visible) .checkbox-box {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* ---- Checkmark ---- */
        .checkmark {
          color: white;
          stroke: currentColor;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          opacity: 0;
          transform: scale(0);
        }

        .checkbox-box.is-checked .checkmark {
          opacity: 1;
          transform: scale(1);
        }

        /* ---- Indeterminate dash ---- */
        .indeterminate-dash {
          width: 60%;
          height: 2px;
          background: white;
          border-radius: 1px;
          opacity: 0;
          transform: scaleX(0);
        }

        .checkbox-box.is-checked .indeterminate-dash {
          opacity: 1;
          transform: scaleX(1);
        }

        /* ---- Label ---- */
        .label {
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          font-weight: var(--fm-font-weight-normal);
        }
      </style>

      <div class="checkbox-wrapper">
        <div
          class="checkbox-box ${stateClass} ${disabledClass}"
          part="checkbox"
          role="checkbox"
          aria-checked="${checked || indeterminate ? "true" : "false"}"
          tabindex="${disabled ? "-1" : "0"}"
        >
          ${indeterminate
            ? /* html */ `<div class="indeterminate-dash" part="dash"></div>`
            : /* html */ `
              <svg class="checkmark" viewBox="0 0 12 12" part="checkmark">
                <path d="M2 6L5 9L10 3" />
              </svg>
            `
          }
        </div>
        <span class="label" part="label">
          <slot></slot>
        </span>
      </div>
    `;
  }

  /* ---- Animation lifecycle ---- */

  onEnter() {
    const wrapper = this.root.querySelector(".checkbox-wrapper");
    animate(wrapper, { opacity: [0, 1], scale: [0.9, 1] }, {
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
    const box = this.root.querySelector(".checkbox-box");
    const wrapper = this.root.querySelector(".checkbox-wrapper");
    if (!box || !wrapper) return;

    // Click to toggle
    wrapper.addEventListener("click", (e) => {
      if (this.boolAttr("disabled")) return;
      e.preventDefault();
      this.toggle();
    });

    // Space key to toggle
    box.addEventListener("keydown", (e) => {
      if (this.boolAttr("disabled")) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        this.toggle();
      }
    });

    // Hover animation
    hover(box, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 1.08 }, {
        type: "spring",
        stiffness: 400,
        damping: 20,
      });

      return () => {
        animate(element, { scale: 1 }, {
          type: "spring",
          stiffness: 400,
          damping: 20,
        });
      };
    });

    // Press animation
    press(box, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 0.92 }, {
        type: "spring",
        stiffness: 500,
        damping: 22,
      });

      return () => {
        animate(element, { scale: 1.08 }, {
          type: "spring",
          stiffness: 400,
          damping: 18,
        });
      };
    });

    // Initial checkmark animation if checked
    if (this.boolAttr("checked") || this.boolAttr("indeterminate")) {
      this._animateCheck(true);
    }
  }

  toggle() {
    const wasChecked = this.boolAttr("checked") || this.boolAttr("indeterminate");
    
    if (wasChecked) {
      this.removeAttribute("checked");
      this.removeAttribute("indeterminate");
    } else {
      this.setAttribute("checked", "");
    }

    this._animateCheck(!wasChecked);
    
    // Dispatch change event
    this.dispatchEvent(new CustomEvent("change", {
      detail: { checked: !wasChecked },
      bubbles: true,
      composed: true,
    }));
  }

  _animateCheck(isChecking) {
    const box = this.root.querySelector(".checkbox-box");
    const checkmark = this.root.querySelector(".checkmark");
    const dash = this.root.querySelector(".indeterminate-dash");
    
    if (!box) return;

    // Animate the box background
    animate(box, {
      backgroundColor: isChecking ? "var(--fm-color-primary)" : "var(--fm-color-surface)",
      borderColor: isChecking ? "var(--fm-color-primary)" : "var(--fm-color-border-strong)",
    }, { duration: 0.15 });

    // Animate the checkmark or dash
    const icon = checkmark || dash;
    if (icon) {
      if (isChecking) {
        animate(icon, { opacity: [0, 1], scale: [0, 1], x: ["-20%", "0%"] }, {
          type: "spring",
          stiffness: 500,
          damping: 20,
        });
      } else {
        animate(icon, { opacity: 0, scale: 0.5 }, {
          duration: 0.15,
          ease: "easeOut",
        });
      }
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Only re-render for structural changes, not for animation state
    if (name === "disabled") {
      this.render();
      this._bindEvents();
    } else if (name === "checked" || name === "indeterminate") {
      const wasChecked = oldValue !== null;
      const isChecked = newValue !== null;
      
      if (wasChecked !== isChecked) {
        // Update classes for styling
        const box = this.root.querySelector(".checkbox-box");
        if (box) {
          if (isChecked) {
            box.classList.add("is-checked");
          } else {
            box.classList.remove("is-checked");
          }
          box.setAttribute("aria-checked", isChecked ? "true" : "false");
        }
        this._animateCheck(isChecked);
      }
    }
  }
}

customElements.define("fm-checkbox", FmCheckbox);
