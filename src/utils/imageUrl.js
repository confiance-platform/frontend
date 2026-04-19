// Resolve a (possibly relative) image URL to something <img> can load.
//
// Background: avatar URLs come from two sources:
//   1) Cloudinary — absolute "https://res.cloudinary.com/..." — use as-is
//   2) Local-fallback store — "/api/v1/files/local/<folder>/<id>.<ext>" — needs
//      the API host prepended (the frontend's own host doesn't proxy to the gateway).
// Anything empty / nullish returns null so callers can decide the placeholder.
import { API_BASE_URL } from '../config/constants';

function apiOrigin() {
  try {
    return new URL(API_BASE_URL, window.location.origin).origin;
  } catch {
    return window.location.origin;
  }
}

export function resolveImageUrl(url) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  const path = url.startsWith('/') ? url : `/${url}`;
  return apiOrigin() + path;
}

export default resolveImageUrl;
