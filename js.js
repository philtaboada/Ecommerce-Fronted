function printProducts(products) {
    // Identificar el contenedor
    const container = document.getElementById('products-container');
    // Generar el HTML
    let html = '';
    for (let i = 0; i < products.length; i++) {
        html += `

        <div class="item shopping-cart">
        <h1 class="item-title shopping-card-title">${products[i].name}</h1>
        <img class='item-image' src="${products[i].url_image} " alt="images">

        <div class="item-details price-cart">
                        <p class='item-price' >$ ${products[i].price}</p>
                        <button class='button-pos item-button btn btn-outline-secondaryt addToCart'> <i class="fa-solid fa-basket-shopping"></i></button>
        </div>
    </div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

function getProducts() {
    axios.get('http://localhost:3000/api')
        .then(function (res) {
            const products = res.data;
            console.log(products);
            printProducts(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}


getProducts();
