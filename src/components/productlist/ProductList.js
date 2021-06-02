import React from "react";
import { Button, Table } from "react-bootstrap";

const ProductList = () => {
  const products = [
    {
      imgSrc:
        "data:image/jpeg;base64,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",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      imgSrc: `https://tunewtec.com/wp-content/uploads/2020/12/smart-watch-a-ecran-tactile.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      imgSrc:
        "https://images.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  const clickMe = (productName) => {
      alert (`the product name is ${productName}`);
  };
  return (
    <Table striped bordered hover variant="light" className="container mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          { products.map((produit,indice) => (
              <tr key={indice}> 
              <td> 
              <Button variant="outline-primary" onClick={ () => clickMe(produit.name)}>click me</Button>
              </td>
              <td>
                <img src={produit.imgSrc} alt="" />

              </td>
              <td>{produit.name}</td>
              <td>{produit.price}</td>
            </tr> 
          ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
