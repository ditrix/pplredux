import {VIEW_PERSON, } from '../constants'

const initialState = {
	isFeatching: false,

	person: {
		"gender":"male",
		"name":{
			"title":"mr","first":"charles","last":"lee"},
		"location":{"street":"4351 greenwood st",
			"city":"whangarei",
			"state":"southland",
			"postcode":53254,
			"coordinates":{"latitude":"67.1795","longitude":"-81.9545"},
			"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}
		},
		"email":"charles.lee@example.com",
		"login":{"uuid":"36565fa7-3007-456f-b59e-82d5b1045844",
			"username":"purpleswan601",
			"password":"field",
			"salt":"nccBux08",
			"md5":"e621b7d2731df878b572a36fbbb85e88",
			"sha1":"621cade6d83e4f5276e8306518fe9a07ceea634a",
			"sha256":"b2fc6a6ca156680367c2bf3c7c11d0d39503a96013e60e564c942e1686e5da74"
		},
		"dob":{"date":"1953-01-20T15:07:37Z","age":66},
		"registered":{"date":"2016-03-20T15:31:06Z","age":3},
		"phone":"(710)-235-2274",
		"cell":"(950)-739-2051",
		"id":{"name":"","value":null},
		"picture":{
			"large":"https://randomuser.me/api/portraits/men/33.jpg",
			"medium":"https://randomuser.me/api/portraits/med/men/33.jpg",
			"thumbnail":"https://randomuser.me/api/portraits/thumb/men/33.jpg"},
			"nat":"NZ"
	}
}

export const reducerPerson = (state = initialState, action) => {
	switch(action.type){
		case VIEW_PERSON: 
			return {...state, person: action.payholder}
		default:
			return state	
	}
}