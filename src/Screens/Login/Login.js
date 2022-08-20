import { Formik } from 'formik';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../../../Styles/Global';
import * as yup from 'yup';
import { Actions } from 'react-native-router-flux';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const reviewSchema = yup.object({
  email: yup.string().required('Please enter your email').email('Please enter valid email'),
  password: yup.string().required('Please enter your password').min(8)
})

export default function Login({ navigation }) {

  return (
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
          onSubmit={(values, actions) => {
            actions.resetForm();
            console.log(values);
            Actions.dDashboard();
          }}
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
              

              <TouchableOpacity
                onPress={props.handleSubmit}
                style={globalStyles.submitButton}>
                <Text style={globalStyles.buttonText}>Login</Text>
              </TouchableOpacity>

            </View>
          )}
        </Formik>
        <View style={styles.options}>
          <Text style={styles.noAccount}>Don't have an account?</Text><Pressable onPress={()=> navigation.navigate('ActorSelect')} style={{marginLeft: 8}} ><Text style={styles.signup}>Sign-up</Text></Pressable>
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
    flex:1
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