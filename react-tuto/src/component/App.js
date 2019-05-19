import React, { Component } from 'react';
import NewComponent from './NewComponent';
import StateChange from './StateChange';

class App extends Component {
    render() {
        return (
            <div>
                <NewComponent name="React"/>
                <StateChange/>
            </div>
        );
    }
}

export default App;