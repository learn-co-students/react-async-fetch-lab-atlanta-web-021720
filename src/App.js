// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = {  
        fetchData: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then(spaceData => {
            this.setState({
                fetchData: spaceData.people
            })
        })
    }
    render() { 
        return (  
            <p></p>
        );
    }
}
 
export default App;