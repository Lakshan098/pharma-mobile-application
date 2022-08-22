import { View, Image, StyleSheet, ImageBackground, Text, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import Footer from '../../Components/Footer/CustomerFooter';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import React, { useState, useEffect, useRef } from 'react';
import { globalStyles } from '../../../Styles/Global';
import { Formik } from 'formik';
import { RadioButton, Checkbox } from 'react-native-paper';
import * as react from 'react';
import {
    actions,
    RichEditor,
    RichToolbar,
} from "react-native-pell-rich-editor";




export default function Portal({ navigation }) {

    const [prescription, setValue] = React.useState('');
    const [delivery, askDelivery] = React.useState('');
    const [diabetis, checkdiabetis] = useState(false);
    const [high_bloodpressure, checkBloodpreassure] = useState(false);
    const [gastritis, checkGastritis] = useState(false);
    const [heart_attack, checkHeart] = useState(false);

    const richText = useRef();

    const [descHTML, setDescHTML] = useState("");
    const [showDescError, setShowDescError] = useState(false);

    const richTextHandle = (descriptionText) => {
        if (descriptionText) {
            setShowDescError(false);
            setDescHTML(descriptionText);
        } else {
            setShowDescError(true);
            setDescHTML("");
        }
    };

    const submitContentHandle = () => {
        const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
        const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

        if (replaceWhiteSpace.length <= 0) {
            setShowDescError(true);
        } else {
            // send data to your server!
        }
    };


    return (
        <View style={globalStyles.fullPage} >
            <ScrollView style={styles.maincontainer}>
                <ImageBackground
                    style={styles.coverImage}
                    imageStyle={{ borderRadius: 10 }}
                    source={require('../../Assets/Images/pharmacy1.png')}
                >

                    <TouchableHighlight style={styles.darkness}>
                        <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>Lanka Pharmacy</Text>{'\n'}Colombo 07{'\n'}9.00am - 8.00pm</Text>
                    </TouchableHighlight>
                </ImageBackground>
                <Formik
                    initialValues={{ age: '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                    }}
                >
                    {(props) => (
                        <View style={styles.formcontainer}>
                            <View style={styles.datacontainer}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Do you have prescription ?</Text>
                                <RadioButton.Group onValueChange={value => setValue(value)} value={prescription} style={{ flexDirection: 'row' }}>
                                    <RadioButton.Item label="Yes" value="yes" />
                                    <RadioButton.Item label="No" value="no" />
                                </RadioButton.Group>
                            </View>
                            <View style={styles.datacontainer}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 6 }}> Age</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Enter age'
                                    keyboardType='numeric'
                                    onChangeText={props.handleChange('age')}
                                    value={props.values.age}
                                />
                            </View>
                            <View style={styles.datacontainer}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 30 }}> chronic diseases ?</Text>

                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>Diabetis</Text>
                                    <Checkbox
                                        value={diabetis}
                                        onValueChange={checkdiabetis}
                                        style={styles.checkbox}
                                    />

                                </View>
                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>High Blood preasure</Text>
                                    <Checkbox
                                        value={high_bloodpressure}
                                        onValueChange={vvalue => checkBloodpreassure(value)}
                                        style={styles.checkbox}
                                        color='red'
                                    />
                                </View>
                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>Gastritis</Text>
                                    <Checkbox
                                        value={gastritis}
                                        onValueChange={checkGastritis}
                                        style={styles.checkbox}
                                    />

                                </View>
                                <View style={styles.checkboxContainer}>
                                    <Text style={styles.label}>Heart attack</Text>
                                    <Checkbox
                                        value={heart_attack}
                                        onValueChange={checkHeart}
                                        style={styles.checkbox}
                                    />
                                </View>

                                <View style={styles.datacontainer}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 30 }}> Do you need delivery ?</Text>
                                    <View style={styles.richTextContainer}>
                                        <RichEditor
                                            ref={richText}
                                            onChange={richTextHandle}
                                            placeholder="Write your cool content here :)"
                                            androidHardwareAccelerationDisabled={true}
                                            style={styles.richTextEditorStyle}
                                            initialHeight={250}
                                        />
                                        <RichToolbar
                                            editor={richText}
                                            selectedIconTint="#873c1e"
                                            iconTint="#312921"
                                            actions={[
                                                actions.insertImage,
                                                actions.setBold,
                                                actions.setItalic,
                                                actions.insertBulletsList,
                                                actions.insertOrderedList,
                                                actions.insertLink,
                                                actions.setStrikethrough,
                                                actions.setUnderline,
                                            ]}
                                            style={styles.richTextToolbarStyle}
                                        />

                                    </View>
                                    <TouchableOpacity
                                        style={styles.saveButtonStyle}
                                        onPress={submitContentHandle}>
                                        <Text style={styles.textButtonStyle}>Save</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={styles.datacontainer}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}> Do you need delivery ?</Text>
                                    <RadioButton.Group onValueChange={value => askDelivery(value)} value={delivery} style={{ flexDirection: 'row' }}>
                                        <RadioButton.Item label="Yes" value="yes" />
                                        <RadioButton.Item label="No" value="no" />
                                    </RadioButton.Group>
                                </View>

                                <View style={styles.datacontainer}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginVertical: 20 }}> Give destination</Text>
                                    <MapView style={styles.map}
                                    region = {{
                                        latitude: 6.9010964999999995,
                                        longitude: 79.86043452816955,
                                        latitudeDelta: 0.115,
                                        longitudeDelta: 0.1121,
                                    }} 
                                    ></MapView>
                                   
                                </View>
                                <TouchableOpacity
                                    onPress={props.handleSubmit}
                                    style={globalStyles.submitButton}>
                                    <Text style={globalStyles.buttonText}>Confirm</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    )}
                </Formik>


            </ScrollView>

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
     mapcontainer:{
         justifyContent: 'center',
         alignItems: 'center',
         marginHorizontal: 8,
         marginBottom: 8,
     },

})