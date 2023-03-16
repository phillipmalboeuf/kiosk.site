import { browser } from '$app/environment'
import { writable, readable } from 'svelte/store'
import type { LayoutData } from '../routes/$types'
import type { Customer, Kiosk, Perk } from './payload-types'

let params = browser && new URLSearchParams(window.location.search)

export const content = writable<LayoutData["content"]>(undefined)

export let bar = writable<boolean>(false)
export let items = writable<({
  id: string
  product: string
  unit: string
  size: number
  quantity: number
} | {
  id: string
  bundle: string
  quantity: number
  products: {
    id: string
    product: string
    unit: string
    size: number
    quantity: number
  }[]
})[]>([])

export let interval = writable<string>('one-time')
export let kiosk = writable<Kiosk>()
export let perk = writable<string>(browser && params.get('perk'))

export let perks = readable<Perk[]>(undefined, set => {
  fetch(`/ex/api/perks?depth=0`).then(async response => {
    set((await response.json()).docs)
  })

  return () => undefined
})