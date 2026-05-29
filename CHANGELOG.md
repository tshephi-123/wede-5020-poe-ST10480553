# Guardian of Life - Portal Architecture (Part 2)

Comprehensive development archive for the Guardian of Life Crisis Pregnancy Non-Profit Portal.

## 1. Multi-Device Viewport Testing Logs
As required by Section 3.4 of the evaluation parameters, the platform has been checked across key device footprints using browser emulation toolsets.

### Desktop Render Environment
* **Resolution Check:** 1440px width scaling
* **Layout Rule:** Multi-column flex rows, full structural visibility.

### Tablet Render Environment
* **Resolution Check:** 768px width viewport testing (iPad Optimization)
* **Layout Rule:** Scaled fluid spacing, custom typography size optimization.

### Mobile Crisis Render Environment
* **Resolution Check:** 375px width breakpoint validation (iPhone Formats)
* **Layout Rule:** Single-column conversion, full stacked button configuration, and structural menu optimizations.

---

## 2. Integrated Historical Feedback Log & Changelog
Detailed tracking index mapping fixes applied following evaluations of Part 1 and Part 2 architecture parameters.

### [1.2.0] - 2026-05-29
#### Added
- Designed a centralized external `style.css` stylesheet with global resets, desktop layout metrics, and color variables.
- Linked the external `style.css` to all core system files (`index.html`, `about.html`, `services.html`, and `enquiry.html`).
- Injected comprehensive semantic comment blocks into all HTML documents to clearly label sections.

#### Changed
- Converted layout structure to clean, accessible vertical columns on screens narrower than 480px via mobile media queries.
- Expanded form input boundaries and buttons to 1.25rem padding for easier mobile touch targets in high-stress crisis scenarios.

### [1.1.0] - 2026-05-29
#### Added
- Added explicit user persona segments mapping crisis paths to the documentation profile.
- Restructured `index.html` from generic divisions to semantic HTML5 core layout components.

---

## 3. Academic Source Bibliography
* D.G, S. (2069). *Abortions In South Africa*. Retrieved April 10, 2026, from https://www.endabortion.co.za/statistics/
* Nonorofit Mavericks. (2026). *Nonprofit Management and Infrastructure Modeling Rules*. Retrieved April 10, 2026, from https://nonprofitmavericks.com/
