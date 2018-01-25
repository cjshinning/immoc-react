import React from 'react';
import BodyChild from './bodychild';

export default class BodyIndex extends React.Component{    
    constructor(){
        super();
        this.state = {
            username: 'Parry',
            age: 20
        }
    };

    changeUserInfo(age){
        this.setState({age: age});
    };

    handleChildValueChange(event){
        this.setState({age: event.target.value});
    };

    render(){
        // setTimeout(()=>{
        //     this.setState({username:'IMOOC',age:30})
        // }, 4000)
        return(
            <div>
                <h2>页面的主体部分。</h2>
                <p>{this.props.userid} {this.props.username}</p>
                <p>age: {this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)} />
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}