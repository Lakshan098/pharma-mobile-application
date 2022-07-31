import { View, Image, StyleSheet, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';
import { globalStyles } from '../../../Styles/Global';
import SearchBar from "react-native-dynamic-search-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../Components/Footer/DeliveryFooter';

export default function DeliveryDashboard() {
    return (
        <View style={globalStyles.fullPage}>
            <Navbar />

            <View style={styles.textContainer}>
                <Text style={styles.header}>Registered pharmacies</Text>
            </View>

            <View style={styles.pharmacyContainer}>
                <ScrollView>
                    <ImageBackground
                        style={styles.coverImage}
                        imageStyle={{ borderRadius: 10 }}
                        source={require('../../Assets/Images/pharmacy1.png')}
                    >
                        <View style={styles.darkness} />
                        <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>Lanka pharmacy</Text>{'\n'}Colombo 07{'\n'}open 9.00am-8.00pm</Text>
                    </ImageBackground>

                    <ImageBackground
                        style={styles.coverImage}
                        imageStyle={{ borderRadius: 10 }}
                        source={require('../../Assets/Images/pharmacy1.png')}
                    >
                        <View style={styles.darkness} />
                        <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>Lanka pharmacy</Text>{'\n'}Colombo 07{'\n'}open 9.00am-8.00pm</Text>
                    </ImageBackground>

                    <ImageBackground
                        style={styles.coverImage}
                        imageStyle={{ borderRadius: 10 }}
                        source={require('../../Assets/Images/pharmacy1.png')}
                    >
                        <View style={styles.darkness} />
                        <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>Lanka pharmacy</Text>{'\n'}Colombo 07{'\n'}open 9.00am-8.00pm</Text>
                    </ImageBackground>
                </ScrollView>
            </View>
                <Footer />
        </View>
    )
}

const styles = StyleSheet.create({

    pharmacyContainer: {
        flex: 1,
        padding: 35,
        height: 100,
        marginBottom:40,
    },

    coverImage: {
        height: 100,
        borderRadius: 10,
        marginBottom: 15,
    },

    darkness: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 100,
        borderRadius: 10,
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

    textContainer: {
        paddingLeft:35,
        paddingRight:35,
        paddingTop:15,
    },

    header: {
        fontSize: 25,
        fontFamily: 'Raleway-ExtraBold',
    },

})