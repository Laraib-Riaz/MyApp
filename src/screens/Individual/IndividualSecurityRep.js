import React, {useEffect, useState} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  map,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CustomArrow from '../../components/CustomArrow'

const Params = [
  {
    key: '1',
    Request: 'Report of no 1',
    Discription: 'Discription of the order',
    Date: '12/12/2022',
  },
  {
    key: '2',
    Request: 'Report of no 2',
    Discription: 'Discription of the order',
    Date: '12/12/2022',
  },
  {
    key: '3',
    Request: 'Report of no 3',
    Discription: 'Discription of the order',
    Date: '12/12/2022',
  },
  {
    key: '4',
    Request: 'Rep 4',
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '5',
    Request: 'Rep 5',
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '6',
    Request: 'Rep 6',
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '7',
    Request: 'Rep 7',
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '8',
    Request: 'Rep 8',
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
  {
    key: '9',
    Request: 'Rep 9',
    Discription: 'Discription of the order',
    Date: 12 / 12 / 2022,
  },
]

const IndividualSecurityRep = ({navigation}) => {
  const [data, setData] = useState(Params)

  return (
    <View style={styles.MainConatiner}>
      <CustomArrow onPress={() => navigation.goBack()} HeaderName={'Request'} />
      <View style={styles.YRCon}>
        <Text style={styles.YRText}>Security Reports</Text>
      </View>
      <ScrollView
        style={{flex: 1, marginTop: scale(10)}}
        showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}>
          <View style={styles.MonthCon}>
            <Text style={styles.Texts3}>February</Text>
          </View>

          {data.map((val, key) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('individualsrepdetails')}>
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

        <View style={{width: '100%', flexWrap: 'wrap'}}>
          <View style={styles.MonthCon}>
            <Text style={styles.Texts3}>January</Text>
          </View>

          {data.map((val) => {
            return (
              <>
                <TouchableOpacity>
                  <View style={styles.MonthReq1}>
                    <View
                      style={{
                        height: '100%',
                        width: '70%',
                        justifyContent: 'center',
                      }}>
                      <Text style={styles.Texts1}>{val.Request}</Text>
                      <Text style={styles.Texts}>{val.Discription}</Text>
                      <Text style={styles.Texts}>{val.Date}</Text>
                    </View>
                    <View
                      style={{
                        height: '100%',
                        width: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <MaterialIcons name="error" size={30} color={'red'} />
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )
          })}
        </View>
        <View style={{height: scale(80)}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(10),
  },
  YRText: {
    fontWeight: '700',
    fontSize: moderateScale(21),
    color: 'black',
    fontFamily: 'mulish',
    fontStyle: 'normal',
  },
  YRCon: {
    height: scale(50),
    width: '100%',
    justifyContent: 'flex-end',
  },
  Texts3: {
    fontSize: 14,
    fontFamily: 'inter',
    fontStyle: 'normal',
    paddingHorizontal: scale(10),
    fontWeight: '700',
    color: '#525252',
  },
  Texts1: {
    fontSize: 12,
    fontFamily: 'inter',
    fontStyle: 'normal',
    paddingHorizontal: scale(10),
    fontWeight: '700',
    color: 'black',
  },
  Texts: {
    fontSize: 11,
    fontFamily: 'inter',
    fontStyle: 'normal',
    paddingHorizontal: scale(10),
    color: 'black',
    opacity: 0.6,
  },
  MonthReq: {
    height: scale(65),
    width: '100%',
    backgroundColor: '#EFF3FA',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: 'black',
  },
  MonthReq1: {
    height: scale(65),
    width: '100%',
    backgroundColor: '#EFF3FA',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
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
export default IndividualSecurityRep
