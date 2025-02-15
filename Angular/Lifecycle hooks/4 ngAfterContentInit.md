## Angular `ngAfterContentInit` Lifecycle Hook

### 1️⃣ What is `ngAfterContentInit`?
The `ngAfterContentInit` lifecycle hook is triggered **after** a component's projected content has been fully initialized.

### 2️⃣ How Does It Work?
- Angular updates the properties decorated with `@ContentChild` and `@ContentChildren` **just before** this hook is invoked.

### 3️⃣ Important Notes
- This lifecycle hook **only runs once**, during the **first** change detection cycle.
- If the projected content **changes later**, `ngAfterContentInit` **will not be called again**.
