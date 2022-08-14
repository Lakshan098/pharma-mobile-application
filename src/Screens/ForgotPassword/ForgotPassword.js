import { Formik } from 'formik';
import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import { globalStyles } from '../../../Styles/Global';


export default function ForgotPassword({navigation}){

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={globalStyles.fullPage}>
                <Image style={styles.forgetPasswordImg}source={require('../../Assets/Images/Forget_Password.png')} />
                <View style={styles.forgotPasswordAlertContainer}>
                    <Text style={styles.boldtext}>No worries!{'\n'} Enter your registered mail and we will send you a reset</Text>

                    <Formik
                        initialValues={{ email:''}}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                        }}
                    >
                        {(props) => (
                            <View style={globalStyles.container}>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Email'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />

                                <TouchableOpacity
                                    onPress={()=> {navigation.navigate('ResetPassword');}}
                                    style={globalStyles.submitButton}>
                                    <Text style={globalStyles.buttonText}>Reset</Text>
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