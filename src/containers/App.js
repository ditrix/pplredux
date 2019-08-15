import React,{Component} from 'react';
import {connect} from 'react-redux'
import {actionGetPeople,actionClearPeople,  actionLoadPeople} from '../action/PeopleActions'
import  {actionSignIn, actionSignOut} from '../action/UserActions'
import {data} from '../devdata/data'
import {Footer} from '../components/Footer'
import Peoples from '../components/Peoples'
//import AskoHeader from '../AskoHeader'

import {API_CLIENT_ID} from '../constants/apiId' 
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

 
  componentDidMount(){
  
    window.gapi.load('auth2',()=>{
      window.gapi.auth2.init({
        client_id: `${API_CLIENT_ID}.apps.googleusercontent.com`  
      }).then(()=>{}, ()=>{console.log('error init api')})
      
    })
  }

  butttonGetDataClicked(){
    this.props.getData(data)
  }


  signOut = () => { 
    this.props.logoutUser()      
  }

  signIn = () => {
   this.props.loginUser()
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
           {/*<AskoHeader />*/}
         <nav>
         
            <ul>
              <li><button onClick={()=>{this.props.loadData()}}>Load</button></li>
              <li><button onClick={this.butttonGetDataClicked.bind(this)}>Open</button></li>
              <li><button onClick={()=>{this.props.clearPeople()} }>Clear</button></li>
              <li>
                <div className="user-block">
                    <h3>{userName}</h3>
                   <img src={userPic} alt="user" />
                   <button  className="button-login" onClick={this.butttonAuthClick.bind(this)} value="login">
                    {(isLoged)?<span>Logout</span>:<span>Login</span>}
                   </button>               

                 </div>
                
              </li>
            </ul>


            

        </nav>           
        </header>
   
        <main>
        { !this.props.people.isLoaded ? <p>loading...</p>:<Peoples people={people} /> }

      </main>
      <footer>
        <Footer />
      </footer>
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
    
    loginUser: () => dispatch(actionSignIn()),
    logoutUser: () => dispatch(actionSignOut()),
  }
}

export default connect(mapStateToProps,mapDispatchToPeops)(App)

