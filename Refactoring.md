# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

`deterministicPartitionKey` function has been updated with the following changes:

- it' has been modified to use the helper functions `getPartitionKey`, `hashPartitionKey`, and `hashData` that are exported from the module.

- The `getPartitionKey` function checks if the event object has a partitionKey property. If it exists, the value is returned. Otherwise, the event object is stringified and passed to the hashPartitionKey function to generate a hashed key.

- `hasData` function is pure function which hash and digest the data passed to it. It returns a hashed value of the data.
