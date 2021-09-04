import React,{useState,useEffect} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import obrazek from "../../Image/CapitanAmerica.jpg"
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
function Support(props){

  return (

  
   

      <div className="Support-Container" >
          
        <h1>NASZ SUPPORT</h1>
        <h2>Propozycje naszego TV-maniaka na weekend</h2>
  
   <div className="center">
   <Container><Row>
    <Col><img src={obrazek}></img></Col>
 
   <Col><div className="content"> <Col>ZOBACZ CO KUBA<br/> ZNALAZŁ CIEKAWEGO<br/> W TV NA WEEKEND </Col> <hr/> <Col>PODYSKUTUJ Z NIM<br/> O FILMACH JUŻ<br/> W PIATEK 15.09.2014 </Col>  </div></Col>
</Row>
   </Container>
   
  

   <div className="bottom">Zostań naszym ekspertem i poprowadź <br/> przeedwekendowy chat z użytkownikami</div>
      </div>

 </div>


  );
}

export default Support;
