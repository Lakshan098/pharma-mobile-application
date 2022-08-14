import { Formik } from 'formik';
import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { globalStyles } from '../../../Styles/Global';


export default function ResetPassword({navigation}){
   
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={globalStyles.fullPage}>
                <View>
                    <Image style={styles.forgetPasswordImg}source={require('../../Assets/Images/mail-gif.gif')} />
                    <Text style={ {fontSize:25,padding:5,textAlign:'center',fontFamily:'Raleway-Bold'}}>Check your email</Text>
                    <Text style={styles.boldtext}>We have sent a password recover instructions to your email</Text>
                </View>
            </ScrollView>   
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create(
    {
        forgetPasswordImg : {
            height: 280,
            width: 280,
            alignSelf:'center',
            margin: 35

        },
        boldtext: {
            fontFamily:'Raleway-Bold',
            fontSize: 18,
            textAlign: 'center',
            padding:5
        }

    }
)