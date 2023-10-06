import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav = () => {
    return (
        <>

        <Navbar className="bg-body-tertiary justify-content-between">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                </Navbar.Collapse>

              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                    />
                  </Col>
                </Row>
              </Form>
            </Navbar>
        </>
    )
}

export default Nav;
