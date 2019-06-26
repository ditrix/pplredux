import React,{Component} from 'react';
import {connect} from 'react-redux'
import {actionGetPeople,actionClearPeople} from '../action'
import {data} from '../devdata/data'
import Peoples from '../components/Peoples'
import Person from '../components/Person'
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
    const {people} = this.props.people
    const {person} = this.props.person
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
        
          <Peoples people={people} />
        
          <Person person={person} />
      </main>
        <footer>footer</footer>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    people: store.people,
    peopleActive: store.people.isActive,
    person: store.person,
    personIsActive: store.person.isActive,

  }
}

const mapDispatchToPeops = dispatch => {
  return {
    clearPeople: () => dispatch(actionClearPeople()),
    getData: (people) => dispatch(actionGetPeople(people))
  }
}

export default connect(mapStateToProps,mapDispatchToPeops)(App)

