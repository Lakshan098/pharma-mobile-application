import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView,Pressable} from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import * as yup from 'yup';

const reviewSchema = yup.object({
  name: yup.string().required('Please enter your Name'),
  mobile_number: yup.string().required('Please enter you Mobile Number'),
  email: yup.string().required('Please enter Email').email('Please enter valid email'),
  password: yup
  .string()
  .required('Please Enter your password')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),

})

export default function CustomerSignup({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={globalStyles.fullPage}>
      
        <Image source={require('../../Assets/Images/login.png')} />

        <Text style={globalStyles.header}>Create an account</Text>
        <Formik 
          initialValues={{ name:'',mobile_number: '',email: '', password: '' }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            console.log(values);
          }}
        >
          {(props) => (
            <View style={globalStyles.container}>
              <TextInput
                style={globalStyles.input}
                placeholder= 'First & last name'
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                onBlur={props.handleBlur('name')}
              />
                <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='Mobile number'
                keyboardType='numeric'
                onChangeText={props.handleChange('mobile_number')}
                value={props.values.mobile_number}
                onBlur={props.handleBlur('mobile_number')}
              />
                <Text style={globalStyles.errorText}>{props.touched.mobile_number && props.errors.mobile_number}</Text>

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