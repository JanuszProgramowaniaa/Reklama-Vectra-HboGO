import React from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


interface ILte  {
  
}


export default function Lte(props: ILte): JSX.Element {

  return (

  
   

      <div className="Lte-Container" >
          
        <h1>PAKIET 20 GB LTE</h1>
        <h2>PROMOCJA</h2>
        <h3>Dla tych którzy nie wyobrażaja sobie życia bez internetu</h3>
        <ul className="b">
  <li ><span className="liinfo">Oglądaj filmy umieszczone w sieci</span></li>
  <li><span className="liinfo">Ściągaj duże pliki</span></li>
  <li><span className="liinfo">Korzystaj z poczty komunikatora</span></li>
  <li><span className="liinfo">Surfuj swobodnie</span></li>
</ul>

   <div className="bottom"> <div className="bottomleft">SWOBODA <br/> I MOBILNOŚĆ ZA </div> <div className="bottomright">50<span style={{fontSize:"25px"}}>ZŁ</span></div></div>
      </div>


 


  );
}

