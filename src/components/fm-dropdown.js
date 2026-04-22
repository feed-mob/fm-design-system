import { FmElement } from "../core/fm-element.js";
import { animate, hover, press } from "motion";

/**
 * <fm-dropdown> — A dropdown menu with buttons and links for FM Agency.
 *
 * Attributes:
 *   items       — JSON array of { value, label, type, href?, disabled? } objects
 *                 type can be "button" or "link"
 *   placeholder — string, text shown on trigger button (default: "Menu")
 *   disabled    — boolean, disables interaction
 *   size        — "sm" | "md" (default) | "lg"
 *   variant     — "default" (default) | "outline" | "ghost"
 *
 * Slots:
 *   trigger     — Custom trigger content (overrides default button)
 *
 * Events:
 *   - fm-dropdown-open   — when dropdown opens
 *   - fm-dropdown-close  — when dropdown closes
 *   - fm-dropdown-click — { value, label, index, type } when an item is clicked
 *
 * Animations (Motion):
 *   - Entrance: Fade in with subtle slide up
 *   - Open:     Scale + fade with spring physics
 *   - Close:    Reverse open animation
 *   - Hover:    Background color change on items
 *   - Press:    Tactile feedback
 */
export class FmDropdown extends FmElement {
  static observedAttributes = ["items", "placeholder", "disabled", "size", "variant"];

  /** @type {boolean} Tracks if dropdown is open */
  _isOpen = false;

  /** @type {Array} Parsed items array */
  _items = [];

  template() {
    const placeholder = this.attr("placeholder", "Menu");
    const disabled = this.boolAttr("disabled");
    const size = this.attr("size", "md");
    const variant = this.attr("variant", "default");

    // Parse items from attribute
    const itemsAttr = this.attr("items", "");
    if (itemsAttr) {
      try {
        this._items = JSON.parse(itemsAttr);
      } catch {
        this._items = [];
      }
    } else {
      this._items = [];
    }

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
          justify-content: space-between;
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
          transition: box-shadow var(--fm-transition-fast), border-color var(--fm-transition-fast);
          width: 100%;
        }

        /* Sizes */
        .trigger.sm {
          padding: 6px 12px;
          font-size: var(--fm-font-size-xs);
          border-radius: var(--fm-radius-sm);
        }
        .trigger.md {
          padding: 10px 16px;
          font-size: var(--fm-font-size-sm);
        }
        .trigger.lg {
          padding: 14px 20px;
          font-size: var(--fm-font-size-md);
          border-radius: var(--fm-radius-lg);
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
          transition: transform var(--fm-transition-normal);
        }
        .trigger-icon.open {
          transform: rotate(180deg);
        }

