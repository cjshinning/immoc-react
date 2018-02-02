import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            miniHeader: false
        }
    }

    switchMiniHeader(){
        this.setState({
            miniHeader: !this.state.miniHeader
        })
    }

    render(){
        const styleComponentHeader = {
            header: {
                backgroundColor: '#333',
                color: '#fff',
                paddingTop: (this.state.miniHeader)?'3px':'15px',
                paddingBottom: (this.state.miniHeader)?'3px':'15px'
            }
        }
        
        return(
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部</h1>
                <ul>
                    <li><Link to="/list">About</Link></li>
                </ul>
            </header>
        )
    }
}
