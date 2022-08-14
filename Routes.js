import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './src/Routes/homestack'
import DDashboard from './src/Routes/deliveryDashboardStack'
import DConfirmedOrders from './src/Routes/dConfirmedOrderStack'
import DCompletedOrders from './src/Routes/dCompletedOrders'
import DProfile from './src/Routes/dProfileStack'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} initial = {true} hideNavBar={true}/>
         <Scene key = "dDashboard" component = {DDashboard} hideNavBar={true}/>
         <Scene key = "dConfirmedOrders" component = {DConfirmedOrders} hideNavBar={true}/>
         <Scene key = "dCompletedOrders" component = {DCompletedOrders} hideNavBar={true}/>
         <Scene key = "dProfile" component = {DProfile} hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes