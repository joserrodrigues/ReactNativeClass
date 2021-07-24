import React, { useState, useEffect, useRef } from 'react';
import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeController from '../Screens/Home/HomeController';
import ProductDetailController from '../Screens/ProductDetail/ProductDetailController';
import AddProductController from '../Screens/AddProduct/AddProductController';

const Stack = createStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeController} />
                <Stack.Screen name="Detail" component={ProductDetailController} />
                <Stack.Screen name="Add" component={AddProductController} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

// Somente utilizamos a declaração registerRootComponent 
// quando o componente for o determinado como o inicial no
// EntryPoint do Expo, que é o caso do HomeControler. 
// Caso não fosse, usaríamos a linha “export default HomeController”;
export default registerRootComponent(Routes);