import { FmElement } from "../core/fm-element.js";
import { animate, hover, press } from "motion";

/**
 * <fm-pagination> — A pagination component for navigating through multiple pages of content.
 *
 * Usage:
 *   <fm-pagination current="1" total="10"></fm-pagination>
 *
 * Attributes:
 *   current        — Current active page (1-based, default: 1)
 *   total          — Total number of pages (default: 1)
 *   variant        — "default" (default) | "outline" | "ghost"
 *   disabled       — Disables all interaction
 *   href-template  — URL template with :page placeholder, e.g., "/items?page=:page"
 *
 * Events:
 *   fm-page-change — fired when page changes, detail: { page: number, previousPage: number }
 *
 * Examples:
 *   <fm-pagination current="5" total="20"></fm-pagination>
 *   <fm-pagination current="3" total="10" variant="outline"></fm-pagination>
 *   <fm-pagination current="5" total="20" href-template="/items?page=:page"></fm-pagination>
 */
export class FmPagination extends FmElement {
  static observedAttributes = [
    "current",
    "total",
    "variant",
    "disabled",
    "href-template",
  ];

  template() {
    const current = Math.max(1, Math.min(this.getTotal(), this.getCurrent()));
    const total = this.getTotal();
    const variant = this.attr("variant", "default");
    const disabled = this.boolAttr("disabled");
    const hrefTemplate = this.attr("href-template", "");

    const pages = this._getPageRange(current, total);

    const chevronLeft = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
    const chevronRight = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;

    const makeHref = (pageNum) => {
      if (!hrefTemplate) return null;
      return hrefTemplate.replace(":page", pageNum);
    };

    const prevHref = makeHref(current - 1);
    const nextHref = makeHref(current + 1);

    return /* html */ `
      <style>
        :host { display: inline-block; }

        .pagination {
          display: flex;
          align-items: center;
          gap: var(--fm-space-xs);
          font-family: var(--fm-font-family);
        }

        .pagination-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          outline: none;
          font-family: var(--fm-font-family);
          font-weight: var(--fm-font-weight-medium);
          line-height: 1;
          border-radius: var(--fm-radius-md);
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          transition: all var(--fm-transition-fast);
          position: relative;
          overflow: hidden;
          min-width: 36px;
          height: 36px;
          padding: 0 12px;
          font-size: var(--fm-font-size-sm);
          gap: 6px;
        }

        .pagination-btn:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination-btn svg {
          width: 16px;
          height: 16px;
        }

        /* ---- Default variant ---- */
        .pagination-btn.default {
          background: var(--fm-color-surface);
          color: var(--fm-color-text-secondary);
          border: 1px solid var(--fm-color-border);
        }
        .pagination-btn.default:hover:not(:disabled):not(.active) {
          background: var(--fm-color-surface-muted);
          color: var(--fm-color-text);
          border-color: var(--fm-color-border-strong);
        }
        .pagination-btn.default.active {
          background: var(--fm-color-primary);
          color: var(--fm-color-text-light);
          border-color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* ---- Outline variant ---- */
        .pagination-btn.outline {
          background: transparent;
          color: var(--fm-color-text-secondary);
          border: 1.5px solid var(--fm-color-border);
        }
        .pagination-btn.outline:hover:not(:disabled):not(.active) {
          background: var(--fm-alpha-primary-10);
          color: var(--fm-color-primary);
          border-color: var(--fm-color-primary);
        }
        .pagination-btn.outline.active {
          background: transparent;
          color: var(--fm-color-primary);
          border-color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* ---- Ghost variant ---- */
        .pagination-btn.ghost {
          background: transparent;
          color: var(--fm-color-text-secondary);
          border: 1px solid transparent;
        }
        .pagination-btn.ghost:hover:not(:disabled):not(.active) {
          background: var(--fm-color-surface-muted);
          color: var(--fm-color-text);
        }
        .pagination-btn.ghost.active {
          background: var(--fm-color-surface-muted);
          color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        /* ---- Navigation buttons ---- */
        .pagination-nav {
          padding-left: 8px;
          padding-right: 8px;
        }

        /* ---- Links inside buttons (for SSR/SEO) ---- */
        .nav-link, .page-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: inherit;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
          pointer-events: none;
        }

        /* ---- Ellipsis ---- */
        .pagination-ellipsis {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--fm-color-text-secondary);
          user-select: none;
          padding: 0 4px;
          min-width: 36px;
          height: 36px;
          font-size: var(--fm-font-size-sm);
        }
      </style>

      <nav class="pagination" role="navigation" aria-label="Pagination">
        <button 
          class="pagination-btn pagination-nav ${variant}" 
          data-action="prev"
          ${current <= 1 || disabled ? "disabled" : ""}
          aria-label="Go to previous page"
        >
          ${prevHref && current > 1 ? `<a href="${prevHref}" class="nav-link" tabindex="-1">` : ""}
            ${chevronLeft}
          ${prevHref && current > 1 ? `</a>` : ""}
        </button>

        ${pages.map((page) => {
          if (page === "...") {
            return `<span class="pagination-ellipsis">...</span>`;
          }
          const pageNum = parseInt(page, 10);
          const isActive = pageNum === current;
          const href = makeHref(pageNum);
          return `
            <button 
              class="pagination-btn pagination-page ${variant} ${isActive ? "active" : ""}" 
              data-page="${pageNum}"
              ${disabled ? "disabled" : ""}
              aria-label="Go to page ${pageNum}"
              aria-current="${isActive ? "page" : "false"}"
            >
              ${href && !isActive ? `<a href="${href}" class="page-link" tabindex="-1">${pageNum}</a>` : pageNum}
            </button>
          `;
        }).join("")}

        <button 
          class="pagination-btn pagination-nav ${variant}" 
          data-action="next"
          ${current >= total || disabled ? "disabled" : ""}
          aria-label="Go to next page"
        >
          ${nextHref && current < total ? `<a href="${nextHref}" class="nav-link" tabindex="-1">` : ""}
            ${chevronRight}
          ${nextHref && current < total ? `</a>` : ""}
        </button>
      </nav>
    `;
  }

