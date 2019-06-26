import {GET_PEOPLE, CLEAR_DATA, VIEW_PERSON} from '../constants'

const initialState = {
	activePeople: false,
	activePerson: false,
}

export const applicationReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_PEOPLE:
			return {..state, activePeople: true, activePerson: false}
		case GET_PERSON:
			return {..state, activePeople: false, activePerson: true}
		default:
			return state;		
	}
}