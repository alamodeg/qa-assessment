# TEST_PLAN.md

## Scope
This test plan covers the main end-to-end flows of the Sauce Demo app for standard users.  
We focus on the following pages and user journeys:

- **Login Page:** Validate successful login, invalid login, and locked-out users.
- **Inventory Page:** Verify items display correctly, images, titles, and add/remove to cart.
- **Cart Page:** Check items are added/removed correctly and cart badge updates.
- **Checkout Page:** Validate single and multiple product checkout, required fields, and confirmation messages.

These flows were chosen because they represent the **critical user journeys** of a typical e-commerce application.

---

## Test Cases (Prioritized)

| ID   | Test Case Description                                           | Type              |
|------|----------------------------------------------------------------|-----------------|
| TC1  | Login successfully with `valid` user                           | Happy-path       |
| TC2  | Login fails with `invalid` user                                 | Negative         |
| TC3  | Inventory items are displayed correctly for `valid` user       | Happy-path       |
| TC4  | Add single product to cart                                      | Happy-path       |
| TC5  | Cross-user consistency: `problem_user` vs `valid` user         | Cross-user       |
| TC6  | Single product checkout                                         | Happy-path       |
| TC7  | Locked-out user cannot login                                    | Negative         |
| TC8  | Multi-product checkout                                          | Happy-path       |
| TC9  | Validate field block behavior for `problem_user`               | Negative         |
| TC10 | Checkout with missing form fields shows error messages         | Negative         |

> **Note:** Test 5 (`problem_user`) is intentionally designed to detect inconsistencies and may fail at multiple points. This is expected and part of its purpose.

---

## Out of Scope
- Filtering and sorting functionality in inventory (time constraints).  
- Detailed UI style checks (beyond critical elements like images and titles).  
- User account/profile management flows.  

These areas were intentionally excluded due to the **2–3 hour time limit** and focus on core e2e flows.

---

## Risk Assessment
Areas most likely to break:

1. **Login:** Invalid or locked-out users; critical because it blocks all flows.  
2. **Checkout form validation:** Missing required fields; Sauce Demo shows only the first error at a time.  
3. **Cart functionality:** Add/remove items; cart badge updates might fail.  
4. **Cross-user differences:** `problem_user` has UI inconsistencies (broken images, incorrect titles).  

Mitigation: Tests include negative and cross-user scenarios to catch these potential failures.
