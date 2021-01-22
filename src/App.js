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

render () {
    return (
      <div className='App'>
        <h2>Bienvenue dans la famille de Did !</h2>
        <Membre name={this.state.famille.member1.name} age= {this.state.famille.member1.age}/>
        <Membre name={this.state.famille.member2.name} age= {this.state.famille.member2.age}/>
        <Membre name={this.state.famille.member3.name} age= {this.state.famille.member3.age}/>
        <Membre name={this.state.famille.member4.name} age= {this.state.famille.member4.age}/>
        <Membre name={this.state.famille.member5.name} age= {this.state.famille.member5.age}/>
        <Button older={ () => this.handleClick(5) }/>
      </div>
      )
  }
}


export default App;
