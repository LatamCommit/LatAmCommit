# Guía de código - LatAmCommit

## Principles

- We are aiming to have a code that looks like only 1 person wrote it

## Data Structure

- This project seeks to be SPA ( Single Page Application ) and it will follow the structure:

```yml
docs: ...
mockups: ...
src:
	  img: ...
	  pages: ...
    router:
        index.js
        routes.js
	  styles:
		    index.css
		    tablet.css
		    desktop.css
	  index.js
.gitignore
.prettierrc
collaborators.txt
index.html
README.md
```

## General Rules

### Stack that will be used

- It will be only use CSS3, HTML5 and Javascript.
- For the styles the BEM methodology will be used
- The only language that will be used is English

### About the HTML5

- It should only be one **_index.html_**, which will serve to display all the views of the site which will be modify using script coded in Javascript
- Best practices and semantic code .
- The `<body>` section will have the follow structure:

```html
<body>
	<header>...</header>
	<main id="main">...</main>
	<footer>...</footer>

	<script type="module" src="src/index.js"></script>
</body>
```

- Inside the `<main>` the views will be rendered.

### About the CSS files

- All the CSS files will be inside the _src/styles_ folder

- It should be follow the rules in each rule property

```css
something {
	/* Box-Model properties (display, width, height, margin, padding) */
	/* Positioning (position, top, bottom, z-index) */
	/* Typography (font-size, font-family, text-transform) */
	/* Decoration (background, color) */
}

/* Example */
.button {
	display: block;
	width: 220px;
	height: 40px;
	position: relative;
	font-weight: blod;
	text-transform: uppercase;
	background-color: #333333;
}
```

### About the Javascript files

- All the Javascript files will be into the _src_ folder.
- The router will be find inside the **_routes/index.js_** file.
- The views will be in the **_pages_** folder, and the name of their file must start with a capital leter.

### Formating

- The code will be standardized with Prettier.
- Prittier config file is on **_.prettierrc_**.

> Any suggestion can be written in the Slack Group
