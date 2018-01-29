import React from 'react';
import ReactDOM from 'react-dom';

const styleComponentHeader = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        paddingTop: '15px',
        paddingBottom: '15px'
    }
}

export default class ComponentHeader extends React.Component{
    render(){
        return(
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部</h1>
            </header>
        )
    }
}
