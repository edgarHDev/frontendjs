
import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Loading() {
  
  const loading = useSelector(state => state.loading)



  return (
    <Container style={{position : 'absolute', height : '100vh', top : 0, zIndex : 5000}} fluid className='justify-content-center d-flex align-items-center bg-dark'>
      <Row>
        <Col className="text-center my-4" >
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <h1 className='my-2 text-white'>{loading.message}</h1>  
        </Col>
      </Row>

    </Container>

  );
}
