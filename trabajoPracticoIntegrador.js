//node trabajoPracticoIntegrador.js

const prompt = require("prompt-sync")({ sigint: true });

//-1- usuarios creados
//1. Estructura de Datos
//a) Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
//✓ id (número)
//✓ título (string),
//✓ autor (string),
//✓ año (número),
//✓ género (string),
//✓ disponible (booleano).
//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
//Cada usuario debe tener:
//✓ id (número)
//✓ nombre (string)
//✓ email (string)
//✓ librosPrestados (array de ids de libros).
let libros = [
  {
    id: 1,
    titulo: "El Senior de los Anillos",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    anio: 1954,
    disponible: true,
  },
  {
    id: 2,
    titulo: "El Hobbit",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    anio: 1937,
    disponible: true,
  },
  {
    id: 3,
    titulo: "La Sombra del Viento",
    autor: "Carlos Ruiz Zafón",
    genero: "Misterio",
    anio: 2001,
    disponible: true,
  },
  {
    id: 4,
    titulo: "El Código Da Vinci",
    autor: "Dan Brown",
    genero: "Misterio",
    anio: 2003,
    disponible: true,
  },
  {
    id: 5,
    titulo: "La Casa de los Espíritus",
    autor: "Isabel Allende",
    genero: "Ficcion",
    anio: 1982,
    disponible: true,
  },
  {
    id: 6,
    titulo: "El Poder del Ahora",
    autor: "Eckhart Tolle",
    genero: "Autoayuda",
    anio: 1997,
    disponible: true,
  },
  {
    id: 7,
    titulo: "La Historia de un Amor",
    autor: "Gabriel García Márquez",
    genero: "Novela",
    anio: 1967,
    disponible: true,
  },
  {
    id: 8,
    titulo: "El Aleph",
    autor: "Jorge Luis Borges",
    genero: "Ficcion",
    anio: 1949,
    disponible: true,
  },
  {
    id: 9,
    titulo: "La Ciudad y los Perros",
    autor: "Mario Vargas Llosa",
    genero: "Ficcion",
    anio: 1963,
    disponible: true,
  },
  {
    id: 10,
    titulo: "El Amor en los Tiempos del Cólera",
    autor: "Gabriel García Márquez",
    genero: "Ficcion",
    anio: 1985,
    disponible: true,
  },
];

let usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    librosPrestados: [],
  },
  {
    id: 2,
    nombre: "María Rodríguez",
    email: "maria.rodriguez@example.com",
    librosPrestados: [],
  },
  {
    id: 3,
    nombre: "Pedro García",
    email: "pedro.garcia@example.com",
    librosPrestados: [],
  },
  {
    id: 4,
    nombre: "Ana López",
    email: "ana.lopez@example.com",
    librosPrestados: [],
  },
  {
    id: 5,
    nombre: "Carlos Martínez",
    email: "carlos.martinez@example.com",
    librosPrestados: [],
  },
];

// Punto 2: Funciones de Gestión de Libros
// Importamos la librería prompt-sync para permitir la entrada de datos por consola.
//const promptLibro = require("prompt-sync")();

//a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros

// Función para agregar una nuevo libro al array 'libros'.
function agregarLibro(id, titulo, autor, genero, anio, disponible) {
  // Agregamos un nuevo objeto libro al array 'libros' con las propiedades proporcionadas.
  libros.push({ id, titulo, autor, genero, anio, disponible: true }); // true: indica que el libro recién agregada está disponible para ser prestado

  // Imprimimos un mensaje de confirmación en la consola.
  console.log(`Libro "${titulo}" agregada con éxito.`);
}

//b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título,
// autor o género utilizando el algoritmo de búsqueda lineal

