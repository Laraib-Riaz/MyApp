import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native'

import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters'
import CustomButton from '../../components/CustomButton'

const SplashScreen2 = ({navigation}) => {
  const [show, setShow] = useState(false)

  return (
    <SafeAreaView style={styles.MainContainer}>
      <View
        style={{
          position: 'absolute',
          top: scale(20),
          zIndex: -10,
        }}>
        <Image
          resizeMode="contain"
          source={require('../../assets/Images/splash.png')}
        />
      </View>
      <View style={styles.ImgBox}>
        <Image
          style={styles.LogoImage}
          source={require('../../assets/Images/Logo.png')}
        />
      </View>

      <Text
        style={{
          height: scale(200),
          width: scale(200),
          borderWidth: 1.4,
          borderColor: 'lightgrey',
          borderRadius: 100,
          position: 'absolute',
          top: scale(160),
          zIndex: -9,
        }}></Text>

      <Image
        style={{
          backgroundColor: '#3E57A7',
          height: scale(35),
          width: scale(35),
          borderRadius: 100,
          position: 'absolute',
          left: scale(35),
          top: scale(30),
        }}
        source={require('../../assets/Images/sheild.png')}
      />
      <Image
        style={{
          backgroundColor: '#3E57A7',
          height: scale(32),
          width: scale(32),
          borderRadius: 100,
          position: 'absolute',
          right: scale(80),
          top: scale(180),
        }}
        source={require('../../assets/Images/sheild.png')}
      />

      <View style={styles.TwoImgBox}>
        <Image
          style={styles.OfficerImg}
          source={require('../../assets/Images/star.png')}
        />
      </View>

      <Text style={styles.GetStart}>Lets get started</Text>
      <Text style={styles.Benifit}>Lets benifit from the service</Text>

      <View style={styles.Logobar}>
        <Image
          style={{height: scale(30), width: scale(30)}}
          source={require('../../assets/Images/sheild.png')}
        />
      </View>

      <View style={styles.SlidderBox}>
        <View
          onPress={() => setShow(true)}
          style={[
            styles.Part1,
            {
              backgroundColor: 'grey',
            },
          ]}></View>
        <View
          style={[
            styles.Part1,
            {marginHorizontal: 20, backgroundColor: '#3E57A7'},
          ]}></View>
        <View
          style={[
            styles.Part1,
            {
              backgroundColor: 'grey',
            },
          ]}></View>
      </View>

      <CustomButton
        onPress={() => navigation.navigate('splashscreen3')}
        text={'get started'}
        restyle={{
          width: '100%',
          height: scale(53),
          borderRadius: 70,
        }}
        Textalig={{
          position: 'absolute',
          textTransform: 'capitalize',
          fontFamily: 'mulish',
          fontStyle: 'normal',
          fontSize: moderateScale(18),
        }}
      />

      <View
        style={{
          height: scale(120),
          width: '100%',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            height: scale(120),
            width: scale(90),
            position: 'absolute',
            right: 0,
          }}
          source={require('../../assets/Images/sidebar.png')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  ImgBox: {
    height: scale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoImage: {
    height: scale(300),
    width: scale(330),
    marginTop: scale(55),
  },
  TwoImgBox: {
    height: scale(240),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OfficerImg: {
    height: scale(190),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GetStart: {
    fontSize: moderateScale(28),
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'mulish',
    fontStyle: 'normal',
  },
  Benifit: {
    fontSize: moderateScale(13),
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'mulish',
    fontStyle: 'normal',
    paddingVertical: verticalScale(7),
  },
  Logobar: {
    height: scale(27),
    width: scale(27),
    borderRadius: 100,
    backgroundColor: '#3E57A7',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: scale(100),
    top: scale(30),
  },
  SlidderBox: {
    height: scale(40),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Part1: {
    height: scale(4),
    width: scale(25),
  },
})
export default SplashScreen2
