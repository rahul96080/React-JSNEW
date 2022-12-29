import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const Product = (props) => {
  return (
    <div className='container'>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Title</th>
      <th>Publisher</th>
      <th>Author</th>
      <th>Price</th>
      <th>ProdId</th>
    </tr>
  </thead>
  <tbody>
   
{props.products.map((item, i) => {
    return [
      <tr>
          <th>{item.title}</th>
          <td>{item.publisher}</td>
          <td>{item.author}</td>
          <td>{item.price}</td>
          <td>{item.prodid}</td>
      </tr>
    ];
  })}
   
  </tbody>
</Table>
    </div>


    
  )
}

export default Product

