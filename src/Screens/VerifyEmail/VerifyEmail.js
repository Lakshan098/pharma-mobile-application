import { Formik } from 'formik';
import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { globalStyles } from '../../../Styles/Global';


export default function verifyEmail({navigation}){
   
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={globalStyles.fullPage}>
                <View>
                    <Image style={styles.forgetPasswordImg}source={require('../../Assets/Images/mail-gif.gif')} />
                    <Text style={ {fontSize:25,padding:5,textAlign:'center',fontFamily:'Raleway-Bold'}}>Check your email</Text>
                    <Text style={styles.boldtext}>We have sent a verification OTP to your email</Text>
                    
                    <Formik
                        initialValues={{ OTP:''}}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                        }}
                    >
                        {(props) => (
                            <View style={globalStyles.container}>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Enter OTP'
                                    keyboardType='numeric'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.OTP}
                                />

                                <TouchableOpacity
                                    onPress={()=> {props.handleSubmit; }}
                                    style={globalStyles.submitButton}>
                                    <Text style={globalStyles.buttonText}>Verify</Text>
                                </TouchableOpacity>
                            </View>
                            
                    )}
                    </Formik>
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