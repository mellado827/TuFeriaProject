import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const AllowLocation = () => {
    return(
        <View>
            {/* <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            /> */}
            <Text>Hola mundo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})

export default AllowLocation
