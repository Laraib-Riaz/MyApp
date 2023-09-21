import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {moderateScale, scale} from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo'

const ImagePicker = (props) => {
  const [imageUrl, setImageUrl] = useState({})
  console.log(
    ':rocket: ~ file: Camera.js ~ line 7 ~ Camera ~ imageUrl',
    imageUrl,
  )

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    launchCamera(options, (res) => {
      console.log('Response = ', res)
      if (res.didCancel) {
        console.log('User cancelled image picker')
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error)
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton)
        alert(res.customButton)
      } else {
        setImageUrl({
          filePath: res,
          fileData: res.assets?.[0]?.data,
          fieUri: res.assets?.[0]?.uri,
        })
      }
    })
  }

  // launchCamera(options ?, callback);
  return (
    <View>
      <TouchableOpacity
        style={{
          height: scale(50),
          width: scale(50),
          borderRadius: 100,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#435CA8',
        }}
        onPress={() => cameraLaunch()}>
        <Entypo name={props.Iconname} size={props.iconsize} color={'#435CA8'} />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'mulish',
          fontSize: moderateScale(12),
          color: '#000000',
          fontWeight: '600',
        }}>
        {props.CameraName}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default ImagePicker
