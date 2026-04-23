import { FmElement } from "../core/fm-element.js";

/**
 * <fm-dropdown> — A dropdown menu component for FM Agency.
 *
 * Attributes:
 *   placeholder — string, text shown on trigger button (default: "Menu")
 *   disabled    — boolean, disables interaction
 *   variant     — "default" (default) | "outline" | "ghost"
 *   icon-only   — boolean, shows only a custom icon (use with icon slot)
 *
 * Slots:
 *   icon        — Custom icon for icon-only trigger (optional, defaults to chevron)
 *   default     — Dropdown content (fm-dropdown-item elements or any custom content)
 *
 * Events:
 *   - fm-dropdown-open   — when dropdown opens
 *   - fm-dropdown-close  — when dropdown closes
 *   - fm-dropdown-select — { value } when an item is selected
 *
 * Styling (CSS Parts):
 *   - trigger     — The trigger button element
 *   - trigger-content — The content wrapper inside trigger
 *   - trigger-icon    — The chevron icon
 *   - dropdown    — The dropdown menu container
 */
export class FmDropdown extends FmElement {
  static observedAttributes = ["placeholder", "disabled", "variant", "icon-only"];

  /** @type {boolean} Tracks if dropdown is open */
  _isOpen = false;

  template() {
    const placeholder = this.attr("placeholder", "Menu");
    const disabled = this.boolAttr("disabled");
    const variant = this.attr("variant", "default");
    const iconOnly = this.boolAttr("icon-only");

    // Chevron icon
    const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>`;

    return /* html */ `
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        /* ---- Trigger Button ---- */
        .trigger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--fm-space-sm);
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-semibold);
          letter-spacing: var(--fm-letter-spacing);
          line-height: 1;
          border-radius: var(--fm-radius-md);
          cursor: ${disabled ? "not-allowed" : "pointer"};
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          white-space: nowrap;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          width: ${iconOnly ? "auto" : "100%"};
          padding: 10px 16px;
          font-size: var(--fm-font-size-sm);
        }

        /* Variants */
        .trigger.default {
          background: var(--fm-color-surface);
          color: var(--fm-color-text);
          border: 1.5px solid var(--fm-color-border);
          box-shadow: var(--fm-shadow-sm);
        }
        .trigger.default:hover:not(:disabled) {
          border-color: var(--fm-color-primary);
          background: var(--fm-color-surface-alt);
        }

        .trigger.outline {
          background: transparent;
          color: var(--fm-color-primary);
          border: 1.5px solid var(--fm-color-primary);
          box-shadow: none;
        }
        .trigger.outline:hover:not(:disabled) {
          background: var(--fm-alpha-primary-10);
        }

        .trigger.ghost {
          background: transparent;
          color: var(--fm-color-text);
          border: none;
          box-shadow: none;
        }
        .trigger.ghost:hover:not(:disabled) {
          background: var(--fm-color-surface-alt);
        }

        .trigger:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .trigger:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* Icon-only variant - square shape with centered icon */
        .trigger.icon-only {
          width: 40px;
          height: 40px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Icon slot container */
        .icon-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: var(--fm-color-text-secondary);
        }

        .icon-slot ::slotted(*) {
          width: 100%;
          height: 100%;
        }

        /* Display text */
        .trigger-text {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Chevron icon */
        .trigger-icon {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          color: var(--fm-color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .trigger-icon.open {
          transform: rotate(180deg);
        }

        /* ---- Dropdown Menu ---- */
        .dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          min-width: 180px;
          background: var(--fm-color-surface);
          border: 1px solid var(--fm-color-border);
          border-radius: var(--fm-radius-md);
          box-shadow: var(--fm-shadow-md);
          z-index: 1000;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transform-origin: top center;
          transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
          transform: scaleY(0.95) translateY(-4px);
        }

        .dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: scaleY(1) translateY(0);
        }

        /* ---- Content Area ---- */
        .content {
          padding: 4px 0;
          max-height: 320px;
          overflow-y: auto;
        }

        /* ---- Divider ---- */
        ::slotted([slot="divider"]) {
          display: block;
          height: 1px;
          margin: 4px 0;
          background: var(--fm-color-border);
        }
      </style>

      <button 
        class="trigger ${variant} ${iconOnly ? "icon-only" : ""}" 
        part="trigger"
        ${disabled ? "disabled" : ""}
        aria-haspopup="true"
        aria-expanded="${this._isOpen}"
      >
        ${iconOnly ? /* html */ `
          <span class="icon-slot" part="icon-slot">
            <slot name="icon">${chevronIcon}</slot>
          </span>
        ` : /* html */ `
          <span class="trigger-content" part="trigger-content">
            <span class="trigger-text" part="trigger-text">${placeholder}</span>
          </span>
          <span class="trigger-icon ${this._isOpen ? "open" : ""}" part="trigger-icon">
            ${chevronIcon}
          </span>
        `}
      </button>

      <div class="dropdown ${this._isOpen ? "open" : ""}" part="dropdown">
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  /* ---- Lifecycle ---- */

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  disconnectedCallback() {
    this._removeOutsideClickListener();
  }

  _bindEvents() {
    if (this.boolAttr("disabled")) return;

    const trigger = this.root.querySelector(".trigger");
    if (!trigger) return;

    // Trigger click
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Keyboard navigation on trigger
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggle();
      } else if (e.key === "Escape" && this._isOpen) {
        e.preventDefault();
        this.close();
      }
    });

    // Listen for dropdown item selection events
    this.addEventListener("fm-dropdown-item-select", (e) => {
      e.stopPropagation();
      
      // Re-dispatch as fm-dropdown-select with item value
      this.dispatchEvent(new CustomEvent("fm-dropdown-select", {
        detail: { value: e.detail.value },
        bubbles: true,
      }));
      
      // Close dropdown after selection
      this.close();
    });
  }

  _addOutsideClickListener() {
    this._outsideClickHandler = (e) => {
      if (!this.contains(e.target) && !this.root.contains(e.target)) {
        this.close();
      }
    };
    document.addEventListener("click", this._outsideClickHandler);
  }

  _removeOutsideClickListener() {
    if (this._outsideClickHandler) {
      document.removeEventListener("click", this._outsideClickHandler);
      this._outsideClickHandler = null;
    }
  }

  /* ---- Public API ---- */

  open() {
    if (this._isOpen || this.boolAttr("disabled")) return;

    this._isOpen = true;
    this.render();
    this._bindEvents();
    this._addOutsideClickListener();

    this.dispatchEvent(new CustomEvent("fm-dropdown-open", {
      bubbles: true,
    }));
  }

  close() {
    if (!this._isOpen) return;

    this._isOpen = false;
    this._removeOutsideClickListener();
    this.render();
    this._bindEvents();

    this.dispatchEvent(new CustomEvent("fm-dropdown-close", {
      bubbles: true,
    }));
  }

  toggle() {
    if (this._isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-dropdown", FmDropdown);
