//Importar o useState no componente
import React from 'react';
import styles from './ProductDetailStyle';
import { View, Text } from 'react-native';

const ProductDetailView = (props) => {

    //Passando as informações para o View
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Produto</Text>
            <Text style={styles.textDetail}>{props.info.title}</Text>
            <Text style={styles.text}>Tipo</Text>
            <Text style={styles.textDetail}>{props.info.type}</Text>
        </View>
    );
}
export default ProductDetailView;
