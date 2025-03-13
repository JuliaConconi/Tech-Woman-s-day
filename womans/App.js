import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Nunito_400Regular,} from '@expo-google-fonts/nunito';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.poppins}>Essa página retrata sobre as mulheres que foram (e são) importantes no ramo de tecnologia</Text>
      <StatusBar style="auto" />
    <div className='App'>
      Grace Hooper
    </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins'
  },
  text: {
    fontFamily: 'Poppins',
    flex: 1,
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
  },
  poppins: {
    fontFamily: Nunito_400Regular,
    fontSize: 20,
    margin: 40,
  }
});
