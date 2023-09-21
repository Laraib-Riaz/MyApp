import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'

const Topnavigator = (props) => {
  return (
    <View style={styles.TopNavigatorContainer}>
      <TouchableOpacity
        style={[styles.TabTouch1, props.AllBG]}
        onPress={props.All}>
        <Text style={[styles.Text1, props.AllText]}>{props.NameOne}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.TabTouch2, props.BGCOLOR]}
        onPress={props.Credit}>
        <Text style={[styles.Text1, props.CreditText]}>{props.NameTwo}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.TabTouch3, props.DebitBG]}
        onPress={props.Debit}>
        <Text style={[styles.Text1, props.DebitText]}>{props.NameThree}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  TopNavigatorContainer: {
    height: scale(45),
    backgroundColor: '#D7D7D7',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  Text1: {
    fontSize: moderateScale(10),
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  TabTouch1: {
    flex: 1,
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabTouch2: {
    flex: 1,
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabTouch3: {
    flex: 1,
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default Topnavigator
