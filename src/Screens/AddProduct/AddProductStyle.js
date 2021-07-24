import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        marginTop: 40
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
        marginLeft: 20,
    },
    textDetail: {
        fontSize: 20,
        margin: 10,
        marginLeft: 20,
    },
    textInput:{
        margin: 10,
        fontSize: 18,
        marginLeft: 20,
    },
    buttonView: {
        backgroundColor: '#030e87',
        margin: 20,
        padding: 14,
        textAlign: 'center',
        borderRadius: 100,
    },
    button: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    messageError: {
        color: 'red',
        fontSize: 13,
        marginLeft: 20,
    }
});