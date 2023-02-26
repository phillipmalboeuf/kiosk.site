import { payload } from '$lib/api'
import type { ContentPage, Product } from '$lib/payload-types'
import type { PageServerLoad, Actions } from './$types'

export const load: PageServerLoad = async ({ locals, url, params }) => {
  const [pages] = await Promise.all([
    payload<{ docs: ContentPage[] }>(`/content_pages?where[identifier][equals]=intro&locale=${{
      'en.kioskberry.com': 'en'
    }[url.hostname] || 'fr'}`, {}, true)
  ])

  return {
    page: pages.docs[0]
  }
}