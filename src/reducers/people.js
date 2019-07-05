import {GET_PEOPLE,CLEAR_DATA, LOAD_PEOPLE_REQUEST, LOAD_PEOPLE_SUCCESS, LOAD_PEOPLE_ERROR} from '../constants'


const initialState =  {
	people: [],
	isLoaded: true,
	error: false,
}

export const  reducerPeople = (state= initialState, action) => {
	switch (action.type){
		case GET_PEOPLE:
			return {...state, people: action.payload}
		
	
		case CLEAR_DATA:
			return {...state, people: []}	

		case LOAD_PEOPLE_REQUEST:
			return {...state, people: [], isLoaded: false, error: false}	

		case LOAD_PEOPLE_SUCCESS:
			return {...state, people: action.payload, isLoaded: true, error: false}
		case LOAD_PEOPLE_ERROR:
			return {...state, people: [], isLoaded: false, error: true}

		default:
			return state	
	}
}