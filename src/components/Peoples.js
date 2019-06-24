import React, {Component} from 'react'
import PersonRow from './PersonRow'

class Peoples extends Component {

	render(){
		const people = this.props.people
		return(
      <>
        <div className="grid-title">
          <div className="grid-person-ico"></div>
          <div className="grid-person-login">login</div>
          <div className="grid-person-name">user name</div>
          <div className="grid-person-email">email</div>
          <div className="grid-person-phone">phone</div>
        </div>
     
      	{people.map( (person ,index) => 
            <PersonRow key={index} person={person}/>
          )}
     
      </> 
		)
	}
}

export default Peoples;