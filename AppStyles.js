import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        marginTop: 40
    },
    blockA: {
        height: 60,
        backgroundColor: 'red'
    },
    blockB: {
        width: 60, height: 60,
        backgroundColor: 'green'
    },
    blockC: {
        width: 60, height: 60,
        backgroundColor: 'blue'
    }
});

