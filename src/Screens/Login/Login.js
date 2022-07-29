import { Formik } from 'formik';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../../../Styles/Global';

export default function Login({ navigation }) {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.fullPage}>

        <Image source={require('../../Assets/Images/login.png')} />

        <Text style={globalStyles.header}>Login</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
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

              <TextInput
                secureTextEntry
                style={globalStyles.input}
                placeholder='Password'
                onChangeText={props.handleChange('password')}
                value={props.values.password}
              />
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

  signup: {
    color: '#32BBC3',
  },

  options: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: -20,
  }
});