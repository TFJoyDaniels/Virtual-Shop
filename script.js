// Cart Deploy

const btnCart = document.querySelector('.icon-cart');
const cart = document.querySelector('.container-cart-product');

btnCart.addEventListener('click', ()=>{
    cart.classList.toggle('active');
});

// Cart Add

const containerProductCart = document.querySelector('.container-product');
const products = document.querySelectorAll('.info');
const productsList = document.querySelector('.products');
const valorTotal = document.querySelector('.total-pagar');
const counter = document.getElementById('counter');
let allProducts = [];


productsList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn')){
        const product = e.target.parentElement;
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.product').textContent,
            price: product.querySelector('.price').textContent
        }
        const exists = allProducts.some(product => product.title === infoProduct.title);

        if (exists) {
            const products = allProducts.map(product =>{
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product;
                } else {
                    return product;
                };
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        };

        showHTML();
    };
});

const showHTML = ()=>{
    containerProductCart.innerHTML = '';
    let total = 0;
    let totalOfProduct = 0;

    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');
        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-carrito-producto">${product.price}</span>
        </div>
        <i class='bx bx-x icon-close'></i> 
        `;
        containerProductCart.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProduct = totalOfProduct + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    counter.innerText = totalOfProduct;
};