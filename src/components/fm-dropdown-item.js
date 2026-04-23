import { FmElement } from "../core/fm-element.js";

/**
 * <fm-dropdown-item> — A dropdown menu item for FM Agency.
 *
 * Attributes:
 *   value    — string, the value to emit when selected
 *   disabled — boolean, disables the item
 *   href     — string, makes the item act as a link (optional)
 *
 * Slots:
 *   default  — Item content (can be text, HTML, or even form elements)
 *   icon     — Optional icon to display before the content
 *
 * Events:
 *   - fm-dropdown-item-select — { value } when item is clicked/selected
 *
 * Styling (CSS Parts):
 *   - item     — The item container
 *   - content  — The content wrapper
 *   - icon     — The icon container
 */
export class FmDropdownItem extends FmElement {
  static observedAttributes = ["value", "disabled", "href"];

  template() {
    const value = this.attr("value", "");
    const disabled = this.boolAttr("disabled");
    const href = this.attr("href", "");
    const isLink = href !== "";

    const content = /* html */ `
      <span class="icon" part="icon">
        <slot name="icon"></slot>
      </span>
      <span class="content" part="content">
        <slot></slot>
      </span>
    `;

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 8px 16px;
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text);
          background: transparent;
          border: none;
          cursor: ${disabled ? "not-allowed" : "pointer"};
          text-align: left;
          text-decoration: none;
          box-sizing: border-box;
          transition: background-color 0.15s ease;
          user-select: none;
        }

        .item:hover:not(:disabled):not([disabled]) {
          background: var(--fm-color-surface-alt);
        }

        .item:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: -2px;
        }

        .item:disabled,
        .item[disabled] {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          color: var(--fm-color-text-secondary);
        }

        .icon:empty {
          display: none;
        }

        .content {
          flex: 1;
          min-width: 0;
        }

        /* Allow any content in the slot */
        ::slotted(*) {
          margin: 0;
        }
      </style>

      ${isLink ? /* html */ `
        <a 
          class="item ${disabled ? "disabled" : ""}" 
          part="item"
          href="${disabled ? "javascript:void(0)" : href}"
          ${disabled ? "tabindex=-1" : ""}
          data-value="${value}"
        >
          ${content}
        </a>
      ` : /* html */ `
        <button 
          class="item ${disabled ? "disabled" : ""}" 
          part="item"
          ${disabled ? "disabled" : ""}
          data-value="${value}"
        >
          ${content}
        </button>
      `}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  _bindEvents() {
    if (this.boolAttr("disabled")) return;

    const item = this.root.querySelector(".item");
    if (!item) return;

    item.addEventListener("click", (e) => {
      if (this.boolAttr("disabled")) return;

      const value = this.attr("value", "");
      
      this.dispatchEvent(new CustomEvent("fm-dropdown-item-select", {
        detail: { value },
        bubbles: true,
        composed: true,
      }));
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-dropdown-item", FmDropdownItem);
