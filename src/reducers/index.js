import {combineReducers} from 'redux'
import {getPeople} from './people'

export 
	const rootReducer = combineReducers({
		people: getPeople,
	})
