import { animate } from "motion";
import { FmElement } from "../core/fm-element.js";

let sparklineId = 0;

/**
 * <fm-sparkline> — Compact SVG trend chart for dashboards and KPI cards.
 *
 * Attributes:
 *   data          — JSON array or comma-separated list of numbers
 *   width         — chart width in pixels (default: 200)
 *   height        — chart height in pixels (default: 60)
 *   gradient-from — area gradient start color
 *   gradient-to   — area gradient end color
 *   stroke-color  — line color
 *   stroke-width  — line width in pixels (default: 2)
 *   aria-label    — accessible chart label
 */
export class FmSparkline extends FmElement {
  static observedAttributes = [
    "data",
    "width",
    "height",
    "gradient-from",
    "gradient-to",
    "stroke-color",
    "stroke-width",
    "aria-label",
  ];

  constructor() {
    super();
    sparklineId += 1;
    this._gradientId = `fm-sparkline-gradient-${sparklineId}`;
  }

  template() {
    const data = this._parseData();
    const width = this._numberAttr("width", 200);
    const height = this._numberAttr("height", 60);
    const gradientFrom = this.attr("gradient-from", "var(--fm-alpha-primary-20)");
    const gradientTo = this.attr("gradient-to", "transparent");
    const strokeColor = this.attr("stroke-color", "var(--fm-color-primary)");
    const strokeWidth = this._numberAttr("stroke-width", 2);
    const ariaLabel = this.attr("aria-label", "Sparkline trend");
    const { line, area, point } = this._buildPathData(data, width, height);
    const pointRadius = this._formatPoint(Math.max(strokeWidth * 1.5, 3));

    return /* html */ `
      <style>
        :host {
          display: inline-block;
          line-height: 0;
        }

        .sparkline {
          display: inline-block;
          will-change: transform, opacity;
        }

        svg {
          display: block;
          overflow: visible;
        }

        .area {
          transition: opacity var(--fm-transition-normal);
        }

        .line {
          filter: drop-shadow(0 2px 6px var(--fm-alpha-primary-15));
          transition: opacity var(--fm-transition-normal);
        }

        .point {
          filter: drop-shadow(0 2px 6px var(--fm-alpha-primary-15));
          transition: opacity var(--fm-transition-normal);
        }
      </style>

      <div class="sparkline" part="sparkline">
        <svg
          width="${width}"
          height="${height}"
          viewBox="0 0 ${width} ${height}"
          role="img"
          aria-label="${this._escapeAttr(ariaLabel)}"
          part="svg"
        >
          <defs>
            <linearGradient id="${this._gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: ${this._escapeAttr(gradientFrom)};" />
              <stop offset="100%" style="stop-color: ${this._escapeAttr(gradientTo)};" />
            </linearGradient>
          </defs>

          ${area ? `
            <path
              class="area"
              d="${area}"
              fill="url(#${this._gradientId})"
              part="area"
            ></path>
          ` : ""}

          ${line ? `
            <path
              class="line"
              d="${line}"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="stroke: ${this._escapeAttr(strokeColor)}; stroke-width: ${strokeWidth}px;"
              part="line"
            ></path>
          ` : ""}

          ${point ? `
            <circle
              class="point"
              cx="${point[0]}"
              cy="${point[1]}"
              r="${pointRadius}"
              style="fill: ${this._escapeAttr(strokeColor)};"
              part="point"
            ></circle>
          ` : ""}
        </svg>
      </div>
    `;
  }

  onEnter() {
    this._animateSparkline();
  }

  attributeChangedCallback() {
    this.render();

    if (this.isConnected && this._entered) {
      this._animateSparkline();
    }
  }

  _animateSparkline() {
    const sparkline = this.root.querySelector(".sparkline");
    if (!sparkline) return;

    animate(sparkline, { opacity: [0.4, 1], y: [6, 0] }, {
      type: "spring",
      stiffness: 320,
      damping: 26,
    });
  }

  _numberAttr(name, fallback) {
    const value = Number(this.attr(name, String(fallback)));
    return Number.isFinite(value) && value > 0 ? value : fallback;
  }

  _parseData() {
    const raw = this.attr("data", "").trim();
    if (!raw) return [];

    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed
          .map((value) => Number(value))
          .filter((value) => Number.isFinite(value));
      }
    } catch {
      // Fall through to CSV parsing.
    }

    return raw
      .split(",")
      .map((value) => Number(value.trim()))
      .filter((value) => Number.isFinite(value));
  }

  _buildPathData(data, width, height) {
    if (data.length === 0) {
      return { line: "", area: "", point: null };
    }

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const range = maxValue - minValue || 1;
    const padding = Math.min(10, width / 2, height / 2);
    const chartWidth = Math.max(width - (padding * 2), 0);
    const chartHeight = Math.max(height - (padding * 2), 0);

    const points = data.map((value, index) => {
      const x = data.length === 1
        ? width / 2
        : padding + (index / (data.length - 1)) * chartWidth;
      const y = padding + chartHeight - ((value - minValue) / range) * chartHeight;

      return [this._formatPoint(x), this._formatPoint(y)];
    });

    if (data.length === 1) {
      return { line: "", area: "", point: points[0] };
    }

    const line = points
      .map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
      .join(" ");

    const baseline = this._formatPoint(height - padding);
    const lastPoint = points[points.length - 1];
    const area = `${line} L ${lastPoint[0]} ${baseline} L ${points[0][0]} ${baseline} Z`;

    return { line, area, point: null };
  }

  _formatPoint(value) {
    return Number(value.toFixed(2));
  }

  _escapeAttr(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }
}

customElements.define("fm-sparkline", FmSparkline);
