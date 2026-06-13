// https://fakeapi.platzi.com/en/rest/products/

export interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    description: "Immersive sound with advanced active noise cancellation and 40-hour battery life.",
    price: 199.99,
    originalPrice: 249.99
  },
  {
    id: 2,
    name: "Ergonomic Mechanical Keyboard",
    description: "Hot-swappable switches with customizable RGB backlighting for ultimate comfort.",
    price: 129.99
  },
  {
    id: 3,
    name: "4K Ultra HD Smart Projector",
    description: "Bring the theater home with 3000 lumens, built-in streaming apps, and HDR10.",
    price: 549.99,
    originalPrice: 699.99
  },
  {
    id: 4,
    name: "Stainless Steel Smart Water Bottle",
    description: "Tracks your daily hydration goals and sanitizes water using built-in UV-C light.",
    price: 45.00
  },
  {
    id: 5,
    name: "Pro Gaming Mouse",
    description: "Ultra-lightweight design with a 26K DPI optical sensor and lag-free wireless connection.",
    price: 79.99,
    originalPrice: 99.99
  },
  {
    id: 6,
    name: "Minimalist Leather Wallet",
    description: "Slim RFID-blocking wallet crafted from premium full-grain leather.",
    price: 35.00
  },
  {
    id: 7,
    name: "Portable Power Bank (20,000mAh)",
    description: "High-capacity external battery with 65W USB-C Power Delivery for laptops and phones.",
    price: 49.99,
    originalPrice: 59.99
  },
  {
    id: 8,
    name: "Smart Fitness Watch",
    description: "Monitors heart rate, sleep cycles, and outdoor workouts with built-in GPS.",
    price: 150.00
  },
  {
    id: 9,
    name: "Dual-Channel Dash Cam",
    description: "Front and rear cameras featuring night vision and automatic incident detection.",
    price: 119.99,
    originalPrice: 149.99
  },
  {
    id: 10,
    name: "Electric Gooseneck Kettle",
    description: "Precision pour-over kettle with 1-degree temperature control and a hold-warm feature.",
    price: 85.00
  }
];
