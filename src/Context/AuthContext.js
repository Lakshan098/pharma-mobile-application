import react,{createContext, useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import Routes from '../../Routes';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    var [isLoading, setIsLoading] = useState(true);
    var [userToken, setUserToken] = useState(false);
    var [isLoggedIn, setLoggedIn] = useState(false);

    const login = async (token) => {
        console.log("hi 3");
        setIsLoading(true);
        setUserToken(true);
        console.log(userToken);
        AsyncStorage.setItem('authToken',token);
        console.log("hi 4");
        setIsLoading(false);

    }
    

    const logout = async () => {
        console.log(userToken);
        setIsLoading(false);
        setUserToken(false);
        AsyncStorage.removeItem('authToken');
    }

    const setLoggedin = async () => {
        setLoggedIn(true);
    }
    const setLoggedout = async () => {
        setLoggedIn(false);
    }

    useEffect(() => console.log('userToken: ', userToken), [userToken]);
    useEffect(() => console.log('isLoggedTn: ', isLoggedIn), [isLoggedIn]);
    return(
        <AuthContext.Provider value ={{login,logout,userToken,isLoggedIn,setLoggedin,setLoggedout}}>
            {children}
        </AuthContext.Provider>
    )
}