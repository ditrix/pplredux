import React,{Component} from 'react';
import {connect} from 'react-redux'
import {actionGetPeople,actionClearPeople, actionLoadPeople, actionSignIn} from '../action'
import {data} from '../devdata/data'
import Peoples from '../components/Peoples'

import {GOOGLE_CLIENT_ID} from '../constants' 
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

 
  componentDidMount(){

   
    window.gapi.load('auth2',()=>{
      window.gapi.auth2.init({
        client_id: GOOGLE_CLIENT_ID,  
      }).then(()=>{}, ()=>{console.log('error init api')})
      
    })
  }

  butttonGetDataClicked(){
    this.props.getData(data)
  }

  butttonClearDataClicked(){
    this.props.clearPeople()
  }

  butttonLoadDataClicked(){
    this.props.loadData(data)

  }

  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
      this.props.logoutUser()  
    })
        
  }

  signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then(
       googleUser => {
       this.props.loginUser(googleUser.getBasicProfile())
       } 
    )
    //this.props.loginUser()
  }

   butttonAuthClick(e){
    (this.props.user.isLoged)? this.signOut(): this.signIn()
  }


  render(){
  
    const {people} = this.props.people
    const {userName, isLoged, userPic} = this.props.user
    return (
      <div className="container">
        <header>
           <div><img src={logo} className="App-logo" alt="logo" /></div>
           <div><h1>0-800-50-15-60</h1><p>безкоштовна багатоканальна телефонна лінія</p></div>
           <div><h1>050-450-15-60</h1><p>вартість дзвінків відповідно до тарифів Вашого оператора</p></div>
           
           <div className="user-block">
             <h3>{userName}</h3>
             <img src={userPic} alt="user" />
             <button  className="button-login" onClick={this.butttonAuthClick.bind(this)} value="login">
              {(isLoged)?<span>Logout</span>:<span>Login</span>}
             </button>               
           </div>
           
        </header>
        <nav>
          
            <button onClick={this.butttonLoadDataClicked.bind(this)}>Load</button>
            <button onClick={this.butttonGetDataClicked.bind(this)}>Open</button>
            <button onClick={this.butttonClearDataClicked.bind(this)}>Clear</button>
        </nav>
        <main>
        { !this.props.people.isLoaded ? <p>loading...</p>:<Peoples people={people} /> }

      </main>
        <footer>footer</footer>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    people: store.people,
    user: store.user,
  }
}

const mapDispatchToPeops = dispatch => {
  return {
    clearPeople: () => dispatch(actionClearPeople()),
    getData: (people) => dispatch(actionGetPeople(people)),
    loadData: () => dispatch(actionLoadPeople()),
    loginUser: (user) => dispatch({type: 'GET_USER_SUCCESS',payload: user }),
    //loginUser: () => dispatch(actionSignIn()),
    logoutUser: () => dispatch({type: 'USER_LOGOUT'})
  }
}

export default connect(mapStateToProps,mapDispatchToPeops)(App)

