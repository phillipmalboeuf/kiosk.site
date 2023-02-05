import type { PageServerLoad, Actions } from './$types'
import type { Customer, ContentPage, Signup } from '$lib/payload-types'
import { payload } from '$lib/api'
import { randomPassword } from '$lib/encryption'

export const load: PageServerLoad = async ({ locals, url, params }) => {
  const page = await payload<ContentPage>(`/content_pages/intro?locale=${{
    'en.kioskberry.com': 'en'
  }[url.hostname] || 'fr'}`)

  return {
    page
  }  
}

export const actions: Actions = {
  support: async ({ cookies, request }) => {
    const data = await request.formData()
    const email = data.get('email')
    const accepts_notices = data.get('accepts_notices')

    const today = new Date()
    const id = `${today.getFullYear()}_${today.getMonth()}_${randomPassword(3)}`
    // const password = randomPassword(6)

    const signup = await payload<Signup>('/signups', {
      method: 'post',
      body: JSON.stringify({
        email,
        id,
        accepts_notices
      })
    })

    return { signup }
  }
};