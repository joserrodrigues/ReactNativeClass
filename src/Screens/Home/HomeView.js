import React from 'react';
import { Button, Image, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from "react-native";

import styles from './HomeViewStyle'

const HomeView = (props) => {

    //Utilizando o props info que recebemos na inicialização do componente
    return <View style={{ marginTop: 130 }}>
        <Text style={styles.text}>Button Clicked = {props.info}</Text>
        <Button onPress={() => props.onClicked('Button Clicked')} title={"Press Me"}>Press Me</Button>


    </View>
}

export default HomeView;
