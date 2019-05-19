import React , { Component } from 'react';
import propTypes from 'prop-types';

class NewComponent extends Component {
    static propTypes = {
        name: propTypes.string // name props 타입을 문자열로 설정한다.
    }

    static defaultProps = {
        name : '기본 이름'
    }
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    render() {
        return (
            <div>
                <p>안녕하세요. 제 이름은 {this.props.name} 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={()=>{
                    this.setState({
                        number : this.state.number + 1
                    })
                }}>더하기</button>

            </div>
        );
    }
}

export default NewComponent;