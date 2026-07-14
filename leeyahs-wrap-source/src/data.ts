export function formatPrice(amount: number): string {
  return `₦${amount.toLocaleString('en-NG')}.00`
}

export interface FabricCategory {
  name: string
  color: string
  colorDark: string
  description: string
}

export const fabricCategories: FabricCategory[] = [
  { name: 'Chiffon Wraps', color: '#6E3868', colorDark: '#3D1F3B', description: 'Featherlight and breathable for warm days.' },
  { name: 'Crepe Hijabs', color: '#2B3A66', colorDark: '#1D2847', description: 'Structured drape that holds without pins.' },
  { name: 'Cotton Voile', color: '#C79A3F', colorDark: '#916F26', description: 'Soft everyday cotton for sensitive skin.' },
  { name: 'Pleated Textured', color: '#6E6B45', colorDark: '#4B4930', description: 'Ribbed pleats that stay put all day.' },
]

export interface Product {
  name: string
  color: string
  hex: string
  hexDark: string
  fabric: string
  price: number
}

export const newIn: Product[] = [
  { name: 'Chiffon Wrap', color: 'Plum', hex: '#6E3868', hexDark: '#3D1F3B', fabric: 'Chiffon', price: 12500 },
  { name: 'Crepe Hijab', color: 'Terracotta', hex: '#B5502F', hexDark: '#7E3520', fabric: 'Crepe', price: 14000 },
  { name: 'Chiffon Wrap', color: 'Sage', hex: '#7C8560', hexDark: '#565C41', fabric: 'Chiffon', price: 12500 },
  { name: 'Cotton Voile', color: 'Undyed Ivory', hex: '#E9E2D0', hexDark: '#BBAF93', fabric: 'Cotton', price: 9800 },
  { name: 'Crepe Hijab', color: 'Royal Blue', hex: '#243C9E', hexDark: '#182970', fabric: 'Crepe', price: 14000 },
  { name: 'Pleated Wrap', color: 'Blush Clay', hex: '#C99387', hexDark: '#9C6B60', fabric: 'Pleated', price: 16500 },
]

export interface ColorSwatchItem {
  name: string
  hex: string
}

export const jewelTones: ColorSwatchItem[] = [
  { name: 'Amethyst', hex: '#6E3868' },
  { name: 'Navy', hex: '#1B2A4A' },
  { name: 'Sapphire', hex: '#2C5F8A' },
  { name: 'Royal Blue', hex: '#243C9E' },
  { name: 'Baby Blue', hex: '#AFC6E0' },
  { name: 'Powder Blue', hex: '#6FA8C9' },
]

export const earthTones: ColorSwatchItem[] = [
  { name: 'Terracotta', hex: '#B5502F' },
  { name: 'Olive', hex: '#6E6B45' },
  { name: 'Coral', hex: '#C96448' },
  { name: 'Blush Clay', hex: '#C99387' },
  { name: 'Mustard', hex: '#C79A3F' },
  { name: 'Taupe', hex: '#9C8B77' },
]

export interface MarbleItem {
  name: string
  base: string
  veins: [string, string]
}

export const marbleEdit: MarbleItem[] = [
  { name: 'Rose Marble', base: '#EFE2DB', veins: ['#C6968B', '#9C6459'] },
  { name: 'Sage Marble', base: '#EBECE0', veins: ['#98A17F', '#66714F'] },
  { name: 'Grey Marble', base: '#EAE8E3', veins: ['#A6A39C', '#6C6A63'] },
  { name: 'Indigo Marble', base: '#E4E5EA', veins: ['#4C5D8F', '#2B3A66'] },
]

export interface Accessory {
  name: string
  detail: string
  price: number
}

export const accessories: Accessory[] = [
  { name: 'Crystal Hijab Pins', detail: 'Set of 3', price: 4500 },
  { name: 'Scarf Pin Wheel', detail: '40-pin wheel', price: 3200 },
  { name: 'Jersey Inner Cap', detail: 'One size, breathable', price: 2000 },
  { name: 'Satin-Lined Cap', detail: 'Protects your edges', price: 2500 },
]
