import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../Styles/Global';

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <Text>This is signup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});