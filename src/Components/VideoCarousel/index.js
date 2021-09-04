import React,{useState} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {images} from "../../Helpers/VideoCarouselDat "
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import {Container,Row,Col} from 'react-bootstrap'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
function VideoCarousel(){

  const [currImg,setCurrImg]=useState(0);

  
  return (

  
   

      <div className="carousel">
 <div className="Top">
     <Container fluid><Row>
    <Col md={9} ><span className="VideoCarouselTitle">TERAZ <br/> W TV ONLINE</span></Col>
    <Col md={3}  ><span className="VideoCarouselViewership">Teraz <br/> ogląda<br/><span style={{fontWeight:"bold"}}> 258 </span>  <br/> <SupervisorAccountRoundedIcon/></span></Col>
</Row>
     </Container>
 
 </div>
     <div className="videocarouselInner"
     style={{backgroundImage:`url(${images[currImg].img})` }}
     >
     <div className="arrow-down"></div>
    <div className="left" style={{cursor:"pointer"}} onClick={()=>{

currImg>0 && setCurrImg(currImg-1);

}}>
<ArrowBackIosOutlinedIcon fontSize={"large"}  /></div>
<div className="center"><a href="#" className="round-button" onClick={()=>{alert("Trzeba napisać playera xD")}}><PlayArrowIcon fontSize="large"/></a>
</div>
<div className="right"  style={{cursor:"pointer"}} onClick={()=>{

currImg<images.length-1 && setCurrImg(currImg+1);

}}><ArrowForwardIosOutlinedIcon fontSize={"large"} /></div>
      
    
     </div>
     <div className="VideoCarouselDescription">{images[currImg].title} <br/> <span style={{fontSize:"15px", color:"#84b82a",fontWeight:"bold"}}>Discover Channel </span></div>
  <div className="VideoCarouselBottom"></div>
      </div>


 


  );
}

export default VideoCarousel;
