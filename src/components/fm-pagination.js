import { FmElement } from "../core/fm-element.js";
import { animate, hover, press } from "motion";

/**
 * <fm-pagination> — A pagination component for navigating through multiple pages of content.
 *
 * Designed to work seamlessly with Ruby's Pagy gem, but framework-agnostic.
 *
 * Usage:
 *   <fm-pagination current="1" total="10"></fm-pagination>
 *
 * Pagy-compatible usage:
 *   <!-- Pass the entire @pagy object -->
 *   <fm-pagination pagy='<%= @pagy.to_json %>'></fm-pagination>
 *
 *   <!-- Or use individual attributes -->
 *   <fm-pagination page="<%= pagy.page %>" pages="<%= pagy.pages %>" series='<%= pagy.series.to_json %>'></fm-pagination>
 *
 * Attributes:
 *   pagy           — JSON string of the entire Pagy object (extracts page, pages, series automatically)
 *   current        — Current active page (1-based, default: 1). Alias: "page"
 *   total          — Total number of pages (default: 1). Alias: "pages"
 *   series         — JSON array of page numbers and ":gap" symbols (Pagy-style)
 *   size           — "sm" | "md" (default) | "lg"
 *   variant        — "default" (default) | "outline" | "ghost"
 *   sibling-count  — Number of pages to show on each side of current (default: 1)
 *   boundary-count — Number of pages to always show at boundaries (default: 1)
 *   disabled       — Disables all interaction
 *   show-first-last — Show first/last page buttons (default: false)
 *   hide-prev-next — Hide previous/next buttons (default: false)
 *   prev-label     — Label for previous button (default: "")
 *   next-label     — Label for next button (default: "")
 *   href-template  — URL template with :page placeholder, e.g., "/items?page=:page"
 *
 * Events:
 *   fm-page-change — fired when page changes, detail: { page: number, previousPage: number }
 *
 * Examples:
 *   <!-- Standard HTML -->
 *   <fm-pagination current="5" total="20"></fm-pagination>
 *
 *   <!-- With Ruby Pagy - Simplest (pass entire object) -->
 *   <fm-pagination pagy='<%= @pagy.to_json %>'></fm-pagination>
 *
 *   <!-- With Ruby Pagy - With custom options -->
 *   <fm-pagination
 *     pagy='<%= @pagy.to_json %>'
 *     variant="outline"
 *     href-template="/items?page=:page">
 *   </fm-pagination>
 */
export class FmPagination extends FmElement {
  static observedAttributes = [
    "pagy",
    "current",
    "page",
    "total",
    "pages",
    "series",
    "size",
    "variant",
    "sibling-count",
    "boundary-count",
    "disabled",
    "show-first-last",
    "hide-prev-next",
    "prev-label",
    "next-label",
    "href-template",
  ];

