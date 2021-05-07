
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loadingOpen } from '../redux/actions/loading';
import { addUser, getUsers } from '../redux/actions/user';
import {  showAlert } from '../redux/actions/alert';
import { validateEmail, validateNumber } from '../utils/validate';
import NewUser from '../module/NewUser';
import TableUsers from '../module/TableUsers';

export default function User() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usersAge, setUsersAge] = useState([]);
  const [usersLastname, setUsersLastname] = useState([]);
  const [handleTable, setHandleTable] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    lastname : '',
    surname : '',
    age : 0,
    email : '',
    phone : ''
  });

  const onSubmit = () => {
    if(formData.name !== '' && formData.lastname !== '' && formData.surname !== '' &&
      formData.email !== '' && formData.age !== 0 && formData.phone){
        if(validateEmail(formData.email)){
          if(validateNumber(formData.age)){
            dispatch(loadingOpen('Agregando usuario'));
            dispatch(addUser(formData)).then(res => {
              if(res.status === 200){
                const data = res.data.user;
               setFormData({
                  name: '',
                  lastname : '',
                  surname : '',
                  age : 0,
                  email : '',
                  phone : ''
                })
        
                handleClose();
                setUsersAge([
                  data,
                  ...usersAge
                  
                ])
                setUsersLastname([
                  data,
                  ...usersLastname
                  
                ])
                dispatch(showAlert('Nuevo usuario', 'Se ha agregado el nuevo usuario con exito.', 'success'))
              }
            });
          }else{
            dispatch(showAlert('Campo edad', 'El campo edad no es un numero valido', 'danger'));
          }
        }else{
          dispatch(showAlert('Correo electrónico', 'El correo electrónico no es valido', 'danger'))
        }
      }else{
        dispatch(showAlert('Nuevo usuario', 'Debe llenar todos los campos del formulario', 'danger'))
      }
    
  
  }

  //alert(JSON.stringify(users))
  useEffect(() => {
    dispatch(loadingOpen('Cargando información'));
    dispatch(getUsers()).then(res => {
      if(res.status === 200){
        setUsersAge(res.data[0]);
        setUsersLastname(res.data[1]);


      }
      
    })    
  }, [])
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container>
      <Row className='justify-content-end'>
        <Col className=' my-4'>
          <Button variant="primary" onClick={() => setHandleTable(!handleTable)}>
              {handleTable ? 'Orden por apellido' : 'Orden por edad'}
            </Button>
        </Col>
        <Col className="text-end my-4">
          
        

          <Button variant="primary" onClick={handleShow}>
            Nuevo usuario
          </Button>
        </Col>
      </Row>           
      {
        handleTable ? 
        <TableUsers users={usersAge} />  
        :    
        <TableUsers users={usersLastname} />  
      }  
      <NewUser formData={formData} show={show} handleClose={handleClose} onChange={onChange} onSubmit={onSubmit} />
      
    </Container>

  );
}
