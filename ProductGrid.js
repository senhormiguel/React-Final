import ProductGrid from './ProductGrid/ProductGrid';
import styles from './ProductGrid.module.css';
import Nav from './Nav.js';// tsx
// import Nav from './Nav.tsx'
import React from 'react';
import ReactDOM from 'react-dom/client';

// React, 4 images em linha + 4 em baixo
// Se em 3 imagens, vão dar nove

// Um
const products = [
    {
        // Dimensão da imagem: w_234px h_424px
        // "productImg": "/src/assets/nome da imagem1.png"
        "productImg": "/src/assets/products/Panela.png",
        "name": "Panela",
        "description": "Utensílios de cozinha online",
        "oldPrice": 40.00,
        "currentPrice": 10.00,
        "colors": [
            "#0099CC",
            "#000000",
            "#FFFFFF"
        /*button onclick = {() => Add to Cart}>
        console.log(Click);*/
        // name1: Add to Cart

        ]
    },
// Dois
    {
        "productImg": "/src/assets/products/Frigideira.png", // sem products
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
// Três
    {
        "productImg": "/src/assets/products/Bandejas.png", // sem products
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
// Quatro
    {
        "productImg": "/src/assets/products/Saleiro.png", // sem products
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
// Um(2)
    {
        "productImg": "/src/assets/products/Moldes.png", // sem products
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
// Dois(2)
    {
        "productImg": "/src/assets/products/Pratos.png",
        "name": "Pratos",
        "description": "Fast Kitchen",
        "oldPrice": 5.99,
        "currentPrice": 9.50,
        "colors": [
            "#0099CC",
            "#FFFFFF",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },
//Três (2)
    {
        "productImg": "/src/assets/products/Açúcareiro.png",
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
// Quatro (2)
    {
        "productImg": "/src/assets/products/Conjunto de facas.png",
        "name": "Conjunto de facas",
        "description": "Facas para cozinheiros",
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
    // nona imagem debaixo
/*        {
        "productImg": "/src/assets/products/nome da imagem9png",
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
]*/
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


// 

const products = [

        /*
    {
        "productImg": "/src/assets/nome da imagem1.png"
        "productImg": "/src/assets/products/nome da imagem1.png",
        "name": "Panela",
        "description": "Utensílios de cozinha online",
        "oldPrice": 40.00,
        "currentPrice": 10.00,
        "colors": [
            "#0099CC",
            "#000000",
            "#FFFFFF"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        name1: Add to Cart

        ]
    },
        */
    {
        "productImg": "/src/assets/products/Panela de pressão.png", // sem products
        "name": "Panela de Pressão",
        "description": "Para culinária de restaurantes",
        "oldPrice": 50.00,
        "currentPrice": 40.00,
        "colors": [
            "#0099CC",
            "#000000",
            "#FFFFFF"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        // Um
        ]
    },
// Dois
    {
        "productImg": "/src/assets/products/Joías_faca.png", // sem products
        "name": "Joías_faca",
        "description": "Joalharia",
        "oldPrice": 15.00,
        "currentPrice": 20.00,
        "colors": [
            "#F1C40F",
            "#2ECC71",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart

        ]
    },
// Três
    {
        "productImg": "/src/assets/products/Joías_garfo.png", // sem products
        "name": "Joías_garfo",
        "description": "Joalharia",
        "oldPrice": 15.00,
        "currentPrice": 20.00,
        "colors": [
            "#3498DB",
            "#1ABC9C",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },
// Quatro
    {
        "productImg": "/src/assets/products/Joías_talheres.png", // sem products
        "name": "Joías_talheres",
        "description": "Joalharia",
        "oldPrice": 15.00,
        "currentPrice": 20.00,
        "colors": [
            "#E91E63",
            "#9C27B0",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },
// Um (2)
    {
        "productImg": "/src/assets/products/Talheres.png",
        "name": "Talheres",
        "description": "Fast Kitchen",
        "oldPrice": 4.99,
        "currentPrice": 3.50,
        "colors": [
            "#0099CC",
            "#FFFFFF",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },
// Dois (2)
    {
        "productImg": "/src/assets/products/Panela HSP.png",
        "name": "Panela HSP",
        "description": "Restaurantes",
        "oldPrice": 40.00,
        "currentPrice": 53.99,
        "colors": [
            "#009688",
            "#0099CC",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },
// Três (2)
    {
        "productImg": "/src/assets/products/Moedor de pimenta.png",
        "name": "Moedor de pimenta",
        "description": "Restaurantes e cafés",
        "oldPrice": 5.99,
        "currentPrice": 4.99,
        "colors": [
            "#3F51B5",
            "#FFFFFF",
            "#000000"
        button onclick = {() => Add to Cart}>
        console.log(Click);
        // name1: Add to Cart
        ]
    },
    // nona imagem debaixo | Quatro (2)
        {
        "productImg": "/src/assets/products/Copos.png",
        "name": "Copos",
        "description": "Bebidas",
        "oldPrice": 4.99,
        "currentPrice": 5.99, // Taxa de inflação
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
function ProductGrid2() {

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
    //
export default ProductGrid2

    //
const Products = () => {
        return <h6>@ HSP Utensílios. Todos os direitos reservados.</h6>
    }
    export default Products;
