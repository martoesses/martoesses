import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
//import RouteFromPath from './routes/RoutesFromPath';
import routes from '../routes';

import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";

//Redux
import {Provider} from 'react-redux';
import store from '../store/store';

function App() {    
  return (
    <Router>
      <Provider store={store}>        
        <Header />        
        <div className="container">
          <Routes>            
            {routes.map((route, index) => (
              <Route key={`route${index}`} path={route.path} element={route.component} />              
            ))}            
          </Routes>          
        </div>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
