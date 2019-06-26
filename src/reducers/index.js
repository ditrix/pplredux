import {combineReducers} from 'redux'
import {reducerPeople} from './people'
import {reducerPerson} from './person'

export 
	const rootReducer = combineReducers({
		people: reducerPeople,
		person: reducerPerson,
	})
