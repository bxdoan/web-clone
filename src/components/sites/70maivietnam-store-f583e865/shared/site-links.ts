const sourceOrigin = "https://70maivietnam.store";

/** Keep links from the source store inside this local clone. */
export function localizeSiteHref(href: string): string {
  try {
    const url = new URL(href, sourceOrigin);
    if (url.origin === sourceOrigin) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
  } catch {
    // Leave non-URL values such as mailto:, tel:, and fragment links untouched.
  }

  return href;
}
