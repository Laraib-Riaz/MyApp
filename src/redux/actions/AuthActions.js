import AsyncStorage from '@react-native-async-storage/async-storage'
import {base_Url, token} from '../../utils/utils'
import {
  USER_DETAILS,
  IS_SIGN_IN,
  IS_LOADING,
  USER_ID,
  OTP_SEND,
  VERIFY_EMAIL,
  NOTIFICATION_TOKEN,
} from '../reducer/Holder'

export const sign_in = (email, password) => {
  return async (dispatch) => {
    try {
      // let myJson = {
      //     email: email,
      //     password: password
      // }
      await AsyncStorage.setItem('user_details', email)
      await dispatch({type: USER_DETAILS, payload: email})
      console.log('Success Laraib!')
    } catch (error) {
      console.log('error', error)
    }
  }
}

// export const social_signin = (
//   id,
//   navigation,
//   setVisible,
//   notification_token,
// ) => {
//   return async (dispatch) => {
//     await dispatch({
//       type: IS_LOADING,
//       payload: true,
//     })
//     try {
//       let base_url = `${base_Url}/social_login.php`
//       let checkEmail = new FormData()
//       checkEmail.append('token', token)
//       checkEmail.append('social_id', id)
//       checkEmail.append('notification_token', notification_token)
//       const response = await fetch(base_url, {
//         method: 'post',
//         body: checkEmail,
//       })
//       const responseData = await response.json()
//       if (responseData.status === true) {
//         console.log('data respond : ', responseData)
//         const loginToken = responseData.data.user_id
//         const userDetail = JSON.stringify(responseData)
//         await AsyncStorage.setItem('user_details', userDetail)
//         await dispatch({type: USER_DETAILS, payload: responseData.data})
//         await dispatch({type: USER_ID, payload: loginToken})
//         await dispatch({type: IS_LOADING, payload: false})
//       } else {
//         console.log('Something went wrong')
//         await dispatch({type: USER_DETAILS, payload: responseData})
//         await dispatch({type: IS_LOADING, payload: false})
//         setVisible(true)
//       }
//     } catch (error) {
//       setVisible(true)
//       console.log('error', error)
//     }
//     await dispatch({type: IS_LOADING, payload: false})
//   }
// }

export const CreateAccountApi = (data, navigation, role_id) => {
  return async (dispatch) => {
    await dispatch({type: IS_LOADING, payload: true})

    try {
      let base_url = `${base_Url}/verify_email.php`
      let checkEmail = new FormData()
      checkEmail.append('token', token)
      checkEmail.append('email', data.email)
      const response = await fetch(base_url, {
        method: 'post',
        body: checkEmail,
      })
      const responseData = await response.json()
      if (responseData.status === true) {
        console.log('response : ', responseData.data)
        navigation.navigate('verification', {
          data,
          type: 'register',
          role_id: role_id,
        })
        await dispatch({type: OTP_SEND, payload: responseData.data.OTP})
        await dispatch({type: IS_LOADING, payload: false})
      } else {
        await dispatch({type: IS_LOADING, payload: false})
        await dispatch({type: VERIFY_EMAIL, payload: responseData})
      }
    } catch (error) {
      console.log('Errorz : ', error)
      await dispatch({type: IS_LOADING, payload: false})
    }
  }
}

export const register = (dataz, notification_token, navigation) => {
  console.log('params DATA : ', dataz)
  return async (dispatch) => {
    await dispatch({
      type: IS_LOADING,
      payload: true,
    })
    try {
      let base_url = `${base_Url}/signup.php`
      let checkEmail = new FormData()
      checkEmail.append('token', token)
      checkEmail.append('role_id', dataz.role_id)
      checkEmail.append('firstname', dataz.data.firstname)
      checkEmail.append('lastname', dataz.data.lastname)
      checkEmail.append('email', dataz.data.email)
      checkEmail.append('username', dataz.data.username)
      checkEmail.append('phone', dataz.data.phone)
      checkEmail.append('password', dataz.data.password)
      checkEmail.append('address', dataz.data.address)
      checkEmail.append('zipcode', dataz.data.zipcode)
      checkEmail.append('country', dataz.data.country)
      checkEmail.append('notification_token', notification_token)

      const response = await fetch(base_url, {
        method: 'post',
        body: checkEmail,
      })
      const responseData = await response.json()
      console.log(`response data befor if ${responseData.data}`)
      if (responseData.status == true) {
        navigation.navigate('login')
        console.log('response Data : ', responseData)
        const loginToken = responseData.data.role_id
        const userDetail = JSON.stringify(responseData)
        await AsyncStorage.setItem('user_details', userDetail)
        await dispatch({type: USER_DETAILS, payload: responseData.data})
        await dispatch({type: USER_ID, payload: loginToken})
        await dispatch({type: IS_LOADING, payload: false})
      }
    } catch (error) {
      console.log('laraib', error)
    }
  }
}

export const get_notification = () => {
  return async (dispatch) => {
    await dispatch({type: IS_LOADING, payload: true})
    try {
      const value = await AsyncStorage.getItem('onesignaltoken')
      if (value !== null) {
        await dispatch({type: IS_LOADING, payload: false})
        await dispatch({type: NOTIFICATION_TOKEN, payload: value})
        console.log('noti_token', value)
      }
    } catch (e) {
      await dispatch({type: IS_LOADING, payload: false})
      console.log('noti_token not found!')
    }
    await dispatch({type: IS_LOADING, payload: false})
  }
}
