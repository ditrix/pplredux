import React,{Component} from 'react';
import {connect} from 'react-redux'
import {actionGetPeople,actionClearPeople} from '../action'
import {data} from '../devdata/data'
import '../App.css';

class App extends Component {
  butttonGetDataClicked(){
    console.log('getDataClick')
    this.props.getData(data)
  }

  butttonClearDataClicked(){
    console.log('clearDataClick')
    this.props.clearPeople()
  }

  render(){
    console.log(this.props)
    const {people} = this.props
    console.log(data[0].picture.medium)
   // console.log(data)
   // const people = data
    return (
      <div className="container">
        <header>header</header>
        <nav>
          <button onClick={this.butttonGetDataClicked.bind(this)}>GET</button>
          <button onClick={this.butttonClearDataClicked.bind(this)}>CLEAR</button>
        </nav>
        <main>
          main
          <ul>
           {people.map( (person ,index) => 
            <li key={index}>
            <img src={person.picture.thumbnail}/>
           
            {person.name.first}{' '}
            {person.email}{' '}
            {person.login.username}
            </li> )}
          </ul>
         </main>
        <footer>footer</footer>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {people: store.people,}
}

const mapDispatchToPeops = dispatch => {
  return {
    clearPeople: () => dispatch(actionClearPeople()),
    getData: (people) => dispatch(actionGetPeople(people))
  }
}

export default connect(mapStateToProps,mapDispatchToPeops)(App)

