- `==` does type conversion. Example: `5 == '5'` evaluates to `true`
- `===` operator does not perform type conversion. Example `5 === '5'` evaluates to `false`

- variables are scoped at function level, not block level. Example: `for(i=0;i<5;i++) ...` is equivalent to `i = 0; for(i;i<5;i++) ... `
