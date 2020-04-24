// create your App component here
import React, { Component } from 'react'

class App extends Component
{
    state =
    {
        astronauts: []
    }

    componentDidMount()
    {
       fetch('http://api.open-notify.org/astros.json')
       .then(res=>res.json())
       .then(data => {
           console.log('data : ', data.people);

           this.setState({astronauts: data.people});
       })     
    }

    getAstraunautsName()
    {
        // debugger
        console.log('getAstraunautsName', this.state.astronauts);
        let retVal = this.state.astronauts.map( (astronaut) => <li>{astronaut.name}</li>)
        // debugger
        return retVal;
    }

    render()
    {
    return(
        <div>

            {/* Hello World */}
            {this.getAstraunautsName()}
            
        </div>
        )
    }
}

export default App;


// return (
//     <div>
//         Hello World
//     </div>
//   );