function buscarLibro(criterio, valor) {
  // Usamos el método filter para crear un nuevo array con los libros que cumplen con el criterio de búsqueda.
  // libro[criterio] se refiere al valor de la propiedad que se pasa como criterio (título o autor).
  // toLowerCase() convierte el texto a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas.
  // includes() verifica si el valor buscado está contenido en la propiedad del libro.
  return libros.filter(
    (libro) =>
      // Verificamos si el libro tiene la propiedad buscada y si esa propiedad incluye el valor buscado.
      libro[criterio] &&
      libro[criterio].toLowerCase().includes(valor.toLowerCase())
  );
}

//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año
// utilizando el algoritmo de ordenamiento burbuja (bubble sort)
// y luego  muestre los libros ordenados en la consola.

function ordenarLibros(criterio) {
  const criteriosValidos = ["titulo", "anio"];
  // includes() verifica si el valor buscado está contenido en los criterios de ordenamiento de libros.
  if (!criteriosValidos.includes(criterio)) {
    console.error('Criterio inválido. Por favor, ingrese "título" o "anio".');
    return;
  }

  let librosOrdenados = [...libros]; // Crear una copia del array de libros
  // Se itera sobre el array de libros desde el primer elemento hasta el penúltimo elemento.
  const longitud = librosOrdenados.length;
  //En cada iteración, se compara el elemento actual con el elemento siguiente.
  //Si el elemento actual es mayor que el elemento siguiente (según el criterio de ordenamiento),
  // se intercambian los dos elementos.
  // Se repite el proceso hasta que no se produzcan más intercambios,
  // lo que indica que el array está ordenado.

  for (let i = 0; i < longitud - 1; i++) {
    for (let j = 0; j < longitud - i - 1; j++) {
      if (criterio === "titulo") {
        if (librosOrdenados[j].titulo > librosOrdenados[j + 1].titulo) {
          // Intercambiar los libros
          [librosOrdenados[j], librosOrdenados[j + 1]] = [
            librosOrdenados[j + 1],
            librosOrdenados[j],
          ];
        }
      } else if (criterio === "anio") {
        if (librosOrdenados[j].anio > librosOrdenados[j + 1].anio) {
          // Intercambiar los libros
          [librosOrdenados[j], librosOrdenados[j + 1]] = [
            librosOrdenados[j + 1],
            librosOrdenados[j],
          ];
        }
      }
    }
  }

  console.log("Libros ordenados por", criterio, ":");
  console.log(librosOrdenados);
}

//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(idBorrarLibro) {
  //Se hace un contro de datos
  if (idBorrarLibro !== -1) {
    //El método splice() cambia el contenido de un array eliminando elementos existentes, para este caso.
    libros.splice(idBorrarLibro - 1, 1);
    console.log(`Libro con ID ${idBorrarLibro} eliminado con éxito.`);
  } else {
    console.log(`No se encontró libro con ID ${idBorrarLibro}.`);
  }
}

//Punto 3: Gestión de Usuarios

let todosUsuarios = usuarios; //concatenar nuevos usuarios yusuarios creados
let listadoUsuarios = [];

//a) Implementar una función registrarUsuario(nombre, email) que agregue un
// nuevo usuario al array usuarios.
let registrarUsuario = function (nombre, email) {
  let nuevoUsuario = {
    nombre: nombre,
    email: email,
  };
  listadoUsuarios.push(nuevoUsuario);
  todosUsuarios.push(nuevoUsuario);
  console.log(`usuario registrado con exito. ${nuevoUsuario.nombre}`);
};

//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
function mostrarTodosLosUsuarios(listadoUsuarios) {
  let verLista = prompt("deseas ver la lista de usuarios? si / no: ");
  if (verLista.toLowerCase() === "si") {
    console.log(`lista de usuarios: `);
    todosUsuarios.forEach((usuario) => {
      console.log(`${usuario.nombre}, ${usuario.email}`);
    });
  }
}

