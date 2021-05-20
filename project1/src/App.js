import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GitHubUser from './GitHubUser';
import GitHub from './GitHub';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import JumboTronComponent from './Jumbotron';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating';
import UserForm from './UserForm';

class App extends Component {

  render() {

    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand href= "#home">React-Bootstrap</Navbar.Brand>              
            </Navbar.Header>
            <Nav>
              <Nav.Link to= "/">Home</Nav.Link>
              <Nav.Link to= "/github">GitHub</Nav.Link>
              <Nav.Link to= "/rating">Rating</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
          <Route path="/github/user/:login/:score" component={GitHubUser} />
            <Route path="/github" Component={GitHub} />
            <Route path="/rating" Component={Rating} />
            <Route exact path="/" Component={Home} />
            <Route path="/*" Component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {

    return (
      <div>
        Not Found
      </div>
    )
  }
}


// import React, { Component } from 'react';
// import GitHub from './GitHub';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Nav, Navbar } from 'react-bootstrap';
// import GitHubUser from './GitHubUser';


// class App extends Component {       
//   render() {        
//     return (
//       <div>
//         <Header />
//       </div>
//     );
//   }
// }
// export default App;

// class Header extends Component {
//   render(){
//     return (
//         <BrowserRouter>
//           <div>            
//             <Navbar bg="light" expand="lg">
//               <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                   <Nav.Link href="/">Home</Nav.Link>
//                   <Nav.Link href="/github">GitHub</Nav.Link>                  
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//             <Switch> 
//               <Route path="/github/user/:login/:id" component={GitHubUser} />                                                                
//               <Route path="/github" component={GitHub} />              
//               <Route exact path="/" component={Home} />             
//               <Route path="/*" component={NotFound} />                       
//             </Switch>   
//           </div>  
//         </BrowserRouter>              
//     )
//   }
// }

// class Home extends Component {
//   render(){
//     return (
//       <div>
//         Home        
//       </div>
//     )
//   }
// }

// class NotFound extends Component {
//   render(){
//     return <div>Not Found</div>
//   }
// }