import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Users } from './components/Users';
import { Items } from './components/Items';
import { Header } from './components/Header';
import './index.scss';
import {Footer} from "./components/Footer";
import {Menu} from "./components/Menu";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Wanted} from "./components/Wanted";
import {Giveaway} from "./components/Giveaway";
import {Logged} from "./components/Logged";
import {Logout} from "./components/Logout";


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      login: '',
      userdata: '',
      current: 'users',
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
    console.log(this.state)
    let page
    switch (this.state.current) {
      case 'login':
        page = <Login parent={this}/>
        break
      case 'logged':
        page = <Logged parent={this}/>
        break
      case 'logout':
        page = <Logout parent={this}/>
        break
      case 'register':
        page = <Register parent={this}/>
        break
      case 'wanted':
        page = <Wanted/>
        break
      case 'giveaway':
        page = <Giveaway/>
        break
      default:
        page = <Users users={this.state.users}/>
    }
    return (
      <div className="columns">
          <div className="column pt-6">[empty space?]</div>
          <div className="column is-half">
            <Header/>
            <Menu parent={this}/>
            {page}
            <Footer/>
          </div>
          <div className="column pt-6">[empty space?]</div>
        </div>
  );
 }
}


export default App;
