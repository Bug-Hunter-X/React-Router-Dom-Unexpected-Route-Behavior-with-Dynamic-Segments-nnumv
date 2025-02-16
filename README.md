# React Router Dom Unexpected Route Behavior with Dynamic Segments

This repository demonstrates an unexpected behavior in React Router Dom v6 when navigating to a route with a dynamic segment and then attempting to navigate back to the previous page using the browser's back button or `useNavigate` hook.  The issue arises when the route parameters change during a single session without fully unloading the component.

## Steps to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/user/1`.
5. Update the URL (via a link or programmatically).  The component will re-render without fully unloading.
6. Press the browser's back button.  The route will behave unexpectedly and might not go back to the previous page.

## Expected Behavior
Navigating back should restore the previous route and its component's state.

## Actual Behavior
The route might not correctly return to the previous route.