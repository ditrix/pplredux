import React,{Component} from 'react'

class PersonRow extends Component {
  handlePersonClick(e){
    //console.log(this.props.index)
    this.props.getRecord(this.props.index)
  }
	render(){
		const {picture,login,name, email, phone} = this.props.person;
		return(
			<div className="person-row" onClick={this.handlePersonClick.bind(this)}>
		      
		    <div className="grid-person-ico">
          <img src={picture.thumbnail} alt={name.first}/>
        </div>
        
        <div className="grid-person-login">
          {login.username}
        </div>
          
        <div className="grid-person-name">
					{`${name.first}  ${name.last}`}
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