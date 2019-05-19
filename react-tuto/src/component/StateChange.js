import React , { Component } from 'react';
import propTypes from 'prop-types';

class StateChange extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         message: ''
    //     }
    //     this.updateMsg = this.updateMsg.bind(this);
    // }
    state = {
        username: '',
        message: ''
    }
    updateState(e){
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    render(){
        return(
            <div>
                <hr/>
                <p>이벤트 연습</p>
                <input
                    type='text'
                    name='message'
                    placeholder='입력하세요'
                    value={this.state.message}
                    onChange={this.updateState}
                />
                <input
                    type='text'
                    name='username'
                    placeholder='사용자 이름'
                    value={this.state.massage}
                    onChange = {this.updateState}
                />
            </div>
        )
    }
}

export default StateChange;