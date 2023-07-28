# Introducción a Next 13

El nuevo sistema de rutas introducido en Next 13 es compatible con el sistema de rutas anterior, sin embargo se recomienda utilizar el nuevo si estas comenzando una app desde cero.

## Temas puntuales de la sección

- React Server Components
- Client Components
- TurboPack
- Metadata
- Metatags
- Layouts y Layouts anidados
- Poco de Tailwind
- Next Link
- usePathName Hook
- Nuevo sistema de rutas de Next

## ¿Se lo suficiente de React?

Next es un meta framework de React, por lo tanto es crucial conocer las bases y haber hecho un par de proyectos previamente.

## ¿Por qué Next?

El propósito principal de Next es hacer las apps de react SEO friendly, además Next incluye una serie de herramientas pre configuradas para ser usadas desde el primer momento.

## ¿Qué introduce de nuevo Next 13?

- App Layout (App Router)
  - Layouts
  - React Server Components
  - Streaming (what? 😲)
- Turbopack
- Next/Image
- Next/Font
- Next Link

## ¿Cómo crear un app de Next?

```shell
pnpm create next-app <<app-name>>
```

## Estructura de directorios

Una app de Next puede contener una gran cantidad de archivos y directorios y va a depender de las tecnologías que agregues a tu proyecto.

Los partes más importantes para Next son:

- /app - Aquí va la app de Next, su estructura esta ligada con el sistema de rutas de la app.
- /public - Este es el lugar adecuado para almacenar archivos estáticos.
- next.config.js - Es el archivo de configuración de Next salvo contadas ocasiones vas a tener que requerir a el.

## ¿Como habilitar Turbopack?

En el package.json modifica el comando dev agregando la bandera `--turbo` y reinicia el servidor de desarrollo.

Pero cuidado!, Turbopack por ahora esta en fase beta por lo que no se aconseja usarlo en producción.

```json
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

## ¿Como crear una ruta en la app?

Crea un directorio dentro de `/app` con el nombre de la ruta que quieres añadir y dentro agrega un archivo llamado `page.tsx` (o jsx).

Ten en cuenta que `page` como `layout`, `error`, `loading` entre otros nombres de archivos están reservados para Next para hacer una tarea en particular.

Ejemplo, la ruta en el file system:

```plain text
/app/about/page.tsx
```

da como resultado la ruta de la app:

```plain text
http://localhost:3000/about
```

Y el markup que se va a renderizar cuando accedamos a dicha ruta es el que proviene del componente exportado por defecto en el `page.tsx`.

> 💡 Ten en cuenta que por defecto, el app router utiliza componentes de servidor lo que permite reducir la cantidad de JavaScript que se envía al cliente. Pero puedes elegir también cuales renderizar en el lado del cliente usando la directiva `'use client'`.

## ¿Cómo agregar metatags?

Los metatags son importantes para lograr que los crawlers de los buscadores entiendan el contenido de un sitio o app web.

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página de Precios',
  description: 'Descripción de la página de precios',
  keywords: ['Pricing Page', 'Jesus Velasco'],
}
```

Si los metatags se agregan en el layout principal de la app todas las páginas de esta van a heredar estos mismos tags pero se pueden sobrescribir de manera individual en cada página agregando este mismo código.

## Layouts, Sub Layouts y ¿Como agregarlos?

Un layout es una interfaz de usuario compartida entre varias páginas, por defecto cada proyecto contiene un **Main Layout** en la raíz de la app y se aplica a todas las rutas que esta tenga. Este layout permite modificar el HTML inicial devuelto por el servidor.

Una app también puede tener layouts anidados, para ello basta con agregar un directorio que envuelva todas las rutas que queremos que compartan este layout y en la raíz agregar el archivo de layout.

Dentro de `/app/user-links/layout.tsx` agrega el siguiente código:

```tsx
export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <p>Sub Layout</p>
      {children}
    </section>
  )
}
```

Para evitar modificar la ruta inicial de las páginas que comparten el sub layout envuelve el titulo del directorio entre paréntesis.

Así por ejemplo `/contact` no tiene que tener `/user-links/`.

> 💡 Los nested layouts o layouts anidados que van dentro de una carpeta con un nombre anónimo parecen no funcionar con Turbopack en la versión 13.4.10 de Next, por lo que se recomienda desactivarlo.

## Next Link

El Componente de `<Link>` de next funciona al igual que el elemento `<a>` con la diferencia de que al hacer cambio de página no hace un refresh dando la sensación de que es un SPA. Además `<Link>`.

Link por defecto hace un prefetch en segundo plano de los demás enlaces de la página para dar el efecto de una mayor rapidez.

```tsx
import Link from 'next/link'
;<Link href="/">Home</Link>
```

## Cosas a tener en cuenta de los Server Components

- Por defecto todos los componentes son Server Components a menos de que se especifique lo contrario.
- El renderizado estático es la opción por defecto en Next, esto mejora el performance y reduce enormemente la cantidad de contenido enviado al cliente.
- useEffect entre otros hooks que disparan acciones del lado del cliente, no se pueden usar en server components. Si es necesario, especificar `"use client"` en el inicio del archivo del componente.
- Llamadas a Fetch, realizarán un caché de forma forzada por defecto a menos que se especifique lo contrario. Fetch en Next, tiene propiedades para revalidar, mantener en caché y nunca mantenerlo en caché.
- Si vas a utilizar Client Components asegúrate de que sean en las hojas de del árbol de componentes ya que a partir de donde especifiques como `'use client'`todos sus componentes hijos se volverán también componentes cliente.

## Hook usePathname()

Se trata de un hook para componentes del lado del cliente que retorna la ruta del URL actual.

```tsx
import { usePathname } from 'next/navigation'

export function App() {
  const currentPath = usePathname()
  return <p>{currentPath}</p>
}
```
