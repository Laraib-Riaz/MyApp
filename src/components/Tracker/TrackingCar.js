import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TrackingCar = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.MidMain}>
      <Image
        style={{
          position: 'absolute',
          left: scale(90),
          top: scale(15),
        }}
        source={require('../../assets/Images/track.png')}
      />
      <View style={styles.Part1}>
        <View style={styles.TextCon}>
          <Text style={{color: 'white', fontSize: 10}}>15</Text>
          <Text style={{color: 'white', fontSize: 9}}>MIN</Text>
        </View>
      </View>
      <View style={styles.Part2}>
        <Text style={{color: 'white', fontSize: 13}}>Request Officer</Text>
      </View>
      <View style={styles.Part3}>
        <View style={styles.LastCon}>
          <Ionicons name="arrow-forward" size={15} color={'white'} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  MidMain: {
    backgroundColor: '#435CA8',
    height: scale(40),
    width: scale(210),
    position: 'absolute',
    top: scale(300),
    zIndex: 20,
    borderRadius: 12,
    flexDirection: 'row',
    left: scale(60),
  },
  Part1: {
    height: '100%',
    width: '20%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextCon: {
    height: scale(30),
    width: scale(30),
    backgroundColor: 'rgba(6, 5, 24, 0.5)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Part2: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Part3: {
    height: '100%',
    width: '20%',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LastCon: {
    height: scale(30),
    width: scale(30),
    backgroundColor: 'rgba(6, 5, 24, 0.5)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default TrackingCar
