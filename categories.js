function printCategories(category) {
    // Identificar el contenedor
    const container = document.getElementById('products-category');
    // Generar el HTML
    let html1 = '';


    for (let i = 0; i < category.length; i++) {
        html1 += `<div class="shopping-cart">
        <figure>
    <div>
        <img src="${category[i].url_image} " alt="images">
    </div>                  
        </figure>
    <h1 class="shopping-card-title">${category[i].name}</h1>
    <div class="price-cart">
        <p >$ ${category[i].price}</p>
        <button class='button-pos item-button btn btn-outline-secondary addToCart'><i class="fa-solid fa-basket-shopping"></i></button>
    </div>
</div>`
    }
    // Imprimir el HTML
    container.innerHTML = html1;
}


const baseURL = 'http://localhost:3000/api/category'
let id = 1

function getCategories() {
    axios.get(`${baseURL}/${id}`)
        .then(function (res) {
            const category = res.data;
            console.log(category);
            printCategories(category);
        })
        .catch(function (error) {
            console.log(error);
        })
}

getCategories();

