import { View, Image, StyleSheet, ImageBackground, Text, ScrollView, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableHighlight, Platform, Pressable } from 'react-native';
import Footer from '../../Components/Footer/CustomerFooter';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import React, { useState, useEffect, useRef } from 'react';
import { globalStyles } from '../../../Styles/Global';
import { Formik } from 'formik';
import { RadioButton, Checkbox } from 'react-native-paper';
import * as react from 'react';
import { Actions } from 'react-native-router-flux';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import RichTextEditor from '../../Components/RichTextEditor/RichTextEditor'
import * as ImagePicker from 'expo-image-picker';



export default function Portal({ navigation }) {
    const [age, setAge] = useState('');
    const [prescription, setValue] = React.useState('');
    const [delivery, askDelivery] = React.useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [8, 8],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    const expoPushToken = Notifications.getExpoPushTokenAsync();
    console.log(JSON.stringify(expoPushToken));
    return (
        <View style={globalStyles.fullPage} >
            <ScrollView style={styles.maincontainer}>

                <ImageBackground
                    style={styles.coverImage}
                    imageStyle={{ borderRadius: 10 }}
                    source={require('../../Assets/Images/pharmacy1.png')}
                >

                    <TouchableHighlight style={styles.darkness}>
                        <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>{navigation.getParam('name')}</Text>{'\n'}{navigation.getParam('address')}{'\n'}{navigation.getParam('time')}</Text>
                    </TouchableHighlight>
                </ImageBackground>
                <Formik
                    initialValues={{ age: '', isPrescription: prescription, delivery: delivery, user_type: navigation.getParam('option') }}
                    onSubmit={(value,actions) => {
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        <View style={styles.formcontainer}>
                            <View style={styles.datacontainer}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 6 }}> Age of the patient</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Enter age'
                                    keyboardType='numeric'
                                    onChangeText={props.handleChange('age')}
                                    value={props.values.age}
                                />
                            </View>


                            <View style={styles.datacontainer}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Do you have prescription ?</Text>
                                <RadioButton.Group onValueChange={(value) => { setValue(value); setImage(null); }} value={prescription} style={{ flexDirection: 'row' }}>
                                    <RadioButton.Item label="Yes" value="true" />
                                    <RadioButton.Item label="No" value="false" />
                                </RadioButton.Group>
                            </View>


                            {(prescription == "false") ?
                                <View style={styles.datacontainer}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 6 }}> Upload prescription </Text>
                                    <RichTextEditor />
                                </View>
                                :
                                null}
                            {(prescription == "true") ?
                                <View style={styles.datacontainer}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Upload prescription </Text>
                                    <Button title="Pick an image of prescription from your gallary" onPress={pickImage} style={{ marginVertical: 10 }} />
                                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginVertical: 10 }} />}
                                </View>
                                :
                                null
                            }

                            <View style={styles.datacontainer}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', }}> Do you need delivery ?</Text>
                                <RadioButton.Group onValueChange={value => askDelivery(value)} value={delivery} style={{ flexDirection: 'row' }}>
                                    <RadioButton.Item label="Yes" value="true" />
                                    <RadioButton.Item label="No" value="false" />
                                </RadioButton.Group>
                            </View>
                            {(delivery == "true") ?
                                <View style={styles.datacontainer}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 20 }}>Give destination</Text>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Enter address of the destination'
                                        onChangeText={props.handleChange('address')}
                                        value={props.values.address}
                                    />
                                </View>
                                : null}


                            <TouchableOpacity

                                //onPress={Actions.ongoingOrders()}
                                onPress={props.handleSubmit}
                                style={globalStyles.submitButton}>
                                <Text style={globalStyles.buttonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
            <Footer></Footer>
        </View>
    )
}

const styles = StyleSheet.create({

    coverImage: {
        height: 150,
        borderRadius: 10,
        marginBottom: 8,
    },
    darkness: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 150,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
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
    maincontainer: {
        marginBottom: 40,
        marginTop: 20,
        padding: 10
    },
    formcontainer: {
        flex: 1,
        padding: 10,
        marginBottom: 40,
    },
    datacontainer: {
        marginVertical: 10,
        padding: 2,
        flexDirection: 'column',
    },
    checkboxContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    headerStyle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#312921",
        marginBottom: 10,
    },

    htmlBoxStyle: {
        height: 200,
        width: 330,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
    },

    richTextContainer: {
        display: "flex",
        flexDirection: "column-reverse",
        width: "100%",
        marginBottom: 10,
    },

    richTextEditorStyle: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: "#ccaf9b",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        fontSize: 20,
    },

    richTextToolbarStyle: {
        backgroundColor: "#c6c3b3",
        borderColor: "#c6c3b3",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
    },

    errorTextStyle: {
        color: "#FF0000",
        marginBottom: 10,
    },

    saveButtonStyle: {
        backgroundColor: "#c6c3b3",
        borderWidth: 1,
        borderColor: "#c6c3b3",
        borderRadius: 10,
        padding: 10,
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        fontSize: 20,
    },

    textButtonStyle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#312921",
    },
    map: {
        height: 300,
        width: '100%'
    },
    mapcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 8,
    },

})