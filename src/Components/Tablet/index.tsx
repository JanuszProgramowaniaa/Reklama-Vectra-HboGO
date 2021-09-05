import {useState} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import AppsIcon from '@material-ui/icons/Apps';
interface ITablet  {
  
}


export default function Tablet(props: ITablet): JSX.Element {

  const [active,setActive]=useState(false)

  const day=(  <div className="Tablet-Container"    onClick={()=>{setActive(!active)}}     >
   
  <div className="content">
  <h1>Aplikacja</h1>
  <h2>Lorem ipsum dolor sit amet enim. Etiam <br/> ullamcoper. Suspendissea pellentesque<br/> dui, non felis. </h2>
   </div>
  <div className="icons"> <div className="icon"><AndroidIcon/> </div><div className="icon"><AppleIcon/> </div>  <div className="icon"><AppsIcon/> </div>   </div>
  </div>
  )
  
  
  const night=(  <div className="Tablet-Container night"     onClick={()=>{setActive(!active)}}     >
   
  <div className="content">
  <h1 style={{color:"white"}}>Aplikacja</h1>
  <h2 style={{color:"white"}}> ullamcoper. Suspendissea pellentesque<br/>  dui, non felis.<br/>  dui, non felis.<br/>ullamcoper. Suspendissea pellentesque<br/> dui, non felis.<br/> ullamcoper. Suspendissea pellentesque<br/> ullamcoper. Suspendissea pellentesque<br/> ullamcoper. Suspendissea pellentesque<br/>
  
  <br/>

  Wybierz system operacyjny
  
   </h2>

  </div>
  <div className="icons"> <div className="icon"><AndroidIcon/> </div><div className="icon"><AppleIcon/> </div>  <div className="icon"><AppsIcon/> </div>   </div>
 
 
  </div>
  )






  return (
    
      
   <>
       
     {active ? night: day}

</>
  );
}

