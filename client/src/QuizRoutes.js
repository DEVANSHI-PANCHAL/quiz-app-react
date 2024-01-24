import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Quiz from './Quiz';

const QuizRoutes = () => {
  return (
    <Switch>
      <Route path="/quiz/:id" component={Quiz} />
    </Switch>
  );
};

export default QuizRoutes;