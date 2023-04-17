
import './App.css';
import Logo from "./market material.jpg";
import { useHistory} from 'react-router-dom';

const Loginpage = (props) => {
     const history = useHistory();
     const Back1 = ()=>{
          history.push("/");
 
     }

     const Clicked1 = ()=>
     {
          history.push("/Intermediate2");
          props.submitForm1();
     }

     const Clicked2=()=>
     {
          history.push("/Intermediate4");
     }


    return ( 
         
         <div className="register">
         <img src={Logo} alt="" id="pic5" />
         <h2 id="head2">HEY!</h2>
         <p id="p2">Login yourself here</p>
       
        <button className="btn1" id="bt3" onClick={Clicked2}> AS CUSTOMER</button>
        <button className="btn1" id="bt4" onClick={Clicked1}> AS VENDOR</button>
        <button className="btn" id="bt5" onClick={Back1}>Back</button>
     
     </div>




     );
}
 
export default Loginpage;