import React, {useState, useEffect} from 'react'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import CustomButton from '../../components/CustomButton'
import Icon from 'react-native-vector-icons/AntDesign'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {register, get_notification} from '../../redux/actions/AuthActions'

const Verification = ({navigation, route}) => {
  const dispatch = useDispatch()

  const [counter, setCounter] = useState(50)
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  const CELL_COUNT = 4
  const otp = useSelector((state) => state.otp)
  const token = useSelector((state) => state.notification_token)

  const DeviceToken = (data) => {
    dispatch(get_notification())
  }

  useEffect(() => {
    // console.log(route.params)
    if (!token) {
      DeviceToken()
    }
  }, [])

  const register_account = async () => {
    const notification_token = await AsyncStorage.getItem('onesignaltoken')
    console.log(`route params type:  ${route.params.type}`)
    console.log(`tops value ${otp} ${value}`)
    console.log(`Route params all ${route.params}`)
    if (route.params.type == 'register') {
      if (otp == value) {
        dispatch(register(route.params, notification_token, navigation))
      } else {
        alert('gg')
        // setModalVisible(true);
        // setError('Invalid your otp')
        // setStatus(false)
      }
    } else {
      if (otp == value) {
        let email = route.params.email
        navigation.navigate('changepass', {email})
      } else {
        //setModalVisible(true);
        // setError('Invalid your otp')
        // setStatus(false)
      }
    }
  }

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  return (
    <View style={styles.MainContainer}>
      <View style={{height: scale(35)}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.RPhead}>Verification </Text>

      <Text style={styles.RPText}>
        We ve send you the Verification code on 12345678
      </Text>

      <View style={styles.CodeContainer}>
        <View style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
      </View>

      <CustomButton
        stylz={{marginHorizontal: scale(20)}}
        onPress={() => {
          register_account()
        }}
        IconName={'arrowright'}
        Iconsize={15}
        IconColor={'#FFF'}
        CircleStyle={{
          backgroundColor: 'rgba(6, 5, 24, 0.28)',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          position: 'absolute',
          right: 6,
        }}
        text={'continue'}
      />

      <View style={styles.TimeContainer}>
        {counter == 0 ? (
          <>
            <Text style={styles.Resend}>You can resend the otp</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'green',
                  fontSize: scale(14),
                  marginLeft: scale(5),
                }}>
                Click Here
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.Resend}>
              You can resend the code after {counter}{' '}
              {counter > 1 ? 'secs' : 'sec'}
            </Text>
            <TouchableOpacity
            // onPress={reset_otp}
            >
              <Text
                style={{
                  color: 'green',
                  fontSize: scale(14),
                  marginLeft: scale(5),
                }}>
                Click Here
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingVertical: verticalScale(20),
    backgroundColor: 'white',
  },
  ArrowContain: {
    height: scale(40),
  },
  RPhead: {
    fontFamily: 'mulish',
    fontSize: moderateScale(25),
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'black',
    textTransform: 'capitalize',
  },
  RPText: {
    width: '75%',
    fontFamily: 'mulish',
    fontStyle: 'normal',
    fontSize: moderateScale(15),
    fontWeight: '400',
    color: 'black',
    marginVertical: verticalScale(10),
  },
  CodeContainer: {
    height: scale(100),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  TimeContainer: {
    height: scale(30),
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(30),
  },
  Resend: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontSize: moderateScale(15),
    fontWeight: '400',
    color: 'black',
    marginHorizontal: scale(5),
  },
  Time: {
    color: 'blue',
  },
  root: {flex: 1, padding: 20, justifyContent: 'center'},
  codeFieldRoot: {
    // marginTop: 20,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 12,
  },
  focusCell: {
    borderColor: '#3E57A7',
    // backgroundColor: 'red',
  },
})
export default Verification