  template() {
    const current = Math.max(1, Math.min(this.getTotal(), this.getCurrent()));
    const total = this.getTotal();
    const size = this.attr("size", "md");
    const variant = this.attr("variant", "default");
    const disabled = this.boolAttr("disabled");
    const showFirstLast = this.boolAttr("show-first-last");
    const showPrevNext = !this.boolAttr("hide-prev-next");
    const prevLabel = this.attr("prev-label", "");
    const nextLabel = this.attr("next-label", "");
    const hrefTemplate = this.attr("href-template", "");
    const siblingCount = parseInt(this.attr("sibling-count", "1"), 10) || 1;
    const boundaryCount = parseInt(this.attr("boundary-count", "1"), 10) || 1;

    // Use series if provided (Pagy-style), otherwise compute range
    const pages = this._getPageSeries(current, total, siblingCount, boundaryCount);

    const chevronLeft = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
    const chevronRight = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
    const chevronsLeft = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>`;
    const chevronsRight = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 17 5-5-5-5"/><path d="m6 17 5-5-5-5"/></svg>`;

    const makeHref = (pageNum) => {
      if (!hrefTemplate) return null;
      return hrefTemplate.replace(":page", pageNum);
    };

    const prevHref = makeHref(current - 1);
    const nextHref = makeHref(current + 1);
    const firstHref = makeHref(1);
    const lastHref = makeHref(total);

    const prevButton = showPrevNext ? `
      <button 
        class="pagination-btn pagination-nav ${size} ${variant}" 
        data-action="prev"
        ${current <= 1 || disabled ? "disabled" : ""}
        aria-label="Go to previous page"
      >
        ${prevHref && current > 1 ? `<a href="${prevHref}" class="nav-link" tabindex="-1">` : ""}
          ${chevronLeft}
          ${prevLabel ? `<span class="nav-label">${prevLabel}</span>` : ""}
        ${prevHref && current > 1 ? `</a>` : ""}
      </button>
    ` : "";

    const nextButton = showPrevNext ? `
      <button 
        class="pagination-btn pagination-nav ${size} ${variant}" 
        data-action="next"
        ${current >= total || disabled ? "disabled" : ""}
        aria-label="Go to next page"
      >
        ${nextHref && current < total ? `<a href="${nextHref}" class="nav-link" tabindex="-1">` : ""}
          ${nextLabel ? `<span class="nav-label">${nextLabel}</span>` : ""}
          ${chevronRight}
        ${nextHref && current < total ? `</a>` : ""}
      </button>
    ` : "";

    const firstButton = showFirstLast ? `
      <button 
        class="pagination-btn pagination-nav ${size} ${variant}" 
        data-action="first"
        ${current <= 1 || disabled ? "disabled" : ""}
        aria-label="Go to first page"
      >
        ${firstHref && current > 1 ? `<a href="${firstHref}" class="nav-link" tabindex="-1">` : ""}
          ${chevronsLeft}
        ${firstHref && current > 1 ? `</a>` : ""}
      </button>
    ` : "";

    const lastButton = showFirstLast ? `
      <button 
        class="pagination-btn pagination-nav ${size} ${variant}" 
        data-action="last"
        ${current >= total || disabled ? "disabled" : ""}
        aria-label="Go to last page"
      >
        ${lastHref && current < total ? `<a href="${lastHref}" class="nav-link" tabindex="-1">` : ""}
          ${chevronsRight}
        ${lastHref && current < total ? `</a>` : ""}
      </button>
    ` : "";

    const renderPageButtons = () => {
      return pages.map((page) => {
        if (page === "..." || page === ":gap" || page === "gap") {
          return `<span class="pagination-ellipsis ${size}">...</span>`;
        }
        const pageNum = parseInt(page, 10);
        const isActive = pageNum === current;
        const href = makeHref(pageNum);
        return `
          <button 
            class="pagination-btn pagination-page ${size} ${variant} ${isActive ? "active" : ""}" 
            data-page="${pageNum}"
            ${disabled ? "disabled" : ""}
            aria-label="Go to page ${pageNum}"
            aria-current="${isActive ? "page" : "false"}"
          >
            ${href && !isActive ? `<a href="${href}" class="page-link" tabindex="-1">${pageNum}</a>` : pageNum}
          </button>
        `;
      }).join("");
    };

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
        }

        .pagination-btn:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        .pagination-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ---- Sizes ---- */
        .pagination-btn.sm {
          min-width: 28px;
          height: 28px;
          padding: 0 8px;
          font-size: var(--fm-font-size-xs);
          gap: 4px;
        }
        .pagination-btn.sm svg {
          width: 14px;
          height: 14px;
        }

        .pagination-btn.md {
          min-width: 36px;
          height: 36px;
          padding: 0 12px;
          font-size: var(--fm-font-size-sm);
          gap: 6px;
        }
        .pagination-btn.md svg {
          width: 16px;
          height: 16px;
        }

        .pagination-btn.lg {
          min-width: 44px;
          height: 44px;
          padding: 0 16px;
          font-size: var(--fm-font-size-md);
          gap: 8px;
        }
        .pagination-btn.lg svg {
          width: 18px;
          height: 18px;
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
        .pagination-nav .nav-label {
          margin: 0 4px;
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
          pointer-events: none; /* Let button handle clicks for SPA, but allow right-click open */
        }

        /* ---- Ellipsis ---- */
        .pagination-ellipsis {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--fm-color-text-secondary);
          user-select: none;
          padding: 0 4px;
        }
        .pagination-ellipsis.sm {
          min-width: 28px;
          height: 28px;
          font-size: var(--fm-font-size-xs);
        }
        .pagination-ellipsis.md {
          min-width: 36px;
          height: 36px;
          font-size: var(--fm-font-size-sm);
        }
        .pagination-ellipsis.lg {
          min-width: 44px;
          height: 44px;
          font-size: var(--fm-font-size-md);
        }

        /* ---- Info text ---- */
        .pagination-info {
          color: var(--fm-color-text-secondary);
          font-size: var(--fm-font-size-sm);
          margin: 0 var(--fm-space-sm);
        }
      </style>

