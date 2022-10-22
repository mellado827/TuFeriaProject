import {PermissionsAndroid} from 'react-native';

const requestLocationPermission = async () => {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de geolocalización',
          message: '¿Podemos acceder a tu ubicación?',
          buttonNeutral: 'Preguntar más tarde',
          buttonNegative: 'No',
          buttonPositive: 'Si',
        },
      );
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  export default requestLocationPermission