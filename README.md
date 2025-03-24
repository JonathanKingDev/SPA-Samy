# 🖼️ Samy - Prueba Frontend

---

## 🛠️ Tecnologías utilizadas

- **Next.js 15**
- **TypeScript**
- **Sass (SCSS modules)**
- **Vitest** – Para los tests
- **graphql-request** – Para interactuar con la API GraphQL de forma sencilla.
- **React Icons** e **Infinite Scroll Component**

---

## 📁 Estructura del proyecto

### Arquitectura basada en Pods

He optado por una arquitectura de Pods para organizar el código. ¿Qué significa esto? Que cada funcionalidad (o feature) vive en su propia carpeta y se autogestiona. Un Pod contiene solo lo necesario para esa parte del proyecto, evitando acoplamientos innecesarios y mejorando la escalabilidad.

Cada Pod puede tener su propio:
- Componente principal (.component.tsx)
- Contenedor (.container.tsx)
- ViewModel (.vm.ts)
- Hooks personalizados (hook/useX.ts)
- Carpeta donde se definen las llamadas a la base de datos (Api/Graphql)
- Estilos (.module.scss)
- Tests (.test.tsx)

Esto permite trabajar cada parte del proyecto como si fuera un mini-módulo autosuficiente.

---

## 🔄 Control de versiones por fases

He dividido el desarrollo en fases, cada una con su rama correspondiente.

Las fases fueron:

1. **setup-next**
2. **api-connection**
3. **display-images**
4. **search-filter**
5. **testing**
6. **readme**

---

## 🧩 ¿Cómo está dividido este proyecto?

**/pods/images/**

Este es el Pod principal, y contiene todo lo relacionado con la galería de imágenes:
- images.component.tsx: renderizado principal con scroll infinito.
- images.container.tsx: maneja la lógica de búsqueda y llamadas a la API mediante el custom hook.
- card.component.tsx: tarjeta visual de cada imagen.
- card-actions.component.tsx: botones de like y enviar.
- images.vm.ts: ViewModel para tipar las imágenes y mantener datos adaptados.
- images.module.scss: estilos de la galería y tarjetas.
- images-container.test.tsx: tests de renderizado condicional (<Images /> y <NotFound />).

**/pods/search-bar/**

Contiene la barra de búsqueda:
- search-bar.component.tsx: input de búsqueda con debounce.
- search-bar.module.scss: estilos específicos.

**/common/**

Componentes reutilizables y compartidos:
- not-found/not-found.component.tsx: mostrado si no hay imágenes que coincidan con la búsqueda.
- loading/loading.component.tsx: spinner con animación SVG y estilos propios.

**/core/**

Componentes core para toda la aplicacion:
- ui/header: componente del header incluido en el layout /image.
- graphql-client.ts: cliente de la base de datos.

**/app/**
- page.tsx: punto de entrada de la galería.
- layout.tsx: layout global de Next.js con fuente, metadatos, etc.
- globals.scss: variables y estilos globales

---

## 🧪 Pruebas

Los tests están hechos con **Vitest**. Para ejecutarlos:

```bash
npm run test
```
