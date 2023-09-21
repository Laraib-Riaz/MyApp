import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import {scale, verticalScale} from 'react-native-size-matters'
import Transactions from './Transactions'

const TransactionDebit = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
      <Transactions
        FirstText={'Patroling Service'}
        Date={'07/07/2022'}
        Amount={'-$7,000,000'}
        color={{color: '#FF6854'}}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
  },
})
export default TransactionDebit
