
import './App.css';
import Firstpage from './Firstpage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Registrationpage from './Registrationpage';
import Intermediate2 from './Intermediate2';
import Intermediate1 from './Intermediate1';
import Intermediate3 from './Intermediate3';
import Intermediate4 from './Intermediate4';
import Loginpage from './Loginpage';
import CustomerScreen from './CustomerScreen';






function App() {
 

   
  return (
     <Router>
       <div className="App">
        
       <Switch>
       <Route exact path="/">
       <Firstpage/> 
       </Route> 
       
       <Route path="/register">
        <Registrationpage/> 
       </Route>

     
       <Route path="/Intermediate1">
       <Intermediate1/>
      </Route>

      <Route path="/Loginpage">
       <Loginpage/>
      </Route>

    
      <Route path="/Intermediate2">  
      <Intermediate2/>
      </Route>

    
      
     <Route path="/Intermediate3">
     <Intermediate3/>
     </Route>
       
     <Route path="/Intermediate4">
     <Intermediate4/>
     </Route>

     <Route path="/CustomerScreen">
     <CustomerScreen/>
     </Route>

     


      
      </Switch> 
    

      
       
       </div>
       </Router> 
      
  );
}

export default App;
