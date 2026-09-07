import { useState } from 'react';

// 1. Add 'image' to the list of accepted props
export default function ProductCard({ title, price, image }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px', borderRadius: '8px' }}>
      
      {/* 2. Add the img tag. We set width to 100% so it fits perfectly inside the card */}
      <img 
        src={image} 
        alt={title} 
        style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} 
      />

      <h2 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{title}</h2>
      <p style={{ margin: '0 0 15px 0' }}>${price}</p>
      
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
}