import {useState} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
interface ICarousel  {
  images :Array<any>;
}

export default function Carousel(props: ICarousel): JSX.Element {

  const [currImg,setCurrImg]=useState(0);

  
  return (

  
   

      <div className="carousel">
    <div style={{position:"absolute",left:"20px",top:"15px",color:"white",fontWeight:900,lineHeight:"15px"}}> <span style={{fontSize:"30px"}}>VOD </span><br/> <span style={{fontSize:"10px"}}>VIDEO NA RZĄDANIE</span> </div>
     <div className="carouselInner"
     style={{backgroundImage:`url(${props.images[currImg].img})` }}
     >
     <div className="left" style={{cursor:"pointer"}} onClick={()=>{

         currImg>0 && setCurrImg(currImg-1);

     }}>
     <ArrowBackIosOutlinedIcon fontSize={"large"} /></div>
       <div className="center"><div className="buy">KUP FILM</div></div>
       <div className="right" style={{cursor:"pointer"}} onClick={()=>{

currImg<props.images.length-1 && setCurrImg(currImg+1);

}}><ArrowForwardIosOutlinedIcon fontSize={"large"} />
<div className="CarouselDescription" style={{position:"absolute",bottom:0,left:0} }><div style={{width:"70%",float:"left"}}> Kapitan Ameryka: <br/> Zimowy Żołnierz<br/><span className="primary-color" style={{fontSize:"10px"}}> NOWOŚCI - AKCJA</span> <span style={{color:"#2c8fbd",fontSize:"10px",marginLeft:"10px"}}>14.00zł</span></div><div style={{width:"30%",float:"left",borderLeft:"1px solid grey",textAlign:"center",fontSize:"8px",lineHeight:"12px",color:"#8f8f8f"}}>FILM <br/>OBEJRZY<br/><span style={{color:"white",fontSize:"15px"}}>125<br/><SupervisorAccountRoundedIcon/></span></div></div>
</div>
  
     </div>
  
      </div>


 


  );
}

