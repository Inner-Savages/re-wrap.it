import React, {Component} from 'react';
import './../styles/style.css';

class Mainpage extends Component {
    setUrl(path) {
        this.props.parent.setState({current: path})
        console.log(this.props.parent.state)
    }
    render() {
        return (
            <>
            <div class="container pt">
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
                <div><p>Recently people want to give..</p></div>
                <div class="row align-items-start">

                    <div class="col">
                        <div class="card">
                            <img src="./images/box-placeholder.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-success btn-sm">Book</button>
                                        <button type="button" class="btn btn-primary btn-sm">More info</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./images/box-placeholder.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-success btn-sm">Book</button>
                                        <button type="button" class="btn btn-primary btn-sm">More info</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./images/box-placeholder.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-success btn-sm">Book</button>
                                        <button type="button" class="btn btn-primary btn-sm">More info</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="top-space"><p>Recently people want to get..</p></div>
                <div class="row align-items-center">
                    <div class="col">
                        <div class="card">
                            <img src="./images/box-placeholder.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-success btn-sm">Book</button>
                                        <button type="button" class="btn btn-primary btn-sm">More info</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./images/box-placeholder.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-success btn-sm">Book</button>
                                        <button type="button" class="btn btn-primary btn-sm">More info</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./images/box-placeholder.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-success btn-sm">Book</button>
                                        <button type="button" class="btn btn-primary btn-sm">More info</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
        );
    }
}

export {Mainpage}