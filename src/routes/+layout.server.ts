
 
/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals, url }) {
  const content = url.hostname === 'en.kioskberry.com'
    ? (await import("$lib/content/en.json")).default
    : (await import("$lib/content/fr.json")).default

  return {
    content
  }
}