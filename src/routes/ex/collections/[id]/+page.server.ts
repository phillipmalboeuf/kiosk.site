import { payload } from '$lib/api'
import type { Collection, ContentPage, Product } from '$lib/payload-types'
import type { PageServerLoad, Actions } from './$types'

export const load: PageServerLoad = async ({ locals, url, params }) => {
  const [collections] = await Promise.all([
    payload<{ docs: Collection[] }>(`/collections?where[identifier][equals]=${params.id}&locale=${{
      'en.kioskberry.com': 'en'
    }[url.hostname] || 'fr'}`, {}, true)
  ])

  return {
    collection: collections.docs[0]
  }
}