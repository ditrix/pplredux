import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR} from '../constants'

const initialState = {
	userID: null,
	userName: '',
	userPic: '',
	isFetching: false,
	isLoged: false,
	error: '',
}

export const reducerUser = (state = initialState, action) => {
	switch(action.type){
		case GET_USER_REQUEST: 
			return {...state, state: action.payload, isFetching: true, isLoged: false, error: ''}
		case GET_USER_ERROR:
			return {...state, isFetching: false, isLoged: false, error: 'error of logged, try again'}
		case GET_USER_SUCCESS:
			return {...state,  state: action.payload, isFetching: false, isLoged: true, error: ''}
		default:
			return state			
	}

}