import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import obrazek from "../../Image/CapitanAmerica.jpg"
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
interface ISupport  {
  image :string;
}


export default function Support(props: ISupport): JSX.Element {

  return (

  
   

      <div className="Support-Container" >
          
        <h1>NASZ SUPPORT</h1>
        <h2>PROPOZYCJE NASZEGO TV-MANIAKA <br/>NA WEEKEND</h2>
  
   <div className="center">
   <Container><Row>
    <Col><div><div className="circle"><img src={obrazek}></img></div></div></Col>
 
   <Col><div className="content"> <Col><div style={{display:"flex",alignItems:"center"}}><div>ZOBACZ CO KUBA<br/> ZNALAZŁ CIEKAWEGO<br/> W TV NA WEEKEND</div> <div style={{marginLeft:"10px"}}><ArrowForwardIosOutlinedIcon fontSize={"large"} /></div></div></Col> <hr/> <Col><div style={{display:"flex",alignItems:"center"}}><div>PODYSKUTUJ Z NIM<br/> O FILMACH JUŻ<br/> W PIATEK 15.09.2014</div> <div style={{marginLeft:"10px"}}><SmsOutlinedIcon fontSize={"large"}/> </div></div></Col>  </div></Col>
<div className="bottom">Zostań naszym ekspertem i poprowadź <br/> przeedwekendowy chat z użytkownikami</div>
</Row>

   </Container>
   
  

   
      </div>

 </div>


  );
}

