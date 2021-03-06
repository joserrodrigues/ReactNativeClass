//Importar o useState no componente
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Text, TouchableOpacity, Alert} from 'react-native';
import HomeView from './HomeView';
import HomeModel from './HomeModel';

const HomeController = ({ navigation  }) => {

    //Declarando o state selectedID
    const [selectedID, setSelectedID] = useState(0);
    const [refreshing, setRefreshing] = useState(true);
    const [productsData, setProductsData] = useState([]);
    const homeModel = useRef(null);

    useEffect(() => {
        homeModel.current  = new HomeModel();
        homeModel.current.getProducts(callbackGetProducts);
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                    <Text style={{ fontSize: 30, marginRight: 15 }} > + </Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const callbackGetProducts = (result) => {
        console.log(result);
        setRefreshing(false);
        setProductsData(result.products);
    }

    //Clicou para selecionar Item
    const onSelected = (item) => {
        setSelectedID(item._id)
        navigation.navigate('Detail',{
            info: item
        });
    }

    //Clicou no On Refresh
    const onRefresh = () => {
        setRefreshing(true);

        homeModel.current.getProducts(callbackGetProducts);
    }

    const deleteItem = (item) => {
        Alert.alert(
            "Remove Item",
            "Deseja realmente excluir o produto",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => {
                    setRefreshing(true);
                    homeModel.current.deleteProducts(item, callbackDeleteProducts);
                }}
            ]
        );
    }
    const callbackDeleteProducts = (result) => {
        homeModel.current.getProducts(callbackGetProducts);
    }

    //Passando as informa????es para o View
    return <HomeView
        items={productsData}
        selectedID={selectedID}
        refreshing={refreshing}
        onSelected={onSelected}
        onRefresh={onRefresh}
        deleteItem={deleteItem}
    />;
}

export default HomeController;
