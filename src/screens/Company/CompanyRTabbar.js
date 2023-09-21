import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo'
import Top2navigator from '../../components/Navigators/Top2navigator'

const CompanyRTabbar = ({navigation}) => {
  const [btn1, setBtn1] = useState(true)
  const [btn2, setBtn2] = useState(false)

  const AllOne = () => {
    setBtn1(true)
    setBtn2(false)
  }
  const CreditTwo = () => {
    setBtn2(false)
    setBtn1(true)
    navigation.navigate('companyrequest')
  }
  return (
    <View style={styles.MainContainer}>
      <View
        style={{
          marginVertical: verticalScale(10),
        }}>
        <Top2navigator
          NameOne={'Current Requests'}
          All={AllOne}
          AllText={{
            color: btn1 ? 'white' : 'black',
          }}
          AllBG={{
            backgroundColor: btn1 ? '#435CA8' : '#D7D7D7',
          }}
          Credit={CreditTwo}
          NameTwo={'All Requests'}
          CreditText={{
            color: btn2 ? 'white' : 'black',
          }}
          BGCOLOR={{
            backgroundColor: btn2 ? '#435CA8' : '#D7D7D7',
          }}
        />
      </View>

      <TouchableOpacity style={styles.Requests}>
        <View style={styles.First}>
          <View style={styles.Profile}>
            <Image
              resizeMode="cover"
              style={styles.Profile}
              source={require('../../assets/Images/boy.jpg')}
            />
          </View>
        </View>
        <View style={styles.ProfileName}>
          <Text style={styles.TextName}>Nick Johnson</Text>
          <Text style={styles.TextName3}>Has accepted your request..</Text>
        </View>
        <View style={styles.ConfirmReq}>
          <TouchableOpacity
            style={styles.CancelReq}
            onPress={() => navigation.navigate('companychat')}>
            <Entypo name="chat" size={25} color="#435CA8" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.CancelReq}>
            <Entypo name="info" size={25} color="#435CA8" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: scale(10),
    alignItems: 'center',
  },
  Requests: {
    height: scale(65),
    width: '90%',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    marginVertical: verticalScale(5),
  },
  First: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Profile: {
    height: scale(50),
    width: scale(50),
    backgroundColor: 'black',
    borderRadius: 100,
  },
  ProfileName: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
  },
  TextName: {
    color: '#435CA8',
    fontFamily: 'muslish',
    fontStyle: 'normal',
    fontSize: moderateScale(17),
    fontWeight: '700',
  },
  TextName1: {
    color: 'black',
    fontFamily: 'muslish',
    fontStyle: 'normal',
    fontSize: moderateScale(13),
    fontWeight: '600',
    opacity: 0.7,
  },
  ConfirmReq: {
    width: '35%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CancelReq: {
    height: scale(40),
    width: scale(40),
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextName3: {
    color: 'black',
    fontFamily: 'muslish',
    fontStyle: 'normal',
    fontSize: moderateScale(11),
    fontWeight: '700',
    opacity: 0.7,
  },
})
export default CompanyRTabbar
