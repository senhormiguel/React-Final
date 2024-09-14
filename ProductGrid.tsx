import ProductGrid from './ProductGrid/ProductGrid'
import styles from './ProductGrid.module.css'

// React


const products = [
    {
        // "productImg": "/src/assets/nome da imagem0.png"
        "productImg": "/src/assets/products/nome da imagem0.png",
        "name": "Panela",
        "description": "Utensílios de cozinha online",
        "oldPrice": 40.00,
        "currentPrice": 10.00,
        "colors": [
            "#0099CC",
            "#2196F3",
            "#FFFFFF"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart

        ]
    },

    {
        "productImg": "/src/assets/products/nome da imagem1.png", // sem products
        "name": "Frigideira",
        "description": "Para culinária de restaurantes",
        "oldPrice": 4.00,
        "currentPrice": 6.99,
        "colors": [
            "#0099CC",
            "#000000",
            "#FFFFFF"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart

        ]
    },

    {
        "productImg": "/src/assets/products/nome da imagem2.png", // sem products
        "name": "Bandejas",
        "description": "Empregados de mesa",
        "oldPrice": 15.00,
        "currentPrice": 10.00,
        "colors": [
            "#F1C40F",
            "#2ECC71",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart

        ]
    },

    {
        "productImg": "/src/assets/products/nome da imagem3.png", // sem products
        "name": "Saleiro",
        "description": "Chefes de cozinha",
        "oldPrice": 7.50,
        "currentPrice": 7.75,
        "colors": [
            "#3498DB",
            "#1ABC9C",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },

    {
        "productImg": "/src/assets/products/nome da imagem4.png", // sem products
        "name": "Moldes",
        "description": "Pastelaria",
        "oldPrice": 10.00,
        "currentPrice": 7.56,
        "colors": [
            "#E91E63",
            "#9C27B0",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },

    {
        "productImg": "/src/assets/products/nome da imagem5.png",
        "name": "Pratos",
        "description": "Fast Kitchen",
        "oldPrice": 5.99,
        "currentPrice": 9.50,
        "colors": [
            "#0099CC",
            "#795548",
            "#FF5722"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },

    {
        "productImg": "/src/assets/products/nome da imagem6.png",
        "name": "Açúcareiro",
        "description": "Clientes dos cafés e restaurantes",
        "oldPrice": 8.00,
        "currentPrice": 11.00,
        "colors": [
            "#009688",
            "#0099CC",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },

    {
        "productImg": "/src/assets/products/nome da imagem7.png",
        "name": "Conjuto de Facas",
        "description": "Facas para chef's",
        "oldPrice": 55.99,
        "currentPrice": 60.99,
        "colors": [
            "#3F51B5",
            "#FFFFFF",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },

        {
        "productImg": "/src/assets/products/nome da imagem8png",
        "name": "Chávenas de café",
        "description": "Bebidas",
        "oldPrice": 19.99,
        "currentPrice": 22.99, // Taxa de inflação
        "colors": [
            "#FFFFFF",
            "#FF4081",
            "#0099CC"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },
]
// adicionar mais porção produtos, depende das dimensões das imagens
function ProductGrid() {

    return (
        <div className={styles.wrapper}>
            {
                products.map((product) => {
                    return (
                        <ProductCard
                            productName={product.name}
                            image={product.productImg}
                            description={product.description}
                            oldPrice={product.oldPrice}
                            currentPrice={product.currentPrice}
                            variantColors={product.colors}
                        />
                    )
                })
            }

        </div>
    )
}

export default ProductGrid
