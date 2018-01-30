import React from 'react';
import ReactDOM from 'react-dom';

export default class ComponentFooter extends React.Component{
    render(){
        return(
            <footer className="smallFontSizeFooter">
                <h1>页面底部，一般放置版本等信息。</h1>
            </footer>
        )
    }
}