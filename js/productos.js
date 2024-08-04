

// Agregar un stok predeterminado

  const productos = [
    {
      id: 1,
      nombre: "Doble Egg",
      precio: 380,
      imagen: "../img/b-Beiconeta.jpg",
      descripcion: "Hamburguesa con doble huevo"
    },
    {
      id: 2,
      nombre: "Doble Cheddar",
      precio: 420,
      imagen: "../img/b-BigM.jpg",
      descripcion: "Hamburguesa con doble queso Cheddar"
    },
    {
      id: 3,
      nombre: "Doble Queso",
      precio: 390,
      imagen: "../img/b-Cabrona.jpg",
      descripcion: "Hamburguesa con doble queso"
    },
    {
      id: 4,
      nombre: "Big King",
      precio: 420,
      imagen: "../img/b-Dios.jpg",
      descripcion: "Hamburguesa estilo Big King"
    },
    {
      id: 5,
      nombre: "Wopper 1.0",
      precio: 390,
      imagen: "../img/b-Emmily.jpg",
      descripcion: "Hamburguesa Wopper 1.0"
    },
    {
      id: 6,
      nombre: "Hamburguesa Queso",
      precio: 390,
      imagen: "../img/b-Epicarda.jpg",
      descripcion: "Hamburguesa con queso"
    },
    {
      id: 7,
      nombre: "Gringa",
      precio: 390,
      imagen: "../img/b-Gringa.jpg",
      descripcion: "Hamburguesa Gringa"
    },
    {
      id: 8,
      nombre: "Vieja",
      precio: 390,
      imagen: "../img/b-Vieja.jpg",
      descripcion: "Hamburguesa Vieja"
    },
    {
      id: 9,
      nombre: "Wunder",
      precio: 390,
      imagen: "../img/Wunder.jpg",
      descripcion: "Hamburguesa Wunder"
    }
  ];


// Arreglar centrado 
const renderizarProductos = (arrayProductos) => {
    let contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = ""; 

arrayProductos.forEach(producto => {
    let cardProducto = document.createElement("div"); 
    
      cardProducto.innerHTML =  `
             <div class="col-md-4 col-sm-6 border-solid mx-auto">
                <div class="card mb-4 ">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body cardprod text-center">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text text-light">${producto.descripcion}</p>
                        <p class="card-text text-light precio-destacado">Precio: $${producto.precio}</p>
                        <button class="btn bg-dark text-light btn-agregar" data-bs-toggle="modal" data-bs-target="#modalProducto${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `; 
        contenedorProductos.appendChild(cardProducto)
});

};

renderizarProductos(productos);













