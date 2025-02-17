<p>{{ myString | reverse }}</p>  ```

In this example, the `reverse` pipe takes the value of `myString` and reverses it before displaying it.

**Pure vs. Impure Pipes:**

Pipes are classified as either *pure* or *impure* based on how Angular handles change detection:

**1. Pure Pipes (Default):**

* **Behavior:** A pure pipe is only executed when its input value changes.  Angular checks for *referential equality* (using `===`) to determine if the input has changed.  If the input reference hasn't changed, the pipe's `transform()` method is *not* called, and the cached result is used.
* **Advantages:**  Performance optimization.  Pure pipes prevent unnecessary re-execution, improving application performance.
* **When to Use:**  Most pipes should be pure.  Use pure pipes when the transformation depends only on the input value and doesn't have any side effects.

**2. Impure Pipes:**

* **Behavior:** An impure pipe is executed on *every* change detection cycle, regardless of whether the input value has changed.  This means the `transform()` method is called frequently.
* **Advantages:**  Can be useful for transformations that depend on asynchronous operations, or data that changes frequently.
* **Disadvantages:**  Performance impact.  Impure pipes can significantly degrade performance if they perform complex calculations or operations.
* **When to Use:**  Use impure pipes *only* when absolutely necessary.  They are generally less common.  Examples might include filtering an array based on user input or handling real-time data updates.

**How to Make a Pipe Impure:**

You make a pipe impure by setting the `pure` property of the `@Pipe` decorator to `false`:

```typescript
@Pipe({
  name: 'myImpurePipe',
  pure: false // Make the pipe impure
})
export class MyImpurePipe implements PipeTransform {
  // ...
}