import { View, Image, StyleSheet, Text, ScrollView, FlatList, Pressable, Alert, WebView } from 'react-native';
import Navbar from '../../Components/Navbar/Navbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/CustomerFooter';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import client from '../../Api/client';
import { ActivityIndicator } from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import StartRating from '../../Components/StarRating/StarRating';


export default function OrdersHistory({ navigation }) {
    const uid = window.loggedUserId;
    const [data, setData] = useState(null);
    const orders = [];
    const [orderList, setOrderList] = useState([]);

    const [pharmacydefaultRating, setDefaultRatingforPharmacy] = useState(0);
    const [deliveryagentdefaultRating, setDefaultRatingforDelivery] = useState(0);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star. You can also give the path from local
    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const CustomRatingBar1 = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <Pressable
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRatingforPharmacy(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= pharmacydefaultRating
                                        ? { uri: starImageFilled }
                                        : { uri: starImageCorner }
                                }
                            />
                        </Pressable>
                    );
                })}
            </View>
        );
    };
    const CustomRatingBar2 = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <Pressable
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRatingforDelivery(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= deliveryagentdefaultRating
                                        ? { uri: starImageFilled }
                                        : { uri: starImageCorner }
                                }
                            />
                        </Pressable>
                    );
                })}
            </View>
        );
    };


    useEffect(() => {

        console.log(uid)
        client.post('/Customer/getOrdersByUid', { uid: uid }).then((response) => {

            setOrderList([])
            console.log(response.data);
            response.data.map((object) => {
                if (object.status == "completed") {
                    setOrderList(prevState => [...prevState,
                    {
                        key: object.order_id,
                        customer_id: object.customer_id,
                        pharmacy_id: object.pharmacy_id,
                        delivery_agent_id: object.delivery_agent_id,
                        address: object.address,
                        price: object.price,
                        payment: object.payment,
                        delivery_need: object.delivery_need,
                        delivery_fee: object.delivery_fee,
                        time_stamp: object.time_stamp,
                        status: object.status,
                        customer_approval: object.customer_approval,
                        feedback_report: object.feedback_report,
                        pharmacy_name: object.pharmacy_name,
                        pharmacy_address: object.pharmacy_address,
                        pharmacy_telephone: object.pharmacy_telephone,
                        account_number: object.account_number,
                        delivery_agent_name: object.delivery_agent_name,
                        delivery_agent_telephone: object.delivery_agent_telephone,
                        profile_pic: object.profile_pic
                    }
                    ])
                }
            })

        })

    }, []);



    function statusRendering(orderStatus) {
        if (orderStatus == 'pending') {
            return (
                <View style={{ height: 30, width: 100, backgroundColor: '#32BBC3', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text>Pending</Text></View>
            )
        }
        else if (orderStatus == 'ongoing') {
            return (
                <View style={{ height: 30, width: 100, backgroundColor: '#E8AA42', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text>Processing</Text></View>
            )
        }
        else if (orderStatus == 'delivery') {
            return (
                <View style={{ height: 30, width: 100, backgroundColor: '#4df096', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text>Delivery</Text></View>
            )
        }
        else if (orderStatus == 'completed') {
            return (
                <View style={{ height: 30, width: 100, backgroundColor: '#32BBC3', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}><Text>Completed</Text></View>
            )
        }
    }

    const orderItems = ({ item }) => (

        <View >
            <View style={styles.orders}>
                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: 4 }}>
                    <Text style={styles.orderId}>Order ID: {item.key}</Text>
                    <Text style={styles.orderId}>{item.time_stamp}</Text>
                </View>

                <Text style={styles.orderContent}>
                    <Text style={styles.orderContentTitle}>Pharmacy:</Text> {item.pharmacy_name}{'\n'}
                    <Text style={styles.orderContentTitle}>Pharmacy telephone:</Text> {item.pharmacy_telephone}{'\n'}
                    {
                        (item.price != null) ?
                            <Text style={styles.orderContentTitle}>Price: {item.price}</Text> : ""


                    }
                </Text>
                <View style={{ flexDirection: 'row', display: 'flex', marginHorizontal: 10, marginBottom: 10 }} >
                    <Text style={styles.orderContentTitle}>Status:   </Text>
                    {
                        statusRendering(item.status)
                    }
                </View>

                {
                    (item.feedback_report == null && item.status == "ongoing") ?
                        <View style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}><Text style={{ fontSize: 16, fontFamily: 'Raleway-ExtraBold', }}>Order is processing...!</Text><ActivityIndicator size={'large'}></ActivityIndicator></View> : null
                }

                {
                    (item.feedback_report != null) ?
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }} >
                            <TouchableOpacity
                                onPress={() => OpenAnything.Pdf(item.feedback_report)}
                                style={styles.feedbackbuttonbutton}>
                                <Text style={globalStyles.buttonText}>View feedback report</Text>
                            </TouchableOpacity>

                        </View> : null
                }
                {
                    (item.feedback_report != null && item.payment == 0) ?

                        <View style={{ flexDirection: 'row', display: 'flex', marginVertical: 5, justifyContent: 'space-evenly' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('StripeApp', { order_id: item.key })}
                                style={styles.acceptbutton}>
                                <Text style={globalStyles.buttonText}>Accept</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    client.post('/Customer/orderAcceptance', { order_id: item.key, payment: false, status: false }).then((response) => {

                                    }, [])
                                }}
                                style={styles.rejectbutton}>
                                <Text style={globalStyles.buttonText}>Reject</Text>
                            </TouchableOpacity>
                        </View> : null
                }
                <View style={styles.container}>

                    <Text style={styles.textStyle}>How was your experience with {item.pharmacy_name}</Text>
                    <Text style={styles.textStyleSmall}>Please Rate</Text>
                    {/*View to hold our Stars*/}
                    <CustomRatingBar1 />
                    <Text style={styles.textStyle}>
                        {/*To show the rating selected*/}
                        {pharmacydefaultRating} / {Math.max.apply(null, maxRating)}
                    </Text>
                    <Pressable
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={() => Alert.alert("Rating Successful", "Confirmation",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "OK",
                                    onPress: () => {
                                        client.post('/Customer/ratings', { uid: item.pharmacy_id, rate: pharmacydefaultRating, type: "pharmacy" }).then((response) => {

                                        }, [])
                                    }
                                }
                            ])}>
                        {/*Clicking on button will show the rating as an alert*/}
                        <Text style={styles.buttonTextStyle}>Rate the {item.pharmacy_name}</Text>
                    </Pressable>
                </View>

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
                                    <Image source={{ uri: item.profile_pic }} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 100 }} />
                                </View>
                            </View>
                            <Text style={styles.orderContent}>
                                <Text style={styles.orderContentTitle}>Agent:</Text>  {item.delivery_agent_name}{'\n'}
                                <Text style={styles.orderContentTitle}>Telephone:</Text>  {item.delivery_agent_telephone}{'\n'}
                                <Text style={styles.orderContentTitle}>Delivery Fee:</Text>  {item.delivery_fee}{'\n'}
                            </Text>
                        </View> : null
                }
                {
                    (item.delivery_agent_id == null && item.status == "delivery") ?
                        <View style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}><Text style={{ fontSize: 16, fontFamily: 'Raleway-ExtraBold', }}>Searching for delivery agent...!</Text><ActivityIndicator size={'large'}></ActivityIndicator></View> : null
                }
                {(item.delivery_need == 1) ?


                    <View style={styles.container}>

                        <Text style={styles.textStyle}>How was your experience with {item.delivery_agent_name}</Text>
                        <Text style={styles.textStyleSmall}>Please Rate</Text>
                        {/*View to hold our Stars*/}
                        <CustomRatingBar2 />
                        <Text style={styles.textStyle}>
                            {/*To show the rating selected*/}
                            {deliveryagentdefaultRating} / {Math.max.apply(null, maxRating)}
                        </Text>
                        <Pressable
                            activeOpacity={0.7}
                            style={styles.buttonStyle}
                            onPress={() => Alert.alert("Rating Successful", "Confirmation",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                    },
                                    {
                                        text: "Ok",
                                        onPress: () => {
                                            client.post('/Customer/ratings', { uid: item.delivery_agent_id, rate: deliveryagentdefaultRating, type: "delivery_agent" }).then((response) => {

                                            }, [])
                                        }
                                    }
                                ])}>
                            {/*Clicking on button will show the rating as an alert*/}
                            <Text style={styles.buttonTextStyle}>Rate the {item.delivery_agent_name}</Text>
                        </Pressable>
                    </View> : null
                }
            </View>


        </View>

    )
    return (
        <View style={globalStyles.fullPage}>
            <Navbar />
            <ScrollView nestedScrollEnabled={true}>
                <View style={globalStyles.boxContainer}>
                    <Text style={styles.header}>Orders History</Text>
                    <View style={styles.ordersContainer}>
                        {(orderList != []) ?
                            <FlatList
                                data={orderList}
                                renderItem={orderItems}
                                showsVerticalScrollIndicator={false}
                            /> : null}
                        {/* <TouchableOpacity >
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
                                    </View>{'\n'} */}
                        {/* <Text style={{ fontFamily: 'Raleway-ExtraBold',color: 'red'}}>Please wait for the feedback report..!</Text>  */}
                        {/* </Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }} >
                                    <TouchableOpacity
                                        style={styles.feedbackbuttonbutton}>
                                        <Text style={globalStyles.buttonText}>View feedback report</Text>
                                    </TouchableOpacity>

                                </View> */}
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

                        {/* <View
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


                        </TouchableOpacity> */}

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
        borderRadius: 10,
        margin: 8,
        backgroundColor: '#7DCE13',
    },
    rejectbutton: {
        padding: 5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8,
        backgroundColor: '#EB1D36',
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
    container: {
        height: 200,
        width: '100%',
        padding: 10,
        marginVertical: 20,
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 14,
        color: '#000',
        marginTop: 15,
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    starImageStyle: {
        width: 40,
        height: 40,
    },


})