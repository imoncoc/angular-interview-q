
### 1️⃣ What is `ngAfterViewInit`?
The `ngAfterViewInit` lifecycle hook is called **after** the components View template and all it's child components view templates are fully initialized.

### 2️⃣ How Does It Work?
- Angular also updates the properties decorated with `@ViewChild` and `@ViewChildren` decorator, before raising ngAfterViewInit hook.

### 3️⃣ Important Notes
- This hook is called during the first change detection cycle, when Angular initializes the view for the first time.

### 3️⃣ Important Notes
- By the time this hook get's called for a component, all the lifecycle hook methods of child components and directives are completely processed and child components are completely ready.