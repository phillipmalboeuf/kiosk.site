import { payload } from '$lib/api'
import type { Collection, ContentPage, Product } from '$lib/payload-types'
import type { PageServerLoad, Actions } from './$types'

export const load: PageServerLoad = async ({ locals, url, params }) => {
  const [products, collections] = await Promise.all([
    payload<{ docs: Product[] }>(`/products?where[identifier][equals]=${params.id}&locale=${{
      'en.kioskberry.com': 'en'
    }[url.hostname] || 'fr'}`, {}, true),
    url.searchParams.has('collection') && payload<{ docs: Collection[] }>(`/collections?where[identifier][equals]=${url.searchParams.get('collection')}&depth=1&locale=${{
      'en.kioskberry.com': 'en'
    }[url.hostname] || 'fr'}`, {}, true)
  ])

  return {
    product: products.docs[0],
    collection: collections?.docs[0]
  }
}