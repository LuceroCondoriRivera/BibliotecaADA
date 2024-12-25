📚 Sistema de Gestión de Biblioteca con JavaScript

✍️ Autores: Lucero Condori Rivera, Ariadna Germano, Rosana Machaca

📖 Introducción

Este trabajo práctico integrador tiene como objetivo evaluar los conocimientos en los fundamentos de JavaScript mediante la creación de un sistema de gestión de biblioteca. El proyecto integra diversas funcionalidades, aplicando buenas prácticas de código y siguiendo estándares de nomenclatura.

El sistema permite administrar libros 📚 y usuarios 👩‍💻, implementando conceptos clave del lenguaje JavaScript vistos durante el curso.

⚙️ Funcionalidades Principales

📂 Estructura de Datos

📚 Libros:

Se gestiona un array de objetos libros que contiene al menos 10 libros. Cada libro incluye:

id (🔢 número)

título (🔤 texto)

autor (👨‍💼 texto)

año (📅 número)

género (🎭 texto)

disponible (✅ booleano)

👤 Usuarios:

Un array de objetos usuarios con al menos 5 usuarios. Cada usuario incluye:

id (🔢 número)

nombre (🔤 texto)

email (📧 texto)

librosPrestados (📚 array de IDs de libros)

📝 Menú de Opciones

El sistema cuenta con un menú interactivo que ofrece las siguientes funcionalidades:

➕ Agregar libro: Agregar un nuevo libro al array libros con la función agregarLibro(id, titulo, autor, anio, genero).

🔍 Buscar libro: Buscar libros por título, autor o género usando la función buscarLibro(criterio, valor).

📋 Ordenar libros: Ordenar libros por título o año utilizando ordenarLibros(criterio) y el algoritmo de burbuja.

🗑️ Borrar libro: Eliminar un libro del array libros mediante borrarLibro(id).

👥 Registrar usuarios: Registrar nuevos usuarios en el array usuarios con registrarUsuario(nombre, email).

📃 Lista de usuarios: Mostrar todos los usuarios registrados mediante mostrarTodosLosUsuarios().

🧐 Buscar usuario: Encontrar información de un usuario por email con buscarUsuario(email).

❌ Borrar usuario: Eliminar un usuario seleccionado usando borrarUsuario(nombre, email).

📖 Prestar libro: Prestar un libro a un usuario con prestarLibro(idLibro, idUsuario), marcándolo como no disponible.

↩️ Devolver libro: Marcar un libro como disponible y removerlo de los libros prestados mediante devolverLibro(idLibro, idUsuario).

🛠️ Normalizar datos: Utilizar normalizarDatos() para:

Convertir títulos de libros a mayúsculas.

Eliminar espacios innecesarios en nombres de autores.

Formatear emails a minúsculas.

📊 Reporte de libros: Generar un reporte con generarReporteLibros() para mostrar:

Cantidad total de libros.

Cantidad de libros prestados.

Cantidad de libros por género.

Libro más antiguo y más nuevo.

🔎 Identificación avanzada de libros: Mostrar libros con títulos que contienen más de una palabra usando librosConPalabrasEnTitulo().

📈 Cálculos estadísticos: Realizar cálculos con calcularEstadisticas() para determinar:

Promedio de años de publicación.

Año de publicación más frecuente.

Diferencia en años entre el libro más antiguo y el más reciente.

🚪 Salir: Finalizar la ejecución del programa.

💻 Requisitos

Node.js (para ejecutar el programa en consola).

Editor de texto/código (Visual Studio Code, Sublime Text, etc.).

Navegador moderno para pruebas en entorno web 🖥️.

🛠️ Instalación y Uso

🌀 Clonar el repositorio:

git clone <URL_del_repositorio>

🖊️ Abrir el archivo trabajoPracticoIntegrador.js en tu editor de código.

▶️ Ejecutar el programa en la consola:

node trabajoPracticoIntegrador.js

🔧 Modificar y personalizar el código según sea necesario.

🧰 Tecnologías Utilizadas

Lenguaje: JavaScript.

Entorno de prueba: Navegador 🌐 y Node.js.

🤝 Contribuciones

Si deseas contribuir:

Haz un fork del repositorio.

Realiza tus cambios.

Envía un pull request.

📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente, siempre mencionando a los autores originales.

📩 Contacto

Para consultas, contáctanos a través de los emails registrados en el sistema.
