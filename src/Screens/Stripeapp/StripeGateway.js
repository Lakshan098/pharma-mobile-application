import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "../Stripeapp/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function App({navigation}) {
  return (
    <StripeProvider publishableKey="pk_test_51LvwLjKEkDpdvVJU8uB8jkw7fhuvOqVg2FfQW7CQvx112SQ4QldNalSQcl6NQYb6784LHQcKjvBMPxLmJ9pa2Huh00CONPh9d7">
      <StripeApp order_id ={navigation.getParam('order_id')} navigation = {navigation}/>
    </StripeProvider>
  );
}