
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ProductQuantitySelector from './ProductQuantity';



const ProductBox = ({ image, name, stok, desc_title, description, price }) => (
  <div className="produk_bar">
    <div className="produk_bar_wrap d-flex flex-row mt-20">
      <div className="bar_img">
        <img src={image} alt={name} />
      </div>
      <div className="bar_text d-flex flex-column ">
        <h1 style={{fontSize: '32px', fontWeight:'bold'}}>
            {name}
        </h1>
        <p style={{fontSize:'18px', color:'#828282'}}>{stok}</p>
        <p className='mb-0' style={{fontSize:'18px'}}>{desc_title}</p>
        {description.map((desc, index) => (
          <p key={index} style={{fontSize:'18px', color:'#828282'}}>{desc}</p>
        ))}
        <div className="bar_text_harga d-flex flex-row align-items-center justify-content-end" style={{ gap: '10px' }}>
            <p className='mb-0' style={{fontSize: '24px',}}>{price}</p>
            <ProductQuantitySelector />
        </div>
      </div>
    </div>
  </div>
);

export default ProductBox;
