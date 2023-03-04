import  SimpleSlider  from "./slideshow/SimpleSlider/sss";
import Container from "react-bootstrap/Container";
import "./slideshow/SimpleSlider/slick.css";
import "./slideshow/SimpleSlider/slick-theme.css";
export default function rms (){
  return (
    <Container fluid>
    <div>
      <SimpleSlider initialSlide={1}/>
    </div>
    </Container>
  );
}
