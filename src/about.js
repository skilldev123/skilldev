import "./about.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function About() {
  const State = localStorage.getItem("state");

    let navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
          navigate("/");
        }
      }, [navigate]);

    const [isHighlighted, setIsHighlighted] = useState(false);
    let Navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setIsHighlighted(true);
          } else {
            setIsHighlighted(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      const handleClick2 = () => {
        window.scrollTo({ top: 600, behavior: 'smooth' });
      };


      const buttonStyle = {
        backgroundColor: isHighlighted ? '#292c35' : 'grey',
   
        fontWeight: isHighlighted ? 'bold' : 'normal',
        transform: isHighlighted ? 'scale(0.8)' : 'none',
      };
      const button2Style = {
        backgroundColor: isHighlighted ?  'grey' : '#292c35',
     
        fontWeight: isHighlighted ? 'normal' : 'bold',
        transform: isHighlighted ? 'none': 'scale(0.8)',
      };
     
      const navtobuttonBihar = () => {
        if(State === "Bihar" || State === "ALL"){
          localStorage.setItem("state", "Bihar");
          Navigate("/dashboardBihar");
        }
       
      };
      const navtobuttonTamilNadu = () => {
        if(State === "Tamil_Nadu" || State === "ALL"){
          localStorage.setItem("state", "Tamil_Nadu");
          Navigate("/dashboardTamilNadu");
        }
      
      };

  return (
    <>
      <div className="aboutbody">
        <Navbar className="aboutnavbar" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand className="logoleft" onClick={handleClick}></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="navhome" onClick={handleClick} style={buttonStyle}>
                  Home
                </Nav.Link>
                <Nav.Link className="navabt" onClick={handleClick2} style={button2Style}>
                  About
                </Nav.Link>
                <NavDropdown
                  className="navstates"
                  title="Select States / Union Territories"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    ANDAMAN AND NICOBAR ISLANDS
                  </NavDropdown.Item>
                  <NavDropdown.Item>ANDHRA PRADESH</NavDropdown.Item>
                  <NavDropdown.Item>ARUNACHAL PRADESH</NavDropdown.Item>
                  <NavDropdown.Item onClick={navtobuttonBihar}>BIHAR</NavDropdown.Item>
                  <NavDropdown.Item>CHANDIGARH</NavDropdown.Item>
                  <NavDropdown.Item>CHHATTISGARH</NavDropdown.Item>
                  <NavDropdown.Item>DADRA AND NAGAR HAVELI</NavDropdown.Item>
                  <NavDropdown.Item>DAMAN AND DIU</NavDropdown.Item>
                  <NavDropdown.Item>DELHI</NavDropdown.Item>
                  <NavDropdown.Item>GOA</NavDropdown.Item>
                  <NavDropdown.Item>GUJARAT</NavDropdown.Item>
                  <NavDropdown.Item>HARYANA</NavDropdown.Item>
                  <NavDropdown.Item>HIMACHAL PRADESH</NavDropdown.Item>
                  <NavDropdown.Item>JAMMU AND KASHMIR</NavDropdown.Item>
                  <NavDropdown.Item>JHARKHAND</NavDropdown.Item>
                  <NavDropdown.Item>KERELA</NavDropdown.Item>
                  <NavDropdown.Item>LADAKH</NavDropdown.Item>
                  <NavDropdown.Item>LAKSHADWEEP</NavDropdown.Item>
                  <NavDropdown.Item>MADHYA PRADESH</NavDropdown.Item>
                  <NavDropdown.Item>MAHARASHTRA</NavDropdown.Item>
                  <NavDropdown.Item>MANIPUR</NavDropdown.Item>
                  <NavDropdown.Item>MEGHALAYA</NavDropdown.Item>
                  <NavDropdown.Item>MIZORAM</NavDropdown.Item>
                  <NavDropdown.Item>NAGALAND</NavDropdown.Item>
                  <NavDropdown.Item>ODISHA</NavDropdown.Item>
                  <NavDropdown.Item>PUDUCHERRY</NavDropdown.Item>
                  <NavDropdown.Item>PUNJAB</NavDropdown.Item>
                  <NavDropdown.Item>RAJASTHAN</NavDropdown.Item>
                  <NavDropdown.Item>SIKKIM</NavDropdown.Item>
                  <NavDropdown.Item onClick={navtobuttonTamilNadu}>TAMIL NADU</NavDropdown.Item>
                  <NavDropdown.Item>TELANGANA</NavDropdown.Item>
                  <NavDropdown.Item>TRIPURA</NavDropdown.Item>
                  <NavDropdown.Item>UTTAR PRADESH</NavDropdown.Item>
                  <NavDropdown.Item>UTTRAKHAND</NavDropdown.Item>
                  <NavDropdown.Item>WEST BENGAL</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="logo" onClick={handleClick}>
          
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="abt1">
          <div className="bgimage"></div>
          <div className="contenth0">EDUCATION AND SKILL DEVELOPMENT</div>
          <div className="contenth1">Realizing the </div>
          <div className="contenth2">Next Generation of Talent </div>
          {/* <div className="content1">
            The manufacturing industry is in need of skilled talent. We engage
            in academia and industry collaboration to help the engineers of the
            future gain new skills.
          </div> */}
        </div>
      </div>
      {/* <div className="abt2">
        <div className="content2h1">
          Overview : TTL Education & Skill Development Initiative's
        </div>

        <div className="content2h2">
          Realizing the next generation of talent for Industry 4.0
        </div>
        <div className="contentp1">
          As Employers seek to accelerate towards Industry 4.0, they need
          engineers who can engineer products of the future and deliver
          effective digital transformation. To equip the next generation of
          talent with the required skills, businesses need a partner that offers
          the relevant training, resources and support.
        </div>
        <div className="contentp2">
          We have developed upskilling tools, training and courses that leverage
          our manufacturing domain knowledge and bridge the gap between industry
          and academia. We work with colleges, universities and governments to
          equip the next generation of engineers and technicians with the skills
          that are required by the global manufacturing industry. We also offer
          a digital learning system through our proprietary iGET IT offering to
          corporations and individuals to address their training requirements.
        </div>
        <div className="contentp3">
          Tata Technologies, know what skills are needed to ensure a better
          future for our youth and we bring it to life through our Education &
          Skill Development Initiative's.
        </div>
        <div className="contentp4">
          We offer upskilling solutions and training programs to equip the next
          generation of talent with the skills they need to work and innovate
          with the latest engineering and manufacturing technologies under
          Industry 4.0
        </div>
      </div> */}

      {/* <div className="abt3">
        <div className="content3h1">Offerings:</div>
        <div className="content3h2">
          Upskilling -Competency Centers of Excellence
        </div>
        <div className="content3p1">
          Our Upskilling Competency Centers of Excellence provide hands-on
          experiential learning to young engineers on the latest skills and
          technologies they need to work with advanced technology solutions for
          Industry 4.0 - and to engineer a better future for them.
        </div>

        <div className="content3h3">GET IT online training platform</div>
        <div className="content3p2">
          Our online training platform, i GET IT, provides self-paced training
          courses for engineers, specializing in engineering applications and
          skills. There are custom offerings for manufacturers wanting to
          upskill their employees and engineers who can directly upskill.
        </div>
        <div className="content3h4">Objectives:</div>
        <div className="content3p3">
          Upskilling youth for higher employability.<br></br>Bridging the gap between academia and Industry.<br></br>Skilling at scale to
          develop competitive products.
        </div>
     
      </div> */}
      {/* <div className="abt4">
       
      </div> */}

      {/* <div className="App-footer">
        Engineering a better world
      </div> */}
    </>
  );
}
