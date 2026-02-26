import { useState } from 'react';
import { X, User, Phone, MapPin, CreditCard, Copy, Check } from 'lucide-react';
import type { CustomerInfo } from '@/utils/whatsappOrder';
import { buildOrderMessage } from '@/utils/whatsappOrder';
import type { CartItem } from '@/contexts/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (info: CustomerInfo) => void;
  items: CartItem[];
  totalPrice: number;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
}

export default function CheckoutModal({ isOpen, onClose, onSubmit, items, totalPrice }: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submittedCustomer, setSubmittedCustomer] = useState<CustomerInfo | null>(null);

  if (!isOpen) return null;

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone.trim())) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!address.trim()) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const customer: CustomerInfo = {
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
    };
    setSubmittedCustomer(customer);
    setOrderPlaced(true);
    onSubmit(customer);
    // Reset form fields
    setName('');
    setPhone('');
    setAddress('');
    setErrors({});
  }

  function handleClose() {
    setErrors({});
    setOrderPlaced(false);
    setCopied(false);
    setSubmittedCustomer(null);
    onClose();
  }

  function handleCopyConfirmation() {
    if (!submittedCustomer) return;
    const message = buildOrderMessage(submittedCustomer, items, totalPrice);
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  // After order is placed, show the order confirmation with copy button
  if (orderPlaced && submittedCustomer) {
    const confirmationMessage = buildOrderMessage(submittedCustomer, items, totalPrice);

    return (
      <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal */}
        <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Order Sent!</h2>
              <p className="text-green-100 text-sm mt-0.5">WhatsApp opened with your order</p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="px-6 py-5 space-y-4">
            {/* Staff Note */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                Staff Note: Order Summary
              </p>
              <pre className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {confirmationMessage}
              </pre>
              <button
                onClick={handleCopyConfirmation}
                className={`mt-3 flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 active:scale-95
                  ${copied
                    ? 'bg-green-500 text-white'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Message
                  </>
                )}
              </button>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-glow hover:shadow-glow-lg hover:from-orange-600 hover:to-orange-700 active:scale-95 transition-all"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Checkout</h2>
            <p className="text-orange-100 text-sm mt-0.5">Fill in your delivery details</p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close checkout"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-orange-500" />
                Full Name
              </span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-base
                ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-orange-500" />
                Phone Number
              </span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-base
                ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-500" />
                Delivery Address
              </span>
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your full delivery address"
              rows={3}
              className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-base resize-none
                ${errors.address ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'}`}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          {/* Payment Method (read-only) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-orange-500" />
                Payment Method
              </span>
            </label>
            <div className="w-full px-4 py-3 rounded-xl border border-green-200 bg-green-50 flex items-center gap-2">
              <span className="text-green-600 text-lg">💵</span>
              <span className="text-green-700 font-semibold">Cash on Delivery</span>
              <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">Selected</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2 pb-1">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 py-3.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 active:scale-95 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-glow hover:shadow-glow-lg hover:from-orange-600 hover:to-orange-700 active:scale-95 transition-all"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
