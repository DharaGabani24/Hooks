// import logo from './logo.svg';
// import UsestateArray from './UsestateArray';
import './App.css';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';
import UseStateHook from './components/UseStateHook';
import UseReducer from './components/UseReducer';
import ComA from './components/ComA';
//import Form from './Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>  
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/Hello">
          <Hello/>
        </Route>
        <Route path="/UseStateHook">
          <UseStateHook/>
        </Route>
        <Route path="/UseEffectHook">
          <UseEffectHook/>
        </Route>
        <Route path="/ComA">
          <ComA/>
        </Route>
        <Route path="/UseRefHook">
          <UseRefHook/>
        </Route>
        <Route path="/UseReducer">
          <UseReducer/>
        </Route>
        
      </Switch>
    </Router>
   
    {/* <Router>
<Switch>
  <Navbar/>
  <Route path="/UseEffectHook">
      <UseEffectHook/>

  </Route>
      <UseStateHook/>
      <UseRefHook/>
      <UseReducer/>
      <ComA/>
      <UseStateHookTextform/>    

</Switch>
    </Router> */}
    {/* <Form/>
    <UsestateArray /> */}
</>
  );
}

export default App;
