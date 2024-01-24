import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuizRoutes from './QuizRoutes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <QuizRoutes />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return <div>Welcome to the Quiz App!</div>;
};

export default App;