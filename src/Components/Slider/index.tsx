import React,{useState} from "react"
import './Style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


interface ISlider {
  time :number;
  images :Array<any>;
}

export default function Slider(props: ISlider): JSX.Element {


  const delay  = props.time ;
  const [currImg,setCurrImg]=useState(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  
  
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
          prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currImg]);









  
  
  return (

  
   

      <div className="slider-Container" >

     <div className="sliderInner"
     style={{backgroundImage:`url(${props.images[currImg].img})` }}
     >
    
    <div className="slideshowDots">
        {props.images.map((_:any, idx:number) => (
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

