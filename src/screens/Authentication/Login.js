import React, {useState, useEffect} from 'react'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
  Platform,
  ScrollView,
} from 'react-native'
import {useForm} from 'react-hook-form'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch, useSelector} from 'react-redux'
import {
  sign_in,
  IS_LOADING,
  social_signin,
} from '../../redux/actions/AuthActions'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin'

const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [gUser, setGUser] = useState({})
  const [visible, setVisible] = useState(false)

  const [password, setPassword] = useState('')
  const [isPasswordSecure, setIsPasswordSecure] = useState(true)
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  useEffect(() => {
    //1027704725204-8ra8ndftf0ovqh7jn4fik17gv4cm2ghr.apps.googleusercontent.com
    GoogleSignin.configure({
      webClientId:
        Platform.OS == 'android'
          ? '1027704725204-86hv729ioha84jk9hvepl39mn4rkcfjg.apps.googleusercontent.com'
          : '1027704725204-8ra8ndftf0ovqh7jn4fik17gv4cm2ghr.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    })
    isSignedIn()
  }, [])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()

      setGUser(userInfo)
      const notification_token = await AsyncStorage.getItem('onesignaltoken')
      dispatch(
        social_signin(
          userInfo.user.id,
          navigation,
          setVisible,
          notification_token,
        ),
      )
    } catch (error) {
      console.log('Error Message___', error.message)
    }
  }

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn()
    if (!isSignedIn) {
      getCurrentUserInfo()
    } else {
      console.log('Please Login')
    }
  }

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently()

      setGUser(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // alert('User has not signed in yet')
      } else {
        alert('Something went wrong!')
      }
    }
  }

  const onSubmit = (data) => {
    let email = 'company@gmail.com'
    let passwordStatic = '11111111'
    if (data.Email == email) {
      dispatch(sign_in(email, passwordStatic))
    } else {
      dispatch(sign_in('individual@gmail.com', data.Password))
    }
  }

  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImgContainer}>
          <Image
            style={{
              height: scale(280),
              width: scale(370),
            }}
            resizeMode="cover"
            source={require('../../assets/Images/Logo.png')}
          />
        </View>

        <Text style={styles.VerifText}>Sign in</Text>

        <CustomInput
          name="Email"
          rules={{
            required: 'Email is required',
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Email'}
          keyboardType={'default'}
          restyle={{
            marginTop: scale(15),
          }}
        />
        {errors.Email && <Validation title={errors.Email.message} />}
        <CustomInput
          secureTextEntry={isPasswordSecure}
          textContentType={'password'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          name="Password"
          rules={{
            required: 'Password is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Password'}
          keyboardType={'default'}
          PIname={isPasswordSecure ? 'eye-slash' : 'eye'}
          PIsize={18}
          PIcolor={'blue'}
          PIstylye={{
            position: 'relative',
            bottom: scale(36),
            left: scale(270),
          }}
          onPress={() => {
            isPasswordSecure
              ? setIsPasswordSecure(false)
              : setIsPasswordSecure(true)
          }}
        />
        {errors.Password && <Validation title={errors.Password.message} />}

        <View style={styles.ToggleContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#3E57A7'}}
            thumbColor={isEnabled ? '#FFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Text
            style={[styles.FPassText, {position: 'absolute', left: scale(50)}]}>
            Remember Me
          </Text>

          <View style={styles.FPassContainer}>
            <TouchableOpacity>
              <Text
                style={[styles.FPassText, {color: '#435CA8'}]}
                onPress={() => navigation.navigate('resetpassword')}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton
          onPress={handleSubmit(onSubmit)}
          text={'Sign In'}
          IconName={'arrowright'}
          Iconsize={17}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'rgba(6, 5, 24, 0.28)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: scale(12),
          }}
        />
        <View
          style={{
            height: scale(60),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: moderateScale(25),
              fontWeight: '600',
              position: 'absolute',
              bottom: 0,
            }}>
            OR
          </Text>
        </View>
        <CustomButton
          onPress={signIn}
          restyle={{
            backgroundColor: '#ffff',
            borderWidth: 2,
            borderColor: '#435CA8',
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            position: 'absolute',
            left: scale(70),
            letterSpacing: moderateScale(0),
          }}
          text={'Login with Google'}
        />
        <Image
          style={styles.Google}
          source={require('../../assets/Images/googlelogo.png')}
        />
        <CustomButton
          restyle={{
            backgroundColor: '#ffff',
            borderWidth: 2,
            borderColor: '#435CA8',
          }}
          Textalig={{
            color: '#030303',
            textTransform: 'none',
            position: 'relative',
            left: scale(30),
            letterSpacing: moderateScale(0),
          }}
          text={'Login with Facebook'}
        />
        <Image
          style={{
            height: scale(33),
            width: scale(33),
            position: 'absolute',
            bottom: scale(45),
            left: scale(55),
          }}
          source={require('../../assets/Images/facebook.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.SignUpText1}>Don,t have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.SignUpText}
              onPress={() => navigation.navigate('accounttype')}>
              sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    backgroundColor: 'white',
  },
  ImgContainer: {
    height: scale(220),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ImgStyles: {
    height: scale(200),
    width: scale(200),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  VerifText: {
    fontFamily: 'mulish',
    fontSize: moderateScale(25),
    color: 'black',
    fontWeight: '600',
  },
  ToggleContainer: {
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FPassContainer: {
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  FPassText: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(14),
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'black',
  },
  SignUpText1: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#030303',
    lineHeight: moderateScale(25),
  },
  SignUpText: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#435CA8',
    textTransform: 'capitalize',
    lineHeight: moderateScale(25),
    marginLeft: moderateScale(7),
  },
  Google: {
    height: scale(30),
    width: scale(30),
    position: 'absolute',
    bottom: scale(114),
    left: scale(55),
  },
})
export default Login
