import { useState} from 'react';
import {getDatabase,ref,set} from "firebase/database";
import{app} from "./Firebase";
import './App.css';
import { useHistory} from 'react-router-dom';


const db = getDatabase(app);

const CustomerForm = (props) => {
    
    const [user,setUser] = useState({

        name:"",
        PhoneNumber:"",
        Email:"",
        Address:"",
        Locality:"",
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

      const {name,PhoneNumber,Email,Address,Locality} = user;
    
      if(name && PhoneNumber && Email && Address && Locality)
      {  var a1 = name;
         props.submitForm(name);
          set(ref(db,`CUST/${a1}`),{
            name:name,
            PhoneNumber:PhoneNumber,
            Email:Email,
            Address:Address,
            Locality:Locality,
         }); 

           setUser({
              name:"",
              PhoneNumber:"",
              Email:"",
              Address:"",
              Locality:"",
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


        <div className="register">
          
        <h2 className="head3" id="H1" >REGISTER AS CUSTOMER</h2>
       
    
          <form method="POST">
           <div  className="f3">Name</div> 
          <input type="text" placeholder="Enter your name" 
          value={user.name} onChange={getUserData} name="name" className="field3" autoComplete="off" required />
         
         <div  className="f3">Phone Number</div>
         <input type="number"  placeholder="Enter your number"
         value={user.PhoneNumber} onChange={getUserData} name="PhoneNumber" className="field3" autoComplete="off" required/>
    
         <div className="f3">Email</div>
         <input type="email"  placeholder="Enter your Email" 
         value={user.Email}   onChange={getUserData} name="Email" className="field3" autoComplete="off" required/>
          
         <div className="f3">Address</div>
         <input type="text"  placeholder="Enter your Address" 
         value={user.Address}   onChange={getUserData} name="Address" className="field3" autoComplete="off" required/>
          
         <div className="f3">Locality</div>
         <input type="text"  placeholder="Enter your Locality" 
         value={user.Locality}   onChange={getUserData} name="Locality" className="field3" autoComplete="off" required/>
          


         
         <input type="button" value="Submit" name="Button" className="btn3" id="BT2" onClick={postData} />
         <input type="button" value="Previous" className="btn3"  id="BT1"  onClick={MovePrev}/>
    
         
    
    
         </form>
    
        




        
        </div>
     );
}
 
export default CustomerForm;