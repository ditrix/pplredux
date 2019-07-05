import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR, USER_LOGOUT} from '../constants'

const initialState = {
	userID: null,
	userName: 'anonimus',
	userPic: 'nouserpic.png',
	isLoged: false,
	error: '',
}

export const reducerUser = (state = initialState, action) => {
	switch(action.type){
		case GET_USER_REQUEST: 
			return {...state, state: action.payload, isLoged: false, error: ''}
		case GET_USER_ERROR:
			return {...state, isFetching: false, isLoged: false, error: 'error of logged, try again'}

		case GET_USER_SUCCESS:  
			const userName = action.payload.getName()     
			const userPic =  action.payload.getImageUrl()
			return {...state,  userName: userName, userPic: userPic, isLoged: true, error: ''}

		case USER_LOGOUT:
			return {...state, userName: 'noname', userPic: 'nouserpic.png', isLoged: false}
		default:
			return state			
	}

}