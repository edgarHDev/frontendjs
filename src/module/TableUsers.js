import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableUsers({users}) {
    return (
        <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido paterno</th>
            <th>Apellido materno</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 ? 
              users.map(row => {
                return(
              <tr>
                  <td>{row.name}</td>
                  <td>{row.lastname}</td>
                  <td>{row.surname}</td>
                  <td>{row.age}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
              </tr> )
              })
            
              : (
              <tr>
                <td colSpan={6}>No hay usuarios registrados</td>            
              </tr>
              )
          }
          
        
        </tbody>
      </Table>

    )
}
