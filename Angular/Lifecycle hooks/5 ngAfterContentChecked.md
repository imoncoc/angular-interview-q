## Angular `ngAfterContentChecked` Lifecycle Hook

### 1️⃣ When is called `ngAfterContentChecked`?
The `ngAfterContentChecked` lifecycle hook is called during every change detection cycle, after Angular has finished initializing and checking projected content.

### 2️⃣ How Does It Work?
- Angular also updates the properties decorated with `@ContentChild` and `@ContentChildren` decorator, before raising ngAfterContentChecked hook.

### 3️⃣ Important Notes
- Angular raises this hook even if there is no projected content in the component.


### 3️⃣ Important Notes
- The ngAfterContentInit is called after the projected content is initialized. ngAfterContentChecked is called whenever the projected content is initialized, checked and updated.