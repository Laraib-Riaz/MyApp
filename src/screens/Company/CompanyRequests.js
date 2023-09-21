import React, {useState} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'
import Top2navigator from '../../components/Navigators/Top2navigator'

const Params = [
  {
    key: '1',
    Request: 1,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '2',
    Request: 2,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '3',
    Request: 3,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '4',
    Request: 4,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '5',
    Request: 5,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '6',
    Request: 6,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '7',
    Request: 7,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '8',
    Request: 8,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '9',
    Request: 9,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '10',
    Request: 10,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '11',
    Request: 11,
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
]

const CompanyRequest = ({navigation}) => {
  const [data, setData] = useState(Params)
  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(true)

  const AllOne = () => {
    navigation.navigate('companyrtabbar')
  }
  const CreditTwo = () => {
    setBtn1(false)
  }

  //   useEffect(() => {
  //     setData()
  //   }, [])

  console.log('data', data)
  return (
    <View style={styles.MainConatiner}>
      <View
        style={{
          marginVertical: verticalScale(10),
          paddingHorizontal: scale(10),
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
      <CustomArrow onPress={() => navigation.goBack()} HeaderName={'Request'} />

      <View style={styles.YRCon}>
        <Text style={styles.YRText}>Your Requests</Text>
      </View>
      <View style={{flex: 1, marginTop: scale(10)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.MonthCon}>
              <Text style={styles.Texts3}>February</Text>
            </View>

            {data.map((val) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('companyreqdetails')}>
                    <View style={styles.MonthReq}>
                      <Text style={styles.Texts1}>{val.Request}</Text>
                      <Text style={styles.Texts}>{val.Discription}</Text>
                      <Text style={styles.Texts}>{val.Date}</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )
            })}
          </View>

          <View>
            <View style={styles.MonthCon}>
              <Text style={styles.Texts3}>January</Text>
            </View>

            {data.map((val) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('companyReqDetails')}>
                    <View style={styles.MonthReq}>
                      <Text style={styles.Texts1}>{val.Request}</Text>
                      <Text style={styles.Texts}>{val.Discription}</Text>
                      <Text style={styles.Texts}>{val.Date}</Text>
                    </View>
                  </TouchableOpacity>
                </>
              )
            })}
          </View>
          <View style={{height: scale(60)}}></View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
  },
  YRText: {
    fontWeight: '700',
    fontSize: moderateScale(21),
    color: 'black',
    fontFamily: 'mulish',
  },
  YRCon: {
    height: scale(50),
    width: '100%',
    justifyContent: 'flex-end',
  },
  Texts3: {
    fontSize: moderateScale(14),
    fontFamily: 'inter',
    fontStyle: 'normal',
    paddingHorizontal: scale(10),
    fontWeight: '700',
    color: '#525252',
  },
  Texts1: {
    fontSize: moderateScale(12),
    fontFamily: 'inter',
    fontStyle: 'normal',
    paddingHorizontal: scale(10),
    fontWeight: '700',
    color: 'black',
  },
  Texts: {
    fontSize: moderateScale(11),
    fontFamily: 'inter',
    fontStyle: 'normal',
    paddingHorizontal: scale(10),
  },
  MonthReq: {
    height: scale(65),
    width: '100%',
    backgroundColor: '#EFF3FA',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: 'black',
  },
  MonthCon: {
    height: scale(40),
    width: '100%',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 0.5,
    borderColor: 'black',
  },
})
export default CompanyRequest
