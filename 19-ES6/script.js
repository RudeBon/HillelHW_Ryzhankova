//`[{ title: 'Title1', size: 100, img: 'url' , cost: 300}, { title: 'Title2', size: 200, img: 'url',cost: 300 }, { title: 'Title2', size: 150, img: 'url', cost: 300 } ......]`
class Product {
    constructor(title, cost, url = 'images/defaultImage.jpg', size = 100) {
        this.title = title;
        this.size = size;
        this.cost = cost;
        this.url = url;
    }
}

class ViewController {

    constructor(products, placeholderSelector = '#products') {
        this.placeholderSelector = placeholderSelector;
        this.products = products;
        this.filterTitle = '';
        this.filterPrice = 0;
    }

    printProducts(products = this.products) {
        console.log(products);

        let productsHTML = products.reduce((accumulator, product) => {
            return accumulator + this.getProductPresentation(product);
        }, '');
        
        document
            .querySelector(this.placeholderSelector)
            .innerHTML = productsHTML;
    }    

    getProductPresentation = (product) =>
        `
        <div>
            <h2>${product.title}</h2>
            <p>Price: ${product.cost}</p>
            <img src="${product.url}" 
                width="${product.size}" height="${product.size}"/>            
        </div>
        `;

    onFilterProductsByTitle(e) {
        this.filterTitle = e.target.value;
        this.printProducts(this.getFilteredProducts());
    }
    
    onFilterProductsByPrice(e) {
        this.filterPrice = e.target.value;
        this.printProducts(this.getFilteredProducts());
    }
    
    onFilterDiscard(e, inputTitle, inputPrice) {
        inputTitle.value = '';
        inputPrice.value = '';
        this.filterTitle = '';
        this.filterPrice = 0;
        
        this.printProducts();
    }

    getFilteredProducts() {
        return this.products.filter(p => this.isProductFitsByTitle(p) && this.isProductFitsByPrice(p));
    }

    isProductFitsByPrice(product) {
        return this.filterPrice == 0 || product.cost < this.filterPrice;
    }

    isProductFitsByTitle(product) {
        return product.title.toLowerCase().includes(this.filterTitle.toLowerCase());
    }

}


let products = new Array(
    new Product('iPhone 7', 650),
    new Product('Samsung TV 45', 340, 'images/samsung tv.webp'),
    new Product('Samsung TV 55', 440, 'images/samsung tv.webp', 150),
    new Product('Samsung TV 75', 640, 'images/samsung tv.webp', 250),
    new Product('LogiTech mouse', 89.99, 'images/LogiTech mouse.jpg', 150),
    new Product('Test', 99));
    
let viewController = new ViewController(products, '#goods');
viewController
    .printProducts(products);

const inputTitle = document.querySelector('#inputTitle');
const inputPrice= document.querySelector('#inputPrice');
const inputDiscard= document.querySelector('#discardFilters');

inputTitle.addEventListener('change', e => viewController.onFilterProductsByTitle(e));
inputPrice.addEventListener('change', e => viewController.onFilterProductsByPrice(e));
inputDiscard.addEventListener('click', e => viewController.onFilterDiscard(e, this.inputTitle, this.inputPrice));
