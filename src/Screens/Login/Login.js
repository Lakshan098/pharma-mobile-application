import { Formik } from 'formik';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../../../Styles/Global';
import * as yup from 'yup';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import client from '../../Api/client';
import { useState, useContext } from 'react';
import jwt_decode from "jwt-decode";
import { AuthContext } from '../../Context/AuthContext';
import { Actions } from 'react-native-router-flux';
import Routes from '../../../Routes';

const reviewSchema = yup.object({
  email: yup.string().required('Please enter your email').email('Please enter valid email'),
  password: yup.string().required('Please enter your password').min(8)
})

export default function Login({ navigation }) {

  const [error,setError] = useState("");
  const {login,setLoggedin} = useContext(AuthContext);

  const signIn = async (values, actions) => { {
      actions.resetForm();
      console.log(values);
      const response = await client.post('/Signup/SignIn',{
          ...values
      });


      if(response.data){
        console.log(response.data)

        if (response.data.success == false) {
          setError("Invalid email or password...!");
        }
        else {
        
          const token = response.data.token;

          login(token);

          if (token) {
            const users = jwt_decode(response.data.token);
            console.log(users);
            window.loggedUserType = users.User_type;
            window.loggedUserId = users.User_ID;
            console.log(users.User_type);

            if (window.loggedUserType == "customer") {
              console.log("Admin dashboard called", window.loggedUserType);
              Actions.refresh();
              Actions.customerDashboard();
              await setLoggedin();
            }

            else if (window.loggedUserType == "delivery_agent") {
              console.log("Pharmacy dashboard called", window.loggedUserType);
              Actions.refresh();
              Actions.dDashboard();
              await setLoggedin();

            }

          }
          else {
            window.loggedUserType = null;
            window.loggedUserId = null;
          }
        }
      }
      
  }}

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ScrollView style={styles.fullPage}>

        <Image
          style={{
            height: 180,
            width: null,
          }}
          source={require('../../Assets/Images/login.png')} />

        <Text style={globalStyles.header}>Login</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={reviewSchema}
          onSubmit={signIn}
        >
          {(props) => (
            <View style={globalStyles.container}>
              <TextInput
                style={globalStyles.input}
                placeholder='Email'
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}

              />
              <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>

              <TextInput
                secureTextEntry
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />
              <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
              <TouchableOpacity
                onPress={() => Actions.forgotPassword()}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>

              <Text style={globalStyles.errorText}>{error}</Text>
              <TouchableOpacity
                onPress={props.handleSubmit}
                style={globalStyles.submitButton}>
                <Text style={globalStyles.buttonText}>Login</Text>
              </TouchableOpacity>

            </View>
          )}
        </Formik>
        <View style={styles.options}>
          <Text style={styles.noAccount}>Don't have an account?</Text><Pressable onPress={() => navigation.navigate('ActorSelect')} style={{ marginLeft: 8 }} ><Text style={styles.signup}>Sign-up</Text></Pressable>
        </View>

      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    marginTop: -10,
    textAlign: 'right',
    fontWeight: '400',
    marginBottom: 15,
    color: '#32BBC3',
  },
  fullPage: {
    backgroundColor: '#fff',
    flex: 1
  },

  signup: {
    color: '#32BBC3',
  },

  options: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: -20,
    marginBottom: 30
  }
});