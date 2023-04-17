import { useState } from 'react';
import Form from './Form';
import Localities from './Localitiespage';
import VendorScreen from './VendorScreen';
import Items from './Items';
// import {getDatabase,ref,get,child} from "firebase/database";
// import{app} from "./Firebase";

const Intermediate1 = () => {
    
    const [isFormSubmitted,setFormSub] =  useState(false);
    const [userNameForLoc, setNameForLoc]  = useState(null);
    const [isForm2Submitted, setForm2] = useState(false);
    const [isForm3Submitted,setForm3] = useState(false);
    
    const submitForm = (userName) => {
        setFormSub(true);
        setNameForLoc(userName);
        
    }
    const submitForm2 = () => {
        setForm2(true);
    }

    const submitForm3 = () =>{
        setForm3(true);
    }

    

    return ( 
        <div>
        { isFormSubmitted ? isForm3Submitted ? isForm2Submitted ? <VendorScreen userNameForLoc2={userNameForLoc}/> : <Localities submitForm = {submitForm2} userNameForLoc={userNameForLoc} /> :<Items submitForm = {submitForm3} userNameForLoc3={userNameForLoc} /> : <Form submitForm = {submitForm}/>}
        </div>
     );
}
 
export default Intermediate1;