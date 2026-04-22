import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-input> — A polished text input with smooth animations.
 *
 * Attributes:
 *   type        — "text" (default) | "password" | "email" | "number" | "search" | "tel" | "url"
 *   value       — string (controlled value)
 *   placeholder — string
 *   disabled    — boolean
 *   readonly    — boolean
 *   required    — boolean
 *   error       — string (error message)
 *   size        — "sm" | "md" (default) | "lg"
 *   variant     — "default" | "filled" | "outlined"
 *
 * Events:
 *   input  — { value: string } — fired on every keystroke
 *   change — { value: string } — fired on blur after change
 *   focus  — fired when input receives focus
 *   blur   — fired when input loses focus
 */
export class FmInput extends FmElement {
  static observedAttributes = ["type", "value", "placeholder", "disabled", "readonly", "required", "error", "size", "variant"];

  template() {
    const type = this.attr("type", "text");
    const value = this.attr("value", "");
    const placeholder = this.attr("placeholder", "");
    const disabled = this.boolAttr("disabled");
    const readonly = this.boolAttr("readonly");
    const required = this.boolAttr("required");
    const error = this.attr("error", "");
    const size = this.attr("size", "md");
    const variant = this.attr("variant", "default");

    const hasValue = value.length > 0;
    const hasError = error.length > 0;

    const sizeClasses = {
      sm: "size-sm",
      md: "size-md",
      lg: "size-lg",
    }[size] || "size-md";

    const variantClasses = {
      default: "variant-default",
      filled: "variant-filled",
      outlined: "variant-outlined",
    }[variant] || "variant-default";

    const disabledClass = disabled ? "is-disabled" : "";
    const errorClass = hasError ? "has-error" : "";
    const focusedClass = this._focused ? "is-focused" : "";
    const filledClass = hasValue || this._focused ? "is-filled" : "";

    return /* html */ `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* ---- Variants ---- */
        .variant-default .input-field {
          background: var(--fm-color-surface);
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-default .input-field:hover:not(:disabled) {
          border-color: var(--fm-color-border);
        }
        .variant-default.is-focused .input-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-default.has-error .input-field {
          border-color: var(--fm-color-error);
        }
        .variant-default.has-error.is-focused .input-field {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }

        .variant-filled .input-field {
          background: var(--fm-color-surface-muted);
          border: 1.5px solid transparent;
          border-radius: var(--fm-radius-md);
        }
        .variant-filled .input-field:hover:not(:disabled) {
          background: var(--fm-color-surface-alt);
        }
        .variant-filled.is-focused .input-field {
          background: var(--fm-color-surface);
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-filled.has-error .input-field {
          border-color: var(--fm-color-error);
        }

        .variant-outlined .input-field {
          background: transparent;
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-outlined .input-field:hover:not(:disabled) {
          border-color: var(--fm-color-primary-light);
        }
        .variant-outlined.is-focused .input-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-outlined.has-error .input-field {
          border-color: var(--fm-color-error);
        }

        /* ---- Sizes ---- */
        .input-field {
          width: 100%;
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-normal);
          color: var(--fm-color-text);
          transition: all var(--fm-transition-fast);
          outline: none;
        }
        .input-field::placeholder {
          color: var(--fm-color-text-secondary);
          opacity: 0.6;
        }
        .input-field:disabled {
          background: var(--fm-color-surface-muted);
          cursor: not-allowed;
          opacity: 0.6;
        }

        .size-sm .input-field {
          height: 36px;
          padding: 0 var(--fm-space-sm);
          font-size: var(--fm-font-size-sm);
        }

        .size-md .input-field {
          height: 44px;
          padding: 0 var(--fm-space-md);
          font-size: var(--fm-font-size-md);
        }

        .size-lg .input-field {
          height: 52px;
          padding: 0 var(--fm-space-lg);
          font-size: var(--fm-font-size-lg);
        }

        /* ---- Error Message ---- */
        .error-message {
          display: flex;
          align-items: center;
          gap: var(--fm-space-xs);
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-error);
          font-weight: var(--fm-font-weight-medium);
        }
        .error-message svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* ---- Helper Text ---- */
        .helper-text {
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-text-secondary);
        }
        .helper-text.has-error {
          display: none;
        }
      </style>

      <div class="input-wrapper ${sizeClasses} ${variantClasses} ${disabledClass} ${errorClass} ${focusedClass} ${filledClass}">
        <input
          class="input-field"
          part="input"
          type="${type}"
          value="${value}"
          placeholder="${placeholder}"
          ${disabled ? 'disabled' : ''}
          ${readonly ? 'readonly' : ''}
          ${required ? 'required' : ''}
          aria-invalid="${hasError ? 'true' : 'false'}"
          aria-describedby="${hasError ? 'error-msg' : ''}"
        />
        ${hasError ? /* html */ `
          <div class="error-message" id="error-msg" part="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
              <path d="M12 8v4"/>
              <path d="M12 16h.01"/>
            </svg>
            ${error}
          </div>
        ` : /* html */ `
          <slot name="helper">
            <div class="helper-text" part="helper">
              <slot name="helper-text"></slot>
            </div>
          </slot>
        `}
      </div>
    `;
  }

