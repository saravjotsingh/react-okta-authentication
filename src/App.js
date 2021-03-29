// import './App.css';
// import { BrowserRouter as Router, Route, useHistory,Switch } from 'react-router-dom';
// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// import { OktaAuth,toRelativeUrl } from '@okta/okta-auth-js';

// import Navbar from './components/layout/Navbar';
// import Home from './components/pages/Home';
// import Staff from './components/pages/Staff';
// import Login from './components/auth/Login';
// import { oktaAuthConfig, oktaSignInConfig } from './config';

// const oktaAuth = new OktaAuth(oktaAuthConfig);


// function App() {

//   const history = useHistory();

//   const customAuthHandler = () => {
//     history.push('/login');
//   }

//   const restoreOriginalUri = async (_oktaAuth, originalUri) => {
//     history.replace(toRelativeUrl(originalUri, window.location.origin));
//   };


//   return (
//     <Router>
//       <Security
//         oktaAuth={oktaAuth}
//         onAuthRequired={customAuthHandler}
//         restoreOriginalUri={restoreOriginalUri}
//       >
//         <div className="App">
//           <Navbar />
//           <div class="container">
//             <Switch>
//               <Route path="/" exact={true} component={Home} />
//               <SecureRoute path="/staff" component={Staff} />
//               <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
//               <Route path='/login/callback' component={LoginCallback} />
//             </Switch>
//           </div>
//         </div>
//       </Security>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';

const App = () => (
  <Router>
    <AppWithRouterAccess/>
  </Router>
);
export default App;