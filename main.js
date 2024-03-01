const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment()
const btns = document.querySelectorAll('.card .btn');


// console.log(carrito);
// console.log(template);
// console.log(btns);

const carritoObjeto = {


}

const agregarCarrito = (e) => {

    // console.log(e.target.dataset.fruit)

    const product = {
        titulo: e.target.dataset.fruit,
        id: e.target.dataset.fruit,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(product.titulo)) {
        product.cantidad = carritoObjeto[product.titulo].cantidad + 1;
    }

    carritoObjeto[product.titulo] = product;

    pintarCarrito()

    // console.log(carritoObjeto);

}

const pintarCarrito = () => {

    carrito.textContent = '';

    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad


        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}

btns.forEach(btn => btn.addEventListener('click', agregarCarrito))
const recorrerCarrito = () => {

}

// console.log(carritoObjeto)