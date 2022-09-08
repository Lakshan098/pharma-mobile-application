import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DeliveryDashboard({ navigation }) {
    return (
        <View style={globalStyles.fullPage}>
            <Navbar />
            <ScrollView style={styles.maincontainer}>  
            <Image
                style={{
                    height: 250,
                    width: null,
                }}
                source={require('../../Assets/Images/completed_orders.png')}
            />
                <View style={globalStyles.boxContainer}>
                    <Text style={styles.header}>Completed Orders</Text>
                    <View style={styles.ordersList}>
                        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                            <View style={styles.orders}>
                                <Text style={styles.orderId}>Order ID: 1</Text>
                                <Text style={styles.orderContent}>
                                    <Text style={styles.orderContentTitle}>From:</Text> Lanka Pharmacy{'\n'}
                                    <Text style={styles.orderContentTitle}>To:</Text> Lakshan Mihiranga{'\n'}
                                    <Text style={styles.orderContentTitle}>Address:</Text> No.75, Tangalle Rd, Beliatta
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                            <View style={styles.orders}>
                                <Text style={styles.orderId}>Order ID: 2</Text>
                                <Text style={styles.orderContent}>
                                    <Text style={styles.orderContentTitle}>From:</Text> Suwasana Pharmacy{'\n'}
                                    <Text style={styles.orderContentTitle}>To:</Text> Manuka Dewanarayana{'\n'}
                                    <Text style={styles.orderContentTitle}>Address:</Text> No.175, Tangalle Rd, Matara
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                            <View style={styles.orders}>
                                <Text style={styles.orderId}>Order ID: 3</Text>
                                <Text style={styles.orderContent}>
                                    <Text style={styles.orderContentTitle}>From:</Text> Chandana Pharmacy{'\n'}
                                    <Text style={styles.orderContentTitle}>To:</Text> Navod Wimalaweera{'\n'}
                                    <Text style={styles.orderContentTitle}>Address:</Text> No.33, Beliatta Rd, Dickwella
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                            <View style={styles.orders}>
                                <Text style={styles.orderId}>Order ID: 4</Text>
                                <Text style={styles.orderContent}>
                                    <Text style={styles.orderContentTitle}>From:</Text> Southern Pharmacy{'\n'}
                                    <Text style={styles.orderContentTitle}>To:</Text> Sahan Dilshan{'\n'}
                                    <Text style={styles.orderContentTitle}>Address:</Text> No.20, Tangalle Rd, Kudawella
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        fontFamily: 'Raleway-ExtraBold',
    },

    orders: {
        backgroundColor: '#e7e7e7',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
    },

    orderId: {
        textAlign: 'center',
        fontFamily: 'Raleway-Regular',
    },

    orderContent: {
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: 'Raleway-SemiBold',
        fontSize: 16,
        lineHeight: 30,
    },

    orderContentTitle: {
        fontFamily: 'Raleway-ExtraBold',
    },

    maincontainer:{
        marginBottom: 40,
    },

})