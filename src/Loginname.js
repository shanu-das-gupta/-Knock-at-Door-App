import './App.css';
import { useState} from 'react';
import { useHistory} from 'react-router-dom';
import Logo from "./ice cream.jpg";


const Loginname = (props) => {
   
const [user,setUser] = useState({

        name:"",
        
    });
 
   let name,value;
   const getUserData = (event)=>{
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user,[name]: value});
   };
   
  

const history =  useHistory();

   const Move = ()=>
   {
    props.submitForm1(user.name);
   }

   const Move1 = ()=>
   { 
     history.push("/Loginpage");
   }

  

    return ( 

      <div className="VendorScreen">
        <img src={Logo} alt="" id="pic6" />
        <h1 id="head6">Enter your Name</h1>
        <input type="text" onChange={getUserData} placeholder="Enter your name" id="field2" name = "name" autoComplete="off" required />
        <input type="button" value="PREVIOUS" className="Btn7" onClick={Move1}  />
        <input type="button" value="LOGIN" className="Btn7" onClick={Move} />
        
      
      
      </div>



      );
}
 
export default Loginname;