import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esse aplicativo retrata sobre as mulheres que mais contribuíram no ramo da tecnologia</Text>
      <Button style={styles.botao} title='Grace Hooper' onPress={showAlert}/>
    </View>
  );
}

function showAlert(){
  Alert.alert('Alert title', 'Grace Hooper', [
    {text: 'OK', onPress: () => console.log('Ok, Pressed')}
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(224, 205, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 40,
    fontSize: 20,
    marginTop: -610,
    backgroundColor: 'rgb(255, 250, 250)',
    padding: 8,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: '#F5F5F5',
    fontSize: 20,
  }
});
