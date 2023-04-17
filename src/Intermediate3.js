import CustomerScreen from './CustomerScreen';
import { useState } from 'react';
import CustomerForm from "./CustomerForm";

const Intermediate3 = () => {

    const [isFormSubmitted,setFormSub] =  useState(false);
    const [userNameForLoc, setNameForLoc]  = useState(null);
   
    const submitForm = (userName) => {
        setFormSub(true);
        setNameForLoc(userName);
    }

    return (  
     
     <div>
        { isFormSubmitted ? <CustomerScreen userNameForLoc={userNameForLoc} /> : <CustomerForm submitForm = {submitForm}/>}
    </div>

    );
}
 
export default Intermediate3;
