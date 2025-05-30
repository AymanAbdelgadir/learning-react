import React from 'react';

const ProductInfo = () => {
    return (
        <Product
        name= "TV"
        price = {799}
        />


    );
};
const Product = ({name , price}) => {
    return (
        <div>
            <h1>Product name - {name}</h1>
            <p>Product's price - {price}</p>
        </div>
    )
}

export default ProductInfo;