import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Users } from './components/Users';
import { Items } from './components/Items';
import { Header } from './components/Header';
import './index.scss';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      items: []
    }
  }

  componentDidMount() {
  this.getUsers()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentWillUnmount() {
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
      <Header></Header>
      <div>
        <Users users={this.state.users}></Users>
      </div>
    </div>
  );
 }
}


export default App;
