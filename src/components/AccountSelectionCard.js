import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Colors} from '../../constant/Colors'
import Octicons from 'react-native-vector-icons/Octicons'
import {scale, moderateScale} from 'react-native-size-matters'
const AccountSelectionCard = (props) => {
  return (
    <TouchableOpacity
      onPress={
        props.onPress
        //   SelectItemsHandler(item.title);
      }
      style={[
        styles.smallbox,
        {elevation: props.id == props.selectedItem ? 12 : 2},
      ]}>
      <View style={styles.IconBox}>
        <Image
          style={[styles.Icons, {height: scale(40)}]}
          resizeMode="cover"
          source={props.image}
        />
      </View>
      <Text style={[styles.font]}>{props.title}</Text>

      {props.id == props.selectedItem ? (
        <View
          style={{
            height: scale(40),
            width: '100%',
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: scale(22),
              width: scale(22),
              borderRadius: 100,
              backgroundColor: '#FFF',
            }}
            source={require('../assets/Images/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

export default AccountSelectionCard

const styles = StyleSheet.create({
  smallbox: {
    height: scale(160),
    width: scale(145),
    alignItems: 'center',
    // marginVertical: 25,
    paddingBottom: 5,
    backgroundColor: '#435CA8',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    borderRadius: 8,
    marginLeft: scale(22),
    justifyContent: 'center',
  },
  font: {
    // justifyContent: 'center',
    // fontSize: 18,
    // fontFamily: 'Poppins-Bold',
    // color: 'rgba(0, 0, 0, 1)',
    marginTop: scale(10),
    fontWeight: '600',
    fontSize: moderateScale(15),
    color: '#FFF',
  },
  text: {
    color: '#000000B2',
    fontFamily: 'Poppins-Medium',
    width: '85%',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
  },
  image: {
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '5%',
  },
  tickIcon: {
    backgroundColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 100,
  },
  Icons: {
    height: scale(35),
    width: scale(35),
    color: '#435CA8',
  },
  IconBox: {
    height: scale(55),
    width: scale(55),
    backgroundColor: '#FFF',
    borderRadius: moderateScale(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
})
