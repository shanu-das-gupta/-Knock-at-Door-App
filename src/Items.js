import { useState, useEffect } from 'react';
import {getDatabase,ref,set} from "firebase/database";
import './App.css'; 
import{app} from "./Firebase";


const db = getDatabase(app);

const Items = (props) => {
     
    useEffect(()=>{
        // console.log("===============>", props.userNameForLoc);
    }, []);
    const [user,setUser] = useState({

        Item1:"",
        Item2:"",
        Item3:"",
        Item4:"",
        Item5:"",
    }, []);

    let name,value;
    const getUserData = (event)=>{
     name = event.target.name;
     value = event.target.value;
 
     setUser({ ...user,[name]: value});
    };

    const postData = async(e)=>
    {

       e.preventDefault();
    
       const { Item1, Item2, Item3, Item4, Item5} = user;
     
       if( Item1 &&  Item2 &&  Item3 && Item4 && Item5)
       {
        props.submitForm();
          set(ref(db,`USERS/${props.userNameForLoc3}/Items`),{
            Item1: Item1,
            Item2: Item2,
            Item3: Item3,
            Item4: Item4,
            Item5: Item5,
         });   
        
            setUser({
                Item1:"",
                Item2:"",
                Item3:"",
                Item4:"",
                Item5:"",
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
        <h2 className="head3">Enter the Items you wants to sell</h2>
        <form method="POST" >
        <div className="f2">Item-1</div>
        <input type="text" className="field2" name="Item1" autoComplete="off" 
        value={user.Item1} onChange={getUserData}   required />
        <div className="f2">Item-2</div>
        <input type="text" className="field2" name="Item2" autoComplete="off"
        value={user.Item2} onChange={getUserData} required />
        <div className="f2">Item-3</div>
        <input type="text" className="field2" name="Item3" autoComplete="off"
        value={user.Item3} onChange={getUserData} required/>
        <div className="f2">Item-4</div>
        <input type="text" className="field2" name="Item4" autoComplete="off" 
        value={user.Item4} onChange={getUserData} required/>
        <div className="f2">Item-5</div>
        <input type="text" className="field2" name="Item5" autoComplete="off" 
        value={user.Item5} onChange={getUserData} required/>

        <input type="button" id="btn5" value="Previous"/>
        <input type="button" id="btn4" value="Submit" name="Button" onClick={postData}/>
        
        </form>    
        

        </div>


        



      );
}
 
export default Items;