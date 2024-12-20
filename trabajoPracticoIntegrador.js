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
      titulo: "El Señor de los Anillos",
      autor: "J.R.R. Tolkien",
      año: 1954,
      disponible: true
    },
    {
      id: 2,
      titulo: "El Hobbit",
      autor: "J.R.R. Tolkien",
      año: 1937,
      disponible: false
    },
    {
      id: 3,
      titulo: "La Sombra del Viento",
      autor: "Carlos Ruiz Zafón",
      año: 2001,
      disponible: true
    },
    {
      id: 4,
      titulo: "El Código Da Vinci",
      autor: "Dan Brown",
      año: 2003,
      disponible: false
    },
    {
        id: 5,
        titulo: "La Casa de los Espíritus",
        autor: "Isabel Allende",
        año: 1982,
        disponible: true
      },
      {
        id: 6,
        titulo: "El Poder del Ahora",
        autor: "Eckhart Tolle",
        año: 1997,
        disponible: false
      },
      {
        id: 7,
        titulo: "La Historia de un Amor",
        autor: "Gabriel García Márquez",
        año: 1967,
        disponible: true
      },
      {
        id: 8,
        titulo: "El Aleph",
        autor: "Jorge Luis Borges",
        año: 1949,
        disponible: false
      },
      {
        id: 9,
        titulo: "La Ciudad y los Perros",
        autor: "Mario Vargas Llosa",
        año: 1963,
        disponible: true
    },
    {
      id: 10,
      titulo: "El Amor en los Tiempos del Cólera",
      autor: "Gabriel García Márquez",
      año: 1985,
      disponible: false
    }
  ];
  
  // Crear el objeto usuarios
  let usuarios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
      librosPrestados: []
    },
    {
      id: 2,
      nombre: "María Rodríguez",
      email: "maria.rodriguez@example.com",
      librosPrestados: []
    },
    {
      id: 3,
      nombre: "Pedro García",
      email: "pedro.garcia@example.com",
      librosPrestados: []
    },
    {
        id: 4,
        nombre: "Ana López",
        email: "ana.lopez@example.com",
        librosPrestados: []
      },
      {
        id: 5,
        nombre: "Carlos Martínez",
        email: "carlos.martinez@example.com",
        librosPrestados: []
      }
    ];
    
            