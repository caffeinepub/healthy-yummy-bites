import { Coffee, Wine, Sandwich, Pizza, Salad, Beef } from 'lucide-react';

export interface MenuItem {
  name: string;
  price?: string;
  priceSmall?: string;
  priceLarge?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: any;
  emoji: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'shakes',
    name: 'Shakes',
    icon: Coffee,
    emoji: '🥤',
    items: [
      { name: 'Cold Coffee', price: '₹90' },
      { name: 'Vanilla', price: '₹100' },
      { name: 'Chocolate', price: '₹100' },
      { name: 'Strawberry', price: '₹100' },
      { name: 'Pineapple', price: '₹100' },
      { name: 'Banana', price: '₹100' },
      { name: 'Butterscotch', price: '₹100' },
      { name: 'Blueberry', price: '₹100' },
      { name: 'Black Currant', price: '₹100' },
      { name: 'Oreo Shake', price: '₹100' },
    ],
  },
  {
    id: 'mojito',
    name: 'Mojito',
    icon: Wine,
    emoji: '🧊',
    items: [
      { name: 'Mint', price: '₹60' },
      { name: 'Peach', price: '₹60' },
      { name: 'Watermelon', price: '₹60' },
      { name: 'Passion Fruit', price: '₹60' },
      { name: 'Green Apple', price: '₹60' },
      { name: 'Lime Soda', price: '₹40' },
      { name: 'Masala Soda', price: '₹40' },
    ],
  },
  {
    id: 'coffee',
    name: 'Coffee',
    icon: Coffee,
    emoji: '☕',
    items: [
      { name: 'Small', price: '₹30' },
      { name: 'Large', price: '₹50' },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    icon: Beef,
    emoji: '🍔',
    items: [
      { name: 'Veg Burger', price: '₹40' },
      { name: 'Macaroni Burger', price: '₹50' },
      { name: 'Spicy Cheese Burger', price: '₹80' },
      { name: 'HYB Veg Special Burger', price: '₹80' },
      { name: 'Spicy Chicken Burger', price: '₹80' },
      { name: 'HYB Special Chicken Burger', price: '₹90' },
    ],
  },
  {
    id: 'fries',
    name: 'French Fries',
    icon: Beef,
    emoji: '🍟',
    items: [
      { name: 'Classic Fries', price: '₹80' },
      { name: 'Peri Peri Fries', price: '₹100' },
    ],
  },
  {
    id: 'salad',
    name: 'Salad',
    icon: Salad,
    emoji: '🥗',
    items: [
      { name: 'Veg Salad', price: '₹80' },
      { name: 'Paneer Salad', price: '₹100' },
      { name: 'Chicken Salad', price: '₹120' },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    icon: Sandwich,
    emoji: '🌯',
    items: [
      { name: 'Aloo Tikki', price: '₹60' },
      { name: 'Paneer', price: '₹70' },
      { name: 'Chicken Patty', price: '₹80' },
      { name: 'Chicken Wrap', price: '₹100' },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    icon: Sandwich,
    emoji: '🥪',
    items: [
      { name: 'Cold', price: '₹60' },
      { name: 'Veg Grilled', price: '₹70' },
      { name: 'Paneer Tandoori', price: '₹80' },
      { name: 'Paneer Makhani', price: '₹80' },
      { name: 'Cheese Corn', price: '₹80' },
      { name: 'Chicken Tandoori', price: '₹80' },
      { name: 'Chicken Makhani', price: '₹80' },
      { name: 'Extra Cheese', price: '₹20' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: Pizza,
    emoji: '🍕',
    items: [
      { name: 'Onion', priceSmall: '₹90', priceLarge: '₹170' },
      { name: 'Margherita', priceSmall: '₹90', priceLarge: '₹170' },
      { name: 'Mix Veggies', priceSmall: '₹100', priceLarge: '₹180' },
      { name: 'Cheese Corn', priceSmall: '₹130', priceLarge: '₹200' },
      { name: 'Paneer', priceSmall: '₹150', priceLarge: '₹250' },
      { name: 'Veg Loaded', priceSmall: '₹170', priceLarge: '₹280' },
      { name: 'Chicken', priceSmall: '₹170', priceLarge: '₹280' },
    ],
  },
  {
    id: 'spring-roll',
    name: 'Spring Roll',
    icon: Sandwich,
    emoji: '🥢',
    items: [
      { name: '1 Piece', price: '₹20' },
      { name: '2 Piece', price: '₹40' },
    ],
  },
];
