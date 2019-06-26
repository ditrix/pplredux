import {GET_PEOPLE,CLEAR_DATA, VIEW_PERSON} from '../constants'
export function actionGetPeople(people){
	return {
		type: GET_PEOPLE,
		payholder: people,
	}
}

export function actionClearPeople(){
	return {
		type: CLEAR_DATA,
	}
}

