import type { CartItem } from '@/contexts/CartContext';

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}

export function formatWhatsAppOrder(customer: CustomerInfo, items: CartItem[], totalPrice: number): string {
  const itemLines = items
    .map((item) => `  ${item.quantity} x ${item.name} - ₹${item.price * item.quantity}`)
    .join('\n');

  const message = `🍽️ *New Order from Healthy Yummy Bites!*

*Customer Details:*
👤 Name: ${customer.name}
📞 Phone: ${customer.phone}
📍 Address: ${customer.address}

*Order Items:*
${itemLines}

💰 *Total: ₹${totalPrice}*
💳 Payment: Cash on Delivery

_Thank you for ordering! We'll confirm shortly._`;

  return `https://wa.me/919023031429?text=${encodeURIComponent(message)}`;
}
