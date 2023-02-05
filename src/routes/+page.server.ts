import type { PageServerLoad } from './$types'
import type { ContentPage } from '$lib/payload-types'
import { payload } from '$lib/api'

export const load: PageServerLoad = async ({ locals, url, params }) => {
  const page = await payload<ContentPage>(`/content_pages/intro?locale=${{
    'en.kioskberry.com': 'en'
  }[url.hostname] || 'fr'}`)

  return {
    page
  }  
}