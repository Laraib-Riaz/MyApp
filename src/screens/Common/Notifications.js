import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'

const Params = [
  {
    key: '1',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '2',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '3',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '4',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '5',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '6',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '7',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '8',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
  {
    key: '9',
    Request: 'Upload successful',
    Discription: 'Profile picture upload successfully',
    Date: '02:35 PM',
  },
]

const Notifications = ({navigation}) => {
  const [data, setData] = useState(Params)

  return (
    <View style={styles.Maincontainer}>
      <CustomArrow
        onPress={() => navigation.goBack()}
        HeaderName={'Notifications'}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((val, key) => {
          return (
            <>
              <TouchableOpacity>
                <View style={styles.NotBox}>
                  <Text style={styles.Text1}>{val.Request}</Text>
                  <Text style={styles.Text2}>{val.Discription}</Text>
                  <Text style={styles.Text3}>{val.Date}</Text>
                </View>
              </TouchableOpacity>
            </>
          )
        })}
        <View style={{height: scale(20)}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(15),
    alignItems: 'center',
    backgroundColor: 'white',
  },
  HeaderText: {
    width: '90%',
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    position: 'relative',
    right: 14,
  },
  ArrowContainer: {
    justifyContent: 'space-around',
    height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },

  NotificationBody: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  NotBox: {
    height: scale(70),
    width: scale(300),
    backgroundColor: '#EFF3FA',
    borderRadius: 15,
    marginVertical: verticalScale(5),
    borderWidth: moderateScale(1.8),
    borderColor: 'lightgrey',
    justifyContent: 'center',
    paddingHorizontal: scale(15),
  },
  Text1: {
    color: 'black',
    fontWeight: '600',
  },
  Text2: {
    fontSize: moderateScale(11),
    color: 'black',
    opacity: 0.6,
  },
  Text3: {
    fontSize: moderateScale(11),
    color: 'black',
    opacity: 0.6,
  },
})
export default Notifications
