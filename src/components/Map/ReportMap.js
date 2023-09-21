import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, PermissionsAndroid} from 'react-native'
import {Marker} from 'react-native-maps'
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps'
import Ionicons from 'react-native-vector-icons/Ionicons'

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera')
    } else {
      console.log('Camera permission denied')
    }
  } catch (err) {
    console.warn(err)
  }
}

export default function ReportMap(props) {
  const [Pin, setPin] = useState({
    latitude: 37.7882,
    longitude: -122.47324,
  })

  return (
    <View style={styles.MainContainer}>
      <MapView
        onPress={requestCameraPermission}
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        draggable={true}
        onMagicTap={true}
        description="absolute"
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={Pin}
          draggable={true}
          pinColor="red"
          onDragStart={(e) => {
            console.log('helo map', e.nativeEvent.coordinate)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
            console.log('helo map')
          }}
          onPress={props.onPress}>
          <Ionicons name="ios-location" size={25} color={'#6ABE45'} />
          <Ionicons name="ios-location" size={25} color={'#6ABE45'} />
        </Marker>
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mapStyle: {
    height: '100%',
    width: '100%',
    zIndex: -17,
  },
})
