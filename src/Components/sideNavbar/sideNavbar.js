import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"; 
import CustomerProfile from "../../Screens/CustomerProfile/CustomerProfile";

const Drawer = createDrawerNavigator();

export default function sideNavbar(){
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="profile">
                <Drawer.Screen name="profile" component={CustomerProfile}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

