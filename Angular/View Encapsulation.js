// 1. What is View encapsulation?
// TODO: In Angular, a component's styles can be encapsulated within the component's host element so that they don't affect the rest of the application.

// ViewEncapsulation.ShadowDom: Angular uses the browser's built-in Shadow DOM API to enclose the component's view inside a ShadowRoot

// ViewEncapsulation.Emulated:  Angular modifies the component's CSS selectors so that they are only applied to the component's view and do not affect other elements in the application

// ViewEncapsulation.None: Angular does not apply any sort of view encapsulation meaning that any styles specified for the component are actually globally applied and can affect any HTML element present within the application.