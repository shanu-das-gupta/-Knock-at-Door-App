import CustomerScreen from "./CustomerScreen";
import Loginname from "./Loginname";
import { useState } from 'react';
import {getDatabase,ref,get,child} from "firebase/database";
import{app} from "./Firebase";


const db = getDatabase(app);
const Intermediate4 = () => {
     
    const [isFormSubmitted,setFormSub] =  useState(false);
    const [userNameForLoc, setNameForLoc]  = useState(null);
   
    const submitForm1 = (userName) => {
         
        get(child(ref(db),`CUST/${userName}`)).then((snapshot)=>{
     
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setFormSub(true);
                setNameForLoc(userName);
              } else {
                alert("Enter a valid name");
              }


            // var a  = snapshot.val();
            // setUser(a);
      
        }, []);
    
    }

    return ( 
        <div>
        { isFormSubmitted ? <CustomerScreen userNameForLoc={userNameForLoc} /> : <Loginname submitForm1 = {submitForm1}/>}
        </div>

     );
}
 
export default Intermediate4;