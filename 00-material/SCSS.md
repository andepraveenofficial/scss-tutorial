# SCSS

<details>
<summary>Index</summary>

## Index

- Introduction
- scss

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

</details>
