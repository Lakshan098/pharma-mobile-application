import { View, Image, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Navbar from '../../Components/Navbar/DeliveryNavbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';
import { Rating, AirbnbRating } from 'react-native-ratings';
import client from '../../Api/client';

export default function PharmacyDetails({ navigation }) {

    const dataPass = () => {
        console.log("pressed")
        client.post('/DeliveryAgent/RegisterInPharmacy', {
            uid: window.loggedUserId,
            pid: navigation.getParam('key')
        })
        navigation.goBack()

    }

    const confirmation = () =>
        Alert.alert(
            "Confimation",
            "Are you sure to register in this pharmacy?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => dataPass()
                }
            ]
        );


    return (
        <View style={globalStyles.fullPage}>
            <Navbar />
            <Image
                style={{
                    marginTop: 20,
                    alignSelf: 'center',
                }}
                source={require('../../Assets/Images/pharmacy1.png')}
            />

            <View style={styles.detailContainer}>
                <Text style={styles.header}>Pharmacy Details</Text>
                <Text style={styles.content}>
                    <Text style={styles.orderContentTitle}>Name:</Text> {navigation.getParam('name')}{'\n'}
                    <Text style={styles.orderContentTitle}>Address:</Text> {navigation.getParam('address')}{'\n'}
                    <Text style={styles.orderContentTitle}>Telephone: </Text>{navigation.getParam('telephone')}{'\n'}
                    <Text style={styles.orderContentTitle}>Open:</Text> {navigation.getParam('openTime')}{'\n'}
                    <Text style={styles.orderContentTitle}>Rating: </Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={18}
                        startingValue={4}
                        tintColor='#e7e7e7'
                        readonly
                    />
                </Text>

            </View>
            <TouchableOpacity
            onPress={confirmation}
                style={globalStyles.registerButton}>
                <Text style={globalStyles.buttonText}>Register</Text>
            </TouchableOpacity>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        backgroundColor: '#e7e7e7',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        padding: 10,
    },

    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        fontFamily: 'Raleway-ExtraBold',
    },

    content: {
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: 'Raleway-SemiBold',
        fontSize: 16,
        lineHeight: 30,
    },

    orderContentTitle: {
        fontFamily: 'Raleway-ExtraBold',
    },
})