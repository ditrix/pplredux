import React,{Component} from 'react';
import {connect} from 'react-redux'
import {actionGetPeople,actionClearPeople, actionLoadPeople} from '../action'
import {data} from '../devdata/data'
import Peoples from '../components/Peoples'
import Person from '../components/Person'
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  butttonGetDataClicked(){
    this.props.getData(data)
  }

  butttonClearDataClicked(){
    this.props.clearPeople()
  }

  butttonLoadDataClicked(){
    this.props.loadData(data)

  }


  render(){
  
    const {people} = this.props.people
    return (
      <div className="container">
        <header>
           <div><img src={logo} className="App-logo" alt="logo" /></div><div><h1>0-800-50-15-60</h1><p>безкоштовна багатоканальна телефонна лінія</p></div>
        </header>
        <nav>
          <button onClick={this.butttonLoadDataClicked.bind(this)}>Загрузить</button>
          <button onClick={this.butttonGetDataClicked.bind(this)}>Открыть</button>
          <button onClick={this.butttonClearDataClicked.bind(this)}>Очистить</button>
        </nav>
        <main>
        { !this.props.people.isLoaded ? <p>loading...</p>: <Peoples people={people} /> }

      </main>
        <footer>footer</footer>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    people: store.people,
   
    /*person: store.person,
    personIsActive: store.person.isActive,*/

  }
}

const mapDispatchToPeops = dispatch => {
  return {
    clearPeople: () => dispatch(actionClearPeople()),
    getData: (people) => dispatch(actionGetPeople(people)),
    loadData: () => dispatch(actionLoadPeople()),

  }
}

export default connect(mapStateToProps,mapDispatchToPeops)(App)

