import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../../../Providers/AuthProviders';
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const {user} = useContext(AuthContex);
    console.log(user);
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Quick News Publisher </small></p>
                <p>{moment().format('dddd MMMM D YYYY')}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Tranding</Button>{' '}
                <Marquee pauseOnHover={true} speed={50} className='text-danger'>
                    Hello World Iam Here ,Tomi eikhane Keno ascho? News Site Na Eita
                </Marquee>
            </div>
            {/* Nabvar section started */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Carrer</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {user &&
                                <FaUser style={{fontSize:'25px'}}></FaUser>
                                }
                                </Nav.Link>
                            <Nav.Link eventKey={2} href="">
                            {user ?
                                <Button variant="secondary">Logout</Button>
                                :
                                <Button variant="secondary">
                                    <Link to='/login'>Login</Link>
                                </Button>
                            }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;