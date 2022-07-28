import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 35,
    },

    input: {
         borderWidth: 1,
         borderColor: '#ddd',
         padding: 10,
         borderRadius: 10,
         marginBottom: 15,
         backgroundColor: '#E7E7E7',
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 35,
        paddingTop: 20,
    },

    submitButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#32BBC3',
    },

    buttonText: {
        fontWeight: '500',
        fontSize: 18,
        color: '#fff'
    }
})