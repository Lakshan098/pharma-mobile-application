import { Formik } from 'formik';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../../../Styles/Global';
import * as yup from 'yup';
import { Actions } from 'react-native-router-flux';

const reviewSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(8)
})

export default function Login({ navigation }) {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <View style={styles.fullPage}>

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
              <Text style={globalStyles.errorText}>{props.touched.email && props.errors.title}</Text>

              <TextInput
                secureTextEntry
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />
              <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
              <Text style={styles.forgotPassword}>Forgot password?</Text>

              <TouchableOpacity
                onPress={props.handleSubmit}
                style={globalStyles.submitButton}>
                <Text style={globalStyles.buttonText}>Login</Text>
              </TouchableOpacity>

            </View>
          )}
        </Formik>
        <View style={styles.options}>
          <Text style={styles.noAccount}>Don't have an account? <Text style={styles.signup}>Sign-up</Text></Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    marginTop: -10,
    textAlign: 'right',
    fontWeight: '400',
    marginBottom: 15,
  },
  fullPage: {
    backgroundColor: '#fff',
    flex:1
  },

  signup: {
    color: '#32BBC3',
    cursor: 'pointer',
  },

  options: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: -20,
  }
});