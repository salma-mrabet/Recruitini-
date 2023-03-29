import React from 'react';
import { Container, Row,Button } from 'react-bootstrap';
import "./LandingPage.css";


export default function LandingPage() {
  return (
    <div className='main'>
        
        <Container>
            <Row>
               <div className='intro-text'>
                <div>
                    <h1 className='title'>Welcome to Recruitini</h1>
                    <p className='subtitle'>One Safe place for your recruitement process</p>
                    <div>
                        <div className='buttonContainer'>
                            <a href ='/login'>
                                <Button size='lg' className='landingbutton' variant='outline-primary'>
                                    Login
                                </Button>
                            </a>
                            <a href ='/signup'>
                                <Button size='lg' className='landingbutton' variant='outline-primary'>
                                    Register
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
               </div>
            </Row>
        </Container>
      

        

        
    </div>
  )
}

