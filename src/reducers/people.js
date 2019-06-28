import {GET_PEOPLE,CLEAR_DATA, LOAD_PEOPLE_REQUEST, LOAD_PEOPLE_SUCCESS} from '../constants'


const initialState =  {
	people: [],
	isLoaded: true,
}

export const  reducerPeople = (state= initialState, action) => {
	switch (action.type){
		case GET_PEOPLE:
			return {...state, people: action.payload}
		
	
		case CLEAR_DATA:
			return {...state, people: []}	

		case LOAD_PEOPLE_REQUEST:
			return {...state, isLoaded: false}	

		case LOAD_PEOPLE_SUCCESS:
			return {...state, people: action.payload, isLoaded: true}	

		default:
			return state	
	}
}