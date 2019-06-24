import React, {Component} from 'react'
import PersonRow from './PersonRow'

class Peoples extends Component {
	render(){
		const people = this.props.people
		return(
      <ul>
      	{people.map( (person ,index) => 
        <li key={index}>
            <PersonRow person={person} />
         </li> )}
       </ul>			
		)
	}
}

export default Peoples;