import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {
  moderateScale,
  scale,
  verticalScale,
  moderateVerticalScale,
} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'
import CustomButton from '../../components/CustomButton'
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/FontAwesome'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'
import {useForm} from 'react-hook-form'
import MapOC from '../../components/Map/MapOC'
import ImagePicker from '../../components/Pickers/ImagePicker'

const CompanyMap = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {}

  return (
    <View style={styles.MainContainer}>
      <CustomArrow
        Newstyle={{
          marginHorizontal: moderateScale(20),
          marginVertical: verticalScale(15),
        }}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.MapContainer}>
        <MapOC />
      </View>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>request an officer</Text>
        <View style={styles.ButtonIcon}>
          <Icon name={'arrowright'} size={16} color={'white'} />
        </View>
      </TouchableOpacity>

      <View style={styles.Myloc}>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            source={require('../../assets/Images/myloc.png')}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView1}>
          <View style={styles.MainModalCon}>
            <Text style={styles.TopText}>Additional Infromation</Text>

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
            {errors.location && <Validation title={errors.location.message} />}

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
                // paddingBottom: 70,vhhh
                // textAlignVertical: 'top',
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

            <TouchableOpacity
              onPress={() => setModalVisible2(!modalVisible2)}
              style={styles.BottomPlus}>
              <Icon name="arrowright" size={30} color={'#435CA8'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2)
        }}>
        <View style={styles.centeredView2}>
          <View style={styles.CardContainer}>
            <View
              style={{
                height: scale(100),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(20),
                  fontWeight: '700',
                  color: 'black',
                }}>
                Agreement
              </Text>
            </View>
            <View
              style={{
                height: scale(250),
                width: '85%',
              }}>
              <ScrollView>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: moderateVerticalScale(16),
                    color: 'black',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </ScrollView>
            </View>

            <CustomButton
              onPress={() => navigation.navigate('individualpromo')}
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
                right: scale(6),
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
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  ButtonContainer: {
    height: scale(55),
    width: scale(150),
    position: 'absolute',
    left: scale(20),
    top: scale(450),
    flexDirection: 'column',
    backgroundColor: '#435CA8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000000',
  },
  ButtonText: {
    fontFamily: 'mulish',
    fontSize: moderateScale(11),
    fontStyle: 'normal',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ButtonIcon: {
    height: scale(28),
    width: scale(28),
    borderRadius: 100,
    backgroundColor: 'rgba(6, 5, 24, 0.5);',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#435CA8',
  },
  Myloc: {
    height: scale(60),
    width: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: scale(20),
    right: scale(10),
  },
  centeredView1: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: ' rgba(6, 5, 24, 0.63)',
    opacity: 0.8,
    // position: 'relative',
    // paddingHorizontal: scale(20),
    // paddingVertical: verticalScale(80),
    // zIndex: 10,
  },
  centeredView2: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    backgroundColor: ' rgba(6, 5, 24, 0.63)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.8,
  },
  MainModalCon: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
  },
  BottomPlus: {
    height: scale(70),
    width: verticalScale(70),
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
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(12),
  },
  TopText: {
    fontFamily: 'mulish',
    fontSize: scale(23),
    color: '#FFF',
    fontWeight: '700',
    marginVertical: verticalScale(10),
  },
  CardContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
  MapContainer: {
    height: '100%',
    width: '100%',
    zIndex: -8,
    position: 'relative',
    bottom: scale(70),
  },
})
export default CompanyMap
