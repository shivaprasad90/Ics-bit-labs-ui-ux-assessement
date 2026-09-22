/**
 * Client-side validation helpers
 */

export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
};

export const isValidPhoneOrWhatsApp = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  // Allow international formatting e.g. +91 8309582791 or 8309582791
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return /^\+?[0-9]{10,15}$/.test(cleaned);
};

export const isValidUrl = (url) => {
  if (!url) return true; // Optional URLs pass if empty
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

export const validateRequired = (val) => {
  if (val === null || val === undefined) return false;
  if (typeof val === 'string') return val.trim().length > 0;
  return true;
};

