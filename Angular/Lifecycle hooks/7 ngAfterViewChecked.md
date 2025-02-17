## Angular `ngAfterViewChecked` Lifecycle Hook

### 1️⃣ What is `ngAfterViewChecked`?
Angular fire `ngAfterViewChecked` lifecycle hook  **after** it checks and updates the components View template and all its child components view templates

### 2️⃣ Important Notes?
- This hook is called during the first change detection cycle, after  `@ngAfterViewInit` hook has executed. And after that during every change detection cycle

### 3️⃣ Important Notes
- Angular also updates the properties decorated with `@ViewChild` and `@ViewChildren` decorator before raising this hook.


### 3️⃣  Notes
- The `@NgAfterViewChecked` hook is a component only hook. It is not available for directives. 
