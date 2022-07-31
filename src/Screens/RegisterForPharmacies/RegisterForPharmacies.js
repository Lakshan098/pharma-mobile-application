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
                <Text style={styles.header}>Register for pharmacies</Text>
                <Text style={styles.description}>Here you have to register for pharmacies which are you hoping to get orders.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={globalStyles.doneButton}>
                    <Text style={globalStyles.doneButtonText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={globalStyles.cancelButton}>
                    <Text style={globalStyles.doneButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchbarContainer}>
                    <SearchBar
                        placeholder="Search pharmacy"
                    />
                </View>
                <View style={styles.locationIconContainer}>
                    <Icon style={styles.mapMarker} name="map-marker" size={23} color="#fff" />
                </View>
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
    searchContainer: {
        marginRight: 35,
        marginLeft: 35,
        height: 100,
        backgroundColor: '#0F587D',
        borderRadius: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
    },

    locationIconContainer: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#32BBC3',
        borderRadius: 10,
        height: 40,
        marginRight: 15,
    },

    searchbarContainer: {
        justifyContent: 'center',
        width: 300,
    },

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
        paddingBottom:25,
        paddingTop:25,
    },

    header: {
        fontSize: 25,
        fontFamily: 'Raleway-ExtraBold',
    },
    description: {
        fontSize: 15,
        fontFamily: 'Raleway-Regular',
    },

    buttonContainer: {
        display:'flex',
        flexDirection:'row',
        marginLeft:25,
    }

})