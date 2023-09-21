import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const services = [
  {id: 1, name: 'Service 1', description: 'Description of the order'},
  {id: 2, name: 'Service 2', description: 'Description of the order'},
  {id: 3, name: 'Service 3', description: 'Description of the order'},
  {id: 4, name: 'Service 3', description: 'Description of the order'},
  {id: 5, name: 'Service 3', description: 'Description of the order'},
  {id: 6, name: 'Service 3', description: 'Description of the order'},
  {id: 7, name: 'Service 7', description: 'Description of the order'},
  {id: 8, name: 'Service 7', description: 'Description of the order'},
  {id: 9, name: 'Service 7', description: 'Description of the order'},
]

const CompanySaved = ({navigation}) => {
  const [data, setData] = useState(services)
  return (
    <View style={styles.MainContainer}>
      <CustomArrow
        onPress={() => navigation.goBack()}
        HeaderName={'Post Services'}
      />
      <View style={styles.HeadingCon}>
        <Text style={styles.TopText}>post saved services</Text>
      </View>

      <View style={{paddingVertical: verticalScale(5)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.BTN}>
                  <View style={styles.FirstCon}>
                    <Text style={styles.FText}>{item.name}</Text>
                    <Text style={styles.FText2}>{item.description}</Text>
                  </View>
                  <View style={styles.SecCon}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('companyeditinfo')}>
                      <Feather name="edit" size={30} color={'#435CA8'} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="delete-outline"
                        size={35}
                        color={'#FF5656'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }}
          />
          <View style={{height: scale(60)}}></View>
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('companyaddinfo')}
        style={styles.PlusIcon}>
        <Entypo name="plus" size={50} color={'#435CA8'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
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
  BTN: {
    height: scale(70),
    width: scale(300),
    backgroundColor: '#EFF3FA',
    borderRadius: 15,
    borderWidth: moderateScale(1),
    borderColor: 'lightgrey',
    flexDirection: 'row',
    marginVertical: verticalScale(6),
  },
  FText: {
    color: 'black',
    fontWeight: '600',
    fontSize: moderateScale(11),
  },
  FText2: {
    fontSize: moderateScale(11),
  },
  FirstCon: {
    height: '100%',
    width: '60%',
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: scale(15),
  },
  SecCon: {
    height: '100%',
    width: '40%',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  IconCon: {
    height: scale(37),
    width: scale(37),
    backgroundColor: '#435CA8',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlusIcon: {
    height: scale(60),
    width: scale(60),
    borderWidth: 4,
    borderColor: '#435CA8',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: scale(80),
    right: scale(40),
    backgroundColor: 'white',
  },
})
export default CompanySaved
