import { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ProductQuantitySelector = ({ productId, price, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(1);
    onQuantityChange(productId, 1, price);
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(productId, 1, price);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity === 1) {
        onQuantityChange(productId, -1, price);
        return 0;
      } else {
        onQuantityChange(productId, -1, price);
        return prevQuantity - 1;
      }
    });
  };

  return (
    <div className="text-center">
      {quantity === 0 ? (
        <Button 
          variant="primary" 
          className="d-flex align-items-center justify-content-center"
          onClick={handleAdd}
        >
          Tambah
        </Button>
      ) : (
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
