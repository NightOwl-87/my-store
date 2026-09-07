import ProductCard from './ProductCard';

// 1. Added an 'image' property with placeholder URLs to each product
const products = [
  { 
    id: 1, 
    title: 'Wireless Headphones', 
    price: 99.99,
    image: 'https://digitalwalker.ph/cdn/shop/files/MAIN_1_1000x1000.jpg?v=1747290801'
  },
  { 
    id: 2, 
    title: 'Mechanical Keyboard', 
    price: 129.50,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChRQ0g0TN35HD5na8wNyP2ic360OSnk7NU6PEwVxrHG4N0pWxrrcU8yRf&s=10'
  },
  { 
    id: 3, 
    title: 'Gaming Mouse', 
    price: 59.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudExPFwkeJZYugsLwl5BLhyBwJG7675QK1lQ8rFO7s_aBZSEpex8SrEeC&s=10'
  }
];

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Tech Store</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            price={product.price}
            // 2. Pass the new image data down to the card
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}