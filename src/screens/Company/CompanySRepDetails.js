import React, {useState} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import ReportMap from '../../components/Map/ReportMap'

const IndividualSRepDetails = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.MainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.ArrowContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.Cancel}>
                <Entypo name="cross" size={35} color={'red'} />
              </TouchableOpacity>
            </View>

            <View style={styles.ImageCon}>
              <Image
                style={styles.ImageBox}
                resizeMode="contain"
                source={require('../../assets/Images/balcony.jpg')}
              />
            </View>

            <View style={styles.Pic1Con}>
              <Text style={styles.Pic1Text}>Picture: 1</Text>
            </View>
            <View style={styles.DescCon}>
              <Text style={styles.DescText}>
                Description that was added by the guard.
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomArrow
          onPress={() => navigation.goBack()}
          HeaderName={'Report Details'}
        />
        <View style={styles.HeadingCon}>
          <Text style={styles.TopText}>Report details</Text>
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

        <View style={styles.Map}>
          <ReportMap onPress={() => setModalVisible(true)} />
        </View>

        <View style={{paddingVertical: 25}}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.BTN}>
            <View style={styles.FirstCon}>
              <Text style={styles.FText}>Download Security Report</Text>
              <Text style={styles.FText2}>PDF File</Text>
            </View>
            <View style={styles.SecCon}>
              <View style={styles.IconCon}>
                <AntDesign name="arrowdown" size={20} color={'#FFF'} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.BTN, {marginVertical: verticalScale(13)}]}>
            <View style={styles.FirstCon}>
              <Text style={styles.FText}>Send SMS</Text>
              <Text style={styles.FText2}>Link format</Text>
            </View>
            <View style={styles.SecCon}>
              <View style={styles.IconCon}>
                <AntDesign name="arrowright" size={20} color={'#FFF'} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BTN}>
            <View style={styles.FirstCon}>
              <Text style={styles.FText}>Send Email</Text>
              <Text style={styles.FText2}>PDF File</Text>
            </View>
            <View style={styles.SecCon}>
              <View style={styles.IconCon}>
                <AntDesign name="arrowright" size={20} color={'#FFF'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height: scale(60)}}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(15),
    backgroundColor: 'white',
  },
  HeadingCon: {
    width: '100%',
    justifyContent: 'flex-end',
    paddingVertical: verticalScale(15),
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
    height: scale(270),
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
  BTN: {
    height: scale(60),
    width: scale(300),
    backgroundColor: '#EFF3FA',
    borderRadius: 15,
    borderWidth: moderateScale(1.8),
    borderColor: '#435CA8',
    flexDirection: 'row',
  },
  FText: {
    color: 'black',
    fontWeight: '600',
  },
  FText2: {
    fontSize: moderateScale(11),
  },
  FirstCon: {
    height: '100%',
    width: '65%',
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: scale(15),
  },
  SecCon: {
    height: '100%',
    width: '35%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconCon: {
    height: scale(37),
    width: scale(37),
    backgroundColor: '#435CA8',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Map: {
    height: scale(150),
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(12),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(40),
  },
  modalView: {
    height: '100%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  ArrowContainer: {
    height: scale(50),
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Cancel: {
    height: scale(40),
    width: scale(40),
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  ImageCon: {
    height: scale(230),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBox: {
    height: scale(230),
    width: '100%',
  },
  Pic1Con: {
    height: scale(20),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Pic1Text: {
    fontFamily: 'aBeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'white',
  },
  DescCon: {
    width: '65%',
    marginVertical: verticalScale(6),
    justifyContent: 'center',
  },
  DescText: {
    fontFamily: 'mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'white',
    fontSize: moderateScale(14),
  },
})
export default IndividualSRepDetails
