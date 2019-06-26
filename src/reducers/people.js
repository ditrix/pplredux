import {GET_PEOPLE,CLEAR_DATA, FETCH_DATA, FETCHING_SUCCESS} from '../constants'


const initialState =  {
	isFeathing: false,
	isActive: false,
	people: [],
}

export const  reducerPeople = (state= initialState, action) => {
	switch (action.type){
		case GET_PEOPLE:
			return {...state, people: action.payholder, isActive: true}
		case CLEAR_DATA:
			return {...state, people: [], isActive: false }	
		default:
			return state	
	}
}