//c) Crear una función buscarUsuario(email) que devuelva la información de un
// usuario dado su email
//buscar el usuario por su email
function buscarUsuarioPorEmail() {
  let emailBuscado = prompt("ingresa el email del usuario que buscas: ");
  let usuarioEncontrado = todosUsuarios.find(usuario => usuario.email.toLocaleLowerCase() === emailBuscado.toLocaleLowerCase());
  if (usuarioEncontrado) {
    console.log(`el usuario ${usuarioEncontrado.nombre},${usuarioEncontrado.email} fue encontrado con exito.`);
  } else {
    console.log("usuario no encontrado.");
  }
}

// d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
//eliminar usuario (D)
function borrarUsuario() {
  let emailBuscado = prompt("ingresa el email del usuario que deseas eliminar: ");
  let usuarioEncontrado = todosUsuarios.find(usuario => usuario.email.toLowerCase() === emailBuscado.toLocaleLowerCase());
  if (usuarioEncontrado) {
      let indice = todosUsuarios.indexOf(usuarioEncontrado);
      todosUsuarios.splice(indice, 1);
      console.log(`el usuario ${usuarioEncontrado.nombre} fue eliminado con exito.`);
  } else {
      console.log(`el usuario no fue encontrado.`)
  }
}


//Punto 4: Sistema de Préstamos

//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro
// como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario) {
  // Usamos el método find para encontrar el libro con el id usuario.
  const libro = libros.find((l) => l.id === idLibro);
  // Usamos el método find para encontrar el usuario con el id proporcionado.
  const usuario = usuarios.find((u) => u.id === idUsuario);

  // Verificamos si el libro y el usuario existen y si el libro está disponible.
  if (libro && usuario && libro.disponible) {
    // Marcamos el libro como no disponible.
    libro.disponible = false;
    // Agregamos el id del libro a la lista de libros prestados del usuario.
    usuario.librosPrestados.push(idLibro);
    // Imprimimos un mensaje de confirmación en la consola.
    console.log(`Libro "${libro.titulo}" prestado por ${usuario.nombre}.`);
    return true; // Devolvemos true para indicar que el préstamo fue exitosa.
  }
  // Si el préstamo no fue posible, imprimimos un mensaje de error en la consola.
  console.log("No se pudo realizar el préstamo.");
  return false; // Devolvemos false para indicar que el préstamo falló.
}

