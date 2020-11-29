import './App.css';
import { Component } from 'react';
import { Users } from './components/Users';
import { Header } from './components/Header';
import './styles/index.scss';
import {Footer} from "./components/Footer";
import {Menu} from "./components/Menu";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Wanted} from "./components/Wanted";
import {Giveaway} from "./components/Giveaway";
import {Logged} from "./components/Logged";
import {Logout} from "./components/Logout";
import {Mainpage} from "./components/Mainpage";
import {Idea} from "./components/Idea";


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      login: '',
      userdata: '',
      current: 'login',
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

  render () {
    console.log(this.state)
    let page
    switch (this.state.current) {
      case 'mainpage':
        page = <Mainpage parent={this}/>
        break
      case 'login':
        return (
            <div className="text-center">
              <Login parent={this}/>
            </div>
        );
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
      case 'idea':
        page = <Idea parent={this}/>
        break
      case 'giveaway':
        page = <Giveaway/>
        break
      default:
        page = <Users users={this.state.users}/>
    }
    return (
        <>
            <Menu parent={this}/>
            {page}
            <Footer/>
        </>
  );
 }
}


export default App;
