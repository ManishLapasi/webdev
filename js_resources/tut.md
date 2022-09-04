- `==` does type conversion. Example: `5 == '5'` evaluates to `true`
- `===` operator does not perform type conversion. Example `5 === '5'` evaluates to `false`

- variables are scoped at function level, not block level. Example: `for(i=0;i<5;i++) ...` is equivalent to `i = 0; for(i;i<5;i++) ... `

- undeclared variables (i.e. variables set without using `var` keyword) are always global in scope. This will cause errors later if not treated with care.