//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro
// como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
  // Usamos el método find para encontrar el libro con el id usuario.
  const libro = libros.find((l) => l.id === idLibro);
  // Usamos el método find para encontrar el usuario con el id proporcionado.
  const usuario = usuarios.find((u) => u.id === idUsuario);

  // Verificamos si el libro y el usuario existen y si el libro no está disponible.
  if (libro && usuario && !libro.disponible) {
    // Marcamos el libro como disponible.
    libro.disponible = true;
    // Eliminamos el id del libro de la lista de libros Prestsdos del usuario.
    usuario.librosPrestados = usuario.librosPrestados.filter(
      (id) => id !== idLibro
    );
    // Imprimimos un mensaje de confirmación en la consola.
    console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}.`);
    return true; // Devolvemos true para indicar que la devolución fue exitosa.
  }
  // Si la devolución no fue posible, imprimimos un mensaje de error en la consola.
  console.log("No se pudo realizar la devolución.");
  return false; // Devolvemos false para indicar que la devolución falló.
}

//Punto 5: Sistema de Préstamos
//a)Crear una función generarReporteLibros() que utilice métodos avanzados de arrays
// (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:

function generarReporteLibros() {
  // Cantidad total de libros
  //usamos el método reduce() para iterar sobre el array de libros y acumular la cantidad total de libros.
  //El acumulador se inicializa con el valor 0, y en cada iteración se suma 1 al acumulador.
  //Al final de la iteración, el acumulador contiene la cantidad total de libros.
  const cantidadTotalLibros = libros.reduce(
    (acumulador, libros) => acumulador + 1,
    0
  );
  //Muestra por consola la cantidad total de libros.
  console.log(`Cantidad total de libros: ${cantidadTotalLibros}`);

  // Cantidad de libros prestados
  //Se utiliza el método filter() para crear un nuevo array que contiene solo los libros que no estan disponibles (es decir, los libros prestados).
  const librosPrestados = libros.filter((libro) => !libro.disponible);
  //Se utiliza la propiedad length del array de libros prestados para obtener la cantidad de libros prestados.
  const cantidadLibrosPrestados = librosPrestados.length;
  //Se muestra por consola el mensaje de libros prestados.
  console.log(`Cantidad de libros prestados: ${cantidadLibrosPrestados}`);

  // Cantidad de libros por género
  // Primero se crea un objeto generos para almacenar la cantidad de libros por género.
  const generos = {};
  // Se utiliza el método forEach() para iterar sobre el array de libros y actualizar el objeto generos.
  // Por cada libro, se verifica si el género ya existe en el objeto generos. Si existe, se incrementa la cantidad de libros para ese género. Si no existe, se crea una nueva propiedad en el objeto generos con la cantidad de libros igual a 1.
  libros.forEach((libro) => {
    if (generos[libro.genero]) {
      generos[libro.genero]++;
    } else {
      generos[libro.genero] = 1;
    }
  });
  // Al final de la iteración, el objeto generos contendrá la cantidad de libros por género.
  console.log("Cantidad de libros por género:");
  for (const genero in generos) {
    console.log(`${genero}: ${generos[genero]}`);
  }
  // Libro más antiguo y más nuevo
  // Utilizamos el método reduce() para iterar sobre el array de libros y encontrar el libro más antiguo y el libro más nuevo.
  //Para encontrar el libro más antiguo, comparamos el año de publicación de cada libro con el año de publicación del libro más antiguo encontrado hasta el momento. Si el año de publicación del libro actual es menor que el año de publicación del libro más antiguo, se actualizará el libro más antiguo.
  let libroMasAntiguo = libros.reduce(
    (antiguo, actual) => (actual.anio < antiguo.anio ? actual : antiguo),
    libros[0]
  );
  //Para encontrar el libro más nuevo, comparamos el año de publicación de cada libro con el año de publicación del libro más nuevo encontrado hasta el momento. Si el año de publicación del libro actual es mayor que el año de publicación del libro más nuevo, se actualizará el libro más nuevo.
  let libroMasNuevo = libros.reduce(
    (nuevo, actual) => (actual.anio > nuevo.anio ? actual : nuevo),
    libros[0]
  );
  //Al final de la iteración, se muestra el libro más antiguo y el libro más nuevo.
  console.log(
    `Libro más antiguo: ${libroMasAntiguo.titulo} (${libroMasAntiguo.anio})`
  );
  console.log(
    `Libro más nuevo: ${libroMasNuevo.titulo} (${libroMasNuevo.anio})`
  );
}

// Punto 6: Identificación Avanzada de libros
//  a) Implementar una función librosConPalabrasEnTitulo() que identifique y
//  muestre todos los libros cuyo título contiene más de una palabra (no títulos
//  que contengan números ni otros caracteres). La función debe devolver un
//  array con los títulos de esos libros y mostrarlo en la consola

//muestra solo los titulos con mas de un string y devuelve un array con esos titulos
let librosConPalabrasEnTitulo = libros
  .filter(
    (libro) =>
      /^[a-zA-Z\s]+$/.test(libro.titulo) && libro.titulo.split(" ").length > 1
  )
  .map((libro) => libro.titulo);

//Punto 7: Cálculos Estadísticos
//  a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para
//  calcular y mostrar:
//   ✓ Promedio de años de publicación de los libros.
//   ✓ Año de publicación más frecuente.
//   ✓ Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas() {
  // Obtener los años de publicación de los libros
  //. Se utiliza el método map() para crear un nuevo array anios Publicacion que contiene solo los años de publicación de los libros.
  const aniosPublicacion = libros.map((libro) => libro.anio);
  // Calcular el promedio de años de publicación
  //Se utiliza el método reduce() para calcular la suma de los años de publicación.
  const sumaAnios = aniosPublicacion.reduce((suma, anio) => suma + anio, 0);
  //Se divide la suma por la longitud del array años Publicacion para obtener el promedio.
  const promedioAnios = sumaAnios / aniosPublicacion.length;
  //Se utiliza el método toFixed(2) para redondear el promedio a dos decimales.
  console.log(`Promedio de años de publicación: ${promedioAnios.toFixed(2)}`);
  // Calcular el año de publicación más frecuente
  //Creamos un objeto aniosFrecuentes para almacenar la frecuencia de cada año de publicación.
  const frecuenciaAnios = {};
  //Se utiliza el método forEach() para iterar sobre el array aniosPublicacion y actualizar el objeto aniosFrecuentes.
  aniosPublicacion.forEach((anio) => {
    if (frecuenciaAnios[anio]) {
      frecuenciaAnios[anio]++;
    } else {
      frecuenciaAnios[anio] = 1;
    }
  });
  //Utilizamos el método reduce() para encontrar el año de publicación más frecuente.
  const anioMasFrecuente = Object.keys(frecuenciaAnios).reduce((a, b) =>
    frecuenciaAnios[a] > frecuenciaAnios[b] ? a : b
  );
  //Se muestra por consola el año más frecuente.
  console.log(`Año de publicación más frecuente: ${anioMasFrecuente}`);
  // Calcular la diferencia en años entre el libro más antiguo y el más nuevo:
  const anioMasAntiguo = Math.min(...aniosPublicacion);
  const anioMasNuevo = Math.max(...aniosPublicacion);
  //Restamos el año de publicación del libro más antiguo del año de publicación del libro más nuevo para obtener la diferencia en años.
  const diferenciaAnios = anioMasNuevo - anioMasAntiguo;
  //Se muestra la cantidad de diferencia de años entre el más antiguo con el más nuevo.
  console.log(
    `Diferencia en años entre el libro más antiguo y el más nuevo: ${diferenciaAnios}`
  );
}

// Punto 8: Manejo de Cadenas
//  a) Crear una función normalizarDatos() que utilice métodos de strings para:
//  ✓ Convertir todos los títulos a mayúsculas.
//  ✓ Eliminar espacios en blanco al inicio y final de los nombres de autores.
//  ✓ Formatear los emails de los usuarios a minúsculas

//convertir titulos a mayuscula, eliminar espacios en el nombre del autor y pasar a minuscula el email del usuario
function normalizarDatos(libros, usuarios) {
  const resultado = [];
  for (let i = 0; i < Math.min(libros.length, usuarios.length); i++) {
    resultado.push({
      titulo: libros[i].titulo.toUpperCase(),
      autor: libros[i].autor.trim(),
      email: usuarios[i].email.toLowerCase(),
    });
  }
  return resultado;
}

//9: Interfaz de Usuario por Consola

// Función para mostrar el menú principal y manejar la interacción con el usuario.
function menuPrincipal() {
  while (true) {
    // Imprimimos el menú de opciones en la consola.
    console.log("\nBienvenido a nuestra Biblioteca ADA!");
    console.log("\nMenú Principal:");
    console.log("1. Agregar libro");
    console.log("2. Buscar libro");
    console.log("3. Ordenar libros por: 'título' o 'anio'");
    console.log("4. Borrar libro");
    console.log("5. Registrar usuarios");
    console.log("6. Lista de usuarios");
    console.log("7. Buscar Usuario");
    console.log("8. Borrar Usuario");
    console.log("9. Prestar libro");
    console.log("10. Devolver libro");
    console.log("11. Normalizar datos");
    console.log("12. Reporte de Libros");
    console.log("13. Identificación avanzada de libros");
    console.log("14. Cálculos estadísticos");
    console.log("15. Salir");

    // Solicitamos al usuario que seleccione una opción del menú.
    const opcion = parseInt(prompt("\nSelecciona una opción: "));

    // Elegimos la estructura switch para manejar la opción seleccionada por el usuario.
    switch (opcion) {
      case 1:
        // Solicitamos los datos del nuevo libro.
        const idLibro = parseInt(prompt("ID de libro: "));
        const tituloLibro = prompt("Título del libro: ");
        const autorLibro = prompt("Autor(a) del libro: ");
        const generoLibro = prompt("Género del libro: ");
        const anioLibro = parseInt(prompt("Año de publicación del libro: "));
        // Llamamos a la función agregarLibro con los datos proporcionados.
        agregarLibro(idLibro, tituloLibro, autorLibro, generoLibro, anioLibro);
        break;

      case 2:
        // Solicitamos el criterio de búsqueda (título o autor(a)) y el valor a buscar.
        const criterio = prompt(
          "Buscar libro por 'título' o 'autor' (colocar una de estas palabras): "
        );
        const valor = prompt(
          "Introducir el críterio, ya sea título o autor(a) del libro: "
        );
        // Llamamos a la función buscarLibro con los datos proporcionados y mostramos los resultados.
        console.log("Resultados de búsqueda:", buscarLibro(criterio, valor));
        break;

      case 3:
        // Llamar a la función y solicitamos datos
        const criteriOrdenarLibro = prompt(
          "Introducir el criterio ya sea, 'título' o 'anio' para odenar los libros: "
        );
        ordenarLibros(criteriOrdenarLibro);
        break;

      case 4:
        // Solicitamos el criterio de búsqueda (id del libro) para borrar.
        let idBorrarLibro = parseInt(prompt("ID de libro para eliminar: "));
        // Llamar a la función
        borrarLibro(idBorrarLibro);
        break;

      case 5:
        // Solicitamos los datos del nuevo usuario.
        let nombre = prompt("ingresa tu nombre: ");
        let email = prompt("ingresa tu email: ");

        // Llamar a la función para registrar usuarios
        registrarUsuario(nombre, email);
        break;

      case 6:
        let todosUsuarios = usuarios; //concatenar nuevos usuarios yusuarios creados
        let listadoUsuarios = [];
        // Llamar a la función
        mostrarTodosLosUsuarios();
        break;

      case 7:
        buscarUsuarioPorEmail();
        break;

      case 8:
        borrarUsuario();
        break;

      case 9:
        // Solicitamos los ids del libro a prestar y del usuario.
        let idLibroPrestar = parseInt(prompt("ID del libro a prestar: "));
        let idUsuarioPrestar = parseInt(prompt("ID del usuario: "));
        // Llamamos a la función prestarLibro con los datos proporcionados.
        prestarLibro(idLibroPrestar, idUsuarioPrestar);
        break;

      case 10:
        // Solicitamos los ids del libro a devolver y del usuario.
        let idLibroDevolver = parseInt(prompt("ID del libro a devolver: "));
        let idUsuarioDevolver = parseInt(prompt("ID del usuario: "));
        // Llamamos a la función devolverLibro con los datos proporcionados.
        devolverLibro(idLibroDevolver, idUsuarioDevolver);
        break;

      case 11:
        // Solicitamos los datos para normalizar los datos.
        let resultado = normalizarDatos(libros, usuarios);
        console.log(resultado);
        break;

      case 12:
        // Llamar a la función
        generarReporteLibros();
        break;

      case 13:
        // Llamar a la función para Identificación avanzada de libros
        console.log(librosConPalabrasEnTitulo);
        break;

      case 14:
        // Llamar a la función
        calcularEstadisticas();
        break;

      case 15:
        // Si el usuario selecciona la opción 7, salimos del bucle y terminamos el programa.
        console.log("Saliendo del sistema... Gracias por su visita!");
        return;
      default:
        // Si el usuario selecciona una opción no válida, mostramos un mensaje de error.
        console.log("Opción no válida.");
    }
  }
}

// Llamamos a la función menuPrincipal para iniciar el programa.
menuPrincipal();
