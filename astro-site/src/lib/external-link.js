/**
 * `target="_blank"` + `rel="noopener noreferrer"` for http(s) links only.
 * Skips same-site relative paths, hash-only, tel:, and mailto:.
 */
export function isExternalHref(href) {
  if (typeof href !== 'string') return false
  const t = href.trim()
  if (!t || t.startsWith('#') || t.startsWith('mailto:') || t.startsWith('tel:')) return false
  return t.startsWith('http://') || t.startsWith('https://')
}

/** Props to spread onto `<a>` for external URLs (empty object for internal / special schemes). */
export function externalLinkAttrs(href) {
  return isExternalHref(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}
}
