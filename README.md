# 📚 Sistema de Gestión de Biblioteca con JavaScript

**✍️ Autores:** Lucero Condori Rivera, Ariadna Germano, Rosana Machaca

---

## 📖 Introducción
Este trabajo práctico integrador tiene como objetivo evaluar los conocimientos en los fundamentos de JavaScript mediante la creación de un sistema de gestión de biblioteca. El proyecto integra diversas funcionalidades, aplicando buenas prácticas de código y siguiendo estándares de nomenclatura.

El sistema permite administrar libros 📚 y usuarios 👩‍💻, implementando conceptos clave del lenguaje JavaScript vistos durante el curso.

---

## ⚙️ Funcionalidades Principales

### 📂 Estructura de Datos

**📚 Libros:**
- Se gestiona un array de objetos `libros` que contiene al menos 10 libros. Cada libro incluye:
  - `id` (🔢 número)
  - `título` (🔤 texto)
  - `autor` (👨‍💼 texto)
  - `año` (📅 número)
  - `género` (🎭 texto)
  - `disponible` (✅ booleano)

**👤 Usuarios:**
- Un array de objetos `usuarios` con al menos 5 usuarios. Cada usuario incluye:
  - `id` (🔢 número)
  - `nombre` (🔤 texto)
  - `email` (📧 texto)
  - `librosPrestados` (📚 array de IDs de libros)

---

### 📝 Menú de Opciones
El sistema cuenta con un menú interactivo que ofrece las siguientes funcionalidades:

1. **➕ Agregar libro:** Agregar un nuevo libro al array `libros` con la función `agregarLibro(id, titulo, autor, anio, genero)`. Ya que la disponibilidad al crearse, se agrega como true en automático.
2. **🔍 Buscar libro:** Buscar libros por título, autor o género usando la función `buscarLibro(criterio, valor)`. Se solicita el criterio de búsqueda (título o autor(a)) y el valor a buscar. 
3. **📋 Ordenar libros:** Ordenar libros por título o año utilizando `ordenarLibros(criterio)` y el algoritmo de burbuja.
4. **🗑️ Borrar libro:** Eliminar un libro del array `libros` mediante `borrarLibro(id)`.
5. **👥 Registrar usuarios:** Registrar nuevos usuarios en el array `usuarios` con `registrarUsuario(nombre, email)`.
6. **📃 Lista de usuarios:** Mostrar todos los usuarios registrados mediante `mostrarTodosLosUsuarios()`.
7. **🧐 Buscar usuario:** Encontrar información de un usuario por email con `buscarUsuarioPorEmail()`.
8. **❌ Borrar usuario:** Eliminar un usuario seleccionado usando `borrarUsuario()`.
9. **📖 Prestar libro:** Prestar un libro a un usuario con `prestarLibro(idLibroPrestar, idUsuarioPrestar)`, marcándolo como no disponible.
10. **↩️ Devolver libro:** Marcar un libro como disponible y removerlo de los libros prestados mediante `devolverLibro(idLibroDevolver, idUsuarioDevolver)`.
11. **🛠️ Normalizar datos:** Utilizar `normalizarDatos(libros, usuarios)` para:
    - Convertir títulos de libros a mayúsculas.
    - Eliminar espacios innecesarios en nombres de autores.
    - Formatear emails a minúsculas.
12. **📊 Reporte de libros:** Generar un reporte con `generarReporteLibros()` para mostrar:
    - Cantidad total de libros.
    - Cantidad de libros prestados.
    - Cantidad de libros por género.
    - Libro más antiguo y más nuevo.
13. **🔎 Identificación avanzada de libros:** Mostrar libros con títulos que contienen más de una palabra usando `librosConPalabrasEnTitulo()`.
14. **📈 Cálculos estadísticos:** Realizar cálculos con `calcularEstadisticas()` para determinar:
    - Promedio de años de publicación.
    - Año de publicación más frecuente.
    - Diferencia en años entre el libro más antiguo y el más reciente.
15. **🚪 Salir:** Finalizar la ejecución del programa.

---

## 💻 Requisitos

- Node.js (para ejecutar el programa en consola).
- Editor de texto/código (Visual Studio Code).

---

## 🛠️ Instalación y Uso

1. 🌀 Clonar el repositorio:
   ```bash
   git clone https://github.com/LuceroCondoriRivera/BibliotecaADA.git
   ```
2. 🖊️ Abrir el archivo `trabajoPracticoIntegrador.js` en tu editor de código.
3. ▶️ Ejecutar el programa en la consola:
   ```bash
   node trabajoPracticoIntegrador.js
   ```
4. 🔧 Modificar y personalizar el código según sea necesario.

---

## 🧰 Tecnologías Utilizadas

- **Lenguaje:** JavaScript.
- **Entorno de prueba:** Node.js.

---

## 🤝 Contribuciones

Si deseas contribuir:
1. Haz un fork del repositorio.
2. Realiza tus cambios.
3. Envía un pull request.

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente, siempre mencionando a los autores originales.

---

## 📩 Contacto

Para consultas, contáctanos a través del mail: lucero.crivera@gmail.com
