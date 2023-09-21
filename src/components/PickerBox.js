import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {scale} from 'react-native-size-matters'
import ImagePicker from './Pickers/ImagePicker'

const PickerBox = (props) => {
  return (
    // <View style={styles.MainContainer}>
    <View style={styles.PickerBox}>
      <View style={styles.Box1}>
        <ImagePicker Iconname={'camera'} iconsize={20} />
        {/* <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#000000',
          }}
          onPress={props.onVideoPress}>
          <Text>Video</Text>
        </TouchableOpacity> */}
        <ImagePicker Iconname={'camera'} iconsize={20} />
      </View>
      {/* <View style={styles.Box2}>
        <ImagePicker />
        <ImagePicker />
      </View> */}
    </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PickerBox: {
    height: scale(220),
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#435CA8',
  },
  Box1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Box2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
export default PickerBox
