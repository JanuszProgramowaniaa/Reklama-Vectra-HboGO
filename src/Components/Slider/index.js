import React,{useState} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {images} from "../../Helpers/SliderDat"
function Slider(props){


const delay = 1500;
  const [currImg,setCurrImg]=useState(0);
  const timeoutRef = React.useRef(null);
  
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

 

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
      setCurrImg((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currImg]);









  
  
  return (

  
   

      <div className="slider" >

     <div className="sliderInner"
     style={{backgroundImage:`url(${images[currImg].img})` }}
     >
    
    <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${currImg === idx ? " active" : ""}`}
            onClick={() => {
              setCurrImg(idx);
            }}
          ></div>
        ))}
      </div>
     </div>
 
      </div>


 


  );
}

export default Slider;
