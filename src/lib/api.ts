import { error } from '@sveltejs/kit'
import { PUBLIC_API_URL } from '$env/static/public'
import { PAYLOAD_TOKEN } from '$env/static/private'

export async function payload<T>(path: string, options?: object) {
  const data = await (await fetch(`${PUBLIC_API_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `producers API-Key ${PAYLOAD_TOKEN}`,
    }
  })).json()

  if (data.errors) {
    throw error(404, data.errors.map(e => e.message).join(' \n '))
  }

  return data as T
}