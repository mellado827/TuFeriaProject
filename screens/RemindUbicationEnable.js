import {React} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';

const RemindUbicationEnable = ({navigation}) => {

  const [font] = useFonts({
    InterBold: require('../assets/fonts/InterBold.ttf'),
  });

  if (!font) {
    return null;
  }

      return (
      <View style={styles.container}>
        <Image source={require('../img/reminderEnableUbication.png')} style={styles.image} />
        <Text style={styles.title}>Recordá activar tu ubicación</Text>
        <Text style={styles.text}>Es importante que mantengas tu ubicación activa mientras usás la app para que puedas ver las ferias más cercanas a tu ubicación.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('AllowLocation')}>Continuar</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFEF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300
  }, 
  button: {
    backgroundColor: "#7DA03C",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    width: 250
  },
  title: {
    fontSize: 20,
    fontFamily: 'InterBold'
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    width: 350,
    fontFamily: 'InterBold'
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'InterBold'
 }
});

export default RemindUbicationEnable