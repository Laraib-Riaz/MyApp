import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import CustomInput from '../../components/CustomInput'
import {useForm} from 'react-hook-form'
import Map from '../../components/Map/MapOC'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'
import CustomButton from '../../components/CustomButton'
import Topnavigator from '../../components/Navigators/Topnavigator'
import ImagePicker from '../../components/Pickers/ImagePicker'
import TrackingCar from '../../components/Tracker/TrackingCar'
import NewMap from '../../components/Map/NewMap'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const CompanyHome = ({navigation}) => {
  const [btn1, setBtn1] = useState(true)
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [isModalVisible1, setModalVisible1] = useState(false)
  const [modalVisible3, setModalVisible3] = useState(false)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(true)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
    setModalVisible3(false)
  }
  const toggleModal1 = () => {
    setModalVisible(false)
    setModalVisible1(!isModalVisible1)
  }
  const toggleModal3 = () => {
    setModalVisible3(!modalVisible3)
  }

  const toggleModal4 = () => {
    setShow2(true)
    setShow(false)
    setShow5(true)
    setShow4(false)
  }

  const showTab = () => {
    setModalVisible1(!isModalVisible1)
    setShow(true)
    setShow4(true)
    setShow2(false)
    setShow3(false)
    setShow5(false)
  }
  const AllOne = () => {
    setBtn1(true)
    navigation.navigate('companyhome')
  }
  const CreditTwo = () => {
    navigation.navigate('companypatrolservice')
  }
  const DebitThree = () => {
    navigation.navigate('companystandseq')
  }

  const {
    control,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {
    // navigation.navigate('Dashboard')
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.Header}>
        <View style={styles.Part1}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../../assets/Images/desh.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.Part2}>
          <Text style={styles.Text5}>peace force</Text>
        </View>
        <View style={styles.Part3}>
          <TouchableOpacity
            onPress={() => navigation.navigate('companyeditprofile')}>
            <FontAwesome name="user-circle-o" size={30} color={'#435CA8'} />
          </TouchableOpacity>
        </View>
      </View>

      {show4 && (
        <View
          style={{
            height: scale(50),
            width: '60%',
            zIndex: 100,
            position: 'absolute',
            top: scale(150),
            left: scale(65),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#435CA8',
              fontWeight: '700',
              fontSize: moderateScale(20),
            }}>
            OFFICER IS EN ROUTE TO YOUR LOCATION
          </Text>
        </View>
      )}

      {!show && (
        <View style={styles.TabBar}>
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
      )}

      {!show5 && (
        <View
          style={{
            zIndex: 99,
            position: 'absolute',
            top: scale(340),
            right: scale(-25),
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingHorizontal: scale(40),
              marginVertical: verticalScale(10),
            }}>
            <TouchableOpacity
              onPress={toggleModal4}
              style={{
                height: scale(33),
                width: scale(115),
                backgroundColor: '#EA4242',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18,
              }}>
              <Text
                style={{
                  fontSize: moderateScale(22),
                  color: 'white',
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                End Job
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!show2 && (
        <View
          style={{
            height: scale(170),
            width: scale(70),
            backgroundColor: 'white',
            zIndex: 100,
            position: 'absolute',
            right: scale(20),
            top: scale(400),
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{textAlign: 'center', color: 'black', fontWeight: '700'}}>
            Contact
          </Text>
          <Text
            style={{textAlign: 'center', color: 'black', fontWeight: '700'}}>
            Guard
          </Text>
          <TouchableOpacity
            style={{
              height: scale(50),
              width: scale(50),
              backgroundColor: '#BAFD9C',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: verticalScale(10),
            }}>
            <FontAwesome5 name="microphone-alt" size={30} color={'#206900'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('companychat')}
            style={{
              height: scale(50),
              width: scale(50),
              backgroundColor: '#C7C5FF',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: scale(25),
                width: scale(30),
              }}
              source={require('../../assets/Images/sms.png')}
            />
          </TouchableOpacity>
        </View>
      )}

      {!show && <TrackingCar onPress={toggleModal3} />}
      <Modal isVisible={modalVisible3}>
        <View style={styles.centeredView1}>
          <View style={styles.MainModalCon}>
            <Text style={styles.TopText}>ONDEMAND</Text>
            <Text style={styles.TopText2}>GUARD RESPONSE</Text>

            <CustomInput
              name="location"
              rules={{
                required: 'location is required',
              }}
              control={control}
              style={styles.textInput}
              textStyle={styles.InputTextStyle}
              placeholder={'Location'}
              keyboardType={'default'}
              restyle={{
                width: scale(300),
                height: scale(50),
                fontSize: moderateScale(15),
                paddingHorizontal: scale(15),
                backgroundColor: 'white',
                color: 'black',
              }}
              multiline={true}
            />

            <CustomInput
              name="Additional_Info"
              rules={{
                required: 'Additional_Info is required',
              }}
              control={control}
              style={styles.textInput}
              textStyle={styles.InputTextStyle}
              placeholder={'How can we help you?'}
              keyboardType={'default'}
              restyle={{
                width: scale(300),
                height: scale(100),
                paddingHorizontal: scale(15),
                fontSize: moderateScale(15),
                color: 'black',
              }}
              multiline={true}
            />

            <View style={styles.BoxPlusContainer}>
              <Text style={styles.AddImageText}>Add Image ( Optional )</Text>
              {/* <TouchableOpacity style={styles.BoxPlus}> */}
              <View
                style={{
                  height: scale(60),
                  width: scale(60),
                  position: 'relative',
                  top: 5,
                }}>
                <ImagePicker Iconname={'plus'} iconsize={40} />
              </View>
            </View>
            <View
              style={[
                styles.BoxPlusContainer,
                {marginVertical: verticalScale(15)},
              ]}>
              <Text style={styles.AddImageText}>Add Video ( Optional )</Text>
              <View
                style={{
                  height: scale(60),
                  width: scale(60),
                  position: 'relative',
                  top: 5,
                }}>
                <ImagePicker Iconname={'plus'} iconsize={40} />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                paddingHorizontal: scale(10),
              }}>
              <TouchableOpacity onPress={toggleModal} style={styles.BottomPlus}>
                <Ionicons name="arrow-forward" size={30} color={'#435CA8'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            width: scale(347),
            position: 'relative',
            right: scale(16),
          }}>
          <View style={styles.CardContainer}>
            <View
              style={{
                height: scale(100),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(18),
                  fontWeight: '600',
                  color: 'black',
                  textTransform: 'uppercase',
                }}>
                sercurity service contract
              </Text>
            </View>
            <View
              style={{
                height: scale(250),
                width: '85%',
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: moderateScale(16),
                    color: 'black',
                  }}>
                  1. This single day service agreement is entered into on
                  [insert date and time of booking], between [insert client
                  name] And, [insert security company name], (service provider)
                  State License number: [Insert state license number]. Services
                  to be rendered under this agreement will be commence at
                  [insert address of job request] , and shall be in force until
                  the responding service provider ends the contract herein at
                  the conclusion of the service via the "End Job" button on The
                  GRID Service Provider Application.
                </Text>
              </ScrollView>
            </View>

            <CustomButton
              onPress={toggleModal1}
              text={'Accept'}
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
              stylz={{
                paddingVertical: verticalScale(65),
              }}
              Textalig={{
                position: 'absolute',
              }}
              restyle={{
                width: scale(250),
                height: scale(52),
              }}
            />
          </View>
        </View>
      </Modal>

      <Modal hasBackdrop={false} isVisible={isModalVisible1}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            position: 'relative',
            bottom: scale(45),
            zIndex: -100,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: scale(20),
              zIndex: -100,
            }}>
            <Text style={styles.TopText}>your amount</Text>

            <View style={styles.Subtotal}>
              <Text style={styles.Text12}>Subtotal</Text>
              <Text>$30.89</Text>
            </View>
            <View style={[styles.Subtotal, {marginTop: scale(10)}]}>
              <Text style={styles.Text12}>Fee</Text>
              <Text>$2.00</Text>
            </View>
            <Text style={{borderBottomWidth: 0.9, borderColor: 'black'}}></Text>

            <View style={[styles.Subtotal, {paddingVertical: scale(15)}]}>
              <Text style={styles.Text10}>Total</Text>
              <Text style={styles.FinalFee}>$30.00</Text>
            </View>

            <Text style={{marginTop: scale(35)}}>Promo Code</Text>
            <TextInput
              placeholder="YOUR PROMO CODE"
              style={styles.InputPatrol}
            />

            <CustomButton
              onPress={showTab}
              text={'proceed'}
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
              stylz={{
                marginVertical: verticalScale(40),
              }}
            />
          </View>
        </View>
      </Modal>

      <CustomInput
        name="Location"
        control={control}
        // style={styles.textInput}
        textStyle={styles.InputTextStyle}
        placeholder={'Location'}
        keyboardType={'default'}
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: scale(100),
          zIndex: 10,
          left: scale(25),
        }}
        restyle={{
          width: scale(290),
          height: scale(42),
        }}
      />

      <View
        style={{
          flex: 1,
        }}>
        <Map />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MidMain: {
    backgroundColor: '#435CA8',
    height: scale(40),
    width: scale(210),
    position: 'absolute',
    top: scale(300),
    zIndex: 20,
    borderRadius: 12,
    flexDirection: 'row',
    left: scale(60),
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  TopViewContainer: {
    height: scale(60),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
    backgroundColor: 'none',
  },
  ProfileContainer: {
    height: scale(50),
    width: scale(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileBox: {
    height: scale(41),
    width: scale(41),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'lightgrey',
    position: 'absolute',
    right: -2,
  },
  TextContainer: {
    height: scale(50),
    width: scale(230),
    paddingHorizontal: scale(12),
  },
  Text1: {
    height: '50%',
    width: '100%',
    fontWeight: '700',
    color: '#02092A',
    paddingTop: moderateScale(6),
    textTransform: 'capitalize',
    fontSize: moderateScale(12),
  },
  Text2: {
    height: '50%',
    width: '100%',
    fontSize: moderateScale(12),
    textTransform: 'capitalize',
    color: 'black',
  },
  TopIcons: {
    height: scale(50),
    width: scale(75),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingRight: scale(10),
  },
  Bottom: {
    justifyContent: 'flex-end',
  },
  Image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  ArrowBox: {
    height: scale(55),
    width: scale(55),
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: scale(40),
    right: scale(25),
    borderWidth: moderateScale(3),
    borderColor: '#435CA8',
  },
  Header: {
    height: scale(70),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  Part1: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Part2: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text5: {
    fontSize: moderateScale(20),
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'black',
    fontFamily: 'mulish',
  },
  Part3: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabBar: {
    paddingHorizontal: scale(20),
    backgroundColor: 'transparent',
    width: '100%',
    position: 'absolute',
    bottom: scale(60),
    zIndex: 10,
  },
  MidText: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: 'white',
    fontFamily: 'mulish',
  },
  CardContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    position: 'absolute',
    bottom: -10,
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
  },
  ModalText: {
    color: '#060606',
    alignContent: 'center',
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  ModalText1: {
    alignContent: 'center',
    fontSize: moderateScale(14),
    fontWeight: '700',
    paddingHorizontal: moderateScale(20),
    color: '#3E57A7',
  },
  TopText: {
    paddingTop: scale(25),
    color: 'white',
    fontSize: moderateScale(22),
    fontWeight: '600',
  },
  TopText2: {
    color: 'white',
    fontSize: moderateScale(22),
    fontWeight: '600',
    paddingBottom: scale(25),
    paddingTop: scale(5),
  },
  Subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text12: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(20),
  },
  Text10: {
    fontSize: moderateScale(17),
    fontWeight: '700',
    color: 'black',
  },
  FinalFee: {
    color: 'black',
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  InputPatrol: {
    backgroundColor: '#EFF3FA',
    borderWidth: 1.5,
    borderColor: 'lightgrey',
    borderRadius: moderateScale(20),
    height: scale(49),
    paddingHorizontal: scale(35),
    color: 'black',
    marginVertical: verticalScale(10),
    fontSize: moderateScale(20),
  },
  centeredView1: {
    flex: 1,
    paddingTop: scale(25),
  },
  centeredView2: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.8,
    paddingTop: scale(90),
  },
  MainModalCon: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
  },
  BottomPlus: {
    height: scale(70),
    width: scale(70),
    borderRadius: 100,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#435CA8',
    marginVertical: verticalScale(10),
  },
  BoxPlus: {
    height: scale(50),
    width: scale(50),
    borderRadius: 100,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: 'grey',
  },
  AddImageText: {
    color: '#000000',
    fontSize: moderateScale(14),
    fontWeight: '600',
    fontFamily: 'aBeeZee',
  },
  BoxPlusContainer: {
    height: scale(80),
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(12),
  },
})
export default CompanyHome
