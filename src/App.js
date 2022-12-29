import logo from './logo.svg';
import './App.css';
import Product from './Product/Product';
import { Card } from 'react-bootstrap';
import ProductCard from './Product/ProductCard';
import { useState } from 'react';
import DisplayProducts from './Product/DisplayProducts';
import ShowHide from './Product/ShowHide';

function App() {

  let initialProducts = [
    { title: 'Angles and Demons', publisher: 'Penguin Random House' , author :'Dan Brown' , price : 409, prodid: 2012},
    { title: 'Norse Mythology', publisher: 'Bloomsbury Publishing' , author :'Neil Gaiman' , price : 300, prodid: 2019},
  ];
  const [products, setproductss] = useState(initialProducts);


  return (
    <div>
    <Product products={products}></Product>
    <ProductCard></ProductCard>
    <ShowHide></ShowHide>
    <DisplayProducts></DisplayProducts>
    </div>
    
  );
}

export default App;
