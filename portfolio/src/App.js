import React from 'react';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;
