# Copilot Instructions for pramod-portfolio

## Project Overview
This is a simple static portfolio website consisting of HTML, CSS, and JavaScript files. The site presents personal/professional information and includes a downloadable resume.

## Key Files
- `index.html`: Main landing page. Contains the core structure and links to other resources.
- `style.css`: All styling for the site. Follows standard CSS conventions.
- `script.js`: Handles interactive behaviors (e.g., form submission, dynamic UI updates).
- `thank-you.html`: Shown after form submission or other user actions.
- `Resume.pdf`: Downloadable resume.

## Architecture & Patterns
- No frameworks or build tools are used; all files are static and loaded directly by the browser.
- JavaScript is used for basic DOM manipulation and event handling. No external libraries are present.
- All navigation is via standard HTML links; no client-side routing.
- CSS is global and not modularized. Class and ID naming is descriptive and flat.

## Developer Workflows
- **No build step required.**
- To test changes, simply open `index.html` in a browser.
- Debug JavaScript using browser DevTools (F12).
- To update the resume, replace `Resume.pdf`.

## Conventions
- Keep HTML semantic and accessible (use `<header>`, `<main>`, `<footer>`, etc.).
- Use clear, descriptive class names in CSS and HTML.
- Place all scripts at the end of the `<body>` in HTML for best performance.
- Keep all assets in the root directory for simplicity.

## Integration Points
- No external APIs or services are integrated.
- No authentication or backend logic is present.

## Example Patterns
- Form submission in `index.html` is handled by JavaScript in `script.js`, which may redirect to `thank-you.html`.
- All styling is managed in `style.css`; avoid inline styles.

## How to Extend
- Add new pages by creating additional `.html` files and linking them from `index.html`.
- Add new styles to `style.css`.
- Add new scripts to `script.js` or create new `.js` files if needed.

---
For questions or unclear conventions, review `index.html` and `script.js` for current patterns.
