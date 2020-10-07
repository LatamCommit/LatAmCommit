# Guía de código - LatAmCommit

## Principios

- Debemos tener un código que luzca como si una sola persona lo haya escrito.

## Estructura de archivos

- Este proyecto será una SPA (Single Page Application) y tendrá la siguiente estructura:

```yml
docs: ...
mockups: ...
src:
	img: ...
	pages: ...
	routes: index.js
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

## Reglas Generales

### Acerca de las tecnologías a usar

- Las únicas tecnologías a usar en este proyecto serán HTML, CSS y JavaScript.
- Se aplicará la metodología BEM para las clases en el HTML y en el CSS.
- Todo el código a excepción del contenido estará escrito en Ingles.

### Acerca de los archivos HTML

- Solo debe haber un archivo **_index.html_**, el cuál servirá para mostrar todas las vistas del sitio las cuáles serán cambiadas con JavaScript.
- Usar buenas prácticas y código semántico.
- Dentro de `<body>` se debe tener la siguiente estructura:

```html
<body>
	<header>...</header>
	<main id="main">...</main>
	<footer>...</footer>

	<script type="module" src="src/index.js"></script>
</body>
```

- Dentro de `<main>` es donde se renderizarán las vistas.

### Acerca de los archivos CSS

- Todos los archivos de CSS se encontrarán en la carpeta _src/styles_
- El contenido en cada archivo debe seguir el siguiente orden:

```css
/* importaciones de fuentes (solo en index.css) */
@import ('...');

/* variables (solo en index.css) */
:root {
	--color-primario: ...;
	--color-secundario: ...;
}

/* selectores de etiquetas (solo en index.css) */
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

- Todos los archivos de JavaScript se encontrarán en la carpeta _src_
- En el archivo **_index.js_** se encuentra el uso del router.
- En el archivo **_routes/index.js_** se encuentra el router y las rutas.
- En la carpeta **_pages_** se encuentran las vistas. El nombre de estos archivos debe estar en camel case empezando con mayúscula.

### Acerca del formateo

- Para el formateo del código se usará Prettier.
- Las configuraciones se encuentran en el archivo **_.prettierrc_**.
- Para usar Prettier se debe instalar en las extensiones de VSCode.
- Una vez instalado se presiona `Ctrl + Shift + P` y se busca la opción `Format Document`. Tambien se puede ejecutar el atajo `Shift + Alt + F` para formatear.
- Para formatear al momento de guardar habilitar la opción `"editor.formatOnSave": true` en las configuraciones de VSCode.

> Cualquier recomendación para la guía de estilos o para la documentación en general puede ser realizada en el grupo de Slack
