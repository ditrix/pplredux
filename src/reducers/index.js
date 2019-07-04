import {combineReducers} from 'redux'
import {reducerPeople} from './people'
import {reducerPerson} from './person'
import {reducerUser} from './user'

export 
	const rootReducer = combineReducers({
		people: reducerPeople,
		person: reducerPerson,
		user: reducerUser,
	})
