import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import {useDispatch, useSelector} from 'react-redux'
import CustomArrow from '../../components/CustomArrow'
import CustomButton from '../../components/CustomButton'
import {USER_DETAILS} from '../../redux/reducer/Holder'

const IndividualSetting = ({navigation}) => {
  const dispatch = useDispatch()

  return (
    <View style={styles.mainContainer}>
      <CustomArrow
        onPress={() => navigation.goBack()}
        HeaderName={'Settings'}
      />

      <View style={{paddingVertical: verticalScale(25)}}>
        <CustomButton
          text={'Contact us'}
          IconName={'arrowright'}
          Iconsize={16}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: 6,
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            letterSpacing: moderateScale(0),
          }}
          restyle={{
            backgroundColor: '#EFF3FA',
            borderWidth: 2,
            borderColor: 'lightgrey',
            justifyContent: 'flex-start',
            paddingHorizontal: scale(10),
          }}
        />
        <CustomButton
          onPress={() => navigation.navigate('individualchangepass')}
          text={'Change Password'}
          IconName={'arrowright'}
          Iconsize={16}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: 6,
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            letterSpacing: moderateScale(0),
          }}
          restyle={{
            backgroundColor: '#EFF3FA',
            borderWidth: 2,
            borderColor: 'lightgrey',
            justifyContent: 'flex-start',
            paddingHorizontal: scale(10),
          }}
        />
        <CustomButton
          onPress={() => {
            dispatch({
              type: USER_DETAILS,
              payload: '',
            })
          }}
          text={'Log Out'}
          IconName={'arrowright'}
          Iconsize={16}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: 6,
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            letterSpacing: moderateScale(0),
          }}
          restyle={{
            backgroundColor: '#EFF3FA',
            borderWidth: 2,
            borderColor: 'lightgrey',
            justifyContent: 'flex-start',
            paddingHorizontal: scale(10),
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    backgroundColor: '#F5F5F5',
  },
  HeaderText: {
    width: '90%',
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    position: 'relative',
    right: 14,
  },
  ArrowContainer: {
    justifyContent: 'space-around',
    height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default IndividualSetting
