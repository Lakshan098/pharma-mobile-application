import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import client from '../../Api/client';

//ADD localhost address of your server
const API_URL = "http://localhost:3000";

const StripeApp = ({order_id,navigation}) => {
  const publishableKey ="pk_test_51LvwLjKEkDpdvVJU8uB8jkw7fhuvOqVg2FfQW7CQvx112SQ4QldNalSQcl6NQYb6784LHQcKjvBMPxLmJ9pa2Huh00CONPh9d7"
  const [amount, setAmount] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {

    const response = await client.post(`/Stripe/create-payment-intent`, {amount: amount}, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { clientSecret, error } =  response.data
   
    
    return { clientSecret, error };
  };

  const dataPass = (order_id,navigation) => {
    console.log(order_id)
    client.post('/Customer/orderAcceptance', { order_id: order_id,payment: 1, status: true }).then((response) => {

    }, [])
    navigation.replace('OngoingOrders',null, null);
}

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !amount) {
      Alert.alert("Please enter Complete card details and Amount");
      return;
    }
    const billingDetails = {
      amount: amount,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          Alert.alert("Payment Successful","Confimation",
          [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => dataPass(order_id,navigation)
            }
        ]);
        //   console.log("Payment successful ", paymentIntent);
          console.log(paymentIntent.status);
          
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Amount"
        keyboardType="numeric"
        onChange={value => setAmount(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});