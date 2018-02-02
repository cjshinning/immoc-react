import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Link } from 'react-router';
// import { BrowserRouter, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Index from './index';
import ComponentList from './components/list';

export default class Root extends React.Component{
  render(){
    return(
      // <Router>
      //   <Route path="/" component={Index}>
      //     {/* <Route path="list" component={ComponentList}></Route> */}
      //   </Route>
      // </Router>
      // <Router>
      //   <Route path="/" component={Index}>
      //     {/* <Route path="list" component={ComponentList}></Route> */}
      //   </Route>
      // </Router>
    //   <BrowserRouter>
    //     <div>
    //       <Route path="/" component={Index}/>
    //       <Route path="/list" component={ComponentList}/>
    //     </div>
    //  </BrowserRouter>

    <Router>
    <div>
    <Route path="/" component={Index}/>
    <Route path="/list" component={ComponentList}/>
    </div>
  </Router>
    );
  }
}

ReactDOM.render(
  <Root/>,
  document.getElementById('example')
);