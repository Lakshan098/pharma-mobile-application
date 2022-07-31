import Navigator from './src/Routes/homestack';
import * as Font from 'expo-font';
import React, { useState} from 'react';
import AppLoading from 'expo-app-loading';

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
      <Navigator/>
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
