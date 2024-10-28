import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import ButtonClick from './components/ButtonClick';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      

      <Image 
      source={require('./assets/OIG2.png')}
      style={{
        width: 150,
        height: 150
      }}
      />

      <Text style={styles.textBold}>Avalie aqui!</Text>
      <Text style={styles.textCenter}>Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores</Text>

      <ButtonClick />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bab100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2e2444'
  },
  textCenter: {
    textAlign: 'center',
    margin: 25,
    width: '70%',
    color: '#2e2444',
    fontSize: 18
  },
});
