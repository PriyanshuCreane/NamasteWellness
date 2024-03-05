import { Route, Switch } from 'react-router-dom';
import Gender from './components/Questionnaire/Gender';
import Question1 from './components/Questionnaire/Question1'
import Login from './components/Login'
import SignUp from './components/SignUp';
import BeginnerWeek1 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerWeek1';
import BeginnerWeek2 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerWeek2';
import BeginnerWeek3 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerWeek3';
import BeginnerDay1 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerDay2';
import BeginnerDay2 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerDay1';
// import ThreedDesign from './components/ThreedDesign';
import Week1Beginners from './components/Beginner Exercises/landingPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/questionnaire" component={Gender} />
      <Route exact path="/question1" component={Question1} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/beginnerweek1" component={BeginnerWeek1} />
      <Route exact path="/beginnerweek2" component={BeginnerWeek2} />
      <Route exact path="/beginnerweek3" component={BeginnerWeek3} />
      <Route exact path="/beginnerday1" component={BeginnerDay1} />
      <Route exact path="/beginnerday2" component={BeginnerDay2} />
      <Route exact path="/getstarted" component={Week1Beginners} />
    </Switch>
  );
}

export default Routes;