  onEnter() {
    const wrapper = this.root.querySelector(".input-wrapper");
    if (wrapper) {
      animate(wrapper, { opacity: [0, 1], y: [8, 0] }, {
        type: "spring",
        stiffness: 400,
        damping: 30,
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._focused = false;
    this._bindEvents();
  }

  _bindEvents() {
    const input = this.root.querySelector(".input-field");
    if (!input) return;

    // Input event
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      
      // Update filled state
      const wrapper = this.root.querySelector(".input-wrapper");
      if (wrapper) {
        if (value.length > 0) {
          wrapper.classList.add("is-filled");
        } else {
          wrapper.classList.remove("is-filled");
        }
      }

      this.dispatchEvent(new CustomEvent("input", {
        detail: { value },
        bubbles: true,
        composed: true,
      }));
    });

    // Focus event
    input.addEventListener("focus", () => {
      this._focused = true;
      const wrapper = this.root.querySelector(".input-wrapper");
      if (wrapper) {
        wrapper.classList.add("is-focused");
      }

      this.dispatchEvent(new CustomEvent("focus", {
        bubbles: true,
        composed: true,
      }));
    });

    // Blur event
    input.addEventListener("blur", () => {
      this._focused = false;
      const wrapper = this.root.querySelector(".input-wrapper");
      if (wrapper) {
        wrapper.classList.remove("is-focused");
      }

      this.dispatchEvent(new CustomEvent("blur", {
        bubbles: true,
        composed: true,
      }));

      // Change event on blur
      this.dispatchEvent(new CustomEvent("change", {
        detail: { value: input.value },
        bubbles: true,
        composed: true,
      }));
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    
    // Update the input value without full re-render for value attribute
    if (name === "value") {
      const input = this.root.querySelector(".input-field");
      if (input && input.value !== newValue) {
        input.value = newValue ?? "";
        
        // Update filled state
        const wrapper = this.root.querySelector(".input-wrapper");
        if (wrapper) {
          if (newValue && newValue.length > 0) {
            wrapper.classList.add("is-filled");
          } else {
            wrapper.classList.remove("is-filled");
          }
        }
      }
    } else if (name === "error") {
      // Update error state without full re-render
      const wrapper = this.root.querySelector(".input-wrapper");
      if (wrapper) {
        if (newValue && newValue.length > 0) {
          wrapper.classList.add("has-error");
          // Trigger shake animation
          animate(wrapper, { x: [0, -4, 4, -4, 4, 0] }, {
            duration: 0.4,
            ease: "easeInOut",
          });
        } else {
          wrapper.classList.remove("has-error");
        }
      }
      // Re-render to show/hide error message
      this.render();
      this._bindEvents();
    } else {
      this.render();
      this._bindEvents();
    }
  }

  // Public API methods
  focus() {
    const input = this.root.querySelector(".input-field");
    if (input) input.focus();
  }

  blur() {
    const input = this.root.querySelector(".input-field");
    if (input) input.blur();
  }

  clear() {
    this.setAttribute("value", "");
    const input = this.root.querySelector(".input-field");
    if (input) input.value = "";
    
    const wrapper = this.root.querySelector(".input-wrapper");
    if (wrapper) wrapper.classList.remove("is-filled");
  }

  get value() {
    return this.attr("value", "");
  }

  set value(val) {
    this.setAttribute("value", val);
  }
}

customElements.define("fm-input", FmInput);
