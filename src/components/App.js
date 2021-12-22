import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './layout/Header';
import Footer from './layout/Footer';
import routes from '../routes';

// Redux
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
