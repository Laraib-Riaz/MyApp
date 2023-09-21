import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import TransactionCredit from './TransactionCredit'
import TransactionDebit from './TransactionDebit'

const AllTransaction = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TransactionDebit />
      <TransactionCredit />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
export default AllTransaction
