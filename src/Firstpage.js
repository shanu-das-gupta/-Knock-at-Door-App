import './App.css';
import Logo from './gettyimages-1280995985-1024x1024.jpg';
import { useHistory} from 'react-router-dom';




const Firstpage = () => {
  
  const history = useHistory();
   function clicked1()
   {
       history.push("/register");
   }

   const clicked2 = ()=>
   {
      history.push("/Loginpage");
   }



    return (  
        
        <div className="firstpage">
        <img src={Logo} alt="" id="pic1"/>
        <h2 id="head1">Knock!</h2>
        <p id="p1">Best Virtual place for vendor, garbage vehicles and customers to communicate directly from a long distance.</p>
       <button className="btn" id="bt1" onClick={clicked2}>LOGIN</button>
       <button className="btn" id="bt2" onClick={clicked1}>REGISTER</button>
       

       </div>
    
    );
}
 
export default Firstpage;
