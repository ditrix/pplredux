import React,{Component} from 'react'

class PersonRow extends Component {
	render(){
		const {picture,login,name, email, phone} = this.props.person;
		return(
			<div className="person-row">
		      
		    <div className="grid-person-ico">
          <img src={picture.thumbnail} alt={name.first}/>
        </div>
        
        <div className="grid-person-login">
          {login.username}
        </div>
          
        <div className="grid-person-name">
					{name.first}
        </div>
        
        <div className="grid-person-email">
          {email}
        </div>
        
        <div className="grid-person-phone">
          {phone}
        </div>


      </div>   
    )
	}
}

export default PersonRow