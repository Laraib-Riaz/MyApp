export const USER_DETAILS = 'USER_DETAILS'
export const IS_SIGN_IN = 'IS_SIGN_IN'
export const IS_LOADING = 'IS_LOADING'
export const USER_ID = 'USER_ID'
export const VERIFY_EMAIL = 'VERIFY_EMAIL'
export const OTP_SEND = 'OTP_SEND'
export const NOTIFICATION_TOKEN = 'NOTIFICATION_TOKEN'

const initial_state = {
  user_details: '',
  is_sign_in: false,
  is_loading: false,
  user_id: null,
  otp: '',
  verify_email: {},
  notification_token: '',
}

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        user_details: action.payload,
      }
    case IS_SIGN_IN:
      return {is_sign_in: action.payload}
    default: {
      return state
    }
    case IS_LOADING:
      return {
        ...state,
        is_loading: action.payload,
      }
    case USER_ID:
      return {
        ...state,
        user_id: action.payload,
      }
    case OTP_SEND:
      return {
        ...state,
        otp: action.payload,
      }
    case NOTIFICATION_TOKEN:
      return {
        ...state,
        notification_token: action.payload,
      }
  }
}

export default holderReducer
