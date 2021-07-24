import React from 'react';
import ProductDetailView from './ProductDetailView';

const ProductDetailController = ({ navigation, route })  => {

    const { info } = route.params;
    //Passando as informações para o View
    return <ProductDetailView
        info={info}
    />;
}
export default ProductDetailController;
