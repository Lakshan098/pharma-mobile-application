import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../../Styles/Global';

export default function ActorSelect() {
  return (
    <View style={globalStyles.container}>
      <Text>Actor select page</Text>
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