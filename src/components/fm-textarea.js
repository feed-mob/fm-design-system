import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-textarea> — A polished multi-line text input with auto-resize.
 *
 * Attributes:
 *   value       — string (controlled value)
 *   placeholder — string
 *   disabled    — boolean
 *   readonly    — boolean
 *   required    — boolean
 *   error       — string (error message)
 *   size        — "sm" | "md" (default) | "lg"
 *   variant     — "default" | "filled" | "outlined"
 *   rows        — number (default: 3)
 *   maxrows     — number (default: 10, for auto-resize limit)
 *   autoresize  — boolean (auto-expand height as user types)
 *   maxlength   — number (maximum character count)
 *   showcount   — boolean (show character count)
 *
 * Events:
 *   input  — { value: string } — fired on every keystroke
 *   change — { value: string } — fired on blur after change
 *   focus  — fired when textarea receives focus
 *   blur   — fired when textarea loses focus
 */
export class FmTextarea extends FmElement {
  static observedAttributes = [
    "value", "placeholder", "disabled", "readonly", 
    "required", "error", "size", "variant", "rows", "maxrows", 
    "autoresize", "maxlength", "showcount"
  ];

  template() {
    const value = this.attr("value", "");
    const placeholder = this.attr("placeholder", "");
    const disabled = this.boolAttr("disabled");
    const readonly = this.boolAttr("readonly");
    const required = this.boolAttr("required");
    const error = this.attr("error", "");
    const size = this.attr("size", "md");
    const variant = this.attr("variant", "default");
    const rows = parseInt(this.attr("rows", "3"), 10) || 3;
    const maxrows = parseInt(this.attr("maxrows", "10"), 10) || 10;
    const autoresize = this.boolAttr("autoresize");
    const maxlength = this.attr("maxlength", "");
    const showcount = this.boolAttr("showcount");

    const hasValue = value.length > 0;
    const hasError = error.length > 0;
    const hasMaxlength = maxlength && maxlength.length > 0;
    const charCount = value.length;
    const maxCount = hasMaxlength ? parseInt(maxlength, 10) : 0;

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

    // Calculate min-height based on rows
    const lineHeight = size === "sm" ? 20 : size === "lg" ? 28 : 24;
    const paddingY = size === "sm" ? 24 : size === "lg" ? 40 : 32;
    const minHeight = rows * lineHeight + paddingY;

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

        /* ---- Variants ---- */
        .variant-default .textarea-field {
          background: var(--fm-color-surface);
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-default .textarea-field:hover:not(:disabled) {
          border-color: var(--fm-color-border);
        }
        .variant-default.is-focused .textarea-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-default.has-error .textarea-field {
          border-color: var(--fm-color-error);
        }
        .variant-default.has-error.is-focused .textarea-field {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
        }

        .variant-filled .textarea-field {
          background: var(--fm-color-surface-muted);
          border: 1.5px solid transparent;
          border-radius: var(--fm-radius-md);
        }
        .variant-filled .textarea-field:hover:not(:disabled) {
          background: var(--fm-color-surface-alt);
        }
        .variant-filled.is-focused .textarea-field {
          background: var(--fm-color-surface);
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-filled.has-error .textarea-field {
          border-color: var(--fm-color-error);
        }

        .variant-outlined .textarea-field {
          background: transparent;
          border: 1.5px solid var(--fm-color-border-strong);
          border-radius: var(--fm-radius-md);
        }
        .variant-outlined .textarea-field:hover:not(:disabled) {
          border-color: var(--fm-color-primary-light);
        }
        .variant-outlined.is-focused .textarea-field {
          border-color: var(--fm-color-primary);
          box-shadow: 0 0 0 3px var(--fm-alpha-primary-15);
        }
        .variant-outlined.has-error .textarea-field {
          border-color: var(--fm-color-error);
        }

        /* ---- Sizes ---- */
        .textarea-field {
          width: 100%;
          min-height: ${minHeight}px;
          max-height: ${autoresize ? maxrows * lineHeight + paddingY + 'px' : 'none'};
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-normal);
          color: var(--fm-color-text);
          transition: all var(--fm-transition-fast);
          outline: none;
          resize: vertical;
          line-height: 1.5;
        }
        .textarea-field::placeholder {
          color: var(--fm-color-text-secondary);
          opacity: 0.6;
        }
        .textarea-field:disabled {
          background: var(--fm-color-surface-muted);
          cursor: not-allowed;
          opacity: 0.6;
          resize: none;
        }

        .size-sm .textarea-field {
          padding: var(--fm-space-sm) var(--fm-space-sm);
          font-size: var(--fm-font-size-sm);
          min-height: ${Math.max(minHeight, 60)}px;
        }

        .size-md .textarea-field {
          padding: var(--fm-space-md);
          font-size: var(--fm-font-size-md);
          min-height: ${Math.max(minHeight, 76)}px;
        }

        .size-lg .textarea-field {
          padding: var(--fm-space-lg);
          font-size: var(--fm-font-size-lg);
          min-height: ${Math.max(minHeight, 92)}px;
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

        /* ---- Character Count ---- */
        .char-count {
          display: flex;
          justify-content: flex-end;
          margin-top: var(--fm-space-xs);
          font-size: var(--fm-font-size-xs);
          color: var(--fm-color-text-secondary);
        }
        .char-count.has-error {
          color: var(--fm-color-error);
        }
        .char-count.is-near-limit {
          color: var(--fm-color-warning);
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

      <div class="textarea-wrapper ${sizeClasses} ${variantClasses} ${disabledClass} ${errorClass} ${focusedClass} ${filledClass}">
        <textarea
          class="textarea-field"
          part="textarea"
          rows="${rows}"
          placeholder="${placeholder}"
          ${disabled ? 'disabled' : ''}
          ${readonly ? 'readonly' : ''}
          ${required ? 'required' : ''}
          ${hasMaxlength ? `maxlength="${maxlength}"` : ''}
          aria-invalid="${hasError ? 'true' : 'false'}"
          aria-describedby="${hasError ? 'error-msg' : ''}"
        >${value}</textarea>
        ${showcount && hasMaxlength ? /* html */ `
          <div class="char-count ${charCount > maxCount * 0.9 ? 'is-near-limit' : ''} ${hasError ? 'has-error' : ''}" part="count">
            ${charCount}/${maxCount}
          </div>
        ` : ''}
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
        ` : (!showcount ? /* html */ `
          <slot name="helper">
            <div class="helper-text" part="helper">
              <slot name="helper-text"></slot>
            </div>
          </slot>
        ` : '')}
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

      // Auto-resize if enabled
      if (this.boolAttr("autoresize")) {
        this._autoResize(textarea);
      }

      // Update character count if shown
      if (this.boolAttr("showcount")) {
        this._updateCharCount(value.length);
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

  _autoResize(textarea) {
    // Reset height to auto to get correct scrollHeight
    textarea.style.height = "auto";
    
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10) || 24;
    const paddingY = parseInt(getComputedStyle(textarea).paddingTop, 10) + 
                     parseInt(getComputedStyle(textarea).paddingBottom, 10);
    const maxrows = parseInt(this.attr("maxrows", "10"), 10) || 10;
    const maxHeight = maxrows * lineHeight + paddingY;
    
    // Set new height (capped at max)
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;
    
    // Disable/enable resize based on whether we're at max
    textarea.style.resize = textarea.scrollHeight > maxHeight ? "vertical" : "none";
  }

  _updateCharCount(count) {
    const countEl = this.root.querySelector(".char-count");
    if (!countEl) return;
    
    const maxlength = parseInt(this.attr("maxlength", "0"), 10) || 0;
    const isNearLimit = maxlength > 0 && count > maxlength * 0.9;
    
    // Update text
    countEl.textContent = `${count}/${maxlength}`;
    
    // Update classes
    if (isNearLimit) {
      countEl.classList.add("is-near-limit");
    } else {
      countEl.classList.remove("is-near-limit");
    }
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
        
        // Auto-resize if needed
        if (this.boolAttr("autoresize")) {
          this._autoResize(textarea);
        }
        
        // Update character count
        if (this.boolAttr("showcount")) {
          this._updateCharCount((newValue ?? "").length);
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
      textarea.style.height = "auto";
    }
    
    const wrapper = this.root.querySelector(".textarea-wrapper");
    if (wrapper) wrapper.classList.remove("is-filled");
    
    if (this.boolAttr("showcount")) {
      this._updateCharCount(0);
    }
  }

  insertText(text) {
    const textarea = this.root.querySelector(".textarea-field");
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentValue = textarea.value;
    const newValue = currentValue.substring(0, start) + text + currentValue.substring(end);
    
    this.value = newValue;
    
    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
    }, 0);
  }

  get value() {
    return this.attr("value", "");
  }

  set value(val) {
    this.setAttribute("value", val);
  }
}

customElements.define("fm-textarea", FmTextarea);
