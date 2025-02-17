## Angular `ngOnDestroy` Lifecycle Hook

### 1️⃣ What is `ngOnDestroy`?
Angular fire `ngOnDestroy` lifecycle hook just **before** the component or the directive is destroy i.e. removed from DOM
### 2️⃣ Important Notes
- This hook is a great place to do some cleanup work like unsubscribe from an observable or detach event handler etc. as this hook is called right before the component is destroyed.

### 3️⃣ Important Notes
- This `ngOnDestroy` is the last lifecycle hook of a component & a directive.