        /* ---- Dropdown Menu ---- */
        .dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          min-width: 100%;
          background: var(--fm-color-surface);
          border: 1px solid var(--fm-color-border);
          border-radius: var(--fm-radius-lg);
          box-shadow: var(--fm-shadow-md);
          z-index: 1000;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transform-origin: top center;
        }

        .dropdown.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* ---- Dropdown Items ---- */
        .items {
          padding: 4px 0;
          max-height: 280px;
          overflow-y: auto;
        }

        .item {
          display: flex;
          align-items: center;
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          user-select: none;
          transition: background var(--fm-transition-fast);
        }

        .item-button,
        .item-link {
          all: unset;
          display: flex;
          align-items: center;
          width: 100%;
          padding: 8px var(--fm-space-md);
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          cursor: pointer;
          text-decoration: none;
          box-sizing: border-box;
        }

        .item-button:hover:not(:disabled),
        .item-link:hover:not([disabled]) {
          background: var(--fm-color-surface-alt);
        }

        .item-button:disabled,
        .item-link[disabled] {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .item.disabled {
          opacity: 0.4;
        }
        .item.disabled .item-button,
        .item.disabled .item-link {
          cursor: not-allowed;
        }

        /* Empty state */
        .empty {
          padding: var(--fm-space-md);
          text-align: center;
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text-secondary);
        }
      </style>

      <button 
        class="trigger ${size} ${variant}" 
        part="trigger"
        ${disabled ? 'disabled' : ''}
        aria-haspopup="true"
        aria-expanded="${this._isOpen}"
      >
        <span class="trigger-content" part="trigger-content">
          <slot name="trigger">
            <span class="trigger-text" part="trigger-text">${placeholder}</span>
          </slot>
        </span>
        <span class="trigger-icon ${this._isOpen ? "open" : ""}" part="trigger-icon">
          ${chevronIcon}
        </span>
      </button>

      <div class="dropdown ${this._isOpen ? "open" : ""}" part="dropdown">
        <div class="items" part="items">
          ${this._renderItems()}
        </div>
      </div>
    `;
  }

  /**
   * Render dropdown items
   */
  _renderItems() {
    if (this._items.length === 0) {
      return `<div class="empty">No items</div>`;
    }

    return this._items.map((item, index) => {
      const type = item.type || "button";
      const isDisabled = item.disabled || false;
      const href = item.href || "javascript:void(0)";

      if (type === "link") {
        return /* html */ `
          <div class="item ${isDisabled ? "disabled" : ""}" part="item link-item" data-index="${index}">
            <a class="item-link" href="${href}" ${isDisabled ? "tabindex=-1" : ""} data-value="${item.value}">
              ${item.label}
            </a>
          </div>
        `;
      } else {
        // button type (default)
        return /* html */ `
          <div class="item ${isDisabled ? "disabled" : ""}" part="item button-item" data-index="${index}">
            <button class="item-button" ${isDisabled ? "disabled" : ""} data-value="${item.value}">
              ${item.label}
            </button>
          </div>
        `;
      }
    }).join("");
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

    // Item clicks
    const itemsContainer = this.root.querySelector(".items");
    if (itemsContainer) {
      itemsContainer.addEventListener("click", (e) => {
        const itemEl = e.target.closest(".item");
        if (!itemEl || itemEl.classList.contains("disabled")) return;

        const index = parseInt(itemEl.dataset.index, 10);
        const item = this._items[index];
        if (!item) return;

        // Dispatch click event
        this.dispatchEvent(new CustomEvent("fm-dropdown-click", {
          detail: {
            value: item.value,
            label: item.label,
            index: index,
            type: item.type || "button"
          },
          bubbles: true,
        }));

        // Close dropdown for both button and link clicks
        // (links will navigate, buttons just close)
        this.close();
      });
    }

    // Hover animations on trigger
    hover(trigger, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 1.02 }, {
        type: "spring",
        stiffness: 450,
        damping: 20,
      });

      return () => {
        animate(element, { scale: 1 }, {
          type: "spring",
          stiffness: 450,
          damping: 20,
        });
      };
    });

    // Press animation on trigger
    press(trigger, (element) => {
      if (this.boolAttr("disabled")) return () => {};

      animate(element, { scale: 0.98 }, {
        type: "spring",
        stiffness: 500,
        damping: 22,
      });

      return () => {
        animate(element, { scale: 1.02 }, {
          type: "spring",
          stiffness: 450,
          damping: 18,
        });
      };
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

  /* ---- Animations ---- */

  onEnter() {
    const trigger = this.root.querySelector(".trigger");
    animate(trigger, { opacity: [0, 1], y: [6, 0] }, {
      type: "spring",
      stiffness: 350,
      damping: 25,
    });
  }

  _animateOpen() {
    const dropdown = this.root.querySelector(".dropdown");
    if (!dropdown) return;

    animate(dropdown, 
      { opacity: [0, 1], scaleY: [0.9, 1], y: [-8, 0] },
      { type: "spring", stiffness: 400, damping: 28 }
    );

    // Animate items in staggered
    const items = this.root.querySelectorAll(".item");
    if (items.length > 0) {
      items.forEach((item, index) => {
        animate(item, 
          { opacity: [0, 1], x: [-10, 0] },
          { 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            delay: index * 0.03
          }
        );
      });
    }
  }

  _animateClose() {
    const dropdown = this.root.querySelector(".dropdown");
    if (!dropdown) return;

    animate(dropdown, 
      { opacity: 0, scaleY: 0.95, y: -4 },
      { duration: 0.15, ease: "easeIn" }
    );
  }

  /* ---- Public API ---- */

  open() {
    if (this._isOpen || this.boolAttr("disabled")) return;

    this._isOpen = true;
    this.render();
    this._bindEvents();
    this._animateOpen();
    this._addOutsideClickListener();

    this.dispatchEvent(new CustomEvent("fm-dropdown-open", {
      bubbles: true,
    }));
  }

  close() {
    if (!this._isOpen) return;

    this._animateClose();
    this._isOpen = false;
    this._removeOutsideClickListener();

    setTimeout(() => {
      this.render();
      this._bindEvents();
    }, 150);

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
