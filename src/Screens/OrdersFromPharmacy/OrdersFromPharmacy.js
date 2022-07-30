import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function DeliveryDashboard() {
    return (
        <View style={globalStyles.fullPage}>
            <Navbar />

            <View style={styles.pharmacyDetails}>
                <Image
                source={require('../../Assets/Images/pharmacy1.png')} 
                style={styles.pharmacyPic}
                />

            <View>
                <Text style={styles.pharmacyText}><Text style={styles.pharmacyTextHeader}>Lanka pharmacy</Text>{'\n'}Colombo 07{'\n'}open 9.00am-8.00pm{'\n'}Rating: 
                <Rating
                type='star'
                ratingCount={5}
                imageSize={18}
                startingValue={4}
                readonly
                />
                </Text>
            </View>
            </View>

            <View style={styles.orderList}>
                <ScrollView>
                    <View style={styles.packageDetailsContainer}>
                        <Text style={styles.header}>Package Details</Text>
                        <Text style={styles.content}>
                            Name: K.G.L. Mihiranga{'\n'}
                            Address: No.75, Tangalle Rd, Beliatta{'\n'}
                            Telephone: 071-1234567
                        </Text>
                        <Text style={styles.header}>Delivery Details</Text>
                        <Text style={styles.content}>
                            Distance: 10KM{'\n'}
                            Your income: Rs.400
                        </Text>
                        <TouchableOpacity
                            
                            style={globalStyles.orderConfirmButton}>
                            <Text style={globalStyles.buttonText}>Confirm Order</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.packageDetailsContainer}>
                        <Text style={styles.header}>Package Details</Text>
                        <Text style={styles.content}>
                            Name: K.G.L. Mihiranga{'\n'}
                            Address: No.75, Tangalle Rd, Beliatta{'\n'}
                            Telephone: 071-1234567
                        </Text>
                        <Text style={styles.header}>Delivery Details</Text>
                        <Text style={styles.content}>
                            Distance: 10KM{'\n'}
                            Your income: Rs.400
                        </Text>
                        <TouchableOpacity
                            
                            style={globalStyles.orderConfirmButton}>
                            <Text style={globalStyles.buttonText}>Confirm Order</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.packageDetailsContainer}>
                        <Text style={styles.header}>Package Details</Text>
                        <Text style={styles.content}>
                            Name: K.G.L. Mihiranga{'\n'}
                            Address: No.75, Tangalle Rd, Beliatta{'\n'}
                            Telephone: 071-1234567
                        </Text>
                        <Text style={styles.header}>Delivery Details</Text>
                        <Text style={styles.content}>
                            Distance: 10KM{'\n'}
                            Your income: Rs.400
                        </Text>
                        <TouchableOpacity
                            
                            style={globalStyles.orderConfirmButton}>
                            <Text style={globalStyles.buttonText}>Confirm Order</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.packageDetailsContainer}>
                        <Text style={styles.header}>Package Details</Text>
                        <Text style={styles.content}>
                            Name: K.G.L. Mihiranga{'\n'}
                            Address: No.75, Tangalle Rd, Beliatta{'\n'}
                            Telephone: 071-1234567
                        </Text>
                        <Text style={styles.header}>Delivery Details</Text>
                        <Text style={styles.content}>
                            Distance: 10KM{'\n'}
                            Your income: Rs.400
                        </Text>
                        <TouchableOpacity
                            
                            style={globalStyles.orderConfirmButton}>
                            <Text style={globalStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
                <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    orderList: {
        paddingLeft:35,
        paddingRight:35,
    },
    pharmacyPic: {
        width:200,
        height:100,
        borderRadius:10,
    },

    pharmacyDetails: {
        padding:35,
        display:'flex',
        flexDirection:'row',
    },

    pharmacyText: {
        fontWeight: '500',
        paddingLeft:10,
    },
    pharmacyTextHeader: {
        fontSize: 20,
        fontWeight:'500',
        fontFamily: 'Raleway-Bold',
    },

    packageDetailsContainer: {
        backgroundColor: '#E7E7E7',
        borderRadius: 10,
        paddingBottom:20,
        marginBottom:20,
    },

    header: {
        textAlign:'center',
        fontSize:18,
        fontWeight:'600',
        padding:10,
        fontFamily: 'Raleway-Bold',
    },

    content: {
        paddingLeft:10,
        fontSize:16,
        fontFamily: 'Raleway-SemiBold',
    }

})