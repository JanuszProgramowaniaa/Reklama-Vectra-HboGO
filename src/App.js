import './App.scss';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import Carousel from './Components/Carousel'
import Slider from './Components/Slider'
import PackageCard from './Components/PackageCard'
import VideoCarousel from './Components/VideoCarousel'
import Lte from './Components/Lte'
import Support from './Components/Support'
import Tablet from './Components/Tablet'
import TabletIcon from '@material-ui/icons/Tablet';
import PhoneIcon from '@material-ui/icons/Phone';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import HamburgerMenu from "./Components/HamburgerMenu"

function App() {

 
  
  return (
      
      
      <Container className="Container" fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <header>
  <Row className="Header" >
    <Col> <Row >
    <Col md={2} ></Col>
    <Col md={2} >
    <Col md={3} > <HamburgerMenu />  </Col>
    </Col>
    <Col md={6} className="Header-letter" >CENTRUM OBSŁUGI KLIENTA <span style={{color:"#6b9325",fontWeight:"bold"}}> <CallRoundedIcon fontSize="small" style={{marginLeft:"13px"}}/>800 080 800  </span><span style={{marginLeft:"13px",marginRight:"13px"}}>|</span><SearchIcon/>  SZUKAJ <span style={{marginLeft:"13px",marginRight:"13px"}}>|</span> <AccountCircleOutlinedIcon/><span style={{marginLeft:"13px"}}>STREFA ABONENTA</span></Col>
   

  </Row>
  </Col>
  </Row>
  </header>
  <article>
  <Row className="justify-content-md-center" >
    <Col md={8} className="Article">
  

<Row  >
    <Col md={8} className="Pierwsze"><Slider time={1000}/></Col>
    <Col md={4}  className="Drugie"><Carousel/></Col>
  </Row>
  <Row >
    <Col md={8} className="Trzecie"><PackageCard/></Col>
    <Col md={4} className="Czwarte"><VideoCarousel/></Col>
  </Row>
  <Row >
    <Col md={4} className="Piate"><Lte/></Col>
    <Col md={4} className="Szoste"><Support/></Col>
    <Col md={4} className="Siudme"><Tablet/></Col>
  </Row>
</Col>
</Row>

</article>






 <footer>

   <div className="leftfooter" style={{float:"left"}}> Aplikacja Vectra <br/> <span style={{color:"#675190",marginLeft:"5px"}}><TabletIcon fontSize={"large"}/> </span><div style={{textAlign:"left",width:"50px" ,color:"#675190",marginLeft:"50px",marginTop:"-32px"}}>POBIERZ <span style={{fontWeight:"900"}}>APLIKACJĘ</span>
   
  
   </div> 
 <div style={{float:"right", marginTop:"-50px",textAlign:"right"}}>  Infolinia sprzedażowa <br/><span style={{color:"#84b82a"}}>ZADZWOŃ LUB WYŚLIJ SMS </span><br/><span style={{color:"#84b82a",fontSize:"20px",fontWeight:"bold"}}><PhoneIcon/><SmartphoneIcon/> 601 601 601</span> <br/>(wg stawek operatorów)  </div>

   <hr style={{marginTop:"5%"}} /></div>
  
   <div className="rightfooter" > Centrum obsługi klienta <span style={{color:"#84b82a"}}><br/>ZADZWOŃ LUB WYŚLIJ SMS </span><br/><span style={{color:"#84b82a",fontSize:"20px",fontWeight:"bold"}}><PhoneIcon/> 800 080 800</span><br/> <div style={{marginTop:"5px",lineHeight:"13px"}}> <span style={{fontSize:"10px"}}>Z TELEFONU KOMÓRKOWEGO </span><br/><span style={{fontSize:"16px",fontWeight:"bold",color:"#84b82a"}}>58 500 65 00 </span><br/><span style={{fontSize:"8px"}}>(wg stawek operatorów)</span></div> </div>
  <div className="rightbottomfotter">      <ul  className="footer"><a href="#"><li className="footer" style={{marginLeft:"0px"}}>O nas</li></a> <a href="#"><li className="footer">Kontakt</li></a> <a href="#"><li className="footer">Kariera</li></a> <a href="#"><li className="footer">Dla mediów</li> 
 </a></ul></div>  
  </footer>


</Container>
      





  );
}

export default App;
