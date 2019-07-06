import {GET_PEOPLE, CLEAR_DATA, LOAD_PEOPLE_REQUEST, LOAD_PEOPLE_SUCCESS, LOAD_PEOPLE_ERROR,
	GOOGLE_CLIENT_ID, GET_USER_REQUEST, GET_USER_SUCCESS} from '../constants'


export function actionGetPeople(people){
	return {
   	type: GET_PEOPLE,
		payload: people,
	}
}

export const actionClearPeople = () => {
	return {
		type: CLEAR_DATA,
	}
}

export const  actionLoadPeople = () => {		
		return dispatch => {
				dispatch({type:LOAD_PEOPLE_REQUEST})

				fetch('https://api.randomuser.me/?results=30')
	      .then(resp => resp.json()) // Transform the data into json
	      .then(data => dispatch({type:LOAD_PEOPLE_SUCCESS,payload: data.results}))
	      .catch(dispatch({type:LOAD_PEOPLE_ERROR}))
			}
}

export const actionSignIn = () => {
	return dispatch => {
	const auth2 = window.gapi.auth2.getAuthInstance()
  auth2.signIn().then(
       googleUser => {
       return {
       		type: GET_USER_SUCCESS,
       		payload: googleUser.getBasicProfile()
       	}
       }
  )
  }		
/*	return dispatch => {
		dispatch({type: GET_USER_REQUEST})



	  const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then(
       googleUser => {
       return	{
       		type: GET_USER_SUCCESS,
       		payload: googleUser.getBasicProfile()
       	}       
       } 
    )
  }*/
}

