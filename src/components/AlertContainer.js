import React from 'react'
import { Container, Alert, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hideAlert } from '../redux/actions/alert'
export default function AlertContainer({title, message, type}) {
    const dispatch = useDispatch()
    const alert = useSelector(state => state.alert);
    if(alert.status === true){
          window.setTimeout(()=>{
              dispatch(hideAlert());
            },2000)
          
    }

    return (
    <Container style={{position : 'absolute', height : '100vh', top : 0, zIndex : 5000, background : '#0000004D'}} fluid className='justify-content-center d-flex align-items-end '>
      <Row className='justify-content-center w-100'>
        <Col md={6} className="text-center my-4 ">
            <Alert variant={type} className='w-100'>
                <Alert.Heading>{title}</Alert.Heading>
                <p>
                    {message}
                </p>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => dispatch(hideAlert())} variant={`outline-${type}`}>
                        OK
                    </Button>
                </div>  
            </Alert>
    
        </Col>
      </Row>

    </Container>
                            
    )
}
