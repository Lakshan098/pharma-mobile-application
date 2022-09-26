import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/CustomerFooter';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import client from '../../Api/client';


export default function OngoingOrders({ navigation }) {
    const uid = window.loggedUserId;
    const [orderStatus, setStatus] = useState('Delivery');

    useEffect(() => {
        console.log(uid)
        client.post('/Customer/getOrdersByUid', { uid }).then((response) => {
            console.log(response.data);
        })

    }, []);

    function statusRendering() {
        if (orderStatus == 'Processing') {
            return (
                <View style={{ height: 30, width: 100, backgroundColor: '#32BBC3', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text>Procesing</Text></View>
            )
        }
        else {
            return (
                <View style={{ height: 30, width: 100, backgroundColor: '#4df096', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text>Delivery</Text></View>
            )
        }
    }

    const orderItems = ({ item }) => (
        <TouchableOpacity >
            <View style={styles.orders}>
                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: 4 }}>
                    <Text style={styles.orderId}>Order ID: {item.order_id}</Text>
                    <Text style={styles.orderId}>{item.time_stamp}</Text>
                </View>

                <Text style={styles.orderContent}>
                    <Text style={styles.orderContentTitle}>Pharmacy:</Text> {item.pharmacy_name}{'\n'}
                    <Text style={styles.orderContentTitle}>Pharmacy telephone:</Text> {item.pharmacy_telephone}{'\n'}
                    {
                        (item.price != NULL) ?
                            <Text style={styles.orderContentTitle}>Price:</Text> : null
                                (item.price != NULL) ? item.price : null

                    }

                    {"\n"}<View style={{ flexDirection: 'row', display: 'flex', marginHorizontal: 10, marginTop: 10 }} >
                        <Text style={styles.orderContentTitle}>Status: </Text>
                        {
                            statusRendering()
                        }
                    </View>{'\n'}
                    {/* <Text style={{ fontFamily: 'Raleway-ExtraBold',color: 'red'}}>Please wait for the feedback report..!</Text>  */}
                </Text>
                {
                    (item.feedback_report != null) ?
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }} >
                            <TouchableOpacity
                                style={styles.feedbackbuttonbutton}>
                                <Text style={globalStyles.buttonText}>View feedback report</Text>
                            </TouchableOpacity>

                        </View> : null
                }
                {/* <View style={{flexDirection: 'row',display:'flex',marginVertical:10,justifyContent:'space-evenly'}}>
                <TouchableOpacity
                    style={styles.acceptbutton}>
                    <Text style={globalStyles.buttonText}>Accept</Text>
                </TouchableOpacity>   
                <TouchableOpacity
                    style={styles.rejectbutton}>
                    <Text style={globalStyles.buttonText}>Reject</Text>
                </TouchableOpacity> 
            </View> */}
                {
                    (item.delivery_agent_id != null) ?
                        <View>
                            <View
                                style={{
                                    borderBottomColor: '#B2BEB5',
                                    borderBottomWidth: 1,
                                    width: '96%',
                                    marginHorizontal: 8,
                                    marginVertical: 10,

                                }}
                            />

                            <View style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 16, fontFamily: 'Raleway-ExtraBold', }}>Delivery Agent Details</Text></View>
                            <View style={styles.profilepicupdatecontainer}>
                                <View style={styles.profilepiccontainer}>
                                    <Image source={require('../../Assets/Images/login.png')} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 100 }} />
                                </View>
                            </View>
                            <Text style={styles.orderContent}>
                                <Text style={styles.orderContentTitle}>Agent:</Text>  Lakshan Mihiranga{'\n'}
                                <Text style={styles.orderContentTitle}>Telephone:</Text>  0703414038{'\n'}
                                <Text style={styles.orderContentTitle}>Delivery Fee:</Text>  LKR 2400{'\n'}
                                <Text style={styles.orderContentTitle}>Estimated time:</Text>  20 minutes{'\n'}
                            </Text>
                        </View> : null
                }
            </View>


        </TouchableOpacity>
    )
    return (
        <View style={globalStyles.fullPage}>
            <Navbar />
            <ScrollView>
                <View style={globalStyles.boxContainer}>
                    <Text style={styles.header}>Ongoing Orders</Text>
                    <View style={styles.ordersContainer}>
                        <TouchableOpacity >
                            <View style={styles.orders}>
                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: 4 }}>
                                    <Text style={styles.orderId}>Order ID: 00001</Text>
                                    <Text style={styles.orderId}>22 July 2022 9:41 am</Text>
                                </View>

                                <Text style={styles.orderContent}>
                                    <Text style={styles.orderContentTitle}>Pharmacy:</Text> Lanka Pharmacy{'\n'}
                                    <Text style={styles.orderContentTitle}>Pharmacy telephone:</Text> 0703414038{'\n'}
                                    <Text style={styles.orderContentTitle}>Price:</Text> LKR 2400{'\n'}
                                    <View style={{ flexDirection: 'row', display: 'flex', marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style={styles.orderContentTitle}>Status: </Text>
                                        {
                                            statusRendering()
                                        }
                                    </View>{'\n'}
                                    {/* <Text style={{ fontFamily: 'Raleway-ExtraBold',color: 'red'}}>Please wait for the feedback report..!</Text>  */}
                                </Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }} >
                                    <TouchableOpacity
                                        style={styles.feedbackbuttonbutton}>
                                        <Text style={globalStyles.buttonText}>View feedback report</Text>
                                    </TouchableOpacity>

                                </View>
                                {/* <View style={{flexDirection: 'row',display:'flex',marginVertical:10,justifyContent:'space-evenly'}}>
                                    <TouchableOpacity
                                        style={styles.acceptbutton}>
                                        <Text style={globalStyles.buttonText}>Accept</Text>
                                    </TouchableOpacity>   
                                    <TouchableOpacity
                                        style={styles.rejectbutton}>
                                        <Text style={globalStyles.buttonText}>Reject</Text>
                                    </TouchableOpacity> 
                                </View> */}

                                <View
                                    style={{
                                        borderBottomColor: '#B2BEB5',
                                        borderBottomWidth: 1,
                                        width: '96%',
                                        marginHorizontal: 8,
                                        marginVertical: 10,

                                    }}
                                />

                                <View style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 16, fontFamily: 'Raleway-ExtraBold', }}>Delivery Agent Details</Text></View>
                                <View style={styles.profilepicupdatecontainer}>
                                    <View style={styles.profilepiccontainer}>
                                        <Image source={require('../../Assets/Images/login.png')} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 100 }} />
                                    </View>
                                </View>
                                <Text style={styles.orderContent}>
                                    <Text style={styles.orderContentTitle}>Agent:</Text>  Lakshan Mihiranga{'\n'}
                                    <Text style={styles.orderContentTitle}>Telephone:</Text>  0703414038{'\n'}
                                    <Text style={styles.orderContentTitle}>Delivery Fee:</Text>  LKR 2400{'\n'}
                                    <Text style={styles.orderContentTitle}>Estimated time:</Text>  20 minutes{'\n'}
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
        padding: 5
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

    ordersContainer: {
        marginBottom: 30,
    },
    feedbackbuttonbutton: {
        padding: 5,
        width: 210,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8,
        backgroundColor: '#32BBC3',
    },
    acceptbutton: {
        padding: 5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 8,
        backgroundColor: '#0ce86e',
    },
    rejectbutton: {
        padding: 5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 8,
        backgroundColor: 'red',
    },
    profilepiccontainer: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: 'ash'
    },
    profilepicupdatecontainer: {
        paddingHorizontal: 15,
        marginVertical: 10
    },



})