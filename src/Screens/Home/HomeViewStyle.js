import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        marginTop: 40
    },
    text: {
        fontSize: 28,
        margin: 10
    },
    textButton: {
        fontSize: 28,
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
    },
    textSmall: {
        fontSize: 16,
        marginLeft: 10,
    },
    itemView: {
        flexDirection: 'row',
    },
    itemViewText: {
        flexDirection: 'column',
    },
    itemViewIcon: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 25,
        flexGrow: 1
    }
});

