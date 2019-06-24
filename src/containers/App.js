import React,{Component} from 'react';
import {connect} from 'react-redux'
import {actionGetPeople,actionClearPeople} from '../action'

import '../App.css';

class App extends Component {
  butttonGetDataClicked(){
    console.log('getDataClick')
  }

  butttonClearDataClicked(){
    console.log('clearDataClick')
    this.props.clearPeople()
  }

  render(){
    console.log(this.props)
    const {people} = this.props
    console.log(people)
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
            {people.map( (person ,index) => <li key={index}>{person.name}</li> )}
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
    clearPeople: () => dispatch(actionClearPeople())
  }
}

export default connect(mapStateToProps,mapDispatchToPeops)(App)

