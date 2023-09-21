import React, {useContext} from 'react'
import {StyleSheet, Text, View, Pressable, Image} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'

const ChatBoxConatiner = (props) => {
  const data = props.data
  console.log('AAATTT : ', data.user_id)
  return (
    <View style={styles.chatBoxContainer}>
      <View
        style={{
          flexDirection: data.sender_id != 1 ? 'row' : 'row-reverse',
          paddingLeft: data.sender_id != 1 ? 5 : 10,
        }}>
        {data.data_type == 'text' && (
          <View
            style={[
              styles.messageBox,
              {
                backgroundColor: data.sender_id != 1 ? '#F1F1F1' : '#435CA8',
              },
            ]}>
            <Text
              style={[
                styles.messageText,
                {
                  color: data.sender_id != 1 ? '#000000' : '#ffff',
                },
              ]}>
              {data.user_massage}
            </Text>
          </View>
        )}
      </View>

      <View
        style={[
          styles.JustNowCon,
          {
            flexDirection: data.sender_id != 1 ? 'row' : 'row-reverse',
            paddingLeft: data.sender_id != 1 ? 5 : 10,
          },
        ]}>
        <Text style={styles.timeText}>{data.created_at}</Text>
      </View>
    </View>
  )
}

export default ChatBoxConatiner

const styles = StyleSheet.create({
  messageBox: {
    marginVertical: verticalScale(5),
    borderRadius: 12,
    padding: scale(10),
    maxWidth: '80%',
    borderWidth: 1.2,
    borderColor: 'lightgrey',
  },
  messageText: {
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  timeText: {
    color: '#000000',
  },
  chatBoxContainer: {},
})
