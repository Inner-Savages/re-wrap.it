import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: {
         cokolwiek: "Jakis string"
      }
    }
  }

  componentDidMount(){
    this.wielkaDupa()
  }



  wielkaDupa = () => {
    fetch("https://re-wrap.it/api/subject").then(dupa => dupa.json()).then((dupa) => {
      this.setState({
        data: dupa
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
              {this.state.data.cokolwiek}
          </div>
        </a>
      </header>
    </div>
  );
 }
}


export default App;
