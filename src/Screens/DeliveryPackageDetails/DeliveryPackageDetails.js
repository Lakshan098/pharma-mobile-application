import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../Components/Navbar/DeliveryNavbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { ScrollView, Alert } from 'react-native';
import client from '../../Api/client';
import { Actions } from 'react-native-router-flux';

export default function DeliveryDashboard({navigation}) {

    const dataPass = () => {
        console.log("pressed")
        client.post('/DeliveryAgent/CompleteOrder', {
            oid: navigation.getParam('key')
        })
        navigation.goBack()

    }

    const confirmation = () =>
    Alert.alert(
      "Confimation",
      "Are you sure to confirm the order?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK",
            onPress: () => dataPass()}
      ]
    );


    return (
        <View style={globalStyles.fullPage}>
            <Navbar />
            <ScrollView style={styles.maincontainer}>
                <Image
                    style={{
                        alignSelf: 'center'
                    }}
                    source={require('../../Assets/Images/user.png')}
                />

                <View style={styles.detailContainer}>
                    <Text style={styles.header}>Package Details</Text>
                    <Text style={styles.content}>
                        <Text style={styles.orderContentTitle}>From:</Text> {navigation.getParam('pharmacy')}{'\n'}
                        <Text style={styles.orderContentTitle}>To:</Text> {navigation.getParam('customer')}{'\n'}
                        <Text style={styles.orderContentTitle}>Address:</Text> {navigation.getParam('address')}{'\n'}
                        <Text style={styles.orderContentTitle}>Telephone:</Text> {navigation.getParam('telephone')}
                    </Text>
                </View>

                <View style={styles.mapcontainer}>
                    <MapView style={styles.map}
                        region={{
                            latitude: 6.9010964999999995,
                            longitude: 79.86043452816955,
                            latitudeDelta: 0.115,
                            longitudeDelta: 0.1121,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: 6.9010964999999995,
                                longitude: 79.86043452816955,
                            }}
                            title="Lanka pharmacy"
                        >
                            <Image source={require('../../Assets/Images/icons8-location-64.png')}></Image>
                        </Marker>


                    </MapView>
                </View>

                <TouchableOpacity
                onPress={confirmation}
                    style={globalStyles.orderConfirmButton}>
                    <Text style={globalStyles.buttonText}>Complete Order</Text>
                </TouchableOpacity>
            </ScrollView>

            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        backgroundColor: '#e7e7e7',
        marginTop: 10,
        marginLeft: 35,
        marginRight: 35,
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
    map: {
        height: 300,
        width: '85%'
    },

    mapcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 8,
        marginTop:10
    },

    maincontainer:{
        marginBottom: 70,
    },
})