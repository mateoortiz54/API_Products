const buttom = document.querySelector('button')
const buttom2 = document.getElementById('button2')
const input = document.querySelector('input')
const pokemonContainer = document.querySelector('.pokemon-container')
const buttom3 = document.getElementById('button3')
const buttom4 = document.getElementById('button4')
const buttom5 = document.getElementById('button5')






buttom.addEventListener('click', (e) => {
    e.preventDefault();
    traerProducto(input.value);
})

buttom2.addEventListener('click', (s) => {
    s.preventDefault();
    registrarProducto();
})
buttom3.addEventListener('click', (A) => {
    A.preventDefault();
    actualizarProducto(input.value);
})
buttom4.addEventListener('click', (E) => {
    E.preventDefault();
    eliminarProducto(input.value);
})
buttom5.addEventListener('click', (E) => {
    E.preventDefault();
    eliminarProducto();
})

function traerProducto(producto) {
    fetch(`https://fakestoreapi.com/products/${producto}`)
        .then(res => res.json())
        .then((data) => { mostrarProducto(data) });
}

function mostrarProducto(data) {



    const img1 = document.getElementById('imagen1')
    img1.src = data.image
    const titulo1 = document.getElementById('titulo1');
    titulo1.textContent = data.title;
    const precio1 = document.getElementById('precio')
    precio1.textContent = data.price;
    const description1 = document.getElementById('descripcion')
    description1.textContent = data.description;



}


/*function registrarProducto(){
    fetch('https://api.escuelajs.co/api/v1/products/',{
        method:"POST",
        body:JSON.stringify({
            title: 'Chocolate Caliente',
            price: 2240,
            description: 'Chocolate caliente proveniente de las palmas',
            image: 'https://i.provatar.cc',
            category: 'food'
            
        }
    )
})
    .then(res=> res.json())
    .then(json=> console.log(json))
}*/

function registrarProducto() {
    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
}
function eliminarProducto(producto) {

    fetch(`https://fakestoreapi.com/products/${producto}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => console.log(json))
}
function actualizarProducto(producto) {

    fetch(`https://fakestoreapi.com/products/${producto}`, {
        method: "PUT",
        body:JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
}
function listarProducto(producto) {

fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
}
/*
    const div = document.createElement('div')
    div.appendChild(img);
    div.appendChild(h3);


    pokemonContainer.appendChild(div);
*/