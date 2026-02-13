# Test Plan — Sauce Labs Demo App

## Scope
This test plan covers key user journeys and pages of the Sauce Labs demo app:

- **Login flows** – validating successful login (`standard_user`) and invalid credentials (`invalid_user`).  
- **Inventory browsing** – checking that product listings, prices, and images are displayed correctly.  
- **Cart interactions** – adding products to the cart and verifying the cart badge updates.  
- **Checkout happy path** – completing a purchase as `standard_user`.  
- **Cross-user scenario** – verifying known inconsistencies for `problem_user` (images, titles, add-to-cart, navbar).  

**Rationale:**  
These flows were selected because they represent the core end-to-end functionality most critical to the user experience and business logic. They cover happy-path scenarios, negative cases, and at least one cross-user scenario.

---

## Test Cases (prioritized)

| # | Test Case | User | Purpose / Validation |
|---|-----------|------|-------------------|
| 1 | Login successful | `standard_user` | Validate login works and redirects to inventory page. |
| 2 | Login invalid | invalid credentials | Validate proper error message is shown. |
| 3 | Browse inventory | `standard_user` | Validate all products are visible, prices displayed, images loaded. |
| 4 | Add product to cart | `standard_user` | Validate cart badge increments and product is added. |
| 5 | Cross-user consistency validation | `problem_user` | Validate known issues: duplicate images, titles starting with "Sauce Labs ", add-to-cart inconsistencies, navbar presence. Some failures are expected. |
| 6 | Checkout happy path | `standard_user` | Complete purchase flow: login, add product, checkout, confirmation page. Validate totals, payment, and shipping information. |

> **Note:** Test 5 (`problem_user`) is intentionally designed to detect inconsistencies and may fail at multiple points. This is expected and part of its purpose.

---

## Out of Scope

- Detailed filtering and sorting of inventory. (`problem_user` filters known to fail)  
- Checkout flow for `problem_user` (blocked or inconsistent)  
- Visual regression for images outside known inventory items  
- Non-core edge cases beyond the 2–3 hour timebox  

---

## Risk Assessment

- **Cross-user inconsistencies** – `problem_user` has broken images, duplicate previews, non-functional add/remove buttons. These are high-risk areas.  
- **Checkout without products** – `standard_user` can navigate to checkout without adding products; could reveal logic issues.  
- **Inventory display** – Missing or incorrect images, titles, or prices may confuse users.  
- **Cart functionality** – Badge counts and add/remove buttons are prone to errors.  
- **Overall app stability** – Flows with `problem_user` may fail unexpectedly; tests must handle these failures intentionally.