      <nav class="pagination" role="navigation" aria-label="Pagination">
        ${firstButton}
        ${prevButton}
        ${renderPageButtons()}
        ${nextButton}
        ${lastButton}
      </nav>
    `;
  }

  /**
   * Get the Pagy object if provided
   */
  _getPagyObject() {
    const pagyAttr = this.attr("pagy", "");
    if (pagyAttr) {
      try {
        const pagy = JSON.parse(pagyAttr);
        if (typeof pagy === "object" && pagy !== null) {
          return pagy;
        }
      } catch {
        console.warn("[fm-pagination] Invalid pagy JSON");
      }
    }
    return null;
  }

  /**
   * Get page series to display.
   * Priority: 1) pagy.series, 2) series attribute, 3) computed range
   */
  _getPageSeries(current, total, siblingCount, boundaryCount) {
    // First check if pagy object has series
    const pagy = this._getPagyObject();
    if (pagy && pagy.series && Array.isArray(pagy.series)) {
      return pagy.series.map(item => {
        // Convert Pagy gap symbols to our format
        if (item === ":gap" || item === "gap") return "...";
        return typeof item === "number" ? item : String(item);
      });
    }

    // Check for explicit series attribute (Pagy-style)
    const seriesAttr = this.attr("series", "");
    if (seriesAttr) {
      try {
        const series = JSON.parse(seriesAttr);
        if (Array.isArray(series)) {
          return series.map(item => {
            // Convert Pagy gap symbols to our format
            if (item === ":gap" || item === "gap") return "...";
            return typeof item === "number" ? item : String(item);
          });
        }
      } catch {
        console.warn("[fm-pagination] Invalid series JSON");
      }
    }

    // Compute range dynamically
    return this._getPageRange(current, total, siblingCount, boundaryCount);
  }

  _getPageRange(current, total, siblingCount, boundaryCount) {
    const pages = [];
    
    // Always show first boundary pages
    const startPages = [];
    for (let i = 1; i <= Math.min(boundaryCount, total); i++) {
      startPages.push(i);
    }

    // Always show last boundary pages
    const endPages = [];
    for (let i = Math.max(boundaryCount + 1, total - boundaryCount + 1); i <= total; i++) {
      endPages.push(i);
    }

    // Calculate sibling pages around current
    const siblingStart = Math.max(boundaryCount + 1, current - siblingCount);
    const siblingEnd = Math.min(total - boundaryCount, current + siblingCount);

    // Build the range
    // Add start pages
    pages.push(...startPages);

    // Add ellipsis if needed between start and siblings
    if (siblingStart > boundaryCount + 1) {
      pages.push("...");
    } else if (siblingStart === boundaryCount + 1 && !startPages.includes(siblingStart)) {
      pages.push(siblingStart);
    }

    // Add sibling pages (excluding already added start/end)
    for (let i = Math.max(siblingStart, boundaryCount + 2); i <= siblingEnd; i++) {
      if (!startPages.includes(i) && !endPages.includes(i)) {
        pages.push(i);
      }
    }

    // Add ellipsis if needed between siblings and end
    if (siblingEnd < total - boundaryCount) {
      pages.push("...");
    } else if (siblingEnd === total - boundaryCount && !endPages.includes(siblingEnd)) {
      pages.push(siblingEnd);
    }

    // Add end pages (excluding already added)
    for (const page of endPages) {
      if (!pages.includes(page)) {
        pages.push(page);
      }
    }

    return pages;
  }

  /**
   * Get current page - priority: 1) pagy.page, 2) page attr, 3) current attr
   */
  getCurrent() {
    // Check pagy object first
    const pagy = this._getPagyObject();
    if (pagy && typeof pagy.page === "number") {
      return Math.max(1, pagy.page);
    }

    // Support both "current" and "page" attributes (Pagy uses "page")
    const pageVal = this.attr("page", "");
    const currentVal = this.attr("current", "");
    const val = pageVal || currentVal || "1";
    return Math.max(1, parseInt(val, 10) || 1);
  }

  /**
   * Get total pages - priority: 1) pagy.pages, 2) pages attr, 3) total attr
   */
  getTotal() {
    // Check pagy object first
    const pagy = this._getPagyObject();
    if (pagy && typeof pagy.pages === "number") {
      return Math.max(1, pagy.pages);
    }

    // Support both "total" and "pages" attributes (Pagy uses "pages")
    const pagesVal = this.attr("pages", "");
    const totalVal = this.attr("total", "");
    const val = pagesVal || totalVal || "1";
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
      // Click handler
      btn.addEventListener("click", (e) => {
        // If clicking a link, let it navigate (SSR/SEO support)
        if (e.target.tagName === "A" && !e.ctrlKey && !e.metaKey) {
          return; // Let the link handle navigation
        }
        
        e.preventDefault();
        const current = this.getCurrent();
        let newPage = current;

        if (btn.dataset.action === "prev") {
          newPage = Math.max(1, current - 1);
        } else if (btn.dataset.action === "next") {
          newPage = Math.min(this.getTotal(), current + 1);
        } else if (btn.dataset.action === "first") {
          newPage = 1;
        } else if (btn.dataset.action === "last") {
          newPage = this.getTotal();
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

      // Hover animation
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

      // Press animation
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
