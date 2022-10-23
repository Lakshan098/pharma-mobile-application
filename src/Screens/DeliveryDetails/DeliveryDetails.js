import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../Components/Navbar/DeliveryNavbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';

export default function DeliveryDashboard({navigation}) {
    return (
        <View style={globalStyles.fullPage}>

            <Image
                style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'contain'
                    
                }}
                source={require('../../Assets/Images/completed_orders.png')}
            />

            <View style={styles.detailContainer}>
                <Text style={styles.header}>Delivery Details</Text>
                <Text style={styles.content}>
                    <Text style={styles.orderContentTitle}>From:</Text>{'\n'}
                    Name: {navigation.getParam('pharmacy')}{'\n'}
                    Address: {navigation.getParam('pAddress')}{'\n'}
                    Telephone: {navigation.getParam('pTelephone')}
                </Text>

                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />

                <Text style={styles.content}>
                    <Text style={styles.orderContentTitle}>To:</Text>{'\n'}
                    Name: {navigation.getParam('customer')}{'\n'}
                    Address: {navigation.getParam('cAddress')}{'\n'}
                    Telephone: {navigation.getParam('cTelephone')}
                </Text>

                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />

                <Text style={styles.content}>
                    <Text style={styles.orderContentTitle}>Income: :</Text>{navigation.getParam('fee')}
                </Text>

            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        backgroundColor: '#e7e7e7',
        marginTop:10,
        marginLeft:35,
        marginRight:35,
        borderRadius:10,
        padding:10,
        marginBottom:80,
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
        lineHeight:25,
    },

    orderContentTitle: {
        fontFamily: 'Raleway-ExtraBold',
    },
})