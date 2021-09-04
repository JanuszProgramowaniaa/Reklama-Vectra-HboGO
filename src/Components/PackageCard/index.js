import React,{useState,useEffect} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TvIcon from '@material-ui/icons/Tv';
import MouseIcon from '@material-ui/icons/Mouse';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
function PackageCard(props){

  return (

  
   

      <div className="packagecard-Container" >
          
        
   <Container >
          <Row  >
    <Col md={12} ><h1>STWÓRZ SWÓJ WŁASNY PAKIET<h6>TELEWZJA - INTERNET - TELEFON</h6></h1></Col>
    <Col md={12}  > <Row > <div style={{display:"flex",justifyContent:"space-evenly" }}> <div className="IconContent"><div className="icon"><TvIcon fontSize="Large"/></div> <span className="select">WYBIERZ</span><span className="option">ULUBIONE<br/>KANAŁY TV</span></div>  <span style={{color:"white",marginTop:"25px"}}> <AddOutlinedIcon fontSize="Large"/></span><div className="IconContent"><div className="icon"><MouseIcon fontSize="Large"/></div> <span className="select">WYBIERZ</span><span className="option">ULUBIONE<br/>KANAŁY TV</span></div> <span style={{color:"white",marginTop:"25px"}}><AddOutlinedIcon fontSize="Large"/> </span><div className="IconContent"><div className="icon"><PhoneInTalkIcon fontSize="Large"/></div> <span className="select">WYBIERZ</span><span className="option">ULUBIONE<br/>KANAŁY TV</span></div><span style={{color:"white",marginTop:"25px"}}><AddOutlinedIcon fontSize="Large"/></span> <div className="IconContent"><div className="icon"><SettingsInputAntennaIcon fontSize="Large"/></div> <span className="select">WYBIERZ</span><span className="option">ULUBIONE<br/>KANAŁY TV</span></div>  </div> </Row>   </Col>
    <Col md={12}  >  <button onClick={()=>{alert("No to ziuup")}}>STWÓRZ PAKIET</button><h6 className="underbutton">lub wybierz pakiet, przygotowany przez nas</h6></Col>
      </Row>
</Container>
      </div>


 


  );
}

export default PackageCard;
