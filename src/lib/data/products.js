export const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    featured: true
  },
  {
    id: '2', 
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    featured: true
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for better posture',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Accessories',
    featured: true
  },
  {
    id: '4',
    name: 'Coffee Mug',
    description: 'Premium ceramic coffee mug with thermal insulation',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1680337673561-531bca1cf5b7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home'
  },
  {
    id: '5',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    featured: true
  },
  {
    id: '6', 
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    featured: true
  },
  {
    id: '7',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand for better posture',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Accessories',
    featured: true
  },
  {
    id: '8',
    name: 'Coffee Mug',
    description: 'Premium ceramic coffee mug with thermal insulation',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1680337673561-531bca1cf5b7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home'
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductById = (id) => products.find(p => p.id === id);