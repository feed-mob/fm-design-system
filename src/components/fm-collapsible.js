import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-collapsible> — Expandable/collapsible content panel for FM Agency.
 *
 * Attributes:
 *   expanded    — boolean, initial expanded state
 *   disabled    — boolean, disables interaction
 *   header      — string, header text (alternative to slot)
 *
 * Slots:
 *   (default)   — collapsible content body
 *   header      — custom header content (overrides header attribute)
 *   icon        — custom toggle icon (overrides default chevron)
 *
 * Animations (Motion):
 *   - Entrance: Fade in with subtle slide up
 *   - Expand:   Smooth height animation with content fade
 *   - Collapse: Reverse expand animation
 *   - Icon:     Rotation 0deg → 180deg when expanded
 *
 * Events:
 *   - fm-collapse-change — { expanded: boolean } when state changes
 */
export class FmCollapsible extends FmElement {
  static observedAttributes = ["expanded", "disabled", "header"];

  /** @type {boolean} Tracks current expanded state */
  _isExpanded = false;

  template() {
    const header = this.attr("header", "");
    const disabled = this.boolAttr("disabled");
    const expanded = this.boolAttr("expanded");
    this._isExpanded = expanded;

    // Default chevron icon
    const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6"/>
    </svg>`;

    return /* html */ `
      <style>
        :host {
          display: block;
        }

        .collapsible {
          border: 1px solid var(--fm-color-border);
          border-radius: var(--fm-radius-lg);
          background: var(--fm-color-surface);
          font-family: var(--fm-font-family);
          overflow: hidden;
          will-change: transform, opacity;
        }

        /* ---- Header ---- */
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--fm-space-md) var(--fm-space-lg);
          cursor: ${disabled ? "not-allowed" : "pointer"};
          background: var(--fm-color-surface);
          transition: background var(--fm-transition-fast);
          user-select: none;
          gap: var(--fm-space-md);
        }

        .header:hover {
          background: ${disabled ? "var(--fm-color-surface)" : "var(--fm-color-surface-alt)"};
        }

        .header-content {
          flex: 1;
          min-width: 0;
          font-size: var(--fm-font-size-md);
          font-weight: var(--fm-font-weight-semibold);
          color: var(--fm-color-text);
        }
        .header-content:empty {
          display: none;
        }

        /* ---- Icon wrapper ---- */
        .icon-wrapper {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          color: var(--fm-color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--fm-transition-normal);
          transform-origin: center;
        }

        .icon-wrapper.expanded {
          transform: rotate(180deg);
        }

        .icon-wrapper ::slotted(svg),
        .icon-wrapper ::slotted(img) {
          width: 100%;
          height: 100%;
        }

        /* ---- Content wrapper ---- */
        .content-wrapper {
          overflow: hidden;
          height: ${expanded ? "auto" : "0"};
          opacity: ${expanded ? "1" : "0"};
        }

        .content {
          padding: 0 var(--fm-space-lg) var(--fm-space-lg) var(--fm-space-lg);
          font-size: var(--fm-font-size-sm);
          color: var(--fm-color-text-secondary);
          line-height: var(--fm-line-height);
        }

        /* ---- Disabled state ---- */
        .collapsible.disabled {
          opacity: 0.6;
        }

        .collapsible.disabled .header {
          cursor: not-allowed;
        }

        .collapsible.disabled .header:hover {
          background: var(--fm-color-surface);
        }
      </style>

      <div class="collapsible ${disabled ? "disabled" : ""}" part="collapsible">
        <div class="header" part="header" role="button" tabindex="${disabled ? "-1" : "0"}" aria-expanded="${expanded}">
          <div class="header-content">
            ${header ? `<span>${header}</span>` : ""}
            <slot name="header"></slot>
          </div>
          <div class="icon-wrapper ${expanded ? "expanded" : ""}" part="icon">
            <slot name="icon">${chevronIcon}</slot>
          </div>
        </div>
        <div class="content-wrapper" part="content-wrapper">
          <div class="content" part="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  /* ---- Lifecycle ---- */

  connectedCallback() {
    super.connectedCallback();
    this._bindEvents();
    this._isExpanded = this.boolAttr("expanded");
  }

  _bindEvents() {
    if (this.boolAttr("disabled")) return;

    const header = this.root.querySelector(".header");
    if (!header) return;

    header.addEventListener("click", () => this.toggle());
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  /* ---- Animations ---- */

  onEnter() {
    const collapsible = this.root.querySelector(".collapsible");
    animate(collapsible, { opacity: [0, 1], y: [8, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 24,
    });
  }

  /**
   * Expand the collapsible panel
   */
  expand() {
    if (this._isExpanded || this.boolAttr("disabled")) return;

    this._isExpanded = true;
    this.setAttribute("expanded", "");

    const contentWrapper = this.root.querySelector(".content-wrapper");
    const content = this.root.querySelector(".content");
    const iconWrapper = this.root.querySelector(".icon-wrapper");

    if (!contentWrapper || !content) return;

    // Measure content height
    const contentHeight = content.scrollHeight;

    // Animate height and opacity - aligned with icon
    animate(contentWrapper, {
      height: [0, contentHeight + "px"],
      opacity: [0, 1],
    }, {
      duration: 0.25,
      ease: "easeOut",
    });

    // Animate icon rotation - same duration for sync
    if (iconWrapper) {
      animate(iconWrapper, { rotate: 180 }, {
        duration: 0.2,
        ease: "easeInOut",
      });
    }

    this.dispatchEvent(new CustomEvent("fm-collapse-change", {
      detail: { expanded: true },
      bubbles: true,
    }));
  }

  /**
   * Collapse the collapsible panel
   */
  collapse() {
    if (!this._isExpanded || this.boolAttr("disabled")) return;

    this._isExpanded = false;
    this.removeAttribute("expanded");

    const contentWrapper = this.root.querySelector(".content-wrapper");
    const iconWrapper = this.root.querySelector(".icon-wrapper");

    if (!contentWrapper) return;

    // Animate height and opacity - aligned with icon
    animate(contentWrapper, {
      height: 0,
      opacity: 0,
    }, {
      duration: 0.2,
      ease: "easeIn",
    });

    // Animate icon rotation - same duration for sync
    if (iconWrapper) {
      animate(iconWrapper, { rotate: 0 }, {
        duration: 0.2,
        ease: "easeInOut",
      });
    }

    this.dispatchEvent(new CustomEvent("fm-collapse-change", {
      detail: { expanded: false },
      bubbles: true,
    }));
  }

  /**
   * Toggle expanded/collapsed state
   */
  toggle() {
    if (this._isExpanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  /**
   * Check if currently expanded
   * @returns {boolean}
   */
  get expanded() {
    return this._isExpanded;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    // Re-render for attribute changes that affect template
    if (name !== "expanded") {
      this.render();
      this._bindEvents();
      return;
    }

    // Handle expanded attribute change programmatically
    const shouldExpand = newValue !== null;
    if (shouldExpand !== this._isExpanded) {
      if (shouldExpand) {
        this.expand();
      } else {
        this.collapse();
      }
    }
  }
}

customElements.define("fm-collapsible", FmCollapsible);
