import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import {useDispatch} from 'react-redux'
import AccountSelectionCard from '../../components/AccountSelectionCard'
import CustomButton from '../../components/CustomButton'
import {register} from '../../redux/actions/AuthActions'

const AccountType = ({navigation, route}) => {
  const [itemsValue, setItemsValue] = useState('')
  // const {data} = route.params

  // console.log('data====>', data)

  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  // const response_status = useSelector((state) => state.auth.response_status)
  // const SocialDetails = useSelector((state) => state.auth.socialLoginDetail)

  const SelectItemsHandler = (id) => {
    if (itemsValue == id) {
      setItemsValue(id)
    } else {
      setItemsValue(id)
    }
  }

  const SelectionType = [
    {
      id: 1,
      title: 'Individual',
      image: require('../../assets/Images/path.png'),
      selected: false,
    },
    {
      id: 2,
      title: 'Company',
      image: require('../../assets/Images/brief.png'),
      selected: false,
    },
  ]

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.ImgContainer}>
        <Image
          style={{height: scale(270), width: scale(300)}}
          resizeMode="cover"
          source={require('../../assets/Images/Logo.png')}
        />
      </View>
      <Text style={styles.firstText}>Account type</Text>
      <Text style={styles.Stext}>Lorem ipsemLorem ipsem Lorem</Text>

      <View style={styles.BoxContainer}>
        <FlatList
          horizontal
          data={SelectionType}
          keyExtractor={(items) => items.id}
          renderItem={({item, ind}) => {
            return (
              <AccountSelectionCard
                onPress={() => SelectItemsHandler(item.id)}
                selectedItem={itemsValue}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            )
          }}
        />
      </View>
      <CustomButton
        // onPress={}
        onPress={() => {
          itemsValue == 1
            ? navigation.navigate('signup', {role_id: itemsValue})
            : navigation.navigate('companysignup', {role_id: itemsValue})
        }}
        text={'continue'}
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
          paddingVertical: 60,
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    alignSelf: 'center',
    height: '30%',
    aspectRatio: 1 / 1,
  },
  headerText: {
    color: '#000000',
    width: '85%',
    alignSelf: 'center',
    fontSize: 22,
    paddingVertical: 10,
  },
  subtext: {
    color: '#000000B2',
    width: '85%',
    alignSelf: 'center',
    fontSize: 14,
  },

  containerStyle: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '10%',
  },
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    backgroundColor: 'white',
  },
  ImgContainer: {
    height: scale(220),
    alignItems: 'center',
  },
  ImgBox: {
    height: scale(140),
    width: scale(140),
    backgroundColor: 'black',
  },
  firstText: {
    textAlign: 'center',
    height: scale(35),
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: 'black',
  },
  Stext: {
    textAlign: 'center',
    height: scale(30),
    color: 'black',
    paddingVertical: verticalScale(5),
  },
  BoxContainer: {
    height: scale(200),
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  Boxes: {
    height: scale(160),
    width: scale(145),
    backgroundColor: '#435CA8',
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  Icons: {
    height: scale(35),
    width: scale(35),
    color: '#435CA8',
  },
  IconBox: {
    height: scale(55),
    width: scale(55),
    backgroundColor: '#FFF',
    borderRadius: moderateScale(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconText: {
    marginTop: scale(10),
    fontWeight: '600',
    fontSize: moderateScale(15),
    color: '#FFF',
  },
})
export default AccountType
