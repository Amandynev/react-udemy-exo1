import React, { Component } from 'react';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';

const famille = {
  member1: {
    name: 'Dominique',
    age: 60
  },
  member2: {
    name: 'Carole',
    age: 58,
  },
  member3: {
    name: 'Mathyeu',
    age: 35,
  },
  member4: {
    name: 'Amandyne',
    age: 29,
  },
  member5: {
    name: 'Chanelle',
    age: 27,
  }
}


class App extends Component {
  state = {
    famille
  }

  handleClick = (num) => {
    // d'abord on doit copier/dire le state à changer
    const famille = { ...this.state.famille }
    // on applicuqe le changement quand on click
    famille.member1.age += num

    //  on modifie le state
    this.setState({ famille })
  }

  handleChange = (event) => {
    // d'abord on doit copier/dire le state à changer
    const famille = { ...this.state.famille }
    // on applicuqe le changement quand on click
    famille.member1.name = event.target.value

    //  on modifie le state
    this.setState({ famille })
  }

render () {
    const { famille } = this.state
    return (
      <div className='App'>
        <h2>Bienvenue dans la famille de Did !</h2>
        <input value= {this.state.famille.member1.name} onChange={this.handleChange} type="text"/>
        <Membre name={famille.member1.name} age= {famille.member1.age}/>
        <Membre name={famille.member2.name} age= {famille.member2.age}/>
        <Membre name={famille.member3.name} age= {famille.member3.age}/>
        <Membre name={famille.member4.name} age= {famille.member4.age}/>
        <Membre name={famille.member5.name} age= {famille.member5.age}/>
        <Button older={ () => this.handleClick(5) }/>
      </div>
      )
  }
}


export default App;
