import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './NavigationBar.css'
import { Link } from "react-router-dom";
import Github from './images/github.webp'

const NavigationBar = () => (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as = {Link} to = {"/"} >
    {
        //<a href="https://github.com/marvalarva2929"> <img src = {Github} width="40vw" style={{marginRight: "1vw"}}/> </a>
    }
    marvalarva2929</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Nav.Link as = {Link} to = {"/about"} className = "px-4"> <p className='link'> About </p> </Nav.Link>
              <Nav.Link as = {Link} to = {"/projects"} className = "px-4"> <p className='link'> Projects </p> </Nav.Link>
              <Nav.Link as = {Link} to = {"/blog"} className = "px-4"> <p className='link'> Blog </p> </Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )

export default NavigationBar;
