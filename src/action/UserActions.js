import {  GET_USER_SUCCESS, USER_LOGOUT} from '../constants'

export const actionSignIn = () => {
  
  const auth2 = window.gapi.auth2.getAuthInstance()	
  return dispatch => {
	     auth2.signIn().then(
        googleUser => {
        dispatch({ type: GET_USER_SUCCESS, payload: googleUser.getBasicProfile()})
       }
  	)
  }    
}  

export const actionSignOut = () => {
  const auth2 = window.gapi.auth2.getAuthInstance()
  return dispatch => {
    auth2.signOut().then(
      googleUser => {
        dispatch({type: USER_LOGOUT})
      }
    )
  }
}