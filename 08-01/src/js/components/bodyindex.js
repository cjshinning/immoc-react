import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyIndex extends React.Component{    
    constructor(){
        super();
        this.state = {
            username: 'Parry',
            age: 20
        }
    }
    render(){
        setTimeout(()=>{
            this.setState({username:'IMOOC',age:30})
        }, 4000)
        return(
            <div>
                <h2>页面的主体部分。</h2>
                <p>{this.state.username} {this.state.age}</p>
            </div>
        )
    }
}