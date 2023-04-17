import { useState, useEffect } from 'react';
import {getDatabase,ref,set} from "firebase/database";
import './App.css'; 
import{app} from "./Firebase";



const db = getDatabase(app);


const Localities = (props) => {
    
   
    useEffect(()=>{
        // console.log("===============>", props.userNameForLoc);
    }, []);
    const [user,setUser] = useState({

        locality1:"",
        locality2:"",
        locality3:"",
        locality4:"",
        locality5:"",
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
    
       const {locality1,locality2,locality3,locality4,locality5} = user;
     
       if(locality1 && locality2 && locality3 && locality4 &&  locality5)
       {
        props.submitForm();
          set(ref(db,`USERS/${props.userNameForLoc}/localities`),{
            locality1:locality1,
            locality2:locality2,
            locality3:locality3,
            locality4:locality4,
            locality5:locality5,
         });   
        
            setUser({
               locality1:"",
               locality2:"",
               locality3:"",
               locality4:"",
               locality5:"",
            });
   
           alert("Data Stored Successfully"); 
         
   
       }
       else
       { 
         alert("Please Fill all the Localities");
         
       }
    
    };
   


    return (  
       
        <div className="localities">
        <h2 className="head3">Enter the Localities to visit</h2>
        <form method="POST" >
        <div className="f2">Locality-1</div>
        <input type="text" className="field2" name="locality1" autoComplete="off" 
        value={user.locality1} onChange={getUserData}   required />
        <div className="f2">Locality-2</div>
        <input type="text" className="field2" name="locality2" autoComplete="off"
        value={user.locality2} onChange={getUserData} required />
        <div className="f2">Locality-3</div>
        <input type="text" className="field2" name="locality3" autoComplete="off"
        value={user.locality3} onChange={getUserData} required/>
        <div className="f2">Locality-4</div>
        <input type="text" className="field2" name="locality4" autoComplete="off" 
        value={user.locality4} onChange={getUserData} required/>
        <div className="f2">Locality-5</div>
        <input type="text" className="field2" name="locality5" autoComplete="off" 
        value={user.locality5} onChange={getUserData} required/>

        <input type="button" id="btn5" value="Previous"/>
        <input type="button" id="btn4" value="Submit" name="Button" onClick={postData}/>
        
        </form>    
        

        </div>



    );
}
 
export default Localities;