import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Restaurant from './components/Restaurant';

export default function App() {
  return (
    <View style={styles.container}>
      <Restaurant />
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
