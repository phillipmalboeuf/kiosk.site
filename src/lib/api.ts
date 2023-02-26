import { error } from '@sveltejs/kit'
import { PUBLIC_API_URL, PUBLIC_EXAMPLE_URL } from '$env/static/public'
import { PAYLOAD_TOKEN, EXAMPLE_TOKEN } from '$env/static/private'

export async function payload<T>(path: string, options?: RequestInit, example?: boolean) {
  const data = await (await fetch(`${example ? PUBLIC_EXAMPLE_URL : PUBLIC_API_URL}${path}`, {
    ...options,
    headers: {
      'Authorization': `producers API-Key ${example ? EXAMPLE_TOKEN : PAYLOAD_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })).json()

  if (data.errors) {
    throw error(404, data.errors.map(e => e.message).join(' \n '))
  }

  return data as T
}