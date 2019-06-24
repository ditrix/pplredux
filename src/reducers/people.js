import {GET_PEOPLE,CLEAR_DATA} from '../constants'


const initialState =  []

export function getPeople(state= initialState, action){
	switch (action.type){
		case GET_PEOPLE:
			return action.payholder
		case CLEAR_DATA:
			return []	
		default:
			return state	
	}
}