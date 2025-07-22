export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  ingredients: string[];
  detailedDescription: string;
  allergens?: string[];
}

export const menuData: Dish[] = [
  {
    id: '1',
    name: 'French Onion Soup',
    description: 'Traditional French onion soup with Gruyère cheese',
    price: '120,000 VND',
    image: 'https://images.pexels.com/photos/6287388/pexels-photo-6287388.jpeg',
    category: 'Appetizers',
    ingredients: ['Yellow onions', 'Beef broth', 'Gruyère cheese', 'French bread', 'Butter', 'Thyme'],
    detailedDescription: 'A classic French soup featuring caramelized onions in rich beef broth, topped with melted Gruyère cheese and crispy French bread croutons.',
    allergens: ['Dairy', 'Gluten']
  },
  {
    id: '2',
    name: 'Ribeye Beef Steak',
    description: 'Australian Ribeye beef steak cooked medium rare with green pepper sauce',
    price: '450,000 VND',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg',
    category: 'Main Courses',
    ingredients: ['250g Australian Ribeye beef', 'Green pepper sauce', 'Mashed potatoes', 'Butter', 'Milk', 'Salt', 'Pepper', 'Herbs'],
    detailedDescription: 'Premium Australian Ribeye beef, grilled to perfection medium rare to preserve its natural sweetness, served with flavorful green pepper sauce, creamy mashed potatoes, and steamed seasonal vegetables.',
    allergens: ['Dairy']
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh lettuce, Parmesan cheese, signature Caesar dressing',
    price: '150,000 VND',
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    category: 'Appetizers',
    ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Caesar dressing', 'Croutons', 'Anchovies', 'Garlic'],
    detailedDescription: 'Crisp romaine lettuce tossed with our signature Caesar dressing, topped with aged Parmesan cheese and house-made croutons.',
    allergens: ['Dairy', 'Fish', 'Gluten']
  },
  {
    id: '4',
    name: 'Apple Tart',
    description: 'Crispy baked apple tart served with vanilla ice cream',
    price: '90,000 VND',
    image: 'https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg',
    category: 'Desserts',
    ingredients: ['Fresh apples', 'Pastry dough', 'Vanilla ice cream', 'Cinnamon', 'Sugar', 'Butter'],
    detailedDescription: 'Traditional French apple tart with delicate pastry crust, sweet cinnamon-spiced apples, and a scoop of creamy vanilla ice cream.',
    allergens: ['Dairy', 'Gluten', 'Eggs']
  },
  {
    id: '5',
    name: 'Bordeaux Red Wine',
    description: 'A glass of premium French red wine',
    price: '180,000 VND',
    image: 'https://cafefcdn.com/2018/photo-1-1515122418414.jpg',
    category: 'Beverages',
    ingredients: ['Premium French red wine'],
    detailedDescription: 'A carefully selected Bordeaux red wine with rich, complex flavors and a smooth finish.',
    allergens: ['Sulfites']
  },
  {
    id: '6',
    name: 'Coq au Vin',
    description: 'A classic Italian pizza topped with rich tomato sauce, fresh mozzarella cheese, and fragrant basil leaves.',
    price: '580,000 VND',
    image: 'https://hoangviettravel.vn/wp-content/uploads/2020/02/cac-mon-an-chinh-cua-nguoi-chau-au-05-min.jpg',
    category: 'Graven',
    ingredients: ['Handmade pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil', 'Olive oil', 'Sea salt, black pepper'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  },
  {
    id: '7',
    name: 'Coq au Vin',
    description: 'Classic French chicken braised in red wine with mushrooms',
    price: '380,000 VND',
    image: 'https://static.wixstatic.com/media/d253bb_b0977af075e34f6386f1030ca3da2cdb~mv2.jpg/v1/fill/w_604,h_442,al_c,q_80,enc_avif,quality_auto/d253bb_b0977af075e34f6386f1030ca3da2cdb~mv2.jpg',
    category: 'Main Courses',
    ingredients: ['Chicken thighs', 'Red wine', 'Mushrooms', 'Pearl onions', 'Bacon', 'Herbs'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  },
  {
    id: '8',
    name: 'Pizza',
    description: 'Classic French chicken braised in red wine with mushrooms',
    price: '380,000 VND',
    image: 'https://i.pinimg.com/564x/77/35/dd/7735dd49ea9f5908da97618e43a4d510.jpg',
    category: 'Main Courses',
    ingredients: ['Chicken thighs', 'Red wine', 'Mushrooms', 'Pearl onions', 'Bacon', 'Herbs'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  },
  {
    id: '8',
    name: 'Pizza',
    description: 'Classic French chicken braised in red wine with mushrooms',
    price: '380,000 VND',
    image: 'https://storage.googleapis.com/onelife-public/blog.onelife.vn/2021/10/cach-lam-salad-rau-cu-kieu-y-mon-khai-vi-498328159658.jpg',
    category: 'Main Courses',
    ingredients: ['Chicken thighs', 'Red wine', 'Mushrooms', 'Pearl onions', 'Bacon', 'Herbs'],
    detailedDescription: 'Traditional French dish featuring tender chicken braised in red wine with aromatic herbs, mushrooms, and pearl onions.',
    allergens: ['Dairy']
  }
];

export const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Beverages'];