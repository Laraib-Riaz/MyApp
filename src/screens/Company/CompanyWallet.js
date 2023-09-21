import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import CustomButton from '../../components/CustomButton'
import Transactions from '../../components/Transactions'
import CustomArrow from '../../components/CustomArrow'

const CompanyWallet = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <CustomArrow onPress={() => navigation.goBack()} HeaderName={'Wallet'} />

      <View style={styles.WalletBox}>
        <View style={styles.CDebit}>
          <Text style={styles.CurrenText}>Current Balance</Text>
        </View>
        <View style={styles.CDebit}>
          <Text style={styles.Balance}>$500,000,000.00</Text>
        </View>

        <View style={styles.TwoBox}>
          <View style={styles.Boxes}>
            <Text style={styles.CDebitText}>last debit</Text>
            <Text
              style={{
                color: '#17D85C',
                fontWeight: '800',
                fontFamily: 'inter',
              }}>
              +$100,000,00
            </Text>
          </View>
          <View style={styles.Boxes}>
            <Text style={styles.CDebitText}>last debit</Text>
            <Text
              style={{
                color: '#FF6854',
                fontWeight: '800',
                fontFamily: 'inter',
              }}>
              -$300,000
            </Text>
          </View>
        </View>

        <CustomButton
          text={'add credit'}
          IconName={'arrowright'}
          Iconsize={17}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'rgba(6, 5, 24, 0.28)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: scale(6),
          }}
          restyle={{
            height: scale(40),
            backgroundColor: '#07A965',
          }}
          stylz={{
            width: '90%',
            position: 'relative',
            bottom: scale(20),
          }}
          Textalig={{
            textTransform: 'capitalize',
            fontSize: moderateScale(18),
            fontFamily: 'mulish',
            color: '#FFF',
          }}
        />
      </View>

      <Text style={styles.historyText}>Transaction history</Text>

      <View
        style={{
          flex: 1,
          paddingBottom: scale(70),
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Transactions
            FirstText={'Money Received'}
            Date={'07/07/2022'}
            Amount={'+$7,000,000'}
          />
          <Transactions
            FirstText={'Patroling Service'}
            Date={'07/07/2022'}
            Amount={'-$7,000,000'}
            color={{color: '#FF6854'}}
          />
          <Transactions
            FirstText={'Money Received'}
            Date={'07/07/2022'}
            Amount={'+$7,000,000'}
          />
          <Transactions
            FirstText={'Money Received'}
            Date={'07/07/2022'}
            Amount={'+$7,000,000'}
          />
          <Transactions
            FirstText={'Money Received'}
            Date={'07/07/2022'}
            Amount={'+$7,000,000'}
          />
        </ScrollView>
      </View>

      <CustomButton
        onPress={() => navigation.navigate('transactionall')}
        text={'all transactions'}
        IconName={'arrowright'}
        Iconsize={20}
        IconColor={'#FFF'}
        CircleStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          position: 'relative',
          left: scale(15),
        }}
        stylz={{
          position: 'absolute',
          bottom: scale(0),
          right: scale(50),
        }}
        restyle={{
          width: '100%',
          height: verticalScale(50),
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(15),
    backgroundColor: 'white',
  },
  HeaderText: {
    width: '90%',
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    position: 'relative',
    right: scale(14),
  },
  ArrowContainer: {
    justifyContent: 'space-around',
    height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
  WalletBox: {
    backgroundColor: '#435CA8',
    height: scale(200),
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  CDebit: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 12,
    alignItems: 'center',
    height: scale(35),
  },
  CurrenText: {
    fontSize: moderateScale(13),
    color: 'lightgrey',
    position: 'absolute',
    bottom: 0,
    fontFamily: 'inter',
  },
  Balance: {
    fontSize: moderateScale(23),
    color: 'white',
    fontWeight: '600',
    fontFamily: 'inter',
  },
  TwoBox: {
    height: scale(84),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Boxes: {
    height: scale(60),
    backgroundColor: 'white',
    width: '40%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CDebitText: {
    textTransform: 'capitalize',
    fontFamily: 'inter',
  },
  historyText: {
    fontSize: moderateScale(22),
    color: 'black',
    marginTop: scale(10),
    fontFamily: 'mulish',
    fontStyle: 'normal',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
})
export default CompanyWallet
