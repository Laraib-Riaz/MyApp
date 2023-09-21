import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import InpToggle from '../../components/Toggle/InpToggle'

const CompanyEditInfo = ({navigation}) => {
  const {
    control,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})
  return (
    <View style={styles.MainContainer}>
      <CustomArrow onPress={() => navigation.goBack()} HeaderName={'Edit'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.FirstBox}>
          <Text style={styles.MainHeading}>Edit Information</Text>
        </View>
        <CustomInput
          name="Name_of_Location"
          rules={{
            required: 'Name of Location is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Name of Location'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginTop: scale(5),
            marginVertical: verticalScale(-5),
          }}
          fontSize={13}
        />
        <CustomInput
          name="Address of Location"
          rules={{
            required: 'Address of Location is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Address of Location'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginVertical: verticalScale(-5),
          }}
          fontSize={13}
        />
        <CustomInput
          name="Phone Number"
          rules={{
            required: 'Phone Number is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Phone Number'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginVertical: verticalScale(-5),
          }}
          fontSize={13}
        />
        <CustomInput
          name="Gate Code"
          rules={{
            required: 'Gate Code is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Gate Code'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginVertical: verticalScale(-5),
          }}
          fontSize={13}
        />

        <InpToggle Text={'Quite Time Rule'} />
        <InpToggle
          Text={'Lock UPS'}
          ReCreate={{
            marginVertical: verticalScale(8),
          }}
          fontSize={13}
        />
        <CustomInput
          name="Two Company"
          rules={{
            required: 'Two Company is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Two Company'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginVertical: verticalScale(-1),
          }}
          fontSize={13}
        />
        <CustomInput
          name="Two Company Phone"
          rules={{
            required: 'Two Company Phone is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Two Company Phone'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginVertical: verticalScale(-8),
          }}
          fontSize={13}
        />
        <InpToggle Text={'Two Red Zone Parking Violation'} />
        <InpToggle
          Text={'Can Security sign for permit only Towing'}
          ReCreate={{
            marginVertical: verticalScale(8),
          }}
        />
        <CustomInput
          name="Maintenance on call name"
          rules={{
            required: 'Maintenance on call name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Maintenance on call name'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginVertical: verticalScale(-1),
          }}
          fontSize={13}
        />
        <CustomInput
          name="Maintenance on chone call"
          rules={{
            required: 'Maintenance on chone call is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Maintenance on chone call'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
          }}
          Hello={{
            marginVertical: verticalScale(-8),
          }}
          fontSize={13}
        />
        <CustomInput
          name="Additional notes (optional)"
          rules={{
            required: 'Additional notes is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Additional notes (optional)'}
          keyboardType={'default'}
          restyle={{
            height: scale(40),
            // fontSize: moderateScale(10),
          }}
          Hello={{
            fontSize: moderateScale(100),
            marginVertical: verticalScale(-1),
          }}
          fontSize={13}
        />
        <CustomButton
          // onPress={handleSubmit(onSubmit)}
          onPress={() => navigation.goBack()}
          text={'saved changes'}
          IconName={'arrowright'}
          Iconsize={23}
          IconColor={'#FFF'}
          CircleStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: scale(6),
          }}
          restyle={{
            height: scale(55),
            width: '80%',
          }}
        />
        <View style={{height: scale(60)}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    backgroundColor: 'white',
  },
  FirstBox: {
    height: scale(60),
    width: '100%',
    justifyContent: 'flex-end',
  },
  MainHeading: {
    fontSize: moderateScale(22),
    fontFamily: 'mulish',
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'black',
    position: 'relative',
    bottom: scale(5),
  },
})
export default CompanyEditInfo
