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
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Raleway-ExtraBold',
    },

    fullPage: {
        backgroundColor: '#fff',
        flex:1,
      },

      orderConfirmButton: {
        padding: 10,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#32BBC3',
      },

      boxContainer: {
        borderWidth:2,
        marginLeft:20,
        marginRight: 20,
        marginBottom:30,
        borderRadius:10,
        borderColor: '#c3c3a2',
    },

    doneButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#32BBC3',
        width:100,
        height: 35,
        margin:10,
    },

    cancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#32BBC3',
        width:100,
        height: 35,
        margin:10,

    },

    doneButtonText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Raleway-Bold',
    },

    registerButton: {
        padding: 10,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#32BBC3',
    },

    errorText: {
        color: 'crimson',
        fontFamily: 'Raleway-SemiBold',
        marginBottom: 7,
    }
})