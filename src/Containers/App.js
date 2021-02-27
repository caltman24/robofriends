import React, { Component } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        // Use .setState() everytime you want to change state
        this.setState({ searchfield: event.target.value });

    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (!robots.length) ?
            <h1 className="tc f1">Loading</h1> :
            (
                <div className="tc">
                    <h1 id="title" className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll >
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>
            );
    }
};

export default App;