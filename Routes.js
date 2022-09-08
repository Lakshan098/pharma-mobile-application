import React, { useContext, useEffect } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './src/Routes/homestack'
import DDashboard from './src/Routes/deliveryDashboardStack'
import DConfirmedOrders from './src/Routes/dConfirmedOrderStack'
import DCompletedOrders from './src/Routes/dCompletedOrders'
import customerDashboard from './src/Routes/customerDashboardStack'
import customerProfile from './src/Routes/customerProfileStack'
import ForgotPasswordStack from './src/Routes/forgotPasswordStack'
import DProfile from './src/Routes/dProfileStack'
import ActorLogin from './src/Routes/actorLoginStack'
import EmailVerify from './src/Routes/emailVerification'
import OngoingOrders from './src/Routes/customerOrders'
import { AuthContext } from './src/Context/AuthContext'
import { AuthProvider } from './src/Context/AuthContext';




export default function Routes() {
   const { userToken,isLoggedIn } = useContext(AuthContext);
   useEffect(() => console.log('userToken: ', userToken), [userToken]);
   useEffect(() => console.log('isLoggedTn: ', isLoggedIn), [isLoggedIn]);
   console.log(userToken);
   console.log('isLoggedTn: ', isLoggedIn);
   return (
      <Router>
         <Scene key="root1">
            {userToken ?
               <Scene key="customerDashboard" component={customerDashboard} hideNavBar={true} />
               : ''}
            {userToken  ?
               <Scene key="customerProfile" component={customerProfile} hideNavBar={true} />
               : ''}
            {userToken  ?
               <Scene key="ongoingOrders" component={OngoingOrders} hideNavBar={true} />
               : ''}
            {userToken  ?
               <Scene key="dDashboard" component={DDashboard} hideNavBar={true} />
               : ''}
            {userToken  ?
               <Scene key="dConfirmedOrders" component={DConfirmedOrders} hideNavBar={true} />
               : ''}
            {userToken ?
               <Scene key="dCompletedOrders" component={DCompletedOrders} hideNavBar={true} />
               : ''}
            {userToken  ?
               <Scene key="dProfile" component={DProfile} hideNavBar={true} />
               : ''}
            {!isLoggedIn  ?
               <Scene key="login" component={Login} initial={true} hideNavBar={true} />
               : ''}
            <Scene key="forgotPassword" component={ForgotPasswordStack} hideNavBar={true} />
            <Scene key="verifyEmail" component={EmailVerify} hideNavBar={true} />
            <Scene key="actorLogin" component={ActorLogin} hideNavBar={true} />
         </Scene>
      </Router>

   )

}
