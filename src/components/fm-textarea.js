import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-textarea> — A polished multi-line text input.
 *
 * Attributes:
 *   value       — string (controlled value)
 *   placeholder — string
 *   disabled    — boolean
 *   required    — boolean
 *   error       — string (error message)
 *   rows        — number (default: 3)
 *   label       — string (accessible label, visually hidden)
 *
 * Events:
 *   input  — { value: string } — fired on every keystroke
 *   change — { value: string } — fired on blur after change
 *   focus  — fired when textarea receives focus
 *   blur   — fired when textarea loses focus
 */
export class FmTextarea extends FmElement {
  static observedAttributes = [
    "value", "placeholder", "disabled", 
    "required", "error", "rows", "label"
  ];

  template() {
    const value = this.attr("value", "");
    const placeholder = this.attr("placeholder", "");
    const disabled = this.boolAttr("disabled");
    const required = this.boolAttr("required");
    const error = this.attr("error", "");
    const rows = parseInt(this.attr("rows", "3"), 10) || 3;
    const label = this.attr("label", "");

    const hasValue = value.length > 0;
    const hasError = error.length > 0;

    const disabledClass = disabled ? "is-disabled" : "";
    const errorClass = hasError ? "has-error" : "";
    const focusedClass = this._focused ? "is-focused" : "";
    const filledClass = hasValue || this._focused ? "is-filled" : "";

    // Calculate min-height based on rows (line-height ~24px + padding)
    const minHeight = rows * 24 + 32;

    return /* html */ `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .textarea-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* ---- Textarea Field ---- */
        .textarea-field {
          width: 100%;
          min-height: ${minHeight}px;
          padding: var(--fm-space-md);
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-md);
          font-weight: var(--fm-font-weight-normal);
          color: var(--fm-color-text);
          background: var(--fm-color-surface);
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
          transition: border-color var(--fm-transition-fast);
          outline: none;
          resize: vertical;
          line-height: 1.5;
        }

        .textarea-field::placeholder {
          color: var(--fm-color-text-secondary);
          opacity: 0.6;
        }

        .textarea-field:hover:not(:disabled) {
          border-color: var(--fm-color-border);
        }

        /* Focus state - uses wrapper class for consistent styling */
        .textarea-wrapper.is-focused .textarea-field {
          border-color: var(--fm-color-primary);
        }

        .textarea-field:disabled {
          background: var(--fm-color-surface-muted);
          cursor: not-allowed;
          opacity: 0.6;
          resize: none;
        }

        /* Error state - default error border */
        .textarea-wrapper.has-error .textarea-field {
          border-color: var(--fm-color-error);
        }

        /* Error + Focus - show primary border to indicate focus */
        .textarea-wrapper.has-error.is-focused .textarea-field {
          border-color: var(--fm-color-primary);
        }

        /* ---- Label ---- */
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
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

      <div class="textarea-wrapper ${disabledClass} ${errorClass} ${focusedClass} ${filledClass}">
        ${label ? `<label class="visually-hidden" for="textarea-${this._id}">${label}</label>` : ''}
        <textarea
          id="textarea-${this._id}"
          class="textarea-field"
          part="textarea"
          rows="${rows}"
          placeholder="${placeholder}"
          ${disabled ? 'disabled' : ''}
          ${required ? 'required' : ''}
          aria-invalid="${hasError ? 'true' : 'false'}"
          aria-describedby="${hasError ? 'error-msg-' + this._id : ''}"
        >${value}</textarea>
        ${hasError ? /* html */ `
          <div class="error-message" id="error-msg-${this._id}" part="error" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
    const wrapper = this.root.querySelector(".textarea-wrapper");
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
    this._id = Math.random().toString(36).substr(2, 9);
    this._bindEvents();
  }

  _bindEvents() {
    const textarea = this.root.querySelector(".textarea-field");
    if (!textarea) return;

    // Input event
    textarea.addEventListener("input", (e) => {
      const value = e.target.value;
      
      // Update filled state
      const wrapper = this.root.querySelector(".textarea-wrapper");
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
    textarea.addEventListener("focus", () => {
      this._focused = true;
      const wrapper = this.root.querySelector(".textarea-wrapper");
      if (wrapper) {
        wrapper.classList.add("is-focused");
      }

      this.dispatchEvent(new CustomEvent("focus", {
        bubbles: true,
        composed: true,
      }));
    });

    // Blur event
    textarea.addEventListener("blur", () => {
      this._focused = false;
      const wrapper = this.root.querySelector(".textarea-wrapper");
      if (wrapper) {
        wrapper.classList.remove("is-focused");
      }

      this.dispatchEvent(new CustomEvent("blur", {
        bubbles: true,
        composed: true,
      }));

      // Change event on blur
      this.dispatchEvent(new CustomEvent("change", {
        detail: { value: textarea.value },
        bubbles: true,
        composed: true,
      }));
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    
    // Update the textarea value without full re-render for value attribute
    if (name === "value") {
      const textarea = this.root.querySelector(".textarea-field");
      if (textarea && textarea.value !== newValue) {
        textarea.value = newValue ?? "";
        
        // Update filled state
        const wrapper = this.root.querySelector(".textarea-wrapper");
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
      const wrapper = this.root.querySelector(".textarea-wrapper");
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
    const textarea = this.root.querySelector(".textarea-field");
    if (textarea) textarea.focus();
  }

  blur() {
    const textarea = this.root.querySelector(".textarea-field");
    if (textarea) textarea.blur();
  }

  clear() {
    this.setAttribute("value", "");
    const textarea = this.root.querySelector(".textarea-field");
    if (textarea) {
      textarea.value = "";
    }
    
    const wrapper = this.root.querySelector(".textarea-wrapper");
    if (wrapper) wrapper.classList.remove("is-filled");
  }

  get value() {
    return this.attr("value", "");
  }

  set value(val) {
    this.setAttribute("value", val);
  }
}

customElements.define("fm-textarea", FmTextarea);
