import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield : ''
    };
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
}

  render(){
    const {monsters , searchfield} = this.state;
    const filteredmonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase()));

  return(
          <div className="App"> 
          <h1>Monsters Rolodex</h1>
          <SearchBox 
            Placeholder = 'Search Mosters' 
            handleChange= {e => this.setState({searchfield: e.target.value})}
          />
          <CardList monsters={filteredmonster}/>
          </div>
  );
  }
}

export default App;
