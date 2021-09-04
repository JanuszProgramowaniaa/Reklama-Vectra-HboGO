import React,{useState,useEffect} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import AppsIcon from '@material-ui/icons/Apps';
interface ITablet  {
  
}




export default function Tablet(props: ITablet): JSX.Element {

  return (
    
      
   <>

      <div className="Tablet-Container"         >
 

      <h1>Aplikacja</h1>
      <h2>Lorem ipsum dolor sit amet enim. Etiam <br/> ullamcoper. Suspendissea pellentesque<br/> dui, non felis. </h2>
      <div className="icons"> <div className="icon"><AndroidIcon/> </div><div className="icon"><AppleIcon/> </div>  <div className="icon"><AppsIcon/> </div>   </div>
 </div>

</>
  );
}

