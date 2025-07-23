# SCSS

<details>
<summary>Index</summary>

## Index

- Introduction
- scss
- Advanced

</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- SCSS -> CSS with superpowers
- `scss` is a powerful CSS preprocessor that helps you write cleaner, more maintainable, and DRY (Don't Repeat Yourself) styles.
- browser doesn’t understand `scss`. So you need to convert SCSS code into standard CSS.

</details>

---

<details>
<summary>scss</summary>

## scss

1. variables
2. nesting
3. symbols -> &
4. mixin
5. parameters
6. operators
7. use
8. functions

### 1. variables

```scss
/* variables */

$primaryColor: green;
$primaryBgColor: #f0f0f0;

.container {
	background-color: $primaryBgColor;
	color: $primaryColor;
}
```

### 2. nesting

```scss
/* variables */
$primaryColor: green;
$primaryBgColor: #f0f0f0;

/* Nesting */
.container {
	background-color: $primaryBgColor;
	color: $primaryColor;

	h1 {
		color: $primaryColor;
	}

	p {
		color: $primaryColor;
		background-color: $primaryBgColor;
	}
}
```

### 3. & symbol

```scss
/* variables */

$primaryColor: green;
$primaryBgColor: #f0f0f0;
$secondaryColor: red;

/* Nesting */
.container {
	background-color: $primaryBgColor;
	color: $primaryColor;

	h1 {
		color: $primaryColor;
	}

	p {
		color: $primaryColor;
		background-color: $primaryBgColor;
	}

	/* Hover effect -> & points to parent */
	&:hover {
		background-color: $secondaryColor;
	}
}
```

### 4. mixins

```scss
/* mixins */
@mixin flexProps {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

/* variable */
$primaryBgColor: #f0f0f0;

.container {
	@include flexProps;
	background-color: $primaryBgColor;
}
```

### 5. parameter

```scss
/* mixins */
@mixin flexProps {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

@mixin dynamicMargin($margin) {
	margin: $margin;
}

@mixin dynamicPadding($padding) {
	padding: $padding;
}

/* variable */
$primaryBgColor: #f0f0f0;

.container {
	@include flexProps;
	background-color: $primaryBgColor;
	@include dynamicMargin(40px);
	@include dynamicPadding(20px);
}
```

### 6. Operator

- Addition : +

```scss
$primaryBgColor: #f0f0f0;

.container {
	background-color: $primaryBgColor;
	padding: 20px + 20px;
}
```

### 7. use

```scss
@use "./variables" as vars;

.container {
	background-color: vars.$primaryBgColor;
	padding: 20px + 20px;
}
```

### 8. functions

- Use `@function` and return a single value (not CSS rules).

```scss
@use "./variables" as vars;

@function calculatePadding($padding) {
	@return $padding * 2;
}

</details>
```

---

<details>
<summary>Advanced</summary>

## Advanced

### global

- When you use `:global` in SCSS Modules, you are customizing the styles of global classes (like those from a UI library such as Material-UI).
- The `:global` keyword in SCSS Modules means you are changing the styles of a global class (like a class from Material-UI).
- Use `:global` when you want your styles to affect classes that are used everywhere, not just in your component.
- The `:global` keyword is used in scs Modules to indicate that the selector inside it should be considered global classes styles changed.
- `&:global(.class-name)` means style this class everywhere, but only when it is inside my local class.

```scss
.ma-button {
	/* Targets <element class="MuiButtonBase-root Mui-disabled MuiButton-contained"> */
	&:global(.MuiButtonBase-root) {
		font-size: functions.get-font-size(s);
		font-weight: functions.get-font-weight(regular);
		font-family: functions.get-font-family(main);
	}

	&:global(.Mui-disabled) {
		background-color: functions.get-color(primary, 200);
		color: functions.get-color(neutral-white, 500);
	}

	&:global(.MuiButton-contained) {
		background-color: functions.get-color(primary, base);

		&:hover {
			background-color: functions.get-color(primary, 400);
		}
	}
}
```

### map-get

- - `map-get` is a Sass built-in function that gets a value from a map (a list of key-value pairs, like a dictionary).
- Use one argument for a simple map.
- Use two or more arguments for nested maps.
- The number of arguments depends on how your map is set up.

```scss
/* map -> It is like a dictionary */
$ma-font-size: (
	5xl: 8rem,
	4xl: 6rem,
	3xl: 4.5rem,
	2xl: 3.75rem,
	xl: 3rem,
	l: 2.25rem,
	m: 1.875rem,
	sm: 1.5rem,
	xs: 1rem,
);

// Get the value for 'sm'
map-get($ma-font-size, sm); // returns 1.5rem
```

```scss
@function get-font-size($size) {
	@return map-get($ma-font-size, $size);
}

// Use the function
font-size: get-font-size(sm); // sets font-size to 1.5rem
```

</details>

---
