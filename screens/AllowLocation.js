import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const AllowLocation = () => {
    return(
        <View>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            />
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
