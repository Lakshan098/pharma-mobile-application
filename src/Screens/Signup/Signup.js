import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView,Pressable} from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import client from '../../Api/client';
import { useState } from 'react';
import * as yup from 'yup';

const reviewSchema = yup.object({
    username : yup.string().required('Please enter your Name'),
    contact_number: yup.string().required('Please enter you Mobile Number'),
    email: yup.string().required('Please enter Email').email('Please enter valid email'),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

})


export default function Signup({navigation}) {

  const [error,setError] = useState("");
  const signUp = async (values, actions) => { {
      const res = await client.post('/Signup',{
        ...values
      });
      if(res.data.success){
        setError("");
        Actions.verifyEmail();
      }
      else{
        setError("Email has been taken!");
      }
      console.log(res.data);
      actions.resetForm();
  
    }
  } 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={globalStyles.fullPage}>
      
        <Image source={require('../../Assets/Images/login.png')} />

        <Text style={globalStyles.header}>Create an account</Text>
        <Formik 
          initialValues={{ username:'',contact_number: '',email: '', password: '', user_type: navigation.getParam('option') }}

            validationSchema={reviewSchema}
            onSubmit={signUp}
        >
          {(props) => (
            <View style={globalStyles.container}>
              <TextInput
                style={globalStyles.input}
                placeholder= 'First & last name'
                onChangeText={props.handleChange('username')}
                value={props.values.username}
                onBlur={props.handleBlur('username')}
              />
                <Text style={globalStyles.errorText}>{props.touched.username && props.errors.username}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Mobile number'
                keyboardType='numeric'
                onChangeText={props.handleChange('contact_number')}
                value={props.values.contact_number}
                onBlur={props.handleBlur('contact_number')}
              />
                <Text style={globalStyles.errorText}>{props.touched.contact_number && props.errors.contact_number}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Email'
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
                <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email }</Text>

              <TextInput
                secureTextEntry
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />
                <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
                <Text style={globalStyles.errorText}>{error}</Text>
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={globalStyles.submitButton}>
                <Text style={globalStyles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              <View style={styles.options}>
                <Text style={styles.haveAccount}>Have an account?</Text><Pressable  onPress={() => navigation.navigate('Login')} style={{marginLeft: 8}} ><Text style={styles.signin}>Sign-in</Text></Pressable>
              </View>
              

            </View>
          )}
        </Formik>

      </ScrollView>

    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    padding: 10,
  },
  signin: {
    color: '#32BBC3'
  },
  options: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  }
});