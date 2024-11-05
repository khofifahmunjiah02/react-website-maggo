import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ProductQuantitySelector = () => {
  // State to track the quantity
  const [quantity, setQuantity] = useState(0);

  // Function to handle adding the first item (changes to quantity selector)
  const handleAdd = () => {
    setQuantity(1);
  };

  // Function to increment the quantity
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to decrement the quantity
  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      // If quantity is 1, reset to 0 to show the "Tambah" button again
      if (prevQuantity === 1) return 0;
      return prevQuantity - 1;
    });
  };

  return (
    <div className="text-center">
      {quantity === 0 ? (
        // Display "Tambah" button if quantity is 0
        <Button 
          variant="primary" 
          className="d-flex align-items-center justify-content-center"
          onClick={handleAdd}
        >
          Tambah
        </Button>
      ) : (
        // Display quantity selector if quantity is 1 or more
        <ButtonGroup>
          <Button variant="primary" onClick={handleDecrement}>-</Button>
          <span className="px-3 d-flex align-items-center">{quantity}</span>
          <Button variant="primary" onClick={handleIncrement}>+</Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default ProductQuantitySelector;
