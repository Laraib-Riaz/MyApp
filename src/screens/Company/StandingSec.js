import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
  TextInput,
  Image,
  Button,
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/AntDesign'
import CustomButton from '../../components/CustomButton'
import Topnavigator from '../../components/Navigators/Topnavigator'
import MapOC from '../../components/Map/MapOC'
import CustomArrow from '../../components/CustomArrow'
import DatePicker from 'react-native-date-picker'

const StandingSeq = ({navigation}) => {
  const [btn3, setBtn3] = useState(true)
  const [btn2, setBtn2] = useState(false)
  const [btn1, setBtn1] = useState(false)

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const DebitThree = () => {
    navigation.navigate('companystandseq')
  }
  const AllOne = () => {
    navigation.navigate('companyhome')
  }
  const CreditTwo = () => {
    navigation.navigate('companypatrolservice')
  }
  return (
    <View style={styles.MainContainer}>
      <CustomArrow
        onPress={() => navigation.goBack()}
        HeaderName={'New Requests'}
      />
      {/* <Button title="Open" onPress={() => setOpen(true)} /> */}

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Topnavigator
            All={AllOne}
            AllText={{
              color: btn1 ? 'white' : 'black',
            }}
            AllBG={{
              backgroundColor: btn1 ? '#435CA8' : '#D7D7D7',
            }}
            Credit={CreditTwo}
            CreditText={{
              color: btn2 ? 'white' : 'black',
            }}
            BGCOLOR={{
              backgroundColor: btn2 ? '#435CA8' : '#D7D7D7',
            }}
            Debit={DebitThree}
            DebitText={{
              color: btn3 ? 'white' : 'black',
            }}
            DebitBG={{
              backgroundColor: btn3 ? '#435CA8' : '#D7D7D7',
              flex: 1.5,
            }}
            NameOne={'On demand'}
            NameTwo={'Patroling'}
            NameThree={'standing security'}
          />
        </View>

        <Text style={styles.MainText}>Standing security</Text>

        <Text style={{marginTop: scale(8)}}>
          Please select the starting and ending day
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Sun</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Mon</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Tue</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Wed</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Thu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Fri</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Sat</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: scale(4)}}>Service start and end date</Text>

        <View style={styles.DatePicker}>
          <Text
            style={{
              paddingHorizontal: scale(10),
              fontSize: moderateScale(18),
              color: '#9093A3',
            }}>
            10/10/2010
          </Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setOpen(true)}>
            <Text style={styles.Date}>Start Date</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.DatePicker, {marginVertical: verticalScale(10)}]}>
          <Text
            style={{
              paddingHorizontal: scale(10),
              fontSize: 18,
              color: '#9093A3',
            }}>
            10/10/2010
          </Text>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setOpen(true)}>
            <Text style={[styles.Date, {marginHorizontal: scale(5)}]}>
              End Date
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: scale(4)}}>Service Addresss</Text>

        <View style={styles.DatePicker}>
          <Text
            style={{
              paddingHorizontal: verticalScale(25),
              fontSize: moderateScale(20),
              color: '#9093A3',
            }}>
            Address prefilled
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{position: 'relative', right: scale(24)}}>
            <FontAwesome5 name="map-marker-alt" size={23} color={'#435CA8'} />
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: scale(9)}}>How many patrols daily.</Text>
        <TextInput placeholder="01" style={styles.InputPatrol} />

        <Text style={{marginTop: scale(5)}}>Shifts start timing.</Text>
        <TextInput placeholder="10:30 AM" style={styles.InputPatrol} />

        <Text style={{marginTop: scale(5)}}>Speficic post orders.</Text>
        <TextInput style={styles.InputPatrol2} />

        <View style={styles.Map}>
          <MapOC />
        </View>

        <CustomButton
          text={'select post orders'}
          restyle={{
            height: scale(50),
            borderRadius: 20,
          }}
          Textalig={{
            position: 'absolute',
            fontSize: moderateScale(12),
          }}
          IconName={'arrowdown'}
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

        <CustomButton
          text={'confirm request'}
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
          restyle={{
            width: '80%',
            height: scale(50),
          }}
        />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(15),
    backgroundColor: 'white',
  },
  Map: {
    height: scale(150),
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(12),
  },
  HeaderText: {
    width: '90%',
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    position: 'relative',
    right: scale(14),
  },
  ArrowContainer: {
    justifyContent: 'space-around',
    height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
  MainText: {
    fontSize: moderateScale(30),
    fontWeight: '600',
    color: 'black',
  },
  WeekBox: {
    height: scale(38),
    width: scale(38),
    backgroundColor: '#435CA8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(3),
  },
  WText: {
    color: '#FFF',
  },
  DatePicker: {
    backgroundColor: '#EFF3FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: 'lightgrey',
    borderRadius: moderateScale(20),
    height: scale(47),
    alignItems: 'center',
  },
  Date: {
    paddingHorizontal: scale(10),
    color: '#435CA8',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  Toggle: {
    height: scale(50),
    marginVertical: verticalScale(15),
    flexDirection: 'row',
  },
  InputPatrol2: {
    backgroundColor: '#EFF3FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: 'lightgrey',
    borderRadius: 20,
    height: scale(70),
    alignItems: 'center',
    paddingHorizontal: scale(20),
    color: 'black',
  },
  InputPatrol: {
    backgroundColor: '#EFF3FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: moderateScale(1.5),
    borderColor: 'lightgrey',
    borderRadius: 20,
    height: scale(47),
    alignItems: 'center',
    paddingHorizontal: scale(20),
    color: 'black',
  },
})
export default StandingSeq
