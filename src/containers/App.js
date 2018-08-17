import React, { Component} from 'react'
import CardList from '../components/CardList'
// since we can have multiple exports in the robots.js we destructure the same
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    // lifeCycle method 
    // A REST Call to the testing service
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => { 
            return response.json()
        }).then(fetchedData => {
            this.setState({robots : fetchedData});
        });
    }

    // follow the convention , this can be used in such format and it will refer to App 
    // and not to the event
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots= {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;