import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Users } from './components/Users';
import { Items } from './components/Items';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      items: []
    }
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers = () => {
    fetch("https://re-wrap.it/api/subject/").then(data => data.json()).then((data) => {
      this.setState({
        users: data.data
      })
    })
  }

  getItems = () => {
    fetch("https://re-wrap.it/api/items/").then(data => data.json()).then((data) => {
      this.setState({
        items: data.data
      })
    })
  }


  render () { 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
        <Users users={this.state.users}></Users>
      </div>
    </div>
  );
 }
}


export default App;
