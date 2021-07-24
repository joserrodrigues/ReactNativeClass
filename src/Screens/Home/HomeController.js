//Importar o useState no componente
import React, { useState, useEffect, useRef } from 'react';
import { registerRootComponent } from 'expo';
import HomeView from './HomeView';
import HomeModel from './HomeModel';

const HomeController = () => {

    //Declarando o state selectedID
    const [selectedID, setSelectedID] = useState(0);
    const [refreshing, setRefreshing] = useState(true);
    const [productsData, setProductsData] = useState([]);
    const homeModel = useRef(null);

    useEffect(() => {
        homeModel.current  = new HomeModel();
        homeModel.current.getProducts(callbackGetProducts);
    }, [])

    const callbackGetProducts = (result) => {
        console.log(result);
        setRefreshing(false);
        setProductsData(result.products);
    }

    //Clicou para selecionar Item
    const onSelected = (id) => {
        setSelectedID(id)
    }

    //Clicou no On Refresh
    const onRefresh = () => {
        setRefreshing(true);

        homeModel.current.getProducts(callbackGetProducts);
    }

    //Passando as informações para o View
    return <HomeView
        items={productsData}
        selectedID={selectedID}
        refreshing={refreshing}
        onSelected={onSelected}
        onRefresh={onRefresh}
    />;
}

// Somente utilizamos a declaração registerRootComponent 
// quando o componente for o determinado como o inicial no
// EntryPoint do Expo, que é o caso do HomeControler. 
// Caso não fosse, usaríamos a linha “export default HomeController”;
export default registerRootComponent(HomeController);
