import React,{useState} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@material-ui/icons/Menu';
import TvIcon from '@material-ui/icons/Tv';
import MouseIcon from '@material-ui/icons/Mouse';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import Kapitan from '../../Image/Zimowyzołnierz.png'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
function HamburgerMenu(props){

const [active,setActive]=useState(false);

const change =()=>{
  setActive(!active);
}


  return (

  
   <div className="Menu" onClick={change}>    
<MenuIcon fontSize="small"    /> 

{active ? (<div className="contentmenu">

<div className="contentmenuone"> <ul><li style={{paddingBottom:"10px",paddingTop:"20px"}}><span style={{color:"#675190",fontSize:"13px",fontWeight:"bold"}}>PACZKI I PAKIETY</span></li><li><span style={{color:"#675190"}}><TvIcon/></span>Telewizja</li><li><span style={{color:"#675190"}}><MouseIcon/></span>Internet</li><li><span style={{color:"#675190"}}><PhoneInTalkIcon/></span>Telefon</li><li><span style={{color:"#675190"}}><SettingsInputAntennaIcon/></span>Internet mobilny</li></ul></div>
<div className="contentmenutwo"> <div style={{color:"#84b82a", fontSize:"20px",fontWeight:"bold"}}> VOD</div><div style={{color:"grey",fontSize:"11px",fontWeight:"bold"}}>Oglądaj wtedy, gdy masz<br/> czas i ochotę</div><div style={{color:"grey",fontSize:"11px",fontWeight:"bold",borderTop:"1px solid grey",borderBottom:"1px solid grey",display:"flex",marginTop:"5px"}}><img src={Kapitan}></img><div style={{paddingTop:"5px",paddingLeft:"10px"}}><span style={{color:"#84b82a"}}>DZIŚ W PROMOCJI</span><br/> Ocalony <br/><span style={{fontSize:"9px"}}>Dramat</span> <br/> <span style={{color:"#2c8fbd"}}>5,00zł <ArrowRightAltOutlinedIcon fontSize={"small"}/> KUP</span></div></div></div>
<div className="contentmenuthird"> <span style={{fontSize:"15px",fontWeight:"bold",color:"#84b82a"}}>TV ONLINE </span> <br/><span style={{color:"#bababa"}}> Oglądaj telewizję przez<br/> internet na czym chcesz:<br/> komputer, tablet, telefon</span></div>
  
</div>) : null   }


</div>


  );
}

export default HamburgerMenu;
