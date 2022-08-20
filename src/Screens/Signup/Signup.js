import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView,Pressable} from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import client from '../../Api/client';

export default function Signup({navigation}) {
   
  const signUp = async (values, actions) => { {
      actions.resetForm();
      console.log(values);
      // Actions.VerifyEmail();
      const res = await client.post({
        ...values
      });
    }
  } 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={globalStyles.fullPage}>
      
        <Image source={require('../../Assets/Images/login.png')} />

        <Text style={globalStyles.header}>Create an account</Text>
        <Formik 
          initialValues={{ name:'',mobile_number: '',email: '', password: '' }}
          onSubmit={signUp}
        >
          {(props) => (
            <View style={globalStyles.container}>
              <TextInput
                style={globalStyles.input}
                placeholder= 'First & last name'
                onChangeText={props.handleChange('name')}
                value={props.values.name}
              />

              <TextInput
                style={globalStyles.input}
                placeholder='Mobile number'
                keyboardType='numeric'
                onChangeText={props.handleChange('mobile_number')}
                value={props.values.mobile_number}
              />

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