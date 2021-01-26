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
    famille,
    // indiquer letat du state du button montrer/cacher
    isShow: false
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

// event, au click du boutton passer l'etat en true et mettre à jour le state

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})

  }

  handleHideName = (id) => {
    const famille = { ...this.state.famille }
    famille[id].name = 'X'
    this.setState({ famille })
  }

render () {
    const { famille, isShow } = this.state
    // attention arrow function avec le map
    const list = Object.keys(famille).map(member => (
        <Membre
          hideName={ () => this.handleHideName(member)}
          key={member}
          age={famille[member].age}
          name={famille[member].name}
        />
    ))

    return (
      <div className='App'>
        <h2>Bienvenue dans la famille de Did !</h2>
        <input value= {this.state.famille.member1.name} onChange={this.handleChange} type="text"/>
        {list}
        <Membre
          name={famille.member5.name} age= {famille.member5.age}>

          {
            isShow ? <strong>salut je suis montrée</strong> : null
          }

          <button onClick={this.handleShowDescription }>
          {
            isShow ? 'caché' : 'montré'
          }
          </button>

        </Membre>

        <Button older={ () => this.handleClick(5) }/>
      </div>
      )
  }
}


export default App;
