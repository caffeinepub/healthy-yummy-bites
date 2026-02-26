# Specification

## Summary
**Goal:** Fix the WhatsApp order message format to use full item names, correct quantity formatting, no emojis, and consistent structure across both the WhatsApp URL and the checkout modal copy-to-clipboard content.

**Planned changes:**
- Update `frontend/src/utils/whatsappOrder.ts` to generate messages with the exact structure: header `New Order - Healthy Yummy Bites`, `Customer Details` section, `Order Items` section with `{number} x {Full Item Name} - ₹{price}` format per line, and `Total Amount:` / `Payment Method:` at the bottom — no emojis anywhere.
- Ensure item names are always used exactly as defined in `menuData.ts` (never truncated or abbreviated) and quantity is always formatted as `{number} x` with spaces around the `x`.
- Update `frontend/src/components/CheckoutModal.tsx` so the copy-to-clipboard staff confirmation text matches the same corrected message format.

**User-visible outcome:** WhatsApp order messages and the checkout modal's copy-to-clipboard text will display clean, consistently formatted order summaries with full item names, proper quantity notation, and no emojis.
