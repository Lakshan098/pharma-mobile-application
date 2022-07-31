import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';

export default function DeliveryDashboard() {
    return (
        <View style={globalStyles.fullPage}>
            <Navbar />
            <Image
                style={{
                    alignSelf:'center'
                }}
                source={require('../../Assets/Images/user.png')}
            />

            <View style={styles.detailContainer}>
                <Text style={styles.header}>Package Details</Text>
                <Text style={styles.content}>
                    <Text style={styles.orderContentTitle}>From:</Text> Lanka Pharmacy{'\n'}
                    <Text style={styles.orderContentTitle}>To:</Text> Lakshan Mihiranga{'\n'}
                    <Text style={styles.orderContentTitle}>Address:</Text> No,75, Tangalle Rd, Beliatta
                </Text>

            </View>
            <TouchableOpacity
                style={globalStyles.orderConfirmButton}>
                <Text style={globalStyles.buttonText}>Complete Order</Text>
            </TouchableOpacity>
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
        lineHeight:30,
    },

    orderContentTitle: {
        fontFamily: 'Raleway-ExtraBold',
    },
})