# Agencia Viajes STAR

Proyecto académico de Programación Web II (IACC - Semana 8) para demostrar trabajo colaborativo con herramientas de GitHub.

## Objetivo del proyecto

Crear una página web básica para la agencia de viajes **Agencia Viajes STAR**, que permita una búsqueda interactiva simulada de vuelos y muestre paquetes turísticos referenciales. El proyecto sirve como evidencia de buenas prácticas de colaboración en GitHub (ramas, commits, pull requests e issues).

## Archivos incluidos

```
agencia-viajes-github/
├── index.html    → Estructura semántica de la página
├── styles.css    → Estilos visuales del sitio
├── script.js     → Validación y búsqueda simulada de vuelos
└── README.md     → Documentación del proyecto
```

## Cómo abrir el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `agencia-viajes-github`.
3. Abrir el archivo `index.html` en el navegador (doble clic o arrastrar al navegador).

No se requiere servidor ni instalación de dependencias. Solo HTML, CSS y JavaScript puro.

## Flujo recomendado para GitHub

1. **Crear repositorio** en GitHub con el nombre del proyecto.
2. **Crear rama** `feature/busqueda-vuelos` para desarrollar la funcionalidad.
3. **Realizar cambios** en los archivos del proyecto dentro de esa rama.
4. **Hacer commit** con mensajes descriptivos.
5. **Crear pull request** hacia la rama principal (`main`) para revisión.
6. **Crear issue** para proponer la integración futura de reservas de hoteles.

## Ejemplos de mensajes de commit

- `feat: agregar formulario de búsqueda de vuelos`
- `fix: corregir validación de pasajeros`
- `docs: actualizar instrucciones del proyecto`

## Ejemplo de issue

**Título:**  
Integración del sistema de reservas de hoteles

**Descripción:**  
Se requiere analizar la futura integración de un sistema externo de reservas de hoteles. Se debe revisar qué datos mínimos necesita el formulario, cómo se validarán las fechas y qué información se mostrará al usuario antes de confirmar una reserva.

## Ejemplo de comentario para pull request

> La funcionalidad de búsqueda de vuelos está clara y ordenada. Como mejora, sugiero validar que el número de pasajeros sea mayor que cero y mostrar un mensaje visible dentro de la página, para evitar depender de ventanas emergentes.

## Buenas prácticas aplicadas

- **Uso de ramas:** desarrollo en `feature/busqueda-vuelos` separado de `main`.
- **Commits descriptivos:** mensajes claros que indican el tipo de cambio (`feat`, `fix`, `docs`).
- **Revisión mediante pull request:** los cambios se revisan antes de integrarlos.
- **Uso de issues:** se documentan mejoras o tareas futuras (por ejemplo, reservas de hoteles).
- **Pruebas antes de integrar:** se verifica el formulario y la validación en el navegador antes de fusionar el pull request.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)

Sin frameworks, sin Bootstrap, sin APIs reales, sin base de datos y sin librerías externas.
