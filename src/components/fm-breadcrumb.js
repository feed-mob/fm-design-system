import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-breadcrumb> — A navigation breadcrumb component for FM Agency.
 *
 * Usage (JSON items):
 *   <fm-breadcrumb items='[
 *     {"label": "Home", "href": "/"},
 *     {"label": "Products", "href": "/products"},
 *     {"label": "Details"}
 *   ]'></fm-breadcrumb>
 *
 * Usage (slotted):
 *   <fm-breadcrumb>
 *     <a href="/">Home</a>
 *     <a href="/products">Products</a>
 *     <span>Details</span>
 *   </fm-breadcrumb>
 *
 * Attributes:
 *   items     — JSON array of { label, href? } objects
 *   separator — "chevron" (default) | "slash" | "arrow"
 *
 * Events:
 *   fm-breadcrumb-click — fired when a breadcrumb item is clicked, detail: { index, label, href? }
 */
export class FmBreadcrumb extends FmElement {
  static observedAttributes = ["items", "separator"];

  template() {
    const separator = this.attr("separator", "chevron");
    const itemsAttr = this.attr("items", "");

    let items = [];
    if (itemsAttr) {
      try {
        items = JSON.parse(itemsAttr);
      } catch {
        console.warn("[fm-breadcrumb] Invalid items JSON");
      }
    }

    const hasSlotContent = this.innerHTML.trim().length > 0;

    const separatorIcon = {
      chevron: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
      slash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4 3 20"/></svg>`,
      arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    }[separator] || separatorIcon.chevron;

    const renderItems = () => {
      if (!items.length && !hasSlotContent) return "";

      if (items.length) {
        return items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isLink = item.href && !isLast;
          const content = isLink
            ? `<a href="${item.href}" class="breadcrumb-link" data-index="${index}">${item.label}</a>`
            : `<span class="breadcrumb-current" aria-current="page">${item.label}</span>`;

          return `
            <li class="breadcrumb-item ${isLast ? 'is-last' : ''}" data-index="${index}">
              ${content}
              ${!isLast ? `<span class="breadcrumb-separator" aria-hidden="true">${separatorIcon}</span>` : ""}
            </li>
          `;
        }).join("");
      }

      // Slotted mode — render placeholder for slot injection
      return `<li class="breadcrumb-slot-container"><slot></slot></li>`;
    };

    return /* html */ `
      <style>
        :host { display: block; }

        .breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
          font-family: var(--fm-font-family);
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: var(--fm-space-xs);
        }

        /* ---- Sizes ---- */
        .breadcrumb {
          font-size: var(--fm-font-size-sm);
          gap: var(--fm-space-sm);
        }
        .breadcrumb .breadcrumb-separator {
          width: 14px;
          height: 14px;
        }
        .breadcrumb .breadcrumb-separator svg {
          width: 14px;
          height: 14px;
        }

        /* ---- Links ---- */
        .breadcrumb-link {
          color: var(--fm-color-text-secondary);
          text-decoration: none;
          font-weight: var(--fm-font-weight-medium);
          padding: 2px 4px;
          border-radius: var(--fm-radius-sm);
          transition: color var(--fm-transition-fast), background var(--fm-transition-fast);
        }

        .breadcrumb-link:hover {
          color: var(--fm-color-primary);
          background: var(--fm-alpha-primary-10);
        }

        .breadcrumb-link:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* ---- Current page ---- */
        .breadcrumb-current {
          color: var(--fm-color-text);
          font-weight: var(--fm-font-weight-semibold);
          padding: 2px 4px;
        }

        /* ---- Separator ---- */
        .breadcrumb-separator {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--fm-color-border-strong);
          flex-shrink: 0;
        }

        /* ---- Slotted content styling ---- */
        .breadcrumb-slot-container ::slotted(*) {
          display: flex;
          align-items: center;
          gap: var(--fm-space-sm);
        }

        .breadcrumb-slot-container ::slotted(a) {
          color: var(--fm-color-text-secondary);
          text-decoration: none;
          font-weight: var(--fm-font-weight-medium);
          padding: 2px 4px;
          border-radius: var(--fm-radius-sm);
          transition: color var(--fm-transition-fast), background var(--fm-transition-fast);
        }

        .breadcrumb-slot-container ::slotted(a:hover) {
          color: var(--fm-color-primary);
          background: var(--fm-alpha-primary-10);
        }

        .breadcrumb-slot-container ::slotted(:last-child) {
          color: var(--fm-color-text);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* Add separators between slotted items */
        .breadcrumb-slot-container ::slotted(:not(:last-child))::after {
          content: '';
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 14px;
          height: 14px;
          margin-left: var(--fm-space-sm);
          color: var(--fm-color-border-strong);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23CBD5E1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m9 18 6-6-6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
        }
      </style>

      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb" part="breadcrumb">
          ${renderItems()}
        </ol>
      </nav>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  onEnter() {
    const breadcrumb = this.root.querySelector(".breadcrumb");
    if (breadcrumb) {
      animate(breadcrumb, { opacity: [0, 1], y: [-4, 0] }, {
        type: "spring",
        stiffness: 400,
        damping: 25,
      });
    }
  }

  _bindEvents() {
    const links = this.root.querySelectorAll(".breadcrumb-link");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const index = parseInt(link.dataset.index || "0", 10);
        const href = link.getAttribute("href") || "";
        const label = link.textContent || "";

        this.dispatchEvent(new CustomEvent("fm-breadcrumb-click", {
          bubbles: true,
          detail: { index, label, href },
        }));
      });
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-breadcrumb", FmBreadcrumb);
