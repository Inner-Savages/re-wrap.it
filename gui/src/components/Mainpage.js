import React, {Component} from 'react';
import './../styles/style.css';
import Item from "./Item";

class Mainpage extends Component {
    constructor(props){
        super(props)
        this.state = {
            wanted: [],
            giveaway: []
        }
    }

    componentDidMount() {
        this.getWanted()
        this.getGiveaway()
    }

    setUrl(path) {
        this.props.parent.setState({current: path})
        console.log(this.props.parent.state)
    }

    getWanted = () => {
        fetch("https://re-wrap.it/api/wanted/").then(data => data.json()).then((data) => {
            this.setState({
                wanted: data.data
            })
        })
    }

    getGiveaway = () => {
        fetch("https://re-wrap.it/api/giveaway/").then(data => data.json()).then((data) => {
            this.setState({
                giveaway: data.data
            })
        })
    }

    render() {
        return (
            <>
            <div class="container" style={{'margin-top': '250px'}}>
                <div class="row">
                    <div class="col">
                        <input type="image" src="./images/2a.png" class="card-img-right float-lg-right" width="200"
                               height="200" alt="..." onClick={() => this.setUrl('giveaway')}/>
                    </div>
                    <div class="col">
                        <input type="image" src="./images/2b.png" class="card-img-right float-lg-left" width="200"
                               height="200" alt="..."  onClick={() => this.setUrl('wanted')}/>
                    </div>
                </div>
            </div>

        <main role="main" class="container">
            <div class="container">
                <h2 class="my3">Recently people wanted to give...</h2>
                <div class="card-deck">
                    {
                        this.state.giveaway.map((item, index) => (
                            <Item item={item} idx={index}/>
                        ))
                    }
                </div>
                <h2 class="top-space my-3">Recently people wanted to get...</h2>
                        <div class="card-deck">
                            {
                                this.state.wanted.map((item, index) => (
                                    <Item item={item} idx={index}/>
                                ))
                            }
                        </div>
                </div>
        </main>
    </>
        );
    }
}

export {Mainpage}