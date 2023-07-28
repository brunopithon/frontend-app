import React, { useEffect } from 'react'
import { usePerson } from '../hooks/usePerson'

const Main = () => {
    const {indexPerson, person} = usePerson()
    useEffect(()=> {
        indexPerson()
        
        
    },[]) 
  return (
    <div><table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Tipo</th>
        <th>Descrição</th>
        <th>Telefone</th>
      </tr>
    </thead>
    <tbody>
      {person.data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.type}</td>
          <td>{item.description}</td>
          <td>{item.phone_number}</td>
        </tr>
      ))}
    </tbody>
  </table></div>
  )
}

export { Main };

