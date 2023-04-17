import VendorScreen from "./VendorScreen";
import Loginname from "./Loginname";
import { useState } from 'react';
import {getDatabase,ref,get,child} from "firebase/database";
import{app} from "./Firebase";

const db = getDatabase(app);
const Intermediate2 = () => {
   
    const [isFormSubmitted,setFormSub] =  useState(false);
    const [userNameForLoc2, setNameForLoc]  = useState(null);
   
    const submitForm1 = (userName) => {

        get(child(ref(db),`USERS/${userName}`)).then((snapshot)=>{
     
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
        { isFormSubmitted ? <VendorScreen userNameForLoc2={userNameForLoc2} /> : <Loginname submitForm1 = {submitForm1}/>}
        </div>
   


    );
}
 
export default Intermediate2;