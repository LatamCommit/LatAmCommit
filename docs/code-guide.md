# Guía de código - LatAmCommit

## Principios

- Debemos tener un código que luzca como si una sola persona lo haya escrito.

## Estructura de archivos

```yml
README.md
.gitignore
index.html
docs: ...
mockups: ...
html:
	blogs: index.html
	other-folder: index.html
css:
	main-styles.css
	home.css
	blog.css
	...
js:
	main.js
	home.js
	blog.js
	...
assets: ...
```

## Reglas Generales

### Acerca de las tecnologías a usar

- Las únicas tecnologías a usar en este proyecto serán HTML, CSS y JavaScript.
- Se aplicará la metodología BEM para las clases en el HTML y en el CSS.
- Todo el código a excepción del contenido estará escrito en Ingles.

### Acerca de los archivos HTML

- Solo debe haber un archivo **_index.html_** para el home del sitio. Los demás archivos deben estar separados en subcarpetas dentro de la carpeta _html_. Cada una de estas subcarpetas debe contener también un archivo **_index.html_**.

- Usar buenas prácticas y código semántico.
- Dentro del `<body>` se debe tener la siguiente estructura:

```html
<body>
	<header>...</header>
	<main>...</main>
	<footer>...</footer>

	<script src=" ... "></script>
</body>
```

### Acerca de los archivos CSS

- Todos los archivos de CSS se encontrarán en la carpeta _css_
- El contenido en cada archivo debe seguir el siguiente orden:

```css
/* importaciones de fuentes o de otras hojas de estilos */
@import ('...');

/* variables */
:root {
	--color-primario: ...;
	--color-secundario: ...;
}

/* selectores generales (de etiquetas) */
body {
	...;
}
header {
	...;
}

/* selectores de clases (usar BEM) */
.blog {
	...;
}
.blog__title {
	...;
}
.blog__content {
	...;
}

/* media queries */
@media screen and (min-width: 480px) {
	...;
}
```

- Se debe seguir el siguiente orden en las propiedades de cada regla:

```css
something {
	/* Propiedades de modelo de caja (display, width, height, margin, padding) */
	/* Posicionamiento (position, top, bottom, z-index) */
	/* Tipografía (font-size, font-family, text-transform) */
	/* Decoración (background, color) */
}

/* Ejemplo */
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

### Acerca de los archivos de JavaScript

- Todos los archivos de JavaScript se encontrarán en la carpeta _js_
- Se debe seguir el siguiente orden en los archivos:

```js
// Variables
const foo = 'bar'

// Elements
const $button = document.getElementById('button')

// Functions
function sayHi () { ... }

// Events
$button.addEventListener('click', ...)

// Main Code
sayHi()
```

- Los nombres de variables y de funciones se escribirán en camel case.
- Los nombres de los elementos se escribirán en camel case y con el signo `$` por delante.

### Acerca del formateo

- Para el formateo del código se usará Prettier.
- Las configuraciones se encuentran en el archivo **_.prettierrc_**.
- Para usar Prettier se debe instalar en las extensiones de VSCode.
- Una vez instalado se presiona `Ctrl + Shift + P` y se busca la opción `Format Document`. Tambien se puede ejecutar el atajo `Shift + Alt + F` para formatear.
- Para formatear al momento de guardar habilitar la opción `"editor.formatOnSave": true` en las configuraciones de VSCode.

> Cualquier recomendación para la guía de estilos o para la documentación en general puede ser realizada en el grupo de Slack
