# sas

<details>
<summary>scss</summary>

### Super Powers

- operators
- variables
- nesting
- mixin
- parameters
- partials

### Operators

- Addition : +

```scss
// Addition
div {
	font-size: 16px + 16px;
}
```

```css
div {
	font-size: 32px;
}
```

### Variables

```scss
$bg-color: green;
div {
	background-color: $bg-color;
}
```

```css
div {
	background-color: green;
}
```

### nesting

```scss
$bg-color: green;

div {
	font-size: 16px + 16px;
	background-color: $bg-color;

	h1 {
		color: orange;
	}

	h1:hover {
		background-color: aquamarine;
	}

	p {
		color: orangered;
	}
}
```

```css
div {
	font-size: 32px;
	background-color: green;
}
div h1 {
	color: orange;
}
div h1:hover {
	background-color: aquamarine;
}
div p {
	color: orangered;
}
```

```scss
// Write nested hover
p {
	color: orangered;
	&:hover {
		background-color: aquamarine;
	}
}
```

### mixin

```scss
@mixin flexProps {
	display: flex;
	justify-content: center;
	align-items: center;
}

div {
	font-size: 16px + 16px;
	background-color: $bg-color;
	@include flexProps;
}
```

```css
div {
	font-size: 32px;
	background-color: green;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
```

### mixin with parameter

```scss
@mixin commonProps($par1) {
	letter-spacing: $par1;
}

p {
	color: orangered;
	@include commonProps(8px);
}
```

</details>

---
