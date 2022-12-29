import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const DisplayProducts = () => {
    let lstProducts = [
        { model: 'Google Pixel 2 XL', price: 62000 , ram :'4GB' , camera : '12.2 MP', os: 'Andorid Pie', processor: 'Snapdragon 835 octa-core'},
        { model: 'Apple iPhone X', price: 98000 , ram :'2GB' , camera : '12 MP', os: 'iOSv11.1.1', processor: 'A11 Bionic hexa-core'},
      ];
      const [product, setproduct] = useState(lstProducts);
      const [isShown, setIsShown] = useState(true);
      const [isHidden, setIsHidden] = useState(false);

      function setShow() {
        setIsHidden(wasOpened => !wasOpened);        
      }

  return (
    <div className='container'>
  <div style={{textAlign:'right', margin:'10px'}}>
  <button className="btn btn-success" type="button" onClick={()=>setShow()}>
  {isHidden === false ? 'Show Details' : 'Hide Details'}
</button>
  </div> 

  <Table striped bordered hover>
    
  <thead>
    <tr>
      <th>Model</th>
      <th>Price</th>
      
      <th hidden={!isHidden}>RAM</th>
      <th hidden={!isHidden}>Camera</th>
      <th hidden={!isHidden}>OS</th>
      <th hidden={!isHidden}>Processor</th>
    </tr>
  </thead>
  <tbody>
   
{product.map((item, i) => {
    return [
      <tr>
          <th>{item.model}</th>
          <td>{item.price}</td>
          <td hidden={!isHidden}>{item.ram}</td>
          <td hidden={!isHidden}>{item.camera}</td>
          <td hidden={!isHidden}>{item.os}</td>
          <td hidden={!isHidden}>{item.processor}</td>
      </tr>
    ];
  })}
   
  </tbody>
</Table>
      </div>
  )
}

export default DisplayProducts
