import { useState} from 'react';
import {getDatabase,ref,set} from "firebase/database";
import{app} from "./Firebase";
import './App.css';
import { useHistory} from 'react-router-dom';
import Logo from './pumpkin.jpg';


const db = getDatabase(app);


const Form = (props) => {


    const [user,setUser] = useState({

        name:"",
        PhoneNumber:"",
        Occupation:"",
    });
 
   let name,value;
   const getUserData = (event)=>{
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user,[name]: value});
   };
    
   const postData = async(e)=>
   {
    
      e.preventDefault();

      const {name,PhoneNumber,Occupation} = user;
    
      if(name && PhoneNumber && Occupation)
      {  var a1 = name;
        props.submitForm(name);
        set(ref(db,`USERS/${a1}`),{
            name:name,
            PhoneNumber:PhoneNumber,
            Occupation:Occupation,
            
         }); 

           setUser({
              name:"",
              PhoneNumber:"",
              Occupation:"",
           });
  
          alert("Data Stored Successfully"); 
        
  
      }
      else
      { 
        alert("Please Fill all the details");
      }
    
   
   };
 
   const history = useHistory(); 
    
   const MovePrev = ()=>
   {
       history.push("/register");
   }
    



    return ( 

    <div className="container">
    
    <h2 className="head3" id="H1" >REGISTER AS VENDOR</h2>
    <img src={Logo} alt=""  id="pic3"/>

      <form method="POST">
       <div id="first" className="f1">Name</div> 
      <input type="text" placeholder="Enter your name" 
      value={user.name} onChange={getUserData} name="name" className="field" autoComplete="off" required />
     
     <div id="second" className="f1">Phone Number</div>
     <input type="number"  placeholder="Enter your number"
     value={user.PhoneNumber} onChange={getUserData} name="PhoneNumber" className="field" autoComplete="off" required/>

     <div id="third" className="f1">Occupation</div>
     <input type="text"  placeholder="Enter your Occupation" 
     value={user.Occupation}   onChange={getUserData} name="Occupation" className="field" autoComplete="off" required/>
     
     <input type="button" value="Submit" name="Button" className="btn3" id="BT2" onClick={postData} />
     <input type="button" value="Previous" className="btn3"  id="BT1"  onClick={MovePrev}/>

     


     </form>

    

    
    
    </div>
   



     );
}
 
export default Form;