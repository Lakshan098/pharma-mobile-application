import { View, Image, StyleSheet, ImageBackground, Text, ScrollView,TouchableWithoutFeedback,Keyboard,TouchableHighlight} from 'react-native';
import Footer from '../../Components/Footer/CustomerFooter';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  MapView, { PROVIDER_GOOGLE,Marker,Callout} from 'react-native-maps';
import React,{ useState,useEffect } from 'react';


export default function Portal({navigation}){
    <View style={globalStyles.fullPage} >

        <Navbar navigation={navigation}></Navbar>
        <ScrollView style={styles.maincontainer}>
            <ImageBackground
                style={styles.coverImage}
                imageStyle={{ borderRadius: 10 }}
                source={require('../../Assets/Images/pharmacy1.png')}
            >

                <TouchableHighlight style={styles.darkness}>
                    <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>Lanka Pharmacy</Text>{'\n'}Colombo 07{'\n'}9.00am - 8.00pm</Text>
                </TouchableHighlight>
            
            </ImageBackground>

        </ScrollView>
    </View>
}

const styles = StyleSheet.create({

    coverImage: {
        height: 150,
        borderRadius: 10,
        marginBottom: 15,
    },
    darkness: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 150,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        width:'100%'
    },
    pharmacyDetails: {
        position: 'absolute',
        color: '#fff',
        paddingLeft: 10,
        fontSize: 17,
        fontWeight: '500'
    },
    pharmacyName: {
        fontSize: 30,
        fontWeight: '700',
    },
    maincontainer:{
        marginBottom: 40,
    },
})