
import './App.css';
import Logo1 from './man-farmer-local-market_575670-344.avif';
import { useHistory} from 'react-router-dom';

const Registrationpage = () => {
     const history = useHistory();
     const Back1 = ()=>{
          history.push("/");
 
     }

     const Clicked1 = ()=>
     {
          history.push("/Intermediate1");
     }

     const Clicked2 = ()=>
     {
          history.push("/Intermediate3");
     }


    return ( 
         
         <div className="register">
         <img src={Logo1} alt=""  id="pic2"/>
         <h2 id="head2">HEY!</h2>
         <p id="p2">Register yourself here</p>
        <button className="btn1" id="bt3" onClick={Clicked2}> AS CUSTOMER</button>
        <button className="btn1" id="bt4" onClick={Clicked1}> AS VENDOR</button>
        <button className="btn" id="bt5" onClick={Back1}>Back</button>
     
     </div>




     );
}
 
export default Registrationpage;