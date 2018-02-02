import React from 'react';

import footerCss from '../../css/footer.css';

export default class ComponentFooter extends React.Component {
    render() {
        var footerConvertStyle = {
            "miniFooter": {
                "backgroundColor": "#333",
                "color": "#fff",
                "paddingLeft": "20px",
                "paddingTop": "3px",
                "paddingBottom": "3px"
            },
            "miniFooter_h1": {
                "fontSize": "15px"
            }
        }
        return (
            <footer style={footerConvertStyle.miniFooter}>
                <h1 style={footerConvertStyle.miniFooter_h1}>页面底部，一般放置版本等信息。</h1>
            </footer>
        )
    }
}