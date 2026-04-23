- When a new component is created or updated, make sure we update the index.html as well
- download icons from https://tabler.io/icons if needed
- minimize component variants

## Input & Textarea Components

These components are intentionally simplified:

- **Single size only**: No `size` attribute (always medium/44px height for input)
- **No variants**: Always uses outlined style with visible border
- **No readonly state**: Use `disabled` instead, or manage read-only behavior in your app
- **Required attribute**: The `required` attribute sets HTML5 validation; it doesn't add visual indicators
- **Accessibility**: Use the `label` attribute for screen reader support (visually hidden)
- **Outline always visible**: The input has a visible border at all times for better usability
