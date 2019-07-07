import {GET_PEOPLE, CLEAR_DATA, LOAD_PEOPLE_REQUEST, LOAD_PEOPLE_SUCCESS, LOAD_PEOPLE_ERROR	} from '../constants'


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
	      .catch((error) => dispatch({type:LOAD_PEOPLE_ERROR}))
			}
}