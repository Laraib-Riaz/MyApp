import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'

const IndividualReqDetails = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <CustomArrow
        onPress={() => navigation.goBack()}
        HeaderName={'Requests'}
      />
      <View style={styles.HeadingCon}>
        <Text style={styles.TopText}>Requests details</Text>
      </View>
      <View style={styles.MainBody}>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Description :</Text>
          <Text style={styles.Texts1}>about request</Text>
        </View>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Date :</Text>
          <Text style={styles.Texts1}>12/12/2022</Text>
        </View>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Amount Paid :</Text>
          <Text style={styles.Texts1}>$30</Text>
        </View>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Service :</Text>
          <Text style={styles.Texts1}>Patroling</Text>
        </View>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Number of petrols :</Text>
          <Text style={styles.Texts1}>5</Text>
        </View>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Days :</Text>
          <Text style={styles.Texts1}>5</Text>
        </View>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Time :</Text>
          <Text style={styles.Texts1}>3:00 AM to 3:00 PM</Text>
        </View>
        <View style={styles.BodyText}>
          <Text style={styles.Texts}>Location :</Text>
          <Text style={styles.Texts1}>area 51</Text>
        </View>
      </View>
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
  HeadingCon: {
    width: '100%',
    justifyContent: 'flex-end',
    paddingVertical: verticalScale(18),
  },
  TopText: {
    fontSize: moderateScale(24),
    fontFamily: 'mulish',
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'black',
    textTransform: 'capitalize',
  },
  MainBody: {
    height: scale(350),
    width: '100%',
  },
  Texts: {
    color: 'black',
    fontFamily: 'mulish',
    fontStyle: 'normal',
    fontSize: moderateScale(16),
    fontWeight: '700',
  },
  Texts1: {
    color: 'black',
    fontFamily: 'mulish',
    fontStyle: 'normal',
    fontSize: moderateScale(16),
    paddingHorizontal: scale(5),
  },
  BodyText: {
    flexDirection: 'row',
    marginVertical: verticalScale(6),
  },
})
export default IndividualReqDetails
