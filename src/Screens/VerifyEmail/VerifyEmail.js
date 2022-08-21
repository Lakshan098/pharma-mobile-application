import { Formik } from 'formik';
import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import client from '../../Api/client';
import { Actions } from 'react-native-router-flux';
import { useState } from 'react';
import * as yup from 'yup';

const reviewSchema = yup.object({
    otp : yup.number().required('Please enter valid OTP'),
})

export default function verifyEmail({navigation}){
    const [error,setError] = useState("");
    const veification = async (values, actions) => { {
        actions.resetForm();
            console.log(values);
            const res = await client.post('/Signup/VerifyOTP',{
                ...values
            });
            if(res.data.success){
                setError("");
                Actions.login();
            }
            else{
                setError("Wrong OTP!");
            }
            // Actions.login();
            console.log(error);
        }
    } 
   
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={globalStyles.fullPage}>
                <View>
                    <Image style={styles.forgetPasswordImg}source={require('../../Assets/Images/mail-gif.gif')} />
                    <Text style={ {fontSize:25,padding:5,textAlign:'center',fontFamily:'Raleway-Bold'}}>Check your email</Text>
                    <Text style={styles.boldtext}>We have sent a verification OTP to your email</Text>
                    
                    <Formik
                        validationSchema={reviewSchema}
                        initialValues={{ otp :''}}
                        onSubmit={veification}
                    >
                        {(props) => (
                            <View style={globalStyles.container}>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Enter OTP'
                                    keyboardType='numeric'
                                    onChangeText={props.handleChange('otp')}
                                    value={props.values.otp}
                                />
                                <Text style={globalStyles.errorText}>{props.touched.otp && props.errors.otp || error}</Text>

                                <TouchableOpacity
                                    onPress={props.handleSubmit}
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