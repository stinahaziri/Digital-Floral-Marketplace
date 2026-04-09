export interface Product {
  id: number
  name: string
  cat: string
  shop: string
  price: number
  emoji: string
  badge: string | null
  rating: number
}

export const ALL_PRODUCTS: Product[] = [
  { id:1,  name:'Buketë Trëndafilash', cat:'lule',    shop:'Lule Prishtina', price:28.50, emoji:'🌹', badge:'Bestseller', rating:4.9 },
  { id:2,  name:'Orkide Elegante',     cat:'lule',    shop:'Flowers Tirana', price:45.00, emoji:'🌺', badge:'Premium',    rating:4.8 },
  { id:3,  name:'Buketë Dasme',        cat:'lule',    shop:'Nuse Florals',   price:120.00,emoji:'💐', badge:'Bestseller', rating:5.0 },
  { id:4,  name:'Lule Dielli',         cat:'lule',    shop:'Lule Gjakova',   price:18.00, emoji:'🌻', badge:null,         rating:4.7 },
  { id:5,  name:'Tulipanë Veriorë',    cat:'lule',    shop:'Lule Prizreni',  price:16.50, emoji:'🌷', badge:null,         rating:4.8 },
  { id:6,  name:'Zambak i Bardhë',     cat:'lule',    shop:'Flowers Tirana', price:32.00, emoji:'🌸', badge:'Premium',    rating:4.9 },
  { id:7,  name:'Mimoza Pranverore',   cat:'lule',    shop:'Lule Shkodra',   price:14.00, emoji:'🌼', badge:'E re',       rating:4.5 },
  { id:8,  name:'Bima Jade',           cat:'esencial',shop:'Green Home KS',  price:22.00, emoji:'🌿', badge:'E re',       rating:4.6 },
  { id:9,  name:'Vazo Qeramike Blu',   cat:'dekor',   shop:'Dekor Shtëpia',  price:34.00, emoji:'🏺', badge:'Premium',    rating:4.7 },
  { id:10, name:'Shportë Lulesh',      cat:'esencial',shop:'Lule Prishtina', price:48.00, emoji:'🧺', badge:'Bestseller', rating:4.9 },
  { id:11, name:'Dritare Dekori',      cat:'dekor',   shop:'Dekor Shtëpia',  price:26.00, emoji:'🕯️', badge:null,         rating:4.6 },
  { id:12, name:'Kaktus Miniaturë',    cat:'esencial',shop:'Green Home KS',  price:12.00, emoji:'🌵', badge:null,         rating:4.4 },
]
