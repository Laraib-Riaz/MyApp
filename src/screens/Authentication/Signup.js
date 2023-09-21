import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/AntDesign'
import {useDispatch} from 'react-redux'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'
import {CreateAccountApi} from '../../redux/actions/AuthActions'

const Signup = ({navigation, route}) => {
  const dispatch = useDispatch()
  // const navigation = useNavigation()

  const {role_id} = route.params
  // console.log('role_id', role_id)

  const [password, setPassword] = useState('')
  const [isPasswordSecure, setIsPasswordSecure] = useState(true)
  const [password2, setPassword2] = useState('')
  const [isPasswordSecure2, setIsPasswordSecure2] = useState(true)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = async (data) => {
    dispatch(CreateAccountApi(data, navigation, role_id))
  }

  return (
    <View style={styles.MainConatiner}>
      <View style={{height: 35}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={23} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.SignText}>Sign up</Text>

      <ScrollView
        style={{marginTop: scale(5)}}
        showsVerticalScrollIndicator={false}>
        <CustomInput
          name="firstname"
          rules={{
            required: 'First Name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'First Name'}
          keyboardType={'default'}
          Gapp={{height: scale(45)}}
        />
        {errors.firstname && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.firstname.message}
          />
        )}
        <CustomInput
          name="lastname"
          rules={{
            required: 'Last Name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Last Name'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.lastname && (
          <Validation
            REStyle={{
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.lastname.message}
          />
        )}
        <CustomInput
          name="email"
          rules={{
            required: 'Email address is required',
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Email address'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.email && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.email.message}
          />
        )}

        <CustomInput
          name="username"
          rules={{
            required: 'User name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'User name'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.username && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.username.message}
          />
        )}
        <CustomInput
          name="phone"
          rules={{
            required: 'Phone number is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Phone number'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.phone && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.phone.message}
          />
        )}
        <CustomInput
          secureTextEntry={isPasswordSecure}
          textContentType={'password'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          name="password"
          rules={{
            required: 'Password is required eye',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Your Password'}
          keyboardType={'default'}
          PIname={isPasswordSecure ? 'eye-slash' : 'eye'}
          PIsize={18}
          PIcolor={'#979797'}
          PIstylye={{
            position: 'absolute',
            top: -42,
            right: 13,
          }}
          onPress={() => {
            isPasswordSecure
              ? setIsPasswordSecure(false)
              : setIsPasswordSecure(true)
          }}
          Gapp={{
            height: scale(45),
            marginBottom: 10,
            marginVertical: -4,
          }}
        />
        {errors.password && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.password.message}
          />
        )}
        <CustomInput
          secureTextEntry={isPasswordSecure2}
          textContentType={'password'}
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          name="Confirm_Password"
          rules={{
            required: 'Password is required eye',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Confirm Password'}
          keyboardType={'default'}
          PIname={isPasswordSecure2 ? 'eye-slash' : 'eye'}
          PIsize={18}
          PIcolor={'#979797'}
          PIstylye={{
            position: 'absolute',
            top: -42,
            right: 13,
          }}
          onPress={() => {
            isPasswordSecure2
              ? setIsPasswordSecure2(false)
              : setIsPasswordSecure2(true)
          }}
          Gapp={{height: scale(45), marginBottom: 10, marginVertical: -4}}
        />
        {errors.Confirm_Password && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Confirm_Password.message}
          />
        )}

        <CustomInput
          name="address"
          rules={{
            required: 'Address is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Address'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.address && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.address.message}
          />
        )}
        <CustomInput
          name="zipcode "
          rules={{
            required: 'Zip code is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Zip code'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.zipcode && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.zipcode.message}
          />
        )}
        <CustomInput
          name="country"
          rules={{
            required: 'Country is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Country'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.country && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.country.message}
          />
        )}

        <CustomButton
          onPress={handleSubmit(onSubmit)}
          text={'Sign up'}
          Textalig={{
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          restyle={{
            width: '80%',
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
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.SignUpText1}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.SignUpText3}
              onPress={() => navigation.navigate('login')}>
              signin
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    backgroundColor: 'white',
  },
  SignText: {
    height: scale(40),
    fontSize: moderateScale(25),
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: scale(5),
  },
  SignUpText1: {
    fontFamily: 'aBeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#030303',
    lineHeight: moderateScale(25),
  },
  SignUpText3: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#435CA8',
    textTransform: 'capitalize',
    lineHeight: moderateScale(25),
    marginLeft: moderateScale(7),
  },
})
export default Signup
