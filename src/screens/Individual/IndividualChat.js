import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
  Keyboard,
} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import {useForm} from 'react-hook-form'
import ChatBoxConatiner from '../../components/ChatBoxContainer'
import {Modal} from 'react-native-paper'
import PickerBox from '../../components/PickerBox'

const IndividualChat = ({navigation}) => {
  const [text, setText] = useState('')
  const [newText, setNewText] = useState('')
  const [data, setData] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [show, setShow] = useState(false)

  console.log('text', text)
  const {
    control,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {
    // navigation.navigate('Home')
  }
  const chat = [
    {
      message_id: 1,
      data_type: 'text',
      user_massage: 'hello world',
      created_at: 'Just now',
      data_resource: 'None',
      sender_id: 1,
    },
    {
      message_id: 2,
      data_type: 'text',
      user_massage: 'hi world',
      created_at: 'Just now',
      data_resource: 'None',
      sender_id: 2,
    },
    {
      message_id: 1,
      data_type: 'text',
      user_massage: newText,
      created_at: 'Just now',
      data_resource: 'None',
      sender_id: 1,
    },
    {
      message_id: 2,
      data_type: 'text',
      user_massage: 'hi world',
      created_at: 'Just now',
      data_resource: 'None',
      sender_id: 2,
    },
  ]

  const handleSubmit = () => {
    if (!data) {
      setNewText(text)
      setText('')
    } else {
      alert('hbhbh')
    }
  }
  const showInput = () => {
    return setShow(false)
  }

  const handleChange = (text) => setText(text)
  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderText}>
        <View style={styles.ProfileCon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/Images/leftho.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileCon2}>
          <View style={styles.Dp1}>
            <TouchableOpacity>
              <View
                style={{
                  height: scale(46),
                  width: scale(46),
                  borderRadius: 100,
                  backgroundColor: '#DCDCDC',
                }}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Dp2}>
            <TouchableOpacity>
              <Text style={styles.Text1}>Sarah Berliane</Text>
              <Text style={styles.Text2}>Online</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProfileCon3}>
          <TouchableOpacity>
            <Image source={require('../../assets/Images/cal.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.MessageCon}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={chat}
          keyExtractor={(item) => item.userId}
          renderItem={({item}) => {
            return <ChatBoxConatiner data={item} />
          }}
        />
      </View>
      <View style={styles.ChatBottomCon}>
        <View style={styles.BottomP1}>
          <TouchableOpacity>
            <FontAwesome name="microphone" color={'#435CA8'} size={23} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Feather name="plus" color={'#435CA8'} size={28} />
          </TouchableOpacity>
        </View>
        <View style={styles.BottomP2} onPress={showInput}>
          <TextInput
            onFocus={() => {
              setShow(true)
            }}
            onBlur={() => {
              setShow(false)
            }}
            style={styles.input}
            placeholder="Enter Name"
            onChangeText={handleChange}
            value={text}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.BottomP3}>
          <Image
            style={{height: scale(15), width: scale(15)}}
            source={require('../../assets/Images/send.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: show == true ? 0 : 60,
        }}></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onPress={() => {
          setModalVisible(!modalVisible)
        }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
          style={styles.centeredView1}>
          <View style={styles.CardContainer}>
            <PickerBox />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView1: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardContainer: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeaderText: {
    height: scale(80),
    width: '100%',
    backgroundColor: '#435CA8',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ProfileCon: {
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileCon2: {
    height: '100%',
    width: '70%',
    flexDirection: 'row',
  },
  ProfileCon3: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Dp1: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  Dp2: {
    height: '100%',
    width: '80%',
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  Text1: {
    fontFamily: 'poppins',
    fontWeight: '700',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },
  Text2: {
    fontFamily: 'poppins',
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontStyle: 'normal',
  },
  ChatBottomCon: {
    height: scale(60),
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  BottomP1: {
    height: '70%',
    width: '20%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  BottomP2: {
    height: '70%',
    width: '50%',
  },
  BottomP3: {
    height: '70%',
    width: '13%',
    backgroundColor: '#435CA8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  MessageCon: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: scale(10),
  },
  Person1: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: scale(10),
    marginVertical: verticalScale(5),
    borderRadius: 12,
    padding: scale(10),
    alignSelf: 'flex-start',
    maxWidth: '80%',
    borderWidth: 1.2,
    borderColor: 'lightgrey',
  },
  Person1Text: {
    color: '#000000',
  },
  Person2: {
    backgroundColor: '#435CA8',
    paddingHorizontal: scale(15),
    borderRadius: 12,
    padding: scale(10),
    alignSelf: 'flex-end',
    maxWidth: '80%',
    justifyContent: 'flex-start',
    marginVertical: verticalScale(5),
  },
  Person2Text: {
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 12,
    paddingHorizontal: scale(10),
  },
})
export default IndividualChat
