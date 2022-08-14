import Navigator from './src/Routes/homestack';
import Dashboard from './src/Routes/deliveryDashboardStack';
import * as Font from 'expo-font';
import React, { useState} from 'react';
import AppLoading from 'expo-app-loading';
import Orders from './src/Screens/ConfirmedOrders/ConfirmdOrders';
import CustomerSignup from './src/Screens/CustomerSignup/CustomerSignup';
import Login from './src/Screens/Login/Login';
import ActorSelect from './src/Screens/ActorSelect/ActorSelect';
import ForgotPassword from './src/Screens/ForgotPassword/ForgotPassword';
import ResetPassword from './src/Screens/ForgotPassword/ResetPassword';
import DeliveryDashboard from './src/Screens/DeliveryDashboard/DeliveryDashboard';
import VerifyEmail from './src/Screens/VerifyEmail/VerifyEmail';
import PharmacySearchPage from './src/Screens/PharmacySearchPage.js/PharmacySearchPage';
import CustomerProfile from './src/Screens/CustomerProfile/CustomerProfile';



const getFonts = () => Font.loadAsync({
  'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
  'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
  'Raleway-ExtraBold': require('./assets/fonts/Raleway-ExtraBold.ttf'),
  'Raleway-ExtraLight': require('./assets/fonts/Raleway-ExtraLight.ttf'),
  'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
  'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
  'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
  'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
  'Raleway-Thin': require('./assets/fonts/Raleway-Thin.ttf'),
});


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <CustomerProfile/>
    );
  } else {
    return(
      <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
      />
    )
  }
}
