import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import {moderateScale, verticalScale, scale} from 'react-native-size-matters'
import CustomArrow from '../../components/CustomArrow'
import Topnavigator from '../../components/Navigators/Topnavigator'
import AllTransaction from '../../components/TransactionAll'
import TransactionCredit from '../../components/TransactionCredit'
import TransactionDebit from '../../components/TransactionDebit'

const IndividualTransactionAll = ({navigation}) => {
  const [btn1, setBtn1] = useState(true)
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)

  const AllOne = () => {
    setBtn1(true)
    setBtn2(false)
    setBtn3(false)
  }
  const CreditTwo = () => {
    setBtn2(true)
    setBtn1(false)
    setBtn3(false)
  }
  const DebitThree = () => {
    setBtn3(true)
    setBtn1(false)
    setBtn2(false)
  }
  return (
    <View style={styles.MainContainer}>
      <CustomArrow
        onPress={() => navigation.goBack()}
        HeaderName={'Transaction'}
      />
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
        }}
        NameOne={'all'}
        NameTwo={'credit'}
        NameThree={'debit'}
      />

      <View style={{paddingVertical: scale(10), flex: 1}}>
        {btn1 && <AllTransaction />}
        {btn2 && <TransactionCredit />}
        {btn3 && <TransactionDebit />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingTop: scale(15),
    backgroundColor: 'white',
  },
})
export default IndividualTransactionAll
