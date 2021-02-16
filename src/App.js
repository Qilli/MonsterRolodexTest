
import './App.css';
import react, { Component } from 'react';
import { render } from '@testing-library/react';
import { CardList } from './Components/Card-List/Card-List.Component';
import { SearchBox } from './Components/SearchBox/searchBox.component';
class App extends Component {

  constructor() {
    super();
    this.state =
      {
        monsters: [],
        searchField: ''
      }

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(value => value.json()).then(data => this.setState({ monsters: data }));
  }

  handleChange = e => (this.setState({ searchField: e.target.value }))

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' onChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    );
  }
}


export default App;
