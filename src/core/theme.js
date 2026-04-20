/**
 * FM Design System — Theme Tokens
 *
 * A refined, professional design language for FM Agency.
 * Built around a teal primary palette with warm neutrals and
 * sharp accent colors suited for advertising & creative work.
 *
 * Override any variable at :host or :root to customise.
 */

export const themeStyles = /* css */ `
  :host {
    /* ---- Primary Teal Palette ---- */
    --fm-color-primary: #0D9488;
    --fm-color-primary-light: #14B8A6;
    --fm-color-primary-dark: #0F766E;
    --fm-color-primary-50: #F0FDFA;
    --fm-color-primary-100: #CCFBF1;
    --fm-color-primary-200: #99F6E4;

    /* ---- Secondary & Accent ---- */
    --fm-color-secondary: #1E293B;
    --fm-color-secondary-light: #334155;
    --fm-color-accent: #F59E0B;
    --fm-color-accent-light: #FBBF24;

    /* ---- Semantic ---- */
    --fm-color-success: #059669;
    --fm-color-warning: #D97706;
    --fm-color-error: #DC2626;
    --fm-color-info: #0284C7;

    /* ---- Surfaces ---- */
    --fm-color-surface: #FFFFFF;
    --fm-color-surface-alt: #F8FAFC;
    --fm-color-surface-muted: #F1F5F9;
    --fm-color-text: #0F172A;
    --fm-color-text-secondary: #475569;
    --fm-color-text-light: #FFFFFF;
    --fm-color-border: #E2E8F0;
    --fm-color-border-strong: #CBD5E1;

    /* ---- Alpha Colors ---- */
    --fm-alpha-primary-10: rgba(13, 148, 136, 0.10);
    --fm-alpha-primary-15: rgba(13, 148, 136, 0.15);
    --fm-alpha-primary-20: rgba(13, 148, 136, 0.20);
    --fm-alpha-secondary-10: rgba(30, 41, 59, 0.10);
    --fm-alpha-accent-12: rgba(245, 158, 11, 0.12);

    /* ---- Typography ---- */
    --fm-font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    --fm-font-size-xs: 0.75rem;
    --fm-font-size-sm: 0.875rem;
    --fm-font-size-md: 1rem;
    --fm-font-size-lg: 1.125rem;
    --fm-font-size-xl: 1.25rem;
    --fm-font-size-2xl: 1.5rem;
    --fm-font-weight-normal: 400;
    --fm-font-weight-medium: 500;
    --fm-font-weight-semibold: 600;
    --fm-font-weight-bold: 700;
    --fm-line-height: 1.5;
    --fm-letter-spacing: -0.011em;

    /* ---- Shape ---- */
    --fm-radius-sm: 6px;
    --fm-radius-md: 8px;
    --fm-radius-lg: 12px;
    --fm-radius-xl: 16px;
    --fm-radius-full: 9999px;

    /* ---- Spacing ---- */
    --fm-space-xs: 4px;
    --fm-space-sm: 8px;
    --fm-space-md: 16px;
    --fm-space-lg: 24px;
    --fm-space-xl: 32px;
    --fm-space-2xl: 48px;

    /* ---- Shadows ---- */
    --fm-shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.05);
    --fm-shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04);
    --fm-shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.05);
    --fm-shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04);
    --fm-shadow-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06);

    /* ---- Transitions ---- */
    --fm-transition-fast: 150ms ease;
    --fm-transition-normal: 250ms ease;
    --fm-transition-slow: 400ms ease;

    /* ---- Base Styles ---- */
    font-family: var(--fm-font-family);
    color: var(--fm-color-text);
    line-height: var(--fm-line-height);
    letter-spacing: var(--fm-letter-spacing);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;
