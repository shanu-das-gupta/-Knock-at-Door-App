import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import {getDatabase,ref,get,child} from "firebase/database";
import{app} from "./Firebase";
import { useHistory} from 'react-router-dom';

    const db = getDatabase(app);
    const socket = io.connect("http://localhost:3001");
    const CustomerScreen = (props) => {
    const [vendoritems,setvendoritems] = useState([]);
    const [CustomerAddress,setCustomerAddress] = useState("");
    const [a, seta] =useState([]);
   
    const history = useHistory();
    let mylocal = "";

    useEffect(()=>{
        socket.emit("join_room", "market");
        get(child(ref(db),`CUST/${props.userNameForLoc}/Locality`)).then((snapshot)=>{
            mylocal = snapshot.val();;
        }, []);

    },[])

    
    get(child(ref(db),`CUST/${props.userNameForLoc}/Address`)).then((snapshot)=>{
         setCustomerAddress(snapshot.val());
    }, []);  


    const Clicked1=(Vendorname)=>
    {
        socket.emit("send_message", {Vendorname:Vendorname,Address:CustomerAddress,CustomerName:props.userNameForLoc, messageBy: "customer" });
    }

    // const setthis =(data)=>{
    //     setvendoritems(data);
    //     setDummy("BHAALU");
    // };
 

      useEffect(()=>{

        socket.on("receive_message", (data)=>{
            if(data.messageBy==="customer" || mylocal==="") return;
            if(mylocal === data.locality) {
                get(child(ref(db),`USERS/${data.name}/Items`)).then((snapshot)=>{
                    for(let i=0;i<vendoritems.length;i++){
                        if(vendoritems[i].name===data.name) return;
                    }
                    // let b = vendoritems;
                    // let a =  {name: data.name, items: snapshot.val()};
                    // b.push(a);
                    // setthis(b);
                    setvendoritems(arr => [...arr,{name: data.name, items: snapshot.val()} ]);

                }, []);
            }
         })
         
       

    },[socket])

    
     const Logout = ()=>
     {
        history.push("/");
     }
     
    useEffect(()=>{
        setvendoritems([...a]);

    }, [a]);


     const deleteEle = (ele) => {
        console.log("===================> DEL FILE", vendoritems[ele] );
        let b = vendoritems;

        b.splice(ele, 1);
        seta(b);      
     }


    return ( 
     
        <div className="register1">
         <h2 id="head7">WELCOME {props.userNameForLoc} </h2>
         
         <button className="btno3" onClick={Logout}>logout</button>

        { vendoritems.map((ven, index)=>{
            if(index%2==0) return null;
            return (<div key={index}  id="ele">
            <p id="ele1"><strong> {ven.name}</strong> has arrived to your locality</p>
            <div id="ele3">Things to offer - </div>
            <div id="sp1">
            {Object.keys(ven.items).map((item, index)=>(
               <div key={index} id="ele2">
                   <span >{ven.items[item]},</span> 
               </div>)
           )}
            </div>
            
           <button id="btno1" onClick={()=>{Clicked1(ven.name);}}>Come</button>
           <button id="btno4" onClick={()=>{deleteEle(index)}}>Delete</button>
          
          
   
           </div>)



            }) }
       



            
         




        </div>


     );
}
 
export default CustomerScreen;