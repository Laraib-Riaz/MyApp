import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {
  moderateScale,
  scale,
  verticalScale,
  moderateVerticalScale,
} from 'react-native-size-matters'

const InpToggle = (props) => {
  const [btn1, setBtn1] = useState(true)
  const [btn2, setBtn2] = useState(false)

  const AllOne = () => {
    setBtn1(true)
    setBtn2(false)
    // navigation.navigate('HomeTwo')
  }
  const CreditTwo = () => {
    setBtn2(true)
    setBtn1(false)
    // navigation.navigate('PatrolServices')
  }
  return (
    <View style={[styles.MainCon, props.ReCreate]}>
      <View style={styles.FirstBox}>
        <Text style={styles.FirstText}>{props.Text}</Text>
      </View>
      <View style={styles.MainToggleContainer}>
        <View style={styles.ToggleBox}>
          <TouchableOpacity
            onPress={AllOne}
            style={[
              styles.Toggle,
              {backgroundColor: btn1 ? '#435CA8' : '#D7D7D7'},
            ]}>
            <Text
              style={[styles.ToggleText, {color: btn1 ? 'white' : '#484848'}]}>
              NO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={CreditTwo}
            style={[
              styles.Toggle,
              {backgroundColor: btn2 ? '#435CA8' : '#D7D7D7'},
            ]}>
            <Text
              style={[styles.ToggleText, {color: btn2 ? 'white' : '#484848'}]}>
              YES
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainCon: {
    height: scale(38),
    width: '100%',
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1.4,
    borderColor: 'lightgrey',
  },
  ToggleText: {
    // color: btn2 ? 'white' : '#484848',
    fontSize: moderateScale(10),
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'mulish',
  },
  Toggle: {
    height: scale(20),
    width: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  ToggleBox: {
    height: scale(20),
    width: verticalScale(70),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#D7D7D7',
  },
  MainToggleContainer: {
    height: '100%',
    width: '40%',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  FirstText: {
    fontSize: moderateScale(11),
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'aBeeZee',
    color: '#747688',
  },
  FirstBox: {
    height: '100%',
    width: '60%',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
})
export default InpToggle
