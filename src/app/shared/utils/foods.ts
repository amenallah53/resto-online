import { Food } from "../models/food";

export const foods: Food[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    thumbnailUrl: 'assets/pizza/PIZZA-MARGHERITA.jpg',
    imageUrls: [
      'assets/pizza/margeritta1.webp',
      'assets/pizza/margherita2.webp',
      'assets/pizza/PIZZA-MARGHERITA.jpg'
    ],
    description: 'A classic Italian pizza featuring a thin, crispy crust topped with fresh, juicy tomatoes, creamy mozzarella cheese, and fragrant basil leaves. Perfectly balanced flavors that capture the essence of traditional Neapolitan pizza, baked to golden perfection in a wood-fired oven.',
    rating: 4.7,
    category: 'Pizza',
    servingSize: '1 slice',
    price: 8.99,
    calories: 250,
    protein: 12,
    carbohydrates: 30,
    fats: 10
  },
  {
    id: '2',
    name: 'Cheeseburger',
    thumbnailUrl: 'assets/cheeseberger/cheeseberger1.jpg',
    imageUrls: ['assets/cheeseberger/cheeseberger.jpg'],
    description: 'A mouth-watering cheeseburger with a juicy, perfectly seasoned beef patty, melted cheddar cheese, crisp lettuce, ripe tomato slices, and our signature sauce, all sandwiched between a soft, toasted bun. A satisfying, indulgent burger that hits all the right flavors.',
    rating: 4.5,
    category: 'Burger',
    servingSize: '1 burger',
    price: 7.49,
    calories: 550,
    protein: 28,
    carbohydrates: 45,
    fats: 30
  },
  {
    id: '3',
    name: 'Caesar Salad',
    thumbnailUrl: 'assets/salad/cesar.jpg',
    imageUrls: ['assets/salad/cesar.jpg'],
    description: 'A refreshing Caesar salad made with crisp romaine lettuce, crunchy golden croutons, freshly grated Parmesan cheese, and tossed in a rich and creamy Caesar dressing. A perfect light meal or starter, bursting with flavor and texture.',
    rating: 4.2,
    category: 'Salad',
    servingSize: '1 bowl',
    price: 6.5,
    calories: 180,
    protein: 7,
    carbohydrates: 12,
    fats: 12
  },
  {
    id: '4',
    name: 'Spaghetti Carbonara',
    thumbnailUrl: 'assets/pasta/spaghetti-carbonara.avif',
    imageUrls: ['assets/pasta/spaghetti-carbonara.avif'],
    description: 'Classic Italian spaghetti carbonara with al dente pasta coated in a rich, creamy sauce made from eggs, Parmesan cheese, and pancetta. Garnished with freshly cracked black pepper, this dish is indulgent yet simple, a perfect balance of creamy, savory, and smoky flavors.',
    rating: 4.6,
    category: 'Pasta',
    servingSize: '1 plate',
    price: 9.99,
    calories: 450,
    protein: 18,
    carbohydrates: 60,
    fats: 20
  },
  {
    id: '5',
    name: 'Chocolate Cake',
    thumbnailUrl: 'assets/dessert/choco-cake1.jpg',
    imageUrls: ['assets/dessert/choco-cake1.jpg'],
    description: 'A rich, moist chocolate cake layered with decadent chocolate ganache and topped with a glossy chocolate glaze. Perfect for dessert lovers, each bite melts in your mouth and delivers a deep, luxurious chocolate flavor that satisfies any sweet craving.',
    rating: 4.8,
    category: 'Dessert',
    servingSize: '1 slice',
    price: 4.99,
    calories: 400,
    protein: 5,
    carbohydrates: 50,
    fats: 20
  },
];
