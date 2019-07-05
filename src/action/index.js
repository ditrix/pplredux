import {GET_PEOPLE, CLEAR_DATA, LOAD_PEOPLE_REQUEST, LOAD_PEOPLE_SUCCESS, LOAD_PEOPLE_ERROR} from '../constants'


export function actionGetPeople(people){
	return {
   	type: GET_PEOPLE,
		payload: people,
	}
}

export function actionClearPeople(){
	return {
		type: CLEAR_DATA,
	}
}

export function actionLoadPeople(){		
		
		return dispatch => {

				dispatch({type:LOAD_PEOPLE_REQUEST})

				fetch('https://api.randomuser.me/?results=30')
	      .then(resp => resp.json()) // Transform the data into json
	      .then(data => dispatch({type:LOAD_PEOPLE_SUCCESS,payload: data.results}))
	      .catch(dispatch({type:LOAD_PEOPLE_ERROR}))

			}
			

}
