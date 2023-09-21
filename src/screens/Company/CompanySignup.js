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
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'

const CompanySignup = ({navigation}) => {
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

  const onSubmit = (data) => {
    navigation.navigate('verification')
  }
  return (
    <View style={styles.MainConatiner}>
      <View style={{height: 35}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.SignText}>Sign up</Text>

      <ScrollView
        style={{marginTop: scale(5)}}
        showsVerticalScrollIndicator={false}>
        <CustomInput
          name="business_name"
          rules={{
            required: 'Business Name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Business Name'}
          keyboardType={'default'}
          Gapp={{height: scale(45)}}
        />
        {errors.F_Name && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: scale(7),
              height: scale(20),
            }}
            title={errors.business_name.message}
          />
        )}

        <CustomInput
          name="Email_address"
          rules={{
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: 'Email address is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Email address'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: verticalScale(-4)}}
        />
        {errors.Email_address && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: scale(7),
              height: scale(20),
            }}
            title={errors.Email_address.message}
          />
        )}

        <CustomInput
          name="User_name"
          rules={{
            required: 'User name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'User name'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: verticalScale(-4)}}
        />
        {errors.User_name && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: scale(7),
              height: scale(20),
            }}
            title={errors.User_name.message}
          />
        )}
        <CustomInput
          name="Phone_number"
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
        {errors.Phone_number && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: scale(7),
              height: scale(20),
            }}
            title={errors.Phone_number.message}
          />
        )}
        <CustomInput
          secureTextEntry={isPasswordSecure}
          textContentType={'password'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          name="Your_Password"
          rules={{
            required: 'Password is required eye',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Your Password'}
          keyboardType={'default'}
          PIname={isPasswordSecure ? 'eye-slash' : 'eye'}
          PIsize={20}
          PIcolor={'#979797'}
          PIstylye={{
            position: 'absolute',
            top: scale(-37),
            right: scale(13),
          }}
          onPress={() => {
            isPasswordSecure
              ? setIsPasswordSecure(false)
              : setIsPasswordSecure(true)
          }}
          Gapp={{
            height: scale(45),
            marginBottom: scale(10),
            marginVertical: verticalScale(-4),
          }}
        />
        {errors.Your_Password && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Your_Password.message}
          />
        )}

        <CustomInput
          name="Address"
          rules={{
            required: 'Address is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Address'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: verticalScale(-4)}}
        />
        {errors.Address && (
          <Validation
            REStyle={{
              position: 'relative',
              bottom: scale(7),
              height: scale(20),
            }}
            title={errors.Address.message}
          />
        )}
        <CustomInput
          name="Zip_code"
          rules={{
            required: 'Zip code is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Zip code'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: scale(-4)}}
        />
        {errors.Zip_code && (
          <Validation
            REStyle={{
              position: 'relative',
              bottom: scale(7),
              height: scale(20),
            }}
            title={errors.Zip_code.message}
          />
        )}
        <CustomInput
          name="Country"
          rules={{
            required: 'Country is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Country'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: verticalScale(-4)}}
        />
        {errors.Country && (
          <Validation
            REStyle={{
              position: 'relative',
              bottom: scale(7),
              height: scale(20),
            }}
            title={errors.Country.message}
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
            right: scale(6),
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
export default CompanySignup
