import React, { useState, useCallback, useEffect } from 'react';
import { Keyboard, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ActivityIndicator, TextInput, TouchableOpacity, ScrollView, Modal, ImageBackground } from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import ActorSelectRadioButton from '../../Components/ActorSelectRadioButton/ActorSelectRadioButton';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomerFooter from '../../Components/Footer/CustomerFooter';
import DeliveryFooter from '../../Components/Footer/DeliveryFooter';
import client from '../../Api/client';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

export default function CustomerProfile({ navigation }) {

    const uid = window.loggedUserId;
    const user_type = window.loggedUserType;
    const [usernameEditVisiblity, setUsernameEditVisible] = useState(false);
    const [telephoneEditVisiblity, setTelephoneEditVisible] = useState(false);
    const [emailEditVisiblity, setEmailEditVisible] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmedMessage, setpasswordConfirmedMessage] = useState("");
    const [newpassword, setCurrentPassword] = useState("");

    const [data, setData] = useState(null);
    const [isResponsed, setResponse] = useState(false);
    const [username, setUsername] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [email, setEmail] = useState("");

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 21],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        const localUri = result.uri;
        const filename = localUri.split('/').pop();
        console.log(filename);

        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        // Upload the image using the fetch and FormData APIs
        const formData = new FormData();
        // Assume "photo" is the name of the form field the server expects
        formData.append('profile', { uri: image, name: filename , type: 'image/jpg' ,user_type: user_type});

        client.post('/UploadFile/UploadProfilePhoto', formData, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        });

    };

    useEffect(() => {
        if (user_type == "customer") {
            client.post('/Customer/GetDetails', { uid }).then((response) => {
                setData([...response.data]);
                setUsername(response.data[0].username);
                setContactNumber(response.data[0].contact_number);
                setEmail(response.data[0].email);
            })
        } else if (user_type == "delivery_agent") {
            client.post('/DeliveryAgent/GetDetails', { uid }).then((response) => {
                setData([...response.data]);
                setUsername(response.data[0].username);
                setContactNumber(response.data[0].contact_number);
                setEmail(response.data[0].email);
            })
        }
    }, []);

    if (data == null) return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" />
        </View>
    )
    return (

        <View style={globalStyles.fullPage}>
            <ScrollView >
                <View style={styles.Detailsmaincontainer}>
                    <View style={styles.profilepicupdatecontainer}>
                        <View style={styles.profilepiccontainer}>
                            <Image source={{uri: image}} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 100 }} />
                        </View>
                        <TouchableOpacity
                            onPress={pickImage}
                            style={{ padding: 10, width: '15%', justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: '#32BBC3', right: 0, position: 'relative' }}>
                            <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker} name="pencil" size={22} color="#fff" /></Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.detailcontainer}>
                        <View style={{ paddingHorizontal: 25 }}>
                            <Text><Icon name="user" size={22} color="#2e2e1f" />  Username</Text>
                        </View>
                        <View style={styles.inputContainer}>

                            <View style={styles.input}><Text>{username}</Text></View>

                            <TouchableOpacity
                                onPress={() => { setUsernameEditVisible(!usernameEditVisiblity) }}
                                style={styles.editbutton}>
                                <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker} name="pencil" size={22} color="#fff" /></Text>
                            </TouchableOpacity>

                        </View>
                        <Formik
                            initialValues={{ username: '' }}
                            validationSchema={
                                yup.object().shape({
                                    username: yup.string().required('Please enter your Name'),
                                })
                            }
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                                client.post('/User/updateUsername', { ...values, uid, user_type }).then((response) => {
                                    setUsernameEditVisible(!usernameEditVisiblity);
                                    if (user_type == "customer") {
                                        client.post('/Customer/GetDetails', { uid }).then((response) => {
                                            setData([...response.data]);
                                            setUsername(response.data[0].username);
                                            setContactNumber(response.data[0].contact_number);
                                            setEmail(response.data[0].email);

                                        })
                                    } else if (user_type == "delivery_agent") {
                                        client.post('/DeliveryAgent/GetDetails', { uid }).then((response) => {
                                            setData([...response.data]);
                                            setUsername(response.data[0].username);
                                            setContactNumber(response.data[0].contact_number);
                                            setEmail(response.data[0].email);

                                        })
                                    }

                                });

                            }}
                        >
                            {(props) => (
                                <Modal visible={usernameEditVisiblity}
                                    transparent={true}

                                >
                                    <View style={{ backgroundColor: '#000000aa', flex: 1 }}>

                                        <View style={{ backgroundColor: '#ffffff', height: '40%', padding: 20, borderRadius: 10, alignSelf: 'center', width: '80%', margin: 50 }}>
                                            <View style={{ justifyContent: 'flex-end', width: '100%', alignItems: 'flex-end', marginBottom: 30 }}>
                                                <TouchableOpacity onPress={() => { setUsernameEditVisible(!usernameEditVisiblity) }}>
                                                    <Icon name="close" size={22} color="red" />
                                                </TouchableOpacity>
                                            </View>
                                            <TextInput
                                                style={globalStyles.input}
                                                placeholder='Enter new username'
                                                onChangeText={props.handleChange('username')}
                                                value={props.values.username}
                                            />
                                            <Text style={globalStyles.errorText}>{props.touched.username && props.errors.username}</Text>
                                            <TouchableOpacity
                                                onPress={props.handleSubmit}
                                                style={globalStyles.submitButton}>
                                                <Text style={globalStyles.buttonText}>Confirm</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </Modal>
                            )}
                        </Formik>

                    </View>

                    <View style={styles.detailcontainer}>
                        <View style={{ paddingHorizontal: 25 }}>
                            <Text><Icon name="phone" size={22} color="#2e2e1f" />  Telephone</Text>
                        </View>
                        <View style={styles.inputContainer}>

                            <View style={styles.input}><Text>{contact_number}</Text></View>

                            <TouchableOpacity
                                onPress={() => { setTelephoneEditVisible(!telephoneEditVisiblity) }}
                                style={styles.editbutton}>
                                <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker} name="pencil" size={22} color="#fff" /></Text>
                            </TouchableOpacity>

                        </View>

                        <Formik
                            initialValues={{ contact_number: '' }}
                            validationSchema={
                                yup.object().shape({
                                    contact_number: yup.string().required('Please enter you Mobile Number').min(10, 'Enter at least 10 digit long number'),
                                })
                            }
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                                client.post('/User/updateTelephone', { ...values, uid, user_type }).then((response) => {
                                    setTelephoneEditVisible(!telephoneEditVisiblity);
                                    if (user_type == "customer") {
                                        client.post('/Customer/GetDetails', { uid }).then((response) => {
                                            setData([...response.data]);
                                            setUsername(response.data[0].username);
                                            setContactNumber(response.data[0].contact_number);
                                            setEmail(response.data[0].email);

                                        })
                                    } else if (user_type == "delivery_agent") {
                                        client.post('/DeliveryAgent/GetDetails', { uid }).then((response) => {
                                            setData([...response.data]);
                                            setUsername(response.data[0].username);
                                            setContactNumber(response.data[0].contact_number);
                                            setEmail(response.data[0].email);

                                        })
                                    }
                                });
                            }}
                        >
                            {(props) => (
                                <Modal
                                    transparent={true}
                                    visible={telephoneEditVisiblity}
                                >
                                    <View style={{ backgroundColor: '#000000aa', flex: 1 }}>

                                        <View style={{ backgroundColor: '#ffffff', height: '40%', padding: 20, borderRadius: 10, alignSelf: 'center', width: '80%', margin: 50 }}>
                                            <View style={{ justifyContent: 'flex-end', width: '100%', alignItems: 'flex-end', marginBottom: 30 }}>
                                                <TouchableOpacity onPress={() => { setTelephoneEditVisible(!telephoneEditVisiblity) }}>
                                                    <Icon name="close" size={22} color="red" />
                                                </TouchableOpacity>
                                            </View>
                                            <TextInput
                                                style={globalStyles.input}
                                                placeholder='Enter new telephone'
                                                keyboardType='numeric'
                                                onChangeText={props.handleChange('contact_number')}
                                                value={props.values.contact_number}
                                            />
                                            <Text style={globalStyles.errorText}>{props.touched.contact_number && props.errors.contact_number}</Text>
                                            <TouchableOpacity
                                                onPress={props.handleSubmit}
                                                style={globalStyles.submitButton}>
                                                <Text style={globalStyles.buttonText}>Confirm</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </Modal>

                            )}
                        </Formik>
                    </View>


                    <View style={styles.detailcontainer}>
                        <View style={{ paddingHorizontal: 25 }}>
                            <Text><Icon name="envelope" size={22} color="#2e2e1f" />  Email</Text>
                        </View>
                        <View style={styles.inputContainer}>

                            <View style={styles.input}><Text>{email}</Text></View>

                            <TouchableOpacity
                                onPress={() => { setEmailEditVisible(!emailEditVisiblity); }}
                                style={styles.editbutton}>
                                <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker} name="pencil" size={22} color="#fff" /></Text>
                            </TouchableOpacity>

                        </View>
                        <Formik
                            initialValues={{ email: '' }}
                            validationSchema={
                                yup.object().shape({
                                    email: yup.string().required('Please enter Email').email('Please enter valid email'),
                                })
                            }
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                                client.post('/User/updateEmail', { ...values, uid, user_type }).then((response) => {
                                    if (response.data.error) {
                                        setEmailError("Email already taken...!");
                                    }
                                    else {
                                        setEmailEditVisible(!emailEditVisiblity);
                                        setEmailError(" ");
                                        if (user_type == "customer") {
                                            client.post('/Customer/GetDetails', { uid }).then((response) => {
                                                setData([...response.data]);
                                                setUsername(response.data[0].username);
                                                setContactNumber(response.data[0].contact_number);
                                                setEmail(response.data[0].email);

                                            })
                                        } else if (user_type == "delivery_agent") {
                                            client.post('/DeliveryAgent/GetDetails', { uid }).then((response) => {
                                                setData([...response.data]);
                                                setUsername(response.data[0].username);
                                                setContactNumber(response.data[0].contact_number);
                                                setEmail(response.data[0].email);

                                            })
                                        }
                                    }

                                });
                            }}
                        >
                            {(props) => (
                                <Modal
                                    transparent={true}
                                    visible={emailEditVisiblity}
                                >
                                    <View style={{ backgroundColor: '#000000aa', flex: 1 }}>

                                        <View style={{ backgroundColor: '#ffffff', height: '40%', padding: 20, borderRadius: 10, alignSelf: 'center', width: '80%', margin: 50 }}>
                                            <View style={{ justifyContent: 'flex-end', width: '100%', alignItems: 'flex-end', marginBottom: 30 }}>
                                                <TouchableOpacity onPress={() => {
                                                    setEmailError("");
                                                    setEmailEditVisible(!emailEditVisiblity);
                                                }}>
                                                    <Icon name="close" size={22} color="red" />
                                                </TouchableOpacity>
                                            </View>
                                            <TextInput
                                                style={(emailError == "") ? globalStyles.input : globalStyles.errorInput}
                                                placeholder='Enter new email'
                                                onChangeText={(e) => {
                                                    props.handleChange("email")(e);
                                                    setEmailError("");
                                                }}
                                                value={props.values.email}
                                            />
                                            <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                                            <Text style={globalStyles.errorText}>{emailError}</Text>
                                            <TouchableOpacity
                                                onPress={props.handleSubmit}
                                                style={globalStyles.submitButton}>
                                                <Text style={globalStyles.buttonText}>Confirm</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </Modal>
                            )}
                        </Formik>

                    </View>


                    <View
                        style={{
                            borderBottomColor: '#B2BEB5',
                            borderBottomWidth: 1,
                            width: '96%',
                            marginHorizontal: 8,
                            marginVertical: 20,

                        }}
                    />
                    <View style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 16, fontWeight: '700' }}>Change password</Text></View>
                    <Formik
                        initialValues={{ current_password: '', new_password: '' }}
                        validationSchema={
                            yup.object().shape({
                                new_password: yup
                                    .string()
                                    .required('Please Enter your password')
                                    .matches(
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                                    ),
                            })
                        }
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                            client.post('/User/updatePassword', { ...values, uid }).then((response) => {
                                if (response.data.error) {
                                    setPasswordError("Current password is wrong...!");
                                    setpasswordConfirmedMessage("");
                                }
                                else {
                                    setPasswordError("");
                                    setpasswordConfirmedMessage("");
                                }

                            });
                        }}
                    >
                        {(props) => (
                            <View style={globalStyles.container}>

                                <Text>Current password</Text>

                                <TextInput
                                    secureTextEntry
                                    style={globalStyles.input}
                                    placeholder='Current password'
                                    onChangeText={(e) => {
                                        props.handleChange("current_password")(e);
                                        setPasswordError("");
                                    }}
                                    value={props.values.current_password}
                                />


                                <Text>New password</Text>

                                <TextInput
                                    secureTextEntry
                                    style={globalStyles.input}
                                    placeholder='New Password'
                                    onChangeText={(e) => {
                                        props.handleChange("new_password")(e);
                                        setCurrentPassword(e);
                                    }}
                                    value={props.values.new_password}
                                />
                                <Text style={globalStyles.errorText}>{props.touched.new_password && props.errors.new_password}</Text>
                                <Text>Confirm Password</Text>

                                <TextInput
                                    secureTextEntry
                                    style={globalStyles.input}
                                    placeholder='Confirm Password'
                                    onChangeText={(e) => {
                                        props.handleChange("confirm_password")(e);
                                        if (newpassword == e) {
                                            setPasswordError("");
                                            setpasswordConfirmedMessage("Confirm password matched...!");
                                        }
                                        else {
                                            setPasswordError("Still password not matched with confirm password...!");
                                            setpasswordConfirmedMessage("");
                                        }
                                    }}
                                    value={props.values.confirm_password}
                                />
                                <Text style={globalStyles.greenMessage}>{passwordConfirmedMessage}</Text>
                                <Text style={globalStyles.errorText}>{passwordError}</Text>
                                <TouchableOpacity
                                    onPress={props.handleSubmit}
                                    style={globalStyles.submitButton}>
                                    <Text style={globalStyles.buttonText}>Confirm</Text>
                                </TouchableOpacity>

                            </View>
                        )}
                    </Formik>
                </View>


            </ScrollView>
            {
                (user_type == "customer") ?
                    <CustomerFooter></CustomerFooter>
                    :
                    null
            }
            {
                (user_type == "delivery_agent") ?
                    <DeliveryFooter />
                    :
                    null
            }

        </View>


    );
}

const styles = StyleSheet.create({
    profilepiccontainer: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: 'ash',
        marginBottom: -40
    },
    profilepicupdatecontainer: {
        paddingHorizontal: 15,
        marginVertical: 25
    },
    Detailsmaincontainer: {
        paddingVertical: 35,
    },
    editbutton: {
        padding: 10,
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: 8,
        backgroundColor: '#32BBC3',
    },
    inputContainer: {
        paddingHorizontal: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        width: '95%',
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#E7E7E7',
    },
    detailcontainer: {
        flexDirection: 'column',
        marginVertical: 10
    },

});

