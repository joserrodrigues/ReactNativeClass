import React from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, RefreshControl} from "react-native";

import styles from './HomeViewStyle'

const HomeView = (props) => {


    /* Nessa função, colocamos o JSX equivalente para cada item da lista */
    const renderItem = ({ item, index }) => {
        let colorTextInfo = { color: '#333333' };
        if (item._id === props.selectedID) {
            colorTextInfo = { color: '#ff0000' };
        }
        return (
            <TouchableOpacity onPress={() => props.onSelected(item)}
                style={[{ padding: 10 }]} key={index}>
                <Text style={[styles.text, colorTextInfo]}>{item.title}</Text>
                <Text style={[styles.textSmall, colorTextInfo]}>{item.type}</Text>
            </TouchableOpacity>
        );
    }

    /* Colocamos o SafeArea para somente utilizar as áreas clicaveis do celular
             e flex:1 para utilizar a tela inteira */
    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                //No data, colocamos o array com os itens a ser exibidos
                data={props.items}
                //No renderItem, coloamos a função onde será exibido o item
                renderItem={renderItem}
                //No Keyextractor, colocamos o valor único para cada item
                keyExtractor={item => item._id}
                //No extradata, colocamos as informações extras que atualizam o FlatList
                extraData={props.selectedID}
                //No refreshControl, coloca o componente para atualizar a tela
                refreshControl={
                    <RefreshControl
                        refreshing={props.refreshing}
                        onRefresh={() => props.onRefresh()}
                    />
                }
            />
        </SafeAreaView>
    );

}

export default HomeView;
