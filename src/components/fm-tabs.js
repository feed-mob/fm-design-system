import { FmElement } from "../core/fm-element.js";
import { animate } from "motion";

/**
 * <fm-tabs> — A professional tabbed navigation component for FM Agency.
 *
 * Usage:
 *   <fm-tabs active="0">
 *     <fm-tab label="Overview">Content 1</fm-tab>
 *     <fm-tab label="Details">Content 2</fm-tab>
 *   </fm-tabs>
 *
 * Attributes:
 *   active   — index of the active tab (default "0")
 *   variant  — "default" | "pills" (default "default")
 *
 * Events:
 *   fm-tab-change — fired when tab changes, detail: { index: number, label: string }
 *
 * Animations:
 *   - Tab panel fades in on switch
 *   - Tab buttons have subtle hover animations
 */
export class FmTabs extends FmElement {
  static observedAttributes = ["active", "variant"];

  template() {
    const active = parseInt(this.attr("active", "0"), 10);
    const variant = this.attr("variant", "default");

    // Only select direct children fm-tab elements, not nested ones
    const tabs = Array.from(this.children).filter(child => child.tagName === 'FM-TAB');
    const tabHeaders = tabs
      .map(
        (tab, i) => `
        <button
          class="tab-btn ${i === active ? "active" : ""}"
          data-index="${i}"
          role="tab"
          aria-selected="${i === active}"
        >
          ${tab.getAttribute("label") || `Tab ${i + 1}`}
        </button>`,
      )
      .join("");

    return /* html */ `
      <style>
        :host { display: block; }

        .tab-header {
          display: flex;
          gap: var(--fm-space-xs);
          border-bottom: 2px solid var(--fm-color-border);
          margin-bottom: var(--fm-space-md);
          position: relative;
        }

        .tab-header.pills {
          border-bottom: none;
          background: var(--fm-color-surface-muted);
          border-radius: var(--fm-radius-full);
          padding: var(--fm-space-xs);
        }

        .tab-btn {
          border: none;
          background: transparent;
          font-family: var(--fm-font-family);
          font-size: var(--fm-font-size-sm);
          font-weight: var(--fm-font-weight-medium);
          color: var(--fm-color-text-secondary);
          padding: var(--fm-space-sm) var(--fm-space-md);
          cursor: pointer;
          position: relative;
          transition: color var(--fm-transition-fast), background var(--fm-transition-fast);
          border-radius: 0;
          outline: none;
        }

        .pills .tab-btn {
          border-radius: var(--fm-radius-full);
        }

        .tab-btn:hover { 
          color: var(--fm-color-text); 
        }

        .tab-btn.active {
          color: var(--fm-color-primary);
          font-weight: var(--fm-font-weight-semibold);
        }

        .pills .tab-btn.active {
          background: var(--fm-color-surface);
          box-shadow: var(--fm-shadow-sm);
          color: var(--fm-color-primary);
        }

        .tab-btn:focus-visible {
          outline: 2px solid var(--fm-color-primary-light);
          outline-offset: 2px;
        }

        /* Underline indicator for default variant */
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--fm-color-primary);
          border-radius: var(--fm-radius-full);
        }

        .pills .tab-btn.active::after { display: none; }

        .tab-panel {
          will-change: opacity;
        }
      </style>

      <div class="tab-header ${variant}" role="tablist" part="header">
        ${tabHeaders}
      </div>
      <div class="tab-panel" role="tabpanel" part="panel">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._updatePanels();
    this._bindEvents();
    
    // Ensure panels are updated after all tabs are fully connected
    requestAnimationFrame(() => {
      this._updatePanels();
    });
  }

  onEnter() {
    animate(this.root.querySelector(".tab-header"), { opacity: [0, 1], y: [-8, 0] }, {
      type: "spring",
      stiffness: 300,
      damping: 20,
    });
  }

  _updatePanels() {
    const active = parseInt(this.attr("active", "0"), 10);
    // Only select direct children fm-tab elements, not nested ones
    const tabs = Array.from(this.children).filter(child => child.tagName === 'FM-TAB');
    tabs.forEach((tab, i) => {
      tab.style.display = i === active ? "block" : "none";
    });
  }

  _bindEvents() {
    this.root.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index || "0", 10);
        this.setAttribute("active", String(index));
      });
    });
  }

  attributeChangedCallback(name) {
    this.render();
    this._updatePanels();
    this._bindEvents();

    if (name === "active") {
      const index = parseInt(this.attr("active", "0"), 10);
      // Only select direct children fm-tab elements
      const tabs = Array.from(this.children).filter(child => child.tagName === 'FM-TAB');
      const label = tabs[index]?.getAttribute("label") || "";

      animate(this.root.querySelector(".tab-panel"), { opacity: [0, 1] }, { duration: 0.25 });

      this.dispatchEvent(new CustomEvent("fm-tab-change", {
        bubbles: true,
        detail: { index, label },
      }));
    }
  }
}

/**
 * <fm-tab> — A single tab panel used inside <fm-tabs>.
 *
 * Attributes:
 *   label — tab header text
 */
export class FmTab extends HTMLElement {
  connectedCallback() {
    // Initial visibility is controlled by parent fm-tabs via _updatePanels()
    // We use a small delay to ensure the parent has a chance to set us up
    requestAnimationFrame(() => {
      // If we still don't have an explicit display set by parent, hide by default
      if (!this.style.display) {
        this.style.display = "none";
      }
    });
  }
}

customElements.define("fm-tabs", FmTabs);
customElements.define("fm-tab", FmTab);