  _getPageRange(current, total) {
    const siblingCount = 1;
    const boundaryCount = 1;
    const pages = [];
    
    const startPages = [];
    for (let i = 1; i <= Math.min(boundaryCount, total); i++) {
      startPages.push(i);
    }

    const endPages = [];
    for (let i = Math.max(boundaryCount + 1, total - boundaryCount + 1); i <= total; i++) {
      endPages.push(i);
    }

    const siblingStart = Math.max(boundaryCount + 1, current - siblingCount);
    const siblingEnd = Math.min(total - boundaryCount, current + siblingCount);

    pages.push(...startPages);

    if (siblingStart > boundaryCount + 1) {
      pages.push("...");
    } else if (siblingStart === boundaryCount + 1 && !startPages.includes(siblingStart)) {
      pages.push(siblingStart);
    }

    for (let i = Math.max(siblingStart, boundaryCount + 2); i <= siblingEnd; i++) {
      if (!startPages.includes(i) && !endPages.includes(i)) {
        pages.push(i);
      }
    }

    if (siblingEnd < total - boundaryCount) {
      pages.push("...");
    } else if (siblingEnd === total - boundaryCount && !endPages.includes(siblingEnd)) {
      pages.push(siblingEnd);
    }

    for (const page of endPages) {
      if (!pages.includes(page)) {
        pages.push(page);
      }
    }

    return pages;
  }

  getCurrent() {
    const val = this.attr("current", "1");
    return Math.max(1, parseInt(val, 10) || 1);
  }

  getTotal() {
    const val = this.attr("total", "1");
    return Math.max(1, parseInt(val, 10) || 1);
  }

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
  }

  onEnter() {
    const pagination = this.root.querySelector(".pagination");
    if (pagination) {
      animate(pagination, { opacity: [0, 1], y: [8, 0] }, {
        type: "spring",
        stiffness: 350,
        damping: 25,
      });
    }
  }

  _bindEvents() {
    if (this.boolAttr("disabled")) return;

    const buttons = this.root.querySelectorAll(".pagination-btn:not(:disabled)");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.target.tagName === "A" && !e.ctrlKey && !e.metaKey) {
          return;
        }
        
        e.preventDefault();
        const current = this.getCurrent();
        let newPage = current;

        if (btn.dataset.action === "prev") {
          newPage = Math.max(1, current - 1);
        } else if (btn.dataset.action === "next") {
          newPage = Math.min(this.getTotal(), current + 1);
        } else if (btn.dataset.page) {
          newPage = parseInt(btn.dataset.page, 10);
        }

        if (newPage !== current) {
          const previousPage = current;
          this.setAttribute("current", String(newPage));
          this.dispatchEvent(new CustomEvent("fm-page-change", {
            bubbles: true,
            detail: { page: newPage, previousPage },
          }));
        }
      });

      hover(btn, (element) => {
        animate(element, { scale: 1.05 }, {
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

      press(btn, (element) => {
        animate(element, { scale: 0.95 }, {
          type: "spring",
          stiffness: 500,
          damping: 22,
        });
        return () => {
          animate(element, { scale: 1.05 }, {
            type: "spring",
            stiffness: 400,
            damping: 20,
          });
        };
      });
    });
  }

  attributeChangedCallback() {
    this.render();
    this._bindEvents();
  }
}

customElements.define("fm-pagination", FmPagination);
