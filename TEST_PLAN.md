# TEST PLAN — SauceDemo

## 1. Scope

This test plan covers the main user journey:
Login → Browse products → Add to cart → Checkout.

It also includes basic negative scenarios and comparison between different user types.


## 2. Test Cases (Prioritized)

### High Priority
1. Successful login with `standard_user`
2. Login failure with `locked_out_user`
3. Add product to cart
4. Complete checkout with valid data
5. Checkout validation when fields are empty

### Medium Priority
6. Remove product from cart
7. Prevent checkout with empty cart
8. Logout redirects to login page
9. `problem_user` displays incorrect product images
10. `performance_glitch_user` login succeeds with delay


## 3. Out of Scope

- Cross-browser testing
- Mobile testing
- Performance testing
- Security testing
- Accessibility testing


## 4. Risk Assessment

Higher risk areas:
- Checkout form validation
- Cart state management
- User-specific behavior differences
- Login error handling