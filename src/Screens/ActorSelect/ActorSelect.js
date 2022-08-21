import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput, TouchableOpacity, ScrollView,Pressable } from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import ActorSelectRadioButton from '../../Components/ActorSelectRadioButton/ActorSelectRadioButton';
import CustomerSignup from '../Signup/Signup';
import { Actions } from 'react-native-router-flux';



export default function ActorSelect({ navigation }) {

  const actors = [
    { value: 'Customer', url: require('../../Assets/Images/undraw_Add_notes_re_ln36.png') },
    { value: 'Delivery agent', url: require('../../Assets/Images/undraw_Delivery_address_re_cjca.png') },
  ];

  const [option, setOption] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={globalStyles.fullPage}>

        <Image source={require('../../Assets/Images/login.png')} />

        <Text style={globalStyles.header}>Create an account</Text>

        <View style={globalStyles.container}>

          <ActorSelectRadioButton data={actors} onSelect={(value) => setOption(value)} />

          <TouchableOpacity
            onPress={() => {navigation.navigate('CustomerSignup',{option})}}
            style={globalStyles.submitButton}>
            <Text style={globalStyles.buttonText}>Get Started</Text>
          </TouchableOpacity>

          <View style={styles.options}>
            <Text style={styles.haveAccount}>Have an account? </Text><Pressable  onPress={() => navigation.navigate('Login')} style={{marginLeft: 8}} ><Text style={styles.signin}>Sign-in</Text></Pressable>
          </View>

        </View>

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

