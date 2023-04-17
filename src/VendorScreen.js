import { useEffect, useState } from 'react';
import './App.css';
import {getDatabase,ref,get,child} from "firebase/database";
import{app} from "./Firebase";
import logo from "./street seller.avif";
import io from 'socket.io-client';
import { useHistory} from 'react-router-dom';

const db = getDatabase(app);
const socket = io.connect("http://localhost:3001");
const VendorScreen = (props) => {
    const history = useHistory();  
    const [user,setUser] =  useState({});
    const [issamevendor, setSameVendor] = useState(false);
    const [custArr,setCustArr] = useState([]);
    
    

    
    

    useEffect(()=>{
        // console.log("============> useeffect vendor screen" );
       
        socket.emit("join_room", "market");
        get(child(ref(db),`USERS/${props.userNameForLoc2}/localities`)).then((snapshot)=>{
     
            // console.log(snapshot.val());
            var a  = snapshot.val();
            setUser(a);
    
            
        }, []);
    
    },[])

      
    // const setthis =(data)=>{
        
    //     setCustArr(data);
    //     setDummy("BHAALU");
    // };
 



    useEffect(()=>{
        // console.log("==============>vendor socket");
        socket.on("receive_message", (data)=>{
            console.log("========>", custArr.length);

             if( data.messageBy === "customer" && props.userNameForLoc2===data.Vendorname)
             {
                
                for(let i=0;i<custArr.length;i++){
                    console.log(custArr[i].name,"----------->", data.CustomerName);
                    if(custArr[i].name == data.CustomerName) {
                        console.log("=======> exit");
                        return;}
                }
                setSameVendor(true);
                
             console.log("================> AYA HUA data", data);

                setCustArr(arr => [...arr,{name: data.CustomerName, add:data.Address} ]);
             
        
             }
        })

        

    },[socket])
    
    
  
    
    
    const Clicked1 = (locality)=>
    {   
     
        socket.emit("send_message",{name:props.userNameForLoc2, locality:locality, messageBy:"vendor"});
        
    }

    const Toggle = ()=>
    {
        var x = document.getElementById("myDiv");
        var y = document.getElementById("pic4");
        if (x.style.display === "none" && y.style.display==="block") {
            x.style.display = "block";
            y.style.display = "none";
          } else {
            x.style.display = "none";
            y.style.display = "block";
          }
       
    }
    
    const logout = ()=>
    {
        history.push("/");
    }

    



    return ( 

     <div className="VendorScreen">
     
          
       
        {Object.keys(user).length >0 && (
            <div>

                <h2 className="head4">WELCOME {props.userNameForLoc2}</h2>
                <h4 className="head5">SEND A MESSAGE TO LET THEM KNOW</h4>
                <button  className="btno" onClick={Toggle}>Show msg</button>
                
               
               
               {issamevendor && custArr.length ? (
                <div id="myDiv"> 
                    {custArr.map((cust, index)=>{
                        if(index%2==0) return null;
                        return (<div key={index} id="ele4"><strong>{cust.name}</strong> at <strong>{cust.add}</strong>  wants to buy your items</div>)}
                    )}
                </div>) 
                : 
                (<div id="myDiv">""</div>)}  
                



                 <img src={logo} alt=""  id="pic4"/>


                {Object.keys(user).map((use, index)=>(
                    <div key={index}>
                        <button onClick={()=>{Clicked1(user[use]);}} className="btn6">{user[use]}</button> 
                    </div>)
                )}

                <button className="btno" onClick={()=>{logout();}}>Logout</button>

            </div>
        )}
         

     

       
    
     
     
     
     </div>
       
      


     );
}
 
export default VendorScreen;