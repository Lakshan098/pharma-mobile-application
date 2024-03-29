import React, { useContext, useEffect } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './src/Routes/homestack'
import DDashboard from './src/Routes/deliveryDashboardStack'
import DConfirmedOrders from './src/Routes/dConfirmedOrderStack'
import DCompletedOrders from './src/Routes/dCompletedOrders'
import customerDashboard from './src/Routes/customerDashboardStack'
import customerProfile from './src/Routes/customerProfileStack'
import ForgotPasswordStack from './src/Routes/forgotPasswordStack'
import EmailVerify from './src/Routes/emailVerification'
import OngoingOrders from './src/Routes/customerOrders'
import  Notifications  from './src/Routes/notificationStack'
import DeliveryRegisteredPharmacies from './src/Routes/registerForPharmacy'
import DeliveryRegisterForPharmacies from './src/Routes/newPharmaciesStack'
import OrdersHistory from './src/Routes/ordersHistorystack'



export default function Routes() {

   return (
      <Router>
         <Scene key="root">
            <Scene key="login" component={Login} initial={true} hideNavBar={true} />
            <Scene key="forgotPassword" component={ForgotPasswordStack} hideNavBar={true} />
            <Scene key="verifyEmail" component={EmailVerify} hideNavBar={true} />
            <Scene key="customerDashboard" component={customerDashboard} hideNavBar={true} />
            <Scene key="customerProfile" component={customerProfile} hideNavBar={true} />
            <Scene key="ongoingOrders" component={OngoingOrders} hideNavBar={true} />
            <Scene key="dDashboard" component={DDashboard} hideNavBar={true} />
            <Scene key="dConfirmedOrders" component={DConfirmedOrders} hideNavBar={true} />
            <Scene key="dCompletedOrders" component={DCompletedOrders} hideNavBar={true} />
            <Scene key="notifications" component={Notifications} hideNavBar={true} />
            <Scene key="dRegisteredPharmacies" component={DeliveryRegisteredPharmacies} hideNavBar={true} />
            <Scene key="dRegisterForPharmacies" component={DeliveryRegisterForPharmacies} hideNavBar={true} />
            <Scene key="ordersHistory" component={OrdersHistory} hideNavBar={true} />
         </Scene>
      </Router>

   )

}
