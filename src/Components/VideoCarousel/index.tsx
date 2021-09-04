import React,{useState} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import {Container,Row,Col} from 'react-bootstrap'
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
interface IVideoCarousel  {
    images :Array<any>;
}


export default function VdeoCarousel(props: IVideoCarousel): JSX.Element {

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
     style={{backgroundImage:`url(${props.images[currImg].img})` }}
     >
     <div className="arrow-down"></div>
    <div className="videocarouselInner left" style={{cursor:"pointer"}} onClick={()=>{

currImg>0 && setCurrImg(currImg-1);

}}>
<ArrowBackIosOutlinedIcon fontSize={"large"}  /></div>
<div className="center"><a href="#" className="round-button" onClick={()=>{alert("Trzeba napisać playera xD")}}><PlayArrowIcon fontSize="large"/></a>
</div>
<div className="right"  style={{cursor:"pointer"}} onClick={()=>{

currImg<props.images.length-1 && setCurrImg(currImg+1);

}}><ArrowForwardIosOutlinedIcon fontSize={"large"} /></div>
      
    
     </div>
     <div className="VideoCarouselDescription">{props.images[currImg].title} <br/> <span className="primary-color" style={{fontSize:"15px",fontWeight:"bold"}}>Discover Channel </span></div>
  <div className="VideoCarouselBottom"></div>
      </div>


 


  );
}
