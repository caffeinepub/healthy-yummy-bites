import type { CartItem } from '@/contexts/CartContext';

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}

/**
 * Builds the plain-text order message in the exact required format.
 * No emojis, full item names, quantity format: "{number} x {Full Item Name}"
 */
export function buildOrderMessage(
  customer: CustomerInfo,
  items: CartItem[],
  totalPrice: number,
  paymentMethod: string = 'Cash on Delivery'
): string {
  const itemLines = items
    .map((item) => `${item.quantity} x ${item.name} - ₹${item.price * item.quantity}`)
    .join('\n');

  return [
    'New Order - Healthy Yummy Bites',
    '',
    'Customer Details',
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}`,
    '',
    'Order Items',
    itemLines,
    '',
    `Total Amount: ₹${totalPrice}`,
    `Payment Method: ${paymentMethod}`,
  ].join('\n');
}

/**
 * Returns a WhatsApp deep-link URL with the order message pre-filled.
 */
export function formatWhatsAppOrder(
  customer: CustomerInfo,
  items: CartItem[],
  totalPrice: number,
  paymentMethod: string = 'Cash on Delivery'
): string {
  const message = buildOrderMessage(customer, items, totalPrice, paymentMethod);
  return `https://wa.me/919023031429?text=${encodeURIComponent(message)}`;
}
