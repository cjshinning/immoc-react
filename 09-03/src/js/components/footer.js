import React from 'react';

import footerCss from '../../css/footer.css';

export default class ComponentFooter extends React.Component{
    render(){
        return(
            <footer className={footerCss.miniFooter}>
                <h1>页面底部，一般放置版本等信息。</h1>
            </footer>
        )
    }
}