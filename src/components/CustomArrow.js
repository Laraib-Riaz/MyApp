import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/AntDesign'

const CustomArrow = (props, {navigation}) => {
  return (
    <View style={[styles.ArrowContainer, props.Newstyle]}>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="arrowleft" size={25} color={'black'} />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{props.HeaderName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  HeaderText: {
    width: '90%',
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    position: 'relative',
    right: 14,
    fontFamily: 'mulish',
    fontStyle: 'normal',
  },
  ArrowContainer: {
    justifyContent: 'space-around',
    height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default CustomArrow
