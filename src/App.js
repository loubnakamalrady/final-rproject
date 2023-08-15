import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* The exact prop ensures that this route matches only the root path */}
        <Route exact path="/" component={Home} />
        
        {/* This route matches the /blog path and renders the Blog component */}
        <Route path="/blog" component={Blog} />
        
        {/* Add more routes for other pages as needed */}
      </div>
    </BrowserRouter>
  );
};

export default App;