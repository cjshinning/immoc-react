import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyIndex extends React.Component{
        
    componentWillMount(){
        console.log('BodyIndex - componentWillMount');
    }

    componentDidMount(){
        console.log('BodyIndex - componentDidMount');
    }
    
    render(){
        var userName = 'Parry';
        var boolInput = false;

        var html = 'IMMOC&nbsp;LESSION';

        // comments

        return(
            <div>
                <h2>页面的主体部分。</h2>
                <p>{userName == '' ? '用户还没有登录' : '用户名：' + userName}</p>
                <p><input type='button' value={userName} disabled={boolInput} /></p>
                {/*注释*/}
                <p>{html}</p>{/*需要进行unicode转码*/}
                <p dangerouslySetInnerHTML={{__html:html}}></p>
            </div>
        )
    }
}