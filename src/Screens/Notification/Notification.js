import React,{useState} from 'react';
import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView,Modal,ImageBackground} from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import ActorSelectRadioButton from '../../Components/ActorSelectRadioButton/ActorSelectRadioButton';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../Components/Footer/CustomerFooter';

export default function CustomerProfile({navigation}) {

    return(
        <View style={globalStyles.fullPage} >
            <ScrollView style={styles.maincontainer}>
            </ScrollView>
        </View>

    )
}
