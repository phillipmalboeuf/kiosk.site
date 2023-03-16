import { json } from '@sveltejs/kit';
import { payload } from '$lib/api'

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, params }) {
  const response = await payload('/'+params.route, {}, true)
  return json(response)
}