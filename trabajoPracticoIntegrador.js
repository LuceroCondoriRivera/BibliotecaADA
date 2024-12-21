
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

let usuariosCreados = [
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


//2 new usser (A)
let todosUsuarios = usuariosCreados;//concatenar nuevos usuarios yusuarios creados
let listadoUsuarios = [];

let registrar = function () {
    let nombre = prompt("ingresa tu nombre: ");
    let email = prompt("ingresa tu email: ");

    let nuevoUsuario = {
        nombre: nombre,
        email: email
    }
    listadoUsuarios.push(nuevoUsuario);
    todosUsuarios.push(nuevoUsuario);
    console.log(`usuario registrado con exito. ${nuevoUsuario.nombre}`);
}
//mostrar todos los usuarios (B)

registrar();
registrar();
registrar();
registrar();
registrar();


console.log("lista de usuarios: ");
todosUsuarios.forEach(function (usuario) {
    console.log(`- ${usuario.nombre}`)
})

//buscar usuario (C)

let buscarUsuarioPorEmail = function (email) {
    let usuarioEncontrado = todosUsuarios.find(usuario => usuario.email.toLowerCase() === email.toLowerCase());
    if (usuarioEncontrado) {
        console.log(`usuario encontrado ${usuarioEncontrado.nombre}, ${usuarioEncontrado.email}`);

        //eliminar usuario (D)
        let opcion = prompt("quieres eliminar el usuario? si/ no: ");
        if (opcion.toLowerCase() === 'si') {
            let indice = todosUsuarios.indexOf(usuarioEncontrado);
            todosUsuarios.splice(indice, 1);
            console.log(`el usuario ${usuarioEncontrado} fue eliminado con exito.`)
        }
    } else {
        console.log("usuario no encontrado.");
    }
}
let buscarUsuario = true;
while (buscarUsuario) {
    let emailBuscado = prompt("ingresa el email que buscas o escribe 'salir' para cancelar y 'lista' para ver la lista de usuarios: ");
    if (emailBuscado.toLowerCase() === 'salir') {
        buscarUsuario = false;
        console.log("busqueda finalizada.");
    } else if (emailBuscado.toLowerCase() === 'lista') {
        console.log("lista de uduarios: ");
        todosUsuarios.forEach(function (usuario) {
            console.log(`${usuario.nombre}, ${usuario.email}`);
        })
    }
    else {
        buscarUsuarioPorEmail(emailBuscado);
    }
}
