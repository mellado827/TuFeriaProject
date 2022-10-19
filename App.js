import { View, StyleSheet } from 'react-native';
import RemindUbicationEnable from './screens/RemindUbicationEnable';
import AllowLocation from './screens/AllowLocation'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={RemindUbicationEnable} options={{ title: '¡Bienvenido a Tu Feria App!' }}
        />
        <Stack.Screen name="AllowLocation" component={AllowLocation} options={{title: 'Permitir ubicación'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack