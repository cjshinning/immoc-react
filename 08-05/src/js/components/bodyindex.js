import React from 'react';
import BodyChild from './bodychild';
import PropTypes from 'prop-types';

const defaultProps = {
    username: '这是一个默认的用户名'
}

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
        // var submitButton = document.getElementById('submitButton');
        // console.log(submitButton);
        // submitButton.style.color = 'red';

        this.refs.submitButton.style.color = 'red';
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
                <p>接收到父页面的熟悉：userid: {this.props.userid} username: {this.props.username}</p>
                <p>age: {this.state.age}</p>
                <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)} />
                <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}

BodyIndex.propTypes = {
    userid: PropTypes.number
};

// 为属性指定默认值:
BodyIndex.defaultProps = defaultProps;