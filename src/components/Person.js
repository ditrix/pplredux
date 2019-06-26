import React,{Component} from 'react'

class Person extends Component {
	buttonCloseClick(){
		console.log('click')
	}
	render(){
		console.log(this.props)
		const {name,email,login,dob,phone,picture} = this.props.person  
		console.log(name)
		return(
			<form>
				<nav>
				<button onClick={this.buttonCloseClick.bind(this)}>X</button>
				</nav>
				<div className="person">
					<div>username: {name.first} {name.last}</div>
					<div>login: {login.username}</div>
					<div>age: {dob.age}</div>
					<div>phone: {phone}</div>
					<div><img src={picture.large}/></div>
				</div>
			</form>
		)
	}
}

export default Person