import React,{useState} from 'react';
import { Keyboard, StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity,ScrollView,Modal,ImageBackground} from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import ActorSelectRadioButton from '../../Components/ActorSelectRadioButton/ActorSelectRadioButton';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../Components/Footer/CustomerFooter';




export default function CustomerProfile({navigation}) {


  const [usernameEditVisiblity,setUsernameEditVisible] = useState(false)
  const [telephoneEditVisiblity,setTelephoneEditVisible] = useState(false)
  const [emailEditVisiblity,setEmailEditVisible] = useState(false)


  return (
    <View style={globalStyles.fullPage}>
      <ScrollView >
            <View style={styles.Detailsmaincontainer}>
                <View style={styles.profilepicupdatecontainer}>
                    <View style={styles.profilepiccontainer}>
                        <Image source={require('../../Assets/Images/login.png')} style={{width: '100%',height: undefined,aspectRatio: 1,borderRadius:100}} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {setUsernameEditVisible(!usernameEditVisiblity)}}
                        style={{ padding: 10, width: '15%',justifyContent: 'center',alignItems: 'center',borderRadius: 50,backgroundColor: '#32BBC3',right:0,position:'relative'}}>
                        <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker}  name="pencil" size={22} color="#fff" /></Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.detailcontainer}>
                    <View style={{paddingHorizontal: 25}}>
                        <Text><Icon name="user" size={22} color="#2e2e1f"/>  Username</Text>
                    </View>
                    <View style={styles.inputContainer}>

                        <View style={styles.input}><Text>Manuka Dewanarayana</Text></View>

                        <TouchableOpacity
                        onPress={() => {setUsernameEditVisible(!usernameEditVisiblity)}}
                        style={styles.editbutton}>
                        <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker}  name="pencil" size={22} color="#fff" /></Text>
                        </TouchableOpacity>        

                    </View>
                    <Formik 
                        initialValues={{ username:''}}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                        }}
                    >
                        {(props) => (

                            <Modal   visible={usernameEditVisiblity}
                                transparent = {true}
                              
                            >
                                <View style={{backgroundColor:'#000000aa',flex: 1}}>

                                    <View style={{backgroundColor: '#ffffff' ,height: '40%',padding:20,borderRadius:10,alignSelf: 'center',width: '80%',margin:50}}>
                                        <View style={{justifyContent: 'flex-end',width:'100%',alignItems:'flex-end',marginBottom:30}}>
                                            <TouchableOpacity onPress={() => {setUsernameEditVisible(!usernameEditVisiblity)}}>
                                                <Icon name="close" size={22} color="red"/>
                                            </TouchableOpacity>
                                        </View>
                                        <TextInput
                                            style={globalStyles.input}
                                            placeholder= 'Enter new username'
                                            onChangeText={props.handleChange('username')}
                                            value={props.values.username}
                                        />
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
                    <View style={{paddingHorizontal: 25}}>
                        <Text><Icon name="phone" size={22} color="#2e2e1f"/>  Telephone</Text>
                    </View>
                    <View style={styles.inputContainer}>

                        <View style={styles.input}><Text>0703414038</Text></View>

                        <TouchableOpacity
                            onPress={() => {setTelephoneEditVisible(!telephoneEditVisiblity)}}
                            style={styles.editbutton}>
                            <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker}  name="pencil" size={22} color="#fff" /></Text>
                        </TouchableOpacity>        

                    </View>

                    <Formik 
                        initialValues={{ telephone:''}}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                        }}
                    >
                        {(props) => (
                        <Modal 
                            transparent = {true}
                            visible={telephoneEditVisiblity}
                        >
                            <View style={{backgroundColor:'#000000aa',flex: 1}}>

                                <View style={{backgroundColor: '#ffffff' ,height: '40%',padding:20,borderRadius:10,alignSelf: 'center',width: '80%',margin:50}}>
                                    <View style={{justifyContent: 'flex-end',width:'100%',alignItems:'flex-end',marginBottom:30}}>
                                        <TouchableOpacity onPress={() => {setTelephoneEditVisible(!telephoneEditVisiblity)}}>
                                            <Icon name="close" size={22} color="red"/>
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder= 'Enter new telephone'
                                        keyboardType='numeric'
                                        onChangeText={props.handleChange('telephone')}
                                        value={props.values.telephone}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {props.handleSubmit; setTelephoneEditVisible(!telephoneEditVisiblity)}}
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
                    <View style={{paddingHorizontal: 25}}>
                        <Text><Icon name="envelope" size={22} color="#2e2e1f"/>  Email</Text>
                    </View>
                    <View style={styles.inputContainer}>

                        <View style={styles.input}><Text>thephenomenalmsd@gmail.com</Text></View>

                        <TouchableOpacity
                        onPress={() => {setEmailEditVisible(!emailEditVisiblity)}}
                        style={styles.editbutton}>
                        <Text style={globalStyles.buttonText}><Icon style={styles.mapMarker}  name="pencil" size={22} color="#fff" /></Text>
                        </TouchableOpacity>        

                    </View>
                    <Formik
                        initialValues={{ email:''}}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            console.log(values);
                        }}
                    >
                        {(props) => (
                        <Modal 
                            transparent = {true}
                            visible={emailEditVisiblity}
                        >
                            <View style={{backgroundColor:'#000000aa',flex: 1}}>

                                <View style={{backgroundColor: '#ffffff' ,height: '40%',padding:20,borderRadius:10,alignSelf: 'center',width: '80%',margin:50}}>
                                    <View style={{justifyContent: 'flex-end',width:'100%',alignItems:'flex-end',marginBottom:30}}>
                                        <TouchableOpacity onPress={() => {setEmailEditVisible(!emailEditVisiblity)}}>
                                            <Icon name="close" size={22} color="red"/>
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder= 'Enter new email'
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                    />
                                    <TouchableOpacity
                                        onPress={() => {props.handleSubmit; setEmailEditVisible(!emailEditVisiblity)}}
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
                <View style={{textAlign: 'center',justifyContent: 'center',alignItems:'center', }}><Text style={{fontSize: 16, fontWeight: '700'}}>Change password</Text></View>
                <Formik
                    initialValues={{ currenpassword: '', newpassword: '',confirmpassword: '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                    }}
                    >
                    {(props) => (
                        <View style={globalStyles.container}>
                
                                <Text>Current password</Text>
            
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Current password'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.currenpassword}
                                />

                            
                                <Text>New password</Text>
                            
                                <TextInput
                                    secureTextEntry
                                    style={globalStyles.input}
                                    placeholder='New Password'
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.newpassword}
                                />

                                <Text>Confirm Password</Text>

                                <TextInput
                                    secureTextEntry
                                    style={globalStyles.input}
                                    placeholder='Confirm Password'
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.confirmpassword}
                                />
                        
                        
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
     <Footer></Footer>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
    profilepiccontainer:{ 
        width:150,
        height:150,
        borderRadius:100,
        borderWidth:0.5,
        borderColor:'ash',
        marginBottom:-40   
   },
   profilepicupdatecontainer:{
        paddingHorizontal: 15,
        marginVertical: 25 
   },
    Detailsmaincontainer:{
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
   detailcontainer:{
        flexDirection: 'column',
        marginVertical:10
   },

});

