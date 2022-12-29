import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Button , CardGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductCard = () => {  
  
  let initialProducts = [
    { title: 'Angles and Demons', publisher: 'Penguin Random House' , author :'Dan Brown' , price : 409, prodid: 2012},
    { title: 'Norse Mythology', publisher: 'Bloomsbury Publishing' , author :'Neil Gaiman' , price : 300, prodid: 2019},
    { title: 'Norse Mythology', publisher: 'Bloomsbury Publishing' , author :'Neil Gaiman' , price : 300, prodid: 2019},
  ];
  const [products, setproductss] = useState(initialProducts);

  return (
    <div className='container'> 
<h5> Feature Titles</h5>     
<Row xs={1} md={4} className="g-4">
      {products.map((product, idx) => (
        <Col>
          <Card>          
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              Author : <b>{product.author}</b><br/>
              Publisher : <b>{product.publisher}</b><br/>
              Price : <b>{product.price}</b>
               <br/>
               <br/>
               Product ID : {product.prodid}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  )
}

export default ProductCard