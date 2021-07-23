import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        marginTop: 40
    },
    text: {
        fontSize: 24,
        margin: 10
    },
    textButton: {
        fontSize: 24,
        margin: 10,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    viewLogo: {
        alignItems: 'center',
        margin: 15,
        justifyContent: 'center',        
    },
    tinyLogo: {
        height: 80,
        width: 80,
        textAlign: 'center'
    }
});

